---
title: 'Session replay now has its own billing category'
summary: 'Browser and Mobile Session Replay data is reported under new billing categories, separate from browser and mobile events. This is a reporting change only.'
releaseDate: '2026-09-28'
learnMoreLink: 'https://docs.newrelic.com/docs/data-apis/manage-data/manage-data-coming-new-relic/#sources-list'
---

New Relic now reports session replay data (both Browser and Mobile) under its own billing category in Data ingestion and usage, instead of under browser events and mobile events.

This is a reporting change only: your session replay functionality, pricing, and total data ingested are unaffected. If you use NRQL to query usage data, for example faceting or filtering on `usage.metric` from `NrIngestedBytes`, update your queries to include the new categories: `BrowserSessionReplay` and `MobileSessionReplay`.

Learn more about [data ingestion sources](https://docs.newrelic.com/docs/data-apis/manage-data/manage-data-coming-new-relic/#sources-list).
