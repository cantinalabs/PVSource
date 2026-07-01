# Carports & Solar Canopies

Solar carports (also called **solar canopies** or **parking canopies**) are elevated photovoltaic structures built over parking areas. Unlike rooftop systems that ride on an existing building, a carport is a purpose-built structure: it carries its own foundations, columns, beams, and PV racking while doing double duty as shade and weather protection for vehicles. For commercial and industrial (C&I) sites with large surface lots — retail centers, office campuses, fleet depots, schools, hospitals — canopies unlock generation capacity that a roof alone can't provide, and they position the array directly over the loads (vehicles, EV chargers) it most naturally serves.

This guide covers structure types, foundations and loading, clearance and accessibility, structural design, electrical routing, EV-charging integration, cost premiums, permitting, and use cases. For the array-level design that sits on top of these structures, see [Commercial System Design](commercial-design.md) and [Commercial Sizing & Calculations](commercial-sizing.md). For storage paired with canopy generation, see [Commercial Storage & Demand-Charge Management](commercial-storage.md).

> **Key idea:** A solar carport is a *structural engineering project first* and a PV project second. The steel, foundations, and stamped structural design typically drive more of the cost and schedule than the modules and inverters.

## Canopy structure types

Carport geometry is defined mainly by how the canopy is supported and how many parking rows it spans. The four archetypes below cover the vast majority of C&I installations.

### Single-cantilever (single-post)

A row of columns along **one edge** of the parking bay supports a beam that cantilevers out over the stalls. Vehicles park nose-in beneath the overhang with no columns at the front of the stall.

- Best for single rows of perpendicular parking against a curb or landscaped edge.
- Clean drive aisle, no center columns, easy snow-shedding to the open side.
- Higher steel weight per kW because of the cantilever moment.

### T-structure / inverted-Y (double-cantilever)

A **center row of columns** carries a beam that cantilevers in *both* directions, sheltering two facing parking rows from one foundation line. The inverted-Y variant flares the column head to widen the supported span.

- Excellent steel efficiency: one foundation line shades two rows.
- Ideal for double-loaded parking bays (two rows back-to-back).
- Center columns must be protected from vehicle impact (bollards/curbing).

### Long-span

Columns are placed only at the **ends or perimeter** of a large bay, with long primary beams/trusses spanning many stalls so the interior is column-free.

- Maximizes unobstructed parking and circulation underneath.
- Heaviest structural members; highest steel cost per kW.
- Favored where column placement is constrained (e.g., dense fleet yards, drive-through circulation).

### Full-cantilever

An aggressive cantilever (often single-post) where the canopy projects a long distance from a single column line with **no support at the free edge at all** — visually dramatic, used for showcase/entry canopies and high-end retail.

- Maximum architectural impact, fully open vehicle side.
- Most demanding structurally; deep foundations and heavy columns.
- Highest cost premium of the four.

### Comparison table

| Type | Column layout | Rows shaded | Relative steel/cost | Snow handling | Best fit |
|------|---------------|-------------|---------------------|---------------|----------|
| **Single-cantilever** | One edge row | 1 | Medium | Sheds to open side | Single-row perimeter parking |
| **T / inverted-Y** | Center row | 2 | Lowest per kW | Sheds both sides | Double-loaded bays (most common) |
| **Long-span** | Perimeter only | Many | High | Designed drainage needed | Column-free interiors, fleet yards |
| **Full-cantilever** | One row, long projection | 1–2 | Highest | Sheds to open side | Showcase / entry canopies |

> **Practical note:** The **T/inverted-Y** is the workhorse of C&I parking lots because it shades two rows per foundation line — the lowest cost per installed kW for typical double-loaded bays.

## Foundations & loading

Canopies transfer wind uplift, snow, and gravity loads through columns into the ground. Foundation choice depends on soil, frost depth, and the overturning moment from wind on a large sail-like surface.

| Foundation type | Description | Typical use |
|-----------------|-------------|-------------|
| **Drilled pier / caisson** | Deep concrete shaft, often 2–6 ft diameter, reinforced | Most common; handles high overturning moment |
| **Spread footing** | Wide reinforced concrete pad | Good bearing soils, lower-moment structures |
| **Helical / screw piles** | Steel piles screwed into soil | Fast install, poor/wet soils, reversible |
| **Driven piles** | Steel sections driven to refusal | Deep weak soils |

