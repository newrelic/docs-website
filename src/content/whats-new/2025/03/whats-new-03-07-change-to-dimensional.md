---
title: 'Upcoming change to count(*) in Dimensional Metrics Queries'
summary: 'Upcoming Change to count(*) in Dimensional Metrics Queries'
releaseDate: '2025-03-07'
---

We’re changing the behavior of **count(*)** when used in [dimensional metric](https://docs.newrelic.com/docs/data-apis/understand-data/new-relic-data-types/#dimensional-metrics) **queries** effective on **June 9th, 2025**. The goal of this change is to make the behavior of the **count(*)** function aligns with the behavior in other types of data.

  * **For Alerts**: To determine if alert queries need to be modified or to make changes to alert thresholds, compare the results with the same query using **count(%)** in place of **count(*)**. 
  * **For Queries and Dashboards**: If the query was intended to count the number of datapoints use **datapointCount()** otherwise, **no change is required**. 

## What’s changing?

Currently when executing a query such as **FROM Metric SELECT count(*)**, the result returned is the count of the number of data points processed by the query.

After the change, **count** will always return the sum of the count field, which is in line with how **count(*)** behaves when querying other data types.

For example, the `newrelic.goldenmetrics.apm.application.errorCount` metric is a dimensional metric that records the number of errors seen by an application. To know how many errors have been reported across all applications in the last hour, the following query can be used:

**FROM Metric SELECT count(*) WHERE metricName = `'newrelic.goldenmetrics.apm.application.errorCount'` SINCE 1 hour ago**

To know how many times this metric was reported over the last hour, the **datapointCount()** function can be used:

**FROM Metric SELECT datapointCount() WHERE metricName = `'newrelic.goldenmetrics.apm.application.errorCount'` SINCE 1 hour ago**

<Callout title="preview">
  This change only applies to queries using **count(*)** on the **metric event type**. All other uses of the count function with dimensional metrics, such as **count(metricName)**, were unambiguous and will continue to behave as they do today.
</Callout>

## What action is needed?

  * Review any usage of **count(*)** in dimensional metrics queries, dashboards, and alert conditions to determine if any changes are needed. 
  * If the query was intended to count the number of datapoints, update the query to use the **datapointCount()** function instead of **count(*)**. 
  * Otherwise, leave the query as-is and it will pick up the new semantics and return the sum of the count field for any matching metrics.

**For ad hoc queries and dashboards**: To identify queries or dashboards that are using **count(*)** against dimensional metric data, run a query like the following against the NrdbQuery event to get a list of uses:

**FROM NrdbQuery SELECT uniques(query), latest(source.name), latest(source.dashboardId), latest(user) WHERE query.eventType = 'Metric' AND query LIKE '%count(*)%' SINCE 1 day ago LIMIT MAX**


**For alert conditions**: To identify alerts using **count(*)**, use the **Alerts > Alert Conditions** page within the New Relic UI to view and search for New Relic Query Language (NRQL) queries associated with alert conditions. Then compare the query with the same query using **count(%)** either within the alert condition builder or the New Relic query builder to determine whether it’s needed to modify the query or make changes to alert thresholds.

## Additional Support

We understand that these changes may require some adjustments to your routine. Please know that we’re committed to supporting you throughout this process. If you have any questions or need further assistance, please don't hesitate to [reach out to our support team](https://docs.newrelic.com/docs/new-relic-solutions/solve-common-issues/find-help-get-support/).