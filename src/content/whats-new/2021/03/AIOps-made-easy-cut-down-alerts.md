---
title: 'AIOps Made Easy: Cut down on alert noise'
summary: 'Reduce alert fatigue and prioritize what’s important'
releaseDate: '2021-03-15'
learnMoreLink: 'https://docs.newrelic.com/docs/alerts-applied-intelligence/applied-intelligence/incident-intelligence/get-started-incident-intelligence/'
---

Enhanced correlation abilities in Applied Intelligence make it easier than ever to reduce alert fatigue so you can find and fix the real issue.

## Relationship-based correlation

You can now correlate related alerts and events [using relationship data](https://docs.newrelic.com/docs/alerts-applied-intelligence/applied-intelligence/incident-intelligence/change-applied-intelligence-correlation-logic-decisions/#topology) from any source. CMDBs, home grown relationship stores, and New Relic entity relationships can now help you reduce noise and increase context for on-call responders.

In addition to correlating alerts using time-based clustering and context from alert messages, you can now ingest topology data from your relationship datastores (CMDBs) to enable more accurate correlation of alerts that are firing from connected services or other monitored entities. Stop reacting to individual symptoms and start responding to the actual issue at hand with more context about how they impact your broader environment, so you can prioritize problems accurately and efficiently.

![decisions-topology-correlation.png](/images/decisions-topology-correlation.webp 'The decisions topology correlation UI.')


## Create correlation decisions faster with correlation assistant

The correlation assistant feature gives you even more control over how you reduce alert noise. Select incidents that should be correlated and New Relic analyzes them to show commonalities that you can use to create a decision. Additionally, Applied Intelligence is smart enough to simulate your configuration and show, in real-time, the decision could reduce alert noise and increase context in the future.

![correlation-assistant.png](/images/correlation-assistant.gif 'The correlation assistant UI.')
