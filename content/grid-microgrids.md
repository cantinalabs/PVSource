# Microgrids & Islanding

A **microgrid** is a localized group of electricity sources and loads, bounded by a clearly defined electrical boundary, that can operate either connected to the main utility grid or **disconnected and self-sustaining (islanded)**. Microgrids are the architectural bridge between distributed solar/storage and true energy resilience: they let a home, campus, or community keep the lights on when the wider grid goes down.

This page explains the two operating modes, the critical distinction between **intentional islanding** and **anti-islanding**, why **grid-forming inverters** are the enabling technology, and how to size and standardize a microgrid. See also [Anti-Islanding & Grid Protection](grid-protection.md), [IEEE 1547 & Smart Inverters](grid-ieee1547.md), [Grid Services, VPPs & Demand Response](grid-services-vpp.md), and [Battery Energy Storage](battery-storage.md).

## What a Microgrid Is

A microgrid combines three elements behind a single **point of common coupling (PCC)** to the utility:

- **Distributed energy resources (DERs)** — PV arrays, batteries, fuel cells, generators, CHP.
- **Loads** — the building or campus electrical loads served.
- **A control system** — a microgrid controller that coordinates DERs and the connection to the grid.

The defining feature is the ability to operate in **two modes**:

| Mode | PCC state | Voltage & frequency reference | Power balance |
|------|-----------|-------------------------------|---------------|
| **Grid-connected** | Closed (synchronized to utility) | Set by the bulk grid | Grid absorbs/supplies any imbalance |
| **Islanded** | Open (isolated) | Set by an internal grid-forming source | Local generation must match local load instant-by-instant |

> A microgrid is not merely a backup generator. The distinguishing capability is **seamless, controlled transition** between modes and the ability to run indefinitely as a self-balancing island.

## Intentional Islanding vs. Anti-Islanding

These two terms sound opposed, and in a sense they are — they apply to different equipment boundaries.

- **Anti-islanding** is a *safety* function required of grid-tied inverters by [IEEE 1547](grid-ieee1547.md). An ordinary interactive inverter must detect a utility outage and **cease to energize** the line within roughly two seconds, so it cannot back-feed a "dead" utility circuit and endanger line workers. See [Anti-Islanding & Grid Protection](grid-protection.md).
- **Intentional islanding** is the *designed, sanctioned* creation of an island. The microgrid physically **opens an island-interconnect device** (a transfer switch or breaker at the PCC) to separate from the utility. Because the microgrid is now electrically isolated, there is no back-feed hazard, and an internal source is permitted — and required — to energize the local network.

```
   Anti-islanding (prohibited backfeed)        Intentional islanding (sanctioned)
   ┌──────────┐        ┌──────────┐            ┌──────────┐   OPEN   ┌──────────┐
   │ Utility  │── X ──>│ Inverter │            │ Utility  │── /  ───>│ Microgrid│
   │ (down)   │        │ trips off│            │ (down)   │  switch  │ runs on  │
   └──────────┘        └──────────┘            └──────────┘  isolates│ own GFM  │
   Inverter MUST stop energizing line.         Island device opens FIRST, then
                                               internal grid-forming source energizes.
```

The key sequencing rule: the island must **disconnect before** an internal source forms a grid. The interconnect device's open status is what makes intentional islanding safe and compliant.

## Grid-Forming vs. Grid-Following Inverters

The single most important technical concept for islanding is the difference between these two inverter control philosophies.

| Attribute | Grid-following (GFL) | Grid-forming (GFM) |
|-----------|---------------------|--------------------|
| Behaves as | Controlled **current** source | Controlled **voltage** source |
| Needs an existing grid? | **Yes** — locks to grid V & f via a phase-locked loop (PLL) | **No** — establishes its own V & f reference |
| Can energize a dead network? | No | **Yes** |
| Black-start capable? | No | **Yes** |
| Role in an island | Can only follow once a grid exists | Can **be** the grid |

