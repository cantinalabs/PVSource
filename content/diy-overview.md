# Building Your Own System

Welcome to the **Build It Yourself (DIY)** section. This is the decision hub for everyone who wants
to design, install, or advise on a solar system without simply handing the whole job to a turnkey
contractor. The goal here is honesty: DIY solar can save real money and give you a system you
understand top-to-bottom, but it also drops the full weight of **safety, code compliance, permitting,
and utility coordination** onto your shoulders. This page tells you where DIY genuinely shines, where
it does not, and how to move through a build the right way.

If you already have the original homeowner-focused build guide bookmarked, this section expands it into
a full library. Start here, then branch out to the sibling pages linked throughout.

> **Read this first.** A **grid-tied** home solar system is a permitted electrical project that ties
> into the public utility grid. In almost every U.S. jurisdiction you **cannot legally energize it
> without** a building/electrical **permit**, work that meets the **NEC** edition your AHJ (Authority
> Having Jurisdiction) adopted, an **inspection**, and a signed **utility interconnection agreement**
> ending in **PTO (Permission To Operate)**. Many AHJs and utilities also require a **licensed
> electrician** for the service interconnection. "DIY" never means "skip the rules."

---

## The full range of DIY options

"DIY solar" covers a spectrum from a 100 W panel charging a battery in a van up to a 12 kW rooftop
array feeding a home. The amount of DIY latitude you have depends almost entirely on **whether you
touch the utility grid** and **whether the structure is a dwelling**. The more you involve the grid and
an occupied house, the more the law, the utility, and your insurer get a vote.

| Option | Best when… | DIY latitude | Where DIY usually stops | Sibling page |
| --- | --- | --- | --- | --- |
| **Grid-tied residential roof** | You have a sound roof, a good utility net-metering/net-billing deal, and want to offset utility bills | **Low–medium** | Service-panel tie-in, line/load-side interconnection, PTO — typically a **licensed electrician** + utility | [DIY Residential Rooftop Systems](diy-residential-roof.md) |
| **Off-grid roof (no grid tie)** | Detached cabin/shop, or you genuinely want to leave the grid | **Medium–high** | Battery listing/ventilation, large inverters; permits still often apply | [DIY Residential Rooftop Systems](diy-residential-roof.md), [Tiny Home & Off-Grid Cabin](diy-tiny-home.md) |
| **Ground mount / pole mount** | You have land, want easy access, or a bad/old roof | **High** | Trenching/conduit, structural footings, grid tie if present | [Ground-Mount & Pole-Mount](diy-ground-mount.md) |
| **RV, van & mobile** | Travel, boondocking, mobile workspace | **Very high** | Almost none — no grid tie, low voltage; just do it safely | [RV, Van & Mobile Solar](diy-rv-van.md) |
| **Tiny home / off-grid cabin** | Small dwelling off the grid, seasonal or full-time | **High** | Battery code (NFPA 855), dwelling wiring if inspected | [Tiny Home & Off-Grid Cabin](diy-tiny-home.md) |

> **Rule of thumb:** The DIY-friendliness of a project is inversely proportional to how badly a mistake
> can hurt someone *else* — a utility lineworker, a firefighter, a future occupant. Mobile and off-grid
> projects mostly endanger only you and your property. Grid-tied rooftop systems endanger third parties,
> which is exactly why they are wrapped in permits and licensing.

---

## The honest reality of DIY solar

This section will repeat this point because it is the single most misunderstood thing about home solar.

**Grid-tied is the hardest DIY category.** A realistic "DIY" grid-tied rooftop build usually means:

- **You do:** the design, the load/energy analysis, the layout, the racking and flashing, the module
  mounting, much of the DC wiring, and the labeling.
- **A licensed electrician does (or supervises):** the **service-panel interconnection**, the line-side
  or load-side tap, the main panel work, and signs off where the AHJ requires a licensed contractor.
- **The utility controls:** the **interconnection application**, the meter swap, and **PTO**. You do
  not energize until they say so, in writing.

Pure cradle-to-grave DIY on a grid-tied house — where the homeowner does every wire including the
service tie-in and self-certifies — is rare and, in many jurisdictions, **not permittable at all**.
Some AHJs allow an owner-builder to pull an electrical permit for their own primary residence; many do
not. Check before you plan around it.

**Off-grid and mobile are where DIY genuinely shines.** With no utility agreement to satisfy and no
service panel to back-feed, you control the whole project. You still must respect **fire codes**,
**battery codes (NFPA 855 where adopted)**, and local **building permits** for fixed structures — but
the bureaucratic friction drops enormously, and so does the third-party risk.

> **Honest bottom line:** If you are building grid-tied on your house to save money, budget for the
> electrician and permits up front, and treat DIY as a way to trim the *labor* portion of the install
> — not to eliminate professionals entirely. If you want maximum DIY control, an **off-grid, mobile, or
> ground-mounted** project is where you will actually get it.

### The 2026 incentive reality

