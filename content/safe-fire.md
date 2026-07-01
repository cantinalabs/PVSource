# Fire Safety & Firefighter Considerations

Photovoltaic (PV) and energy storage systems (ESS) rarely start fires, but when a fire does occur on or near a solar installation, the presence of energized DC circuits, batteries, and roof-covering arrays changes how the emergency is fought. A solar array cannot be "shut off" the way a service disconnect kills an AC panel — as long as sunlight strikes the modules, the DC conductors upstream of any rapid-shutdown boundary are live. This article explains the fire risks specific to PV/ESS, the code-driven design features that protect firefighters (rooftop access pathways, setbacks, marking, and rapid shutdown), and the workmanship practices that keep ignition risk low in the first place.

For the broader program context, see the [Solar Safety Overview](safe-overview.md). Fire hazards overlap heavily with the [Electrical Safety & Arc Flash](safe-electrical.md) discipline, and rooftop firefighting shares fall exposures covered in [Working at Heights & Fall Protection](safe-falls.md).

> **Warning:** Never assume a PV array is de-energized because a breaker is open or the sun is behind clouds. Modules can produce hazardous voltage in low light, moonlight, and even from strong artificial illumination. Treat all PV DC conductors as live until proven otherwise with a properly rated meter.

## Why PV and ESS Fires Are Different

A conventional building fire is fought after the electric utility or an on-scene disconnect removes power. Solar changes three assumptions:

- **The energy source is distributed and self-generating.** Every module is a small generator. Opening a disconnect stops current flow but does not remove voltage from the module strings themselves.
- **DC arcs are persistent.** Direct current does not cross zero 120 times per second like 60 Hz AC, so a DC arc does not self-extinguish easily. A series arc fault in a string can sustain a high-temperature plasma capable of igniting roofing materials.
- **Batteries add stored chemical energy.** Lithium-ion ESS can enter *thermal runaway* — a self-sustaining exothermic reaction that generates heat, flammable and toxic off-gas, and can reignite hours after apparent extinguishment.

### Common Ignition Sources in PV Systems

| Ignition source | Typical root cause | Prevention |
|---|---|---|
| Loose or corroded DC connectors | Mismatched/cross-mated connectors, poor crimps, water intrusion | Use matched connector brands; proper crimp tooling; torque and inspect |
| Series arc faults | Aging insulation, rodent damage, thermal cycling of joints | DC arc-fault circuit interrupter (AFCI) per code; workmanship |
| Ground faults | Damaged conductor insulation, pinched wire under rails | Ground-fault protection; proper wire management |
| Overheated terminations | Under-torqued lugs, undersized conductors | Torque to spec; conductor sizing and derating |
| Inverter/optimizer failure | Component defect, inadequate ventilation | Listed equipment; clearances; monitoring |
| ESS cell defect / abuse | Manufacturing flaw, overcharge, mechanical damage, over-temperature | UL 9540/9540A listed systems; BMS; thermal management |

## Rooftop Access Pathways and Setbacks (IFC)

The **International Fire Code (IFC)**, Section 1205 in the 2021 edition, establishes access and pathway requirements so firefighters can reach the roof, move across it, ventilate it, and escape it without being trapped by an array. Local amendments and the California Fire Code (Cal Fire guideline) may differ, so always confirm the adopted code and any local requirements with the Authority Having Jurisdiction (AHJ).

### Key IFC 2021 Provisions for One- and Two-Family Dwellings (Group R-3)

- **Access pathways:** Not fewer than two 36-inch-wide (914 mm) pathways on separate roof planes, running from the lowest roof edge to the ridge. At least one pathway must be on a street or driveway side of the roof.
- **Ridge setbacks (based on array coverage of the plan-view roof area):**

| Array coverage of total plan-view roof area | Required clear setback at ridge |
|---|---|
| 33% or less | 18 in (457 mm) on both sides of a horizontal ridge |
| More than 66% | 36 in (914 mm) on both sides of a horizontal ridge |

- **Emergency escape and rescue openings (EEROs):** Modules must not be placed below an EERO, and a 36-inch pathway must lead to it.
- **Slope exception:** These pathway/setback rules generally do not apply to roofs with a slope of 2:12 (about 17%) or less, where firefighters can move more freely.
- **Structural support:** Pathways must be located over roof areas capable of supporting firefighters and free of obstructions such as vent pipes, conduit, and mechanical equipment.

