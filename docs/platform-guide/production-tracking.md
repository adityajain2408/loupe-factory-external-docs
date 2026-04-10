# Production Tracking

LoupeFactory's production tracking module lets you model and monitor multi-stage
manufacturing processes from start to finish. This guide covers how to define
production stages, track inputs and outputs at each stage, and record waste,
rejection, and scrap.

## Overview of Multi-Stage Production

A production process in LoupeFactory is made up of one or more sequential
stages. Each stage represents a distinct step in your workflow: for example,
receiving, fabrication or assembly, finishing, and quality inspection. Tracking
each stage separately gives you full visibility into where materials are at any
point in time and where losses occur.

!!! info "Screenshot: Production Process Overview"
    A screenshot will be added here showing the Production Tracking module home
    screen with a list of active production processes and their current stage
    status.

    **Suggested image**: `assets/production-overview.png`

## Defining Production Stages

Before recording any production activity, you need to set up the stages that
make up your process.

### Creating a Production Process

1. Navigate to the **Production** module from the main dashboard.
2. Click **New Process**.
3. Enter a process name and optional description.
4. Click **Add Stage** to define the first stage.
5. For each stage, provide a name (e.g., "Rough Sorting", "Cutting",
   "Polishing") and an optional description.
6. Drag stages to reorder them if needed.
7. Click **Save Process** when all stages are defined.

!!! info "Screenshot: New Process Form with Stages"
    A screenshot will be added here showing the New Process form with multiple
    stages added, including the stage name fields and the drag-to-reorder
    handles.

    **Suggested image**: `assets/production-new-process-stages.png`

### Editing an Existing Process

To modify a process after it has been created:

1. Open the process from the **Production** module list.
2. Click **Edit Process**.
3. Add, rename, or remove stages as needed.
4. Click **Save Changes**.

!!! warning
    Editing stages on a process that already has recorded runs may affect
    historical reporting. Avoid renaming or removing stages that have existing
    data unless you intend to restructure your records.

## Tracking Inputs and Outputs

Each production stage consumes inputs (raw materials or semi-finished goods) and
produces outputs (processed goods ready for the next stage or for sale).
LoupeFactory links these directly to your inventory.

### Recording Inputs

When starting a stage, record the materials being consumed:

1. Open the active production run and navigate to the relevant stage.
2. Click **Record Inputs**.
3. Select the inventory item and enter the quantity being consumed.
4. Add additional input items if the stage uses multiple materials.
5. Click **Confirm Inputs** to deduct the quantities from inventory.

!!! info "Screenshot: Record Inputs Form"
    A screenshot will be added here showing the Record Inputs form with an
    inventory item selector, quantity field, and the option to add multiple
    input lines.

    **Suggested image**: `assets/production-record-inputs.png`

### Recording Outputs

When a stage is complete, record what was produced:

1. In the same stage view, click **Record Outputs**.
2. Select the output inventory item and enter the quantity produced.
3. If the output is a new item not yet in inventory, you can create it inline
   from this form.
4. Click **Confirm Outputs** to add the quantities to inventory.

!!! info "Screenshot: Record Outputs Form"
    A screenshot will be added here showing the Record Outputs form with the
    output item selector, quantity field, and the inline item creation option.

    **Suggested image**: `assets/production-record-outputs.png`

!!! tip
    The difference between total inputs and total outputs (including waste) is
    automatically calculated and shown in the stage summary. Use this to spot
    unexpected material losses early.

## Recording Waste, Rejection, and Scrap

Not all material that enters a stage makes it through as usable output.
LoupeFactory lets you record three types of material loss:

| Type | Description |
| --- | --- |
| **Waste** | Material consumed or lost during processing (e.g., dust, offcuts) |
| **Rejection** | Items that fail quality checks and cannot be used or sold |
| **Scrap** | Rejected material that still has recoverable value (e.g., metal scrap, low-grade stones) |

### Recording a Loss

1. In the stage view, click **Record Loss**.
2. Choose the loss type: **Waste**, **Rejection**, or **Scrap**.
3. Select the inventory item and enter the quantity.
4. Add an optional note explaining the reason for the loss.
5. Click **Save** to record the entry.

!!! info "Screenshot: Record Loss Form"
    A screenshot will be added here showing the Record Loss form with the loss
    type selector (Waste / Rejection / Scrap), item selector, quantity field,
    and notes field.

    **Suggested image**: `assets/production-record-loss.png`

Scrap items are added back to inventory at a separate SKU or category so their
recoverable value can be tracked and sold or reused.

!!! info "Screenshot: Stage Summary with Loss Breakdown"
    A screenshot will be added here showing a completed stage summary card
    displaying total inputs, total outputs, and a breakdown of waste, rejection,
    and scrap quantities.

    **Suggested image**: `assets/production-stage-summary.png`

## Viewing Production Run History

All completed and in-progress production runs are accessible from the
**Production** module list. Click any run to see a full timeline of stages,
inputs, outputs, and recorded losses.

!!! info "Screenshot: Production Run History"
    A screenshot will be added here showing the production run detail page with
    a stage-by-stage timeline, input/output quantities, and loss entries for
    each stage.

    **Suggested image**: `assets/production-run-history.png`

## Next Steps

- [Inventory Management](inventory-management.md): Understand how inventory
  items are linked to production inputs and outputs.
- [Order Management](order-management.md): See how finished production outputs
  are allocated to customer orders.
- [Reporting & Analytics](reporting-analytics.md): View production efficiency
  reports and export loss data.
