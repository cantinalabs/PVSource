# Commercial Microgrids & Resilience

A **microgrid** is a self-contained electrical system that can operate either connected to the utility grid or **islanded** — disconnected and running on its own generation and storage. For businesses and critical facilities, the value proposition is **resilience**: when the grid goes down, the microgrid keeps essential loads energized.

This matters most for facilities where an outage is dangerous or extremely costly: **hospitals and dialysis centers, data centers, refrigerated warehouses and grocery stores, water and wastewater plants, fire and police stations, emergency shelters, and telecom hubs**. A modern commercial microgrid typically combines **solar PV + battery storage + a backup generator** under an intelligent **microgrid controller** that orchestrates all three.

This is a commercial-side page. For the everyday economics of batteries, see [Commercial Storage & Demand-Charge Management](commercial-storage.md). For tax-exempt facilities (schools, municipalities, hospitals), see [Nonprofit, Municipal & School Solar](commercial-nonprofit-municipal.md).

## What a microgrid is (and isn't)

A standby generator alone is **backup power**, not a microgrid. A microgrid is defined by its **controller** and its ability to manage multiple distributed energy resources (DERs), seamlessly transition between grid-connected and islanded modes, and dispatch resources for both economics and resilience.

```
                          ┌─────────────────────────────────────────┐
                          │           UTILITY GRID                   │
                          └───────────────────┬─────────────────────┘
                                              │
                                   ┌──────────┴──────────┐
                                   │  Point of Common    │   <- Automatic Transfer
                                   │  Coupling (PCC) +   │      Switch / breaker
                                   │  islanding breaker  │      (opens to island)
                                   └──────────┬──────────┘
                                              │
        ┌──────────────┬────────────────┬────┴───────────┬───────────────┐
        │              │                │                │               │
   ┌────┴────┐   ┌─────┴─────┐   ┌──────┴──────┐  ┌──────┴──────┐  ┌─────┴──────┐
   │  Solar  │   │  Battery  │   │   Backup    │  │ MICROGRID   │  │  Critical  │
   │  PV +   │   │  storage  │   │  generator  │  │ CONTROLLER  │  │  load      │
   │ inverter│   │  (grid-   │   │ (diesel/NG) │  │ (2030.7)    │  │  panel     │
   │         │   │  forming) │   │             │  │             │  │ (priority) │
   └─────────┘   └───────────┘   └─────────────┘  └─────────────┘  └────────────┘
                                                                          │
                                                                  Non-critical loads
                                                                  shed first on island
```

## Islanding & automatic transfer

When the utility fails, the microgrid must **disconnect from the grid** (open the islanding breaker at the **point of common coupling**) and continue serving its own loads. Two capabilities make this work:

- **Automatic transfer switch (ATS) / islanding breaker** — detects the outage and isolates the microgrid in milliseconds to seconds, preventing dangerous **back-feed** onto utility lines (a safety requirement for utility crews).
- **Grid-forming inverters** — in grid-connected mode, inverters follow the grid's voltage and frequency (grid-following). To run islanded, at least one source must **form the grid** itself — establish voltage and frequency for everything else. Battery inverters with **grid-forming** capability fill this role; the generator can also anchor the island.

The goal for critical facilities is **seamless** or **make-before-break** transfer — battery grid-forming inverters pick up the load so fast that sensitive equipment never sees an interruption (unlike a generator-only setup, which has a 10–30 second crank-and-transfer gap).

## Critical-load prioritization

You rarely island the **entire** facility — that would require oversizing everything. Instead, wire essential circuits onto a **critical-load panel** (or use controller-managed load shedding) so the microgrid powers what matters and **sheds** the rest.

Tiered priority example:

| Tier | Examples | On island? |
|---|---|---|
| 1 — Life safety | Life support, refrigeration of medicine, emergency lighting, fire/security, server core | Always |
| 2 — Essential ops | Process equipment, key HVAC, communications | If capacity allows |
| 3 — Comfort / deferrable | General HVAC, non-critical plug loads, EV charging | Shed first |

The controller sheds Tier 3, then Tier 2, to keep Tier 1 alive as battery state-of-charge and generator fuel allow.

## Sizing for resilience vs. economics

There is a fundamental tension:

- **Economic sizing** optimizes for everyday value — shaving [demand charges](commercial-storage.md), shifting energy to cheap hours, arbitrage. This favors a **smaller battery** cycled daily.
- **Resilience sizing** optimizes for **ride-through** — enough energy to carry critical loads for a target duration. This favors a **larger battery** (or a generator for long outages).

The best designs serve both: a battery sized for daily economics, **plus** a generator for extended outages, with solar recharging the battery during multi-day events.

### Worked critical-load sizing example

A grocery store wants to ride through outages on its critical loads (refrigeration, lighting, registers, controls).

