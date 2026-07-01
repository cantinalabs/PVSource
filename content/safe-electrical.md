# Electrical Safety & Arc Flash

Electricity is the hazard that makes solar work different from ordinary rooftop construction. A PV system is a generator, an inverter, a set of AC circuits, and often a battery bank — every one of which can injure or kill. This article covers the two great electrical hazards, **shock** and **arc flash**, the NFPA 70E framework that governs safe work around them, lockout/tagout, and the two problems unique to solar: DC arrays that cannot be switched off in daylight and AC backfeed from grid-tied inverters.

> **Two ways electricity kills.** Shock stops the heart or paralyzes the muscles you need to let go. Arc flash burns you — an arc can reach temperatures around 35,000 °F, roughly four times the surface of the sun, and the pressure wave (arc blast) can throw a worker across a room. Solar work exposes you to both.

## Shock Hazards

Shock occurs when the body becomes part of a circuit. The severity depends on current, path, and duration — and dangerous current levels are far lower than most people assume.

| Current through body (60 Hz) | Typical effect |
|---|---|
| ~1 mA | Perception threshold |
| ~5 mA | Painful; generally considered a safe upper limit |
| 10–20 mA | "Let-go" threshold exceeded — muscles lock, cannot release conductor |
| 50–100 mA | Ventricular fibrillation likely; often fatal |
| > 200 mA | Severe burns, cardiac arrest |

DC shock behaves differently from AC — it tends to cause a single strong muscle contraction that can throw a person off a conductor or off a roof, and at PV string voltages (often 300–600 V, up to 1,000–1,500 V in commercial/utility strings) it is fully capable of being lethal. See [DC & PV-Specific Hazards](safe-dc-hazards.md) for why PV DC is so persistent.

**Controlling shock** relies, in order, on de-energizing (where possible), insulation and guarding (engineering), safe work practices and boundaries (administrative), and finally insulating PPE. Rubber insulating gloves with leather protectors, insulated tools, and voltage-rated meters are core equipment.

## Arc Flash

An **arc flash** is the explosive release of energy when current jumps across an air gap — caused by a dropped tool, a loose connection, insulation failure, or an inadvertent short. The result is intense radiant heat, molten metal, a pressure blast, and a blinding flash.

The key engineering quantity is **incident energy**, the thermal energy a worker would receive at a given working distance, measured in **calories per square centimeter (cal/cm²)**. An incident energy of about **1.2 cal/cm²** is the threshold for onset of a second-degree burn on bare skin — and that value defines the arc-flash boundary.

## NFPA 70E: The Framework for Electrical Safe Work

