# Anatomy of a Residential Solar System

A residential solar system looks simple from the street — some panels on a roof — but a code-compliant install is a chain of components that each do one job: convert sunlight to DC, condition it to grid-quality AC, protect people and equipment, and hand power off to the utility while keeping the home safe. This page walks every part of a home system and covers the common architectures a designer or installer will actually build: **grid-tied string with optimizers**, **grid-tied microinverter**, and **grid-tied with battery** (both AC- and DC-coupled), plus a note on **off-grid**.

> A residential PV system is defined at the boundaries: the **DC side** (modules, MLPE, DC conductors), the **inverter** (the DC/AC boundary), the **AC side** (disconnects, panel, meter), and the **point of interconnection** where your system legally becomes the utility's problem. Nearly every design decision maps to one of those four zones.

For component-level theory, see [Solar System Components](system-components.md), [Inverters Deep-Dive](fundamentals-inverters.md), and the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md). For sizing and layout, see [Residential System Design](residential-design.md).

## The Signal Path at a Glance

Every grid-tied home system follows the same left-to-right flow. Only the location of the DC/AC boundary changes between architectures.

```
[Sun] -> [PV Modules] -> [DC conductors] -> [Inverter DC/AC] -> [AC disconnect] -> [Main Service Panel] -> [Meter] -> [Grid]
```

## The DC Side

### PV Modules

The modules are the generator. Residential systems overwhelmingly use **60-cell / 66-cell (roughly 120-half-cell) monocrystalline modules** in the 400-460 W class, wired in **series strings** to build voltage. A typical residential string sits well under the **600 VDC** limit that applies to one- and two-family dwellings under the NEC.

| Spec | Typical residential value | Why it matters |
|------|--------------------------|----------------|
| Power (STC) | 400-460 W | Sets array size vs. roof area |
| Voc | ~40-50 V per module | Series count is limited by max system voltage (600 VDC on dwellings) |
| Vmp / Imp | ~34-42 V / ~11-14 A | Sets inverter MPPT window and conductor ampacity |
| Technology | Mono PERC / TOPCon / HJT | Efficiency and temperature coefficient |

### Roof Attachments and Racking

The **racking** transfers wind and snow loads from the modules into the building structure and sets the array plane. The attachment method depends on roof type.

| Roof / mount type | Attachment method | Notes |
|-------------------|-------------------|-------|
| **Asphalt shingle** | Lag bolts into rafters through a flashed foot | Most common; flashing is the leak-critical part |
| **Tile (clay/concrete)** | Tile hooks or replacement tile-mount flashings | Tile breakage and standoff height are the design risks |
| **Standing-seam metal** | Non-penetrating seam clamps | No roof penetration; fast install |
| **Corrugated / exposed-fastener metal** | Bracket screwed to high rib with butyl seal | Penetrating but sealed |
| **Flat / low-slope** | Tilt legs or ballasted tray | Uncommon residentially; wind uplift governs |
| **Ground mount** | Driven piles or concrete footings + racking | Used when the roof is unsuitable; needs its own frost-depth and wind design |

> The attachment is the single most warranty-sensitive component in the whole system. A flashing that fails leaks water; an under-spec'd attachment count fails structurally. Both are governed by manufacturer spans, local wind speed, and the building code, not by the electrical code.

### Module-Level Power Electronics (MLPE)

**MLPE** is the umbrella term for **DC power optimizers** and **microinverters** — electronics attached to each module (or module pair). They do per-module maximum power point tracking (MPPT), enable module-level monitoring, and — critically — provide **rapid shutdown** compliance.

- **Optimizers** are DC/DC converters. They keep a string inverter but decouple each module's operating point, so shade or mismatch on one module does not drag down the string. The string inverter still does the DC/AC conversion.
- **Microinverters** do the DC/AC conversion *at the module*. There is no string inverter and no high-voltage DC on the roof — each module outputs AC.

### Rapid Shutdown (NEC 690.12)

Rapid shutdown de-energizes the array's conductors for firefighter safety. Under the **2020/2023 NEC 690.12**, a system must reduce conductors **inside the array boundary to 80 V or less**, and conductors **outside the array boundary (but on the building) to 30 V or less**, within **30 seconds** of initiation. The **array boundary** is defined as **1 ft (305 mm) in any direction** from the array.

> Module-level MLPE (microinverters or optimizers) is the common way to meet module-level rapid shutdown, because each device stops feeding voltage when the initiator opens. A **PV Hazard Control System (PVHCS) listed to UL 3741** is an alternative pathway that provides equivalent firefighter shock protection without traditional MLPE.

### DC Conductors, Combiners, and Connectors

