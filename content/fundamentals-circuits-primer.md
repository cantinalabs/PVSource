# Electricity & Circuits Primer

This page builds the electrical foundation the rest of the site relies on. If terms like **voltage**, **current**, **series string**, or **kilowatt-hour** feel fuzzy, start here. Everything is kept plain-language but electrically correct, with tiny worked examples you can check on a calculator. Once these ideas click, pages like [How Solar Power Works](how-solar-works.md), the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md), and [Solar Calculations & Formulas](calculations-formulas.md) will read much more easily.

## The Three Core Quantities

Almost all basic electrical reasoning comes down to three quantities and how they relate.

| Quantity | Symbol | Unit | Unit symbol | Plain-language meaning |
|---|---|---|---|---|
| **Voltage** | `V` | volt | V | The "pressure" or push that drives charge |
| **Current** | `I` | ampere (amp) | A | The rate of charge flow |
| **Resistance** | `R` | ohm | Ω | How much the path opposes flow |

A common analogy is water in a pipe:

- **Voltage** is like the water pressure.
- **Current** is like the flow rate (litres per second).
- **Resistance** is like the narrowness of the pipe.

> Higher pressure (voltage) pushes more flow (current). A narrower pipe (higher resistance) allows less flow for the same pressure. That single sentence is most of what Ohm's law says.

### Charge, the thing that actually moves

Underneath current is **electric charge**, measured in **coulombs (C)**. One ampere is defined as **one coulomb per second**. You rarely need coulombs directly in solar work, but it explains the units: an amp is a *rate*, just like "kilometres per hour" is a rate of distance.

## Ohm's Law: `V = I × R`

The relationship between the three core quantities is **Ohm's law**:

```
V = I × R          (volts = amps × ohms)
```

It can be rearranged three ways:

```
V = I × R
I = V / R
R = V / I
```

**Worked example 1 — find the current.**
A 12 V battery is connected across a 6 Ω resistor.

```
I = V / R = 12 V / 6 Ω = 2 A
```

**Worked example 2 — find the resistance.**
A load draws 0.5 A when 120 V is applied.

```
R = V / I = 120 V / 0.5 A = 240 Ω
```

**Worked example 3 — find the voltage drop.**
A wire carries 10 A and has 0.2 Ω of resistance.

```
V = I × R = 10 A × 0.2 Ω = 2 V   (dropped/wasted in the wire)
```

That last example is why fat wires matter: resistance in the cable "steals" voltage and turns it into heat. See the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md) for sizing conductors to keep this loss small.

## Power: `P = V × I`

**Power** is the rate at which energy is delivered or used. Its unit is the **watt (W)**.

```
P = V × I          (watts = volts × amps)
```

Combined with Ohm's law, you get two handy alternates:

```
P = I² × R         (useful for heat lost in a wire)
P = V² / R
```

**Worked example 4.**
A panel outputs 30 V at 8 A.

```
P = V × I = 30 V × 8 A = 240 W
```

**Worked example 5 — heat in a wire.**
The wire from example 3 carried 10 A through 0.2 Ω.

```
P = I² × R = (10 A)² × 0.2 Ω = 100 × 0.2 = 20 W lost as heat
```

> **Key point:** Wire losses grow with the *square* of current. Doubling the current quadruples the heat. This is the core reason high-voltage/low-current transmission and high-voltage PV strings are efficient.

## DC vs AC

Electricity comes in two flavours defined by how the current behaves over time.

### Direct current (DC)

In **direct current**, charge flows steadily in one direction. Voltage holds a roughly constant value. Batteries, solar panels, and most electronics internally run on DC.

```
Voltage
  |________________________   (DC: flat, one direction)
  |
  +------------------------> time
```

### Alternating current (AC)

In **alternating current**, the voltage swings smoothly positive and negative many times per second, tracing a **sine wave**. The grid and household outlets are AC.

```
Voltage
   /\      /\      /\
  /  \    /  \    /  \        (AC: sine wave, reverses direction)
 /    \  /    \  /    \
------\/------\/------\/---> time
```

- **Frequency** is how many full cycles happen per second, measured in **hertz (Hz)**. North America uses **60 Hz**; much of the world uses **50 Hz**.
- **RMS (root-mean-square) voltage** is the "effective" value used for AC. A "120 V" outlet is 120 V RMS; its actual peak is about `120 × 1.414 ≈ 170 V`. RMS is defined so that an AC voltage delivers the same heating power as a DC voltage of the same number.

