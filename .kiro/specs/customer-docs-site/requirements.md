# Requirements Document

## Introduction

LoupeFactory.com is an AI-native operations SaaS platform for modern manufacturing and wholesale. This documentation site serves as the primary customer-facing resource, helping small and mid-size manufacturing and wholesale organizations understand how to use the platform effectively. The site is built with MkDocs Material, deployed via Vercel, and must reflect the LoupeFactory brand identity through consistent theming and color usage.

## Glossary

- **Docs_Site**: The MkDocs Material-based customer-facing documentation website deployed at docs.loupefactory.com
- **Customer**: A user of the LoupeFactory.com platform, typically a small or mid-size manufacturing or wholesale operator
- **Navigation_Structure**: The hierarchical page tree defined in mkdocs.yml that organizes documentation content into sections and pages
- **Theme_Configuration**: The MkDocs Material theme settings including color palette, typography, and feature toggles defined in mkdocs.yml
- **Content_Page**: A Markdown file within the docs/ directory that renders as a documentation page on the Docs_Site
- **Landing_Page**: The home page (docs/index.md) that serves as the entry point for the Docs_Site
- **Style_Override**: Custom CSS rules in docs/stylesheets/extra.css that extend or override the default MkDocs Material theme
- **Image_Asset**: A static image file stored in docs/assets/ and referenced from Content_Pages
- **Dark_Mode**: The slate color scheme variant of the Docs_Site for users who prefer dark interfaces
- **Light_Mode**: The default color scheme variant of the Docs_Site for users who prefer light interfaces

## Requirements

### Requirement 1: Site Navigation Structure

**User Story:** As a Customer, I want a clear and logically organized navigation structure, so that I can quickly find documentation relevant to my needs.

#### Acceptance Criteria

1. THE Docs_Site SHALL provide a top-level navigation with the following sections: Home, Getting Started, Platform Guide, Account & Billing, and FAQ
2. THE Navigation_Structure SHALL organize the Getting Started section with pages for Account Setup, Dashboard Overview, and Quick Start Guide
3. THE Navigation_Structure SHALL organize the Platform Guide section with pages for Inventory Management, Production Tracking, Order Management, Invoicing, Shipment Tracking, Customer & Supplier Management, Employee Management, and Reporting & Analytics
4. THE Navigation_Structure SHALL organize the Account & Billing section with pages for Managing Your Account and AI Credits & Billing
5. WHEN a Customer navigates to any section, THE Docs_Site SHALL display a sticky tab bar and a sidebar table of contents for that section

### Requirement 2: Brand-Consistent Theme Configuration

**User Story:** As a Customer, I want the documentation site to visually match the LoupeFactory.com brand, so that I have a seamless experience across the platform and docs.

#### Acceptance Criteria

