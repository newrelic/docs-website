---
subject: PHP agent
releaseDate: '2016-06-14'
version: 6.4.0.163
---

### New Features

* Ignore Errors

  A new [`newrelic.error_collector.ignore_errors`](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-err-ignore-errors) setting has been added. When configured, this setting can be used to prevent errors, such as `E_WARNING`, from being reported to New Relic. This setting does not affect errors reported via the `newrelic_notice_error` API.
* Ignore Exceptions

  A new [`newrelic.error_collector.ignore_exceptions`](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-err-ignore-exceptions) setting has been added. This setting accepts a comma-separated list of fully-qualified class names. When an uncaught exception occurs, the agent will not report the exception to New Relic if it is an instance of a class in this list. This setting does not affect errors reported via the `newrelic_notice_error` API.

### Upgrade Notices

* Guzzle support is now enabled by default. It can be disabled by setting the new `newrelic.guzzle.enabled` setting to false.

  The `guzzle` feature flag that was previously used to enable Guzzle support is now ignored.

### Bug Fixes

* The first request in each PHP process would remove any output handlers installed using the `output_handler` configuration setting for users of PHP 5.4 and later. This has been fixed: existing output handlers will now remain untouched.
* Transient WordPress hooks now have the unique numbers removed from their names to avoid metric grouping issues.
* In cases where WordPress' WP_CONTENT_DIR directory was set to a custom value, WordPress plugin metrics were not reported on PHP 5.2 to 5.4, inclusive. This affected users of the popular WP-Skeleton project. This has been fixed.
* A regression in version 6.3 could cause Guzzle 6 users to lose support for cross application tracing and service maps, in particular when Guzzle 6 was autoloaded as a result of instantiating the only `GuzzleHttp\Client` object used within the lifetime of the script. This has been fixed.
