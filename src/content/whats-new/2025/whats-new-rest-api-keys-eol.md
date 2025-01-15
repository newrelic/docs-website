---
title: "REST API Keys End-of-life"
summary: "The replacement of REST API keys in your systems."
releaseDate: "2025-03-01"
learnMoreLink: "https://docs.newrelic.com/install/aws-logs/"
getStartedLink: "https://docs.newrelic.com/docs/logs/get-started/get-started-log-management/"
---

New Relic now retiring the REST API key to improve security and reliability. You must update your systems with the new keys to avoid service disruptions.

The current REST API keys for accessing REST API v2 **(api.newrelic.com/v2 and api.eu.newrelic.com/v2)** will be retired. This change addresses the limitations of the existing account-level keys and aligns with industry best practices.

If your systems or integrations calling the specified API end-points with REST API keys, you must replace them with new user API keys by **March 1, 2025**, to avoid service disruptions. Failure to update may result in API call failures and errors, also potentially disrupting workflows.

You must complete replacement of the REST API keys by March 1, 2025.

## To get started

This change requires you to [rotate your API key](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#rotate-user-key). 

You must do the following:

* Generate new keys: Use the [New Relic UI](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/) or [NerdGraph API.](https://docs.newrelic.com/docs/apis/nerdgraph/examples/use-nerdgraph-manage-license-keys-user-keys/)
* Update systems: Replace old keys with new User API keys in your systems.
* Validate: ensure all API integrations work with the new keys.
* Remove old keys: Delete old keys once validated.

## Rotate API key

**To rotate API keys in UI:**

1. Go to [New Relic UI](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/) and determine which account you need a key for.
2. Create new user API keys associated to that account.
3. Update your systems to use the new user API keys.
    
    a. Go to [one.newrelic.com/api-keys](http://one.newrelic.com/api-keys) or [one.eu.newrelic.com/api-keys](http://one.eu.newrelic.com/api-keys) for EU data center and refer to the create and update instructions [here](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#rotate-user-key).

4. Ensure your API integrations function/work correctly with the new keys. This requires updating any scripts or code that reference the old key to use the new key value. 
5. Once validated, remove the old REST API keys. 

<Callout variant="tip">
     Once the old key is deleted, it cannot be restored.
   </Callout>

You can also manage user keys via our NerdGraph API. For instructions, refer to NerdGraph tutorial [Manage API keys.](https://docs.newrelic.com/docs/apis/nerdgraph/examples/use-nerdgraph-manage-license-keys-user-keys/)

## Additional key points

* If you’re using multiple New Relic accounts, each one will have its own REST API key. Each API key is must replaced individually with a user API key which is generated in the corresponding account.
* If your API key starts with `NRAK`, no update is required.

## Contact support

Our support team is here to assist you during this transition. If you have any questions about these changes, please contact [Support.](https://docs.newrelic.com/docs/new-relic-solutions/solve-common-issues/find-help-get-support/)

For more information on how to view and manage API Keys in New Relic, click [here.](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#keys-ui)