1. THE Theme_Configuration SHALL use #3874ff as the primary color for both Light_Mode and Dark_Mode
2. THE Style_Override SHALL define CSS custom properties for info (#0097eb), success (#25b003), neutral surface (#f5f7fa, #ffffff), and dark text/surface (#141824, #31374a) colors
3. THE Theme_Configuration SHALL use Nunito Sans as the body text font and JetBrains Mono as the code font
4. THE Docs_Site SHALL support three palette modes: system preference auto-detection, Light_Mode, and Dark_Mode
5. WHILE in Light_Mode, THE Docs_Site SHALL use #f5f7fa and #ffffff as background surface colors and #141824 and #31374a as text colors
6. WHILE in Dark_Mode, THE Docs_Site SHALL use #141824 and #31374a as background surface colors and #f5f7fa and #ffffff as text colors

### Requirement 3: Landing Page

**User Story:** As a Customer, I want a welcoming and informative home page, so that I understand what LoupeFactory is and how to get started immediately.

#### Acceptance Criteria

1. THE Landing_Page SHALL display a hero section with the LoupeFactory tagline and a call-to-action button linking to the Quick Start Guide
2. THE Landing_Page SHALL display a feature grid highlighting key platform capabilities: Inventory Management, Production Tracking, Order Management, Shipment Tracking, Reporting, and Invoicing (or equivalent module-level highlights per product positioning)
3. THE Landing_Page SHALL include a "Getting Started" section with step-by-step guidance linking to Account Setup, Dashboard Overview, and Quick Start Guide pages
4. WHEN a Customer visits the Landing_Page, THE Docs_Site SHALL render the page with the LoupeFactory brand colors and typography

### Requirement 4: Getting Started Content

**User Story:** As a new Customer, I want clear onboarding documentation, so that I can set up my account and begin using LoupeFactory without confusion.

#### Acceptance Criteria

1. THE Content_Page for Account Setup SHALL explain how to sign up, log in via WorkOS authentication, and configure initial organization settings
2. THE Content_Page for Dashboard Overview SHALL describe the main dashboard layout, key metrics displayed, and how to navigate to each platform module
3. THE Content_Page for Quick Start Guide SHALL provide a step-by-step walkthrough covering account creation, first inventory entry, creating a production process, and placing a first order
4. WHEN a Content_Page references a UI element, THE Content_Page SHALL include a placeholder image annotation indicating where a screenshot should be added

### Requirement 5: Platform Guide Content

**User Story:** As a Customer, I want detailed guides for each platform module, so that I can effectively manage my manufacturing and wholesale operations.

#### Acceptance Criteria

1. THE Content_Page for Inventory Management SHALL explain how to add, edit, search, and categorize inventory items
2. THE Content_Page for Production Tracking SHALL explain multi-stage production processes including defining stages, tracking inputs and outputs, and recording waste, rejection, and scrap
3. THE Content_Page for Order Management SHALL explain how to create, track, and fulfill customer orders
4. THE Content_Page for Invoicing SHALL explain how to generate, send, and manage invoices linked to orders
5. THE Content_Page for Shipment Tracking SHALL explain how to create shipments, track packages, and view delivery status
6. THE Content_Page for Customer & Supplier Management SHALL explain how to add and manage customer and supplier records and their associated transactions
7. THE Content_Page for Employee Management SHALL explain how to add staff members, assign roles, and manage permissions
8. THE Content_Page for Reporting & Analytics SHALL explain available reports, data visualizations, and how to export data

### Requirement 6: Account and Billing Content

**User Story:** As a Customer, I want to understand how to manage my account and billing, so that I can control my subscription and AI credit usage.

#### Acceptance Criteria

1. THE Content_Page for Managing Your Account SHALL explain how to update profile information, manage organization settings, and configure notification preferences
2. THE Content_Page for AI Credits & Billing SHALL explain the AI credits system, how credits are consumed, how to purchase additional credits, and how to view billing history

### Requirement 7: FAQ Page

**User Story:** As a Customer, I want a frequently asked questions page, so that I can find quick answers to common questions without reading full guides.

#### Acceptance Criteria

1. THE Content_Page for FAQ SHALL include questions and answers organized by category: General, Account, Inventory, Production, Orders, and Billing
2. WHEN a FAQ answer requires detailed explanation, THE Content_Page SHALL link to the relevant Platform Guide or Getting Started page

### Requirement 8: Image and Media Support

**User Story:** As a Customer, I want documentation pages to support screenshots and diagrams, so that I can visually understand platform features.

#### Acceptance Criteria

1. THE Docs_Site SHALL serve Image_Assets from the docs/assets/ directory
2. THE Content_Pages SHALL use placeholder image annotations (using MkDocs Material admonitions) to indicate where screenshots should be added later
3. THE Docs_Site SHALL support image captions and alt text for accessibility on all Image_Assets

### Requirement 9: Search Functionality

**User Story:** As a Customer, I want to search the documentation, so that I can find specific information quickly.

#### Acceptance Criteria

1. THE Docs_Site SHALL provide a search bar accessible from every page
2. WHEN a Customer enters a search query, THE Docs_Site SHALL highlight matching terms in the search results
3. THE Docs_Site SHALL support search suggestions as the Customer types

### Requirement 10: Build and Deployment Integrity

**User Story:** As a site maintainer, I want the documentation site to build and deploy without errors, so that customers always have access to working documentation.

#### Acceptance Criteria

1. THE Docs_Site SHALL build successfully using the command defined in vercel.json without errors
2. THE mkdocs.yml SHALL reference only Content_Pages that exist in the docs/ directory
3. THE Docs_Site SHALL not reference any JavaScript files that do not exist in the docs/ directory
4. IF a Content_Page references an Image_Asset that does not exist, THEN THE Content_Page SHALL use a placeholder admonition instead of a broken image link
