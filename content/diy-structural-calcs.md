# DIY Structural Calculations

A solar array is a structural load and a sail. This page covers the structural math a DIYer or pro must check before mounting modules: **roof loads** (dead, live, snow, wind per ASCE 7), **roof attachment** spacing and lag-screw pull-out, **rail span** concepts, **ground-mount foundations** (overturning, footing/pier and ground-screw sizing, frost depth, embedment), **ballasted systems** (uplift vs. ballast weight), and **mobile/RV mounting** loads at highway speed. Worked examples show the arithmetic; cautions flag where a licensed **Professional Engineer (PE)** or the racking vendor's certified tables must take over.

This is part of the **Build It Yourself** series — see [Building Your Own System](diy-overview.md), [RV, Van & Mobile Solar](diy-rv-van.md), and [Ground-Mount & Pole-Mount](diy-ground-mount.md). For the electrical companion, see [DIY Electrical Calculations](diy-electrical-calcs.md), and for general theory [Solar Calculations & Formulas](calculations-formulas.md).

> **Educational reference only.** Structural design is governed by the **building code adopted by your AHJ** (typically referencing **ASCE 7** for loads) plus manufacturer engineering. As of 2026 most jurisdictions reference **ASCE 7-22**. The values below are illustrative — do not use them for a real permit. **A licensed PE and the racking manufacturer's certified, site-specific tables are required for anything beyond a basic, pre-engineered residential install.**

## Roof Loads: Dead, Live, Snow, Wind (ASCE 7 Basics)

A roof carrying solar must safely resist the worst realistic **combination** of these loads:

- **Dead load (D):** permanent weight — modules, rails, attachments, ballast. A typical flush-mount rooftop PV system adds roughly **3 psf** of collector area; ballasted flat-roof systems add far more.
- **Live load (L / Lr):** temporary loads such as maintenance foot traffic. Often reduced or waived where module-to-roof clearance is under ~24 in.
- **Snow load (S):** from ground snow load, exposure, thermal, and slope factors. In cold/high-altitude regions snow usually **governs** (controls the design).
- **Wind load (W):** drives **uplift** (suction). On most rooftops wind governs, especially at edges and corners where pressure coefficients spike.

### Why a PE may be required

A pre-engineered residential flush mount on healthy rafters in a moderate climate is often permittable from the vendor's tables. A **PE stamp** is commonly required when:

```
- Basic wind speed above ~130 mph
- Ground snow load above ~50 psf
- Seismic Design Category D, E, or F
- Ballasted or tilted arrays on flat roofs
- Questionable/old framing, trusses, or any structural modification
- Ground-mount foundations (almost always)
```

### Simplified wind-pressure concept (ASCE 7)

```
Design wind pressure (component & cladding, simplified):
  p = q_h × (GCp) × (factors)

  q_h  = velocity pressure ≈ 0.00256 × Kz × Kzt × Kd × V²   (psf, V in mph)
  GCp  = external/internal pressure coefficient (zone-dependent;
         worst at roof corners/edges)
```

> **Roof zones matter enormously.** Corner (Zone 3) suction can be **2–3× the field (Zone 1) value**. An attachment that is fine mid-roof may be badly under-designed at a corner. Vendor tables and PE calcs handle these zones — never assume one uniform pressure across the whole roof.

### Worked example — total downward load on a rafter region

```
Given (illustrative):
  Dead (array)      = 3 psf
  Roof dead         = 12 psf (shingles, sheathing, framing share)
  Snow              = 30 psf (balanced design snow)

Total gravity load = 3 + 12 + 30 = 45 psf

Tributary area for one rafter at 24" o.c. over a 12 ft span:
  width 2 ft × length 12 ft = 24 ft²

Load on that rafter = 45 psf × 24 ft² = 1,080 lb
```

The existing rafter must carry that **plus** the array — confirm the framing has reserve capacity (or have a PE verify) before adding panels.

## Roof Attachment Spacing & Lag-Screw Pull-Out

Each attachment (lag screw or structural screw into a rafter) resists **uplift** by **withdrawal** (pull-out). The governing check: the total uplift on the array divided by the per-attachment capacity sets the **minimum number of attachments**, which in turn sets spacing.

### Withdrawal (pull-out) capacity

Lag-screw withdrawal depends on screw diameter, **thread penetration depth into solid wood**, and wood species (specific gravity). Per the **National Design Specification (NDS)** for wood:

```
W = 1,800 × G^(3/2) × D    (lb per inch of thread penetration, reference value)

  G = specific gravity of the wood (Douglas Fir-Larch ≈ 0.50, SPF ≈ 0.42)
  D = shank diameter in inches (5/16" = 0.3125, 3/8" = 0.375)

Per-screw withdrawal = W × (thread penetration depth in inches)
Apply code adjustment / safety factors and load-duration factors.
```

| Lag size | Wood (G) | ~W per inch penetration (ref.) |
|---|---|---|
| 5/16" (0.3125") | DF-L (0.50) | ~199 lb/in |
| 5/16" (0.3125") | SPF (0.42) | ~153 lb/in |
| 3/8" (0.375") | DF-L (0.50) | ~239 lb/in |
| 3/8" (0.375") | SPF (0.42) | ~184 lb/in |

