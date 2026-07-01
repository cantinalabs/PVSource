# DIY Electrical Calculations

This page walks through the electrical math behind a do-it-yourself solar install: how series and parallel wiring change voltage and current, how to pick a system voltage, how to calculate **voltage drop**, size **conductors** and **overcurrent protection**, work out **conduit fill**, size the **equipment grounding conductor (EGC)**, and size a **battery bank and charge controller**. Every section includes worked examples with the arithmetic shown.

This is part of the **Build It Yourself** series — start with [Building Your Own System](diy-overview.md), and see the platform-specific guides for [RV, Van & Mobile Solar](diy-rv-van.md) and [Ground-Mount & Pole-Mount](diy-ground-mount.md). For the general theory behind these formulas, see [Solar Calculations & Formulas](calculations-formulas.md).

> **Educational reference only.** The National Electrical Code (NEC / NFPA 70) is adopted, amended, and enforced locally. Article and table numbers below reference recent editions, but you must use the **NEC edition adopted by your Authority Having Jurisdiction (AHJ)** and verify final designs with a licensed electrician. Table values shown are representative — read them out of your adopted code book, not from this page.

## Series vs. Parallel Wiring

How you interconnect modules (and batteries) sets the **voltage** and **current** your wiring must carry. This is the single most important early decision because it drives wire size, fuse size, and voltage drop.

### The rules

- **Series** (string): connect positive of one module to negative of the next. **Voltages add; current stays the same.**
- **Parallel**: connect all positives together and all negatives together. **Currents add; voltage stays the same.**
- **Series-parallel**: combine both to hit a target voltage and current.

```
SERIES:    V_total = V1 + V2 + ... + Vn        I_total = I (one module)
PARALLEL:  I_total = I1 + I2 + ... + In        V_total = V (one module)
POWER:     P_total = P1 + P2 + ... (same either way, for identical modules)
```

### Worked example — same power, very different current

Four identical 400 W modules, each with **Vmp = 40 V** and **Imp = 10 A** (so 40 × 10 = 400 W each, 1600 W total).

```
ALL IN SERIES (4S):
  V = 40 + 40 + 40 + 40 = 160 V
  I = 10 A
  P = 160 V × 10 A = 1600 W

ALL IN PARALLEL (4P):
  V = 40 V
  I = 10 + 10 + 10 + 10 = 40 A
  P = 40 V × 40 A = 1600 W

TWO STRINGS OF TWO (2S2P):
  Each string: V = 80 V, I = 10 A
  Two strings parallel: V = 80 V, I = 20 A
  P = 80 V × 20 A = 1600 W
```

Same 1600 W three ways, but the current is **10 A, 40 A, or 20 A**. The 40 A parallel array needs far heavier copper than the 10 A series array for the same wire run.

> **Rule of thumb:** Higher voltage / lower current = smaller, cheaper wire and less voltage drop. Series your modules as much as your charge controller's or inverter's **maximum input voltage** allows (always check the cold-weather Voc — see [Solar Calculations & Formulas](calculations-formulas.md)).

## Choosing System Voltage (12 / 24 / 48 V)

In off-grid and mobile DC systems you also choose a **battery / bus voltage**. For a given load **power**, current is inversely proportional to voltage: `I = P / V`. Double the voltage and you halve the current — and current is what determines wire size and voltage drop.

### Worked example — 1200 W load at three bus voltages

```
I = P / V

12 V system:  I = 1200 / 12 = 100 A
24 V system:  I = 1200 / 24 =  50 A
48 V system:  I = 1200 / 48 =  25 A
```

The 12 V system draws **four times** the current of the 48 V system. Because voltage-drop and resistive (I²R) losses scale with current, the 12 V system needs roughly 4× the copper cross-section to hold the same percentage drop over the same distance.

| Bus voltage | Current for 1200 W | Relative wire size for equal Vd% | Typical use |
|---|---|---|---|
| 12 V | 100 A | ~4× (largest) | Small RV/van, single panel |
| 24 V | 50 A | ~2× | Mid-size van/cabin |
| 48 V | 25 A | ~1× (smallest) | Whole-home off-grid, large rigs |

> **Rule of thumb:** Go **48 V** for any system above roughly 2–3 kW or with long DC runs. Reserve **12 V** for small mobile systems where most appliances are natively 12 V. See [RV, Van & Mobile Solar](diy-rv-van.md) for the mobile-specific trade-offs.

## Voltage Drop

