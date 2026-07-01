# MACRS & Bonus Depreciation

For commercial solar, the federal **Investment Tax Credit (ITC)** is only half the story. The other major federal incentive is **accelerated depreciation** — the ability to write off the cost of the solar system against business income over a compressed schedule, plus **bonus depreciation** that can front-load most or all of that deduction into the first year. Together with the ITC, depreciation often pushes the combined first-year federal tax benefit on a commercial solar project to roughly **45%–60% of installed cost** for a taxpayer with sufficient tax liability.

This page explains how the **Modified Accelerated Cost Recovery System (MACRS)** applies to solar, how the ITC reduces the depreciable basis, the 5-year recovery schedule, and how **bonus depreciation** (restored to 100% under the One Big Beautiful Bill Act) stacks on top.

> **Verification note (as of 2026-06-30):** Federal tax law is current as of this writing. The **One Big Beautiful Bill Act (OBBBA)**, signed **July 4, 2025**, made **100% bonus depreciation permanent** for qualified property **acquired after January 19, 2025**. Solar property continues to use the **5-year MACRS** class life, and the **ITC basis-reduction rule** (reduce basis by 50% of the credit) under IRC §50(c) remains in effect. Always confirm current rules with a tax professional and the IRS before relying on these figures.

See also: [Commercial Solar Federal Tax Credits](federal-tax-credits.md) and [The "Big Beautiful Bill" (OBBBA)](big-beautiful-bill.md).

## What MACRS Is

**MACRS** is the U.S. tax depreciation system that lets businesses recover the cost of qualifying capital assets over a set "recovery period" by deducting a portion of the asset's cost each year. Solar energy property is classified as **5-year property** under MACRS (specifically as a qualified energy property under IRC §168 and §48), meaning its cost is recovered over a schedule spanning six tax years (five years plus a partial sixth year due to the **half-year convention**).

Accelerated depreciation matters because deductions taken sooner are worth more than deductions deferred into the future — the time value of money. MACRS front-loads deductions relative to straight-line depreciation, and **bonus depreciation** front-loads them even further.

> **Key point:** Depreciation is a *deduction* (it reduces taxable income), while the ITC is a *credit* (it reduces tax owed dollar-for-dollar). The two are separate benefits that a commercial solar owner generally claims **together** on the same project.

## The Depreciable Basis and the ITC Basis-Reduction Rule

You do not depreciate the full system cost when you also claim the ITC. Under **IRC §50(c)**, when an investment credit is claimed, the property's **depreciable basis must be reduced by 50% of the credit amount**. This is often called the **"ITC haircut."**

```
Depreciable basis = System cost - (0.50 x ITC amount)
```

For a project claiming the standard **30% ITC**, the basis reduction equals `0.50 x 30% = 15%` of cost. So the depreciable basis is **85% of the system cost**.

```
With a 30% ITC:
  ITC amount        = 30% x cost
  Basis reduction   = 50% x (30% x cost) = 15% x cost
  Depreciable basis = cost - 15% x cost  = 85% x cost
```

> **Key point:** A 30% ITC leaves **85% of the installed cost** depreciable under MACRS. If the project earns **bonus ITC adders** (e.g., domestic content or energy community increases that raise the credit above 30%), the haircut grows proportionally — at a 40% credit, the basis reduction is `50% x 40% = 20%`, leaving 80% depreciable. Confirm your project's actual credit rate before computing basis.

## The Half-Year Convention and the 5-Year Schedule

MACRS for solar uses the **General Depreciation System (GDS)**, the **200% declining-balance method** switching to straight-line, and the **half-year convention**. The half-year convention assumes the asset was placed in service at the midpoint of the year regardless of the actual month, which spreads recovery across six tax years.

The standard **5-year GDS half-year percentages** (from IRS Publication 946, Table A-1) are:

| Recovery year | Depreciation rate | Applied to |
|---------------|-------------------|------------|
| 1 | **20.00%** | Depreciable basis |
| 2 | **32.00%** | Depreciable basis |
| 3 | **19.20%** | Depreciable basis |
| 4 | **11.52%** | Depreciable basis |
| 5 | **11.52%** | Depreciable basis |
| 6 | **5.76%** | Depreciable basis |
| **Total** | **100.00%** | |

