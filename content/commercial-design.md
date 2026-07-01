# Commercial System Design

This page covers **end-to-end design of commercial and industrial (C&I) photovoltaic systems** — from market segment and roof assessment through three-phase service, interconnection, sizing strategy, equipment selection, and O&M. It is written for commercial designers, EPCs, developers, and electrical engineers working on rooftop, carport, ground-mount, and community-solar projects.

For the building, fire, and electrical **codes** that govern these systems, start with [Commercial Solar Codes & Fire Requirements](./commercial-codes.md). For tax-credit and depreciation treatment (ITC, MACRS, bonus depreciation), see the site's commercial incentive guides — this page does **not** re-derive incentive economics.

> **Design is a multi-discipline negotiation.** A commercial PV design is constrained simultaneously by the roof or land, the building's electrical service, the utility's interconnection rules, and the customer's tariff. Optimize all four together — a perfect array that cannot interconnect, or that overruns the busbar, is a failed design.

## Commercial Market Segments

Commercial PV spans a wide range of project types, each with distinct design drivers.

| Segment | Typical size | Mounting | Primary economic driver | Key design challenges |
|---------|-------------|----------|------------------------|----------------------|
| **C&I rooftop** | 50 kW – 2 MW | Ballasted or mechanically attached on low-slope membrane | Bill offset + demand-charge reduction | Roof capacity, warranty, fire pathways, interconnection |
| **Solar carport / canopy** | 100 kW – 5 MW | Elevated steel structure over parking | Bill offset, EV charging, premium PPA | Structural cost, foundations, lighting/EV integration, drainage |
| **Ground mount** | 500 kW – 20 MW+ | Fixed-tilt or single-axis tracker | PPA / wholesale export, lease economics | Geotech, civil, interconnection capacity, land use |
| **Community solar** | 500 kW – 5 MW (often capped) | Ground mount or large rooftop | Subscriber bill credits under state program | Program cap compliance, subscriber management, siting |

**C&I rooftop** is the most common commercial work and the focus of much of this page. **Community solar** is a regulatory construct (defined by state program rules) layered onto a ground-mount or large-rooftop physical design; its sizing and interconnection follow the host-utility rules plus the program's capacity cap.

## Commercial Roof Assessment

Most C&I rooftops are **low-slope** (≤ 2:12) with a single-ply membrane. The membrane type, attachment method, and structural capacity together decide whether — and how — an array can go on.

### Membrane and Roof Types

| Roof type | Description | PV attachment notes |
|-----------|-------------|--------------------|
| **TPO** (thermoplastic polyolefin) | White single-ply, heat-welded seams; very common on new commercial | Ballasted or membrane-bonded; flashed penetrations weldable by membrane manufacturer |
| **EPDM** (rubber) | Black single-ply, glued/taped seams | Ballasted common; penetrations need compatible flashing boots |
| **PVC** | Single-ply, heat-welded; chemical resistant | Similar to TPO; weldable flashings |
| **Built-up / mod-bit (BUR)** | Multi-ply asphalt/gravel | Heavier deck often available; flashing more involved |
| **Standing-seam metal** | Common on industrial/agricultural | Clamp-on (non-penetrating) rail — preferred, no warranty impact |
| **Exposed-fastener metal / R-panel** | Lower-cost metal | Penetrating attachment with sealed fasteners |

### Ballasted vs. Mechanically Attached

| Factor | Ballasted | Mechanically attached |
|--------|-----------|----------------------|
| Roof penetration | None (or minimal) | Many (lag/standoff into structure) |
| Added dead load | High — ~3–6+ lb/ft² (psf), concentrated at ballast trays | Low — ~2.5–4 psf |
| Wind performance | Relies on mass + aerodynamics; wind tunnel-tested racking | Anchored — better in high-wind / high-seismic |
| Roof warranty | Easier to preserve (no penetrations) | Requires membrane manufacturer-approved flashing |
| Structural demand | Must verify deck and joists carry concentrated ballast | Point loads at attachments |
| Tilt | Usually low (5°–10°) to limit wind/ballast | Any |

> **Always confirm available roof structural capacity before fixing the array type.** Many older commercial roofs cannot accept a fully ballasted system. A structural PE must verify that the deck, joists, beams, and columns carry the new PV dead load **plus** the existing snow/live load — corner and edge (perimeter) zones govern wind uplift and often dictate added ballast or attachment density.

