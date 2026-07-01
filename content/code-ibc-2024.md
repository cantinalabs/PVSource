# IBC 2024 & Solar

The **2024 International Building Code (IBC)** is the most current edition of the model code as of this writing and brings the biggest structural update for rooftop solar since 2018. It advances the referenced loading standard to **ASCE/SEI 7-22**, it restructures **Chapter 15 (Roof Assemblies and Rooftop Structures)** — including a renumbering of the reroofing provisions — and it modernizes the **fire classification** basis for rooftop photovoltaic (PV) systems around **UL 2703** and **Table 1505.1**, while adding more explicit language for **ballasted, unattached arrays**.

This article covers how the 2024 IBC applies to solar on commercial and other large buildings, the referenced structural-load standard, the rooftop-mounted PV provisions, fire classification, and what changed relative to the 2021 edition. For the broader framework, see [Building Codes & Standards Explained](codes-standards-overview.md) and [Commercial Solar Codes & Fire Requirements](commercial-codes.md). Sibling editions: [IBC 2015 & Solar](code-ibc-2015.md), [IBC 2018 & Solar](code-ibc-2018.md), and [IBC 2021 & Solar](code-ibc-2021.md).

> **Note on adoption.** The IBC is a *model* code that carries legal force only where adopted, generally with local amendments and on a state-by-state timeline. The 2024 IBC published in 2023; as of 2026 many jurisdictions were still on the 2021, 2018, or even 2015 editions. Do **not** assume the 2024 IBC (or ASCE 7-22) applies to your project — confirm the adopted edition and amendments with your **authority having jurisdiction (AHJ)**, and have a licensed **professional engineer (PE)** verify structural design.

## Scope and Applicability to PV

The 2024 IBC governs commercial, industrial, institutional, and multifamily construction; detached one- and two-family dwellings and townhouses typically fall under the **International Residential Code (IRC)**. For large commercial and industrial rooftop arrays, the IBC is the controlling structural document.

Rooftop PV is addressed in two coordinated locations:

- **Chapter 15 (Roof Assemblies and Rooftop Structures)** — PV listing/labeling, system-level fire classification, and (new for this edition) more explicit ballasted-array language.
- **Chapter 16 (Structural Design)** — dead, live, snow, wind, and seismic loads with the array in place, via reference to **ASCE 7-22**.

Firefighter access and pathway rules are coordinated with the **International Fire Code (IFC)**; the electrical system remains under **NFPA 70 (National Electrical Code)**.

## Structural Requirements and Referenced ASCE 7 Edition

The 2024 IBC references **ASCE/SEI 7-22** as its structural-loading standard (IBC Chapter 35, Referenced Standards). ASCE 7-22 carries forward the dedicated **rooftop-solar wind method** first introduced in ASCE 7-16 (Chapter 29) and updates the broader wind, snow, seismic, and — newly — **tornado** load provisions. Notable ASCE 7-22 developments relevant to rooftop arrays include revised wind hazard mapping and the introduction of **tornado loads** for certain Risk Category III and IV structures, which can affect large or critical-facility rooftops.

| Load type | Requirement (2024 IBC + ASCE 7-22) |
|-----------|-------------------------------------|
| **Load combinations** | Taken **directly from ASCE 7 Chapter 2** (continued from the 2021 approach). |
| **Dead load** | PV system, supports, and ballast are dead load; rack-support dead load must appear on the construction documents. |
| **Roof live load** | Roof designed for live load assuming panels absent; PV live load in covered areas is additive unless the area under each panel is inaccessible. |
| **Snow load** | Snow, including panel-induced **drift**, per ASCE 7-22 (updated ground-snow mapping). |
| **Wind load** | Dedicated rooftop-solar wind method carried forward from ASCE 7-16 into **ASCE 7-22 Chapter 29**. |
| **Tornado load** | **New in ASCE 7-22** for applicable Risk Category III/IV buildings — may govern for some large or critical rooftops. |
| **Seismic / ballasted arrays** | Ballasted, unattached systems evaluated for **sliding and uplift** (per ASCE 7 Chapter 13 seismic provisions for nonstructural components). |

```
 2024 IBC structural-load path for rooftop PV
 ---------------------------------------------
 Chapter 15  --> roof assembly, fire (UL 2703 + Table 1505.1), ballasted-array rules
 Chapter 16  --> loads: dead + live + snow(+drift) + wind + seismic + TORNADO(new)
   * load combinations from ASCE 7 Chapter 2 *
 Referenced standard --> ASCE 7-22 (rooftop-solar wind method retained; tornado loads added)
```

## Rooftop-Mounted PV Provisions

The 2024 IBC restructured Chapter 15. The **reroofing** provisions were renumbered to **Section 1512 (Reroofing)** in this edition — a change worth flagging because earlier editions used different numbers for that content, and it is easy to confuse "Section 1512" here with the *reroofing* rules rather than the PV rules.

> **Verify the PV section number in your adopted code.** The rooftop-mounted PV listing and fire-classification provisions remain within Chapter 15's photovoltaic language (carried forward from the Section 1510.7 area used in the 2018 and 2021 editions), but the surrounding sections were renumbered in 2024. Confirm the exact citation in the adopted edition before relying on a specific section number.

