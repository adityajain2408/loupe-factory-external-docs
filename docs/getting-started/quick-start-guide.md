# Quick Start Guide

This guide walks you through the four essential steps to get up and running with Loupe Factory: creating your account, adding your first inventory item, setting up a production process, and placing your first order. By the end, you'll have a working foundation to manage **manufacturing and wholesale** operations.

## Step 1: Create Your Account

If you haven't signed up yet, head to [app.loupefactory.com](https://app.loupefactory.com) and click **Get Started**.

1. Enter your work email address and choose a password, or sign in with Google, Microsoft, or your organization's SSO provider.
2. Verify your email using the confirmation link sent to your inbox.
3. Complete the onboarding flow to create your organization — enter your organization name, industry, default currency, and timezone.

!!! info "Screenshot: Account Creation Flow"
    A screenshot will be added here showing the sign-up form and the initial organization setup screen.

    **Suggested image**: `assets/quick-start-account-creation.png`

Once your organization is created, you'll land on the main dashboard. If you already have an account, log in at [app.loupefactory.com](https://app.loupefactory.com) and continue to Step 2.

For a more detailed walkthrough of account setup and authentication options, see [Account Setup](account-setup.md).

## Step 2: Add Your First Inventory Entry

Inventory is the foundation of LoupeFactory. Before you can track production or fulfill orders, you need items in your inventory.

1. From the dashboard, navigate to **Inventory** in the left sidebar.
2. Click **Add Item** in the top-right corner.
3. Fill in the item details:
    - **Name** — a clear, descriptive name (e.g., "Round Diamond 1ct").
    - **SKU** — a unique identifier for the item.
    - **Category** — group items by type (e.g., Raw Materials, Finished Goods).
    - **Unit** — the unit of measure (e.g., pcs, grams, carats).
    - **Quantity** — the current stock on hand.
    - **Unit cost** — the cost per unit for valuation and reporting.
4. Click **Save** to add the item to your inventory.

!!! info "Screenshot: Add Inventory Item Form"
    A screenshot will be added here showing the Add Item form with the name, SKU, category, unit, quantity, and unit cost fields filled in.

    **Suggested image**: `assets/quick-start-add-inventory-item.png`

Your item now appears in the inventory list. You can add more items, import in bulk via CSV, or organize items into categories at any time.

For full inventory management capabilities, see [Inventory Management](../platform-guide/inventory-management.md).

## Step 3: Create a Production Process

A production process defines how raw materials are transformed into finished goods. LoupeFactory supports multi-stage processes so you can track inputs, outputs, and waste at each step.

1. Navigate to **Production** in the left sidebar.
2. Click **New Process** to open the process builder.
3. Enter a **Process Name** (e.g., "Diamond Cutting & Polishing").
4. Add stages to the process:
    - Click **Add Stage** and give the stage a name (e.g., "Cutting").
    - For each stage, specify the **input materials** from your inventory and the expected **output items**.
    - Optionally set expected **waste**, **rejection**, and **scrap** percentages for the stage.
5. Repeat for each stage in your workflow.
6. Click **Save Process** when done.

!!! info "Screenshot: Production Process Builder"
    A screenshot will be added here showing the process builder with multiple stages, input/output fields, and waste percentage settings.

    **Suggested image**: `assets/quick-start-production-process.png`

Once saved, you can start a production run against this process to track real-time progress and material consumption.

For detailed guidance on managing production runs and recording stage outcomes, see [Production Tracking](../platform-guide/production-tracking.md).

## Step 4: Place Your First Order

With inventory stocked and a production process defined, you're ready to create a customer order.

1. Navigate to **Orders** in the left sidebar.
2. Click **New Order**.
3. Select or create a **Customer** — enter the customer's name, contact details, and billing address.
4. Add line items to the order:
    - Search for items from your inventory.
    - Set the **quantity** and **unit price** for each line item.
5. Set the **order date** and an optional **expected delivery date**.
6. Review the order summary and click **Place Order**.

!!! info "Screenshot: New Order Form"
    A screenshot will be added here showing the new order form with a customer selected, line items added, and the order summary panel.

    **Suggested image**: `assets/quick-start-new-order.png`

Your order is now created and visible in the Orders list. From there you can track its status, generate an invoice, and create a shipment once the order is ready to dispatch.

!!! info "Screenshot: Order Confirmation"
    A screenshot will be added here showing the order detail page after the order has been placed, with the status set to "Confirmed".

    **Suggested image**: `assets/quick-start-order-confirmation.png`

For more on managing orders through fulfillment, see [Order Management](../platform-guide/order-management.md).

## Next Steps

- [Dashboard Overview](dashboard-overview.md) — learn how to read key metrics and navigate the platform.
- [Inventory Management](../platform-guide/inventory-management.md) — bulk import items, manage categories, and set reorder alerts.
- [Production Tracking](../platform-guide/production-tracking.md) — start a production run and record stage-by-stage outcomes.
- [Order Management](../platform-guide/order-management.md) — track orders from creation through fulfillment and invoicing.
