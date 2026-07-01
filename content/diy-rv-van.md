# RV, Van & Mobile Solar

Mobile solar — vans, RVs, skoolies, truck campers, and boats — is the fastest-growing corner of DIY photovoltaics, and the most safety-critical to get right. You are building a high-energy battery system inside a small living space on wheels, where a wiring fault means a fire you cannot walk away from. Done properly, a modern mobile system runs a fridge, fans, lights, water pump, laptops, and even induction cooking off the sun and the engine alternator, with no campground hookup. Done carelessly, an unfused lithium bank is one chafed wire away from disaster.

This page covers system voltage choice, the popular all-in-one inverter/charger approach, LiFePO4 house banks, MPPT controllers, DC-DC alternator charging, shore power, panel and mounting options, fusing and bus bars, grounding/bonding on a vehicle, and a full worked sizing example for a van. Pair it with [DIY Electrical Calculations](diy-electrical-calcs.md) for the math, [DIY Structural Calculations](diy-structural-calcs.md) for roof mounting loads, [Sourcing Materials & Kits](diy-sourcing.md) for parts, and [Building Your Own System](diy-overview.md) for the overview.

> **Safety first:** LiFePO4 banks can deliver thousands of amps into a dead short — enough to vaporize a wrench or ignite a fire before you can react. **Every battery must have a properly AIC-rated main fuse within a few inches of its positive terminal.** Disconnect the bank before working on it, remove rings/watches, use insulated tools, and never rely on a switch alone for overcurrent protection. There is no "RV electrical code" the way there is an NEC for houses; the recognized best-practice standard is **ABYC** (marine), and **NFPA 1192 / NEC Article 551** apply to RVs. Follow them.

## Choosing System Voltage: 12 V vs. 24 V vs. 48 V

The house-bank voltage sets your wire sizes, component choices, and cost. Higher voltage = lower current for the same power = thinner, cheaper wire and less loss, but a smaller ecosystem of native 12 V appliances.

| | 12 V | 24 V | 48 V |
|---|---|---|---|
| **Best for** | Most vans/RVs, inverters up to ~2–3 kW | Larger rigs, 3 kW+ inverters, longer runs | Big rigs, bus conversions, near-residential loads |
| **Native DC appliances** | Huge selection (fridges, fans, pumps, lights) | Limited; often need a 24→12 converter | Very limited; needs 48→12 converter |
| **Wire size for given W** | Largest/most expensive copper | ~Half the current of 12 V | ~Quarter the current of 12 V |
| **Alternator (DC-DC) charging** | Simplest, most products | Available | Fewer products; engine is 12/24 V |
| **Typical inverter ceiling** | ~3 kW practical | ~3–5 kW | 5 kW+ comfortably |

> **Rule of thumb:** Stay **12 V** until you need an inverter bigger than roughly 2,000–3,000 W or you have very long/large cable runs — then step up to **24 V** (or **48 V** for a big bus/RV that behaves like a small house). 12 V keeps the largest selection of native RV/marine DC appliances and the simplest alternator charging. The penalty is fatter battery and inverter cables.

## The Modern Mobile System: All-in-One vs. Components

Two architectures dominate DIY mobile builds:

**1. All-in-one inverter/charger ("power center").** A single unit combines the inverter (DC→AC), an AC battery charger, a transfer switch (shore/generator), and often the solar MPPT controller. One box, fewer connections, integrated display. Popular for clean, compact van builds. Trade-off: if it fails, you lose everything at once, and you're locked into one vendor's ecosystem.

**2. Split / component system.** Separate inverter, MPPT solar charge controller, DC-DC alternator charger, and shore-power converter/charger, wired around a central bus. More wiring and configuration, but modular, repairable, and mix-and-match. Favored by builders who want redundancy or top-tier individual components.

Both are valid. All-in-ones win on simplicity and space; component systems win on flexibility and serviceability.

### LiFePO4 House Banks

Lithium iron phosphate (**LiFePO4 / LFP**) is the default mobile chemistry today: ~2,000–5,000 cycles, usable to ~80–90% depth of discharge, light, and tolerant of partial charging. Notes:

- **Usable energy** is far higher than lead-acid of the same rating — a 100 Ah LFP gives ~80–90 Ah usable vs. ~50 Ah for a lead-acid you don't want to ruin.
- **Cold charging:** Most LFP cannot charge below ~32 °F (0 °C) without damage. Use a battery with **internal low-temp cutoff** or **self-heating**, or keep the bank in conditioned space — critical in winter vans.
- **BMS:** Each battery's battery-management system protects cells, but the BMS is **not** a substitute for external overcurrent protection (fuses) sized for the wiring.
- **Charge profile:** Set every charge source (solar, alternator, shore) to the LFP profile, not lead-acid.

### MPPT Charge Controllers

