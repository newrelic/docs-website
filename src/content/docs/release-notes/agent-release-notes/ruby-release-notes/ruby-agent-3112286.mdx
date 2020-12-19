---
subject: Ruby agent
releaseDate: '2015-04-05'
version: 3.11.2.286
downloadLink: 'https://rubygems.org/gems/newrelic_rpm/versions/3.11.2.286'
---

### Notes

* Better naming for Rack::URLMap

  If a Rack app made direct use of Rack::URLMap, instrumentation would miss out on using the clearest naming based on the app class. This has been fixed.
* Avoid performance regression in makara database adapter

  Delegation in the makara database adapter caused performance issues when the agent looked up a connection in the pool. The agent now uses a faster lookup to work around this problem in makara, and allocates less as well. Thanks Mike Nelson for the help in resolving this!
* Allow audit logging to STDOUT

  Previously audit logs of the agent's communication with New Relic could only write to a file. This prevented using the feature on cloud providers like Heroku. Now STDOUT is an allowed destination for `audit_log.path`. Logging can also be restricted to certain endpoints via `audit_log.endpoints`.

  For more information see [https://docs.newrelic.com/docs/agents/ruby-agent/installation-configurat...](https://docs.newrelic.com/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#audit_log)
* Fix for crash during startup when Rails required but not used

  If an application requires Rails but wasn't actually running it, the Ruby agent would fail during startup. This has been fixed.
* Use IO.select explicitly in the event loop

  If an application adds their own select method to Object/Kernel or mixes in a module that overrides the select method (as with ActionView::Helpers) we would previously have used their implementation instead of the intended IO.select, leading to all sorts of unusual errors. We now explicitly reference IO.select in the event loop to avoid these issues.
* Fix for background thread hangs on old Linux kernels

  When running under Ruby 1.8.7 on Linux kernel versions 2.6.11 and earlier, the background thread used by the agent to report data would hang, leading to no data being reported. This has been be fixed.