> **Note:** The exact numbers above reflect the **2021 IFC** as commonly adopted. Commercial and larger buildings (Group R-3 vs. other occupancies) and rooftop-mounted ESS have additional access, smoke-ventilation, and clearance rules. Verify against the edition and amendments your AHJ has adopted.

Well-planned pathways are not just a code checkbox — they determine whether a crew can cut a ventilation hole over the fire without walking across an energized array in the dark.

## Array Marking and Labeling

Clear, durable labeling tells arriving firefighters what they are dealing with and where the disconnects are. Marking requirements are driven primarily by the **National Electrical Code (NEC) Article 690** and the IFC.

- **Rapid shutdown labels:** Under the 2020 NEC these live in **690.56(C)**; in the 2023 NEC the marking requirements were consolidated into **690.12(D)**. A permanent label with a diagram of the array boundary and the shutdown-initiation location must be located on or within 1 m (3 ft) of the rapid-shutdown initiation device.
- **Durability:** Labels must be reflective, weather-resistant, and permanently affixed — red field with white lettering, minimum 3/8-inch uppercase letters for the key rapid-shutdown text. Paper or standard laser-printed labels degrade outdoors and do not comply.
- **Placement:** Directory/placards at the main service disconnect, on the PV system disconnect, near the inverter, and at ESS enclosures. A plan of the array and conduit routing helps crews avoid cutting into live conductors during ventilation.

> **Warning:** Missing, faded, or incorrect labels are a life-safety hazard for responders. Firefighters make cut-and-ventilate decisions based on these placards. Verify labeling at commissioning and at every service visit.

## Rapid Shutdown as a Firefighter Measure

**Rapid shutdown (RSD)**, required by **NEC 690.12**, exists specifically to reduce the shock hazard to firefighters and other responders. When initiated, it de-energizes conductors inside the "array boundary" and the conductors leaving the array down to a controlled voltage within a set time.

- **What it does:** Reduces controlled conductors outside the array boundary to no more than 30 V within 30 seconds of shutdown initiation, and limits voltage *within* the array boundary (module-level, in most 2017-and-later implementations) so that responders working near modules are not exposed to full string voltage.
- **What it does not do:** RSD does **not** de-energize the modules themselves. Illuminated modules still produce voltage. RSD reduces the *reach* of the hazard, not its existence.
- **Initiation:** A clearly marked initiator — often the utility service disconnect or a dedicated switch — must be accessible to responders. The 2023 NEC added exceptions (e.g., non-enclosed detached structures such as carports and canopies).
- **UL 3741 alternative:** The code recognizes a **PV Hazard Control System (PVHCS)** listed to UL 3741 as an alternative approach that limits shock hazard within a defined zone rather than requiring module-level shutdown.

> **Warning:** Rapid shutdown reduces but does not eliminate DC hazards. Responders and technicians must still treat modules and any conductors between modules as potentially energized.

## DC Arc-Fault Protection

**NEC 690.11** requires listed **DC arc-fault circuit interruption (AFCI)** for most PV systems on or penetrating a building. A DC AFCI detects the electrical signature of a series arc fault and interrupts the circuit before the arc can ignite adjacent materials. Because a DC arc does not self-extinguish, this protection is a primary defense against arc-initiated roof fires.

Arc-fault protection depends on good workmanship: many nuisance trips and, worse, missed faults trace back to poor terminations and connector problems rather than the AFCI device itself.

## How Firefighters Approach a Solar Roof

Fire service standard operating procedures for PV-equipped structures generally emphasize:

1. **Size-up from the ground.** Identify the array, count the pathways, read the placards, and locate disconnects before anyone goes up.
2. **Assume the array is energized.** Activate rapid shutdown if a marked initiator exists, but do not rely on it to make the roof "safe."
3. **Minimize contact.** Walk designated pathways, avoid stepping on or cutting into modules and DC conduit, and keep hose streams from making unnecessary contact with energized DC equipment where feasible.
4. **Ventilate away from the array.** Use setbacks and pathways for cut locations; a roof densely covered in modules limits ventilation options and may drive a defensive strategy.
5. **Treat ESS separately.** For battery involvement, follow lithium-ion protocols — expect off-gas, reignition, and stored energy. See [Emergency Response & First Aid](safe-emergency.md).

