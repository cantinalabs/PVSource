# DIY Residential Rooftop Systems

The roof is the most common — and most demanding — place to put a DIY array. You are working at
height, penetrating a weatherproof envelope, handling high-voltage DC in daylight, and (for grid-tied
systems) tying into the utility. Done right, a rooftop system disappears into the roof and lasts as
long as the modules. Done wrong, it leaks, fails inspection, or starts a fire. This page covers the
in-depth practice of mounting solar on a residential roof, and is brutally clear about **where DIY
stops and a licensed electrician plus a permit must take over**.

This page assumes you have already read [Building Your Own System](diy-overview.md) and absorbed the
master safety briefing. It hands the math to [DIY Electrical Calculations](diy-electrical-calcs.md)
and [DIY Structural Calculations](diy-structural-calcs.md).

> **Permit and PTO reality, up front.** A grid-tied rooftop system needs a **permit**, an
> **inspection**, NEC-compliant work, and **utility PTO (Permission To Operate)** before you energize.
> Many AHJs and utilities require a **licensed electrician** for the service interconnection. Do not
> start roof work until the permit is issued (unless your AHJ explicitly allows it), and **do not
> energize until PTO is granted in writing.**

---

## Before the roof: is this roof a candidate?

Solar should outlive one roof. Putting an array on a roof with little life left guarantees an expensive
remove-and-reinstall later.

> **Rule of thumb:** Only mount solar on a roof with **at least 10–15 years of remaining life**. If the
> roof is near end of life, **re-roof first.** It is far cheaper to do it before the array goes on.

Also confirm: structural adequacy (see [DIY Structural Calculations](diy-structural-calcs.md)), good
solar access (orientation, tilt, shading), enough usable area after **fire setbacks**, service-panel
capacity for grid-tied, and any HOA or aesthetic restrictions.

---

## Roof types & attachment methods

The attachment is where waterproofing and structural load meet. Each roof covering has its own
correct, **flashed** attachment family. Using the wrong attachment — or relying on sealant instead of
flashing — is the leading cause of hidden, long-term roof damage.

| Roof covering | Typical attachment | Waterproofing method | Notes |
| --- | --- | --- | --- |
| **Composition (asphalt) shingle** | **Flashed feet / standoffs** lagged into rafters | Aluminum/galvanized **flashing** slid under the upslope course; sealed lag with EPDM washer or flashing-integral seal | The DIY default. Locate rafters precisely; the flashing — not caulk — is the waterproofing. |
| **Tile (concrete/clay)** | **Tile hooks** or **tile-replacement** mounts (e.g., comp-out / "tile bridge") | Hook routed under tile to the deck with flashing; or a replacement deck mount with new tile/flashing around it | Tiles are brittle — walk on the lower third over battens, replace cracked tiles. Most labor-intensive. |
| **Standing-seam metal** | **Non-penetrating seam clamps** (e.g., S-5! style) | **No penetration** — clamps grip the seam | The cleanest, most leak-proof option. No holes in the roof at all. Verify clamp matches the seam profile. |
| **Exposed-fastener metal (R-panel, corrugated)** | **Penetrating mounts** through the rib, sealed | Butyl/EPDM-backed mount or flashing at the high rib, fastened into purlin/rafter | Fasten at the **high point of the rib**, never the valley where water runs. |
| **Low-slope / membrane (TPO, EPDM)** | Ballasted or membrane-welded curb mounts | Welded/flashed by the membrane manufacturer's method | Often outside DIY scope — improper membrane work voids the roof warranty. |

> **Waterproofing warning (repeat after me):** A penetration that **misses the rafter** or relies on
> **sealant instead of flashing** will leak and rot your roof deck — often invisibly, for years. Find
> rafters precisely (measure from a known point, confirm with a probe or from the attic), drill pilot
> holes, set the lag into solid wood, and **flash every penetration** the way the attachment
> manufacturer specifies. Caulk is a supplement, never the primary seal.

```
COMP-SHINGLE FLASHED FOOT (cross-section, water flows downhill →)

         shingle course above
        ┌───────────────────────┐
        │    FLASHING (under)    │   ← metal flashing tucked UP under
   ─────┴────┬──────────────┬────┴─────  the next course up
   shingle   │  standoff    │   shingle
             │  + EPDM seal │
   ══════════╪══════════════╪══════════  roof deck
             ║  LAG BOLT    ║
        ╔════╩══════════════╩════╗
        ║        RAFTER          ║  ← lag must bite solid wood
        ╚════════════════════════╝
```

---

## Rail vs. rail-less

