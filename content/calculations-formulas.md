# Solar Calculations & Formulas

This page is an in-depth working reference for the equations used to design, size, and evaluate grid-tied and battery-backed photovoltaic (PV) systems. It is organized from electrical fundamentals through resource assessment, system sizing, string/conductor sizing under the National Electrical Code (NEC), array geometry, and financial metrics. Worked examples are separated into **RESIDENTIAL** and **COMMERCIAL** cases where the design constraints differ materially.

All equations are written in plain-text. Substitute real, project-specific values from manufacturer datasheets, weather data, and the adopted code edition before relying on any result.

---

## 1. Electrical Fundamentals

### 1.1 Ohm's Law

The relationship between voltage (`V`, volts), current (`I`, amperes), and resistance (`R`, ohms):

```
V = I × R
I = V ÷ R
R = V ÷ I
```

### 1.2 DC Power

For a DC circuit (PV modules and strings on the DC side are DC):

```
P = V × I        (watts = volts × amperes)
```

Combined with Ohm's law:

```
P = I² × R = V² ÷ R
```

### 1.3 AC Power: Real, Reactive, Apparent, and Power Factor

On the AC side (inverter output, service conductors, utility), three power quantities matter:

| Quantity | Symbol | Unit | Meaning |
|---|---|---|---|
| **Real (active) power** | `P` | W (or kW) | Power that does useful work |
| **Reactive power** | `Q` | VAR (or kVAR) | Power exchanged with reactive loads, does no net work |
| **Apparent power** | `S` | VA (or kVA) | Vector sum of real and reactive power |

```
S = V × I              (single phase apparent power)
P = S × pf             (real power)
Q = S × sin(θ) = √(S² − P²)
S = √(P² + Q²)
pf = P ÷ S = cos(θ)
```

**Power factor (`pf`)** is the cosine of the phase angle `θ` between voltage and current, ranging 0 to 1. Most grid-tied PV inverters operate near **unity power factor (pf ≈ 1.0)** unless commanded by the utility to supply or absorb reactive power (volt-VAR / power-factor modes under IEEE 1547 / UL 1741-SB).

> **Rule of thumb:** Inverter nameplate is often given in both kW and kVA. Size AC conductors and OCPD to the **continuous AC output current at the rated apparent power (kVA)** and lowest permitted operating voltage, not just kW.

### 1.4 Single-Phase vs. Three-Phase Power

**Single-phase** (typical residential service, 240 V split-phase in North America):

```
P = V × I × pf
```

**Three-phase** (typical commercial service, 208 V, 480 V, etc.). Using line-to-line voltage `VL` and line current `IL`:

```
P = √3 × VL × IL × pf
S = √3 × VL × IL
```

Solving for line current from a known three-phase apparent power:

```
IL = S ÷ (√3 × VL)
```

```
WORKED EXAMPLE — three-phase inverter output current
A 50 kW (50 kVA) commercial inverter, 480 V three-phase, pf = 1.0:
  IL = S ÷ (√3 × VL)
  IL = 50,000 VA ÷ (1.732 × 480 V)
  IL = 50,000 ÷ 831.4
  IL = 60.1 A continuous output current
Conductor/OCPD sizing then applies the 125% continuous factor:
  60.1 A × 1.25 = 75.1 A  → size for at least 75.1 A
```

---

## 2. Solar Resource

### 2.1 Irradiance vs. Insolation

- **Irradiance** is *instantaneous* power density from the sun, in **W/m²**. The reference value at Standard Test Conditions (STC) is **1000 W/m²**.
- **Insolation** (incident solar radiation) is *energy* accumulated over time, in **Wh/m²** or **kWh/m²** (often per day).

```
Insolation (kWh/m²) = Irradiance (kW/m²) integrated over time (h)
```

### 2.2 Peak Sun Hours (PSH)

**Peak sun hours** is the number of hours per day during which irradiance would have to equal exactly 1000 W/m² to deliver the same total daily insolation. Numerically, **daily PSH = daily insolation in kWh/m²** at the array's tilt and orientation.

```
PSH (h/day) = Daily plane-of-array insolation (kWh/m²/day) ÷ 1.0 (kW/m²)
```

Example: a site receiving 5.5 kWh/m²/day on the array plane has **5.5 peak sun hours**.

