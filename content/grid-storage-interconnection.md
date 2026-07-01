# Energy-Storage Interconnection

Interconnecting **battery energy storage** to the grid is meaningfully more complex than interconnecting a PV-only system. A solar array can only *export* power; a battery can both **absorb power from the grid (charge)** and **inject power (discharge)**, and it operates around the clock rather than only when the sun shines. That bidirectional, always-on behavior changes how utilities review the project, how the system is metered, and which standards and code sections apply.

This page explains how storage interconnection differs from PV-only, the role of **power control systems (NEC 705.13)**, the relevant **UL and IEEE standards**, **AC- vs. DC-coupled** topologies, **hybrid inverters**, **operating modes and metering**, utility review of bidirectional flow and **ride-through**, and a pointer to the standalone-storage **ITC**. See also [Battery Energy Storage](battery-storage.md), [IEEE 1547 & Smart Inverters](grid-ieee1547.md), [Anti-Islanding & Grid Protection](grid-protection.md), and [Grid Services, VPPs & Demand Response](grid-services-vpp.md).

## How Storage Interconnection Differs from PV-Only

| Aspect | PV-only | Energy storage (battery) |
|--------|---------|--------------------------|
| Power direction at PCC | Export only | **Bidirectional** (charge from grid or discharge to grid) |
| Availability | Daytime, weather-dependent | **24/7**, dispatchable |
| Utility concern | Voltage rise from export | Export *and* **charging demand**, reverse flow, peak coincidence |
| Worst-case loading | One direction | Must evaluate **both** directions on busbars/conductors |
| Operating modes | Generate when able | Self-supply, backup, time-shift, export, grid services |

Because a battery can draw a large charging load *and* export, the interconnection study and the electrical design must consider the **maximum power in both directions**, not just a single export number.

## Charging from Grid vs. Solar; Export vs. Non-Export

A central design and regulatory question is **where the battery's energy comes from** and **whether it can push power back to the grid**:

- **Solar-only charging** — the battery charges exclusively from the on-site PV (often required for certain tax treatment and for some utility programs). This typically needs controls or topology that prevent grid charging.
- **Grid-and-solar charging** — the battery may also charge from the grid (e.g., to arbitrage cheap off-peak energy), which the utility must evaluate as added demand.
- **Export (grid-interactive)** — the battery is permitted to discharge to the grid; this requires full bidirectional interconnection review.
- **Non-export** — the system is configured so it **never** sends power past the PCC. Non-export greatly simplifies utility review and is enforced by a **power control system**, relay, or a listed control scheme.

> Declaring a system **non-export** (or limited-export) is one of the most effective ways to streamline interconnection — but it must be enforced by listed, fail-safe controls that the utility accepts, not merely by settings or intent.

## Power Control Systems and NEC 705.13

Adding storage often risks overloading the existing service busbar or conductors when sources and loads combine. A **power control system (PCS)** dynamically manages the charge and discharge of storage and the output of other sources so that current on busbars, conductors, and overcurrent devices stays within safe limits — letting larger systems connect **without** a service upgrade.

- **NEC 705.13** governs power control systems. In the **2023 NEC**, the broader concept is handled as an **Energy Management System (EMS)** (with cross-reference to Article 750.30); a **listed PCS is recognized as a type of EMS**. The PCS must be listed/identified for power control and must prevent overload under all load and generation conditions.
- This is what lets installers exceed the traditional **120% busbar rule** by actively limiting combined current rather than relying on static breaker sizing.
- **UL 3141** is the product safety standard for power control systems.

> Always confirm which **NEC edition** your authority having jurisdiction (AHJ) has adopted — the 705.13 / 750.30 / EMS terminology and references differ between the 2020 and 2023 codes.

## Standards: UL 1741-SB and IEEE 1547 for Storage

The same grid-support and safety framework that governs PV inverters applies to storage inverters, with bidirectional considerations layered on:

| Standard | Role for storage |
|----------|------------------|
| **IEEE 1547-2018** | Interconnection requirements for DERs, including storage — voltage/frequency ride-through, anti-islanding, smart-inverter functions, DC injection, harmonics |
| **IEEE 1547.1-2020** | Conformance test procedures for IEEE 1547-2018 |
| **UL 1741 Supplement SB (UL 1741-SB)** | Certifies inverters (including storage and hybrid inverters) for the advanced grid-support functions of IEEE 1547-2018, validated via IEEE 1547.1 |
| **UL 9540 / 9540A** | Safety of the energy storage system as a whole / thermal-runaway fire-propagation test |
| **UL 3141** | Power control systems managing DER and storage output |

A storage inverter listed to **UL 1741-SB** supports the same Volt-VAR, Volt-Watt, frequency-Watt, and ride-through behaviors required of PV — applied in *both* charge and discharge. See [IEEE 1547 & Smart Inverters](grid-ieee1547.md).

## AC-Coupled vs. DC-Coupled Interconnection

The battery can be tied to the system on the **DC side** of the solar conversion or on the **AC side**, and this choice affects efficiency, retrofit ease, and metering.

