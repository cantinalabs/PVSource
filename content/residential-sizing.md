# Residential Sizing & Calculations

This page is the arithmetic companion to **Residential System Design**. It shows the actual numbers:
how to convert utility bills into a system size, count panels, size strings and microinverters, size a
battery for backup, run the **NEC 705.12** busbar check, size the PV back-feed conductor and breaker,
and estimate simple payback under current incentive rules. Every formula is followed by a worked
example using plain-text math.

> **Scope.** Residential (1–2 family dwelling) grid-tied and battery-backup sizing. Verify every code
> figure against the **NEC edition adopted by your AHJ** and confirm interconnection limits with your
> utility.

---

## 1. Estimate annual energy use from bills

Pull **12 months of utility statements** and sum the kWh-used figures. Twelve months captures summer
cooling and winter heating swings that a single bill would miss.

```
Annual_kWh = sum of 12 monthly kWh-used values
```

**Worked example — the Reyes household:**

```
Bills total over 12 months ............ 11,400 kWh
Average monthly use ................... 11,400 ÷ 12 ≈ 950 kWh/month
```

We'll carry **11,400 kWh/yr** through the rest of this page.

---

## 2. Peak sun hours (PSH) by region

**Peak sun hours** is the number of hours per day equivalent to 1,000 W/m² of sun — it bundles
latitude, climate, and seasonality into one daily-average number. Use a location-specific value from
**NREL PVWatts**; the table below is for orientation only.

| Region (illustrative) | Approx. annual-average PSH/day |
| --- | --- |
| Desert Southwest (AZ, NV, NM) | 5.5–6.5 |
| Southeast / South Central (TX, FL, GA) | 4.5–5.5 |
| Mid-Atlantic / Midwest | 4.0–4.8 |
| Northeast / Pacific NW | 3.5–4.3 |

> **Rule of thumb:** Always pull a real PSH (or use PVWatts directly) for the design address. A
> half-hour error in PSH shifts system size by ~10%.

For the Reyes example, assume a Mid-Atlantic site at **4.5 PSH/day**.

---

## 3. System size from energy use

The core sizing formula accounts for real-world losses with a **performance ratio (PR)** — typically
**0.75–0.85** (temperature, soiling, wiring, inverter, mismatch losses):

```
System_kW = Annual_kWh ÷ (PSH × 365 × PR)
```

**Worked example (Reyes, 100% offset target, PR = 0.80):**

```
System_kW = 11,400 ÷ (4.5 × 365 × 0.80)
          = 11,400 ÷ 1,314
          ≈ 8.68 kW
```

So a roughly **8.7 kW DC** array offsets ~100% of usage at this site.

---

## 4. Number of panels

```
Panels = round_up( System_kW × 1000 ÷ Panel_W )
Actual_System_kW = Panels × Panel_W ÷ 1000
```

**Worked example (430 W modules):**

```
Panels = 8,680 ÷ 430 = 20.2  → round up to 21 panels
Actual_System_kW = 21 × 430 ÷ 1000 = 9.03 kW DC
```

Twenty-one 430 W modules give **9.03 kW DC**. Then confirm those 21 modules physically fit within the
usable roof area after fire setbacks (see **Residential System Design**).

---

## 5. Offset percentage check

```
Offset_% = (Estimated_annual_production ÷ Annual_kWh) × 100
Estimated_annual_production ≈ Actual_System_kW × PSH × 365 × PR
```

**Worked example:**

```
Production ≈ 9.03 × 4.5 × 365 × 0.80 ≈ 11,866 kWh/yr
Offset_%  = 11,866 ÷ 11,400 × 100 ≈ 104%
```

About **104% offset** — within typical utility caps of ~110%. If the utility caps at 100%, drop to 20
modules (8.6 kW, ~99%).

---

## 6. String vs. microinverter sizing for a home

### Microinverter sizing

With microinverters, you match each module to a compatible microinverter and check two limits:

1. **Module power within the micro's DC input window** (the micro must handle the module's rated W).
2. **AC branch circuit limit** — how many micros share one AC branch, set by the micro's continuous
   output current and the branch breaker.

```
Max_micros_per_branch = floor( (Branch_breaker_A × 0.80) ÷ Micro_continuous_A )
```

**Worked example** — micro rated **1.45 A** continuous AC, **20 A** branch breaker:

