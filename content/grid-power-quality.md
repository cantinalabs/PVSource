# Power Quality

**Power quality** describes how closely the voltage and current on an electrical system match an ideal, undistorted, balanced sine wave at the correct magnitude and frequency. Photovoltaic systems interface the grid through power-electronic inverters, so they both *contribute to* and are *affected by* power-quality phenomena. Done well, smart inverters actively improve power quality; done poorly or at high penetration, distributed solar can cause voltage rise, harmonics, and other issues.

This page covers the power-quality fundamentals most relevant to PV: **harmonics and THD** (with IEEE 519 limits), **flicker**, **voltage rise and regulation**, **power factor and reactive power**, **DC injection**, **transients**, and **unbalance** — and how smart-inverter functions and mitigation hardware address them. See also [IEEE 1547 & Smart Inverters](grid-ieee1547.md), [Anti-Islanding & Grid Protection](grid-protection.md), and [Grid Services, VPPs & Demand Response](grid-services-vpp.md).

## Power-Quality Fundamentals

The ideal supply is a clean sinusoid of constant amplitude, frequency, and (in three-phase systems) balanced phases. Real systems deviate in characteristic ways:

- **Waveform distortion** — harmonics making the wave non-sinusoidal.
- **Voltage variation** — slow rise/sag, or rapid fluctuation (flicker).
- **Reactive power & power factor** — phase displacement between voltage and current.
- **DC content** — unwanted direct-current component injected by inverters.
- **Transients** — fast spikes and surges from switching or lightning.
- **Unbalance** — unequal voltages/currents across the three phases.

Most limits are defined at the **point of common coupling (PCC)** — the boundary where the customer's system meets the utility and where other customers could be affected.

## Harmonics & Total Harmonic Distortion (THD)

**Harmonics** are voltage or current components at integer multiples of the fundamental (60 Hz): the 3rd at 180 Hz, the 5th at 300 Hz, and so on. Inverters synthesize their output by switching, which can introduce harmonic content; modern grid-tied PV inverters are required to keep current distortion low.

**Total harmonic distortion (THD)** quantifies the aggregate harmonic content relative to the fundamental:

```
THD (%) = sqrt(H2^2 + H3^2 + H4^2 + ... + Hn^2) / H1 × 100

where H1 = fundamental magnitude, Hn = magnitude of the nth harmonic
```

**IEEE 519-2022**, *Recommended Practice and Requirements for Harmonic Control in Electric Power Systems*, defines responsibilities at the PCC: utilities manage **voltage** distortion; users manage their **current** distortion. The standard sets voltage-distortion limits that vary with system voltage:

| Bus voltage at PCC | Individual harmonic voltage | Voltage THD |
|--------------------|-----------------------------|-------------|
| ≤ 1.0 kV | 5.0% | **8.0%** |
| > 1.0 kV through 69 kV | 3.0% | 5.0% |
| > 69 kV through 161 kV | 1.5% | 2.5% |
| > 161 kV | 1.0% | 1.5% |

> The widely cited "5% / 8%" figures are the **individual / total voltage** limits for low-voltage systems (≤ 1 kV) under IEEE 519-2022. Always confirm the applicable row for your PCC voltage and the corresponding **current-distortion (TDD)** tables, which scale with the short-circuit-to-load ratio.

Inverter **current THD** is also limited by interconnection rules. Under [IEEE 1547](grid-ieee1547.md), DER current-distortion limits are tight (total demand distortion on the order of a few percent of rated current), which is why certified PV inverters are inherently low-harmonic devices.

## Flicker

**Flicker** is a rapid, repetitive variation in voltage magnitude perceptible as a flickering of lighting. It is caused by quickly fluctuating loads (arc furnaces, large motors starting) and can be aggravated by **fast-changing PV output** under broken-cloud conditions on weak feeders. Flicker is assessed with short-term (Pst) and long-term (Plt) severity indices (per IEC 61000-4-15 methods). Smart-inverter ramp-rate controls and storage smoothing reduce PV-driven flicker on susceptible circuits.

## Voltage Rise & Regulation on Feeders

When a PV system exports power, it pushes current *back* up the feeder, and voltage **rises** along the line — the opposite of the normal drop under load. Approximate feeder voltage rise from injected power:

```
ΔV ≈ (P × R + Q × X) / V_nominal

P = real power injected, Q = reactive power,
R, X = feeder resistance and reactance from source to PCC
```

On long, distribution-class feeders with high PV penetration, midday export can push voltage above the **ANSI C84.1** service range (commonly ±5%, i.e., 114–126 V on a 120 V base). This is one of the primary distribution-level constraints on solar hosting capacity. Utilities manage it with voltage regulators, on-load tap changers, and — increasingly — by enrolling inverters in **Volt-VAR / Volt-Watt** control.

## Power Factor & Reactive Power

**Real power (P, kW)** does work; **reactive power (Q, kVAR)** sustains magnetic/electric fields and does no net work but loads the system. Their relationship:

```
S (kVA) = sqrt(P^2 + Q^2)        Power factor = P / S = cos(θ)
```

Legacy PV inverters ran near **unity power factor** (Q ≈ 0). Smart inverters can **absorb or supply reactive power** on command, helping the utility regulate voltage. Because reactive output consumes apparent-power (kVA) headroom, an inverter providing VARs may have less room for real-power export at the same instant.

