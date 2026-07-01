# The Solar Resource & Geometry

Every solar energy system is ultimately a converter of one input: the **solar resource** — the quantity, intensity, and angle of sunlight reaching a surface over time. Understanding the geometry of the sun-earth relationship and the way irradiance is measured and forecast is the foundation for siting, tilting, and sizing any photovoltaic (PV) array. This page covers the geometry, the irradiance components, the sun path, how to derive **peak sun hours (PSH)** from irradiance, and the data sources professionals rely on.

For how that captured energy is converted to electricity, see [How Solar Power Works](how-solar-works.md). For the equations used here in a consolidated form, see [Solar Calculations & Formulas](calculations-formulas.md).

## Sun-Earth Geometry

The position of the sun in the sky at any moment is described by a small set of angles. They are driven by the earth's daily rotation, its annual orbit, and the **23.44°** tilt of its rotational axis relative to the orbital plane.

### Declination

**Solar declination (δ)** is the angle between the sun's rays and the earth's equatorial plane. It varies seasonally between roughly **+23.44°** (June solstice, sun overhead the Tropic of Cancer) and **−23.44°** (December solstice). A widely used approximation (Cooper's equation) is:

```
δ = 23.45° × sin( 360° × (284 + n) / 365 )
```

where `n` is the day of the year (1–365). Declination is the same everywhere on earth on a given day; latitude is what makes the sun appear higher or lower.

### Hour Angle

The **hour angle (ω)** expresses the sun's east-west position as an angular measure of time, where each hour equals 15° of earth rotation:

```
ω = 15° × (solar time − 12)
```

- Solar time is measured so that **solar noon** (the moment the sun crosses the local meridian and reaches its highest point) corresponds to ω = 0.
- Morning hours are negative, afternoon positive. At 9:00 solar time, ω = −45°.

> **Solar time ≠ clock time.** Clock (civil) time differs from solar time because of longitude offset within a time zone, the **equation of time** (orbital eccentricity and axial tilt, ±~16 minutes over the year), and daylight saving. Always convert to solar time before computing geometry.

### Solar Altitude, Zenith, and Azimuth

Three angles locate the sun relative to an observer:

| Angle | Symbol | Definition |
|---|---|---|
| **Solar altitude** | α | Height of the sun above the horizon (0° at horizon, 90° at zenith) |
| **Solar zenith** | θz | Complement of altitude: `θz = 90° − α` |
| **Solar azimuth** | γs | Compass bearing of the sun, measured from due south (or north, by convention) |

The altitude at any moment follows from latitude (φ), declination (δ), and hour angle (ω):

```
sin(α) = sin(φ)·sin(δ) + cos(φ)·cos(δ)·cos(ω)
```

At **solar noon** (ω = 0) this reduces to the maximum daily altitude:

```
α_noon = 90° − |φ − δ|
```

Solar azimuth is then:

```
cos(γs) = ( sin(δ)·cos(φ) − cos(δ)·sin(φ)·cos(ω) ) / cos(α)
```

> In the Northern Hemisphere the sun is generally to the south, so an array facing **due south (azimuth 180° from north / 0° from south)** maximizes annual energy. In the Southern Hemisphere, face **due north**.

## Irradiance Components: GHI, DNI, DHI

**Irradiance** is instantaneous power per unit area, measured in watts per square meter (W/m²). **Irradiation** (or insolation) is the energy accumulated over time, in kilowatt-hours per square meter (kWh/m²). Sunlight arriving at a horizontal surface splits into components:

| Component | Name | Meaning |
|---|---|---|
| **DNI** | Direct Normal Irradiance | Beam radiation arriving in a straight line from the sun, measured on a surface perpendicular (normal) to the rays |
| **DHI** | Diffuse Horizontal Irradiance | Radiation scattered by atmosphere and clouds, arriving from the whole sky dome |
| **GHI** | Global Horizontal Irradiance | Total on a horizontal surface |

These are linked by the zenith angle:

```
GHI = DNI × cos(θz) + DHI
```

A fourth quantity, **POA (Plane-of-Array) irradiance**, is what an actual tilted module receives. It adds a **ground-reflected (albedo)** term to the beam and diffuse contributions and is the basis for energy yield modeling. Transposition models (e.g., Perez, Hay-Davies) convert GHI/DNI/DHI into POA for a given tilt and azimuth.

> Concentrating systems and trackers depend on **DNI**; fixed flat-plate PV depends on **POA**, which blends all three components. A cloudy maritime climate may have a high diffuse fraction, narrowing the benefit of tracking.

## The Solar Spectrum & Air Mass

Sunlight above the atmosphere (extraterrestrial) has an intensity near the **solar constant ≈ 1361 W/m²**. As it passes through the atmosphere it is attenuated and its spectrum is reshaped by absorption and scattering.

**Air Mass (AM)** quantifies the path length through the atmosphere relative to the shortest (overhead) path:

```
AM ≈ 1 / cos(θz)
```

- **AM0** — extraterrestrial spectrum (space).
- **AM1** — sun directly overhead (sea level, θz = 0).
- **AM1.5** — sun at ~48.2° zenith; the **standard reference spectrum** for terrestrial PV ratings, with ~**1000 W/m²** global tilted irradiance. Module nameplate ratings at **Standard Test Conditions (STC)** use AM1.5, 1000 W/m², and 25 °C cell temperature.

Because cell technologies respond differently to blue versus red wavelengths, real-world output can deviate from STC predictions when the spectrum shifts (low sun angles, haze). Module datasheets and energy models account for this with spectral correction factors. See [PV Modules Deep-Dive](fundamentals-pv-modules.md) for how cells convert this spectrum.

## The Sun Path & Solar Window

The **sun path** is the arc the sun traces across the sky over a day, and how that arc shifts across seasons. Plotted on a **sun-path (solar) chart** with azimuth on the horizontal axis and altitude on the vertical axis, it produces a family of curves — one per date — bounded by the solstices.

The **solar window** is the region of sky between the winter-solstice and summer-solstice paths within which the sun travels year-round. Any obstruction (tree, parapet, neighboring building) that falls inside this window will shade the array at some point in the year. Site assessment tools project obstructions onto the chart to quantify the **solar access percentage**.

```
ASCII Sun-Path Sketch (Northern Hemisphere, mid-latitude)

  Altitude
   90° |
       |              .--''''--.            <- Summer solstice (high arc)
   60° |         .--'           '--.
       |       .'      .-''''-.      '.
   30° |     .'    .--'        '--.    '.    <- Winter solstice (low arc)
       |   .'   .-'                '-.   '.
    0° |__'___'________________________'___'____
       E    SE        S (noon)        SW    W
              (Azimuth, sun rises N-of-E in summer,
               S-of-E in winter)
```

In summer the sun rises north of east, climbs high, and sets north of west — long days, high altitude. In winter it rises south of east, stays low, and sets south of west — short days, shallow angles. This seasonal swing is why a **fixed tilt is a compromise**: a steeper tilt favors winter sun, a shallower tilt favors summer sun.

## Peak Sun Hours (PSH)

**Peak Sun Hours** is the most useful single number for first-order energy estimates. One PSH equals **1 kWh/m² of irradiation delivered at the reference intensity of 1000 W/m²**. Numerically, **PSH (hours) equals the daily POA irradiation expressed in kWh/m²/day.** It is *not* the number of daylight hours — it compresses a whole day's variable irradiance into an equivalent number of full-intensity hours.

```
PSH (h/day) = Daily plane-of-array irradiation (kWh/m²/day) ÷ 1 kW/m²
```

### Worked Example: Estimating PSH and Daily Energy

```
Given:
  Location annual-average POA irradiation = 5.5 kWh/m²/day
  Array DC rating (STC)                   = 8.0 kW
  Overall system derate (soiling, temp,
    wiring, inverter, mismatch)           = 0.80

Step 1 — Peak sun hours:
  PSH = 5.5 kWh/m²/day ÷ 1 kW/m² = 5.5 h/day

Step 2 — Ideal daily DC energy:
  E_ideal = 8.0 kW × 5.5 h = 44.0 kWh/day

Step 3 — Apply derate for AC delivered energy:
  E_AC = 44.0 kWh × 0.80 = 35.2 kWh/day

Step 4 — Annualize:
  E_year ≈ 35.2 kWh/day × 365 = 12,848 kWh/year
```

This is the same logic that underlies detailed simulation tools — they simply compute PSH and losses hour-by-hour with measured weather data rather than a single seasonal average. The full derate methodology is covered in [Solar Calculations & Formulas](calculations-formulas.md).

## Effect of Tilt, Azimuth & Shading

The captured resource is highly sensitive to how the array is oriented relative to the sun path:

- **Tilt.** A rule of thumb is to set fixed tilt near the **site latitude** for balanced annual yield. Lower tilt boosts summer harvest; higher tilt (latitude + ~10–15°) boosts winter harvest and sheds snow. Optimal tilt also depends on whether the goal is peak annual energy, winter reliability, or summer (cooling-load) matching.
- **Azimuth.** Deviation from true south (north of the equator) costs energy gradually — a ±15° offset typically loses only a few percent annually, while east/west orientations shift production earlier or later in the day and may be preferred for time-of-use rates. **Magnetic declination** must be corrected to find *true* south from a compass.
- **Shading.** Shading is nonlinear and severe. Because cells are series-connected, partial shade on a few cells can disproportionately cut a string's output and trigger bypass diodes. Even **small obstructions inside the solar window** can erase a meaningful share of annual yield. Mitigations include module-level power electronics (MLPE) and careful string layout — see [Solar System Components](system-components.md) and [PV Modules Deep-Dive](fundamentals-pv-modules.md).

> **Always quantify shading on-site.** A south-facing array with a single winter-shadowing obstruction can underperform a slightly off-azimuth, unshaded array. Model the solar window before committing to a layout.

## Weather & Resource Data Sources

Reliable energy estimates require long-term, location-specific irradiance data rather than rules of thumb. Professionals use established datasets:

| Source | Provider | What it offers |
|---|---|---|
| **NSRDB** (National Solar Radiation Database) | U.S. NREL | High-resolution gridded GHI/DNI/DHI and meteorological data for the Americas and beyond |
| **PVWatts** | U.S. NREL | Free web/API tool estimating production from system parameters using TMY data |
| **PVGIS** | European Commission JRC | Free global irradiation and PV yield estimates, multiple databases |
| **TMY** (Typical Meteorological Year) | Various | A synthesized "typical" year of hourly weather assembled from multi-year records, used for simulation |
| **Solargis / SolarAnywhere / Meteonorm** | Commercial | Bankable, satellite-derived datasets with uncertainty bounds for financing |

> **TMY data represents a *typical* year, not a worst case.** For project financing, lenders often require **P50/P90** exceedance probabilities (the production level expected to be met in 50% / 90% of years) derived from long-term, uncertainty-quantified datasets.

A typical workflow: pull TMY or satellite irradiance for the exact coordinates, transpose GHI/DNI/DHI to POA for the planned tilt/azimuth, subtract modeled losses (shading, soiling, temperature, system), and report expected annual energy with an uncertainty band.

## Sources & Further Reading

- [NREL National Solar Radiation Database (NSRDB)](https://nsrdb.nrel.gov/)
- [NREL PVWatts Calculator](https://pvwatts.nrel.gov/)
- [PVGIS — European Commission Joint Research Centre](https://re.jrc.ec.europa.eu/pvg_tools/en/)
- [NREL — Solar Resource Data and Tools](https://www.nrel.gov/grid/solar-resource/)
- [Solar Energy Geometry — PVEducation.org](https://www.pveducation.org/pvcdrom/properties-of-sunlight)
- Related pages: [How Solar Power Works](how-solar-works.md) · [Solar Calculations & Formulas](calculations-formulas.md) · [PV Modules Deep-Dive](fundamentals-pv-modules.md) · [Solar System Components](system-components.md)

---

*This content is provided for educational and reference purposes only. Solar resource estimates vary by location, dataset, and methodology; verify site-specific figures with measured data, manufacturer documentation, and a qualified solar professional before making design or financial decisions.*
