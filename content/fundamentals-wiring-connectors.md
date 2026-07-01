# Wiring & Connectors Reference

The conductors and connectors in a photovoltaic (PV) system are not interchangeable commodities. The right wire type, gauge, material, connector, and raceway depend on where in the system the circuit lives, whether it carries DC or AC, and the environment it passes through. This page is a **reference background** on the building blocks of PV wiring: conductor types, ampacity basics, copper versus aluminum, DC versus AC circuits, connectors and their cross-mating hazard, conduit and raceway options, terminations, color coding, and grounding/bonding conductors.

This page deliberately stops short of doing the design math. **Conductor sizing, ampacity derating, and voltage-drop calculations live in [Solar Calculations & Formulas](calculations-formulas.md).** For how these conductors connect components into a working system, see [Solar System Components](system-components.md); for the physics, see [How Solar Power Works](how-solar-works.md); and for the rules governing all of it, see [Building Codes & Standards Explained](codes-standards-overview.md).

## DC vs. AC Circuits in a PV System

A grid-tied PV system contains both DC and AC sections, separated by the inverter. The distinction drives nearly every wiring decision.

```
  [Modules]==DC source/output circuit==>[Inverter]==AC output circuit==>[Service panel / Grid]
     |                                       |
   exposed outdoor runs, high UV         interior or conduit runs
   PV Wire / USE-2                        THWN-2 / building wire
```

- **DC source and output circuits** run from the modules to the inverter (or to combiners/optimizers). On rooftops these are often **exposed to sunlight, weather, and high heat**, so they demand conductors rated for UV, wet locations, and high temperature.
- **AC output circuits** run from the inverter to the service equipment, usually inside the building or in conduit, where ordinary building wire is acceptable.

> The most common wiring mistake is using indoor-rated building wire (THHN/THWN) for exposed outdoor DC runs. That wire lacks the UV resistance required and will degrade. Match the conductor to its environment.

## Conductor Types for PV

Insulation type defines a conductor's temperature rating, moisture tolerance, and sunlight resistance. The common players in PV:

| Conductor | Typical rating | Sunlight (UV) resistant | Where it is used in PV |
|---|---|---|---|
| **PV Wire** | 90 °C wet/dry, often 600 V or 2000 V | Yes (listed for it) | Exposed DC module interconnections and source-circuit runs; required for some ungrounded/transformerless designs |
| **USE-2** | 90 °C wet | Yes (when listed sunlight-resistant) | Exposed DC runs as an alternative to PV Wire; direct burial |
| **THWN-2** | 90 °C wet and dry | Generally **no** | DC and AC circuits **inside conduit** (protected runs); inverter-to-panel AC |
| **THHN/THWN building wire** | 90 °C dry / 75 °C wet (THWN) | No | Interior AC circuits, conduit runs, panel wiring |
| **RHW-2/XHHW-2** | 90 °C wet/dry | Varies | Feeders and larger conductors in conduit |

> In the U.S., **NEC 690.31** generally permits **PV Wire** and **USE-2** for exposed DC source/output circuit runs because both are UV- and moisture-resistant with a 90 °C rating. Standard **THWN-2 is permitted inside conduit** on protected portions but not for exposed outdoor DC runs. Always confirm the section and edition adopted by your AHJ.

A note on the "-2" suffix: it indicates a **90 °C rating in both wet and dry locations**. THWN (no -2) is only 75 °C in wet locations, which matters when conductors pass through hot, damp rooftop environments.

## AWG Sizing and Ampacity Basics

**American Wire Gauge (AWG)** is the standard sizing system for conductors. Two counterintuitive rules:

1. **Smaller AWG number = larger wire.** A 6 AWG conductor is much larger than a 14 AWG conductor.
2. Above 1 AWG, sizes are written **1/0, 2/0, 3/0, 4/0** ("one-aught" through "four-aught"), getting larger as the number grows. Beyond 4/0, sizes are given in **kcmil** (thousands of circular mils).

**Ampacity** is the maximum continuous current a conductor can safely carry without exceeding its insulation's temperature rating. Base ampacity comes from a code table (in the U.S., **NEC Table 310.16** for conductors in raceway/cable/earth), and then it is **adjusted** for real conditions.

The table below shows representative base ampacities for copper at the **90 °C column** of NEC Table 310.16 (the column most relevant to PV-rated conductors). These are *starting points only*, before any correction:

