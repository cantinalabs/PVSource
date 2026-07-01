# Interconnection Studies & Queues

Before a generator can connect to the grid, the transmission provider or utility must study how that injection of power affects voltages, thermal loading, fault duties, and stability on the surrounding network. The **interconnection study process** is the structured sequence of engineering analyses, agreements, and cost allocations that takes a project from a queue position to an executed agreement and an energized point of interconnection. For large projects, this process is the single largest source of schedule risk and cost uncertainty — often outweighing permitting, equipment procurement, or financing.

This page covers the large-generator (transmission-level) process governed in the United States by FERC and the regional grids, contrasts it with smaller distribution-level queues, and explains the **FERC Order No. 2023** reforms that shifted the industry from serial, first-come studies to a **first-ready, first-served cluster** model.

> **Key point:** Interconnection is no longer "build the project, then plug it in." For utility-scale solar and storage, securing a viable, affordably-priced point of interconnection is frequently the gating milestone that determines whether a project happens at all.

See also: [Grid & Interconnection Overview](grid-overview.md), [IEEE 1547 & Smart Inverters](grid-ieee1547.md), [Anti-Islanding & Grid Protection](grid-protection.md), [Utility-Scale Solar Overview](util-overview.md).

## Why Interconnection Studies Exist

The grid was planned around a known set of large central power plants. Adding a new generator changes power flows everywhere downstream and upstream of the **point of interconnection (POI)**. Studies answer questions such as:

- Will any transmission line, transformer, or breaker become thermally overloaded under normal and contingency (N-1) conditions?
- Do voltages stay within limits when the plant ramps up or down, or when a nearby fault occurs?
- Are short-circuit (fault) currents pushed beyond the interrupting rating of existing breakers?
- Does the new plant create stability, oscillation, or weak-grid (low short-circuit ratio) problems?
- What **network upgrades** are required to host the plant, and who pays for them?

The answers drive the **cost** and **schedule** assigned to the project, and ultimately whether it remains viable.

## The Traditional Large-Generator Study Sequence

Under the historic FERC *pro forma* Large Generator Interconnection Procedures (LGIP), a request progressed through a defined sequence of studies, each more detailed and expensive than the last.

| Stage | Purpose | Typical Output |
|---|---|---|
| **Feasibility Study** | High-level screen for obvious problems | Rough sense of viability and cost order-of-magnitude (often optional/removed) |
| **System Impact Study (SIS)** | Detailed power-flow, short-circuit, and stability analysis | List of required network upgrades and their estimated cost |
| **Facilities Study** | Engineering of the interconnection facilities and upgrades | Firm(er) cost estimates, scope, and construction schedule |
| **Interconnection Agreement** | Binding contract to build and operate | LGIA (large) or SGIA (small) signed by all parties |

**LGIA** is the Large Generator Interconnection Agreement (generally for projects larger than 20 MW); **SGIA** is the Small Generator Interconnection Agreement under the companion Small Generator Interconnection Procedures (SGIP) for projects of 20 MW or less. The agreement defines the POI, the upgrades, the cost responsibility, milestones, and operating obligations.

```
TRADITIONAL SERIAL ("first-come, first-served") PROCESS

  Submit request ──► assigned a queue position (by date)
        │
        ▼
  Feasibility Study (optional screen)
        │
        ▼
  System Impact Study (SIS) ──► identifies network upgrades + cost
        │
        ▼
  Facilities Study ──► firm engineering + cost + schedule
        │
        ▼
  Interconnection Agreement (LGIA / SGIA) ──► construction ──► COD

  PROBLEM: each project studied in order. If an earlier project drops
  out, costs assigned to later projects shift and studies must be
  re-run ("restudies") — cascading delays down the entire queue.
```