```
Max_micros_per_branch = floor( (20 × 0.80) ÷ 1.45 )
                      = floor( 16 ÷ 1.45 )
                      = floor(11.03) = 11 micros per 20A branch
```

So 21 modules → **two AC branch circuits** (e.g., 11 + 10). Always confirm against the
manufacturer's published per-branch maximum, which already bakes in the 80% rule.

### String inverter sizing

With a string inverter you must keep the string **voltage** inside the inverter's MPPT window across
all temperatures and the **current** within input limits.

- **Max modules per string (cold limit):** the string's open-circuit voltage at the **coldest
  expected temperature** must stay below the inverter's max DC input voltage.

```
Voc_cold_per_module = Voc_stc × [1 + TempCoeff_Voc × (T_cold − 25)]
Max_modules = floor( Inverter_max_DC_V ÷ Voc_cold_per_module )
```

**Worked example** — `Voc_stc = 40 V`, `TempCoeff_Voc = −0.0028/°C` (−0.28%/°C),
record-low `T_cold = −15°C`, inverter max input **600 V**:

```
Voc_cold = 40 × [1 + (−0.0028)(−15 − 25)]
         = 40 × [1 + (−0.0028)(−40)]
         = 40 × [1 + 0.112]
         = 40 × 1.112 = 44.48 V per module
Max_modules = floor( 600 ÷ 44.48 ) = floor(13.5) = 13 modules max per string
```

> **Cold = high voltage.** PV voltage *rises* as temperature drops. Sizing strings at STC (25°C)
> instead of record-cold temperature is a classic error that can over-voltage and damage the inverter.
> Use the AHJ-referenced extreme-low ("Extreme Annual Mean Minimum") temperature for the site.

For a 21-module 9 kW array, a string inverter might run two strings of 10–11 modules; with the cold
limit of 13 above, that's comfortably within range.

---

## 7. Battery sizing for critical-load backup

Backup batteries are sized to the **critical loads** you want to keep alive during an outage and the
**hours of autonomy** you want — not the whole house.

### Step 1 — list critical loads and daily energy

```
Daily_load_kWh = Σ ( Load_W × Hours_per_day ) ÷ 1000
```

**Worked example — critical loads:**

| Load | Power (W) | Hours/day | Wh/day |
| --- | --- | --- | --- |
| Refrigerator (duty-cycled avg) | 150 | 24 | 3,600 |
| Furnace blower / boiler controls | 300 | 6 | 1,800 |
| Well pump (avg) | 200 | 2 | 400 |
| LED lighting | 200 | 5 | 1,000 |
| Internet / phones / misc | 100 | 12 | 1,200 |
| **Total** | | | **8,000 Wh/day = 8.0 kWh/day** |

### Step 2 — size usable battery capacity

Account for **days of autonomy**, **depth of discharge (DoD)**, and **round-trip efficiency (η)**:

```
Battery_kWh = (Daily_load_kWh × Days_autonomy) ÷ (DoD × η)
```

**Worked example** — 1 day of autonomy, LFP DoD = 0.90, η = 0.90:

```
Battery_kWh = (8.0 × 1) ÷ (0.90 × 0.90)
            = 8.0 ÷ 0.81
            ≈ 9.9 kWh usable-rated battery
```

A single **~10 kWh** LFP battery covers this critical-load list for one day with no solar input. Two
days of autonomy (cloudy outage) would need ~20 kWh. In a grid-tied + battery system, daytime solar
**recharges** the battery, so real-world ride-through is usually longer than the no-sun figure.

> **Check the inverter's continuous and surge power**, not just energy. A well pump or AC compressor
> can draw a large momentary **surge**; the backup inverter must handle it or the load won't start.

---

## 8. NEC 705.12 busbar (120%) example — 200A panel

For a **load-side back-fed breaker** at the opposite end of the busbar from the main:

```
Max_PV_breaker_A = (Busbar_A × 1.20) − Main_breaker_A
```

**Worked example — 200A busbar, 200A main:**

```
Max_PV_breaker_A = (200 × 1.20) − 200 = 240 − 200 = 40A
```

So the largest load-side PV back-fed breaker is **40 A**. Now translate that to allowed inverter
output (the breaker must be ≥125% of continuous inverter current):

```
Max_continuous_inverter_A = Max_PV_breaker_A ÷ 1.25 = 40 ÷ 1.25 = 32A
```

