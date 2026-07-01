# Storage Safety, Codes & Standards

Lithium-ion battery energy storage systems (BESS) are overwhelmingly safe when engineered, installed, and maintained correctly — but the failure mode that dominates safety codes, **thermal runaway**, is fundamentally different from the risks in traditional electrical equipment. A single overheating cell can cascade into a self-sustaining fire that vents flammable, toxic gas and resists conventional suppression. Modern codes and standards exist to make that failure improbable, to contain it when it happens, and to keep first responders alive.

This article walks through the failure physics, the core UL and NFPA standards that govern equipment and installation, and how requirements scale from a single residential wall unit to a utility container yard. It complements the broader [Energy Storage Overview & Use Cases](stor-overview.md) and the chemistry-specific detail in the [Battery Chemistries Deep-Dive](stor-chemistries.md).

> **Scope note:** This article is educational. Codes are adopted and amended locally, standards are revised on multi-year cycles, and the *authority having jurisdiction* (AHJ) always controls. Never size, site, or commission a real system from a reference article — use the currently adopted edition and a licensed professional.

## Thermal Runaway and Off-Gassing

### What thermal runaway is

**Thermal runaway** is a self-accelerating exothermic reaction inside a lithium-ion cell. When a cell reaches a critical temperature — from an internal short, overcharge, physical damage, manufacturing defect, or external heat — its chemistry begins to break down and generate its own heat faster than it can dissipate. The temperature climbs, which drives faster reactions, which generate more heat. Once it starts, it typically cannot be stopped by cooling from outside.

The critical safety concern is **propagation**: heat from one runaway cell drives its neighbors into runaway, cascading through a module, then a rack, then potentially an entire installation. A large fraction of modern BESS design — cell spacing, module firewalls, and the entire UL 9540A test program below — exists to interrupt this chain.

### Off-gassing and the explosion hazard

Before and during runaway, cells vent gas. This **off-gas** (sometimes called battery vent gas) is a mixture that commonly includes hydrogen, carbon monoxide, methane and other hydrocarbons, plus toxic species. Two properties make it dangerous:

- **It is flammable.** Accumulated off-gas in an enclosed space can reach its lower flammability limit (LFL) and **deflagrate** — a fast-burning explosion. This is why enclosures require ventilation and/or explosion control, not just fire suppression.
- **It is toxic.** Off-gas endangers occupants and responders even without ignition.

```
Trigger (short / overcharge / heat / damage)
      |
      v
Cell heating  --->  Off-gassing (flammable + toxic vent gas)
      |                     |
      v                     v
Thermal runaway     Gas accumulates in enclosure
      |                     |
      v                     v
Propagation to        Deflagration / explosion
adjacent cells        (if not vented or made inert)
      |
      v
Rack / unit / installation fire
```

Because the gas hazard can precede visible fire, best practice pairs early gas detection with the fire-detection system so the site can respond before ignition.

## Product Safety Standards: UL 1973, UL 9540, UL 9540A

Three UL standards do different jobs and are frequently confused. Getting the distinction right matters for permitting.

| Standard | What it evaluates | Level |
|---|---|---|
| **UL 1973** | The battery/energy-storage component (the pack or system building block) for safe operation | Component |
| **UL 9540** | The complete energy storage **system** — battery, power conversion, controls, thermal management — as an integrated product | System |
| **UL 9540A** | A **fire test method** measuring thermal-runaway fire and gas behavior; produces data, not a pass/fail listing | Test method |

### UL 1973 and UL 9540 (listings)

**UL 1973** is a safety standard for the batteries themselves. **UL 9540** is the umbrella listing for the *whole system* — it is the listing most codes point to when they require an ESS to be "listed." A UL 9540 listing tells the AHJ the assembled product met a recognized safety standard.

### UL 9540A (the fire test that unlocks siting flexibility)