Solar panels produce DC. An **inverter** converts that DC into grid-compatible AC. Why the conversion matters, and why timing/synchronization is critical, is covered in [How Solar Power Works](how-solar-works.md).

## Sources, Conductors, and Loads

Every circuit has three functional roles.

| Role | What it does | Examples |
|---|---|---|
| **Source** | Supplies energy (provides voltage) | Battery, solar panel, grid, generator |
| **Conductor** | Carries current with little resistance | Copper/aluminium wire, busbar |
| **Load** | Uses the energy, converting it to something else | Lamp, motor, resistor, heater |

A complete **circuit** is an unbroken loop from source, through conductors, through the load, and back. Break the loop (open switch, cut wire) and current stops.

```
   +-----[ wire ]-----+
   |                  |
[SOURCE]           [ LOAD ]
   |                  |
   +-----[ wire ]-----+
```

## Series vs Parallel Circuits

How you connect multiple components changes how voltage and current behave. This is the single most important idea for understanding PV wiring.

### Series: components in a chain

In a **series** circuit, components are connected end-to-end so there is only one path for current.

```
[SOURCE]---[ A ]---[ B ]---[ C ]---back to source

  Same current I flows through A, B, and C.
  Voltages add:  V_total = V_A + V_B + V_C
```

- **Current is the same** everywhere in the chain.
- **Voltages add up.**

**Worked example 6.** Three 4 V cells in series, each passing 2 A:

```
V_total = 4 + 4 + 4 = 12 V
I = 2 A (same throughout)
```

### Parallel: components side by side

In a **parallel** circuit, components share the same two connection points, creating multiple paths.

```
        +---[ A ]---+
        |           |
[SOURCE]+---[ B ]---+
        |           |
        +---[ C ]---+

  Same voltage V across A, B, and C.
  Currents add:  I_total = I_A + I_B + I_C
```

- **Voltage is the same** across every branch.
- **Currents add up.**

**Worked example 7.** Three branches at 12 V, each drawing 2 A:

```
V = 12 V (same across all)
I_total = 2 + 2 + 2 = 6 A
```

### The PV string / parallel analogy

Solar modules use exactly these rules:

- Wiring modules in **series** forms a **string**. Their **voltages add** while current stays the same. A string of ten 40 V modules produces roughly 400 V.
- Wiring strings in **parallel** makes their **currents add** while voltage stays the same. Two identical strings in parallel double the current at the same voltage.

```
Series string (voltages add):
 [40V]--[40V]--[40V]--[40V]  ->  ~160 V, string current unchanged

Parallel (currents add):
   String 1 ─┐
   String 2 ─┼─  same voltage, currents sum
   String 3 ─┘
```

> **Key point:** Series raises voltage; parallel raises current. Installers pick a mix to land inside the inverter's voltage and current window. The math (including cold-weather voltage rise) is worked out in [Solar Calculations & Formulas](calculations-formulas.md).

## Energy vs Power: Watts vs Watt-hours

This distinction trips up almost everyone at first.

- **Power (watts, W)** is a *rate* — how fast energy is used at an instant. Think "speed."
- **Energy (watt-hours, Wh)** is an *amount* — power multiplied by time. Think "distance travelled."

```
Energy (Wh) = Power (W) × Time (h)
```

**Worked example 8.**
A 100 W light left on for 5 hours uses:

```
100 W × 5 h = 500 Wh = 0.5 kWh
```

**Worked example 9.**
A 400 W panel producing at full output for 6 sun-hours yields:

```
400 W × 6 h = 2,400 Wh = 2.4 kWh
```

| Term | Unit | Measures |
|---|---|---|
| Power | W, kW | Instantaneous rate |
| Energy | Wh, kWh | Accumulated amount over time |

> Your utility bills you for **energy** (kWh), not power. A panel's nameplate is a **power** rating (W). Battery capacity is usually given in **Wh or kWh** (energy), sometimes as amp-hours (Ah), where `Wh = Ah × V`.

## Circuit Protection Basics

Protective devices exist to stop current when something goes wrong, before wires overheat or people get hurt.

### Fuses and breakers

- A **fuse** contains a metal element that melts and opens the circuit when current exceeds its rating. One-time use.
- A **circuit breaker** trips (opens) on overcurrent and can be reset. Reusable.

Both are rated in amps and are sized to protect the **wire**, not the load — they open before the conductor's safe current is exceeded.

### Faults they guard against

