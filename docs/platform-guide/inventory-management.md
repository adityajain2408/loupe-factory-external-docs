# Inventory Management

Loupe Factory tracks inventory at an operational level so teams can manage
finished goods, materials, supplies, quality, storage location, and weight with
one shared source of truth. This guide walks you
through adding, editing, searching, and categorizing inventory items.

## Add an Inventory Item

To create inventory manually:

1. Go to **Inventory**.
2. Click **Add Inventory Item**.
3. On **Identification**, choose the inventory **type** and then complete the
    relevant classification fields:
    - **Finished Type** when the item is a finished item
    - **Materials & Supplies Type** when the item belongs to materials or
      supplies
    - **Product**
    - **Shape**
    - **Color**

    ![Add new inventory item dialog on the Identification step, showing type, finished type, product, shape, and color fields.](https://cdn.loupefactory.com/static/assets/img/screenshots/Add_new_inv_item_1.png){ .lf-doc-screenshot loading=lazy align=left }

4. On **Attributes**, enter the item's **size**, **quantity**, **weight**, and
    **weight unit**.

    ![Add new inventory item dialog on the Attributes step, showing size, quantity, and total weight fields.](https://cdn.loupefactory.com/static/assets/img/screenshots/Add_new_inv_item_2.png){ .lf-doc-screenshot loading=lazy align=left }

5. On **Storage & Review**, review the summary and complete the operational
    details:
    - **quality**
    - **auto-merge** preference
    - **location**
    - **rack / bin** if rack tracking is enabled for your organization
    - **created date**
    - optional **notes**
    - optional **image**

    ![Add new inventory item dialog on the Storage and Review step, showing the item summary, quality, auto-merge, location, and created date fields.](https://cdn.loupefactory.com/static/assets/img/screenshots/Add_new_inv_item_3.png){ .lf-doc-screenshot loading=lazy align=left }

6. If you are an admin, you can also add optional **pricing information** such
    as **currency**, **price basis**, **primary unit price**, and
    **secondary unit price**.
7. Accept the terms and privacy confirmation, then continue.
8. On the **Done** step, review the result and choose to **add another
    inventory item**, **fix errors**, or **close** the window.

    ![Add new inventory item dialog on the Done step, confirming the inventory item was created successfully and showing the generated inventory tag.](https://cdn.loupefactory.com/static/assets/img/screenshots/Add_new_inv_item_4.png){ .lf-doc-screenshot loading=lazy align=left}

## What Auto-Merge Does

The **auto-merge** option helps keep inventory cleaner by combining matching
inventory records instead of creating unnecessary duplicates.

This is especially useful when your team regularly receives or creates items
that should accumulate into one stock position for the same product, type,
quality, and storage profile.

## Bulk-Import Inventory Items Using AI

If you are an admin, you can also add inventory in bulk usign a CSV or Excel file.
Click **Import using AI** on the Inventory page and follow the template provided.

!!! info "Screenshot: CSV Import Dialog"
    A screenshot will be added here showing the CSV import dialog with the
    template download link and file upload area.

    **Suggested image**: `assets/inventory-csv-import.png`

### How the AI import flow works

1. Go to **Inventory**.
2. Click **Import using AI**.
3. Upload a **CSV**, **XLS**, or **XLSX** file up to **10 MB**.
4. If your workbook has multiple sheets, choose the worksheet you want to use.
5. Review the AI-mapped preview table carefully before confirming anything.
6. Double-click cells in the preview to correct values where needed.
7. Fix any flagged rows first, then click **Confirm Import**.

### File rules for AI import

- Maximum **2000 rows per sheet**
- Minimum required columns:
  - **Product**
  - **Weight**
- Optional columns:
  - **Type** (defaults to **Finished** if not provided)
  - **Finished Type** when **Type = Finished**
  - **Quantity**
  - **Weight Unit**
  - **Quality**
  - **Location**
  - **Color**
  - **Shape**
  - **Size**
  - **Notes**

### Import review tips

- Check **product**, **type**, and **weight/unit** first.
- Use the preview table to fix field mapping issues before import.
- Turn on **auto-merge with existing inventory** if matching stock should be
  combined.
- Start with a smaller file first when you want a quick validation pass.

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

## How Loupe Factory Classifies Inventory

Loupe Factory does more than store a simple item name. Each inventory record
can include multiple layers of operational meaning, such as:

- inventory type
- finished type
- materials and supplies type
- product
- shape
- size
- color
- quality
- storage location
- rack or bin

This structure helps global B2B manufacturers and wholesalers track stock more
accurately across purchasing, production, warehousing, and fulfilment.

## Recommended Data Hygiene

- Use consistent product naming across imports and manual entry.
- Record the correct weight unit so reporting stays reliable.
- Use location and rack fields consistently for faster stock lookup.
- Add notes only when they provide operational value for the next team.

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

- [Production Tracking](production-tracking.md): Issue inventory into production
  jobs and receive completed output back into stock.
- [Order Management](order-management.md): Connect inventory availability with
  sales and purchase order workflows.
- [Customer & Supplier Management](customer-supplier-management.md): Keep the
  business contacts behind your stock movements organized.
