# California Title 24 as it Relates to Commercial Solar

## Overview
California Title 24, Part 6 (Building Energy Efficiency Standards) is the state's building energy code. Updated every 3 years by the California Energy Commission (CEC), it includes **mandatory solar photovoltaic (PV) and battery energy storage system (BESS) requirements for newly constructed commercial (nonresidential) buildings**. These requirements directly drive commercial solar deployment in California.

## Code Cycles & Effective Dates

| Code Cycle | Effective Date | Permit Application Trigger |
|------------|---------------|---------------------------|
| **2019 Energy Code** | Jan 1, 2020 | Permits applied for on/after Jan 1, 2020 |
| **2022 Energy Code** | Jan 1, 2023 | Permits applied for on/after Jan 1, 2023 |
| **2025 Energy Code** | Jan 1, 2026 | Permits applied for on/after Jan 1, 2026 |

> **Critical**: Compliance is based on **permit application date**, not construction start or completion date.

---

## 2022 Energy Code (Effective Jan 1, 2023 - Dec 31, 2025)

### Solar PV Requirements (Section 140.10)

**Applies to**: Newly constructed nonresidential buildings where ≥80% of total floor area (conditioned or unconditioned) is building types in **Table 140.10-A**:

| Building Types (Table 140.10-A) |
|---------------------------------|
| Grocery |
| High-Rise Multifamily |
| Office, financial institutions, unleased tenant space |
| Retail |
| School |
| Warehouse |
| Auditorium, convention center, hotel/motel, library, medical office building/clinic, restaurant, theater |

**Excluded**: Additions, alterations, unconditioned buildings (except unoccupied/unused first-time tenant improvement spaces)

### PV System Sizing (Prescriptive) - Two Methods, Use Smaller

**Method 1: Solar Access Roof Area (SARA)**
- SARA × **14 W/ft²** (all roof slopes)
- SARA = All roof areas + covered parking + carports + newly constructed structures capable of supporting PV (per Title 24 Part 2 §1511.9)
- **Exclusions from SARA**: <70% annual solar access (shading), CBC §503.1.4 occupied roofs, code-required clear areas (CEC-confirmed)

**Method 2: Equation 140.10-A**
- Based on: Building type + Climate Zone (CZ) + Conditioned Floor Area (CFA)
- Capacity factors in **Table 140.10-A** (Watts/ft² of CFA by building type & CZ)

**Mixed Occupancy**: Calculate for each building type in Table 140.10-A (including support areas), sum capacities

### Exceptions to PV Requirement (5 Exceptions)
1. SARA < 3% of CFA
2. Minimum PV system < 4 kWdc
3. SARA < 80 contiguous ft²
4. ASCE 7-16 Ch. 7 Snow Loads cannot be met (enforcement authority determination)
5. Multi-tenant buildings where load-serving entity provides **neither VNEM nor community solar**

### BESS Requirements (Section 140.10(b))
- **All buildings with prescriptive PV requirement** must also have BESS (with exceptions)
- Sizing: **Equations 140.10-B, 140.10-C, 140.10-D** using BESS Capacity Factors from **Table 140.10-B** (Wh/ft² CFA)

### BESS Exceptions (3 Exceptions)
1. Installed PV < 15% of Eq. 140.10-A capacity
2. Required BESS usable capacity < 10 kWh
3. Single-tenant < 5,000 ft² CFA; Multi-tenant: only tenant spaces > 5,000 ft² CFA require BESS

> **Note**: PV requirement still applies when BESS exceptions apply

### Solar-Ready Requirements (Section 110.10)
**Mandatory for buildings NOT requiring prescriptive PV**:
- New nonresidential ≤3 habitable stories (except I-2, I-2.1 occupancies)
- New hotel/motel ≤10 habitable stories
- Additions increasing roof area by ≥2,000 ft²

**Solar-Ready Zone**: Min 15% of total roof area (Exception 5: parking garage areas exempt)

---

## 2025 Energy Code (Effective Jan 1, 2026)

### Key Changes from 2022 Code

