# Monitoring & Performance Analysis

Monitoring is the nervous system of a PV plant. It converts raw electrical and weather signals into the two questions that matter for [Operations & Maintenance](om-overview.md): *is the plant producing what it should?* and *if not, where is the loss?* This page covers the monitoring hardware stack, what gets measured, the KPIs and the performance-ratio calculation (with a worked example), how expected-versus-actual analysis localizes losses, and the alarming and analytics that turn data into action.

Monitoring is almost always the single highest-return O&M investment, because the dominant source of lost energy is *undetected* underperformance — not the failures you can see, but the ones you can't.

## Monitoring Architecture

A monitoring system is a layered stack. How many layers you deploy scales with plant size.

```
                   ┌─────────────────────────────┐
                   │   Cloud platform / DAS / O&M │  <- dashboards, alarms, analytics
                   └──────────────▲──────────────┘
                                  │  (cellular / fiber / internet)
                   ┌──────────────┴──────────────┐
                   │  Datalogger / SCADA gateway  │  <- aggregates, timestamps, buffers
                   └───▲────────▲────────▲────────┘
        ┌──────────────┘        │        └──────────────┐
 ┌──────┴──────┐   ┌────────────┴───────┐   ┌───────────┴────────┐
 │ Production  │   │ Inverters & string │   │  Weather station   │
 │  / revenue  │   │  /combiner monitors│   │ (irradiance, temp, │
 │   meters    │   │                    │   │   wind)            │
 └─────────────┘   └────────────────────┘   └────────────────────┘
```

| Component | Role | Scale where typical |
|---|---|---|
| **Datalogger** | Polls field devices, timestamps and buffers data, uploads to cloud | All scales |
| **Production / revenue meter** | The billing-grade truth of energy delivered; revenue meters are utility-accuracy (ANSI C12.20 / IEC 62053) | C&I and utility |
| **Inverter telemetry** | AC/DC power, voltage, current, efficiency, fault codes | All scales |
| **String / combiner monitoring** | Per-string or per-combiner current — catches single-string failures invisible at the inverter | C&I and utility |
| **Module-level (MLPE)** | Per-module power (microinverters/optimizers) | Residential, some C&I |
| **Weather station** | Plane-of-array (POA) and global horizontal irradiance, module & ambient temperature, wind | C&I and utility |
| **Soiling station** | Soiling ratio from paired clean/soiled reference cells | Utility, dusty C&I |
| **SCADA** | Real-time supervisory control, curtailment, grid compliance | Utility |

