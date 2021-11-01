---
title: 'Extract valuable data with regex capture'
summary: 'Finding patterns in strings easily with this powerful tool'
releaseDate: '2021-06-24'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions'
getStartedLink: 'https://newrelic.com/blog/how-to-relic/using-regex-capture'
---

We've made it easier than ever to query and extract useful data from strings such as URLs, log messages, and more, using Regex capture. Regular expressions are an extremely powerful tool for finding patterns in strings—and with Regex capture, you can now leverage that power to improve your NRQL queries. 

Regex capture works directly within NRQL using the `capture` function, allowing you to use regular expressions in your queries to extract focused data, such as this:

`capture(request_url, r'.*/accounts/(?P<account>\d+).*')`

The `capture` function takes two arguments. The first is the `request_url`: the attribute containing the URL string. The second argument is a regular expression pattern. Regex capture is built on Re2 syntax, a regular expression library created by Google.

As an example, the below query will find which accounts are using specific service endpoints (the `request_url`) most frequently:

`FROM Transaction SELECT count(*) WHERE request_url LIKE '%data%' LIMIT 50 FACET capture(request_url, r'.*/accounts/(?P<account>\d+).*')`

## Get started today

1. Start using Regex capture in your NRQL queries by choosing **Query your Data** in the [New Relic One UI](https://one.newrelic.com).
2. Learn more by reading our [NRQL documentation](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/).
3. Check out our [newrelic.com/blog](https://newrelic.com/blog/how-to-relic/using-regex-capture) with example queries.
