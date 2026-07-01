# Three-Phase Power & Service Connections

Almost every solar installation larger than a house touches **three-phase power**. Understanding single-phase vs. three-phase, the common service voltages, **wye vs. delta** configurations, and where on the electrical service a PV system is allowed to connect (**NEC Article 705**) is essential for sizing inverters, transformers, conductors, and overcurrent protection correctly.

This page covers the fundamentals of three-phase power, the service voltages you will encounter in the field, the difference between **supply-side (line-side)** and **load-side** connections, service and metering configurations, transformers, phase balancing and rotation, and a worked three-phase power example.

> **Key point:** Three-phase delivers constant total power with three conductors instead of needing oversized single-phase wiring, which is why it dominates commercial and utility-scale solar. Getting the **service voltage** and **connection point** right is what makes an interconnection both code-compliant and economical.

See also: [Grid & Interconnection Overview](grid-overview.md), [Anti-Islanding & Grid Protection](grid-protection.md), [Interconnection Studies & Queues](grid-studies-queues.md), [IEEE 1547 & Smart Inverters](grid-ieee1547.md).

## Single-Phase vs. Three-Phase

**Single-phase** power uses one alternating voltage waveform. Its instantaneous power pulses to zero twice per cycle, so it is fine for small loads but inefficient for large motors and high power transfer.

**Three-phase** power uses three voltage waveforms offset by 120 electrical degrees. Their instantaneous powers overlap so that the **total power is constant** (smooth), motors are self-starting and efficient, and a given amount of power moves on smaller conductors.

```
  Single-phase: one waveform           Three-phase: A, B, C at 120° apart
   V                                     V   A      B      C
   │   ╭─╮      ╭─╮                       │  ╭─╮   ╭─╮   ╭─╮
   │  ╱   ╲    ╱   ╲          →           │ ╱   ╲ ╱   ╲ ╱   ╲
  ─┼─╯─────╲──╯─────╲─ t                 ─┼╯──┐──╳──┐──╳──┐── t
   │        ╲╱                            │    ╲ ╱   ╲ ╱
   │                                      │     ╳     ╳
  Power pulses to zero               Sum of the three = constant power
```

Key relationships for a **balanced three-phase** system:

```
  Line-to-line voltage   V_LL = sqrt(3) * V_LN      (≈ 1.732 * V_LN)
  Three-phase real power  P    = sqrt(3) * V_LL * I_L * pf
  (V_LN = line-to-neutral voltage, I_L = line current, pf = power factor)
```

## Common Service Voltages

| Service | Phases | Line-to-line / line-to-neutral | Typical use |
|---|---|---|---|
| **120/240 V, 1Ø** | Single-phase, 3-wire | 240 V across, 120 V to neutral | Homes, small commercial |
| **208Y/120 V, 3Ø** | Three-phase wye, 4-wire | 208 V L-L, 120 V L-N | Small/medium commercial, multifamily |
| **480Y/277 V, 3Ø** | Three-phase wye, 4-wire | 480 V L-L, 277 V L-N | Large commercial/industrial, big PV |
| **480 V delta, 3Ø** | Three-phase delta, 3-wire | 480 V L-L (no neutral) | Industrial / motor loads |

Note the `sqrt(3)` relationship: `208 ≈ 1.732 × 120` and `480 ≈ 1.732 × 277`. The **277 V** and **480 V** levels dominate commercial PV because higher voltage means lower current for the same power — thinner, cheaper conductors and lower losses.

## Wye vs. Delta

The three windings (of a source or transformer) can be connected two ways:

```
        WYE (star) — 4 wires + neutral        DELTA — 3 wires, no neutral
              A                                       A
              │                                      ╱ ╲
              ●  V_LN = V_LL / sqrt(3)              ╱   ╲
             ╱│╲                                   B─────C
            ╱ │ ╲   (neutral at center)            V_LL only, no neutral
           B  N  C
```

| | **Wye (Y)** | **Delta (Δ)** |
|---|---|---|
| Neutral available | Yes (gives a second, lower voltage) | No |
| Voltages | Both L-L (`V_LL`) and L-N (`V_LL/√3`) | Only L-L |
| Common uses | Distribution, mixed loads needing neutral | Motor/industrial loads, some transmission |
| Grounding | Easy to ground the neutral point | Needs a grounding transformer for a ground reference |

Wye is preferred where loads need a neutral (e.g., 277 V lighting from a 480Y/277 service). Delta is common for motor loads. Grounding implications carry into protection — see [Anti-Islanding & Grid Protection](grid-protection.md).

## Where PV Connects: NEC Article 705

**NEC Article 705** governs the interconnection of power production sources. The two fundamental connection points are **supply-side (line-side)** and **load-side**.

```
  Utility ──► [ Meter ] ──► [ Main Service Disconnect ] ──► [ Busbar / loads ]
                  │                     │                          │
                  └── SUPPLY-SIDE ──────┘                          │
                      (line-side tap, NEC 705.11)                  │
                      between meter and main disconnect            │
                                                                   │
                                                  LOAD-SIDE ───────┘
                                                  (NEC 705.12, breaker in panel)
```

### Supply-Side / Line-Side Connection (NEC 705.11)

