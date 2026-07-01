# Residential System Design

This page walks through the end-to-end design of a grid-tied (and optionally battery-backed) solar
electric system for a **single-family or two-family dwelling**. It is written for residential
designers, installers, and informed homeowners who want to understand *why* each design decision is
made — not just the rules of thumb, but the engineering and code logic behind them.

> **Scope.** Everything here targets **residential rooftop and ground-mount PV** on 1–2 family
> dwellings. Commercial, utility-scale, and multifamily (3+ unit) systems follow different code
> articles and economics and are out of scope.

---

## The design workflow at a glance

A residential PV project moves through a predictable sequence. Each step constrains the next, so
designing out of order usually means redoing work.

```
1. Site assessment        → roof, orientation, shading, electrical service
2. Load & offset analysis → how much energy, what % offset goal
3. System type selection  → grid-tied / grid-tied+battery / off-grid
4. Equipment selection    → modules, inverter topology, racking
5. Array layout           → string/branch design, fire setbacks
6. Electrical design      → point of interconnection, conductor & OCPD sizing
7. Permit + interconnection package
8. Build, inspect, energize, PTO
```

This page covers steps 1–6 in depth. Detailed arithmetic lives in
**Residential Sizing & Calculations**, and the hands-on build sequence lives in
**Building Your Own Residential System**.

---

## 1. Site assessment

The site assessment determines what is physically and electrically possible before any equipment is
chosen. Skipping or rushing it is the single most common cause of redesigns and change orders.

### Roof type, condition, and age

The roof is your structural foundation for the next 25+ years. A PV array that outlives the roof
under it forces an expensive removal-and-reinstall ("R&R").

> **Rule of thumb:** If the roof has fewer than ~10 years of service life remaining, re-roof
> *before* installing PV. Removing and reinstalling an array later typically costs hundreds of
> dollars per kW.

| Roof attribute | What to check | Why it matters |
| --- | --- | --- |
| **Covering type** | Composition shingle, tile (concrete/clay), standing-seam metal, low-slope membrane | Determines mounting hardware and flashing method |
| **Age & condition** | Granule loss, curling, soft decking, prior leaks | Drives re-roof decision |
| **Rafter/truss layout** | Member size, spacing (16"/24" o.c.), span | Sets attachment spacing and structural load capacity |
| **Sheathing** | Plywood vs OSB, thickness | Lag/screw pull-out strength |
| **Obstructions** | Vents, chimneys, skylights, HVAC, hips/valleys | Reduce usable area; create shading |

Most residential racking is engineered to a maximum attachment spacing (commonly ~48–72" along
rails) and a maximum rail span between feet. Snow and wind loads (per ASCE 7 and local code) tighten
that spacing in many regions.

### Orientation (azimuth) and tilt

In the Northern Hemisphere, **true south (180° azimuth)** maximizes annual production. Deviations
cost energy gradually, not catastrophically.

| Orientation | Typical annual production vs. ideal |
| --- | --- |
| Due south | 100% (reference) |
| Southeast / southwest | ~95–98% |
| Due east / due west | ~80–88% |
| Due north | Avoid; often <70% |

**Tilt** near the site's latitude maximizes annual kWh, but most residential arrays simply sit at
the existing roof pitch (often 18°–45°). A common roof pitch of 4:12 to 6:12 is close enough to
optimal that flush mounting is standard. Steeper tilts favor winter production; shallower tilts favor
summer. Time-of-use rates and west-facing roofs can favor afternoon (west) production even at a small
annual-energy penalty.

> **Watch true vs. magnetic north.** Site tools and phone compasses report magnetic azimuth. Apply
> local magnetic declination so your modeled production matches reality.

### Shading analysis

Shade is non-linear: with a conventional series string, shading even one cell can drag down an entire
string's output. Module-level electronics (microinverters or DC optimizers) limit the damage to the
affected module.

Assess shade across the full year and full day:

- **Tools:** drone or app-based fisheye (e.g., Solar Pathfinder–style) readings at array corners, or
  LiDAR/satellite modeling in design software (NREL **PVWatts**, Aurora, Helioscope-class tools).