For solar, use an **MPPT** (maximum power point tracking) controller, not PWM — MPPT harvests 15–30% more, especially from higher-voltage panel strings and in cold/cloudy conditions. Size it to your panel array and battery voltage; the controller's **output amps × battery voltage** must equal or exceed your array's wattage potential. Reputable controller makers in this space include Victron, EPEVER, and Renogy; verify current models when you buy.

### DC-DC Alternator Charging

A **DC-DC charger** lets the engine alternator charge the LFP house bank safely while driving — your single biggest charge source on cloudy travel days.

- It **regulates** the charge so the alternator isn't overloaded and the LFP gets the right profile (a direct alternator-to-LFP connection can cook a stock alternator and is unsafe).
- Sizes typically 20–60 A; pick based on alternator capacity and how fast you want to charge.
- Many units include an **ignition / D+ trigger** so they only run with the engine on, and some integrate a solar MPPT input in one box.
- **Heavy alternator-charging requires verifying your alternator can sustain the extra load** — high-output charging can overheat a stock unit; some builds upgrade the alternator or add temperature limiting.

> **Caution:** Never connect a LiFePO4 house bank directly to the starter battery / alternator with just an isolator relay (VSR) as if it were lead-acid. LFP's low internal resistance can draw enough current to destroy the alternator. Use a current-limited **DC-DC charger** sized for your alternator.

### Shore Power & Transfer

