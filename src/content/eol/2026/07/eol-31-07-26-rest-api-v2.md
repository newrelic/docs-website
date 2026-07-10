---
title: 'New Relic REST API v2 and Deployments v0 API, end-of-life effective July 31, 2027'
summary: 'The New Relic REST API v2 (including Alerts endpoints) and the Deployments v0 API will reach end of life on July 31, 2027.'
publishDate: '2026-07-31'
eolEffectiveDate: '2027-07-31'
---

Effective July 31, 2027, the New Relic REST API v2 (including the Alerts endpoints) and the Deployments v0 API will reach end of life (EOL). After this date, these API endpoints will no longer be available.

## Background

This retirement is part of the ongoing work to improve our platform and streamline our APIs, ensuring continued innovation and a more sustainable system. REST API v2 functionalities are available through NerdGraph, New Relic's GraphQL API, which offers a single unified endpoint, precise data fetching, and strong data typing — providing a more robust, consistent, and unified experience.

## What's changing

The following API endpoints will be permanently retired on July 31, 2027:

* `https://api.newrelic.com/v2/`: US datacenter (including the Alerts endpoints, `/v2/alerts*`, but excluding the retained conditions and policies namespaces listed under **Not impacted** below)
* `https://api.eu.newrelic.com/v2/`: EU datacenter (including the Alerts endpoints, `/v2/alerts*`, but excluding the retained conditions and policies namespaces listed under **Not impacted** below)
* `https://rpm.newrelic.com/deployments`: Legacy Deployments v0 API

### Alerts

Following Alerts endpoints are being retired. Each one has a NerdGraph replacement that covers the common use cases:

   * `alerts_violations`: EOL the REST violations endpoint; customers can use the NerdGraph Incident API (`NrAiIncident`) 
   * `alerts_incidents`: EOL the REST incidents endpoint; customers migrate to the NerdGraph Issues API (`NrAiIssue`). (**Note**: "incident" was renamed to "issue" in the modern model)
   * `alerts_channels`: EOL the REST channels endpoint; customers can migrate to [Notifications Workflows](https://docs.newrelic.com/docs/alerts/get-notified/alert-event-workflows/) and [Destinations](https://docs.newrelic.com/docs/alerts/get-notified/destinations/) by updating API calls to use the NerdGraph APIs or update your terraform to use the workflows and destinations resources.
   * `alerts_events`: EOL the REST events endpoint; most accounts use it for deployments and migrate to the NerdGraph change tracking API. Accounts using the feature flag for alert-related event data have no direct replacement today — handled case-by-case via Support.

With NerdGraph now supporting many functions, we recommend beginning your migration process immediately. Should you identify a functionality missing from the NerdGraph, please reach out to Support for tracking and potential future inclusion.

**Not impacted**:

   * The following Alerts conditions and policies namespaces are **not** affected — no action needed:
       * `/alerts_policies/*`
       * `/alerts_conditions/*`
       * `/alerts_nrql_conditions/*`
       * `/alerts_external_service_conditions/*`
       * `/alerts_synthetics_conditions/*`
       * `/alerts_location_failure_conditions/policies/*`
       * `/alerts_entity_conditions/*`
   * The NerdGraph GraphQL APIs hosted on the same domain (`https://api.newrelic.com/graphql`, `https://api.eu.newrelic.com/graphql`) are not affected
   * New Relic agent communication and data ingest are not affected

## How do I know if I'm affected?

You may be affected if your account has made calls to the REST API v2 within the past 3 months. This includes accounts that use the Alerts endpoints (`/v2/alerts*`). To determine what action you need to take:

1. **Identify your REST API v2 usage:** Search your codebase, CI/CD pipelines, and automation scripts for calls to `api.newrelic.com/v2/`, `api.eu.newrelic.com/v2/`, and `https://rpm.newrelic.com/deployments`

   Common integrations include:

   * CI/CD pipelines that record deployments or manage browser/mobile app configuration
   * Scripts that pull metric data for external dashboards or data warehousing
   * Automation that checks application health status or alert conditions

2. **Check which endpoints you use:** If you use the Alerts endpoints (`/v2/alerts*`), they are part of this EOL.

3. **Review the migration guide:** For each REST API v2 call you identify, our [migration guide](https://docs.newrelic.com/docs/apis/rest-api-v2/migrate-to-nerdgraph/) provides the equivalent NerdGraph query or mutation.

## What you need to do

Migrate your integrations from REST API v2 to NerdGraph before July 31, 2027:

1. **Update your API calls to use NerdGraph:** Use the [migration guide](https://docs.newrelic.com/docs/apis/rest-api-v2/migrate-to-nerdgraph/) for endpoint-by-endpoint mappings, including:

   * **Applications**: list, show, update, and delete via entity search and mutations
   * **Metric data**: query via NRQL, with a mapping table from REST API metric values to NRQL functions
   * **Hosts & instances**: query via NRQL with host faceting
   * **Deployments**: record via `changeTrackingCreateDeployment` mutation, query via NRQL
   * **Key transactions**: query via entity search
   * **Mobile & browser applications**: query via entity search

2. **Test your new integrations:** Use the NerdGraph API Explorer in the New Relic platform to interactively build and test queries before deploying changes.
3. **Important note for metric data users:** The REST API v2 returns metric data in a proprietary format. In NerdGraph, metric data is queried using NRQL (New Relic Query Language). While the same data is available, the response format is different. The [migration guide](https://docs.newrelic.com/docs/apis/rest-api-v2/migrate-to-nerdgraph/) includes a complete mapping table to help you translate your existing metric value names (for example, `average_response_time`, `call_count`) to the equivalent NRQL functions. Please allow adequate time for this migration.
4. **If you use the Alerts endpoints (`/v2/alerts*`):** These endpoints are part of this EOL and will be retired on July 31, 2027. Detailed migration guidance for the Alerts endpoints will follow in a supplemental announcement. In the meantime, identify where your integrations call `/v2/alerts*` so you're ready to migrate when that guidance is published. If you need help planning your migration, contact [New Relic Support](https://support.newrelic.com/s/).

## What happens if you take no action

After July 31, 2027, any integrations, scripts, or tools that call the REST API v2 endpoints listed above will stop working. This could affect:

* Deployment tracking in your CI/CD pipelines
* Metric data exports to external systems or data warehouses
* Application health monitoring scripts that rely on REST API v2
* Browser or mobile app provisioning automation

## Resources

* [Migration guide: REST API v2 to NerdGraph](https://docs.newrelic.com/docs/apis/rest-api-v2/migrate-to-nerdgraph/)
* [NerdGraph documentation](https://docs.newrelic.com/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/)
* [Interactive query builder (NerdGraph API Explorer)](https://docs.newrelic.com/docs/apis/nerdgraph/get-started/nerdgraph-explorer/)
* [Metric data migration: REST API v2 to NRQL](https://docs.newrelic.com/docs/apis/rest-api-v2/migrate-to-nrql/)

## Additional support

If you need assistance migrating your integrations, please contact [New Relic Support](https://support.newrelic.com/s/). Our support team can help you identify equivalent NerdGraph queries for your specific use cases.

We understand that migrating your integration is challenging, and our team is here to assist. If you have questions regarding these transitions or need help identifying impacted accounts, please reach out to your account team or [**contact support**](https://docs.newrelic.com/docs/new-relic-solutions/solve-common-issues/find-help-get-support/).