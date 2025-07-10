---
title: 'End of Life Announcement: FACET on messageId and timestamp in Alert Conditions'
subject: EOL for messageId and timestamp in Alert Conditions 
publishDate: '2025-07-10'
eolEffectiveDate: '2025-07-10'
---


Effective immediately, New Relic is deprecating the ability to create or modify alert conditions with `FACET` by `messageId` or `timestamp`. We have taken this step to protect our systems and customers from unintended impact, as well as keep our customers from violating our [acceptable use policy](/docs/licenses/license-information/general-usage-licenses/acceptable-use-policy).

## Background [#bg]

In May 2025, New Relic teams were alerted to several alert conditions which were generating many thousands of violations per minute, causing significant traffic for the New Relic service responsible for violation expiration. During service interruptions of this kind of nature, in order to protect New Relic systems and our customers, it is possible that alerts may be unavailable.

After further investigation, New Relic teams determined that thousands of violations were being generated due to these conditions using a `FACET` clause on the `messageId` or `timestamp` attribute. Due to an increase in logs forwarded by the customer at the time, the number of concurrent evaluations for these conditions increased exponentially.

## What's changing [#whats-changing]
Users will no longer be able to create or modify alert conditions with `FACET` by `messageId` or `timestamp`. To be able to view each individual log event from a notification based on an alert condition, use the [workflow enrichment](/docs/alerts/get-notified/incident-workflows/#enrichments) feature to write a query using the `uniques` function to supplement your notification with individual message IDs or timestamps. The existing alert conditions with the mentioned facets will continue to function as expected.

## What do you need to do [#what-to-do]

For more information about limits and rules, view the following articles:  
* [Responses to limit incidents](/docs/data-apis/manage-data/view-system-limits/#incidents)
* [Alerting rules and limits](/docs/alerts/admin/rules-limits-alerts/)

## What you need to know [#what-to-know]

To keep our systems ready to support you and prevent unintended use, we may apply rate limiting if New Relic detects significant resource exhaustion from traffic floods linked to a single account or organization. In these rare cases, and with any other limit incidents, we’ll publish an event to `NrIntegrationError`, and you can find more information in the limits UI.