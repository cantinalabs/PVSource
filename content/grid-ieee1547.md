# IEEE 1547 & Smart Inverters

**IEEE Std 1547** is the foundational U.S. standard for interconnecting **distributed energy resources (DERs)** — including solar PV — with the electric power system. Its 2018 revision transformed the inverter from a passive device that simply disconnected on any disturbance into an active **grid-support** asset. This page covers IEEE 1547-2018 and its companion test standard IEEE 1547.1, the UL 1741 certification path (and the meaning of "SA" vs "SB"), the grid-support functions, the performance categories, anti-islanding, and how states actually adopt the standard.

For where these requirements fit in the connection process, see [Distribution Interconnection](grid-distribution.md) and [Grid & Interconnection Overview](grid-overview.md). For grid fundamentals, see [How the Electrical Grid Works](fundamentals-grid.md).

## IEEE 1547-2018: What Changed

The pre-2014 standard reflected a "do no harm" philosophy: DERs were small, and the safest behavior was to **trip offline** at the first sign of abnormal voltage or frequency. As penetration grew, that behavior became a liability — a large frequency excursion could trip vast amounts of generation at once, making a disturbance worse.

**IEEE 1547-2018** reversed the default. DERs are now expected to **ride through** disturbances and actively **support** the grid:

> The 2018 revision requires DERs to provide voltage and frequency **ride-through** and **grid-support functions** (reactive power control, voltage regulation, frequency response), rather than tripping at the first deviation. It also requires that these functions be **configurable** so utilities can set them to local needs.

### IEEE 1547.1 — Testing

**IEEE 1547.1** is the companion **conformance test** standard. IEEE 1547 says *what* a DER must do; **IEEE 1547.1-2020** specifies the *test procedures* that prove it does. Certification to UL 1741 SB relies on the IEEE 1547.1-2020 procedures, including an **interoperability conformance test** verifying the inverter can communicate via at least one standard protocol — **IEEE 2030.5**, **SunSpec Modbus**, or **DNP3**.

## UL 1741: SA vs SB

**UL 1741** is the U.S. safety standard for inverters and DER equipment. While IEEE 1547 defines *performance requirements*, UL 1741 defines *how equipment is tested and certified* for safety and for those grid-support functions. The two letter suffixes matter:

| Listing | Aligned to | Status |
|---|---|---|
| **UL 1741 SA** | A supplement aligned to California **Rule 21 / source-requirements** based on the *older* (pre-2018) framework and CA phase-in functions | Legacy; being phased out |
| **UL 1741 SB** | A supplement aligned to **IEEE 1547-2018** and tested per **IEEE 1547.1-2020** | Current requirement in most jurisdictions adopting 1547-2018 |

> **"SB" means "Supplement B."** It is the UL 1741 supplement that certifies an inverter's grid-support functions against IEEE 1547-2018 and IEEE 1547.1-2020. An inverter listed only to UL 1741 SA generally does **not** meet a jurisdiction that has adopted IEEE 1547-2018; SB is the certification utilities increasingly require.

UL 1741 SB adds tests beyond the SA scope, including **rate-of-change-of-frequency (ROCOF)** response, **ground-fault overvoltage (GFOV)**, and **load-rejection overvoltage (LROV)** protection.

## Grid-Support Functions

IEEE 1547-2018 inverters can perform a defined set of grid-support functions. The active function set and curves are chosen by the **authority governing interconnection** (the utility/state), not the installer.

### Voltage Regulation

- **Volt-VAR** — the inverter absorbs or injects **reactive power (VARs)** as a function of local voltage, helping hold voltage within limits. Absorbing VARs pulls voltage down (useful where DER export raises voltage); injecting VARs pushes it up.
- **Volt-Watt** — the inverter **curtails real power (watts)** when voltage rises too high, as a last-resort defense against overvoltage.
- **Constant power factor** / **constant reactive power** — fixed reactive-power modes used by some utilities.

```
 Volt-VAR (illustrative)         Volt-Watt (illustrative)
 Reactive power                  Real power
   +Q │\                          P_max │────────\
      │ \  inject (raise V)             │         \  curtail
    0 ├──\────────  V                   │          \   at high V
      │   \                             │           \________
   -Q │    \  absorb (lower V)          └──────────────────── V
      └──────────── V                      Vnom        Vhigh
```

### Frequency Response

- **Frequency-Watt (P-f droop)** — the inverter reduces real power when frequency rises above nominal (over-frequency) and, where capable, increases output when frequency falls (under-frequency), providing a primary-frequency-response-like behavior.

### Ride-Through

Instead of tripping, the inverter must **stay connected and operating** through defined voltage and frequency excursions:

- **LVRT** — Low-Voltage Ride-Through (voltage sags)
- **HVRT** — High-Voltage Ride-Through (voltage swells)
- Frequency ride-through across defined under-/over-frequency bands