Key requirements in the 2024 edition:

- **Listing and installation.** Rooftop-mounted PV panel *systems* must be **tested, listed, and identified with a fire classification in accordance with UL 2703**, and installed **in accordance with the manufacturer's installation instructions and the system listing.** Modules continue to be listed to **UL 61730-1/-2 (or UL 1703)** for module-level safety.
- **Ballasted, unattached arrays.** The 2024 edition adds more explicit language: ballasted, unattached PV panel systems are to be installed only on roofs with a **slope not greater than 1 unit vertical in 12 units horizontal (1:12)**, and ballasted, non-penetrating systems must be designed to accommodate **sliding and uplift** (referencing the ASCE 7 Chapter 13 nonstructural-component seismic provisions).
- **Fire classification.** The installed system's fire class must comply with **Table 1505.1** for the building's construction type (see below).

## Fire Classification

The 2024 IBC clarifies and consolidates the rooftop-PV fire basis. A **rooftop-mounted PV panel *system*** must be **tested, listed, and identified with a fire classification in accordance with UL 2703**, and the resulting classification must comply with **Table 1505.1** based on the building's type of construction (Class A, B, or C).

This is a meaningful shift in emphasis: the code now frames the requirement around the **system-level (rack + module) UL 2703 fire classification** rather than leaning on the module's stand-alone rating. In parallel, module-level product listing moved to the harmonized **UL/IEC 61730** standard (with UL 1703 largely retired for new listings). The practical rule is unchanged in spirit — the array must not diminish the roof's required fire class — but the tested basis is now explicitly the installed system.

## What Changed vs the Previous Edition

Relative to the [IBC 2021 & Solar](code-ibc-2021.md) edition, the 2024 IBC brings:

- **Advance to ASCE 7-22** (from ASCE 7-16) as the referenced loading standard — the biggest structural change, bringing updated wind/snow mapping and **new tornado-load provisions** for certain Risk Category III/IV buildings.
- **Chapter 15 restructuring**, including renumbering the **reroofing** provisions to **Section 1512** (do not confuse with PV) and reorganizing surrounding sections — verify the exact PV citation locally.
- **Fire classification recast around UL 2703 and Table 1505.1**, emphasizing the **system-level** (rack + module) fire class as installed, consistent with the retirement of UL 1703 in favor of **UL 61730** for module listing.
- **More explicit ballasted-array language** — a 1:12 maximum roof slope for unattached ballasted systems and an explicit sliding/uplift design requirement referencing ASCE 7 Chapter 13.
- Continued reliance on **load combinations taken directly from ASCE 7 Chapter 2** (carried over from 2021).

The takeaway: the 2024 IBC is a substantive update for commercial rooftop solar — new referenced loading standard, potential tornado-load demand, clearer ballasted-array rules, and a system-level fire-classification basis. Because adoption lags and several details were renumbered, treat any specific section citation as provisional until confirmed against your adopted code.

> **Disclaimer.** This article is for **educational purposes only** and summarizes model-code provisions that are frequently amended locally and, for the 2024 edition, not yet universally adopted. Section numbers, adopted editions, and requirements vary by jurisdiction. Confirm all applicable requirements with your **AHJ** and have a licensed **professional engineer (PE)** perform or review any structural design before installation.

## Sources & Further Reading

- ICC Digital Codes — [2024 IBC, Chapter 15 Roof Assemblies and Rooftop Structures](https://codes.iccsafe.org/content/IBC2024V1.0/chapter-15-roof-assemblies-and-rooftop-structures)
- ICC Digital Codes — [2024 IBC, Section 1505 Fire Classification](https://codes.iccsafe.org/s/IBC2024V1.0/chapter-15-roof-assemblies-and-rooftop-structures/IBC2024V1.0-Ch15-Sec1505)
- ICC Digital Codes — [2024 IBC, Chapter 35 Referenced Standards](https://codes.iccsafe.org/content/IBC2024P1/chapter-35-referenced-standards)
- ICC — [2024 IBC Significant Changes – Structural (PDF)](https://www.iccsafe.org/wp-content/uploads/2024-IBC-Structural.pdf)
- ASCE — [ASCE 7 Referenced Standards: IBC](https://amplify.asce.org/ibc)
- STRUCTURE magazine — [2024 IBC Significant Structural Changes, Part 7](https://www.structuremag.org/article/2024-ibc-significant-structural-changes-part-7/)
- ICC — [Structural Load Determination: 2024 IBC and ASCE/SEI 7-22](https://shop.iccsafe.org/structural-load-determination-2024-ibc-and-asce-sei-7-22.html)
- Professional Roofing (Mark S. Graham) — [A clarified code (June 2024)](https://www.professionalroofing.net/Articles/A-clarified-code--06-01-2024/5415)
- [Building Codes & Standards Explained](codes-standards-overview.md) · [Commercial Solar Codes & Fire Requirements](commercial-codes.md) · [IBC 2015 & Solar](code-ibc-2015.md) · [IBC 2018 & Solar](code-ibc-2018.md) · [IBC 2021 & Solar](code-ibc-2021.md)
