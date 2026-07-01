# Shading, Mismatch & Bypass Diodes

Shading is the single largest source of avoidable energy loss in many real-world PV arrays. Because of how cells, modules, and strings are wired together, the impact of shade is almost never proportional to the shaded area: a small shadow on one cell can suppress the output of an entire string. This page explains *why* that happens, how **bypass diodes** limit the damage, how partial shade deforms the I-V curve, what **mismatch** is and how to estimate its loss, and how module-level power electronics (MLPE) change the trade-offs.

## Why One Shaded Cell Hurts: Series-String Current Limiting

PV cells in a module are wired in **series**, and modules in a string are also wired in series. The defining property of a series circuit is that **the same current flows through every element**. A solar cell is fundamentally a current source whose output current is proportional to the irradiance falling on it.

> **Key point:** In a series string, the *current* is limited by the weakest (least-illuminated) cell, while the *voltages* add. One heavily shaded cell tries to throttle the current of every cell in series with it.

Consider a string of cells each producing about `9.5 A` in full sun. If one cell is 75% shaded, that cell can only pass roughly `2.4 A`. Without protection, the entire series path is forced toward that lower current — the healthy cells cannot push their current through the shaded cell. The string's power collapses far more than the ~2% physical area that is shaded.

```
Full sun (all cells ~9.5 A):     [9.5A]-[9.5A]-[9.5A]-[9.5A]  -> string = 9.5 A
One cell 75% shaded (no diode):  [9.5A]-[9.5A]-[2.4A]-[9.5A]  -> string ~ 2.4 A (!)
```

Worse, the unshaded cells, still being driven by the surrounding string voltage, can **reverse-bias** the shaded cell. The shaded cell then *dissipates* power instead of producing it, heating up — the origin of the **hot-spot** failure mode described below.

## Bypass Diodes: How They Work

A **bypass diode** is a diode wired in parallel with a group of cells (a **substring**), but with reversed polarity so it is normally non-conducting. During normal operation the substring's forward voltage reverse-biases the diode and no current flows through it.

When a cell in that substring is shaded and the rest of the string tries to force a higher current through it, the shaded cell goes into reverse bias. Once the reverse voltage across the substring exceeds the diode's forward turn-on voltage (~`0.3–0.7 V`), the **diode conducts and carries the string current around the shaded substring**. The substring is "bypassed."

```
        +------[ substring of cells ]------+
        |                                  |
 -------+                                  +-------  (string current path)
        |                                  |
        +--------|<|----- bypass diode ----+   (conducts when substring is shaded)
```

> **Key point:** A bypass diode does not *recover* the shaded substring's power — it sacrifices that substring's voltage so the rest of the string can keep producing at full current. You lose a chunk of voltage, not the whole string.

### Substrings and the Typical 3-Diode Module

A conventional 60- or 72-cell module is usually divided into **three substrings**, each protected by one bypass diode housed in the junction box. Shade anywhere in one substring bypasses roughly one-third of the module (`~1/3` of its voltage and power) rather than the whole module.

```
72-cell module = 3 substrings of 24 cells, each with its own bypass diode:

[ 24 cells | D1 ]--[ 24 cells | D2 ]--[ 24 cells | D3 ]

Shade in the middle substring -> D2 conducts -> module outputs ~2/3 of Vmp.
```

Modern modules complicate this picture. **Half-cut cell** modules split the panel into two parallel halves; **shingled** and **back-contact** designs use finer-grained cell groups. These layouts can make a module more tolerant of certain shade geometries (e.g., a horizontal shadow across the bottom row), but the underlying series-current-limiting physics is unchanged.

### Hot-Spot Protection

Without a bypass diode, a reverse-biased shaded cell can dissipate the power of the entire string as heat concentrated in one spot, reaching temperatures that crack glass, discolor the encapsulant, and permanently damage the cell — a **hot spot**. The hot-spot endurance test in the safety standards (**IEC 61730** / **UL 61730**) verifies that a module survives this condition; bypass diodes are the primary defense. See [Standards & Certification Bodies](fundamentals-standards-bodies.md).

