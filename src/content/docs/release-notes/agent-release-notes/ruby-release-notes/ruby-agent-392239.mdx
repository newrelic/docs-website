---
subject: Ruby agent
releaseDate: '2014-08-21'
version: 3.9.2.239
metaDescription: Release notes for Ruby Agent 3.9.2.239
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes

* Added API for ignoring transactions

  This release adds three new API calls for ignoring transactions:

  * `NewRelic::Agent.ignore_transaction`
  * [`NewRelic::Agent.ignore_apdex`](/docs/agents/ruby-agent/installation-and-configuration/ignoring-specific-transactions#apdex)
  * [`NewRelic::Agent.ignore_enduser`](/docs/agents/ruby-agent/installation-and-configuration/ignoring-specific-transactions#page-load-timing-rum)

  `ignore_transaction` ignores a transaction completely: nothing about it will be reported to New Relic. `ignore_apdex` ignores only the Apdex metric for a single transaction. `ignore_enduser` disables Javascript injection for browser monitoring for the current transaction.

  These methods differ from the existing `newrelic_ignore_*` method in that they may be called **during** a transaction based on some dynamic runtime criteria, as opposed to at the class level on startup.

  For more information, see [ignoring specific transactions](/docs/agents/ruby-agent/installation-and-configuration/ignoring-specific-transactions).
* Improved SQL obfuscation

  SQL queries containing string literals ending in backslash `\` characters were not correctly obfuscated by the Ruby agent prior to transmission to New Relic. In addition, SQL comments were left un-obfuscated. This has been fixed, and the test coverage for SQL obfuscation has been improved.
* `newrelic_ignore*` methods now work when called in a superclass

  The `newrelic_ignore*` family of methods previously did not apply to subclasses of the class from which it was called, meaning that Rails controllers inheriting from a single base class where `newrelic_ignore` had been called would not be ignored. This has been fixed.
* Fix for rare crashes in `Rack::Request#params` on Sinatra apps

  Certain kinds of malformed HTTP requests previously caused unhandled exceptions in the Ruby agent's Sinatra instrumentation, in the `Rack::Request#params` method. This has been fixed.
* Improved handling for rare errors caused by timeouts in Excon requests

  In some rare cases, the agent would emit a warning message in its log file and abort instrumentation of a transaction if a timeout occurred during an Excon request initiated from within that transaction. This has been fixed.
* Improved behavior when the agent is misconfigured

  When the agent is misconfigured by attempting to shut it down without it ever having been started, or by attempting to disable instrumentation after instrumentation has already been installed, the agent will no longer raise an exception, but will instead log an error to its log file.
* Fix for `ignore_error_filter` not working in some configurations

  The `ignore_error_filter` method allows you to specify a block to be evaluated in order to determine whether a given error should be ignored by the agent. If the agent was initially disabled, and then later enabled with a call to `manual_start`, the `ignore_error_filter` would not work. This has been fixed.
* Fix for Capistrano 3 ignoring `newrelic_revision`

  New Relic's Capistrano recipes support passing parameters to control the values recorded with deployments, but user-provided `:newrelic_revision` values were incorrectly overwritten. This has been fixed.
* Agent errors logged with ruby-prof in production

  If the ruby-prof gem was available in an environment without New Relic's developer mode enabled, the agent would generate errors to its log. This has been fixed.
* Tighter requirements on naming for configuration environment variables

  The agent would previously assume any environment variable containing `NEWRELIC` was a configuration setting. It now looks for this string as a prefix only.

  Thanks to Chad Woolley for the contribution!
