---
title: 'Use nested aggregation to make additional computations'
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to use nested aggregation to understand how many users complete a set of steps in a procedure.'
redirects:
  - /docs/query-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query
  - /docs/insights/new-relic-insights/using-new-relic-query-language/simulate-sql-join-functions-insights
  - /docs/insights/nrql-new-relic-query-language/using-nrql/simulate-sql-join-functions-insights
  - /docs/query-data/nrql-new-relic-query-language/nrql-query-examples/simulate-sql-join-functions-insights
  - /docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/simulate-sql-join-functions-insights
  - /docs/insights/use-insights-ui/explore-data/simulate-sql-join-functions-insights/
  - /docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query
freshnessValidatedDate: 2024-03-19
---

With nested aggregation, you can complete a [NRQL query](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql), then make additional computations using the results of that query. Nested aggregation provides NRQL capabilities similar to the class of SQL subqueries or subselects where the subquery is in the `FROM` clause of the outer query.

<Callout variant="tip">
  This feature is different from our [subquery feature](/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql), which allows for subqueries in `SELECT` and `WHERE` clauses.
</Callout>

Nested aggregation can help you to answer questions like these without building multiple queries:

* How can I count the requests per minute for my application, then get the maximum requests per minute for the last hour?
* How can I compute the average CPU usage of all my servers or hosts, and list only the ones with usage over 90%?
* From all my user sessions, how can I figure out what percentage bounced immediately?

## Nested aggregation query structure [#requirements]

Every NRQL query [must begin with a `SELECT` statement or a `FROM` clause](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions). A nested aggregation query uses both a `SELECT` statement and a `FROM` clause and applies them to a whole query or queries contained within parentheses.

A complete and properly formatted nested aggregation query looks something like this:

```sql
SELECT function(attribute)
FROM (
  SELECT function(attribute)
  FROM dataType
  WHERE attribute
  TIMESERIES integer units
)
```

A few other details about query and clause behavior:

* Nested queries can have more than two levels.
* You can apply both `TIMESERIES` and `FACET` to any part of the nested query. They don't have to be identical at all levels.
* `SINCE`, `UNTIL`, and `COMPARE WITH` clauses apply to the entire query, and you can only use them at the outermost level.

## Nested aggregation query examples [#examples]

Here are some examples of nested queries:

<CollapserGroup>
  <Collapser
    id="total-tx"
    title="Total transactions and highest one-minute response rate"
  >
    In this example, the inner query first counts the transactions for `myApp` for each of the last 60 minutes, then the outer query returns the highest 1-minute request rate.

    Also, by giving a name to the result of the first query (`as rpm`), you can create a label for the value returned. Without adding the label, this query will return the value as count for use in the outer query.

    ```sql
    SELECT max(rpm)
    FROM (
      SELECT count(*) as rpm
      FROM Transaction
      WHERE appName = 'myApp'
      TIMESERIES 1 minute
    )
    ```
  </Collapser>

  <Collapser
    id="avg-cpu"
    title="Average CPU usage and CPU usage over 90%"
  >
    In this example, the inner query calculates the average CPU usage for all hosts, then the outer query filters the results down to only hosts with CPU usage over a risky threshold (90%).

    ```sql
    SELECT hostname, cpu
    FROM (
      SELECT average(cpuPercent) as cpu
      FROM SystemSample
      FACET hostname
      TIMESERIES 1 minute
    )
    WHERE cpu > 90
    ```
  </Collapser>

  <Collapser
    id="pageviews"
    title="Page views in each user session and number of sessions with only one page view"
  >
    In this example, the inner query calculates the number of `PageView` events in each user session, then the outer query computes what percentage of those sessions only had a single associated view.

    ```sql
    SELECT percentage(count(*), WHERE sessionLength = 1)
    FROM (
      SELECT count(*) as sessionLength
      FROM PageView
      FACET session
    )
    ```
  </Collapser>

  <Collapser
    id="x-slowest-entity"
    title="Number of entities out of the top N transactions that are slower than X"
  >
    In this example, the inner query finds the top entity guids with the slowest average transaction duration. Then, the outer query finds how many of those queries are slower than the threshold. Here, the query selects the top 50 queries, and measures against a duration threshold of 1 second.

    ```sql
    SELECT count(avgDurations)
    FROM (
      SELECT average(duration) AS avgDurations
      FROM Transaction
      FACET entity.guid
      LIMIT 50
    )
    WHERE avgDurations > 1
    ```
  </Collapser>

  <Collapser
    id="disk-writes-percentile"
    title="Percentile of hosts with highest average disk writes per hour"
  >
    In this example, there are two nested aggregations. The innermost query finds the average `diskWritesPerSecond` per hour for each host. The next query finds the maximum average for each host, and the outermost query computes the 50th, 75th, and 99th percentile of those maximums.

    ```sql
    SELECT percentile(avgMaxWrites, 50, 75, 99)
    FROM (
      SELECT max(avgWrites) AS avgMaxWrites
      FROM (
        SELECT average(diskWritesPerSecond) as avgWrites
        FROM SystemSample
        FACET hostname
        TIMESERIES 1 hour
        LIMIT 50
      )
      FACET hostname
      LIMIT 50
    )
    SINCE 1 day ago
    ```
  </Collapser>
</CollapserGroup>
