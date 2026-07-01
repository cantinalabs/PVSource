# SCADA, Plant Controls & Grid Compliance

A utility-scale solar plant is not just a field of modules — it is a **grid-connected generator** that must follow dispatch, regulate voltage and reactive power, ramp within limits, and prove compliance to the interconnecting utility, the ISO/RTO, and **NERC**. The systems that make this happen are the **plant SCADA** and, at its heart, the **Power Plant Controller (PPC)**. This page covers the controls architecture, what the PPC regulates at the Point of Interconnection (POI), dispatch and metering, NERC reliability and cybersecurity obligations, and curtailment handling.

See also: [Utility-Scale Solar Overview](util-overview.md), [Substations & Transmission Interconnection](util-substation.md), [Construction & Commissioning](util-construction.md), and [Project Development & Finance](util-development-finance.md).

> **Key point:** The grid does not see thousands of inverters — it sees **one machine at the POI.** The PPC's entire job is to make a sprawling, variable, inverter-based plant **behave as a single controllable generator** that meets the interconnection agreement and NERC standards.

## Plant SCADA Architecture

**SCADA (Supervisory Control and Data Acquisition)** is the plant's nervous system: it monitors every device, logs data, presents the HMI, and carries the control signals between the PPC and field hardware.

```
        ISO/RTO / Utility Dispatch (AGC, setpoints)
                      │  (DNP3 / ICCP)
                      ▼
        ┌───────────────────────────┐
        │   Power Plant Controller   │  ◄── POI feedback (revenue/control meter)
        │          (PPC)             │
        └───────────────────────────┘
                      │  (Modbus/IEC 61850 over fiber)
        ┌─────────────┼───────────────┬───────────────┐
        ▼             ▼               ▼               ▼
   Inverters     Trackers       MV switchgear     Met stations
   (P,Q ctrl)   (position/stow) (breakers/caps)   (irradiance, wind, temp)
                      │
                      ▼
              Plant SCADA / Historian / HMI / alarms
```

### Layers

| Layer | Role |
|---|---|
| **Field devices** | Inverters, trackers, MV switchgear, met stations, transformers, weather sensors |
| **Communications** | Fiber backbone; protocols **Modbus TCP, IEC 61850, DNP3** |
| **PPC** | Closed-loop plant-level control (real-time) |
| **SCADA server / historian** | Data acquisition, archiving, alarms, HMI, reporting |
| **External interface** | **DNP3 / ICCP** link to the utility/ISO control center |

## The Power Plant Controller (PPC)

The **PPC** is a real-time closed-loop controller that measures conditions at the **POI** and commands the fleet of inverters (and capacitor banks, tap changers, etc.) to hold the plant to its setpoints. It is required for essentially every grid-connected utility-scale plant.

### What the PPC Regulates at the POI

| Function | What It Does | Typical Reference Standard |
|---|---|---|
| **Active power (P)** | Holds plant output to a dispatch limit; curtails when ordered | Interconnection agreement / ISO dispatch |
| **Reactive power (Q)** | Holds a Q setpoint at the POI to support the grid | IEEE 2800 / interconnection req. |
| **Voltage regulation (V)** | Adjusts Q to hold a target POI voltage | NERC VAR-002; IEEE 2800 |
| **Power factor (PF)** | Holds a commanded PF at the POI | Interconnection agreement |
| **Ramp rate** | Limits MW/min on up- and down-ramps | Interconnection / ISO requirement |
| **Frequency response** | Primary frequency response / droop, fast frequency response | NERC; IEEE 2800 |

### Closed-Loop Operation

The PPC continuously compares the **measured POI value** (P, Q, V, PF, frequency) against the **setpoint**, computes the error, and distributes corrective commands across available inverters. Because inverters have headroom limits, the PPC must allocate Q within each inverter's capability curve and switch **capacitor banks** or command the substation **on-load tap changer (OLTC)** when inverter reactive range is exhausted.

```
   setpoint ──►(+/-)──► PPC control law ──► per-inverter P,Q commands
                 ▲                                  │
                 │                                  ▼
          POI measurement ◄──────────── plant responds ──► grid
                 (closed loop, sub-second to seconds)
```

> **Key point:** Reactive power and voltage are two views of the same lever. The PPC runs in **one mode at a time at the POI** — typically **voltage control**, **power-factor control**, or **fixed-Q control** — as dictated by the utility/ISO. Inverter-based resources can absorb or inject VARs even at night (if configured), providing grid support without producing real power.

## Setpoints, Dispatch & AGC

- **Manual/scheduled setpoints** — the utility or owner sets a fixed limit or curve.
- **AGC (Automatic Generation Control)** — the ISO/RTO sends a **real-time active-power setpoint** (a "basepoint") that the PPC follows, enabling the plant to participate in dispatch and (for plants with storage or curtailment headroom) regulation/ancillary services.
- **Ramp-rate limiting** — when a cloud edge causes a sharp output change, the PPC limits the rate of change (MW/min) to the contracted ramp limit, often using curtailment headroom or storage to smooth ramps.

## Forecasting

Utility-scale plants provide **production forecasts** (intra-hour, day-ahead) to the ISO/RTO for unit commitment and scheduling. Forecasts combine **numerical weather prediction, satellite/sky-imager data, and the plant's own met-station and historical performance**. Forecast accuracy affects imbalance charges and ancillary obligations in many markets.

