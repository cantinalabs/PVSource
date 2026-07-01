# How Solar Power Works

Solar photovoltaic (PV) systems convert sunlight directly into electricity using semiconductor devices. This page covers the underlying physics, the way cells are assembled into systems, the major cell technologies in use as of 2025–2026, the path energy takes from sunlight to load, and the environmental factors that govern real-world output. The fundamentals here apply equally to **residential** and **commercial** systems; where a point is specific to one, it is labeled.

## The Photovoltaic Effect

The **photovoltaic effect** is the generation of voltage and current in a material upon exposure to light. In a solar cell it relies on a **semiconductor** — almost always crystalline silicon — engineered to separate light-generated charge carriers and drive them through an external circuit.

### Semiconductors and Doping

Pure silicon has four valence electrons and forms a stable crystal lattice, but it conducts poorly. **Doping** introduces small amounts of impurity atoms to create mobile charge carriers:

- **n-type** silicon is doped with an element having five valence electrons (e.g., phosphorus). The extra electron is loosely bound and free to move, so the majority carriers are negative electrons.
- **p-type** silicon is doped with an element having three valence electrons (e.g., boron). The missing bond creates a **hole** — a positively charged vacancy that also moves through the lattice. Here the majority carriers are positive holes.

### The p-n Junction

When p-type and n-type regions are joined, electrons near the boundary diffuse into the p-side and holes diffuse into the n-side. This leaves behind fixed charged ions and creates a **depletion region** with a built-in electric field — the **p-n junction**. This field is the engine of the cell: it points in a direction that sweeps electrons toward the n-side and holes toward the p-side.

### Photons to Electron-Hole Pairs

Sunlight arrives as **photons**. When a photon with energy greater than silicon's **bandgap** (about 1.12 electron-volts for crystalline silicon) is absorbed, it promotes an electron from the valence band to the conduction band, generating a mobile **electron-hole pair**.

```
   Photon in
       |
       v
  -----X-----------------   n-type silicon  (electrons)
       |   <-- built-in E-field (depletion region)
  -------------------------  p-type silicon  (holes)

  Electron driven to n-side, hole driven to p-side
  --> current flows through external circuit --> DC power
```

If the pair is generated within or near the depletion region, the built-in field separates the carriers before they can recombine. Electrons are collected at the front contact and holes at the rear, producing a direct-current (DC) flow when an external circuit connects the two. Photons with energy below the bandgap pass through; excess energy above the bandgap is lost as heat, which is one reason silicon cells have a theoretical efficiency limit (the Shockley–Queisser limit, roughly 33% for a single junction).

> **Key takeaway:** A solar cell is a large-area diode. The p-n junction's built-in electric field separates light-generated electron-hole pairs, and that separation — not the light "pushing" electrons — is what produces usable DC current.

## Cell → Module → String → Array Hierarchy

A single cell produces a useful current but only about **0.5–0.7 V**, far too low to be practical. Cells are therefore assembled in a strict hierarchy.

| Level | What it is | Typical electrical character |
|---|---|---|
| **Cell** | One semiconductor wafer | ~0.5–0.7 V, several amps |
| **Module (panel)** | Many cells wired in series, laminated and framed | Tens of volts, ~10–15 A |
| **String** | Several modules wired in series | Hundreds of volts DC |
| **Array** | Multiple strings, often paralleled | The full PV generator |

### From Cell to Module

Cells are connected in **series** so their voltages add. A modern module contains 60–66 cells (residential format) or 72–144 cells/half-cells (commercial/utility format). The cell stack is laminated between encapsulant (typically EVA or POE), a front glass sheet, and a polymer or glass backsheet, then fitted into an aluminum frame for rigidity and mounting.

#### Bypass Diodes and the Junction Box

