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

## Create a Production Job

Loupe Factory's production module lets you create production jobs from real
order demand, issue source inventory into those jobs, and receive finished,
rejected, scrapped, and wasted output in a structured way.

To create a new production job:

1. Go to **Production**.
2. Click **Add new production job**.

### Step 1: Context

In the **Context** step, complete the operational setup for the job:

1. Select the **associated order**.
2. Select the **order line item** the job belongs to.
3. Select the correct **production stage**.
4. Select one or more **products** to look up matching source inventory.
5. Review the source inventory list and choose the inventory items that should
   feed this job.
6. Decide how inventory should be issued:
   - **Full quantity from each selected item**
   - **Specific quantity per item**

Loupe Factory uses the selected stage and product context to help narrow the
inventory that should be issued into the job.

### Step 2: Physical Specs

In **Physical Specs**, define what the job is expected to produce:

1. Select the **shape requested**.
2. Select the **size requested**.
3. Enter the **total pieces requested**.
4. Enter the **total weight requested** and choose the **weight unit**.
5. Choose how per-item requested quantities should be prepared:
   - **Match issued quantities**
   - **Split totals evenly**
   - **Customize item by item**

This step is useful when one production job is fed by several inventory items
but your team still needs a clear requested output target.

### Step 3: Issue Details

In **Issue Details**, finalize the job setup:

1. Review the summary card.
2. Set the **issued date**.
3. Set the **staff deadline**.
4. Add operational **notes** if needed.
5. Choose the **staff member** responsible for the job.
6. Accept the terms and privacy confirmation.
7. Submit the job.

### Step 4: Done

After submission, Loupe Factory shows a result screen where you can:

- **add another production job**
- **fix errors**
- **close** the modal

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

!!! info "Screenshot: Production Job Inputs and Outputs"
    A screenshot will be added here showing the Production Job detail page with
    inputs and outputs linked to inventory items.

    **Suggested image**: `assets/production-job-inputs-outputs.png`

## Receive a Production Job

When work is completed, open the production job and click **Receive**.

### Receive header details

At the top of the receive form, confirm:

1. the **received date**
2. the **received quality**
3. the **location for new inventory**
4. the **rack / bin** if your organization uses rack tracking

### Receive each output row

For each receive row, Loupe Factory lets you record the physical result of that
job output:

1. Review or update the **output type**.
2. Confirm the output **product**.
3. If relevant, confirm the **finished type** or
   **materials & supplies type**.
4. Record the output **shape** and **size**.
5. Enter the **received pieces**.
6. Enter the **received weight** and **weight unit**.
7. Enter any **wasted weight**.

### Record rejection or scrap when needed

If part of the output should be tracked separately, turn on the relevant
toggle:

- **Output has rejection**
- **Output has scrap**

Then record the rejected or scrapped values as needed, including:

- pieces
- weight
- shape
- size
- color
- inventory type
- product
- finished type or materials/supplies type

### Finish the receive entry

Add notes if needed, then click **Save**.

When you save:

- good output is received back into inventory
- rejected material can be tracked separately
- scrap can be tracked separately
- waste remains recorded as process loss
- production progress and efficiency metrics update automatically

## Why Loupe Factory Separates Output, Rejection, Scrap, and Waste

Loupe Factory treats each bucket differently because they mean different things
to operations:

| Bucket | Meaning |
| --- | --- |
| **Received** | Good output that can continue to the next operational step |
| **Rejected** | Produced output that failed quality checks and should stay separate |
| **Scrapped** | Recoverable or separately tracked loss material, that still has recoverable value (e.g., metal scrap, low-grade stones) |
| **Waste** | Irrecoverable Material consumed or lost during processing (e.g., dust, offcuts) |

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

## How Loupe Factory Calculates Job Progress and Efficiency

Loupe Factory tracks production at the job level by separating material into
five operational buckets:

- **Received**: good output weight recorded back from the job
- **Rejected**: output weight that was produced and received, but failed quality
- **Scrapped**: tracked recoverable material kept separate from normal output
- **Waste**: unrecoverable loss that is not stored back as inventory
- **Pending**: weight that has not yet been accounted for

### Step 1: Determine the progress base

For each production job, Loupe Factory first decides what weight should be used
as the job's base:

$$
\text{Progress Base} =
\begin{cases}
\text{Requested Weight}, & \text{if requested weight is available} \\
\text{Issued Weight}, & \text{otherwise}
\end{cases}
$$

$$
\text{Pending Weight} =
\text{Progress Base}
- \text{Received}
- \text{Rejected}
- \text{Scrapped}
- \text{Waste}
$$

In day-to-day terms, this means Loupe Factory prefers the weight your team was
asked to deliver. If that number was never set, it falls back to the weight
that was actually issued into the job.

### Step 2: Progress bar percentages

The progress bar on a production job divides each bucket by the same
**Progress Base** so teams can see where the material currently stands:

$$
\text{Completed \%} = \frac{\text{Received}}{\text{Progress Base}} \times 100
$$

$$
\text{Pending \%} = \frac{\text{Pending}}{\text{Progress Base}} \times 100
$$

$$
\text{Rejected \%} = \frac{\text{Rejected}}{\text{Progress Base}} \times 100
$$

$$
\text{Scrapped \%} = \frac{\text{Scrapped}}{\text{Progress Base}} \times 100
$$

$$
\text{Wasted \%} = \frac{\text{Waste}}{\text{Progress Base}} \times 100
$$

This is why the progress view helps production, quality, and operations teams
read the same job differently without changing the underlying numbers.

### Step 3: Efficiency chips on the production job

Loupe Factory also shows four efficiency measures on each production job.
These answer a different question from the progress bar: not just **where the
material is**, but **how efficiently the job converted it**.

$$
\text{Output \%} = \frac{\text{Received} + \text{Rejected}}{\text{Progress Base}} \times 100
$$

**Output %** is the practical yield figure for the job. Rejected weight is
included because it was still physically produced and measured back from the
stage.

$$
\text{Gross Waste \%} = \frac{\text{Waste} + \text{Scrapped}}{\text{Progress Base}} \times 100
$$

**Gross Waste %** captures the full process loss, including tracked scrap.

$$
\text{Net Waste \%} = \frac{\text{Waste}}{\text{Progress Base}} \times 100
$$

**Net Waste %** is the true **loss waste** figure in Loupe Factory. It excludes
scrap and focuses only on unrecoverable loss.

$$
\text{Consumption \%} = \frac{\text{Waste} + \text{Scrapped}}{\text{Received} + \text{Rejected}} \times 100
$$

**Consumption %** shows how much material was lost for every unit of measured
output produced. Lower values indicate a tighter, more efficient process.

!!! example "Simple job example"
    If a job starts with a **100 g** progress base and ends with **82 g
    received**, **5 g rejected**, **8 g scrapped**, and **5 g waste**,
    Loupe Factory shows:

    - **Output:** 87.0%
    - **Gross Waste:** 13.0%
    - **Net Waste:** 5.0%
    - **Consumption:** 14.9%

!!! tip
    If neither requested weight nor issued weight is available, Loupe Factory
    can still show a practical progress split from the recorded totals, but the
    most reliable efficiency percentages come from jobs with a clear base
    weight.

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
