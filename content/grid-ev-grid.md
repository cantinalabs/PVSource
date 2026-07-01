# EVs & the Grid

Electric vehicles are the fastest-growing new electric load on the grid — and, uniquely among loads, they can also become a **grid resource**. A parked EV is a large battery on wheels, plugged in for far more hours than it takes to charge. That dual nature makes EVs central to modern grid planning: uncontrolled, a neighborhood full of EVs charging at dinnertime can overwhelm a distribution transformer; coordinated, that same fleet can soak up midday solar, shave evening peaks, and even push power back to homes and the grid.

This page covers EV charging levels and power draw, aggregate load impact and coincidence, managed/smart charging, alignment with solar and time-of-use rates, vehicle-to-grid and vehicle-to-home (V2G/V2H/V2X) technology and standards, make-ready infrastructure and utility programs, EVs in virtual power plants and demand response, and grid-upgrade implications — distinguishing throughout between the **home** case and the **fleet/commercial** case.

## Charging Levels and Power Draw

EV charging is grouped into three levels defined by voltage and power. The level sets both how fast a vehicle charges and how much stress it places on the grid.

| Level | Voltage | Typical power | Range added | Where used | Grid impact |
|---|---|---|---|---|---|
| **Level 1 (AC)** | 120 V | ~1.4 kW | ~3–5 mi/hr | Standard wall outlet | Negligible, like a hair dryer |
| **Level 2 (AC)** | 240 V (home) / 208 V (commercial) | ~3–19.2 kW; home units typically 7.7–11.5 kW | ~25–45 mi/hr | Home, workplace, public | Significant single-home load |
| **DC fast charge (DCFC)** | 400–1,000 V DC | ~50–350 kW | 100–200+ mi in 15–30 min | Highway, depots | Very large, spiky |

Key points:

- **Level 1** uses an ordinary 120 V outlet (NEMA 5-15) and draws roughly 1.4 kW — comparable to a household appliance. It can fully charge a plug-in hybrid overnight but takes 40+ hours for a depleted long-range battery EV. Its grid impact is minimal.
- **Level 2** is the workhorse of daily charging. Home installations commonly run at **7.7 kW (32 A circuit)** or **11.5 kW (48 A circuit)**; commercial units can reach 19.2 kW. A single Level 2 charger can rival or exceed the *entire rest* of a home's simultaneous load, which is why concentration of Level 2 charging matters for local distribution.
- **DC fast charging** bypasses the vehicle's onboard AC-to-DC converter and feeds direct current to the battery at **50–350 kW**. Vehicles with 800 V architectures can add 200+ miles in 15–20 minutes. DCFC produces large, brief, and hard-to-predict spikes — the kind of load that drives **demand charges** at commercial sites (see [Utility Rate Design & Tariffs](grid-rate-design.md)).

```
Rough relative power draw
Level 1        ▍                         ~1.4 kW
Level 2 home   ███                       ~7.7–11.5 kW
Level 2 comm.  ████                      up to 19.2 kW
DCFC           ████████████████████████  50–350 kW
```

## Aggregate Load Impact and Coincidence

A single EV is a manageable load. The grid challenge is **many EVs behaving alike at the same time** — the problem of **coincidence**.

- **Coincidence** is the degree to which individual loads peak simultaneously. Left to their own defaults, EVs tend to start charging when drivers get home, roughly 5–8 p.m. — precisely when the grid's existing residential peak already occurs. High coincidence stacks EV load directly on top of the system peak.
- **Distribution-level stress** shows up first and locally. A cluster of EVs on one street can overload the neighborhood **transformer** long before regional generation is strained. Utilities increasingly map EV adoption block-by-block for exactly this reason.
- **Diversity** works in the opposite direction: spread charging across the night and the *aggregate* peak flattens dramatically, because not everyone needs a full charge at once.

> **The core insight:** The grid problem with EVs is rarely total energy — it is *timing*. Managed charging that shifts and staggers EV load turns a peak-coincident threat into a flexible, valley-filling asset.

## Managed / Smart Charging and Load Management

**Managed charging** (smart charging) uses software to control *when* and *how fast* EVs charge, in response to grid conditions, prices, or utility signals. It ranges from simple to sophisticated:

