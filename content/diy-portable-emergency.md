# Portable & Emergency Power

Not every solar project is a roof full of panels and a wall of batteries. For renters, campers, boaters at the dock, and anyone who just wants the lights and fridge to stay on during an outage, an **all-in-one power station** (often marketed as a "solar generator") plus a folding panel can be the most practical solar you'll ever own. This page explains how these units work, how to size one for emergency backup, how to compare specs honestly, and — critically — how **not** to kill a lineworker by powering your house the wrong way.

This page is part of the **Build It Yourself** series. See also [Building Your Own System](diy-overview.md), [RV, Van & Mobile Solar](diy-rv-van.md), [DIY Electrical Calculations](diy-electrical-calcs.md), and [Sourcing Materials & Kits](diy-sourcing.md).

> **SAFETY:** Never connect any generator or power station to your home's wiring without a **proper transfer switch or panel interlock installed to code by a qualified electrician.** Back-feeding a home through an outlet is illegal in the U.S. and has killed utility workers. See the Backfeed section below before doing anything with your house wiring.

## What a "Solar Generator" Actually Is

A "solar generator" is a marketing name for an **all-in-one portable power station**: a sealed box that combines the four parts of a solar system you'd otherwise build separately.

| Component inside the box | What it does |
|---|---|
| **Battery** | Stores energy — modern units use **LiFePO4 (LFP)** for long life and safety; some smaller/older units use NMC lithium |
| **Solar charge controller (MPPT)** | Charges the battery from a solar panel |
| **Inverter** | Converts DC battery power to 120V (or 120/240V) AC for your devices |
| **AC charger / inputs** | Recharges from a wall outlet, car, or solar |

There is **no combustion** — nothing to refuel, no exhaust, no carbon monoxide. You recharge it from the sun, a wall outlet, or a car. The trade-off versus a fuel generator is that its energy is limited to what's in the battery (plus what solar can replace during the day).

## The Ratings That Actually Matter

Marketing leads with the biggest number; the spec that matters depends on whether you care about **how long** it runs or **what** it can run.

| Spec | What it means | Why it matters |
|---|---|---|
| **Watt-hours (Wh)** | Battery **capacity** — total energy stored | Determines **how long** it powers your loads |
| **Inverter watts (W), continuous** | Max sustained AC output | Determines **what** you can run at once |
| **Surge / peak watts (W)** | Brief overload capacity | Lets motors (fridge, pump) start without tripping |
| **Output voltage** | 120V only, or **120/240V split-phase** | 240V needed for wells, dryers, some EV chargers |
| **Battery chemistry** | LFP vs NMC | LFP = ~3,000–6,000 cycles and safer; NMC = lighter but fewer cycles |
| **Solar input (W) & voltage range** | Max panel wattage and MPPT voltage window | Sets how fast it recharges from the sun |
| **AC/solar recharge time** | Hours to refill | Matters in multi-day outages |
| **Expandability** | Add-on battery packs | Lets capacity grow later |

> **WATT-HOURS vs WATTS:** A 2,000 **Wh** unit with a 2,000 **W** inverter could run a 2,000 W load for roughly one hour, or a 100 W load for about 18–19 hours (after inverter losses). Capacity (Wh) and output (W) are independent — read both.

**Quick runtime estimate:**

```
Runtime (hours) ≈ (Battery Wh × ~0.85 inverter efficiency) / Load watts
```

So a 1,000 Wh station running a 60 W load:

```
(1000 × 0.85) / 60 ≈ 14 hours
```

## Folding & "Suitcase" Solar Panels

Portable panels fold or hinge for storage and unfold with a kickstand to face the sun:

- **Folding/briefcase panels** (typically ~60–400 W) are the usual companion to a power station. They plug straight into the unit's solar input.
- **Voltage/connector match matters.** The panel's voltage must fall inside the station's MPPT input window, and the connectors (often XT60 or branded) must match — check before buying mismatched brands.
- **Aim them.** A portable panel tilted toward the sun and re-aimed midday can produce far more than a flat panel. Watch for shade.
- Real-world output is typically **60–80% of the panel's rated watts** in good sun, less when cloudy or off-angle.

## Sizing for Outage Backup of Critical Loads

