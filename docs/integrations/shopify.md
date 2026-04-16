# Shopify

<div class="lf-integration-hero" style="--lf-integration-accent: #138a63;">
  <p class="lf-integration-hero__eyebrow">Integrations</p>
  <p class="lf-integration-hero__title">Shopify integration</p>
  <p class="lf-integration-hero__subtitle">
    Connect Shopify and Loupe Factory so storefront activity becomes usable
    operational work. This guide shows how to connect the integration, choose
    the right sync setup, and understand what data moves between both systems.
  </p>
  <div class="lf-chip-row">
    <span class="lf-chip">Two-way sync</span>
    <span class="lf-chip">Customers</span>
    <span class="lf-chip">Orders</span>
    <span class="lf-chip">Products and inventory</span>
  </div>
</div>

<div class="lf-summary-grid">
  <div class="lf-summary-card" style="--lf-integration-accent: #138a63;">
    <div class="lf-summary-card__label">Best for</div>
    <p class="lf-summary-card__value">Professional and Business plan teams that sell on Shopify and run day to day operations in Loupe Factory.</p>
  </div>
  <div class="lf-summary-card" style="--lf-integration-accent: #138a63;">
    <div class="lf-summary-card__label">Main outcome</div>
    <p class="lf-summary-card__value">Less duplicate entry between ecommerce, inventory, fulfillment, and internal follow-up.</p>
  </div>
  <div class="lf-summary-card" style="--lf-integration-accent: #138a63;">
    <div class="lf-summary-card__label">What you control</div>
    <p class="lf-summary-card__value">Manual or auto sync, import location, and when to pull or push each record type.</p>
  </div>
</div>

## Why connect Shopify to Loupe Factory

Shopify is where the sale starts. Loupe Factory is where the work behind that
sale gets organized, assigned, produced, shipped, invoiced, and tracked.

As order volume grows, the operational gap usually becomes clearer. Sales teams
see the order in Shopify, but operations teams still need accurate customer
details, line items, inventory context, fulfillment status, and follow-through
inside the system where daily work happens.

When Shopify and back office operations stay disconnected, teams often rely on
copied order details, spreadsheets, duplicated customer records, and side
channel follow-ups. The Shopify integration helps remove that extra work by
keeping orders, customers, and products aligned across both systems.

<div class="lf-guide-note" style="--lf-integration-accent: #138a63;">
  <p>
    <strong>What changes after setup:</strong> Shopify stays customer-facing,
    while Loupe Factory becomes the connected workspace where your team handles
    orders, inventory, production, shipments, and invoicing with fewer manual
    handoffs.
  </p>
</div>

## Before you begin

- Make sure your Loupe Factory account is on the **Professional** or
  **Business** plan. The Shopify integration is not available on the Starter
  plan.
- Sign in to Loupe Factory as an admin or as a user who manages integrations.
- Make sure you can approve app access in your Shopify admin.
- Decide which Loupe Factory location should receive imported Shopify inventory
  items.
- Decide whether your team wants to run syncs manually first or enable auto
  sync after testing.

<div class="lf-guide-note" style="--lf-integration-accent: #138a63;">
  <p>
    <strong>Plan requirement:</strong> the Shopify integration is available only
    on Loupe Factory <strong>Professional</strong> and
    <strong>Business</strong> plans. If your account is on the Starter plan,
    upgrade before you begin setup.
  </p>
</div>

<div class="lf-screenshot-placeholder" style="--lf-integration-accent: #138a63;">
  <p class="lf-screenshot-placeholder__label">Screenshot placeholder</p>
  <p class="lf-screenshot-placeholder__title">Shopify connection screen</p>
  <p class="lf-screenshot-placeholder__text">
    Add a screenshot here later showing the Shopify connection area in Loupe
    Factory with the connect button, store details, and sync cards.
  </p>
</div>

## Connect Shopify

1. Confirm that your Loupe Factory account is on the **Professional** or
   **Business** plan.
2. In Loupe Factory, go to **Workflows -> Integrations -> Shopify**.
3. Select **Connect Shopify**.
4. Sign in to Shopify and approve the requested access.
5. Return to Loupe Factory and confirm that the connected store details are now
   visible.

If Shopify asks you to review permissions, make sure the app can access the
customer, order, product, inventory, and location data that your team plans to
sync.

## Choose your sync settings

After the connection is active, review the settings before your first sync.

1. Open the **Import Location Settings** area.
2. Choose the Loupe Factory location where imported Shopify products and
   variants should land.
3. Keep **Manual Only** enabled for your first tests, or switch to **Auto** if
   your team is ready for scheduled sync checks.
4. Save your settings, then run a small test sync.

## Access requirements and permissions

There are two checks worth making before rollout:

1. Confirm that your Loupe Factory account is on the **Professional** or
   **Business** plan.
