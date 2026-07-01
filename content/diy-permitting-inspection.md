# DIY Permitting & Inspection Walkthrough

Permitting is where many do-it-yourself solar projects stall — not because the engineering is hard, but because the paperwork, the inspection sequence, and the utility's rules are unfamiliar. This guide walks a homeowner-installer through the entire path: from pulling permits, to assembling a complete packet, to passing the rough and final inspections, to receiving **Permission to Operate (PTO)** from the utility.

> **SAFETY & LEGAL CAUTION:** Installing a grid-tied PV system almost always requires permits and inspections, and most jurisdictions require a **licensed electrician** to make the final service connection. Doing permitted work yourself does not exempt you from code. Energizing a system without PTO can violate your interconnection agreement, void insurance, and create a back-feed hazard for utility line workers. When in doubt, hire a licensed professional.

This page is part of the DIY series — see [Building Your Own System](diy-overview.md), [DIY Electrical Calculations](diy-electrical-calcs.md), [Residential Permitting & Interconnection](residential-permitting.md), and [Sourcing Materials & Kits](diy-sourcing.md).

## The Two Permit Tracks

Almost every rooftop PV install touches **two separate review tracks**, and they are often handled by different departments in the same building office.

| Permit type | What it reviews | Typical documents |
|---|---|---|
| **Building / structural permit** | Roof attachment, rail layout, dead and live loads, wind/snow uplift, fire setbacks and access pathways | Site plan, roof plan, structural attachment detail, rafter/truss info, mounting hardware datasheets |
| **Electrical permit** | Conductor sizing, overcurrent protection, grounding/bonding, rapid shutdown, point of interconnection, labeling | Single-line (one-line) diagram, equipment datasheets, placard schedule, load/busbar calculation |

> **Rule of thumb:** A ground mount may add a separate structural/foundation review. Adding battery storage almost always triggers extra fire-code review (working clearances, garage vs. exterior siting, energy ratings). Check your **Authority Having Jurisdiction (AHJ)** before you design.

Some AHJs combine both into a single "solar permit." Others — and many utilities — also require a separate **interconnection application** that runs in parallel with the building department and is reviewed by the **utility**, not the city.

## Assembling the Permit Packet

A clean first submission is the single biggest predictor of a fast approval. Build the packet to anticipate the reviewer's questions.

### 1. Site Plan

A scaled, top-down drawing of the property.

- Property lines, structures, north arrow, and scale.
- Array location and dimensions on the roof or ground.
- Location of the main service panel, meter, any **AC disconnect**, and the **point of interconnection**.
- For roofs: **fire-access pathways and setbacks** (commonly a 3 ft ridge setback and clear pathways under the International Fire Code / International Solar Energy Provisions — confirm local adoption).

### 2. Single-Line (One-Line) Diagram

The electrical heart of the packet. It shows every component from module to grid in one schematic line.

```
 [PV ARRAY]          [INVERTER]        [AC DISCONNECT]      [MAIN PANEL / POI]      [UTILITY METER]
  N modules    --->   String/micro  -->   (if required)  -->   Breaker / busbar  -->   Bi-directional
  in series x          inverter            visible,             back-feed             meter --> GRID
  M strings            (model #)           lockable             per 705.12
       |                   |
   Voc / Isc /         AC output
   temp-corrected      current, OCPD
```

The single-line must label: module count and configuration, wire types and sizes, conduit, grounding electrode conductor, overcurrent device ratings, the **120% busbar calculation** (NEC 705.12), and rapid-shutdown method.

> See [DIY Electrical Calculations](diy-electrical-calcs.md) for temperature-corrected **Voc**, conductor ampacity with correction factors, and the back-feed/busbar math — voltage and ampacity errors are among the most common reasons a reviewer kicks back a packet.

### 3. Structural / Attachment Detail

- Rafter or truss size and **spacing**, roof framing type.
- Attachment hardware (lag bolt size, embedment depth, flashing), and **spacing of attachments**.
- The resulting point load vs. allowable load. Large or marginal roofs may require a **stamped engineering letter** from a licensed structural/PE engineer.

### 4. Equipment Datasheets

Manufacturer cut sheets for modules, inverter(s), optimizers/rapid-shutdown devices, racking, and (if present) the battery and its listing. Reviewers verify your design numbers against the nameplate data and confirm components are **listed** (UL 1741 for inverters, UL 1703/61730 for modules, UL 9540 for ESS).

### 5. Placards & Labels