Modules include a **junction box** on the rear that houses the output terminals and **bypass diodes**. A bypass diode is wired in reverse-parallel across a sub-group of cells (commonly three diodes per 60-cell module). Under normal operation the diode is non-conducting. If part of the module is shaded or a cell fails, that cell can become reverse-biased and dissipate power as heat (a **hot spot**), potentially damaging the module. The bypass diode turns on and routes current around the affected cell group, protecting the module and limiting power loss to the bypassed section rather than the whole string.

> **Rule of thumb:** Because cells in a string are in series, a shaded cell can drag down the entire string's current. Bypass diodes contain that loss, but they cannot eliminate it — system-level mitigation (module-level electronics, string layout) is still needed for partial shade.

### From Module to String to Array

Modules are wired in series into **strings** to raise voltage to a level the inverter's input window requires. Strings are then connected — often in **parallel** through a combiner — to form the **array**, raising current and total power. String voltage must stay below the system's maximum (commonly 600 V for residential and 1000–1500 V DC for commercial/utility systems) under the coldest expected temperature, when voltage is highest.

## Cell Technologies

Several cell architectures coexist in the market. As of 2025–2026, **TOPCon** has become the volume leader, **mono PERC** is mature and declining in share, **HJT** is the premium high-performance option, and **thin-film CdTe** dominates a distinct utility-scale niche.

- **Monocrystalline PERC** — Mono cells cut from a single silicon crystal, with a **Passivated Emitter and Rear Cell** structure that adds a rear reflective/passivation layer to recover more light. Mature, cost-effective, p-type.
- **Polycrystalline (multicrystalline)** — Cells cast from multiple silicon crystals. Cheaper historically but lower efficiency; now largely phased out of new mainstream product lines.
- **Thin-film CdTe** — Cadmium telluride deposited as thin layers on glass. Lower module efficiency but strong temperature behavior, good low-light response, and low energy/cost per watt at scale; dominant in some large **commercial/utility** ground-mount projects.
- **Bifacial** — Any cell type (commonly TOPCon or HJT) built to also capture light on the rear face, harvesting ground-reflected (**albedo**) irradiance. Most valuable on **ground-mount, carport, and flat-roof commercial** installs with reflective surfaces.
- **TOPCon (Tunnel Oxide Passivated Contact)** — N-type cell with an ultra-thin tunneling oxide and passivated contacts. Higher efficiency, better temperature coefficient, and lower degradation than PERC; the dominant new-build technology in 2026.
- **HJT (Heterojunction)** — Combines crystalline silicon with thin amorphous silicon layers. Highest mainstream efficiency, excellent (least-negative) temperature coefficient, and very low degradation; premium pricing.

### Efficiency Comparison (as of 2025–2026)

| Technology | Type | Typical module efficiency | Temp. coefficient (Pmax) | Annual degradation | Notes |
|---|---|---|---|---|---|
| Polycrystalline | p-type | ~16–18% | ~ -0.39 to -0.40 %/°C | ~0.5–0.7%/yr | Legacy; rare in new product |
| Mono PERC | p-type | ~20–22% | ~ -0.34 to -0.35 %/°C | ~0.45–0.5%/yr | Mature, cost-effective |
| TOPCon | n-type | ~21–23.5% | ~ -0.28 to -0.30 %/°C | ~0.35–0.4%/yr | Volume leader in 2026 |
| HJT | n-type | ~22–24% (best ~26%) | ~ -0.24 to -0.26 %/°C | ~0.25–0.3%/yr | Premium, highest efficiency |
| Thin-film CdTe | thin-film | ~18–19% | ~ -0.28 to -0.32 %/°C | ~0.2–0.5%/yr | Strong at scale/heat |

These are representative mainstream module-level ranges; record laboratory cells exceed them. Always confirm against the specific manufacturer datasheet.

> **Key takeaway:** A less-negative temperature coefficient (HJT, TOPCon) means a module loses less power as it heats up — often more decisive for annual yield in hot climates than nameplate efficiency alone.

