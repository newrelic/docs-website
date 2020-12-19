---
subject: Node.js agent
releaseDate: '2018-02-01'
version: 2.7.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

### New features

* Added agent attribute filtering via include and exclude rules.

  [Agent attributes](/docs/agents/nodejs-agent/attributes/nodejs-agent-attributes) can now be controlled using fine grained include and exclude rules. These rules, described below, replace `capture_params` and `ignored_params`. Any attributes listed in `ignored_params` will be migrated to `attributes.exclude` internally, unless `attributes.exclude` is explicitly set.

  There are three new configuration properties added to the root config and each destination (more on destinations later). These new configurations are:

  * `attributes.enabled` - Enables collection of attributes for the destination.
  * `attributes.include` - A list of attributes or wildcard rules to include.
  * `attributes.exclude` - A list of attributes or wildcard rules to exclude.

  The include and exclude rules can be exact rules (for example `request.headers.contentLength`), or wildcard rules which match just the beginning of attribute keys (for example `request.headers.*` would match any request header).

  These rules can be specified globally at the root of the configuration, or for specific destinations. These destinations are:

  * `transaction_tracer` - Controls transaction trace attributes.
  * `transaction_events` - Controls transaction event attributes.
  * `error_collector` - Controls error event attributes.
  * `browser_monitoring` - Controls browser/RUM transaction attributes.
* Renamed `addCustomParameter` to `addCustomAttribute`.

  The `addCustomParameter` method is now deprecated and will be removed in a future release of the agent. The `addCustomAttribute` method is a drop-in replacement for it.
* Added cache to agent attribute filtering.

  To minimize the overhead of applying attribute rules, the agent caches results of filtering specific attribute keys and destinations. The cache is limited to 1000 destination-key pairs by default but can be configured with `attributes.filter_cache_limit`. This cache offers a 10x improvement for applying filter rules for cache-hits.
* Added `allow_all_headers` to config options and updated `http` instrumentation.

  When set to `true`, the agent will collect all request headers. This collection respects the agent attribute include and exclude rules. A default set of exclusion rules are provided in `newrelic.js`. These rules exclude all cookies and authentication headers.
* Segments may now be flagged as opaque, causing internal segments to be omitted from the transaction trace.

### Improvements

* Added limits for agent attributes to keep monitoring overhead down.

  Attribute keys and values are limited to 255 bytes each. Keys which are larger than 255 bytes are dropped, and a warning message is logged. Values larger than 255 bytes are truncated to 255 bytes, respecting multi-byte UTF-8 encoding. Custom attributes are limited to 64 per transaction. Attributes beyond the 64th are silently ignored.
* Added error to collector connection failure log message.
* Renamed `request_uri` attribute to `request.uri`.

  This brings the attribute name in line with all other request attributes.
* Updated `https-proxy-agent` dependency from `^0.3.5` to `^0.3.6`.
* Updated versioned tests where applicable to ensure most minor versions of instrumented modules work as expected.
* Fixed stalling test for v1 line of Mongo driver.
* Added tests verifying Hapi 404 transactions result in correctly named metrics.

  The Hapi instrumentation was doing the correct thing, but we did not have tests for this specific case.

### Bug fixes

* The agent will no longer crash when `crypto.DEFAULT_ENCODING` has been changed.

  Previously, the agent would assume the result of `hash.digest()` was an instance of a Buffer. If `crypto.DEFAULT_ENCODING` is changed, `hash.digest()` will return a string and the agent would crash. The agent now ensures that the value is a Buffer instance before moving on.
* Fixed error if `process.config.variables.node_prefix` missing.

  If `process.config.variables.node_prefix` is falsey (which can happen if using electron, leading to this issue [https://discuss.newrelic.com/t/new-relic-on-electron-nodejs/53601](https://discuss.newrelic.com/t/new-relic-on-electron-nodejs/53601)) the `getGlobalPackages` function in `lib/environment.js` will give an err when it shouldn't.

  Thanks to Jarred Filmer (@BrighTide) for the fix!