**Voltage drop (Vd)** is the voltage lost to wire resistance between source and load. Too much drop wastes energy, dims/weakens loads, and can keep batteries from fully charging. The NEC notes voltage-drop targets in informational notes (e.g., 210.19, 215.2) rather than mandating them: keep **branch circuits ≤ 3%** and **feeder + branch combined ≤ 5%**. For DC solar charging circuits, designers often target **≤ 2%** or even ≤ 1% to preserve charge-controller performance.

### Two equivalent formula forms

```
K-CONSTANT (circular-mils) METHOD:
  Vd = (2 × K × I × L) / cmil          (single-phase / DC, 2 = both legs)
  Vd = (1.732 × K × I × L) / cmil      (three-phase)

  K   = resistivity constant = 12.9 for copper, 21.2 for aluminum
        (ohms per circular-mil-foot × 1000, at ~75°C)
  I   = current in amps
  L   = ONE-WAY length of the run in feet
  cmil= conductor cross-section in circular mils (from a wire table)

WIRE-RESISTANCE METHOD (using NEC Chapter 9 Table 8/9 ohms per 1000 ft):
  Vd = 2 × L × I × R / 1000            (single-phase / DC)
  Vd = 1.732 × L × I × R / 1000        (three-phase)

  R = conductor resistance in ohms per 1000 ft
  L = one-way length in feet
```

Both forms give the same answer; the K form needs the wire's **circular-mil area**, the resistance form needs the wire's **ohms/1000 ft**. Express drop as a percentage: `Vd% = (Vd / V_source) × 100`.

### Copper reference data (representative)

| AWG | Circular mils (cmil) | Resistance (ohms/1000 ft, ~75°C) |
|---|---|---|
| 14 | 4,110 | 3.14 |
| 12 | 6,530 | 1.98 |
| 10 | 10,380 | 1.24 |
| 8 | 16,510 | 0.778 |
| 6 | 26,240 | 0.491 |
| 4 | 41,740 | 0.308 |
| 2 | 66,360 | 0.194 |
| 1/0 | 105,600 | 0.122 |
| 2/0 | 133,100 | 0.0967 |
| 4/0 | 211,600 | 0.0608 |

> Values approximate NEC Chapter 9, Table 8 (DC resistance) and standard AWG areas. Use your code edition's tables for final work; AC circuits with large conductors should use **Table 9** (which includes reactance).

### Worked example A — low-voltage DC (12 V, long run)

A 12 V system feeds a 10 A load 25 ft away (so a 25 ft one-way run). Target ≤ 3% drop. Try **10 AWG** copper.

```
Allowable Vd = 3% × 12 V = 0.36 V

K-constant method, 10 AWG cmil = 10,380:
  Vd = (2 × 12.9 × 10 × 25) / 10,380
     = (2 × 12.9 = 25.8)
     × 10 = 258
     × 25 = 6,450
     ÷ 10,380 = 0.621 V

  Vd% = 0.621 / 12 = 5.18%   -> TOO HIGH (> 3%)
```

10 AWG fails. Step up to **6 AWG** (cmil = 26,240):

```
  Vd = (2 × 12.9 × 10 × 25) / 26,240
     = 6,450 / 26,240 = 0.246 V
  Vd% = 0.246 / 12 = 2.05%   -> OK (< 3%)
```

Cross-check with the resistance method, 6 AWG = 0.491 ohms/1000 ft:

```
  Vd = 2 × 25 × 10 × 0.491 / 1000
     = (2 × 25 = 50) × 10 = 500 × 0.491 = 245.5 ÷ 1000 = 0.246 V   (matches)
```

This is exactly why low-voltage DC eats copper: a modest 10 A load at 12 V over 25 ft already needs **6 AWG** just for voltage drop, even though 6 AWG's ampacity could carry 55 A.

### Worked example B — 240 V AC inverter output

A 5,000 W, 240 V single-phase inverter feeds a subpanel 80 ft away. Target ≤ 3% (feeder).

```
Load current:  I = P / V = 5000 / 240 = 20.8 A
Allowable Vd = 3% × 240 = 7.2 V

Try 10 AWG copper (cmil = 10,380), one-way L = 80 ft:
  Vd = (2 × 12.9 × 20.8 × 80) / 10,380
     = 2 × 12.9 = 25.8
     × 20.8 = 536.6
     × 80 = 42,930
     ÷ 10,380 = 4.14 V
  Vd% = 4.14 / 240 = 1.72%   -> OK (< 3%)
```

The same 20 A at 240 V drops only 1.7% over 80 ft, while 10 A at 12 V dropped 5% over 25 ft. **Higher voltage tolerates far longer runs** with the same wire.

> **Watch the load current vs. drop current.** Size **ampacity** for the NEC continuous-load current (below), but compute **voltage drop** using the actual operating current and the longest one-way run.

