# Floating Solar (Floatovoltaics)

**Floating photovoltaics (FPV)**, colloquially **floatovoltaics**, are PV plants mounted on buoyant structures deployed on inland water bodies: reservoirs, irrigation and mining ponds, quarry lakes, wastewater basins, and increasingly the calmer margins of hydropower impoundments. FPV occupies otherwise-unused water surface, avoids competition with agriculture and habitat, and frequently sits adjacent to existing grid infrastructure. This page covers the drivers, float and mooring engineering, electrical and corrosion design, environmental effects, cost premium, and hydro-PV hybridization relevant to utility-scale developers and EPCs.

For adjacent topics see [Trackers & Fixed-Tilt Mounting](util-trackers.md), [Inverters & Medium-Voltage Collection](util-inverters-collection.md), [Solar-Plus-Storage Hybrid Plants](util-solar-storage-hybrid.md), and [PV Modules Deep-Dive](fundamentals-pv-modules.md).

## Why Float PV? Core Drivers

FPV is rarely the lowest-cost way to deploy a megawatt. It wins where **land is scarce, expensive, or contested**, and where the water body brings co-benefits the developer can monetize or that a host utility values.

| Driver | Mechanism | Notes for developers |
|---|---|---|
| **Land scarcity / land value** | Uses water surface instead of buildable or arable land | Primary driver in dense Asian and island markets; also mine-closure and utility reservoir reuse |
| **Water-cooling yield bump** | Water below the array moderates module temperature, cutting thermal losses | Reported energy gains commonly cited in the range of roughly **5-15%** vs an equivalent land array, but strongly design- and site-dependent (see caution below) |
| **Reduced evaporation** | Panels and floats shade the surface, cutting evaporative loss and suppressing wind-driven mixing | Valuable for water utilities, irrigation districts, and arid-region reservoirs |
| **Algae / water-quality management** | Shading limits photosynthetically driven algal blooms in some basins | Site-specific; can also harm ecosystems (see Environmental Effects) |
| **Hydro co-location** | Shared substation, transmission, water-management synergy, and complementary generation profile | The strongest emerging value case; see Hydro-PV Hybrids |

> **Yield caveat:** The often-quoted "5-15% cooling gain" is heavily marketed and depends on whether floats are open-cavity (good water contact and airflow, better cooling) or fully surface-covering (poorer cooling). Independent long-term field data show gains that are often smaller and vary by climate. Treat cooling uplift as a site-specific value to be simulated and measured, not a fixed multiplier. See the yield-bump discussion in [PV Modules Deep-Dive](fundamentals-pv-modules.md).

## Float and Pontoon Systems

Two broad architectures dominate:

- **Pure-float (pontoon) systems.** Each module or small module group sits on individual HDPE (high-density polyethylene) floats that interlock into a continuous walkable raft. Main floats carry modules at a fixed tilt (typically low, ~5-15 degrees to limit wind load and inter-row shading); secondary floats provide buoyancy and walkways. This is the mainstream utility approach.
- **Pontoon-and-truss / metal-frame systems.** Modules mount on a galvanized-steel or aluminum space frame supported by discrete pontoons or drums. These allow higher tilts and larger spans but add cost and corrosion surface.

```
  Cross-section of a typical pontoon FPV row
  ---------------------------------------------------------
        module (low tilt)
         \______________
          |             |
     [main float]   [main float]     <- carry modules
       \\           //
        [secondary float / walkway]   <- buoyancy + access
  ~~~~~~~~~~~~~~~~ water surface ~~~~~~~~~~~~~~~~~~~~~~~~~~~
        anchor line to bed / bank        (mooring)
```

Design considerations: buoyancy margin for wind uplift and maintenance foot traffic, UV- and hydrolysis-resistant HDPE, drainage to prevent ponding, walkway access for O&M, and cable-management trays that keep conductors out of standing water.

## Anchoring and Mooring

