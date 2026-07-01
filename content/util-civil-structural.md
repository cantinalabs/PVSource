# Civil & Structural Engineering

Utility-scale solar plants are, at their core, **large civil and structural works**. A 200 MWdc project may span 1,200–1,800 acres, drive 60,000–120,000 steel piles, move hundreds of thousands of cubic yards of earth, and build miles of access road. The civil and structural scope governs cost, schedule, and long-term reliability far more than the electrical balance-of-system. This page covers the geotechnical investigation, foundation systems, load testing, earthwork, drainage, access, and racking structural design that EPCs and engineers must master.

See also: [Utility-Scale Solar Overview](util-overview.md), [Construction & Commissioning](util-construction.md), [Project Development & Finance](util-development-finance.md), and [Substations & Transmission Interconnection](util-substation.md).

> **Key point:** On a single-axis tracker plant, the **pile foundation is the single largest structural cost driver and the largest source of schedule and cost risk.** A poor geotechnical program that misses refusal, corrosive soils, or shallow rock can blow the budget through pile redesign, predrilling, or remediation after mobilization.

## Geotechnical Investigation

The **geotechnical investigation** characterizes the subsurface so foundations can be designed for the actual site rather than conservative assumptions. It is the foundation (literally) of the structural design and is normally completed during late-stage development or early engineering, well before Notice to Proceed.

### Scope and Field Exploration

A typical utility-scale geotechnical program combines:

| Method | Purpose | Typical Density |
|---|---|---|
| **Soil borings (SPT)** | Standard Penetration Test N-values, sampling, stratigraphy, groundwater | Roughly 1 boring per 5–40 acres, scaled to variability |
| **CPT soundings** | Continuous cone tip/sleeve resistance, fast stratigraphy | Often interspersed with borings |
| **Test pits** | Shallow conditions, rippability, cobbles/boulders | Localized |
| **Thermal resistivity** | Trench/conductor ampacity (per IEEE 442) | Selected locations |
| **Corrosivity suite** | Pile/conductor corrosion design | Selected locations |

Boring and sounding density is driven by **site variability**, not a single fixed rule. Industry practice for PV foundations often references on the order of **one boring or CPT per ~2 acres** in variable terrain, with wider spacing on uniform sites. The geotechnical engineer should base the layout on terrain, geology, and the racking vendor's requirements rather than a blanket number.

> **Field tip:** Refusal — where the SPT sampler or driven probe cannot advance — flags rock, cemented layers, cobbles, or dense soils that will stop a vibratory/impact pile hammer. Mapping refusal depth across the array is essential to predict **predrilling** quantities, which are a major cost and schedule item.

### Soil Properties for Foundation Design

Key parameters the geotech report must deliver:

- **SPT N-values / CPT tip resistance (qc)** versus depth — drive lateral and axial capacity.
- **Undrained shear strength (Su)** for cohesive soils.
- **Friction angle (phi)** and unit weight for granular soils.
- **Groundwater table** depth and seasonal range.
- **Expansive/collapsible soil potential**, frost depth, and seismic site class.

### Corrosivity Testing

Driven steel piles spend decades partly buried; **soil corrosivity** dictates galvanizing thickness, sacrificial section, or coatings. The standard suite includes:

- **Soil resistivity** (Wenner four-pin field test and/or lab box) — the single most influential corrosion parameter. Lower resistivity = more aggressive.
- **pH**
- **Chlorides and sulfates**
- **Redox potential** and moisture content.

Results feed a corrosion classification that sets the **galvanizing mass (e.g., G90/G115 or hot-dip per ASTM A123)** and any **section-loss sacrificial allowance** added to the embedded pile over the design life (typically 25–40 years).

### Thermal Resistivity

Underground MV cable and trench design depends on the soil's ability to dissipate heat. **Thermal resistivity testing per IEEE 442** measures soil thermal resistivity (in °C·cm/W or K·m/W) across a moisture range, including a **dry-out curve** from optimum moisture down toward zero. High dry-season thermal resistivity can force larger conductors, special thermal backfill, or shallower/wider trenches.

```
Thermal dry-out concept (schematic):

 Thermal      |
 resistivity  |                          .  (dry, worst case)
 (°C·cm/W)    |                      .  '
              |                .  '
              |          .  '
              |   .  '   (wet, best case)
              +-------------------------------
                low <-- soil moisture --> high
```

## Foundation Systems

The racking vendor and geotech jointly select a foundation type. The four common families:

### Driven Steel Piles (Most Common)

