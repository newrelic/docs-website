---
title: 'Cumulative distribution functions in NRQL'
summary: 'New cdfPercentage() and getCdfCount() functions are now available in NRQL'
releaseDate: '2023-07-31'
---

The **cumulative distribution function** ([cdf](https://en.wikipedia.org/wiki/Cumulative_distribution_function)) gives the probability that a value is less than or equal to a threshold.

In NRQL, you can use the `cdfPercentage()` function to show what percentage of a numeric or distribution metric attribute's values are less than one or more thresholds. The `getCdfCount()` function returns how many of a numeric or distribution metric attribute's values are less than a threshold.

This query returns the percentages of page views where first paint happens in 0.5 seconds or less, and in 1 second or less:

!["Screenshot showing cdf function usage"](./images/cdf.png "Screenshot showing cdf function usage")

Take a look at our documentation on [cdfPercentage()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-cdfPercentage) and [getCdfCount()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-getCdfCount) to learn more!
