# Energy Communities Bonus

The **Energy Community Bonus Credit** is a location-based "adder" that increases the value of the federal clean-electricity investment and production tax credits for projects sited in communities historically tied to fossil-fuel activity. For a commercial solar project claiming the **Investment Tax Credit (ITC)**, qualifying for the energy community bonus can add **10 percentage points** to the credit rate — turning a 30% base ITC into a 40% ITC. The parallel **Production Tax Credit (PTC)** bonus increases the per-kWh rate by **10%**.

This page explains the three qualifying categories, how eligibility is determined and timed, how the bonus stacks with other adders, and how the rules apply under the post-IRA **§48E** clean-electricity credit. For the base credit mechanics, see [Commercial Solar Federal Tax Credits](federal-tax-credits.md). For the sunset timeline created by the 2025 tax law, see [The "Big Beautiful Bill" (OBBBA)](big-beautiful-bill.md).

> **Today's date for this page is `2026-06-30`.** Energy-community eligibility lists are updated by the IRS at least annually. The most recent routine update was **Notice 2026-39** (released June 10, 2026); the prior consolidated guidance was **Notice 2025-31** (June 23, 2025). Always confirm a specific parcel against the current IRS Notice and DOE mapping tool before relying on the bonus.

## How the bonus is worth 10 points (not 2)

The energy community adder is structured as a multiplier on the base credit, and its size depends on whether the project satisfies the **prevailing wage and apprenticeship (PW&A)** requirements:

| Scenario | Energy community bonus |
|---|---|
| Project meets PW&A (or is under 1 MW AC and exempt) | **+10 percentage points** (ITC) / **+10%** (PTC rate) |
| Project subject to PW&A but does not meet them | **+2 percentage points** (ITC) / **+2%** (PTC rate) |

Because most commercial projects large enough to matter either meet PW&A or fall under the 1 MW small-project exemption, the bonus is commonly described as the **"10% energy community adder."** The 2%/10% split mirrors how the base credit itself is reduced 5x for PW&A failures.

The bonus applies to credits under **§45** (legacy PTC), **§48** (legacy ITC), **§45Y** (clean-electricity PTC), and **§48E** (clean-electricity ITC). Projects that began construction in 2025 or later almost always fall under the technology-neutral **§45Y/§48E** regime.

## The three qualifying categories

A project site qualifies if it falls into **any one** of three categories. Meeting more than one does not increase the bonus — the adder is capped at 10 points regardless.

| Category | Core definition | Key test / trigger |
|---|---|---|
| **Brownfield** | Real property whose expansion, redevelopment, or reuse is complicated by the presence (or potential presence) of a hazardous substance, pollutant, or contaminant, per CERCLA `42 U.S.C. 9601(39)(A)`. | Site-specific; satisfied via one of three brownfield safe harbors (see below). |
| **Coal Closure** | A census tract — **or any tract directly adjoining it** — in which a coal mine closed after `1999` or a coal-fired electric generating unit was retired after `2009`. | Mapped by DOE; static list updated in IRS notices. |
| **Statistical Area (fossil employment)** | A Metropolitan or non-Metropolitan Statistical Area (MSA/non-MSA) that meets **both** a fossil-fuel employment threshold **and** an unemployment test. | (1) At least `0.17%` of direct local employment (or `25%` of local tax revenue in some prior-law framings) tied to extraction, processing, transport, or storage of coal, oil, or natural gas; **and** (2) an unemployment rate at or above the prior-year national average. Recomputed annually. |

### Brownfield safe harbors

A site is treated as a qualifying brownfield if **any one** of these is satisfied (per Notice 2023-29, as clarified by later guidance):

1. The site was **previously assessed** as meeting the CERCLA `9601(39)(A)` brownfield definition through a federal, state, territorial, or tribal program.
2. A **Phase II Environmental Site Assessment** (ASTM E1903) confirmed the presence of a CERCLA hazardous substance, pollutant, or contaminant.
3. For projects **under 5 MW AC**, a completed **Phase I Environmental Site Assessment** (ASTM E1527) is sufficient.

