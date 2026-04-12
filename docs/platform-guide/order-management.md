# Order Management

Loupe Factory supports both **sales orders** and **purchase orders** with a
guided creation flow that turns commercial notes into structured requested
products your team can review before saving.

## Create a Sales Order

To create a sales order:

1. Go to **Orders** > **Sales Orders**.
2. Click **Add new sales order**.
3. In the first step, select the **customer** and the internal **order lead**.
4. Add clear **notes** that describe what the customer needs.
5. On **Requested Products**, review the AI-prepared line items and correct any
   quantities, sizes, weights, or descriptions before saving.
6. On **Order Details**, complete the timing fields such as **date required**
   and the order deadline used by your team.
7. If your role allows it, confirm optional commercial values such as
   **currency** and **internal budget**.
8. Accept the terms and submit the order.

!!! info "Screenshot Placeholder"
    Add a screenshot of the sales order creation wizard showing the customer,
    order lead, notes field, requested products review table, and order detail
    step.

## Create a Purchase Order

To create a purchase order:

1. Go to **Orders** > **Purchase Orders**.
2. Click **Add new purchase order**.
3. Select the **supplier** and the internal **order lead**.
4. Add clear **notes** describing what should be purchased.
5. Review the AI-prepared **requested products** and adjust them where needed.
6. Complete the timing and commercial details, including **currency**,
   optional **internal budget**, and required dates.
7. Accept the terms and submit the order.

!!! info "Screenshot Placeholder"
    Add a screenshot of the purchase order creation wizard showing the supplier
    selection, notes field, requested products review, and order details step.

## Writing Better Notes for AI Product Extraction

You will get the best requested-products review table when your notes are
specific. Include useful details such as:

- product names
- requested quantities
- sizes or dimensions
- weight expectations
- material or quality notes
- delivery priorities

The AI review step is there to save time, but your team should always validate
the final requested products before submitting the order.

!!! info "Screenshot Placeholder"
    Add a screenshot of the AI-prepared requested products table after notes are
    processed, including an example row that can be reviewed before saving.

## Tracking Order Status

The order details page gives your team several ways to understand progress at a
glance.

### What you can monitor on the order page

At the top of the order page, Loupe Factory shows:

- **line-item status summary chips** such as **Not Started**, **In Progress**,
  **Ready**, **Shipped**, **Cancelled**, **Backordered**, **Returned**, and
  **Partially Returned**
- the order-level **Fulfillment** status chip
- the order-level **Payment Status**

Inside the line-items table, Loupe Factory also shows:

- each line item's own **status**
- linked **production progress**
- **fulfilled quantity**
- **shipped quantity**
- **shipment status**

The activity area below the table can also show:

- linked production jobs
- shipments and tracking progress
- inventory selections tied to the order

### How fulfillment status changes

Loupe Factory updates the order's fulfillment status from the combination of
line-item statuses and shipment activity. In practice, the order can move
through statuses such as:

- **Not Started**
- **In Production**
- **Ready to Ship**
- **Partially Shipped**
- **Shipped**
- **Completed**
- **On Hold**
- **Cancelled**
- **Partially Returned**
- **All Returned**

This means the order header becomes a reliable summary for sales, operations,
warehouse, and customer-service teams without requiring them to inspect every
line manually.

!!! info "Screenshot Placeholder"
    Add a screenshot of the order details header showing the line-item status
    chips, fulfillment chip, payment status, and the line-items table with
    status-related columns visible.

## Fulfilling an Order

For **sales orders**, the main operational fulfillment flow happens on the
order details page through **Select Inventory** and **Manage Shipment**.

For **purchase orders**, the equivalent operational step is typically
**Receive Inventory**, because stock is coming in rather than being shipped out.

### Selecting Inventory

Use **Select Inventory** when you want to reserve or retrieve stock for sales
order line items before shipment.

1. Open the order details page.
2. Select one or more line items from the table, or open a single line item's
   row action menu and choose **Select Inventory**.
