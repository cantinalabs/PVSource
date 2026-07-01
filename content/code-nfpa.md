# NFPA Standards & Solar

The **National Fire Protection Association (NFPA)** publishes many of the codes and standards that govern solar and energy-storage safety. Some are adopted as law (the NEC, and the NFPA 1 Fire Code in states that use it); others are referenced standards that fire codes and AHJs enforce (NFPA 855). This page covers the NFPA documents most relevant to solar and storage. For the model-code framework, start with [Building Codes & Standards Explained](codes-standards-overview.md); for the standards-organization landscape, see [Standards & Certification Bodies](fundamentals-standards-bodies.md).

> **The AHJ is authoritative.** NFPA documents are adopted (and amended) jurisdiction by jurisdiction, on different editions and schedules. Whether a given NFPA standard applies — and which edition — depends on local adoption. Confirm with your AHJ and fire marshal.

## NFPA 70 — National Electrical Code (NEC)

**NFPA 70, the National Electrical Code**, is the foundational electrical safety code in the U.S. and the document that contains the core PV and interconnection provisions.

- **Article 690** — Solar Photovoltaic (PV) Systems: conductor sizing, overcurrent protection, disconnects, **rapid shutdown (690.12)**, DC arc-fault (690.11), grounding.
- **Article 705** — Interconnected Power Production Sources: point of interconnection, the **120% busbar rule**, supply-side taps.
- **Article 691** — Large-Scale PV Electric Supply Stations (≥ 5 MW).
- **Article 706** — Energy Storage Systems; **Article 710** — Stand-Alone Systems.

The NEC is published on a **three-year cycle** (2017, 2020, 2023, 2026...). States adopt specific editions; **California adopts the NEC as the California Electrical Code (Title 24, Part 3)** with amendments.

> This is a cross-reference. For full treatment of the PV articles and rapid shutdown, see [The National Electrical Code (NEC) & Solar](code-nec.md) and, for California, [The California Electrical Code (CEC) & Solar](code-cec.md).

## NFPA 855 — Stationary Energy Storage Systems

**NFPA 855, Standard for the Installation of Stationary Energy Storage Systems**, is the primary safety standard for battery energy storage (BESS) — increasingly paired with solar. It is a **standard, not a code**, but its provisions are enforced through fire codes: **NFPA 1 (Chapter 52)** references it directly, and the **IFC/CFC** enforce equivalent energy-storage provisions.

Key subject areas:

| Area | What NFPA 855 Addresses |
|------|-------------------------|
| **Separation / spacing** | Individual ESS units separated by a minimum **3 ft (914 mm)** unless a smaller distance is documented as adequate; separation from exposures, walls, and exits |
| **Sizing / quantity limits** | Maximum stored energy per unit and per room/area, thresholds that trigger additional protection (by battery technology and occupancy) |
| **Location** | Where ESS may be installed (indoor rooms, garages, outdoors, rooftops), with limits for dwelling-unit installations |
| **Fire protection** | Detection, suppression, and **explosion control / deflagration venting** for larger installations |
| **Commissioning & maintenance** | Commissioning per the standard, decommissioning, and ongoing maintenance |
| **Testing basis** | Relies on large-scale fire testing (**UL 9540A**) and product listing (**UL 9540**) to justify designs and separations |

- **Editions:** NFPA 855 has **2020** and **2023** editions in common use (with tentative interim amendments). The 2023 edition refined residential ESS provisions, unit/room energy limits, and testing references.
- **Residential ESS:** For dwelling units, NFPA 855 (and IFC/CFC) set aggregate energy limits and installation-location rules — the practical reason home batteries have spacing, labeling, and location constraints.

> UL 9540A **large-scale fire test** data is the linchpin: it characterizes thermal-runaway and fire propagation behavior, and AHJs use it to accept unit spacing and separation. See [UL & IEEE Standards for Solar](code-ul-ieee.md).

## NFPA 1 — Fire Code

**NFPA 1, Fire Code**, is NFPA's **model fire code** — the **alternative to the ICC's International Fire Code (IFC)**. Some states adopt NFPA 1 instead of (or alongside) the IFC. States historically associated with NFPA-family fire codes include **Florida and Georgia**, among others; adoption varies and changes over time, so confirm locally.

- NFPA 1 addresses the same fire-safety territory as the IFC: **rooftop solar access, pathways, marking, and energy storage** (NFPA 1 **Chapter 52** covers ESS and references **NFPA 855**).
- Where a jurisdiction uses **NFPA 1**, the solar rooftop-access and ESS provisions come through NFPA 1 (and its referenced standards) rather than the IFC. The intent — firefighter access, ventilation, and safe ESS siting — mirrors the IFC.

> **Which fire code applies is jurisdictional.** Most states use the **IFC** (see [The International Fire Code (IFC) & Solar](code-ifc.md)); some use **NFPA 1**. Verify which your AHJ enforces before citing pathway or ESS provisions.

## NFPA 70E — Electrical Safety in the Workplace

**NFPA 70E, Standard for Electrical Safety in the Workplace**, governs **worker safety around electrical hazards** — principally **shock** and **arc flash**. It is not an installation code (that is NFPA 70/NEC); it is an **occupational safety standard** that OSHA enforcement aligns with.

Relevance to solar and storage work:

| Concept | Application to PV / ESS |
|---------|--------------------------|
| **Shock risk assessment** | Establishes approach boundaries and required insulated PPE for energized DC/AC work (PV arrays are energized whenever illuminated) |
| **Arc-flash risk assessment** | Determines incident energy and **arc-flash boundary**, driving arc-rated PPE — relevant at inverters, combiners, switchgear, and especially **battery/ESS DC systems**, which can deliver very high fault current |
| **Energized work / LOTO** | Requires justification for energized work and proper **lockout/tagout**; PV can't be fully de-energized during daylight, so procedures matter |
| **Labeling** | Arc-flash and shock **warning labels** on equipment |

> **PV and battery DC systems are a particular arc-flash concern.** Batteries can source enormous fault current, and PV arrays cannot be switched off like a utility feed. NFPA 70E procedures, PPE, and risk assessments protect installers and O&M crews. See [O&M — Inverter & Electrical Maintenance](om-inverter-electrical.md).

## Sources & Further Reading

- [NFPA 70, National Electrical Code](https://www.nfpa.org/product/nfpa-70-code/p0070code)
- [NFPA 855, Standard for the Installation of Stationary Energy Storage Systems](https://www.nfpa.org/product/nfpa-855-standard/p0855code)
- [NFPA 855 Standard Development (editions and status)](https://www.nfpa.org/codes-and-standards/nfpa-855-standard-development/855)
- [Sandia National Laboratories — NFPA 855 2023 Edition overview](https://www.sandia.gov/energystoragesafety/2024/05/07/nfpa-855-2023-edition/)
- [NFPA 1, Fire Code](https://www.nfpa.org/product/nfpa-1-code/p0001code)
- [NFPA 70E, Standard for Electrical Safety in the Workplace](https://www.nfpa.org/product/nfpa-70e-standard/p0070e)
- [The National Electrical Code (NEC) & Solar](code-nec.md)
- [The International Fire Code (IFC) & Solar](code-ifc.md)

---

*Educational and reference material only. This page is not code-compliance guidance, engineering, or legal advice. NFPA editions and adoptions vary by jurisdiction and change over time. Always confirm which standards and editions your local AHJ and fire marshal enforce, and retain qualified professionals for design, installation, and energized-work safety.*
