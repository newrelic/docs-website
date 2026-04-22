---
title: 'End of Life Announcement: New Relic REST API v2 and Deployments v0 API'
subject: 'New Relic REST API v2 and Deployments v0 API'
publishDate: '2026-06-30'
eolEffectiveDate: '2027-06-30'
---

Effective June 30, 2027, the New Relic REST API v2 (excluding Alerts endpoints) and the Deployments v0 API will reach end of life (EOL). After this date, these API endpoints will no longer be available.

## Background [#bg]

This retirement is part of our ongoing work to improve our platform and streamline our APIs, ensuring continued innovation and a more sustainable system. All REST API v2 functionality is available through NerdGraph, New Relic's GraphQL API, which offers a single unified endpoint, precise data fetching, and strong typing — providing a more robust, consistent, and unified experience.

## What's changing [#whats-changing]

The following API endpoints will be permanently retired on June 30, 2027:

- `https://api.newrelic.com/v2/`: US datacenter
- `https://api.eu.newrelic.com/v2/`: EU datacenter
- `https://rpm.newrelic.com/deployments`: Legacy Deployments v0 API

**Not affected:**

- Alerts endpoints (`/v2/alerts*`) are not affected by this EOL.
- The NerdGraph GraphQL API hosted on the same domain (`https://api.newrelic.com/graphql`, `https://api.eu.newrelic.com/graphql`) is not affected.
- New Relic agent communication and data ingest are not affected.

## How do I know if I'm affected? [#affected]

You may be affected if your account has made calls to the REST API v2 within the past 3 months. If your account only uses `/v2/alerts*` endpoints, no action is required. Otherwise, to determine what action you need to take:

1. **Identify your REST API v2 usage:** Search your codebase, CI/CD pipelines, and automation scripts for calls to `api.newrelic.com/v2/` or `api.eu.newrelic.com/v2/`.

   Common integrations include:
   - CI/CD pipelines that record deployments or manage browser/mobile app configuration
   - Scripts that pull metric data for external dashboards or data warehousing
   - Automation that checks application health status or alert conditions

2. **Check which endpoints you use:** If you only use `/v2/alerts*` endpoints, no action is required, those endpoints are not part of this EOL.

3. **Review the migration guide:** For each REST API v2 call you identify, our [migration guide](https://docs.newrelic.com/docs/apis/rest-api-v2/migrate-to-nerdgraph/) provides the equivalent NerdGraph query or mutation.

## What do you need to do [#what-to-do]

Migrate your integrations from REST API v2 to NerdGraph before June 30, 2027:

1. **Update your API calls to use NerdGraph:** Use the [migration guide](https://docs.newrelic.com/docs/apis/rest-api-v2/migrate-to-nerdgraph/) for endpoint-by-endpoint mappings, including:
   - **Applications**: list, show, update, and delete via entity search and mutations
   - **Metric data**: query via NRQL, with a mapping table from REST API metric values to NRQL functions
   - **Hosts & instances**: query via NRQL with host faceting
   - **Deployments**: record via `changeTrackingCreateDeployment` mutation, query via NRQL
   - **Key transactions**: query via entity search
   - **Mobile & browser applications**: query via entity search

2. **Test your new integrations.** Use the NerdGraph API Explorer in the New Relic platform to interactively build and test queries before deploying changes.

**Important note for metric data users:** 

The REST API v2 returns metric data in a proprietary format. In NerdGraph, metric data is queried using NRQL (New Relic Query Language). While the same data is available, the response format is different. The migration guide includes a complete mapping table to help you translate your existing metric value names (for example, `average_response_time`, `call_count`) to the equivalent NRQL functions. Please allow adequate time for this migration.

## What happens if you take no action [#account]

After June 30, 2027, any integrations, scripts, or tools that call the REST API v2 endpoints listed above will stop working. This could affect:

- Deployment tracking in your CI/CD pipelines
- Metric data exports to external systems or data warehouses
- Application health monitoring scripts that rely on REST API v2
- Browser or mobile app provisioning automation

## Resources [#resources]

- [Migration guide](https://docs.newrelic.com/docs/apis/rest-api-v2/migrate-to-nerdgraph/)
- [NerdGraph documentation](https://docs.newrelic.com/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/)
- Interactive query builder: [US](https://api.newrelic.com/graphiql) or [EU](https://api.eu.newrelic.com/graphiql)
- [Metric data migration](https://docs.newrelic.com/docs/apis/rest-api-v2/migrate-to-nrql/)

## Additional support [#support]

If you need assistance migrating your integrations, please contact [New Relic Support](https://support.newrelic.com). Our support team can help you identify equivalent NerdGraph queries for your specific use cases.
