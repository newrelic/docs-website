---
title: Alert analysis for Applied Intelligence
summary: Alert analysis gives you greater context for your alert violations and notifications.
releaseDate: '2020-08-18'
learnMoreLink: 'https://blog.newrelic.com/product-news/how-to-analyze-alert-violations/'
getStartedLink: 'https://docs.newrelic.com/docs/alerts-applied-intelligence/applied-intelligence'
---

Dig deeper into alerts you receive with automatic alert analysis, which provides context and an explanation about each alert violation. You can also get a structured view and additional information about the entity and what was happening around it when the threshold was crossed to help you troubleshoot even faster. Alert analysis includes:

* A chart of the violation
* Details about recent activity, the violation, and the entity
* A suggestion of key attributes that may explain the alert
* A comparison of signals showing associated anomalies (if you’ve configured Proactive Detection) and related signals for this specific entity, such as CPU, throughput, and more, that occurred around the same time as the alert violation

![A screenshot of alert analysis features with labels.](./images/alert-analysis-details.webp "A screenshot of alert analysis features with labels.")

To view an alert analysis, in the **[one.newrelic.com](https://one.newrelic.com/all-capabilities)** top nav, click **Alerts & AI**, then in the side nav under Incident Intelligence click **Issue Feed**.

When you open an issue, you’ll find **Related Activity**. If you want to dig into a detailed analysis of the alert, click **Analyze**.

If you’re familiar with the [Proactive Detection analyze anomaly page](https://blog.newrelic.com/product-news/new-capabilities-proactive-detection/), this will look very familiar, as its information is structured in the same layout. In the upper left, you’ll see a chart of the alert violation. To get started, you’ll need to configure [Incident Intelligence](/docs/alerts-applied-intelligence/applied-intelligence/incident-intelligence/get-started-incident-intelligence) within our Applied Intelligence. Alert analysis integrates with [Proactive Detection](/docs/alerts-applied-intelligence/applied-intelligence/proactive-detection/proactive-detection-applied-intelligence) and Incident Intelligence, so if you want additional context—such as related anomalies—you’ll want to configure Proactive Detection.

To get started with Applied Intelligence, [sign up](https://newrelic.com/signup) for a free New Relic account and get 1,000 Incident Intelligence events free every month.
