---
title: 'Deprecating inspected count limits for all customers'
summary: 'Offering customers a better experience by eliminating dropped queries, removing 15 minute reset time, and doubling query capacity for all data options.'
releaseDate: '2024-01-22'
learnMoreLink: 'https://newrelic.com/blog/best-practices/retiring-inspected-count-limits'
---

Inspected Count (IC) is the internal unit of measure to calculate the “cost” of a query, or the resourcing cost of how many data points were inspected to process the query.
https://newrelic.com/blog/best-practices/retiring-inspected-count-limits

When a customer-initiated query is run, either from a query or a UI page load, that query inspects a certain number of data points in the NRDB database. The IC limit is the cumulative cost of inspected customer data points over a 15 minute time range. These limits differ depending on which data option you have.

IC limits resulted in a substandard customer experience. When customers exceed these limits, they would need to wait 15 minutes before limits reset. Today, we’re announcing that we have removed IC limits for all customers. This has several immediate benefits:

* No dropped queries due to IC limits.
* No 15 minute wait time for limits to reset.
* When the new limits are reached, queries may slow down but will not be rejected.
* Doubling query capacity from 10B to 20B data points per min for Data and 34B to 60B data points per min for Data Plus.

**Next steps**

To learn more about the new max query limits for each data option, check out our [documentation](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing/).
