# Engineering Glossary

A reference glossary of photovoltaic (PV) and solar-energy engineering terms for designers, engineers, installers, EPCs, and informed homeowners across residential, commercial, and utility-scale projects. Terms are grouped alphabetically. Code citations refer to the National Electrical Code (NEC, NFPA 70); always confirm against the edition adopted by your authority having jurisdiction (AHJ).

---

### A

**AC / DC** — **Alternating Current (AC)** periodically reverses direction (the form delivered by the utility grid and produced by inverters); **Direct Current (DC)** flows one direction (the form produced by PV modules and stored in batteries).

**AFCI (Arc-Fault Circuit Interrupter)** — A protective function that detects the electrical signature of a dangerous arc (a series or parallel fault) and de-energizes the circuit. NEC 690.11 requires DC arc-fault protection for most PV circuits to reduce fire risk.

**AGC (Automatic Generation Control)** — A control scheme by which a balancing authority or plant controller automatically adjusts plant output in real time to follow dispatch signals and help maintain grid frequency; large solar and storage plants increasingly provide AGC-based regulation.

**AHJ (Authority Having Jurisdiction)** — The office or official (typically a local building/electrical department or fire marshal) that adopts codes, reviews plans, issues permits, and inspects/approves the installation.

**Air mass (AM)** — The relative path length of sunlight through the atmosphere versus straight overhead. STC uses **AM 1.5**, representing the sun ~48.2° from zenith; longer paths scatter and absorb more light.

**Albedo** — The fraction of incident solar radiation reflected by the ground or surroundings (0–1). High albedo (snow, light gravel, white roofs) boosts **bifacial** module rear-side gain.

**Ampacity** — The maximum continuous current a conductor can carry without exceeding its temperature rating, after applying temperature-correction and conduit-fill adjustment factors (NEC Table 310.16 and 310.15).

**Ancillary services** — Grid-support products procured by ISOs/RTOs and utilities beyond bulk energy — frequency regulation, spinning/non-spinning reserves, voltage support, and black start. Solar-plus-storage plants can supply several of these.

**Array** — A mechanically and electrically integrated assembly of PV modules, strings, mounting, and supports forming a DC power-producing unit.

**Augmentation (storage)** — The planned addition of battery modules or racks over a project's life to offset capacity lost to cell degradation, keeping a BESS at its contracted energy or power rating.

**Availability** — The fraction of time a system is able to operate and produce when resource is present, after subtracting outages for faults and maintenance. Performance contracts often guarantee availability (e.g. ≥98%).

**Avoided cost** — The cost a utility avoids by not generating or purchasing power elsewhere; used as a basis for crediting exported energy under net-billing tariffs and for PURPA-qualifying facilities, typically well below retail rates.

**Azimuth** — The compass orientation of the array's face, measured in degrees (0° = north, 90° = east, 180° = south, 270° = west). True south (180°) is generally optimal in the Northern Hemisphere.

### B

**Backtracking** — A tracker control strategy that, near sunrise and sunset, rotates rows away from the ideal sun-facing angle to prevent rows from shading their neighbors, trading a little direct gain for a net energy improvement at high ground-coverage ratios.

**Backup gateway** — A controller (sometimes called an automatic transfer/microgrid interconnection device) that detects a grid outage, isolates the home from the grid, and coordinates inverter/battery output to power backed-up loads while keeping the system from back-feeding the de-energized grid.

**Balance of System (BOS)** — All system components other than the modules: inverters, racking, wiring, combiners, disconnects, conduit, OCPD, monitoring, and labor.

**Ballasted system** — A flat-roof or ground mount held in place by weight (concrete blocks or trays) rather than roof penetrations, relying on dead load and friction; common on commercial membrane roofs to avoid waterproofing penetrations.

**Behind-the-meter (BTM)** — Generation or storage located on the customer's side of the utility revenue meter, primarily serving on-site load and reducing imports; contrast with **front-of-the-meter**.

**BESS (Battery Energy Storage System)** — A complete stationary storage installation comprising battery cells/modules, a battery management system, power conversion (inverters), thermal management, and controls, used for backup, energy shifting, and grid services.

**Bifacial** — A module that generates power from both front and rear faces, capturing reflected (albedo) and diffuse light on the back side for extra yield.

