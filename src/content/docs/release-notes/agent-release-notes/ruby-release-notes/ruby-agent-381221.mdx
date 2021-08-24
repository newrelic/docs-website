---
subject: Ruby agent
releaseDate: '2014-05-16'
version: 3.8.1.221
metaDescription: Release notes for Ruby Agent 3.8.1.221.
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes

* Better handling for Rack applications implemented as middlewares

  When using a Sinatra application as a middleware around another app (for example, a Rails app), or manually instrumenting a Rack middleware wrapped around another application, the agent would previously generate two separate transaction names in the New Relic UI (one for the middleware, and one for the inner application).

  As of this release, the agent will instead unify these two parts into a single transaction in the UI. The unified name will be the name assigned to the inner-most traced transaction by default. Calls to NewRelic::Agent.set_transaction_name will continue to override the default names assigned by the agent's instrumentation code.

  This change also makes it possible to run X-Ray sessions against transactions of the 'inner' application in cases where one instrumented app is wrapped in another that's implemented as a middleware.
* Support for mongo-1.10.0

  The Ruby agent now instruments version 1.10.0 of the mongo gem (versions 1.8.x and 1.9.x were already supported, and continue to be).
* Allow setting configuration file path via an option to manual_start

  Previously, passing the :config_path option to NewRelic::Agent.manual_start would not actually affect the location that the agent would use to look for its configuration file. This has been fixed, and the log messages emitted when a configuration file is not found should now be more helpful.
