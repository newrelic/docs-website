---
subject: Ruby agent
releaseDate: '2024-01-10'
version: 9.7.0
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.7.0.gem
features: ["ViewComponent instrumentation", "Use root path to access Elasticsearch cluster name", "Remove base64 dependency, use direct calls to String methods", "Add Falcon support", "Remove spans with name Ruby/Thread and Ruby/Fiber"]
bugs: []
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.7.0

Version 9.7.0 introduces ViewComponent instrumentation, changes the endpoint used to access the cluster name for Elasticsearch instrumentation, removes the creation of the Ruby/Thread and Ruby/Fiber spans, and adds support for Falcon.

* **Feature: ViewComponent instrumentation**

  [ViewComponent](https://viewcomponent.org/) is a now an instrumented library. [PR#2367](https://github.com/newrelic/newrelic-ruby-agent/pull/2367)

* **Feature: Use root path to access Elasticsearch cluster name**

  Previously, the agent used the cluster health endpoint (`/_cluster/health`) to access the cluster name. However, this has been found to make startup unstable for large clusters. Now, the agent uses the more performant root endpoint (`/`).

  Our thanks go to [@erikkessler1](https://github.com/erikkessler1), [@gremerritt](https://github.com/gremerritt), and [@joshbranham](https://github.com/joshbranham) for reporting the issue, suggesting solutions, and testing them. [Issue#2360](https://github.com/newrelic/newrelic-ruby-agent/issues/2360) [PR#2377](https://github.com/newrelic/newrelic-ruby-agent/pull/2377)

* **Feature: Remove base64 dependency, use direct calls to String methods**

  In version 9.6.0, the agent required the Ruby `base64` gem as a depdendency to prepare for deprecation warnings in Ruby 3.3 and the gem's removal from the Ruby standard libraries in 3.4. Including `base64` as a dependency has caused problems with version resolution in some environments.

  To resolve this, the agent now directly calls the `String` methods used in the `base64` library in the new `NewRelic::Base64` module.

  Thank you, [@Earlopain](https://github.com/Earlopain), for submitting this change. [PR#2378](https://github.com/newrelic/newrelic-ruby-agent/pull/2378)

* **Feature: Add Falcon support**

  The agent now supports the web server [Falcon](https://socketry.github.io/falcon/). [PR#2383](https://github.com/newrelic/newrelic-ruby-agent/pull/2383)

* **Feature: Remove spans with name Ruby/Thread and Ruby/Fiber**

  Due to the lack of helpful information and the confusion commonly caused by the spans named Ruby/Thread and Ruby/Fiber, these spans have been removed. However, the agents ability to monitor instrumented code running in a thread or fiber will remain unchanged. [PR#2389](https://github.com/newrelic/newrelic-ruby-agent/pull/2389)