## Partial Shading and the I-V Curve

A single, fully-illuminated module has a smooth I-V curve with one **maximum power point (MPP)**. When parts of a string are shaded and bypass diodes activate, the combined I-V curve develops **steps and kinks** — each activated diode "patches in" at a different current level.

```
 I (A)
  ^
  |■■■■■■■■                    Unshaded string: smooth knee, single MPP
  |        ■                   ----------------------------------------
  |         ■■■■■■■■           Partially shaded string: a STEP appears
  |        :        ■          where a bypass diode kicks in.
  |  step->:         ■
  |  · · · ·· · · · · ■        local MPP (lower-V, higher-I region)
  |                    ■
  +---------------------+----> V
              global MPP somewhere on this curve
```

The consequence is **multiple local maxima** on the power-vs-voltage (P-V) curve. There is one **global MPP** (the true best operating point) and one or more **local MPPs**. A naive maximum power point tracker (MPPT) can get "stuck" on a local MPP and miss the global peak, costing energy even beyond the shade loss itself. Quality inverters and optimizers run periodic **global MPPT sweeps** to find the true peak. See [Inverters Deep-Dive](fundamentals-inverters.md).

> **Key point:** Partial shade does two things: it removes the shaded substrings' output, *and* it can trap the tracker on a local maximum. Good MPPT logic addresses the second problem; only array design and MLPE address the first.

## Module Mismatch & Mismatch Loss

**Mismatch** is any difference between series-connected cells, modules, or strings that prevents them all from operating at their individual best point simultaneously. Even without shade, real arrays always have *some* mismatch. Sources include:

| Source | Mechanism | Typical magnitude |
|---|---|---|
| **Manufacturing tolerance** | Cells/modules vary in Imp, Vmp within the flash-test bin | 0–3% (tighter with positive-tolerance binning) |
| **Soiling** | Dust, pollen, bird droppings, snow reduce irradiance unevenly | 1–7%+ (site dependent) |
| **Orientation / tilt differences** | Modules facing different azimuths in one string | Highly variable |
| **Temperature gradients** | Roof hot spots, uneven airflow shift Vmp | ~0.3–0.5% per °C spread (Voc) |
| **Degradation** | Modules age at different rates (LID, PID, cell cracks) | Grows over array lifetime |
| **Partial shading** | The dominant, time-varying source (above) | Can dominate all others |

The total **mismatch loss** is the difference between the sum of each module's individual maximum power and the actual power delivered when they are forced to a common operating current/voltage. In well-designed, unshaded crystalline-silicon systems, baseline mismatch loss is commonly modeled at roughly **1–3%**; shading can push the effective mismatch loss far higher. Mismatch loss is one of the line items in the [Performance Ratio](fundamentals-metrics-primer.md) loss stack and in modeling tools such as PVsyst. The detailed loss math is covered in [Solar Calculations & Formulas](calculations-formulas.md).

**Design practices that reduce mismatch:**

- **Bin matching** — group modules with similar Imp/Vmp into the same string.
- **Homogeneous strings** — keep one orientation/tilt per string; never mix azimuths in a single series string feeding a string inverter.
- **Avoid mixing aged and new modules** in the same string during repairs.

## MLPE: Microinverters and DC Optimizers vs. the Central String

**Module-level power electronics (MLPE)** move power conversion or MPPT down to the individual module, breaking the series-current-limiting tyranny.

| Architecture | Where MPPT happens | Shade behavior |
|---|---|---|
| **Central / string inverter** | One MPPT per string (a few per inverter) | A shaded module pulls down its whole string; bypass diodes limit but do not eliminate the loss |
| **DC optimizer** (e.g., one per module, feeding a string inverter) | Per-module DC-DC; inverter still does final DC-AC | Each module runs at its own MPP; optimizer adjusts output V/I so the shaded module no longer constrains the string current |
| **Microinverter** (one per module/pair) | Per-module DC-AC inversion | Modules are electrically independent on the DC side; shade on one barely affects others |

