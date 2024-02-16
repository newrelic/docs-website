---
title: "Changes to entity GUIDs for hosts instrumented with OpenTelemetry"
summary: "If you've instrumented infrastructure hosts with OpenTelemetry, you will need to update your host GUIDs to avoid breaking changes to your alerts and dashboards"
releaseDate: '2024-02-16'
learnMoreLink: 'https://docs.newrelic.com/docs/docs/new-relic-solutions/new-relic-one/core-concepts/what-entiy-new-relic'
---

On March 27, 2024, the `entity.guid` value for hosts captured by the OpenTelemetry collector will change. This change only affects customers who use OpenTelemetry to instrument their infrastructure hosts. 

## What's changing?

* This change applies to customers who use the OpenTelemetry collector for instrumenting hosts. This change doesn't affect other hosts instrumented with our other agents. 
* On March 27, 2024, host IDs for hosts instrumented with OpenTelemetry will stop working after 24 hours and new host entities will appear for the same resources but with new GUIDs.
* If you've created alerts and custom dashboards for your OpenTelemetry hosts, those alerts and dashboards will stop working.

## Next steps

We recommend updating your dashboards alert conditions ahead of the change using alternative attributes to identify your hosts. You can use these attributes instead: 

* `host.name`
* `host.id` 
* `entity.name`

If you can't update your alert conditions or dashboards with alternative attributes, then we recommend updating with the new `entity.guid` value after the change on March 27, 2024.

For more information on entity GUIDs, refer to our documentation about [New Relic entities](/docs/new-relic-solutions/new-relic-one/core-concepts/what-entiy-new-relic). 