| Aspect | 2022 Code | 2025 Code |
|--------|-----------|-----------|
| **SARA Wattage (Steep-slope)** | 14 W/ft² | **18 W/ft²** |
| **SARA Wattage (Low-slope)** | 14 W/ft² | **14 W/ft²** |
| **Building Types (Table 140.10-A)** | 13 types | **Expanded: Events/Exhibits, Library, Religious Worship, Sports/Recreation added** |
| **BESS Capacity Factors** | Table 140.10-B | **Updated Table 140.10-B** |
| **BESS Performance Requirements** | JA12 | **Updated JA12** |
| **Community Solar Pathway** | Limited | **Expanded: §10-115 approved programs** |

### 2025 PV Sizing (Section 140.10(a))
**Method 1: SARA**
- Steep-sloped roofs: SARA × **18 W/ft²**
- Low-sloped roofs: SARA × **14 W/ft²**

**Method 2: Equation 140.10-A**
- Updated **Table 140.10-A: PV Capacity Factors (W/ft² CFA)** by building type & CZ
- Mixed occupancy: Apply Eq. 140.10-A to each building type's CFA, sum

### 2025 BESS Requirements (Section 140.10(b))
**Three Equations for BESS Sizing:**
1. **Eq. 140.10-B**: Rated usable energy capacity (Wh) = CFA × BESS Capacity Factor (Table 140.10-B) ÷ Round-trip efficiency
2. **Eq. 140.10-C**: SARA-adjusted rated usable energy capacity
3. **Eq. 140.10-D**: Rated power capacity (kW) = Rated usable energy capacity (kWh) ÷ 2 (2-hour minimum duration)

**Table 140.10-B**: BESS Capacity Factors (Wh/ft² CFA) - some building types "NR" (Not Required)

### 2025 BESS Performance Requirements (JA12)
| Specification | Prescriptive | Performance |
|---------------|--------------|-------------|
| Usable capacity > 5 kWh/building | | X |
| Round-trip efficiency (AC-AC) > 80% | X | |
| Energy capacity retention: 70% nameplate after 4,000 cycles (warranty) OR 70% under 10-yr warranty | X | X |

**CEC Certification Required**: Battery must be manufacturer-certified to CEC per JA12. List at: `solarequipment.energy.ca.gov/Home/BatteryList`

### 2025 BESS Exceptions (3 Exceptions)
1. Installed PV < 15% of Eq. 140.10-A capacity
2. Required BESS usable capacity < 10 kWh
3. Single-tenant < 5,000 ft² CFA; Multi-tenant: only spaces > 5,000 ft² CFA

### 2025 Solar-Ready (Section 110.10)
Same thresholds as 2022, applies to buildings not requiring prescriptive PV.

---

## Compliance Pathways

### Prescriptive Compliance
- Follow Section 140.10 equations exactly
- Simpler documentation
- Less design flexibility

### Performance Compliance (Title 24 Part 1 - CBECC-Com)
- Energy model (CBECC-Com) comparing Proposed vs. Standard Design
- Standard Design includes prescriptive PV/BESS requirements
- **Can trade off**: Larger BESS ↔ Smaller PV; Better envelope ↔ Smaller PV
- **Community Solar Option**: If CEC-approved program (§10-115), can comply via community solar (performance path only)

### Compliance Documentation
| Form | Purpose |
|------|---------|
| **NRCC-SPV-E** | Certificate of Compliance - Solar PV |
| **NRCC-BESS-E** | Certificate of Compliance - BESS |
| **NRCI-SPV-E** | Certificate of Installation - Solar PV |
| **NRCI-BESS-E** | Certificate of Installation - BESS |
| **NRCV-SPV-E** | Certificate of Verification - Solar PV |
| **NRCV-BESS-E** | Certificate of Verification - BESS |

---

## First-Time Tenant Improvements (Critical for Commercial Solar EPC)

**2022 & 2025 Codes**: Unoccupied/unused first-time TI spaces = **newly constructed buildings**
- Permit applications on/after effective date trigger PV/BESS requirements
- Applies to unleased tenant spaces in new multi-tenant buildings
- **Does NOT apply** to TI in previously occupied spaces (alterations)

---

## Parking Structures & Carports

- **Covered parking & carports** count as SARA (can support PV per CBC §1511.9)
- **Parking garage roof areas** designed for vehicular traffic: **Exempt from solar-ready** (Exception 5 to §110.10(b)1B)
- Solar-ready zone = 15% of office/occupied roof area only, not garage

---

## Enforcement & Verification