> Representative NDS reference values **before** safety/duration factors and before any required reduction. Predrill correctly, hit the **center of the rafter**, and achieve full thread penetration — a missed or shallow lag has a fraction of this capacity. Always defer to the racking vendor's tested attachment values.

### Worked example — number of attachments and spacing

```
Array: 20 modules, each 21 ft² -> array area = 420 ft²
Design net UPLIFT pressure (field zone, illustrative) = 25 psf

Total uplift = 25 psf × 420 ft² = 10,500 lb

Per-attachment allowable withdrawal (illustrative, AFTER safety factors):
  3/8" lag, DF-L, 2.5" penetration:
  239 lb/in × 2.5 in = 597.5 lb gross
  Apply safety factor (÷ ~3 typical):  597.5 / 3 ≈ 199 lb allowable

Minimum attachments = Total uplift / per-attachment allowable
                    = 10,500 / 199 ≈ 52.8  -> round UP to 53 attachments

Spacing: 53 attachments over 420 ft² ≈ 1 attachment per 7.9 ft²
  On rafters at 24" o.c., that is roughly one lag every ~48" along each
  rafter line, with attachments on most rafter lines — tighten at corners.
```

> **Corners control.** Recompute with the **corner/edge uplift pressure** (often 2–3× the field value); attachments must be packed much tighter there. A vendor's certified layout already encodes this — for a real install, use it.

## Rail Span Tables (Concept)

Racking rails span between attachments like little beams. The **maximum allowable span** between attachments depends on rail profile, module weight, and the **design load (snow + wind)** at the site. Vendors publish **span tables**: enter your design pressure, read the maximum rail span and cantilever.

```
Concept:
  Higher design load (more snow/wind)  -> SHORTER allowable span
  Stronger/taller rail profile         -> LONGER allowable span
  Cantilever (overhang past last foot)  usually limited to ~30–40% of span
```

> **Use the vendor's certified span table for your exact rail and your site's design pressure.** Do not interpolate beyond the published range or mix rails and feet from different systems.

## Ground-Mount Foundations

Ground mounts are dominated by **wind overturning**. The foundation (concrete pier, driven post, ground screw, or helical pile) must resist the **overturning moment** and **uplift** without tipping or pulling out.

### Overturning from wind

```
Overturning moment:
  M_ot = F_wind × h
    F_wind = design wind pressure × array area
    h      = height of array centroid above the pivot/base

Resisting moment (must exceed M_ot × safety factor):
  M_resist = (foundation + ballast + soil weight) × (lever arm)

Stability check:  M_resist / M_ot ≥ required factor (often ≥ 1.5)
```

### Worked example — pier overturning check

```
Array area = 200 ft², design wind pressure = 30 psf
Wind force F = 30 × 200 = 6,000 lb
Centroid height h = 6 ft above pier top

Overturning moment M_ot = 6,000 lb × 6 ft = 36,000 ft-lb

To resist by dead weight at a 3 ft lever arm:
  Required resisting weight = (M_ot × 1.5) / 3 ft
                           = (36,000 × 1.5) / 3
                           = 54,000 / 3 = 18,000 lb of effective weight

  (A single concrete pier rarely supplies this alone — soil embedment,
   passive soil pressure, and footing geometry do most of the work.
   This is why ground-mount foundations are PE-engineered.)
```

### Footing / pier sizing, frost depth, embedment

- **Frost depth:** footing bottoms must sit **below the local frost line** (varies by region, e.g., 12–60+ in) to avoid frost heave. Check your local code.
- **Embedment:** driven posts and screws resist overturning largely through **lateral soil pressure** over their embedded length — deeper embedment dramatically raises capacity.
- **Soil dependence:** capacity swings with soil type (dense sand vs. soft clay). A **geotechnical assessment** or on-site **pull/torque testing** is often required.

### Ground-screw and helical-pile capacities (concept)

```
Helical pile uplift capacity ≈ (sum of helix bearing areas) × soil bearing
                               + shaft friction  (geotech-dependent)
Installation torque correlates with capacity:
  Capacity ≈ Kt × Installation Torque   (Kt is an empirical torque factor)
```

> Ground-screw and helical-pile capacities are **soil-specific and verified by installation torque or load test**, not by a generic table. Use the manufacturer's engineering and a PE for the foundation.

## Ballasted Systems (Flat Roof)

A ballasted array is held down by **weight (ballast blocks)** instead of (or in addition to) penetrations. The governing check is **uplift vs. ballast**: ballast weight (× a stability factor) must exceed the net wind uplift, everywhere — especially roof edges/corners.

### Worked example — ballast per block

```
Net uplift per support point (illustrative) = 90 lb
Required stability factor against sliding/overturning = 1.5

Ballast needed per point = 90 × 1.5 = 135 lb
  Using 35 lb pavers: 135 / 35 = 3.86 -> 4 pavers (140 lb) per point

At a corner where uplift is 2.5× higher (225 lb):
  225 × 1.5 = 337.5 lb -> 337.5 / 35 = 9.6 -> 10 pavers per point
```