Mooring is the defining engineering challenge of FPV. The array must stay positioned and survive loads while **the water level changes** and wind and waves act on a large sail area.

| Mooring type | Where used | Trade-offs |
|---|---|---|
| **Bank / shore anchoring** | Small ponds, narrow reservoirs | Simple; limited by shoreline geometry and reach |
| **Bottom (bed) anchoring** | Most reservoirs | Drag/pile/screw anchors or concrete deadweights on the bed; must accommodate depth |
| **Tension-leg / elastic mooring** | Large or fluctuating-level sites | Springs, elastic cushions, or catenary chains keep line tension as level moves |
| **Pile / guide-pile systems** | Shallow, stable-level basins | Rigid vertical guidance; array slides up/down the pile with level |

Key load cases:

- **Water-level variation.** Hydropower and irrigation reservoirs can swing many meters seasonally. Mooring must maintain tension and keep the array off banks and intakes across the full drawdown/fill range. Elastic or catenary systems absorb this; pile systems require adequate pile length.
- **Wind and wave loads.** The array is a large low-profile sail; wind drives horizontal thrust and wave action drives fatigue. Fetch, basin bathymetry, and design wind speed set the mooring-line count and anchor capacity. Wave loads are usually modest on sheltered inland water but must be assessed for large open reservoirs.
- **Ice.** In cold climates, ice sheet movement and thrust are additional governing loads.

## Electrical and Corrosion Design

The over-water environment is electrically and materially demanding.

- **Corrosion and humidity.** Persistent high humidity, condensation, and (in some basins) mildly aggressive or saline water accelerate corrosion. Use marine-grade stainless fasteners, higher galvanizing classes or aluminum frames, and corrosion-rated connectors and enclosures.
- **Cable management and water ingress.** DC strings and AC feeders must be routed on trays above the waterline with generous drip loops; connectors kept dry. Submerged or splashed connectors are a leading failure and safety mode.
- **Grounding, bonding, and ground faults.** A conductive water plane complicates earthing and touch-potential control. Careful equipotential bonding of the raft, and ground-fault detection tuned for the environment, are essential for personnel safety on walkable arrays.
- **PID and moisture.** High humidity raises the risk of potential-induced degradation and moisture ingress; specify PID-resistant modules and robust encapsulation.
- **MV collection.** Floating or shore-mounted transformers and combiners bring the same [medium-voltage collection](util-inverters-collection.md) discipline as ground-mount, plus the question of whether to place inverters/transformers on floating platforms (shorter DC runs, more marine exposure) or onshore (longer DC/AC runs, easier service).

## Environmental Effects

FPV's environmental footprint is genuinely dual-edged and increasingly scrutinized in permitting.

**Potential benefits:** reduced evaporation, suppression of some algal blooms, and no land-use conversion. **Potential harms and open questions:**

- **Dissolved oxygen and stratification.** Large surface coverage can reduce wind mixing and light penetration, potentially lowering dissolved oxygen and altering thermal stratification, with effects on fish and benthic life.
- **Aquatic ecosystems and birds.** Shading changes primary productivity; structures alter waterbird use. Effects depend on coverage fraction, basin type, and layout.
- **Water quality.** Outcomes vary by water body; blanket claims of improvement are not supported for all sites.

> Because effects are basin-specific, coverage fraction (often kept well below 100%), layout, and monitoring are becoming standard permitting levers. Early ecological baseline studies reduce project risk.

## Cost Premium vs Ground-Mount

FPV carries a capital-cost premium over ground-mount, driven by floats, mooring, marine-grade balance of system, and more complex installation and O&M logistics (boats, over-water labor). The premium has narrowed as the supply chain matured but remains material. The economics improve where avoided land cost, avoided grading/civil works, cooling uplift, and water co-benefits offset the added hardware. Developers should model FPV against a like-for-like ground-mount case on a full-lifecycle basis rather than on module count alone.

## Hydro-PV Hybrids and Grid Benefits

