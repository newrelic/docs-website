---
subject: PHP agent
releaseDate: '2019-10-07'
version: 9.2.0.247
downloadLink: 'https://download.newrelic.com/php_agent/archive/9.2.0.247/'
---

### New features in 9.2

**More flexibility for container deployments**

* The PHP daemon and agent no longer have to reside on the same host and can now communicate over a IPv4 or IPv6 TCP socket. This can be configured via the `newrelic.daemon.address` setting in the agent and the `--address` command line option for the daemon.
* When terminating the New Relic PHP daemon via the `SIGTERM` signal (and/or the `SIGINT` signal if started with the `-f`, `--foreground` flag), the daemon will now send all buffered data to New Relic prior to exiting.
* The PHP daemon has introduced a new configuration `--watchdog-foreground`. This keeps the daemon watchdog process in the foreground, whereas the `--foreground` configuration keeps the daemon worker process in the foreground. The new configuration makes it possible to use the daemon in a blocking way, without losing the additional stability provided by the watchdog process.

### Upgrade notices

* The PHP agent has introduced a new configuration `newrelic.daemon.address` which serves as an alias to `newrelic.daemon.port`. You may use either to specify the location of the New Relic PHP daemon. If both values are set, `newrelic.daemon.address` takes precedence.

  Similarly, the PHP daemon has introduced a new configuration `--address` which serves as an alias to `--port`. Customers may use either to specify the location of the New Relic PHP daemon. If both values are set, `--address` takes precedence.
* When starting the daemon as an external process, the daemon will now wait for up to three seconds for the listening port to be ready to receive connections before forking into the background. This usually occurs in (much) less than a second, and most users with this configuration will notice no difference in practice.

  The time that the daemon will wait can be controlled by setting the `--wait-for-port` setting with a duration. This duration may be `0` to prevent any blocking. If the option is omitted, the default value is `3s`.

  Note that this is not the default configuration shipped with the PHP agent, and generally is only used in conjunction with the PHP agent configured with `newrelic.daemon.dont_launch` set to `3`.

  Daemons started in foreground mode (with the `--foreground` flag) are unaffected, and will behave as before.

### Bug fixes

* When duplicating database connections to generate explain plans, the agent will no longer make those connections persistent, even if the original connection was persistent.
* The daemon now synchronously handles critical code paths related to harvesting and merging transaction data. This prevents crashes caused by race conditions.
* Previously, the PHP agent was silently ignoring the setting `newrelic.daemon.port` if the value was outside of the range 1 - 65535. In this case, it used the default value of `/tmp/.newrelic.sock`. The PHP agent no longer silently ignores these port values; it now logs these errors in `php_agent.log`.

### Known issues and workarounds

* **Potential memory exhaustion for long running transactions.** See description under **Known issues and workarounds** in the [PHP 9.0.0.242 release notes](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-900242).
