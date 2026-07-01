# Residential Permitting & Interconnection

Bringing a residential solar (and increasingly solar-plus-storage) system online is a regulated, multi-party process. A homeowner contracts an installer, but the project must satisfy a **building/electrical permit** from the local **Authority Having Jurisdiction (AHJ)**, pass one or more **inspections**, and clear an **interconnection agreement** with the serving utility before the system can legally export power. This page walks through the full end-to-end workflow for 1–2 family dwellings, what goes into a residential permit package, how **SolarAPP+** instant permitting works, HOA and solar-rights considerations, and realistic timelines and costs.

> **Key point:** A residential PV system is not legal to operate until you have both (1) a passed final electrical/building inspection from the AHJ and (2) **Permission to Operate (PTO)** from the utility. Turning the system on before PTO can violate your interconnection agreement and create safety hazards.

## End-to-End Residential Workflow

The typical residential project moves through eight stages. The two approval tracks — the **AHJ permit track** and the **utility interconnection track** — run partly in parallel, then converge at PTO.

```
                    RESIDENTIAL SOLAR PROJECT WORKFLOW
                    ==================================

  [1] SITE ASSESSMENT
      - Roof age/condition, orientation, shading (drone/satellite)
      - Main service panel rating, busbar, available breaker space
      - Utility account & rate schedule review
              |
              v
  [2] SYSTEM DESIGN & ENGINEERING
      - Array layout, module/inverter selection, string sizing
      - Structural attachment & load check, electrical single-line
              |
              +---------------------------+
              |                           |
              v                           v
  [3] AHJ PERMIT PACKAGE           [3b] UTILITY INTERCONNECTION
      - Building + electrical            APPLICATION
        permit application               - Submit with single-line,
      - Site plan, SLD, datasheets,        equipment specs, system size
        structural details              - Net-metering / net-billing
              |                            enrollment selection
              v                           |
  [4] AHJ PLAN REVIEW                      v
      - Plan check / corrections     [4b] UTILITY ENGINEERING REVIEW
      - Permit ISSUED                      - Approval to install (may be
              |                              required BEFORE install in
              |                              some territories)
              v                           |
  [5] INSTALLATION                         |
      - Mounting, wiring, equipment,        |
        labels/placards                     |
              |                            |
              v                           |
  [6] AHJ INSPECTION(S)                     |
      - Rough-in (if required) + FINAL      |
      - Inspector sign-off                  |
              |                           |
              +-------------+-------------+
                            |
                            v
  [7] UTILITY METER / WITNESS
      - Bidirectional (net) meter set/verified
      - Witness test if required
                            |
                            v
  [8] PERMISSION TO OPERATE (PTO)
      - Utility authorizes energizing
      - System legally turned ON
```

| Stage | Owner | Typical output |
|---|---|---|
| Site assessment | Installer | Feasibility & preliminary design |
| Design/engineering | Installer / PE | Stamped plan set (when required) |
| Permit package | Installer | Submitted application to AHJ |
| Plan review | AHJ | Issued permit |
| Interconnection app | Installer/homeowner | Utility approval to install |
| Installation | Installer | Built system |
| Inspection | AHJ | Passed final |
| PTO | Utility | Authorization to energize |

## Building vs. Electrical Permits

Most residential PV projects require **two permit components**, sometimes issued as a single combined "solar permit":

| Permit type | Covers | Reviewed against |
|---|---|---|
| **Building/structural permit** | Roof attachment, racking, point loads, wind/snow uplift, roof penetrations | Local building code (typically **IRC** / **IBC** as adopted) |
| **Electrical permit** | Conductors, overcurrent protection, grounding/bonding, disconnects, labeling, interconnection method | **National Electrical Code (NFPA 70 / NEC)**, esp. **Article 690** (PV) and **Article 705** (interconnection) |

Some jurisdictions also require a separate **fire permit/review** for access pathways and setbacks, and a **storage/ESS permit** when batteries are included (NEC Article 706 and fire code provisions for energy storage).

> **Code note:** Modern NEC editions require **rapid shutdown** (NEC 690.12) for conductors on or in the building, and module-level shutdown for most rooftop residential arrays. Confirm which NEC edition your AHJ has adopted — adoption lags the published cycle by years and varies by state.

## What's in a Residential Permit Package

A complete, "clean" submittal speeds plan review dramatically. A typical residential package includes:

| Document | Purpose / contents |
|---|---|
| **Site plan** | Property/roof layout, array location, setbacks, fire access pathways, location of service equipment and disconnects |
| **Electrical single-line diagram (SLD)** | Modules → strings → inverter(s) → disconnects → point of interconnection; conductor sizes, OCPD ratings, grounding, equipment ratings |
| **Structural / attachment details** | Rafter size/spacing, attachment type and spacing, racking system, load calculations; **PE stamp** where required by the AHJ |
| **Equipment datasheets / cut sheets** | Modules, inverters/optimizers/microinverters, racking, batteries — with listings (e.g., UL 1703/61730, UL 1741) |
| **Placards & label schedule** | Rapid-shutdown labels, DC/AC disconnect labels, system caution labels, directory of disconnecting means (per NEC 690/705/110) |
| **Line/load calculation** | Service panel rating, busbar rating, **120% rule** (NEC 705.12) backfeed check, or supply-side connection detail |
| **Spec/permit forms** | AHJ application, contractor license, sometimes a structural letter or wind-speed/snow-load basis |

