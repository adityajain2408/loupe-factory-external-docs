# Account Setup

Welcome to LoupeFactory. This guide walks you through creating your account, logging in via WorkOS authentication, and configuring your organization settings so your team is ready to go.

## Sign Up

To get started, navigate to [app.loupefactory.com](https://app.loupefactory.com) and click **Get Started** or **Sign Up**.

1. Enter your work email address.
2. Choose a password or continue with a supported identity provider (Google, Microsoft, or SSO).
3. Verify your email address using the confirmation link sent to your inbox.

!!! info "Screenshot: Sign-Up Form"
    A screenshot will be added here showing the sign-up page with the email and password fields.

    **Suggested image**: `assets/account-setup-signup-form.png`

Once your email is verified, you'll be prompted to create your organization.

## Log In with WorkOS Authentication

LoupeFactory uses [WorkOS](https://workos.com) to handle authentication, giving your organization enterprise-grade security including SSO, SAML, and directory sync support.

### Standard Login

1. Go to [app.loupefactory.com](https://app.loupefactory.com) and click **Log In**.
2. Enter your email address. WorkOS will route you to the correct authentication method for your organization.
3. Complete authentication — either via password, magic link, or your configured SSO provider.

!!! info "Screenshot: WorkOS Login Screen"
    A screenshot will be added here showing the WorkOS-powered login screen with the email entry field and SSO option.

    **Suggested image**: `assets/account-setup-workos-login.png`

### SSO / Enterprise Login

If your organization has configured SAML or OIDC-based SSO, users are automatically redirected to your identity provider (e.g., Okta, Azure AD, Google Workspace) after entering their email. No separate setup is needed on the user side — your admin handles SSO configuration in the organization settings.

!!! info "Screenshot: SSO Redirect"
    A screenshot will be added here showing the redirect flow from the LoupeFactory login page to an external identity provider.

    **Suggested image**: `assets/account-setup-sso-redirect.png`

## Initial Organization Settings

After signing up, you'll be taken through a short onboarding flow to configure your organization.

### Organization Profile

Fill in your organization details:

- **Organization name** — the name displayed across the platform and on invoices.
- **Industry** — select your primary industry (e.g., gemstone processing, manufacturing, trade).
- **Default currency** — used for pricing, invoices, and reports.
- **Timezone** — ensures timestamps and scheduled reports are accurate for your location.

!!! info "Screenshot: Organization Profile Form"
    A screenshot will be added here showing the organization profile setup form with name, industry, currency, and timezone fields.

    **Suggested image**: `assets/account-setup-org-profile.png`

### Inviting Team Members

Once your organization is created, you can invite colleagues:

1. Go to **Settings → Team Members**.
2. Click **Invite Member** and enter their email address.
3. Assign a role: **Admin**, **Manager**, or **Staff**.
4. The invitee receives an email with a link to join your organization.

!!! info "Screenshot: Invite Team Members"
    A screenshot will be added here showing the team member invitation dialog with the email field and role selector.

    **Suggested image**: `assets/account-setup-invite-members.png`

### Notification Preferences

Configure how and when LoupeFactory notifies you:

- **Email notifications** — order updates, shipment status changes, low inventory alerts.
- **In-app notifications** — real-time alerts visible in the notification bell.

You can adjust these at any time under **Settings → Notifications**.

!!! info "Screenshot: Notification Preferences"
    A screenshot will be added here showing the notification preferences panel with toggles for each notification type.

    **Suggested image**: `assets/account-setup-notifications.png`

## Next Steps

- [Dashboard Overview](dashboard-overview.md) — get familiar with the main dashboard layout and key metrics.
- [Quick Start Guide](quick-start-guide.md) — follow a step-by-step walkthrough to add inventory, create a production process, and place your first order.
- [Managing Your Account](../account-billing/managing-your-account.md) — update your profile and organization settings at any time.