A **grid-following** inverter measures the grid's voltage and frequency through a **PLL** and injects current in a controlled phase relationship. Remove the grid and it has nothing to lock onto — it shuts down. This is exactly what ordinary anti-islanding behavior requires.

A **grid-forming** inverter instead actively **sets** the voltage magnitude and frequency (e.g., holds 240 V / 60 Hz) and lets current flow as loads demand. It does not need an external reference, so it can:

- **Form an island** — provide the stiff voltage/frequency backbone that every grid-following DER and every load needs.
- **Black start** — bring up a de-energized network from a fully dark state, setting 60 Hz and terminal voltage before any load connects, then holding that reference as loads come online.
- **Stabilize** high-DER networks by providing synthetic inertia and fast voltage support.

> Practical rule: **An island needs at least one grid-forming source.** Grid-following PV inverters and batteries can contribute energy inside the island, but only after a grid-forming device (usually a battery inverter) has established the voltage and frequency they follow.

Industry specification work — including the U.S. Department of Energy's *Specifications for Grid-forming Inverter-based Resources* and the interconnection requirements in **IEEE 2800-2022** for transmission-connected inverter-based resources — is formalizing GFM behavior, including black-start and system-recovery support where applicable.

## Microgrid Controllers, Transfer & Resynchronization

The **microgrid controller** is the brain that orchestrates all of this. Per **IEEE 2030.7-2017** (specification) and **IEEE 2030.8-2018** (testing), its core control functions are common to all microgrids regardless of topology:

- **Dispatch & energy management** — decide which DERs run and at what setpoints; manage state of charge.
- **Mode transition** — detect grid loss, open the island-interconnect device, and command a grid-forming source to take over voltage/frequency.
- **Protection coordination** — adapt protective settings because fault currents differ dramatically between grid-connected and islanded modes (an inverter-dominated island has very limited fault current). See [Anti-Islanding & Grid Protection](grid-protection.md).
- **Resynchronization & reconnection** — when utility power returns and is confirmed stable, match the island's voltage, frequency, and phase angle to the grid, then **close the interconnect device** to reconnect smoothly without a damaging out-of-phase closure.

Transitions can be designed as **planned (open) transition** — momentary loss of power across the switch — or **seamless (closed/make-before-break)** transition, where the grid-forming source already holds the island stable so customers see no interruption.

```
        GRID-CONNECTED  ──grid fault detected──►  ISLANDED
              ▲                                       │
              │   resync (match V,f,phase)            │  GFM holds 60 Hz,
              │   then close interconnect device      │  GFL DERs follow,
              └────────── utility stable ◄────────────┘  controller balances load
```

## Sizing Generation + Storage for Islanded Loads

In grid-connected mode the utility silently absorbs every imbalance. In an island, **generation must equal load every instant**, so sizing is far stricter.

Key sizing inputs:

- **Critical load profile** — identify the loads the island must serve (often a subset: refrigeration, well pump, medical equipment, comms). Capture both **continuous (kW)** and **peak/surge (kW)** demand; motor starting can spike to several times running current.
- **Energy through the outage (kWh)** — load (kW) integrated over the worst-case outage duration, less any solar harvested during that window.
- **Inverter power rating** — the grid-forming inverter must supply the **largest instantaneous load plus motor inrush**, not just average power.
- **Solar + storage balance** — PV recharges the battery and offsets daytime load, but only storage can carry overnight and ride through clouds. Size storage for the night-plus-margin and PV for daily replenishment.

```
Worst-case islanded energy (simplified):
  E_storage_kWh ≈ (critical_load_kW × island_hours) − PV_harvest_kWh + reserve_margin

Inverter sizing:
  P_inverter_kW ≥ peak_continuous_kW + largest_motor_surge_kW
```

> Always confirm the inverter's **surge rating** against the worst motor or compressor start. A microgrid that meets average load but cannot start the well pump has failed its purpose.

## Residential vs. Campus/Community Microgrids

