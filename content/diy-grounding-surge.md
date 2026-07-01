# DIY Grounding, Bonding & Surge Protection

Grounding and surge protection are the parts of a solar install most likely to be done wrong by a DIYer, and they are also the parts an inspector will scrutinize most closely. Done right, they protect people from shock, protect equipment from lightning and switching surges, and give ground-fault detection a reliable return path. Done wrong, they create a hidden hazard that may pass a casual glance but fail under fault or storm conditions.

This page explains the difference between grounding and bonding, how a PV grounding system is actually built, how to size the conductors, and where surge protective devices belong. It pairs with the [DIY Electrical Calculations](diy-electrical-calcs.md) page for the math, [Building Your Own System](diy-overview.md) for the big picture, the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md) for conductor and lug details, and [Residential Codes & Fire Requirements](residential-codes.md) for the code-adoption context.

> **SAFETY:** Grounding and bonding work involves conductors that may become energized during a fault. Turn off and lock out both AC and DC sources before touching bonding hardware, and treat every metal surface as potentially live until verified dead with a meter. Code section numbers below reference the National Electrical Code (NEC / NFPA 70). Your jurisdiction may enforce a different edition — confirm the adopted edition with your local Authority Having Jurisdiction (AHJ).

## Grounding vs. Bonding: definitions and why they matter

These two words are used interchangeably in casual speech, but the NEC treats them as distinct functions, and understanding the difference is the key to the whole subject.

- **Bonding** is connecting all the normally non-current-carrying metal parts together so they are at the same electrical potential. Racks, module frames, enclosures, conduit, and combiner boxes are all bonded together so that if a hot conductor faults to metal, every bonded surface rises to the same voltage and a low-impedance path carries fault current back to trip the breaker or fuse. Bonding is about **equalizing potential and clearing faults**.
- **Grounding** (more precisely, **grounding to earth**) is connecting that bonded metal system to the earth through a **grounding electrode** (a ground rod, the building's foundation steel, a water pipe, etc.). Grounding is about **stabilizing voltage to earth** and giving lightning and other high-voltage transients a path to dissipate.

> **Key distinction:** Bonding clears faults; earth grounding does **not** clear faults. Earth is far too high in resistance to carry enough current to trip a breaker. A system bonded but not earth-grounded can still clear a fault; a system earth-grounded but not properly bonded is dangerous. Do not confuse the two.

The conductors involved have specific names:

| Term | Abbrev. | What it does |
|------|---------|--------------|
| **Equipment Grounding Conductor** | **EGC** | Bonds equipment metal together and back to the system ground; carries fault current |
| **Grounding Electrode Conductor** | **GEC** | Connects the grounded system / bonding point to the grounding electrode (earth) |
| **Grounding Electrode** | GE | The rod, plate, or structure that physically contacts earth |
| **Main Bonding Jumper** | MBJ | The connection between neutral and ground made **once** at the service |
| **Bonding Jumper** | — | Any conductor that bonds two metal parts together (e.g., module-to-rail) |

## The PV grounding system

A grid-tied PV system has both a DC side and an AC side, and both must be grounded and bonded — but they share a single grounding system that ultimately ties to the existing service ground.

### Equipment grounding on the array

Every piece of exposed metal in the array must be bonded: module frames, mounting rails, and any metal enclosure. NEC **690.43** covers PV equipment grounding and recognizes several methods:

- **Integrated grounding hardware.** Many rail systems are listed and identified for bonding the rail to the module frame, and rail-to-rail, without a separate jumper. The listing (often under UL 2703) is what makes this legal — you cannot assume metal-on-metal contact bonds.
- **WEEBs (Washer, Electrical Equipment Bonding).** A small stainless star washer with sharp teeth that bite through the anodized aluminum coating to make a gas-tight bond between module frame and rail. One WEEB per module-to-rail connection where required by the listing.
- **Grounding lugs.** A listed lug (e.g., ILSCO, Burndy) bolted to the rail, terminating a bare copper EGC that jumps rail to rail and section to section. This is the most visible and inspector-friendly method.

> **Warning:** Do not mix a copper lug directly against bare aluminum rail without a listed bimetallic or tin-plated connection. **Galvanic corrosion** between dissimilar metals will destroy the bond over a few seasons. Use listed lugs rated for the metals in contact, and use anti-oxidant compound where the listing calls for it.

### DC grounding vs. AC grounding

- **DC side.** Modern residential PV uses **transformerless string inverters and microinverters** that are typically **ungrounded (non-isolated)** on the DC current-carrying conductors — there is no DC negative-to-ground bond. The DC **equipment** grounding (frames, rails, enclosures) is still fully required. Ground-fault detection lives inside the inverter. Older systems and some larger installs used a functionally grounded DC conductor with a ground-fault protection device; follow the inverter listing.
- **AC side.** The inverter output ties into the AC system, whose neutral is bonded to ground **exactly once** at the main service (the Main Bonding Jumper). Do not create a second neutral-ground bond at a subpanel or at the inverter — a second bond puts neutral current on the grounding system and is a common and dangerous DIY error.

### Tying it together

The array EGC runs down with the DC (or AC, for microinverters) conductors to the inverter/combiner, continues through the AC circuit to the main service panel, and the whole bonded system connects to earth through the **existing service grounding electrode system** via the GEC. You almost never create a separate, isolated ground for the PV — you extend and bond to the service ground.

## Grounding electrodes and the existing service ground

The building already has a **grounding electrode system** — typically a ground rod (or two), the concrete-encased electrode ("Ufer") in the foundation, and/or a metal water pipe, all bonded together per NEC **250.50**–**250.53**. Your PV equipment grounding bonds into this existing system; it does not get its own separate, unbonded electrode.

> **Rule:** If you drive a ground rod at a ground-mounted array or at the inverter, it must be **bonded back to the building's grounding electrode system** (NEC 250.50 / 250.53). An isolated, un-bonded rod creates a dangerous difference of potential and is a code violation. NEC 690.47 covers PV grounding electrode requirements; a supplemental electrode at the array is sometimes used for lightning but must still bond back.

## Lightning risk and surge protective devices (SPDs)

A rooftop or ground array is a large, elevated, wired structure — a natural collector for both direct lightning strikes (rare) and induced surges from nearby strikes and utility switching (common). Surge protection is cheap insurance for expensive inverters.

### SPD types

| Type | Where it goes | Notes |
|------|---------------|-------|
| **Type 1** | Line side of the main service disconnect (before the main breaker) | Rated to survive utility-side surges; may be installed without an OCPD |
| **Type 2** | Load side of the main disconnect (in or adjacent to the panel) | Most common residential SPD; protects branch circuits |
| **Type 3** | Point-of-utilization (plug strips) | Supplemental only; not a substitute for Type 1/2 |

NEC **230.67** now **requires** a Type 1 or Type 2 SPD on services supplying dwelling units, and the SPD must be an integral part of, or immediately adjacent to, the service equipment. This applies when service equipment is replaced as well. (The 2023 NEC expanded 230.67 to additional occupancy types such as dorms and guest rooms.) Verify the edition your AHJ enforces.

### DC vs. AC SPDs for PV

- **AC SPD.** Protects the inverter's AC output and the rest of the home. Install at the main panel (Type 2) and ideally a Type 1 at the service. NEC **705.12** interconnection and general **Article 690** requirements make AC surge protection standard practice on PV.
- **DC SPD.** Protects the inverter's DC input and the array. Install a **DC-rated** SPD (matched to the array's maximum system voltage, e.g., 600 V or 1000 V DC) in the combiner box or at the inverter DC input. **Never use an AC-rated SPD on the DC side** — DC arcs do not self-extinguish at a zero-crossing and an AC-rated device can fail catastrophically.