## Conductor / Wire Sizing & Ampacity

Two separate checks decide wire size — take the **larger** result:

1. **Ampacity** — the conductor must carry the circuit's continuous current with NEC margins, after temperature and conduit-fill derates.
2. **Voltage drop** — the conductor must hold your Vd% target over the run (above).

### Ampacity baseline — NEC Table 310.16

Table 310.16 (formerly 310.15(B)(16)) gives allowable ampacities at 30°C (86°F) ambient with no more than three current-carrying conductors. Use the **terminal temperature column** your equipment is rated for — most field terminations are **75°C**.

| AWG (Cu) | 60°C | 75°C | 90°C |
|---|---|---|---|
| 14 | 15 | 20 | 25 |
| 12 | 20 | 25 | 30 |
| 10 | 30 | 35 | 40 |
| 8 | 40 | 50 | 55 |
| 6 | 55 | 65 | 75 |
| 4 | 70 | 85 | 95 |
| 2 | 95 | 115 | 130 |
| 1/0 | 125 | 150 | 170 |
| 2/0 | 145 | 175 | 195 |
| 4/0 | 195 | 230 | 260 |

> Note the small-conductor rule (240.4(D)): even though 14/12/10 AWG show higher ampacities at 75/90°C, overcurrent protection is generally limited to **15 A (14 AWG), 20 A (12 AWG), 30 A (10 AWG)**. Representative values — confirm in your adopted edition.

### The PV 125% × 125% rule (NEC 690.8)

PV source/output circuits are **continuous loads** and the sun can exceed standard test conditions, so NEC 690.8 applies **two** 125% factors:

```
Step 1 (690.8(A)) — maximum circuit current:
  I_max = 1.25 × Isc            (Isc = sum of parallel-string short-circuit currents)

Step 2 (690.8(B)) — minimum conductor ampacity (continuous load):
  I_min = 1.25 × I_max = 1.25 × 1.25 × Isc = 1.5625 × Isc  (~156% of Isc)
```

The conductor's **ampacity after derating** must be ≥ the 690.8(B) result, AND the conductor's ampacity at 690.8(A) current must clear the temperature/fill derates.

### Temperature & conduit-fill adjustment (NEC 310.15)

Two correction factors reduce ampacity. Apply both to the table ampacity:

```
Adjusted ampacity = Table ampacity × (temp correction) × (conduit-fill adjustment)
```

Representative factors (read exact values from your code edition):

| Ambient °C (90°C wire) | Temp correction |
|---|---|
| 26–30 | 1.00 |
| 36–40 | 0.91 |
| 41–45 | 0.87 |
| 51–55 | 0.76 |
| 61–70 | 0.58 |

| # current-carrying conductors in raceway | Fill adjustment |
|---|---|
| 4–6 | 0.80 |
| 7–9 | 0.70 |
| 10–20 | 0.50 |
| 21–30 | 0.45 |

> **Rooftop conduit gets hot.** Earlier editions added a rooftop temperature adder (310.15(B)(3)(c)); recent editions revised it. Always include a realistic ambient for sun-exposed conduit (often 40–60°C+), then apply the 90°C correction factor even when sizing to 75°C terminals.

### Worked example — sizing a PV source-circuit conductor

Two parallel strings, each module **Isc = 11 A**, so array **Isc = 22 A**. Conductors run in conduit on a hot roof: design ambient **45°C**, and **6 current-carrying conductors** share the raceway. 90°C-rated conductors (e.g., PV wire / THWN-2), 75°C terminals.

```
Step 1 — 690.8(A) max current:
  I_max = 1.25 × Isc = 1.25 × 22 = 27.5 A

Step 2 — 690.8(B) minimum ampacity (continuous):
  I_min = 1.25 × 27.5 = 34.375 A   (this is the ampacity the conductor must show)

Try 10 AWG, 90°C column = 40 A. Apply derates:
  Temp (45°C, 90°C wire) = 0.87
  Fill (6 conductors)    = 0.80
  Adjusted = 40 × 0.87 × 0.80 = 27.84 A

  27.84 A < 34.375 A required  -> 10 AWG FAILS

Try 8 AWG, 90°C column = 55 A:
  Adjusted = 55 × 0.87 × 0.80 = 38.28 A
  38.28 A > 34.375 A required  -> 8 AWG OK on ampacity

Final check: also confirm the 75°C terminal ampacity of 8 AWG (50 A)
exceeds the 690.8(A) current (27.5 A): 50 ≥ 27.5  -> OK.
```

Result: **8 AWG** for ampacity. Now also run the voltage-drop check for the actual run length and keep the **larger** of the two.