### Other Behaviors

- **Ramp rates** — limits on how fast the inverter changes output (e.g., on startup or after a disturbance) to avoid stressing the grid.
- **Soft-start / reconnection** — controlled re-energization after a trip.

## Anti-Islanding

An **unintentional island** occurs when a DER keeps a section of the grid energized after the utility source has disconnected — a serious hazard to line workers and equipment. IEEE 1547 requires DERs to **detect** an unintentional island and **cease to energize** the area within a specified time (commonly within ~2 seconds), even when local generation and load are nearly balanced (the hardest case to detect).

> Anti-islanding and ride-through pull in opposite directions: ride-through tells the inverter to *stay on* through disturbances, while anti-islanding tells it to *shut off* when truly islanded. The 1547 trip/ride-through settings are engineered to distinguish a grid disturbance (ride through) from a genuine island (trip). This is why settings must be coordinated, not arbitrary.

## Abnormal Conditions & Categories

IEEE 1547-2018 defines two independent sets of categories. A jurisdiction picks one **normal** category and one **abnormal** category for its DERs.

### Normal Operating Performance — Categories A and B

These govern **reactive-power / voltage-regulation** capability under normal conditions:

| Category | Capability |
|---|---|
| **Category A** | Baseline reactive-power capability; suits areas where DER penetration and voltage-support needs are modest |
| **Category B** | **Greater voltage-support capability** (wider reactive range). Most modern inverter-based DER is required to meet Category B. |

### Abnormal Operating Performance — Categories I, II, III

These govern **ride-through** depth and **ROCOF** tolerance during disturbances:

| Category | Objective |
|---|---|
| **Category I** | Essential bulk-system needs; reasonably achievable by all current DER technologies |
| **Category II** | Full coordination with bulk-power-system reliability needs (e.g., aligned with NERC ride-through expectations) |
| **Category III** | Greatest ride-through capability — designed for **distribution support** as well as bulk-system needs; stays connected through the deepest sags and widest frequency swings |

> Higher abnormal categories ride through more severe events. **Category III** has the strongest ride-through; **Category B** has the strongest normal voltage-support. The interconnecting authority selects the combination appropriate to its system.

## How States Adopt IEEE 1547

IEEE 1547 is a **technical standard, not law**. It takes effect only when a state, utility, or regulator adopts it and specifies the category and setting choices it leaves open.

- **California — Rule 21:** California led smart-inverter requirements through CPUC **Rule 21**, originally phasing in functions under UL 1741 SA, and has moved toward **IEEE 1547-2018 / UL 1741 SB** alignment.
- **Hawaii — HECO / Rule 14H:** Hawaiian Electric, facing the nation's highest rooftop-PV penetration early, adopted aggressive ride-through and Volt-VAR/Volt-Watt requirements (Rule 14H source-requirements document).
- **Other states** adopt 1547-2018 through PUC orders and utility **source-requirements documents (SRDs)** that pin down the open choices — e.g., Massachusetts and several Northeast states publish default 1547-2018 setting requirements.

The standard's flexibility is intentional: it provides the menu of capabilities, and each jurisdiction selects the **default and required settings** for its grid.

## Commissioning Smart-Inverter Settings

Certification proves an inverter *can* perform the functions; commissioning proves it *is configured* to perform them correctly on the specific site.

- The utility specifies a **required setting profile** — which functions are enabled and which **curves/parameters** apply (e.g., the active Volt-VAR curve, trip/ride-through bands, ramp limits).
- The installer configures the inverter to that profile.
- During the **witness test / commissioning**, the utility verifies the settings before granting **Permission to Operate (PTO)**. A mis-set Volt-VAR curve or wrong trip threshold is a common cause of failed commissioning.

See [Distribution Interconnection](grid-distribution.md) for where commissioning sits in the overall process.

## Sources & Further Reading

- [NREL — Highlights of IEEE Standard 1547-2018](https://docs.nrel.gov/docs/fy20osti/75436.pdf)
- [NREL — Impact of IEEE 1547 Standard on Smart Inverters (applications in power systems)](https://www.nrel.gov/media/docs/libraries/grid/smart-inverters-applications-in-power-systems.pdf)
- [Mass.gov — Default IEEE 1547-2018 Setting Requirements (Inverter Source Requirements Document)](https://www.mass.gov/doc/tsrg-inverter-source-requirements-document/download)
- [Solar Builder — Smart PV Inverter Overview: IEEE 1547-2018 and UL 1741 Explained](https://solarbuildermag.com/inverters/smart-pv-inverter-overview-ieee-1547-2018-and-ul-1741-explained/)
- [CPUC — Rule 21 / smart inverter requirements](https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/infrastructure/rule-21-interconnection)

---
*This page is general reference information, not engineering or regulatory advice. Required categories, functions, and settings are set by your interconnecting utility and state — confirm them before specifying or commissioning equipment.*
