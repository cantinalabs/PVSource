# DIY Ground-Mount & Pole-Mount Systems

Ground- and pole-mounted arrays are often the smartest choice for off-grid cabins, rural properties, and any site where the roof is shaded, wrongly oriented, structurally marginal, or simply too small. They are also the most **structurally and electrically demanding** DIY mounts you can build: the array becomes a free-standing wind sail anchored into soil, with conductors that must travel underground back to the dwelling. Get the foundation, racking, and burial right and a ground mount will outlive the panels on it. Get them wrong and you have a liability — a collapsed array, a heaved foundation, or an energized fault path in wet soil.

This page covers foundation selection, racking, array geometry, wind and uplift, trenching and underground conductors, grounding, and pole-mount specifics. It leans heavily on two companion pages: do the numbers on [DIY Electrical Calculations](diy-electrical-calcs.md) and [DIY Structural Calculations](diy-structural-calcs.md) before you buy steel or rent an auger. For where to source racking, ground screws, and burial-rated cable, see [Sourcing Materials & Kits](diy-sourcing.md), and for the big picture see [Building Your Own System](diy-overview.md).

> **Safety first:** A ground-mount foundation is a structural element that carries wind and snow loads into the earth. If you are not confident running the wind-uplift and overturning numbers yourself, have a local structural or geotechnical engineer stamp the design. Many jurisdictions require it. Underground conductors in wet soil are an electrocution hazard — de-energize and lock out before trenching anywhere near existing utilities, and **call 811 (US) to locate buried utilities before you dig.**

## When Ground Mount Beats Roof

| Situation | Why ground/pole mount wins |
|---|---|
| Roof shaded, wrong azimuth, or low pitch | Free choice of tilt and azimuth on the ground |
| Old, fragile, or soon-to-be-replaced roof | Avoids penetrations and re-flashing later |
| Off-grid cabin / outbuilding with no good roof | Site the array in the best sun, away from trees |
| Large array, plenty of land | Cheaper per watt at scale; easy to expand |
| Heavy snow country | Steeper tilt sheds snow; array kept above snowpack |
| Need easy access for cleaning/service | Panels at standing or kneeling height |
| Tracking desired | Pole mounts accept manual or automatic trackers |

**Ground mount loses** when land is scarce, the run back to the building is long and expensive to trench, theft or vandalism is a concern, or local zoning restricts free-standing structures. A long conductor run can erase the cost savings — every extra foot of trench is labor, conduit, and copper. Price the whole system, not just the racking.

## Foundation Types

The foundation transfers **downforce (gravity + snow)**, **uplift (wind suction)**, and **overturning/lateral (wind drag)** loads into the soil. The right type depends on soil bearing capacity, frost depth, site access, your tools, and budget. Below grade is where most DIY ground mounts fail, so choose deliberately.

### Selection Table

| Foundation | Best for | Tools / install | Frost & uplift | DIY difficulty | Notes |
|---|---|---|---|---|---|
| **Driven steel post (W-beam or pipe)** | Normal compacted soil, no rock | Hydraulic post driver (rented) | Good if driven below frost; relies on soil friction | Medium | Fast, concrete-free; needs the right equipment |
| **Ground screw** | Rocky, frozen, or variable soil | Rotary/impact drive head | Good uplift resistance via thread | Medium | More forgiving than a driven post; removable |
| **Helical pile** | Loose, sandy, or weak soil; high uplift | Torque motor (skid steer / handheld) | Excellent uplift; helix engages deep soil | Medium-Hard | Torque correlates to capacity; best for poor soils |
| **Concrete pier / footing** | Poor bearing soil; permanent installs | Auger + forms + concrete | Excellent if poured below frost line | Hard (labor) | "Monument-grade," slow, lots of concrete and cure time |
| **Ballasted (precast/poured blocks)** | Sites where you cannot penetrate (caps, ledge, easements) | No drilling; place blocks | Resists uplift by dead weight only | Medium | Needs 4–6× more concrete per kW than piers; heavy |

> **Rule of thumb:** For an ordinary residential lot with decent compacted soil and no buried rock, a **driven post** or **ground screw** is usually the fastest, cheapest, concrete-free choice. Reach for **concrete piers** when soil bearing is poor or you want a permanent monument, and **ballast** only when you physically cannot penetrate the ground.