| | Residential whole-home island | Campus / community microgrid |
|---|------------------------------|------------------------------|
| Scale | One service (~5–20 kW) | Hundreds of kW to multi-MW |
| Grid-forming source | Hybrid battery inverter at the main panel | Dedicated GFM battery inverters, sometimes gensets/CHP |
| Island boundary | Automatic transfer switch / smart panel at the meter | Utility-grade breaker(s) at one or more PCCs |
| Loads | Whole-home or a managed critical-loads subset | Multiple buildings, diverse 3-phase loads, motors |
| Controller | Inverter's built-in firmware | Standalone IEEE 2030.7-class microgrid controller |
| Black start | Battery inverter forms the home grid | GFM inverter (and/or genset) energizes the campus |

**Whole-home islanding** lets a single dwelling disconnect and run on its own PV-plus-battery system, optionally shedding non-essential loads via a smart panel to extend runtime. **Campus and community microgrids** coordinate many resources and multiple buildings, require formal protection and resync schemes, and frequently participate in grid services when connected. See [Grid Services, VPPs & Demand Response](grid-services-vpp.md).

## Resilience Use Cases

- **Critical facilities** — hospitals, water/wastewater, emergency operations, data centers, telecom that must survive multi-day outages.
- **Wildfire & PSPS** — communities subject to public-safety power shutoffs island to maintain essential services.
- **Storm-prone regions** — homes and campuses bridge extended outages from hurricanes, ice storms, and floods.
- **Remote & off-grid** — sites with weak or no utility connection use a permanent island, often solar-plus-storage with a backup generator.
- **Cost & carbon** — when grid-connected, the same assets reduce demand charges and provide grid services, improving project economics.

## Standards

| Standard | Scope |
|----------|-------|
| **IEEE 2030.7-2017** | Specification of microgrid controllers — required control functions and mode transitions |
| **IEEE 2030.8-2018** | Testing of microgrid controllers — how to evaluate the functions in 2030.7 |
| **IEEE 1547-2018** | Interconnection of DERs, including anti-islanding and intentional-islanding provisions |
| **IEEE 2800-2022** | Interconnection of transmission-connected inverter-based resources (includes grid-forming/black-start where applicable) |
| **UL 1741** | Safety/certification of inverters and interconnection equipment (Supplement SB aligns with IEEE 1547-2018) |
| **UL 3141** | Power control systems used to manage DER and storage output |

## Sources & Further Reading

- [IEEE Approves Industry Standards for Microgrid Controllers (Microgrid Knowledge)](https://www.microgridknowledge.com/infrastructure/controllers-amp-software/article/11430344/ieee-approves-second-of-two-industry-standards-for-microgrid-controllers)
- [IEEE Std 2030.7-2017 — Specification of Microgrid Controllers (IEEE SA)](https://standards.ieee.org/ieee/2030.7/5941/)
- [Microgrid Testing and Control Standards Briefing: IEEE 2030.7/8 (SEPA)](https://sepapower.org/resource/microgrid-testing-and-control-standards-briefing-an-overview-of-ieee-2030-7-8-and-industry-recommendations-for-implementing-microgrid-standards/)
- [Introduction to Grid-Forming Inverters (NREL)](https://docs.nrel.gov/docs/fy24osti/90256.pdf)
- [Specifications for Grid-forming Inverter-based Resources, Version 1 (U.S. DOE)](https://www.energy.gov/sites/default/files/2023-09/Specs%20for%20GFM%20IBRs%20Version%201.pdf)
- [Grid-Forming vs. Grid-Following Inverters (OPAL-RT)](https://www.opal-rt.com/blog/grid-forming-vs-grid-following-inverters-and-why-the-difference-matters-for-protection-engineers/)
- [IEEE 2800-2022 Compliance Overview (Keentel Engineering)](https://keentelengineering.com/ieee-2800-compliance-inverter-based-resources)

---
*Disclaimer: This page is for general educational reference only; verify all standards, ratings, and code requirements against current published editions and qualified engineering and authority-having-jurisdiction guidance before design or installation.*
