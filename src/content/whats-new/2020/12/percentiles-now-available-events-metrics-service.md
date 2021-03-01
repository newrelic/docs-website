---
title: Percentiles now available in events-to-metrics service
summary: 'For the events-to-metrics service, return an attribute''s approximate value at a given percentile.'
releaseDate: '2020-12-01'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions#func-percentile'
getStartedLink: 'https://docs.newrelic.com/docs/accounts/accounts/data-management/introduction-events-metrics-service'
---

New Relic provides an [events-to-metrics service](https://docs.newrelic.com/docs/accounts/accounts/data-management/introduction-events-metrics-service) that lets you generate [metric data](https://docs.newrelic.com/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types#dimensional-metrics) from your [event data](https://docs.newrelic.com/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types#event-data) and [log data](https://docs.newrelic.com/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types#log-data). Metrics are aggregates of your event and/or log data and are optimal for analyzing and monitoring trends over long time periods.

Now you can use the [`percentile()`](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions#func-percentile) function to return an attribute's approximate value at a given percentile. To do so, create an events-to-metrics NRQL query rule using the [distribution metric type](https://docs.newrelic.com/docs/telemetry-data-platform/ingest-manage-data/convert-event-data-metrics/events-metrics-create-metrics#create-nrql). The distribution metric type creates a distribution metric data point for each time window (currently 1 minute).

Example: SELECT distribution(duration) AS 'service.responseTime' FROM Transaction WHERE appName = 'Data Points Staging' FACET name, appName, host

Once you’ve created your distribution metric type, you can query your desired percentile as follows:

SELECT percentile(service.responseTime, 95) FROM Metric
