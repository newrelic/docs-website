---
subject: PHP agent
releaseDate: '2019-08-08'
version: 9.0.2.242
downloadLink: 'https://download.newrelic.com/php_agent/archive/9.0.0.242/'
---

### New features in 9.0

**Detailed transaction traces now available when distributed tracing is enabled.**

This release includes a refactor of segment storage to allow the agent to sort and apply different prioritization of segments that are used for transaction traces instead of distributed tracing. The PHP agent 8.4 release included limited support for distributed tracing, which resulted in the loss of detailed transaction traces for individual PHP services when distributed tracing was enabled.

The refactor in this new release allows the agent to send up the segments (spans) you want to view for a distributed trace that includes PHP services. It also separately provides as much segment detail as possible when exploring transaction traces for an individual PHP service.

Notes:

* The [instructions to enable distributed tracing](https://docs.newrelic.com/docs/agents/php-agent/features/distributed-tracing-php-agent#enable-distributed) have not changed with this release.
* The behavior of `newrelic.transaction_tracer.detail` has changed when distributed tracing is on. In the 8.4 - 8.7 PHP agent releases, `newrelic.transaction_tracer.detail` was disabled when distributed tracing was enabled. That is no longer the case. For more information, see the documentation for [configuring trace level detail when using distributed tracing](https://docs.newrelic.com/docs/agents/php-agent/features/distributed-tracing-php-agent#performance).
* To enable the improved support for distributed tracing, the PHP agent's memory allocation strategy has changed in 9.0. The PHP agent will more aggressively allocate memory when a transaction starts, and the system allocator may choose not to release that memory back to the operating system immediately, depending on the configuration of the operating system kernel and C library. As a result, the memory usage of the PHP processes may now be higher than it was with previous versions of the PHP agent.

### Upgrade notices for 9.0

**With these distributed tracing enhancements, please check threshold values**.

* In the 8.4 - 8.7 PHP agent releases, we recommended that customers set `newrelic.transaction_tracer.threshold = 0` so that the agent would report complete distributed traces even when a lightweight PHP service was part of the trace. This is no longer necessary.
* When upgrading to the 9.0 release, we recommend that you review your `newrelic.transaction_tracer.threshold` settings, and return this value to its default or some higher value that is sensible for the application.

**The daemon will now issue a warning if it cannot find a root certificate bundle on startup.**

* The daemon includes its own certificates and will still operate, but a future version of the PHP agent will remove the built-in certificates. At that point the PHP agent will not be able to communicate with New Relic's servers.
* **Recommendation:** Ensure a root certificate bundle is installed on your host or in your container before using the PHP agent. This is generally available on most Linux distributions as a `ca-certificates` package. On FreeBSD, a bundle is available via the `security/ca_root_nss` package in ports.

**The daemon may no longer be invoked with the `--tls` flag.**

* As of PHP agent version 8.0.0 the newrelic.daemon.ssl ini setting had been removed to increase security, but you could still invoke the daemon from the command line with `--tls true`. Command-line invocations of the daemon with the `--tls` flag will cause the invocation to fail.
* As with all PHP agent versions since 8.0.0, TLS is always used for communication with New Relic servers.

### Bug fixes

* A potential segfault when using `drupal_http_request` under PHP 7.3 has been fixed.
* In some cases, starting a new transaction during a request (via `newrelic_start_transaction` or `newrelic_set_appname`) could result in an incomplete state of framework and user function instrumentation.
* When obfuscating SQL, comments are stripped without any loss of the SQL itself.
* Predis 0.8 commands that used the synchronous `executeCommand()` code path (for example, `HSET`) on a clustered connection did not generate metrics. This has been fixed.

### Known issues and workarounds

**Potential memory exhaustion for long running transactions**

PHP agent 9.x uses more memory than previous versions, as it is less aggressive about freeing the memory used to track function calls and segments during transactions: in the normal case, memory is only freed at the end of each transaction.

This tends to manifest mainly for users with long running transactions, such as background jobs to process message queues, transform or report on data, or send e-mails.

We apologize for the inconvenience this issue has caused, and are actively working to fix it. In the short term, we have four potential workarounds to mitigate this issue.

Workarounds:

* **1. Start/stop transactions manually.** If the affected transaction is one that performs a series of repetitive processes, such as a message queue consumer, you can manually instrument each iteration as a separate transaction. This provides you more fine-grained data on how the process is operating. By doing this, the memory used will be freed after each transaction. To implement this, you would ignore the initial automatic transaction with `newrelic_end_transaction(true)`, then use `newrelic_start_transaction()`and `newrelic_end_transaction()` to instrument each transaction in turn.
* **2. Reduce transaction trace detail.** If you will need PHP 7.4 immediately, or any of the functionality added in the PHP agent 9.x releases, and can get by with traces only including information on datastore and external calls, then you can reduce the level of detail the PHP agent captures by changing this configuration setting: `newrelic.transaction_tracer.detail = 0`. With this setting, traces will no longer contain PHP function calls. **NOTE: Transactions that make hundreds of thousands of datastore or external calls may still be affected by memory issues.**
* **3. Downgrade to PHP agent 8.7.** If you don’t intend to use PHP 7.4 immediately, this is likely the simplest and fastest solution. To downgrade, you can either install from the tarballs at [https://download.newrelic.com/php_agent/archive/8.7.0.242/](https://download.newrelic.com/php_agent/archive/8.7.0.242/), or downgrade to version 8.7.0.242 in your package manager and pin that version. Note that if distributed tracing is enabled on PHP agent 8.7, transaction tracer detail is automatically reduced (as per the next option).
* **4. Cap the # of function segments that are created** (stay on PHP agent 9.x). This is similar to the “reduce transaction trace detail” option, but also allows for a limited number of PHP function calls to be traced, at the cost of an increase in memory usage commensurate with the number of functions that are captured. (As a rough rule of thumb, each segment requires about 320-400 bytes of the heap.) To capture the first 5,000 function calls, you would add this configuration setting: `newrelic.transaction_tracer.max_segments = 5000`. With this setting, any PHP functions after the number of function calls that are configured will be ignored. **NOTE: Transactions that make hundreds of thousands of datastore or external calls may still be affected by memory issues.**

\*\*_NOTE: A more detailed explanation of these options can be found in our [Explorer’s Hub post](https://discuss.newrelic.com/t/potential-memory-exhaustion-for-long-running-transactions-with-php-agent-9-x/88761)._
