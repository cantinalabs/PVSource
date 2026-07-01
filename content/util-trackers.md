# Trackers & Fixed-Tilt Mounting

The mounting system orients the modules to the sun and ties them to the ground. At utility scale the choice is overwhelmingly between **fixed-tilt** racking and **horizontal single-axis trackers (HSAT)**, and that choice drives energy yield, land use, foundation cost and O&M. This page explains how trackers work, the **backtracking** and **ground-coverage ratio (GCR)** concepts that govern row spacing, bifacial gain, and the energy-vs-cost trade-off. It builds on the [Utility-Scale Solar Overview](util-overview.md) and [Site Selection & Land](util-site-land.md).

## Fixed-Tilt vs Single-Axis Trackers

| Attribute | Fixed-tilt | Single-axis tracker (HSAT) | Dual-axis (niche) |
|---|---|---|---|
| **Moving parts** | None | Rotates E–W daily | Rotates on two axes |
| **Annual energy gain** | Baseline | **~+15–25%** vs fixed | A few % over single-axis |
| **Cost ($/W)** | Lowest | Modest premium (HSAT premium narrowed to ~$0.10/W) | Highest |
| **O&M** | Lowest | Motors, controllers, bearings | Highest, complex |
| **Best fit** | High latitude, heavy snow/wind, low land cost | Latitudes ~20°–45°, moderate terrain | Concentrating PV, special sites |

> **Key point:** HSAT is the default for most new U.S. utility-scale build and held the large majority of the single-axis tracker market in 2025. Fixed-tilt remains preferred where wind/snow loads, very high latitudes, or constrained/irregular sites erode tracker economics.

**Dual-axis trackers** add a second (elevation) axis to follow the sun's seasonal height. They squeeze out a few extra percent over single-axis but roughly double mechanical complexity and cost, so they are confined to niche and concentrating-PV applications — rarely justified for flat-plate utility PV.

## How Horizontal Single-Axis Trackers Work

An **HSAT** mounts modules on a horizontal **torque tube** running north–south. The tube rotates east-to-west through the day so the module plane tracks the sun's azimuth, holding the angle of incidence low from morning to evening.

```
           Morning            Noon              Evening
  Sun  \                       |                       /
        \                      |                      /
   ▔▔▔▔╲▔     →      ▔▔▔▔▔▔▔     →      ▔▔╱▔▔▔▔
   tilt E                flat                 tilt W
   (torque tube axis runs North–South, into the page)
```

- **Tracking range** is commonly **±55° to ±60°** of rotation.
- A **motor/gearbox or slew drive** turns one or several rows; modern designs may be **distributed** (a motor per row) or **linked** (one drive per long row of tables).
- A **controller** computes sun position by time/GPS and commands the angle, including backtracking and stow.

## Backtracking & Ground-Coverage Ratio (GCR)

**Ground-coverage ratio (GCR)** is the ratio of module area to total ground area:

```
GCR = collector_width / row_pitch
  - Higher GCR  → rows packed closer → more MW/acre, more self-shading
  - Lower GCR   → rows spread out    → less shading, more land per MW
```

Early and late in the day the low sun would cast one tracker row's shadow onto the next. **Backtracking** is the control strategy that *rotates rows back toward flat* in those hours so that no row shades its neighbor, trading a little direct-beam capture for the elimination of row-to-row shading losses.

```
Without backtracking (low sun)     With backtracking
   row1 ╲   shadow→ ▒▒ row2          row1 ─   row2 ─   (rows flattened,
        ╲                                              no mutual shading)
```

GCR is the key layout lever: typical utility tracker GCRs fall around **~0.30–0.45**. Raising GCR increases energy density (MW/acre) but increases backtracking losses and reduces rear-side irradiance for bifacial modules. The optimum is site- and price-specific. For row-spacing math, see the related calc page referenced in [Inverters & Medium-Voltage Collection](util-inverters-collection.md) and [Site Selection & Land](util-site-land.md).