## Metering & Settlement

- A **revenue meter** (utility-grade, often redundant) at the POI measures delivered energy for **settlement** under the PPA and market.
- A **control/feedback meter** feeds the PPC its POI measurements (P, Q, V, frequency).
- Meters must meet the accuracy class required by the ISO/RTO tariff and the interconnection agreement; data flows to both the market settlement system and the owner's revenue accounting.

## NERC Compliance

Large plants are **subject to NERC** (North American Electric Reliability Corporation) mandatory reliability standards, enforced through the regional entities.

### Registration

A generator's obligations depend on **registration** as a **Generator Owner (GO)** and **Generator Operator (GOP)** under the **NERC registration criteria** (historically tied to size thresholds such as plants ≥ ~75 MVA / ≥ 20 MVA at a shared bus, plus other criteria — confirm the current criteria, which have evolved, including for inverter-based resources). Registration triggers a set of applicable reliability standards.

### Key Reliability Standards (illustrative)

| Standard family | Subject |
|---|---|
| **VAR-002** | Generator operation for maintaining voltage / reactive power schedule |
| **PRC** | Protection & coordination, relay settings, ride-through (e.g., PRC-024/-029 for IBR ride-through) |
| **FAC** | Facility ratings & interconnection |
| **MOD** | Modeling, data reporting, verification |
| **TOP / IRO** | Operating coordination with the transmission operator |
| **CIP** | Cyber security (see below) |

> **Key point:** Inverter-based resources (IBR) have been a major NERC focus after several large solar/wind disturbances where plants tripped or reduced output unexpectedly. **Ride-through performance** (staying connected through grid voltage/frequency excursions per PRC standards and **IEEE 2800**) is now a central compliance and commissioning concern.

### Cybersecurity — NERC CIP (High Level)

The **NERC CIP (Critical Infrastructure Protection)** standards impose cybersecurity requirements where assets are classified as **BES Cyber Systems**. At a high level, CIP covers:

- **Asset categorization** (high/medium/low impact),
- **Electronic & physical security perimeters**,
- **Access control and personnel/training**,
- **Systems security management, patching, and monitoring**,
- **Incident response and recovery.**

Many solar plants fall into **low-impact** categorization, but the substation/control interface and any larger fleets can pull assets into medium-impact scope. Modern plant controls also reference **IEC 62443** for industrial control-system security.

## Curtailment Handling

**Curtailment** — being ordered to reduce output below available power — is increasingly common in high-penetration regions. The PPC executes curtailment by:

- Receiving a **dispatch-down (active-power limit)** signal via AGC or manual setpoint,
- Reducing inverter real-power output evenly or per a strategy,
- Holding the plant at the commanded ceiling while maintaining voltage/reactive support.

Curtailment may be **economic** (negative prices/oversupply) or **reliability-driven** (congestion, transmission limits). The plant logs curtailment for **lost-production accounting**, PPA settlement (some PPAs compensate for utility-ordered curtailment), and availability/performance reporting.

```
   Available power  ──────────────╮
                                  │  curtailment "headroom"
   Dispatch limit  ──────────────┼──────────── (PPC holds here)
   Delivered power ──────────────╯
            time ──►
```

## Worked Example: Reactive Power at the POI

```
Utility orders the plant to hold 0.95 leading power factor at the POI
while delivering 100 MW real power.

Step 1 - apparent power:
  S = P / PF = 100 / 0.95 = 105.3 MVA

Step 2 - reactive power:
  Q = sqrt(S^2 - P^2) = sqrt(105.3^2 - 100^2) ≈ 32.9 MVAR

The PPC must source ~32.9 MVAR across available inverter headroom
(and cap banks if needed) and hold it as real power varies with sun.
```

## Sources & Further Reading

- [Nor-Cal Controls — Power Plant Controllers: Typical Control Requirements for PV Sites](https://norcalcontrols.net/power-plant-controllers-typical-control-requirements-pv-sites/)
- [Emerson — Solar Power Plant Controller (Ovation)](https://www.emerson.com/en-us/automation/control-and-safety-systems/distributed-control-systems-dcs/ovation-distributed-control-system/solar-power-plant-controls/power-plant-controller)
- [Hitachi Energy — Power Plant Controller (PPC)](https://www.hitachienergy.com/products-and-solutions/power-conversion/power-plant-controller-ppc)
- [NERC — Inverter-Based Resource Performance Reliability Guideline](https://www.nerc.com/comm/RSTC_Reliability_Guidelines/Inverter-Based_Resource_Performance_Guideline.pdf)
- [NERC — Reliability Standards (VAR, PRC, FAC, MOD, CIP)](https://www.nerc.com/pa/Stand/Pages/ReliabilityStandards.aspx)
- [v-comply — NERC Compliance for Renewable Energy Operators](https://www.v-comply.com/blog/nerc-compliance-renewable-energy-operators/)
- IEEE 2800 — Interconnection and Interoperability of Inverter-Based Resources
- IEC 62443 — Industrial communication networks: IT security for networks and systems

---
*Disclaimer: This material is for general educational reference only; applicable NERC registration, reliability standards, and interconnection requirements are project- and region-specific and must be confirmed with the relevant utility, ISO/RTO, and NERC regional entity.*
