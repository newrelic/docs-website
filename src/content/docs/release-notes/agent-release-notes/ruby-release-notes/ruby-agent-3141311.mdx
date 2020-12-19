---
subject: Ruby agent
releaseDate: '2015-12-10'
version: 3.14.1.311
downloadLink: 'https://rubygems.org/gems/newrelic_rpm/versions/3.14.1.311'
---

### Notes

* Add support for setting a display name on hosts

  You can now configure a display name for your hosts using `process_host.display_name`, to more easily distinguish dynamically assigned hosts. For more info, see [Change display name of hosts](https://docs.newrelic.com/docs/apm/new-relic-apm/maintenance/add-rename-remove-hosts#display_name)
* Fixes automatic middleware instrumentation for Puma 2.12.x

  Starting with version 2.12.x the Puma project inlines versions of `Rack::Builder` and `Rack::URLMap` under the Puma namespace. This had the unfortunate side effect of breaking automatic Rack middleware instrumentation. We now instrument `Puma::Rack::Builder` and `Puma::Rack::URLMap` and once again have automatic Rack middleware instrumentation for applications running on Puma.
* Do not use a DelayedJob's `display_name` for naming the transaction

  A DelayedJob's name may be superseded by a `display_name`, which can lead to a metric grouping issue if the `display_name` contains unique identifiers. We no longer use job name methods that may lead to an arbitrary `display_name`. Instead, we use the appropriate class and/or method names, depending what makes sense for the job and how it's called.
* Improvements to Mongo 2.1.x instrumentation

  Fixes issue where `getMore` operations in batched queries could create metric grouping issues. Previously when multiple Mongo queries executed in the same scope only a single query was recorded as part of a transaction trace. Now transaction trace nodes will be created for every query executed during a transaction.
* Bugfix for `NewRelic::Agent.notice_error`

  Fixes issue introduced in v3.14.0 where calling `NewRelic::Agent.notice_error` outside of an active transaction results in a `NoMethodError`.
* Bugfix for Resque Transaction Error events

  Fixes error preventing Transaction Error events generated in Resque tasks from being sent to New Relic.
