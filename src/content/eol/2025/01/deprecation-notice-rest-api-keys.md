---
title: 'End of life for REST API Keys'
summary: "On March 1, 2025, REST API Keys are deprecating."
publishDate: '2025-01-16'
eolEffectiveDate: '2025-03-01'
---

Effective March 01, 2025, our REST API Keys integration drops support for API integrations.

## Background [#bg]

REST API keys are account-level keys and are not directly linked to a individual user, which limits auditing capabilities. This poses a security risk for both New Relic and our customers. User API keys are a well-tested alternative and serve as a replacement to REST API keys. These newer keys can be used across New Relic features such as NerdGraph, among others.

Additionally, storing these keys in plain text in the database poses security concerns. Therefore, we have been encouraged to retire them promptly or migrate them to a secret store. A potential data breach could expose these keys, granting access to all accounts.

## What's happening [#whats-happening]

Customers using deprecated REST API keys will be impacted by this end-of-life.

If you have integrations or custom scripts which make calls to **(api.newrelic.com/v2 and api.eu.newrelic.com/v2)** you must check your API keys. If your API key starts with `NRAK`, no update is required.

<Callout variant="tip">
     The 'v2' portion of the URL path is crucial; other paths do not support REST API keys.
   </Callout>

## What do you need to do [#what-to-do]

* Generate a new User API key and configure your systems to use it.
* If you use a third-party integration, follow the instructions provided by the vendor to update the key.

## What happens if you don't make any changes to your account [#account]

* Failure to update the key will cause API calls to fail against the REST v2 API.
* The impact on your operations depends on which REST v2 API endpoints you use and your reliance on them.