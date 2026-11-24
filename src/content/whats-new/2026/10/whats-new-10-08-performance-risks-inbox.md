---
title: 'Performance Risks Inbox is now generally available'
summary: 'Performance Risks Inbox is now generally available, adding an account-level overview, support for workloads, AI insights, and MCP server support.'
releaseDate: '2026-10-08'
learnMoreLink: 'https://docs.newrelic.com/docs/triage-inbox/performance-risks/introduction/'
getStartedLink: 'https://docs.newrelic.com/docs/triage-inbox/performance-risks/access-and-use/'
---

## Performance Risks Inbox is GA
Performance Risks Inbox is now generally available (GA). It finds the performance anti-patterns that quietly slow your application down, such as N+1 queries and inefficient database calls, and groups them in one place so your team can fix them before they become incidents. If you're new to it, the [Public Preview announcement](https://docs.newrelic.com/whats-new/2026/05/whats-new-05-14-performance-risks-inbox/) covers the fundamentals and the full list of risks it detects.

Your feedback during the preview shaped four additions that ship with GA.

## What's new at GA

* **Account-level overview**: A new [overview page](https://docs.newrelic.com/docs/triage-inbox/performance-risks/access-and-use/#overview) shows which entities in an account carry risk, how that risk is distributed, and which resolving entities may have the highest impact, so you can go straight to what needs attention instead of checking entities one by one.

* **Workloads support**: Performance Risks now appear alongside errors in both [Standard and Intelligent Workloads](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/workloads/use-workloads/#performance-risks). You can see risk across a whole user journey, such as checkout, and move between a workload, the entities inside it, and the global view.

* **AI-generated insights**: Select [Generate insights](https://docs.newrelic.com/docs/triage-inbox/performance-risks/access-and-use/#recommendations) on a risk group to get a plain-language summary of the likely root cause across all of its occurrences, along with a suggested direction for the fix. AI insights are optional and become available once your organization administrator has enabled New Relic AI capabilities.

* **MCP server support**: The [New Relic MCP server](https://docs.newrelic.com/docs/triage-inbox/performance-risks/access-and-use/#using) now supports Performance Risks Inbox, so you can ask about your Performance Risks from the AI assistant or IDE you already use, without switching to the New Relic UI.

## Get started

You'll find Performance Risks Inbox in your APM and Browser entity views, as well as in Triage Inbox and Workloads. To learn more, see [Introduction to Performance Risks Inbox](https://docs.newrelic.com/docs/triage-inbox/performance-risks/introduction/). Your feedback continues to drive our roadmap, so let us know what you'd like to see next.
