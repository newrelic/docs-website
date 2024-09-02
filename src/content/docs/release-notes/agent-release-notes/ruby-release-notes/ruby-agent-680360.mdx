---
subject: Ruby agent
releaseDate: '2019-12-30'
version: 6.8.0
downloadLink: 'https://rubygems.org/downloads/newrelic_rpm-6.8.0.360.gem'
---

## v6.8.0

* **Initial Ruby 2.7 support**

  The Ruby agent has been verified to run with Ruby 2.7.0-preview1.
* **New API method to add custom attributes to Spans**

  New API method for adding custom attributes to [spans](/docs/using-new-relic/welcome-new-relic/get-started/glossary#span). Previously, custom attributes were only available at the Transaction level. Now, with Span level custom attributes, more granular tagging is possible for easier isolation and review of traces. For more information:

  * [`Agent#add_custom_span_attributes`](https://www.rubydoc.info/gems/newrelic_rpm/NewRelic/Agent#add_custom_span_attributes-instance_method)
* **Enables ability to migrate to configurable security policies (CSP) on a per-agent basis for accounts already using high-security mode (HSM).**

  When both [HSM](https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/high-security-mode) and [CSP](https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/enable-configurable-security-policies) are enabled for an account, an agent (this version or later) can successfully connect with either `high_security: true` or the appropriate `security_policies_token` configured. `high_security` has been added as part of the preconnect payload.
* **Bugfix for logs-in-context combined with act-fluent-logger-rails**

  Previously, when using the Ruby agent's logs-in-context logger to link logging data with trace and entity metadata for an improved experience in the UI, customers who were also using the `act-fluent-logger-rails` gem would see a `NoMethodError` for `clear_tags!` that would interfere with the use of this feature. This error no longer appears, allowing customers to combine the use of logs-in-context with the use of this gem.

  Please note that the logs-in-context logger does not support tagged logging; if you are initializing your logger with a `log_tags` argument, your custom tags may not appear on the final version of your logs.
* **Bugfix for parsing invalid newrelic.yml**

  Previously, if the newrelic.yml configuration file was invalid, and the agent could not start as a result, the agent would not log any indication of the problem.

  This version of the agent will emit a FATAL message to STDOUT when this scenario occurs so that customers can address issues with newrelic.yml that prevent startup.
* **Configuration options containing the terms "whitelist" and "blacklist" deprecated**

  The following local configuration settings have been deprecated:

  * `autostart.blacklisted_constants`: use `autostart.denylisted_constants` instead.
  * `autostart.blacklisted_executables`: use `autostart.denylisted_executables` instead.
  * `autostart.blacklisted_rake_tasks`: use `autostart.denylisted_rake_tasks` instead.
  * `strip_exception_messages.whitelist`: use `strip_exception_messages.allowed_classes` instead.
* **Bugfix for module loading and constant resolution in Rails**

  Starting in version 6.3, the Ruby agent has caused module loading and constant resolution to sometimes fail, which caused errors in some Rails applications. These errors were generally `NoMethodError` exceptions or I18n errors `translation missing` or `invalid locale`. These errors would not appear if the agent was removed from the application's Gemfile. This version of the agent fixes these issues with module loading and constant resolution, so these errors no longer occur.
* **Bugfix: failed to get urandom**

  Previous versions of the agent would fail unexpectedly when the Ruby process used every available file descriptor. The failures would include this message:

  ```
  ERROR : RuntimeError: failed to get urandom
  ```

  This version of the agent uses a different strategy for generating random IDs, and will not fail in the same way when no file descriptors are available.