### 2.3 Getting PSH by Location

Use modeled meteorological datasets rather than guessing:

- **[NREL PVWatts Calculator](https://pvwatts.nrel.gov/)** — returns plane-of-array insolation, monthly/annual production, and the derate "system losses" stack for any location.
- **[NREL National Solar Radiation Database (NSRDB)](https://nsrdb.nrel.gov/)** — raw TMY irradiance data.
- **[Global Solar Atlas](https://globalsolaratlas.info/)** — worldwide GHI/DNI/PVOUT maps.

> **Note:** PSH changes with **tilt and azimuth**. PVWatts reports plane-of-array (POA) values for the orientation you enter, which is what sizing should use — not the horizontal GHI.

---

## 3. System Sizing

### 3.1 Sizing from a Target Annual Energy

To size the DC array (kWp) needed to meet a target annual energy production:

```
System kWp = Annual kWh ÷ (PSH × 365 × PR)
```

Where `PR` is the **performance ratio** (Section 3.2). Equivalently, expected production from a known array:

```
Annual kWh = System kWp × PSH × 365 × PR
```

```
WORKED EXAMPLE — RESIDENTIAL sizing
Home uses 11,000 kWh/year. Site PSH = 4.8. Assume PR = 0.80.
  System kWp = 11,000 ÷ (4.8 × 365 × 0.80)
  System kWp = 11,000 ÷ 1,401.6
  System kWp = 7.85 kWp DC
At 410 W modules: 7,850 ÷ 410 ≈ 20 modules (8.2 kWp).
```

```
WORKED EXAMPLE — COMMERCIAL sizing
Facility target = 1,200,000 kWh/year (offset). Site PSH = 5.3. PR = 0.82.
  System kWp = 1,200,000 ÷ (5.3 × 365 × 0.82)
  System kWp = 1,200,000 ÷ 1,586.5
  System kWp = 756 kWp DC
```

### 3.2 Performance Ratio and the Derate Stack

**Performance ratio (PR)** is the ratio of actual/expected AC energy delivered to the theoretical energy at the array's rated DC power and measured irradiance. It is the product of all individual loss factors:

```
PR = (1 − L_temp) × (1 − L_soil) × (1 − L_mismatch) × (1 − L_wiring) × (1 − L_inv) × (1 − L_avail) × ...
```

A typical modern fixed-tilt system has PR ≈ **0.78–0.84**.

### 3.3 Specific Yield

**Specific yield** normalizes production to installed DC capacity, enabling apples-to-apples comparison between systems:

```
Specific yield (kWh/kWp/yr) = Annual AC energy (kWh) ÷ System size (kWp)
```

Typical values range from ~1,100 kWh/kWp (cloudy northern climates) to ~1,900+ kWh/kWp (high-irradiance deserts).

### 3.4 Capacity Factor

**Capacity factor (CF)** is the ratio of actual energy produced to the energy that would be produced running at full nameplate AC power continuously:

```
CF = Annual AC energy (kWh) ÷ (Rated AC power (kW) × 8760 h)
```

```
WORKED EXAMPLE — capacity factor
A 1,000 kW-AC system produces 1,950,000 kWh/year:
  CF = 1,950,000 ÷ (1,000 × 8760)
  CF = 1,950,000 ÷ 8,760,000
  CF = 0.2226 ≈ 22.3%
Fixed-tilt PV typically lands ~15–25%; single-axis trackers ~25–32%.
```

---

## 4. Energy Yield & Losses (Derate Table)

The cumulative derate stack converts ideal DC nameplate energy into delivered AC energy. Typical loss magnitudes (modeled in PVWatts and similar tools):

| Loss mechanism | Typical loss | Notes |
|---|---|---|
| **Cell temperature** | 5–15% | Output falls as cells heat above 25 °C STC; depends on climate & mounting |
| **Soiling** | 1–5% | Dust/pollen/snow; higher in arid/agricultural/dusty sites |
| **Shading** | 0–10%+ | Site-specific; near/far obstructions, inter-row |
| **Module mismatch** | 1–2% | Cell-to-cell, module-to-module manufacturing tolerance |
| **DC wiring (I²R)** | 1–2% | Resistive losses in DC conductors |
| **AC wiring (I²R)** | 0.5–1% | Resistive losses on AC side |
| **Inverter efficiency** | 2–4% | Conversion loss (CEC weighted efficiency ~96–99%) |
| **Light-induced degradation (LID)** | 0.5–2% | Initial first-year drop |
| **Nameplate tolerance** | 0–1% | Actual vs. rated DC power |
| **Connections** | ~0.5% | Resistance at terminations |
| **Availability / downtime** | 1–3% | Grid outages, O&M, faults |
| **Annual degradation** | ~0.3–0.7%/yr | Ongoing; not a year-one loss but reduces lifetime yield |

> **Default PVWatts "system losses"** lumps several of these into a single ~14% default. Always replace with project-specific values when known.

---

## 5. String Sizing (Detailed)

String sizing reconciles three voltage constraints against the inverter's MPPT and absolute-maximum input window:

1. **Maximum string Voc (cold)** must stay **below** the inverter's max DC input voltage **and** the module/system max system voltage (NEC 690.7).
2. **Minimum string Vmp (hot)** should stay **above** the inverter's MPPT minimum / startup voltage so the MPPT can operate.
3. **Operating Vmp** should sit comfortably inside the MPPT window across temperatures.

### 5.1 Cold-Temperature Voc Correction

Open-circuit voltage **rises** as temperature **drops**. The worst case for over-voltage is the **record/extreme minimum ambient temperature** at the site (per ASHRAE extreme annual mean minimum, used at sunrise when cell temp ≈ ambient).

```
Voc_cold = Voc_stc × (1 + (β ÷ 100) × (Tmin − 25))
```

Where:
- `Voc_stc` = module open-circuit voltage at STC (datasheet)
- `β` = temperature coefficient of Voc in **%/°C** (negative number, e.g. −0.27)
- `Tmin` = lowest expected cell/ambient temperature in °C
- `25` = STC reference temperature in °C

Per **NEC 690.7(A)**, you must use the manufacturer's coefficient if provided; otherwise use NEC Table 690.7(A) correction factors. Maximum number of modules per string:

```
N_max = floor( V_inverter_max ÷ Voc_cold_per_module )
```

### 5.2 Hot-Temperature Vmp (Minimum String) Check

Vmp **falls** as temperature **rises**. Worst case for dropping below MPPT minimum is the **highest expected cell temperature** (often 65–75 °C for the cell on a hot day):

```
Vmp_hot = Vmp_stc × (1 + (γ ÷ 100) × (Tmax_cell − 25))
N_min = ceil( V_mppt_min ÷ Vmp_hot_per_module )
```

Where `γ` is the temperature coefficient of Vmp (or Pmax) in %/°C (negative).

### 5.3 Worked Example — RESIDENTIAL 600 V String Inverter

```
WORKED EXAMPLE — RESIDENTIAL, 600 V max (one/two-family dwelling, NEC 690.7)
Module: Voc_stc = 41.5 V, Vmp_stc = 34.8 V, β(Voc) = −0.27 %/°C
Inverter: max DC input = 600 V, MPPT min ≈ 100 V, startup ≈ 120 V
Site extreme low temp Tmin = −20 °C
Site high cell temp Tmax_cell = 70 °C, γ(Vmp) ≈ −0.34 %/°C

Step 1 — Cold Voc per module:
  Voc_cold = 41.5 × (1 + (−0.27 ÷ 100) × (−20 − 25))
  Voc_cold = 41.5 × (1 + (−0.0027) × (−45))
  Voc_cold = 41.5 × (1 + 0.1215)
  Voc_cold = 41.5 × 1.1215 = 46.54 V per module

Step 2 — Max modules per string:
  N_max = floor(600 ÷ 46.54) = floor(12.89) = 12 modules

Step 3 — Hot Vmp per module (min-string check):
  Vmp_hot = 34.8 × (1 + (−0.34 ÷ 100) × (70 − 25))
  Vmp_hot = 34.8 × (1 + (−0.0034)(45))
  Vmp_hot = 34.8 × (1 − 0.153) = 29.47 V per module

Step 4 — Min modules to stay above MPPT/startup:
  N_min = ceil(120 ÷ 29.47) = ceil(4.07) = 5 modules

RESULT: 5 to 12 modules per string. A 10-module string is well-centered:
  Cold Voc = 10 × 46.54 = 465.4 V  (< 600 V ✓)
  Hot Vmp  = 10 × 29.47 = 294.7 V  (> 120 V startup ✓)
```

### 5.4 Worked Example — COMMERCIAL 1500 V String Inverter

```
WORKED EXAMPLE — COMMERCIAL, 1500 V max DC input
Module: Voc_stc = 49.6 V, Vmp_stc = 41.8 V, β(Voc) = −0.25 %/°C
Inverter: max DC input = 1500 V, MPPT min ≈ 500 V
Site extreme low temp Tmin = −25 °C
Site high cell temp Tmax_cell = 72 °C, γ(Vmp) ≈ −0.30 %/°C

Step 1 — Cold Voc per module:
  Voc_cold = 49.6 × (1 + (−0.25 ÷ 100) × (−25 − 25))
  Voc_cold = 49.6 × (1 + (−0.0025) × (−50))
  Voc_cold = 49.6 × (1 + 0.125)
  Voc_cold = 49.6 × 1.125 = 55.80 V per module

Step 2 — Max modules per string:
  N_max = floor(1500 ÷ 55.80) = floor(26.88) = 26 modules

Step 3 — Hot Vmp per module:
  Vmp_hot = 41.8 × (1 + (−0.0030)(72 − 25))
  Vmp_hot = 41.8 × (1 − 0.141) = 35.91 V per module

Step 4 — Min modules above MPPT minimum:
  N_min = ceil(500 ÷ 35.91) = ceil(13.92) = 14 modules

RESULT: 14 to 26 modules per string. A 24-module string:
  Cold Voc = 24 × 55.80 = 1339.2 V  (< 1500 V ✓)
  Hot Vmp  = 24 × 35.91 = 861.8 V   (> 500 V ✓)
```

> **Warning:** Always leave engineering margin below the absolute max (do not design to exactly the limit). Verify against the *lower* of inverter max input voltage and module max system voltage. Confirm the site's true extreme minimum from ASHRAE data, not the typical winter low.

---

## 6. Conductor & OCPD Sizing (NEC)

### 6.1 Maximum PV Source/Output Circuit Current — NEC 690.8(A)

For systems under 100 kW, the maximum current of a PV source/output circuit is **125% of the sum of the parallel module short-circuit currents (Isc)** to account for irradiance above 1000 W/m²:

```
I_max = 1.25 × Isc   (per parallel source; sum parallel strings)
```

### 6.2 Continuous-Current Conductor Sizing — the 125% × 125% Rule

PV output is treated as a **continuous load**, so a second 125% factor applies for conductor ampacity and OCPD. The conductor must have ampacity (after all correction/adjustment factors) of at least:

```
Conductor minimum ampacity = 1.25 × (1.25 × Isc) = 1.5625 × Isc
```

The first 1.25 (690.8(A)) covers high irradiance; the second 1.25 covers continuous duty. **NEC 690.8(B)** also requires conductors to be sized to the **larger** of:
- (a) 1.25 × continuous current (before temperature/conduit adjustment), or
- (b) the maximum current after temperature and conduit-fill adjustment factors (at 100%).

### 6.3 OCPD — NEC 690.9

Overcurrent devices (fuses/breakers) protecting PV circuits must be rated at least **125% of the maximum current** from 690.8(A), then rounded up to a standard rating (NEC 240.6):

```
OCPD ≥ 1.25 × (1.25 × Isc) = 1.5625 × Isc
```

> The PV-circuit fuse/breaker rating must not exceed the conductor ampacity **and** must not exceed the module's maximum series fuse rating from the datasheet.

### 6.4 Ampacity Correction & Adjustment

Base conductor ampacity (NEC Table 310.16, typically the 75 °C or 90 °C column) is reduced by:

- **Temperature correction** — Table 310.15(B)(1) — for ambient temperature; rooftop conduit adds a temperature **adder** (historically Table 310.15(B)(3)(c)).
- **Conduit-fill adjustment** — Table 310.15(C)(1) — for more than 3 current-carrying conductors in a raceway (e.g. 4–6 conductors = 80%, 7–9 = 70%).

```
Adjusted ampacity = Base ampacity (90°C col) × Temp_correction × Fill_adjustment
This adjusted value must be ≥ 1.25 × Isc (continuous), per 690.8(B).
```

```
WORKED EXAMPLE — DC conductor ampacity check
Module Isc = 11.0 A, two strings in parallel into one combiner output.
  Step 1: per-string design current = 1.25 × 11.0 = 13.75 A
  Step 2: continuous sizing = 1.25 × 13.75 = 17.19 A per string
  Combiner output (2 parallel): 2 × 17.19 = 34.4 A
  Step 3: choose 10 AWG Cu, 90°C = 40 A base.
  Rooftop, 4 CCCs in conduit, ambient 36°C corrected to ~61°C cell-vicinity:
    Temp factor (90°C col, ~61°C) ≈ 0.71
    Fill factor (4–6 CCCs) = 0.80
    Adjusted = 40 × 0.71 × 0.80 = 22.7 A  (≥ 17.19 A per string ✓)
  Verify terminations at 75°C column also satisfied.
```

### 6.5 Voltage Drop

Voltage drop is not strictly an NEC ampacity requirement (it is a recommendation in 210.19/215 informational notes) but is a design must. For a **single-phase / DC two-wire** run using the K-constant method:

```
Vdrop = (2 × K × I × L) ÷ CM
%Vd = (Vdrop ÷ Vsource) × 100
```

Where:
- `K` = resistivity constant ≈ **12.9 Ω·cmil/ft for copper**, **21.2 for aluminum** (at 75 °C)
- `I` = current (A)
- `L` = one-way circuit length (ft)
- `CM` = conductor cross-sectional area in **circular mils** (e.g. 10 AWG = 10,380 cmil; 8 AWG = 16,510; 6 AWG = 26,240; 4 AWG = 41,740)
- `2` = factor for the round-trip (out and back) of a 2-wire circuit

For **three-phase**, replace `2` with `√3` (1.732).

```
WORKED EXAMPLE — long DC run voltage drop
String operating: Vmp = 360 V, Imp = 10.5 A, one-way length L = 150 ft.
Conductor: 8 AWG Cu, CM = 16,510 cmil, K = 12.9
  Vdrop = (2 × 12.9 × 10.5 × 150) ÷ 16,510
  Vdrop = (40,635) ÷ 16,510
  Vdrop = 2.46 V
  %Vd = (2.46 ÷ 360) × 100 = 0.68%   (well under 2% DC target ✓)
```

> **Rule of thumb:** Keep DC string-to-inverter drop under ~2% and total system (DC + AC) under ~3%. If a run exceeds target, increase conductor size (more circular mils) or shorten the run.

---

## 7. Interconnection — NEC 705.12 Busbar "120% Rule"

When PV is connected on the **load side** of the service (a back-fed breaker in a panel), the busbar can be fed from both the utility main and the PV breaker. **NEC 705.12(B)(3)(2)** (the "120% rule," formerly 705.12(D)(2)) permits, where the PV breaker is at the **opposite end** from the main:

```
(Main breaker rating) + (Sum of back-fed PV breakers) ≤ 1.20 × Busbar rating
```

The back-fed PV breaker is sized at **125% of the inverter continuous output current**, rounded up to a standard size.

```
WORKED EXAMPLE — RESIDENTIAL 120% rule
200 A busbar, 200 A main breaker, single 7.6 kW inverter, 240 V, pf 1.0.
  Inverter continuous output: 7600 ÷ 240 = 31.7 A
  PV breaker: 1.25 × 31.7 = 39.6 A → round up to 40 A breaker
  Check: 200 (main) + 40 (PV) = 240 A
  Limit: 1.20 × 200 = 240 A
  240 ≤ 240  → PASSES exactly (opposite-end placement) ✓
```

```
WORKED EXAMPLE — COMMERCIAL 120% rule
800 A busbar, 600 A main breaker, three 50 kVA inverters, 480 V 3-phase.
  Per inverter continuous output: 50,000 ÷ (1.732 × 480) = 60.1 A
  Three inverters combined at AC panel: 3 × 60.1 = 180.4 A
  Aggregate PV breaker: 1.25 × 180.4 = 225.5 A → 250 A breaker
  Check: 600 (main) + 250 (PV) = 850 A
  Limit: 1.20 × 800 = 960 A
  850 ≤ 960  → PASSES ✓ (room remains for future expansion)
```

> **Alternatives if the 120% rule fails:** use the **sum rule** (main + PV ≤ busbar rating), a **center-fed** allowance, a **supply-side (line-side) tap** per NEC 705.11, a **breaker downsize** of the main, or an **Energy Management System / Power Control System** per NEC 705.13.

---

## 8. Array Geometry

### 8.1 Optimal Tilt and Azimuth

- **Azimuth:** In the Northern Hemisphere, optimal is **true south (180°)**; small east/west offsets cost little annual energy. (Reverse for Southern Hemisphere.)
- **Tilt (annual-optimal):** roughly equal to **site latitude** for year-round energy; lower tilt favors summer, higher tilt favors winter. Use PVWatts to optimize for the actual rate structure/load shape.

### 8.2 Inter-Row Spacing & Ground-Coverage Ratio

**Ground-coverage ratio (GCR)** is the module-area-to-ground-area ratio:

```
GCR = Module row width (along slope) ÷ Row pitch (center-to-center)
```

To avoid inter-row shading at a target time (commonly solar noon on the **winter solstice**), compute the shadow length cast by a row of height `h` (vertical height of the tilted row above its base):

```
Shadow length = h ÷ tan(α)
```

Where `α` is the **solar elevation (altitude) angle** at the design time. The minimum row pitch is then the shadow length projected so the next row's base is unshaded; with row collector width `W` at tilt `θ`:

```
Module vertical height:   h = W × sin(θ)
Module horizontal depth:  d = W × cos(θ)
Min pitch (no-shade) ≈ d + (h ÷ tan(α))
GCR = W ÷ pitch
```

```
WORKED EXAMPLE — inter-row spacing
Row collector width W = 4.0 m, tilt θ = 30°, design solar elevation α = 25°.
  h = 4.0 × sin(30°) = 4.0 × 0.500 = 2.00 m
  d = 4.0 × cos(30°) = 4.0 × 0.866 = 3.46 m
  Shadow = h ÷ tan(25°) = 2.00 ÷ 0.4663 = 4.29 m
  Min pitch = 3.46 + 4.29 = 7.75 m
  GCR = 4.0 ÷ 7.75 = 0.52
```

### 8.3 Tracker GCR

Single-axis trackers trade higher GCR (tighter packing, lower land/wiring cost) against **backtracking** losses (panels rotate flat near sunrise/sunset to avoid row-on-row shading). Typical single-axis GCR is **0.30–0.45**. Higher GCR raises energy density per acre but increases diffuse-shading and backtracking energy loss.

---

## 9. Financial Metrics

### 9.1 Simple Payback

```
Simple payback (years) = Net installed cost ÷ Annual savings (or net cash flow)
```

Ignores time value of money and degradation — use only as a first-order screen.

### 9.2 Levelized Cost of Energy (LCOE)

LCOE is the lifetime cost per unit of energy, discounting both costs and energy:

```
LCOE = Σ[ (I_t + O_t + F_t) ÷ (1 + r)^t ] ÷ Σ[ E_t ÷ (1 + r)^t ]
```

Where for each year `t`: `I_t` = investment/capital, `O_t` = O&M, `F_t` = fuel (≈ 0 for PV), `E_t` = energy produced (declining with degradation), and `r` = discount rate. A **simplified** form:

```
sLCOE = (Capital × CRF + Annual O&M) ÷ (Annual energy production)

CRF = [ r × (1 + r)^n ] ÷ [ (1 + r)^n − 1 ]
```

Where **CRF** is the capital recovery factor, `r` = discount rate, `n` = analysis period (years).

```
WORKED EXAMPLE — simplified LCOE
Capital = $1,500,000; r = 6%; n = 25 yr; O&M = $15,000/yr; Year-1 energy = 1,950,000 kWh.
  CRF = (0.06 × 1.06^25) ÷ (1.06^25 − 1)
      = (0.06 × 4.2919) ÷ (4.2919 − 1)
      = 0.25751 ÷ 3.2919 = 0.07823
  Annualized capital = 1,500,000 × 0.07823 = $117,345/yr
  sLCOE ≈ (117,345 + 15,000) ÷ 1,950,000
        = 132,345 ÷ 1,950,000 = $0.0679/kWh ≈ 6.8 ¢/kWh
(A full LCOE would also discount degraded annual energy.)
```

### 9.3 NPV and IRR (Concept)

- **Net Present Value (NPV):** sum of all discounted cash flows; positive NPV means the project beats the discount-rate hurdle.

```
NPV = Σ[ Cashflow_t ÷ (1 + r)^t ]  −  Initial investment
```

- **Internal Rate of Return (IRR):** the discount rate `r` at which NPV = 0. Compare IRR to the cost of capital / required return.

### 9.4 DC/AC Ratio (ILR) & Clipping

The **DC-to-AC ratio**, or **inverter load ratio (ILR)**, is array DC nameplate divided by inverter AC nameplate:

```
ILR = Array DC kWp ÷ Inverter AC kW
```

Oversizing the array (ILR > 1.0) raises low-light/morning/evening production and improves capacity factor, but the inverter **clips** (caps output) when DC power exceeds AC rating during peak irradiance. Typical economic ILR is **1.15–1.35** (fixed tilt) and can be lower for trackers/high-irradiance sites.

```
WORKED EXAMPLE — ILR / clipping
Array = 1,200 kWp DC, Inverter = 1,000 kW AC.
  ILR = 1,200 ÷ 1,000 = 1.20
On the clearest few midday hours, DC > 1,000 kW is clipped to 1,000 kW AC.
Modest clipping (a few % of annual energy) is usually a net economic gain
because the inverter cost is shared over more annual kWh.
```

```
WORKED EXAMPLE — RESIDENTIAL financial summary
8.2 kWp system, installed $22,000, 30% federal ITC = −$6,600 → net $15,400.
Year-1 production 12,000 kWh, offsetting $0.16/kWh = $1,920/yr savings.
  Simple payback = 15,400 ÷ 1,920 = 8.0 years
```

```
WORKED EXAMPLE — COMMERCIAL financial summary
756 kWp system, installed $1,100,000.
ITC 30% (−$330,000) + 5-yr MACRS depreciation benefit (≈ −$200,000) → net ≈ $570,000.
Year-1 production 1,200,000 kWh; blended value $0.12/kWh = $144,000/yr.
  Simple payback ≈ 570,000 ÷ 144,000 = 4.0 years
(Commercial uses LCOE, NPV, and IRR for an investment-grade decision, not just payback.)
```

---

## Sources & Further Reading

- [NREL PVWatts Calculator](https://pvwatts.nrel.gov/) — production modeling and loss/derate defaults
- [NREL National Solar Radiation Database (NSRDB)](https://nsrdb.nrel.gov/) — irradiance/TMY data
- [NREL Simple LCOE Calculator Documentation](https://www.nrel.gov/analysis/tech-lcoe-documentation) — LCOE and CRF method
- [Global Solar Atlas](https://globalsolaratlas.info/) — worldwide solar resource maps
- [ExpertCE — PV String Sizing Calculations](https://expertce.com/learn-articles/pv-string-sizing-calculations-guide/) — temperature-corrected Voc/Vmp
- [Mayfield Renewables — 2023 NEC 690.7 & String Sizing Update](https://www.mayfield.energy/technical-articles/2023-update-how-to-calculate-pv-string-size/)
- [ExpertCE — Sizing PV Conductors & OCPD per NEC 690](https://expertce.com/learn-articles/sizing-pv-conductors-ocpd-nec-690/)
- [GreenLancer — The 120% Rule for Solar (NEC 705.12)](https://www.greenlancer.com/post/120-rule-for-solar)
- [Mayfield Renewables — NEC 705.12(B)(3) Code Corner](https://www.mayfield.energy/technical-articles/code-corner-2020-nec-705-12b31-and-2/)
- [EC&M — NEC Requirements for Solar](https://www.ecmweb.com/national-electrical-code/code-basics/article/55091230/nec-requirements-for-solar-part-2)
- NFPA 70 (National Electrical Code), Article 690 and Article 705 — consult the edition adopted by your AHJ

---

*Disclaimer: Educational/reference use only. Verify all values, formulas, and code citations against the NEC edition adopted by your jurisdiction, manufacturer datasheets, and a licensed Professional Engineer or electrician before design or installation.*
