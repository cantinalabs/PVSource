# California Building Code (CBC) & Solar

The **California Building Code (CBC)** is **Title 24, Part 2** of the California Code of Regulations. It is based on the **International Building Code (IBC)** published by the ICC, then amended by California agencies (the Building Standards Commission, HCD, DSA, OSHPD/HCAI, and the Office of the State Fire Marshal). The CBC governs **non-residential and larger residential structures** (buildings not scoped to the California Residential Code) and controls the **structural design, roof/rooftop-PV provisions, and fire classification of roof assemblies** for solar.

For the model-code framework, start with [Building Codes & Standards Explained](codes-standards-overview.md). One- and two-family dwellings and townhouses are generally governed instead by the [California Residential Code (CRC) & Solar](code-crc.md); the electrical and fire sides are the [California Electrical Code (CEC) & Solar](code-cec.md) and [California Fire Code (CFC) & Solar](code-cfc.md).

> **The AHJ is authoritative.** The CBC is on a **triennial cycle**. The base IBC edition, the referenced **ASCE 7** edition, section numbers, and California amendments change between cycles, and jurisdictions add local amendments. Confirm the edition in force before relying on any value below.

## How the CBC Relates to the IBC and ASCE 7

The CBC adopts the corresponding **IBC** edition by reference and applies California amendments. Structural design loads (wind, seismic, snow) are set by **ASCE 7**, referenced through the CBC. Because ASCE 7 wind and seismic provisions change materially between editions, the referenced ASCE 7 edition matters as much as the IBC edition for rooftop PV design.

| Title 24 (CBC) Cycle | Base IBC Edition | Referenced ASCE 7 | Published | Typical Effective Date |
|----------------------|------------------|-------------------|-----------|------------------------|
| 2016 CBC | 2015 IBC | ASCE 7-10 | July 2016 | January 1, 2017 |
| 2019 CBC | 2018 IBC | ASCE 7-16 | July 2019 | January 1, 2020 |
| 2022 CBC | 2021 IBC | ASCE 7-16 | July 2022 | January 1, 2023 |
| 2025 CBC | 2024 IBC | ASCE 7-22 | July 2025 | January 1, 2026 |

> The ASCE 7 editions above are the versions those IBC editions reference. **Confirm the exact referenced edition and any CA amendment** — California occasionally modifies the referenced standard or its application.

## Structural & Rooftop-PV Provisions (Chapter 16 loads, Chapter 15 roofs)

Two chapters do most of the solar work in the CBC:

- **Chapter 16 — Structural Design.** Establishes design loads via ASCE 7. Rooftop PV adds **dead load** and changes the roof's response to **wind (component-and-cladding uplift), seismic, and snow (drift/sliding)** loads. Wind pressures are highest in **roof corner and perimeter zones**; ballasted arrays near parapets and edges see the greatest uplift.
- **Chapter 15 — Roof Assemblies and Rooftop Structures.** Contains the rooftop-PV-specific listing, installation, and **fire-classification** requirements (see below).

Rooftop PV support and attachment must be designed for the applied loads and comply with applicable industry standards. **Seismic requirements for rooftop PV are determined from ASCE 7** (recent editions use the rooftop solar provisions in ASCE 7 Chapter 13 for nonstructural components / attached systems). Commercial rooftop PV — and essentially all ballasted, carport, and ground-mount work — typically requires a **registered design professional (PE) stamp** on the structural calculations.

> **Ballasted-array uplift and roof capacity are the classic CBC pitfalls.** The bare roof structure must carry the added PV dead load (concentrated under ballast), and edge/corner zones need extra ballast or mechanical attachment. A roof structural evaluation is standard.

## Fire Classification of Rooftop PV (CBC Chapter 15)

The CBC requires **rooftop-mounted PV panels/modules to carry a fire classification**, and the assembly's classification must comply with the roof-assembly fire tables based on the building's construction type.

| Provision | Requirement |
|-----------|-------------|
| Module listing | PV modules listed/labeled to **UL 1703** (legacy) or **UL 61730** (current module safety standard) |
| System fire classification | Rooftop PV panel systems tested, listed, and identified with a **fire classification per UL 2703** |
| Class of assembly | Must comply with the roof-assembly fire-classification table for the building's construction type; **Class A** is required for many occupancies and permitted in all construction types |

