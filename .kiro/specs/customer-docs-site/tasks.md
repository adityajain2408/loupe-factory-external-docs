# Implementation Plan: Customer Docs Site

## Overview

Incrementally build the LoupeFactory customer documentation site by rewriting the MkDocs configuration, expanding brand styling, creating all content pages, and verifying build integrity. Each task builds on the previous so the site is always in a buildable state.

## Tasks

- [x] 1. Rewrite mkdocs.yml with correct navigation, theme, and plugin configuration
  - Replace the entire `nav` tree with the structure from the design (Home, Getting Started, Platform Guide, Account & Billing, FAQ)
  - Set `primary: custom` in all palette entries to enable CSS-driven brand colors
  - Remove the `extra_javascript` block referencing the non-existent `javascripts/extra.js`
  - Make `git-revision-date-localized` and `git-committers` plugins conditional with `enabled: !ENV [CI, false]`
  - Keep all existing theme features (`navigation.tabs`, `navigation.tabs.sticky`, `navigation.indexes`, `search.highlight`, `search.suggest`, etc.)
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.3, 2.4, 9.1, 9.2, 9.3, 10.2, 10.3_

- [x] 2. Expand docs/stylesheets/extra.css with full brand tokens and landing page styles
  - Define light mode CSS custom properties under `[data-md-color-scheme="default"]` with all brand colors (#3874ff, #0097eb, #25b003, #f5f7fa, #ffffff, #141824, #31374a)
  - Define dark mode CSS custom properties under `[data-md-color-scheme="slate"]` with inverted surface/text colors
  - Add landing page hero section styles (full-width background, centered text, CTA button)
  - Add feature grid card styles (3-column responsive grid, hover states, brand color accents)
  - Add getting-started steps section styles
  - Retain existing code block, button, card, nav, and search input styles
  - _Requirements: 2.1, 2.2, 2.5, 2.6, 3.4_

- [x] 3. Create the branded landing page (docs/index.md)
  - Replace the default MkDocs placeholder content with the landing page layout
  - Add front matter to hide navigation and TOC (`hide: [navigation, toc]`)
  - Build a hero section with the LoupeFactory tagline and a CTA button linking to `getting-started/quick-start-guide.md`
  - Build a 3×2 feature grid with cards for Inventory Management, Production Tracking, Order Management, Shipment Tracking, Reporting & Analytics, and AI-Powered Operations, each linking to the relevant Platform Guide page
  - Build a 3-step Getting Started section linking to Account Setup, Dashboard Overview, and Quick Start Guide
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 4. Checkpoint — Verify partial build
  - Ensure `mkdocs build --strict` runs without errors at this point (create stub files for nav entries if needed)
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Create Getting Started section pages
  - [x] 5.1 Create docs/getting-started/index.md
    - Section overview with brief intro and links to all child pages
    - _Requirements: 1.2_
  - [x] 5.2 Create docs/getting-started/account-setup.md
    - Explain sign-up, WorkOS authentication login, and initial organization settings
    - Include placeholder screenshot admonitions for key UI steps
    - _Requirements: 4.1, 4.4, 8.2_
  - [x] 5.3 Create docs/getting-started/dashboard-overview.md
    - Describe main dashboard layout, key metrics, and navigation to each module
    - Include placeholder screenshot admonitions
    - _Requirements: 4.2, 4.4, 8.2_
  - [x] 5.4 Create docs/getting-started/quick-start-guide.md
    - Step-by-step walkthrough: account creation → first inventory entry → creating a production process → placing a first order
    - Include placeholder screenshot admonitions for each step
    - _Requirements: 4.3, 4.4, 8.2_

- [x] 6. Create Platform Guide section pages
  - [x] 6.1 Create docs/platform-guide/index.md
    - Section overview with brief intro and links to all child pages
    - _Requirements: 1.3_
  - [x] 6.2 Create docs/platform-guide/inventory-management.md
    - Explain adding, editing, searching, and categorizing inventory items
    - Include placeholder screenshot admonitions
    - _Requirements: 5.1, 4.4, 8.2_
  - [x] 6.3 Create docs/platform-guide/production-tracking.md
    - Explain multi-stage production processes: defining stages, tracking inputs/outputs, recording waste/rejection/scrap
    - Include placeholder screenshot admonitions
    - _Requirements: 5.2, 4.4, 8.2_
  - [x] 6.4 Create docs/platform-guide/order-management.md
    - Explain creating, tracking, and fulfilling customer orders
    - Include placeholder screenshot admonitions
    - _Requirements: 5.3, 4.4, 8.2_
  - [x] 6.5 Create docs/platform-guide/invoicing.md
    - Explain generating, sending, and managing invoices linked to orders
    - Include placeholder screenshot admonitions
    - _Requirements: 5.4, 4.4, 8.2_
  - [x] 6.6 Create docs/platform-guide/shipment-tracking.md
    - Explain creating shipments, EasyPost integration for package tracking, and delivery status
    - Include placeholder screenshot admonitions
    - _Requirements: 5.5, 4.4, 8.2_
  - [x] 6.7 Create docs/platform-guide/customer-supplier-management.md
    - Explain adding/managing customer and supplier records and associated transactions
    - Include placeholder screenshot admonitions
    - _Requirements: 5.6, 4.4, 8.2_
  - [x] 6.8 Create docs/platform-guide/employee-management.md
    - Explain adding staff, assigning roles, and managing permissions
    - Include placeholder screenshot admonitions
    - _Requirements: 5.7, 4.4, 8.2_
  - [x] 6.9 Create docs/platform-guide/reporting-analytics.md
    - Explain available reports, data visualizations, and data export
    - Include placeholder screenshot admonitions
    - _Requirements: 5.8, 4.4, 8.2_

- [x] 7. Create Account & Billing section pages
  - [x] 7.1 Create docs/account-billing/index.md
    - Section overview with brief intro and links to child pages
    - _Requirements: 1.4_
  - [x] 7.2 Create docs/account-billing/managing-your-account.md
    - Explain updating profile info, organization settings, and notification preferences
    - Include placeholder screenshot admonitions
    - _Requirements: 6.1, 4.4, 8.2_
  - [x] 7.3 Create docs/account-billing/ai-credits-billing.md
    - Explain AI credits system, credit consumption, purchasing additional credits, and billing history
    - Include placeholder screenshot admonitions
    - _Requirements: 6.2, 4.4, 8.2_

- [x] 8. Create the FAQ page (docs/faq.md)
  - Use collapsible `??? question` admonitions for each Q&A
  - Organize questions into categories: General, Account, Inventory, Production, Orders, Billing
  - Include cross-links to relevant Platform Guide and Getting Started pages in answers
  - _Requirements: 7.1, 7.2_

- [x] 9. Checkpoint — Full build verification
  - Run `mkdocs build --strict` and confirm zero errors and zero warnings
  - Verify every file in the `nav` tree exists in `docs/`
  - Verify no `extra_javascript` references remain for missing files
  - Verify placeholder admonitions use the `!!! info "Screenshot: ..."` format consistently
  - Ensure all tests pass, ask the user if questions arise.
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

## Notes

- No property-based tests apply — this is a static site with no algorithmic logic
- Image assets directory (`docs/assets/`) is intentionally left empty; content pages use placeholder admonitions instead of image links to avoid broken references
- Git plugins are made conditional to prevent Vercel shallow-clone build failures
- Checkpoints use `mkdocs build --strict` as the primary validation mechanism
