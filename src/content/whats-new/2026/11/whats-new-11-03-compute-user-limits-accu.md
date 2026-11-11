---
title: 'Compute User Limits now covers advanced compute'
summary: 'Set independent core CCU and advanced CCU budgets per user and enforce limits for each meter separately.'
releaseDate: '2026-11-03'
learnMoreLink: 'https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-pricing-billing/compute-budgets/compute-user-limits'
---

## Advanced CCUs now tracked and enforced per user

Compute User Limits now tracks advanced compute (advanced CCUs) as an independent meter alongside core compute (core CCUs). You can set a separate budget for each meter and choose a different enforcement policy for each one.

When you set a user's advanced CCU budget to **Block CCU usage** and they exhaust it, they lose access until the budget period resets or you increase their limit. Core CCU enforcement — which covers dashboards, query builder, and API calls — continues to work independently.

## What changed

* **Two independent meters per user**: Each user budget now includes a core CCU allocation and an advanced CCU allocation. You configure the limit type (Block or Do not block) for each meter separately.

* **Advanced CCU enforcement**: Blocking advanced CCU usage removes access to Ask AI (V1 and V2), Live Archives, MCP, and Errors Inbox AI features. Products such as Pipeline Control, Transaction 360, Security RX, Autopilot, and others are not affected by enforcement.

* **Updated setup wizard**: The global and custom override budget wizards now include a **Define advanced CCU budget** step. Both core and advanced allocations are set as a percentage of your organization budget, with the equivalent CCU value calculated automatically.

* **Updated user budgets table**: The table now shows Core usage, Core allocation, Advanced usage, and Advanced allocation columns, so you can see both meters at a glance.

## Get started

To configure user limits, go to **Administration > Compute Budgets > User Limits** and open the global budget wizard or create a custom override budget. If you're rolling out limits for the first time, start with **Do not block CCU usage** on both meters to observe actual usage patterns before enabling blocking.

For full details, see [Compute User Limits](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-pricing-billing/compute-budgets/compute-user-limits).
