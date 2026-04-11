# Order Management

LoupeFactory's order management module lets you create, track, and fulfill
customer orders from a single place. This guide covers the full order lifecycle, from placing a new order through marking it as fulfilled and linking it to invoices and shipments.

## Creating an Order

To create a new customer order:

1. Navigate to the **Orders** module from the main dashboard.
2. Click **New Order** in the top-right corner.
3. Select the customer from the **Customer** dropdown, or add a new customer
   inline.
4. Add line items by searching for inventory items and entering quantities.
5. Set the order date and any required delivery date.
6. Add notes or special instructions in the **Notes** field if needed.
7. Click **Save Order** to create the order with a status of **Draft**.

!!! info "Screenshot: New Order Form"
    A screenshot will be added here showing the New Order form with the customer
    selector, line item table, and date fields.

    **Suggested image**: `assets/order-new-order-form.png`

Once saved, the order is assigned a unique order number and appears in your
order list.

!!! tip
    You can save an order as a **Draft** while you finalize details. Drafts do
    not affect inventory allocation until the order is confirmed.

## Confirming an Order

After reviewing a draft order, confirm it to lock in the details and allocate
inventory:

1. Open the order from the order list.
2. Review all line items, quantities, and customer details.
3. Click **Confirm Order**.

The order status changes to **Confirmed** and the reserved quantities are
reflected in your [Inventory](inventory-management.md) module.

!!! info "Screenshot: Order Confirmation Screen"
    A screenshot will be added here showing an order in Draft status with the
    Confirm Order button highlighted.

    **Suggested image**: `assets/order-confirm-order.png`

## Tracking Order Status

Each order moves through a defined set of statuses as it progresses:

| Status | Description |
| --- | --- |
| **Draft** | Order created but not yet confirmed |
| **Confirmed** | Order confirmed and inventory reserved |
| **In Production** | Items are being produced or prepared |
| **Ready to Ship** | Items are packed and awaiting shipment |
| **Shipped** | A shipment has been created and dispatched |
| **Fulfilled** | Order delivered and complete |
| **Cancelled** | Order cancelled before fulfillment |

You can filter the order list by status to focus on orders that need attention.

!!! info "Screenshot: Order List with Status Filters"
    A screenshot will be added here showing the order list with the status
    filter dropdown open and several orders in different states.

    **Suggested image**: `assets/order-list-status-filters.png`

### Viewing Order Details

Click any order in the list to open its detail view. The detail page shows:

- Customer information and order number
- Line items with quantities, unit prices, and totals
- Current status and status history timeline
- Linked invoices and shipments
- Any notes or attachments

!!! info "Screenshot: Order Detail View"
    A screenshot will be added here showing the full order detail page including
    the status timeline, line items table, and linked invoice and shipment
    sections.

    **Suggested image**: `assets/order-detail-view.png`

## How Loupe Factory Calculates Production Metrics on an Order

When an order has linked production jobs, Loupe Factory shows production
numbers in two layers:

1. **Job-level progress** on timeline cards, which follows the same logic as
   [Production Tracking](production-tracking.md#how-loupe-factory-calculates-job-progress-and-efficiency)
2. **Order-level efficiency** on the order details production summary, which
   looks across the full production chain for that order

### Order progress bar

The order progress bar combines all linked production jobs into one operating
view. Loupe Factory adds together each job's progress base and each recorded
weight bucket:

\[
\text{Order Progress Base} = \sum \text{Job Progress Base}
\]

\[
\text{Order Completed \%} = \frac{\sum \text{Received}}{\sum \text{Job Progress Base}} \times 100
\]

\[
\text{Order Pending \%} = \frac{\sum \text{Pending}}{\sum \text{Job Progress Base}} \times 100
\]

\[
\text{Order Rejected \%} = \frac{\sum \text{Rejected}}{\sum \text{Job Progress Base}} \times 100
\]

\[
\text{Order Scrapped \%} = \frac{\sum \text{Scrapped}}{\sum \text{Job Progress Base}} \times 100
\]

\[
\text{Order Wasted \%} = \frac{\sum \text{Waste}}{\sum \text{Job Progress Base}} \times 100
\]

This gives sales, production, and customer-service teams one shared progress
view without forcing them to inspect each production job separately.

### Final output weight

For the order-wide efficiency card, Loupe Factory first determines the
**Final Output Weight**. To do this, it finds the most recently received
production stage on the order and then sums the measured output from that same
stage across all related jobs.

\[
\text{Final Output Weight} =
\sum_{\text{jobs in the final received stage}}
(\text{Received} + \text{Rejected})
\]

This treats the final stage as the order's last real production checkpoint.

### Net input weight

Loupe Factory then calculates the **Net Input Weight** across the full order:

\[
\text{Net Input Weight} =
\sum \text{Issued}
+ \text{Final Output Weight}
- \sum (\text{Received} + \text{Rejected})
\]

In practical terms, this represents the net material still consumed by the full
production chain after intermediate stage outputs are backed out and the final
stage output is added back in once.

### Order-level efficiency metrics

After those two weights are established, Loupe Factory calculates the order's
top-line efficiency metrics. Before doing so, it normalizes all linked
production-job weights into your organization's default weight unit, so the
order is measured consistently even when different jobs were recorded in
different units.

\[
\text{Output \%} = \frac{\text{Final Output Weight}}{\text{Net Input Weight}} \times 100
\]

**Output %** shows how much of the order's net material input became final-stage
output.

\[
\text{Gross Waste \%} = \frac{\text{Total Waste} + \text{Total Scrap}}{\text{Net Input Weight}} \times 100
\]

**Gross Waste %** captures the total material loss across the order, including
tracked scrap.

\[
\text{Net Waste \%} = \frac{\text{Total Waste}}{\text{Net Input Weight}} \times 100
\]

**Net Waste %** is the order-level **loss waste** figure. It isolates true
unrecoverable loss and excludes scrap that is still separately tracked.

\[
\text{Consumption \%} = \frac{\text{Total Waste} + \text{Total Scrap}}{\text{Final Output Weight}} \times 100
\]

**Consumption %** shows how much material was lost for each unit of final
output produced. Lower values indicate a more efficient production chain.

!!! tip "How to read the order metrics"
    - **Higher Output %** is better
    - **Lower Gross Waste %** is better
    - **Lower Net Waste %** means lower true loss
    - **Lower Consumption %** means the order used material more efficiently

## Fulfilling an Order

Fulfillment involves preparing items, creating a shipment, and marking the order
complete.

### Marking Items as Ready

Once production or preparation is complete:

1. Open the order detail page.
2. Click **Mark as Ready to Ship**.
3. Confirm that all line items are prepared and quantities are correct.

The order status updates to **Ready to Ship**.

!!! info "Screenshot: Ready to Ship Confirmation"
    A screenshot will be added here showing the Mark as Ready to Ship dialog
    with a checklist of line items.

    **Suggested image**: `assets/order-ready-to-ship.png`

### Creating a Shipment

From the order detail page, you can create a shipment directly:

1. Click **Create Shipment** on the order detail page.
2. Enter the shipping address and select a carrier.
3. Add package dimensions and weight if required.
4. Click **Create** to generate a tracking number and label.

The order status automatically updates to **Shipped** once the shipment is
created. See [Shipment Tracking](shipment-tracking.md) for more details on
managing shipments.

!!! info "Screenshot: Create Shipment from Order"
    A screenshot will be added here showing the Create Shipment panel on the
    order detail page with carrier selection and package details fields.

    **Suggested image**: `assets/order-create-shipment.png`

### Marking an Order as Fulfilled

Once the shipment is delivered, mark the order as fulfilled:

1. Open the order detail page.
2. Click **Mark as Fulfilled**.
3. Confirm the action in the dialog.

The order status changes to **Fulfilled** and the order is archived in your
completed orders history.

!!! info "Screenshot: Mark as Fulfilled Dialog"
    A screenshot will be added here showing the Mark as Fulfilled confirmation
    dialog on a Shipped order.

    **Suggested image**: `assets/order-mark-fulfilled.png`

## Cancelling an Order

To cancel an order before it is fulfilled:

1. Open the order detail page.
2. Click **Cancel Order**.
3. Select a cancellation reason and confirm.

Cancelling a confirmed order releases any reserved inventory back to available
stock.

!!! warning
    Orders with an active shipment cannot be cancelled directly. Contact your
    shipping carrier to arrange a return before cancelling the order in
    LoupeFactory.

!!! info "Screenshot: Cancel Order Dialog"
    A screenshot will be added here showing the Cancel Order dialog with the
    reason dropdown and confirmation button.

    **Suggested image**: `assets/order-cancel-dialog.png`

## Next Steps

- [Invoicing](invoicing.md): Generate and send invoices linked to your
  confirmed orders.
- [Shipment Tracking](shipment-tracking.md): Track packages and view delivery
  status for shipped orders.
- [Inventory Management](inventory-management.md): Understand how order
  confirmation affects inventory allocation.
- [Reporting & Analytics](reporting-analytics.md): View order reports and
  export order data.
