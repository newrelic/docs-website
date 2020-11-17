---
name: isPrimaryApp
events:
  - NrDailyUsage
---

Boolean. true means the application is the primary app. false means the app is one of several apps that an agent reports data for. Deprecated.

For more on multiple app names in APM and Browser, see [Use multiple names for an app](https://docs.newrelic.com/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app). The sum of events where this attribute is true will give an accurate total of page views when you are using the multiple app names feature. Counting events where this attribute is false will result in over-counting of usage.