> **Key point:** With a plain string inverter, **module outputs multiply down** — the worst module drags the string. With MLPE, modules are **decoupled**, so a shaded module loses roughly only its own share.

### Why MLPE Helps Mismatch (Not Just Shade)

Because each module is independently optimized, MLPE also recovers the *chronic* mismatch from manufacturing tolerance, soiling, and uneven degradation — not just transient shade. The harvest gain from optimizers/microinverters on a clean, unshaded, single-orientation array is modest (often low single-digit percent); the gain grows substantially on complex roofs with shade, multiple orientations, or partial obstructions.

### String-Level vs. Module-Level Trade-Offs

| Consideration | String inverter | MLPE (optimizers / microinverters) |
|---|---|---|
| **Cost ($/W)** | Lowest | Higher upfront |
| **Shade / multi-orientation** | Poor to moderate | Strong |
| **Module-level monitoring** | No (string-level only) | Yes (per-module data) |
| **Rapid shutdown (NEC 690.12)** | Needs added devices | Often inherent at the module |
| **Failure points** | Few, centralized | Many distributed units on the roof |
| **Best fit** | Large, unshaded, uniform arrays (utility, clean commercial roofs) | Complex residential roofs, shaded sites, mixed orientations |

Rapid shutdown and broader inverter topology trade-offs are detailed in [Inverters Deep-Dive](fundamentals-inverters.md), and module construction (cell layout, half-cut, junction box) in [PV Modules Deep-Dive](fundamentals-pv-modules.md).

## Shading Analysis Basics

Good design starts by *predicting* shade, not just reacting to it.

- **The solar window (solar access):** the band of the sky the sun travels through across the year. In the Northern Hemisphere it sweeps the southern sky; obstructions there (trees, chimneys, parapets, adjacent buildings) cast the most damaging shade. Tools (Solar Pathfinder, drone/photo apps, and software horizon models) chart obstructions against the sun's seasonal path to compute a **solar access percentage**.
- **The "9 a.m. to 3 p.m." rule of thumb:** prioritize keeping the array **unshaded during the ~6 peak-production hours around solar noon** (roughly 9 a.m.–3 p.m.). The large majority of daily energy is generated in this window; shade outside it costs comparatively little. Many AHJs, incentive programs, and rating systems (e.g., solar-readiness checklists) reference an equivalent unshaded-window criterion.
- **TSRF / TOF / solar access metrics:** Total Solar Resource Fraction (TSRF) = Tilt-and-Orientation Factor (TOF) × shading factor, expressing how much of the optimal annual resource a given plane actually receives. These feed directly into the energy-yield math in [Solar Calculations & Formulas](calculations-formulas.md).

> **Key point:** The cheapest mismatch mitigation is **site selection and array placement** that keep the 9-to-3 solar window clear. Electronics mitigate the shade you cannot avoid; they do not create energy that the sun never delivered to the cells.

See also the [Engineering Glossary](engineering-glossary.md) for terms such as Imp, Vmp, MPPT, LID, and PID.

## Sources & Further Reading

- [UL 61730 / IEC 61730 PV module safety standard — UL Solutions](https://www.ul.com/services/pv-module-certification)
- [IEC 61215 & 61730 module qualification overview — PVKnowHow](https://www.pvknowhow.com/certifications-in-pv-module-manufacturing/)
- [NREL — PV performance, shading and mismatch modeling](https://www.nrel.gov/pv/)
- [IEA PVPS — Review of failures and degradation of PV modules](https://iea-pvps.org/)
- [PVEducation — Bypass diodes, mismatch, and partial shading](https://www.pveducation.org/)
- Related: [PV Modules Deep-Dive](fundamentals-pv-modules.md) · [Inverters Deep-Dive](fundamentals-inverters.md) · [Solar Calculations & Formulas](calculations-formulas.md) · [Power, Energy & Key Metrics](fundamentals-metrics-primer.md)

---
*Disclaimer: Educational reference only; verify all designs against current manufacturer specifications, applicable codes, and a licensed professional before installation.*
