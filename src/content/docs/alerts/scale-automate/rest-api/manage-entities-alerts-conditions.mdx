---
title: Manage entities in alerts conditions
tags:
  - Alerts
  - REST API alerts
metaDescription: Read about how to use the REST API (v2) to add or remove apps and other entities from an alerts policy condition.
redirects:
  - /docs/alerts/new-relic-alerts/rest-api-alerts/managing-apps-servers-alerts-conditions
  - /docs/alerts/new-relic-alerts/rest-api-alerts/managing-entities-alerts-conditions
  - /docs/alerts/new-relic-alerts/rest-api-alerts/manage-entities-alerts-conditions
  - /docs/alerts/rest-api-alerts/new-relic-alerts-rest-api/manage-entities-alerts-conditions
  - /docs/alerts-applied-intelligence/new-relic-alerts/rest-api-alerts/manage-entities-alerts-conditions
  - /docs/alerts-applied-intelligence/new-relic-alerts/advanced-alerts/rest-api-alerts/manage-entities-alerts-conditions
freshnessValidatedDate: never
---

In <InlinePopover type="alerts"/>, an <DNT>**entity**</DNT> is defined as any target for monitoring, such as an application, a browser, or a host. The [alerts UI](http://one.newrelic.com/alerts/) shows available entities that you can select. You can also use the REST API and API Explorer to [add](https://api.newrelic.com/docs/#/Alerts%20Entity%20Conditions/put_alerts_entity_conditions__entity_id__json) or [remove](https://api.newrelic.com/docs/#/Alerts%20Entity%20Conditions/delete_alerts_entity_conditions__entity_id__json) entities for a condition.

## Before using the REST API [#before-start]

The REST API is no longer the preferred way to programmatically manage your alerts. For more context, read the [Intro to APIs for alerts](/docs/alerts/scale-automate/nerdgraph/nerdgraph-api-examples/).

## Requirements

Modifying the list of entities in a condition requires you to know:

* Your [API key](/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key)
* The [&#x7B;entity_ID}](/docs/new-relic-solutions/get-started/glossary/#entity) of the entity you want to monitor
* The [&#x7B;condition_ID}](/docs/new-relic-solutions/get-started/glossary/#alert-condition) of the condition you want to modify

## General procedure [#basic_process]

To update the entity list for a condition:

1. Locate the appropriate entity ID; for example, [Application ID](/docs/apis/rest-api-v2/requirements/listing-host-instance-application-server-ids) and [browser ID](/docs/apis/rest-api-v2/browser-examples-v2/add-or-list-browser-apps-api-v2/).
2. [Identify the policy ID by name or type](/docs/alerts/scale-automate/rest-api/rest-api-calls-alerts/#alert-policies).
3. Get the list of conditions associated with the policy and choose the one you want to modify for the appropriate category:
   * [APM, browser monitoring, and mobile monitoring](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#conditions)
   * [External services](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#ext-services-conditions)
   * [Synthetic monitoring](/docs/alerts/new-relic-alerts/rest-api-alerts/rest-api-calls-new-relic-alerts#synthetics-conditions)
4. Modify the condition using the add or remove [API requests](/docs/alerts/scale-automate/rest-api/rest-api-calls-alerts/#alert-entity-conditions).

<Callout variant="important">
  Follow the requirements for the [minimum and maximum number of entities](/docs/alerts/new-relic-alerts/configuring-alert-policies/minimum-maximum-values) you can add to conditions.
</Callout>

## Example: Add or remove an entity [#example]

The following example shows how to add a Ruby application named `TimberTime` in a condition and how to remove an entity from that same condition.

Only the first step in this example is unique to choosing the Ruby app as the entity. The remaining steps will be the same for whichever entity you choose.

1. Get the `entity_id`; for example, `application_id`:

   ```shell
   
   curl -X GET 'https://api.newrelic.com/v2/applications.json' \
        -H $API_KEY -i
   ```

   OR

   If you know the application name, use this command and specify the `app_name`:

   ```shell

   curl -X GET 'https://api.newrelic.com/v2/applications.json' \
        -H $API_KEY -i \
        -d 'filter[name]=TimberTime'
   ```
2. Review the output to find the `application_id`, and use it as the `entity_id`:

   ```json
   {
     "applications": [
       {
         "id": 12345,         // application_id == entity_id
         "name": "TimberTime",
         "language": "ruby",
         "health_status": "gray",
         ...
       },
   ```
3. Get the `policy_id` you want to update; for example, the `TimberTime` app's `Logjam Alert` policy. To get the `policy_id`, use this command:


   ```shell

   curl -X GET 'https://api.newrelic.com/v2/alerts_policies.json' \
        -H $API_KEY -i \
        -G -d 'filter[name]= Logjam Alert'   # policy_name
   ```
4. Review the policy output; for example:

   ```json
   {
     "policies": [
       {
         "id": 85,      // policy_id
         "incident_preference": "PER_POLICY",
         "name": "Logjam Alert",
         "created_at": 1461176510393,
         "updated_at": 1461176510393
       },
   ```
5. List all of this policy's conditions and locate the `condition_id`:


   ```shell

   curl -X GET 'https://api.newrelic.com/v2/alerts_conditions.json' \
        -H $API_KEY -i \
        -G -d 'policy_id=85'
   ```

   Review the policy conditions; for example:

   ```json
   {
     "conditions": [
       {
         "id": 234567,               // condition_id
         "type": "apm_app_metric",
         "name": "Throughput (web) (High)",
         "enabled": true,
         "entities": [
           "8288171"                 // Entity currently included in the policy
         ],
         "metric": "response_time_web",
         "terms": [
           {
             "duration": "5",
             "operator": "above",
             "priority": "critical",
             "threshold": "500",
             "time_function": "all"
           }
         ]
       }
     ]
   }
   ```
6. Use API requests to add entities to or remove entities from the policy's condition:

   To add `entity_id` 12345 to `condition_id` 234567, with `entity_type` set as `Application`:

   ```shell

   curl -X PUT 'https://api.newrelic.com/v2/alerts_entity_conditions/12345.json' \
        -H $API_KEY -i \
        -H 'Content-Type: application/json' \
        -G -d 'entity_type=Application&condition_id=234567'
   ```

   To remove `entity_id` 8288171 from `condition_id` 234567, with `entity_type` set as `Application`:


   ```shell

   curl -X DELETE 'https://api.newrelic.com/v2/alerts_entity_conditions/8288171.json' \
        -H $API_KEY -i \
        -G -d 'entity_type=Application&condition_id=234567'
   ```
