---
title: 'Scheduled Search and Reporting is now generally available'
summary: 'Run NRQL queries on your own schedule and get notified when the results meet a condition you define.'
releaseDate: '2026-10-05'
learnMoreLink: 'https://docs.newrelic.com/docs/nrql/using-nrql/schedule-nrql-searches/'
---

New Relic is excited to share that Scheduled Search and Reporting is now generally available. Instead of manually re-running the same NRQL query to check on your data, Scheduled Search runs it for you, on whatever cadence you choose, and delivers the results straight to your inbox.

## What is Scheduled Search and Reporting?

Scheduled Search and Reporting lets you take any NRQL query and run it automatically on a recurring schedule: hourly, daily, weekly, or a custom cadence you define. It's built for the reports and checks you'd otherwise have to remember to run yourself: a daily error summary, a weekly top N breakdown, a recurring compliance or usage report. Set it up once, and New Relic keeps delivering fresh results on time, every time.

## Notification conditions

Not every scheduled query needs to land in your inbox on every run; often you only care when something looks wrong. With **Notification Conditions**, you can attach a condition based on the total number of results returned by the NRQL query (for example, when the result count equals, is greater than, or matches another specified threshold). This ensures you are notified only when the query results meet your defined criteria.

Learn more about [Scheduled Search and Reporting](https://docs.newrelic.com/docs/nrql/using-nrql/schedule-nrql-searches/).