## Overcurrent Protection (OCPD)

Fuses and breakers protect the **conductor** (and sometimes equipment). For solar, OCPD is sized per **NEC 690.9** and the general rules of **240.4 / 240.6**.

### Sizing the OCPD

```
OCPD rating ≥ 1.25 × continuous current (690.9 / 690.8(A))
  For a PV source circuit:  OCPD ≥ 1.25 × (1.25 × Isc) = 1.5625 × Isc
Then round UP to the next standard size (240.6):
  15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125...
And the OCPD must not exceed the conductor's derated ampacity.
```

### Worked example — series fuse for parallel strings

A combiner has **4 parallel strings**, each module **Isc = 10 A**, module series-fuse rating (from datasheet) **15 A**.

```
Per-string OCPD (690.9):
  Min = 1.5625 × 10 = 15.6 A -> round UP to 20 A standard

  But the module datasheet max series fuse = 15 A.
  The fuse must NOT exceed the module's listed series-fuse rating.
  -> Use 15 A per string (the lower limit governs).

Why series (per-string) fuses are needed:
  With 4 strings, a fault in one string can be back-fed by the
  other 3 strings: 3 × 10 A = 30 A through the faulted string.
  Each module's 15 A series fuse must clear that back-feed current.
```

> **Three or more parallel strings almost always need per-string (series) overcurrent protection.** Two strings can usually skip it because no string can be over-driven beyond its rating, but verify against 690.9 in your edition.

### DC-rated devices and battery circuits

- **Use DC-rated OCPD on DC circuits.** A breaker/fuse rated only for AC will not safely interrupt a DC arc (DC has no zero-crossing). PV fuses are typically rated 600 VDC or 1000 VDC.
- **Battery-to-inverter / battery-to-bus** circuits carry huge currents at low voltage. Protect them with a **DC-rated class-T, ANL, or MEGA fuse** sized just above the continuous current and within the conductor ampacity. Class-T fuses have high interrupt ratings (e.g., 20,000 A) suited to large lithium banks.

```
Worked: 3000 W inverter on a 24 V bank, surge factor included.
  Continuous I = 3000 / 24 = 125 A
  With inverter efficiency ~90%: 125 / 0.90 = ~139 A
  Add headroom and choose fuse <= cable ampacity:
    -> 175 A or 200 A class-T / ANL, with cable (e.g., 2/0) rated above it.
```

## Conduit Fill

When conductors share a raceway, NEC **Chapter 9, Table 1** limits how much of the conduit's cross-sectional area the wires may fill:

| # of conductors | Max fill |
|---|---|
| 1 conductor | 53% |
| 2 conductors | 31% |
| 3 or more | 40% |

Conductor and conduit areas come from **Chapter 9, Tables 4 (conduit area) and 5 (conductor area)**. Work in square inches.

### Worked example — five conductors in EMT

Five **8 AWG THWN-2** conductors (three current-carrying plus extras). From Table 5, THWN-2 8 AWG ≈ **0.0366 in²** each.

```
Total conductor area = 5 × 0.0366 = 0.1830 in²

Because there are 3+ conductors, max fill = 40%.
Required conduit interior area >= 0.1830 / 0.40 = 0.4575 in²

From Table 4 (40% column), look up trade sizes:
  1/2" EMT  40% area ≈ 0.122 in²  -> too small
  3/4" EMT  40% area ≈ 0.213 in²  -> too small
  1"   EMT  40% area ≈ 0.346 in²  -> too small
  1-1/4" EMT 40% area ≈ 0.598 in² -> OK (0.598 >= 0.4575)

Result: 1-1/4" EMT.
```

> Table 4 already lists the **40% allowable area** per trade size — compare your total conductor area directly to that column. Representative areas shown; use your code edition's Tables 4 and 5.

## Grounding & EGC Sizing

The **equipment grounding conductor (EGC)** bonds metal parts and provides a fault-clearing path. Size it from the **rating of the overcurrent device** protecting the circuit, per **NEC Table 250.122**. PV-specific grounding/bonding is in **690.45 / 690.43**.

| OCPD rating (A) | Copper EGC (AWG) | Aluminum EGC (AWG) |
|---|---|---|
| 15 | 14 | 12 |
| 20 | 12 | 10 |
| 60 | 10 | 8 |
| 100 | 8 | 6 |
| 200 | 6 | 4 |
| 300 | 4 | 2 |
| 400 | 3 | 1 |

### Worked example — EGC for a 40 A inverter circuit

```
Circuit OCPD = 40 A breaker.
Table 250.122: next listed rating at/above 40 A is 60 A -> 10 AWG Cu EGC.

(For 40 A, the 60 A row governs because 40 A falls in the 25–60 A band
that maps to 10 AWG copper.)
```

