# Solar System Components

A photovoltaic system is more than panels. This page is a component-by-component reference: what each part does, the key specifications that matter, and how to read the datasheets that describe them. Coverage is shared across **residential** and **commercial** installations; where a component or practice is typical of one, it is labeled. Code references are to the U.S. **National Electrical Code (NEC)** as of the 2023 edition unless noted; always design to the locally adopted code.

## PV Modules

The **PV module** is the generator. Modules are characterized by their electrical ratings at STC and by mechanical and safety attributes.

Key specs:
- **Pmax (W)** — rated power at STC.
- **Vmp / Imp** — voltage and current at the maximum power point.
- **Voc / Isc** — open-circuit voltage and short-circuit current (used for string sizing and overcurrent design).
- **Module efficiency (%)** — power per unit area.
- **Temperature coefficients (%/°C)** of Pmax, Voc, Isc.
- **Maximum system voltage** — typically 600 V (residential) or 1000–1500 V (commercial/utility).
- **Series fuse rating / maximum overcurrent protection (A)**.
- **Mechanical load ratings (Pa)** for wind/snow.
- **Certifications** — UL 61730 / IEC 61730 (safety), IEC 61215 (design qualification).

> **Residential vs commercial:** Residential roofs commonly use 60–66 cell modules (~400–440 W); commercial and ground-mount use larger 72–144 half-cell modules (~450–600+ W) and higher system voltages (1000–1500 V DC).

## Mounting and Racking

**Racking** secures modules, transfers wind and snow loads to the structure, and sets tilt and orientation. The attachment method depends on the surface.

| Mount type | Where used | Key considerations |
|---|---|---|
| **Composition-shingle roof** | Residential | Lag bolts into rafters with flashed standoffs; watertightness |
| **Tile roof** | Residential | Tile hooks or replacement tiles; breakage risk |
| **Metal (standing-seam) roof** | Residential & commercial | Clamp-on, often non-penetrating; fast install |
| **Flat (low-slope) roof** | Commercial | Ballasted or attached tilt frames; roof load limits |
| **Ground mount** | Residential & commercial | Driven piles or concrete; soil/geotech matters |
| **Ballasted** | Commercial flat roofs | Concrete blocks resist uplift; minimizes penetrations |
| **Carport / canopy** | Commercial | Elevated structure; engineered steel; doubles as shade |
| **Single-axis tracker** | Commercial / utility ground-mount | Follows sun east–west; +15–25% yield; more O&M |

Key specs: rail/clamp load ratings, wind and snow design loads (per ASCE 7), allowable rail span, grounding/bonding method (see WEEBs below), and corrosion class of fasteners. Trackers add motor, controller, and backtracking software to avoid row-to-row shading.

> **Warning:** Ballasted systems impose significant point and distributed loads — a structural engineer must confirm the roof can carry them. Penetrating mounts must be flashed to maintain the roof warranty and prevent leaks.

## Inverters

The **inverter** converts DC to grid-compatible AC and performs MPPT, grid synchronization, and protective functions (anti-islanding, ground-fault detection).

| Inverter type | Architecture | Typical use | Notes |
|---|---|---|---|
| **String inverter** | One inverter serves one or more series strings | Residential & commercial | Lowest cost/W; module-level issues affect the string |
| **Microinverter** | One small inverter per module (or per 2–4) | Residential & small commercial | Module-level MPPT; better shade tolerance; built-in rapid shutdown |
| **Central inverter** | Large inverter for many parallel strings | Commercial / utility | Lowest $/W at scale; requires combiners |
| **Hybrid inverter** | String inverter with integrated battery DC port | Residential & commercial storage | Manages PV + battery + grid + backup |

Key concepts:
- **MPPT** — number of independent trackers; more MPPTs allow strings of differing orientation/shading to be optimized separately.
- **DC-AC ratio (ILR / overbuild)** — ratio of array DC nameplate to inverter AC rating. Ratios of **1.1–1.3** are common to capture more energy in off-peak conditions.
- **Clipping** — when array DC power exceeds the inverter's AC limit, the inverter caps ("clips") output. A modest amount of clipping is an intentional economic trade-off, not a fault.

## DC Power Optimizers

A **power optimizer** is a module-level DC-DC converter that performs per-module MPPT and conditions each module's output before it reaches a central string inverter. Optimizers improve performance under shade/mismatch, enable module-level monitoring, and provide module-level **rapid shutdown**. Unlike microinverters, the DC-to-AC conversion still happens at a central string inverter. Most common in **residential** and small **commercial** systems with shading or complex roofs.

