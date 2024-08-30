---
title: Mendix Cloud Integration
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: "New Relic's Mendix Cloud integration: how to install it and configure it, and what data it reports."
freshnessValidatedDate: never
redirects:
  - /docs/integrations/host-integrations/host-integrations-list/mendix-cloud-integration
  - /docs/infrastructure/host-integrations/host-integrations-list/mendix-cloud-integration
---

The Mendix Cloud integration collects and sends inventory and metrics from your Mendix Cloud Environment to New Relic so you can monitor its health and performance.

Read on to install the integration, and to see what data we collect.

## Setup [#comp-req]

To make use of New Relic, you need a New Relic API key. To find an existing key or request a new one for your app, follow these steps:

1. Log in to your New Relic account.
2. Open the user menu options by clicking your name in the lower-left corner. Then click API Keys.
3. Copy an existing API key or create a new one. For this purpose, New Relic recommends the `License` type.

<Callout variant="important">
  New Relic logging and application metrics are supported in Mendix 9.7 and above.
</Callout>

## Connecting Your environment to New Relic [#connect]

To send your runtime information to New Relic, you must provide the New Relic API key to your environment.

1. Go to the <DNT>**Environment**</DNT> page of your app in the <DNT>**Developer Portal**</DNT>.
2. Click <DNT>**Details**</DNT> on the environment you wish to monitor with New Relic.
3. Switch to the <DNT>**Details**</DNT> tab.
4. Add the following custom environment variables:
   <table>
    <thead>
      <tr>
        <th>
          Variable
        </th>
        <th>
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          `NEW_RELIC_LICENSE_KEY`
        </td>
        <td>
          New Relic [License key](/docs/apis/intro-apis/new-relic-api-keys/).
        </td>
      </tr>
      <tr>
        <td>
          `NEW_RELIC_LOGS_URI`
        </td>
        <td>
          URI for the New Relic’s Logs API. For more information, consult [New Relic Regions](https://docs.mendix.com/developerportal/operate/newrelic-metrics/#uri-regions). For valid values, see [Send your logging data with our log API](/docs/logs/log-api/introduction-log-api/)
          Example: `https://log-api.eu.newrelic.com/log/v1`
        </td>
      </tr>
      <tr>
        <td>
          `NEW_RELIC_METRICS_URI`
        </td>
        <td>
          URI for the New Relic’s Metrics API. For more information, consult [New Relic Regions](https://docs.mendix.com/developerportal/operate/newrelic-metrics/#uri-regions). For valid values, see [Report metrics via the metric API](/docs/data-apis/ingest-apis/metric-api/report-metrics-metric-api/).
          Example: `https://metric-api.eu.newrelic.com/metric/v1`.
        </td>
      </tr>
      <tr>
        <td>
          `NEW_RELIC_APP_NAME`
          (optional)
        </td>
        <td>
          Mendix application name shown on New Relic’s APM & Services page. Default: Domain host name.
        </td>
      </tr>
      <tr>
        <td>
          `LOGS_REDACTION`
          (optional)
        </td>
        <td>
          Email addresses are automatically redacted before log entries are sent to New Relic. To disable this redaction, set `LOGS_REDACTION` to `false`. Default: `true`.
        </td>
      </tr>
    </tbody>
   </table>
5. Return to the <DNT>**Environments**</DNT> page for your app and <DNT>**Deploy**</DNT> or <DNT>**Transport**</DNT> your app into the selected environment.

<Callout variant="important">
  To start sending data to New Relic, you must redeploy your app and then restart it. Just restarting the app is not sufficient because additional dependencies need to be included.
</Callout>

## Tagging metrics for New Relic [#tagging]

To help you with analyzing your app metrics as described in the [App Metrics](https://docs.mendix.com/developerportal/operate/monitoring-with-apm/#app-metrics) section of Monitoring Your Mendix Apps with an APM Tool, Mendix adds tags to metrics from microflows and activities when using New Relic.

In addition to the runtime application logs, the following JSON-formatted metadata is automatically sent to New Relic:

* `environment_id`: Unique identifier of the environment
* `instance_index`: Number of the application instance
* `hostname`: Name of the application host
* `application_name`: Default application name, retrieved from the domain name
* `model_version`: Model version of the Mendix runtime
* `runtime_version`: Version of the Mendix runtime

You can filter the data by these fields.

## Custom tags [#custom]

If you use New Relic to monitor more than one app and environment, you will not be able to tell which app or environment these metrics apply to. To identify the metrics for your app and environment in New Relic, you need to add tags for the app name and environment.

Mendix recommends using the following tags:

* `app:{app_name}` (for example, `app:customermanagement`): This enables you to identify all metrics sent from your app
* `env:{environment_name}` (for example, \`env:accp\`\`): This enables you to identify metrics sent from a particular environment so you can separate out production metrics from test metrics
