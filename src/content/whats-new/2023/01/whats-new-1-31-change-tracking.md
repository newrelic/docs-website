---
title: 'Gain context with change tracking, now generally available'
summary: 'Change tracking marks critical changes and deployments alongside performance data—adding context to anomalies, issues, errors, and incidents.'
releaseDate: '2023-01-31'
learnMoreLink: 'https://newrelic.com/platform/change-tracking'
getStartedLink: 'https://docs.newrelic.com/docs/change-tracking/change-tracking-introduction/'
---


We’re excited to announce that change tracking is now generally available to all customers! We’ve made it easy to understand how changes to your system, such as code deployments, configuration changes, and business events, impact application and service performance.

## Get full stack deployment and event context with change tracking

Change tracking allows you to directly tie the performance of your software to recent changes from interfaces across New Relic. In APM, mobile, browser, service levels, alerts, and custom dashboards (and more soon), you can see how deployments and other changes relate to shifts in golden signals, errors, log attributes, incidents, and more.

You can make these insights actionable with change event details such as commit SHAs, deep links, group IDs, CI/CD metadata, timestamps, descriptions, version numbers, links to changelogs, and more. Change tracking helps you access this wealth of information and see your best next steps without losing context&mdash;simply click on a deployment marker or run a quick query.

![Screenshot showing the New Relic change analysis interface](./images/Change_Tracking_Analysis_Interface_Details_Page.png "Screenshot showing the New Relic change analysis interface")
<figcaption>
Screenshot showing the New Relic change analysis interface
</figcaption>

Change tracking gives you the following capabilities:

* See and analyze changes and their effects in APM, browser, mobile, service levels, custom dashboards, and more.
* Automatically record deployments on any part of your system using a brand new flexible GraphQL API and query deployment data alongside metrics and telemetry.
* Use fresh new UIs to quickly understand the impact of changes, why they were made, who made them, and whether they are at the root of a problem.
* Leverage a growing list of plugins and integrations with tools like Jenkins, GitHub, CircleCI, and JFrog to automate change tracking throughout your CI/CD processes.
* Contextualize your changes with rich data and insights like deep links, commit SHAs, related entities, golden signal deltas, errors, logs, anomalies, and more.
* Track performance and uptime over time with flexible before/after analysis, and compare markers head-to-head to identify best practices.

## How to get started

See our [docs](https://docs.newrelic.com/docs/change-tracking/change-tracking-introduction/) for tips about how to designate the changes you want to monitor and how to view them in the UI.

If you don’t have a New Relic account already, [sign up for free](https://newrelic.com/signup) so you can discover the power of change tracking and test the new GraphQL API for yourself.
