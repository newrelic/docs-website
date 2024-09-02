---
subject: Ruby agent
releaseDate: '2023-10-30'
version: 9.6.0
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.6.0.gem
features: ["Add instrumentation for Async::HTTP", "Add instrumentation for Ethon", "Add instrumentation for HTTPX", "Prevent the agent from starting in \"rails\" commands in Rails 7", "Glean Docker container ID for cgroups v2-based containers", "Update events with additional synthetics attributes when available", "Declare a gem dependency on the Ruby Base 64 gem 'base64'", "Add Roda support for the newrelic_ignore\\* family of methods", "Add additional span attributes for OpenTelemetry compatibility"]
bugs: ["Stop sending duplicate log events for Rails 7.1 users", "Resolve Sidekiq 8.0 error handler deprecation warning"]
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.6.0

Version 9.6.0 adds instrumentation for Async::HTTP, Ethon, and HTTPX, adds the ability to ignore specific routes with Roda, gleans Docker container IDs from cgroups v2-based containers, records additional synthetics attributes, fixes an issue with Rails 7.1 that could cause duplicate log records to be sent to New Relic, fixes a deprecation warning for the Sidekiq error handler, adds additional attributes for OpenTelemetry compatibility, and resolves some technical debt, thanks to the community.

* **Feature: Add instrumentation for Async::HTTP**

  The agent will now record spans for Async::HTTP requests. Versions 0.59.0 and above of the async-http gem are supported. [PR#2272](https://github.com/newrelic/newrelic-ruby-agent/pull/2272)

* **Feature: Add instrumentation for Ethon**

  Instrumentation has been added for the [Ethon](https://github.com/typhoeus/ethon) HTTP client gem. Versions 0.12.0 and above are supported. The agent will now record external request segments for invocations of `Ethon::Easy#perform` and `Ethon::Multi#perform`. NOTE: The [Typhoeus](https://github.com/typhoeus/typhoeus) gem is maintained by the same team that maintains Ethon and depends on Ethon for its functionality. To prevent duplicate reporting for each HTTP request, the Ethon instrumentation will be disabled when Typhoeus is detected. [PR#2260](https://github.com/newrelic/newrelic-ruby-agent/pull/2260)

* **Feature: Add instrumentation for HTTPX**

  The agent now offers instrumentation for the HTTP client [HTTPX](https://honeyryderchuck.gitlab.io/httpx/), provided the gem is at version 1.0.0 or above. [PR#2278](https://github.com/newrelic/newrelic-ruby-agent/pull/2278)

* **Feature: Prevent the agent from starting in "rails" commands in Rails 7**

  Previously, the agent ignored many Rails commands by default, such as `rails routes`, using Rake-specific logic. This was accomplished by setting these commands as default values for the config option `autostart.denylisted_rake_tasks`. However, Rails 7 no longer uses Rake for these commands, causing the agent to start running and attempting to record data when running these commands. The commands have now been added to the default value for the config option `autostart.denylisted_constants`, which will allow the agent to recognize these commands correctly in Rails 7 and prevent the agent from starting during ignored tasks. Note that the agent will continue to start-up when the `rails server` and `rails runner` commands are invoked. [PR#2239](https://github.com/newrelic/newrelic-ruby-agent/pull/2239)

* **Feature: Glean Docker container ID for cgroups v2-based containers**

  Previously, the agent was only capable of determining a host Docker container's ID if the container was based on cgroups v1. Now, containers based on cgroups v2 will also have their container IDs reported to New Relic. [PR#2229](https://github.com/newrelic/newrelic-ruby-agent/issues/2229).

* **Feature: Update events with additional synthetics attributes when available**

  The agent will now record additional synthetics attributes on synthetics events if these attributes are available.  [PR#2203](https://github.com/newrelic/newrelic-ruby-agent/pull/2203)

* **Feature: Declare a gem dependency on the Ruby Base 64 gem 'base64'**

  For compatibility with Ruby 3.4 and to silence compatibility warnings present in Ruby 3.3, declare a dependency on the `base64` gem. The New Relic Ruby agent uses the native Ruby `base64` gem for Base 64 encoding/decoding. The agent is joined by Ruby on Rails ([rails/rails@3e52adf](https://github.com/rails/rails/commit/3e52adf28e90af490f7e3bdc4bcc85618a4e0867)) and others in making this change in preparation for Ruby 3.3/3.4. [PR#2238](https://github.com/newrelic/newrelic-ruby-agent/pull/2238)

* **Feature: Add Roda support for the newrelic_ignore\* family of methods**

  The agent can now selectively disable instrumentation for particular requests within Roda applications. Supported methods include:

  * `newrelic_ignore`: ignore a given route.
  * `newrelic_ignore_apdex`: exclude a given route from consideration in overall Apdex calculations.
  * `newrelic_ignore_enduser`: prevent automatic injection of the page load timing JavaScript when a route is rendered.

  For more information, see [Roda Instrumentation](https://docs.newrelic.com/docs/apm/agents/ruby-agent/instrumented-gems/roda-instrumentation/). [PR#2267](https://github.com/newrelic/newrelic-ruby-agent/pull/2267)

* **Feature: Add additional span attributes for OpenTelemetry compatibility**

  For improved compatibility with OpenTelemetry's semantic conventions, the agent's datastore (for databases) and external request (for HTTP clients) segments have been updated with additional attributes.

  Datastore segments now offer 3 additional attributes:

  * `db.system`: The database system. For Ruby we use the database adapter name here.
  * `server.address`: The database host.
  * `server.port`: The database port.

  External request segments now offer 3 additional attributes:

  * `http.request.method`: The HTTP method (ex: 'GET')
  * `server.address`: The target host.
  * `server.port`: The target port.

  For maximum backwards compatibility, no existing attributes have been renamed or removed. [PR#2283](https://github.com/newrelic/newrelic-ruby-agent/pull/2283)

* **Bugfix: Stop sending duplicate log events for Rails 7.1 users**

  Rails 7.1 introduced the public API [`ActiveSupport::BroadcastLogger`](https://api.rubyonrails.org/classes/ActiveSupport/BroadcastLogger.html). This logger replaces a private API, `ActiveSupport::Logger.broadcast`. In Rails versions below 7.1, the agent uses the `broadcast` method to stop duplicate logs from being recoded by broadcasted loggers. Now, we've updated the code to provide a similar duplication fix for the `ActiveSupport::BroadcastLogger` class. [PR#2252](https://github.com/newrelic/newrelic-ruby-agent/pull/2252)

* **Bugfix: Resolve Sidekiq 8.0 error handler deprecation warning**

  Sidekiq 8.0 will require procs passed to the error handler to include three arguments: error, context, and config. Users running sidekiq/main would receive a deprecation warning with this change any time an error was raised within a job. Thank you, [@fukayatsu](https://github.com/fukayatsu) for your proactive fix! [PR#2261](https://github.com/newrelic/newrelic-ruby-agent/pull/2261)

* **Community: Resolve technical debt**

  We also received some great contributions from community members to resolve some outstanding technical debt issues. Thank you for your contributions!

  * Add and Replace SLASH and ROOT constants: [PR#2256](https://github.com/newrelic/newrelic-ruby-agent/pull/2256) [chahmedejaz](https://github.com/chahmedejaz)
  * Remove pry as a dev dependency: [PR#2665](https://github.com/newrelic/newrelic-ruby-agent/pull/2265), [PR#2273](https://github.com/newrelic/newrelic-ruby-agent/pull/2273) [AlajeBash](https://github.com/AlajeBash)
  * Replace "start up" with "start-up": [PR#2249](https://github.com/newrelic/newrelic-ruby-agent/pull/2249) [chahmedejaz](https://github.com/chahmedejaz)
  * Remove unused variables in test suites: [PR#2250](https://github.com/newrelic/newrelic-ruby-agent/pull/2250)
