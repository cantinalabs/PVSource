# How the Electrical Grid Works

The electrical grid is the vast, interconnected machine that generates, transports, and delivers electricity from power plants to end users. Understanding how it works is essential to understanding solar power, because a grid-tied photovoltaic (PV) system does not operate in isolation: it must synchronize with the grid, push power onto it safely, and respond correctly when the grid behaves abnormally. This page covers the fundamentals of alternating current (AC), how power moves from generation to your service panel, how distributed generation such as solar interconnects, and why grid-tied systems behave the way they do during an outage.

For the physics of how panels and inverters produce power, see [How Solar Power Works](how-solar-works.md). For the hardware that connects a PV system to the grid, see [Solar System Components](system-components.md). The rules governing interconnection are introduced in [Building Codes & Standards Explained](codes-standards-overview.md), and the math behind sizing and compensation lives in [Solar Calculations & Formulas](calculations-formulas.md).

## Alternating Current Fundamentals

Nearly all grid power is **alternating current (AC)**, where voltage and current reverse direction periodically in a sine wave. This contrasts with the **direct current (DC)** produced by solar panels, which an inverter must convert to AC before it can be used on the grid.

### Frequency

**Frequency** is the number of complete AC cycles per second, measured in **hertz (Hz)**. North America operates at **60 Hz**; most of the rest of the world uses 50 Hz. Grid frequency is tightly regulated because it reflects the instantaneous balance between generation and load:

- When generation exceeds demand, frequency rises slightly above 60 Hz.
- When demand exceeds generation, frequency sags below 60 Hz.

> Grid operators continuously adjust generation to hold frequency near 60 Hz. A grid-tied inverter must match grid frequency exactly to export power, and it watches frequency as one signal of whether the grid is healthy.

### Phase

**Phase** describes the timing relationship between two AC waveforms, expressed in degrees (one full cycle = 360 degrees). Two waveforms that peak at the same moment are *in phase*; waveforms offset in time are *out of phase*. Phase matters in two ways for solar:

1. An inverter must **phase-lock** its output to the grid before connecting, or large circulating currents would result.
2. The phase difference between voltage and current determines how much *useful* power is delivered (see real vs. reactive power below).

### RMS Value

Because an AC waveform constantly changes, we describe its magnitude using the **root-mean-square (RMS)** value, which is the equivalent steady DC value that would deliver the same heating power to a resistor. For a pure sine wave:

```
V_rms = V_peak / sqrt(2)   ≈ V_peak × 0.707
V_peak = V_rms × sqrt(2)   ≈ V_rms × 1.414
```

When an outlet is labeled "120 V," that is the RMS value; the actual peak is about 170 V. All standard voltage ratings (120 V, 240 V, 480 V) are RMS values unless stated otherwise.

### Real, Reactive, and Apparent Power

In AC systems, not all power does useful work. Three quantities describe the relationship:

| Quantity | Symbol | Unit | Meaning |
|---|---|---|---|
| **Real power** | P | watts (W) | Power that does actual work (heat, light, torque) |
| **Reactive power** | Q | volt-amperes reactive (VAR) | Power that oscillates between source and load, supporting voltage but doing no net work |
| **Apparent power** | S | volt-amperes (VA) | The vector sum of real and reactive power |

The relationships are:

```
S = sqrt(P^2 + Q^2)
Power Factor (PF) = P / S = cos(theta)
```

where `theta` is the phase angle between voltage and current. A **power factor** of 1.0 means all power is real (purely resistive load). Motors, transformers, and other inductive loads draw reactive power and lower the power factor.