For emergency backup, don't try to power the whole house. List only the **critical loads** you actually need.

**Step 1 — List critical loads and their watts:**

| Load | Running watts | Hours/day | Wh/day |
|---|---|---|---|
| Refrigerator (cycles ~1/3 of the time) | 150 (avg ~50) | 24 | ~1,200 |
| LED lights (several rooms) | 40 | 5 | 200 |
| Phone/laptop/router charging | 60 | 8 | 480 |
| CPAP (no humidifier) | 40 | 8 | 320 |
| **Total** | | | **~2,200 Wh/day** |

**Step 2 — Pick capacity (Wh).** To cover ~2,200 Wh/day with margin, a **~2,000–3,000 Wh** station gets you through roughly a day; pairing it with a **200–400 W folding panel** can replace a meaningful share each sunny day, extending an outage indefinitely if loads are modest.

**Step 3 — Check the inverter (W).** Sum the loads that might run **at once** and confirm the inverter's continuous and surge ratings cover them — especially the **fridge surge** (a 150 W fridge can spike to 600–1,200 W at startup).

> **MOTOR SURGE WARNING:** Refrigerators, well pumps, and sump pumps draw a large momentary surge when their motors start — often several times their running watts. Size the inverter's **surge rating** to that spike, or the unit will shut off mid-outage when you need it most.

## Recharging & Expansion Options

| Recharge source | Speed | Notes |
|---|---|---|
| **Wall AC** | Fastest | Top up before a storm; many units do 0→80% in ~1 hr |
| **Solar panel** | Moderate | The only off-grid source in a prolonged outage |
| **12V car/cigarette socket** | Slow | Useful trickle while driving; not a primary source |
| **Alternator/DC-DC** | Moderate | For RV/van; see [RV, Van & Mobile Solar](diy-rv-van.md) |

**Chaining / expansion.** Many 2026 ecosystems accept **add-on battery packs** that bolt onto the main unit to multiply capacity, and some support **multiple panels** in series/parallel up to the unit's input limit. A few high-end units pair two together for **120/240V split-phase** whole-home-ish backup. Stay within one brand's ecosystem — cross-brand chaining generally doesn't work.

## Portable vs Permanent

| Factor | Portable power station | Permanent home solar + battery |
|---|---|---|
| Install | Plug-and-play, no electrician (standalone) | Professional install, permits, inspection |
| Cost entry | Hundreds to a few thousand $ | Tens of thousands $ |
| Capacity | Limited; expandable to a point | Whole-home, many kWh |
| Portability | Take it camping, to the boat, to a friend | Fixed |
| Powers house circuits | Only via a **transfer switch/interlock** | Yes, integrated |
| Best for | Renters, campers, critical-load backup | Owners wanting full backup / bill offset |

A portable unit is the right answer for renters, frequent travelers, and anyone whose backup needs are "fridge + phones + medical device." A permanent system (see [Building Your Own System](diy-overview.md)) is the answer for whole-home resilience.

## CRITICAL SAFETY: Never Backfeed Your Home

This is the single most dangerous mistake in DIY backup power.

**Backfeeding** means energizing your home's wiring from a generator or power station without isolating it from the utility grid — for example, by running a cord from the generator into a wall outlet ("suicide cord"), or wiring it into the panel without an interlock.

Why it can kill:

- **It electrocutes lineworkers.** Your generator's power flows backward through your panel, out to the street, and through the utility transformer it gets **stepped up to thousands of volts** on lines that crews believe are dead. Backfeeding has killed utility workers restoring power.
- **It endangers neighbors** on the same transformer.
- **It can start a fire** in your panel and **destroy your generator** when grid power returns out of phase.
- **Plugging a generator into a home outlet is illegal** under the National Electrical Code.

The code-compliant ways to power home circuits from any generator or power station:

| Method | What it is | Notes |
|---|---|---|
| **Manual transfer switch** | Switch that disconnects selected circuits from the grid and feeds them from the generator | Complete isolation; safest; pro-installed |
| **Panel interlock kit** | A plate that mechanically prevents the main breaker and generator backfeed breaker from being on together | Cheaper, whole-panel; **must** be the kit listed for your panel, pro-installed |
| **Generator inlet box** | Exterior inlet that feeds the transfer switch/interlock breaker | Used with the above |
| **Standalone use (no house connection)** | Run cords directly from the unit to appliances | No backfeed risk at all; simplest |