A **driven steel pile** — typically a galvanized W-shape (wide-flange), C-channel, or hat/U section — is hammered directly into the soil with a vibratory or impact pile driver. It is the default for utility-scale trackers because it is fast (hundreds to thousands of piles per day across a crew fleet), low-cost, and needs no concrete cure.

- Embedment typically **5–10 ft**; reveal set by terrain and module height.
- **Predrilling** (pilot holes) is used in hard/rocky soils to reach embedment without buckling the pile.
- Sensitive to refusal and lateral capacity in soft soils.

### Screw / Helical Piles

A **helical (screw) pile** is rotated into the ground with a torque motor. Installation torque correlates to capacity, giving real-time verification. Favored where driven piles meet early refusal or where higher uplift capacity is needed, but slower and more expensive per pile.

### Ground Screws

Smaller threaded screws used on lighter structures or shallow-bedrock sites.

### Ballasted Foundations

**Ballast** (concrete blocks or trays) resists loads by mass rather than embedment. Used where penetration is impossible — capped landfills, brownfields, shallow rock, or geomembrane sites — at the cost of large concrete quantities and tight wind-load limits.

### Drilled / Cast-in-Place Piers

**Drilled shafts** (auger a hole, set rebar/anchor, pour concrete) deliver the highest capacity and are used at high-wind sites, for combiner/inverter skids, and where driven piles fail. They are the most expensive and slowest option.

| Foundation | Speed | Relative Cost | Best Use |
|---|---|---|---|
| Driven steel pile | Fastest | Lowest | Normal soils (default) |
| Helical/screw | Medium | Medium | Early refusal, high uplift |
| Ballast | Medium | High (concrete) | No-penetration sites |
| Drilled pier | Slowest | Highest | High wind, rock, heavy equipment |

## Pile Load Testing

Before production driving, a **pile load test program** validates the geotechnical assumptions and finalizes embedment depths. Tests are also run on a small percentage of production piles for QA.

### Test Types

- **Lateral load test** — a hydraulic jack pushes the pile head horizontally; deflection vs. load verifies resistance to wind/tracker torque loads (governs tracker piles).
- **Axial compression test** — vertical downward load for bearing capacity.
- **Axial tension / pull-out (uplift) test** — verifies resistance to wind uplift, critical because solar arrays are light and uplift-governed.

```
Lateral load test (plan/elevation):

      jack & load cell
        =====>||  pile head
              ||
   ground ----||----------------- grade
              ||  embedment (test variable)
              ||
              ||
            (toe)

   Record deflection at each load increment;
   compare to acceptance deflection limit.
```

### Program Structure

A test program typically uses:

1. **Pre-production (design verification) tests** — a statistically meaningful set across soil zones to set or confirm embedment by zone before mass driving.
2. **Production QA tests** — a small fraction of installed piles (commonly cited around **~0.5% of production piles**) tested as the work proceeds.

Acceptance is usually defined by a **deflection limit at a factored load** (load and deflection criteria per the structural EOR and racking vendor). Embedment may be increased in zones that fail, sometimes triggering predrill or section changes.

> **Schedule note:** Run load tests **early** — ideally during a pre-construction test-pile campaign — so embedment by soil zone is locked before the production pile fleet mobilizes. Discovering a capacity shortfall after full mobilization is one of the costliest schedule events on a solar EPC.

## Grading & Earthwork

The goal of modern utility-scale grading is to **minimize earthwork** while keeping the array within the tracker's mechanical slope tolerance.

### Terrain-Following Design

Single-axis trackers tolerate **north-south slopes (along the row)** within vendor limits (often up to ~10–20%, vendor-specific) and tighter **east-west (cross-slope)** limits. **Terrain-following layouts** flex pile reveal heights row-by-row to track the natural ground, dramatically reducing mass grading. Grading is reserved for:

- Areas exceeding tracker slope tolerance.
- Excessive **cross-slope** that would over-rack or shade rows.
- Equipment pads, roads, and the substation.

### Cut/Fill Balance

Engineers target a **balanced cut/fill** (earthwork moved on-site, no costly import/export). A grading model computes cut and fill volumes; the design iterates to balance them and stay within slope tolerances.

```
Terrain-following vs. mass grading:

 Mass grading:        Terrain-following:
   ___________          /\    reveal varies
  /  (cut/fill /\        \  /\  per row
 /   to flat) /  \        \/  \___
====graded====       ~~natural grade~~
  high earthwork       minimal earthwork
```

## Drainage & Stormwater