## The Energy Path: Sunlight to Load

```
 Sunlight
    |
    v
 [PV Array]  --DC-->  [Optional: optimizers / rapid shutdown]
    |
    v (DC)
 [Inverter]  --AC-->  [Main service panel / loads]
    |                         |
    |                         +--> Building loads
    |                         +--> Grid (export, if net metered)
    +-- (in hybrid/DC-coupled) --> [Battery] <--> [BMS]
```

1. **DC generation** — The array produces variable DC power depending on irradiance and temperature.
2. **Maximum power point tracking** — The inverter (or optimizer) continuously adjusts the operating point to extract the most power available (see I-V curve below).
3. **DC → AC conversion** — The **inverter** converts DC to grid-synchronized AC at the correct voltage and frequency.
4. **Distribution** — AC power feeds building **loads** first; surplus flows to the **grid** (if interconnected) or to a **battery**.
5. **Storage (optional)** — In hybrid/DC-coupled systems a **battery** stores surplus for later use, managed by a **battery management system (BMS)**.

### Grid-Tied vs Off-Grid vs Hybrid

| System type | Grid connection | Battery | Behavior in outage | Typical use |
|---|---|---|---|---|
| **Grid-tied** | Yes | No | Shuts down (anti-islanding) | Lowest cost; most residential & commercial |
| **Off-grid** | No | Yes (required) | Runs from battery/generator | Remote sites with no utility |
| **Hybrid** | Yes | Yes | Backs up selected loads | Resilience + self-consumption |

Grid-tied inverters include mandatory **anti-islanding** protection: they disconnect during a grid outage so they cannot energize utility lines and endanger line workers. This is why a standard grid-tied system without storage produces nothing during a blackout. Hybrid systems use that capability plus an automatic transfer to form their own protected microgrid.

## Core Physics Concepts

### Irradiance vs Insolation vs Peak Sun Hours

- **Irradiance** is instantaneous power density from the sun, in **W/m²**. Bright midday sun at sea level is near **1000 W/m²**.
- **Insolation** is energy accumulated over time, in **kWh/m²** (or Wh/m²) — irradiance integrated across the day.
- **Peak sun hours (PSH)** express daily insolation as the equivalent number of hours at exactly 1000 W/m². A site receiving 5.0 kWh/m²/day has **5 peak sun hours**. PSH is the workhorse number for quick energy estimates.

```
Daily energy (kWh) ≈ Array kW(DC) × PSH × system derate
```

### Air Mass

**Air mass (AM)** quantifies the path length sunlight travels through the atmosphere relative to straight overhead. **AM1.5** (path 1.5× the vertical) is the reference spectrum used for terrestrial module ratings; AM0 is space.

### STC vs NOCT vs PTC

Modules are rated under defined conditions so products can be compared.

| Condition | Irradiance | Cell/ambient temperature | Purpose |
|---|---|---|---|
| **STC** (Standard Test Conditions) | 1000 W/m² | 25 °C cell | Nameplate rating; optimistic vs field |
| **NOCT** (Nominal Operating Cell Temp.) | 800 W/m² | ~20 °C ambient, cell warms to NOCT (~43–45 °C) | More realistic operating estimate |
| **PTC** (PVUSA Test Conditions) | 1000 W/m² | 20 °C ambient, higher wind | Conservative; used in some incentive/rating programs |

> **Warning:** STC nameplate is a laboratory number. Real arrays run hotter than 25 °C and rarely see a clean 1000 W/m², so field output is typically well below nameplate. Use NOCT/PTC and a system derate for realistic energy modeling.

### The I-V Curve and Maximum Power Point

A cell or module's behavior at a given irradiance and temperature is described by its **current-voltage (I-V) curve**.

```
  I (current)
   |
Isc|____ .
   |      \ .
   |        \  . <-- knee = Maximum Power Point (Pmax)
   |          \   .
   |            \    .
   |              \      .
   0--------------------|----- V (voltage)
                       Voc
```