A surprisingly large share of inspection failures are pure labeling. Include a **placard/label schedule** in the packet so the inspector can verify it on site.

| Common required label | Typical location |
|---|---|
| **Rapid-shutdown** placard with the building diagram graphic | At the service disconnect / RSD initiator |
| "PHOTOVOLTAIC SYSTEM EQUIPPED WITH RAPID SHUTDOWN" | Per NEC 690.56(C) |
| DC/AC system parameters (max voltage, current) | At disconnects |
| "WARNING: DUAL POWER SOURCE / second source PV" | Main panel and meter |
| Back-fed breaker "DO NOT RELOCATE" warning | At the interconnection breaker |
| Directory/placard of all power sources | At the service equipment |

> Label wording and format are code-specific. The rapid-shutdown placard is usually the **first thing** an inspector checks — confirm exact text against the NEC edition your AHJ enforces.

## SolarAPP+ Instant Permitting

**SolarAPP+ (Solar Automated Permit Processing)** is a free, NREL-developed web platform that lets participating jurisdictions issue **instant, automated** permits for code-compliant residential PV (with or without storage).

How it works:

1. The installer enters the full system specification into SolarAPP+.
2. The portal runs an **automated compliance check** against model building, electrical, and fire codes.
3. A compliant design receives a **permit instantly**; a non-compliant one is rejected immediately with the specific reason, so you can fix and resubmit.

Key facts (verify current figures before relying on them):

- There is **no cost to the local government** to adopt it; installers pay a **processing fee (around $35)** per application.
- It is adopted by a growing number of jurisdictions (hundreds of communities across many states as of 2025).
- It still does **not** replace the on-site **inspection** — it only automates the *permit issuance*. You still build to plan and pass field inspection.

> **DIY note:** Some SolarAPP+ jurisdictions require the applicant to be a **registered/licensed contractor**, which can exclude pure owner-builders. Confirm whether your AHJ allows homeowner SolarAPP+ submittals or routes DIY projects through the traditional plan-review desk.

## Submitting & Plan Review

If your AHJ uses traditional review rather than SolarAPP+:

1. Submit the packet (online portal, email, or counter).
2. Pay the **plan-review fee**.
3. A plans examiner reviews; you may receive a **correction notice** (redlines) asking for clarifications.
4. Respond, resubmit, and receive the **issued permit** with an approved plan set you must keep on site.

> Keep the **stamped/approved plan set** at the job. Inspectors compare what is installed against what was approved; deviations are a fast path to a red tag.

## Inspections: Rough & Final

Most jurisdictions inspect in two stages. Small retrofits sometimes combine them into one final inspection.

- **Rough / in-progress inspection:** Done while wiring and structural connections are still **accessible** — before everything is buttoned up. The inspector verifies attachment, flashing, conduit, conductor routing, grounding, and that wiring methods match the plan.
- **Final inspection:** Done with the system complete. The inspector verifies labeling, disconnects, working clearances, rapid-shutdown function, and that the as-built matches the approved single-line.

### Inspection Checklist

| Area | What the inspector checks | Common **red-tag** reason |
|---|---|---|
| **Labeling/placards** | Rapid-shutdown placard, source/disconnect labels, breaker warnings | Missing, wrong wording, or wrong format — a leading single cause of failures |
| **Rapid shutdown** | Functional RSD, module-level shutdown where required, compatible devices | Optimizer/inverter that don't communicate; no initiator at the required location |
| **Conductor ampacity** | Wire size vs. ampacity **after temperature & conduit-fill correction** | Undersized conductors; ignoring rooftop temp adders |
| **Voltage** | Temperature-corrected **Voc** of strings vs. inverter/equipment max | String Voc exceeds rating in cold-weather worst case |
| **Grounding & bonding** | EGC sizing, module/rail bonding, lugs/washers listed for the job | Unbonded metal parts (690.43); improper or missing grounding |
| **OCPD / interconnection** | Breaker rating, busbar **120% rule** (705.12), back-fed breaker secured | Busbar overload; back-fed breaker not at opposite end / not retained |
| **Disconnects/clearance** | Visible, lockable AC disconnect where required; 110.26 working space | No accessible disconnect; blocked clearance |
| **Structural** | Attachment spacing, flashing, hardware per plan | Attachments don't match plan; improper flashing/leak risk |
| **Conduit/raceway** | Support spacing, expansion fittings, fill, weatherproofing | Unsupported or improperly sealed conduit |

### Workflow

