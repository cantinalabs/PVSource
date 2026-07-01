# Commercial Permitting & Interconnection

This page walks the **full commercial permitting and utility-interconnection process** — building/electrical/fire permits, the structural PE stamp, plan and fire-marshal review, the utility study sequence at scale (feasibility → system impact study → facilities study → interconnection agreement), IEEE 1547 / UL 1741-SB, FERC-vs-state jurisdiction, interconnection queues, net metering vs. net billing, commissioning, large-system NEC 691 notes, and typical timelines and costs.

It is a companion to [Commercial System Design](./commercial-design.md) and [Commercial Sizing & Calculations](./commercial-sizing.md). For the underlying building/fire codes, see [Commercial Solar Codes & Fire Requirements](./commercial-codes.md).

> **Two parallel approval tracks run at once.** A commercial PV project must satisfy (1) the **AHJ** — building, electrical, and fire permits with inspections — and (2) the **utility** — interconnection studies and an agreement. They are independent; both must clear before energization. Start the utility process **first**, because its studies and queue position usually drive the schedule.

## AHJ Permitting Track

### Building, Electrical, and Fire Permits

Commercial PV typically requires separate (or combined) permit submittals reviewed by different plan checkers:

| Permit | Scope | Key reviewers |
|--------|-------|--------------|
| **Building / structural** | Roof or foundation loads, attachment, racking, carport/ground-mount structure | Building dept., structural plan check |
| **Electrical** | NEC 690/705/691 compliance, conductor/OCPD sizing, interconnection, labeling, rapid shutdown | Electrical plan check / inspector |
| **Fire** | Rooftop access pathways, setbacks, marking, rapid shutdown initiation, ground-mount access | **Fire marshal** / fire prevention bureau |

### Structural PE Stamp

Commercial structural review is more rigorous than residential and almost always requires a **registered design professional (PE) stamp** on the structural calculations and drawings — covering wind (ASCE 7 component-and-cladding, with corner/edge zones governing), seismic (especially ballasted arrays), snow (including drift), and verification that the existing structure carries the new PV dead load plus existing loads. See [Commercial Solar Codes & Fire Requirements](./commercial-codes.md) for the structural code basis.

### Plan Review and Fire-Marshal Review

- **Plan review** is an iterative back-and-forth: submit a stamped set, receive correction comments, resubmit. Budget for 1–3 rounds.
- **Fire-marshal review** focuses on **rooftop access pathways and setbacks** (so firefighters can reach and ventilate the roof), array marking/placards, DC/AC disconnect locations, and **rapid-shutdown** initiation per NEC 690.12. Pathways and setbacks reduce usable roof area — coordinate them into the layout early, not after design freeze.

## Utility Interconnection Track

Beyond small fast-track systems, commercial interconnection moves through a formal **study sequence**. The size thresholds, names, and fees vary by utility/region, but the structure is consistent.

### The Study Sequence

```
COMMERCIAL INTERCONNECTION WORKFLOW
===================================

  ┌────────────────────────────────────┐
  │ 0. PRE-APPLICATION / FEASIBILITY    │  optional; cheap look at hosting
  │    report — capacity at the POI     │  capacity & likely upgrades
  └───────────────┬────────────────────┘
                  ▼
  ┌────────────────────────────────────┐
  │ 1. INTERCONNECTION APPLICATION      │  enter the QUEUE (queue position
  │    + deposit + site control         │  often = priority); screens for
  │                                     │  fast-track eligibility
  └───────────────┬────────────────────┘
                  ▼ (fails screens / larger systems)
  ┌────────────────────────────────────┐
  │ 2. SYSTEM IMPACT STUDY (SIS)        │  engineering study of grid effects;
  │                                     │  identifies needed upgrades
  └───────────────┬────────────────────┘
                  ▼
  ┌────────────────────────────────────┐
  │ 3. FACILITIES STUDY                 │  detailed scope + cost of the
  │                                     │  required network/utility upgrades
  └───────────────┬────────────────────┘
                  ▼
  ┌────────────────────────────────────┐
  │ 4. INTERCONNECTION AGREEMENT (IA)   │  signed contract; cost allocation;
  │                                     │  customer funds upgrades
  └───────────────┬────────────────────┘
                  ▼
  ┌────────────────────────────────────┐
  │ 5. BUILD → WITNESS TEST → PERMISSION │  utility witness/commissioning →
  │    TO OPERATE (PTO) / ENERGIZE       │  PTO before grid connection
  └────────────────────────────────────┘
```

