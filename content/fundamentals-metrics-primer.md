# Power, Energy & Key Metrics

Almost every other page on this site quotes a number — `kWp`, `kWh/kWp`, `PR`, `DC/AC ratio`, `LCOE`. This primer defines those terms in plain language, shows how they relate, and gives small worked conversions so the rest of the reference is legible. If you only read one page first, read this one.

## Power vs. Energy: kW vs. kWh

The most common confusion in solar is **power** versus **energy**.

- **Power** is the *rate* of energy flow, measured in **watts (W)** or **kilowatts (kW)**. It is an instantaneous quantity — what you have "right now."
- **Energy** is power accumulated **over time**, measured in **watt-hours (Wh)** or **kilowatt-hours (kWh)**. It is what you are billed for and what a system *produces*.

```
Energy (kWh) = Power (kW) × Time (hours)
```

> **Key point:** A `5 kW` array is a *power* rating (how fast it can produce). The `7,500 kWh` it makes in a year is *energy* (how much it produced). Confusing the two is like confusing speed (mph) with distance (miles).

**Worked conversion:** a `400 W` panel running at full output for `5 hours` produces `400 W × 5 h = 2,000 Wh = 2 kWh`.

### Wp and kWp (Watt-Peak)

**Wp** (watt-peak) and **kWp** (kilowatt-peak) describe the **rated power output of PV under Standard Test Conditions (STC)** — `1000 W/m²` irradiance, `25 °C` cell temperature, AM1.5 spectrum. The "peak" reminds you it is a *nameplate maximum under ideal lab conditions*, not what you will see most of the day.

> **Key point:** `kWp` is the DC nameplate of the panels. Real-world output is almost always **less** than nameplate because real irradiance, temperature, soiling, and losses rarely match STC.

## AC vs. DC Ratings

A PV system has two different power ratings:

| Rating | What it describes | Set by |
|---|---|---|
| **DC (kWp / kWdc)** | Sum of module nameplates at STC | The panels |
| **AC (kWac)** | Maximum the inverter can deliver to the grid | The inverter(s) |

A system is often described as, e.g., **"7.6 kWdc / 6.0 kWac."** Utilities and interconnection agreements usually care about the **AC** number (grid impact); module counts and incentives often reference the **DC** number. The relationship between them is the **DC/AC ratio** below. See [Inverters Deep-Dive](fundamentals-inverters.md).

## DC/AC Ratio (Inverter Loading Ratio, ILR)

```
DC/AC ratio (ILR) = DC nameplate (kWp) / Inverter AC rating (kWac)
```

Designers intentionally install **more DC than AC** (ratios commonly `1.1–1.4`) because the array rarely reaches STC, so a "smaller" inverter is cost-effective and produces a flatter, longer output curve. When DC briefly exceeds AC capacity, the excess is **clipped**.

**Worked example:** `7.6 kWdc ÷ 6.0 kWac = 1.27` ILR. Modest, occasional midday clipping; typical residential design.

> **Key point:** A higher ILR harvests more energy in low light and shoulders of the day but increases **clipping** losses at peak. The economic optimum depends on climate and energy prices.

## Insolation & Peak Sun Hours (PSH)

**Insolation** is the solar energy received per unit area over a period, typically **kWh/m²/day**. Conveniently, because STC defines power at `1000 W/m² = 1 kW/m²`:

```
Peak Sun Hours (PSH) = daily insolation in kWh/m²/day
```

So a site receiving `5 kWh/m²/day` has **5 peak sun hours** — equivalent to 5 hours of full `1000 W/m²` sun, even though the real sun is spread across a longer, weaker day.

**Worked estimate (back-of-envelope yield):**
```
Daily energy ≈ kWp × PSH × overall efficiency factor
            ≈ 6 kWp × 5 PSH × 0.80 = 24 kWh/day
```
The `0.80` lumps inverter, wiring, temperature, soiling, and mismatch losses (it is the **derate** / performance ratio, below).

## Capacity Factor

**Capacity factor (CF)** is how much energy a system actually produced versus its theoretical maximum if it ran at full nameplate power 24/7/365.

```
Capacity factor = Actual annual energy / (Rated power × 8760 hours)
```

**Worked example:** a `6 kWdc` system producing `10,500 kWh/year`:
```
CF = 10,500 / (6 × 8760) = 10,500 / 52,560 ≈ 0.20 = 20%
```
Fixed-tilt PV typically lands around **15–25%**; single-axis tracking and very sunny sites push higher. Low CF is normal for solar — the sun only shines part of the day.

## Specific Yield (kWh/kWp)

**Specific yield** normalizes energy by system size so you can compare a small roof to a large farm:

```
Specific yield = Annual energy (kWh) / DC nameplate (kWp)   [units: kWh/kWp]
```

**Worked example:** `10,500 kWh ÷ 6 kWp = 1,750 kWh/kWp/year`. Typical values range from ~`900` (cloudy, high-latitude) to `1,800+` (sunny, low-loss) kWh/kWp/year. It is essentially `PSH × 365 × PR`.

## Performance Ratio (PR)

**Performance ratio** is the headline *quality* metric — the fraction of the energy the array *should* have produced (given the irradiance it actually received) that it *did* produce. It strips out weather to isolate system health.

```
PR = Actual energy yield / Theoretical yield at measured irradiance
   = Specific yield / (in-plane insolation × performance period)
```

PR captures all losses: temperature, inverter, wiring, soiling, mismatch, shading, downtime. Good modern systems run **PR ≈ 0.75–0.85**; the methodology is standardized in **IEC 61724**. See [Standards & Certification Bodies](fundamentals-standards-bodies.md) and the loss breakdown in [Shading, Mismatch & Bypass Diodes](fundamentals-shading-mismatch.md).

