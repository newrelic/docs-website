---
subject: Ruby agent
releaseDate: '2019-06-26'
version: 6.5.0
downloadLink: 'https://rubygems.org/downloads/newrelic_rpm-6.5.0.356.gem'
---

## Improvements

**Change to default setting for ActiveRecord connection resolution**

Due to incompatibilities between the faster ActiveRecord connection resolution released in Ruby agent v6.3.0 and other gems that patch ActiveRecord, `backport_fast_active_record_connection_lookup` will now be set to `false` by default. This will result in significant performance improvement.

**Recommendation:** If your environment includes ActiveRecord, change this setting to `true`.

**Exception:** If you are using other gems that measure ActiveRecord performance, they may lose functionality when combined with this setting. If you are unsure whether to enable `backport_fast_active_record_connection_lookup`, we recommend enabling it in a development environment to make sure other gems that patch ActiveRecord are still working as expected.

## Fixes

* **Bugfix for ActiveStorage instrumentation error**

  Version 6.4.0 of the agent introduced a bug that interfered with ActiveStorage callbacks, resulting in the agent being unable to instrument ActiveStorage operations. ActiveStorage segments are now correctly recorded.
* **Bugfix for ActiveRecord 4.1 and 4.2 exception logging**

  Version 6.3.0 of the agent introduced a bug that prevented ActiveRecord versions 4.1 and 4.2 from logging exceptions that occurred within a database transaction. This version of the agent restores the exception logging functionality from previous agent versions. Thanks to Oleksiy Kovyrin for the contribution!

## Notes

The Ruby agent now enforces a maximum of 10,000 [transaction events](https://docs.newrelic.com/docs/agents/ruby-agent/configuration/ruby-agent-configuration#analytics_events-max_samples_stored) and [custom events](https://docs.newrelic.com/docs/agents/ruby-agent/configuration/ruby-agent-configuration#custom_insights_events-max_samples_stored) and 100 [error events](https://docs.newrelic.com/docs/agents/ruby-agent/configuration/ruby-agent-configuration#error_collector-max_event_samples_stored) per minute.
