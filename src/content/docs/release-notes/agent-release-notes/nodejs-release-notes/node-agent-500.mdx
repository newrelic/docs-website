---
subject: Node.js agent
releaseDate: '2019-01-08'
version: 5.0.0
---

### Notes

* Dropped support for Node versions less than 6.
* Agent no longer creates transactions when in a `stopped`, `stopping` or `errored` state.
* Removed public API methods that have been deprecated since Agent v2: `createTracer`, `createWebTransaction`, `createBackgroundTransaction`, and `addCustomParameter`/`(s)`. See the [Migration Guide](https://github.com/newrelic/node-newrelic/blob/master/Migration%20Guide.md) for more information.
* Flagged `API#setIgnoreTransaction` as deprecated; `TransactionHandle#ignore` should be used instead.
* Released several feature flags. These flags are no longer used:

  * `feature_flag.custom_instrumentation`
  * `feature_flag.custom_metrics`
  * `feature_flag.synthetics`
  * `feature_flag.native_metrics`
* Added `plugins.native_metrics.enabled` configuration value.

  This configuration value controls the use of the `@newrelic/native-metrics` module. When set to `false` the agent will not attempt to load that module.
* Custom metrics recorded via `recordMetric` and `incrementMetric` API calls now automatically have the name prepended with `'Custom/'`. Usages of these APIs that manually prepend with `'Custom/'` will need to remove the manually specified one or will end up with metrics prepended with `'Custom/Custom/'`.
* Dropped support for `node-cassandra-cql`.
* Removed from `ignore_server_configuration` config setting.
* Removed deprecated configuration settings `capture_params` and `ignored_params`.
* The agent will no longer cause a stack overflow when logging at trace level to stdout.

  Previously, the agent would inadvertently trigger a trace level log from its trace level log (through wrapping a nextTick call), causing a stack overflow. The agent now detects this case and aborts the nested call.