**BIPV (Building-Integrated Photovoltaics)** — PV that serves as part of the building envelope itself — solar shingles/tiles, façade cladding, or glazing — rather than being mounted on top of conventional roofing.

**Bonding** — See **Grounding vs Bonding**.

**Bypass diode** — A diode built into a module's junction box that routes current around a shaded or failed cell substring, preventing hot spots and limiting the production loss from partial shading.

### C

**C&I (Commercial & Industrial)** — The market segment of non-residential, non-utility customers (businesses, warehouses, factories, agriculture), typically served by larger BTM systems sized to demand and often shaped by demand charges.

**Capacity factor** — The ratio of actual energy produced over a period to the energy that would be produced running at full rated (AC) power continuously: `CF = Annual kWh ÷ (kW_AC × 8760)`. Fixed-tilt PV is typically 15–25%.

**Capacity market** — A forward market (run by several ISOs/RTOs such as PJM and ISO-NE) that pays resources to be available to meet future peak demand, providing a revenue stream distinct from energy sales.

**Carport / canopy** — An elevated PV structure built over a parking lot or walkway that provides shade and shelter while generating power; structurally more expensive per watt but uses otherwise idle land and can host EV charging.

**C-rate** — A battery's charge/discharge rate normalized to its capacity. A 1C rate fully charges or discharges in one hour; 0.5C in two hours. Lower C-rates (e.g. 0.25C, a 4-hour system) are common for grid storage.

**Clipping** — The loss that occurs when array DC power exceeds the inverter's AC rating and the inverter caps (clips) output at its maximum. Driven by a high **DC/AC ratio (ILR)**; modest clipping is often economically optimal.

**Collection system** — The medium-voltage cabling, trenches, and pad-mounted transformers that gather output from many inverters across a utility-scale plant and route it to the project substation.

**Combiner box** — An enclosure that parallels multiple PV strings onto larger output conductors, often housing string fuses (OCPD) and sometimes monitoring or DC disconnects.

**Community solar** — A shared off-site array whose output is allocated to multiple subscribers via bill credits, letting renters and customers without suitable roofs participate; rules and compensation vary widely by state program.

**Conductor (EGC / GEC)** — A wire carrying current or providing a fault/ground path. The **Equipment Grounding Conductor (EGC)** bonds equipment metal for fault clearing; the **Grounding Electrode Conductor (GEC)** connects the system to earth electrodes.

**Critical loads panel** — A subpanel (also "backup loads panel") containing only the circuits intended to run during an outage, allowing a battery/backup system to power essential loads without having to support the entire home.

**Curtailment** — The deliberate reduction of available generation below what the resource could produce, due to grid congestion, oversupply, negative prices, or operator instruction; a growing factor in high-penetration solar regions.

### D

**DC-to-AC ratio (ILR)** — Also **Inverter Load Ratio**: array DC nameplate divided by inverter AC nameplate, `ILR = DC kWp ÷ AC kW`. Typical economic range 1.15–1.35; values >1.0 increase capacity factor at the cost of some clipping.

**Degradation** — The gradual decline in module output over time, typically ~0.3–0.7%/year, plus an initial light-induced drop. Warranties commonly guarantee ~80–87% of nameplate at year 25.

**Demand charge** — A billing component based on a customer's highest power draw (kW) during a period (often a 15-minute peak), independent of total energy used. Demand charges drive commercial storage and peak-shaving economics.

**Demand ratchet** — A tariff provision that sets a customer's billed demand to a percentage of the highest peak recorded over preceding months, so a single high-demand interval can elevate charges long after it occurs.

**Demand response (DR)** — Programs that pay or incentivize customers to reduce or shift load during grid stress events; on-site solar and storage can be dispatched to provide DR capacity.

**Depth of Discharge (DoD)** — The percentage of a battery's capacity that has been discharged. Higher usable DoD increases available energy but can shorten cycle life depending on chemistry.

**Derate** — A multiplicative reduction factor applied to ideal output to account for a real-world loss (temperature, soiling, wiring, inverter, mismatch, availability). The product of all derates yields the **performance ratio**.

### E

**EVSE (Electric Vehicle Supply Equipment)** — The charging station hardware (the "charger") that safely delivers AC or DC electricity to an electric vehicle; increasingly paired with solar and managed to charge during high production or off-peak periods.

### F

