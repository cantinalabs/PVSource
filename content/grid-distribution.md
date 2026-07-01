# Distribution Interconnection

Distribution interconnection is the process for connecting a generator to the **distribution system** — the medium- and low-voltage network (typically below 69 kV) that delivers power to end customers. The overwhelming majority of solar projects — residential rooftop, commercial C&I, and small community solar — interconnect here. This page covers the application and review process, the technical screens that decide a project's fate, hosting capacity, upgrades and cost allocation, timelines, and smart-inverter requirements.

For the broader institutional context and the FERC-vs-state jurisdictional split, see [Grid & Interconnection Overview](grid-overview.md). For the technical standard that defines how the generator must behave, see [IEEE 1547 & Smart Inverters](grid-ieee1547.md).

## The Governing Framework

Distribution interconnection is **state-jurisdictional**. Each state adopts an interconnection standard, and each utility implements it through a tariff. Many state rules are modeled on FERC's **Small Generator Interconnection Procedures (SGIP)** — the pro-forma process FERC requires for generators of 20 MW or less connecting under its jurisdiction. Even when a project is purely state-jurisdictional, the SGIP's structure (Fast Track, supplemental review, study process) is the common template, so it is the reference model used here.

> The SGIP provides three pathways: (1) a process for inverter-based facilities no larger than **10 kW**, (2) a **Fast Track** process, and (3) the full **interconnection study** process. State analogs (e.g., the SGIP-derived levels in many states, California's Rule 21, New York's SIR) vary in thresholds but share this tiered logic.

## The Interconnection Process

```
APPLICATION ──► COMPLETENESS ──► FAST TRACK ──► (pass) ──► AGREEMENT ──► PTO
                  REVIEW          SCREENS
                                     │ fail
                                     ▼
                              SUPPLEMENTAL ──► (pass) ──► AGREEMENT ──► PTO
                              REVIEW
                                     │ fail
                                     ▼
                              STUDY PROCESS
                              (feasibility →
                               system impact →
                               facilities) ──► AGREEMENT (+ upgrades) ──► PTO
```

### 1. Application

The applicant submits the utility's interconnection form with: site and customer details, generator nameplate and inverter model, a **single-line (one-line) diagram**, equipment certifications (UL 1741 listing), and the proposed export arrangement. Completeness review confirms the package is sufficient to begin technical evaluation; the clock for utility response usually starts when the application is deemed complete.

### 2. Fast Track Review and Screens

**Fast Track** is an expedited path for smaller projects that can be approved on engineering screens alone, without a full study. The utility runs a series of pass/fail technical screens (below). If the project passes all of them, it proceeds directly to an interconnection agreement.

### 3. Supplemental Review

When a project fails one or more Fast Track screens, it may request **supplemental review** rather than going straight to the study process. FERC added supplemental review to the SGIP with three additional screens designed to protect safety and reliability — most notably a **100%-of-minimum-load screen** plus power-quality and safety/reliability screens. Many projects that fail the blunt 15% screen still pass supplemental review and avoid a costly study.

### 4. Study Process

Projects that cannot be cleared by screens enter the study track, typically in stages:

| Study | Purpose |
|---|---|
| **Feasibility Study** | High-level look at whether interconnection is achievable and what it might cost |
| **System Impact Study** | Detailed analysis of effects on the feeder, substation, protection, and voltage |
| **Facilities Study** | Engineering design and cost estimate for the specific upgrades required |

Each stage costs money and adds months. Larger projects on constrained feeders routinely spend a year or more in studies.

## Common Technical Screens

Screens are deterministic pass/fail tests applied to a project on its specific feeder. The most cited is the **15% screen**.

### The 15% of Peak Load Screen

> For a facility connecting to a radial distribution circuit, the **aggregated generation on the line section — including the proposed facility — must not exceed 15% of the line section's annual peak load**, as most recently measured at the substation.

This is a conservative proxy for "will reverse power flow cause problems?" It was deliberately strict so that passing projects almost never cause issues. Its weakness is the opposite: many *safe* projects fail it, especially on lightly loaded feeders. That failure is precisely what supplemental review (the 100%-of-minimum-load screen) was created to address.

### Other Common Screens

| Screen | What it checks |
|---|---|
| **Penetration / aggregate capacity** | Total DER on the feeder vs feeder capacity |
| **100% of minimum load** (supplemental) | Generation should not exceed minimum daytime load on the line section — a more physically meaningful test of reverse flow than the 15% peak screen |
| **Voltage / flicker** | Whether the generator pushes voltage outside ANSI C84.1 limits or causes flicker |
| **Protection & coordination** | Interaction with reclosers, fuses, relays; risk of nuisance trips or miscoordination |
| **Transformer / service** | Whether the interconnection back-feeds a shared or network secondary improperly; spot-network and grid-network screens |
| **Short-circuit contribution** | Whether the DER raises fault current beyond equipment ratings |
| **Unintentional islanding** | Whether anti-islanding (per IEEE 1547) adequately addresses the risk |