- **Sources:** trees (account for growth), chimneys, vent stacks, neighboring structures, parapets,
  and even the array's own rows on ground mounts (inter-row shading).
- **Metric:** many designers target a **Total Solar Resource Fraction (TSRF) ≥ 75–80%** for a
  worthwhile array; lower is sometimes acceptable with module-level electronics.

### Main service panel, main breaker, and meter

The electrical service determines how much PV you can interconnect on the load side without upgrades.
Record:

- **Busbar rating** (e.g., 100A, 125A, 200A) — printed on the panel label, *not* the same as the main
  breaker.
- **Main breaker rating** — the service overcurrent device.
- **Available spaces** for a back-fed breaker.
- **Service type** — overhead vs. underground; meter-main combo vs. separate meter.
- **Bonding/grounding** — main bonding jumper location, grounding electrode system.

This data feeds the **NEC 705.12 busbar (120%) calculation** in section 6. A 100A panel often can't
accept a load-side PV breaker without a **main panel upgrade (MPU)** or a supply-side connection.

---

## 2. Load analysis and offset target

Size the system to the home's actual consumption, not to the roof's maximum capacity (unless the
homeowner wants to bank credits or plans future loads such as an EV or heat pump).

### Pulling annual kWh from utility bills

The most reliable input is **12 months of utility bills** (to capture seasonal swings). Read the
**kWh used** line from each statement.

```
Annual_kWh = sum of the 12 monthly kWh-used figures
Average_monthly_kWh = Annual_kWh ÷ 12
```

If only one bill is available, multiply by 12 only as a rough placeholder — seasonal HVAC loads make
single-month extrapolation unreliable.

### Offset target

The **offset** is the share of annual consumption the array is designed to cover:

```
Target_System_kWh = Annual_kWh × Offset_%
```

Most grid-tied homeowners target **80–110%** offset. Two caveats:

- Many utilities and net-metering tariffs **cap system size at ~100–110%** of historical usage.
- Plan for **future loads** (EV charging adds ~2,000–4,000 kWh/yr per car; cold-climate heat pumps
  add significant winter load) if they're on the horizon — it is cheaper to size up once than to add
  a second array later.

The full kWh → kW conversion (peak sun hours, performance ratio, panel count) is worked in
**Residential Sizing & Calculations**.

---

## 3. System types and when each fits a home

| Type | What it is | Best fit | Trade-offs |
| --- | --- | --- | --- |
| **Grid-tied (no battery)** | Array + inverter pushes excess to the grid; no backup | Homes with stable grid, favorable net metering | Cheapest, simplest; **goes dark during outages** (anti-islanding) |
| **Grid-tied + battery backup** | Adds storage + a backup/transfer subpanel | Outage-prone areas, time-of-use arbitrage, low net-metering credit | Higher cost; backup usually covers *critical loads*, not whole home |
| **Off-grid** | No utility connection; battery + generator | Remote properties where utility hookup is costly | Largest battery/generator, must design for worst-case days; most DIY latitude |

> **Key takeaway:** A standard grid-tied system **does not power your home during a blackout.**
> Per anti-islanding rules, the inverter shuts down to protect line workers. If outage resilience is
> the goal, you need a battery with backup-capable (islanding) inverter and a protected loads
> subpanel — or an off-grid design.

For most homes on a healthy grid with net metering, **grid-tied** offers the best payback.
**Grid-tied + battery** is increasingly chosen where net-metering credit has been cut, where outages
are frequent, or where time-of-use rates reward shifting energy to evening.

---

## 4. Equipment selection for homes

### Modules

Residential modules in 2025–2026 are typically **400–460 W**, monocrystalline, all-black or
silver-frame, with 25-year product and performance warranties. Higher-efficiency cells (>21%) pack
more watts onto limited roof area — valuable on small or cut-up roofs.

Choose based on: wattage vs. available area, efficiency, temperature coefficient (lower is better for
hot climates), aesthetics, warranty, and **bankable manufacturer** (so the 25-year warranty is
meaningful).

### Inverter topology: microinverters vs. string + optimizers

This is the central residential equipment decision.