### Frost, Soil, and Bearing

Two below-grade facts govern everything:

- **Frost depth.** Footings and posts must extend **below the local frost line** or seasonal frost heave will jack them out of the ground and rack the array. Frost depth ranges from near zero in the deep South to 5–6 ft+ in the northern US and Canada. Your building department publishes the local figure.
- **Soil bearing & uplift capacity.** Sandy or organic soils hold far less than dense clay or glacial till. A geotechnical report (or at minimum a hand-auger test and local knowledge) tells you embedment depth. Helical piles are the standard answer when bearing is weak because their capacity can be verified by installation torque.

See [DIY Structural Calculations](diy-structural-calcs.md) for embedment-depth and overturning math.

## Framing & Racking: Metal vs. Lumber

Most engineered ground mounts use **galvanized steel or aluminum racking** from a manufacturer with published span tables, wind ratings, and a stamped engineering letter. This is the path of least resistance with inspectors and the only one with a real load rating.

DIYers are forever tempted to frame arrays from **pressure-treated lumber** — it is cheap, workable, and looks easy. Be cautious:

- **Code & inspection.** A permitted array generally needs an engineered structure. A wood frame with no load calculations will not have published wind ratings and may fail inspection or void module/insurance coverage.
- **Corrosion chemistry.** Modern pressure-treatment chemicals (ACQ, copper azole) are **corrosive to bare aluminum and ordinary steel fasteners.** Use only hot-dip galvanized or stainless hardware rated for contact with treated lumber, and isolate aluminum rails from the wood.
- **Movement & service life.** Wood checks, warps, and twists outdoors; fasteners loosen. Steel/aluminum racking does not.
- **Grounding.** Wood is not a grounding path. Every metallic part still needs a proper equipment-grounding conductor and bonding (see below).

> **Caution:** If you build a wood-framed array, treat it as a real structure — run the wind and snow loads (see [DIY Structural Calculations](diy-structural-calcs.md)), size members and connections accordingly, use treated-lumber-rated galvanized/stainless fasteners, and check whether your AHJ will permit it. For anything beyond a small, low array in a low-wind zone, engineered metal racking is the safer and often cheaper-over-life choice.

## Array Geometry: Tilt, Height, and Spacing

### Tilt

A fixed array's annual energy is maximized near a tilt equal to your **latitude**. Tune from there:

- **Off-grid** systems often tilt steeper than latitude (latitude + 10–15°) to favor low winter sun and shed snow, since the worst month drives the design.
- **Grid-tied / net-metered** systems may tilt shallower for peak summer or annual yield.
- Adjustable-tilt racking (seasonal change) buys a few percent but adds cost and labor.

### Height Off Ground

Keep the **lower edge of the array high enough** to clear snowpack, splash, vegetation, and flooding — commonly 18–36 in. minimum, more in heavy-snow country. Higher arrays also let you walk under to clear snow, but height increases wind leverage (overturning moment), so it is a structural trade-off.

### Inter-Row Spacing & Ground Coverage Ratio (GCR)

For multiple rows, space them so a front row does not shade the row behind during useful winter hours. The governing case is solar noon on the **winter solstice**, when shadows are longest. Spacing too tight steals winter production; too loose wastes land and conductor.

```
Row pitch and shadow length depend on:
  - Array tilt and module height
  - Site latitude
  - Solar elevation at winter-solstice noon (lowest sun)

Ground Coverage Ratio (GCR) = module_row_width / row_pitch
  Lower GCR  = rows farther apart = less inter-row shading
  Higher GCR = rows closer = more land use, more winter shading
```

Run the actual shadow-length and GCR numbers on [DIY Electrical Calculations](diy-electrical-calcs.md) (yield/shading) and [DIY Structural Calculations](diy-structural-calcs.md) (loads). Don't eyeball multi-row spacing.

## Wind, Uplift & Overturning

A ground-mount array is a **wind sail on a lever arm**. Wind produces both downforce and powerful **uplift (suction)** on the panels, plus a horizontal drag that tries to overturn the structure about its base. This — not the weight of snow — is what tears poorly anchored arrays out of the ground.

Design loads come from **ASCE 7** (the US wind/snow load standard the building code references). Key inputs:

- **Basic wind speed** for your county and risk category (ASCE 7 maps).
- **Exposure category** (open field vs. sheltered).
- **Tilt, height, and area** of the array (more tilt/height = more moment).
- **Component & cladding pressures** for the modules and clamps.
- **Snow load** (ground snow load × factors) for downforce and drift.

These feed the **embedment depth, ballast weight, or pier size** and the **fastener/clamp count.** Frost depth and soil capacity (above) set the minimum below-grade dimension. Manufacturer racking comes with a stamped engineering letter for given wind/snow zones — match your zone to their tables. For custom or wood structures, you must derive these yourself or hire an engineer.

> **Warning:** Under-anchoring for uplift is the single most common — and most dangerous — ground-mount mistake. A loose array becomes a wind-borne projectile. When in doubt, over-embed and over-ballast, and get a stamped design in high-wind (coastal, mountain) zones. See [DIY Structural Calculations](diy-structural-calcs.md).

## Trenching & Underground Conductors

Conductors from a ground/pole mount usually travel **underground** to the building, combiner, or power room. This is governed by **NEC Article 300** and the burial-depth **Table 300.5(A)** (2023 NEC). Depth is measured as *cover* — soil over the top of the raceway or cable.

### Typical Minimum Cover (NEC Table 300.5(A), 0–1000 V)

| Wiring method | Typical minimum cover* |
|---|---|
| Direct-burial cable or conductors | 24 in. |
| Rigid metal conduit (RMC) / intermediate metal conduit (IMC) | 6 in. |
| Nonmetallic raceway (e.g., PVC conduit) listed for direct burial | 18 in. |
| Residential branch circuit ≤120 V, ≤20 A, with GFCI protection | 12 in. |
| Under a driveway/parking area or street | 18–24 in. (deeper) |

*Values are minimums and have many conditions, exceptions, and column rules. **Always read the actual Table 300.5(A) in the edition your AHJ enforces** — this table is a planning summary, not a substitute.

### Conduit & Cable Practices

- **PVC conduit (Schedule 40/80)** is the common DIY choice: cheap, corrosion-proof, easy to glue. Use Schedule 80 where exposed to physical damage (e.g., where it rises out of the ground). Sweep elbows ease the pull.
- **Direct-burial (USE-2 / RHW-2) cable** can be buried without conduit at the deeper 24-in. cover, but conduit protects conductors and lets you pull new wire later — usually worth it.
- **Pull a separate equipment-grounding conductor (EGC)** unless using an approved metallic raceway as the EGC.
- **Transition above grade in conduit**, seal raceway ends, and provide drainage/expansion fittings — buried conduit fills with water and condensation; assume conductors will get wet (use wet-rated insulation, e.g., THWN-2, USE-2).
- **Warning tape** above the conductors (and sometimes required) helps future diggers.
- Account for **voltage drop** over the long run — size conductors up generously. Do this on [DIY Electrical Calculations](diy-electrical-calcs.md).

> **Rule of thumb:** Trench once, oversize the conduit, and pull a spare conductor/pull-string. Re-trenching to add a circuit later costs far more than a bigger pipe today.

## Grounding & Electrodes

Metallic racking, module frames, and any metal foundation must be **bonded** together with an equipment-grounding/bonding conductor and connected back to the system grounding per **NEC Article 250 and 690**.

- Use **listed bonding hardware** — WEEBs (washers that bite through anodizing), grounding lugs, and bonding jumpers — rated for outdoor/direct-burial use and for aluminum-to-copper where applicable.
- A ground/pole mount is often required to have its own **grounding electrode (ground rod/s)** at the array, bonded to the array frame, in addition to the EGC running back to the building. Local code and AHJ dictate the details.
- For wet/buried connections use **listed direct-burial irreversible (crimp) connectors or exothermic welds**, not ordinary indoor lugs.
- Lightning/surge protection (DC and AC surge protective devices) is worth considering on exposed field arrays.

> **Caution:** Grounding is not optional and it is not a place to improvise. A floating array frame in wet soil can become energized under fault. Follow NEC 250/690 and use only listed PV bonding components.

## Pole-Mount & Top-of-Pole Specifics

