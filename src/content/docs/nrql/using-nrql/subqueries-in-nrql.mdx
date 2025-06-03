---
title: Use subqueries for linking multiple queries
metaDescription: "How to use subqueries in NRQL, the New Relic query language."
redirects:
  - /docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql
freshnessValidatedDate: 2024-03-19
---

With NRQL, you can run a <DNT>**subquery**</DNT>, which is a query nested inside another query. A subquery is one query nested inside another query: they allow you to use the result of one query in another query. With subqueries, you can:

* Perform calculations on the child entities of a parent entity
* See error logs for hosts with high CPU load based on the infrastructure agent's CPU utilization

In NRQL, subqueries can appear in the [`SELECT`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#state-select) statement and [`WHERE`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-where) clause.

Here's an example query for getting a count of transactions with an above-average duration:

```sql
SELECT count(*) FROM Transaction WHERE duration > (SELECT average(duration) FROM Transaction)
```

A subquery's results must make sense in context. In the example above, the greater-than condition in the `WHERE` clause requires a subquery that returns a single value. A subquery that returns a set of values (e.g. a [`uniques()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-uniques) subquery) would fail.

You can also nest one subquery inside of another subquery. NRQL allows a maximum of three subqueries, nested or unnested, within a single query.

The subquery's time range will be the same as the outer query's, unless explicitly specified with [`SINCE`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-since)/[`UNTIL`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-until). In a dashboard, choosing a window from the [time picker](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) aligns the subquery's time range with the outer query's. If you've set <DNT>**Ignore Time Picker**</DNT> for that chart, then the subquery's time range and the outer query's time range will not be the same.

## Subquery execution [#subquery-execution]

During query execution, each subquery runs independently, and its result is used as a constant value, or set of values, in the outer query. Due to this execution model, subqueries may not reference attributes and values from the outer query.

The [query duration limit](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/#query-duration) is honored for queries with subqueries. This means that all subqueries and the outer query must complete execution within the duration limit.

The maximum number of results a subquery can return is the same as the [`LIMIT MAX` value](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit): 5,000. When that limit is exceeded, it may result in incomplete results and this error message: "Subquery may have reached the maximum result member limit, which may cause an incomplete result."

## Subqueries and nested aggregation [#subquery-vs-nested-aggregation]

Though they appear similar, subqueries are different from [nested aggregations](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query), which allow the aggregation of the result of a nested query. Nested aggregations are used in the `FROM` clause, while subqueries are used in the `SELECT` statement and `WHERE` clause.

## Limits [#subquery-limitations]

* Subqueries aren't supported in NRQL alert conditions or events to metrics (E2M) rules. Because queries with subqueries require making multiple passes over data, subqueries are incompatible with streaming alerts or other products based on streaming data processing.
* The `TIMESERIES` and `COMPARE WITH` clauses, which cause queries to return multiple sets of results, are not supported in subqueries.
* Subqueries can't appear in the `FACET` clause, though they can appear in the `WHERE` clauses used in `FACET CASES`.
* Has [limits on the number of results](#subquery-execution)

## Subquery examples [#subquery-examples]

Here are some example subqueries:

<CollapserGroup>
  <Collapser
    id="numeric-conditions"
    title="Numeric conditions"
  >
    You can use any query which returns a single numeric value, such as those using the aggregators `average()`, `count()`, `uniqueCount()`, or `latest()` in numeric conditions.

    The query below finds the count of transactions whose duration was greater than average:

    ```sql
    FROM Transaction SELECT count(*)
    WHERE duration > (FROM Transaction SELECT average(duration))
    ```
  </Collapser>

  <Collapser
    id="in-conditions"
    title="IN conditions"
  >
    Any query which returns a set of values, including those using `uniques()`, can be used in an `IN` condition.

    The query below calculates the average duration of transactions that are children of a particular entity:

    ```sql
    FROM Transaction SELECT average(duration) WHERE entityGuid IN
      (FROM Relationship SELECT targetEntityGuid
      WHERE sourceEntityGuid = 'MjUyMDUyOHxOUjF8V09SS0xPQUR8NzYzMDQ'
      AND relationshipType = 'CONTAINS')
      SINCE 1 day ago
    ```
  </Collapser>

  <Collapser
    id="string-condition"
    title="String condition with a faceted subquery"
  >
    When using a comparison operator (`=`, `!=`, `<`, etc.) with a faceted subquery, `LIMIT 1` must be specified in order to limit the result to a single value.

    The query below finds transaction errors associated with the latest transaction for the account with the highest average transaction duration:

    ```sql
    FROM TransactionError SELECT * WHERE guid = (FROM Transaction SELECT latest(guid) FACET accountId ORDER BY average(duration) LIMIT 1)
    ```
  </Collapser>

  <Collapser
    id="delta-query"
    title="Delta query"
  >
    You can use subquery results in calculations in the `SELECT` statement. A subquery may specify a different time range from the outer query.

    The query below charts the difference between the current average transaction duration and the average duration over the last week:

    ```sql
    FROM Transaction SELECT average(duration) -
      (FROM Transaction SELECT average(duration)
      SINCE 7 days ago) TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="multiple-subqueries"
    title="Multiple subqueries"
  >
    Up to three subqueries may appear in a single query.

    The query below finds the unique accounts responsible for transactions whose duration was greater than the 99th percentile:

    ```sql
    FROM Transaction SELECT uniques(accountId) WHERE guid IN
      (FROM Transaction SELECT uniques(guid) WHERE duration >
      (FROM Transaction SELECT percentile(duration, 99)))
    ```
  </Collapser>

  <Collapser
    id="function-argument"
    title="Subquery as a function argument"
  >
    Many NRQL functions can take a subquery as an argument.

    The query below builds a string showing individual transaction duration compared to the average:

    ```sql
    SELECT concat('This transaction duration: ', duration, '; average transaction duration: ',
      (SELECT average(duration) FROM Transaction), precision: 4) FROM Transaction
    ```
  </Collapser>
</CollapserGroup>
