# Domestic Content Bonus

The **Domestic Content Bonus Credit** rewards clean-energy projects built with American-made steel, iron, and manufactured products. For a commercial solar project claiming the **Investment Tax Credit**, satisfying the domestic content requirement adds **10 percentage points** to the credit rate (or **10%** to the per-kWh **PTC** rate) — the same magnitude as the energy community adder, and fully stackable with it.

This page covers the two component tests, the escalating manufactured-products threshold by construction-start year, the IRS safe-harbor cost tables, and — critically for 2026 and beyond — how OBBBA's **FEOC "material assistance"** rules now sit alongside (but separate from) the domestic content bonus. For base credit mechanics see [Commercial Solar Federal Tax Credits](federal-tax-credits.md); for the sunset schedule see [The "Big Beautiful Bill" (OBBBA)](big-beautiful-bill.md); for the location-based adder see [Energy Communities Bonus](incentive-energy-communities.md).

> **Today's date for this page is `2026-06-30`.** Percentages, safe-harbor tables, and FEOC thresholds below are drawn from IRS Notices 2023-38, 2024-41, 2025-08, and interim FEOC guidance Notice 2026-15 (interim, subject to proposed regulations). Confirm against current IRS guidance before relying on any figure.

## The 10-point (or 2-point) adder

Like the energy community bonus, the domestic content adder is a PW&A-gated multiplier:

| Scenario | Domestic content bonus |
|---|---|
| Project meets prevailing wage & apprenticeship (or under 1 MW AC) | **+10 percentage points** (ITC) / **+10%** (PTC) |
| Subject to PW&A but not met | **+2 percentage points** (ITC) / **+2%** (PTC) |

It applies across **§45, §48, §45Y, and §48E**. Post-2024 commercial solar projects fall under **§48E**.

## The two component tests

Every "applicable project component" is classified as either **steel/iron** or a **manufactured product**, and each classification is tested differently.

### Test 1 — Steel and iron: 100% domestic

All structural **steel or iron** must be **100% U.S.-produced** — meaning all manufacturing processes (from initial melt through coating) occur in the United States. This applies to structural components such as **racking, ground-mount posts, piles, and rebar in foundations**. There is no percentage; it is all-or-nothing for these items. (This rule is unchanged from the original IRA framework and was **not** altered by OBBBA.)

The steel/iron rule does **not** apply to the fasteners, nuts, bolts, or the steel inside manufactured products (e.g., an inverter enclosure) — those flow into Test 2.

### Test 2 — Manufactured products: the adjusted percentage

Manufactured products (modules, inverters, trackers, and their subcomponents) are treated as domestic if the **domestic cost percentage** — U.S. manufacturing and component costs as a share of the total cost of all manufactured products — meets or exceeds the **adjusted percentage** for the project's construction-start year.

The domestic cost percentage is computed from **direct material and direct labor costs** of U.S.-manufactured products and their U.S.-sourced components, divided by the total cost of all manufactured products in the project.

## Adjusted percentage thresholds by construction-start year

The threshold **escalates by construction-start year**. Original IRA guidance (Notice 2023-38) set the schedule below for §45, §48, and §45Y. **OBBBA corrected a drafting glitch** that had frozen the §48E threshold at 40%, aligning §48E with the escalating schedule for projects that **begin construction after `2025-06-16`**.

| Construction begins | Adjusted % (non-offshore) | Offshore wind |
|---|---|---|
| Before `2025` | **40%** | 20% |
| In `2025` | **45%** | 27.5% |
| In `2026` | **50%** | 35% |
| In `2027` | **55%** | 45% |
| After `2027` | **55%** | 55% |

> A commercial solar project **beginning construction in 2026** must have its domestic cost percentage of manufactured products reach **`50%`** to satisfy Test 2. That climbs to **`55%`** for 2027-and-later starts.

## The IRS safe-harbor cost tables

Computing a project's domestic cost percentage from a manufacturer's actual bill of materials is difficult — vendors rarely disclose direct cost breakdowns. To solve this, the IRS provides an **Elective Safe Harbor**: pre-assigned **cost percentages** for each component, so a taxpayer can prove the adjusted percentage using the classification of parts alone rather than true cost data.

