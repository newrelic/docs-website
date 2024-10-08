---
title: "Changes to entity GUIDs for hosts instrumented with OpenTelemetry"
summary: "If you've instrumented infrastructure hosts with OpenTelemetry, you will need to update your host GUIDs to avoid breaking changes to your alerts and dashboards"
releaseDate: '2024-02-16'
learnMoreLink: 'https://docs.newrelic.com/docs/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic'
---

On March 27, 2024, the `entity.guid` value for hosts captured by the OpenTelemetry collector will change. This change only affects customers who use OpenTelemetry to instrument their infrastructure hosts. 

## What's changing?

* On March 27, 2024, a backend change will regenerate values assigned to `entity.guid` in our database.
* This change applies to customers who use the OpenTelemetry agent for instrumenting hosts. This change doesn’t affect other hosts instrumented with our other agents.
* If you’ve created alerts and custom dashboards that use a defined, hardcoded value for `entity.guid`, then those alerts and dashboards will stop working.

## Next steps

We recommend updating your dashboards and alert conditions ahead of the change using alternative attributes to identify your hosts. You can use these attributes instead: 

* `host.name`
* `host.id` 
* `entity.name`

If you can't update your alert conditions or dashboards with alternative attributes, then we recommend updating `entity.guid` with the new value after the change on March 27, 2024.

For more information on entity GUIDs, refer to our documentation about [New Relic entities](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entity-new-relic). 