**UL 9540A** is not a pass/fail listing — it is a **Test Method for Evaluating Thermal Runaway Fire Propagation in Battery Energy Storage Systems**. It deliberately forces cells into thermal runaway and measures what happens, generating the data AHJs and NFPA 855 use to decide whether a system can be installed with reduced separation, indoors, or at larger stored-energy quantities.

UL 9540A is structured in escalating levels:

- **Cell level:** A cell is driven into runaway in a controlled vessel; the vent gas is captured and characterized (composition, lower flammability limit, peak explosion pressure, burning velocity). This feeds the explosion-control engineering downstream.
- **Module level:** Cells within a module are driven to runaway to see whether the fire propagates cell-to-cell and to quantify heat and gas release.
- **Unit level:** Runaway is initiated in a full unit to observe propagation between modules and external fire/heat effects on adjacent units and surfaces.
- **Installation level:** A representative installation (including intended fire/explosion mitigation such as sprinklers) is tested to validate real-world performance.

> **Why it matters:** A favorable UL 9540A report is what lets a manufacturer document *smaller-than-default* separation distances or indoor placement in the installation manual. Without it, you fall back to the conservative default requirements in NFPA 855.

## NFPA 855: Installation of Stationary Energy Storage Systems

**NFPA 855** is the installation standard — it governs *where and how* a listed system is put in. It works alongside the fire and building codes (IFC/IRC, below) and is widely adopted or referenced across US jurisdictions. Key concepts, based on the widely adopted 2023 edition:

### Maximum stored energy per unit and separation

