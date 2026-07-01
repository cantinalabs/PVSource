# Anatomy of a Utility-Scale Solar Plant

A utility-scale plant is a **power station**, not a rooftop system — tens to hundreds (or thousands) of megawatts, spread across acres of **single-axis trackers**, aggregated by a **medium-voltage collection system**, stepped up at a **project substation**, and delivered to the grid over a **gen-tie line** at the **point of interconnection (POI)**. Every residential and commercial concept still applies, but the organizing unit becomes the **array block** (a group of tracker rows feeding one inverter station), and an entire layer of **grid infrastructure** — MV collection, high-voltage step-up, protection relays, and a **power plant controller** — sits on top.

> A utility plant is best read hierarchically: **module -> string -> array block -> inverter station -> MV feeder -> substation -> POI -> transmission grid**. Power rises in voltage at each stage (1500 VDC on the DC side, ~34.5 kV across the collection field, and hundreds of kV at the grid) to move it efficiently over distance.

For component theory see [Solar System Components](system-components.md), [Inverters Deep-Dive](fundamentals-inverters.md), and the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md). For plant layout and yield see the [Utility-Scale Solar Overview](util-overview.md) and [Inverters & Medium-Voltage Collection](util-inverters-collection.md).

## The Signal Path at a Glance

```
[Array block] -> [DC combiners] -> [Inverter station DC/AC] -> [MV step-up xfmr] -> [34.5 kV collection] -> [Substation step-up] -> [POI / gen-tie] -> [Transmission grid]
```

## The Generation System (DC Side)

### Modules, Trackers, and Met Stations

Utility plants use the **largest-format bifacial modules** (roughly 550-700 W, TOPCon/HJT) mounted on **horizontal single-axis trackers (HSAT)** that rotate east-to-west to follow the sun, boosting yield ~15-25% over fixed tilt. **Fixed-tilt** racking is still used on constrained or high-latitude sites.

| Component | Function | Notes |
|-----------|----------|-------|
| **PV modules** | Convert sunlight to DC | Large-format bifacial; wired into long 1500 VDC strings |
| **Single-axis trackers** | Follow the sun E-W | Rows of driven piles + torque tube; ~15-25% yield gain |
| **Tracker motor / drive** | Rotate the torque tube | One motor drives a row (or a group of rows) |
| **Tracker controller** | Aim rows, backtracking, stow | Backtracking avoids row-to-row shading; stows flat in high wind |
| **Meteorological (met) station** | Measure irradiance, wind, temp | Feeds tracker control and plant performance/PR analysis |

> **Backtracking** rotates trackers *away* from the ideal angle near sunrise/sunset so rows don't shade each other, and **stow** flattens or feathers the array to survive high wind and hail — both are tracker-controller functions, not module functions.

### 1500 VDC Harnessing and DC Combiners

Strings are built to the **1500 VDC** system standard — the utility norm because it minimizes strings, harness copper, and combiner count per megawatt. Strings land in **DC combiner boxes** (with string-level fusing), whose outputs run to the inverter. On string-inverter plants the combining is minimal; on central-inverter plants, combiners feed **recombiners** ahead of the inverter.

## The Conversion System

Plants use one of two inverter architectures, both delivered as **factory-integrated skids/stations**.

| Architecture | Description | Trade-off |
|--------------|-------------|-----------|
| **String inverters (decentralized)** | Many 1500 VDC string inverters (e.g., 250-350 kW) distributed across the block | Redundancy, easy replacement, granular MPPT; more units to monitor |
| **Central inverters (centralized)** | Few large inverters (2-5 MW) on a skid/station | Fewest units, lowest $/W; larger single-point losses on fault |

### Inverter-Station MV Transformers

Each inverter station pairs its inverter(s) with a **step-up transformer** that raises the inverter's **low-voltage AC output (typically ~600 V, 690 V, or ~800 V three-phase) to the collection voltage of ~34.5 kV**. Modern **"MV power stations"** integrate the inverter, the LV-to-MV transformer, and MV **switchgear** into a single skid so the block's entire output leaves at collection voltage.

```
Inverter station skid:
  1500 VDC strings -> INVERTER (DC/AC, ~LV) -> STEP-UP XFMR (LV -> 34.5 kV) -> MV SWITCHGEAR -> feeder
```

## The Medium-Voltage Collection System

The collection system is the plant's internal grid — it gathers every inverter station's **34.5 kV** output and carries it to the substation.

| Component | Function | Notes |
|-----------|----------|-------|
| **MV feeders (collector circuits)** | Aggregate array-block outputs | Radial circuits, each daisy-chaining several inverter stations |
| **MV cabling** | Carry 34.5 kV | Direct-buried or duct-bank MV cable, sometimes overhead on large sites |
| **Sectionalizing / switching** | Isolate faults & segments | Load-break switches, fuses, reclosers along feeders |

> **34.5 kV (nominal 35 kV class)** is the near-universal North American collection voltage for utility solar and wind — high enough to move plant-scale current across a field with manageable losses, low enough for standard distribution-class equipment.

## The Grid Interface: Substation, Metering, and POI

### Project Substation / Switchyard

Every collection feeder terminates at the **project (collector) substation**, which is the plant's connection to the transmission system.

| Component | Function | Notes |
|-----------|----------|-------|
| **Main power transformer (GSU)** | Step 34.5 kV up to transmission HV | The generator step-up transformer — e.g., 34.5 kV -> 115/230/345 kV |
| **HV & MV breakers** | Switch and interrupt fault current | Isolate the plant, feeders, and transformer |
| **Protection relays** | Detect faults, trip breakers | Overcurrent, differential, and anti-islanding; coordinated with the utility |
| **Buswork & switchyard** | Interconnect the HV equipment | Arranges the substation's connections |
| **Revenue metering** | Utility settlement metering | CT/PT-fed revenue meter at the POI |
| **Reactive support (as required)** | Meet grid voltage/VAR requirements | Capacitor banks / STATCOM, per interconnection agreement |