3. In the modal, review the line-item card for each selected row.
4. Choose one or more inventory records for that line item.
5. Enter the exact **selection quantities** for each chosen inventory item, or
   use **Full** when the full available amount should be selected.
6. Repeat for each line item in the modal.
7. Submit **Select Inventory**.

When you save, Loupe Factory associates those inventory records with the order
line items and deducts stock from the selected inventory items.

!!! info "Screenshot Placeholder"
    Add a screenshot of the **Select Inventory** modal showing one line-item
    card, the inventory lookup table, and the per-inventory quantity controls.

### Marking Items as Ready

Inside the **Select Inventory** flow, each line item includes a checkbox to
**Mark this line item as "Ready"**.

Use that option when the inventory for that line has already been properly
assigned and the item is operationally ready for the next fulfilment step.

In practice:

1. Select the inventory for the line item.
2. Turn on the **Mark this line item as "Ready"** checkbox when appropriate.
3. Submit the inventory selection.

If all active line items are now in **Ready** or **Production Completed**
status, the order's fulfillment chip can move to **Ready to Ship**.

!!! info "Screenshot Placeholder"
    Add a screenshot of a line-item card in the **Select Inventory** modal with
    the **Mark this line item as "Ready"** checkbox visible.

### Creating a Shipment

Use **Manage Shipment** or **Create Shipment** when stock is ready to leave your
business.

1. Open the order details page.
2. Select the relevant line items from the table, or use a line item's row
   action menu and choose **Manage Shipment**.
3. In the shipment modal, select the **carrier**.
4. Enter the **tracking number**.
5. For each line item, review the shipment card:
   - If inventory was already retrieved earlier, Loupe Factory can show the
     pre-retrieved inventory as ready to ship.
   - If inventory was not pre-retrieved, choose the inventory to ship and
     enter the exact ship quantities for each selected inventory item.
6. Submit **Create Shipment**.

After shipment creation, Loupe Factory updates shipped quantities, shipment
statuses, and shipment activity on the order page.

!!! info "Screenshot Placeholder"
    Add a screenshot of the **Create Shipment** modal showing carrier,
    tracking number, and one shipment line card with inventory and ship
    quantity controls.

### Marking an Order as Fulfilled

On the order details page, Loupe Factory does not rely on a separate manual
"mark fulfilled" action for the overall order. Instead, the order-level
fulfillment status updates from the real workflow.

In practice:

- line items move through statuses such as **Ready**, **Partially Shipped**, and
  **Shipped**
- shipment cards and shipment-status badges show whether shipments are
  **Pending**, **In Transit**, **Out for Delivery**, **Delivered**,
  **Exception**, or **Cancelled**
- the order becomes **Completed** when all active line items are shipped and
  all linked shipments are delivered

This keeps the order's top-level status aligned with actual shipping and
delivery progress.

!!! info "Screenshot Placeholder"
    Add a screenshot of the order details page showing the fulfillment chip,
    shipment timeline entries, and delivered shipment status badges.

## Cancelling an Order

On the order details page, cancellation is usually handled at the **line-item**
level, which is helpful when only part of an order should stop moving forward.

### Cancel selected line items

1. Open the order details page.
2. Select one or more line items from the table.
3. Click **Cancel selected**.
4. Review the confirmation modal.
5. Confirm **Cancel items**.

The selected lines are marked as **Cancelled**, and Loupe Factory recalculates
the order's overall fulfillment status after the change.

### Remove the full order

If the entire order should be removed permanently, use **Actions** >
**Remove**.

!!! warning
    **Remove** is a permanent delete action. It deletes the order and its
    associated line items, tasks, and shipments. Use it only when you truly
    want the record removed, not when you only need to stop part of the order.

!!! info "Screenshot Placeholder"
    Add a screenshot of the **Cancel selected line items** confirmation modal,
    and optionally a second screenshot of the **Actions > Remove** delete
    dialog for the full order record.

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

$$
\text{Order Progress Base} = \sum \text{Job Progress Base}
$$

