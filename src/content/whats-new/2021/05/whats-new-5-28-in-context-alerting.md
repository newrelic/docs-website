---
title: 'NRQL Alert Conditions, with no NRQL required'
summary: 'Now create alert conditions directly from the query builder'
releaseDate: '2021-05-28'
getStartedLink: 'https://one.newrelic.com/launcher/nr1-core.home?packages=nrai@0.2.417-c55ed87e&platform[timeRange][duration]=259200000&platform[$isFallbackTimeRange]=true&pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5ob21lLXNjcmVlbiJ9&overlay=eyJuZXJkbGV0SWQiOiJ3YW5kYS1kYXRhLWV4cGxvcmF0aW9uLmRhdGEtZXhwbG9yZXIiLCJpbml0aWFsQWN0aXZlSW50ZXJmYWNlIjoiY2hhcnRCdWlsZGVyIiwiaW5pdGlhbEFjY291bnRJZCI6MTYwNjg2MiwiaW5pdGlhbExpbWl0IjoxMCwiaW5pdGlhbFRpbWVXaW5kb3ciOnsic3RhcnQiOm51bGwsImVuZCI6Im5vdyIsIm9mZnNldCI6MTgwMDAwMH0sImluaXRpYWxUaW1lV2luZG93T3ZlcnJpZGUiOm51bGwsImluaXRpYWxGaWx0ZXJzIjoiIiwiaW5pdGlhbFBsb3RBZ2dyZWdhdGUiOnsicGxvdCI6bnVsbH0sImluaXRpYWxGYWNldCI6bnVsbCwiaW5pdGlhbENvbXBhcmVXaXRoIjpudWxsfQ=='
---
With the new ability to create an alert condition directly within the query builder, configuring alerts to cover all of your services and entities continues to get easier. 

If you're not comfortable with the New Relic Query Language (NRQL), you can create basic queries using the query builder tool, and then create an alert condition from the chart that you create. The auto-complete functionality of the query builder lets you explore your data and create alerts without the need to know anything about NRQL. 

Alternatively, you can use the Data Explorer to browse the metrics and event data in your account, click your way to a chart, and create and create an alert condition from there as well. 

When creating an alert, we recommend creating a dynamic threshold based alert, which we call a ‘baseline’ threshold, so that you do not need to understand the nuances of creating a static threshold configuration.  

Below are the instructions to create an alert condition from the query builder:

1. From the very top nav of New Relic One, click **Query your data**.
2. Choose your query type: Basic, NRQL, or PromQL.
3. Run the query.
4. From the action menu on the chart, choose **Create Alert Condition**.

![Annimated gif showing Query builder](./images/query_builder_edited_1.gif "Annimated gif showing Query builder")