# Anatomy of a Commercial Solar System

Commercial and industrial (C&I) solar sits between the residential and utility scales — typically **hundreds of kW to a few MW**, three-phase, and interconnected at the customer's own service rather than through a dedicated substation. The components are the same *categories* as a home system, but everything scales up: **three-phase inverters**, **1000/1500 VDC** DC architectures, **combiners and recombiners**, **switchboards**, and **CT metering**. This page walks every part of a C&I system across the common types: **flat-roof ballasted and mechanically-attached rooftop**, **carport / canopy**, and **ground mount**.

> The defining C&I trait is **three-phase AC**. A commercial building takes service at **120/208 V wye** (light commercial) or **277/480 V wye** (larger buildings and industrial), and the PV system must match that voltage and phase configuration exactly. Get the service voltage wrong and every downstream component — inverter, breakers, transformer, metering — is wrong.

For component theory see [Solar System Components](system-components.md), [Inverters Deep-Dive](fundamentals-inverters.md), and the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md). For array layout and load analysis see [Commercial System Design](commercial-design.md).

## The Signal Path at a Glance

```
[PV Array] -> [DC combiners] -> [Inverter(s) DC/AC] -> [AC OCPD] -> [PV switchboard] -> [Interconnection] -> [CT meter] -> [Grid/Utility xfmr]
```

## The DC Side

### PV Modules

C&I systems use **large-format monocrystalline modules** (roughly 500-620 W, 144-cell / large-wafer TOPCon or PERC). Modules are wired into **long series strings** to reach the DC bus voltage the system is designed around.

| DC architecture | Max system voltage | Typical use |
|-----------------|-------------------|-------------|
| **1000 VDC** | 1000 V | Rooftop C&I where local codes or building occupancy limit voltage |
| **1500 VDC** | 1500 V | Ground mount, carports, and larger rooftops — fewer strings, longer runs, less BOS per watt |

> **1500 VDC** cuts the number of strings, combiners, and homerun conductors for a given array size, lowering balance-of-system cost. It is standard for ground mount and carports and increasingly used on large flat roofs where the code permits.

### Racking, Ballast, and Structures

The structure depends on the system type.

| System type | Structure | Attachment strategy |
|-------------|-----------|--------------------|
| **Flat-roof ballasted** | Tilted trays on rubber pads | Held by concrete ballast blocks — no roof penetration; wind uplift and roof load capacity govern |
| **Flat-roof mechanically-attached** | Tilted racking bolted to structure | Penetrations flashed into roof deck/purlins; used where ballast weight is too high or wind zone is severe |
| **Hybrid ballast + attach** | Trays with a reduced number of anchors | Balances roof loading against penetration count |
| **Carport / canopy** | Engineered steel structure over parking | Foundations + columns; doubles as shade/EV charging; adds structural and drainage design |
| **Ground mount** | Driven-pile or ballasted racking | Fixed-tilt (or occasionally tracked at large C&I); geotechnical + frost-depth driven |

### DC Combiners and Recombiners

- A **string combiner (combiner box)** parallels multiple strings, each protected by a **string fuse (or fuseholder)**, onto a larger DC feeder. It is the aggregation point on the DC side.
- On large ground mounts and central-inverter systems, **recombiners** parallel several combiner outputs before the inverter.

### Rapid Shutdown

Rooftop C&I on buildings must meet **NEC 690.12** rapid shutdown — the same **80 V inside / 30 V outside the array boundary within 30 s** requirement as residential, met with MLPE or a listed **PVHCS (UL 3741)**. **Ground mounts and many carports are not "on buildings"** and may fall outside the 690.12 rapid-shutdown requirement, though a DC disconnecting means is still required.

### DC Disconnects and OCPD

Each inverter input needs a **DC disconnecting means** (often integrated), and string-level **overcurrent protection** lives in the combiners. Conductors are sized for ampacity with the code's continuous-current and temperature adjustments.

## The DC/AC Boundary: Inverters

C&I uses two inverter architectures.

| Architecture | Where DC/AC happens | Typical fit |
|--------------|---------------------|-------------|
| **Three-phase string inverters** | Many mid-size (30-125 kW) transformerless inverters distributed near the array | Rooftops, carports, most modern C&I — redundancy, easier service, granular MPPT |
| **Central inverter** | One large inverter (250 kW-1 MW+) in a pad/enclosure | Large single-array ground mounts — lowest $/W, but a single point of failure |

Most C&I string inverters are **transformerless three-phase** units rated for **1000 VDC (rooftop)** or **1500 VDC (ground)** input, outputting native **277/480 V** (or 120/208 V) three-phase. See [Inverters Deep-Dive](fundamentals-inverters.md).

## The AC Side

### Conductors, Conduit, and Cable Tray

AC output conductors run in **conduit** (EMT/PVC/RMC) or, on large rooftops and ground mounts, in **cable tray**. Voltage-drop and ampacity both drive sizing; **480 V** output is preferred on big systems because higher voltage means lower current, smaller conductors, and less voltage drop over long roof or field runs.

### AC OCPD, Panelboards, and Switchboard

- Each inverter's AC output lands on a breaker in an **AC panelboard** (or is grouped through **AC combiner panels**).
- Those aggregate onto a **PV switchboard / distribution board** that consolidates the whole array's AC before the point of interconnection.

## Interconnection, Transformers, and Metering

### Point of Interconnection

C&I interconnection mirrors residential but at scale, and the choice of method is often driven by how much headroom the existing service has.