The fatal flaw of the serial model was its sensitivity to **speculative requests**. Developers filed many early-stage projects to hold queue positions cheaply. When a high-queued project withdrew, the upgrade costs it had been carrying re-allocated to projects behind it, triggering restudies, cost surprises, and more withdrawals — a self-reinforcing backlog.

## FERC Order No. 2023: The Cluster Reform

In July 2023, FERC issued **Order No. 2023**, finding the serial first-come approach "unjust and unreasonable" and replacing it with a **first-ready, first-served cluster study** framework. **Order No. 2023-A** (issued March 21, 2024) provided clarifications and extended compliance deadlines; transmission providers filed compliance proposals in 2024, with FERC ruling on them over the following 13–14 months.

Key elements of the reform:

- **Cluster studies instead of serial studies.** Projects in a defined window are grouped into a cluster and studied *together*, sharing the cost of common network upgrades, rather than one-at-a-time. A single-phase cluster study process targets roughly **150 days**, preceded by a **45-day Customer Request Window** and a **60-day Customer Engagement Window**.
- **"First-ready, first-served."** Priority shifts from queue date to demonstrated **commercial readiness**. Projects must show site control and post increasing financial **deposits / readiness deposits** to advance, weeding out speculative placeholders.
- **Withdrawal penalties.** Projects that drop out after triggering restudies face penalties, internalizing the cost they impose on others.
- **Firm study deadlines with penalties on the transmission provider.** To prevent provider-side delay, Order No. 2023 imposes penalties on transmission providers that miss study deadlines.
- **Increased financial commitment and reduced optionality** at each phase, so that only serious projects consume study resources.

```
ORDER 2023 CLUSTER ("first-ready, first-served") PROCESS

  Customer Request Window (45 days)
        │   projects submit; demonstrate site control + deposits
        ▼
  Customer Engagement Window (60 days)
        │   scoping, refine the cluster
        ▼
  CLUSTER STUDY  (~150 days)  ── all projects studied together
        │   shared cost allocation for common network upgrades
        ▼
  Cluster Restudy (if needed) ──► Facilities Study
        │
        ▼
  Interconnection Agreement (LGIA / SGIA)

  Readiness deposits escalate at each gate; withdrawal triggers
  penalties so speculative projects exit early and cheaply for others.
```

## Queue Backlogs and Withdrawals

The reforms responded to an enormous and growing backlog. According to **Lawrence Berkeley National Laboratory's** *Queued Up* series:

| Metric (as of end of 2024) | Value |
|---|---|
| Total active capacity in U.S. interconnection queues | ~**2,290 GW** (nearly twice the existing U.S. generating fleet) |
| Solar in queue | ~956 GW (down ~12% year-over-year) |
| Storage in queue | ~890 GW (down ~13%) |
| Wind in queue | ~271 GW (down ~26%) |
| Natural gas in queue | ~136 GW (up ~72%) |
| Solar + storage capacity that **withdrew** in 2024 | ~**112 GW** (a record) |
| Typical time in queue for projects reaching COD in 2024 | ~**55 months** (about 4.5 years) |
| Share of 2000–2019 requests that reached commercial operation by end of 2024 | ~**13%** (77% withdrawn, 10% still active) |

> **Key point:** The completion rate is the headline number. Historically only about 1 in 8 queued projects actually gets built. The cluster reform aims to lift that rate by filtering out speculative requests early, so studies focus on projects that are genuinely ready.

Withdrawals in 2024 were driven by interest rates, tariffs, political and policy uncertainty, and local permitting friction — illustrating that interconnection is necessary but not sufficient; macro and siting conditions also gate completion.

## Network Upgrades and Cost Allocation

Most study cost and schedule risk lives in **network upgrades** — reconductoring lines, replacing transformers or breakers, adding reactive devices, or building new substations to host the generator.

