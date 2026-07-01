# California Electrical Code (CEC) & Solar

The **California Electrical Code (CEC)** is **Title 24, Part 3** of the California Code of Regulations. It is based on the **National Electrical Code (NEC), NFPA 70**, then amended by California. The CEC is the **electrical code you actually design and permit to in California** — you do not design to the base NEC; you design to the CEC, which is the adopted NEC edition **plus California amendments**. It governs PV wiring, overcurrent protection, disconnects, rapid shutdown, and interconnection.

For the full NEC treatment of PV (Articles 690, 705, 691, rapid shutdown, arc-fault, grounding), read [The National Electrical Code (NEC) & Solar](code-nec.md) — the CEC inherits that structure. For the model-code framework, see [Building Codes & Standards Explained](codes-standards-overview.md).

> **Naming caution.** "CEC" is used for **two different things** in California. Here it means the **California Electrical Code (Title 24, Part 3)**. It is **not** the **California Energy Code** (Title 24, Part 6, the energy/PV-mandate code), and it is **not** the **California Energy Commission** (the state agency, also abbreviated CEC). This article is about the electrical code only.

> **The AHJ is authoritative.** The CEC is on a **triennial cycle**. The adopted NEC edition and California amendments change between cycles, and jurisdictions add local amendments. Confirm the edition in force before relying on any value below.

## How the CEC Relates to the NEC (NFPA 70)

The CEC adopts a specific **NEC/NFPA 70 edition by reference** and applies California amendments (marked in the code text). California generally adopts the NEC's PV provisions largely intact, with amendments concentrated in areas like grounding/bonding, utility interconnection coordination, and administrative provisions. **California adopts one NEC edition per cycle** — note that California typically adopts the NEC edition that is one cycle behind the newest published NEC at the time of the Title 24 cycle.

| Title 24 (CEC) Cycle | Adopted NEC (NFPA 70) Edition | Published | Typical Effective Date |
|----------------------|-------------------------------|-----------|------------------------|
| 2016 CEC | 2014 NEC | July 2016 | January 1, 2017 |
| 2019 CEC | 2017 NEC | July 2019 | January 1, 2020 |
| 2022 CEC | 2020 NEC | July 2022 | January 1, 2023 |
| 2025 CEC | 2023 NEC | July 2025 | January 1, 2026 |

## Core PV Articles: 690, 705, 691

The CEC uses the same NEC article structure for PV:

- **Article 690 — Solar Photovoltaic (PV) Systems.** Conductor sizing (690.8), overcurrent protection (690.9), disconnecting means (690.13/690.15), rapid shutdown (690.12), DC arc-fault (690.11), and grounding.
- **Article 705 — Interconnected Electric Power Production Sources.** The **point of interconnection**, including the **120% busbar rule** for load-side connections and supply-side (line-side) tap options (705.12).
- **Article 691 — Large-Scale PV Electric Supply Stations (≥ 5 MW).** Engineered, PE-supervised requirements for utility-scale generating stations.

See [The National Electrical Code (NEC) & Solar](code-nec.md) for detailed treatment of each; the values below focus on rapid shutdown, where the CEC most directly affects residential and commercial installers.

## Rapid Shutdown — NEC/CEC 690.12

Rapid shutdown limits the voltage of PV conductors on or in buildings so firefighters and responders can work safely. The requirement **tightened significantly between NEC editions**, so the CEC's rapid-shutdown behavior depends on which NEC edition your CEC cycle adopts.

| Provision | 2014 NEC-era (2016 CEC) | 2017 NEC-era (2019 CEC) | 2020/2023 NEC-era (2022/2025 CEC) |
|-----------|--------------------------|--------------------------|-----------------------------------|
| Concept | Conductors outside array to a boundary | Introduces **inside vs. outside** array-boundary limits | Same inside/outside model; **UL 3741** hazard-control path recognized |
| Outside array boundary | Reduce to controlled level within 30 s | ≤ **30 V** within 30 s | ≤ **30 V** within 30 s |
| Inside array boundary | Not separately limited (older model) | ≤ **80 V** within 30 s (or module-level compliance) | ≤ **80 V** within 30 s, **or** a listed **PVHCS to UL 3741** |

> **The practical effect:** newer CEC cycles effectively require **module-level rapid shutdown** (MLPE such as microinverters or DC optimizers with rapid-shutdown listing) **or** a **UL 3741 PV hazard-control system** to satisfy the inside-the-array-boundary limit. Verify the exact thresholds for your adopted edition.

## Notable California Amendments & Enforcement Notes

- **Grounding/bonding and equipment listing:** California amendments and CEC-specific interpretations often emphasize equipment-grounding, bonding of racking (UL 2703-listed bonding), and listing/labeling. Inverters must be listed to **UL 1741** — current grid-interactive units to **UL 1741 SB**, aligned with **IEEE 1547-2018** — to satisfy utility interconnection. See [UL & IEEE Standards for Solar](code-ul-ieee.md).
- **Utility coordination:** Interconnection also answers to the utility's own requirements and California Public Utilities Commission (CPUC) rules (Rule 21), layered on top of CEC Article 705.
- **Energy storage:** Battery systems added to PV invoke additional electrical provisions and, on the fire side, **NFPA 855 / UL 9540** — see [The California Fire Code (CFC) & Solar](code-cfc.md) and [NFPA Standards & Solar](code-nfpa.md).
- **Local amendments:** Some California jurisdictions amend administrative and specific technical provisions; always check the local ordinance.

## Cycle Notes

### 2016 Cycle
**2014 NEC** base (effective January 1, 2017). Older rapid-shutdown model (pre inside/outside boundary framework).

### 2019 Cycle
**2017 NEC** base (effective January 1, 2020). Introduced the **inside vs. outside array-boundary** rapid-shutdown limits (30 V outside / 80 V inside), which effectively pushed the market toward module-level electronics.

### 2022 Cycle
**2020 NEC** base (effective January 1, 2023). Retained the inside/outside model; the market matured around MLPE and **UL 3741** hazard-control listings as compliance paths.

### 2025 Cycle
**2023 NEC** base (published July 2025, effective January 1, 2026). Continues the rapid-shutdown framework and increased attention to energy-storage spacing/labeling. Newly effective — confirm local adoption and errata.

## Sources & Further Reading

- [California DGS/BSC — Codes (Title 24)](https://www.dgs.ca.gov/BSC/Codes)
- [UpCodes — 2022 California Electrical Code (based on NFPA 70, 2020)](https://up.codes/viewer/california/ca-electric-code-2022)
- [UpCodes — 2025 California Electrical Code (based on NFPA 70, 2023)](https://up.codes/viewer/california/ca-electric-code-2025)
- [NFPA — 2025 California Electrical Code Updates](https://www.nfpa.org/forms/ca-electrical-code-updates)
- [NFPA 70, National Electrical Code](https://www.nfpa.org/product/nfpa-70-code/p0070code)
- [The National Electrical Code (NEC) & Solar](code-nec.md)
- [Standards & Certification Bodies](fundamentals-standards-bodies.md)

---

*Educational and reference material only. This page is not code-compliance guidance, engineering, or legal advice. The adopted NEC edition, California amendments, and section numbers vary by jurisdiction and change every cycle. Always confirm the codes and local amendments in force with your local AHJ and utility, and retain a licensed electrician or engineer for project-specific compliance.*
