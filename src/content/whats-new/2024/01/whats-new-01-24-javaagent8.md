---
title: 'Upgrade your Java agent to v8.8.0 to avoid impacts to your alerts/dashboards.'
summary: 'Java agent v8.0.0-8.7.0 introduced new standard attributes for HTTP status code that might impact alerts/dashboards'
releaseDate: '2024-01-24'
learnMoreLink: 'https://docs.newrelic.com/docs/apm/agents/java-agent/getting-started/migration-8x-guide/'
getStartedLink: 'https://docs.newrelic.com/docs/release-notes/agent-release-notes/java-release-notes/java-agent-880/'
---

Starting with Java agent version 7.6.0, we introduced new standard attributes for HTTP status code: `http.statusCode` and `http.statusText` The old attributes `httpResponseCode` `response.status` and `response.statusMessage` were marked as deprecated and have been completely removed in versions 8.0.0 through 8.7.0. This means any alerts or dashboards relying on these old attributes will stop functioning, potentially leading to missed alerts and inaccurate data.

In version 8.8.0, the deprecated attributes were re-introduced with a compatibility flag so if you are still relying on those attributes you can continue to use them.

**What you need to do:**

* **Option one: update your agent to [v8.8.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/java-release-notes/java-agent-880/):** 
The simplest solution is to update your agent for the impacted entities to the latest version, v8.8.0, which reintroduces the older attributes for backward compatibility. 
* **Option two: update your alerts/dashboards:**
Alternatively, you can update your existing alerts and dashboards to use the new standard attributes. Our [migration guide](https://docs.newrelic.com/docs/apm/agents/java-agent/getting-started/migration-8x-guide/) provides clear instructions

Please reach out to [New Relic Support](https://support.newrelic.com/s/) or your account team if you have any questions. 


