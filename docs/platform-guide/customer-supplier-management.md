# Customer & Supplier Management

LoupeFactory lets you maintain a central directory of the customers you sell to and the suppliers you source from. This guide covers how to add and manage customer and supplier records, and how to view the transactions associated with each contact.

## Adding a Customer

To add a new customer record:

1. Navigate to the **Customers** module from the main dashboard.
2. Click **Add Customer** in the top-right corner.
3. Fill in the customer details: name, contact person, email, phone, and billing address.
4. Optionally add notes or tags to help categorize the customer.
5. Click **Save** to create the record.

!!! info "Screenshot: Add Customer Form"
    A screenshot will be added here showing the Add Customer form with fields for name, contact person, email, phone, billing address, and notes.

    **Suggested image**: `assets/customers-add-form.png`

## Adding a Supplier

To add a new supplier record:

1. Navigate to the **Suppliers** module from the main dashboard.
2. Click **Add Supplier** in the top-right corner.
3. Enter the supplier details: company name, contact person, email, phone, and address.
4. Add any relevant payment terms or lead time notes in the **Notes** field.
5. Click **Save** to create the record.

!!! info "Screenshot: Add Supplier Form"
    A screenshot will be added here showing the Add Supplier form with fields for company name, contact person, email, phone, address, and notes.

    **Suggested image**: `assets/suppliers-add-form.png`

## Managing Customer and Supplier Records

### Editing a Record

1. Open the **Customers** or **Suppliers** module.
2. Find the record using the search bar or by browsing the list.
3. Click the record name to open its detail view.
4. Click **Edit** and update any fields as needed.
5. Click **Save Changes** to apply your updates.

!!! info "Screenshot: Customer Detail and Edit View"
    A screenshot will be added here showing a customer record's detail page with the Edit button and editable fields highlighted.

    **Suggested image**: `assets/customers-detail-edit.png`

### Deactivating a Record

If a customer or supplier is no longer active, you can deactivate their record rather than deleting it. Deactivated records are hidden from default views but remain accessible for historical reporting.

1. Open the record's detail view.
2. Click **More Actions** > **Deactivate**.
3. Confirm the action in the dialog.

!!! info "Screenshot: Deactivate Confirmation Dialog"
    A screenshot will be added here showing the deactivate confirmation dialog for a customer or supplier record.

    **Suggested image**: `assets/contacts-deactivate-dialog.png`

## Viewing Associated Transactions

Each customer and supplier record has a **Transactions** tab that shows all activity linked to that contact.

### Customer Transactions

The **Transactions** tab on a customer record displays:

- **Orders** — all orders placed by this customer, with status and total value.
- **Invoices** — invoices generated for this customer, including payment status.
- **Shipments** — outbound shipments linked to this customer's orders.

!!! info "Screenshot: Customer Transactions Tab"
    A screenshot will be added here showing the Transactions tab on a customer record, with orders, invoices, and shipments listed.

    **Suggested image**: `assets/customers-transactions-tab.png`

### Supplier Transactions

The **Transactions** tab on a supplier record displays:

- **Purchase Orders** — orders placed with this supplier, with status and total value.
- **Inventory Receipts** — stock received from this supplier, linked to purchase orders.

!!! info "Screenshot: Supplier Transactions Tab"
    A screenshot will be added here showing the Transactions tab on a supplier record, with purchase orders and inventory receipts listed.

    **Suggested image**: `assets/suppliers-transactions-tab.png`

!!! tip
    Use the date range filter on the Transactions tab to narrow down activity to a specific period. This is useful when reconciling invoices or reviewing supplier performance over a quarter.

## Searching and Filtering Contacts

The search bar in both the Customers and Suppliers modules supports filtering by name, email, or tag. You can also filter by status (Active / Inactive) using the **Status** dropdown.

!!! info "Screenshot: Contacts Search and Filter"
    A screenshot will be added here showing the customer or supplier list with the search bar active and the status filter dropdown open.

    **Suggested image**: `assets/contacts-search-filter.png`

## Next Steps

- [Order Management](order-management.md) — Learn how to create and track orders linked to your customers.
- [Invoicing](invoicing.md) — Generate and send invoices tied to customer orders.
- [Inventory Management](inventory-management.md) — Manage the stock you source from suppliers.
- [Reporting & Analytics](reporting-analytics.md) — View customer and supplier activity reports.