## DC Injection

A small **DC component** in an inverter's AC output is undesirable: it can **saturate transformer cores** and cause overheating, nuisance tripping, and metering errors. Interconnection standards strictly cap DC injection — IEEE 1547 limits the DC current to a small fraction (on the order of **0.5% of rated AC output current**). Transformerless inverters include monitoring and control to stay within this limit.

## Transients & Surges

**Transients** are brief, high-magnitude disturbances:

- **Impulsive transients** — lightning, fast spikes (microsecond-scale).
- **Oscillatory transients** — capacitor-bank switching, line energization.

PV systems are exposed to both DC-side (array, long roof runs) and AC-side surges. Mitigation relies on **surge protective devices (SPDs / MOVs)**, proper grounding and bonding, and equipment rated for the relevant surge category. Inverters must **ride through** voltage and frequency disturbances within defined envelopes rather than nuisance-tripping — see ride-through in [IEEE 1547 & Smart Inverters](grid-ieee1547.md).

## Voltage & Current Unbalance

In three-phase systems, **unbalance** is unequal magnitude (or phase angle) among the three phases. It causes excess heating and negative-sequence currents in motors. Single-phase residential PV connected unevenly across phases can contribute to unbalance on a feeder; planners distribute single-phase DER across phases to limit it. Unbalance is typically expressed as the ratio of negative-sequence to positive-sequence voltage and is generally kept within a couple of percent.

## How Smart Inverters Help

Modern certified inverters ([UL 1741 SB](grid-ieee1547.md) aligned with IEEE 1547-2018) include autonomous power-quality functions:

| Function | What it does | Power-quality benefit |
|----------|--------------|-----------------------|
| **Volt-VAR** | Adjusts reactive power as a function of local voltage | Counteracts feeder voltage rise/sag |
| **Volt-Watt** | Curtails real power when voltage is high | Caps export-driven voltage rise |
| **Frequency-Watt** | Adjusts power with frequency | Supports system frequency stability |
| **Ramp-rate control** | Limits how fast output changes | Reduces flicker and voltage steps from clouds |
| **Low harmonic & DC limits** | Built-in by certification | Keeps THD and DC injection within IEEE 519 / 1547 |

> **Volt-VAR** and **Volt-Watt** are the workhorses for managing PV's voltage-rise impact. They let distributed inverters act as a fleet of fast, local voltage regulators — provided the utility has enabled the appropriate settings.

## Measurement & Mitigation

**Measurement:** power-quality analyzers and revenue/smart meters log THD, flicker (Pst/Plt), voltage profiles, power factor, and unbalance against IEEE 519 and ANSI C84.1 benchmarks, usually at the PCC.

**Mitigation hardware (beyond inverter functions):**

- **Passive harmonic filters** — tuned LC traps for specific harmonics.
- **Line reactors / chokes** — series inductance to smooth current and reduce harmonics.
- **Active harmonic filters (AHFs)** — inject canceling currents in real time.
- **Static VAR compensators / STATCOMs** — fast reactive support for voltage and unbalance.
- **Surge protective devices** — clamp transients and surges.
- **Storage** — buffers fast PV swings, reducing flicker and ramp-driven issues; see [Battery Energy Storage](battery-storage.md).

## Impact of High-DER Penetration

As distributed solar grows on a feeder, several power-quality effects compound:

- **Voltage rise** becomes the dominant hosting-capacity limit on many feeders.
- **Reverse power flow** complicates voltage regulation and protection coordination — see [Anti-Islanding & Grid Protection](grid-protection.md).
- **Reduced effective inertia** can make frequency and voltage more sensitive to disturbances; grid-forming inverters and storage help offset this (see [Microgrids & Islanding](grid-microgrids.md)).
- **Aggregate harmonics** from many inverters can interact, though per-unit current-distortion limits keep individual contributions small.

Coordinated **smart-inverter settings** and, where needed, mitigation hardware are how utilities raise hosting capacity without degrading power quality.

## Sources & Further Reading

- [IEEE 519-2022 Review — What Has Changed (ABB Tech Note)](https://library.e.abb.com/public/a7965e127ce44d089c1c2beace68aacd/Tech_Note_158_IEEE_519-2022+Review.pdf)
- [IEEE 519 Harmonic Distortion Limits: Guide to Compliance (Y&T Electric)](https://www.ytelect.com/blog/ieee-519-harmonic-distortion-limits-guide-to-compliance_b337)
- [Power Quality — IEEE 519-2022 (Comsys)](https://comsys.se/en-us/our-adf-technology/power-quality-ieee-519-2022/)
- [Are You Compliant with the IEEE 519-2022 Edition? (Elspec)](https://www.elspec-ltd.com/are-you-compliant-with-the-ieee-519-2022-edition/)
- [Smart PV Inverter Overview: IEEE 1547-2018 and UL 1741 (Solar Builder)](https://solarbuildermag.com/inverters/smart-pv-inverter-overview-ieee-1547-2018-and-ul-1741-explained/)

---
*Disclaimer: This page is for general educational reference only; verify all standards, limits, and code requirements against current published editions and qualified engineering and authority-having-jurisdiction guidance before design or installation.*