- **Passive / rate-based (V1G, "unidirectional smart charging"):** the driver is on a time-of-use or EV rate and lets a timer or app schedule charging into cheap off-peak hours. No two-way utility control.
- **Active managed charging:** a utility or third-party aggregator actively modulates power to plugged-in vehicles via software, ramping charging up or down to match grid needs. Per industry reporting, active managed charging can reduce peak charging demand by **50% or more** while preserving the driver's need for a full battery by morning.
- **Load sharing / circuit sharing:** at multi-charger sites, a controller divides a fixed electrical capacity among several vehicles so the site never exceeds its service limit — critical for avoiding costly service upgrades and demand-charge spikes at depots and multifamily buildings.

Managed charging is the essential bridge that lets EV growth proceed without one-for-one grid expansion. As of 2025, legislative or regulatory efforts in more than 30 states addressed improving residential access to managed charging, and the federal NEVI program requires funded stations to be "demand-response ready."

## Time-of-Use Alignment with Solar

EV charging and solar are natural partners, but only when charging is aligned with generation:

- **Home + rooftop solar:** an EV that charges midday soaks up on-site solar directly, maximizing self-consumption — especially valuable where export credits have been cut (see [Net Metering, Net Billing & Rate Structures](grid-net-metering.md)). This favors **daytime workplace charging** or a driver who is home during the day.
- **Time-of-use rates:** most residential drivers are away during the solar peak, so the practical lever is a **special EV TOU rate** that makes overnight (super-off-peak) charging very cheap. This shifts charging into the hours when system demand and wholesale prices are lowest — commonly the middle of the night — and away from the 4–9 p.m. peak that dominates many TOU schedules.
- **Grid-scale complement:** on the "duck curve," abundant midday solar and a steep evening ramp create both a midday surplus and an evening deficit. Daytime EV charging helps absorb the surplus; overnight charging avoids the deficit. Either way, aligned EV load makes the whole system easier to balance.

## Vehicle-to-Grid, Vehicle-to-Home, and V2X

**Bidirectional charging** lets an EV *discharge* stored energy back out, not just draw it in. The umbrella term is **V2X** ("vehicle-to-everything"), with distinct use cases:

| Term | Power flows to | Primary purpose |
|---|---|---|
| **V2G** (vehicle-to-grid) | The utility grid | Grid services, demand response, VPP participation |
| **V2H** (vehicle-to-home) | The customer's home | Backup power during outages, bill management |
| **V2L** (vehicle-to-load) | A plugged-in device | Portable AC outlet from the vehicle |
| **V2X** | Any of the above | General bidirectional umbrella |

V2H is compelling as **backup**: a full EV battery holds far more energy (often 60–130 kWh) than a typical home battery, enough to run essential loads for days. V2G is compelling as **revenue and grid support**: aggregated fleets can bid discharge into demand-response and VPP programs.

Barriers remain real: bidirectional-capable hardware costs more, battery-warranty and degradation concerns persist, permitting and interconnection for export are involved, and most deployed systems are still proprietary rather than standards-based.

### Standards Status (as of 2026)

| Standard | Scope | Status |
|---|---|---|
| **ISO 15118** (esp. **-20**) | EV ↔ charger communication; enables bidirectional power and "Plug & Charge" | The key enabling communication standard for standards-based V2G; automakers (BMW, Mercedes-Benz, Volvo, others) announcing 15118-20 support on upcoming vehicles |
| **SAE J3400** (NACS) | North American Charging Connector (the former Tesla connector) | Broadly adopted by U.S. automakers; **J3400/2** (May 2025) defines V2G capability, communicated via ISO 15118-20; no federal mandate that J3400 EVSE support V2G |
| **SAE J3068 / J3068-2** | Three-phase AC charging and V2G, oriented to commercial/fleet | SAE adopted expanded V2G capabilities in early 2024; positioned as a lower-cost path to bidirectional AC |

> **Where V2G stands:** As of 2026, most V2G/V2H in the U.S. is proprietary and pilot-scale. True standards-based bidirectional charging over NACS using **ISO 15118-20** is emerging but not yet widely available at consumer scale. The pieces — connector (J3400), communication (15118-20), and AC V2G (J3068) — are converging, and adoption is expected to broaden as NACS-equipped, bidirectional-capable vehicles reach the market.

## Make-Ready Infrastructure and Utility Programs

**Make-ready** refers to the electrical infrastructure installed *up to* the point where an EV charger connects — panels, conduit, wiring, transformers, and service upgrades — often the most expensive and slowest part of a charging project.

