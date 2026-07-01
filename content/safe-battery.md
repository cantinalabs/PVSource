# Battery & Energy-Storage Safety

Energy storage has moved from a niche add-on to a standard part of solar — a residential battery in the garage, a commercial rack in an electrical room, a shipping-container battery bank at a utility site. Batteries store enormous energy in a small space, and when a lithium-ion cell fails, that energy can release as heat, flammable gas, and fire in a self-feeding chain reaction. This article covers the hazards unique to **energy storage systems (ESS)**, the UL 9540A test basis, the NFPA 855 installation standard, and how emergency response differs from ordinary firefighting. It complements the electrical hazards in [Electrical Safety & Arc Flash](safe-electrical.md).

> **A battery cannot be switched off.** Like a PV array, an energy-storage system holds hazardous energy even when every breaker is open. A damaged battery can enter thermal runaway hours or even days after the event that damaged it. Treat storage as energized and potentially unstable at all times.

## The Core ESS Hazards

| Hazard | What happens |
|---|---|
| **Thermal runaway** | A cell overheats, chemical reactions become self-sustaining, temperature and pressure spiral, spreading to adjacent cells |
| **Off-gassing** | Failing cells vent flammable and toxic gases (hydrogen, hydrocarbons, HF) before and during runaway |
| **Explosion / deflagration** | Accumulated vented gas ignites, producing a blast in the enclosure or room |
| **Stranded energy** | Damaged cells retain charge that cannot be safely discharged, remaining a shock and re-ignition source |
| **Arc flash** | Battery banks deliver very high short-circuit current, producing severe arc-flash energy at terminals and busbars |
| **Reignition** | Batteries can reignite hours after apparent extinguishment as trapped cells continue to fail |

## Thermal Runaway

**Thermal runaway** is the defining ESS hazard. A cell abused by overcharge, over-discharge, physical damage, internal short, or external heat begins exothermic reactions. As it heats, those reactions accelerate, driving temperature higher, which accelerates them further — a positive-feedback loop that can reach several hundred degrees Celsius and propagate cell-to-cell through a module and pack. The fire is intense, hard to extinguish, and self-oxygenating to a degree (some reactions release oxygen), so it resists conventional suffocation.

## Off-Gassing and Explosion Control

Before flames appear, a failing lithium-ion cell **vents gas** — a mixture that is flammable and toxic. In an enclosed space this gas accumulates, and if it reaches its **lower flammability limit (LFL)** and finds an ignition source, it deflagrates or explodes. This is why ventilation and explosion control are central to ESS safety, not afterthoughts.