## Combiner Boxes

A **combiner box** parallels multiple PV source circuits (strings) into one larger output circuit, typically housing **string fuses** (overcurrent protection), and often a DC disconnect and surge protection. Combiners are standard on **commercial/utility** systems with many strings; small residential string systems often combine inside the inverter and need no separate box. Key specs: number of inputs, fuse rating per input, busbar current rating, max system voltage, and enclosure rating (e.g., NEMA 3R/4X for outdoor).

## Disconnects (AC and DC)

**Disconnects** provide a visible, lockable means to de-energize equipment for maintenance and emergency response.

- **DC disconnect** — isolates the PV/DC side from the inverter; often integrated into the inverter.
- **AC disconnect** — isolates the inverter output from the building/grid. Many utilities require an **accessible, lockable, visible-blade AC disconnect** near the meter.

Key specs: voltage and current rating, DC vs AC rating (DC arcs are harder to break), number of poles, and enclosure rating.

## Conductors and Wiring

- **PV wire / USE-2** — the conductor type used for exposed array (source-circuit) wiring. **PV Wire** has thicker insulation and is required for ungrounded/transformerless systems; **USE-2** is also sunlight-resistant and used for many grounded applications. Both are rated for wet locations and high temperature.
- **MC4 connectors** — the de-facto standard locking DC connector between modules and to homerun leads. Only intermateable connectors of the same brand/type should be joined; cross-mating different makes is a code and reliability concern.
- **Conduit** — protects conductors run inside the building or where physical protection is required (e.g., EMT, PVC, or flexible conduit). Conductors in conduit must be derated for the number of current-carrying conductors and for ambient/rooftop temperature.

Key specs: conductor ampacity, insulation temperature rating (90 °C wet typical), voltage rating, and required ampacity after temperature and conduit-fill derating. Voltage drop should generally be held under ~2% on DC and ~1% on AC for efficiency.

## Overcurrent Protection (OCPD)

**Overcurrent protective devices** — fuses and circuit breakers — protect conductors and equipment from currents above their safe rating.

- **String fuses** protect PV source circuits, sized above the string's rated current but at or below the module's series fuse rating. Note that with **two or fewer** parallel strings, fusing is often not required because no string can deliver dangerous reverse fault current.
- **Breakers / OCPDs** protect the inverter output circuit and the point of interconnection.
- **120% rule (NEC 705.12):** for load-side (back-fed breaker) interconnection on a busbar, `(busbar rating × 1.2) ≥ (main breaker + PV breaker)`. This is a frequent design constraint on both residential and commercial panels.

## Grounding and Bonding

Grounding and bonding give fault current a safe path and keep exposed metal at a safe potential.

- **Equipment Grounding Conductor (EGC)** — bonds module frames, racking, and enclosures together and back to the system ground.
- **Grounding Electrode Conductor (GEC)** — connects the grounded system to the earth (grounding electrode / rod).
- **WEEB (Washer, Electrical Equipment Bonding)** — a stainless bonding washer/clip that bites through anodized aluminum to create a listed electrical bond between modules and rails without a separate copper jumper. Common in residential and commercial rack bonding.

Key specs: EGC sizing per NEC 250.122 (by OCPD), listed bonding hardware, and corrosion-compatible (often tin-plated copper or stainless) connections.

## Rapid Shutdown Devices

**Rapid shutdown** reduces the voltage of conductors inside and on the building during an emergency so firefighters are not exposed to high DC voltage. Under **NEC 690.12**, conductors inside the array boundary must be reduced to a safe level (commonly **≤80 V within 30 seconds**) and outside the boundary to a low level (commonly ≤30 V). Compliance is achieved with **module-level power electronics (MLPE)** — microinverters or optimizers — or dedicated rapid-shutdown switching devices, plus an initiator. Required for building-mounted PV; **ground-mount** systems are generally exempt.

## Monitoring Systems

**Monitoring** tracks production, consumption, and faults, typically via a gateway/data logger reporting to a cloud portal or app.

- **Residential:** system- or module-level production, with consumption monitoring (CT clamps) for self-consumption insight.
- **Commercial:** revenue-grade metering, string-level analytics, alerting, and integration with O&M / SCADA for performance ratio tracking.

Key specs: measurement accuracy (revenue-grade vs indicative), data granularity, communication method (Wi-Fi, cellular, Ethernet, Modbus), and module-level vs string-level resolution.

## Metering: Revenue, Production, and Net Meters

