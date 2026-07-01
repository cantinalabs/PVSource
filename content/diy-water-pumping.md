# Solar Water Pumping & Wells

Pumping water with solar is one of the most rewarding off-grid applications because the load and the resource line up so well: the sun is brightest when livestock drink the most, when crops need irrigation, and when a tank can be filled for the day. A well-designed solar pump can run for years with almost no attention and no fuel.

This guide covers the two fundamental architectures (array-direct vs. battery-based), DC vs. AC and submersible vs. surface pumps, controllers and **MPPT / linear current boosters**, full sizing with a worked example, and the practical realities of wells, freezing, and maintenance.

Part of the DIY series — see [Building Your Own System](diy-overview.md), [DIY Electrical Calculations](diy-electrical-calcs.md), [Residential Permitting & Interconnection](residential-permitting.md), and [Sourcing Materials & Kits](diy-sourcing.md).

> **SAFETY & PERMIT CAUTION:** Well work is regulated almost everywhere. Drilling, modifying a wellhead, or installing a pump in a potable well often requires a **licensed well driller/pump installer** and a permit; some jurisdictions require the wellhead and electrical to be inspected. Submersible pump wiring carries lethal voltages and sits in water — bonding, grounding, and proper splices are not optional. Confirm local well and electrical codes before you start.

## Two Architectures: Array-Direct vs. Battery-Based

The first decision shapes the entire system.

| | **Array-direct (direct-drive)** | **Battery-based** |
|---|---|---|
| How it works | Panels feed the pump (through a controller) — it pumps **only when the sun shines** | Panels charge a battery; pump runs from the battery on demand, day or night |
| Storage strategy | Store **water** in a tank | Store **energy** in a battery |
| Complexity / cost | Simplest, fewest parts, lowest cost | More parts (battery, charge controller), higher cost and maintenance |
| Best for | Most wells, livestock, irrigation where a tank can buffer demand | When you must pump at night, need pressure on demand, or share the battery with other loads |
| Lifespan concern | No battery to replace | Battery is a wear item |

> **Design philosophy:** Prefer **array-direct with a storage tank** whenever possible. A tank is the cheapest, longest-lived, most maintenance-free "battery" you can buy. Use batteries only when the application genuinely requires pumping without sun.

## DC vs. AC Pumps

| | **DC pump** | **AC pump** |
|---|---|---|
| Drive | Brushless DC motor, runs directly from array/controller | Standard induction motor; needs an **inverter** (or VFD-style pump-inverter) |
| Efficiency at low light | Excellent — well suited to array-direct | Needs enough power to start; less graceful in low light |
| Cost / availability | Purpose-built solar pumps; sizes limited at the high end | Cheap, ubiquitous, large sizes available |
| Best for | Small-to-mid off-grid wells, remote sites | Larger flows, existing AC well pumps, hybrid grid/solar |

Many modern "solar pumps" are **brushless DC** with an integrated or external controller. For large agricultural systems, an **AC pump driven by a solar pump-inverter (VFD)** is common.

## Submersible vs. Surface Pumps

- **Submersible:** Hangs **down inside the well**, below the water level, and pushes water up. Required for deep wells; self-priming because it is always under water. Most off-grid well pumps are submersible.
- **Surface:** Sits **at or above** the water and pulls/pushes it. Good for shallow wells, ponds, streams, cisterns, and boosting pressure. Limited suction lift (practically ~20–25 ft of vertical suction before cavitation), so they push far better than they pull.

| Pump mechanism | Character | Typical use |
|---|---|---|
| **Centrifugal** | High flow, lower head | Shallow lift, surface transfer, irrigation volume |
| **Helical rotor / positive-displacement (diaphragm, piston)** | Low flow, **high head**, strong at low light | Deep wells, low-yield wells, slow-but-steady stock watering |

## Controllers, MPPT, and Linear Current Boosters

A solar pump rarely connects the panel straight to the motor — a **controller** sits between them and does several jobs:

- **MPPT (Maximum Power Point Tracking):** keeps the array at its most productive operating point as sun changes, and **down-converts voltage to extra current** the motor can use.
- **Linear Current Booster (LCB):** the classic array-direct device — it trades surplus voltage for **more current** so a pump can **start and keep turning in weak light** instead of stalling. Conceptually an MPPT optimized for motors.
- **Soft start / variable speed:** ramps the motor, pumping **fast at midday and slow at the edges of the day**, and shuts down cleanly when power is insufficient.
- **Protection:** **dry-run / low-water cutoff**, over/under-voltage, over-temperature, and (for storage) **float/full-tank** shutoff via a float switch or probes.

> **Match the controller to the pump and array.** Confirm the controller's **voltage window** covers your array's operating and open-circuit voltage (cold-weather **Voc** can spike — see [DIY Electrical Calculations](diy-electrical-calcs.md)) and that its **current rating** meets or exceeds the pump's max current.

## Sizing a Solar Pump

Sizing comes down to three things: **how high** (head), **how much** (daily volume), and **how much sun** (peak sun hours). The pump must lift water against the **Total Dynamic Head (TDH)** while delivering the daily volume within the available solar window.

### Total Dynamic Head (TDH)

```
TDH = static lift  +  drawdown  +  friction loss  +  pressure head

  static lift     = vertical distance from the standing (resting) water
                    level up to the discharge / tank inlet
  drawdown        = extra drop in water level while the pump runs
  friction loss   = head lost to pipe/fitting resistance (depends on
                    pipe diameter, length, flow rate)
  pressure head   = any pressure you need at the outlet
                    (1 psi  ≈  2.31 ft of head)
```

TDH is expressed in **feet (or meters) of head**. Pump performance curves give flow **at a given head**, so you must know TDH before you can read the curve.

### Daily Volume and the Solar Window

```
required flow rate = daily water volume  ÷  effective pumping hours

  effective pumping hours ≈ peak sun hours (PSH) for an array-direct
  system — pumps run mostly during the strong middle of the day
```

> Always **derate**. Real flow falls below catalog flow because of system losses, partial sun, dust on panels, and aging. Sizing with a comfortable margin (often 20–30%) and a tank that holds **2–3 days** of demand makes the system resilient to cloudy spells.

### Worked Sizing Example

**Goal:** Water a small cattle herd and a garden from a well in a sunny region.

**Given:**
- Daily water need: **1,200 gallons/day**
- Well: standing water level **120 ft** below ground; **drawdown** while pumping **15 ft**
- Discharge tank inlet is **10 ft** above ground; pressure head: negligible (gravity fill)
- Pipe friction (estimated for the chosen pipe size and flow): **~10 ft**
- Site: **5 peak sun hours/day** (PSH), array-direct

**Step 1 — Total Dynamic Head:**

```
TDH = static lift + drawdown + lift to tank + friction + pressure
    = 120 + 15 + 10 + 10 + 0
    = 155 ft of head
```

**Step 2 — Required flow rate:**

```
required flow = daily volume / effective hours
             = 1,200 gal / 5 hrs
             = 240 gal/hour  ≈  4 gal/min (GPM)
```

**Step 3 — Pick a pump:** From manufacturer curves, choose a **DC submersible** that delivers **≥ 4 GPM at 155 ft of TDH** (use a helical/positive-displacement pump — it holds flow well at high head and low light). Add margin: target a pump rated for roughly **5 GPM at 160–170 ft**.

**Step 4 — Size the array:** Manufacturers publish the array wattage a given pump needs at a given head. As a rough planning figure, a small deep-well DC submersible at this head commonly needs on the order of **300–600 W of PV per developed horsepower**; the pump's own chart is authoritative. Size the array to drive the pump near full output across the solar window, and confirm the array **voltage** falls inside the controller window in cold weather.

**Step 5 — Tank:** Size the storage tank for **2–3 days** of demand (≈ **2,400–3,600 gal**) so the herd and garden ride through cloudy days without a battery.

> **Use the manufacturer's pump-and-array sizing chart as the final word.** Pump curves, required array wattage, and controller compatibility are model-specific — the numbers above are planning estimates, not a substitute for the datasheet.

## Tank Storage — the "Water Battery"

A storage tank is the off-grid pumper's best friend:

- It decouples **when you pump** from **when you use** — pump all day, draw whenever.
- It rides through cloudy days (size for 2–3+ days of demand).
- It can provide **gravity pressure** if elevated (every ~2.31 ft of elevation ≈ 1 psi).
- It never needs replacing like a battery and is far cheaper per stored unit of "energy."

A **float switch** or level probe at the tank tells the controller to stop pumping when full and resume when low — protecting the pump and preventing overflow.

## Wiring & Protection for Wells

```
[PV ARRAY] ─► [DC DISCONNECT] ─► [PUMP CONTROLLER / LCB] ─► submersible cable ─► [PUMP]
                                         │
                                    float switch /
                                    low-water probe
```

- **Disconnect:** a lockable DC disconnect between array and controller for safe service.
- **Overcurrent / surge:** fusing per the controller maker's spec; surge/lightning protection is wise on long outdoor runs and tall wellheads.
- **Submersible cable:** use **listed submersible pump cable**, correctly sized for the current and the long downhole run (voltage drop matters — long runs may need a larger conductor).
- **Splices:** downhole splices must use **listed, waterproof submersible splice kits**.
- **Grounding & bonding:** ground the array frame and bond the wellhead/metal casing per local electrical code; this is a life-safety requirement, not a nicety.
- **Drop pipe & safety rope:** support the pump with proper drop pipe and a **safety rope/cable** so a failed joint doesn't drop the pump down the well.

> Conductor sizing, voltage drop on the long downhole run, and disconnect rules tie directly into [DIY Electrical Calculations](diy-electrical-calcs.md). Don't guess wire size for a deep submersible.

## Use Cases

- **Livestock watering:** Array-direct + tank is the textbook fit. Demand rises with heat and sun; a float-controlled tank keeps troughs full. Remote pastures with no grid love this.
- **Irrigation:** Pump midday into a tank or pond, then gravity- or drip-feed crops. Match pump type to need — centrifugal/surface for high-volume low-head, helical for deep wells.
- **Cabin / homestead supply:** Often needs **pressure on demand**, which pushes toward a **battery-based** system or a tank-plus-pressure-pump arrangement (pump fills a cistern by day; a small DC pressure pump and pressure tank serve the house).

## Freezing & Maintenance

**Freezing:**
- A **submersible pump** below the frost line and below standing water is naturally freeze-protected; the vulnerable parts are **above-ground pipe, the pitless adapter region, tanks, and exposed valves**.
- Bury supply lines **below the frost line**; insulate or heat-trace exposed runs.
- Use **frost-free hydrants**, drain-back fittings, or a small bleed orifice so above-ground pipe self-drains.
- Above-ground tanks need insulation, heat, or seasonal draining in hard-freeze climates.

**Maintenance:**
- Keep **panels clean** — dust directly cuts flow on an array-direct system.
- Inspect wiring, splices, and the safety rope/drop pipe; check controller indicators and protection settings.
- Watch flow over time; declining output can mean a clogged screen, worn pump, dropping water table, or dirty panels.
- Pulling a deep submersible is a job for the right tools (and often a pro) — plan access before you install.

> Many regions require **annual or periodic well/water testing** for potable supplies, and a permit for any pump replacement. Check local rules.

## Sources & Further Reading

- [Solar water pumping basics — SunWize](https://www.sunwize.com/solar-water-pumping-basics/)
- [How to design a solar water pumping system — Ruirong](https://www.ruirongpump.com/how-to-design-a-solar-powered-water-pump-system.html)
- [Solar water pump sizing guide — Wattsizing](https://www.wattsizing.com/en/blog/solar-water-pump-sizing-guide/)
- [How to choose a solar pump controller (2025) — Hober](https://hobertek.com/how-to-choose-the-best-solar-pump-controller-2025-guide/)
- [Designing a PV-powered DC water pump — Electrical Technology](https://www.electricaltechnology.org/2020/09/design-solar-photovoltaic-powered-dc-water-pump.html/amp)

---

*This article is for general education and safety awareness only. Well, pump, plumbing, and electrical work are regulated; consult local code, a licensed well/pump installer, and a licensed electrician before performing work.*
