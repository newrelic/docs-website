---
title: 'Updated GUIs'
summary: 'OpenTelemetry hosts  '
releaseDate: '2021-06-30'
learnMoreLink: 'https://docs.newrelic.com/docs/telemetry-data-platform/manage-data/manage-data-coming-new-relic/#facet-data-ingest'
getStartedLink: 'https://one.newrelic.com/-/0gbRKzygzwE'
---

Please be aware of the following change(s) to your New Relic account beginning March 27th 2024: 

This change is applicable only for customers who use OpenTelemetry for infrastructure host instrumentation. 

Summary of change: 

On Mar 27th 2024,  New Relic OTel telemetry (metrics and logs) for hosts will register New Relic host entities with new unique identifier values (entity.guid value is changing) will start creating new GUIDs for HOST entities.

Impacts to you: 

This change is applicable for customers who use OTel agent for instrumenting Hosts. With this change, if you have alerts or custom dashboards created using hardcoded GUIDs in them, it will not work going forward. 

After Mar 27th 2024, the existing Host entities that are instrumented by OTel agents will cease to exist after 24 hours. New entities will be created for the same resources with new GUIDs.

Action(s) required:

We recommend avoiding using GUIDs in alert conditions and use alternative attributes to identify hosts such as host.name, host.id ,entity.name.

If you have alert conditions or custom dashboards that use GUIDs from Hosts instrumented by OTel, and no choice to avoid using it, then they should be updated. In this case, please update using the GUID by using the new entity.guid that is generated after the change on May 27th.

Please refer to the documentation for more information on entity or entity GUID.