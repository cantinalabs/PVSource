# Storage Sizing & Design

Sizing a battery is where the value stack from [Energy Storage Overview & Use Cases](stor-overview.md) turns into two hard numbers: **power (kW)** and **energy (kWh)**. Get either wrong and the system underperforms — too little power and it can't carry the load or shave the peak; too little energy and it runs out early. This page walks through sizing for each major use case (**backup**, **self-consumption**, **demand-charge management**, **arbitrage**), the specs that convert nameplate into deliverable capacity (**usable vs nameplate, DoD, C-rate, round-trip losses, autonomy days**), and full worked examples for a **residential** and a **commercial** system. It pairs with [Battery Chemistries Deep-Dive](stor-chemistries.md), [AC vs DC Coupling & Hybrid Inverters](stor-coupling.md), and [Battery Management Systems & Controls](stor-bms.md).

## Power vs Energy — Size Both

- **Power (kW)** — the largest instantaneous load or demand-shave the battery can support, set by the inverter/PCS and the battery's C-rate. Backup and peak-shaving are usually **power-limited**.
- **Energy (kWh)** — how long that power can be sustained (**duration**). Arbitrage, self-consumption, and long backup are usually **energy-limited**.
- **C-rate** — power expressed relative to capacity. `C-rate = power (kW) / usable energy (kWh)`. A 20 kWh battery at **0.5C** delivers 10 kW; at **1C**, 20 kW.

```
Power vs energy — the two-axis check
  Need: carry a 6 kW backup load for 5 hours.
    Power axis:  inverter/battery must deliver ≥ 6 kW  → sizes kW
    Energy axis: must supply 6 kW × 5 h = 30 kWh (before losses)
                                                    → sizes kWh
  Both must pass. A 40 kWh battery behind a 5 kW inverter FAILS
  the power axis even though it has plenty of energy.
```

## Usable vs Nameplate, DoD, and Losses

Nameplate never equals what you can deliver to a load. Three deratings stack:

- **Usable vs nameplate.** The BMS reserves headroom, so **usable kWh < nameplate kWh**. `Usable = Nameplate × DoD`.
- **Depth of Discharge (DoD).** The fraction of nameplate cycled routinely. LFP commonly allows **~80–100%**; lead-acid is typically limited to **~50%** to preserve life (see [Battery Chemistries Deep-Dive](stor-chemistries.md)).
- **Round-trip efficiency (RTE) losses.** Energy delivered to a load is less than energy stored. `Delivered ≈ Usable × RTE`. LFP is ~90–95% DC; full AC-system RTE is lower after inverter conversions and depends on coupling (see [AC vs DC Coupling & Hybrid Inverters](stor-coupling.md)).

```
Nameplate → deliverable energy (worked)
  Nameplate ......... 20.0 kWh
  × DoD (90%) ....... 18.0 kWh usable
  × RTE (90%) ....... 16.2 kWh actually delivered to loads
  Always size on DELIVERED energy for the use case.
```

> **Rule of thumb:** Size on **usable** capacity after DoD, then discount by **round-trip efficiency** for the energy you must actually deliver. Add margin for capacity **fade** over the warranty (often to ~70–80% end-of-life — see [BESS / Battery O&M & Augmentation](om-bess-augmentation.md)).

## Autonomy Days (Off-Grid / Resilience)

For off-grid or long-resilience designs, **autonomy days** is the number of days the battery must carry load with no charging (cloudy stretch). `Required usable kWh = daily load kWh × autonomy days`. Off-grid designs commonly target **1–3+ days** depending on climate and criticality. This is an *energy* sizing driver; the *power* axis is still set by peak simultaneous load.

## Sizing by Use Case

| Use case | Sizes power (kW) by… | Sizes energy (kWh) by… | Dominant axis |
|---|---|---|---|
| **Backup / resilience** | Peak simultaneous critical load | Load × backup hours (or autonomy days) | Both; often power-limited on motor starts |
| **Self-consumption** | Evening load peak | Daily solar surplus to shift | Energy |
| **Demand-charge mgmt** | Depth of the kW peak to shave | Duration of the peak(s) to sustain the shave | Both |
| **TOU arbitrage** | Discharge rate wanted in peak window | Energy to move per day across the price spread | Energy |

### Backup

Size **power** to the largest set of loads that may run at once (watch **motor/inrush** — HVAC, well pumps, refrigeration). Size **energy** to `critical load × required hours`, then divide by DoD and RTE. Decide **partial-home vs whole-home** (see [AC vs DC Coupling & Hybrid Inverters](stor-coupling.md)); partial-home lowers both kW and kWh needs.

### Self-consumption

Size **energy** to the **daily solar surplus** you want to move from midday into the evening — roughly `min(evening load, midday export)`. Oversizing beyond the daily surplus wastes capacity; undersizing spills surplus to a low-value export.

### Demand-charge management

Size **power** to the **shave depth** (existing peak kW − target kW). Size **energy** to sustain that shave through the **full duration** of the peak(s), validated against a **year of interval data** — a single missed peak (or a ratcheted tariff) can erase a month's or a year's savings. See [Battery Energy Storage](battery-storage.md) for the demand-charge example.

### TOU arbitrage

Size **energy** to the kWh you can profitably move across the **price spread** each day, and **power** to discharge it within the peak window. The trade only wins if the spread beats round-trip losses **plus** the amortized cost of the cycle (see [Energy Storage Overview & Use Cases](stor-overview.md)).

## Worked Example — Residential Backup + Self-Consumption

**Goal:** back up a critical subpanel and shift evening solar surplus.