## Hosting Capacity & Hosting-Capacity Maps

**Hosting capacity** is the amount of distributed generation a given point on the distribution system can accommodate without requiring upgrades or violating operating limits. It varies enormously by location: a feeder with high daytime load and strong voltage support may host many megawatts; a long, lightly loaded rural feeder may host almost nothing.

Many utilities now publish **hosting-capacity maps** — public online maps showing, feeder by feeder (and sometimes node by node), how much additional DER can connect before upgrades are triggered. They are a screening tool, not a guarantee.

> Use a hosting-capacity map at the **pre-application** stage to gauge feasibility and steer siting toward feeders with headroom. A site with ample published hosting capacity is far more likely to clear screens quickly; a constrained site signals likely studies, upgrades, and delay.

Hosting capacity is also increasingly relevant to **DER aggregation**. Under **FERC Order No. 2222**, aggregations of distributed resources can participate in wholesale markets, which makes accurate, location-specific hosting-capacity data important to both distribution operators and aggregators. See [Grid & Interconnection Overview](grid-overview.md).

## Upgrades & Cost Allocation

When a project exceeds available hosting capacity, the utility may require **system upgrades** — reconductoring, a larger transformer, voltage-regulation equipment, protection changes, or substation work. The interconnection agreement specifies who pays.

| Upgrade type | Typical allocation |
|---|---|
| **Interconnection facilities** (the equipment needed to physically attach the generator) | Generally the **interconnecting customer** |
| **Distribution upgrades** (changes to the shared network triggered by the project) | Commonly the **interconnecting customer**, though some states socialize or cost-share |
| **Network upgrades** (broader system reinforcement) | Varies by jurisdiction; can be substantial |

Cost-allocation policy is a key state-policy lever. Some states require the triggering project to pay in full ("cost causer pays"); others spread costs across customers or future interconnectors, or offer cost-sharing when later projects benefit from an upgrade an earlier project funded. Upgrade costs are the single largest source of unpredictability in distribution interconnection economics.

## Timelines

Timelines depend almost entirely on which track a project lands in:

| Path | Typical duration (varies by state/utility) |
|---|---|
| Inverter-based ≤10 kW / Fast Track pass | Weeks to a few months |
| Supplemental review | Added weeks |
| Feasibility → system impact → facilities studies | Many months to over a year |
| With major upgrades | Add utility construction lead time on top |

The strategic takeaway: **siting for hosting capacity and a clean screen pass is the most powerful schedule lever a developer has.**

## Smart-Inverter Requirements

Modern distribution interconnection requires **smart inverters** capable of grid-support functions — voltage regulation (Volt-VAR, Volt-Watt), frequency response, and ride-through — and the ability to be configured to the utility's required settings. These capabilities are defined by **IEEE 1547-2018** and certified through **UL 1741 SB**.

Smart-inverter capability often *increases* the DER a feeder can host: an inverter that absorbs reactive power to hold voltage down can connect where a legacy unity-power-factor inverter could not. As part of commissioning, the utility verifies that the inverter is configured to the **required setting profile** (e.g., the active Volt-VAR curve) before granting PTO. The functions, categories, and settings are covered in detail in [IEEE 1547 & Smart Inverters](grid-ieee1547.md).

## Sources & Further Reading

- [FERC — pro forma Small Generator Interconnection Procedures (SGIP)](https://www.ferc.gov/sites/default/files/2020-04/sm-gen-procedures.pdf)
- [FERC — Small Generator Interconnection Agreements and Procedures (Order 792, Federal Register)](https://www.federalregister.gov/documents/2013/12/05/2013-28515/small-generator-interconnection-agreements-and-procedures)
- [Solar ABCs — Small Generator Interconnection Procedures Screens (study report)](http://www.solarabcs.org/about/publications/reports/ferc-screens/pdfs/ABCS-FERC_studyreport.pdf)
- [FERC Order No. 2222 Fact Sheet](https://ferc.gov/media/ferc-order-no-2222-fact-sheet)
- [DSIRE — Interconnection Standards for Small Generators](https://programs.dsireusa.org/system/program/detail/2774/interconnection-standards-for-small-generators)

---
*This page is general reference information, not engineering, legal, or regulatory advice. Verify all thresholds, screens, and cost-allocation rules with the applicable utility and state regulator.*