**Evolution of the tables:**

| Guidance | What it did |
|---|---|
| **Notice 2023-38** | Established the two tests, classification framework, and original adjusted-percentage schedule. |
| **Notice 2024-41** | Introduced the first **Elective Safe Harbor** cost-percentage tables (including a solar PV table) and a "New Elective Safe Harbor" methodology. |
| **Notice 2025-08** | **Updated and expanded** the safe-harbor tables. Split solar PV into **separate tables** for ground-mount (tracking/fixed) and rooftop (MLPE/string), added a **second column crediting domestic crystalline-silicon PV cells and wafers** (reflecting their cost premium), and reclassified several components for clarity. Applies to calculations from `2025-01-16`; the older 2024 table may be used where construction starts by `2025-04-15`. |

Under the elective safe harbor, you sum the assigned percentages for each U.S.-produced component and compare the total to the year's adjusted percentage. Domestic **cells and wafers** carry a large assigned weight, which is often what pushes a project over the threshold. Use of the safe harbor is **elective** — a taxpayer may instead use actual direct-cost data, but must use one method consistently for a project.

## OBBBA's FEOC "material assistance" interaction

This is the most important 2026 development, and it is frequently confused with the domestic content bonus. **They are different rules serving different purposes:**

- **Domestic content bonus** — a *voluntary* adder. Meet it, get +10 points. Fail it, you simply don't get the bonus.
- **FEOC material assistance** — a *mandatory gate*. Fail it, and the **entire §45Y/§48E credit is denied**, not just the adder.

### How material assistance works

OBBBA denies the §45Y/§48E credit if a facility receives too much **"material assistance from a prohibited foreign entity" (PFE)** — broadly, entities with close ties to China, Russia, North Korea, or Iran, or on certain U.S. "bad actor" lists. Compliance is measured by the **Material Assistance Cost Ratio (MACR)**: the percentage of total direct costs **not** attributable to a PFE. The MACR must meet or exceed an escalating threshold, or the credit is lost.

**Effective date:** the material-assistance rules apply to facilities that **begin construction after `2025-12-31`**. Projects that began construction on or before that date are exempt from material-assistance testing (though other FEOC ownership rules may still apply).

**Interim MACR thresholds** (per Notice 2026-15; final safe-harbor tables due from Treasury by `2026-12-31`):

| Construction begins | Qualified facility (e.g., solar) | Energy storage |
|---|---|---|
| `2026` | **40%** | 55% |
| `2027` | **45%** | 60% |
| `2028` | **50%** | 65% |

> **Practical overlap:** Domestic content (a cost *share* that must be *U.S.-made*) and MACR (a cost share that must be *non-PFE*) both push toward the same supply chains, and a project engineered for domestic content will often clear MACR — but they use different numerators, denominators, and thresholds, and must be computed **separately**. Notice 2026-15 provides interim safe harbors that can be used for the MACR much as Notice 2025-08 does for domestic content. See [The "Big Beautiful Bill" (OBBBA)](big-beautiful-bill.md) for the broader FEOC framework.

## Direct-pay (elective payment) domestic content phase-in

For **applicable entities** (tax-exempt, governmental, tribal, co-op) taking the credit as a **direct payment under §6417**, domestic content is **not optional** above a size threshold — failing it reduces the *entire* elective payment on a phase-in schedule:

| Construction begins | Direct-pay credit reduction if domestic content **not** met |
|---|---|
| `2024` | 10% reduction |
| `2025` | 15% reduction |
| After `2025` | **100% reduction** (no elective payment) |

**Exceptions** that preserve the full direct payment:

- **Under 1 MW AC** projects are **exempt** from the phase-in penalty entirely.
- **Increased-cost exception** — if domestic products would raise total construction cost by more than **25%**.
- **Non-availability exception** — if the domestic steel/iron/products aren't produced in the U.S. in sufficient quantity or satisfactory quality.