Disturbing 1,000+ acres makes **stormwater management** a major civil discipline and a regulatory requirement.

- A **SWPPP (Stormwater Pollution Prevention Plan)** is required under the federal NPDES Construction General Permit for sites disturbing ≥1 acre, administered by EPA or the delegated state.
- Design includes **conveyance (swales, culverts, channels)**, **detention/retention basins** to control post-development peak flows, and **outfall** protection.
- Permanent and temporary **Best Management Practices (BMPs)** control sediment during and after construction.

## Access Roads

A plant needs **all-weather access roads** for construction logistics, MV equipment delivery, and O&M:

- A graded, compacted **aggregate (gravel) base**, crowned and drained.
- A perimeter road plus interior arteries to inverter/combiner skids and the substation.
- Designed for the heaviest delivery (transformer trailers) and turning radii for cranes/boom trucks.

## Racking Structural Design

The **tracker/racking structure** is engineered to code for the site's environmental loads.

### Governing Loads & Codes

- **ASCE 7** — the controlling load standard for **wind, snow, seismic, and dead loads.** Wind is usually the governing load on trackers; the site's **basic wind speed**, exposure category, and topographic factors are pulled from ASCE 7 wind maps.
- **AISC 360** — steel member and connection design (allowable strength / LRFD).
- **AISI** — cold-formed steel members (purlins, channels).
- **Aeroelastic / wind-tunnel testing** — large trackers are validated for **dynamic wind effects (galloping, flutter, torsional instability)**; vendors publish stow strategies and a **stow wind speed** above which the tracker rotates to a protected angle.

### Key Structural Considerations

- **Pile reaction loads** (lateral, axial, uplift) flow from the structural model into the foundation design and load-test acceptance criteria.
- **Snow load** governs in northern climates — module tilt, ground clearance, and stow position matter.
- **Wind stow** — trackers stow flat or at a defined angle to shed wind; the controller integrates anemometer data.
- **Module mechanical load ratings** (front/back per IEC 61215) must envelope the design snow/wind loads.

> **Key point:** The structural Engineer of Record (EOR) ties it all together — ASCE 7 loads → tracker structural model → pile reactions → geotechnical capacity → load-test acceptance. A break anywhere in that chain (e.g., wind speed understated, or geotech capacity overstated) propagates into field failures.

## Erosion Control & Revegetation

Final stabilization closes out the civil scope and the SWPPP:

- **Erosion control BMPs** during construction: silt fence, fiber rolls, stabilized construction entrances, inlet protection, temporary seeding.
- **Permanent revegetation** — native or low-grow seed mixes, sometimes **pollinator-friendly habitat** or **agrivoltaic grazing** vegetation.
- Establishment of stable vegetation is required to terminate the NPDES construction permit and is often a permit condition.

## Worked Example: Estimating Pile Quantity

```
Given a 150 MWdc single-axis tracker plant:
  - Module: 600 W
  - Modules per row (table): 90
  - Piles per row: 9 (one per ~10 modules, vendor-specific)

Step 1 - module count:
  150,000,000 W / 600 W = 250,000 modules

Step 2 - rows:
  250,000 / 90 = ~2,778 rows

Step 3 - production piles:
  2,778 rows x 9 piles/row = ~25,000 piles

(Illustrative only - actual piles/row, table size, and
 motor/bearing piles vary by tracker vendor and layout.)
```

## Sources & Further Reading

- [PVRack — Solar Mounting Foundations: Structural & Geotechnical Design Guide](https://pvrack.com/foundations/)
- [PVRack — Pile-Driven Foundation Design, Installation & Performance Guide](https://pvrack.com/foundations/pile-driven-foundation/)
- [Solar Plantation — Geotechnical and Pile Testing for Solar Foundations](https://www.solarplantation.ca/geotechnical-and-pile-testing-for-solar-foundations/)
- [ASCE 7 — Minimum Design Loads and Associated Criteria for Buildings and Other Structures](https://www.asce.org/publications-and-news/asce-7)
- [AISC 360 — Specification for Structural Steel Buildings](https://www.aisc.org/)
- [EPA — NPDES Construction General Permit & Stormwater](https://www.epa.gov/npdes/stormwater-discharges-construction-activities)
- IEEE 442 — Guide for Soil Thermal Resistivity Measurements
- ASTM A123 — Hot-Dip Galvanized Coatings on Steel Products

---
*Disclaimer: This material is for general educational reference only and is not engineering advice; site-specific geotechnical and structural design must be performed by a licensed professional engineer.*
