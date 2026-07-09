---
title: 'Collect marks and measures with the browser agent'
summary: 'Build dashboards and monitor important durations that you are setting in your code'
releaseDate: '2025-09-30'
---

We're excited to announce that New Relic Browser offers the ability to capture any marks and measures you are setting in your application code. Marks and measures are standard methods to observe and report on the performance of your web pages. They're generic events native to the browser and will be stored as BrowserPerformance events. With this telemetry data, you can:

**Gain Front-End Insights:** Use marks and measures to capture any number of task durations in your web apps that are key to your business insights or app health. [Read our blog](https://newrelic.com/blog/how-to-relic/monitor-and-optimize-complex-web-apps-with-new-relic) for what we track at New Relic. 

**Include in Custom Dashboards:** Query the BrowserPerformance event and then add this data to any new or existing, custom dashboards to track performance metrics. [Here is an optional, example dashboard](https://newrelic.com/instant-observability/browser-marks-and-measures) for marks and measures to install.

**Monitor Health via Alerts:** Also you can set up NRQL alert conditions to monitor the health of these metrics in your apps. [See our docs.](https://docs.newrelic.com/docs/alerts/create-alert/create-alert-condition/create-nrql-alert-conditions/) 

In addition to key measurement durations, you can even opt to collect any custom details from the native Performance API that would then be added to the BrowserPerformance event as well. In the browser UIs, you would be able to filter for these attributes or query for them to include in custom dashboards.