An entity can rely on an **attestation** to establish an exception for construction beginning before the later of `2027-01-01` or further IRS guidance. This makes domestic content a make-or-break issue for tax-exempt commercial owners using direct pay — far higher stakes than the voluntary 10-point adder for taxable owners.

## Documentation & certifications

Retain, for each project:

- A **domestic content certification** signed under penalties of perjury, attached to the return (with **Form 3468** for the ITC).
- **Manufacturer certifications / letters** identifying each applicable project component, its classification (steel-iron vs. manufactured product), and country of manufacture — including cell/wafer origin for the Notice 2025-08 premium column.
- The **domestic cost percentage calculation** (or the elective safe-harbor tally) showing the year's adjusted percentage is met.
- For FEOC-covered projects (BOC after `2025-12-31`): the **MACR calculation** and supporting supplier attestations.
- For direct-pay entities: exception attestations and cost records if relying on the increased-cost or non-availability exception.

## Worked example

A **1.5 MW AC** commercial ground-mount project **beginning construction in 2026**, meeting PW&A, using domestic steel racking and modules with domestic crystalline-silicon cells/wafers:

| Test | Requirement | This project |
|---|---|---|
| Steel/iron | 100% U.S. (racking, piles) | Met — domestic racking |
| Manufactured products | ≥ **50%** domestic cost (2026 threshold) | ~58% via elective safe harbor (domestic cells/wafers + U.S. module assembly) → Met |
| FEOC MACR (BOC after 2025-12-31) | ≥ **40%** non-PFE | Computed separately; met |

Result on a `$2,250,000` project:

| Layer | Rate | Credit |
|---|---|---|
| Base §48E ITC (PW&A) | 30% | `$675,000` |
| Domestic Content adder | +10% | `$225,000` |
| **Subtotal** | **40%** | **`$900,000`** |

Stacking an energy community adder (see [Energy Communities Bonus](incentive-energy-communities.md)) would add another `$225,000`, reaching a 50% / `$1,125,000` ITC.

## Sources & Further Reading

- IRS — [Domestic Content Bonus Credit](https://www.irs.gov/credits-deductions/domestic-content-bonus-credit)
- IRS — [Notice 2023-38 (PDF)](https://www.irs.gov/pub/irs-drop/n-23-38.pdf)
- IRS — [Notice 2024-41 Domestic Content Safe Harbor (PDF)](https://www.irs.gov/pub/irs-drop/n-24-41.pdf)
- IRS — [Notice 2025-08, Domestic Content Elective Safe Harbor (PDF)](https://www.irs.gov/pub/irs-drop/n-25-08.pdf)
- IRS — [Internal Revenue Bulletin 2025-08](https://www.irs.gov/irb/2025-08_IRB)
- IRS — [Elective Pay and Transferability](https://www.irs.gov/credits-deductions/elective-pay-and-transferability)
- Novogradac — [IRS Notice 2026-15: Material Assistance FEOC Interim Guidance](https://www.novoco.com/notes-from-novogradac/managing-the-interim-feoc-guidance-irs-notice-2026-15-addresses-material-assistance-for-sections-45y-48e-and-45x-deferring-on-broader-pfe-status-guidance)
- PwC — [IRS modifies domestic content credit bonus safe harbor](https://www.pwc.com/us/en/services/tax/library/pwc-irs-modifies-domestic-content-credit-bonus-safe-harbor.html)
- Congressional Research Service — [Domestic Content Requirements for Electricity Tax Credits (R48358)](https://www.congress.gov/crs-product/R48358)
- Related: [Commercial Solar Federal Tax Credits](federal-tax-credits.md) · [The "Big Beautiful Bill" (OBBBA)](big-beautiful-bill.md) · [Energy Communities Bonus](incentive-energy-communities.md)

> **Disclaimer:** This page is educational only and is not tax, legal, or accounting advice. Domestic content percentages, safe-harbor tables, and FEOC material-assistance rules are evolving and highly fact-specific — several are interim and subject to forthcoming proposed regulations. Verify current IRS guidance and consult a qualified tax professional before claiming any bonus credit.