```
Step 1 — Critical load inventory
  Refrigeration compressors:        45 kW
  Lighting (LED, reduced):           8 kW
  Registers / IT / controls:         7 kW
  ----------------------------------------
  Critical load (continuous):       60 kW average

Step 2 — Target resilience duration (battery-only)
  Target ride-through:               4 hours
  Energy needed:    60 kW x 4 h  =  240 kWh

Step 3 — Apply usable depth-of-discharge and round trip losses
  Usable DoD assumption:             90%
  Battery nameplate needed:  240 / 0.90 = ~267 kWh
  Inverter power rating:     >= 60 kW continuous (size 75 kW for surge/headroom)

Step 4 — Extend with solar + generator for multi-day events
  Daytime: 100 kW PV array recharges battery and offsets load directly.
  Night / cloudy: 80 kW natural-gas generator anchors the island and
                  recharges the battery; fuel determines total duration.
```

Result: a ~**267 kWh battery + 75 kW grid-forming inverter** rides through a typical 4-hour outage on its own; adding **100 kW PV and an 80 kW generator** extends resilience to **multi-day** events while the daily-cycled battery still earns demand-charge savings.

> Always size off **measured** load data (interval meter / submetering), not nameplate sums — connected nameplate overstates real demand and inflates cost.

## Controllers & standards

The **microgrid controller** is the brain. Relevant standards:

| Standard | Scope |
|---|---|
| **IEEE 2030.7** | Specification of microgrid controllers — functional requirements, mode transitions, dispatch |
| **IEEE 2030.8** | Testing of microgrid controllers — how to verify 2030.7 functions |
| **IEEE 1547 / 1547.1** | Interconnection and interoperability of DERs with the grid; ride-through and trip settings |
| **UL 1741 (incl. SB)** | Safety certification for inverters/converters; **UL 1741 SB** aligns with IEEE 1547-2018 grid-support and ride-through |
| **UL 3001 / UL 9540** | Distributed energy / energy-storage system safety (battery systems) |
| **NEC Article 705 / 710** | Code for interconnected and stand-alone power systems |

**IEEE 2030.7** is central: it defines the microgrid control system at the point of interconnection and governs the **autonomous transition** between grid-connected and islanded modes. Inverters carrying **UL 1741 SB** certification meet the ride-through and communication requirements of **IEEE 1547-2018**, which utilities increasingly require for interconnection.

## Stacking value: demand charges & grid services

A microgrid sized for resilience shouldn't sit idle 99% of the time. Stack revenue/savings streams so the asset pays during "blue sky" operation:

- **Demand-charge management** — discharge the battery during monthly peaks (see [Commercial Storage & Demand-Charge Management](commercial-storage.md)).
- **Energy arbitrage / time-of-use shifting** — charge cheap, discharge expensive.
- **Demand response & grid services** — enroll capacity in utility/ISO programs (capacity, frequency regulation) for payments.
- **PV self-consumption** — offset retail energy with on-site solar.
- **Avoided outage cost** — the resilience value: spoiled inventory avoided, downtime avoided, lives protected. Quantify it (`$/hour of downtime`) even though it's not a cash stream.

Stacking these is what turns a backup system into a financially justifiable microgrid.

## Financing resilience

- **PPAs / Energy-as-a-Service (EaaS)** — a third party owns and operates the microgrid; the facility pays a service fee, avoiding upfront capital.
- **ESPCs** — savings-financed, common for public and institutional buildings.
- **ITC + storage** — standalone storage qualifies for the federal investment credit; **tax-exempt hospitals, schools, and municipalities** can monetize it via **Direct Pay** — see [Nonprofit, Municipal & School Solar](commercial-nonprofit-municipal.md).
- **Resilience grants** — FEMA BRIC/hazard-mitigation, state energy-office and utility resilience programs, and DOE funding often support microgrids at critical facilities.

## Sources & Further Reading

- Microgrid Knowledge — [IEEE Approves Standards for Microgrid Controllers (2030.7 / 2030.8)](https://www.microgridknowledge.com/infrastructure/controllers-amp-software/article/11430344/ieee-approves-second-of-two-industry-standards-for-microgrid-controllers)
- NREL — [IEEE 1547 and 2030 Standards for Distributed Energy Resources](https://docs.nrel.gov/docs/fy15osti/63157.pdf)
- Keentel Engineering — [IEEE 1547-2018 DER Interconnection Standards Explained](https://keentelengineering.com/ieee-1547-2018-der-interconnection-standards)
- Related: [Commercial Storage & Demand-Charge Management](commercial-storage.md) · [Nonprofit, Municipal & School Solar](commercial-nonprofit-municipal.md)

---
*This page is general educational information, not engineering or safety advice. Microgrid design, islanding, and interconnection must be performed by licensed engineers per local code and utility requirements.*
