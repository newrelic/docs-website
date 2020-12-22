---
subject: Ruby agent
releaseDate: '2019-05-28'
version: 6.4.0
downloadLink: 'https://rubygems.org/downloads/newrelic_rpm-6.4.0.356.gem'
---

## v6.4.0

* **Custom Metadata Collection**

  The agent now collects environment variables prefixed by `NEW_RELIC_METADATA_`. These may be added to transaction events to provide context between your Kubernetes cluster and your services. For details on the behavior, see [this blog post](https://blog.newrelic.com/engineering/monitoring-application-performance-in-kubernetes/).
* **Bugfix for faster ActiveRecord connection resolution**

  Version 6.3.0 of the agent backported the faster ActiveRecord connection resolution from Rails 6.0 to previous versions, but the implementation caused certain other gems which measured ActiveRecord performance to stop working. This version of the agent changes the implementation of this performance improvement so no such conflicts occur.
* **Bugfix for Grape instrumentation error**

  Previous versions of the agent would fail to install Grape instrumentation in Grape versions 1.2.0 and up if the API being instrumented subclassed `Grape::API::Instance` rather than `Grape::API`. A warning would also print to the newrelic_agent log:

  ```
  WARN : Error in Grape instrumentation
  WARN : NoMethodError: undefined method `name' for nil:NilClass
  ```

  This version of the agent successfully installs instrumentation for subclasses of `Grape::API::Instance`, and these log messages should no longer appear.
* **Bugfix for streaming responses**

  Previous versions of the agent would attempt to insert JavaScript instrumentation into any streaming response that did not make use of `ActionController::Live`. This resulted in an empty, non-streamed response being sent to the client.

  This version of the agent will not attempt to insert JavaScript instrumentation into a response which includes the header `Transfer-Encoding=chunked`, which indicates a streaming response.

  This should exclude JavaScript instrumentation for all streamed responses. To include this instrumentation manually, see [Manually instrument via agent API](https://docs.newrelic.com/docs/agents/ruby-agent/features/new-relic-browser-ruby-agent#manual_instrumentation) in our documentation.