- **Direct assignment / interconnection facilities** are the equipment built solely to connect this plant (the gen-tie line, the POI breaker). These are typically the generator's cost.
- **Network upgrades** strengthen the shared grid. Allocation rules vary by region and by reform vintage; the cluster model spreads the cost of *common* upgrades across the projects in the cluster that cause the need, rather than dumping it on whichever single project happens to trigger the threshold.
- **Cost certainty** is a central goal of Order 2023: by studying clusters together and locking commercial readiness, developers receive earlier and more stable cost estimates.

A single large network upgrade allocated to a project can render it uneconomic — which is precisely how the serial model produced cascading withdrawals.

## Distribution Queues vs. Transmission Queues

Not every project goes through the FERC transmission process. The path depends on **where** the project connects.

| Aspect | Transmission Interconnection | Distribution Interconnection |
|---|---|---|
| Connects to | Bulk transmission / RTO-ISO network | Local distribution feeder / substation |
| Governing process | FERC LGIP/SGIP, Order 2023 cluster studies | State PUC rules, utility tariffs, often modeled on the **FERC SGIP** or state "Rule 21"-type procedures |
| Typical size | Utility-scale (tens to hundreds of MW) | Residential, commercial, small community solar (kW to a few MW) |
| Study depth | Power-flow, short-circuit, stability, cluster studies | Screening (Fast Track), supplemental review, detailed study only if screens fail |
| Speed | Months to years | Days to months for small systems passing screens |
| Standard referenced | NERC/RTO planning standards | IEEE 1547 for the DER itself (see [IEEE 1547 & Smart Inverters](grid-ieee1547.md)) |

> **Key point:** A rooftop or small commercial PV system almost always uses a streamlined **distribution** queue with screening tables, not the multi-year transmission cluster process. As distribution feeders fill with DER, however, distribution-level **hosting-capacity** limits and study queues are themselves becoming a meaningful bottleneck.

## Practical Implications for Developers

- **Queue position alone is not progress.** Under first-ready rules, readiness (site control, deposits, milestones) is what advances a project.
- **Budget for upgrade-cost surprises** until firm Facilities Study numbers arrive; cluster studies improve but do not eliminate this risk.
- **Withdrawal has a cost.** Pulling out after triggering a restudy can incur penalties under the reformed rules.
- **Timelines are long.** Plan financing, offtake, and equipment around multi-year transmission timelines; distribution projects move far faster.
- **Watch the regional implementation.** Each RTO/ISO and utility implements Order 2023 through its own compliance filings, so the exact windows, deposits, and penalties differ by region.

## Sources & Further Reading

- [FERC Explainer: Interconnection Final Rule (Order No. 2023-A)](https://www.ferc.gov/explainer-interconnection-final-rule-2023-A)
- [K&L Gates — Order No. 2023: Interconnection Reform is Finally Here](https://www.klgates.com/Order-No-2023-Interconnection-Reform-is-Finally-Here-9-7-2023)
- [Orrick — FERC Order No. 2023-A Further Guidance and Extended Compliance Deadline](https://www.orrick.com/en/Insights/2024/04/FERC-Order-No-2023-A-Provides-Further-Guidance-on-Interconnection-Queue-Reforms)
- [Troutman — Summary of FERC Order No. 2023 on Generator Interconnection Reform](https://www.troutman.com/insights/troutman-pepper-summary-of-ferc-order-no-2023-on-generator-interconnection-reform/)
- [LBNL Energy Markets & Planning — Queued Up (interconnection queue data)](https://emp.lbl.gov/queues)
- [LBNL — Queued Up: 2025 Edition (data through end of 2024)](https://emp.lbl.gov/publications/queued-2025-edition-characteristics)
- [Utility Dive — How renewable energy producers can navigate FERC's new interconnection rules](https://www.utilitydive.com/news/how-renewable-energy-producers-can-navigate-fercs-new-interconnection-rule/805896/)

---
*This page is educational reference material, not engineering or legal advice; interconnection rules vary by region and change frequently — verify current FERC and RTO/ISO procedures for your project.*
