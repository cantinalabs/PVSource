# Commercial Sizing & Calculations

This page provides **commercial-specific sizing and calculation methods with worked examples** — load and bill analysis (including demand charges), self-consumption vs. export sizing, three-phase power, 1500 V string sizing with cold-temperature correction, DC/AC ratio (ILR) and clipping, conductor sizing and voltage drop for long runs, transformer and service sizing, capacity factor and specific yield, and financial basics.

It is a companion to [Commercial System Design](./commercial-design.md). For ITC, MACRS, and bonus-depreciation math, see the site's commercial incentive guides — this page references those rather than re-deriving them.

> **Every example here is a commercial (C&I) example** — three-phase service, 480 V class, 1500 Vdc strings, and demand-charge tariffs. Residential rules of thumb (single-phase, 1000 V, simple net metering) do not transfer directly.

## Load and Bill Analysis

Commercial bills have two large components that PV affects differently:

| Charge | Unit | What it measures | How PV helps |
|--------|------|-----------------|--------------|
| **Energy charge** | $/kWh | Total energy consumed | Directly offset by every PV kWh consumed on-site |
| **Demand charge** | $/kW | Highest power draw (peak kW) in the billing period | Reduced only if PV (or storage) is producing **during** the peak |

### Why Demand Charges Matter

A demand charge bills the customer for their single highest **kW** interval (often a 15-minute peak) in the month, regardless of how briefly it occurred. Demand charges can be **30–60% of a commercial electric bill**. PV reliably shaves demand only when the building's peak coincides with strong solar output (midday). Peaks that occur in the evening (e.g., after sunset) or on cloudy days are **not** shaved by PV alone — this is a primary reason commercial sites add **battery storage** (see [Battery Storage](./battery-storage.md)).

```
Worked example — energy vs. demand:
  Building monthly energy ............ 60,000 kWh @ $0.10/kWh = $6,000 energy
  Building monthly peak demand ....... 300 kW   @ $18/kW      = $5,400 demand
  → Demand is 47% of this bill. A PV system that offsets 50% of
    energy ($3,000/mo) but only trims 40 kW of the noon peak
    ($720/mo) leaves most of the demand charge intact.
```

> **Model demand savings with interval (15-min) load data, not monthly totals.** PV's demand-charge value is entirely about *coincidence* with the peak. Without interval data and a solar production profile overlaid, demand savings are guesswork — and often overstated.

## Sizing: Self-Consumption vs. Net Metering / Export Caps

The right array size depends on how exported energy is compensated:

| Compensation regime | Sizing implication |
|--------------------|--------------------|
| **Full retail net metering** (kWh netted at retail) | Can size up toward annual consumption; export = retail credit |
| **Net billing** (export valued below retail, e.g., avoided cost) | Favor **self-consumption**; oversizing for export has weak returns |
| **Export caps / no export** | Size so production rarely exceeds on-site load; may require export controls |
| **PPA / wholesale (ground mount)** | Size to interconnection capacity and PPA terms |

A common commercial target is to size DC so that **annual production ≈ annual consumption** under net metering, but to size to the **daytime self-consumption profile** under net billing or export limits — producing more than the building uses at midday simply spills low-value energy.

```
Self-consumption sizing sketch:
  Daytime (9a–4p) avg load ........... ~180 kW
  Target: production rarely exceeds load → keep midday AC output ≲ 180 kW
  With ILR 1.25 → DC nameplate ≈ 180 × 1.25 ≈ 225 kWdc
  (Export-limited site uses inverter/utility export control to cap feed-in.)
```

## Three-Phase Power Calculations

Commercial AC math is three-phase:

```
P_3ph = √3 × V_LL × I_L × pf          (real power, W)
I_L    = P_3ph / (√3 × V_LL × pf)     (line current, A)
```

`V_LL` = line-to-line voltage, `I_L` = line current, `pf` = power factor (≈ 1.0 for grid-tied PV inverters at unity).

```
Worked example — inverter output current:
  250 kW three-phase inverter, 480 V (V_LL), pf = 1.0
  I_L = 250,000 / (√3 × 480 × 1.0)
      = 250,000 / (1.732 × 480)
      = 250,000 / 831.4
      ≈ 300.7 A   per phase

  Same 250 kW at 208 V:
  I_L = 250,000 / (1.732 × 208) ≈ 694 A   (≈ 2.3× the current)
  → 480 V needs far smaller conductors than 208 V for equal power.
```

## String Sizing for a 1500 V Commercial String Inverter

String design must keep the string's **maximum DC voltage** (which occurs at the coldest expected temperature) at or below the system maximum (1500 Vdc and the inverter's max input), while keeping the **operating MPP voltage** inside the inverter's MPPT window in heat.