| Size (AWG/kcmil) | Copper, 90 °C base ampacity (A) |
|---|---|
| 14 | 25 |
| 12 | 30 |
| 10 | 40 |
| 8 | 55 |
| 6 | 75 |
| 4 | 95 |
| 3 | 115 |
| 2 | 130 |
| 1 | 145 |
| 1/0 | 170 |
| 2/0 | 195 |
| 3/0 | 225 |
| 4/0 | 260 |

> **These base values are never used as-is for PV.** They must be reduced for (1) high ambient temperature, (2) rooftop heat adders, and (3) bundling of multiple current-carrying conductors, and the circuit must also account for the **125% continuous-current factor** (NEC 690.8). In addition, smaller conductors are limited by terminal/overcurrent rules (the "small conductor" limits and the 60 °C/75 °C termination columns). **All of this math is performed in [Solar Calculations & Formulas](calculations-formulas.md).** Treat the table above as reference, not as a sizing answer.

## Copper vs. Aluminum

| Property | Copper | Aluminum (and copper-clad) |
|---|---|---|
| Conductivity | Higher (smaller wire for same ampacity) | Lower (needs ~2 sizes larger for same ampacity) |
| Weight | Heavier | Much lighter |
| Cost | Higher | Lower, especially for large feeders |
| Termination care | Standard | Requires **antioxidant compound**, listed terminals, and correct torque; oxidizes and creeps |
| Typical PV use | Module leads, source circuits, most branch wiring | Large AC feeders, service conductors, long utility-side runs |

> Module leads and DC source circuits are almost always **copper** (PV Wire is copper). **Aluminum** appears mainly in larger AC feeders where its cost and weight savings matter. Aluminum demands listed connectors and oxide-inhibiting compound, and copper and aluminum must never share a terminal unless that terminal is listed for both (marked **CU/AL** or **AL/CU**).

## MC4 and PV Connectors

Modules and many balance-of-system devices terminate in **listed PV connectors**, the most common family being **MC4** (originally a Stäubli design, now widely imitated). A proper PV connector is touch-safe, weatherproof, UV-stable, and locks positively.

### The Cross-Mating / Compatibility Hazard

A pervasive and serious field hazard is **cross-mating**: connecting a male connector of one brand to a female connector of another brand because they *look* alike and physically click together.

> **Do not cross-mate PV connectors.** Connectors that appear identical to an MC4 can differ slightly in dimensions and materials between manufacturers. A cross-mated pair can have poor sealing and **higher contact resistance**, which generates heat and becomes a **fire hazard** over time. It can also void product listings and warranties.

The governing rules:

- **UL 6703** (Connectors for Use in Photovoltaic Systems) is the listing standard, and its **intermatability** evaluation only covers connectors mated within the same listed product family.
- **NEC 690.33(C)** states that where mating connectors are **not of the identical type and brand**, they must be **listed and identified for intermatability** per the manufacturer's instructions.
- The simplest compliant practice: use the **same brand and model** of connector throughout the system, so no intermatability question arises.

A second leading failure mode is **improper crimping**. Using the wrong tool or technique creates a high-resistance joint that overheats. Always use the connector manufacturer's specified crimp tool and die.

## Conduit and Raceway Types

A **raceway** is an enclosure that routes and protects conductors. The common options in PV, and where each fits:

| Type | Description | Typical PV use |
|---|---|---|
| **EMT** (Electrical Metallic Tubing) | Thin-wall steel/aluminum tubing | Interior and protected exterior conduit runs; provides physical protection |
| **PVC conduit** (Schedule 40/80) | Rigid nonmetallic conduit | Underground runs, wet/corrosive locations; Sch 80 where impact is a concern |
| **MC cable** (Metal-Clad) | Factory cable assembly inside an interlocked metal armor | AC interior runs (e.g., inverter to panel) where a cable assembly is allowed |
| **LFMC / LFNC** (liquidtight flexible) | Flexible conduit, metallic or nonmetallic | Final flexible connection to inverters/equipment subject to vibration |
| **Free-air (no raceway)** | Single-conductor PV Wire/USE-2 run exposed and supported | Exposed DC module interconnections on the array; subject to support and management rules |

> "**Free-air**" exposed PV-Wire runs and conductors **in conduit** are treated differently for ampacity and have different temperature exposure, which is another reason conductor sizing belongs in the calculations page. Conduit fill (how many conductors fit) is also code-limited and edition-specific.

## Terminations and Torque

Most connection failures occur at **terminations**, not in the middle of a conductor run. Key practices:

- **Torque to specification.** Every lug, terminal, and breaker has a manufacturer-specified torque value (in lb-in or N·m). Under-torqued connections loosen and arc; over-torqued connections damage the conductor. Use a **calibrated torque tool**; NEC and listing instructions require following the marked torque.
- **Strip to the correct length** so no bare conductor is exposed and full conductor area sits in the terminal.
- **Use listed lugs/terminals** rated for the conductor material (CU, AL, or CU/AL) and size.
- For aluminum, apply **antioxidant compound** where required and re-verify torque.

## UV Exposure and Wire Management

Exposed DC conductors live in a punishing environment of sunlight, heat cycling, wind, and abrasion. Good wire management is a safety and longevity issue, not cosmetics:

- Use **UV-rated, sunlight-resistant** conductors (PV Wire, USE-2) and **UV-rated cable ties/clips** for any exposed run. Standard nylon zip ties degrade and fail in sunlight.
- **Support conductors off the roof surface** and away from sharp edges to prevent abrasion of the insulation.
- Avoid tight bends below the conductor's minimum bend radius.
- Keep conductors from pooling water or resting in standing water.
- Maintain strain relief at connectors so mechanical load is not carried by the contact.

## Conductor Color Coding and Labeling

Consistent color coding lets anyone safely identify conductors. Common North American conventions:

| Conductor | Common color(s) |
|---|---|
| Ungrounded ("hot") – 120/240 V single-phase | Black, red |
| Ungrounded – 208Y/120 V three-phase | Black, red, blue |
| Ungrounded – 480Y/277 V three-phase | Brown, orange, yellow |
| Grounded **neutral** | White or gray |
| Equipment **grounding** conductor (EGC) | Green, green/yellow, or bare |
| DC positive / DC negative | Often red/black or labeled; markings vary, so verify by labeling |

> Beyond color, PV systems require **labels and placards**: DC/AC disconnect labels, maximum voltage, rapid-shutdown markings, and warning signage. Required labels and their wording are code-specific and change between editions, so confirm against the edition adopted by your AHJ. See [Building Codes & Standards Explained](codes-standards-overview.md).

## Grounding and Bonding Conductors

Grounding and bonding keep equipment surfaces at safe potential and give fault current a low-impedance path back to its source so overcurrent devices trip. Two conductors are central:

| Conductor | Abbrev. | Purpose |
|---|---|---|
| **Equipment Grounding Conductor** | **EGC** | Bonds metal enclosures, racking, and equipment together and back to the system ground, so a fault energizes a protective device rather than the equipment surface |
| **Grounding Electrode Conductor** | **GEC** | Connects the grounded system / equipment ground to the **grounding electrode** (ground rod, building steel, etc.), establishing the connection to earth |

Related concepts:

- **Bonding** is the act of joining metal parts together so they share a common potential; **grounding** connects that bonded system to earth.
- PV **module frames and racking** must be bonded, typically using listed **WEEBs** (washer-type bonding devices), listed grounding lugs, or integrated rail bonding, so the whole array is electrically continuous.
- EGC sizing is tied to the circuit's overcurrent device, and GEC sizing follows its own table. **Those sizing rules and the math are covered in [Solar Calculations & Formulas](calculations-formulas.md).**

> Improper or missing bonding is both a shock hazard and a code violation. Use only listed bonding hardware rated for outdoor use and dissimilar-metal contact (stainless hardware against aluminum rails, for example).

## Sources & Further Reading

- [NEC 690.8 Solar Conductor Sizing Guide (GreenLancer)](https://www.greenlancer.com/post/nec-690-8-solar-conductor-sizing)
- [How to Use NEC Table 310.16 for Conductor Ampacity (ExpertCE)](https://expertce.com/learn-articles/how-to-use-nec-table-310-16-ampacity/)
- [PV Connector Mating and Intermatability in NEC 2020 (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/pv-connector-mating-and-intermatability-in-nec-2020/)
- [Avoid Cross-mating of PV Connectors (Stäubli)](https://www.staubli.com/global/en/electrical-connectors/industries/renewable-energy/cross-connection.html)
- [Mitigating DC Connector Risks in PV Systems (Mayfield Renewables)](https://www.mayfield.energy/technical-articles/mitigating-dc-connector-risks-in-pv-systems/)
- [How Solar Power Works](how-solar-works.md) · [Solar System Components](system-components.md) · [Building Codes & Standards Explained](codes-standards-overview.md) · [Solar Calculations & Formulas](calculations-formulas.md)

*Disclaimer: This page is reference background only; verify all conductor types, ampacities, connector listings, and grounding requirements against the current code edition adopted by your local Authority Having Jurisdiction and product listing instructions, and consult a licensed professional before designing or installing PV wiring.*
