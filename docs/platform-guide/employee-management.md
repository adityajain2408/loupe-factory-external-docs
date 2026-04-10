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

- **View** — Can read records but not create or edit them.
- **Edit** — Can create and edit records but not delete them.
- **Full** — Can create, edit, and delete records within the module.

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

## Next Steps

- [Managing Your Account](../account-billing/managing-your-account.md) — Update
  organization settings and notification preferences.
- [Reporting & Analytics](reporting-analytics.md) — View activity logs and audit
  trails for your team.
- [Getting Started: Account Setup](../getting-started/account-setup.md) — Review
  initial organization configuration options.
