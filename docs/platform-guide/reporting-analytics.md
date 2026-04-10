# Reporting & Analytics

LoupeFactory's Reporting & Analytics module gives you a clear view of your
business performance across inventory, production, orders, shipments, and
financials. This guide covers the available reports, how to read data
visualizations, and how to export your data.

## Overview

The Reports section is accessible from the main dashboard sidebar. It provides
pre-built reports organized by module, along with summary charts and the ability
to export raw data for use in external tools.

!!! info "Screenshot: Reports Overview Page"
    A screenshot will be added here showing the main Reports page with the
    module filter sidebar and the list of available report categories.

    **Suggested image**: `assets/reporting-overview.png`

## Available Reports

### Inventory Reports

Inventory reports help you monitor stock levels, track item movement, and
identify low-stock situations before they affect operations.

- **Stock Summary** — Current quantity on hand for all inventory items, grouped
  by category.
- **Stock Movement** — A log of all stock changes over a selected date range,
  including production inputs, manual adjustments, and order allocations.
- **Low Stock Alerts** — Items that have fallen below their reorder threshold.

!!! info "Screenshot: Inventory Stock Summary Report"
    A screenshot will be added here showing the Stock Summary report table with
    columns for item name, category, unit, quantity on hand, and reorder
    threshold.

    **Suggested image**: `assets/reporting-inventory-stock-summary.png`

### Production Reports

Production reports give you visibility into throughput, waste, and stage-level
performance across your manufacturing processes.

- **Production Summary** — Total inputs, outputs, waste, and rejection counts
  per production process over a selected period.
- **Stage Performance** — Breakdown of time and material usage at each stage
  within a process.
- **Waste & Scrap Log** — Detailed record of all waste, rejection, and scrap
  events with timestamps and responsible operators.

!!! info "Screenshot: Production Summary Report"
    A screenshot will be added here showing the Production Summary report with a
    table of processes, input quantities, output quantities, and waste
    percentages.

    **Suggested image**: `assets/reporting-production-summary.png`

### Order Reports

Order reports track sales activity, fulfillment rates, and revenue over time.

- **Order Summary** — Total orders created, fulfilled, and pending within a date
  range.
- **Revenue by Customer** — Breakdown of order value grouped by customer.
- **Fulfillment Rate** — Percentage of orders fulfilled on time versus delayed.

!!! info "Screenshot: Order Summary Report"
    A screenshot will be added here showing the Order Summary report with status
    breakdown and a revenue trend line.

    **Suggested image**: `assets/reporting-order-summary.png`

### Shipment Reports

Shipment reports help you monitor delivery performance and carrier usage.

- **Shipment Status Summary** — Count of shipments by status: In Transit,
  Delivered, and Exception.
- **Carrier Performance** — Delivery success rates and average transit times
  grouped by carrier.

!!! info "Screenshot: Shipment Status Summary Report"
    A screenshot will be added here showing the Shipment Status Summary with a
    status breakdown table and carrier comparison.

    **Suggested image**: `assets/reporting-shipment-summary.png`

### Financial Reports

Financial reports consolidate invoice and payment data to give you a picture of
your receivables.

- **Invoice Summary** — Total invoiced amount, amount paid, and outstanding
  balance for a selected period.
- **Aging Report** — Outstanding invoices grouped by how long they have been
  unpaid (0–30 days, 31–60 days, 60+ days).

!!! info "Screenshot: Invoice Aging Report"
    A screenshot will be added here showing the Invoice Aging Report table with
    customer names, invoice amounts, and aging buckets.

    **Suggested image**: `assets/reporting-invoice-aging.png`

## Data Visualizations

Most reports include one or more charts to help you spot trends at a glance.
LoupeFactory uses the following chart types:

- **Line charts** — Used for time-series data such as revenue over time or
  production output per week.
- **Bar charts** — Used for comparisons across categories, such as order volume
  by customer or waste by production stage.
- **Pie/donut charts** — Used for proportional breakdowns, such as shipment
  status distribution or stock by category.

!!! info "Screenshot: Report Chart Examples"
    A screenshot will be added here showing a report page with a line chart and
    a bar chart side by side, with the date range selector visible.

    **Suggested image**: `assets/reporting-chart-examples.png`

### Adjusting the Date Range

All reports support a configurable date range. To change the period:

1. Open any report.
2. Click the **Date Range** selector at the top of the page.
3. Choose a preset (Last 7 days, Last 30 days, This month, This quarter) or set
   a custom start and end date.
4. The report and charts will refresh automatically.

!!! info "Screenshot: Date Range Selector"
    A screenshot will be added here showing the date range picker with preset
    options and a custom date input calendar.

    **Suggested image**: `assets/reporting-date-range-picker.png`

## Exporting Data

You can export any report to CSV for use in spreadsheet tools or external
analytics platforms.

### Exporting a Report to CSV

1. Open the report you want to export.
2. Click the **Export** button in the top-right corner of the report table.
3. Select **CSV** as the export format.
4. The file will download to your browser's default download location.

!!! info "Screenshot: Export Button on Report Page"
    A screenshot will be added here showing the Export button on a report page
    with the CSV format option highlighted.

    **Suggested image**: `assets/reporting-export-csv.png`

!!! tip
    Exported CSV files include all rows matching your current filters and date
    range. Apply filters before exporting to get a focused dataset.

### Supported Export Formats

| Format | Availability | Notes |
| --- | --- | --- |
| CSV | All reports | Compatible with Excel, Google Sheets, and most BI tools |

Additional export formats may be added in future releases.

## Next Steps

- [Inventory Management](inventory-management.md) — Manage the stock data that
  feeds inventory reports.
- [Production Tracking](production-tracking.md) — Review production processes
  that appear in production reports.
- [Invoicing](invoicing.md) — Understand how invoices are generated and tracked
  in financial reports.
