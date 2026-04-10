# Shipment Tracking

Loupe Factory connects your orders and warehouse to major carriers so you can
buy labels, track packages, and see delivery status in one place. This guide
covers how to create shipments, connect them to orders, and monitor delivery
progress from within the platform.

## Creating a Shipment

You can create a shipment directly from an order or from the Shipments module.

### From an Order

The most common workflow is to create a shipment from a confirmed order:

1. Navigate to the **Orders** module and open the order you want to ship.
2. Click **Create Shipment** on the order detail page.
3. Verify or update the **Ship To** address.
4. Select a **Carrier** (e.g., UPS, FedEx, USPS) from the dropdown.
5. Enter the package **weight** and **dimensions**.
6. Click **Create Shipment**.

Loupe Factory submits the shipment details to your connected carriers and
returns a tracking number and shipping label.

!!! info "Screenshot: Create Shipment Panel"
    A screenshot will be added here showing the Create Shipment panel on the
    order detail page, including the carrier selector, address fields, and
    package dimensions form.

    **Suggested image**: `assets/shipment-create-panel.png`

### From the Shipments Module

You can also create a standalone shipment not tied to a specific order:

1. Navigate to **Shipments** from the main dashboard.
2. Click **New Shipment** in the top-right corner.
3. Fill in the recipient address, carrier, and package details.
4. Optionally link the shipment to an existing order using the **Order** field.
5. Click **Create Shipment** to generate the tracking number and label.

!!! info "Screenshot: New Shipment Form"
    A screenshot will be added here showing the standalone New Shipment form
    with all fields visible, including the optional Order link field.

    **Suggested image**: `assets/shipment-new-form.png`

## How shipping works in Loupe Factory

When you create a shipment, the platform validates addresses, retrieves
available carrier services and rates, and purchases the label you confirm. A
tracking number is stored on the shipment record, and status updates are synced
as the carrier scans the package.

### Rate selection

You can compare services (for example, ground versus express) and delivery
estimates before purchasing a label. Your administrator controls which carriers
and service levels are enabled for your organization.

!!! info "Screenshot: Carrier rates"
    A screenshot will be added here showing the carrier rate comparison view
    with available services and estimated delivery times.

    **Suggested image**: `assets/shipment-carrier-rates.png`

### Supported shipping carriers

Commonly used shipping carriers in Loupe Factory include:

| Carrier | Domestic | International |
| --- | --- | --- |
| UPS | Yes | Yes |
| FedEx | Yes | Yes |
| USPS | Yes | Limited |
| DHL | No | Yes |

Contact your Loupe Factory administrator to configure which carriers are
available in your account.

### Downloading shipping labels

After a shipment is created, you can download the shipping label directly from
the shipment detail page:

1. Open the shipment from the **Shipments** list.
2. Click **Download Label** to save the label as a PDF.
3. Print and attach the label to your package.

!!! info "Screenshot: Shipment Detail with Label Download"
    A screenshot will be added here showing the shipment detail page with the
    Download Label button and the tracking number displayed.

    **Suggested image**: `assets/shipment-detail-label.png`

## Tracking packages

Once a shipment is created and the package is in transit, Loupe Factory keeps
the tracking timeline up to date from carrier data.

### Viewing tracking status

To view the current status of a shipment:

1. Navigate to **Shipments** from the main dashboard.
2. Find the shipment in the list: the current status is shown in the **Status**
   column.
3. Click the shipment to open the detail view and see the full tracking
   timeline.

!!! info "Screenshot: Shipment List with Status"
    A screenshot will be added here showing the Shipments list with the status
    column, tracking number column, and carrier icons visible.

    **Suggested image**: `assets/shipment-list-status.png`

### Delivery status values

Each shipment moves through the following statuses as it progresses:

| Status | Description |
| --- | --- |
| **Label Created** | Shipping label generated; package not yet picked up |
| **In Transit** | Package picked up and moving through the carrier network |
| **Out for Delivery** | Package is on the delivery vehicle |
| **Delivered** | Package confirmed delivered |
| **Exception** | Carrier reported an issue (e.g., address problem, failed delivery attempt) |
| **Returned** | Package returned to sender |

!!! info "Screenshot: Tracking Timeline"
    A screenshot will be added here showing the tracking timeline on a shipment
    detail page, with each status event listed in chronological order including
    timestamps and carrier scan locations.

    **Suggested image**: `assets/shipment-tracking-timeline.png`

### Handling delivery exceptions

If a shipment enters **Exception** status, Loupe Factory displays an alert on
the shipment detail page with the carrier's exception message. Common causes
include:

- Incorrect or incomplete delivery address
- Recipient unavailable for signature
- Package refused by recipient
- Customs hold (for international shipments)

To resolve an exception:

1. Open the shipment detail page.
2. Review the exception message from the carrier.
3. Contact the carrier directly using the tracking number to arrange re-delivery
   or correction.
4. Update the shipment notes in Loupe Factory to record the resolution steps.

!!! warning
    Loupe Factory cannot modify a shipment with the carrier after the label has
    been purchased. Address corrections must be handled directly with the
    carrier.

!!! info "Screenshot: Shipment Exception Alert"
    A screenshot will be added here showing the exception alert banner on a
    shipment detail page with the carrier's exception message and the shipment
    notes field.

    **Suggested image**: `assets/shipment-exception-alert.png`

## Linking shipments to orders

Shipments created from an order are automatically linked. You can also link a
standalone shipment to an order after the fact:

1. Open the shipment detail page.
2. Click **Link to Order** in the shipment details panel.
3. Search for and select the order.
4. Click **Save**.

Once linked, the order status updates to **Shipped** and the tracking number
appears on the order detail page.

!!! info "Screenshot: Link Shipment to Order"
    A screenshot will be added here showing the Link to Order dialog on the
    shipment detail page with the order search field.

    **Suggested image**: `assets/shipment-link-order.png`

## Next steps

- [Order Management](order-management.md): Create and manage orders that
  generate shipments.
- [Invoicing](invoicing.md): Generate invoices linked to fulfilled orders.
- [Customer & Supplier Management](customer-supplier-management.md): Manage the
  recipient addresses used in shipments.
- [Reporting & Analytics](reporting-analytics.md): View shipment reports and
  export delivery data.