At 240 V single-phase that's about `32 × 240 = 7,680 VA ≈ 7.7 kW AC` of inverter capacity on a
load-side connection.

> **If the array exceeds this**, options are a main-breaker downgrade, a **main panel upgrade**, or a
> **supply-side (line-side) tap**, which sidesteps the 120% calc entirely. See **Residential System
> Design** for the trade-offs.

---

## 9. Conductor & breaker sizing for the PV back-feed

Inverter output circuits are treated as **continuous** loads, so conductors and overcurrent devices
are sized at **125%** of the inverter's max continuous output current.

```
Min_breaker_A   = ceil_to_standard( Inverter_Imax × 1.25 )
Min_conductor_A = Inverter_Imax × 1.25   (before temperature/conduit derates)
```

**Worked example** — single 240 V inverter, max continuous output **27 A**:

```
Min_breaker_A   = 27 × 1.25 = 33.75  → next standard size = 35A breaker
Min_conductor_A = 27 × 1.25 = 33.75A required ampacity
```

A **35 A** back-fed breaker fits under the 40 A busbar limit from section 8. For the conductor, an
8 AWG copper (THWN-2, 75°C column ≈ 50 A) easily covers 33.75 A **before** derates. Apply any ambient
temperature and conduit-fill **derating factors**, and verify the wire's ampacity still meets the
required 33.75 A and the **OCPD ≤ conductor ampacity** rule.

> **Two checks must both pass:** (1) the breaker protects the conductor (conductor ampacity ≥ breaker
> rating after derates) and (2) the breaker satisfies the 120% busbar rule. Resize the conductor up if
> conduit/temperature derates pull its ampacity below the breaker rating.

---

## 10. Simple payback example

> **Critical 2026 tax note:** The federal **Section 25D Residential Clean Energy Credit (30%)** was
> **terminated by the One Big Beautiful Bill Act** for expenditures/installations **placed in service
> after December 31, 2025**. A system installed and operational in 2026 generally **does not** qualify
> for the 30% residential credit. The example below shows both a **pre-2026 (credit-eligible)** case
> for reference and a **2026 (no federal credit)** case. Always confirm current federal and
> **state/local** incentives for the install year.

**Assumptions:** 9.0 kW system, installed cost **$3.00/W = $27,000**, ~11,900 kWh/yr produced,
retail/net-metering value **$0.16/kWh**.

```
Annual_savings = 11,900 kWh × $0.16 = $1,904/year
```

**Case A — placed in service on/before Dec 31, 2025 (25D credit applied):**

```
Federal credit = 30% × $27,000 = $8,100
Net cost       = $27,000 − $8,100 = $18,900
Simple_payback = $18,900 ÷ $1,904 ≈ 9.9 years
```

**Case B — placed in service in 2026 (no federal 25D credit):**

```
Net cost       = $27,000  (federal credit no longer available)
Simple_payback = $27,000 ÷ $1,904 ≈ 14.2 years
```

```
Simple_payback_years = Net_system_cost ÷ Annual_savings
```

> **Net metering drives payback.** Where utilities pay full retail for exports, payback is short;
> where exports are credited at low "avoided cost" rates, a **battery** to self-consume evening energy
> can improve the economics. Time-of-use rates, escalating utility prices, and remaining
> **state/local** incentives all shift the real number — model your specific tariff.

---

## Sources & Further Reading

- [NREL PVWatts Calculator](https://pvwatts.nrel.gov/)
- [IRS — Residential Clean Energy Credit (Section 25D)](https://www.irs.gov/credits-deductions/residential-clean-energy-credit)
- [Congress.gov CRS — Expiration and Carryforward Rules for the Residential Clean Energy Credit](https://www.congress.gov/crs-product/IN12611)
- [GreenLancer — The 120% Rule for Solar (NEC 705.12)](https://www.greenlancer.com/post/120-rule-for-solar)
- [GreenLancer — Solar Rapid Shutdown Requirements (NEC 690.12)](https://www.greenlancer.com/post/solar-rapid-shutdown-requirements)
- [EnergySage — Solar Panel Cost](https://www.energysage.com/local-data/solar-panel-cost/)
- [Solar.com — 2026 Solar Panel Costs](https://www.solar.com/learn/solar-panel-cost/)

---

*Educational/reference only; not engineering, electrical, or financial advice. Permits, licensed
electricians, and AHJ approval are required for grid-tied systems.*