Key loading considerations:

- **Wind uplift dominates.** A canopy is a large horizontal surface; wind can lift and overturn it. Foundations and column-base connections are usually sized by uplift/overturning, not gravity.
- **Snow load** (where applicable) adds gravity load and governs beam/purlin sizing; drifting at canopy edges must be considered.
- **Geotechnical report required.** A site-specific soils investigation establishes bearing capacity and lateral resistance; never assume foundation depth without it.
- **Buried utilities & lot constraints** (existing storm drains, lighting, gas) frequently dictate where columns *can't* go, pushing designs toward long-span.

## Clearance heights, ADA & drainage

### Clearance

- Typical minimum clear height under the canopy is **8–10 ft** for passenger vehicles; **14–16 ft+** for fleet/truck/bus lots.
- Verify against any vehicles that must pass beneath (delivery trucks, fire apparatus access routes).
- Higher clearance increases wind exposure and column length — a cost and structural trade-off.

### ADA / accessibility

- Carports must preserve required **accessible parking stalls and access aisles** beneath them; columns and bollards cannot encroach on accessible routes.
- Maintain compliant slopes on accessible stalls and the path of travel.
- Local building code and the ADA Standards govern stall counts and dimensions; confirm during site layout.

### Drainage

- Canopies are sloped (single-slope or dual-slope) to shed water and snow. Concentrated runoff at the low edge must be managed so it doesn't dump onto pedestrian paths or accessible aisles.
- **Integrated gutters and downspouts** (often routed inside columns) carry water to the lot's storm system.
- Coordinate with the site civil/stormwater plan — added impervious shedding can trigger stormwater review.

> **Warning:** In snow regions, never let a canopy shed snow and ice onto walkways, EV chargers, accessible aisles, or building entrances. Orient slopes and plan snow-drop zones deliberately.

## Structural design (ASCE 7, PE stamp)

Carports are governed by the **International Building Code (IBC)** and the loading standard it references, **ASCE 7 (Minimum Design Loads and Associated Criteria for Buildings and Other Structures)**.

- **Wind loads** are derived from ASCE 7 using the site's basic wind speed, exposure category, and the open-structure/monoslope provisions appropriate to canopies. Open canopies experience both downward and **uplift** pressures.
- **Snow loads** (ground snow + exposure/thermal/slope factors) per ASCE 7 where applicable, including drift and sliding-snow effects.
- **Seismic** demands per ASCE 7 in higher-seismicity regions.
- **Load combinations** in IBC/ASCE 7 determine the controlling case; for many canopies the **wind uplift + minimum gravity** combination governs foundations and base connections.

A licensed **Professional Engineer (PE)** must perform and **stamp** the structural design — columns, beams, connections, and foundations — for the specific jurisdiction. Module-mounting purlins and racking are designed to transfer PV dead load, wind, and snow into the primary frame.

```
Load path (gravity + uplift):
  PV modules ─► purlins/racking ─► primary beams ─► columns ─► base plate / anchor bolts ─► foundation ─► soil
  Wind uplift reverses the gravity case: foundations resist overturning & pull-out.
```

## Electrical routing & trenching

Because the array sits over an open lot, conductors must travel from the canopy down through columns and across (or under) the lot to the building's electrical room or a pad-mounted equipment area.

- **In-column routing:** DC home-run conductors and string wiring are commonly routed down inside hollow steel columns to a junction at the base — clean and protected.
- **String inverters or combiners** may be mounted on columns or on an equipment pad; large canopies often use a central inverter/skid.
- **Underground trenching** carries conductors (in conduit/duct bank) from canopy columns back to the point of interconnection. Trenching across an active lot is a major cost and logistics item — phase the work to keep parking open.
- Provide **equipment pads** for inverters, transformers, switchgear, and (if applicable) battery enclosures near the point of interconnection.
- Follow the **NEC (NFPA 70)** for PV system wiring, grounding, rapid shutdown, and overcurrent protection, exactly as on any commercial array — see [Commercial System Design](commercial-design.md).

> **Cost driver:** Trenching and underground conduit across a parking lot frequently rivals the cost of the steel. Minimize trench length by siting inverters/switchgear near the canopy and the existing service.

## EV-charging integration under canopies

Canopies are a natural host for **EV charging** because the structure already shelters the parking stalls and provides protected conduit pathways down the columns.

