---
subject: PHP agent
releaseDate: '2015-12-15'
version: 5.2.0.141
metaDescription: PHP Agent 5.2.0.141
---

### New Features

* On Linux, abstract sockets are now supported for agent to daemon communication. An abstract socket can be created by prefixing the value of the port setting in your newrelic.ini file (e.g. `newrelic.daemon.port = "@newrelic-daemon"`) or newrelic.cfg file (e.g. `port = "@newrelic-daemon"`).
* The daemon can now be passed a `--define <setting>=<value>` flag that allows setting arbitrary parameters from your newrelic.cfg file. These parameters will take precedence over settings from that file.
* Drupal 8 requests that are successful full page cache hits for anonymous users (handled by Drupal\\page_cache\\StackMiddleware\\PageCache) are now given the name WebTransaction/Action/page_cache.
* Support for automatically naming transactions has been added for Symfony 2.8 and 3.0.
* Support for automatically naming transactions has been added for MediaWiki 1.18.0 and newer.

### Upgrade Notices

* It is now possible to disable reporting of errors for exceptions that are handled by an exception handler installed with `set_exception_handler()` by enabling the `newrelic.error_collector.ignore_user_exception_handler` setting.
* Calls to newrelic_notice_error with improper parameters will no longer record an error with the message "?". Instead, no error will be recorded. newrelic_notice_error will now return true if an error is saved, null if the arguments are invalid, and false otherwise. If newrelic_notice_error is called with two parameters and the second parameter is not a valid exception, no error will be recorded: The first parameter is now entirely unused.

### Bug Fixes

* On Redhat Enterprise Linux 7 and related systems such as CentOS and Fedora, the `systemctl start|stop newrelic-daemon` commands were not working due to a bug in the newrelic-daemon init script when executed by systemd. This has been fixed.
* On some Linux systems, an SELinux policy could prevent the newrelic-daemon from determining the correct hostname. Affected systems were unable to report data because a valid hostname is required by New Relic. This has been fixed. This issue could also prevent the newrelic-daemon from determining the correct hostname when running in a chrooted environment, or any environment in which access to the /proc filesystem is limited.
* Detection of Zend Framework 2.5 and later was unreliable when the framework was installed via Composer. This has been fixed.
* Detection of Laravel 5.1 and later was unreliable when `artisan optimize` was used. This has been fixed.
* The agent now sends the attribute `request.headers.contentLength` as an integer rather than a string.