> **SAFETY:** SPDs sacrifice themselves over their life. Choose devices with a visible status indicator and check it periodically. A "dead" SPD offers no protection and gives no warning unless you look.

## Bonding: rooftop vs. ground-mount

**Rooftop:** The array bonds through the racking, and the racking's attachment does **not** count as a ground path — you still run a continuous EGC (bare copper or the wire-type EGC in the raceway). Penetrations must be flashed and sealed; do not rely on a lag bolt through the roof as a bonding means.

**Ground-mount:** Metal ground-mount structures are larger and more exposed to lightning. A supplemental grounding electrode (rod) at the array is common and often required, but as noted it **must bond back** to the building system. Bond every leg/rail run and keep the EGC continuous from the far end of the array to the inverter and on to the service.

## Common mistakes and inspection red flags

- **Isolated ground rod** at the array not bonded to the service ground (250.50/250.53).
- **Second neutral-ground bond** at a subpanel or inverter (only one MBJ, at the service).
- **Copper lug on bare aluminum** rail — galvanic corrosion; use listed/bimetallic connectors.
- **Relying on rail-to-rail metal contact** for bonding without listed hardware.
- **Undersized or missing EGC** — see sizing below; must meet 250.122.
- **AC-rated SPD on the DC side.**
- **WEEBs installed without torque** or on painted/coated surfaces that block the bite.
- **Broken EGC continuity** across an expansion splice or where a module was removed.

## EGC / GEC sizing (NEC 250.122) with a worked example