```
Worked note — row pitch from GCR
  Given module table collector width  W = 4.0 m  (2-up in portrait)
  Target GCR = 0.33
  Row pitch  P = W / GCR = 4.0 / 0.33 ≈ 12.1 m  (center-to-center)
```

## Rows, Motors, Controls & Stow

- **Rows / tables.** Modules are grouped into tables along each torque tube; many tables make a tracker row.
- **Drives & controls.** Slew drives or linear actuators turn the tube; controllers handle astronomical tracking, backtracking and fault response.
- **Stow.** Trackers move to a protective position under hazardous conditions:
  - **Wind stow** — typically near-horizontal (flat) or a defined stow angle to cut wind load; dynamic/wind-aware stow mitigates aeroelastic galloping.
  - **Snow stow** — steep tilt to shed accumulation.
  - **Hail stow** — high tilt (e.g., ~60°) to present a glancing angle and reduce impact energy.

> **Design note:** Stow strategy and structural wind design (including aeroelastic/flutter behavior of long rows) are now first-order reliability concerns; hail stow in particular has become standard in hail-prone regions.

## Bifacial Gain & Albedo

Most utility modules are now **bifacial**, generating from rear-side irradiance reflected off the ground. The benefit, **bifacial gain**, depends heavily on ground **albedo** (reflectivity):

| Ground surface | Approx. albedo | Approx. bifacial gain |
|---|---|---|
| Natural vegetation / soil | ~0.20–0.25 | **< ~10%** |
| Gravel / light soil | ~0.30–0.40 | ~10–15% |
| High-albedo (white gravel, sand, snow) | ~0.5+ | **~20%** |

Trackers complement bifacial well: rear irradiance is highest at lower GCR and when rows aren't mutually shading, so layout (GCR), mounting height, and ground treatment are co-optimized with the bifacial gain target.

## Terrain-Following Trackers

Conventional trackers need relatively flat, graded ground. **Terrain-following** (a.k.a. undulating or articulated) trackers tolerate slope and grade changes along the row by segmenting the torque tube and allowing height variation between bearings — reducing earthwork and grading cost on rolling sites. They expand the buildable area on marginal terrain at some mechanical and design complexity.

## Energy Gain vs Cost Trade-Off

```
   Fixed-tilt ──(+~15–25% energy, modest $ premium)──► Single-axis tracker
   Single-axis ──(+few % energy, ~2x mechanical cost)──► Dual-axis
   ▲ Lower CAPEX/O&M, higher land use     Higher yield, more O&M ▲
```

The right answer is an LCOE optimization for the specific site: resource, land cost, labor, wind/snow/hail exposure, and module/tracker pricing all feed in. In mid-latitude U.S. markets with moderate terrain, single-axis trackers usually win; at high latitudes, on rugged or constrained sites, or where wind/snow loads are severe, fixed-tilt frequently remains optimal.

## Major Tracker Architectures

- **Distributed / decentralized** — many small motors (often one per row), no long mechanical linkages; resilient to single-point failure, flexible layout.
- **Centralized / linked-row** — one drive moves a long row of tables via shared linkages; fewer motors, potentially lower cost per watt, larger failure domains.
- **Terrain-following** variants of either, for sloped sites.

## Sources & Further Reading

- [PV-Tech — Tracking the tracker in gigawatt-scale](https://www.pv-tech.org/tracking-the-tracker-gigawatt-scale/)
- [POWER Magazine — Trackers Optimize Yield of Utility-Scale Solar Plants](https://www.powermag.com/trackers-optimize-yield-of-utility-scale-solar-plants/)
- [Trina Solar — Albedo: A key factor for assessing bifacial gain](https://www.trinasolar.com/eu-en/Albedo-key-factor-bifacial-gain)
- [Fortune Business Insights — Solar Tracker Market](https://www.fortunebusinessinsights.com/industry-reports/solar-tracker-market-100448)

---
*Reference content for educational use; tracker ratings, stow strategies, and GCR/bifacial figures vary by product and site — confirm with manufacturer data and PVsyst/site modeling before design.*