Designers directly affect firefighter safety: generous pathways, correct setbacks, durable labels, functioning rapid shutdown, and clean conduit routing all make the difference on the fireground.

## Reducing Ignition Risk Through Workmanship

The most effective fire-prevention tool is quality installation. The majority of PV-related fires trace to a small set of avoidable defects.

- **Connectors:** Use only matched, listed connectors from the same manufacturer and family. **Cross-mating different brands** — even when they physically click together — is a leading cause of high-resistance connections, overheating, and arcing. Use the correct crimp tool and die; do not field-assemble connectors without proper tooling.
- **Terminations:** Torque every lug and terminal to the manufacturer's specification with a calibrated torque tool, and mark torqued connections. Under- and over-torqued terminations both fail.
- **Wire management:** Support and secure conductors so they cannot chafe against rails or roof penetrations. Protect against UV, abrasion, and rodent damage.
- **Conductor sizing and derating:** Size for rooftop temperature and continuous current; derate correctly to prevent insulation degradation.
- **Commissioning tests:** Verify insulation resistance, polarity, ground-fault and arc-fault function before energizing.
- **ESS installation:** Follow UL 9540/9540A listings, maintain required separation and ventilation, and confirm the battery management system (BMS) and any deflagration/ventilation provisions are functional.

> **Warning:** A connector that "clicks" is not necessarily a compatible, listed, weatherproof connection. Cross-mated and improperly crimped DC connectors are among the most common ignition points in rooftop PV. When in doubt, cut it off and re-terminate with matched components.

## Sources & Further Reading

- [International Fire Code 2021, Section 1205 — Access and Pathways (ICC Digital Codes)](https://codes.iccsafe.org/s/IFC2021P1/chapter-12-energy-systems/IFC2021P1-Pt03-Ch12-Sec1205.2)
- [IFC 2021 Section 1205.2.1 — Solar PV systems for Group R-3 (ICC Digital Codes)](https://codes.iccsafe.org/s/IFC2021P1/chapter-12-energy-systems/IFC2021P1-Pt03-Ch12-Sec1205.2.1)
- [Fire Code Requirements for Rooftop Solar (IFC Guide) — ExpertCE](https://expertce.com/learn-articles/fire-code-requirements-rooftop-solar/)
- [2023 NEC Updates to Rapid Shutdown Requirements — Mayfield Renewables](https://www.mayfield.energy/technical-articles/2023-nec-updates-to-rapid-shutdown-requirements/)
- [Meeting NEC 690.12 Rapid Shutdown Requirements — ExpertCE](https://expertce.com/learn-articles/nec-690-12-rapid-shutdown-requirements/)
- [NEC 690.56(C) Labels for PV Rapid Shutdown Systems — Solar Permit Solutions](https://www.solarpermitsolutions.com/blog/nec-690-56c-labels-pv-rapid-shutdown)
- [NEC Rapid Shutdown Requirements and UL 3741 — IAEI Magazine](https://iaeimagazine.org/electrical-fundamentals/nec-rapid-shutdown-requirements-and-ul-3741/)
- [First Responders Guide to Lithium-Ion BESS Incidents — American Clean Power](https://cleanpower.org/gateway.php?file=2023%2F07%2FACP-ES-Product-7-First-Responders-Guide-to-BESS-Incidents-6.28.23.pdf)

---

> **Safety Disclaimer:** This article is a general educational reference, not a substitute for the adopted codes, manufacturer instructions, or qualified engineering and fire-service judgment. Fire codes (IFC, NFPA 1, NFPA 855), the NEC, and their local amendments change between editions and jurisdictions — always design and inspect to the specific editions adopted by your AHJ. PV DC circuits and energy storage systems remain hazardous even after AC power is removed and after rapid shutdown is initiated. Firefighting and emergency operations involving solar and battery systems must be performed only by trained responders following their agency's standard operating procedures. When lives, property, or code compliance are at stake, consult a licensed professional engineer, master electrician, and your fire authority.