> **If you upsize conductors for voltage drop, you may have to upsize the EGC proportionally** (250.122(B)) — by the same ratio the ungrounded conductors were increased in circular-mil area. PV array bonding and grounding-electrode conductors have additional rules (690.45–690.47); verify in your edition.

## Battery Bank & Charge-Controller Sizing

### Battery bank — from energy to amp-hours

```
1) Daily energy:  Wh/day = (sum of loads in W × hours/day)
2) Days of autonomy desired:  D
3) Usable energy needed:  Wh_needed = Wh/day × D
4) Account for depth of discharge (DoD):
     Wh_bank = Wh_needed / DoD
5) Convert to amp-hours at bank voltage:
     Ah = Wh_bank / V_bank
```

DoD guidance: lead-acid ~50% (to preserve cycle life), LiFePO4 ~80–100%.

### Worked example — 48 V LiFePO4 bank

```
Loads = 2,000 Wh/day, want 2 days autonomy, LiFePO4 DoD = 0.80, bank = 48 V.

Wh_needed = 2000 × 2 = 4,000 Wh
Wh_bank   = 4000 / 0.80 = 5,000 Wh
Ah        = 5000 / 48 = 104 Ah

-> Round up to a standard 48 V, 100–120 Ah battery (e.g., one 100 Ah
   module plus margin, or 2 × 50 Ah). Add margin for inverter losses
   and cold-temperature derate.
```

Compare to lead-acid at 50% DoD:

```
Wh_bank = 4000 / 0.50 = 8,000 Wh
Ah      = 8000 / 48 = 167 Ah   (60% more capacity for the same usable energy)
```

### Charge-controller amperage — MPPT vs. PWM

```
Controller output current ≈ Array Watts / Battery Voltage  (MPPT)
PWM passes array CURRENT through (output ≈ array Imp), so:
  PWM output current ≈ array Imp (Vmp is "wasted" down to battery V)
```

### Worked example — MPPT vs. PWM for an 800 W array

```
Array: 800 W, Vmp = 72 V, Imp = 11.1 A, charging a 24 V bank.

MPPT (converts excess voltage into current):
  Output I ≈ 800 / 24 = 33.3 A
  Add 25% margin: 33.3 × 1.25 = 41.6 A -> 50 A MPPT controller

PWM (no conversion; output current ≈ array Imp):
  Output I ≈ 11.1 A only
  Power actually delivered ≈ 24 V × 11.1 A = 266 W  (huge loss!)
  PWM would waste ~67% of this high-Vmp array.
```

> **Match the controller to the array voltage.** PWM only makes sense when the array Vmp is close to the battery voltage (e.g., a nominal "12 V" panel on a 12 V bank). For high-Vmp arrays or series strings, **MPPT** recovers the extra voltage as charging current. Size the MPPT controller's amp rating at **≥ 1.25 × (array W / bank V)**.

## Sources & Further Reading

- [NEC 690.8 Solar Conductor Sizing Guide — GreenLancer](https://www.greenlancer.com/post/nec-690-8-solar-conductor-sizing)
- [Sizing PV Conductors & OCPD per NEC Article 690 — ExpertCE](https://expertce.com/learn-articles/sizing-pv-conductors-ocpd-nec-690/)
- [How to Use NEC Table 310.16 for Conductor Ampacity — ExpertCE](https://expertce.com/learn-articles/how-to-use-nec-table-310-16-ampacity/)
- [How to Calculate Voltage Drop: NEC Formula & Examples — ExpertCE](https://expertce.com/learn-articles/how-to-calculate-voltage-drop/)
- [Sizing Equipment Grounding Conductors with NEC Table 250.122 — ExpertCE](https://expertce.com/learn-articles/sizing-grounding-conductors-nec-250-122/)
- [Conduit Sizing for Solar Installations — Conduit Fill Calculator](https://conduit-fill-calculator.com/blog/guides/conduit-sizing-for-solar-installations.html)
- [NFPA 70, National Electrical Code (purchase / free read access)](https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70)
- Related on this site: [Building Your Own System](diy-overview.md) · [RV, Van & Mobile Solar](diy-rv-van.md) · [Ground-Mount & Pole-Mount](diy-ground-mount.md) · [Solar Calculations & Formulas](calculations-formulas.md)

> **Disclaimer:** This material is educational and for reference only. It does not replace the **NEC edition adopted by your AHJ**, local amendments, manufacturer instructions, or the judgment of a **licensed electrician**. Verify every value and calculation against your adopted code and have your design reviewed before energizing.
