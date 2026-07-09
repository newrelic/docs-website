---
title: 'Change to count(*) in Dimensional Metrics Queries'
summary: 'Upcoming change to count(*) in Dimensional Metrics Queries'
releaseDate: '2025-03-07'
---

We’re changing the behavior of `count(*)` when used in [dimensional metric](https://docs.newrelic.com/docs/data-apis/understand-data/new-relic-data-types/#dimensional-metrics) **queries** effective on **June 9th, 2025**. The goal of this change is to make the behavior of the `count(*)` function align with the behavior in other types of data.

  * **For Alerts**: To determine if alert queries need to be modified or to make changes to alert thresholds, compare the results with the same query using `count(%)` in place of `count(*)`. 
  * **For Queries and Dashboards**: If the query was intended to count the number of data points, use **datapointCount()**; otherwise, **no change is required**. 

## What’s changing?

Currently, when executing a query such as `FROM Metric SELECT count(*)`, the result returned is the count of the number of data points processed by the query.

After the change, `count` will always return the sum of the count field, which is in line with how `count(*)` behaves when querying other data types.

For example, the `newrelic.goldenmetrics.apm.application.errorCount` metric is a dimensional metric that records the number of errors seen by an application. To know how many errors have been reported across all applications in the last hour, the following query can be used:

```sql
FROM Metric SELECT count(*)
WHERE metricName = 'newrelic.goldenmetrics.apm.application.errorCount'
SINCE 1 hour ago
```

To know how many times this metric was reported over the last hour, the `datapointCount()` function can be used:

```sql
FROM Metric SELECT datapointCount()
WHERE metricName = 'newrelic.goldenmetrics.apm.application.errorCount'
SINCE 1 hour ago
```


***NOTE: This change only applies to queries using `count(*)` on the **metric event type**. All other uses of the count function with dimensional metrics, such as `count(metricName)`, were unambiguous and will continue to behave as they do today.***


## What action is needed?

  * Review any usage of `count(*)` in dimensional metrics queries, dashboards, and alert conditions to determine if any changes are needed. 
  * If the query was intended to count the number of data points, update the query to use the `datapointCount()` function instead of `count(*)`. 
  * Otherwise, leave the query as-is, and it will pick up the new semantics and return the sum of the count field for any matching metrics.

**For ad hoc queries and dashboards**: To identify queries or dashboards that are using `count(*)` against dimensional metric data, run a query like the following against the NrdbQuery event to get a list of uses:

```sql
FROM NrdbQuery SELECT uniques(query), latest(source.name), latest(source.dashboardId), latest(user)
WHERE query.eventType = 'Metric' AND query LIKE '%count(*)%'
SINCE 1 day ago LIMIT MAX
```

**For alert conditions**: To identify alerts using `count(*)`, use the **Alerts > Alert Conditions** page within the New Relic UI to view and search for New Relic Query Language (NRQL) queries associated with alert conditions. Then compare the query with the same query using `count(%)` either within the alert condition builder or the New Relic query builder to determine whether it’s needed to modify the query or make changes to alert thresholds.

## How does metric types behave with `count` functions

<table>
  <tr>
    <th>Metric Type</th>
    <th>Current count(*) Behavior before EOL</th>
    <th>count(%) Behavior (New behavior of count(*) after EOL)</th>
    <th>sum(%) Behavior</th>
    <th>datapointcount() Behavior</th>
  </tr>
  <tr>
    <td>Summary:
        <ul><li>[count]</li>
        <li>[total]</li>
        <li>[min]</li>
        <li>[max]</li></ul>
    </td>
    <td>Returns the total number of measurements that went into the summary over the interval.</td>
    <td>Returns the sum of the [count] field across all summary measurements</td>
    <td>Returns the sum of the [total] field across all summary measurements</td>
    <td>Returns the number of summary metrics reported.</td>
  </tr>
  <tr>
    <td>Gauge:
        <ul><li>[count]</li>
        <li>[total]</li>
        <li>[min]</li>
        <li>[max]</li>
        <li>[latest]</li></ul>
    </td>
    <td>Returns the total number of measurements that went into the gauge over the interval.</td>
    <td>Returns the sum of the [count] field across all gauge measurements</td>
    <td>Returns the sum of the [total] field across all gauge measurements</td>
    <td>Returns the number of gauge metrics reported.</td>
  </tr>
  <tr>
    <td>Count:
        <ul><li>[value]</li></ul>
    </td>
    <td>Returns the total number of counters (measurements) recorded over the interval. For aggregates, this is the number of aggregate buckets not the number of counters.</td>
    <td>Returns the total number of counters (measurements) recorded over the interval. </td>
    <td>Returns the total number of count values for a count metric.</td>
    <td>Returns the number of count metrics reported.</td>
  </tr>
  <tr>
    <td>Histogram/Distribution:
          <ul><li>[count]</li>
          <li>[buckets]</li>
          <li>[min]</li>
          <li>[max]</li>
          <li>[sum]</li>
          <li>[total]</li></ul>
    </td>
    <td>Returns the number of histogram data points.</td>
    <td>Returns the sum of the [count] field across all histogram/distribution measurements</td>
    <td>Returns the sum of the [total] field across all distribution measurements</td>
    <td>Returns the number of histogram/distribution metrics reported.</td>
  </tr>
</table>


## Additional Support

We understand that these changes may require some adjustments to your routine. Please know that we’re committed to supporting you throughout this process. If you have any questions or need further assistance, please don't hesitate to [reach out to our support team](/docs/new-relic-solutions/solve-common-issues/find-help-get-support/).