> UL 2703 fire classification (Class A/B/C) applies to the **module-plus-mounting-system as a combination** — a module and racking system are fire-classified together. Substituting a different module or rail can void the classification.

## 2016 Cycle

The **2016 CBC** is based on the **2015 IBC**, referencing **ASCE 7-10** (effective January 1, 2017). Rooftop PV structural and roof-classification provisions were in Chapters 16 and 15 respectively. Fire classification via UL 2703 and module listing via UL 1703 were the norm during this cycle.

## 2019 Cycle

The **2019 CBC** is based on the **2018 IBC**, referencing **ASCE 7-16** (effective January 1, 2020). The move to **ASCE 7-16** brought updated wind speed maps, revised roof pressure-zone geometry, and refined rooftop-solar wind provisions — materially affecting attachment and ballast design. **UL 61730** began superseding **UL 1703** for new module listings around this period (new products required UL 61730 as of December 2019).

## 2022 Cycle

The **2022 CBC** is based on the **2021 IBC**, still referencing **ASCE 7-16** (effective January 1, 2023). Chapter 15 continued to require **UL 2703** fire classification tied to the roof-assembly tables, and seismic design of rooftop PV keys off ASCE 7 Chapter 13 provisions. WUI (Chapter 7A) roof/exterior provisions remain a California-specific overlay affecting roof assemblies in fire-hazard-severity zones.

## 2025 Cycle

The **2025 CBC** is based on the **2024 IBC**, referencing **ASCE 7-22** (published July 2025, effective January 1, 2026). ASCE 7-22 updates wind, seismic, and (notably) **snow and tornado** load provisions, which flow into rooftop PV design. Fire-classification and module-listing requirements carry forward (UL 2703 system classification; UL 61730 module listing).

> The 2025 CBC is newly effective; **local adoption ordinances and errata are still settling**. Verify referenced-standard editions and section numbers with the AHJ.

## California Amendments Worth Knowing

- **Chapter 7A (WUI):** California-specific exterior-wildfire-exposure provisions affect roof coverings and assemblies in wildland-urban-interface / fire-hazard-severity zones — relevant to rooftop PV on affected buildings.
- **Seismic emphasis:** California's high seismicity makes ASCE 7 seismic design of attached and especially **ballasted/unanchored** arrays a routine review item.
- **State agency jurisdiction:** Schools (DSA) and hospitals (HCAI, formerly OSHPD) apply additional structural review beyond the base CBC.

For statewide energy-code and commercial mandate interactions, see [California Title 24 & Commercial Solar](california-title-24.md). For structural standards background, see [Standards & Certification Bodies](fundamentals-standards-bodies.md).

## Sources & Further Reading

- [California DGS/BSC — Codes (Title 24)](https://www.dgs.ca.gov/BSC/Codes)
- [California DGS/BSC — History of the California Building Code, Title 24 Part 2](https://www.dgs.ca.gov/BSC/About/History-of-the-California-Building-Code--Title-24-Part-2)
- [ICC Digital Codes — 2022 CBC Chapter 15, Roof Assemblies and Rooftop Structures](https://codes.iccsafe.org/content/CABC2022P1/chapter-15-roof-assemblies-and-rooftop-structures)
- [ICC Digital Codes — 2025 CBC Chapter 15, Roof Assemblies and Rooftop Structures](https://codes.iccsafe.org/content/CABC2025P1/chapter-15-roof-assemblies-and-rooftop-structures)
- [UpCodes — 2025 California Building Code (based on 2024 IBC)](https://up.codes/viewer/california/ca-building-code-2025)
- [ASCE 7 — Minimum Design Loads and Associated Criteria](https://www.asce.org/publications-and-news/asce-7)
- [UL Solutions — PV module and system certification (UL 61730 / UL 2703)](https://www.ul.com/services)

---

*Educational and reference material only. This page is not code-compliance guidance, engineering, or legal advice. Code editions, referenced standards, California amendments, and section numbers vary by jurisdiction and change every cycle. Always confirm the codes in force with your local AHJ, and retain a licensed engineer for project-specific structural compliance.*
