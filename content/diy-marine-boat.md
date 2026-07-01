# Marine & Boat Solar

Solar is one of the best upgrades you can make to a cruising sailboat, trawler, or any vessel that spends time away from the dock. Properly sized, it can keep a house battery bank topped up indefinitely at anchor, reduce engine run-time for charging, and silence a noisy generator. But a boat is the harshest environment most DIYers will ever wire: constant motion, salt, moisture, and the ever-present threat of **galvanic and stray-current corrosion**. This page covers what is genuinely different about marine solar and how to build a system that survives.

This page is part of the **Build It Yourself** series. See also [Building Your Own System](diy-overview.md), [RV, Van & Mobile Solar](diy-rv-van.md), [DIY Electrical Calculations](diy-electrical-calcs.md), and [Sourcing Materials & Kits](diy-sourcing.md).

> **SAFETY:** Marine electrical work involves corrosion-driven failure modes that can sink or burn a boat, and AC shore power adds shock and electrocution hazards. The ABYC standards referenced here are the recognized practice in the U.S.; for any AC/DC bonding, lightning, or through-hull work, have a qualified marine electrician (ABYC-certified) review your plan.

## What Makes the Marine Environment Different

A boat punishes electrical systems in ways a house or even an RV never will:

- **Salt and corrosion.** Salt air and spray attack every connection. Bare copper, steel terminals, and crimps left unprotected will corrode, raising resistance, generating heat, and eventually failing. This is why marine practice demands **tinned copper** wire and sealed, corrosion-resistant terminals throughout.
- **Motion and vibration.** Pounding into a seaway works-harden conductors and loosens connections. Solid wire is prohibited in marine practice; everything must be **fine-stranded copper** so it flexes without fatigue.
- **Moisture everywhere.** Bilges, lockers, and deck penetrations all admit water. Connections must be made above likely water levels and protected.
- **Galvanic activity.** A boat in the water with dissimilar metals connected together forms a battery. Without care, your solar wiring can accelerate corrosion of anodes, through-hulls, and shafts.

> **RULE OF THUMB:** Everything that touches the DC system on a boat should be **marine-grade, tinned, and stranded.** Automotive or household components belong nowhere on a boat.

## House Banks: 12V vs 24V

Most small-to-mid boats run a **12V** house bank because the windlass, electronics, lights, and pumps are 12V. Larger cruising boats, especially those with big inverters or electric winches, increasingly use **24V** (and occasionally 48V) house banks to cut wire size and current.

| Bank voltage | Typical vessel | Pros | Cons |
|---|---|---|---|
| 12V | Most sailboats <40 ft, small power boats | Compatible with stock electronics, huge parts ecosystem | Heavy wire at high power; voltage drop |
| 24V | Larger cruisers, big inverter loads | Half the current, smaller wire | Needs DC-DC converters for 12V loads |
| 48V | Big catamarans, electric drives | Smallest wire, efficient inverters | Specialist gear, fewer marine 48V devices |

A solar array's nominal voltage does **not** have to match the bank: an **MPPT** controller converts a higher-voltage panel string down to whatever the 12/24/48V bank needs.

## ABYC Standards You Should Know

The **American Boat & Yacht Council (ABYC)** publishes the recognized standards for U.S. recreational boat wiring. The most relevant to solar installers:

- **E-11, AC & DC Electrical Systems on Boats** — the master DC/AC wiring standard. Covers conductor sizing, overcurrent protection placement, terminals, and which circuits may bypass the battery switch (battery chargers, alternators, and **solar inputs** are among the few that may stay live). The 2025 revision (65th supplement, Aug 2025) for the first time permits solid-state overcurrent devices, but only in branch circuits, not as primary protection.
- **A-31, Battery Chargers and Inverters** — covers AC-powered chargers and inverter/chargers, relevant when you integrate shore power with solar.
- **E-13, Lithium Ion Batteries** — the installation/safety standard for lithium house banks: battery management, thermal management, and charge-source control.
- **TE-13 / A-32** and related sections — emerging guidance for charging-source disconnect when a lithium BMS opens (see lithium section below).