**FERC (Federal Energy Regulatory Commission)** — The U.S. agency regulating interstate electricity transmission, wholesale power markets, and interconnection of large generators; FERC orders shape interconnection procedures and market rules.

**Fill factor (FF)** — A measure of an I-V curve's "squareness" and cell quality: `FF = (Vmp × Imp) ÷ (Voc × Isc)`. Higher FF (typically 0.7–0.85) indicates a better-performing cell.

**Front-of-the-meter (FTM)** — Generation or storage connected to the grid on the utility side of the customer meter, selling energy or services into wholesale markets; contrast with **behind-the-meter**.

### G

**Gen-tie line** — The "generation tie" — the high- or medium-voltage line that carries a utility-scale plant's output from its substation/switchyard to the **point of interconnection** with the grid.

**Geotechnical** — The subsurface soil investigation (borings, resistivity, corrosion, bearing capacity) that informs pile design, grounding, and foundations for ground-mount and utility-scale projects.

**GFCI / GFDI (Ground-Fault Protection)** — Functions that detect current leaking to ground and interrupt the circuit. Residential AC outlets use **GFCI**; PV arrays use ground-fault detection/interruption per NEC 690.5 to limit shock and fire hazards.

**Grid-forming vs grid-following** — A **grid-following** inverter synchronizes to an existing grid voltage/frequency reference and injects current accordingly. A **grid-forming** inverter actively establishes its own voltage and frequency, enabling islanding, black start, and stability on low-inertia grids.

**Ground-coverage ratio (GCR)** — The ratio of module (collector) area to total ground/land area, `GCR = row width ÷ row pitch`. Higher GCR packs more capacity per acre but increases inter-row shading and backtracking losses.

**Grounding vs Bonding** — **Bonding** electrically connects metal parts together to a common potential for fault-current return; **Grounding** connects the bonded system to earth. Both are required for safety; they are distinct functions often conflated.

### H

**Hosting capacity** — The amount of additional distributed generation a given point on the distribution grid can accept without requiring upgrades or violating voltage/thermal limits; utilities publish hosting-capacity maps to guide siting.

**HSAT (Horizontal Single-Axis Tracker)** — The dominant utility-scale tracker geometry, rotating rows about a horizontal north-south axis to follow the sun east-to-west; pairs with backtracking to limit row-to-row shading.

**Hybrid inverter** — An inverter that manages PV, battery storage, and grid/loads in one unit, supporting charging, discharging, backup, and (often) islanding during outages.

### I

**Insolation** — Solar *energy* received per unit area over time (Wh/m² or kWh/m²), as distinct from instantaneous **irradiance**. Daily insolation in kWh/m² equals the day's **peak sun hours**.

**Interconnection** — The electrical and contractual connection of a PV system to the utility grid, governed by NEC Article 705 and the utility's interconnection agreement/standards.

**Interconnection queue** — The ordered list of proposed generation/storage projects awaiting study and approval to connect to the transmission system; long queues and cluster studies are a major utility-scale development bottleneck.

**Inverter** — The device that converts module DC power to grid-synchronized AC power, performing maximum power point tracking, anti-islanding, and grid-support functions. Types: string, central, micro, and hybrid.

**Irradiance** — Instantaneous solar power density, in W/m². The STC reference is 1000 W/m².

**ISO / RTO** — An **Independent System Operator** or **Regional Transmission Organization** that operates the bulk grid, runs wholesale energy/ancillary markets, and administers interconnection across a region (e.g. CAISO, PJM, ERCOT, MISO, ISO-NE, NYISO, SPP).

**I-V curve** — The current-versus-voltage characteristic of a cell, module, or string. Key points: short-circuit (Isc), open-circuit (Voc), and the maximum power point (Pmax at Vmp, Imp).

### K

**kW vs kWh** — **Kilowatt (kW)** is *power* (instantaneous rate, e.g. system size); **kilowatt-hour (kWh)** is *energy* (power × time, e.g. monthly bill). A 5 kW system running 4 peak sun hours produces ~20 kWh.

### L

**LCOE (Levelized Cost of Energy)** — The discounted lifetime cost of a system divided by its discounted lifetime energy output, expressed in $/kWh; the per-unit cost at which the project breaks even.

**LGIA / SGIA** — The **Large** and **Small Generator Interconnection Agreement** — the FERC-jurisdictional contracts governing how a generator connects to the transmission grid, defining facilities, cost responsibility, and operating obligations (typically split at 20 MW).