PV equipment grounding conductors are sized per NEC **690.45**, which points to **Table 250.122** based on the rating of the overcurrent device (OCPD) protecting the circuit. Where there is no OCPD in a PV source circuit, an assumed OCPD rated at the PV maximum circuit current is used to enter the table. The EGC is never smaller than **14 AWG**.

> **PV-specific relief:** Under 690.45, PV equipment grounding conductors do **not** have to be upsized for voltage-drop conductor increases the way general 250.122(B) would otherwise require. This is a real difference from ordinary branch circuits.

Simplified Table 250.122 (copper EGC):

| OCPD rating (A) | Copper EGC (min) |
|-----------------|------------------|
| 15 | 14 AWG |
| 20 | 12 AWG |
| 60 | 10 AWG |
| 100 | 8 AWG |
| 200 | 6 AWG |
| 300 | 4 AWG |

*(Aluminum EGCs are larger for the same rating; use the aluminum column of the actual table.)*

**Worked example — string inverter AC output:**

```
Given:
  Inverter continuous AC output current = 24 A
  AC circuit OCPD (breaker) sized at 125% of continuous:
      24 A x 1.25 = 30 A  ->  use 30 A breaker

Size the EGC:
  Enter Table 250.122 at the 30 A OCPD row.
  30 A -> 10 AWG copper EGC (the 15 A/20 A rows give 14/12 AWG;
          the next standard step covering 30 A is 10 AWG copper).

Result: run a 10 AWG copper EGC with this AC circuit.
No voltage-drop upsize of the EGC is required for PV (690.45).
```

**Worked example — GEC:** The GEC connecting the grounded system to the electrode is sized from NEC **250.66** (based on the largest ungrounded service/system conductor), not 250.122. For most residential PV that bonds into an existing service, the existing service GEC already satisfies this; you extend equipment grounding, not the electrode conductor. Where a separate electrode is added, size the bonding jumper to it per 250.166/250.53 as applicable.

> Always size from the **actual, current NEC table** for your adopted edition and conductor material. The values above are illustrative.

## ASCII grounding diagram

```
        ARRAY (modules + rails, all bonded via WEEBs/lugs)
        [PV]==[PV]==[PV]   <- module frames bonded to rail
          |     |     |
          +--EGC (bonded rail, continuous)--+
                                            |
                       DC SPD (DC-rated) -->[]   at combiner / inverter DC input
                                            |
                                     +--------------+
                                     |   INVERTER   |
                                     +--------------+
                                            |  AC out + EGC
                                            v
                             +-----------------------------+
                    Type 2   |        MAIN SERVICE         |
                    AC SPD ->[]       PANEL / SERVICE       |
                             |   [MBJ] neutral-ground bond  |  <- ONE bond only
                             +--------------+--------------+
                                            | GEC (250.66)
                                            v
                             ===== GROUNDING ELECTRODE =====
                             (ground rod / Ufer / water pipe,
                              all bonded together per 250.50)

   Type 1 SPD (optional/required) sits on the LINE side of the main disconnect.
   Every metal enclosure and the raceway are bonded into the EGC path.
```

## Sources & Further Reading

- [690.45 Size of Equipment Grounding Conductors (Electrical License Renewal)](https://www.electricallicenserenewal.com/Electrical-Continuing-Education-Courses/NEC-Content.php?sectionID=183.0)
- [Sizing Equipment Grounding Conductors per NEC 250.122 (Mayfield Renewables)](https://courses.mayfield.energy/blog/how-to-size-equipment-grounding-conductors-per-nec-250-122)
- [Grounding and Bonding for PV Systems: NEC 690 Part V (ExpertCE)](https://expertce.com/learn-articles/grounding-bonding-solar-pv-systems-nec/)
- [Guidelines for Designing Grounding Systems for Solar PV per the NEC (HeatSpring)](https://blog.heatspring.com/guidelines-for-designing-grounding-systems-for-solar-pv-installations-in-accordance-with-the-nec/)
- [230.67 Surge Protection (Electrical License Renewal)](https://www.electricallicenserenewal.com/Electrical-Continuing-Education-Courses/NEC-Content.php?sectionID=843)
- [Understanding the 2023 NEC Rules for Surge Protection (DITEK)](https://www.diteksurgeprotection.com/understanding-the-2023-nec-rules-for-surge-protection/)
- [NEC Code Requirements for Surge (Leviton)](https://leviton.com/products/commercial/surge-protection/nec-code-requirements-for-surge)

---
*Educational reference only. This is not a substitute for a licensed electrician, engineered stamped drawings, or your local AHJ's requirements. Always verify against the NEC edition adopted in your jurisdiction and obtain permits and inspections.*
