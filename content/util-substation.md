# Substations & Transmission Interconnection

The project substation is where a solar plant becomes a grid asset. It collects the **34.5 kV** feeders, steps the voltage up to transmission level, and delivers power across a **gen-tie** line to the **point of interconnection (POI)** with the utility or transmission operator. This page covers the substation/switchyard, HV equipment, SCADA and telemetry, the interconnection process, NERC registration thresholds, and the reactive-power/voltage obligations at the POI. It follows from [Inverters & Medium-Voltage Collection](util-inverters-collection.md) and connects to [Interconnection Studies & Queues](grid-studies-queues.md).

## Project Substation / Switchyard

The **project (collector) substation** is the boundary between the plant's MV collection system and the high-voltage (HV) grid.

```
34.5 kV collection feeders
        │
        ▼
 ┌──────────────────────────────┐
 │  PROJECT SUBSTATION          │
 │  • MV bus (34.5 kV)          │
 │  • Power (step-up) transformer 34.5 kV → HV │
 │  • HV breakers & switchgear  │
 │  • Protection relays, metering, SCADA RTU   │
 └───────────────┬──────────────┘
                 │  HV bus
                 ▼
            Gen-tie line  ───────►  POI / Utility substation  ──► Grid
```

The substation steps **34.5 kV** up to the interconnection voltage — commonly **69, 115, 138, 230, or 345 kV** depending on the line it ties into.

## Point of Interconnection (POI) & Gen-Tie

- **Point of interconnection (POI)** — the precise electrical point where the project connects to the transmission system (often the utility's bus or a tap on an existing line). It is the contractual and metering boundary; voltage, reactive power and protection are all specified *at the POI*.
- **Gen-tie (generation tie) line** — the HV line that carries power from the project substation to the POI. It may be a few hundred feet or many miles, and its routing, easements and cost (and any required network upgrades) are major project variables. A long gen-tie can dominate interconnection cost.

## HV Equipment

| Equipment | Function |
|---|---|
| **Power (step-up) transformer** | Steps 34.5 kV collection up to HV (often a GSU-style main transformer) |
| **HV circuit breakers** | Interrupt fault current; isolate the plant |
| **Disconnect switches / switchgear** | Visible isolation for maintenance and safety |
| **Protection relays** | Detect faults/abnormal conditions and trip breakers (e.g., line, transformer, bus protection) |
| **Revenue & check metering** | Settlement-grade measurement at/near the POI |
| **Instrument transformers (CTs/PTs)** | Scale current/voltage for relays and metering |
| **Reactive support** (as required) | Capacitor banks, reactors, or STATCOM if inverter VARs are insufficient |
| **Grounding & surge** | Ground grid, surge arresters, lightning protection |

## SCADA & Telemetry

A **SCADA** (supervisory control and data acquisition) system monitors and controls the plant and exchanges real-time data with the utility/ISO.

- A substation **RTU/data concentrator** gathers analogs (MW, MVAR, voltage, status) and relays them to the transmission operator's control center.
- The **plant controller (PPC)** dispatches inverter setpoints to meet the utility's active/reactive power and voltage schedule, ramp limits, and curtailment commands.
- Telemetry and remote control to the ISO/RTO are typically mandatory above defined size thresholds, with cybersecurity obligations layered on (see NERC CIP below).

## Transmission Interconnection Process

Interconnecting at transmission requires a multi-stage study process administered by the utility or ISO/RTO. It is the largest schedule and cost risk for most projects.

```
1. Interconnection request → queue position
2. Feasibility study (optional/screening)
3. System Impact Study (SIS) — grid impacts, needed upgrades
4. Facilities Study — cost & scope of interconnection facilities/upgrades
5. Interconnection Agreement (LGIA/GIA) → build → energize
```

Required network upgrades and their cost allocation, identified in the studies, frequently determine whether a project proceeds. For the full treatment of queues, cluster studies and reform, see [Interconnection Studies & Queues](grid-studies-queues.md).

## NERC Registration Thresholds

Plants connecting to the **Bulk Electric System (BES)** must register with **NERC** and comply with applicable reliability standards. Approximate, commonly cited thresholds (confirm current values for your project):

| Threshold | Significance |
|---|---|
| **≥ 75 MVA** at **≥ 100 kV** | Facility is part of the BES; triggers NERC registration |
| **≥ 20 MVA** per interconnection point (IBR) | Inverter-based resource (IBR) registration applies per point, not pooled across the project |
| **~1500 MW** (CIP bright-line) | Boundary between low- and medium-impact assets for cyber-security (NERC CIP) scope |

> **Key point:** Registration brings ongoing obligations — protection, modeling, ride-through (e.g., evolving IBR performance standards), telemetry and CIP cybersecurity controls — that must be engineered in, not bolted on late.

## Reactive Power & Voltage Schedule at the POI

The transmission operator specifies how the plant must support voltage at the POI.

- The plant must typically supply/absorb reactive power across a **power-factor range** (often **0.95 leading to 0.95 lagging**) measured at the POI.
- The operator sets a **voltage schedule** (target voltage or PF setpoint); the plant controller commands inverter VARs and any substation reactive devices to meet it dynamically.
- If inverter reactive capability (net of collection-system losses) can't meet the POI requirement, supplemental devices — **capacitor banks, reactors, or a STATCOM** — are added at the substation.

See the reactive-power capability of the inverters themselves in [Inverters & Medium-Voltage Collection](util-inverters-collection.md).

## Sources & Further Reading

- [HeatSpring — Interconnection of Utility-Scale Solar PV to Transmission](https://www.heatspring.com/courses/interconnection-of-utility-scale-solar-pv-to-transmission)
- [Radian Generation — NERC Registration Requirements for Solar Projects](https://radiangen.com/blog/nerc-registration-requirements-for-solar-projects-part-two/)
- [Nor-Cal Controls — Solar PV NERC CIP Requirements](https://norcalcontrols.net/solar-pv-nerc-cip-requirements-101/)
- [BPA — Technical Requirements for Interconnection](https://www.bpa.gov/-/media/Aep/transmission/interconnection/tech-requirements-interconnection.pdf)

---
*Reference content for educational use; NERC thresholds, interconnection procedures, and POI requirements change and are operator-specific — confirm against current NERC standards and your interconnection agreement.*