### Roof Warranty and Condition

- **Remaining roof life** should comfortably exceed the array's ~25–30-year life. Installing PV over a roof with < 10 years left invites a costly remove-and-reinstall.
- **Membrane manufacturer warranty** is voided by unapproved penetrations or incompatible materials. Coordinate flashing details and obtain the manufacturer's sign-off; some require their own crew or certified installer for penetrations.
- **Parapets** create wind shelter (reducing perimeter uplift) but also fire-access and drainage considerations, and can obstruct low rows from sun — set back rows for fire pathways and account for parapet shading.

### Other Rooftop Constraints

- **Equipment and obstructions** — HVAC units, skylights, vents, drains create shading and keep-out zones; maintain access.
- **Fire-access pathways and setbacks** — required around rooftop arrays (see [Commercial Solar Codes & Fire Requirements](./commercial-codes.md)); they reduce usable area, often by 15–30%.
- **Drainage** — ballast trays must not dam roof drainage; keep crickets and drains clear.

## Three-Phase Electrical Service

Commercial buildings are served by **three-phase power**, which delivers more power per conductor than single-phase and matches commercial inverters.

### Common Commercial Service Voltages (U.S.)

| Service | Configuration | Phase-to-neutral | Typical use |
|---------|--------------|------------------|-------------|
| **208Y/120 V** | Wye, 3-phase 4-wire | 120 V | Small/medium commercial, offices, retail |
| **480Y/277 V** | Wye, 3-phase 4-wire | 277 V | Large commercial/industrial; 277 V lighting |
| **240 V delta** (often with high-leg) | Delta, 3-phase | varies | Older/light industrial |
| **480 V delta** | Delta, 3-phase 3-wire | — | Industrial motor loads |

> **480Y/277 V is the workhorse of larger commercial PV.** Higher AC voltage means lower current for the same power, smaller conductors, and direct compatibility with 480 V three-phase string inverters. 208 V services are common on smaller buildings but require ~2.3× the current of 480 V for the same kW — and many string inverters derate at 208 V.

Three-phase line-to-line voltage relates to line current and power by:

```
P_3ph = √3 × V_LL × I_L × pf
```

where `V_LL` is line-to-line voltage, `I_L` is line current, and `pf` is power factor (≈ 1.0 for PV inverters operating at unity).

### Transformers and Switchgear

- Where inverter voltage does not match the service (e.g., a 480 V inverter on a 208 V service, or a 600 V-class inverter on a 480 V service), a **step-up/step-down transformer** is added. Larger ground mounts use a dedicated **PV step-up transformer** to medium voltage.
- The point of interconnection is typically **switchgear**, a **panelboard**, or a **main distribution panel (MDP)**. Available busbar ampacity at this point constrains load-side interconnection (below).
- **Available fault current (AIC)** at the point of connection must be verified — overcurrent devices and equipment must be rated for it.

## Interconnection at Scale

Where and how the PV ties to the building's electrical system is the single biggest cost/feasibility driver after the roof. Two families exist under **NEC Article 705**.

### Load-Side vs. Supply-Side (Line-Side) Connection

| | **Load-side** (705.12) | **Supply-side / line-side tap** (705.11) |
|---|---|---|
| Connection point | Onto a busbar/panel downstream of the service main | Between the utility meter and the service disconnect (ahead of the main) |
| Governing rule | Busbar-protection rules incl. the **120% rule** | Tap/splice rules; equipment listed for line-side use |
| Limiting factor | Busbar ampacity vs. main + backfed PV breaker | Service-entrance conductor ampacity |
| When used | PV ≤ what the busbar allows | When the busbar cannot accept the PV; large systems |
| Pros / cons | Cheap, simple, but capped by busbar | Unlimited by busbar, but utility approval + service work |

**The 120% rule (NEC 705.12(B)(3)(2)):** for a busbar fed from one end, the sum of the main overcurrent device rating plus 125% of the inverter output current breaker must not exceed **120% of the busbar rating** when the backfed PV breaker is placed at the opposite end of the busbar from the main. Other 705.12 options include the **sum-of-breakers** method and connections **designed under an engineer's supervision**.

```
Example (load-side, 120% rule):
  Busbar rating ........................ 800 A
  120% of busbar ....................... 960 A
  Main breaker ......................... 800 A
  Headroom for backfed PV breaker ...... 960 − 800 = 160 A
  Max PV breaker (opposite end) ........ 150 A (next std size ≤ 160 A)
  → Max continuous inverter output ..... 150 / 1.25 = 120 A
```

