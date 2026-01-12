---
title: "Dashboard operations for read-only users"
summary: "The standard New Relic read-only role is being adjusted for dashboard management. Users with this role currently have the ability to create, edit, and delete dashboards. To properly reflect the intended limitations and expectations of a read-only role, these permissions will no longer be available."
releaseDate: "2026-01-19"
---

## Why it's changing

This change ensures that read-only access is enforced consistently across the New Relic platform, maintaining uniform governance and technical integrity.

Additionally, limiting dashboard creation to specific groups follows best practices for [Compute Capacity Unit’s management](https://docs.newrelic.com/docs/licenses/license-information/product-definitions/new-relic-one-pricing-definitions/#compute-capacity-unit), helping your organization maintain effective compute cost control and build confidence in your platform scalability.

## What's changing

Standard read-only users can currently create, edit, and delete dashboards. Effective **April 30, 2026**, their dashboard access will be limited to **view-only**.

## Actions to take

If you have users who currently rely on the read-only role but still need to manage dashboards, you can easily maintain their workflow by creating a custom role.

To configure continued access:
1. Navigate to the Admin settings to add or edit a role.
2. Locate the new Dashboards section within the role configuration.
3. Enable the specific permissions required for your users:
    * View: Allows users to view dashboards (enabled by default).
    * Modify: Allows users to create and edit dashboards.
    * Delete: Allows users to delete or restore dashboards.

!["New dashboards capabilities"](/images/dashboard_capabilities.webp "New dashboards capabilities") 
 
Note on permissions: These new role-based access controls (RBAC) work alongside existing dashboard-level permissions. For example, a user with the **Modify** role capability still cannot edit a specific dashboard that has been individually set to "read-only" at the dashboard level.

## Key dates

- **Mid-January 2026**: In-product notifications will begin appearing in dashboard and admin pages to provide final warnings and instructions.
- **April 30, 2026**: The capability removal becomes effective for all users assigned to the standard read-only role.