A **pole mount** carries a small-to-medium array on a single mast — popular for off-grid sites, water-pumping, and trackers because the array can be raised above snow and aimed easily.

- **The pole foundation is everything.** A top-of-pole array puts a large wind moment on a single point. The pole is set in a **deep, large-diameter concrete footing** sized for overturning — typically a substantial augered pier well below frost. Undersizing this is the classic pole-mount failure.
- **Pole size and schedule** (steel pipe diameter and wall) must be rated for the array area and wind zone — follow the manufacturer's chart for your panel count and ASCE 7 wind speed.
- **Top-of-pole racks** mount above the pole; **side-of-pole racks** hang 1–4 small panels off the side (common for solar pumps and gate openers).
- **Trackers** (manual seasonal-tilt, or active single/dual-axis) raise yield but add cost, moving parts, and wind exposure — and the foundation must handle the tracker's larger swept area.
- Keep conductors inside the pole or in conduit down to a junction box, then underground per Table 300.5 above.

> **Rule of thumb:** For top-of-pole arrays, follow the rack maker's pole-size and footing-depth chart for your wind zone exactly — and if you're outside their chart, get it engineered. The footing is not the place to save concrete.

## Build Sequence

```
1.  PLAN & PERMIT
    - Run yield, tilt, spacing, voltage-drop  -> diy-electrical-calcs.md
    - Run wind/snow/uplift, embedment, footing -> diy-structural-calcs.md
    - Pull permits; get engineering stamp if required
    - Call 811 to locate buried utilities

2.  SITE & LAYOUT
    - Stake foundation locations and trench route
    - Verify sun window (no winter-noon shading)

3.  FOUNDATIONS
    - Drive posts / set screws / drill & turn helicals,
      OR auger and pour piers below frost (allow cure time)
    - Verify plumb, alignment, and embedment/torque

4.  TRENCH & CONDUIT
    - Trench to required cover (Table 300.5)
    - Lay conduit, sweeps, and pull-string; backfill w/ warning tape

5.  RACKING
    - Assemble rails / cross-members to engineered torque
    - Install bonding hardware as you go

6.  GROUNDING
    - Drive electrode(s) at array; bond frame, rails, posts
    - Run EGC back to building

7.  MODULES
    - Mount and clamp panels (correct clamp zones/torque)
    - Land MC4s; manage wire (no strain, off the ground)

8.  CONDUCTORS & TERMINATION
    - Pull home-run conductors; land at combiner/disconnect
    - Wet-rated terminations, sealed raceway ends

9.  COMMISSION
    - Inspect, megger/continuity check, verify polarity & Voc
    - Energize per disconnect sequence; AHJ final inspection
```

## Sources & Further Reading

- [NEC 300.5 Underground Burial Depths — ExpertCE](https://expertce.com/learn-articles/nec-300-5-underground-burial-depths/)
- [Table 300.5 Minimum Cover Requirements — Electrical License Renewal](https://www.electricallicenserenewal.com/Electrical-Continuing-Education-Courses/NEC-Content.php?sectionID=1463)
- [NEC 300.5 Underground Burial Depths: Real Code Requirements — Building Code Geek](https://buildingcodegeek.com/nec-3005-underground-burial-depths/)
- [Types of Ground-Mount Solar Systems — Nuance Energy](https://nuanceenergy.com/solar-blog/types-of-ground-mount-solar-systems)
- [Solar Mounting Foundations: Structural & Geotechnical Design Guide — pvrack.com](https://pvrack.com/foundations/)
- [Residential Ground-Mount Solar Design — SurgePV](https://www.surgepv.com/blog/residential-ground-mount-solar-foundations-permits)
- [Ground-Mount Solar Racking: Installation & Foundation Guide — ExpertCE](https://expertce.com/learn-articles/ground-mount-solar-racking-installation/)
- ASCE/SEI 7, *Minimum Design Loads and Associated Criteria for Buildings and Other Structures* (wind/snow loads)
- NFPA 70 (National Electrical Code), Articles 250, 300, 690 — read the edition your AHJ enforces

*Educational/reference only. Follow manufacturer instructions, ASCE 7, NEC and your local building/electrical codes, and obtain engineering and permits where required; batteries and DC systems are hazardous and electrical work can be fatal.*
