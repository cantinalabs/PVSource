# Solar Safety Overview

Solar work sits at the intersection of construction, electrical trades, and operations. A single installer on a residential roof faces fall hazards, electrical shock, heat stress, and material-handling injuries — often all in the same afternoon. Scale that to a commercial rooftop crew or a multi-megawatt utility site and the hazard picture broadens to heavy equipment, trenching, arc flash from combiner boxes, and battery energy storage. This overview frames how professionals think about safety across the whole solar lifecycle, from site survey through decommissioning.

> **Safety is a system, not a slogan.** Most serious solar incidents trace back not to a single reckless act but to a chain of missing controls: no hazard assessment, no rescue plan, the wrong PPE, an assumption that a circuit was dead. Break any link in that chain and the incident often does not happen.

## The Hazard Picture Across Solar Work

Solar exposes workers to a distinctive blend of hazards because it combines rooftop or field work with live electrical generation. The four contexts covered on this site — residential, commercial, utility, and construction — share a common core but differ in scale and dominant risks.

| Context | Dominant hazards | Regulatory frame |
|---|---|---|
| **Residential** | Falls from steep/low-slope roofs, ladder incidents, DC shock, hot attic heat stress | OSHA 1926 (construction), NEC, local fire code |
| **Commercial** | Falls on large flat roofs, skylights, arc flash at combiners/inverters, crane/hoist rigging | OSHA 1926, NFPA 70E, NEC, IFC/NFPA 1 |
| **Utility-scale** | Trenching, heavy equipment struck-by, DC arc flash, heat/cold, remote-site rescue delay | OSHA 1926, NFPA 70E, 1910 for O&M |
| **O&M (all)** | Live DC arrays, energy storage, working-alone, thermal/animal/vegetation hazards | OSHA 1910 (general industry), NFPA 70E, NFPA 855 |

For a deep treatment of the electrical side, see [Electrical Safety & Arc Flash](safe-electrical.md) and [DC & PV-Specific Hazards](safe-dc-hazards.md). Fall hazards — statistically the leading cause of solar-work fatalities — are covered in [Working at Heights & Fall Protection](safe-falls.md). Energy storage is treated separately in [Battery & Energy-Storage Safety](safe-battery.md).

## The Hierarchy of Controls

Every credible safety program is built on the **hierarchy of controls**, the NIOSH-defined ranking of hazard-mitigation strategies from most to least effective. The principle: controls that remove the hazard or engineer it out work without depending on human behavior, while administrative rules and PPE depend on people doing the right thing every time.

| Rank | Control | Solar example |
|---|---|---|
| 1 | **Elimination** | Assemble and wire strings on the ground before lifting; prefabricate racking off-roof |
| 2 | **Substitution** | Use module-level rapid shutdown so roof conductors are low-voltage; choose lower-hazard battery chemistry |
| 3 | **Engineering controls** | Guardrails, warning-line systems, arc-fault protection, insulated tools, ventilation for ESS rooms |
| 4 | **Administrative controls** | Job hazard analysis, LOTO procedures, sun-block covers on arrays, buddy system, work permits, training |
| 5 | **PPE** | Arc-rated clothing, insulating gloves, fall-arrest harness, hard hat, eye protection |

> **PPE is the last line, never the first.** A harness does not prevent a fall — it limits the consequences. Reaching for PPE before you have exhausted elimination, substitution, and engineering options is a classic program failure.