### Cold-Temperature Voc Correction

Module **Voc rises as temperature falls** below the 25 °C STC rating. The corrected cold Voc per module is:

```
Voc(cold) = Voc(STC) × [ 1 + β × (T_min − 25) ]
```

where `β` is the module's temperature coefficient of Voc (per °C, a negative number), and `T_min` is the coldest expected cell/ambient temperature for the site (use the ASHRAE extreme-minimum design temperature). Because `(T_min − 25)` is negative and `β` is negative, the product is positive — Voc goes **up**.

```
Worked example — max modules per 1500 V string:

  Module:   Voc(STC) = 49.5 V
            β(Voc)   = −0.25 %/°C  = −0.0025 /°C
  Site coldest design temp T_min = −20 °C
  System max voltage = 1500 Vdc
  (Confirm the inverter's own max input voltage too — assume 1500 V here.)

  Step 1 — corrected cold Voc per module:
    Voc(cold) = 49.5 × [ 1 + (−0.0025)(−20 − 25) ]
              = 49.5 × [ 1 + (−0.0025)(−45) ]
              = 49.5 × [ 1 + 0.1125 ]
              = 49.5 × 1.1125
              ≈ 55.07 V

  Step 2 — max modules per string:
    N_max = 1500 / 55.07 ≈ 27.2
    → 27 modules maximum per string.

  Step 3 — sanity-check the hot MPP voltage:
    String Vmp(hot) must stay above the inverter's minimum MPPT voltage
    at the hottest expected cell temp (~+70 °C cell). Verify
    N × Vmp(hot) ≥ inverter MPPT min, else the string is too short.
```

> **Always size the maximum string from the coldest record/design temperature, not the average winter low.** A single cold, clear morning can push string Voc to its annual maximum. Exceeding the 1500 V (or inverter input) limit risks tripping or damaging the inverter and is an inspection failure. Use the site's ASHRAE extreme-minimum design dry-bulb temperature.

## DC/AC Ratio (ILR) and Clipping Trade-off

The **inverter loading ratio (ILR)** = installed DC nameplate (STC) ÷ inverter AC rating. Commercial systems oversize DC because field DC output rarely reaches STC.

| ILR | Behavior |
|-----|----------|
| ~1.0 | Inverter rarely loaded; under-utilized; low clipping but lower yield/$ |
| **1.2–1.4** | Typical commercial sweet spot; near-full inverter output more hours; modest midday clipping |
| > 1.5 | Aggressive; meaningful clipping losses; justified only by very flat export value, demand-shaving, or storage |

**Clipping** occurs when potential DC output exceeds the inverter AC rating; the surplus is capped (lost). A little clipping is economically optimal — it fills the morning/evening shoulders cheaply at the cost of a small clipped peak.

```
Worked example — ILR and clipping:
  Inverter AC rating ................. 250 kW (AC)
  Choose ILR = 1.30
  DC nameplate = 250 × 1.30 = 325 kWdc

  At true STC the array could push 325 kW into a 250 kW inverter →
  the 75 kW surplus at the noon peak is clipped. But STC conditions
  are rare; modeling typically shows only ~1–3% annual energy clipped
  at ILR ~1.3 — usually outweighed by the extra shoulder-hour yield.
  → Confirm the exact clipping % in production modeling (PVsyst/PVWatts)
    for the specific site, then compare yield $ vs. added DC cost.
```

## Conductor Sizing and Voltage Drop (Long Commercial Runs)

Commercial runs (rooftop to a distant MDP, or array to a ground-mount inverter pad) can be long; voltage drop and conductor ampacity both matter. Three-phase voltage drop:

```
Vdrop_3ph = √3 × I × (R/1000) × L          (volts, one-way length L in ft)
%Vdrop    = (Vdrop_3ph / V_LL) × 100
```

where `I` = current (A), `R` = conductor resistance in ohms per 1000 ft (from NEC Chapter 9, Table 8 / Table 9), and `L` = one-way circuit length (ft).

```
Worked example — AC feeder voltage drop:
  Load: 250 kW inverter @ 480 V, I ≈ 301 A (from earlier)
  Run length L = 350 ft (one way)
  Conductor: 600 kcmil copper, R ≈ 0.0214 Ω/1000 ft (approx; verify Ch. 9)

  Vdrop = √3 × 301 × (0.0214/1000) × 350
        = 1.732 × 301 × 0.0000214 × 350
        ≈ 3.90 V
  %Vdrop = 3.90 / 480 × 100 ≈ 0.81 %   ✓ well under the 2–3% target

  If 350 ft used a smaller conductor with R = 0.049 Ω/1000 ft:
  Vdrop ≈ 1.732 × 301 × 0.000049 × 350 ≈ 8.94 V → 1.86% (still OK,
  but margin shrinks; upsize for longer runs).
```