> **E-11 OVERCURRENT RULE:** Every positive conductor needs overcurrent protection within **7 inches** of the battery or bus it connects to — extended to **40 inches** if the conductor is in a sheath/conduit, and **72 inches** only when sheathed *and* connected directly to the battery terminal. Place your solar fuses accordingly.

## Panel Mounting Options

There is rarely a flat, unshaded roof on a boat, so mounting is a compromise between output, windage, shading, and walkability.

| Mount | Where | Pros | Cons |
|---|---|---|---|
| **Bimini / dodger top** | Over the cockpit | Easy retrofit, semi-flexible panels add no windage | Soft top flexes; output limited by area |
| **Stern arch** | Tubular arch aft | Best output, rigid panels, clear of shading, good airflow | Expensive to fabricate; adds weight aloft |
| **Rail mount** | Stanchions/pushpit | Adjustable, can tilt toward sun | Small panels, shading from rigging, in the way |
| **Deck / coachroof (semi-flexible)** | Walkable surfaces | Low profile, walk-on rated panels exist | Runs hot (no airflow) so output drops; shorter life |

> **HEAT WARNING:** Semi-flexible panels bonded directly to a deck have no airflow underneath, run hot, and lose output — and the heat can craze gelcoat. Where possible, leave an air gap or use standoffs. Rigid panels on an arch with airflow will substantially outperform the same wattage of deck-bonded flexible panels.

**Shading is the enemy.** A sailboat's mast, boom, rigging, and radar will sweep shadows across panels all day. Wire panels so a shaded panel does not drag down the whole array — separate MPPT controllers per panel/zone, or at least parallel rather than series connection, helps. See [DIY Electrical Calculations](diy-electrical-calcs.md) for series/parallel trade-offs.

## MPPT Controllers Afloat

Use an **MPPT** (Maximum Power Point Tracking) controller, not PWM, on a boat. MPPT lets you run higher-voltage panels (smaller wire, less voltage-drop loss over long boat runs) and harvests meaningfully more in the partial-shade, partial-cloud conditions typical at anchor. Choose a controller with:

- A current rating matched to your array (see worked example below).
- A **lithium charge profile** if you have a lithium bank, or fully adjustable setpoints.
- Marine-friendly mounting (sealed or installed in a dry locker) and ideally a temperature sensor on the battery.
- Networking/Bluetooth so you can monitor harvest without opening a locker.

Mounting multiple smaller controllers (one per panel or zone) costs more but dramatically improves yield on a shaded sailboat versus one big controller fed by a partly shaded array.

## Integrating Shore Power, Alternator & DC-DC

Solar is rarely the only charge source on a boat. You typically also have a **shore-power battery charger** (A-31), an **engine alternator**, and sometimes a generator. The goal is for all sources to coexist without overcharging or fighting each other.

- **Shared bank, multiple sources:** Modern chargers, MPPT controllers, and alternator regulators can all charge the same bank as long as their voltage setpoints are compatible. With lithium, this coordination is critical — see below.
- **DC-DC chargers** are used two ways: (1) to charge a **lithium house bank from the engine alternator** safely (limiting alternator current to protect it from a near-zero-impedance lithium load), and (2) to charge a **separate 12V start battery** or 12V subsystem from a 24V house bank.
- A **starter/start battery** is normally kept separate from the house bank, charged via the alternator and optionally a small DC-DC or solar trickle so the engine always starts.

```
SHORE POWER ---> AC Charger (A-31) --\
                                      \
ALTERNATOR ----> DC-DC Charger -------+--> HOUSE BANK ---> Loads / Inverter
                                      /
SOLAR ARRAY ---> MPPT Controller ----/
```

## Fusing, Wiring & Tinned Copper

This is where marine practice diverges hardest from RV/van work:

- **Tinned, fine-stranded copper only.** Marine-grade tinned wire (e.g., AWG sizes per UL 1426/BC-5W2) resists wicking and corrosion far better than bare copper. Never use solid wire.
- **Fuse close to every source of energy.** Fuse the panel positive at the MPPT (per panel Isc), and fuse the controller-to-battery positive at the battery/bus per E-11 distance rules. The battery itself needs a main fuse (a Class-T fuse is standard practice for lithium banks because of their high fault current).
- **Crimp, don't solder, primary connections.** Use marine ratchet crimpers and adhesive-lined heat-shrink terminals. Solder alone creates a stress riser that fatigues with vibration; ABYC permits solder only if the joint is also mechanically secured.
- **Support and chafe-protect** every run. Secure wiring every ~18 inches and where it passes bulkheads or moves.
- **Size for voltage drop, not just ampacity.** Boat runs are long. Target 3% drop for charge circuits. See [DIY Electrical Calculations](diy-electrical-calcs.md).

