---
subject: Ruby agent
releaseDate: '2024-07-24'
version: 9.12.0
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.12.0.gem
features: ["Add support for the newrelic_security agent", "Add instrumentation for LogStasher", "Add instrumentation for redis-clustering", "Produce metrics for 4 additional Action Controller Rails notifications"]
bugs: ["Update Elasticsearch instrumentation to only attempt to get the cluster name once per client"]
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.12.0

Version 9.12.0 adds support for the `newrelic_security` agent, introduces instrumentation for the LogStasher gem, improves instrumentation for the `redis-clustering` gem, and updates the Elasticsearch instrumentation to only attempt to get the cluster name once per client, even if it fails.

* **Feature: Add support for the newrelic_security agent**

  [New Relic Interactive Application Security Testing (IAST)](https://docs.newrelic.com/docs/iast/introduction/) can help you prevent cyberattacks and breaches on your applications by probing your running code for exploitable vulnerabilities.

  The `newrelic_security` gem provides this feature for Ruby. It depends on `newrelic_rpm`. This is the first version of `newrelic_rpm` compatible with `newrelic_security`.

  At this time, the security agent is intended for use only within a dedicated security testing environment with data that can tolerate modification or deletion. The security agent is available as a separate Ruby gem, `newrelic_security`. It is recommended that this separate gem only be introduced to a security testing environment by leveraging Bundler grouping like so:

  ```ruby
    # Gemfile
    gem 'newrelic_rpm'               # New Relic APM observability agent
    gem 'newrelic-infinite_tracing'  # New Relic Infinite Tracing

    group :security do
      gem 'newrelic_security', require: false        # New Relic security agent
    end
  ```

  In order to run the security agent, you need to update your configuration. At a minimum, `security.agent.enabled` and `security.enabled` must be set to `true`. They are `false` by default. Similar to the gem installation, we recommend you set these configurations for a special security testing environment only.

  Here's an example using `newrelic.yml`:

  ```yaml
    common: &default_settings
      license_key: <%= ENV['NEW_RELIC_LICENSE_KEY'] %>
      app_name: "Example app"

    development:
      <<: *default_settings
      app_name: <%= app_name %> (Development)

    security:
      <<: *default_settings
      security.enabled: true
      security.agent.enabled: true

    production:
      <<: *default_settings
  ```

  The following configuration relate to the `newrelic_security` gem:

  | Configuration name                         | Default                    | Behavior                                                                                                                                                        |
  | ------------------------------------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | security.agent.enabled                     | `false`                    | If `true`, the security agent is loaded (a Ruby 'require' is performed)                                                                                         |
  | security.enabled                           | `false`                    | If `true`, the security agent is started (the agent runs in its event loop)                                                                                     |
  | security.mode                              | `'IAST'`                   | Defines the mode for the security agent to operate in. Currently only 'IAST' is supported                                                                       |
  | security.validator_service_url             | `'wss://csec.nr-data.net'` | Defines the endpoint URL for posting security related data                                                                                                      |
  | security.detection.rci.enabled             | `true`                     | If `true`, enables RCI (remote code injection) detection                                                                                                        |
  | security.detection.rxss.enabled            | `true`                     | If `true`, enables RXSS (reflected cross-site scripting) detection                                                                                              |
  | security.detection.deserialization.enabled | `true`                     | If `true`, enables deserialization detection                                                                                                                    |
  | security.application_info.port             | `nil`                      | An Integer representing the port the application is listening on. This setting is mandatory for Passenger servers. Other servers should be detected by default. |

* **Feature: Add instrumentation for LogStasher**

  The agent will now record logs generated by [LogStasher](https://github.com/shadabahmed/logstasher). Versions 1.0.0 and above of the LogStasher gem are supported. [PR#2559](https://github.com/newrelic/newrelic-ruby-agent/pull/2559)

* **Feature: Add instrumentation for redis-clustering**

  Version 5.x of the `redis` gem moved cluster behavior into a different gem, `redis-clustering`. This gem can access instrumentation registered through `RedisClient::Middleware`. Previously, the agent only instrumented the `call_pipelined` method through this approach, but now users of the `redis-clustering` gem will also have instrumentation registered for `connect` and `call` methods. In addition, the way the `database_name` attribute is set for Redis datastore spans is now compatible with all versions of Redis supported by the New Relic Ruby agent. Thank you, [@praveen-ks](https://github.com/praveen-ks) for bringing this to our attention. [Issue#2444](https://github.com/newrelic/newrelic-ruby-agent/issues/2444) [PR#2720](https://github.com/newrelic/newrelic-ruby-agent/pull/2720)

* **Bugfix: Update Elasticsearch instrumentation to only attempt to get the cluster name once per client**

  Previously, the agent would attempt to get the cluster name every time a call was made if it was not already captured. This could lead to a large number of failures if the cluster name could not be retrieved. Now, the agent will only attempt to get the cluster name once per client, even if it fails. Thank you, [@ascoppa](https://github.com/ascoppa) for bringing this to our attention. [Issue#2730](https://github.com/newrelic/newrelic-ruby-agent/issues/2730) [PR#2743](https://github.com/newrelic/newrelic-ruby-agent/pull/2743)

* **Feature: Produce metrics for 4 additional Action Controller Rails notifications**

  Four additional Action Controller related Rails notifications are now subscribed to by the agent to produce telemetry. These 4 are `exist_fragment?`, `expire_fragment`, `read_fragment`, and `write_fragment`. As with instrumentation for Action Controller itself, these notifications are enabled by default and can be disabled by setting `:disable_action_controller` to `true` in the agent's `newrelic.yml` configuration file. [PR#2745](https://github.com/newrelic/newrelic-ruby-agent/pull/2745)