Each rate is multiplied by the **depreciable basis** (post-ITC-haircut), **not** the full system cost.

> **Key point:** These percentages always total 100%. The schedule above applies when **no bonus depreciation** is taken. With bonus depreciation, the bonus deduction comes first and only the *remaining* basis (if any) follows this schedule.

## Bonus Depreciation Under OBBBA

**Bonus depreciation** allows an additional first-year deduction of a percentage of the depreciable basis, taken immediately in the year the property is placed in service, ahead of the regular MACRS schedule.

> **Verified (as of 2026-06-30):** The **One Big Beautiful Bill Act**, signed **July 4, 2025**, **permanently restored 100% bonus depreciation** for qualified property (including solar's 5-year property) **acquired after January 19, 2025**. This reversed the prior-law phase-down (which had dropped bonus to 40% in 2025 and was scheduled to reach 0%). The IRS issued implementing guidance (Notice 2026-11) on the permanent 100% deduction.

**Transitional rule:** Property *acquired on or before January 19, 2025* (or placed in service in the first 19 days of 2025) generally remains subject to the **old phase-down** (40% for 2025, 20% for 2026, then 0%). For most projects acquired in 2025 or later, **100% bonus** applies.

### How bonus stacks with MACRS and the ITC

1. **Claim the ITC** on the full system cost (e.g., 30%).
2. **Reduce the depreciable basis** by 50% of the ITC (the haircut) → 85% of cost for a 30% credit.
3. **Apply bonus depreciation** to that depreciable basis. At **100% bonus**, the *entire* depreciable basis is deducted in Year 1.
4. **Any basis not covered by bonus** (zero, when bonus is 100%) is recovered using the 5-year MACRS schedule above.

> **Key point:** With **100% bonus** and a 30% ITC, a business deducts the **full 85% depreciable basis in Year 1** — there is no Year 2–6 MACRS depreciation left to take, because bonus consumed all of it. A taxpayer may **elect out** of bonus and use the standard 5-year schedule instead (e.g., to better match deductions to future income); this is a planning choice.

## The Combined Tax Benefit

The cash value of depreciation depends on the owner's **marginal tax rate**. The deduction itself is the basis; the *tax savings* equal the deduction multiplied by the tax rate.

```
Depreciation tax savings = Depreciable basis x marginal tax rate
```

For a C-corporation at the **21% federal rate**, the depreciation savings on an 85% basis equal roughly `85% x 21% = 17.85%` of system cost (federal only). Adding the **30% ITC** yields a combined federal benefit on the order of **~48% of cost** — before any state tax savings. State income tax and any state-level depreciation conformity can add to (or, where states decouple from bonus, slightly alter the timing of) this benefit.

> **Key point:** The combined ITC-plus-depreciation benefit is only realized by a taxpayer with enough **tax liability ("tax appetite")** to absorb the credit and deductions. Owners without sufficient liability often turn to **tax-equity** partnerships or, under current law, **transferability** of the ITC to monetize the benefit.

## Tax Appetite and Tax Equity

Both the ITC and accelerated depreciation are only valuable to an entity that **owes federal tax**. Many project hosts (nonprofits, governments, low-income operations, or businesses with losses) cannot directly use them. Common solutions:

- **Tax-equity financing / partnership flips:** an investor with tax appetite owns or partners in the project to absorb the credit and depreciation, sharing economics with the host.
- **ITC transferability:** under current law, the ITC may be **sold for cash** to an unrelated taxpayer (note that **depreciation deductions are generally *not* transferable** — only the credit). See [Commercial Solar Federal Tax Credits](federal-tax-credits.md).
- **Direct pay (elective payment):** available to certain tax-exempt and governmental entities for the credit.

> **Key point:** Depreciation deductions stay with the **project owner** and cannot be sold separately. This is a key reason tax-equity structures exist — to place ownership with a party that can use *both* the credit and the depreciation.

## State Conformity Caveats

Federal MACRS and bonus depreciation do **not** automatically flow through to state income taxes. Many states **decouple** from federal bonus depreciation, requiring you to add back the bonus deduction and depreciate over a state-defined schedule (often standard MACRS or straight-line). Some states do not conform to MACRS at all, or impose their own ITC basis rules.

> **Key point:** The federal worked examples below reflect **federal tax only**. Your actual after-tax economics depend on your **state's conformity rules**. Confirm state treatment with a tax professional in your jurisdiction.

## Worked Example: ITC + Depreciation on a Sample Project

```
ASSUMPTIONS
  System cost (installed) ......... $500,000
  ITC rate ........................ 30%  (base credit, no adders)
  Bonus depreciation .............. 100% (OBBBA, placed in service 2025+)
  Federal tax rate (C-corp) ....... 21%
  State tax ....................... ignored (federal illustration only)

STEP 1 - Investment Tax Credit
  ITC = 30% x $500,000 ............ $150,000  (direct reduction of tax owed)

STEP 2 - ITC basis reduction (the "haircut")
  Basis reduction = 50% x $150,000  = $75,000
  Depreciable basis = $500,000 - $75,000 = $425,000   (85% of cost)

STEP 3 - Bonus depreciation (100%)
  Year 1 depreciation = 100% x $425,000 = $425,000
  (No Year 2-6 MACRS remains; bonus consumed the full basis.)

STEP 4 - Value of the depreciation deduction
  Depreciation tax savings = $425,000 x 21% = $89,250

COMBINED FEDERAL BENEFIT (Year 1)
  ITC ............................. $150,000
  Depreciation tax savings ........  $89,250
  ----------------------------------------------
  Total federal benefit ........... $239,250  (~48% of $500,000 cost)
  Net first-year cost (approx) .... $260,750
```

### Same project, electing the standard 5-year MACRS (no bonus)

If the owner **elects out of bonus**, the $425,000 basis is recovered over the 5-year schedule instead of all in Year 1:

```
Year 1: 20.00% x $425,000 = $85,000   -> tax savings $17,850
Year 2: 32.00% x $425,000 = $136,000  -> tax savings $28,560
Year 3: 19.20% x $425,000 = $81,600   -> tax savings $17,136
Year 4: 11.52% x $425,000 = $48,960   -> tax savings $10,282
Year 5: 11.52% x $425,000 = $48,960   -> tax savings $10,282
Year 6:  5.76% x $425,000 = $24,480   -> tax savings  $5,141
------------------------------------------------------------
Total depreciation ........ $425,000  -> total savings $89,250
```

> **Key point:** The **total** depreciation tax savings ($89,250) is identical either way — bonus depreciation changes the **timing**, not the total. With 100% bonus the entire deduction lands in Year 1; with the standard schedule it spreads over six years. The ITC ($150,000) is the same in both cases.

## Sources & Further Reading

- IRS — [One, Big, Beautiful Bill provisions](https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions)
- IRS — [Treasury, IRS issue guidance on the additional first year depreciation deduction amended as part of the One, Big, Beautiful Bill](https://www.irs.gov/newsroom/treasury-irs-issue-guidance-on-the-additional-first-year-depreciation-deduction-amended-as-part-of-the-one-big-beautiful-bill)
- IRS — [Publication 946, How To Depreciate Property](https://www.irs.gov/publications/p946) (MACRS tables and conventions)
- IRS — [About Form 4562, Depreciation and Amortization](https://www.irs.gov/forms-pubs/about-form-4562)
- SEIA — [Depreciation of Solar Energy Property in MACRS](https://seia.org/depreciation-solar-energy-property-macrs/)
- Internal pages: [Commercial Solar Federal Tax Credits](federal-tax-credits.md) · [The "Big Beautiful Bill" (OBBBA)](big-beautiful-bill.md)

---

*Disclaimer: This page is provided for educational and reference purposes only and does not constitute tax, accounting, legal, or financial advice. Tax law changes frequently and individual circumstances vary. Consult a qualified tax professional and verify current IRS rules before making any decision.*