| Topology | How it works | Strengths | Weaknesses |
| --- | --- | --- | --- |
| **Microinverters (MLPE)** | One small inverter per module; DC→AC at the roof | Per-module MPPT, no high-voltage DC on roof, simple **NEC 690.12** rapid-shutdown compliance, panel-level monitoring, easy odd-roof designs, 25-yr warranties | Higher $/W; more units = more roof connections |
| **String inverter + DC optimizers** | Optimizers condition each module; one central inverter | Lower equipment cost on larger simple roofs, optimizer-level monitoring, rapid-shutdown compliant | High-voltage DC string to inverter; central unit is single point of failure; typically 10–12 yr inverter warranty |
| **Plain string inverter (no MLPE)** | Modules in series, central inverter | Lowest cost | **Often cannot meet 690.12 rapid shutdown** on rooftops; shade on one module hurts the whole string |

**Market reality (2025–2026):** Microinverters dominate the U.S. residential market, with Enphase's
IQ8 family the most common choice and roughly half of residential inverter share. Microinverters are
especially favored on the complex, multi-plane roofs common in the Northeast; string-plus-optimizer
systems remain competitive on large, simple, single-plane roofs where equipment cost dominates.

> **Rapid shutdown drives this choice.** On a dwelling roof, **NEC 690.12** requires conductors
> inside the array boundary to drop to ≤80 V within 30 seconds of shutdown. Microinverters and
> string+optimizer systems are both **module-level** solutions that satisfy this; a plain string
> inverter generally cannot without additional listed hardware.

### Batteries (if backup is in scope)

Residential storage is overwhelmingly **lithium iron phosphate (LFP)** today for its safety and cycle
life. Size to the **critical loads** you want to ride through an outage (see the battery worked
example in **Residential Sizing & Calculations**), not the whole home, unless budget allows. AC-coupled
batteries pair with existing PV; DC-coupled or hybrid inverters integrate PV and storage in one unit.

---

## 5. Roof mounting types and waterproofing

The mount transfers array loads into the structure **and** keeps water out for decades. Each roof
covering has a matched attachment and flashing method.

| Roof covering | Typical attachment | Waterproofing method |
| --- | --- | --- |
| **Composition (asphalt) shingle** | Lag screw / structural screw into rafter through a flashed mount | **Flashing** slid under the upper course of shingles + sealant at the penetration |
| **Tile (concrete/clay)** | Tile hook or tile-replacement flashing | Flashing integrated under/over tile course; avoid cracking tiles |
| **Standing-seam metal** | **Seam clamp** (S-5!-style) — clamps to the seam | **No roof penetration** — the cleanest, most leak-resistant option |
| **Corrugated/exposed-fastener metal** | Screw through high rib with butyl/EPDM washer | Sealing washer at each penetration |
| **Low-slope / flat (membrane)** | Ballasted or penetrating with flashed curbs | Flashed/welded boots; ballast avoids penetrations |

> **Safety / longevity warning:** A roof leak from a botched penetration can rot decking and frame
> long before anyone notices. Every penetration must hit structure, be sealed correctly, and be
> **flashed** — sealant alone is not flashing. Standing-seam clamps avoid the problem entirely, which
> is one reason metal roofs are attractive for PV.

Attachment spacing is set by the racking manufacturer's engineering for your wind/snow zone (per
ASCE 7 / local code). Don't free-hand it; use the manufacturer's span tables or stamped engineering.

---

## 6. Array layout, fire setbacks, and electrical design

### Array layout and fire setbacks (high level)

Most jurisdictions adopt **International Fire Code (IFC) / IRC** rooftop access and ventilation
pathway rules so firefighters can move on the roof and cut ventilation holes. Typical residential
expectations (verify with your AHJ, as adopted codes and local amendments vary):

- A **pathway along the ridge** and/or clear access pathways.
- **Setbacks from the ridge** and sometimes from hips/valleys and eaves.
- Exceptions for some smaller dwellings and for certain roof configurations.

> **Always confirm setbacks with the local AHJ and fire marshal.** Setback geometry directly limits
> how many modules fit, so resolve it before finalizing module count.

### Point of interconnection

There are two fundamental ways to tie PV into a home's service:

1. **Load-side (back-fed breaker) connection** — a PV breaker in the existing main panel. Simple and
   common, but subject to the **busbar (120%) rule** below.
2. **Supply-side / line-side tap** — connection between the meter and the main breaker (on the
   *supply* side). It **bypasses the 120% busbar calculation** entirely, so it's the go-to when the
   panel can't accept a load-side breaker. It requires careful conductor and tap-rule compliance and
   often an electrician comfortable working line-side.

### The 120% busbar rule (NEC 705.12)

For a load-side back-fed breaker placed at the **opposite end** of the busbar from the main, the sum
of the main breaker and the PV breaker may not exceed **120% of the busbar rating**:

```
(Busbar_A × 1.20) − Main_breaker_A  ≥  PV_breaker_A
```

For a common **200A busbar with a 200A main**:

```
(200 × 1.20) − 200 = 40A   → maximum 40A PV back-fed breaker
```

A 40A back-fed breaker supports roughly **32A of continuous inverter output** (because the breaker
must be sized at 125% of continuous current). The detailed conductor/breaker arithmetic is worked in
**Residential Sizing & Calculations**.

> **When the panel can't fit the PV breaker**, your options are: (a) a **main breaker downgrade**
> (e.g., swap 200A main for 175A if loads allow), (b) a **main panel upgrade (MPU)** to a larger
> busbar, (c) a **supply-side/line-side tap**, or (d) a **dedicated PV meter/combiner**. Each has cost
> and AHJ implications.

Required: a permanent label at the back-fed breaker reading, in effect, *"Power source output
connection — do not relocate this overcurrent device."* Plus full PV system labeling per NEC 690/705.

---

## 7. Typical residential system sizes and production expectations

| Home profile | Typical system size | Approx. modules (≈430 W) |
| --- | --- | --- |
| Small / efficient home | 4–6 kW | ~10–14 |
| Average U.S. home | 7–10 kW | ~16–24 |
| Large home / all-electric / EV | 11–15+ kW | ~26–35+ |

**Production** depends on location's peak sun hours and a system **performance ratio (PR)** of about
0.75–0.85 (losses from temperature, soiling, wiring, inverter efficiency):

```
Annual_kWh ≈ System_kW × PSH × 365 × PR
```

A 7 kW system in a 4.5-PSH region at PR 0.80 yields roughly:
`7 × 4.5 × 365 × 0.80 ≈ 9,200 kWh/yr`. Use NREL **PVWatts** for a location-specific estimate.

> **Cost context (2025–2026):** Residential installations commonly land around **$2.50–$3.50 per
> watt** installed before any incentives, so a typical ~8 kW system runs roughly **$20,000–$28,000**.
> Note the federal **Section 25D** residential credit **expired for systems placed in service after
> December 31, 2025** (see the financial section in **Residential Sizing & Calculations**).

---

## Sources & Further Reading

- [NREL PVWatts Calculator](https://pvwatts.nrel.gov/)
- [IRS — Residential Clean Energy Credit (Section 25D)](https://www.irs.gov/credits-deductions/residential-clean-energy-credit)
- [Congress.gov CRS — Expiration and Carryforward Rules for the Residential Clean Energy Credit](https://www.congress.gov/crs-product/IN12611)
- [Solar Power World — 2023 code changes to rapid shutdown requirements](https://www.solarpowerworldonline.com/2024/01/2023-code-changes-rapid-shutdown-requirements/)
- [GreenLancer — Solar Rapid Shutdown Requirements (NEC 690.12)](https://www.greenlancer.com/post/solar-rapid-shutdown-requirements)
- [GreenLancer — The 120% Rule for Solar (NEC 705.12)](https://www.greenlancer.com/post/120-rule-for-solar)
- [Mayfield Renewables — NEC 705.12 load-side source connections](https://www.mayfield.energy/technical-articles/code-corner-nec-article-70512b36-load-side-source-connections/)
- [EnergySage — Solar Panel Cost](https://www.energysage.com/local-data/solar-panel-cost/)

---

*Educational/reference only; not engineering, electrical, or financial advice. Permits, licensed
electricians, and AHJ approval are required for grid-tied systems.*