- **Production meter** — measures total PV generation (often required for performance-based incentives/SRECs).
- **Net meter** — the utility's bidirectional meter that records energy imported from and exported to the grid for **net metering** billing.
- **Revenue-grade meter** — a meter meeting accuracy standards (e.g., ANSI C12.20, typically ±0.5–2%) suitable for financial settlement; common in **commercial** PPAs and incentive programs.

## Transformers (Commercial)

Large **commercial and utility** systems frequently include **transformers** to step inverter output voltage up to the building's distribution or the utility's service voltage (e.g., 480 V inverter output stepped to medium voltage). Key specs: kVA rating, primary/secondary voltage, impedance, efficiency, cooling class, and overcurrent/grounding configuration. Transformers are rare in **residential** systems, which typically interconnect at 120/240 V single-phase.

## How to Read a Module Datasheet

Focus on these fields when evaluating or designing with a module:

| Field | What it tells you | Why it matters |
|---|---|---|
| **Pmax (STC)** | Nameplate watts | Sizing the array |
| **Vmp / Imp** | MPP operating point | Inverter MPPT window matching |
| **Voc / Isc** | Open-circuit V / short-circuit A | String sizing and OCPD design |
| **Temp. coefficient of Voc** | V change per °C | Cold-temperature max-voltage check |
| **Temp. coefficient of Pmax** | Power loss with heat | Hot-climate yield |
| **Max system voltage** | 600 / 1000 / 1500 V | String length limit |
| **Max series fuse rating** | A | String OCPD ceiling |
| **NOCT** | Realistic cell temp | Field-output modeling |
| **Efficiency** | % | Area-constrained roofs |
| **Mechanical load (Pa)** | Wind/snow rating | Structural compliance |
| **Warranty** | Product & performance terms | Long-term value; check year-1 and annual degradation cap |
| **Certifications** | UL 61730 / IEC 61215/61730 | Code-required listing |

```
Cold-weather max-voltage check (worked example):
  Voc(STC)            = 41.0 V
  Temp coeff of Voc   = -0.25 %/°C  (= -0.1025 V/°C)
  Record low temp     = -15 °C  (delta from 25°C = -40 °C)
  Voc(cold) = 41.0 + (-0.1025 V/°C × -40 °C) = 41.0 + 4.1 = 45.1 V/module
  Max modules/string = System max voltage / Voc(cold)
                     = 600 V / 45.1 V ≈ 13.3  -> 13 modules max
```

## How to Read an Inverter Datasheet

| Field | What it tells you | Why it matters |
|---|---|---|
| **Max DC input voltage** | Absolute DC ceiling | Must exceed cold Voc of the string |
| **MPPT voltage range** | Operating window | Strings must stay in-window across temperatures |
| **Number of MPPTs / inputs** | Independent trackers | Mixed orientations / shading |
| **Max DC input current per MPPT** | A | Limits parallel strings per tracker |
| **Rated / max AC output power** | W (kW) | Sets DC-AC ratio and clipping |
| **Max output current** | A | AC OCPD and conductor sizing |
| **Nominal AC voltage / phases** | e.g., 240 V 1Φ, 208/480 V 3Φ | Interconnection compatibility |
| **CEC / peak efficiency** | % | Weighted real-world efficiency |
| **Rapid shutdown / RSD compatibility** | — | NEC 690.12 compliance |
| **Grid support / UL 1741-SA/SB** | — | Utility interconnection ride-through |

```
DC-AC ratio (worked example):
  Array DC nameplate = 11.0 kW
  Inverter AC rating  = 8.5 kW
  DC-AC ratio = 11.0 / 8.5 = 1.29
  -> ~1.29 overbuild; expect minor midday clipping, generally
     economic for boosting morning/evening and cloudy-day yield.
```

> **Key takeaway:** Two checks dominate string sizing — the **cold-temperature Voc** must not exceed the inverter/system maximum voltage, and the operating **Vmp** must stay within the MPPT window at the hottest expected temperature.

## Sources & Further Reading

- [NEC Article 690 — Solar Photovoltaic Systems (NFPA 70)](https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70)
- [NREL — System Advisor Model (SAM) and loss modeling](https://sam.nrel.gov/)
- [EnergySage — Solar Inverters Explained](https://www.energysage.com/solar/solar-inverters/)
- [Mayfield Renewables — PV system design references](https://www.mayfield.energy/)
- [EnergySage — Solar Panel Testing and Certifications](https://www.energysage.com/solar/solar-panel-testing-certifications/)

---
*Educational and reference use only — not engineering advice. Component specs, code rules, and certifications change; verify against current manufacturer datasheets, the locally adopted NEC, and licensed professionals before design or installation.*