- **Co-location synergy:** PV generation, EV load, and (optionally) storage sit in the same place, simplifying conductor runs and letting daytime solar offset charging load.
- **Conduit pathways:** Charger feeders can share the canopy's in-column and trenched routes; plan capacity and spare conduit during design.
- **Service capacity:** DC fast chargers add large loads and may trigger **demand charges** — pairing chargers with on-site solar and storage helps manage them (see [Commercial Storage & Demand-Charge Management](commercial-storage.md)).
- **Funding:** Public EV infrastructure may qualify for programs such as the federal **NEVI** (National Electric Vehicle Infrastructure) program and various utility make-ready/charging incentives; eligibility and program status vary by state and over time — confirm current rules before relying on them.

> **Design tip:** Even if chargers aren't installed on day one, run spare conduit and size pads/panels for future EV load. Retrofitting trenching later is far more expensive than provisioning it during construction.

## Cost premium vs rooftop

Solar carports cost meaningfully more per watt than rooftop systems because the project must pay for a complete structure and foundations that a rooftop borrows from the building.

- Industry figures place carports roughly **20%–75% more per watt** than comparable rooftop systems, with commonly cited points around **$3.15–$4.50/W** for carports versus roughly **$2.56/W** for rooftop ([EnergySage](https://www.energysage.com/solar/alternatives-to-rooftop-solar/what-is-a-solar-panel-carport/), [SolarTech](https://solartechonline.com/blog/solar-panel-carport-guide/)).
- The premium comes from **structural steel, foundations, stamped structural engineering, trenching, and lot work** — not the PV equipment.

The premium is often justified by:

- Generating where the **roof is unavailable, weak, or full**.
- **Vehicle protection** (shade, hail, snow) as a tenant/employee amenity.
- Co-located **EV charging** and storage.
- Visible **sustainability branding** at street-facing retail.

> Treat carport pricing as project-specific. The numbers above are industry reference points, not quotes — steel prices, soils, snow/wind loads, and trenching distance swing the figure widely.

## Permitting (building + structural)

Carports carry a heavier permitting burden than rooftop PV because they are new structures.

- **Building permit** for the structure itself, with a **PE-stamped structural package** (calcs + drawings) demonstrating ASCE 7 / IBC compliance.
- **Electrical permit** for the PV and EV wiring (NEC).
- **Zoning/site-plan review** — setbacks, height, lot coverage, landscaping, and sometimes design review for street-facing canopies.
- **Stormwater/civil review** if drainage or impervious shedding changes.
- **Geotechnical report** to support foundation design.
- **Utility interconnection** application for the generation (and any export) — see [Commercial System Design](commercial-design.md).

Plan for a longer timeline than rooftop: structural plan review and foundation inspections add steps that rooftop projects skip.

## Use cases

| Use case | Why a canopy fits |
|----------|-------------------|
| **Retail / shopping centers** | Customer shade + sustainability branding; large surface lots; street visibility |
| **Employee parking (office/campus)** | Amenity (shaded cars), generation where roofs are full or leased, EV charging for staff |
| **Fleet & logistics yards** | Shelter and charge electric fleets where they already park; high-clearance long-span designs |
| **Schools / municipal / hospitals** | Shaded parking, resilient power when paired with storage, public-facing sustainability |

## Sources & Further Reading

- [EnergySage — Solar Carports: Do They Make Sense?](https://www.energysage.com/solar/alternatives-to-rooftop-solar/what-is-a-solar-panel-carport/)
- [SolarTech — Solar Panel Carport Guide](https://solartechonline.com/blog/solar-panel-carport-guide/)
- [SolarTech — What Is a Solar Parking Canopy?](https://solartechonline.com/blog/what-is-solar-parking-canopy-guide/)
- [GreenLancer — The Essential Solar Carport Guide](https://www.greenlancer.com/post/solar-carports)
- [Solar Permit Solutions — Solar Carport Cost & ROI](https://www.solarpermitsolutions.com/blog/solar-carport-cost-guide)
- ASCE 7, *Minimum Design Loads and Associated Criteria for Buildings and Other Structures* (referenced by the IBC)
- NFPA 70 (National Electrical Code) — PV and EV charging wiring requirements

*This page is general educational information, not engineering, legal, or financial advice; verify all structural, code, and incentive details with licensed professionals and current local requirements.*