> Modern **smart inverters** can supply or absorb reactive power on command to help the utility regulate voltage. This grid-support capability is central to [IEEE 1547-2018](https://standards.ieee.org/standard/1547-2018.html), discussed below.

## Generation, Transmission, and Distribution

Electricity reaches you through three stages, each operating at a different voltage and serving a different purpose.

```
   GENERATION              TRANSMISSION                DISTRIBUTION
  +-----------+        +-------------------+        +-----------------+
  | Power     |        | High-voltage      |        | Medium/low      |
  | plant     |--->[GSU]--- lines (HV) ----[Sub]--- voltage lines ---[Xfmr]--- Home/
  | 10-25 kV  | step-up | 115-765 kV        | step- | 4-35 kV / 120-  | step-  Business
  +-----------+         |                   | down  | 480 V           | down
                        +-------------------+        +-----------------+
  GSU = generator step-up transformer   Sub = transmission substation   Xfmr = distribution transformer
```

### Generation

Power plants (natural gas, nuclear, hydro, wind, solar, etc.) typically generate at **10–25 kV**. A **generator step-up (GSU) transformer** immediately raises this to transmission voltage. Solar fits here too: utility-scale solar farms feed the transmission or sub-transmission system, while rooftop solar feeds the distribution system directly.

### Transmission

**Transmission** moves bulk power long distances at very high voltage, commonly **115 kV to 765 kV**. High voltage is used because, for a given amount of power, higher voltage means lower current, and lower current means dramatically lower resistive losses in the wires:

```
Power loss = I^2 × R
```

Halving current cuts losses to one-quarter. Transmission lines are the tall steel lattice towers seen between cities.

### Distribution

At a **distribution substation**, voltage is stepped down to **distribution voltages**, typically **4 kV to 35 kV** (a common value is 12.47 kV). These are the lines on wooden poles along streets. A final **distribution transformer** (the cylindrical can on a pole or the green pad-mounted box) steps voltage down to the **utilization voltage** delivered to homes and businesses.

### Voltage Levels and Transformers

**Transformers** are the workhorses that move energy between voltage levels. A transformer changes voltage and current inversely while (ideally) preserving power:

```
V_primary / V_secondary = N_primary / N_secondary   (turns ratio)
V_primary × I_primary ≈ V_secondary × I_secondary
```

Transformers only work with AC, which is the historical reason AC won out over DC for grid distribution.

## Single-Phase vs. Three-Phase Service

The grid generates and transmits power as **three-phase AC**: three separate waveforms offset by 120 degrees. Three-phase delivers power more smoothly and efficiently and is ideal for motors, so it is the standard for transmission and commercial/industrial service. Homes receive a simpler single-phase service tapped from the three-phase distribution system.

### Residential Service: 120/240 V Split-Phase

Most North American homes receive **single-phase 120/240 V** service, often called **split-phase**. The distribution transformer's secondary is center-tapped, producing:

- **240 V** between the two "hot" legs (for large loads: electric ranges, dryers, water heaters, EV chargers, and most solar inverters).
- **120 V** between either hot leg and the grounded **neutral** (for lights and ordinary outlets).

```
  L1 ----+--------- 120 V to N ---+
         |                        |
         |---- 240 V across L1-L2 |
         |                        |
   N ----+ (center tap, grounded) +
         |                        |
  L2 ----+--------- 120 V to N ---+
```

### Commercial Service: 208 V and 480 V Three-Phase

Commercial and industrial buildings typically receive **three-phase** service. Common configurations:

| Service | Line-to-Line | Line-to-Neutral | Typical use |
|---|---|---|---|
| **208Y/120 V** (wye) | 208 V | 120 V | Small commercial; 120 V outlets plus 208 V three-phase equipment |
| **480Y/277 V** (wye) | 480 V | 277 V | Larger commercial/industrial; 277 V lighting, 480 V motors |

In a wye (Y) system the line-to-line voltage relates to line-to-neutral voltage by:

```
V_line-to-line = V_line-to-neutral × sqrt(3)
208 ≈ 120 × 1.732       480 ≈ 277 × 1.732
```

The service type determines which inverters are appropriate. See [Solar System Components](system-components.md) for inverter selection and [Wiring & Connectors Reference](fundamentals-wiring-connectors.md) for conductor implications.

## How Distributed Generation Interconnects

**Distributed generation (DG)** means small generation sources, like rooftop solar, connected at the distribution level near the point of use. Connecting a generator to the utility's wires requires a controlled, code-compliant **point of interconnection**.

### Load-Side vs. Supply-Side Connections

Where the PV system ties in relative to the main service disconnect matters because it determines how the **busbar capacity rule** is applied (in the U.S., NEC 705.12):

| Connection type | Where it ties in | Key consideration |
|---|---|---|
| **Load-side** | On the load side of the main breaker (e.g., a backfed breaker in the main panel) | Must satisfy the busbar overload rule (commonly the "120% rule") so panel busbars are not overloaded |
| **Supply-side** | Between the utility meter and the main breaker (the service entrance) | Bypasses the busbar limit; sized to the service, not the panel busbar |

> Always verify the specific NEC section and edition adopted by the local **Authority Having Jurisdiction (AHJ)**, because code editions and amendments vary. See [Building Codes & Standards Explained](codes-standards-overview.md).

### IEEE 1547 and Smart Inverters

In the United States, **IEEE 1547** is the governing standard for interconnecting distributed energy resources (DERs) with the grid. The current edition, **IEEE 1547-2018**, requires DERs to provide **grid-support functions** such as voltage and frequency **ride-through** (staying connected through brief disturbances rather than tripping offline), volt-VAR control, and frequency-watt response.

The companion safety/test standard is **UL 1741**, and its **Supplement SB (UL 1741 SB)** certifies that an inverter meets the performance requirements of IEEE 1547-2018 using the IEEE 1547.1-2020 test procedures. UL 1741 SB certification has become the de facto requirement for new interconnections across much of North America, though specific mandates and adoption dates are set by individual utilities and AHJs.

> The takeaway: a compliant grid-tied inverter is not a "dumb" power source. It actively senses grid conditions and modulates its behavior to support, rather than destabilize, the grid.

## Net Metering vs. Net Billing

When a grid-tied PV system produces more than the site consumes, the surplus flows back to the grid. How the customer is compensated falls into two broad models.

### Net Metering

Under traditional **net energy metering (NEM)**, the meter effectively spins backward: exported energy offsets imported energy at (or near) the **full retail rate**, kWh-for-kWh, over a billing period. Net metering is simple and maximizes the financial value of exports, which is why it drove early solar adoption.

### Net Billing

Under **net billing** (also called a net billing tariff), imports and exports are valued **separately**. The customer pays the retail rate for energy drawn from the grid but is credited for exports at a **lower, often time-varying export rate** that reflects the grid value of the energy rather than the retail price.

California's **NEM 3.0 / Net Billing Tariff (NBT)**, effective for the state's three large investor-owned utilities, is the most prominent example: export credits dropped sharply (averaging roughly $0.08/kWh versus about $0.30/kWh under the prior NEM 2.0).

> **National trend:** Across the U.S., full-retail net metering is increasingly being replaced by lower-rate net billing structures. The consistent market consequence is that standalone solar economics weaken while **solar-plus-storage** becomes the default, because storing surplus for on-site evening use is worth more than exporting it cheaply. Compensation rules are state- and utility-specific and change frequently; always confirm the current tariff with the local utility. See [Solar Calculations & Formulas](calculations-formulas.md) for how these rates flow into savings estimates.

## Anti-Islanding: Why Grid-Tied Systems Shut Down in an Outage

A common surprise for new solar owners: a standard grid-tied PV system **stops producing during a utility outage**, even in bright sunshine. This is a safety feature, not a defect.

### The Islanding Hazard

An **island** is a portion of the grid that continues to be energized by a DER after the utility supply has been cut. Unintentional islanding is dangerous because:

- Utility line workers expecting a de-energized line could be electrocuted.
- Reconnection out of phase could damage equipment.

To prevent this, IEEE 1547 and UL 1741 require **anti-islanding** protection. The inverter constantly monitors grid voltage and frequency; if the grid disappears or drifts out of bounds, the inverter **disconnects within a fraction of a second** and will not restart until stable grid conditions return for a set time.

### How Batteries and Islanding Change the Picture

To keep power flowing during an outage, the system needs the ability to form an **intentional island** that is electrically isolated from the utility:

- A **battery with a grid-forming inverter** plus an **automatic transfer switch (or microgrid interconnect device)** physically disconnects the home from the grid, then re-energizes a protected subpanel (or the whole home) as a self-contained island.
- Because the island is isolated, no power flows back onto the utility line, so the line-worker hazard is eliminated.

> Without storage and grid-forming hardware, sun alone cannot power a grid-tied home during an outage. The capability to "island" requires specific equipment. See [Solar System Components](system-components.md) for batteries, hybrid inverters, and transfer switches.

## Grid Operators and Grid Services

The grid is operated by a layered set of entities:

| Entity | Role |
|---|---|
| **Utilities (IOUs, municipal, co-ops)** | Own and operate the local distribution system; deliver power to customers; process interconnection applications and meter exports |
| **Independent System Operators (ISO) / Regional Transmission Organizations (RTO)** | Operate the high-voltage transmission grid and wholesale electricity markets across a region (e.g., CAISO, PJM, ERCOT, MISO); balance generation and load in real time |
| **Balancing authorities** | Continuously match generation to demand within their footprint to hold frequency stable |
| **Regulators (FERC, state PUCs)** | Set rules, rates, and reliability standards |

**Grid services** are the functions that keep the grid stable, and DERs increasingly help provide them:

- **Frequency regulation** – matching generation to load second-by-second.
- **Voltage support / reactive power** – holding voltage within limits (smart inverters can contribute).
- **Ramping and reserves** – capacity that can respond to sudden changes.
- **Demand response** – reducing or shifting load on signal.

As distributed solar and storage proliferate, these resources are increasingly aggregated into **virtual power plants (VPPs)** that provide grid services collectively, blurring the historical line between "the grid" and "behind-the-meter" assets.

## Sources & Further Reading

- [IEEE SA – IEEE 1547-2018 Standard for Interconnection and Interoperability of Distributed Energy Resources](https://standards.ieee.org/standard/1547-2018.html)
- [IREC – IEEE 1547-2018 Adoption Tracker](https://irecusa.org/resources/ieee-1547-2018-adoption-tracker/)
- [Grid Compliance Roadmap: UL 1741 SB and IEEE 1547 (ANERN)](https://www.anernstore.com/blogs/diy-solar-guides/grid-compliance-roadmap-ul1741sb-ieee1547)
- [CPUC – Net Energy Metering and Net Billing](https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing)
- [Solar.com – What is NEM 3.0 and How Will it Impact California Solar Owners?](https://www.solar.com/learn/nem-3-0-proposal-and-impacts-for-california-homeowners/)
- [U.S. Energy Information Administration – Electricity Explained](https://www.eia.gov/energyexplained/electricity/)
- [How Solar Power Works](how-solar-works.md) · [Solar System Components](system-components.md) · [Building Codes & Standards Explained](codes-standards-overview.md) · [Solar Calculations & Formulas](calculations-formulas.md)

*Disclaimer: This reference is for general educational purposes; verify all codes, standards, and utility tariffs against the current editions adopted by your local Authority Having Jurisdiction and serving utility, and consult a licensed professional before designing or installing an electrical system.*