> **Key point:** Without a **POA irradiance** sensor (a reference cell or pyranometer in the array's plane), you cannot compute a true performance ratio — you only know production, not how much sun was available to produce from. Satellite/modeled irradiance can substitute on small sites but with more uncertainty.

## What Is Measured

The core channels every analysis depends on:

- **AC power & energy** — at the inverter and at the revenue meter; the bottom-line output.
- **DC power, voltage, current** — per inverter and per string; reveals string-level losses and MPPT problems.
- **POA irradiance** — the denominator of PR; the single most important field sensor.
- **Module (cell) temperature** — drives the temperature correction; modules lose roughly 0.3–0.45%/°C above 25 °C.
- **Ambient temperature & wind** — for temperature modeling and thermal context.
- **Inverter status / fault codes** — the primary corrective-maintenance trigger.
- **Soiling ratio** — from a soiling station, where deployed.

## KPIs and the Performance Ratio Calculation

### Specific yield

```
Specific yield (kWh/kWp) = Energy produced (kWh) / Installed DC capacity (kWp)
```

Useful for comparing plants of different sizes, but it does **not** correct for weather — a sunny site will always out-yield a cloudy one regardless of health.

### Performance Ratio (PR)

PR is the workhorse health metric because it normalizes out the weather. Per **IEC 61724**:

```
PR = Actual AC energy produced
     ----------------------------------------------
     (POA insolation / G_ref) × P_nominal × time
```

Equivalently, PR = (final yield) / (reference yield). A temperature-corrected PR (PR-3) further normalizes for module temperature so the target is `100%`. Uncorrected PR runs lower in hot weather, which is why month-to-month PR should be temperature-corrected before drawing conclusions.

```
WORKED EXAMPLE — Monthly PR

Plant DC nameplate (P_nominal):       1,000 kWp
Measured AC energy this month:        148,000 kWh
Measured POA insolation this month:   185 kWh/m²
Reference irradiance (G_ref):         1 kW/m²  (= 1,000 W/m²)

Reference yield  H = POA insolation / G_ref
               H = 185 kWh/m² / 1 kW/m² = 185 hours-equivalent

Expected energy = P_nominal × H
                = 1,000 kWp × 185 = 185,000 kWh

PR = Actual / Expected
   = 148,000 / 185,000
   = 0.80   (80%)
```

An uncorrected PR of 0.80 in a warm month is healthy. The same 0.80 in a cool month would be a flag — temperature correction (PR-3) would push it higher and reveal whether the plant is truly on target.

> **Warning:** PR is only as good as your irradiance sensor. A drifting or soiled pyranometer fabricates PR errors out of thin air. Reference cells must themselves be kept clean, and sensors recalibrated on schedule — the soiling station's clean cell is the reference of last resort.

## Expected-vs-Actual and the Loss Waterfall

The most actionable analysis compares a **modeled expected** generation (from measured irradiance and temperature, via a PV performance model) against **actual** generation, then decomposes the gap into a **loss waterfall**:

```
LOSS WATERFALL (illustrative)

Weather-adjusted expected energy        100.0%
  - Soiling                              - 2.5%
  - Shading (new vegetation)             - 1.0%
  - Module degradation/mismatch          - 1.5%
  - DC wiring & MPPT losses              - 1.0%
  - Inverter downtime                    - 3.0%   <-- largest, recoverable
  - Inverter clipping/efficiency         - 1.0%
  - AC losses & curtailment              - 0.5%
                                         -------
Actual delivered                          89.5%
```

Each band points to a different intervention: soiling → [cleaning](om-cleaning-soiling.md); inverter downtime → faster corrective dispatch (MTTR); degradation/mismatch → [inspection & IV-curve testing](om-inspection-testing.md). The value of the waterfall is **prioritization**: it tells you which loss is worth chasing this quarter and which is noise.

## Alarms and Alerting

Raw monitoring is useless without alarm logic that decides what deserves a human. Effective alarming is:

- **Prioritized** — a tripped 500 kW inverter is not a clock-drift warning. Severity tiers drive response SLAs.
- **De-duplicated** — one root fault should not generate a hundred alarms ("alarm fatigue" is how real faults get ignored).
- **Threshold- and model-based** — static thresholds catch hard faults; expected-vs-actual residuals catch *soft* underperformance (a slowly failing string) that never trips a hard limit.
- **Routed** — to a 24/7 monitoring desk at utility scale, or a push notification to homeowner/installer at residential scale, with defined acknowledge/dispatch/restore times.

> **Key point:** String-level monitoring earns its keep here. A single failed string can hide for months behind otherwise-normal inverter output; only per-string current (or model-based residual analysis) surfaces it. On un-monitored sites, undetected string failures often dominate total energy loss.

## Data Platforms

Monitoring data lands in a **DAS (data acquisition system)** or cloud O&M platform that handles ingestion, storage, dashboarding, alarming, and reporting. At residential scale this is the inverter manufacturer's app (Enphase Enlighten, SolarEdge, SMA, etc.); at C&I and utility scale it is a dedicated platform (manufacturer-agnostic DAS, or an asset-management suite) that aggregates multiple sites, normalizes vendor protocols, and produces the PR/availability reports that contracts are paid against. Interoperability standards (SunSpec Modbus) ease multi-vendor aggregation. See [Residential Monitoring](residential-monitoring.md) for the homeowner view.

## Analytics

Beyond dashboards, analytics extract findings automatically:

- **Underperformance detection** — comparing each inverter/string against its peers and against the model flags outliers without fixed thresholds.
- **Soiling ratio trending** — the soiling station's clean-vs-soiled ratio, trended over time, both quantifies the soiling loss and signals when [cleaning](om-cleaning-soiling.md) crosses its cost-benefit threshold. A jump back to ~1.0 after rain confirms soiling (not a hardware fault) was the cause.
- **Degradation rate estimation** — multi-year PR regression separates true module degradation (~0.5%/yr) from recoverable losses.
- **Fault classification & fleet benchmarking** — pattern recognition across many sites speeds diagnosis and prioritizes truck rolls.

The endpoint of good analytics is the same as good O&M: spend the truck roll where it recovers the most energy per dollar.

## Sources & Further Reading

- [Best Practices for Operation and Maintenance of PV and Energy Storage Systems, 3rd ed. — NREL/SunSpec](https://sunspec.org/wp-content/uploads/2025/01/BestPracticesforOperationandMaintenanceofPhotovoltaicandEnergyStorageSystems3rdEdition.pdf)
- IEC 61724-1 — Photovoltaic system performance, Part 1: Monitoring
- [Solar System Operations and Maintenance Analysis — NREL](https://www.nrel.gov/solar/market-research-analysis/solar-system-operations-maintenance-analysis)
- [PVWatts Calculator (expected-energy modeling) — NREL](https://pvwatts.nrel.gov/)

---

*This page is educational and not engineering advice. Performance metrics and guarantee calculations should be verified against the governing standard and contract; any field work on monitoring or PV equipment requires qualified personnel and carries electrical hazards.*