The brownfield boundary is drawn according to the **entire parcel** of real property, not just the contaminated footprint.

### Coal Closure and Statistical Area categories

These two categories are **mapped**, not assessed parcel-by-parcel. DOE and the IRS publish appendices listing every qualifying census tract (Coal Closure) and MSA/non-MSA (Statistical Area). The **Statistical Area** category is recomputed each year because both the fossil-employment share and the unemployment comparison shift; a tract eligible in one year may drop off in the next. The **Coal Closure** category is more static but is still refreshed in the annual notices.

## Determining eligibility: maps and timing tests

Two questions must both be answered "yes": **is the location eligible**, and **as of which date is eligibility tested**.

### Step 1 — Map the site

Use the official tools:

- The DOE / interagency working group [Energy Community Tax Credit Bonus mapping tool](https://energycommunities.gov/energy-community-tax-credit-bonus-faqs/) for Coal Closure and Statistical Area layers.
- The [U.S. Treasury Energy Communities data page](https://home.treasury.gov/policy-issues/tax-policy/data-transparency/energy-communities) for underlying datasets.
- The current-year IRS appendix (e.g., **Notice 2026-39**) for the authoritative list.

A project is treated as **"located in"** an energy community if **50% or more of its nameplate capacity** sits within a qualifying area (the **Nameplate Capacity Test**). For a large ground-mount array straddling a tract boundary, run the capacity split before assuming eligibility.

### Step 2 — Apply the timing test (BOC vs. placed-in-service)

Eligibility is not tested continuously. Which date governs depends on the credit:

| Credit type | Eligibility tested on… |
|---|---|
| **ITC (§48 / §48E)** | The **placed-in-service (PIS)** date. Tested once. |
| **PTC (§45 / §45Y)** | Each year of the 10-year credit period (production-based). |

**Beginning-of-construction (BOC) safe harbor.** If a project **begins construction on or after January 1, 2023** in a location that qualifies as an energy community **as of the BOC date**, that location is treated as an energy community for the **entire ITC PIS determination** (or the full 10-year PTC period), even if the area later drops off the list. This safe harbor is the single most valuable planning tool: it lets a developer **lock in** energy-community status by establishing BOC while the site is on the current list.

BOC is established the same way as for the base credit — either **physical work of a significant nature** or the **5% cost safe harbor** (paying or incurring 5%+ of total project cost) — and then maintaining the **continuity requirement** (generally, placing in service within four calendar years of BOC).

> **Planning takeaway:** Because Statistical Area status is recomputed annually, a site that qualifies today may not qualify next year. Establishing BOC now, while the site is on the current IRS list, can secure the 10-point adder for the life of the credit.

## §48E applicability and interaction with OBBBA sunset

For any commercial solar project that begins construction after 2024, the operative credit is the technology-neutral **§48E ITC**, and the energy community bonus attaches to it in full (10 points with PW&A). The categories, maps, and timing tests above all apply to §48E identically to legacy §48.

The critical wrinkle is the **OBBBA sunset**. Under the 2025 law, wind and solar §45Y/§48E facilities must generally **begin construction by July 4, 2026** (or be placed in service by the end of 2027 under a separate track) to claim the credit at all. The energy community bonus is only worth pursuing on projects that clear that base-eligibility gate. See [The "Big Beautiful Bill" (OBBBA)](big-beautiful-bill.md) for the full phase-out schedule.

> **Note on FEOC:** OBBBA's "prohibited foreign entity" and "material assistance" rules (effective for construction beginning after `2025-12-31`) are conditions on claiming the underlying §48E credit — they are **not** part of the energy community test. But if a project fails the FEOC material-assistance threshold, there is no base credit to add the 10 points to. The FEOC mechanics are covered on the [Domestic Content Bonus](incentive-domestic-content.md) page.

## Stacking with other adders

The energy community bonus stacks additively with the other §48E ITC adders. For a project that qualifies for everything:

| Component | ITC points |
|---|---|
| Base ITC (PW&A met) | 30 |
| Energy Community adder | +10 |
| Domestic Content adder | +10 |
| Low-Income Communities bonus (§48E(h) allocation; capacity-limited) | +10 or +20 |

The **Low-Income Communities** bonus (formerly §48(e)) requires a competitive capacity allocation and is not automatic. Energy Community and Domestic Content, by contrast, are self-certified if the criteria are met.

### Worked stack example

A **2.0 MW AC** commercial ground-mount project sited on a former coal-fired power plant parcel (retired 2015) inside a coal-closure census tract, using domestic steel racking and qualifying domestic modules, meeting PW&A:

| Layer | Rate | Notes |
|---|---|---|
| Base §48E ITC | 30% | PW&A satisfied |
| Energy Community | +10% | Coal Closure category; locked at BOC |
| Domestic Content | +10% | Steel/iron + manufactured-products test met |
| **Total ITC** | **50%** | Before any Low-Income allocation |

On a `$3,500,000` project cost, the credit moves from `$1,050,000` (30%) to `$1,750,000` (50%) — an incremental `$700,000` from the two automatic adders, of which `$350,000` is the energy community bonus. (Low-income allocation, if awarded, could push this to 60–70%.)

## Documentation

There is no separate "application" for the energy community bonus — it is claimed on the return and supported by retained records. Maintain:

- **Site mapping evidence:** the DOE tool output or IRS appendix reference showing the parcel/tract qualifies, dated to the relevant test date.
- **Category-specific proof:** for brownfield, the Phase I/II ESA or prior-assessment documentation; for coal-closure/statistical-area, the notice appendix citation.
- **Nameplate Capacity Test calculation** showing ≥50% of capacity in the qualifying area.
- **BOC evidence** (physical-work log or 5% cost records) to invoke the lock-in safe harbor, plus continuity documentation.
- **Form 3468** (ITC) with the energy community increase, and **Form 7220** where required for the PW&A-based increased credit amount.

Keep this file assembled contemporaneously — the placed-in-service test is a point-in-time determination, and reconstructing map status years later is difficult once lists change.

## Sources & Further Reading

- IRS — [Frequently Asked Questions for Energy Communities](https://www.irs.gov/credits-deductions/frequently-asked-questions-for-energy-communities)
- IRS — [Notice 2025-31, Energy Community Bonus Credit Amounts or Rates (PDF)](https://www.irs.gov/pub/irs-drop/n-25-31.pdf)
- U.S. Department of the Treasury — [Energy Communities](https://home.treasury.gov/policy-issues/tax-policy/data-transparency/energy-communities)
- DOE Interagency Working Group — [Energy Community Tax Credit Bonus FAQs & mapping tool](https://energycommunities.gov/energy-community-tax-credit-bonus-faqs/)
- McGuireWoods — [IRS Updates Energy Community Bonus Credit Eligibility Lists for 2026](https://www.mcguirewoods.com/client-resources/alerts/2026/6/irs-updates-energy-community-bonus-credit-eligibility-lists-for-2026/)
- Holland & Knight — [IRS Issues Updates for Energy Community Bonus Tax Credit (June 2025)](https://www.hklaw.com/en/insights/publications/2025/06/irs-issues-updates-for-energy-community-bonus-tax-credit)
- Related: [Commercial Solar Federal Tax Credits](federal-tax-credits.md) · [The "Big Beautiful Bill" (OBBBA)](big-beautiful-bill.md) · [Domestic Content Bonus](incentive-domestic-content.md)

> **Disclaimer:** This page is educational only and is not tax, legal, or accounting advice. Energy-community eligibility lists, timing rules, and credit rates change frequently and are fact-specific. Verify current IRS guidance and consult a qualified tax professional before claiming any bonus credit.
