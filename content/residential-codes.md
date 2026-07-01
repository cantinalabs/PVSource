# Residential Solar Codes & Fire Requirements

This page covers the codes that govern rooftop solar on **one- and two-family dwellings and townhouses** — the structures built under the **International Residential Code (IRC)** and, in California, the **California Residential Code (CRC)**. It walks through the three domains a residential PV permit touches: **structural**, **fire access**, and **electrical (NEC)**. For the model-code system and acronyms, start with [Building Codes & Standards Explained](./codes-standards-overview.md).

> **AHJ is authoritative.** Every section number below is from a specific model-code edition. Your jurisdiction may enforce a different edition with local amendments. Confirm the edition in force and have a licensed professional verify the design.

## Which Code Applies?

A typical detached house is built under the **IRC** (in California, the **CRC**). PV provisions live primarily in:

- **IRC Section R324** — Solar Energy Systems (rooftop PV mounting, structural, and roof-access provisions)
- **IFC Chapter 12 / IRC R324.6** — fire-service roof access and pathways
- **NEC (NFPA 70) Article 690 and Article 705** — the electrical installation (the IRC's electrical provisions point to the NEC)

## Structural Requirements

Adding an array loads the roof structure and creates new wind- and snow-uplift paths. Plan review almost always checks structural adequacy.

### Loads

- **Dead load:** Modules + racking typically add roughly **3–4 lb/ft²**. The existing roof framing must carry this added dead load. Plan reviewers may require a framing evaluation, especially on older or marginal structures.
- **Roof live load / snow load:** The roof must still satisfy its original live-load and snow-load requirements with the array in place. Ground/roof snow loads come from **ASCE 7** (Minimum Design Loads and Associated Criteria for Buildings and Other Structures), as referenced by the IRC/IBC.
- **Wind load:** Module and attachment uplift resistance is designed to **ASCE 7** wind provisions, using the local **ultimate design wind speed**, **exposure category**, **roof zone** (field, edge, corner — corners and edges see the highest uplift), and component-and-cladding pressures. High-wind regions (coastal, special wind regions) drive tighter attachment spacing.

### Attachment

- **IRC R324** addresses mounting of rooftop PV. Attachments must transfer uplift and downward loads into the **structural framing (rafters/trusses)**, not merely the sheathing.
- Lag screws or structural fasteners must achieve adequate **embedment** into rafters; spacing is governed by the calculated uplift and the fastener's withdrawal capacity.
- Flashing and penetration detailing must maintain the roof's weather resistance (an IRC roofing requirement, not just good practice).

> Most jurisdictions accept manufacturer-listed racking with an engineering letter or a project-specific **PE-stamped structural calculation** for spans, attachment spacing, and uplift. Marginal or non-standard framing frequently triggers a required structural evaluation.

### Listed Mounting Systems and Fire Classification

- The completed **module + racking + roof** assembly must maintain the roof's **fire classification** (typically **Class A**) per IRC/IFC. Use module/racking combinations tested to the relevant fire-classification standard for the roof type.
- Modules must be **listed to UL 61730** (or legacy UL 1703).

## Fire Service Access & Setback Pathways

Firefighters need to walk the roof, ventilate it, and avoid energized PV. The residential rules live in **IRC R324.6** and the parallel **IFC Section 1205.2.1** (2021 IFC; numbering varies by edition — earlier editions used IFC 605/IRC R324 differently, and the 2024 cycle reorganized again).

### Access Pathways (IRC R324.6.1 / IFC 1205.2.1.1)

- Provide **not fewer than two 36-inch-wide pathways** on separate roof planes, from the **lowest roof edge to the ridge**.
- At least **one pathway on the street or driveway side**.
- For each roof plane bearing an array, a **36-inch-wide pathway** from the lowest edge to the ridge (on that plane, an adjacent plane, or straddling both).

### Ridge Setback (IRC R324.6.2 / IFC 1205.2.1.2)

| Condition | Array ≤ % of roof area | Required clear setback (each side of ridge) |
|-----------|------------------------|---------------------------------------------|
| Standard (no residential sprinklers) | ≤ 33% | **18 in** each side of a horizontal ridge |
| Standard | > 33% | **36 in** each side |
| Sprinklered per **NFPA 13D / IRC P2904** | ≤ 66% | **18 in** each side |

> **Key rule:** A continuous **clear pathway/setback at the ridge** preserves a ventilation cut line and a route across the roof. Houses protected by a compliant residential sprinkler system can cover more roof area before the 36-inch setback kicks in.

### Smoke / Heat Ventilation Context

The pathway and ridge-setback geometry exists so firefighters can perform **vertical ventilation** (cutting the roof to release heat and smoke) without being trapped by, or working over, an energized array. Keep the ridge and required pathways clear of modules, conduit, and equipment.

### Exceptions

The IRC/IFC include exceptions (e.g., certain detached structures, limited array configurations, and AHJ-approved alternatives). Some jurisdictions and California amendments modify these. **Always confirm the local pathway and setback rule** — wildfire-prone and California jurisdictions frequently amend.

### Residential Fire Setback / Pathway Diagram

```
                         RIDGE  (horizontal)
   <-- 18" or 36" -->  ===========================  <-- 18" or 36" -->
   clear setback       |                         |  clear setback
   (each side)         |   PV  ARRAY  AREA       |
                       |                         |
                       |   (<=33% roof => 18")   |
                       |   (>33% roof  => 36")   |
   +----+              |                         |              +----+
   |path|<--36" min--->|                         |<--36" min--->|path|
   |36" |              |                         |              |36" |
   +----+              +-------------------------+              +----+
     |                                                            |
     v                                                            v
  LOWEST ROOF EDGE (eave) ---- gutter line ---- LOWEST ROOF EDGE (eave)

  - >= 2 pathways, 36" wide, edge-to-ridge, on separate planes
  - >= 1 pathway on the street/driveway side
  - Ridge setback kept clear for ventilation cuts
  (Dimensions are 2021 IFC/IRC values; confirm the edition & local amendments.)
```

## Electrical Requirements (NEC)

The residential electrical install is governed by the **NEC** (NFPA 70), even though the IRC is otherwise standalone. The PV-specific articles:

### Article 690 — Solar PV Systems & Article 705 — Interconnection

These govern conductor sizing, overcurrent protection, disconnects, grounding, labeling, and how the system connects to the home's service.

### Rapid Shutdown — NEC 690.12

For PV on or in **one- and two-family dwellings**, a **rapid shutdown** function is required so firefighters can de-energize roof conductors.

- **Outside the array boundary** (beyond ~1 ft): controlled conductors must drop to **30 V or less within 30 seconds** of initiation.
- **Inside the array boundary:** either limit conductors to **80 V or less within 30 seconds**, **or** use a system listed as a **PV Hazard Control System (PVHCS) to UL 3741**.
- A readily accessible **rapid-shutdown initiation device** (and required labeling) must be provided.

> Module-level power electronics (MLPE) — microinverters or DC optimizers — are the most common way residential systems meet the inside-the-boundary 80 V limit.

### Conductor & OCPD Sizing — NEC 690.8 / 690.9

- PV source/output circuit conductors are sized for the **maximum current**, applying the **125% continuous-duty factor** (and, for source circuits, a 125% factor on short-circuit current — effectively a 156% multiplier on Isc before further deration).
- **Temperature, conduit-fill, and rooftop-adder** derations apply; the rooftop temperature adder value depends on the adopted edition.
- Overcurrent devices are sized and listed for the application per **690.9**.

### 120% Busbar Rule — NEC 705.12

When PV is connected to a panelboard via a **back-fed breaker (load-side connection)**, the busbar must not be overloaded. The common rule:

> **120% rule:** `main breaker rating + PV breaker rating ≤ 120% × busbar rating`, and the **PV breaker must be at the opposite (far) end** of the busbar from the main.

**Residential example:** A house has a **200 A busbar** with a **200 A main breaker**.

- `120% × 200 A = 240 A` allowed total on the busbar.
- `240 A − 200 A (main) = 40 A` available for a back-fed PV breaker.
- So a PV breaker of **40 A or less** is permitted (e.g., supporting roughly a 7.6 kW AC inverter at 240 V, ≈ 32 A × 125% = 40 A) — placed at the **opposite end** from the main.

> If the PV breaker would exceed the allowance, options include a **supply-side (line-side) tap** per 705.12, a **main breaker derate** (e.g., replace the 200 A main with a 175 A main), or a **line-side / meter-adjacent interconnection**. NEC 705 includes other interconnection methods (sum-of-amperes, center-fed, and feeder taps) that vary by edition.

### Disconnects — NEC 690.13 & 690.15

- A **PV system disconnecting means (690.13)** must disconnect the PV system from all wiring systems and be **readily accessible** and properly labeled.
- **690.15** governs disconnecting means for isolating PV equipment.
- Many AHJs and utilities also require an **exterior, lockable AC disconnect** near the meter for utility/lineworker access (a utility/local requirement, not always strictly NEC).

### DC Arc-Fault — NEC 690.11

PV systems on or penetrating a building with DC circuits operating at **80 V or more** require a listed **DC arc-fault circuit interrupter (AFCI)**. Most residential string and MLPE equipment provides this.

### Working Clearances — NEC 110.26

Service equipment, disconnects, and inverters require code **working space** (typically **36 in deep**, with prescribed width and **6.5 ft headroom**) clear and accessible in front of the equipment.

### Labeling

NEC 690/705 require multiple **placards and labels**: rapid-shutdown labels and the array map, DC and AC disconnect markings, "PHOTOVOLTAIC POWER SOURCE," interconnection/back-fed warnings, and equipment ratings. Labels must be reflective/engraved and durable per the adopted NEC. Local fire-marshal placard standards may add to these.

## California Specifics (CRC / CFC / Title 24)

- California houses are built under the **CRC** (Title 24, Part 2.5) with the **CFC** (Part 9) for fire and the **CEC** (Part 3, the NEC + amendments) for electrical. The **2025 Title 24 edition is effective January 1, 2026**.
- California amends pathway/setback and access rules; **wildland-urban interface (WUI)** areas (CRC/CBC Chapter 7A) add ignition-resistant construction requirements that interact with rooftop equipment.
- **Residential PV mandate:** Since the **2019 Title 24 Energy Code (Part 6)**, **new low-rise residential construction must include a solar PV system** (sized to the dwelling, with defined exceptions). Later cycles expanded toward **solar-plus-storage and electrification-ready** requirements. This is an **energy-code** mandate, distinct from the structural/fire/electrical rules above.

> California's PV mandate and its solar-ready/storage provisions evolve each triennial cycle. Confirm current Title 24 Part 6 requirements for new construction — see your energy-code reference and the [California DGS Title 24 resources](https://www.dgs.ca.gov/BSC/Resources/2025-Title-24-California-Code-Changes).

## Sources & Further Reading

- [ICC Digital Codes — 2021 IFC Chapter 12, Energy Systems](https://codes.iccsafe.org/content/IFC2021P1/chapter-12-energy-systems)
- [IRC R324.6 Roof Access and Pathways (UpCodes)](https://up.codes/s/roof-access-and-pathways)
- [IRC R324.6.2 Setback at Ridge (UpCodes)](https://up.codes/s/setback-at-ridge)
- [NFPA — Accessways for roof-mounted PV installations](https://www.nfpa.org/news-blogs-and-articles/blogs/2020/07/24/accessways-for-roof-mounted-photovoltaic-installations)
- [NFPA 70, National Electrical Code](https://www.nfpa.org/product/nfpa-70-code/p0070code)
- [Mike Holt — NEC 690.12 Rapid Shutdown](https://www.mikeholt.com/)
- [California DGS — 2025 Title 24 California Code Changes](https://www.dgs.ca.gov/BSC/Resources/2025-Title-24-California-Code-Changes)
- [ASCE 7 — Minimum Design Loads](https://www.asce.org/publications-and-news/asce-7)

---

*Educational and reference material only. This page is not code-compliance guidance, engineering, or legal advice. Code editions, amendments, and section numbers vary by jurisdiction and change between cycles. Always confirm the codes in force with your local AHJ and retain a licensed professional (engineer, electrician, or contractor) for project-specific compliance.*