**NFPA 70E, Standard for Electrical Safety in the Workplace**, is the consensus standard OSHA relies on to define what "safe electrical work practice" means. It governs approach boundaries, arc-flash risk assessment, and PPE selection. (For NFPA's role in the broader solar code landscape, see [NFPA Standards & Solar](code-nfpa.md).)

### Shock approach boundaries

NFPA 70E defines boundaries around exposed energized conductors, based on voltage:

| Boundary | Meaning | Who may enter |
|---|---|---|
| **Limited approach** | Outer shock boundary | Qualified persons; unqualified only if continuously escorted by a qualified person |
| **Restricted approach** | Close enough that inadvertent movement risks contact | Qualified persons only, with insulating PPE, insulated tools, and an energized-work permit |

### Arc-flash boundary

The **arc-flash boundary** is the distance from a potential arc source at which incident energy falls to 1.2 cal/cm². Anyone inside it must wear arc-rated PPE appropriate to the incident energy present.

### Two methods to select PPE

NFPA 70E permits two approaches:

1. **Incident-energy analysis** — an engineering study calculates the actual cal/cm² at each work location. PPE is then selected with an arc rating (ATPV or EBT) at least equal to that value. This is the more precise method.
2. **Arc-flash PPE category method** — a table-based approach (Table 130.5(G) / task tables) that assigns one of four categories to common tasks without a full study. It is simpler but deliberately conservative, and may over-protect.

### Arc-flash PPE categories

| Category | Minimum arc rating | Representative clothing/PPE |
|---|---|---|
| **1** | 4 cal/cm² | AR shirt and pants (or coverall), AR face shield/hood, hard hat, safety glasses, hearing protection, leather gloves |
| **2** | 8 cal/cm² | AR shirt and pants, AR flash-suit hood or balaclava + face shield, plus Category 1 items |
| **3** | 25 cal/cm² | AR flash suit and hood, AR gloves, plus prior items |
| **4** | 40 cal/cm² | Heavier multilayer AR flash suit and hood, AR gloves, plus prior items |

> **The 40 cal/cm² ceiling.** NFPA 70E does not permit energized work where incident energy exceeds **40 cal/cm²** — at that level the equipment must be de-energized before work begins. High available fault current at commercial combiners, inverters, and battery systems can exceed this, which is precisely why de-energizing is the goal.

**Arc-rated (AR) clothing** is not the same as flame-resistant labeling alone: AR garments carry a tested arc rating (ATPV, arc thermal performance value, or EBT, energy break-open threshold) in cal/cm². Ordinary synthetic clothing is dangerous near an arc because it can ignite and melt to skin. AR clothing self-extinguishes and provides a rated thermal barrier.

See the NFPA 70E PPE category overview at [ExpertCE — NFPA 70E 2024 Arc Flash PPE Categories](https://expertce.com/nfpa-70e-2024-arc-flash-ppe-categories-explained/).

## Lockout/Tagout (LOTO)

**Lockout/tagout**, governed by OSHA [29 CFR 1910.147](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147), is the procedure for controlling hazardous energy during service and maintenance. Its core discipline: physically lock the energy-isolating device in the safe position and tag it so it cannot be re-energized while someone is exposed.

### Standard LOTO sequence

```
1. Prepare      – identify all energy sources (AC, DC, stored, battery)
2. Notify       – tell affected personnel
3. Shut down    – orderly stop of equipment
4. Isolate      – open disconnects / isolation devices
5. Lock & tag   – apply personal lock and tag to each device
6. Release      – dissipate stored energy (capacitors, batteries)
7. VERIFY       – test with a meter that circuits are actually dead
8. (Restore)    – reverse the process, remove locks in order
```

> **Verify, always.** Step 7 is where LOTO discipline is proven. "Test before touch": use a properly rated meter, confirm it works on a known live source, test the target, then confirm the meter again. An open disconnect is a claim, not proof.

Multiple workers use multiple locks (group lockout with a hasp); each worker controls their own lock and removes it themselves. Never remove another person's lock.

## The DC Problem: Arrays That Cannot Be Switched Off

Here is the hazard that makes solar unlike almost any other electrical work: **a PV array energizes whenever light strikes it, and there is no switch that stops it.** Opening the DC disconnect isolates downstream equipment, but the conductors from the modules to that disconnect remain live at full string voltage in daylight.

This breaks the normal LOTO assumption that isolation equals de-energization. Practical consequences:

- The DC side of a grid-tied or off-grid system can be **hundreds of volts and lethal even with every breaker off**.
- Meaningful DC de-energization requires **covering the array with opaque material** to block light, or using a **module-level rapid-shutdown system** that drops conductor voltage to a safe level (see [DC & PV-Specific Hazards](safe-dc-hazards.md) for rapid shutdown detail).
- LOTO procedures for PV must explicitly state that the DC array is treated as **energized at all times in daylight** unless verified otherwise.

Fluke's field guidance underscores that opening a disconnect does not make PV DC safe — the modules keep generating ([Fluke — Lockout/Tagout for Solar Power Systems](https://www.fluke.com/en-us/learn/blog/renewable-energy/solar-panel-safety-lockout-tagout)).

## AC Backfeed

The AC side has its own trap: **backfeed**. A grid-tied inverter, and especially a battery system with backup capability, can energize conductors from the *load* side even when the utility feed is open.

- An open main breaker does not guarantee a dead panel if an inverter or ESS can backfeed it.
- Anti-islanding protection is designed to stop a grid-tied inverter from energizing a de-energized utility line, but you never rely on protective functions in place of verified isolation.
- Battery-backup and off-grid systems can hold live AC even during a utility outage.

The rule is identical to the DC rule: **isolate every source, then verify dead with a meter** before touching conductors. That means the utility side, the inverter/ESS side, and any generator or transfer-switch source.

## Working De-Energized Where Possible

The safest energized work is the work you do not do energized. NFPA 70E establishes a strong presumption in favor of an **electrically safe work condition**: de-energize, isolate, verify, and lock out unless de-energizing introduces a greater hazard or is infeasible. Energized work requires justification and an energized-electrical-work permit.

For solar, "de-energized where possible" means:

- Assemble and terminate as much as possible **before** connectors are mated and strings are live.
- **Cover arrays** or use rapid shutdown before working the DC side.
- Sequence **AC isolation** (utility, inverter, ESS) before touching AC conductors.
- Reserve energized work — commissioning measurements, live troubleshooting — for qualified persons with the correct arc-flash PPE and a permit.

## Sources & Further Reading

- OSHA — [29 CFR 1910.147, The Control of Hazardous Energy (Lockout/Tagout)](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147)
- OSHA — [Green Job Hazards: Solar Energy — Electrical](https://www.osha.gov/green-jobs/solar/electrical)
- NFPA — [NFPA 70E, Standard for Electrical Safety in the Workplace](https://www.nfpa.org/product/nfpa-70e-standard/p0070ecode)
- ExpertCE — [NFPA 70E 2024 Arc Flash PPE Categories Explained](https://expertce.com/nfpa-70e-2024-arc-flash-ppe-categories-explained/)
- Fluke — [Lockout/Tagout for Solar Power Systems](https://www.fluke.com/en-us/learn/blog/renewable-energy/solar-panel-safety-lockout-tagout)
- Related pages: [Solar Safety Overview](safe-overview.md) · [DC & PV-Specific Hazards](safe-dc-hazards.md) · [Battery & Energy-Storage Safety](safe-battery.md) · [NFPA Standards & Solar](code-nfpa.md) · [The National Electrical Code (NEC) & Solar](code-nec.md) · [DIY Grounding, Bonding & Surge Protection](diy-grounding-surge.md)

> **Safety disclaimer.** This article is educational only and is not a substitute for formal, hands-on electrical safety training or the judgment of a qualified person. Electrical work on PV systems, batteries, and AC circuits can cause fatal shock, arc-flash burns, and blast injuries. Only trained, qualified, and authorized persons should perform electrical work, and only in accordance with current OSHA standards, NFPA 70E, the NEC, and manufacturer instructions. Always treat PV DC conductors as energized in daylight and verify de-energization with a properly rated meter before contact. When in doubt, stop work and consult a licensed electrician or qualified electrical professional.