- **PV wire / USE-2** carries string current from the array to the inverter. Sizing follows conductor ampacity plus the code's temperature and continuous-current adjustments.
- **MC4 (or MC4-compatible) connectors** join module leads and string extensions. Cross-mating different brands is a listing violation and a fire risk — see the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md).
- A **DC combiner** (rare on a small residential string system) parallels multiple strings. Most homes have too few strings to need one; microinverter systems have no roof DC at all.

### Grounding and Bonding

Every module frame, rail, and metal enclosure must be **bonded** together and to the **equipment grounding conductor (EGC)**, which ties back to the service grounding electrode system. Rail-integrated bonding clips (WEEBs / listed splice grounding) and a continuous EGC give the fault-current path that lets an OCPD clear a ground fault.

## The DC/AC Boundary: The Inverter

The inverter is where DC becomes grid-quality **240 V split-phase AC** (the standard residential service in North America). The architecture determines *what kind* of inverter — and *where* the DC/AC line falls.

| Inverter type | DC/AC happens... | Best for |
|---------------|------------------|----------|
| **String inverter** (with optimizers) | In one wall-mounted box | Simple roofs, lowest cost per watt |
| **Microinverters** | On the roof, per module | Complex/multi-orientation roofs, no roof DC |
| **Hybrid / battery inverter** | In one box that also charges a battery | Systems adding storage and backup |

See [Inverters Deep-Dive](fundamentals-inverters.md) for topology, efficiency, and MPPT detail.

## The AC Side, Metering, and Interconnection

### AC & DC Disconnects

- A **DC disconnect** (often integrated into the string/hybrid inverter) isolates the array from the inverter.
- An **AC disconnect** isolates the inverter from the grid. Many utilities require a **visible, lockable, exterior AC disconnect** next to the meter so a lineman can positively isolate the system.

### The Main Service Panel and Point of Interconnection

This is where the system ties to the home's electrical service. There are two families of connection:

- **Load-side** (the common residential case): a **backfeed breaker** in the main panel pushes solar power onto the busbar.
- **Line-side / supply-side tap**: the system connects between the meter and the main breaker, bypassing the busbar limit (used when the panel can't accept a compliant backfeed breaker).

For load-side connections, **NEC 705.12(B)(3)** governs how much solar the busbar can accept. The best-known method is the **120% rule**: when the backfeed breaker is at the **opposite end** of the busbar from the main breaker, the sum of the main breaker and the backfeed breaker ratings may not exceed **120% of the busbar rating**.

> Example: a 200 A busbar with a 200 A main breaker allows a backfeed breaker up to 40 A (200 + 40 = 240 = 120% of 200). Need more? Options include a **line-side tap**, a **main breaker derate**, a **sum-of-all-breakers (100%) method**, or an **Energy Management System (EMS) / Power Control System** under NEC 705.13 that dynamically limits current instead of relying on breaker position.

### Metering

- The utility replaces the standard meter with a **bidirectional (net) meter** that measures import and export separately.
- Some jurisdictions or incentive programs also require a dedicated **production meter** to count total kWh generated.

### Monitoring

The inverter or a gateway reports production (and, with MLPE, per-module data) to a cloud portal over Wi-Fi, Ethernet, or cellular. This is how the homeowner and installer see performance and catch faults.

## Architecture 1: Grid-Tied String + Optimizers

DC stays high-voltage from roof to inverter; optimizers handle MPPT and rapid shutdown.

```
PV modules + optimizers (string) --DC--> DC disconnect --> STRING INVERTER (DC/AC)
      |                                                          |
   rapid-shutdown at each module                                AC
                                                                 v
                                          AC disconnect --> MAIN PANEL (backfeed bkr, 120% rule)
                                                                 |
                                                    bidirectional meter --> GRID
```

## Architecture 2: Grid-Tied Microinverter

No high-voltage DC leaves the roof — each module outputs AC onto a shared trunk cable.

```
[Module+micro] [Module+micro] [Module+micro] ... (AC trunk cable)
        \___________|___________/
                    | AC
                    v
        AC combiner / branch breaker --> AC disconnect --> MAIN PANEL (backfeed bkr)
                                                                 |
                                                    bidirectional meter --> GRID
```

## Architecture 3: Grid-Tied + Battery (AC- and DC-Coupled)

Adding storage introduces a **backup gateway** (automatic transfer switch + islanding control) and, usually, a **critical-loads subpanel** so the battery can power selected circuits during an outage.

- **DC-coupled**: the battery shares the inverter's DC bus (via a hybrid inverter or a DC/DC charge controller). PV can charge the battery without a DC-to-AC-to-DC round trip — higher efficiency, but the PV and battery are coupled at design time.
- **AC-coupled**: the battery has its own inverter and connects on the AC side. It pairs cleanly with an existing PV system (including microinverters), at the cost of an extra conversion when charging from PV.

```
             DC-COUPLED
PV --DC--> HYBRID INVERTER <--DC--> BATTERY
                 | AC
                 v
           BACKUP GATEWAY (ATS / island) --> CRITICAL-LOADS SUBPANEL
                 |
           MAIN PANEL --> bidirectional meter --> GRID
```

```
              AC-COUPLED
PV --DC--> PV INVERTER --AC-->\
                              BACKUP GATEWAY (ATS) <--AC--> BATTERY INVERTER <--DC--> BATTERY
                              |
                   CRITICAL-LOADS SUBPANEL   MAIN PANEL --> meter --> GRID
```

> During a grid outage, a grid-tied inverter *without* storage must shut down (anti-islanding). Only a system with a **backup gateway** and battery can island and keep the critical-loads panel energized.

## A Note on Off-Grid

An **off-grid** home has no utility connection and no net meter. The chain changes: PV feeds a **charge controller** (MPPT) into a **battery bank**, and an **off-grid (or hybrid) inverter** builds the home's AC. Because there is no grid to fall back on, off-grid design centers on **battery capacity, autonomy days, and a backup generator** rather than on interconnection rules. Rapid shutdown and grounding still apply.

```
PV --DC--> MPPT CHARGE CONTROLLER --> BATTERY BANK --> OFF-GRID INVERTER --> HOME LOADS
                                          ^
                                     (generator via ATS for low-sun periods)
```

## Full Component Inventory

| Component | Function | Notes |
|-----------|----------|-------|
| **PV modules** | Convert sunlight to DC | 400-460 W mono; series strings under 600 VDC on dwellings |
| **Racking / attachments** | Transfer loads, set array plane | Type depends on roof (shingle/tile/metal/flat) or ground mount |
| **Flashing** | Weatherproof each penetration | Leak-critical; matched to roof type |
| **Optimizers (MLPE)** | Per-module MPPT + rapid shutdown | Keep a string inverter |
| **Microinverters (MLPE)** | Per-module DC/AC + rapid shutdown | Eliminate roof DC |
| **String / hybrid inverter** | DC/AC conversion (+ battery in hybrid) | 240 V split-phase output |
| **Rapid-shutdown initiator** | De-energize array on command | 80 V inside / 30 V outside array boundary in 30 s (NEC 690.12) |
| **DC disconnect** | Isolate array from inverter | Often inverter-integrated |
| **AC disconnect** | Isolate inverter from grid | Utility often requires visible, lockable exterior unit |
| **DC combiner** | Parallel multiple strings | Rare residentially; none in microinverter systems |
| **PV wire / MC4** | Carry and connect string current | Never cross-mate connector brands |
| **Grounding / bonding (EGC)** | Fault-current path & safety | Continuous bond of all metal to service ground |
| **Main service panel** | Point of interconnection | Backfeed breaker + 120% rule, or line-side tap |
| **Bidirectional (net) meter** | Measure import vs. export | Utility-supplied |
| **Production meter** | Count total kWh generated | Where required by program/utility |
| **Monitoring gateway** | Report production & faults | Wi-Fi / Ethernet / cellular |
| **Battery** | Store energy / backup | AC- or DC-coupled |
| **Backup gateway** | Island detection + transfer | Enables outage backup |
| **Critical-loads subpanel** | Isolate backed-up circuits | Sized to battery/inverter capacity |
| **Charge controller** (off-grid) | MPPT into battery bank | Replaces grid-tie inverter's MPPT role |

## Sources & Further Reading

- [The 120% Rule for Solar: NEC 705.12 Guide for Installers - GreenLancer](https://www.greenlancer.com/post/120-rule-for-solar)
- [Solar Interconnection Methods (Full Guide) - Ecuip Engineering](https://ecuip.com/solar-interconnection-guide/)
- [Solar Rapid Shutdown Requirements NEC 690.12 - GreenLancer](https://www.greenlancer.com/post/solar-rapid-shutdown-requirements)
- [NEC 690.12 Rapid Shutdown Requirements - ExpertCE](https://expertce.com/learn-articles/nec-690-12-rapid-shutdown-requirements/)
- [NEC Rapid Shutdown Requirements and UL 3741 - IAEI Magazine](https://iaeimagazine.org/electrical-fundamentals/nec-rapid-shutdown-requirements-and-ul-3741/)

*This page is an educational reference and is not a substitute for the current NEC, local amendments, and utility interconnection rules; verify all values against the code edition and authority having jurisdiction (AHJ) for your project.*