- Individual ESS units are generally limited to a **maximum stored energy of 20 kWh per unit** (per the 2023 edition's provisions).
- Individual units are generally **separated by at least 3 ft (914 mm)** from each other and from walls — *unless* larger-scale fire and explosion testing (UL 9540A) documents that a smaller distance is adequate, in which case the manufacturer's installation manual governs.

### Residential aggregate limits

For dwellings, NFPA 855 caps the aggregate energy allowed in different locations. Commonly cited thresholds from the 2023 edition:

| Location | Typical aggregate limit |
|---|---|
| Inside the dwelling (utility closet, storage/utility space) | up to **40 kWh** |
| Attached or detached garage / detached accessory structure | up to **80 kWh** |

Quantities above the residential thresholds, or systems in other occupancies, push the installation into the commercial/large-scale provisions with fire testing, detection, and other controls.

### Indoor vs. outdoor siting, ventilation, and explosion control

NFPA 855 sets requirements that vary by location and technology:

- **Siting and separation** from exposures, exits, means of egress, and lot lines.
- **Ventilation** to prevent accumulation of flammable off-gas in enclosed spaces.
- **Explosion control** — for example deflagration venting or a gas-detection-based mechanical exhaust system — where flammable off-gas can accumulate. The engineering here draws directly on the LFL and pressure data from UL 9540A cell-level testing.
- **Fire detection and suppression** appropriate to the occupancy and system size.
- **Signage, clearances, and access** for safe operation and firefighting.

### Commissioning and emergency planning

NFPA 855 also addresses the operational lifecycle:

- **Commissioning:** New installations must be commissioned to verify the system, its controls, and its safety systems function as designed before being placed in service.
- **Emergency Response / Operations plan:** Larger systems require documentation (often an **Emergency Response Plan** and **Hazard Mitigation Analysis**) so the fire department knows what chemistry is present, how to isolate it, expected failure behavior, and the correct tactics — critical given that lithium fires resist conventional suppression and can reignite.

> The AHJ frequently coordinates directly with the local fire department during permitting for anything beyond residential scale.

## IFC / IRC ESS Provisions

Model codes carry ESS-specific provisions that generally align with and reference NFPA 855:

- The **International Fire Code (IFC)** contains a stationary storage battery / ESS chapter covering commercial and larger installations — listing, quantity thresholds, separation, ventilation, detection, and signage.
- The **International Residential Code (IRC)** carries provisions aimed at one- and two-family dwellings, addressing listing (UL 9540), location, and aggregate energy limits comparable to the residential figures above.

Because states and municipalities adopt specific editions on their own schedules — and add local amendments — the *adopted* edition in your jurisdiction is what governs, not the newest published edition.

## How Requirements Scale: Residential vs. Commercial vs. Utility

The same physics applies at every scale, but the controls tighten as stored energy grows.

| Dimension | Residential | Commercial / C&I | Utility / Grid-Scale |
|---|---|---|---|
| Governing documents | IRC + NFPA 855 (residential) | IFC + NFPA 855 | IFC/NFPA 855 + interconnection + utility standards |
| Product listing | UL 9540 (with UL 1973 cells) | UL 9540 | UL 9540, UL 9540A report |
| UL 9540A data | Sometimes leveraged for indoor units | Commonly required for siting | Effectively expected |
| Aggregate energy | ~40 kWh indoors / ~80 kWh garage typical | Many hundreds of kWh to MWh | Tens to hundreds of MWh |
| Separation / spacing | 3 ft default or per test | Per UL 9540A + AHJ | Container-to-container spacing, fire access lanes |
| Explosion control | Ventilation for enclosed units | Deflagration venting / exhaust | Purpose-built enclosures, deflag panels |
| Emergency plan | Basic labeling / shutoff | Emergency Response Plan + HMA | Formal ERP, fire dept. training, on-site data |
| Commissioning | Installer verification | Formal commissioning | Full commissioning + acceptance testing |

Grid-scale siting, container design, and safety-at-scale are covered in depth in [Grid-Scale & Utility Storage](stor-grid-scale.md). Ongoing inspection, maintenance, and safety through a system's operating life are covered in [BESS / Battery O&M & Augmentation](om-bess-augmentation.md), and the commercial demand-charge context appears in [Commercial Storage & Demand-Charge Management](commercial-storage.md).

## Key Takeaways

- **Thermal runaway** and flammable/toxic **off-gassing** are the central hazards; propagation control and explosion control are the design responses.
- **UL 1973** covers the battery, **UL 9540** lists the whole system, and **UL 9540A** is the fire *test method* that generates the data enabling flexible siting.
- **NFPA 855** governs installation — separation (3 ft default), per-unit and residential aggregate energy limits, ventilation, explosion control, commissioning, and emergency planning — and is echoed by IFC/IRC.
- Requirements scale with stored energy: residential systems rely on simple listing and limits, while utility systems require testing data, engineered enclosures, and formal emergency plans.
- The **adopted code edition and the AHJ** always control the real project.

## Sources & Further Reading

- [NFPA 855, Standard for the Installation of Stationary Energy Storage Systems](https://www.nfpa.org/product/nfpa-855-standard/p0855code)
- [Code Corner: NFPA 855 ESS Unit Spacing Limitations — Mayfield Renewables](https://www.mayfield.energy/technical-articles/code-corner-nfpa-855-ess-unit-spacing-limitations/)
- [Understanding UL 9540A, NFPA 855 and Large-Scale Fire Testing — UL Solutions](https://www.ul.com/thecodeauthority/knowledge/understanding-UL-9540A-NFPA-855)
- [UL 9540A: Test Method for Evaluating Thermal Runaway Fire Propagation in BESS — Tesla Energy Library](https://energylibrary.tesla.com/docs/Public/EnergyStorage/Powerwall/General/Compliance/SafetyStandardsLithiumIonElectrochemical/en-us/GUID-2927B686-2691-4A8F-9643-D57B21F9AB61.html)
- [NFPA 855 Changes in the 2026 Edition — Telgian](https://www.telgian.com/nfpa-855-changes-in-2026/)
- [Energy Storage System Installation Test Report — Fire Safety Research Institute (FSRI)](https://fsri.org/research-update/energy-storage-system-installation-test-report-now-available)

> **Disclaimer:** This article is provided for educational purposes only. It is not engineering, legal, or code-compliance advice. Standards and codes are revised periodically and adopted with local amendments; always consult the currently adopted editions and a qualified licensed professional and your authority having jurisdiction before designing, installing, or commissioning an energy storage system.
