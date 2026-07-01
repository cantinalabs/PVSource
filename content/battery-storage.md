# Battery Energy Storage

Battery energy storage transforms a PV system from a pure generator into a dispatchable resource — shifting energy in time, providing backup, and shaping a building's grid interaction. This page covers why storage is added, the chemistries in use, the specs that define a battery, coupling architectures, control systems, sizing logic, and the safety standards governing deployment as of 2025–2026. Concepts apply to both **residential** and **commercial** systems; sizing examples are given separately for each.

## Why Add Storage

| Driver | What it does | Most relevant to |
|---|---|---|
| **Backup power** | Keeps critical loads running during grid outages | Residential & commercial |
| **Self-consumption** | Stores midday solar surplus for evening use | Residential (esp. where export credit is low) |
| **TOU arbitrage** | Charges off-peak/solar, discharges at peak rates | Residential & commercial |
| **Demand-charge reduction** | Shaves peak kW to cut demand charges | Commercial (primary driver) |
| **Grid services** | Frequency regulation, capacity, VPP programs | Commercial / utility; growing residential VPP |

> **Key takeaway:** The dominant economic driver differs by sector. For most **residential** systems it is backup and self-consumption; for most **commercial** systems it is **demand-charge reduction** and TOU arbitrage, because demand charges can be a large share of a commercial bill.

## Battery Chemistries

As of 2025–2026, **LFP (LiFePO4)** dominates new stationary storage — over 80% of residential and commercial battery shipments — having displaced NMC in most fixed installations on safety, cost, and cycle-life grounds. NMC retains an edge in energy density (more relevant to mobility than to stationary storage). Lead-acid persists in budget and off-grid niches; flow batteries serve long-duration commercial/utility applications.

| Chemistry | Energy density | Cycle life (to ~80%) | Round-trip efficiency | Safety / thermal | Cost | Typical use |
|---|---|---|---|---|---|---|
| **Li-ion LFP (LiFePO4)** | Moderate | ~4,000–10,000 | ~90–95% | Very stable; high thermal-runaway threshold | Low (≈$80/kWh cell, 2025) | Dominant for residential & commercial storage |
| **Li-ion NMC** | High | ~3,000–5,000 | ~90–95% | Lower thermal-runaway threshold than LFP | Higher (≈$128/kWh cell, 2025) | Space-constrained; legacy home units |
| **Lead-acid (FLA/AGM)** | Low | ~500–1,500 | ~80–85% | Mature; vents hydrogen (FLA) | Low upfront, high lifetime $/kWh | Off-grid, small backup |
| **Flow (e.g., vanadium)** | Low (bulky) | Very high (~10,000–20,000) | ~65–80% | Non-flammable electrolyte | High upfront | Long-duration commercial/utility |

> **Rule of thumb:** For most fixed solar storage today, **LFP** is the default choice — lower fire risk, deeper usable discharge, and 2–3× the cycle life of NMC, at lower cost per kWh.

## Key Specifications

- **Nameplate (rated) kWh vs Usable kWh** — Nameplate is total stored energy; **usable** is what the system will actually deliver after the BMS reserves headroom. Always size on **usable** capacity.
- **Depth of Discharge (DoD)** — the percentage of nameplate the battery is allowed to use. LFP commonly permits **80–100%** DoD; lead-acid is typically limited to ~50% to preserve life.
- **Round-Trip Efficiency (RTE)** — energy out ÷ energy in over a full charge/discharge cycle. LFP/NMC ~90–95% at the DC level; full AC-coupled system RTE is lower after inverter losses.
- **C-rate (power)** — charge/discharge rate relative to capacity. A 10 kWh battery at **0.5C** delivers 5 kW; at **1C**, 10 kW. Power rating (kW) and energy rating (kWh) are independent and both matter.
- **Cycle life** — number of full cycles before capacity falls to a stated threshold (often 70–80%). Higher DoD and temperature shorten it.
- **Warranty** — usually stated in **years, cycles/throughput (MWh), and an end-of-life capacity** (e.g., "10 years or X MWh, ≥70% capacity"). Read all three; the binding limit varies by use case.

```
Power vs energy (worked example):
  Battery: 13.5 kWh usable, 5 kW continuous (≈0.37C)
  - Run a 4 kW load for backup?  Yes — within the 5 kW power limit.
  - Run a 7 kW load?             No — exceeds power rating, even
                                  though plenty of energy remains.
  Runtime at 4 kW ≈ 13.5 kWh / 4 kW ≈ 3.4 hours (before losses).
```

## AC-Coupled vs DC-Coupled

| Aspect | AC-coupled | DC-coupled |
|---|---|---|
| **Battery connects via** | Its own battery inverter; PV via PV inverter | Shared hybrid inverter on the DC bus |
| **Conversion steps to store solar** | PV DC→AC then AC→DC (two extra) | PV DC→battery DC (fewer) |
| **Efficiency storing solar** | Lower (extra conversions) | Higher (saves ~3–6% RTE) |
| **Retrofit to existing PV** | Easy — add at AC side | Harder — usually needs a new hybrid inverter |
| **Charge from grid** | Straightforward | Possible, inverter-dependent |
| **Best for** | Adding storage to existing arrays | New PV-plus-storage builds |

### Hybrid Inverters

A **hybrid inverter** combines the PV string inverter and the battery inverter in one unit with a shared DC bus, enabling efficient DC-coupling, grid charging, and a managed backup port. Hybrids are the typical heart of a new **DC-coupled** residential or small commercial system.

## Battery Management System (BMS)

The **BMS** is the battery's safety and control brain. It performs:
- **Cell monitoring and balancing** — keeps cells at matched voltage/state-of-charge.
- **Protection** — disconnects on over/under-voltage, over-current, and over/under-temperature.
- **State estimation** — calculates state of charge (SoC) and state of health (SoH).
- **Communication** — reports to the inverter/gateway and enforces charge/discharge limits.