> **The 120% busbar rule** (NEC 705.12(B)) is the single most common residential design constraint. The inverter backfeed breaker plus the main breaker generally cannot exceed 120% of the busbar rating. When it does, installers use a **line (supply-side) tap**, a **main breaker derate**, or a panel upgrade. Flag this at design, not at inspection.

## SolarAPP+ Instant Permitting

**SolarAPP+** (Solar Automated Permit Processing Plus) is a free, web-based platform developed by the **National Renewable Energy Laboratory (NREL)**, funded by the U.S. Department of Energy's Solar Energy Technologies Office. It automates plan review for **code-compliant residential PV and storage** systems, issuing an **instant, no-touch permit** for projects that pass its built-in code checks.

How it works:

```
  Installer enters system design
            |
            v
  SolarAPP+ runs automated code/compliance checks
   (NEC 690/705, structural inputs, rapid shutdown, etc.)
            |
       +----+----+
       |         |
   PASS|         |FAIL -> errors flagged for correction
       v
  Instant permit number issued
            |
            v
  Install -> AHJ field INSPECTION still required
```

Key facts (verified June 2026):

- SolarAPP+ replaces the **plan-review** step, not the field inspection — a physical inspection is still required.
- As reported by NREL/DOE, by late 2025 roughly **275 jurisdictions across ~13 states** had adopted SolarAPP+, and NREL data show it can reduce review time from ~20 business days to effectively zero, cutting total project timelines meaningfully.
- It only works for **code-compliant standard residential designs** within the platform's supported parameters; complex or non-standard designs still go through conventional review.
- Adoption is **AHJ-by-AHJ** — your specific city/county must have enabled SolarAPP+ for it to apply. Check the [SolarAPP+ adoption map](https://solarapp.nrel.gov/).

## HOA Considerations & State Solar-Rights Laws

Homeowners in a **Homeowners Association (HOA)** often must seek architectural-review approval before installing solar. However, many states have **solar access / solar rights laws** that limit how far an HOA can restrict installations.

> **Key point:** Solar-rights protections vary widely by state. Most states have *some* protection, but the strength differs — some void HOA bans outright, others only prohibit "unreasonable" restrictions (which HOAs may interpret as cost or aesthetic limits). Always read your CC&Rs and your state statute together.

General categories (verify your state on **DSIRE**):

| Mechanism | What it does |
|---|---|
| **Solar access / solar rights laws** | Limit or void HOA and local restrictions that prohibit or significantly impair residential solar; ~25 states have specific HOA-focused statutes, and many more offer broader protections |
| **Solar easements** | Allow a property owner to negotiate a recorded easement protecting access to sunlight (offered in ~30+ states); these are *voluntary contracts*, not automatic guarantees |
| **Permitting/access provisions** | Some states cap permit fees or mandate streamlined/automated permitting |

Recent examples: Michigan enacted a solar access law effective April 2025; Texas **HB 431** (effective May 29, 2025) extended HOA protections to **solar roof tiles**. A handful of states (e.g., Alabama, Arkansas, Connecticut, Mississippi, Oklahoma, Pennsylvania, South Carolina, South Dakota, Wyoming) historically have **not** had specific solar-access statutes — confirm current status before assuming protection.

For the authoritative, regularly updated state-by-state picture, use the [DSIRE solar easement & rights database](https://programs.dsireusa.org/system/program/detail/14).

## Utility Interconnection & Net-Metering Enrollment

In parallel with the AHJ track, the installer (or homeowner) files an **interconnection application** with the serving utility. For residential-scale systems this is usually the utility's simplified/fast-track process.

Typical interconnection flow:

1. **Application** — system size, equipment, single-line diagram, listings (UL 1741 / IEEE 1547 anti-islanding inverter).
2. **Utility review** — engineering check of the circuit and equipment; in some territories you must receive **approval to install before construction**.
3. **Compensation enrollment** — you select/are assigned a billing structure:
   - **Net metering (NEM):** Exports credited at or near full retail rate; you "spin the meter backward." Still common in many states.
   - **Net billing:** Exports credited at a lower **avoided-cost / export rate** while imports are billed at retail. This is the national trend.
4. **Meter exchange** — utility installs/verifies a **bidirectional (net) meter**.
5. **Witness test** (if required) — utility verifies the installation.
6. **PTO** — written authorization to energize.

> **California NEM 3.0 / Net Billing (verified June 2026):** California's three large IOUs (PG&E, SCE, SDG&E) operate under the **Net Billing Tariff (NBT)**, widely called **NEM 3.0**, effective April 15, 2023. Export credits are set by the **Avoided Cost Calculator** and are roughly 75% lower than retail (often ~$0.05–$0.08/kWh vs. ~$0.30 retail). Rates are locked to your PTO "**vintage year**" for ~9 years. A California court **upheld NEM 3.0 in March 2026**. Because exports are worth far less, **battery storage** is now central to residential California economics. NEM 2.0 grandfathering generally required applications before April 15, 2023 and PTO before April 15, 2026. Confirm current rules with your IOU.

Net-metering rules differ dramatically by state (full 1:1 retail in some, near-zero export value in others). Check your state and utility on [DSIRE](https://www.dsireusa.org/) and your utility's rate schedules.

## Inspection Checklist (Common Red Flags)

The AHJ **final inspection** is where avoidable failures surface. Below are frequent items inspectors check and common reasons residential systems fail.

| Inspection area | What's checked | Common red flag |
|---|---|---|
| **Roof attachments** | Flashing, lag into rafters, spacing, sealant | Missing/improper flashing; lags into sheathing, not rafters |
| **Racking/bonding** | Grounding/bonding continuity of rails & modules | Improper WEEB/lug bonding; missing equipment ground |
| **Conductor protection** | Conduit support, wire management under array | DC conductors zip-tied loosely / UV-exposed; sagging wires |
| **Disconnects** | AC/DC disconnect presence, accessibility, rating | Disconnect not within sight / not labeled / undersized |
| **Overcurrent / 120% rule** | Backfeed breaker, busbar rating compliance | NEC 705.12 busbar violation; breaker at wrong end of bus |
| **Rapid shutdown** | NEC 690.12 device + initiation switch + label | Missing rapid-shutdown label or initiator at service |
| **Grounding/bonding** | GEC, bonding to existing electrode system | Discontinuous or undersized grounding electrode conductor |
| **Labeling/placards** | All NEC 690/705/110 labels present & durable | Missing/handwritten/faded placards |
| **Equipment listing** | Modules, inverter, ESS match approved plans | Installed equipment differs from permitted datasheets |
| **Working clearances** | NEC 110.26 space at panels/disconnects | Equipment installed in non-compliant clearance |
| **ESS/battery (if present)** | Location, separation, ventilation, signage | Battery in non-permitted location; missing ESS placards |

> **Warning:** The fastest way to fail an inspection is to deviate from the permitted plans. If field conditions force a change (different module, panel upgrade, relocated disconnect), submit a **revision** to the AHJ rather than hoping the inspector won't notice.

## Typical Timelines & Permit Costs

These are general ranges for U.S. residential projects; actuals vary widely by AHJ and utility.

| Step | Typical duration |
|---|---|
| Site assessment & design | A few days to ~2 weeks |
| Permit review (conventional) | ~1–4 weeks (longer in busy AHJs) |
| Permit review (SolarAPP+) | Instant (minutes) for eligible designs |
| Installation (labor on-site) | 1–3 days for a typical roof array |
| AHJ inspection scheduling | A few days to ~2 weeks |
| Utility interconnection / PTO | ~2–6 weeks (highly utility-dependent) |
| **Total (contract to PTO)** | **~1–3 months typical** |

Permit fees: residential solar permit fees commonly range from **a flat ~$100–$500** to **percentage-of-cost** schedules, depending on the jurisdiction; some states **cap** residential PV permit fees by statute. Utility interconnection application fees for residential systems are often **low or waived**. Always confirm current fee schedules with your specific AHJ and utility.

> **Practical tip:** The two longest, least-controllable steps are usually **AHJ plan review** and **utility PTO**. Submitting a clean, complete package (and using SolarAPP+ where available) compresses the first; filing the interconnection application early — in parallel with the permit — compresses the second.

## Sources & Further Reading

- [SolarAPP+™ — NREL](https://solarapp.nrel.gov/)
- [SolarAPP+: Solar Automated Permit Processing — NREL](https://www.nrel.gov/research/software/solarapp-solar-automated-permit-processing)
- [Streamlining Solar Permitting with SolarAPP+ — U.S. Department of Energy](https://www.energy.gov/cmei/systems/streamlining-solar-permitting-solarapp)
- [SolarAPP+ — Interstate Renewable Energy Council (IREC)](https://irecusa.org/programs/solarapp/)
- [DSIRE — Solar Easements & Rights Laws](https://programs.dsireusa.org/system/program/detail/14)
- [Database of State Incentives for Renewables & Efficiency (DSIRE)](https://www.dsireusa.org/)
- [Net Metering — SEIA](https://seia.org/net-metering/)
- [PG&E — Solar Billing Plan (NEM 3.0 / NBT)](https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html)
- [California court upholds NEM 3.0 — pv magazine USA](https://pv-magazine-usa.com/2026/03/10/california-court-upholds-nem-3-0-dealing-blow-to-rooftop-solar/)
- [Solar Access Laws by State — Palmetto](https://palmetto.com/policy/solar-access-laws-by-state)

> **Disclaimer:** This page is for educational and reference purposes only and is not tax, legal, or financial advice. Permitting, interconnection, and solar-rights rules change frequently and vary by jurisdiction and utility. Verify current requirements and programs with your local AHJ, your serving utility, [DSIRE](https://www.dsireusa.org/), and the [IRS](https://www.irs.gov/), and consult a qualified tax professional and licensed installer before making decisions.