2. Confirm that your Shopify store and app permissions support the customer,
   order, product, and inventory data you want to sync.

For most teams, this integration is best suited to Shopify stores on **Grow**,
**Advanced**, or **Plus**. If your store is on **Basic**, review your customer
data access carefully before rollout, because some customer and order sync
workflows can be limited by Shopify app access rules.

If your team plans to sync customer details, verify Shopify's protected
customer data settings before going live.

## Recommended Shopify app scopes

When you create or review the Shopify app used with Loupe Factory, enable the
scopes that match the workflows your team wants to run.

| Workflow area | Shopify app scopes | Why it matters |
| --- | --- | --- |
| Customers | `read_customers`, `write_customers` | Keeps customer records and addresses aligned across Shopify and Loupe Factory. |
| Orders | `read_orders`, `read_draft_orders`, `write_draft_orders` | Lets your team pull Shopify orders into Loupe Factory and push sales orders back as draft orders when needed. |
| Products | `read_products`, `write_products` | Keeps storefront product data and internal product records aligned. |
| Inventory and locations | `read_inventory`, `write_inventory`, `read_locations` | Supports quantity updates, inventory-aware workflows, and location-based sync behavior. |
| Historical orders, if needed | `read_all_orders` | Helps with older order imports when your Shopify setup allows it. |

## What syncs between Shopify and Loupe Factory

| Area | Pull into Loupe Factory | Push from Loupe Factory |
| --- | --- | --- |
| Customers | Customer profiles, company details, email, phone, and addresses | Customer profile and address updates |
| Orders | Shopify orders with customer, status, payment status, notes, and line items | Loupe Factory sales orders as Shopify draft orders |
| Products and inventory | Products, variants, SKU or tag, quantity, weight, and prices | Product updates, finished inventory variants, and quantity updates |

## Shopify to Loupe Factory mapping

### Customers

| Shopify | Loupe Factory |
| --- | --- |
| Customer name | Customer name |
| Company | Company name |
| Email | Email |
| Phone | Phone number |
| Default address | Address details |
| Country and ZIP or postal code | Country and ZIP or postal code |

### Orders

| Shopify | Loupe Factory |
| --- | --- |
| Order | Sales order |
| Customer | Linked customer |
| Order status | Order status |
| Payment status | Payment status |
| Currency | Currency |
| Order note | Notes |
| Line items, quantities, and product details | Order line items |

### Products and inventory

| Shopify | Loupe Factory |
| --- | --- |
| Product | Product |
| Variant | Finished inventory item |
| SKU | Tag ID, when available |
| Price | Sell price |
| Quantity | Quantity |
| Weight and weight unit | Weight and weight unit |

## Why two-way sync matters

One-way imports can reduce some manual work, but growing teams usually need
more than a one-direction feed. Two-way sync helps Shopify and Loupe Factory
stay aligned as work moves between sales, operations, fulfillment, and customer
follow-through.

That matters because teams spend less time asking which record is current. It
also reduces stale updates, duplicate edits, and avoidable mistakes caused by
one system telling a different story than the other.

## Recommended first sync

Use this order for a cleaner first rollout:

1. **Pull Customers** so account records exist before orders arrive.
2. **Pull Orders** so storefront activity appears inside Loupe Factory.
3. **Pull Products & Inventory** so catalog and stock details are aligned.
4. Review a few imported records in each area before you turn on auto sync.

## Good to know

- Shopify orders pulled into Loupe Factory help operations start work faster
  because order details do not need to be copied by hand.
- Sales orders pushed from Loupe Factory are created in Shopify as **draft
  orders**.
- If your team enables auto sync, review the first scheduled run before relying
  on it for daily work.
- Start with a small sample of customers, orders, and products before syncing a
  large catalog.

## Best fit

This integration is a strong fit for manufacturers, wholesalers, makers, and
product businesses that use Shopify to sell but need Loupe Factory to manage
the work behind the sale.

If your team still relies on manual handoffs to move orders into production,
inventory review, fulfillment, invoicing, or customer follow-through, Shopify
sync can become a meaningful operational upgrade.

<div class="lf-screenshot-placeholder" style="--lf-integration-accent: #138a63;">
  <p class="lf-screenshot-placeholder__label">Screenshot placeholder</p>
  <p class="lf-screenshot-placeholder__title">Shopify sync settings and actions</p>
  <p class="lf-screenshot-placeholder__text">
    Add a screenshot here later showing the import location setting, manual or
    auto sync toggle, and the pull and push actions for Customers, Orders, and
    Products & Inventory.
  </p>
</div>

## Next steps

- Review [Order Management](../platform-guide/order-management.md) to see how
  synced order data is used inside Loupe Factory.
- Review [Inventory Management](../platform-guide/inventory-management.md) if
  your team will sync products and stock.
- Return to [Integrations](index.md) if you also plan to connect accounting or
  bank statement workflows.
