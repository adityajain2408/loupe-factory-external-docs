# Employee Management

LoupeFactory lets you manage the people who access your organization's account.
This guide covers how to add staff members, assign roles that control what each
person can do, and adjust permissions as your team's responsibilities change.

## Adding a Staff Member

To invite a new employee to your organization:

1. Navigate to **Settings** from the main dashboard.
2. Select the **Team** tab.
3. Click **Invite Member** in the top-right corner.
4. Enter the employee's email address and select their role.
5. Click **Send Invite**.

The employee will receive an email invitation to create their account and join
your organization.

!!! info "Screenshot: Invite Member Form"
    A screenshot will be added here showing the Invite Member form with the
    email field and role selector.

    **Suggested image**: `assets/employees-invite-form.png`

## Understanding Roles

LoupeFactory uses role-based access control to determine what each team member
can see and do. The available roles are:

| Role | Description |
| --- | --- |
| **Owner** | Full access to all modules, settings, and billing. Only one owner per organization. |
| **Admin** | Full access to all modules and settings, excluding billing and ownership transfer. |
| **Manager** | Can create and edit records across all operational modules. Cannot access organization settings or billing. |
| **Staff** | Read and write access to assigned modules only. Cannot manage other users or settings. |
| **Viewer** | Read-only access to all modules. Cannot create or edit any records. |

!!! info "Screenshot: Role Overview"
    A screenshot will be added here showing the role selection dropdown with
    descriptions for each available role.

    **Suggested image**: `assets/employees-role-overview.png`

## Assigning and Changing Roles

To change a team member's role:

1. Go to **Settings** > **Team**.
2. Find the team member in the list.
3. Click the role badge next to their name.
4. Select the new role from the dropdown.
5. Confirm the change.

The updated permissions take effect immediately.

!!! info "Screenshot: Change Role Dropdown"
    A screenshot will be added here showing the role badge on a team member row
    with the dropdown open and available roles listed.

    **Suggested image**: `assets/employees-change-role.png`

!!! warning
    Changing a team member's role from Admin or Manager to Staff or Viewer will
    immediately restrict their access. Any open sessions they have will reflect
    the new permissions on their next action.

## Managing Permissions

For **Staff** role members, you can further refine access by specifying which
modules they can interact with.

### Configuring Module Access

1. Go to **Settings** > **Team**.
2. Click the team member's name to open their profile.
3. Under **Module Permissions**, toggle access on or off for each module:
   - Inventory
   - Production
   - Orders
   - Invoicing
   - Shipments
   - Customers & Suppliers
   - Reporting
4. Click **Save Permissions**.

!!! info "Screenshot: Module Permissions Panel"
    A screenshot will be added here showing the Module Permissions panel on a
    staff member's profile with toggles for each module.

    **Suggested image**: `assets/employees-module-permissions.png`

### Permission Levels per Module

For each module you enable for a Staff member, you can set the permission level:

- **View**: Can read records but not create or edit them.
- **Edit**: Can create and edit records but not delete them.
- **Full**: Can create, edit, and delete records within the module.

!!! info "Screenshot: Permission Level Selector"
    A screenshot will be added here showing the per-module permission level
    selector (View / Edit / Full) within the Module Permissions panel.

    **Suggested image**: `assets/employees-permission-levels.png`

## Removing a Team Member

To remove an employee from your organization:

1. Go to **Settings** > **Team**.
2. Find the team member in the list.
3. Click **More Actions** (⋯) next to their name.
4. Select **Remove from Organization**.
5. Confirm the action in the dialog.

Removed members lose access immediately. Their historical activity (orders
created, records edited) is preserved for audit purposes.

!!! info "Screenshot: Remove Member Confirmation"
    A screenshot will be added here showing the Remove from Organization
    confirmation dialog.

    **Suggested image**: `assets/employees-remove-confirm.png`

!!! tip
    If an employee is temporarily unavailable (e.g., on leave), consider setting
    their role to **Viewer** instead of removing them. This preserves their
    account and history while preventing unintended changes.

## Managing Staff Records

Loupe Factory uses staff records to organize the people who work inside your
operation. These records help you assign work clearly across production,
orders, departments, and locations.

## Add a Staff Member

To create a new staff record:

1. Go to **People** > **Staff**.
2. Click **Add Staff**.
3. On the **Basic** step, enter the staff member's **email address**,
   **nickname**, and **phone number**.
4. On the **Personal** step, add an optional **profile photo**, then enter
   **first name** and **last name**.
5. On the **Work** step, choose the staff member's **location**,
   **department**, and **designation**.
6. Accept the terms and privacy confirmation, then continue.
7. On the **Done** step, wait for the result message. From there, you can
   **add another staff member**, **fix errors**, or **close** the window.

## What the Staff Record Is Used For

Once a staff member is added, Loupe Factory can use that record for
day-to-day operational assignment, including:

- assigning a production job to a staff member
- assigning an order lead or workflow owner
- organizing people by department and location
- improving accountability in reports and activity history

## Staff Record vs Platform Access

A staff record is the operational profile for a person inside Loupe Factory.
It is different from broader account-access setup.

Create the staff record first when you want that person to appear in assignment
lists, ownership fields, or reporting. If that person also needs login access,
manage their account access separately through your organization's access and
account workflow.

## Recommended Information to Prepare

Before adding staff, it helps to confirm:

- the person's work email address
- their preferred phone number
- their main work location
- the correct department
- the correct designation or title

Keeping these details consistent makes assignment filters, reporting, and
handoffs easier for multi-site teams.

## Best Practices

- Use the staff member's real work email so internal communication stays clear.
- Keep department and designation values consistent across teams.
- Add the correct location so production and order ownership reports stay clean.
- Use nicknames only when they help teams identify people faster in daily work.

## Next Steps

- [Customer & Supplier Management](customer-supplier-management.md): Create the
  external business contacts your team works with.
- [Production Tracking](production-tracking.md): Assign staff to production
  jobs and record job progress.
- [Order Management](order-management.md): Assign order leads and track work
  against customer or supplier orders.