> **CLASS-T FUSE:** Lithium banks can deliver thousands of amps into a short. Use a fuse with an interrupt rating (AIC) that exceeds the bank's available fault current — a marine Class-T (typically 20,000 A AIC) is the common choice on the main battery positive.

## Galvanic Isolation, Bonding & Grounding

This is the part that most confuses DIYers, and the part most likely to cause expensive corrosion or a dangerous fault.

- **DC negative / bonding system:** A boat has a **bonding system** that ties together underwater metals (through-hulls, shaft, rudder), the engine, and often the DC negative to a common point, protected by **sacrificial anodes (zincs)**. The purpose is corrosion control and a fault path.
- **Solar negative — keep it considered, not casual.** A common DIY recommendation is to keep the **solar/MPPT negative tied to the DC system negative the boat's design already specifies**, and **not** create new, unintended bonds between the solar array frame and the bonding/through-hull system. Random extra connections between dissimilar metals create galvanic cells that eat anodes and through-hulls. Use tinned copper and stainless/anodized mounting hardware, and isolate panel frames from the bonding system unless your boat's design calls for them to be bonded.
- **AC shore power — galvanic isolator or isolation transformer.** When you plug into shore power, the green safety ground connects your underwater metals to every other boat on the dock through the dock's ground. A **galvanic isolator** blocks the small DC galvanic currents that would otherwise flow and accelerate corrosion, while still passing AC fault current for safety. An **isolation transformer** is the gold-standard alternative that breaks the metallic connection entirely.
- **Lightning/grounding** of arch and rail structures is a separate specialist topic — consult ABYC TE-4 / a marine electrician.

> **SAFETY — DO NOT REMOVE THE SHORE-POWER GROUND.** Lifting the AC safety ground to "stop corrosion" is dangerous and illegal; it removes shock protection. The correct fix is a **galvanic isolator or isolation transformer**, never a disconnected ground.

## Lithium on Boats

LiFePO4 (LFP) is now common on cruising boats for its weight, depth-of-discharge, and cycle life, but ABYC **E-13** imposes real requirements:

- **Charge-source control.** If the BMS disconnects the battery (over-temp, over-voltage, etc.), an alternator suddenly running with no load can produce a destructive voltage spike. The system must protect charge sources when the BMS opens — DC-DC chargers, external regulators with battery-temperature awareness, and load-dump protection.
- **Temperature limits.** LFP must **not be charged below freezing (0 C / 32 F)**. Many marine LFP batteries include low-temp charge cutoff in the BMS; confirm yours does, since lockers can get cold.
- **Corrosion.** Keep battery terminals and BMS connections tinned and sealed; salt + lithium fault current is a fire risk.
- **Class-T main fuse** and an accessible **battery disconnect** are standard practice.

> **LITHIUM CHARGE TEMP:** Never charge LiFePO4 below 0 C / 32 F. Charging a frozen cell causes lithium plating and permanent damage or a fire hazard. Rely on a BMS with low-temperature charge cutoff, not memory.

## Worked Example: 38 ft Cruising Sailboat

A couple cruising at anchor wants solar to cover daily house loads on a 12V system.

**Step 1 — Daily load (amp-hours at 12V):**

```
Fridge/freezer (DC):  40 Ah/day
Electronics/instruments, lights, charging: 25 Ah/day
Autopilot at anchor, pumps, misc:          15 Ah/day
Inverter (coffee, blender, laptops):       20 Ah/day
---------------------------------------------------
Total daily load:                          100 Ah/day  (~1,200 Wh/day at 12V)
```

**Step 2 — Solar needed.** Marine arrays see shading, heat, and panel orientation losses, so assume only ~3.5 "good sun" equivalent hours of usable harvest at anchor (conservative for mixed conditions):

