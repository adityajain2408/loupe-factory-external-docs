# Tally Prime

<div class="lf-integration-hero" style="--lf-integration-accent: #2a63d4;">
  <p class="lf-integration-hero__eyebrow">Integrations</p>
  <p class="lf-integration-hero__title">Tally Prime bank import</p>
  <p class="lf-integration-hero__subtitle">
    Use Loupe Factory to upload a bank statement, review the parsed
    transactions, map ledgers, and push vouchers into Tally. This guide keeps
    the workflow simple so your team can move from bank PDF to verified entries
    with less manual typing.
  </p>
  <div class="lf-chip-row">
    <span class="lf-chip">Tally and Tally Prime</span>
    <span class="lf-chip">AI-assisted review</span>
    <span class="lf-chip">Ledger mapping</span>
    <span class="lf-chip">Voucher push</span>
  </div>
</div>

<div class="lf-summary-grid">
  <div class="lf-summary-card" style="--lf-integration-accent: #2a63d4;">
    <div class="lf-summary-card__label">Best for</div>
    <p class="lf-summary-card__value">Teams that regularly import bank transactions into Tally and want a faster monthly process.</p>
  </div>
  <div class="lf-summary-card" style="--lf-integration-accent: #2a63d4;">
    <div class="lf-summary-card__label">Main outcome</div>
    <p class="lf-summary-card__value">Less manual entry, clearer review, and faster voucher creation.</p>
  </div>
  <div class="lf-summary-card" style="--lf-integration-accent: #2a63d4;">
    <div class="lf-summary-card__label">What you review</div>
    <p class="lf-summary-card__value">Transactions, totals, party ledgers, voucher types, and final entries in Tally.</p>
  </div>
</div>

## Before you begin

- Make sure Tally or Tally Prime is open on the computer you will use.
- Keep the correct Tally company selected before you push vouchers.
- Prepare an **unprotected PDF** bank statement from your bank.
- Sign in to Loupe Factory with access to the Tally integration page.

## Step 1: Install the local connector

Loupe Factory guides you through a one time local setup so the approved
vouchers can reach Tally on your computer.

1. In Loupe Factory, go to **Workflows -> Integrations -> Tally - Bank
   Import**.
2. Download the local connector script from that page.
3. Run the script on the workstation you will use for imports.
4. Keep the default connection details unless your team has a different local
   Tally setup.

If your team uses more than one workstation, repeat this setup on each one.

<div class="lf-screenshot-placeholder" style="--lf-integration-accent: #2a63d4;">
  <p class="lf-screenshot-placeholder__label">Screenshot placeholder</p>
  <p class="lf-screenshot-placeholder__title">Tally connector setup</p>
  <p class="lf-screenshot-placeholder__text">
    Add a screenshot here later showing the Tally Bank Import page with the
    local connector download action and the setup checklist.
  </p>
</div>

## Step 2: Prepare Tally for the import

Before uploading your statement:

1. Open Tally or Tally Prime.
2. Select the destination company that should receive the vouchers.
3. Confirm the Tally connection details shown in Loupe Factory.
4. Keep Tally open while you review and push the import.

## Step 3: Upload the bank statement

1. On the Tally import page in Loupe Factory, enter the **Tally Company Name**
   and **Bank Ledger Name**.
2. Upload the bank statement PDF.
3. Wait for Loupe Factory to finish parsing the statement.

After the upload, Loupe Factory shows a review summary with totals, transaction
count, and the extracted transaction list.

## Step 4: Review the transactions and map ledgers

This is the most important review step.

1. Check the bank summary and totals first.
2. Review each parsed transaction for date, amount, narration, and type.
3. Match each counterparty to the correct Tally ledger.
4. Review the suggested voucher type where needed.
5. Fix any line that needs a different counterparty, voucher type, or bank
   reference before you push.

## Step 5: Push vouchers to Tally

1. When the review looks correct, select **Push to Tally**.
2. Wait for the import to finish.
3. Open the relevant Tally report, such as the Day Book, and verify the new
   vouchers.

Always review the final result in Tally after the push. This helps catch any
ledger or classification issue before month end work continues.

## What is mapped in the Tally workflow

| Source information | Loupe Factory review field | Tally result |
| --- | --- | --- |
| Statement date | Banker's Date | Voucher date |
| Transaction description | Description | Narration or voucher description |
| Credit or debit amount | Amount and type | Debit or credit line in the voucher |
| Counterparty or party name | Counterparty | Party ledger |
| Instrument number or reference | Instrument number or bank reference | Voucher reference details |
| Self transfer marker | Self transfer flag | Contra voucher suggestion |

## Voucher behavior

Loupe Factory follows a simple voucher pattern when preparing the push:

| Transaction type | Typical voucher type |
| --- | --- |
| Credit | Receipt |
| Debit | Payment |
| Transfer between your own accounts | Contra |

## Recommended monthly workflow

1. Upload one bank account statement at a time.
2. Review totals before reviewing individual rows.
3. Reuse consistent ledger names so mapping stays easier over time.
4. Verify the pushed vouchers in Tally before moving to the next statement.

<div class="lf-screenshot-placeholder" style="--lf-integration-accent: #2a63d4;">
  <p class="lf-screenshot-placeholder__label">Screenshot placeholder</p>
  <p class="lf-screenshot-placeholder__title">Transaction review and ledger mapping</p>
  <p class="lf-screenshot-placeholder__text">
    Add a screenshot here later showing the parsed transaction table, counterparty
    ledger mapping controls, and the push to Tally action.
  </p>
</div>

## Next steps

- Keep this guide available for the person who performs monthly bank imports.
- Return to [Integrations](index.md) if your team also wants Shopify or
  QuickBooks setup guidance.