### Point of Interconnection and Gen-Tie

- The **gen-tie (generation tie) line** is the high-voltage line that carries the plant's output from the substation to the grid. It's built only when the plant isn't adjacent to existing transmission — often the plant's single most expensive discrete piece of infrastructure.
- The **point of interconnection (POI)** is the exact physical/electrical point where the gen-tie ties to the utility's transmission system — the metered handoff defined by the interconnection agreement.

```
Substation -> HV breaker -> GEN-TIE LINE (e.g., 230 kV) -> POI -> UTILITY TRANSMISSION GRID
```

## Plant Controls and Auxiliaries

### SCADA and the Power Plant Controller (PPC)

- **Plant SCADA** polls every inverter, combiner, tracker, met station, transformer, and switchgear unit — often over **IEC 61850** — for monitoring, alarms, and performance-ratio tracking.
- The **Power Plant Controller (PPC)** is the plant's brain at the grid interface: it executes the utility's dispatch and grid-services commands — **active-power curtailment, ramp-rate control, voltage/VAR/power-factor regulation, and frequency response** — by sending setpoints down to the inverters. This grid-services layer is what distinguishes a utility plant from a C&I "monitoring-only" DAS.

### Auxiliary Loads

The plant consumes power for its own operation — **tracker motors, inverter cooling, substation controls, SCADA, security, lighting, and comms**. **Auxiliary (station-service) transformers** supply these loads, typically stepping down from the collection system.

### Optional Co-located BESS

Many new plants co-locate a **Battery Energy Storage System** for **firming, time-shifting, ramp control, and providing capacity/ancillary services**. It ties in on the MV collection system (or at the substation) through its own inverters/transformers and is dispatched by the PPC alongside the PV.

## Plant Single-Line: Array Block to POI

```
ARRAY BLOCK (trackers, 1500 VDC strings)
        |
   DC combiners
        |
  INVERTER STATION (DC/AC) --> MV STEP-UP XFMR (LV -> 34.5 kV) --> MV switchgear
        |
  ... (repeat per block) ...
        |
  34.5 kV COLLECTION FEEDERS  <---- [optional BESS ties in here]
        |
  PROJECT SUBSTATION: GSU xfmr (34.5 kV -> HV) + breakers + protection relays + revenue meter
        |
   GEN-TIE LINE (HV)
        |
      POI --> TRANSMISSION GRID

  (Overlay: Plant SCADA + POWER PLANT CONTROLLER command every inverter, tracker, and the substation;
            auxiliary/station-service transformers feed tracker motors, cooling, controls, comms.)
```

## Component Inventory by System

| System | Component | Function |
|--------|-----------|----------|
| **Generation (DC)** | Modules | Convert sunlight to DC |
| | Single-axis trackers + motors/controllers | Follow sun, backtrack, stow |
| | Met stations | Irradiance/wind/temp for control & PR |
| | 1500 VDC harness + DC combiners | Aggregate & fuse strings |
| **Conversion** | String or central inverters (on skids) | DC/AC conversion |
| | Inverter-station MV transformer | LV -> 34.5 kV step-up |
| | MV switchgear | Protect & switch station output |
| **MV Collection** | Collector feeders / cabling | Carry 34.5 kV to substation |
| | Sectionalizing switches / reclosers | Isolate faults |
| **Substation / Grid** | GSU (main power) transformer | 34.5 kV -> transmission HV |
| | HV/MV breakers | Switching & fault interruption |
| | Protection relays | Fault detection, anti-islanding |
| | Revenue metering (CT/PT) | Utility settlement |
| | Reactive support (as required) | Grid voltage/VAR compliance |
| **Interconnection** | Gen-tie line | Substation -> POI |
| | Point of interconnection (POI) | Grid handoff |
| **Controls** | Plant SCADA | Monitoring & alarms (IEC 61850) |
| | Power Plant Controller (PPC) | Curtailment, ramp, V/VAR, frequency |
| | Auxiliary / station-service xfmrs | Power plant's own loads |
| **Storage (optional)** | Co-located BESS | Firming, shifting, ancillary services |

## Sources & Further Reading

- [Substation Equipment Specs - Utility Scale Solar Grid Interconnection for Developers](https://oboe.com/learn/utility-scale-solar-grid-interconnection-for-developers-11krwhh/substation-equipment-specs-1)
- [Collector Substation Design Criteria - High River Energy Center (PDF)](https://highriverenergycenter.com/wp-content/uploads/2019/10/Appendix-5-2.-Collection-Substation-Design-Criteria.pdf)
- [Medium Voltage Power Station (1500 VDC inverter + transformer + switchgear) - SMA Solar](https://www.sma.de/en/products/system-solutions-packages/medium-voltage-power-station-4600)
- [Solar Interconnection: How Solar Farms Connect to the Grid - GreenLancer](https://www.greenlancer.com/post/interconnection-commercial-solar-projects)
- [Solar SCADA System (plant control & grid services) - Emerson](https://www.emerson.com/en-us/automation/control-and-safety-systems/distributed-control-systems-dcs/ovation-distributed-control-system/solar-power-plant-controls)

*This page is an educational reference and is not a substitute for utility interconnection standards, IEEE/NERC requirements, and project-specific engineering; verify all voltages and equipment ratings against the interconnection agreement and authority having jurisdiction (AHJ) for your project.*
