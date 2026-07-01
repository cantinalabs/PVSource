# DIY EV Charging from Solar

Pairing an electric vehicle with a solar array is one of the most satisfying things a homeowner can do: the sun that hits your roof turns into miles on the road. But "charging your car with sunshine" hides a lot of electrical and code detail. This page walks through choosing an EVSE, sizing solar to actually cover your driving, the load and panel-capacity math that decides whether you can add a charger at all, and the honest limits on charging "directly" from panels.

It builds on the [DIY Electrical Calculations](diy-electrical-calcs.md) page for the arithmetic, [Building Your Own System](diy-overview.md) for the whole-system view, the [Wiring & Connectors Reference](fundamentals-wiring-connectors.md) for conductors and terminations, and [Residential Codes & Fire Requirements](residential-codes.md) for code adoption. Grounding and surge details are on the [DIY Grounding, Bonding & Surge Protection](diy-grounding-surge.md) page.

> **SAFETY:** A Level 2 EV circuit is one of the largest continuous loads in a house. Under-sized wire, an over-loaded busbar, or a missing load-management device can overheat conductors inside walls — a fire risk with no easy warning. The service and panel work described here is, in most jurisdictions, work a DIYer must **not** self-perform without a permit and inspection, and often must be done by a licensed electrician. NEC section numbers below reference NFPA 70; confirm the edition adopted by your AHJ.

## Charging levels and EVSE selection

"EVSE" (Electric Vehicle Supply Equipment) is the proper name for the "charger" — the actual charger is inside the car; the EVSE is the safety and communication device on the wall.

| Level | Supply | Typical power | Miles added per hour | Use case |
|-------|--------|---------------|----------------------|----------|
| **Level 1** | 120 V, 12 A (standard outlet) | ~1.4 kW | ~3–5 mi | Trickle / plug-in hybrids / low daily miles |
| **Level 2** | 240 V, 16–48 A | ~3.8–11.5 kW | ~15–40 mi | The standard home charger |
| **DC fast (Level 3)** | 400–800 V DC | 50–350 kW | Highway-only; not residential | Public stations |

**Selecting a Level 2 EVSE:**

- **Amperage.** A 40 A EVSE on a 50 A circuit is the common sweet spot for homes; 48 A (on a 60 A circuit) charges faster but stresses panel capacity. Match the EVSE to how much you actually drive, not the biggest unit sold.
- **Hardwired vs. plug-in.** Hardwired units are cleaner and required in some settings; a plug-in unit on a NEMA 14-50 receptacle is flexible but the receptacle and its GFCI protection add cost and are a common inspection item.
- **Smart / load-managing.** An EVSE that can throttle its current (or an add-on EVEMS) can let you install a charger where panel capacity would otherwise forbid it — see the busbar rule below.

## Sizing solar to cover your driving (worked example)

The chain is: **miles → kWh needed → daily solar production → array size.**

```
Step 1 - Driving energy:
  Daily miles:               35 mi/day
  EV efficiency:             ~3.5 mi/kWh (typical) -> 0.286 kWh/mi
  Energy at the wheels:      35 / 3.5 = 10.0 kWh/day
  Charging losses (~10-15%): 10.0 / 0.88 = ~11.4 kWh/day from the wall

Step 2 - Solar production needed:
  Use your local "peak sun hours" (PSH). Say 4.5 PSH/day average.
  System losses (soiling, temp, inverter): derate ~0.80

  Required array (kW) = daily kWh / (PSH x derate)
                      = 11.4 / (4.5 x 0.80)
                      = 11.4 / 3.6
                      = ~3.17 kW of PV just for the car

Step 3 - Panels:
  With 400 W modules: 3.17 kW / 0.400 kW = ~8 panels
```

> **Reality check:** This is the *average* over a year. Winter production can be half of summer, so size for the season you care about or plan to pull the shortfall from the grid. Peak sun hours vary widely by location — look yours up (NREL PVWatts) before trusting any single number.

## The load calculation and the 125% continuous rule

EV charging is defined as a **continuous load** (NEC **625.42**). Continuous loads must be served by a circuit and OCPD rated at **125%** of the load — equivalently, you may only load the circuit to 80%.