| System | How it works | Pros | Cons |
| --- | --- | --- | --- |
| **Railed** | Attachments support continuous **rails**; modules clamp to rails | Forgiving of attachment placement; modules slide for alignment; mature, well-documented; easy bonding via lugs/WEEBs | More parts, more weight, more cost; rails must be cut/spliced |
| **Rail-less** | Module-to-module clips/brackets bolt straight to attachments; modules become the structure | Fewer parts, lighter, cleaner look, less cost | Attachment placement must be precise (driven by module dimensions); less tolerance; module-specific hardware |

> **DIY guidance:** **Railed systems are the more forgiving DIY choice.** Rails let you correct minor
> attachment misplacement and slide modules into alignment. Rail-less can look great and cost less, but
> it demands exact attachment layout because the **modules themselves carry the load** — a misplaced
> mount has nowhere to go.

---

## Layout & fire setbacks

Your usable roof area is not the whole roof. Fire codes (IFC/IRC, as adopted) require **setbacks and
access pathways** so firefighters can ventilate the roof and move safely.

- **Ridge setback:** commonly a clear pathway at the ridge (often ~18 in / 3 ft depending on adopted
  code and roof configuration) so crews can cut a ventilation hole.
- **Access pathways:** typically **3 ft wide** along certain edges/hips/valleys, depending on roof
  area and configuration.
- **Edge setbacks** and per-array spacing may also apply.

> **Verify setbacks with your AHJ.** Fire-access requirements vary by adopted code edition and local
> amendment, and they directly shrink the array you can fit. Lay the array out **after** subtracting
> setbacks — never design to the full roof and hope. A layout that ignores setbacks fails plan review.

Within the usable area, lay out modules to maximize production while respecting setbacks, avoiding
shaded zones, and keeping rows square and aligned. Plan your **module landscape vs. portrait**
orientation to fit rafters and setbacks before ordering racking.

---

## Grid-tied vs. roof off-grid

The same roof can host very different electrical systems:

- **Grid-tied roof:** Array → inverter(s) → AC → **interconnection to the utility grid**. Requires
  permit, inspection, interconnection agreement, and **PTO**. The grid acts as your "battery." This is
  the lowest-DIY-latitude path because of the service tie-in and utility involvement.
- **Roof off-grid:** Array → charge controller / hybrid inverter → **battery bank** → loads, with **no
  grid connection**. Far more DIY latitude (no PTO), but you own the entire energy budget, need a
  battery (see safety below), and usually want a backup **generator**. Battery code (**NFPA 855** where
  adopted), clearance, and ventilation rules apply.
- **Hybrid:** Grid-tied with battery backup and a **critical-loads subpanel** — all the grid-tied
  requirements *plus* battery requirements. Highest stakes, lowest DIY latitude.

> **If you want maximum DIY control on a roof,** an off-grid architecture removes the utility from the
> equation. But it does **not** remove building permits, fire/battery code, or the need to wire DC
> correctly. Bad DC wiring starts fires whether or not the grid is involved.

---

## Microinverter vs. string + optimizer for DIY

This is the central electrical-architecture decision for a grid-tied DIY roof.

| Aspect | Microinverters (one per module) | String inverter + DC optimizers |
| --- | --- | --- |
| **Roof-level voltage** | **AC only** — no high-voltage DC on the roof | High-voltage **DC strings** run to the inverter |
| **Rapid shutdown (690.12)** | Satisfied inherently — cut AC and DC dies at the module | Optimizers provide module-level shutdown; verify the listed combination |
| **Shading tolerance** | Per-module — one shaded module barely affects others | Optimizers recover most per-module loss |
| **DIY wiring** | **AC branch trunk cabling** — simpler, more forgiving | DC string design with temperature-corrected voltage windows |
| **Troubleshooting / monitoring** | Per-module data; failure is localized | String/optimizer data; one inverter to service |
| **Cost** | Higher per-watt for the electronics | Often lower; single inverter |
| **Inverter location** | Distributed on roof (under modules) | Central inverter, usually at ground level near the panel |

> **DIY guidance:** **Microinverters are the friendlier DIY choice for most rooftop builds.** They keep
> **only AC** on the roof (no high-voltage DC arc hazard up top), satisfy **rapid shutdown** inherently,
> tolerate shading per-module, and use simpler AC trunk cabling. String + optimizer can be more
> cost-effective at scale but demands correct **temperature-corrected DC string design** — get the
> record-cold voltage math from [DIY Electrical Calculations](diy-electrical-calcs.md), because
> over-voltaging a string inverter in cold weather is a classic DIY failure.