Per NIOSH, elimination, substitution, and engineering controls are preferred because they "control exposures without significant human interaction" ([Hierarchy of Controls, CDC/NIOSH](https://www.cdc.gov/niosh/hierarchy-of-controls/about/index.html)).

## Job Hazard Analysis (JHA)

A **Job Hazard Analysis** (also called a Job Safety Analysis, JSA) is the practical tool that connects the hierarchy of controls to a specific task on a specific site. It breaks a job into steps, identifies the hazard in each step, and assigns a control.

### A minimal JHA structure

```
Task: Install rooftop micro-inverters and modules, 2-story residence

Step                    | Hazard                     | Control
------------------------|----------------------------|----------------------------
Set up ladder           | Fall, ladder slip          | 4:1 pitch, tie off, spotter
Access low-slope roof   | Fall from edge (>6 ft)     | Warning line + PFAS or guardrail
Land/carry modules      | Struck-by, back strain     | Two-person lift, hoist, clear zone
Land DC connectors      | DC shock, hot connector    | Gloves, verify same-brand MC4, meter
Energize/commission     | Arc flash, backfeed        | LOTO on AC, sequence per plan, 70E PPE
Rescue readiness        | Suspension trauma          | Pre-briefed rescue plan on site
```

A JHA is not paperwork for its own sake. It is completed **before work starts**, reviewed in the tailgate/toolbox talk, and updated when conditions change (weather, an unexpected skylight, a damaged conductor). On residential jobs a crew lead may run a short verbal JHA; on utility sites the JHA is a controlled document tied to a permit-to-work.

## The OSHA Framework: 1926 vs. 1910

Two OSHA standard sets govern most solar work, and knowing which one applies is not academic — the requirements differ.

| | **29 CFR 1926 (Construction)** | **29 CFR 1910 (General Industry)** |
|---|---|---|
| Applies to | Building, erecting, installing, major alteration | Operations, service, maintenance of existing systems |
| Typical solar phase | New install, re-roof, repower, large repairs | Routine O&M, inspection, cleaning, monitoring |
| Fall protection trigger | **6 ft** to a lower level (Subpart M) | Generally **4 ft** (Subpart D, walking-working surfaces) |
| Lockout/tagout | Subpart K electrical + related | **1910.147** control of hazardous energy |
| Electrical safe practices | Subpart K | Subpart S (1910.331–.335) |

The dividing line is the nature of the work, not the calendar. Erecting a new array is construction (1926); a technician returning next year to replace a failed optimizer is performing maintenance (1910). The **fall-protection threshold difference (6 ft construction vs. 4 ft general industry)** frequently surprises crews who cross between install and O&M roles. See OSHA's construction fall-protection duty standard, [29 CFR 1926.501](https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.501).

> **The General Duty Clause still applies.** Even where no specific standard names a hazard, OSHA's Section 5(a)(1) requires employers to furnish a workplace "free from recognized hazards." Novel solar hazards — a new battery chemistry, an unusual rapid-shutdown failure mode — are still your responsibility to control.

## Who Is Responsible

Responsibility is layered, and every layer has a defined duty.

- **Employer / EPC contractor** — provides a safe workplace, training, PPE, competent supervision, and a written safety program. Under OSHA this duty is non-delegable.
- **Competent person** — an OSHA term of art: someone capable of identifying existing and predictable hazards and authorized to take prompt corrective action. Required for fall protection, excavation, and scaffolding oversight.
- **Qualified person** — for electrical work, an NFPA 70E term: trained to identify and avoid electrical hazards, familiar with the specific equipment and its energy. Only qualified persons may cross restricted approach boundaries.
- **Site safety officer / supervisor** — runs JHAs, tailgate talks, audits, and incident investigations on larger jobs.
- **The worker** — follows procedures, uses PPE, reports hazards and near-misses, and has the right (and duty) to stop work when a task is unsafe.

## A Hazard Map for Install and O&M

Think of every solar job as a set of overlapping hazard zones. Mapping them before mobilization is a core planning discipline.

```
                 ROOFTOP / ARRAY FIELD
  Fall edge ----+--------------------------+---- Skylight / fragile surface
                |   Live DC (daylight)     |
  Ladder zone   |   Hot MC4 / arc-fault    |   Heat stress / UV
                |                          |
  --------------+--------------------------+--------------
                 ELECTRICAL ROOM / INVERTER PAD
  Arc flash ----+   Combiner / inverter    +---- AC backfeed
                |   Battery ESS (off-gas)  |
  LOTO point    |   Stranded energy        |   Confined/limited space
                +--------------------------+
                 SITE / GROUND (utility)
  Trenching  ---+ Heavy equipment struck-by +--- Overhead lines
```

Each zone maps to a control set and to a responsible role. The array field is dominated by falls and live DC; the electrical room by arc flash, backfeed, and — where storage is present — thermal runaway and off-gassing (see [Battery & Energy-Storage Safety](safe-battery.md)); the ground/site zone by struck-by and trenching hazards on utility work.

## Safety Culture, Training, and Certifications

Programs and paperwork fail without a culture that makes stopping unsafe work normal and blameless. Practical markers of a strong solar safety culture:

- **Daily tailgate/toolbox talks** tied to the day's actual tasks and weather.
- **Near-miss reporting** that is acted on, not punished.
- **Stop-work authority** for every worker, explicitly stated and honored.
- **Rescue readiness** — a written, rehearsed plan before anyone is exposed to a fall or confined-space hazard.

### Relevant training and credentials

| Credential / training | Focus |
|---|---|
| **OSHA 10 / OSHA 30** (construction) | Baseline hazard-recognition training |
| **NFPA 70E qualified-person training** | Electrical safe work practices, arc flash, LOTO |
| **NABCEP** certifications | PV installation, design, and O&M competency |
| **Competent-person fall protection** | Authorized to oversee fall-protection systems |
| **First aid / CPR / AED** | On-site emergency response |
| **Rescue-from-heights training** | Suspension-trauma-aware rescue for PFAS users |

For the code frameworks that underpin these practices, see [NFPA Standards & Solar](code-nfpa.md) and [The National Electrical Code (NEC) & Solar](code-nec.md). For hands-on grounding, bonding, and surge topics that intersect with safety, see [DIY Grounding, Bonding & Surge Protection](diy-grounding-surge.md).

## Sources & Further Reading

- OSHA — [29 CFR 1926.501, Duty to Have Fall Protection (Construction)](https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.501)
- OSHA — [Green Job Hazards: Solar Energy](https://www.osha.gov/green-jobs/solar)
- NIOSH / CDC — [Hierarchy of Controls](https://www.cdc.gov/niosh/hierarchy-of-controls/about/index.html)
- OSHA — [29 CFR 1910.147, The Control of Hazardous Energy (Lockout/Tagout)](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147)
- Related pages: [Electrical Safety & Arc Flash](safe-electrical.md) · [Working at Heights & Fall Protection](safe-falls.md) · [DC & PV-Specific Hazards](safe-dc-hazards.md) · [Battery & Energy-Storage Safety](safe-battery.md) · [NFPA Standards & Solar](code-nfpa.md) · [The National Electrical Code (NEC) & Solar](code-nec.md)

> **Safety disclaimer.** This article is educational only and is not a substitute for formal training, a site-specific safety program, or the advice of a qualified safety professional. Solar work involves serious hazards that can cause severe injury or death. Always follow current OSHA standards (29 CFR 1926 and 1910), NFPA 70E, applicable fire and electrical codes, manufacturer instructions, and the requirements of your Authority Having Jurisdiction. Do not perform work you are not trained, qualified, and authorized to do. When in doubt, stop work and consult a competent professional.
