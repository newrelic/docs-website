---
subject: PHP agent
releaseDate: '2020-01-16'
version: 9.6.0.255
downloadLink: 'https://download.newrelic.com/php_agent/archive/9.6.0.255'
---

### New Features

**Enhanced visibility into curl_multi_exec calls**

* Previously, curl_multi_exec requests appeared as one segment with one total time. Now, we expose the individual segments of a curl_multi_exec request that include individual times and host details. This provides greater visibility as to which URLs are being called and improved ability to troubleshoot slow curl calls.

**Configurable daemon start timeout**

* The PHP Agent has introduced a new configuration `newrelic.daemon.start_timeout`. Customers may use this to specify a timeout for the agent to wait for the daemon after a daemon was launched by the agent.

  With this timeout set, the agent will not immediately drop a transaction when the launched daemon hasn't acquired a socket yet, but rather grants the daemon time to do so.

  It is recommended to only set this timeout when instrumenting long-lived background tasks, as in case of daemon start problems the agent will block for the given timeout at every transaction start.

### Upgrade Notice

* For cross agent conformance, the agent attribute `httpResponseCode` has been renamed to `http.statusCode`. In [PHP agent release 9.4](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-940249), we erroneously introduced `httpResponseCode` as the replacement for `response.statusCode`.

  The new `http.statusCode` agent attribute name will align with other agents and enables standardized alerts and INSIGHTS queries based on a common attribute name.

  Attributes are reported with both the new `http.statusCode` name and the  
  legacy `httpResponseCode` and `response.statusCode` attribute names.

  Support for legacy attribute names will be removed in future agent versions.

### Known issues and workarounds

**Potential memory exhaustion for long running transactions**

* See description and recommendations under **Known issues and workarounds** in the [PHP 9.0.0.242 release notes](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-900242).
