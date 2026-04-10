# Inventory Management

LoupeFactory's inventory module gives you a central place to track every item in
your operation, from raw materials to finished goods. This guide walks you
through adding, editing, searching, and categorizing inventory items.

## Adding Inventory Items

To add a new item to your inventory:

1. Navigate to the **Inventory** module from the main dashboard.
2. Click **Add Item** in the top-right corner.
3. Fill in the item details: name, SKU, unit of measure, and category.
4. Set the initial stock quantity and any reorder thresholds.
5. Click **Save** to create the item.

!!! info "Screenshot: Add Item Form"
    A screenshot will be added here showing the Add Item form with fields for
    name, SKU, unit of measure, category, and initial stock quantity.

    **Suggested image**: `assets/inventory-add-item-form.png`

You can also bulk-import items using a CSV file. Click **Import** on the
Inventory page and follow the template provided.

!!! info "Screenshot: CSV Import Dialog"
    A screenshot will be added here showing the CSV import dialog with the
    template download link and file upload area.

    **Suggested image**: `assets/inventory-csv-import.png`

## Editing Inventory Items

To update an existing item:

1. Find the item using the search bar or by browsing the inventory list.
2. Click the item name to open its detail view.
3. Click **Edit** to enter edit mode.
4. Update any fields as needed: name, category, unit cost, or stock levels.
5. Click **Save Changes** to apply your updates.

!!! info "Screenshot: Item Detail and Edit View"
    A screenshot will be added here showing an inventory item's detail page with
    the Edit button and editable fields highlighted.

    **Suggested image**: `assets/inventory-item-edit.png`

!!! tip
    Changes to stock levels made here are recorded as manual adjustments. For
    production-related stock changes, use the [Production
    Tracking](production-tracking.md) module to keep your audit trail accurate.

## Searching Inventory

The inventory search bar supports filtering by item name, SKU, or category. You
can also combine filters to narrow results:

- **Name or SKU**: Type any part of the item name or SKU code into the search
  bar.
- **Category filter**: Use the **Category** dropdown to show only items in a
  specific category.
- **Stock status**: Filter by stock status (In Stock, Low Stock, or Out of
  Stock) using the **Status** filter.

!!! info "Screenshot: Inventory Search and Filters"
    A screenshot will be added here showing the inventory list with the search
    bar active and the category and status filter dropdowns open.

    **Suggested image**: `assets/inventory-search-filters.png`

Results update in real time as you type or change filters. Click any item in the
results to open its detail view.

## Categorizing Inventory Items

Categories help you organize items by type, material, or workflow stage. You can
manage categories from the **Settings** panel.

### Creating a Category

1. Go to **Settings** > **Inventory Categories**.
2. Click **New Category**.
3. Enter a name and optional description.
4. Click **Save**.

!!! info "Screenshot: Inventory Categories Settings"
    A screenshot will be added here showing the Inventory Categories settings
    page with the New Category form.

    **Suggested image**: `assets/inventory-categories-settings.png`

### Assigning a Category to an Item

When adding or editing an item, select the appropriate category from the
**Category** dropdown. An item can belong to one category at a time. To
reassign, simply edit the item and choose a different category.

!!! info "Screenshot: Category Dropdown on Item Form"
    A screenshot will be added here showing the Category dropdown field on the
    Add/Edit Item form with a list of available categories.

    **Suggested image**: `assets/inventory-category-dropdown.png`

## Next Steps

- [Production Tracking](production-tracking.md): Learn how inventory items flow
  through production stages.
- [Order Management](order-management.md): See how inventory is allocated when
  fulfilling customer orders.
- [Reporting & Analytics](reporting-analytics.md): View inventory reports and
  export stock data.
