# DC & PV-Specific Hazards

Photovoltaics carry a hazard profile shared by almost no other electrical trade. A PV module is a light-driven current source: expose it to sunlight and it produces DC power the instant photons hit it, with no switch, breaker, or disconnect that can stop generation at the source. Combine that with high-voltage series strings, DC arcs that do not self-extinguish, and connectors that fail hot, and you have a set of hazards that demand PV-specific training. This article explains why PV is uniquely dangerous and how to work with it safely — complementing the general treatment in [Electrical Safety & Arc Flash](safe-electrical.md).

> **The core PV rule.** A PV array is energized whenever there is light — including moonlight and bright work lights in some cases. There is no "off" at the module. Treat every array as live in daylight unless you have covered it or confirmed rapid shutdown has reduced conductor voltage.

## Why PV Is Uniquely Hazardous

Ordinary electrical work lets you open a breaker and make a circuit dead. PV defeats that model in several ways at once.

| PV property | Why it is dangerous |
|---|---|
| **Modules energize with light** | No source-side switch; the array is a live generator all day |
| **Series voltages stack** | Each module adds voltage; strings reach 300–600 V residential, up to 1,000–1,500 V commercial/utility |
| **DC arcs sustain** | DC current has no zero-crossing, so an arc, once started, tends to keep burning |
| **Ground faults** | A single fault plus an undetected second fault can energize metal and defeat protection |
| **Hot connectors** | Mismatched or poorly crimped connectors overheat and can start fires |
| **Nighttime myth** | Bright ambient/work light can still produce a hazardous voltage on large arrays |

## Series Voltages Stack

PV modules are wired in **series strings** to raise voltage for efficient transmission and inverter input. Voltages **add**: ten 40-volt modules in series produce roughly 400 V open-circuit; commercial and utility strings routinely reach **1,000 V or 1,500 V DC**. These voltages are lethal, and unlike AC they do not pulse to zero — DC shock produces a sustained contraction that can prevent letting go and can throw a worker off a roof (see shock thresholds in [Electrical Safety & Arc Flash](safe-electrical.md)).

Practical implication: partially completed strings during install are still hazardous, and voltage climbs as you mate more connectors. Measure before you assume, and never bridge open string ends carelessly.

## DC Arc Flash and Arcing Faults

AC arcs tend to self-extinguish because AC current crosses zero 100–120 times per second. **DC current never crosses zero**, so a DC arc, once established, is far more likely to sustain and propagate — burning through insulation, connectors, and modules, and readily igniting a fire.

Two failure modes matter:

- **Series arc-fault** — a break in a current-carrying conductor (a cracked solder joint, a loose or damaged connector) where current continues to jump the gap, sustaining a hot arc in line with the string.
- **Parallel/ground arc-fault** — an arc between conductors or from a conductor to grounded metal.

Because DC arcs sustain, the NEC requires **DC arc-fault circuit protection** for PV circuits operating at 80 V or higher, and requires arc-fault detection designed to interrupt the string. For code detail, see [The National Electrical Code (NEC) & Solar](code-nec.md).

## Ground Faults

A **ground fault** is unintended current flow to ground, usually from insulation damage — abraded conductors, water intrusion, pinched wires under clamps. PV ground-fault risk has a subtle trap: a system can operate with one undetected fault, and it is a **second fault** that creates a dangerous current path, potentially energizing exposed metal (racking, module frames) and defeating the ground-fault detection that was relying on a single-fault model. Proper **grounding and bonding** of racking and equipment, plus functioning ground-fault protection, are essential — see [DIY Grounding, Bonding & Surge Protection](diy-grounding-surge.md).

## Hot Connectors and MC4 Cross-Mating

The humble PV connector (commonly "MC4-style") is one of the most common sources of PV fires, and the failure is almost always preventable.

> **Never cross-mate connectors from different manufacturers.** Connectors that look identical and are marketed as "MC4 compatible" often have different mechanical tolerances and metallurgy. Mating brand A to brand B creates a joint prone to moisture ingress, oxidation, high resistance, overheating, arcing, and fire.