> **Ballast is heavy — verify the roof can carry it.** A ballasted system can add **5–10+ psf** of dead load. Confirm the existing roof structure (and a PE) approves the added dead load before adding blocks. Wind tunnel-tested vendor layouts already vary ballast by zone — follow them exactly.

## Mobile / RV Mounting (Highway-Speed Loads)

On a moving vehicle, the array sees **aerodynamic loads at highway speed** plus **road vibration** — a fundamentally different and often harsher fatigue environment than a static roof.

```
Dynamic pressure at speed:
  q = 0.00256 × V²    (psf, V in mph; this is the same velocity-pressure
                       coefficient used for wind)

At 75 mph:  q = 0.00256 × 75² = 0.00256 × 5,625 = 14.4 psf
At 80 mph:  q = 0.00256 × 80² = 0.00256 × 6,400 = 16.4 psf
Add gusts and passing trucks -> design well above steady-state q.

Uplift on a 21 ft² module at 75 mph (flush, low coefficient ~0.5):
  ~14.4 psf × 0.5 × 21 ft² ≈ 151 lb per module of fluctuating load
```

- **Adhesive vs. mechanical:** structural VHB-type adhesive avoids roof penetrations but must be rated for the dynamic + thermal + UV environment and applied to a clean, primed surface. **Mechanical fasteners (bolts/brackets into structure)** carry higher and more predictable loads; many builders use **both** (mechanical for strength, sealant for weatherproofing).
- **Sealing:** every penetration must be sealed (e.g., self-leveling lap sealant) and re-inspected — vibration loosens hardware and cracks sealant over time.
- **Vibration/fatigue:** use thread-locker, lock washers, or nylon-insert nuts; tighten flush mounts to spread load; avoid long unsupported overhangs.

> See [RV, Van & Mobile Solar](diy-rv-van.md) for mounting hardware specifics. Treat highway loads as **dynamic and fatigue-driven** — static "it held in the driveway" is not a valid test.

## Load Combinations & Safety Factors

Codes require checking **combinations**, not single loads. ASCE 7 specifies combos such as `D + S`, `D + 0.75L + 0.75S`, and uplift cases like `0.6D + W` (note the **0.6** that reduces favorable dead load so wind uplift isn't masked).

```
Critical uplift check (why 0.6 matters):
  Net uplift demand = W (uplift) − 0.6 × D
  If you used full D, you would overstate how much weight resists wind.
  The 0.6 factor forces the design to survive when the array is LIGHT
  relative to the wind trying to lift it.
```

> **Never design to a single bare load.** Use the governing **load combination**, apply the code's **safety/resistance factors**, and check **both gravity (snow) and uplift (wind)** cases. The uplift case usually controls fasteners and foundations.

## When to Hire a Structural Engineer

Bring in a **PE** when any of these apply:

```
- High wind (basic speed > ~130 mph) or high snow (> ~50 psf)
- Seismic Design Category D / E / F
- Any ground-mount foundation
- Ballasted or tilted flat-roof arrays
- Old, damaged, undersized, or modified framing/trusses
- The AHJ requires a stamped structural letter (many now do)
- Anything outside the racking vendor's published, certified tables
```

> **Default to certified tables and a PE.** The cost of an engineering review is trivial next to a roof failure or an array that becomes airborne. When in doubt, get the stamp.

## Sources & Further Reading

- [Solar Structural Calculations: ASCE 7-22 Loads for 2026 Permits — Energyscape Renewables](https://energyscaperenewables.com/post/solar-structural-calculations-asce-7-22/)
- [Rooftop Solar Structural Assessment 2026 — SurgePV](https://www.surgepv.com/blog/rooftop-solar-structural-assessment)
- [Wind Load Calculations for Solar PV Arrays — Greentech Renewables](https://www.greentechrenewables.com/article/wind-load-calculations-solar-pv-arrays)
- [Solar Structural Wind & Snow Load Guide (ASCE 7) — Wattmonk](https://www.wattmonk.com/blog/solar-structural-calculations-wind-snow-load-guide-asce-7)
- [Detailed Structural Commentary for Rooftop PV Arrays — SolSmart (PDF)](https://solsmart.org/wp-content/uploads/2021/09/Step_6_Detailed_Simplified_Permit_PV_ESS_Commentary_9.16.21.pdf)
- [ASCE 7 Minimum Design Loads (ASCE)](https://www.asce.org/publications-and-news/asce-7)
- Related on this site: [Building Your Own System](diy-overview.md) · [RV, Van & Mobile Solar](diy-rv-van.md) · [Ground-Mount & Pole-Mount](diy-ground-mount.md) · [DIY Electrical Calculations](diy-electrical-calcs.md) · [Solar Calculations & Formulas](calculations-formulas.md)

> **Disclaimer:** This material is educational and for reference only. Structural calculations shown are illustrative and must not be used for permitting or construction. Use the **building code and ASCE 7 edition adopted by your AHJ**, the racking manufacturer's **certified, site-specific engineering**, and a **licensed Professional Engineer (PE)** to verify any real installation.