> **In a commercial (non-dwelling) occupancy, NEC 705.11/705.12 also governs tap conductor length and overcurrent placement.** Supply-side taps require equipment listed/suitable for line-side use and almost always require explicit utility approval — engage the utility early.

### Utility Studies

Beyond the small-system fast track, commercial interconnection triggers a **study process** (pre-application/feasibility → system impact study → facilities study → interconnection agreement). See [Commercial Permitting & Interconnection](./commercial-permitting.md) for the full workflow, IEEE 1547 / UL 1741-SB requirements, and FERC-vs-state jurisdiction.

## System Sizing Drivers

Commercial array size is rarely "fill the roof." It is bounded by several factors — the smallest wins:

| Driver | Effect on sizing |
|--------|-----------------|
| **Available roof/land area** (after setbacks, obstructions) | Physical upper bound |
| **Bill offset target** | Avoid producing more than annual consumption where excess is poorly compensated |
| **Export caps / net-billing rules** | Some tariffs cap or poorly value exported kWh — favors self-consumption sizing |
| **Demand-charge reduction goal** | PV (and storage) sized to shave peak kW, not just kWh |
| **Interconnection limit** | Busbar (120% rule) or utility-allowed capacity |
| **Budget / IRR target** | Marginal kW past the offset point have weaker economics |

Demand-charge reduction and self-consumption vs. export economics are developed with worked numbers in [Commercial Sizing & Calculations](./commercial-sizing.md).

## Equipment Selection

### Three-Phase String Inverters vs. Central Inverters

| | **Three-phase string inverters** | **Central inverters** |
|---|---|---|
| Power class | ~25–350 kW each | ~500 kW – 4 MW+ |
| Architecture | Distributed across roof/array | Centralized in a skid/pad |
| MPPT granularity | Multiple MPPTs per inverter | Fewer MPPTs over many strings |
| Redundancy | Loss of one = small % of plant | Loss of one = large block offline |
| Best fit | C&I rooftop, carports, smaller ground mount | Large utility-scale ground mount |
| O&M | Replace in field; no spare on site | Specialized service; longer downtime |

Most commercial rooftop and carport systems today use **three-phase string inverters**; central inverters dominate large ground mounts.

### Optimizers and Module-Level Electronics