```
Required array power = Daily Wh / usable sun-hours / system efficiency
                     = 1,200 Wh / 3.5 h / 0.75
                     = ~457 W
```

Round up to a **~500–600 W array** (e.g., two ~250–300 W rigid panels on a stern arch, or a mix of arch + bimini panels) to give margin for cloudy days and panel heat.

**Step 3 — MPPT controller sizing.** Output current to a 12V bank from ~560 W of panels:

```
Controller current = Array watts / battery voltage
                   = 560 W / 13.6 V (charging)
                   ~ 41 A
```

Choose a **50 A MPPT** (next size up) for headroom, or two 30 A controllers (one per panel) for better shading performance.

**Step 4 — Battery bank.** To ride through a cloudy day at 100 Ah/day with reasonable depth of discharge, a **~200 Ah usable** bank is sensible (e.g., 200 Ah LiFePO4 usable, or ~400 Ah of lead-acid for 50% DoD).

**Step 5 — Wire & fuse.** Size MPPT-to-battery wire for the ~50 A controller at 3% voltage drop over the run length, fuse per E-11 distances, and fit a Class-T main fuse at the bank.

## ASCII Wiring Diagram

A representative 12V house system with solar, shore charger, and alternator:

```
                      +--------------------+
   SOLAR ARRAY        |   MPPT CONTROLLER  |
  (arch + bimini)     |  (50A, LFP profile)|
   +-----+  +-----+   |                    |
   |  PV |  |  PV |   |  PV+      BATT+     |
   |  1  |  |  2  |   |   |         |       |
   +--+--+  +--+--+   +---|---------|-------+
      |        |          |         |
      +---[FUSE]----------+         |   [Isc-rated PV fuse]
      |        |                    |
      |  (PV negative)              | [Controller->batt FUSE
      +----------------------+      |   within E-11 distance]
                             |      |
   SHORE POWER               |      |
   (dock) --[GALVANIC        |      |
            ISOLATOR]--+     |      |
                       |     |      |
                  +----v-----v------v----+
                  |   POSITIVE BUS BAR    |
                  +----------+------------+
                             |
                        [CLASS-T MAIN FUSE]
                             |
                        [BATTERY SWITCH]
                             |
                      +------v------+
   ALTERNATOR -->     | HOUSE BANK  |   (LiFePO4 w/ BMS,
   DC-DC CHARGER ---> |  12V, 200Ah |    low-temp cutoff)
                      +------+------+
                             |
                       NEGATIVE BUS / SHUNT
                             |
                     DC loads, inverter
                             |
              (DC negative tied to boat's
               designed bonding/ground point only)
```

> **REMINDER:** This diagram is conceptual. Conductor sizes, fuse values, the inverter neutral-ground arrangement, and the exact bonding/grounding scheme must follow ABYC E-11/E-13 and your specific vessel. Have an ABYC-certified electrician review AC and bonding before relying on the system at sea.

## Sources & Further Reading

- [ABYC Publishes Updated Standards (65th Supplement, 2025)](https://abycinc.org/news/supplement65/) — American Boat & Yacht Council
- [ABYC publishes updated battery and electrical standards](https://panbo.com/abyc-publishes-updated-battery-and-electrical-standards/) — Panbo
- [E-11 AC and DC Electrical Systems on Boats (excerpts)](https://www.paneltronics.com/images/technical/E11Excerpts.pdf) — Paneltronics
- [ABYC A-31 Battery Chargers and Inverters (preview)](https://webstore.ansi.org/preview-pages/ABYC/preview_ABYC+A-31-2015.pdf) — ANSI Webstore
- [ABYC E-13 Standards for Lithium Batteries on Marine Vessels](https://www.relionbattery.com/blog/abyc-e-13-standards-for-lithium-batteries-on-marine-vessels) — RELiON
- [Grounding Solar PV Systems on a Boat](https://www.emarineinc.com/Grounding-Solar-PV-Systems-On-A-Boat) — eMarine
- [Solar Panels for Boats: Complete Marine Solar Guide](https://offgridauthority.com/off-grid-solar-boat-guide/) — Off Grid Authority

---

*Disclaimer: This page is educational and not a substitute for ABYC standards or a qualified marine electrician; improper marine wiring and bonding can cause corrosion, fire, sinking, or electrocution.*
