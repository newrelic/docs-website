---
subject: C SDK
releaseDate: '2019-10-10'
version: 1.2.0
downloadLink: 'https://github.com/newrelic/c-sdk/'
---

### New Features

**_More flexibility for container deployments_**

* The daemon and the instrumented application no longer have to reside on the same host and can now communicate over an IPv4 or IPv6 TCP socket. For the instrumented application this can be configured via the `daemon_socket` argument of the `newrelic_init` function. For the daemon this can be configured via the `--address` command line option.
* When terminating the daemon via the `SIGTERM` signal (and/or the `SIGINT` signal if started with the `-f`, `--foreground` flag), the daemon will now send all buffered data to New Relic prior to exiting.
* The daemon has introduced a new configuration `--watchdog-foreground`. This keeps the daemon watchdog process in the foreground, whereas the `--foreground` configuration keeps the daemon worker process in the foreground. The new configuration makes it possible to use the daemon in a blocking way, without losing the additional stability provided by the watchdog process.
* The C SDK now offers `newrelic_set_transaction_name` with which users may change the name of an already started transaction.

### Bug Fixes

* The daemon now synchronously handles critical code paths related to harvesting and merging transaction data. This prevents crashes caused by race conditions.

### Upgrade Notices

* The daemon has introduced a new configuration `--address` which serves as an alias to `--port`. Customers may use either to specify the location of the daemon. If both values are set, `--address` takes precedence.
* When starting the daemon, it will now wait for up to three seconds for the listening port to be ready to receive connections before forking into the background. This usually occurs in (much) less than a second, and most users with this configuration will notice no difference in practice.

  The time that the daemon will wait can be controlled by setting the `--wait-for-port` setting with a duration. This duration may be 0 to prevent any blocking. If the option is omitted, the default value is `3s`.

  Daemons started in foreground mode (with the `--foreground` flag) are unaffected, and will behave as before.
