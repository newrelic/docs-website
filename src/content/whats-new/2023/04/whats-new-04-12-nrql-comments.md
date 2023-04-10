---
title: 'NRQL queries now support comments'
summary: 'Document or debug your NRQL queries using comments'
releaseDate: '2023-04-12'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#comments'
---

Comments can now be used in NRQL queries to easily add context to a complex query, comment out a line temporarily, or just explain the events or attributes being queried in NRDB.

Both single and multi-line comments can be added to NRQL queries. Single-line comments start with '--' or '//', after which everything will be ignored up to the end of the line. Multi-line comments are enclosed within '/*' and '*/' and everything in between will be ignored:

![NRQL with comments](./images/nrql_comments.png "NRQL with comments")

Read more in our [NRQL Reference](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#comments) to get started.