The federal residential solar tax credit has changed dramatically and this directly affects DIY math:

> **Federal Section 25D residential credit is gone for 2026 builds.** Under the **One Big Beautiful
> Bill Act (OBBBA)**, signed July 4, 2025, the **Residential Clean Energy Credit (IRC §25D) terminated
> for expenditures made after December 31, 2025**. Critically, §25D(e)(8) treats an expenditure as
> "made" when the **original installation is completed** — not when you paid or signed. So a system
> whose installation finishes in 2026 generally gets **no 30% federal credit**. This narrows the gap
> between DIY and a financed professional install (pros could capture the credit on a 2025 completion;
> a slow DIY build that slips into 2026 cannot). Check remaining **state and local** incentives and any
> **§48E** commercial pathways if applicable. Verify your specific situation with a tax professional.

---

## A universal DIY build workflow

Every DIY solar project — grid-tied roof to camper van — follows the same skeleton. The details differ;
the order does not.

```
1. GOALS & LOAD BUDGET     What are you powering, and how much energy do you need?
2. SYSTEM ARCHITECTURE     Grid-tied? Off-grid? Hybrid? AC- or DC-coupled? Battery?
3. COMPONENT SELECTION     Modules, inverter(s), racking, battery, BOS, protection
4. ELECTRICAL CALCS        Voltage windows, string/branch design, wire/OCPD sizing, voltage drop
5. STRUCTURAL CALCS        Roof loads, attachment spacing, ground-mount footings, wind/snow
6. SOURCING                Kit vs. à la carte, listed gear, lead times, shipping damage
7. INSTALL                 Racking → modules → wiring → inverters → disconnects → grounding → labels
8. COMMISSIONING           Power-up sequence, measurements, monitoring verification
9. INSPECTION / PTO        AHJ inspection; utility interconnection & PTO (grid-tied only)
```

### 1. Goals & load budget
Write down your **energy goal** (kWh/month to offset, from utility bills) and your **resilience goal**
(grid-tied only, or backup during outages?). Off-grid and mobile projects start from a **load budget**:
list every device, its watts, and hours/day to get daily watt-hours. This number drives everything
downstream. See [RV, Van & Mobile Solar](diy-rv-van.md) and [Tiny Home & Off-Grid Cabin](diy-tiny-home.md)
for load-budget worksheets.

### 2. System architecture
Decide grid-tied, off-grid, or hybrid; AC-coupled vs. DC-coupled if there's a battery; microinverter
vs. string+optimizer vs. central inverter. This is also where you decide whether you need a
**critical-loads subpanel** for backup.

### 3. Component selection
Choose listed modules, inverter(s), racking matched to your mounting surface, battery (if any), and
the **balance of system (BOS)**: disconnects, overcurrent protection, conductors, connectors,
grounding hardware, and labels. See [Sourcing Materials & Kits](diy-sourcing.md).

### 4. Electrical calculations
Do the real math: string voltage windows at **record-cold** temperature, branch/string current,
conductor ampacity and **voltage drop**, overcurrent device sizing, and the **705.12 busbar check** for
grid-tied. The full worked methods live in [DIY Electrical Calculations](diy-electrical-calcs.md).

### 5. Structural calculations
Verify the roof or ground structure can carry dead + live + wind + snow loads, and that attachment
spacing meets the racking manufacturer's engineered tables for your zone. Many AHJs want a **stamped
structural letter** for rooftop arrays. See [DIY Structural Calculations](diy-structural-calcs.md) and
[Ground-Mount & Pole-Mount](diy-ground-mount.md).

### 6. Sourcing
Decide between an integrated **kit** (simpler, pre-matched, inspector-friendly) and **à la carte**
(cheaper, more flexible, more responsibility). Insist on **NRTL-listed** equipment. See
[Sourcing Materials & Kits](diy-sourcing.md).

### 7. Install
Follow the standard sequence: racking and flashing first, then modules, then wiring, then inverters,
then disconnects and grounding, then labeling. Page-specific install sequences are on each sibling page.

### 8. Commissioning
Bring the system up methodically: verify polarity, measure open-circuit and operating voltages against
your calculations, confirm rapid-shutdown function, and check that monitoring reports correctly.

### 9. Inspection / PTO
For grid-tied: pass the **AHJ inspection**, then wait for the **utility PTO** before energizing.
Off-grid fixed structures may still require a building/electrical inspection — check locally.

---

## Master safety briefing

Read this before you touch a roof, a panel, or a battery. These hazards have killed and injured
DIYers. None of them are theoretical.

### Fall protection (OSHA) — the #1 fatal hazard
> **Falls kill more solar workers than electricity does.** For any rooftop or elevated work, use a
> **personal fall-arrest system (PFAS)**: a full-body harness, a shock-absorbing lanyard, a rope grab,
> and an **anchor rated for fall arrest (5,000 lbf)** tied into structure — not a vent or a clamp.
> Never work on a wet, icy, frosty, or windy roof. Set and tie off ladders correctly. If heights make
> you uneasy, **hire out the rooftop portion** — this is not where you prove your toughness.

