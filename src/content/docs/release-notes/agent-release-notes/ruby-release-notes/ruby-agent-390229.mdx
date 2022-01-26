---
subject: Ruby agent
releaseDate: '2014-06-25'
version: 3.9.0.229
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes

* Rack middleware instrumentation

  The Ruby agent now automatically instruments Rack middlewares!

  This means that the agent can now give you a more complete picture of your application's response time, including time spent in middleware. It also means that requests which previously weren't captured by the agent because they never made it to the bottom of your middleware stack (usually a Rails or Sinatra application) will now be captured.

  After installing this version of the Ruby agent, you'll see a new 'Middleware' band on your application's overview graph, and individual middlewares will appear in transaction breakdown charts and transaction traces.

  The agent can instrument middlewares that are added from a config.ru file via Rack::Builder, or via Rails' middleware stack in Rails 3.0+.

  This instrumentation may be disabled with the disable_middlware_instrumentation configuration setting.

  For more details, see the documentation for this feature:

  * [http://docs.newrelic.com/docs/ruby/rack-middlewares](http://docs.newrelic.com/docs/ruby/rack-middlewares)
  * [http://docs.newrelic.com/docs/ruby/middleware-upgrade-changes](http://docs.newrelic.com/docs/ruby/middleware-upgrade-changes)
* Capistrano 3.x support

  Recording application deployments using Capistrano 3.x is now supported.

  Many thanks to Jennifer Page for the contribution!
* Better support for Sidekiq's Delayed extensions

  Sidekiq jobs executed via the Delayed extensions (e.g. the #delay method) will now be named after the actual class that #delay was invoked against, and will have their job arguments correctly captured if the sidekiq.capture_params configuration setting is enabled.

  Many thanks to printercu for the contribution!
* Improved Apdex calculation with ignored error classes

  Previously, a transaction resulting in an exception that bubbled up to the top level would always be counted as failing for the purposes of Apdex calculations (unless the transaction name was ignored entirely). Now, exceptions whose classes have been ignored by the error_collector.ignore_errors configuration setting will not cause a transaction to be automatically counted as failing.
* Allow URIs that are not parseable by stdlib's URI if addressable is present

  There are some URIs that are valid by RFC 3986, but not parseable by Ruby's stdlib URI class. The Ruby agent will now attempt to use the addressable gem to parse URIs if it is present, allowing requests against these problematic URIs to be instrumented.

  Many thanks to Craig R Webster and Amir Yalon for their help with this issue!
* More robust error collection from Resque processes

  Previously, traced errors where the exception class was defined in the Resque worker but not in the Resque master process would not be correctly handled by the agent. This has been fixed.
* Allow Sinatra apps to set the New Relic environment without setting RACK_ENV

  The NEW_RELIC_ENV environment variable may now be used to specify the environment the agent should use from its configuration file, independently of RACK_ENV.

  Many thanks to Mario Izquierdo for the contribution!
* Better error handling in Browser Application Monitoring injection

  The agent middleware that injects the JavaScript code necessary for Browser Application Monitoring now does a better job of catching errors that might occur during the injection process.
* Allow disabling of Net::HTTP instrumentation

  Most instrumentation in the Ruby agent can be disabled easily via a configuration setting. Our Net::HTTP instrumentation was previously an exception, but now it can also be disabled with the disable_net_http configuration setting.
* Make Rails constant presence check more defensive

  The Ruby agent now guards against the (rare) case where an application has a Rails constant defined, but no Rails::VERSION constant (because Rails is not actually present).

  Many thanks to Vladimir Kiselev for the contribution!
