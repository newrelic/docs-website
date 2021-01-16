---
subject: PHP agent
releaseDate: '2019-12-05'
version: 9.4.0.249
downloadLink: 'https://download.newrelic.com/php_agent/archive/9.4.0.249'
---

### Known issues and workarounds

**Potential memory exhaustion for long running transactions**

* See description and recommendations under **Known issues and workarounds** in the [PHP 9.0.0.242 release notes](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-900242).

### New features in 9.4

**Added support for [PHP 7.4](https://www.php.net/ChangeLog-7.php#7.4.0)**

* The PHP agent can detect libraries and frameworks that were preloaded via the [`opcache.preload`](https://www.php.net/manual/en/opcache.configuration.php#ini.opcache.preload) setting.
  * You can disable this feature by using the following configuration setting: [`newrelic.preload_framework_library_detection = false`](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-rare-settings).

**Request URI attribute is now captured**

* We now capture the [`request.uri`](https://docs.newrelic.com/docs/agents/php-agent/attributes/php-agent-attributes#attributes) attribute. The request URI appears in transaction queries in New Relic Insights.
  * You can disable this attribute by using the following configuration setting: [`newrelic.attributes.exclude = "request.uri"`](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-attribute-settings).

### Upgrade Notices

* For cross agent conformance, the agent attributes `request.headers.User-Agent` and `httpResponseCode` are renamed to `request.headers.userAgent` and `response.statusCode`. The value `response.StatusCode` is changed to an integer.
  * Attributes are reported with both the new and the legacy attribute names.
  * Support for legacy attribute names will be removed in future agent versions.

### Bug Fixes

* Since 9.0, transaction traces and span events were not created when `newrelic_end_transaction` was called inside a PHP function. `newrelic_end_transaction` now creates transaction traces and span events in any case. It reports all traces and span events for segments that weren't ended at the time of its invocation as `unknown`.
* Since 9.0, Predis calls weren't instrumented when the Predis client was loaded from a path ending in `Predis/Client.php`. This has been fixed.
* For inbound distributed tracing payloads with invalid or missing values for `pr` (priority) and/or `sa` (sampled) the agent used to assign a default priority of -1 and/or a default sampled value of `false` to the transaction.

  * This has been fixed, the agent now keeps initial priority and sampled values if the respective values in the inbound distributed tracing payload are missing or invalid.
* The daemon used to erroneously send `SIGUSR1` signals to its parent process group in case one of the flags `--foreground` or `--watchdog-foreground` was given. This has been fixed.