### DC arc-flash & "no load-break under load"
> **PV DC does not have a zero-crossing, so a DC arc does not self-extinguish like an AC arc.** A
> sunlit array is **energized whenever there is light — there is no off switch at the module.** Never
> **make or break a DC connector, fuse, or disconnect while it is carrying current.** Open the load
> first (turn off the inverter/breaker), or cover modules with opaque material, or work before sunrise.
> A connector pulled under load can sustain an arc that throws molten metal and ignites the roof.

### Lockout / tagout (LOTO)
> Before working near the service panel, battery bank, or any interconnection, **lock out and tag out**
> the relevant breakers and disconnects, then **verify zero energy with a meter** — do not assume.
> Solar systems have **multiple sources** (array, battery, grid), so de-energizing one does not make the
> whole system safe. Coordinate with the utility for any work near the meter or service entrance.

### Battery hazards
> Lithium storage is the highest-risk component in any system. Use **LFP (LiFePO4)** chemistry with a
> proper **BMS** and **listed** batteries. Follow listing, **clearance, and ventilation** rules and
> **NFPA 855** where adopted. A short across a battery bank delivers thousands of amps instantly —
> remove rings/watches, use insulated tools, and fuse every battery circuit close to the terminal.
> Improperly installed or unlisted lithium is a serious **fire and toxic off-gassing** hazard.

### General electrical & PPE
> Use **insulated tools** rated for the voltage, wear appropriate eye and hand protection, and treat
> **AC service-panel work** as lethal — shock and arc-flash there belong to a **licensed electrician**.
> When in doubt, stop and get a professional. No system is worth a life.

---

## How to use the rest of this section

This section is a library of interlinked DIY pages. Read the overview, then go deep where your project
lives:

- **[DIY Residential Rooftop Systems](diy-residential-roof.md)** — roof types and attachments,
  flashing and waterproofing, rail vs. rail-less, layout and fire setbacks, microinverter vs.
  string+optimizer, rapid shutdown, grounding, and exactly where the licensed electrician must take over.
- **[DIY Electrical Calculations](diy-electrical-calcs.md)** — the math: temperature-corrected string
  voltage windows, conductor and overcurrent sizing, voltage drop, and the 705.12 busbar check.
- **[DIY Structural Calculations](diy-structural-calcs.md)** — roof and ground-structure loads,
  attachment spacing, wind/snow, and footing design.
- **[Sourcing Materials & Kits](diy-sourcing.md)** — kit vs. à la carte, listed equipment, where to
  buy, and avoiding inspection-failing gear.
- **[Ground-Mount & Pole-Mount](diy-ground-mount.md)** — racking on land, footings, trenching, and
  conduit.
- **[RV, Van & Mobile Solar](diy-rv-van.md)** — 12/24/48 V mobile systems, DC loads, and travel-grade
  mounting.
- **[Tiny Home & Off-Grid Cabin](diy-tiny-home.md)** — small dwellings, off-grid architecture, and
  battery code.

> **Key takeaway:** Decide your category first (grid-tied roof, off-grid, ground, mobile, tiny home),
> because that decision determines how much of the project is genuinely yours to do and how much belongs
> to a licensed electrician and the utility. Then work the universal workflow top to bottom, and never
> skip the safety briefing.

---

## Sources & Further Reading

- [NREL PVWatts Calculator](https://pvwatts.nrel.gov/)
- [Congress.gov CRS — Expiration and Carryforward Rules for the Residential Clean Energy Credit](https://www.congress.gov/crs-product/IN12611)
- [IRS — Treasury & IRS FAQs on accelerated termination of energy provisions under OBBB](https://www.irs.gov/newsroom/treasury-irs-issue-faqs-to-address-the-accelerated-termination-of-several-energy-provisions-under-obbb)
- [Grant Thornton — Energy incentives under OBBBA: What you need to know](https://www.grantthornton.com/insights/alerts/tax/2025/insights/energy-incentives-under-obbba-what-you-need-to-know)
- [GreenLancer — Solar Rapid Shutdown Requirements (NEC 690.12)](https://www.greenlancer.com/post/solar-rapid-shutdown-requirements)
- [GreenLancer — The 120% Rule for Solar (NEC 705.12)](https://www.greenlancer.com/post/120-rule-for-solar)
- [OSHA — Fall Protection in Construction](https://www.osha.gov/fall-protection)
- [NFPA 855 — Standard for the Installation of Stationary Energy Storage Systems](https://www.nfpa.org/codes-and-standards/nfpa-855-standard-development/855)
- [EnergySage — Solar Panel Cost](https://www.energysage.com/local-data/solar-panel-cost/)

---

*Educational/reference only; not engineering, electrical, or financial advice. Grid-tied systems
require permits, a licensed electrician for interconnection, and AHJ approval. Verify every code
reference, incentive, and number against your local AHJ, utility, and the NEC edition in force where
you live.*