Power optimizers (MLPE) provide module-level MPPT and rapid shutdown, useful on shaded or complex roofs and for NEC 690.12 rapid-shutdown compliance. A recent commercial trend is **fixed-string-voltage** architecture, where optimizers hold each string at a constant DC voltage (e.g., ~1250–1300 Vdc), allowing far longer strings, fewer combiners/fuses, and reduced balance-of-system cost on large rooftops. ([SolarEdge TerraMax overview](https://www.solarpowerworldonline.com/2025/08/boost-efficiency-and-save-on-bos-with-fixed-string-voltage-architecture-how-solaredge-terramax-1500v-inverters-and-h-series-power-optimizers-transform-large-scale-commercial-pv-design/))

### 1500 V Architecture

Commercial and utility design has moved decisively from **1000 V** to **1500 Vdc** system voltage. Higher DC voltage means **lower current** for the same power, which cuts resistive (I²R) losses on long DC runs, allows longer strings (fewer combiners, fuses, and terminations), and reduces conductor and balance-of-system cost. New **1500 V three-phase string inverters** in the ~250–350 kW class (e.g., Solis S6, SMA Sunny Highpower PEAK3, SolarEdge TerraMax) are now standard for large rooftop and ground-mount work. ([1500 V string inverter overview](https://www.aforenergy.com/the-real-world-value-of-a-1500v-string-inverter-in-modern-solar-projects/))

> **1500 V is a system-level decision.** Modules, connectors, conductors, combiners, disconnects, and inverters must all be rated for 1500 Vdc. The benefit grows with array size and DC-run length — it is most valuable on large rooftops, carports, and ground mounts; less so on small rooftops.

## DC-to-AC Ratio and Clipping Strategy

The **DC/AC ratio** (inverter loading ratio, **ILR**) is the ratio of installed DC nameplate (STC) to inverter AC rating. Commercial designs intentionally **oversize DC** relative to the inverter:

- Real-world DC output rarely reaches STC nameplate (temperature, soiling, angle, degradation), so a 1:1 ratio under-utilizes the inverter.
- An ILR around **1.2–1.4** keeps the inverter near full output for more hours, improving energy yield and lowering $/kWh.
- Above the inverter's rated power, output is **clipped** (capped) at the AC limit. A small amount of clipping at midday peak is economically optimal; too much wastes DC.

> **Higher demand charges and flatter export value push ILR up.** Oversizing DC fills the morning/evening shoulders where the building still consumes the energy, and a modest clipped midday peak is acceptable. Quantify the clipping trade-off in production modeling — see [Commercial Sizing & Calculations](./commercial-sizing.md).

## O&M and Monitoring Design

Design for operations from day one:

- **Monitoring** — inverter-level data at minimum; string- or module-level for fault localization on large arrays. Include revenue-grade metering where a PPA or community-solar program requires it, and on-site weather/irradiance sensors for performance-ratio tracking on larger plants.
- **Performance ratio (PR) and availability** — define SLA targets; alarm on underperformance.
- **Access and safety** — maintainable walkways, labeled disconnects, rapid-shutdown initiation devices, and arc-flash labeling.
- **Spares and serviceability** — string inverters are field-replaceable; stock fuses, connectors, and at least a swap inverter for fleets.
- **Cleaning and vegetation** — soiling, snow, and (ground mount) vegetation/erosion management.

## Single-Line Overview (ASCII)

```
   PV ARRAY (1500 Vdc strings)
   ┌──────────────────────────┐
   │ [PV][PV]...  [PV][PV]...  │  ← modules + optional optimizers (MLPE)
   └──────────────┬───────────┘
                  │ DC strings
            ┌─────▼─────┐
            │ DC Combiner│ (fuses / disconnect; may be inverter-integral)
            └─────┬─────┘
                  │ DC
         ┌────────▼─────────┐
         │ 3-Phase String   │  (e.g., 250 kW, 1500 Vdc in / 480 V AC out)
         │ Inverter(s)      │  rapid shutdown, monitoring
         └────────┬─────────┘
                  │ AC (480Y/277 V)
            ┌─────▼─────┐
            │ AC Combiner│ / PV panel + PV disconnect
            └─────┬─────┘
                  │
         ┌────────▼─────────┐    (step-up xfmr if voltages differ)
         │  Point of Inter- │
         │  connection      │  ── Load-side (705.12, 120% rule) onto MDP busbar
         │  (MDP / SWGR)    │      OR Supply-side tap (705.11) ahead of main
         └────────┬─────────┘
                  │
          [ Utility Meter ] ── UTILITY SERVICE  →  Building loads
```

## Sources & Further Reading

- [Commercial Solar Codes & Fire Requirements](./commercial-codes.md) — structural, fire, and electrical code basis
- [Commercial Sizing & Calculations](./commercial-sizing.md) — worked sizing, ILR/clipping, demand charges
- [Commercial Permitting & Interconnection](./commercial-permitting.md) — utility studies, IEEE 1547 / UL 1741-SB, timelines
- [Building Codes & Standards Explained](./codes-standards-overview.md) — model-code system overview
- [Understanding Interconnected Power Production Sources — Greentech Renewables](https://www.greentechrenewables.com/article/understanding-interconnected-electric-power-production-sources)
- [The 120% Rule for Solar: NEC 705.12 Guide — GreenLancer](https://www.greenlancer.com/post/120-rule-for-solar)
- [The Real-World Value of a 1500 V String Inverter — Aforenergy](https://www.aforenergy.com/the-real-world-value-of-a-1500v-string-inverter-in-modern-solar-projects/)
- [Fixed String Voltage / TerraMax 1500 Vdc — Solar Power World](https://www.solarpowerworldonline.com/2025/08/boost-efficiency-and-save-on-bos-with-fixed-string-voltage-architecture-how-solaredge-terramax-1500v-inverters-and-h-series-power-optimizers-transform-large-scale-commercial-pv-design/)
- [Design Recommendations for 1500 V String Inverters — PurePower](https://www.purepower.com/blog/design-suggestions-to-take-advantage-of-1500v-inverters)

---

*Educational and reference material only. This is not engineering, legal, or financial advice. Service voltages, busbar/interconnection rules, structural capacity, and equipment ratings are project-specific. Verify all design decisions with the serving utility, the authority having jurisdiction (AHJ), the equipment manufacturers, and a licensed professional engineer (PE) before construction.*
