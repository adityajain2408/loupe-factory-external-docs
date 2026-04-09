# Invoicing

LoupeFactory's invoicing module lets you generate, send, and manage invoices that are directly linked to your customer orders. This guide covers the full invoicing workflow — from creating an invoice against a confirmed order to recording payments and managing invoice history.

## Generating an Invoice

Invoices are created from confirmed orders, ensuring that line items, quantities, and pricing are automatically pulled in.

To generate an invoice:

1. Navigate to the **Invoices** module from the main dashboard, or open an existing order and click **Create Invoice**.
2. If starting from the Invoices module, click **New Invoice** and select the order you want to invoice from the **Linked Order** dropdown.
3. Review the auto-populated line items, quantities, and unit prices.
4. Adjust any line items or add additional charges (e.g., shipping fees, discounts) as needed.
5. Set the **Invoice Date** and **Due Date**.
6. Add any notes or payment terms in the **Notes** field.
7. Click **Save Invoice** to create the invoice with a status of **Draft**.

!!! info "Screenshot: New Invoice Form"
    A screenshot will be added here showing the New Invoice form with the linked order selector, auto-populated line items table, and date fields.

    **Suggested image**: `assets/invoicing-new-invoice-form.png`

!!! tip
    You can create multiple invoices against a single order — for example, to issue a deposit invoice followed by a final invoice on delivery.

## Reviewing and Finalising an Invoice

Before sending, review the draft invoice to confirm all details are correct:

1. Open the invoice from the invoice list.
2. Check line items, totals, tax amounts, and payment terms.
3. Click **Finalise Invoice** to lock the invoice and prepare it for sending.

Once finalised, the invoice status changes to **Finalised** and line items can no longer be edited.

!!! info "Screenshot: Invoice Detail View"
    A screenshot will be added here showing a finalised invoice with line items, subtotal, tax, and total amount, along with the Send Invoice button.

    **Suggested image**: `assets/invoicing-invoice-detail.png`

## Sending an Invoice

After finalising, send the invoice directly to your customer from LoupeFactory:

1. Open the finalised invoice.
2. Click **Send Invoice**.
3. Confirm or update the recipient email address.
4. Optionally add a message to include in the email body.
5. Click **Send** to deliver the invoice to your customer.

The invoice status updates to **Sent** and a timestamp is recorded.

!!! info "Screenshot: Send Invoice Dialog"
    A screenshot will be added here showing the Send Invoice dialog with the recipient email field, optional message area, and Send button.

    **Suggested image**: `assets/invoicing-send-dialog.png`

!!! note
    A copy of the sent invoice is automatically saved to the order's activity history so you have a full audit trail.

## Tracking Invoice Status

Each invoice moves through a defined set of statuses:

| Status | Description |
|--------|-------------|
| **Draft** | Invoice created but not yet finalised |
| **Finalised** | Invoice locked and ready to send |
| **Sent** | Invoice delivered to the customer |
| **Partially Paid** | A partial payment has been recorded |
| **Paid** | Invoice fully paid |
| **Overdue** | Due date has passed with no full payment |
| **Void** | Invoice cancelled and no longer active |

You can filter the invoice list by status to quickly identify overdue or unpaid invoices.

!!! info "Screenshot: Invoice List with Status Filters"
    A screenshot will be added here showing the invoice list with the status filter dropdown open and invoices in various states including Sent, Overdue, and Paid.

    **Suggested image**: `assets/invoicing-list-status-filters.png`

## Recording Payments

When a customer pays an invoice, record the payment to update the invoice status:

1. Open the invoice from the invoice list.
2. Click **Record Payment**.
3. Enter the payment amount, payment date, and payment method.
4. Add a reference number (e.g., bank transfer reference) if applicable.
5. Click **Save Payment**.

If the payment covers the full outstanding balance, the invoice status changes to **Paid**. Partial payments update the status to **Partially Paid** and display the remaining balance.

!!! info "Screenshot: Record Payment Dialog"
    A screenshot will be added here showing the Record Payment dialog with amount, date, payment method, and reference number fields.

    **Suggested image**: `assets/invoicing-record-payment.png`

## Managing Overdue Invoices

LoupeFactory automatically flags invoices as **Overdue** when the due date passes without full payment. To manage overdue invoices:

- Use the **Overdue** filter in the invoice list to see all outstanding invoices.
- Open an overdue invoice and click **Send Reminder** to resend the invoice to the customer with an overdue notice.
- Update the due date if you have agreed on a new payment schedule with the customer.

!!! info "Screenshot: Overdue Invoice with Send Reminder"
    A screenshot will be added here showing an overdue invoice with the Send Reminder button and the overdue badge highlighted.

    **Suggested image**: `assets/invoicing-overdue-reminder.png`

## Voiding an Invoice

If an invoice was created in error or needs to be cancelled:

1. Open the invoice.
2. Click **Void Invoice**.
3. Enter a reason for voiding and confirm.

Voided invoices are retained in your history for audit purposes but are marked as inactive. You can create a new invoice against the same order if needed.

!!! warning
    Voiding a **Paid** invoice is not permitted. If a refund is required, record the refund separately and contact your account administrator.

!!! info "Screenshot: Void Invoice Dialog"
    A screenshot will be added here showing the Void Invoice confirmation dialog with the reason field and Confirm button.

    **Suggested image**: `assets/invoicing-void-dialog.png`

## Linking Invoices to Orders

Every invoice in LoupeFactory is linked to a source order, giving you full visibility across the order-to-cash workflow:

- From an **order detail page**, the **Invoices** section lists all invoices generated for that order, including their status and outstanding balances.
- From an **invoice detail page**, the **Linked Order** section shows the originating order with a direct link.

This two-way linking ensures that your sales, operations, and finance teams always have a consistent view of each transaction.

!!! info "Screenshot: Order Detail with Linked Invoices"
    A screenshot will be added here showing the Invoices section on an order detail page, listing linked invoices with their statuses and amounts.

    **Suggested image**: `assets/invoicing-order-linked-invoices.png`

## Next Steps

- [Order Management](order-management.md) — Create and manage the orders that invoices are generated from.
- [Customer & Supplier Management](customer-supplier-management.md) — Manage customer records and view their invoice history.
- [Reporting & Analytics](reporting-analytics.md) — View revenue reports and export invoice data.
- [Shipment Tracking](shipment-tracking.md) — Track shipments associated with invoiced orders.