```
RESIDENTIAL SIZING
Step 1 — Backup power (kW)
  Critical loads that may run at once:
    Fridge ....... 0.2 kW (running; ~1.2 kW start surge)
    Lights/plugs . 0.5 kW
    Wi-Fi/router . 0.1 kW
    Furnace fan .. 0.5 kW (blower)
    Well pump .... 1.0 kW (running; ~3 kW start surge)
  Simultaneous running load ≈ 2.3 kW
  Peak surge (pump start) ≈ ~3+ kW momentary
  → Inverter continuous ≥ 3 kW, surge headroom for pump start.

Step 2 — Backup energy (kWh)
  Critical daily energy over a 12-h outage overnight:
    ~2.3 kW avg × (duty ~40%) ≈ ~0.9 kW average draw
    0.9 kW × 12 h ≈ ~11 kWh delivered needed
  Add DoD + RTE:
    Usable needed = 11 / 0.90 (RTE) ≈ 12.2 kWh delivered basis
    Nameplate = 12.2 / 0.90 (DoD) ≈ ~13.6 kWh

Step 3 — Self-consumption overlay
  Daily evening surplus to shift ≈ 8–10 kWh
  Backup sizing (~13–14 kWh) already covers this comfortably.

RESULT: ~13.5 kWh usable LFP behind a ~5 kW multimode inverter
        (≈0.37C) covers both jobs with pump-start headroom.
```

*Numbers are illustrative; use the home's actual critical-load list and interval data.*

## Worked Example — Commercial Demand-Charge Shave

**Goal:** shave a facility's monthly demand peak.

```
COMMERCIAL SIZING
Given (from a year of interval data):
  Uncontrolled monthly peak ...... 500 kW
  Target peak after shave ........ 400 kW
  Peak event duration (worst) .... 2.0 hours sustained above 400 kW
  Demand charge .................. $20 / kW-month
  Chemistry ...................... LFP, 90% DoD, ~90% AC RTE

Step 1 — Power (kW): shave depth
  Shave = 500 − 400 = 100 kW  → battery/inverter ≥ 100 kW

Step 2 — Energy (kWh): sustain the shave
  Delivered energy = 100 kW × 2.0 h = 200 kWh (to the load)
  ÷ RTE (0.90) ..... 222 kWh usable draw basis
  ÷ DoD (0.90) ..... ~247 kWh nameplate
  Add fade margin (design to ~80% EoL): 247 / 0.80 ≈ ~309 kWh
  → Specify ≈ 300+ kWh nameplate, 100 kW PCS (~0.33C at nameplate)

Step 3 — Validate against ALL peaks in the year
  Confirm no peak exceeds 400 kW for longer than the battery can
  sustain 100 kW; check tariff RATCHETS (a missed month can reset
  the billing peak for up to a year).

Savings (demand only):
  100 kW × $20/kW-mo × 12 ≈ $24,000 / year
  (before TOU arbitrage, incentives, or the ITC)
```

> **Reminder:** A demand-shave battery must beat **every** qualifying peak in a full year of interval data, including rare extremes. Layer TOU arbitrage and the standalone-storage ITC (see [Energy Storage Overview & Use Cases](stor-overview.md)) on top to improve returns.

## Design Checklist

- [ ] Peak simultaneous **power (kW)**, including motor/inrush surge.
- [ ] Required **energy (kWh)** for the use case, using **delivered** basis.
- [ ] Apply **DoD** and **RTE** deratings; add **capacity-fade** margin.
- [ ] Pick **C-rate** so the battery can deliver the needed kW at the needed kWh.
- [ ] Choose **coupling** (AC retrofit vs DC new-build) — [AC vs DC Coupling](stor-coupling.md).
- [ ] Confirm **backup scope** (partial vs whole-home) and islanding wiring.
- [ ] Validate commercial shaves against a **year of interval data** and tariff **ratchets**.
- [ ] Confirm **safety/siting** (UL 9540 / NFPA 855) and **interconnection** limits.

## Related Pages

- [Battery Energy Storage](battery-storage.md) · [Energy Storage Overview & Use Cases](stor-overview.md)
- [Battery Chemistries Deep-Dive](stor-chemistries.md) — DoD and RTE by chemistry
- [Battery Management Systems & Controls](stor-bms.md) — usable capacity and reserves
- [AC vs DC Coupling & Hybrid Inverters](stor-coupling.md) — architecture and efficiency
- [Storage Safety, Codes & Standards](stor-safety.md) · [Energy-Storage Interconnection](grid-storage-interconnection.md)
- [BESS / Battery O&M & Augmentation](om-bess-augmentation.md) — sizing for capacity fade

## Sources & Further Reading

- [NextG Power — Understanding C-Rates and Depth of Discharge](https://nextgpower.com/understanding-c-rates-and-depth-of-discharge-a-buyers-guide-to-ci-battery-specs/)
- [Battery University — BU-402: What Is C-rate?](https://www.batteryuniversity.com/article/bu-402-what-is-c-rate/)
- [WATTMORE — Peak Shaving with Battery Storage](https://www.wattmore.com/blog/peak-shaving-battery-storage-how-it-works)
- [EnergySage — AC vs DC Coupled Solar Storage](https://www.energysage.com/energy-storage/ac-vs-dc-coupled-solar-storage-what-you-need-to-know/)

*This page is general educational information, not engineering, legal, tax, or financial advice; loads, tariffs, battery specifications, and codes vary by site and change — validate every sizing assumption against actual interval data, manufacturer datasheets, and current codes (UL 9540 / NFPA 855) with your utility, AHJ, and licensed professionals.*