A **supply-side connection** taps the service conductors **between the utility meter and the main service disconnect**. Because it is ahead of the service disconnect, it is **not** subject to the load-side busbar (120%) calculations. It is the go-to method when a load-side connection won't fit within the existing panel's limits, and is common for larger commercial PV. It requires its own service-rated disconnect and overcurrent protection per the article.

### Load-Side Connection (NEC 705.12) and the 120% Rule

A **load-side connection** lands on the bus or a breaker **inside** the panel, downstream of the main disconnect, and must satisfy the **busbar ampacity** rules of 705.12. The most-used option is the **120% rule**:

```
  When the utility breaker and the PV breaker are at OPPOSITE ends
  of a busbar that carries loads:

     (125% of PV output current) + (rating of the busbar's main OCPD)
          must be  ≤  120% of the busbar ampacity
```

Worked example: a 200 A busbar protected by a 200 A main. `120% × 200 A = 240 A`. The main already uses 200 A, leaving `240 − 200 = 40 A` of headroom. The PV breaker must be `≤ 40 A` (and `125% × PV current ≤ 40 A`), so the PV inverter output current is limited to about 32 A on that bus.

> **Key point:** If the load-side 120% calculation does not leave enough headroom for the desired PV size, a **supply-side (705.11) connection** is the usual alternative — it bypasses the busbar limit by tapping ahead of the main disconnect.

## Service & Metering Configurations

- **Net metering (single bidirectional meter):** one meter spins/records both ways; common for behind-the-meter residential and small commercial.
- **Dual-meter / production metering:** a separate production meter records PV output for incentives or feed-in tariffs while the service meter records net usage.
- **Self-contained vs. CT-metered:** small services use self-contained meters; large services use **current transformers (CTs)** so the meter senses a scaled fraction of a large current.
- **Utility-scale plants** meter at the **point of interconnection** with revenue-grade metering and SCADA telemetry feeding the utility/RTO (see [Anti-Islanding & Grid Protection](grid-protection.md)).

## Transformers

Transformers match the PV system's voltage to the grid:

- **Step-up transformer:** raises inverter output (e.g., 480 V or medium voltage) up to the utility distribution or transmission voltage — universal at utility scale, where strings of inverters feed a collector system that steps up to medium voltage.
- **Step-down transformer:** lowers utility voltage to a usable service voltage for the site loads.
- **Pad-mount transformer:** a sealed, ground-mounted distribution transformer common at commercial and utility PV sites, providing the step-up/step-down between the site and the utility primary.

The transformer's **winding configuration** (e.g., grounded-wye/delta) affects grounding and protection and is fixed during the interconnection study.

## Balancing & Phase Rotation

- **Phase balancing:** loads and single-phase inverters should be distributed roughly evenly across phases A, B, and C. A badly **unbalanced** system overloads one phase, creates neutral current, and wastes capacity. Three-phase inverters inherently load all three phases evenly.
- **Phase rotation (sequence):** the order in which phases peak (A-B-C vs. A-C-B) must match the grid before paralleling. Wrong rotation runs motors backward and prevents proper synchronization. Three-phase inverters verify correct rotation and synchronism (synch-check, device 25) before closing onto the grid.

## Worked Three-Phase Power Example

A commercial PV system connects at **480Y/277 V** three-phase and the inverter delivers **80 A per line** at unity power factor.

```
  V_LL = 480 V,  I_L = 80 A,  pf = 1.0

  P = sqrt(3) * V_LL * I_L * pf
  P = 1.732 * 480 V * 80 A * 1.0
  P = 1.732 * 38,400
  P ≈ 66,510 W  ≈  66.5 kW (three-phase real power)

  Check via per-phase:  V_LN = 480 / 1.732 ≈ 277 V
  P = 3 * V_LN * I_L * pf = 3 * 277 * 80 * 1.0 ≈ 66,480 W  ✓ (same result)
```

Compare the current to a single-phase delivery of the same power at 240 V:
`I = 66,500 / 240 ≈ 277 A` — over three times the current, requiring far larger conductors. This is the practical reason three-phase at higher voltage dominates commercial and utility solar.

## Sources & Further Reading

- [Mayfield Renewables — Code Corner: NEC 705.11 Supply-Side Connections](https://www.mayfield.energy/technical-articles/code-corner-nec-section-70511-supply-side-connections/)
- [ExpertCE — Point of Connection Rules for PV Systems (NEC 705.12)](https://expertce.com/learn-articles/point-of-connection-pv-systems-nec-705-12/)
- [ExpertCE — NEC Article 705 Interconnection Explained](https://expertce.com/learn-articles/nec-article-705-interconnection-explained/)
- [GreenLancer — The 120% Rule for Solar: NEC 705.12 Guide](https://www.greenlancer.com/post/120-rule-for-solar)
- [Solar Builder — NEC 2020 705.11 Load and Supply Side Connections](https://solarbuildermag.com/news/nec-2020-705-11-load-and-supply-side-connections/)

---
*This page is educational reference material, not a substitute for the National Electrical Code or a licensed electrician/engineer; verify the adopted NEC edition and local amendments for your jurisdiction.*
