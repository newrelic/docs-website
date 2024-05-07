---
title: 'New NRQL subqueries for more powerful data exploration'
summary: 'Connect data across different sources in a single query'
releaseDate: '2022-07-06'
getStartedLink: 'https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql'
learnMoreLink: 'https://newrelic.com/blog/how-to-relic/nrql-subqueries'
---
[New Relic Query Language](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/)(NRQL) just got more powerful! With **subqueries**, you can now dive deeper to expand your analysis to include data from different data sources, time ranges, and entities in a single query.

A subquery is simply a NRQL query which is embedded inside of another query. Each subquery is evaluated, then the result is used during the execution of the outer query.

## NRQL subquery examples

Here are two examples. For more details on how to use subqueries, see the [examples in the docs](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql/#subquery-examples).

### Example #1

This query finds the number of transactions whose duration is above average:

```
SELECT count(*) FROM Transaction WHERE duration > (SELECT average(duration) FROM Transaction)
```
### Example #2

This query leverages multiple nested subqueries to find the unique accounts responsible for transactions whose duration was greater than the 99th percentile:

```
FROM Transaction SELECT uniques(accountId) WHERE guid IN
  (FROM Transaction SELECT uniques(guid) WHERE duration >
  (FROM Transaction SELECT percentile(duration, 99)))
```

## Demo

See how it works in the following video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/j1K4lCAkjSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Get started
- Review the [documentation](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql) and then try out your own queries!
- [Read the blog](https://newrelic.com/blog/how-to-relic/nrql-subqueries) for tips on using subqueries and see a few subquery examples.
- Share your feedback, post your own subqueries, and see even more examples in the [Explorers Hub discussion post.](https://discuss.newrelic.com/t/introducing-subqueries-in-nrql/188082)