- **Load-side connection** ties a **backfeed breaker** into an existing panelboard/switchboard busbar. The **NEC 705.12(B)(3) 120% rule** still governs: main + backfeed ratings must stay within 120% of the busbar rating (or use the 100% sum-of-breakers or EMS/PCS methods under 705.13).
- **Line-side / supply-side tap** connects **ahead of the main service disconnect**, between the utility and the main. This is common on C&I because it sidesteps busbar limits on a fully-loaded service — the tap ampacity is limited by the service conductors, not the panel busbar.

> At C&I scale the 120% rule is frequently the binding constraint: a large PV backfeed rarely fits inside a fully-loaded switchboard, so **supply-side taps** and **EMS/Power Control Systems** are far more common than they are on a house.

### Step-Up / Utility Transformer

- Many buildings already have a **utility service transformer** (e.g., **12.47 kV or 4.16 kV primary down to 277/480 V or 120/208 V secondary**) upstream of the meter; a 480 V PV system simply interconnects on the secondary.
- Where PV output voltage doesn't match the interconnection point, a **step-up transformer** raises 480 V (or lower) to the required service or primary voltage.

### CT Metering and Three-Phase Service

At C&I current levels, meters cannot measure line current directly. **Current transformers (CTs)** — one per phase — step the current down to a meter-safe level, and the utility's **revenue-grade CT meter** measures **bidirectional** three-phase energy. Because a three-phase inverter may not output evenly on all legs at low production, per-phase CTs are required for accurate metering.

### Monitoring / SCADA-lite

C&I systems use a **data acquisition system (DAS)** — a datalogger polling every inverter, combiner, and often a small **weather/irradiance station** — reporting to a cloud portal. It's lighter than a utility SCADA (no plant controller or grid-services layer) but provides per-inverter performance, alarms, and performance-ratio tracking.

### Optional BESS

C&I storage (a **Battery Energy Storage System**) is commonly added for **demand-charge management, peak shaving, and backup**. It ties in on the AC side (AC-coupled) via its own inverter and controller, or DC-coupled to a hybrid inverter, and is dispatched against the building's demand profile.

## Architecture 1: Three-Phase String Rooftop (Flat Roof)

```
Strings (1000 VDC) -> DC combiners (fused) -> [3-ph string inverters x N] (DC/AC, 480 V)
                                                        | AC
                                                        v
                                     AC combiner panels -> PV SWITCHBOARD
                                                        |
                             load-side backfeed (120% rule) OR supply-side tap
                                                        |
                                       CT meter (3-ph, bidirectional) -> building service -> GRID
```

## Architecture 2: Central-Inverter Ground Mount

```
Strings (1500 VDC) -> combiners -> recombiners -> CENTRAL INVERTER (DC/AC)
                                                        | AC (480 V or LV)
                                                        v
                                          STEP-UP TRANSFORMER (LV -> service/MV)
                                                        |
                                          AC disconnect / OCPD -> CT metering -> POI -> GRID
```

## Full Component Inventory

| Component | Function | Notes |
|-----------|----------|-------|
| **PV modules** | Convert sunlight to DC | ~500-620 W large-format mono; long series strings |
| **Racking / ballast** | Support array, resist wind uplift | Ballasted or mechanically-attached on flat roofs |
| **Carport / canopy structure** | Elevated array over parking | Engineered steel + foundations; drainage & lighting |
| **Ground-mount racking** | Fixed-tilt (or tracked) field structure | Pile-driven or ballasted; geotech-driven |
| **DC combiner** | Parallel + fuse strings | String-level OCPD |
| **DC recombiner** | Parallel combiner outputs | Central-inverter systems |
| **Three-phase string inverter** | Distributed DC/AC | 1000/1500 VDC in, 277/480 V out |
| **Central inverter** | Single large DC/AC | 250 kW-1 MW+; lowest $/W, single point of failure |
| **Rapid-shutdown device** | De-energize rooftop array | Required on buildings (NEC 690.12); often N/A on ground mount |
| **DC disconnect** | Isolate array from inverter | Often inverter-integrated |
| **AC OCPD / panelboard** | Protect & aggregate AC | Feeds the switchboard |
| **PV switchboard** | Consolidate array AC | Ahead of interconnection |
| **Conductors / conduit / cable tray** | Carry & route power | 480 V preferred to cut current & voltage drop |
| **Step-up / service transformer** | Match PV to service/primary voltage | 480 V <-> 12.47 kV etc. |
| **Point of interconnection** | Tie to utility | Load-side (120% rule) or supply-side tap |
| **Current transformers (CTs)** | Scale current for metering | One per phase |
| **CT revenue meter** | Bidirectional 3-phase energy | Utility revenue-grade |
| **DAS / monitoring** | Per-inverter performance & alarms | SCADA-lite with optional weather station |
| **BESS (optional)** | Demand-charge mgmt / backup | AC- or DC-coupled |

## Sources & Further Reading

- [Three Phase Commercial Solar Inverters - SolarEdge](https://www.solaredge.com/us/products/commercial/pv-inverters/three-phase)
- [3-Phase Solar Inverter (208V/480V wye, CT metering) - eGauge Systems](https://kb.egauge.net/en_US/installation-examples/3-phase-solar-inverter)
- [Interconnection Methods - Penn State AE 868 Commercial Solar](https://courses.ems.psu.edu/ae868/node/971)
- [The 120% Rule for Solar: NEC 705.12 Guide - GreenLancer](https://www.greenlancer.com/post/120-rule-for-solar)
- [Understanding Interconnected Electric Power Production Sources - Greentech Renewables](https://www.greentechrenewables.com/article/understanding-interconnected-electric-power-production-sources)

*This page is an educational reference and is not a substitute for the current NEC, structural/building codes, and utility interconnection rules; verify all values against the code edition and authority having jurisdiction (AHJ) for your project.*