> **THE RULE:** A generator or power station may feed your home's wiring **only** through a transfer switch or a panel interlock installed to code by a **qualified electrician**, providing a positive **LINE–OFF–GENERATOR** isolation so utility and generator power can never connect. Never use a double-male "suicide cord." When in doubt, just run appliances directly from the unit with regular cords.

## Solar Generator vs Fuel Generator

| Factor | Solar / battery power station | Fuel (gas/propane) generator |
|---|---|---|
| Indoor use | **Safe** (no exhaust) | **Never** — carbon monoxide kills |
| Noise | Silent | Loud |
| Refueling | Recharge (sun/wall/car) | Needs stored fuel; runs out |
| Runtime | Limited by battery + solar | As long as you have fuel |
| Surge/large loads | Limited by inverter | Big units handle heavy loads |
| Maintenance | Minimal | Oil, filters, fuel stabilizer |
| Cold/cloudy weeks | Solar recharge slows | Unaffected (if fuel available) |
| Best role | Quiet critical-load backup, camping | Long multi-day, heavy-load outages |

> **CARBON MONOXIDE WARNING:** Fuel generators emit deadly, odorless carbon monoxide. **Never** run one indoors, in a garage, or near windows/vents — even with doors open. Solar power stations have no exhaust and are safe indoors; this is one of their biggest advantages.

## Buying Guidance: What Specs to Compare

When shopping, line up units on these, in roughly this order of importance for outage backup:

1. **Battery chemistry** — prefer **LiFePO4 (LFP)** for cycle life and safety.
2. **Watt-hours (Wh)** — match to your critical-load Wh/day (the sizing exercise above).
3. **Continuous inverter watts** — must exceed your simultaneous load.
4. **Surge watts** — must cover motor startup (fridge/pump).
5. **Solar input watts + voltage window** — determines recharge speed and panel compatibility.
6. **Output type** — pure sine wave (always), and 120/240V if you need it.
7. **Expandability** — can you add battery packs later?
8. **Warranty & support** — and whether the brand still exists.

As of 2026 the established brands in this space include **EcoFlow**, **Jackery**, **Bluetti**, **Anker SOLIX**, and **Goal Zero**. Higher-output examples that exist on the market include the **Anker SOLIX F3800** (6,000 W, 120/240V split-phase) and the **Jackery Solar Generator 2000/3600 Plus** (expandable, split-phase on the 3600). Verify current specs and pricing before buying — this category changes fast. See [Sourcing Materials & Kits](diy-sourcing.md) for buying strategy.

> **VERIFY BEFORE BUYING:** Spec sheets and model lineups change frequently. Confirm the **Wh, continuous and surge watts, chemistry, and 120/240V capability** of the exact model on the manufacturer's current page — don't rely on a review's headline number.

## Sources & Further Reading

- [The Dangers of 'Backfeeding'](https://www.businesswire.com/news/home/20250912042018/en/The-Dangers-of-Backfeeding) — BusinessWire
- [Interlock vs Transfer Switch for Generator Safety](https://www.bluettipower.com/blogs/articles/interlock-vs-transfer-switch-for-generator-safety) — Bluetti
- [Why Does Your Backup Generator Need a Transfer Switch?](https://americanelectricalco.com/blog/home-backup-generator-transfer-switch-installation-needs/) — American Electric Co
- [Generator Safety](https://www.eweb.org/outages-and-safety/electrical-safety-in-your-home-or-business/generator-safety) — EWEB
- [Best Portable Power Stations of 2026, Tested and Reviewed](https://www.outdoorlife.com/gear/best-portable-power-stations/) — Outdoor Life
- [The best solar generators for 2026, tested and reviewed](https://www.popsci.com/reviews/best-solar-generators/) — Popular Science

---

*Disclaimer: This page is educational; connecting any power source to home wiring without a code-compliant transfer switch or interlock installed by a qualified electrician is illegal and can be fatal — when in doubt, run appliances directly from the unit.*