Co-locating FPV on hydropower reservoirs is the most compelling utility case:

- **Shared infrastructure.** The hydro plant's substation, transmission, switchyard, and grid connection can serve the PV, cutting interconnection cost and time.
- **Complementary generation.** Solar generates in daylight; hydro can throttle back and conserve water when the sun is up, then dispatch stored water into evening and cloudy periods, effectively using the reservoir as storage. This firms the combined output and improves capacity value.
- **Water management.** Reduced evaporation preserves head and generation capacity.

This pairing is a natural sibling to battery-based [Solar-Plus-Storage Hybrid Plants](util-solar-storage-hybrid.md), with the reservoir providing a large, cheap energy buffer.

## Deployment Status and Notable Projects

FPV scaled rapidly through the early 2020s, with cumulative global installed capacity reported on the order of several gigawatts-peak (roughly 9-13 GW range cited by industry trackers by the mid-2020s), concentrated in China, and across South and Southeast Asia. Representative large projects (verify current status before citing):

| Project | Location | Approx. capacity | Note |
|---|---|---|---|
| **Cirata FPV** | Cirata Reservoir, West Java, Indonesia | ~145 MWac (~192-195 MWp) | Inaugurated Nov 2023; co-located with the ~1 GW Cirata hydropower plant |
| **Three Gorges / Huainan** | Anhui, China | ~150 MW | Built on a flooded former coal-mining subsidence area; commissioned ~2018 |
| **Tengeh Reservoir** | Singapore | ~60 MWp | One of the world's larger inland FPV plants; land-scarce driver |
| **Yamakura Dam** | Japan | ~14 MW | Early landmark reservoir FPV |

> Numbers above are drawn from public reporting and industry summaries and should be re-verified against primary sources before use in a bid or study; capacities are frequently quoted inconsistently in MWac vs MWp.

## Design-Factor Summary

| Factor | Ground-mount | Floating PV |
|---|---|---|
| Foundation | Piles/ballast in soil | Buoyant floats + mooring |
| Governing structural load | Wind (+ snow) | Wind + wave + water-level change (+ ice) |
| Thermal environment | Warmer (radiant ground) | Cooler (water); potential yield uplift |
| Corrosion exposure | Moderate | High (humidity, condensation, water contact) |
| Land use | Consumes land | Uses water surface |
| CapEx | Baseline | Premium (floats, mooring, marine BOS) |
| O&M access | Vehicles/foot | Boats + walkable rafts |

## Pros and Cons

| Pros | Cons |
|---|---|
| No land-use conversion; sites near existing grid | Higher CapEx than ground-mount |
| Potential cooling yield uplift | Complex mooring for water-level swing and wind/wave |
| Reduced reservoir evaporation | Corrosion, humidity, and grounding challenges over water |
| Strong synergy with hydropower | Uncertain, site-specific ecological effects |
| Suits land-scarce and mine-closure sites | Harder, costlier O&M logistics |

## Sources & Further Reading

- [Floating solar — Wikipedia](https://en.wikipedia.org/wiki/Floating_solar)
- [Design and implementation of floating photovoltaics — Nature Reviews Clean Technology](https://www.nature.com/articles/s44359-026-00171-4)
- [The fundamentals of floating solar plants — RatedPower](https://ratedpower.com/glossary/floating-solar/)
- [World's Largest Floating Solar Power Plants — Accusolar](https://www.accusolar.com/blog/three-largest-floating-solar-farms-in-the-world/)
- Related site pages: [Trackers & Fixed-Tilt Mounting](util-trackers.md), [Inverters & Medium-Voltage Collection](util-inverters-collection.md), [Solar-Plus-Storage Hybrid Plants](util-solar-storage-hybrid.md), [PV Modules Deep-Dive](fundamentals-pv-modules.md)

*Disclaimer: This page is educational reference material; verify all figures, standards, and project data against primary sources and site-specific engineering before design or investment decisions.*
