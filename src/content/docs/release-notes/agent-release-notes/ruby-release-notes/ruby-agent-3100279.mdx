---
subject: Ruby agent
releaseDate: '2015-02-17'
version: 3.10.0.279
downloadLink: 'https://rubygems.org/gems/newrelic_rpm/versions/3.10.0.279'
---

### Notes

* Support for the Grape framework

  We now instrument the Grape REST API framework! To avoid conflicts with the third-party newrelic-grape gem, our instrumentation will not be installed if newrelic-grape is present in the Gemfile.

  For more details, see [https://docs.newrelic.com/docs/agents/ruby-agent/frameworks/grape-instru...](https://docs.newrelic.com/docs/agents/ruby-agent/frameworks/grape-instrumentation)
* Automatic Cross Application Tracing support for all Rack applications

  Previously Rack apps not using Rails or Sinatra needed to include the AgentHooks middleware to get Cross Application Tracing support. With these changes, this is no longer necessary. Any explicit references to AgentHooks can be removed unless the `disable_middleware_instrumentation` setting is set to `true`.
* Metrics no longer reported from Puma master processes

  When using Puma's cluster mode with the preload_app! configuration directive, the agent will no longer start its reporting thread in the Puma master process. This should result in more accurate instance counts, and more accurate stats on the Ruby VMs page (since the master process will be excluded).
* Better support for Sinatra apps used with Rack::Cascade

  Previously, using a Sinatra application as part of a Rack::Cascade chain would cause all transactions to be named after the Sinatra application, rather than allowing downstream applications to set the transaction name when the Sinatra application returned a 404 response. This has been fixed.
* Updated support for Rubinius 2.3+ metrics

  Rubinius 2.3 introduced a new system for gathering metrics from the underlying VM. Data capture for the Ruby VM's page has been updated to take advantage of these. Thanks Yorick Peterse for the contribution!
* Fix for missing ActiveJob traced errors

  ActiveJobs processed by backends where the Ruby agent lacked existing instrumentation missed reporting traced errors. This did not impact ActiveJobs used with Sidekiq or Resque, and has been fixed.
* Fix possible crash in middleware tracing

  In rare circumstances, a failure in the agent early during tracing of a web request could lead to a cascading error when trying to capture the HTTP status code of the request. This has been fixed. Thanks to Michal Cichra for the fix!
