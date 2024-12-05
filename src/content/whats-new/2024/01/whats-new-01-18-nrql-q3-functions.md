---
title: 'Parsing and transforming data just got easier with jsonParse(), cidrAddress(), toTimestamp() and many more functions!'
summary: 'Plenty of new NRQL functions to work with!'
releaseDate: '2024-01-18'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions'
---

Data isn't always clean, and extracting the right fields in the right format can be difficult without the right tools. That is why today we are excited to announce multiple new NRQL features geared towards helping customers parse and transform their data in new ways. The following functions are now generally available to all customers:

* [jsonParse()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-jparse) - Parse JSON at query time
* [mapKeys()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-mapKeys) - Return the keys from your parsed JSON
* [mapValues()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-mapValues) - Return the values from your parsed JSON
* [convert()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-convert) - Convert from one metric unit to another (milliseconds to seconds)
* [cidrAddress()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-cidraddress) - Find the base network address of your IP address
* [toTimestamp()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-toTimestamp) - Convert a datetime string into an epoch time
* [toDatetime()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-toDatetime) - Convert an epoch time into a datetime string (in the format you want!)
* [encode()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-encode) - Encode your data into base64
* [decode()](https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-decode) - Decode your data from base64

For a deeper dive into each of these functions, check out the documentation via each link!