**Local Enforcement Agency (LEA) Verifies:**
1. All Certificates of Installation valid (NRCI)
2. BESS model CEC-certified (JA12)
3. BESS commissioned & operational with JA12 controls
4. Control strategy matches Certificate of Compliance (NRCC)

**CEC Resources:**
- Energy Code Hotline: 800-772-3300 (CA), 279-226-1005 (outside)
- Blueprint Newsletter: `energy.ca.gov/newsroom/blueprint-newsletter`
- Energy Code Ace (training/tools): `energycodeace.com`
- Solar Equipment Lists: `energy.ca.gov/programs-and-topics/programs/solar-equipment-lists`

---

## Implications for Commercial Solar EPC

### Project Types Driven by Title 24
1. **New Construction** (core requirement)
2. **First-Time Tenant Improvements** in new shells
3. **Major Additions** (roof area increase ≥2,000 ft² triggers solar-ready)

### Design Considerations
- **SARA Calculation**: Early roof layout coordination with architect
- **Shading Analysis**: 70% annual solar access threshold for SARA
- **Structural**: CBC §1511.9 roof load capacity for PV
- **Electrical**: Interconnection point, panel capacity, metering for VNEM/community solar
- **BESS Sizing**: 2025 Eq. 140.10-B/C/D - use usable capacity, not nameplate
- **CEC-Certified Equipment**: Modules, inverters, BESS from CEC lists

### Cost Implications
| Cost Driver | Impact |
|-------------|--------|
| Mandatory PV | Base project scope |
| Mandatory BESS (2022/2025) | +$150-300/kWh installed |
| SARA Optimization | Design coordination cost |
| CEC-Certified Equipment | May limit vendor options |
| Commissioning/Verification | Third-party HERS/ATCP costs |
| Performance Path Modeling | Energy modeler fees |

### Common Compliance Strategies
1. **Prescriptive**: Simplest for standard buildings, use smaller of SARA or Eq. 140.10-A
2. **Performance**: Better for efficient buildings (smaller PV), or community solar
3. **Exceptions**: Document SARA <3% CFA, <4 kW, <80 ft² contiguous, snow loads
4. **BESS Exception**: Small buildings (<5k ft² single tenant) or small PV (<15%)

---

## Key Resources

| Resource | URL |
|----------|-----|
| CEC Energy Code Page | `energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards` |
| 2025 Energy Code PDF | `energy.ca.gov/sites/default/files/2025-07/CEC-400-2025-010-F_0.pdf` |
| 2022 Energy Code PDF | `energy.ca.gov/sites/default/files/2022-12/CEC-400-2022-010_CMF.pdf` |
| Nonresidential PV FAQ (2025) | `energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-15` |
| Nonresidential BESS FAQ (2025) | `energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/energy-code-support-center-16` |
| Nonresidential PV FAQ (2022) | `energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards/online-resource-center/2022-0` |
| Energy Code Ace | `energycodeace.com` |
| CEC Solar Equipment Lists | `energy.ca.gov/programs-and-topics/programs/solar-equipment-lists` |
| CBECC-Com Software | `bees.archenergy.com` |

---

## Summary: Title 24 Commercial Solar Requirements by Code Cycle

| Requirement | 2019 Code (Pre-2023) | 2022 Code (2023-2025) | 2025 Code (2026+) |
|-------------|---------------------|----------------------|-------------------|
| **PV Required** | New residential only | New nonresidential (Table 140.10-A) | Expanded building types |
| **SARA Wattage** | N/A | 14 W/ft² (all slopes) | 18 W/ft² steep / 14 W/ft² low |
| **BESS Required** | No | Yes (with PV) | Yes (with PV) |
| **BESS Sizing** | N/A | Eq. 140.10-B/C/D | Updated Eq. 140.10-B/C/D |
| **BESS Performance** | N/A | JA12 | Updated JA12 |
| **Solar-Ready** | ≤3 stories | ≤3 stories (NR) / ≤10 (hotel) | Same |
| **First-Time TI** | No | **Yes** | **Yes** |
| **Community Solar** | Limited | VNEM exception | §10-115 approved programs |

---

*Last Updated: 2025. Verify current code cycle and local amendments with jurisdiction and CEC before project design. This document is for reference only and not legal or engineering advice.*