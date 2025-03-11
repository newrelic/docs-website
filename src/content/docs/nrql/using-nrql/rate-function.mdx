---
title: 'Use rate() to visualize time periods'
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to use the rate() function to visualize event occurrences over a set period of time.'
redirects:
  - /docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/rate-function
freshnessValidatedDate: 2024-03-19
---

The `rate()` function aggregates occurrences of an event into buckets based on time windows. You can use this to visualize the frequency of event occurrences. For example, you can view how many errors occurred per hour in the past day. You can get a lot of use out of this function in NRQL if you have large windows of time you'd like to monitor, but need to visualize smaller periods of time within those larger windows.

## Use the rate() function

When using `rate()`, you can use the `TIMESERIES` keyword to generate a line chart with rates over time. Omitting `TIMESERIES` will generate a billboard view showing a single rate value averaged over time. Here's a query that will visualize transaction errors per minute over the last 30 minutes in a line chart form:

```sql
SELECT rate(count(*), 1 minute) AS 'Errors' FROM TransactionError TIMESERIES SINCE 30 minutes ago
```

<img
  title="Rate function with time series"
  alt="A screenshot displaying an example of the rate() function"
  src="/images/example_rate_function.webp"
/>

Running the same query without including `TIMESERIES` will display a single value representing the average occurrences over a period of time.

<SideBySide>
  <Side>
    ```sql
    SELECT rate(count(*), 1 minute) AS 'Errors' FROM TransactionError SINCE 30 minutes ago
    ```
  </Side>

  <Side>
    <img
      title="Rate function without time series"
      alt="A screenshot displaying an example of the rate() function without TIMESERIES"
      src="/images/example_rate_function_no_timeseries.webp"
    />
  </Side>
</SideBySide>

## Use latestRate() to track rate of change

The `latestRate()` function uses a specified attribute and time interval to return the rate of change of a value over the two most recent data points. The function's units will be in `change in attribute` / `time window`. You can use this function to see leading-edge trends.

Here's an example query that will return the change in duration per second for the past two transaction errors:

<SideBySide>
  <Side>
    ```sql
    SELECT latestrate(duration, 1 second) FROM TransactionError SINCE 30 minutes ago
    ```
  </Side>

  <Side>
    <img
      title="Latestrate function"
      alt="A screenshot displaying an example of the latestRate() function"
      src="/images/example_latestrate_function.webp"
    />
  </Side>
</SideBySide>

<Callout variant="important">
  Remember that the `latestRate()` function uses the two most recent datapoints with sometimes volatile results. Consider just using `rate()` if you'd like an average over larger buckets of event occurrences.
</Callout>

## Rate() examples

<CollapserGroup>
  <Collapser
    id="error-by-hostname"
    title="Visualize error rate by host"
  >
    To chart lines based on their host, you can `FACET` by `host`. This example shows how you can use the `rate()` function to identify a bad host:

    ```sql
    SELECT rate(count(*), 1 minute) FROM TransactionError TIMESERIES SINCE 30 minutes ago FACET host
    ```

    Running the query returns a chart with separate lines for each host.
  </Collapser>

  <Collapser
    id="average-appname-errors"
    title="Average errors over the past 30 minutes by appName"
  >
    If you want to view errors by application, you can `FACET` by `appName`. This example shows how you can identify the average errors by application over the past hour:

    ```sql
    SELECT rate(count(*), 1 minute) FROM TransactionError SINCE 30 minutes ago FACET appName
    ```

    Running the query returns a table of results by application name.
  </Collapser>
</CollapserGroup>
