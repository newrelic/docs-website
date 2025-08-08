---
title: 'UniqueCount High Precision Mode and Increased Argument Support is now Generally Available'
summary: 'Obtain higher precision results and provide more arguments to your uniqueCount() queries.'
releaseDate: '2025-08-13'
learnMoreLink: 'https://docs.newrelic.com/docs/nrql/nrql-syntax-clauses-functions/#func-uniqueCount'
---

We are excited to announce the general availability of a high precision mode and increased argument support for the `uniqueCount()` NRQL function. These new features will allow you to make your `uniqueCount()` queries more powerful and accurate, giving you greater confidence in your results.

## Obtaining Higher Precision Results From UniqueCount
The `uniqueCount()` function returns the number of unique values recorded for one or more attributes. It provides exact results for up to 256 unique values, and if more are found it will give an approximate result with a standard error of 3.25%. 

You can now supply a `precision` argument to `uniqueCount()` with a value in the range of 256 - 50,000 to increase the threshold for exact results up to 50,000! Higher precision values also proportionally reduce the standard error when returning an approximate result, with a `precision` of 50,000 having a standard error of 0.14%.

## Increased Argument Support Within UniqueCount
The `uniqueCount()` function accepts one or more arguments and returns the number of unique combinations of all the arguments provided. The `uniqueCount()` function previously allowed a maximum of 20 arguments. You can now use the `uniqueCount()` function with up to 32 arguments!

Check out the [uniqueCount()](https://docs.newrelic.com/docs/nrql/nrql-syntax-clauses-functions/#func-uniqueCount) function documentation for more details.
