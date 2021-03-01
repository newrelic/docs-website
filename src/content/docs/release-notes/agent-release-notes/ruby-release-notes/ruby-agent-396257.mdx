---
subject: Ruby agent
releaseDate: '2014-10-20'
version: 3.9.6.257
downloadLink: 'http://rubygems.org/gems/newrelic_rpm/versions/3.9.6.257'
metaDescription: Release notes for Ruby agent 3.9.6.257
---

### Notes

* Rails 4.2 ActiveJob support

  A new version of Rails is coming! One of the highlight features is ActiveJob, a framework for interacting with background job processors. This release of the Ruby agent adds instrumentation to give you insight into ActiveJob, whether you're just testing it out or running it for real.

  Metrics are recorded around enqueuing ActiveJobs, and background transactions are started for any ActiveJob performed where the agent didn't already provide specific instrumentation (such as DelayedJob, Resque and Sidekiq).

  Since Rails 4.2 is still in beta we'd love to hear any feedback on this instrumentation so it'll be rock solid for the general release!
* Ruby 2.2.0-preview1 updates

  Ruby 2.2.0 is on its way later in the year, and the Ruby agent is ready for it. Updates to the GC stats and various other small changes have already been applied, and our automated tests are running against 2.2.0 so the agent will be ready on release day.
* Ignoring transactions by URL

  While you could always ignore transactions by controller and action, the Ruby agent previously lacked a way to ignore by specific URLs or patterns without code changes. This release adds the config setting, `rules.ignore_url_regexes` to ignore specific transactions based on the request URL as well. For more information, see the documentation at: [https://docs.newrelic.com/docs/agents/ruby-agent/installation-configurat...](https://docs.newrelic.com/docs/agents/ruby-agent/installation-configuration/ignoring-specific-transactions#config-ignoring)
* Better dependency detection in non-Rack applications

  The Ruby agent runs dependency detection at key points in the Rack and Rails lifecycle, but non-Rails apps could occasionally miss out instrumenting late loaded libraries. The agent now runs an additional dependency detection during manual_start to more seamlessly install instrumentation in any app.
* Excluding /newrelic routes from developer mode

  Recent changes to track time in middleware resulted in New Relic's developer mode capturing its own page views in the list. This has been fixed. Thanks to Ignatius Reza Lesmana for the report!
* Spikes in external time

  Timeouts during certain external HTTP requests could result in incorrect large spikes in the time recorded by the agent. This has been fixed.
* Recognize browser_monitoring.auto_instrument setting in non-Rails apps

  The `browser_monitoring.auto_instrument` config setting disables auto-injection of JavaScript into your pages, but was not properly obeyed in Sinatra and other non-Rails contexts. This has been fixed.
* Failures to gather CPU thread time on JRuby

  JRuby running on certain JVM's and operating systems (FreeBSD in particular) did not always support the method being used to gather CPU burn metrics. This would result in a failure during those transactions. This has been fixed.
* Fix for rare race condition in Resque instrumentation

  A race condition in the agent's Resque instrumentation that could cause rare Resque job failures in high-throughput Resque setups has been fixed. This bug would manifest as an exception with the following error message: "RuntimeError: can't add a new key into hash during iteration" and a backtrace leading through the PipeChannelManager class in the agent.
