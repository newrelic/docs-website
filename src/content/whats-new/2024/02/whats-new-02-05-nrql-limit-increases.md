---
title: 'NRQL Query Result Limits are Increasing'
summary: 'The maximum result limit for NRQL queries is increasing from 2000 to 5000'
releaseDate: '2024-02-05'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit'
---


NRQL Query Result Limits are increasing! When querying New Relic with NRQL, the `LIMIT` clause is used to specify the maximum number of results to be returned from a query. The previous maximum of 2000 results is increasing to a new maximum of 5000. This increase will allow you to get more from your NRQL queries in your dashboards, the Query Builder, and more.

This change will affect queries which make use of the `LIMIT MAX` clause. The meaning of `LIMIT MAX` will be changing from 2000 to 5000 as a result of the limit increase. A query using `LIMIT MAX` that previously returned 2000 results will now return 5000 results, if the underlying data is populous enough. Some queries that use `LIMIT MAX`, and have previously succeeded, may fail due to the larger limit causing timeouts or being rejected for the query being too complex. If you have queries that use `LIMIT MAX` that you do not wish to return more results or which you find become unable to run successfully at the higher limit of 5000, you can modify them to use `LIMIT 2000` instead.

Queries that do not specify a `LIMIT` clause will not change. Default result limits will be unaffected. Similarly, queries which already specify an explicit `LIMIT` value of 2000 or less will not be affected.