---

## Wiring runs & rapid shutdown

### Wiring runs
- Route module leads neatly; **fully seat every MC4-type connector** until it clicks — a loose or
  half-seated connector arcs and is a leading rooftop fire cause.
- **Never mix connector brands.** "MC4-compatible" from different makers can look identical and fail
  under load. Use matched, listed connectors.
- Support all conductors **off the roof surface** with listed clips/cable management. Conductors lying
  on shingles get destroyed by UV and abrasion, exposing copper.
- Size conductors and overcurrent devices, and check **voltage drop**, per
  [DIY Electrical Calculations](diy-electrical-calcs.md).
- Transition from the array to **conduit (EMT)** for exposed runs where required, and into the building
  per the wiring method your AHJ accepts.

### Rapid shutdown (NEC 690.12)
> **Rapid shutdown protects firefighters** by quickly de-energizing rooftop conductors. Under the 2020
> and 2023 NEC, an initiation device must reduce **conductors outside the array boundary to ≤30 V** and
> **conductors inside the boundary to ≤80 V within 30 seconds** of initiation. The "array boundary" is
> generally **1 ft (305 mm)** in all directions from the array.

- **Microinverters** and **module-level optimizers (MLPE)** satisfy 690.12 at the module level and are
  the dominant DIY-compliant approach.
- A **PV Hazard Control System (PVHCS)** is the alternative listed pathway.
- An accessible **rapid-shutdown initiator** (often the AC disconnect or a labeled switch) and the
  required **placard/diagram** must be present.
- **2023 NEC nuance:** rapid shutdown is **not required on non-enclosed, detached structures** (e.g.,
  certain carports, ground mounts, solar trellises), and conductors from a ground-mounted array that
  terminate on a building exterior without entering it are not "controlled conductors." For a **roof on
  a dwelling**, assume rapid shutdown **is** required. **Confirm the edition your AHJ enforces.**

---

## Grounding & bonding

Every metal part of the array — module frames, rails, mounts — must be **bonded** together and to the
system grounding, so a fault cannot energize the array.

- **WEEBs (Washer, Electrical Equipment Bond):** stainless bonding washers whose teeth bite through
  anodizing to bond module frames to rails (and rails to mounts) as you torque the clamps. Place them
  exactly where the racking manufacturer specifies.
- **Lay-in lugs / grounding lugs:** bond rails to the **equipment grounding conductor (EGC)**, which
  runs continuous back to the system grounding.
- **Listed bonding clips/jumpers:** bond across rail splices and between rows where the racking system
  requires.
- For string systems, the EGC and any **grounding electrode** connections must be sized and made per
  NEC; microinverter branch systems still require a continuous EGC bonding all equipment.

> **Bonding is not optional and inspectors check it closely.** A missing WEEB, an unbonded splice, or an
> undersized/discontinuous EGC fails inspection and leaves the array capable of becoming energized in a
> fault. Use the racking manufacturer's listed bonding method **exactly** — mixing methods can void the
> listing. Size the EGC per [DIY Electrical Calculations](diy-electrical-calcs.md).

---

## The install sequence

```
1.  PERMIT IN HAND          Do not start roof work until the permit is issued (unless AHJ allows).
2.  LAYOUT & RAFTER MARKING Snap chalk lines; locate and mark every rafter precisely.
3.  ATTACHMENTS & FLASHING  Install flashed feet/hooks/clamps into rafters at engineered spacing.
4.  RAILS (if railed)       Mount, level, splice, and bond rails (lugs/WEEBs).
5.  MICROS/OPTIMIZERS       Mount MLPE to rails before modules where applicable.
6.  MODULES                 Set modules, torque mid/end clamps to spec, bond each frame (WEEB).
7.  DC/AC WIRING            Seat connectors fully; support conductors off the roof; run trunk/strings.
8.  TRANSITION & CONDUIT    Penetrate/route into conduit; into the building per accepted method.
9.  *** ELECTRICIAN ZONE ***  Disconnects, interconnection, service-panel tie-in (see below).
10. GROUNDING/BONDING       Complete continuous EGC and grounding-electrode connections.
11. LABELING                Apply all 690/705 placards (disconnect, RSD diagram, dual-source, OCPD).
12. INSPECTION              Pass AHJ inspection.
13. INTERCONNECTION & PTO   Utility meter swap / witness; energize ONLY after written PTO.
```

> **Safety repeats, because they matter:** Treat the array as **live in daylight**. **Never break a DC
> connector under load.** Wear **fall-arrest gear** on the roof and never work on a wet/icy/windy roof.
> **Lock out and tag out** before any service-panel work and verify zero energy with a meter.