**Line-side tap** — A **supply-side** connection that taps PV/storage onto the service conductors between the utility and the main service disconnect (NEC 705.11), avoiding the 120% busbar rule and often used when load-side capacity is insufficient.

**LMP / nodal pricing** — **Locational Marginal Pricing**: the wholesale energy price at a specific grid node, reflecting marginal generation cost plus congestion and losses. Solar revenue in merchant markets depends on the LMP at the plant's node.

**Load factor** — The ratio of average load to peak load over a period; a low load factor (spiky demand) signals high demand-charge exposure and good candidacy for peak shaving.

**Load shifting** — Using storage or controllable loads to move energy consumption from high-price/high-demand periods to lower-cost periods, without necessarily reducing total energy used.

**Load-side connection** — A PV/storage interconnection on the customer side of the main breaker — typically a back-fed breaker in the main panel or a subpanel — subject to the NEC 705.12 busbar/120% (or other listed) rule.

**LVRT / HVRT (Low-/High-Voltage Ride-Through)** — Inverter capability (required by IEEE 1547 and interconnection rules) to remain connected and supportive through brief grid voltage sags or swells rather than tripping offline, improving grid stability.

### M

**Main panel upgrade (MPU)** — Replacing a home's main service panel/busbar (e.g. from 100 A to 200 A) to provide capacity for solar back-feed, batteries, EV charging, or electrification when the existing panel cannot accommodate the addition under NEC 705.12.

**Medium voltage (MV)** — Distribution-class voltages roughly 1 kV–35 kV (commonly 12.47–34.5 kV in solar collection systems) at which utility-scale plants gather and transmit power before final step-up.

**Merchant plant** — A generation project that sells its output at fluctuating wholesale market prices rather than under a fixed long-term contract, taking on price (and often shape) risk in exchange for upside.

**Microinverter** — A small inverter mounted at each module (or pair), converting DC to AC at the module level for per-module MPPT, monitoring, and inherent module-level rapid shutdown.

**MLPE (Module-Level Power Electronics)** — Devices attached to individual modules — microinverters or DC optimizers — that provide per-module MPPT, monitoring, and rapid-shutdown capability, improving yield under mismatch/shade.

**Module** — A single, factory-assembled, environmentally sealed panel of interconnected PV cells — the basic building block of an array. (A "panel" colloquially.)

**MPPT (Maximum Power Point Tracking)** — The inverter/optimizer algorithm that continuously adjusts operating voltage to keep the array at its maximum-power point as irradiance and temperature change.

### N

**NABCEP** — The **North American Board of Certified Energy Practitioners**, the leading voluntary certification body for solar installers, designers, and inspectors in North America.

**NEM 3.0 / Net billing** — California's **Net Billing Tariff** (effective April 15, 2023), which credits exported solar at hourly **avoided-cost** (ACC) values — typically a small fraction of retail — rather than retail-rate net metering, sharply improving the economics of pairing solar with storage. Systems achieving Permission to Operate by April 15, 2026 were the last eligible to grandfather under the more favorable NEM 2.0 rules.

**NEPA (National Environmental Policy Act)** — The federal law requiring environmental review (e.g. environmental assessment or impact statement) for projects with federal involvement, such as solar on federal land or with federal permits; a key utility-scale development milestone.

**NERC / NERC CIP** — The **North American Electric Reliability Corporation** sets and enforces mandatory bulk-power reliability standards; its **Critical Infrastructure Protection (CIP)** standards impose cybersecurity and physical-security requirements on qualifying generation and control systems.

**Net metering vs Net billing** — Under **net metering**, exported energy offsets imported energy at (near) retail value, typically kWh-for-kWh. Under **net billing**, exports are credited at a separate, usually lower, rate (e.g. avoided cost) while imports are billed at retail.

**NFPA 855** — The NFPA *Standard for the Installation of Stationary Energy Storage Systems*, governing siting, separation, ventilation, and fire protection for BESS. The 2026 edition makes large-scale fire testing mandatory and references UL 9540A for that testing.

**NOCT (Nominal Operating Cell Temperature)** — The cell temperature under defined real-world conditions (800 W/m², 20 °C ambient, 1 m/s wind), typically ~43–48 °C — a more realistic basis than STC for field temperatures.

### O