> **Target ≤ 2% drop on each of the DC and AC circuits (≤ ~3% total) as a design rule of thumb** — NEC treats voltage drop as a recommendation (informational notes), but excessive drop wastes energy and can drop string MPP voltage out of the window. Conductor ampacity (with temperature and conduit-fill derating, and the 1.25 continuous factor) is the **code** requirement and is sized separately; verify both.

## Transformer and Service Sizing Basics

- **Inverter ↔ service voltage match.** If the inverter output voltage differs from the service (e.g., 480 V inverter on a 208 V service, or a 600 V-class inverter on 480 V), add a step-up/step-down transformer sized for the inverter's continuous kVA with margin.
- **Transformer kVA** ≈ inverter AC kW ÷ pf (pf ≈ 1.0 for PV) plus headroom; round up to a standard size.
- **Service / busbar headroom** governs load-side interconnection via the 120% rule (see [Commercial System Design](./commercial-design.md)). If PV exceeds the busbar's headroom, a supply-side tap or service upgrade is required.
- **Available fault current (AIC)** at the interconnection point must be confirmed so overcurrent devices and gear are adequately rated.

## Capacity Factor and Specific Yield

Two performance metrics frame production:

```
Capacity factor (CF) = annual kWh / (DC kW × 8760 h)
Specific yield       = annual kWh / DC kW   (kWh per kWp per year)
```

```
Worked example:
  325 kWdc system producing 520,000 kWh/year
  Specific yield = 520,000 / 325 ≈ 1,600 kWh/kWp/yr
  Capacity factor = 520,000 / (325 × 8760) = 520,000 / 2,847,000 ≈ 18.3%
```

Typical U.S. commercial specific yield runs ~1,200–1,800 kWh/kWp/yr (CF ≈ 14–21%) depending on resource, tilt, ILR, and losses. Use site-specific modeling (PVWatts/PVsyst), not a flat rule.

## Financial Basics

> **Reference the site's commercial incentive guides for the ITC, MACRS depreciation, and bonus depreciation** — those credits and deductions dominate after-tax returns and are not re-derived here. The metrics below are the pre-incentive levers.

**Levelized cost of energy (LCOE):**

```
LCOE = (lifetime costs, present-valued) / (lifetime kWh, present-valued)
```

Lifetime costs include install (capex), O&M, inverter replacement, and financing, discounted; lifetime energy accounts for annual **degradation** (~0.5%/yr). LCOE lets you compare the PV cost per kWh against the utility rate.

**PPA pricing** (for third-party-owned / community solar): a $/kWh rate the offtaker pays, usually with an annual **escalator** (e.g., 1.5–2.5%/yr), set below the projected utility rate so the customer saves from day one.

**Demand-charge savings** are a distinct revenue stream from energy savings and must be modeled from interval data + the solar profile (see above) — they are often the difference between a marginal and a strong commercial IRR, and the main case for adding storage.

**Simple payback:**

```
Payback (yrs) ≈ net installed cost (after incentives) / annual savings
                where annual savings = energy savings + demand savings + any PBI/SREC
```

Typical commercial all-in installed cost runs roughly **$1.00–$2.00/W** (region-, size-, and complexity-dependent); confirm with current local bids rather than a fixed figure.

## Sources & Further Reading

- [Commercial System Design](./commercial-design.md) — design context for these calculations
- [Commercial Permitting & Interconnection](./commercial-permitting.md) — interconnection and study process
- [Calculations & Formulas](./calculations-formulas.md) — general PV math reference
- [Battery Storage](./battery-storage.md) — demand-charge management with storage
- [Design Recommendations for 1500 V String Inverters — PurePower](https://www.purepower.com/blog/design-suggestions-to-take-advantage-of-1500v-inverters)
- [The Real-World Value of a 1500 V String Inverter — Aforenergy](https://www.aforenergy.com/the-real-world-value-of-a-1500v-string-inverter-in-modern-solar-projects/)
- [NREL PVWatts Calculator](https://pvwatts.nrel.gov/)

---

*Educational and reference material only. This is not engineering, legal, or financial advice. All worked numbers are illustrative; conductor data, temperature coefficients, tariff structures, and incentive values are project-specific. Verify string sizing, conductor ampacity, voltage drop, and financial assumptions with the manufacturers' datasheets, the NEC, the serving utility, the AHJ, and a licensed professional engineer (PE) before relying on them.*