```
DC-COUPLED (single hybrid inverter)            AC-COUPLED (separate inverters)
  PV array ─DC─┐                                 PV array ─DC─► [PV inverter] ─AC─┐
               ├─► [Hybrid inverter] ─AC─► grid                                  ├─► grid/loads
  Battery ─DC──┘   (one DC↔AC conversion          Battery ─DC─► [Battery inverter]┘
                    for PV→battery)                (PV→AC→battery: two conversions)
```

| | DC-coupled | AC-coupled |
|---|-----------|-----------|
| PV-to-battery efficiency | Higher (one conversion) | Lower (DC→AC→DC) |
| Best for | New solar-plus-storage builds | **Retrofits** onto existing PV |
| Inverter | One hybrid inverter | PV inverter + battery inverter |
| Solar-only charging | Easier to enforce on DC side | Requires controls/metering to verify |
| Flexibility / oversizing PV | Limited by inverter DC input | PV and battery sized independently |

## Hybrid Inverters

A **hybrid (multi-mode) inverter** combines PV inversion, battery charge/discharge, and often grid-forming backup in one unit. It can:

- Convert PV DC to AC for loads/export.
- Charge/discharge the battery (DC-coupled).
- **Island and form a backup grid** during outages (grid-forming) — see [Microgrids & Islanding](grid-microgrids.md).
- Manage operating modes and, with a PCS/EMS, enforce export and busbar limits.

Hybrid inverters are the most common heart of residential solar-plus-storage and simplify both wiring and interconnection paperwork by consolidating functions in one certified device.

## Metering & Operating Modes

Bidirectional flow requires **bidirectional (or net) metering**. Utilities often install metering that separately records import, export, and sometimes the battery's charge source, to enforce program rules (e.g., that an exported kWh originated from solar).

Common **operating modes** a storage system may run:

- **Self-consumption** — store excess PV, use it later to minimize import.
- **Backup / resilience** — reserve capacity that islands the home/site during outages.
- **Time-of-use / arbitrage** — charge when energy is cheap, discharge when expensive.
- **Demand-charge management** — discharge to shave peak demand.
- **Export / grid services** — sell energy or provide ancillary services (see [Grid Services, VPPs & Demand Response](grid-services-vpp.md)).

The chosen mode mix affects which charging source and export rights the utility must approve.

## Utility Review of Bidirectional Power & Ride-Through

Because storage flows both ways, the interconnection application must declare the **maximum charge** and **maximum discharge/export** power. Utility review focuses on:

- **Reverse power flow** and its effect on feeder voltage and protection coordination — see [Anti-Islanding & Grid Protection](grid-protection.md).
- **Charging demand** coincident with local peak load.
- **Export limits** — confirming non-export/limited-export controls or approving full export.
- **Ride-through** — per IEEE 1547-2018, the storage inverter must **remain connected and supportive** through defined voltage and frequency excursions (rather than nuisance-tripping), and must still **cease to energize** on a genuine island (anti-islanding) unless intentionally islanding behind an open interconnect device.

Limited-export or non-export configurations enforced by a listed PCS/EMS frequently allow a faster, lower-cost interconnection path.

## Standalone-Storage ITC Pointer

Under the **Inflation Reduction Act (IRA, 2022)**, **standalone energy storage** (minimum 5 kWh capacity) became eligible for the federal **Investment Tax Credit (ITC)** — previously the battery generally had to be charged predominantly by co-located solar to qualify. This decoupling lets batteries be financed and interconnected on their own merits.

> Tax credits, percentages, bonus adders, and eligibility evolve through IRS guidance and legislation. Treat this as a pointer only and **consult a qualified tax professional and current IRS rules** before relying on any credit.

## Sources & Further Reading

- [Get to Know Power Control Systems Through the NEC (Sustainable Energy Action Committee)](https://sustainableenergyaction.org/resources/get-to-know-power-control-systems-through-the-national-electrical-code/)
- [NEC 705.13 — Power Control Systems (UpCodes)](https://up.codes/s/power-control-systems)
- [UL 3141 and Power Control Systems Explained (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/ul-3141-and-power-control-systems-explained/)
- [Grid Compliance Roadmap: UL 1741 SB and IEEE 1547 (Aner)](https://www.anernstore.com/blogs/diy-solar-guides/grid-compliance-roadmap-ul1741sb-ieee1547)
- [U.S. Tax Credit Incentives for Standalone Energy Storage (Energy-Storage.News)](https://www.energy-storage.news/us-tax-credit-incentives-for-standalone-energy-storage-begin-new-era/)
- [Summary of Inflation Reduction Act Renewable-Energy Provisions (U.S. EPA)](https://www.epa.gov/green-power-markets/summary-inflation-reduction-act-provisions-related-renewable-energy)

---
*Disclaimer: This page is for general educational reference only; verify all standards, code editions, and tax provisions against current published editions, IRS guidance, and qualified engineering, legal, and authority-having-jurisdiction advice before design, installation, or financial decisions.*