- **Isc (short-circuit current)** — current at zero volts; scales with irradiance.
- **Voc (open-circuit voltage)** — voltage at zero current; falls as temperature rises.
- **Maximum Power Point (MPP / Pmax)** — the knee where the product `V × I` is greatest. The voltage and current there are **Vmp** and **Imp**:

```
Pmax = Vmp × Imp
```

The inverter's **maximum power point tracking (MPPT)** continuously hunts for this knee as conditions change.

### Fill Factor

**Fill factor (FF)** measures how "square" the I-V curve is — how close the cell comes to ideal:

```
FF = (Vmp × Imp) / (Voc × Isc) = Pmax / (Voc × Isc)
```

Good crystalline-silicon modules have a fill factor around **0.75–0.83**. Higher FF indicates lower internal resistive and recombination losses.

### Module Efficiency

**Module efficiency** is the fraction of incident solar power converted to electrical power at STC:

```
Efficiency = Pmax (W) / [ Area (m²) × 1000 W/m² ]
```

A 440 W module of 2.0 m² yields `440 / (2.0 × 1000) = 22%`. Efficiency mainly affects how much power fits in a given **area** — important where roof space is constrained.

### Temperature Coefficients

Datasheets list three temperature coefficients (typically in %/°C), referenced to 25 °C:

- **Coefficient of Pmax** — how power changes with temperature (most important; always negative).
- **Coefficient of Voc** — how open-circuit voltage changes; drives cold-weather high-voltage limits for string sizing.
- **Coefficient of Isc** — how short-circuit current changes (small, slightly positive).

Because Voc rises as temperature drops, the **coldest expected site temperature** sets the maximum string voltage and must be checked against inverter and system limits.

## Factors Affecting Output

| Factor | Effect | Mitigation / notes |
|---|---|---|
| **Irradiance** | Output is roughly proportional to irradiance | Orientation, tilt, and site selection maximize it |
| **Temperature** | Higher cell temp lowers voltage and power | Choose low temp-coefficient tech; allow airflow |
| **Shading** | Even partial shade can disproportionately cut string output | Bypass diodes, optimizers/microinverters, layout |
| **Soiling** | Dust, pollen, snow, bird droppings reduce irradiance reaching cells | Cleaning, tilt for self-shedding; soiling loss often 2–5%/yr |
| **Orientation & tilt** | Off-optimal azimuth/tilt reduces capture | Aim toward equator; tilt near latitude (site-dependent) |
| **Degradation** | Modules slowly lose output over their life | ~0.25–0.5%/yr depending on technology; covered by warranty |

> **Rule of thumb:** Total real-world losses (temperature, soiling, wiring, inverter, mismatch, availability) commonly add up to a **system derate of roughly 0.75–0.85** applied to the DC nameplate when estimating annual AC energy. Always model with site-specific data.

## Sources & Further Reading

- [NREL — Solar Photovoltaic Technology Basics](https://www.nrel.gov/research/re-photovoltaics.html)
- [NREL — Best Research-Cell Efficiency Chart](https://www.nrel.gov/pv/cell-efficiency.html)
- [U.S. DOE — Solar Photovoltaic Cell Basics](https://www.energy.gov/eere/solar/solar-photovoltaic-cell-basics)
- [PVEducation.org — The PV Effect, I-V curves, and Fill Factor](https://www.pveducation.org/)
- [EnergySage — Solar Panel Testing and Certifications](https://www.energysage.com/solar/solar-panel-testing-certifications/)
- [SurgePV — PERC vs TOPCon vs HJT Field Performance 2026](https://www.surgepv.com/blog/perc-vs-topcon-vs-hjt-field-performance)

---
*Educational and reference use only — not engineering advice. Verify all figures, ratings, and standards with manufacturer datasheets and licensed professionals before design or installation.*
