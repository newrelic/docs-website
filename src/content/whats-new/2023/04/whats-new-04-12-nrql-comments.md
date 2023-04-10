---
title: 'NRQL queries now support comments'
summary: 'Document or debug your NRQL queries using comments'
releaseDate: '2023-04-12'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#comments'
---

NRDB queries can now include both single- and multi-line comments.

Single-line comments start with '--' or '//', after which everything will be ignored up to the end of the line. Multi-line comments are enclosed within '/*' and '*/' and everything in between will be ignored:

![NRQL with comments](./images/nrql_comments.png "NRQL with comments")

Comments are easy to use and allow adding context to a complex query, commenting out a line temporarily, or just explaining the events or attributes being queried.  Read more in our [NRQL Reference](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#comments)!