> **Key point:** **Capacity factor** answers "how much of nameplate did it run at?" (size + weather + losses). **Performance ratio** answers "how well did it convert the sunlight it got?" (losses only). High PR with low CF just means a good system at a cloudy site.

## Degradation

Modules lose output slowly over time. **Degradation rate** is expressed in **%/year**. A common warranty profile is a higher first-year **light-induced degradation (LID)** step (~`1–2%`) then a linear `~0.4–0.7%/year` thereafter, with end-of-warranty output guaranteed around `~85–92%` at 25–30 years for quality modules.

**Worked example:** at `0.5%/year`, a module is at `(1 − 0.005)^20 ≈ 0.905`, i.e. ~`90.5%` of original output after 20 years.

## Availability

**Availability** is the fraction of time a system was *capable* of operating (not down for faults, grid outages, or maintenance):

```
Availability = Uptime / Total time
```

Well-run plants target `>98–99%`. Low availability silently erodes annual energy independent of weather, and shows up as a depressed PR.

## LCOE at a Glance

**Levelized Cost of Energy (LCOE)** is the lifetime cost of a system divided by its lifetime energy production — a single `$/kWh` (or `$/MWh`) figure for comparing technologies.

```
LCOE ≈ (Total lifetime costs, discounted) / (Total lifetime energy, discounted)
```

Lifetime costs include capital, financing, O&M, and replacements; lifetime energy accounts for degradation and availability. Lower is better. The full discounting math is in [Solar Calculations & Formulas](calculations-formulas.md).

> **Key point:** LCOE lets you compare a solar plant to gas, wind, or storage on equal footing — but it is sensitive to discount rate, capacity factor, and assumed lifetime, so always check the assumptions behind any quoted number.

## Common Unit Conversions

Small, frequently-needed conversions for sizing, irradiance, and energy comparisons.

| From | To | Multiply by | Note |
|---|---|---|---|
| `1 kW` | `W` | `1,000` | power |
| `1 kWh` | `Wh` | `1,000` | energy |
| `1 MWh` | `kWh` | `1,000` | energy |
| `1 kWh` | `MJ` | `3.6` | `1 kWh = 3.6 MJ` |
| `1 kW/m²` | `W/ft²` | `92.9` | `1000 W/m² ≈ 92.9 W/ft²` (STC) |
| `1 kW/m²` | `W/m²` | `1,000` | STC reference irradiance |
| `1 therm` | `kWh` | `29.3` | `1 therm = 100,000 BTU` |
| `1 kWh` | `therm` | `0.0341` | inverse of above |
| `1 kWh` | `BTU` | `3,412` | energy |
| `1 ton (cooling)` | `kW (thermal)` | `3.517` | HVAC sizing |
| `1 hp` | `kW` | `0.746` | motor power |
| `1 m²` | `ft²` | `10.76` | area |
| `1 acre` | `m²` | `4,047` | land for ground-mount |

**Worked conversions:**

- **Irradiance to imperial:** STC `1000 W/m² × (1 ft² / 10.76 m²) ≈ 92.9 W/ft²`.
- **Gas vs. electric energy:** a home using `600 therms/year` of gas = `600 × 29.3 ≈ 17,580 kWh` of energy — useful when comparing a gas furnace to a heat pump powered by solar.
- **Sizing sanity check:** `7,500 kWh/year ÷ 1,750 kWh/kWp ≈ 4.3 kWp` array needed at that site's specific yield.

## Quick-Reference Metric Table

| Metric | Units | Formula | Typical range |
|---|---|---|---|
| Power | kW | rate of energy flow | — |
| Energy | kWh | `kW × hours` | — |
| Nameplate | kWp / kWdc | sum of module STC ratings | — |
| DC/AC ratio (ILR) | unitless | `kWdc / kWac` | `1.1–1.4` |
| Peak sun hours | h (= kWh/m²/day) | site insolation | `3–7` |
| Capacity factor | % | `Energy / (Rated kW × 8760)` | `15–25%` (fixed) |
| Specific yield | kWh/kWp | `Annual kWh / kWp` | `900–1,800+` |
| Performance ratio | unitless | `Actual / theoretical yield` | `0.75–0.85` |
| Degradation | %/yr | output loss per year | `0.4–0.7` |
| Availability | % | `Uptime / total time` | `>98%` |
| LCOE | $/kWh | lifetime cost / lifetime energy | site-specific |

For derivations and worked design math, continue to [Solar Calculations & Formulas](calculations-formulas.md). Term definitions are in the [Engineering Glossary](engineering-glossary.md); equipment context is in [PV Modules Deep-Dive](fundamentals-pv-modules.md) and [Inverters Deep-Dive](fundamentals-inverters.md).

## Sources & Further Reading

- [NREL PVWatts — energy estimation, PSH, and derate methodology](https://pvwatts.nrel.gov/)
- [IEC 61724 — PV system performance monitoring (performance ratio)](https://www.iec.ch/)
- [NREL — Levelized Cost of Energy (LCOE) and System Advisor Model](https://www.nrel.gov/analysis/tech-lcoe.html)
- [U.S. EIA — Capacity factor and energy unit conversions](https://www.eia.gov/energyexplained/units-and-calculators/)
- Related: [Solar Calculations & Formulas](calculations-formulas.md) · [Shading, Mismatch & Bypass Diodes](fundamentals-shading-mismatch.md) · [Engineering Glossary](engineering-glossary.md)

---
*Disclaimer: Educational reference only; typical ranges vary by climate, technology, and design — verify site-specific figures with measured data and modeling tools.*