NFPA 855 addresses this with requirements for **exhaust ventilation, gas detection, and explosion control**. Guidance associated with the standard describes ventilation designed to keep flammable gas concentrations well below the LFL (a commonly cited target is keeping gas under **25% of the LFL**), with explosion-control measures required where that threshold could be exceeded ([Anern — Demystifying NFPA 855](https://www.anernstore.com/blogs/off-grid-solar-solutions/nfpa-855-energy-storage-fire-codes)).

> **Gas before fire.** Off-gassing is an early warning. Gas detection tied to ventilation and alarms can catch a failing battery before it becomes an explosion. If you smell sweet/acrid odor or see swelling, venting, or smoke from a battery — evacuate and call the fire service; do not investigate up close.

## Stranded Energy and Arc Flash

**Stranded energy** is the charge trapped in damaged cells that cannot be discharged through normal means. It makes a "dead" battery still capable of shock, arcing, and reignition, and it complicates both firefighting and post-incident handling — responders and technicians can be injured by a pack they believe is safe.

Battery banks also present a serious **arc-flash** hazard: they can source very high fault current with essentially no delay, so a short at the terminals or busbars produces high incident energy. Work on or near battery terminals requires the NFPA 70E arc-flash discipline covered in [Electrical Safety & Arc Flash](safe-electrical.md) — arc-rated PPE, insulated tools, and, wherever possible, an electrically safe work condition.

## UL 9540A: The Test Basis

**UL 9540A** is the standardized fire-and-explosion **test method** used to characterize how a battery system behaves in thermal runaway. It is not a pass/fail product listing (that is UL 9540, the product safety standard); rather, 9540A generates the fire and gas data that AHJs and NFPA 855 use to make siting and protection decisions.

The test proceeds through escalating levels — **cell, module, unit, and installation** — to answer questions like:

- Can this chemistry undergo thermal runaway at all?
- Does runaway **propagate** from one cell to adjacent cells and modules?
- How much heat, flame, and **gas** (including hydrogen where relevant) is released?
- Are built-in or external **suppression** measures effective at preventing explosion, deflagration, or reignition?

The resulting data drives real-world decisions about separation distances, explosion control, and whether a given product can be installed in a given location ([UL Solutions — UL 9540A Test Method](https://www.ul.com/services/ul-9540a-test-method); [Mayfield Renewables — UL 9540 and 9540A Explained](https://www.mayfield.energy/technical-articles/ul-9540-and-9540a-explained/)).

## NFPA 855: Installation Safety

**NFPA 855, Standard for the Installation of Stationary Energy Storage Systems**, is the installation-safety standard that ties everything together. It sets requirements based on the technology, the setting, and the size and separation of the installation, covering:

- **Location and separation** — where ESS may be installed, and spacing between units and from exposures.
- **Maximum stored energy** per location, with thresholds that trigger additional protection.
- **Fire detection and suppression**, **exhaust ventilation**, **gas detection**, **explosion control**, and **thermal-runaway** provisions (all revised/expanded in the 2023 edition).
- **Emergency planning** and responder information.

NFPA 855 relies heavily on **UL 9540A** test data to justify designs — the two documents are meant to be used together ([NFPA — NFPA 855](https://www.nfpa.org/product/nfpa-855-standard/p0855code)). NFPA 855 sits alongside the broader fire and electrical framework discussed in [NFPA Standards & Solar](code-nfpa.md) and [The National Electrical Code (NEC) & Solar](code-nec.md).

## Residential vs. Commercial

The hazards are the same chemistry, but the scale, controls, and code treatment differ sharply.

| | **Residential ESS** | **Commercial / Utility ESS** |
|---|---|---|
| Typical energy | Single-digit to tens of kWh | Hundreds of kWh to MWh |
| Location | Garage, exterior wall, dedicated space | Dedicated room, outdoor enclosure, container |
| NFPA 855 threshold | Lower stored-energy limits per unit and per dwelling | Full commercial requirements: spacing, suppression, explosion control |
| Ventilation/gas detection | Often manufacturer-integrated | Engineered mechanical ventilation and gas detection |
| Separation | Limits on units per location and distance from doors/windows/egress | Engineered separation between racks/units and from exposures |
| Response | Homeowner evacuates; fire service responds | Site emergency plan, responder pre-plan, trained personnel |

> **Do not install storage indoors or near egress without checking the code.** NFPA 855 and local fire codes limit how much energy can be stored in a dwelling, where units may be placed relative to exits and living spaces, and how far apart they must be. These are life-safety limits, not suggestions.

## Emergency Response and Firefighter Guidance

Battery fires break the rules responders learned on ordinary fires, so ESS installations need a **pre-incident plan** and clear responder information.

- **Water is still the primary tool**, but in large volumes and for a long time — the goal is cooling to stop cell-to-cell propagation, and this can require sustained application.
- **Expect reignition** — a battery that appears out can reignite hours later; overhaul and monitoring must continue well beyond apparent extinguishment.
- **Assume off-gas and explosion risk** — do not open or enter an enclosure that may contain accumulated flammable gas; ventilate and monitor first.
- **Stranded energy and shock** — treat the system as energized; there is no reliable "off," and damaged packs hold charge.
- **Signage and shutoffs** — clear labeling of ESS location, chemistry, and emergency shutoff supports safe response; NFPA 855 and fire codes require responder-facing information.
- **Provide responders the data** — manufacturer emergency response guides and UL 9540A findings help the fire service plan tactics for that specific product.

An ESS **emergency operations/response plan** — required for many installations under NFPA 855 — should be developed with the local fire department, cover evacuation and isolation, and be exercised, not just filed.

## Sources & Further Reading

- NFPA — [NFPA 855, Standard for the Installation of Stationary Energy Storage Systems](https://www.nfpa.org/product/nfpa-855-standard/p0855code)
- UL Solutions — [UL 9540A Test Method for Battery Energy Storage Systems (BESS)](https://www.ul.com/services/ul-9540a-test-method)
- Mayfield Renewables — [UL 9540 and 9540A Explained](https://www.mayfield.energy/technical-articles/ul-9540-and-9540a-explained/)
- Anern — [Demystifying NFPA 855: Fire Codes for Energy Storage Solutions](https://www.anernstore.com/blogs/off-grid-solar-solutions/nfpa-855-energy-storage-fire-codes)
- Related pages: [Solar Safety Overview](safe-overview.md) · [Electrical Safety & Arc Flash](safe-electrical.md) · [DC & PV-Specific Hazards](safe-dc-hazards.md) · [NFPA Standards & Solar](code-nfpa.md) · [The National Electrical Code (NEC) & Solar](code-nec.md)

> **Safety disclaimer.** This article is educational only and is not a substitute for manufacturer instructions, qualified engineering, or the requirements of your Authority Having Jurisdiction. Energy-storage systems can enter thermal runaway, vent toxic and flammable gas, explode, and reignite, and they retain hazardous energy that cannot be switched off. Only trained, qualified, and authorized persons should install, service, or respond to ESS incidents, and only in accordance with current OSHA standards, NFPA 70E, NFPA 855, UL 9540/9540A listings, the NEC, and manufacturer guidance. If a battery is swelling, venting, smoking, or on fire, evacuate and call the fire service — do not attempt to fight an ESS fire without proper training and equipment. When in doubt, stop and consult a qualified professional and your fire department.
