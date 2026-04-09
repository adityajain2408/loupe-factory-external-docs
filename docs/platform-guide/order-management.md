# Order Management

LoupeFactory's order management module lets you create, track, and fulfill customer orders from a single place. This guide covers the full order lifecycle — from placing a new order to marking it as fulfilled and linking it to invoices and shipments.

## Creating an Order

To create a new customer order:

1. Navigate to the **Orders** module from the main dashboard.
2. Click **New Order** in the top-right corner.
3. Select the customer from the **Customer** dropdown, or add a new customer inline.
4. Add line items by searching for inventory items and entering quantities.
5. Set the order date and any required delivery date.
6. Add notes or special instructions in the **Notes** field if needed.
7. Click **Save Order** to create the order with a status of **Draft**.

!!! info "Screenshot: New Order Form"
    A screenshot will be added here showing the New Order form with the customer selector, line item table, and date fields.

    **Suggested image**: `assets/order-new-order-form.png`

Once saved, the order is assigned a unique order number and appears in your order list.

!!! tip
    You can save an order as a **Draft** while you finalize details. Drafts do not affect inventory allocation until the order is confirmed.

## Confirming an Order

After reviewing a draft order, confirm it to lock in the details and allocate inventory:

1. Open the order from the order list.
2. Review all line items, quantities, and customer details.
3. Click **Confirm Order**.

The order status changes to **Confirmed** and the reserved quantities are reflected in your [Inventory](inventory-management.md) module.

!!! info "Screenshot: Order Confirmation Screen"
    A screenshot will be added here showing an order in Draft status with the Confirm Order button highlighted.

    **Suggested image**: `assets/order-confirm-order.png`

## Tracking Order Status

Each order moves through a defined set of statuses as it progresses:

| Status | Description |
|--------|-------------|
| **Draft** | Order created but not yet confirmed |
| **Confirmed** | Order confirmed and inventory reserved |
| **In Production** | Items are being produced or prepared |
| **Ready to Ship** | Items are packed and awaiting shipment |
| **Shipped** | A shipment has been created and dispatched |
| **Fulfilled** | Order delivered and complete |
| **Cancelled** | Order cancelled before fulfillment |

You can filter the order list by status to focus on orders that need attention.

!!! info "Screenshot: Order List with Status Filters"
    A screenshot will be added here showing the order list with the status filter dropdown open and several orders in different states.

    **Suggested image**: `assets/order-list-status-filters.png`

### Viewing Order Details

Click any order in the list to open its detail view. The detail page shows:

- Customer information and order number
- Line items with quantities, unit prices, and totals
- Current status and status history timeline
- Linked invoices and shipments
- Any notes or attachments

!!! info "Screenshot: Order Detail View"
    A screenshot will be added here showing the full order detail page including the status timeline, line items table, and linked invoice and shipment sections.

    **Suggested image**: `assets/order-detail-view.png`

## Fulfilling an Order

Fulfillment involves preparing items, creating a shipment, and marking the order complete.

### Marking Items as Ready

Once production or preparation is complete:

1. Open the order detail page.
2. Click **Mark as Ready to Ship**.
3. Confirm that all line items are prepared and quantities are correct.

The order status updates to **Ready to Ship**.

!!! info "Screenshot: Ready to Ship Confirmation"
    A screenshot will be added here showing the Mark as Ready to Ship dialog with a checklist of line items.

    **Suggested image**: `assets/order-ready-to-ship.png`

### Creating a Shipment

From the order detail page, you can create a shipment directly:

1. Click **Create Shipment** on the order detail page.
2. Enter the shipping address and select a carrier.
3. Add package dimensions and weight if required.
4. Click **Create** to generate a tracking number via the EasyPost integration.

The order status automatically updates to **Shipped** once the shipment is created. See [Shipment Tracking](shipment-tracking.md) for more details on managing shipments.

!!! info "Screenshot: Create Shipment from Order"
    A screenshot will be added here showing the Create Shipment panel on the order detail page with carrier selection and package details fields.

    **Suggested image**: `assets/order-create-shipment.png`

### Marking an Order as Fulfilled

Once the shipment is delivered, mark the order as fulfilled:

1. Open the order detail page.
2. Click **Mark as Fulfilled**.
3. Confirm the action in the dialog.

The order status changes to **Fulfilled** and the order is archived in your completed orders history.

!!! info "Screenshot: Mark as Fulfilled Dialog"
    A screenshot will be added here showing the Mark as Fulfilled confirmation dialog on a Shipped order.

    **Suggested image**: `assets/order-mark-fulfilled.png`

## Cancelling an Order

To cancel an order before it is fulfilled:

1. Open the order detail page.
2. Click **Cancel Order**.
3. Select a cancellation reason and confirm.

Cancelling a confirmed order releases any reserved inventory back to available stock.

!!! warning
    Orders with an active shipment cannot be cancelled directly. Contact your shipping carrier to arrange a return before cancelling the order in LoupeFactory.

!!! info "Screenshot: Cancel Order Dialog"
    A screenshot will be added here showing the Cancel Order dialog with the reason dropdown and confirmation button.

    **Suggested image**: `assets/order-cancel-dialog.png`

## Next Steps

- [Invoicing](invoicing.md) — Generate and send invoices linked to your confirmed orders.
- [Shipment Tracking](shipment-tracking.md) — Track packages and view delivery status for shipped orders.
- [Inventory Management](inventory-management.md) — Understand how order confirmation affects inventory allocation.
- [Reporting & Analytics](reporting-analytics.md) — View order reports and export order data.