$$
\text{Order Completed \%} = \frac{\sum \text{Received}}{\sum \text{Job Progress Base}} \times 100
$$

$$
\text{Order Pending \%} = \frac{\sum \text{Pending}}{\sum \text{Job Progress Base}} \times 100
$$

$$
\text{Order Rejected \%} = \frac{\sum \text{Rejected}}{\sum \text{Job Progress Base}} \times 100
$$

$$
\text{Order Scrapped \%} = \frac{\sum \text{Scrapped}}{\sum \text{Job Progress Base}} \times 100
$$

$$
\text{Order Wasted \%} = \frac{\sum \text{Waste}}{\sum \text{Job Progress Base}} \times 100
$$

This gives sales, production, and customer-service teams one shared progress
view without forcing them to inspect each production job separately.

### Final output weight

For the order-wide efficiency card, Loupe Factory first determines the
**Final Output Weight**. To do this, it finds the most recently received
production stage on the order and then sums the measured output from that same
stage across all related jobs.

$$
\text{Final Output Weight} =
\sum_{\text{jobs in the final received stage}}
(\text{Received} + \text{Rejected})
$$

This treats the final stage as the order's last real production checkpoint.

### Net input weight

Loupe Factory then calculates the **Net Input Weight** across the full order:

$$
\text{Net Input Weight} =
\sum \text{Issued}
+ \text{Final Output Weight}
- \sum (\text{Received} + \text{Rejected})
$$

In practical terms, this represents the net material still consumed by the full
production chain after intermediate stage outputs are backed out and the final
stage output is added back in once.

### Order-level efficiency metrics

After those two weights are established, Loupe Factory calculates the order's
top-line efficiency metrics. Before doing so, it normalizes all linked
production-job weights into your organization's default weight unit, so the
order is measured consistently even when different jobs were recorded in
different units.

$$
\text{Output Percentage} = \frac{\text{Final Output Weight}}{\text{Net Input Weight}} \times 100
$$

**Output %** shows how much of the order's net material input became final-stage
output.

$$
\text{Gross Waste Percentage} = \frac{\text{Total Waste} + \text{Total Scrap}}{\text{Net Input Weight}} \times 100
$$

**Gross Waste %** captures the total material loss across the order, including
tracked scrap.

$$
\text{Net Waste Percentage} = \frac{\text{Total Waste}}{\text{Net Input Weight}} \times 100
$$

**Net Waste %** is the order-level **loss waste** figure. It isolates true
unrecoverable loss and excludes scrap that is still separately tracked.

$$
\text{Consumption Percentage} = \frac{\text{Total Waste} + \text{Total Scrap}}{\text{Final Output Weight}} \times 100
$$

**Consumption %** shows how much material was lost for each unit of final
output produced. Lower values indicate a more efficient production chain.

!!! tip "How to read the order metrics"
    - **Higher Output %** is better
    - **Lower Gross Waste %** is better
    - **Lower Net Waste %** means lower true loss
    - **Lower Consumption %** means the order used material more efficiently

!!! info "Screenshot Placeholder"
    Add a screenshot of the order details production summary showing the order
    progress view and the efficiency metrics together.

## After the Order Is Created

Once saved, the order becomes the commercial and operational record your team
can use for:

- production planning
- purchasing follow-up
- inventory selection
- shipment preparation
- invoicing
- customer or supplier communication

!!! info "Screenshot Placeholder"
    Add a screenshot of the full order details page showing the order header,
    line-items table, and activity area together.

## Next Steps

- [Customer & Supplier Management](customer-supplier-management.md): Keep the
  contacts behind your orders accurate and usable.
- [Production Tracking](production-tracking.md): Turn order demand into
  production jobs and track output back to the order.
- [Shipment Tracking](shipment-tracking.md): Manage dispatch and tracking once
  an order is ready to ship.
- [Invoicing](invoicing.md): Generate invoices from the commercial work already
  recorded on the order.
