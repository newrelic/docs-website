---
subject: Infrastructure agent
releaseDate: '2020-11-09'
version: 1.13.1
---

## Notes

A new version of the agent has been released. Follow standard procedures to [update the Infrastructure agent](https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure/update-or-uninstall/update-infrastructure-agent).

### Added

* [#155](https://github.com/newrelic/infrastructure-agent/issues/155) The Infrastructure agent now handles entities' registration errors the following way (Infrastructure SDK v4 protocol):
  * For request errors:
    * Connectivity failure or limit exceeded (429 or 503 status codes) will trigger a retry with an exponential backoff with a maximum backoff of 1 minute.
    * Other types of errors (including bad payload format) will be logged, and data will be discarded.
  * For successful requests (200 status code) containing:
    * Errors: The agent will discard related data.
    * Warnings will be logged.
* [#156](https://github.com/newrelic/infrastructure-agent/issues/156) The Infrastructure agent entity registration now batches requests with a maximum of 1000 entities and payloads of 1Mb per call.
* [#123](https://github.com/newrelic/infrastructure-agent/issues/123) The embedded telemetry API now splits DM submission by number of entities following requested driven contract limitations. For more informations on the limits, see our [docs](https://docs.newrelic.com/docs/telemetry-data-platform/get-data/apis/metric-api-limits-restricted-attributes)

### Changed

* [#206](https://github.com/newrelic/infrastructure-agent/pull/206) The built-in Prometheus integration has been updated to version \[2.3.0] ([https://github.com/newrelic/nri-prometheus/releases/tag/v2.3.0](https://github.com/newrelic/nri-prometheus/releases/tag/v2.3.0)). For more information about the Prometheus integration, see our [documentation](https://docs.newrelic.com/docs/integrations/prometheus-integrations).

### Fixed

* [#203](https://github.com/newrelic/infrastructure-agent/pull/203) NFS invalid stats fix.
* [#188](https://github.com/newrelic/infrastructure-agent/issues/188) Prometheus summary type calculated as delta value to properly allow average calculation in NRQL.
* [#167](https://github.com/newrelic/infrastructure-agent/issues/167) Container processes now correctly filtered as host processes when Process Monitoring is enabled and "include_matching_metrics" rules are defined. For more information about [enabling process monitoring](https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings#enable-process-metrics) and [filtering processes](https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure/configuration/infrastructure-configuration-settings#include-matching-metrics), see our [documentation](https://docs.newrelic.com/docs/infrastructure/infrastructure-ui-pages/infra-ui-overview#processes-tab).
