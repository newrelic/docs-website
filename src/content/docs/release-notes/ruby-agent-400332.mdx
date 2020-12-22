---
subject: Ruby agent
releaseDate: '2017-03-16'
version: 4.0.0.332
downloadLink: 'https://rubygems.org/downloads/newrelic_rpm-4.0.0.332.gem'
---

## v4.0.0

* Require Ruby 2.0.0+

  The agent no longer supports Ruby versions prior to 2.0, JRuby 1.7 and earlier, and all versions of Rubinius. Customers using affected Rubies can continue to run 3.x agent versions, but new features or bugfixes will not be published for 3.x agents. For more information, check out our [community forum](https://discuss.newrelic.com/t/support-for-ruby-jruby-1-x-is-being-deprecated-in-ruby-agent-4-0-0/44787).
* OkJson vendored library removed

  Ruby 1.8 did not include the JSON gem by default, so the agent included a vendored version of [OkJson](https://github.com/kr/okjson) that it would fall back on using in cases where the JSON gem was not available. This has been removed.
* YAJL workaround removed

  [yajl-ruby](https://github.com/brianmario/yajl-ruby) versions prior to 1.2 had the potential to cause a segmentation fault when working large, deeply-nested objects like thread profiles. If you are using yajl-ruby with the `JSON` monkey patches enabled by requiring `yajl/json_gem`, you should upgrade to at least version 1.2.
* Deprecated APIs removed

  * `Agent.abort_transaction!`
  * `Agent.add_custom_parameters`
  * `Agent.add_request_parameters`
  * `Agent.browser_timing_footer`
  * `Agent.get_stats`
  * `Agent.get_stats_no_scope`
  * `Agent.record_transaction`
  * `Agent.reset_stats`
  * `Agent.set_user_attributes`
  * `Agent::Instrumentation::Rack`
  * `ActionController#newrelic_notice_error`
  * `ActiveRecordHelper.rollup_metrics_for` (may be incompatible with newrelic_moped)
  * `Instrumentation::MetricFrame.recording_web_transaction?`
  * `Instrumentation::MetricFrame.abort_transaction!`
  * `MethodTracer.get_stats_scoped`
  * `MethodTracer.get_stats_unscoped`
  * `MethodTracer.trace_method_execution`
  * `MethodTracer.trace_method_execution_no_scope`
  * `MethodTracer.trace_method_execution_with_scope`
  * `MetricSpec#sub`
  * `MetricStats#get_stats`
  * `MetricStats#get_stats_no_scope`
  * `NoticedError#exception_class`
  * `Rack::ErrorCollector`
  * `StatsEngine::Samplers.add_sampler`
  * `StatsEngine::Samplers.add_harvest_sampler`

  The above methods have had deprecation notices on them for some time and have now been removed. Assistance migrating usage of these APIs is available at [https://docs.newrelic.com/docs/agents/ruby-agent/troubleshooting/update-...](https://docs.newrelic.com/docs/agents/ruby-agent/troubleshooting/update-deprecated-api-calls) .

  The agent no longer deletes deprecated keys passed to `add_method_tracer`. Passing in deprecated keys can cause an exception. Ensure that you are not passing any of the following keys: `:force, :scoped_metric_only, :deduct_call_time_from_parent` to `add_method_tracer`.

  The agent no longer deletes deprecated keys passed in as options to `NewRelic::Agent.notice_error`. If you are passing any of these deprecated keys: `:request_params, :request, :referer` to the `notice_error` API, please delete them otherwise they will be collected as custom attributes.
* Error handling changes

  The agent now only checks for `original_exception` in environments with Rails versions prior to 5. Checking for `Exception#cause` has been removed. In addition, the agent now will match class name with message and backtrace when noticing errors that have an `original_exception`.