**OCPD (Overcurrent Protective Device)** — A fuse or circuit breaker that protects conductors and equipment from over-current; sized per NEC 690.9 (PV) and 240.6 (standard ratings).

**Optimizer** — A module-level DC-DC power electronics device that performs per-module MPPT and reports data while a central string inverter handles DC-to-AC conversion; also provides module-level rapid shutdown.

### P

**P50 / P90** — Probabilistic energy estimates from a production model. **P50** is the median expected annual yield (50% chance of exceedance); **P90** is the conservative value exceeded 90% of years, used by lenders to size debt.

**Peak shaving** — Dispatching storage (or curtailing/shifting load) to clip a facility's highest demand intervals, reducing **demand charges** and grid stress.

**PERC (Passivated Emitter and Rear Cell)** — A mainstream silicon cell architecture adding a rear passivation layer to reflect light back into the cell and reduce recombination, raising efficiency over standard cells.

**Performance ratio (PR)** — The ratio of actual delivered AC energy to the theoretical energy at rated DC power and measured irradiance; the product of all loss factors. Modern systems typically reach PR ≈ 0.78–0.84.

**Permission to Operate (PTO)** — The utility's formal authorization, issued after interconnection approval and inspection sign-off, allowing a system to energize and export; the milestone that starts billing under the chosen tariff.

**Photovoltaic effect** — The physical phenomenon by which a semiconductor generates voltage and current when exposed to light, separating photo-excited electron-hole pairs across a p-n junction.

**Pile refusal** — The condition where a driven foundation pile cannot advance to its design depth (hitting rock or hard soil), requiring pre-drilling, redesign, or alternative foundations — a schedule and cost risk on ground mounts.

**Point of interconnection (POI)** — The exact location where the PV system electrically connects to the utility/premises wiring (e.g. a back-fed breaker, line-side tap, or dedicated meter); central to NEC 705.12/705.11 compliance and, at utility scale, the metered grid boundary.

**Power factor (pf)** — The ratio of real power to apparent power, `pf = P ÷ S = cos(θ)` (0–1). Grid-tied inverters usually run near unity unless commanded to supply/absorb reactive power.

**Power factor correction** — Adding capacitors or commanding inverters to supply reactive power so a facility's power factor approaches unity, reducing apparent-power (kVA) demand and avoiding low-power-factor penalties.

**Power plant controller (PPC)** — The plant-level supervisory controller at a utility-scale solar/storage facility that coordinates all inverters to meet POI setpoints for real power, reactive power/voltage, ramp rate, and grid-operator dispatch.

**Power purchase agreement (PPA)** — A contract under which a third party owns the system and sells the produced electricity to the host (or to a utility/offtaker) at an agreed $/kWh rate, often with no upfront cost to the host.

**PPA (Power Purchase Agreement)** — See **Power purchase agreement**.

**Peak sun hours (PSH)** — The equivalent number of hours per day of 1000 W/m² irradiance that yields the same daily insolation; numerically equal to daily plane-of-array insolation in kWh/m².

**PTC (PVUSA Test Conditions)** — A rating condition (1000 W/m², 20 °C ambient, 1 m/s wind) that gives a more field-representative power figure than STC; PTC ratings are typically a few percent below STC.

**PV (Photovoltaic)** — Pertaining to the direct conversion of light into electricity via the photovoltaic effect.

### R

**Rapid shutdown** — An NEC 690.12 requirement to quickly reduce conductor voltage within and near the array (to safe levels) for firefighter safety, satisfied by module-level electronics (micros/optimizers) or compliant equipment.

**Reactive power / VAR** — Power that oscillates between source and load without doing net work, measured in volt-amperes reactive (VAR); managing reactive power supports grid voltage. Smart inverters can absorb or supply VARs on command.

**REC (Renewable Energy Certificate)** — A tradable certificate representing the environmental attributes of 1 MWh of renewable generation, sold separately from the underlying energy.

**Repowering** — Upgrading an existing plant — replacing aging modules, inverters, or trackers, or adding storage — to restore or increase output and extend operating life.

**Ride-through** — See **LVRT / HVRT**.

**ROCOF (Rate of Change of Frequency)** — How fast grid frequency changes (Hz/s) after a disturbance. Low-inertia, inverter-dominated grids see steeper ROCOF, raising the importance of fast frequency response and grid-forming inverters.