Small commercial systems may qualify for a **fast-track / simplified** path (passing standardized screens) and skip the full SIS/Facilities sequence. Larger systems, or those that fail a screen (e.g., aggregate DER exceeds ~15% of feeder peak, or the 100%/penetration screens), drop into the full study process.

### IEEE 1547 / UL 1741-SB

Grid-tied inverters must meet the interconnection performance standard and be certified to the matching test standard:

- **IEEE 1547-2018** defines the interconnection and interoperability requirements for distributed energy resources, including **smart-inverter / grid-support functions** (voltage and frequency ride-through, volt-VAR, volt-watt, etc.).
- **UL 1741 Supplement B (UL 1741-SB)** is the certification/test standard that verifies an inverter performs those IEEE 1547-2018 functions, running the tests as specified by **IEEE 1547.1-2020**.

> **Confirm UL 1741-SB certification before procuring inverters.** Adoption of SB is accelerating across states and utilities; many now **require SB-certified inverters** for new interconnection applications, and non-compliant equipment can fail interconnection review. ([UL 1741 / IEEE 1547 overview](https://www.altenergymag.com/news/2025/12/10/ul1741-certification-why-its-critical-for-solar-inverters-entering-the-north-american-market/46468/))

### FERC vs. State Jurisdiction

Which interconnection rulebook applies depends on **what the project connects to and how it sells power**:

| | **FERC-jurisdictional** | **State-jurisdictional** |
|---|---|---|
| Typically applies to | Wholesale sales / transmission-level interconnection (RTO/ISO queues: PJM, MISO, CAISO, ISO-NE, etc.) | Retail/distribution interconnection (behind-the-meter, net metering, most C&I rooftop) |
| Process basis | FERC pro-forma procedures; **Order No. 2023** cluster-study reform | State PUC interconnection rules (vary widely by state) |
| Queue model | First-ready, first-served **cluster studies**; commercial-readiness deposits | State-defined; often serial or hybrid |

Most behind-the-meter C&I rooftop and smaller ground mounts follow the **state/utility** distribution process. Large ground mounts and wholesale projects enter the **FERC/RTO** transmission queue. **ERCOT** operates outside FERC jurisdiction with its own rules. FERC **Order No. 2023** (issued 2023) reformed transmission queues toward first-ready, first-served cluster studies with commercial-readiness deposits to curb speculative requests. ([FERC interconnection final rule explainer](https://www.ferc.gov/explainer-interconnection-final-rule))

### Interconnection Queues

Queue position frequently determines both **priority** and **cost allocation** for network upgrades. Queues — especially in RTO regions — have become heavily congested, and reforms (cluster studies, readiness deposits, site-control requirements) aim to clear speculative projects. Expect queue timing to be a major schedule risk on larger projects. ([Clogged interconnection queues — Concentric Energy Advisors](https://ceadvisors.com/clogged-interconnection-queues-are-hindering-renewables-development-but-reforms-are-underway/))

## Net Metering vs. Net Billing and Capacity Caps

How exports are compensated and whether a project even fits depends on state/utility tariff rules:

| Regime | Export value | Commercial implication |
|--------|-------------|----------------------|
| **Net energy metering (NEM)** | Exports netted at (near) **retail** | Favorable; can size toward annual consumption |
| **Net billing** | Exports valued **below retail** (avoided cost / export rate) | Favors self-consumption; oversizing has weak returns |
| **Buy-all / sell-all** | All production sold at a set rate | PPA-like economics |

**Capacity caps** apply at several levels: per-customer caps (e.g., system ≤ a percentage of the customer's load), program/aggregate caps (a utility's total NEM capacity), and **community-solar program caps** (per project, often a few MW). Confirm the current tariff and cap status — these change frequently and can close a project's economic case.

## Commissioning and Inspections

- **AHJ inspection(s):** rough and/or final electrical, structural, and fire inspections; the AHJ signs off on the installation.
- **Utility witness test / inspection:** the utility verifies protection settings, anti-islanding, metering, and disconnect access before **Permission to Operate (PTO)**.
- **Commissioning:** functional testing of inverters, rapid shutdown, monitoring, and (where applicable) revenue metering; record string Voc/Isc, megger/insulation tests, and produce as-builts.
- **PTO / energization:** only after both the AHJ final and the utility approval — energizing before PTO is a serious violation.

## Large-System Notes (NEC 691, ≥ 5 MW)

**NEC Article 691** — "Large-Scale Photovoltaic (PV) Electric Supply Stations" — applies to PV facilities with an inverter generating capacity of **no less than 5 MW** (and not under exclusive utility control). Where it applies, it permits documented engineering supervision in lieu of some prescriptive requirements and requires stamped engineering reports (e.g., documentation that the station is accessible only to qualified personnel). Large ground mounts straddle NEC 690, 705, and 691; confirm which articles the AHJ enforces.

## Typical Timelines and Costs

Illustrative only — **highly project- and jurisdiction-specific**:

| Item | Typical range |
|------|--------------|
| AHJ plan review (building/electrical/fire) | ~4–12 weeks (multiple correction rounds) |
| Utility fast-track (small commercial) | ~1–3 months |
| Full study process (SIS + Facilities + IA) | ~6–18+ months; longer in congested RTO queues |
| Pre-application / feasibility report | days–weeks; modest fee |
| Study deposits / fees | thousands to tens of thousands; scales with size |
| Network-upgrade cost | $0 to $millions depending on grid headroom (a project-killer risk) |
| Commissioning + PTO after construction | ~2–8 weeks |

> **Network-upgrade cost is the single biggest interconnection risk.** A facilities study can reveal upgrade costs that make a project uneconomic. Run a pre-application/feasibility study early and design to the available hosting capacity wherever possible.

## Permit & Document Checklist

| Document | Purpose | Reviewer |
|----------|---------|----------|
| Site plan / array layout | Locates array, setbacks, fire pathways, equipment | Building + Fire |
| Structural calculations + drawings (**PE-stamped**) | Wind/seismic/snow + capacity verification | Structural plan check |
| Roof/structural condition & attachment details | Membrane compatibility, warranty, anchorage | Building |
| Electrical single-line diagram (SLD) | Interconnection method (705.11/705.12), OCPD, conductors | Electrical |
| Three-line / interconnection diagram | Protection, metering, disconnects | Electrical + Utility |
| Equipment datasheets (modules, inverters, racking) | UL listings incl. **UL 1741-SB** inverters | Electrical + Utility |
| Load/busbar calculation (120% rule or 705.12 method) | Justify load-side connection | Electrical |
| Rapid-shutdown & labeling plan (NEC 690.12, 690.13, 705) | Firefighter safety, marking | Fire + Electrical |
| Fire access-pathway plan | IFC pathways/setbacks compliance | Fire marshal |
| Utility interconnection application + deposit | Enter queue; trigger studies | Utility |
| System impact / facilities study results | Upgrade scope and cost | Utility |
| Signed interconnection agreement | Authorizes build & energization | Utility |
| Commissioning report + as-builts | Final test records | AHJ + Utility |

## Sources & Further Reading

- [Commercial System Design](./commercial-design.md) — interconnection methods (load-side / supply-side, 120% rule)
- [Commercial Sizing & Calculations](./commercial-sizing.md) — sizing, ILR, conductors
- [Commercial Solar Codes & Fire Requirements](./commercial-codes.md) — structural, fire, electrical code basis
- [FERC — Explainer on the Interconnection Final Rule (Order No. 2023)](https://www.ferc.gov/explainer-interconnection-final-rule)
- [UL 1741 Certification & IEEE 1547 — AltEnergyMag](https://www.altenergymag.com/news/2025/12/10/ul1741-certification-why-its-critical-for-solar-inverters-entering-the-north-american-market/46468/)
- [Solar Interconnection Application Guide — SurgePV](https://www.surgepv.com/blog/solar-interconnection-application-guide)
- [Clogged Interconnection Queues & Reforms — Concentric Energy Advisors](https://ceadvisors.com/clogged-interconnection-queues-are-hindering-renewables-development-but-reforms-are-underway/)

---

*Educational and reference material only. This is not engineering, legal, or financial advice. Permit requirements, utility interconnection rules, jurisdiction (FERC vs. state), tariff/cap status, timelines, and costs vary widely and change frequently. Verify every step with the serving utility, the authority having jurisdiction (AHJ), the fire marshal, and a licensed professional engineer (PE) before relying on it.*
