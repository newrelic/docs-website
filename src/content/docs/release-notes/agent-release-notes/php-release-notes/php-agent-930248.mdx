---
subject: PHP agent
releaseDate: '2019-11-11'
version: 9.3.0.248
downloadLink: 'https://download.newrelic.com/php_agent/archive/9.3.0.248'
redirects:
  - /docs/release-notes/agent-release-notes/php-release-notes/php-agent-930xxx
  - /docs/release-notes/agent-release-notes/php-release-notes/php-agent-930xx2
---

### Known issues and workarounds

**Potential memory exhaustion for long running transactions**

* See description and recommendations under **Known issues and workarounds** in the [PHP 9.0.0.242 release notes](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-900242).

### New features in 9.3

**Trace and entity metadata API calls**

* A new API function [`newrelic_is_sampled()`](https://docs.newrelic.com/docs/agents/php-agent/php-agent-api/newrelicissampled) has been added. This call returns true if the current transaction is part of a sampled distributed trace.
* A new API function for obtaining linking metadata been added. [`newrelic_get_linking_metadata()`](https://docs.newrelic.com/docs/agents/php-agent/php-agent-api/newrelicgetlinkingmetadata). This call returns an opaque map of key/value pairs that can be used to correlate this application to other data in the New Relic backend.
* A new API function [`newrelic_get_trace_metadata()`](https://docs.newrelic.com/docs/agents/php-agent/php-agent-api/newrelicgettracemetadata) has been added. This call returns a collection of metadata used to identify a trace: `trace.id`, which provides the currently executing trace's identifier; and `span.id`, which provides the span identifier associated with the currently executing span.

**Configurable connection timeout**

* The PHP agent has introduced a new configuration [`newrelic.daemon.app_connect_timeout`](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration). Customers may use this to specify a timeout for the agent to wait for a daemon connection.

  With this timeout set, the agent will not immediately drop a transaction when the daemon hasn't connected to the backend yet, but rather grant the daemon time to establish the connection.

  It is recommended to only set this timeout when instrumenting long-lived background tasks, as in case of connection problems the agent will block for the given timeout at every transaction start.
