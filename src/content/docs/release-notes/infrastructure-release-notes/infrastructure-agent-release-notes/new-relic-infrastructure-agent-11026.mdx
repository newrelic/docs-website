---
subject: Infrastructure agent
releaseDate: '2020-02-27'
version: 1.10.26
redirects:
  - /docs/release-notes/infrastructure-release-notes/infrastructure-agent-release-notes/new-relic-infrastructure-agent-11020
  - /docs/release-notes/infrastructure-release-notes/infrastructure-agent-release-notes/new-relic-infrastructure-agent-11023
---

### Notes

A new version of the agent has been released. Follow standard procedures to [update your Infrastructure agent](/docs/infrastructure/new-relic-infrastructure/installation/update-infrastructure-agent).

### Added

* The agent now sends the integration name (`integrationName`) and version (`integrationVersion`) when any events are generated.
  * For example, when using the [Redis monitoring integration](/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration) `integrationName` will be set to `com.newrelic.redis` and `integrationVersion` to `1.4.0`
* `nri-flex` has been upgraded to version [`v1.0.0`](https://github.com/newrelic/nri-flex/releases/tag/v1.0.0).
* RPM packages generated now include the distribution name in the filename. For example:
  * The RHEL8 package `newrelic-infra-<version>-1.x86_64.rpm` will now become `newrelic-infra-<version>-1.el8.x86_64.rpm` when published.

### Bug fixes

* The agent no longer panics on startup when reading corrupt caches files.
* When using [new configuration format](/docs/integrations/integrations-sdk/file-specifications/integration-configuration-file-specifications-agent-v180) the agent would create inventory as `integration/<binary name>` rather than `integration/<integration name>` breaking some charts. For better backwards compatibility the agent will now create inventory using the integration's name.
  * For example, when using the [Redis monitoring integration](/docs/integrations/host-integrations/host-integrations-list/redis-monitoring-integration) before it would create inventory under `integration/nri-redis` but with the new update it will create it under `inventory/com.newrelic.redis`
* Sample text fields are now truncated to 4095 characters. Before these fields would be rejected and so would never appear in New Relic. Now the fields will appear but will be truncated.