**Round-trip efficiency (RTE)** — The ratio of energy a storage system delivers on discharge to the energy put in to charge it, accounting for conversion and losses; lithium-ion BESS typically achieve ~85–92%.

**RPS (Renewable Portfolio Standard)** — A state mandate requiring load-serving entities to source a minimum share of electricity from renewables, often met by retiring RECs/SRECs; a primary driver of solar demand.

### S

**SCADA (Supervisory Control and Data Acquisition)** — The monitoring and control system that gathers telemetry from plant equipment and relays operator/PPC commands; the operational backbone of utility-scale solar and storage.

**SGIP** — See state program references in *Sources*; broadly, incentive programs (e.g. California's Self-Generation Incentive Program) that subsidize behind-the-meter storage.

**SMART** — Massachusetts's **Solar Massachusetts Renewable Target** program, a declining-block tariff incentive that supported residential through utility-scale solar; its capacity has been largely succeeded by the **SuSI** program.

**Solar access** — The legal and physical right to unobstructed sunlight reaching an array; protected in some jurisdictions by solar-access laws, easements, or solar-rights statutes against shading by neighboring structures or vegetation.

**SolarAPP+** — An NREL-developed **Solar Automated Permit Processing** platform that lets participating AHJs instantly review and approve code-compliant residential solar and solar-plus-storage permits online, cutting permitting time; adopted by 160+ communities.

**Solar lease** — A financing arrangement in which a host pays a fixed (often escalating) monthly amount to use a third-party-owned system, as opposed to buying the energy by the kWh under a PPA.

**Solar noon** — The moment the sun crosses the local meridian (due south/north) and reaches its highest daily elevation; the reference time for peak irradiance and shading calculations.

**Solar shingle** — A **BIPV** roofing product that integrates PV cells into shingle/tile form, replacing conventional roofing while generating power; aesthetically driven and generally costlier per watt than rack-mounted modules.

**SOC (State of Charge)** — The present energy in a battery as a percentage of its usable capacity (0–100%); the core operating variable a battery management system regulates and dispatch schedules target.

**Specific yield** — Annual AC energy normalized to installed DC capacity, `kWh ÷ kWp`; enables comparison across system sizes and locations (typically ~1,100–1,900+ kWh/kWp/yr).

**SREC (Solar Renewable Energy Certificate)** — A REC specific to solar generation, used in state solar carve-out / RPS programs and often more valuable than generic RECs.

**STC (Standard Test Conditions)** — The lab reference for rating modules: **1000 W/m² irradiance, 25 °C cell temperature, AM 1.5 spectrum**. Nameplate watt ratings are at STC.

**String** — A group of PV modules wired in series; the series count sets the string voltage, which must stay within the inverter's MPPT and maximum-input window across temperature extremes.

**Substation** — The facility that steps a utility-scale plant's medium-voltage collected output up to transmission voltage and houses protection, metering, and switching before the gen-tie carries power to the grid.

**SuSI (Solar for All / SMART successor)** — Massachusetts's successor incentive framework to the SMART program, restructuring distributed-solar compensation across residential, low-income, commercial, and larger projects.

**SwitchYard** — The high-voltage switching and protection area (breakers, disconnects, buswork) at a substation or interconnection point where the plant ties to the transmission system.

### T

**Tax equity** — A financing structure in which an investor with tax liability funds part of a project in exchange for federal tax credits (ITC/PTC) and depreciation benefits, monetizing incentives the developer cannot fully use itself.

**Temperature coefficient** — The percentage change in a module parameter (Voc, Vmp, Isc, or Pmax) per °C deviation from 25 °C STC. Voltage coefficients are negative (voltage rises as temperature falls), critical for cold-Voc string sizing.

**Tilt** — The angle of the array plane from horizontal (0° = flat, 90° = vertical). Annual-optimal tilt is roughly the site latitude; steeper favors winter, shallower favors summer.

**Time-of-use (TOU)** — A rate structure in which the per-kWh price varies by time of day and season, with higher on-peak (often evening) prices; TOU shifts the value of solar and motivates storage to discharge during peak windows.

**TMY (Typical Meteorological Year)** — A synthesized one-year dataset of hourly weather/irradiance representing long-term typical conditions at a site, used as the standard input for energy-yield simulations.

**TOPCon / HJT** — Advanced high-efficiency silicon cell technologies. **TOPCon** (Tunnel Oxide Passivated Contact) adds an ultrathin oxide and doped poly-silicon layer; **HJT** (Heterojunction) combines crystalline and amorphous silicon layers. Both exceed PERC efficiency with favorable temperature coefficients.

**Tracker** — A mounting system that rotates the array to follow the sun, increasing energy capture. **Single-axis** trackers rotate east-west about a horizontal axis; **dual-axis** trackers also adjust elevation.

**Transferability** — A provision (introduced by the Inflation Reduction Act) allowing project owners to sell certain federal clean-energy tax credits for cash to unrelated parties, broadening financing options beyond traditional tax equity.

**Transformer** — A device that changes AC voltage levels (e.g. stepping inverter output up to medium-voltage distribution), and may provide galvanic isolation between circuits.

### U

**UL 1741** — The safety standard for inverters, converters, and interconnection equipment. The **UL 1741-SA/SB** supplements add grid-support ("smart inverter") functions aligned with IEEE 1547.

**UL 9540 / 9540A** — **UL 9540** is the product safety standard for energy storage systems and equipment; **UL 9540A** is the companion test method that characterizes thermal-runaway fire propagation in a BESS. UL 9540A results inform NFPA 855 siting and separation requirements.

### V

**V2H (Vehicle-to-Home)** — A bidirectional EV-charging capability that lets an electric vehicle's battery discharge to power a home (and back up loads during outages), turning the vehicle into a mobile storage asset; a subset of broader vehicle-to-grid (V2G).

**VDER (Value of Distributed Energy Resources)** — New York's "Value Stack" successor to net metering, compensating distributed solar based on time- and location-specific value components (energy, capacity, environmental, locational) rather than a flat retail credit.

**Voc / Isc / Vmp / Imp / Pmax** — Core module datasheet parameters: **Voc** = open-circuit voltage (no load), **Isc** = short-circuit current (zero voltage), **Vmp/Imp** = voltage/current at the maximum power point, **Pmax** = maximum power (`Vmp × Imp`), all at STC.

**VPPA (Virtual Power Purchase Agreement)** — A financial (contract-for-differences) PPA in which a corporate buyer settles against a project's market revenue at a fixed strike price and takes the RECs, without taking physical delivery of the power; widely used for corporate renewable procurement.

### W

**Watt-peak (Wp)** — A module's rated DC power output at STC; the standard nameplate unit (e.g. a 410 Wp module). System DC size is expressed in kWp (kilowatt-peak).

---

## Sources & Further Reading

- [NREL — Solar Energy Basics & Research](https://www.nrel.gov/research/re-solar)
- [NREL — SolarAPP+ Automated Permit Processing](https://www.nrel.gov/research/software/solarapp-solar-automated-permit-processing)
- [NABCEP — Certifications & Resources](https://www.nabcep.org/)
- [PVEducation — PV fundamentals, I-V curves, fill factor, temperature effects](https://www.pveducation.org/)
- [ExpertCE — NEC Article 690 & PV string sizing references](https://expertce.com/learn-articles/)
- [Mayfield Renewables — NEC 690/705 Code Corner technical articles](https://www.mayfield.energy/technical-articles/)
- [NREL PVWatts Calculator](https://pvwatts.nrel.gov/)
- [CPUC — Net Energy Metering and Net Billing (NEM 3.0)](https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing)
- [NYSERDA — Value of Distributed Energy Resources (VDER)](https://www.nyserda.ny.gov/All-Programs/NY-Sun/Contractors/Value-of-Distributed-Energy-Resources)
- [UL Solutions — UL 9540A Test Method and NFPA 855](https://www.ul.com/services/ul-9540a-test-method)
- NFPA 70 (National Electrical Code), Articles 690, 705, and 710 — consult the edition adopted by your AHJ
- NFPA 855 — Standard for the Installation of Stationary Energy Storage Systems (2026 edition)
- IEEE 1547 and UL 1741 — interconnection and inverter safety standards
- FERC and your regional ISO/RTO — interconnection procedures and wholesale market rules

---

*Disclaimer: Educational/reference use only. Verify all definitions, values, and code citations against the NEC edition adopted by your jurisdiction, applicable utility/ISO tariffs and program rules, manufacturer datasheets, and a licensed Professional Engineer or electrician before design or installation.*
