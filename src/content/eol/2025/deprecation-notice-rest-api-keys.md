---
title: 'End of life for REST API Keys'
summary: "On March 1, 2025, REST API Keys are deprecating."
publishDate: '2025-01-16'
eolEffectiveDate: '2025-03-01'
---

Effective March 01, 2025, our REST API Keys integration drops support for API integrations.

## Background [#bg]

REST API keys are account-level keys and are not directly tied to a user, which limits auditing capabilities. This This poses a security risk for both New Relic and our customers. User API keys serves as the replacement for these keys, and are a well-tested alternative to REST API keys. These newer keys can be used across New Relic features such as NerdGraph, among others.

Additionally, security concerns include the fact that these keys are stored in plain text in the database. As a result, we have been encouraged to retire them promptly or migrate them to a secret store. A potential data breach could expose these keys, granting access to all accounts.

## What's happening [#whats-happening]

Customers who are still using the deprecated REST API Keys are impacted for this EOL.

If customers have integrations or custom scripts which make calls to **(api.newrelic.com/v2 and api.eu.newrelic.com/v2)** they must check their API keys. If your API key starts with `NRAK`, no update action is required.

<Callout variant="tip">
     The 'v2' is the crucial portion of the URL path, other paths do not support the REST API Keys.
   </Callout>

## What do you need to do [#what-to-do]

* Customers must generate a new User API key and configure their systems to use it.
* If customers are using a third-party integration, they will need to follow the instructions provided by the vendor to update the key.

## What happens if you don't make any changes to your account [#account]

* Failure to update the key will result in API calls failing against the REST v2 API.
* The REST v2 API has various end-points, and the impact on a customer depends on which end-points they are using and their operational reliance on those endpoints.