When plugged into a campground/generator AC source ("shore power"), an onboard **converter/charger** (or the all-in-one's charger) tops up the bank and powers AC loads. A **transfer switch** (built into all-in-ones, or separate) selects shore/generator vs. inverter so the two AC sources are never connected together. Wire shore inlets, breakers, and GFCI per RV practice (NEC 551).

## Panels: Fixed, Portable, or Tilt

| Type | Pros | Cons |
|---|---|---|
| **Fixed roof panels** | Always charging while parked/driving; no setup | Can't aim at sun; roof heat lowers output; needs sealed mounting |
| **Portable / "suitcase" panels** | Aim at the sun; park rig in shade, panels in sun; theft-removable | Setup each stop; cables; can walk off |
| **Tilt mounts (roof)** | Aim at low winter sun for big seasonal gain | Manual setup; must stow before driving; wind load when raised |

Many builders run **fixed roof panels for hands-off daily charging plus a portable suitcase panel** for shady campsites and winter sun. For roof panel structural/wind loads while driving and parked, see [DIY Structural Calculations](diy-structural-calcs.md).

## Mounting to RV / Van Roofs

Roof mounting must survive highway wind, vibration, and weather for years — and **never leak**, because a roof leak rots a van from the inside.

- **Mechanical (bolt-through):** Strongest, especially for tilt mounts and high-wind. Requires drilling the roof; every penetration must be **sealed and backed** (butyl tape under the bracket, lap sealant over the screw heads, backing plate inside where possible).
- **Adhesive (VHB tape + Sikaflex/structural adhesive):** No-drill, popular on fiberglass and metal van roofs; spreads load and avoids leaks. Requires meticulous surface prep (clean, abrade, prime per adhesive maker) and is only as good as the bond — follow the adhesive manufacturer's cure and surface spec exactly. Often combined with adhesive **mounting feet/brackets** designed for panels.
- **Sealing:** Use products compatible with your roof material (EPDM/TPO membranes need specific sealants — many common lap sealants attack them). Inspect and re-seal periodically.
- Keep an **air gap** under fixed panels for cooling and leave room for hatches, fans, and antennas.

> **Caution:** A roof penetration with the wrong sealant — or none — is the most common cause of long-term water damage in DIY rigs. Match sealant to roof material, back the fasteners, and re-inspect seasonally.

## Wiring, Fusing & Bus Bars

This is where mobile builds get dangerous. A LiFePO4 bank can source enormous fault current, so **overcurrent protection rated to interrupt that current (high AIC)** is non-negotiable.

### Fuse Types

| Fuse | AIC (interrupt) | Use in mobile systems |
|---|---|---|
| **Class T** | ~20,000 A | **Main battery / inverter fuse for LiFePO4** — the recommended choice; ABYC E-13 calls for it on lithium |
| **MRBF (marine-rated battery fuse)** | ~10,000 A @ 14 V (drops at higher V) | Good on 12 V terminal-mount battery fusing; marginal at 24 V, inadequate at 48 V |
| **ANL** | ~6,000 A | Acceptable for many 12 V circuits; common for charge/distribution feeds |
| **MEGA / AMG** | ~2,000 A | **Not** suitable as the main LFP battery fuse; fine for lower-energy downstream loads (alternator, charger, distribution) where a higher-AIC fuse upstream catches the worst case |

> **Rule of thumb:** Put a **Class T fuse** as the main protection at the LiFePO4 battery (within a few inches of the positive terminal), sized to the inverter/main feed. ABYC requires a battery-bank fuse within about 7 wire-inches of the bank, and the 2025 ABYC updates require AIC-rated overcurrent protection on larger banks (over ~500 Ah / high-CCA). MEGA fuses are fine for individual smaller branches but not as the LFP main.

Every conductor needs overcurrent protection sized to the **wire**, not just the load. Fuse to protect the smallest wire in the circuit.

### Bus Bars, Battery Isolators & Shunts

- **Bus bars** (positive and negative) give clean, rated common-tie points instead of stacking lugs on battery terminals. Use covered, properly rated bars.
- A **battery shunt / monitor** (e.g., a 500 A shunt feeding a SoC meter) on the negative is how you actually know your state of charge — far better than voltage guessing with LFP's flat curve.
- A **battery isolator / DC-DC charger** separates the starter and house banks so you never strand yourself with a dead starting battery; for LFP use a DC-DC charger (above), not a simple voltage-sensitive relay.
- A **main battery disconnect switch** (rated for the system) lets you isolate the bank for service and storage.

## Worked Sizing Example: Camper Van

A weekend/part-time van: 12 V system, LiFePO4, fixed roof solar + alternator + shore.

```
STEP 1 — DAILY LOAD (energy, Wh/day)
  12V compressor fridge   45 W avg x 24 h ............. 1,080 Wh? (duty-cycled)
   -> fridge runs ~40% duty: 45 W x 24 h x 0.40 ......   432 Wh
  LED lights              15 W x 4 h ..................    60 Wh
  Roof/ceiling fan        25 W x 8 h ..................   200 Wh
  Water pump              50 W x 0.3 h ................    15 Wh
  Phone/laptop/USB        60 W x 3 h ..................   180 Wh
  Inverter loads (TV,
    charging) misc        ............................   200 Wh
  Inverter idle/overhead  ............................   100 Wh
                                          DAILY TOTAL  ~1,187 Wh
  Round up / design for ............................... 1,300 Wh/day

STEP 2 — BATTERY BANK (Ah at 12 V)
  Battery_Ah = (Daily_Wh x Days_autonomy) / (System_V x DoD)
  Use 2 days autonomy, LiFePO4 DoD = 0.85
  Battery_Ah = (1,300 x 2) / (12 x 0.85)
             = 2,600 / 10.2
             ~ 255 Ah  ->  use 2 x 100 Ah (200 Ah) if relying on
                            daily solar+alternator, or 300 Ah for margin
  Choose: 200 Ah LiFePO4 (typical), accepting ~1.3 days true autonomy
          and counting on driving/solar to refill.

STEP 3 — SOLAR ARRAY (W)
  Panel_W = (Daily_Wh / Peak_Sun_Hours) / system_efficiency
  Worst-useful PSH ~4.0; system efficiency ~0.75 (heat, MPPT, wire)
  Panel_W = (1,300 / 4.0) / 0.75
          = 325 / 0.75
          ~ 433 W  ->  install ~400-500 W of roof panels
  (Alternator charging while driving covers cloudy days.)

STEP 4 — MPPT CONTROLLER (A)
  Controller_A >= Array_W / Battery_V
  Controller_A >= 500 / 12 = ~42 A  ->  use a 50 A MPPT (margin)
  (Wire panels in series to raise Vmp, easing controller/wire current.)

STEP 5 — INVERTER & MAIN FUSE
  Largest AC load (e.g., 1,000 W) + margin -> ~1,500-2,000 W inverter
  Inverter input current at 12 V (2,000 W / 12 V / ~0.9 eff) ~185 A
  -> Main CLASS T fuse ~200-250 A within inches of battery +,
     battery-to-inverter cable sized for that current AND fuse.

STEP 6 — DC-DC ALTERNATOR CHARGER
  30-40 A DC-DC charger (verify alternator headroom) refills the
  bank in ~5-7 h of driving on cloudy days.
```

Run your own numbers — loads, wire gauge, voltage drop, and fuse sizing — on [DIY Electrical Calculations](diy-electrical-calcs.md). Don't copy this example blindly; your fridge, climate, and habits change everything.

## ASCII Wiring Diagram (12 V Mobile System)

```
                         SOLAR ARRAY (roof, ~500 W)
                          (+)            (-)
                           |              |
                     [PV fuse/breaker]    |
                           |              |
                      +----v--------------v----+
                      |    MPPT CONTROLLER      |
                      |   (solar -> battery)    |
                      +----+--------------+-----+
                       BAT(+)          BAT(-)
                           |              |
   ENGINE/STARTER          |              |
   BATTERY (12V)           |              |
      (+)---[fuse]--->[ DC-DC CHARGER ]---+      (alternator charging)
                       (eng. trigger)     |
                                          |
   SHORE / GENERATOR AC IN                |
      ~~~>[TRANSFER SW]-->[CONVERTER/CHGR]+      (AC -> battery charge)
                |                         |
                |  (AC to loads via transfer/inverter)
                |                         |
        +-------v-------+         +-------v--------+
        |  AC PANEL     |<--------|  INVERTER      |
        | (breakers,    |  AC out | (DC->120VAC)   |
        |  GFCI, outlets)|        +---+--------+---+
        +---------------+         IN(+)      IN(-)
                                    |          |
                              [CLASS T FUSE]   |
                              (~200-250A)      |
                                    |          |
        ============= POSITIVE BUS BAR =========(+)===
              |            |             |          |
          [SHUNT? on (-)] LFP main      to MPPT/   etc.
                          fuse + SW     DC-DC out
                                    |
        +---------------------------v--------------------+
        |        LiFePO4 HOUSE BANK  (e.g., 200 Ah)      |
        |   (BMS internal)  (+)                 (-)      |
        +-----------------------------------------+------+
                                                  |
        ============= NEGATIVE BUS BAR ===========(-)====
                          |
                    [SYSTEM/CHASSIS BOND POINT]
                    (per ABYC/NEC 551 - single point)

  NOTES: Every battery (+) has a Class T main fuse within inches.
         Every branch is fused to protect its wire.
         Disconnect switch on battery main for service.
```

## Grounding & Bonding on a Vehicle

Vehicle/marine grounding differs from a house — there is no earth ground while moving, and the chassis is a reference, not a safety earth in the residential sense. Get this wrong and you create either a shock hazard or galvanic/electrical noise problems.

- **DC negative bonding:** Establish a **single common ground/bonding point** where battery negative, DC negative bus, and chassis bond connect — avoid multiple chassis grounds that create loops. Follow **ABYC** practice for boats and **NEC Article 551 / NFPA 1192** for RVs.
- **Inverter / AC grounding:** A pure-sine inverter producing 120 V AC has its own neutral-ground bonding rules. When on **shore power**, the bond comes from the shore source; when **inverting**, the inverter must establish the neutral-ground bond (many do this with an internal relay). You must not have two bonds at once. Read your inverter's manual — this is a real shock-hazard detail.
- **GFCI protection** on AC outlets per RV/marine practice.
- **Equipment grounding:** Bond solar frames, mounts, and metal enclosures to the system ground.

> **Warning:** AC neutral-ground bonding in a mobile system is a genuine electrocution-hazard topic. If you are not certain how your inverter and shore connection handle the bond, have a qualified RV/marine electrician verify it. ABYC and NEC 551 exist because people have been killed by improvised mobile AC wiring.

## ABYC / RV Standards Notes

- There is no dedicated "RV electrical code," but **NFPA 1192** (RVs) and **NEC Article 551** cover RV electrical, and most inspectors accept NFPA 70 (NEC) practice. **ABYC** (boats) is the most thorough mobile DC/AC standard and is widely used by quality van/RV builders.
- **ABYC E-11** (AC/DC systems) and **E-13** (lithium batteries) are the key references; the **2025 updates** added AIC-rated overcurrent requirements for larger banks and reinforced **Class T** fusing for lithium.
- Overcurrent device **within ~7 wire-inches** of the battery; conductors rated for the environment (oil, heat, abrasion — use marine-grade tinned wire); secured against chafe and vibration.

## Sources & Further Reading

- [Battery Banks & Over Current Protection — Marine How To](https://marinehowto.com/battery-banks-over-current-protection/)
- [AIC Ratings for LiFePO4 — Class T — MRBF (DIY Solar Forum)](https://diysolarforum.com/threads/aic-ratings-for-lifepo4-class-t-mrbf.96739/)
- [ABYC publishes updated battery and electrical standards — Panbo](https://panbo.com/abyc-publishes-updated-battery-and-electrical-standards/)
- [What is ABYC E-13 lithium battery standards? — WattCycle](https://www.wattcycle.com/blogs/news/what-is-abyc-e-13-lithium-battery-standards)
- [Is there an RV/vehicle electrical code? (DIY Solar Forum)](https://diysolarforum.com/threads/we-have-the-nec-code-for-residential-electrical-abyc-standards-for-marine-electrical-is-there-an-equivalent-for-mobile-vehicle-rv-electrical.5587/)
- ABYC E-11 (AC & DC Electrical Systems) and E-13 (Lithium Ion Batteries) — American Boat & Yacht Council
- NFPA 1192 (Recreational Vehicles) and NEC Article 551 — read the editions your AHJ enforces

*Educational/reference only. Follow manufacturer instructions, ABYC, NFPA 1192/NEC 551 and your local rules; LiFePO4 batteries and DC systems are hazardous — fault currents can ignite fires and DC/AC wiring can be fatal.*