A robust BMS is the first line of defense against the conditions that lead to **thermal runaway**.

## Sizing Logic

Size by the goal. The three goals demand different capacity and power.

### Backup Sizing
Identify **critical loads** (refrigerator, lights, internet, well pump, medical) and their daily energy and peak power. Size **energy (kWh)** for desired runtime and **power (kW)** for the largest simultaneous load (watch motor surge on pumps/AC).

### Self-Consumption Sizing
Capture the **daily solar surplus** so it can be used in the evening. Target roughly the typical evening/overnight load that PV would otherwise not cover — oversizing beyond daily surplus yields little benefit.

### Arbitrage / Demand-Charge Sizing
For **arbitrage**, size energy to the daily peak-period consumption you want to shift. For **demand-charge reduction (commercial)**, size **power (kW)** to shave the peak demand interval and **energy (kWh)** to sustain that shave through the peak window.

```
RESIDENTIAL sizing example — backup + self-consumption:
  Critical loads:
    Fridge ............ 1.5 kWh/day,  0.8 kW peak
    Lights/plugs ...... 2.0 kWh/day,  1.0 kW
    Internet/router ... 0.3 kWh/day,  0.1 kW
    Well pump ......... 1.2 kWh/day,  1.5 kW running (~3 kW surge)
  Daily critical energy  ≈ 5.0 kWh
  Largest simultaneous   ≈ 3–4 kW (with pump surge)
  Choose: ~13.5 kWh usable / 5 kW continuous LFP unit
    -> ~2 days of critical loads, and 5 kW covers the surge.
```

```
COMMERCIAL sizing example — demand-charge reduction:
  Demand charge ........ $18 /kW-month
  Facility peak ........ 220 kW (a 2-hour afternoon spike)
  Target shave ......... 50 kW off the monthly peak
  Power needed ......... 50 kW (battery continuous rating)
  Energy needed ........ 50 kW × 2 h = 100 kWh (+ headroom) -> ~120 kWh usable
  Monthly saving ....... 50 kW × $18 = $900 /month (when peak is reliably shaved)
  Note: real demand-charge savings depend on coincident peaks and
        controls reliably predicting/shaving the peak interval.
```

> **Warning:** Demand-charge savings are realized only if the peak is *actually* shaved during the billing demand interval. A single missed peak can erase the month's benefit, so commercial systems rely on accurate forecasting and dispatch controls.

## Safety and Standards (as of 2025–2026)

- **UL 9540** — *Standard for Energy Storage Systems and Equipment.* The system-level listing covering the integrated ESS (battery, inverter, controls, protection). NFPA 855 requires UL 9540 listing for systems above set thresholds.
- **UL 9540A** — *Test Method for Evaluating Thermal Runaway Fire Propagation in BESS.* Not a pass/fail listing but a fire-propagation test whose data informs installation spacing, separation, and fire-protection requirements. UL released the **5th Edition on March 12, 2025** — the most significant revision to date, reflecting new chemistries and residential/rooftop growth.
- **UL 1973** — component-level standard for the batteries used within an ESS.
- **NFPA 855** — *Standard for the Installation of Stationary Energy Storage Systems.* Governs installation: maximum stored energy per unit/room, **setbacks and separation** between units, **ventilation**, fire detection/suppression, and signage. It generally requires lithium systems above **20 kWh** to be UL 9540 listed and references UL 9540A for large-scale fire testing.

**Thermal runaway** is the self-sustaining exothermic failure of a cell that can cascade to neighbors, producing heat, flammable gas, and fire. Mitigations: choose LFP (higher runaway threshold than NMC), a robust BMS, proper spacing and ventilation, listed equipment, and adherence to NFPA 855 setbacks and any required suppression.

> **Warning:** Indoor and garage installations have specific siting rules — distance from doors/windows/egress, separation between units, and energy caps per room. These are enforced by the **locally adopted edition** of NFPA 855 and the fire code; always confirm with the AHJ (Authority Having Jurisdiction).

## Residential vs Commercial Deployment

| Aspect | Residential | Commercial |
|---|---|---|
| **Typical size** | ~5–40 kWh, 3–10 kW | ~50 kWh to multi-MWh, tens–hundreds of kW |
| **Primary value** | Backup, self-consumption | Demand-charge reduction, TOU, grid services |
| **Chemistry** | Almost all LFP | Predominantly LFP; flow for long-duration |
| **Architecture** | Wall-mount hybrid or AC-coupled units | Rack/enclosure/container systems |
| **Controls** | App + simple backup logic | EMS with forecasting, dispatch optimization, demand mgmt |
| **Code focus** | Garage/exterior siting, 20 kWh thresholds | Dedicated rooms, suppression, larger-scale 9540A data, fire-service access |

## Sources & Further Reading

- [UL Solutions — UL 9540A Test Method](https://www.ul.com/services/ul-9540a-test-method)
- [UL Solutions — Energy Storage System Testing and Certification](https://www.ul.com/services/energy-storage-system-testing-and-certification)
- [NFPA 855 — Stationary Energy Storage Systems](https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=855)
- [American Clean Power — NFPA 855: Improving Energy Storage System Safety](https://cleanpower.org/)
- [EnergySage — Solar Batteries and Storage](https://www.energysage.com/energy-storage/)
- [NREL — Energy Storage Research](https://www.nrel.gov/storage/)

---
*Educational and reference use only — not engineering advice. Chemistries, costs, standards, and code thresholds change and vary by jurisdiction; verify against current manufacturer datasheets, the adopted editions of NFPA 855 / UL 9540 / UL 9540A, your AHJ, and licensed professionals before design or installation.*
