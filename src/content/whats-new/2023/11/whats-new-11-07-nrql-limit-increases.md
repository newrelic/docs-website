---
title: 'NRQL Query Result Limits are Increasing'
summary: 'The maximum result limit for NRQL queries is increasing from 2000 to 5000'
releaseDate: '2023-11-07'
learnMoreLink: 'TODO'
---


NRQL Query Result Limits are increasing! When querying New Relic with NRQL, the `LIMIT` clause is used to specify the maximum number of results to be returned from a query. The maximum allowable value has been 2000, and this is increasing to a value of 5000. This increase will allow you to get more from your NRQL Queries in your dashboards, Query Builder, and more.

This change will affect queries which make use of the `LIMIT MAX` clause, as the meaning of `LIMIT MAX` will be changing from 2000 to 5000 as a result of the limit increase. A query using `LIMIT MAX` that previously returned 2000 results will, if the underlying data is populous enough, now return 5000 results. Some queries that use `LIMIT MAX` and have previously succeeded may fail due to the larger limit causing timeouts or being rejected for the query being too complex. If you have queries that use `LIMIT MAX` that you do not wish to return more results or are unable to run successfully at the higher limit of 5000, please modify them to use `LIMIT 2000` instead.

Queries that do not specify a `LIMIT` clause will not change, as default result limits will be unaffected. Similarly, queries which already specify a `LIMIT` value of 2000 or less will also not be affected.
