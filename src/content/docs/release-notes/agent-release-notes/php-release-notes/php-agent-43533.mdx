---
subject: PHP agent
releaseDate: '2013-12-11'
version: 4.3.5.33
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes

This release of the PHP agent automatically marks Drupal cron requests as background tasks, improves the categorization of PHP errors within the New Relic UI, and fixes several bugs. Additionally, the internals of the agent have been significantly refactored to improve the stability and performance of the agent.

### New Features

* Treat Drupal cron requests as background tasks

  Drupal cron requests (identified by calls to `drupal_cron_run()`) will now be counted as background tasks (not web transactions) regardless of how they are started. Previously, it was necessary to use the `newrelic_background_job()` API to explicitly mark Drupal cron requests as background tasks.
* Use the exception class as the category for errors

  Errors created using the `newrelic_notice_error()` API function with an exception will be grouped according to the exception's class. Previously, all errors were grouped under 'NoticedError'.

  See [https://docs.newrelic.com/docs/php/the-php-api#api-notice-error](https://docs.newrelic.com/docs/php/the-php-api#api-notice-error)
* Limit the maximum number of nested PHP function calls

  The agent will now limit the maximum number of nested function calls within PHP applications. This is to provide protection against stack overflows due to infinite recursion. Previously, this would result in a segmentation fault. The agent will now log an error and terminate the process by raising a fatal PHP error. By default, this limit is set to a very high value of 500. Exceeding this limit should be extremely rare.
* Improve the stability and performance of the agent

  The internals of the agent and its background daemon process have been significantly refactored to improve interprocess communication, stability and performance. The maximum number of connections to the background daemon process has been doubled to 4096.

### Bug Fixes

* Fix for installing on Ubuntu 13.10 when using PHP-FPM

  Previously the installer would fail to install a newrelic.ini file in the configuration directory for PHP-FPM (/etc/php5/fpm/conf.d), if one was present. This has been fixed, and the installer will correctly install a newrelic.ini for CLI, DSO and FPM configuration directories.
* Fix for `drupal_http_request()` always returning `NULL` under PHP 5.5

  Version 3.9.5.13 added support for external calls made using `drupal_http_request()`. Due to the way the agent instruments this function under PHP 5.5, this function would always return `NULL` instead of the correct return value. This has been fixed.
* Fix for real user monitoring when a Content-Length response header is present.

  When automatic real user monitoring is enabled, the agent will only perform JavaScript injection into HTML pages when a Content-Length header is not already present in the response. In some cases, this check was not working correctly leading to the value in the Content-Length header not matching the actual number of bytes sent to the client.
* Fixed a segmentation fault when Zend Thread Safety is enabled.

  Attempts to use the agent under Apache using a threaded MPM (e.g. worker or event) and mod_php would result in segmentation faults. This has been fixed, but New Relic [does not recommend](https://docs.newrelic.com/docs/php/php-and-the-apache-worker-mpm) using the agent in these circumstances.
* Fixed high CPU usage under heavy load

  Under very high loads with thousands of PHP processes, the background daemon process could consume 100% CPU when the per-process file descriptor limit was exceeded. This has been fixed. The agent will now throttle the number of new connections accepted when per-process file descriptor limit is reached. A message is also printed to the log file.