---

## Where DIY stops: the licensed-electrician / permit line

This is the heart of the page. Even on an otherwise DIY-friendly rooftop project, certain work almost
always belongs to a **licensed electrician**, and certain steps **legally require** permits, inspection,
and utility approval.

**Generally DIY-able (with permit and inspection):**
- Roof attachments, flashing, racking, module mounting.
- Module-level wiring, MC4 seating, conductor support and routing.
- Bonding of array frames/rails (WEEBs, lugs) under the racking listing.

**Almost always a licensed electrician / not homeowner-self-certified:**
- The **service-panel interconnection** — **load-side back-fed breaker** (with the **705.12 "120%"
  busbar check**) or a **supply-side/line-side tap**.
- Any work **inside the main service panel** or at the **meter/service entrance**.
- **Battery / energy-storage** wiring and protection in many jurisdictions.
- Final **disconnect and OCPD** installation where the AHJ requires a licensed contractor.

**Controlled entirely by others — you do not get to skip these:**
- The **building/electrical permit** (some AHJs let an owner-builder pull it for a primary residence;
  many do not).
- The **AHJ inspection**.
- The **utility interconnection agreement** and **PTO** — the utility decides when you may energize.

> **The 120% busbar rule (NEC 705.12) in one breath:** For a **load-side** connection, the sum of the
> main breaker plus the back-fed PV breaker generally may not exceed **120% of the busbar rating**, and
> the **PV breaker must sit at the opposite end of the busbar from the main**. If you can't satisfy it,
> you need a **line-side (supply-side) tap**, a **main-breaker derate**, or a **panel upgrade** — and
> that determination, and the work, belong to the electrician. Do the calculation in
> [DIY Electrical Calculations](diy-electrical-calcs.md), but have the licensed electrician own the
> tie-in.

> **Do not energize before PTO.** Operating a grid-tied system without utility PTO violates your
> interconnection agreement and can **back-feed the grid during an outage, endangering line workers.**
> Wait for the written PTO every time.

---

## Common DIY rooftop mistakes

- Starting roof/electrical work **before the permit is issued**.
- Attachments that **miss rafters** or rely on **caulk instead of flashing** → hidden leaks and rot.
- Designing the array to the **full roof**, ignoring **fire setbacks** → plan-review failure.
- Sizing a string at 25 °C instead of **record-cold** temperature → over-voltaging the inverter.
- **Loose or mixed-brand MC4 connectors** → arcing and fire.
- Missing **WEEBs/bonding** or an **undersized/discontinuous EGC** → failed inspection, fault hazard.
- Forgetting **rapid-shutdown** compliance, the **initiator**, or the required **labels**.
- Ignoring the **705.12 busbar limit** → failed inspection or forced panel upgrade.
- **Energizing before PTO** → interconnection violation and lineworker danger.
- Mounting on a roof with **<10–15 years** of life left → costly remove-and-reinstall.

---

## Sources & Further Reading

- [GreenLancer — Solar Rapid Shutdown Requirements (NEC 690.12)](https://www.greenlancer.com/post/solar-rapid-shutdown-requirements)
- [Solar Power World — 2023 code changes to rapid shutdown requirements](https://www.solarpowerworldonline.com/2024/01/2023-code-changes-rapid-shutdown-requirements/)
- [Mayfield Renewables — 2023 NEC Updates to Rapid Shutdown Requirements](https://www.mayfield.energy/technical-articles/2023-nec-updates-to-rapid-shutdown-requirements/)
- [GreenLancer — The 120% Rule for Solar (NEC 705.12)](https://www.greenlancer.com/post/120-rule-for-solar)
- [Mayfield Renewables — Code Corner: NEC 705.12(B)(3)(6) Load-Side Source Connections](https://www.mayfield.energy/technical-articles/code-corner-nec-article-70512b36-load-side-source-connections/)
- [OSHA — Fall Protection in Construction](https://www.osha.gov/fall-protection)
- [NREL PVWatts Calculator](https://pvwatts.nrel.gov/)
- [Congress.gov CRS — Expiration and Carryforward Rules for the Residential Clean Energy Credit](https://www.congress.gov/crs-product/IN12611)

---

*Educational/reference only; not engineering, electrical, or financial advice. Grid-tied systems
require permits, a licensed electrician for interconnection, and AHJ approval before energizing. Verify
every code reference, setback, and number against the NEC/IFC edition adopted by your local AHJ and your
utility's interconnection rules.*