```
Example - 40 A EVSE:
  Circuit / breaker = 40 A x 1.25 = 50 A
  -> 50 A breaker, conductors rated for 50 A (e.g., 6 AWG Cu, per ampacity tables)

Example - 48 A EVSE:
  48 A x 1.25 = 60 A -> 60 A circuit (e.g., 4 AWG Cu)
```

NEC **625.41** requires the branch-circuit OCPD to be rated at not less than 125% of the EVSE's maximum load, which is the same 125% figure applied to overcurrent protection. Whether the EVSE load must be added to your whole-house service load calculation (Article 220) determines if your **service** is big enough — a separate question from whether a given panel can accept the breaker.

> **Note on newer editions:** The 2026 NEC introduces an exception allowing the 125% continuous multiplier to be relaxed when a listed EV Energy Management System (EVEMS) per 625.48 actively limits the load. Confirm which edition your AHJ enforces before relying on it.

## Panel capacity, the 120% busbar rule, and load management

Two separate limits decide whether you can add a big EV circuit:

**1. Service / panel busbar rating vs. loads.** Adding a 50–60 A continuous circuit to a panel that is already near its limit can overload the busbar. A whole-house load calculation (Article 220) tells you the demand; the panel's busbar rating (often 100, 150, 200 A) tells you the ceiling.

**2. The 120% busbar rule (NEC 705.12) — when solar and the EVSE share the panel.** When PV back-feeds into the same panel, the combination of the main breaker and the PV back-feed breaker can push more current through the busbar than its rating. Under **705.12(B)(3)(2)**, where the primary source (utility main) and the PV back-feed are at **opposite ends** of the busbar, the sum of 125% of the PV output-circuit current **plus** the rating of the main OCPD protecting the busbar must not exceed **120%** of the busbar ampacity.

```
120% Rule example (200 A busbar):
  Busbar ampacity:        200 A
  120% of busbar:         240 A
  Main breaker:           200 A
  Room left for PV back-feed breaker: 240 - 200 = 40 A
  -> A PV back-feed breaker up to 40 A fits at the opposite end.
```

Adding a large EV circuit *and* solar to the same 200 A panel can therefore run you out of both busbar room and back-feed room at once.

**Load-management devices / EVEMS (NEC 625.42 / 705.13).** Rather than upgrading the service, a listed **EVEMS** can automatically throttle or pause EV charging when the house is drawing heavily, so the *managed* load — not the EVSE nameplate — is what you count. Similarly, an **Energy Management System under 705.13** lets you interconnect PV based on a controlled current setting instead of full inverter output, sometimes avoiding a panel upgrade entirely.

> **Rule:** If your load calculation or the 120% rule says the circuit does not fit, the answer is a service/panel upgrade, a smaller EVSE, or a listed load-management device — **never** just installing the breaker anyway. Overloading a busbar is a fire hazard the panel itself will not warn you about.

## Can you charge "directly" off solar?

This is where DIY myths run wild.

- **"DC-couple the panels straight to the car."** In practice, no. Your car's charger and the EVSE expect regulated AC (Level 2) or a fast-charge DC protocol — not raw, sun-variable DC from a string. Some off-grid setups charge a battery bank from DC and then run an EVSE off an inverter, but you are still going through AC and a battery, not "directly."
- **Timing and scheduling.** The realistic way to "charge from solar" on a grid-tied system is to **schedule** charging for midday when the array is producing, so your own generation offsets the draw. Many EVSEs and vehicles support a solar/schedule mode; some read your inverter's production and modulate charging to match export.
- **Time-of-use (TOU) rates.** If you are on a TOU tariff, the economics may favor charging at night on cheap off-peak power and exporting your solar during expensive peak hours — the opposite of "charge at noon." Run the numbers for your rate plan; the cheapest kWh is not always your own.

> **Bottom line:** "Solar charging" is mostly an energy-accounting and scheduling exercise on a grid-tied home, not a physical wire from panel to car.

## Wiring and circuit for a Level 2 charger

Typical hardwired 40 A EVSE on a 50 A circuit:

- **Conductors:** sized for 50 A continuous per the ampacity tables and any temperature/derating (commonly 6 AWG copper THHN; verify for your run length and conduit fill).
- **Overcurrent:** 50 A two-pole breaker (240 V).
- **GFCI/CCID:** Listed EVSEs contain a Charge Circuit Interrupting Device; a **plug-in** unit on a NEMA 14-50 typically also requires GFCI protection per the receptacle rules — check current NEC 210.8 and 625 requirements.
- **Grounding:** run the EGC sized per Table 250.122 for the 50 A OCPD (10 AWG copper). See [DIY Grounding, Bonding & Surge Protection](diy-grounding-surge.md).
- **Voltage drop:** for long runs, keep drop under ~3% or you lose charging speed; upsize conductors as needed.

## Where a DIYer must stop and hire a licensed electrician

> **STOP — hire a licensed electrician for:**
> - Any **service upgrade** (e.g., 100 A → 200 A) or work on the service entrance/meter.
> - Adding or moving breakers and **back-feed / interconnection** work under NEC 705.
> - The **load calculation and 120% busbar analysis** if you are not fully confident — an error here is a fire risk and a failed inspection.
> - Anywhere your jurisdiction legally requires licensed work or does not permit homeowner self-installation.
>
> Even where homeowner permits are allowed, EV + solar interconnection is inspected closely. Pulling a permit and scheduling inspection is not optional — it is the safety net.

## Incentives

Incentives change frequently and vary by location; verify current programs before counting on them.

- **Federal:** Historically a residential EV charger (EVSE) tax credit existed under IRC Section 30C for eligible locations, and solar had the Residential Clean Energy Credit (Section 25D). Both federal incentives have been subject to legislative change — **verify current eligibility, percentages, and expiration dates** with the IRS and a tax professional before relying on them.
- **State / utility:** Many utilities offer EVSE rebates, TOU EV rate plans, and make-ready wiring programs. Check your utility and state energy office.
- **DSIRE** is the standard clearinghouse for U.S. incentives: [dsireusa.org](https://www.dsireusa.org/).

## ASCII one-line: solar + EVSE + panel

```
        SOLAR ARRAY
           |
      +----------+
      | INVERTER |  (AC output)
      +----------+
           |  PV back-feed breaker (<= room left by 120% rule, 705.12)
           v
  +----------------------------------+
  |         MAIN SERVICE PANEL       |
  |  200 A busbar / 200 A main       |
  |                                  |
  |  [MAIN]===busbar===[PV backfeed] |  <- opposite ends: 705.12 120% check
  |            |                     |
  |     [50 A 2-pole EV breaker]     |
  +------------|---------------------+
               |  6 AWG Cu + 10 AWG EGC (50 A circuit)
               v
          +---------+
          |  EVSE   |  (40 A Level 2, hardwired)
          +---------+
               |  J1772 / NACS connector
               v
             [ EV ]

  Optional: EVEMS between panel and EVSE throttles the car when the
  house load is high, so the *managed* current is what counts (625.42).
```

## Sources & Further Reading

- [625.42 Rating (Electrical License Renewal)](https://www.electricallicenserenewal.com/Electrical-Continuing-Education-Courses/NEC-Content.php?sectionID=1534)
- [NEC 625 + EVEMS: How Load Management Helps (NeoCharge)](https://getneocharge.com/a/blog/nec-625-evems-energy-management-system-home-ev-charging)
- [The 120% Rule for Solar: NEC 705.12 Guide (GreenLancer)](https://www.greenlancer.com/post/120-rule-for-solar)
- [Point of Connection Rules for PV Systems (NEC 705.12) (ExpertCE)](https://expertce.com/learn-articles/point-of-connection-pv-systems-nec-705-12/)
- [NEC 2026 EV Charger Changes — 625.42, 625.48 EVEMS (SparkShift)](https://sparkshift.app/learn/nec-2026/ev-charger-changes)
- [NREL PVWatts Calculator (peak sun hours / production)](https://pvwatts.nrel.gov/)
- [DSIRE — Database of State Incentives for Renewables & Efficiency](https://www.dsireusa.org/)

---
*Educational reference only. This is not a substitute for a licensed electrician, an engineered load calculation, or your local AHJ. Verify all NEC references against your adopted edition, confirm incentive eligibility with a tax professional, and obtain permits and inspections before energizing.*