| Fault | What happens | Protection |
|---|---|---|
| **Overload** | Load draws more current than the circuit is rated for | Fuse / breaker |
| **Short circuit** | A near-zero-resistance path lets current spike enormously (`I = V/R`, R→0 so I→huge) | Fuse / breaker |
| **Ground fault** | Current leaks to ground through an unintended path (e.g., a person) | GFCI / GFDI / RCD |
| **Arc fault** | Damaged wiring arcs and can start fires | AFCI / arc-fault detector |

**Worked example 10 — why a short is dangerous.**
A 120 V source across a 0.05 Ω short:

```
I = V / R = 120 / 0.05 = 2,400 A
```

That enormous current is exactly what a fuse or breaker interrupts almost instantly.

> **Key point:** Protection devices are chosen to trip *below* the wire's rated ampacity. Never replace a fuse or breaker with a higher-rated one to "stop nuisance trips" — that defeats the protection and can start a fire. PV-specific protection details are in the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md).

## Measuring with a Multimeter

A **digital multimeter (DMM)** is the essential diagnostic tool. It measures voltage, current, resistance, and continuity.

| Measurement | How to connect | Notes |
|---|---|---|
| **DC voltage (V⎓)** | Probes **across** (in parallel with) the two points | Red to +, black to −; reversed just shows a minus sign |
| **Current (A)** | Meter **in series** — break the circuit and route current through it | Use the correct amps jack; wrong jack can blow the meter's fuse |
| **Resistance (Ω)** | Across a **de-energized** component | Must have power off, or readings are meaningless/unsafe |
| **Continuity** | Across two points; beeps if connected | Great for finding breaks and confirming connections |

Practical tips:

- **Voltage is measured in parallel; current is measured in series.** This follows directly from the rules above — voltage is shared across parallel points, current is the same through a series path.
- Start on the highest range if your meter isn't auto-ranging.
- For solar, always respect DC voltages. A string can carry **hundreds of volts of DC**, which does not "let go" the way AC does. Measure module **Voc** (open-circuit voltage) and **Isc** (short-circuit current) only with a meter rated for it.

**Worked example 11.**
You measure a single module: 39.8 V across the leads with nothing connected (its **Voc**), and the datasheet says 40.0 V. That ~0.5% difference is normal and within tolerance.

## Single-Line Diagram Basics

A **single-line diagram (SLD)**, also called a one-line diagram, is a simplified drawing where a whole circuit — even a three-wire or multi-conductor one — is drawn as a **single line** with standard symbols. It shows *what connects to what and in what order*, not every physical wire.

```
 [PV Array] --- [DC Disconnect] --- [Inverter] --- [AC Disconnect] --- [Main Panel] --- [Grid / Meter]
```

Common symbols you'll encounter:

| Symbol idea | Represents |
|---|---|
| Rectangle / labelled box | Panel, inverter, load centre |
| Circle with a line | Meter or generator |
| Break in the line with a slash | Disconnect / switch |
| Small square/oval in the line | Fuse or breaker |
| Downward "rake" symbol | Ground / earth connection |

> An SLD is the standard way solar systems are documented for permits and inspections. It answers "how does energy flow from source to grid, and where are the protection and disconnect points?" at a glance. You'll see fuller PV examples in [How Solar Power Works](how-solar-works.md).

## Quick Reference

| I need... | Use |
|---|---|
| Current from voltage & resistance | `I = V / R` |
| Voltage drop in a wire | `V = I × R` |
| Power from voltage & current | `P = V × I` |
| Heat lost in a conductor | `P = I² × R` |
| Energy used over time | `Wh = W × h` |
| Series total voltage | Add the voltages; current stays the same |
| Parallel total current | Add the currents; voltage stays the same |

See also: [Solar Calculations & Formulas](calculations-formulas.md), [Wiring & Connectors Reference](fundamentals-wiring-connectors.md), [How Solar Power Works](how-solar-works.md), and the [Engineering Glossary](engineering-glossary.md).

## Sources & Further Reading

- [Ohm's law — Wikipedia](https://en.wikipedia.org/wiki/Ohm%27s_law)
- [Root mean square (RMS) — Wikipedia](https://en.wikipedia.org/wiki/Root_mean_square)
- [Series and parallel circuits — Wikipedia](https://en.wikipedia.org/wiki/Series_and_parallel_circuits)
- [Watt-hour / units of energy — Wikipedia](https://en.wikipedia.org/wiki/Kilowatt-hour)
- [How to use a multimeter — SparkFun](https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter)
- [One-line diagram — Wikipedia](https://en.wikipedia.org/wiki/One-line_diagram)

*Educational reference only; verify all electrical work against local codes (e.g., NEC/IEC) and a licensed professional before acting.*