```
DESIGN ──► PERMIT PACKET ──► PLAN REVIEW / SolarAPP+ ──► PERMIT ISSUED
                                       │
                                       ▼
                                  BUILD TO PLAN
                                       │
                          ┌────────────┴────────────┐
                          ▼                          ▼
                  ROUGH INSPECTION            (corrections if red-tagged)
                  (accessible wiring)                 │
                          │ pass                      │
                          ▼                            
                   FINISH INSTALL ──► FINAL INSPECTION ──► (red tag? fix + re-inspect)
                                              │ pass
                                              ▼
                              UTILITY INTERCONNECTION REVIEW
                                              │
                                              ▼
                                  METER SWAP / PTO GRANTED
                                              │
                                              ▼
                                    SYSTEM MAY BE ENERGIZED
```

## The Licensed-Electrician Reality

Even committed DIYers usually cannot do **everything** themselves:

- **Service connection / panel work:** Most AHJs and utilities require a **licensed electrician** to make the connection at the service panel and to pull the electrical permit. Many homeowner permits explicitly exclude service-side work.
- **Utility sign-off:** The utility's interconnection process often requires the work to be performed or certified by a licensed contractor before they will swap the meter and grant PTO.
- **A common DIY split:** owner-builder does the racking, module mounting, and DC wiring under the approved plan; a **licensed electrician** handles the AC interconnection, final terminations, and is named on the permit.

> Verify your local rules *before* you buy equipment. A few jurisdictions allow full homeowner installs on owner-occupied dwellings; many do not.

## Utility Interconnection & PTO

The utility track runs **separately** from the building department.

1. **Interconnection application** submitted to the utility (often before or during install) with the single-line and equipment specs.
2. **Pre-install / engineering review** by the utility (a frequent bottleneck).
3. Install and pass **city final inspection**.
4. Submit the **signed inspection / completion** to the utility.
5. Utility performs a **meter swap** to a **bi-directional (net) meter** if required.
6. **PTO (Permission to Operate)** is granted — only now may you legally energize and net-meter.

> **Do not energize before PTO.** Operating without authorization can void net-metering eligibility and create a hazard for utility workers.

See [Residential Permitting & Interconnection](residential-permitting.md) for net-metering and interconnection-agreement detail.

## Timeline & Fees

Real-world numbers vary widely by jurisdiction and utility. Representative ranges (confirm locally):

| Stage | Typical duration |
|---|---|
| Permit issuance (SolarAPP+) | Instant for compliant designs |
| Permit issuance (traditional plan review) | Days to a few weeks |
| Install | 1–3 days (rooftop residential) |
| Inspection scheduling | Days to ~2 weeks |
| Utility PTO after final inspection | ~2–12 weeks (clean first submissions often ~15–20 business days; a large study found a **median full-process timeline near 53 business days** from application to PTO) |

| Fee | Typical |
|---|---|
| Building/electrical permit fees | Varies by valuation; often a few hundred dollars |
| SolarAPP+ processing fee | ~$35 (in addition to local permit fees) |
| Engineering letter (if required) | Several hundred dollars |
| Re-inspection (after a red tag) | Sometimes a flat re-inspection fee |

> These figures are illustrative and change over time and by location. Always confirm current fees and timelines with your AHJ and utility.

## Sources & Further Reading

- [Streamlining Solar Permitting with SolarAPP+ — U.S. DOE](https://www.energy.gov/eere/solar/streamlining-solar-permitting-solarapp)
- [SolarAPP+ official site](https://www.gosolarapp.org/)
- [NEC Article 690 overview — Nassau National Cable](https://nassaunationalcable.com/blogs/blog/explaining-nec-article-690-on-solar-photovoltaic-pv-systems)
- [NEC 690 permit violations and inspection mistakes — Energyscape Renewables](https://energyscaperenewables.com/post/nec-690-permit-violations-fix-solar-code-mistakes/)
- [Solar PV labeling / rapid-shutdown placard requirements](https://www.solarpermitsolutions.com/blog/solar-pv-labeling-requirements)
- [Solar PTO process and timeline — Solar Permit Solutions](https://www.solarpermitsolutions.com/blog/solar-pto-requirements-timeline)
- [Utility interconnection process — Palmetto](https://palmetto.com/solar/utility-interconnection-process-how-solar-panels-connect-to-the-grid)

---

*This article is for general education and safety awareness only; it is not a substitute for the National Electrical Code, your local AHJ's requirements, or a licensed electrician. Verify all code references and local rules before performing work.*