Field investigations repeatedly identify **mismatched DC connectors** as a root cause of PV fires: connections loosen, resistance rises, the joint runs hot, and eventually arcs ([Stäubli — Avoid Cross-Mating of PV Connectors](https://www.staubli.com/global/en/electrical-connectors/industries/renewable-energy/cross-connection.html); [PVEL/HelioVolta — Ultimate Safety Guide for Solar PV Connectors](https://www.pvel.com/wp-content/uploads/PVEL-HelioVolta-Ultimate-Safety-Guide-for-Solar-PV-Connectors-Feb-2022.pdf)).

Good connector practice:

- Use connectors from a **single manufacturer** throughout a circuit; verify certified compatibility if you cannot.
- Use the manufacturer's **correct crimp tool and die**; a bad crimp is a future hot spot.
- Confirm connectors are **fully seated** and hear/feel the latch.
- Respect the connector's **voltage and current rating** (e.g., 1,000 or 1,500 V DC) — never exceed it.
- During O&M, **thermal-image** connectors and combiners; a hot connector is a fire waiting to start.

## Rapid Shutdown: A Firefighter-Safety Measure

Because an array cannot be switched off at the source, the NEC introduced **rapid shutdown** to protect firefighters and first responders who may need to work on or around a roof with a live array.

Under NEC **690.12**, initiating rapid shutdown must reduce controlled conductors to safe levels quickly:

| Zone | Voltage limit after shutdown | Time |
|---|---|---|
| Outside the array boundary | **30 V** or less | within 30 s |
| Inside the array boundary | **80 V** or less | within 30 s |

This is why **module-level electronics** (microinverters or DC optimizers with rapid-shutdown functionality) are common on buildings: they let the conductors between modules drop to a safe voltage on command, so a firefighter performing roof ventilation is not exposed to full string voltage ([GreenLancer — Solar Rapid Shutdown Requirements NEC 690.12](https://www.greenlancer.com/post/solar-rapid-shutdown-requirements)). For the code framework, see [The National Electrical Code (NEC) & Solar](code-nec.md) and [NFPA Standards & Solar](code-nfpa.md).

> **Rapid shutdown protects responders, not necessarily you.** It reduces conductor voltage between modules, but each module can still produce a hazardous voltage across its own terminals, and the DC inside the array boundary may remain up to 80 V. Rapid shutdown is a control, not a guarantee that the roof is dead.

## Safe Module Handling and Commissioning

Much PV risk is removed simply by sequencing the work so live circuits are minimized.

**Handling and installation:**

- Modules are heavy and act like **sails** in wind — use two-person lifts and avoid handling in gusty conditions.
- Do not leave string ends open and exposed where they can arc or contact grounded metal.
- Keep the **DC side unmated** as long as practical; mate connectors only when ready, working from a known sequence.
- Wear insulating gloves and eye protection when landing DC conductors; treat all string conductors as live.

**De-energizing for work:**

- **Cover the array** with opaque material to reduce output when meaningful DC de-energization is required; there is no other way to truly stop generation.
- Use **rapid shutdown** to lower conductor voltage, then still verify with a meter.
- Apply full **LOTO** to the AC side and to any battery/ESS, and beware AC **backfeed** (see [Electrical Safety & Arc Flash](safe-electrical.md)).

**Commissioning:**

- Verify **polarity** before energizing — reversed strings can damage equipment and create hazards.
- Measure **open-circuit voltage (Voc)** per string and confirm it matches design; an out-of-range value signals a wiring error.
- Confirm **ground-fault and arc-fault protection** are functional.
- Torque terminations to spec and document; loose terminations become hot spots.

## Sources & Further Reading

- OSHA — [Green Job Hazards: Solar Energy — Electrical](https://www.osha.gov/green-jobs/solar/electrical)
- Stäubli — [Avoid Cross-Mating: Only Link Same-Manufacturer PV Connectors](https://www.staubli.com/global/en/electrical-connectors/industries/renewable-energy/cross-connection.html)
- Kiwa PVEL / HelioVolta — [The Ultimate Safety Guide for Solar PV Connectors (PDF)](https://www.pvel.com/wp-content/uploads/PVEL-HelioVolta-Ultimate-Safety-Guide-for-Solar-PV-Connectors-Feb-2022.pdf)
- GreenLancer — [Solar Rapid Shutdown Requirements: NEC 690.12 for Installers](https://www.greenlancer.com/post/solar-rapid-shutdown-requirements)
- Fluke — [How to Find and Repair Ground Faults in Solar PV Systems (PDF)](https://media.fluke.com/b5da072b-a796-4f53-b93f-b10600818eac_original%20file.pdf)
- Related pages: [Solar Safety Overview](safe-overview.md) · [Electrical Safety & Arc Flash](safe-electrical.md) · [Battery & Energy-Storage Safety](safe-battery.md) · [The National Electrical Code (NEC) & Solar](code-nec.md) · [NFPA Standards & Solar](code-nfpa.md) · [DIY Grounding, Bonding & Surge Protection](diy-grounding-surge.md)

> **Safety disclaimer.** This article is educational only and is not a substitute for PV-specific hands-on training or the judgment of a qualified person. PV arrays produce lethal DC voltage whenever exposed to light, and DC arcing faults can sustain and cause fire. Only trained, qualified, and authorized persons should work on PV DC circuits, and only in accordance with current OSHA standards, NFPA 70E, the NEC, and manufacturer instructions. Always treat arrays as energized in daylight, use manufacturer-matched connectors and tools, and verify de-energization with a properly rated meter. When in doubt, stop work and consult a qualified PV professional.