- **Utility make-ready programs** have the utility fund some or all of the infrastructure on its side of the meter (and sometimes the customer side up to the charger stub), lowering the up-front cost of deploying chargers. These are especially important for fleets, multifamily housing, and public charging.
- **Utility EV programs** commonly bundle special EV TOU rates, managed-charging incentives, charger rebates, and demand-charge relief or alternative rate designs for DCFC sites (whose spiky load otherwise triggers punishing demand charges).
- **NEVI (National Electric Vehicle Infrastructure)** provides federal funding to states for a national DC-fast-charging network, with requirements including demand-response readiness.

For fleets and depots, make-ready and rate design frequently determine whether electrification pencils out at all — see the demand-charge discussion in [Utility Rate Design & Tariffs](grid-rate-design.md).

## EVs in VPPs and Demand Response

Aggregated EVs — charging and, increasingly, discharging — are becoming a building block of **virtual power plants (VPPs)** and **demand-response** programs. An aggregator pools thousands of vehicles and dispatches them as a single flexible resource: curtailing charging during system peaks (V1G) or discharging into the grid (V2G).

- **Demand response:** during a grid event, plugged-in EVs pause or slow charging on signal, shedding load exactly when it's most valuable. This is low-cost, low-friction, and already widely deployed.
- **VPPs:** the trajectory is from siloed EV programs toward unified VPPs that co-optimize EVs alongside home batteries, thermostats, and solar. V2G-capable fleets in particular can bid *discharge* into capacity and ancillary-services markets. See [Grid Services, VPPs & Demand Response](grid-services-vpp.md) for the market mechanics.

**Home vs. fleet distinction matters here.** Residential EVs bring huge *numbers* but small individual predictability and driver-comfort constraints. Commercial **fleets** — buses, delivery vans, depot trucks — offer larger, more predictable, centrally controlled batteries with known duty cycles, making them the natural early adopters of V2G revenue models.

## Grid Upgrade Implications

Whether EV growth forces expensive grid upgrades depends almost entirely on *how* the load is managed:

- **Distribution (local) first.** Transformers, service drops, and feeders in EV-dense neighborhoods are stressed before bulk generation. Uncontrolled clustered charging can force early transformer replacement.
- **Managed charging defers upgrades.** By flattening and staggering load, managed charging lets far more EVs connect to existing infrastructure — often the cheapest "grid upgrade" available.
- **DCFC and fleet depots concentrate demand.** These sites can each need multi-hundred-kilowatt to multi-megawatt service, sometimes requiring new distribution capacity and driving large demand charges; on-site solar and storage are increasingly paired with them to blunt both.
- **V2G can reduce net upgrade needs** by turning vehicles into dispatchable capacity that supports the grid at peak — though realizing this at scale awaits the standards maturation described above.

> **Bottom line:** EVs are a demand shock the grid can absorb gracefully *if* charging is managed, aligned with solar and off-peak hours, and eventually made bidirectional — or a costly one if it is left uncontrolled. The technology to do it well largely exists; the pacing item is deployment of managed charging, supportive rates, and standards-based V2X.

## Sources & Further Reading

- [U.S. DOT — EV Charging Speeds (Charger Types and Speeds)](https://www.transportation.gov/rural/ev/toolkit/ev-basics/charging-speeds)
- [U.S. Department of Energy — Smart Charge Management for Fleets](https://www.energy.gov/cmei/femp/smart-charge-management-applications-and-benefits-federal-fleets)
- [SAE International — J3400 (NACS) and V2G standards](https://www.sae.org/)
- [ISO 15118 — Vehicle-to-grid communication interface](https://www.iso.org/)
- [Utility Dive — Managed charging and EV grid flexibility](https://www.utilitydive.com/news/as-ev-load-grows-utilities-use-managed-charging-to-harness-flexibility-lo/816859/)
- [NEVI Formula Program — U.S. Federal Highway Administration](https://www.fhwa.dot.gov/environment/nevi/)
- Related: [Grid Services, VPPs & Demand Response](grid-services-vpp.md) · [Utility Rate Design & Tariffs](grid-rate-design.md) · [Net Metering, Net Billing & Rate Structures](grid-net-metering.md) · [Microgrids & Islanding](grid-microgrids.md)

> This page is educational and general in nature; charging power, standards status, and program details evolve quickly — verify current specifications, standards adoption, and utility program terms before making equipment or investment decisions.
