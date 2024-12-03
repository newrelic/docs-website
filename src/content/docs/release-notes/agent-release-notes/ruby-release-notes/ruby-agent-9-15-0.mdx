---
subject: Ruby agent
releaseDate: '2024-10-31'
version: 9.15.0
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.15.0.gem
features: ["New configuration option cloud.aws.account_id", "Use default `View/component` metric name for unidentified View Components"]
bugs: ["Instrumentation errors when using the karafka-rdkafka gem", "Stop calling deprecated all_specs method to check for the presence of newrelic-grape", "Instrumentation errors when using the ruby-kafka gem", "Restore AWS Lambda layer operational functionality"]
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.15.0

Version 9.15.0 updates View Component instrumentation to use a default metric name when one is unavailable, adds a configuration option to associate the AWS account ID with the DynamoDB calls from the AWS SDK, resolves a bug in rdkafka instrumentation when using the karafka-rdkafka gem, resolves a bug in the ruby-kafka instrumentation, fixes a bug with Grape instrumentation, and addresses a bug preventing the agent from running in serverless mode in an AWS Lambda layer.
  
- **Feature: New configuration option cloud.aws.account_id**

  A new configuration option has been added, `cloud.aws.account_id`, that will allow New Relic to provide more details about certain calls made using the AWS SDK. For example, relationships between AWS services instrumented with New Relic's CloudWatch Metric Streams will have relationships formed in the service map with APM applications. Currently, the DynamoDB instrumentation is the only instrumentation that will make use of this configuration option, but this will be used in future instrumentation as well. [PR#2904](https://github.com/newrelic/newrelic-ruby-agent/pull/2904)

- **Feature: Use default `View/component` metric name for unidentified View Components**

  Previously, when a View Component metric name could not be identified, the agent would set the name as `nil`. Now, the agent defaults to using `View/component` as the metric name when one can not be identified. [PR#2907](https://github.com/newrelic/newrelic-ruby-agent/pull/2907)

- **Bugfix: Instrumentation errors when using the karafka-rdkafka gem**

  Due to version differences between the rdkafka gem and karafka-rdkafka gem, the agent could encounter an error when it tried to install rdkafka instrumentation. This has now been resolved. Thank you to @krisdigital for bringing this issue to our attention. [PR#2880](https://github.com/newrelic/newrelic-ruby-agent/pull/2880)

- **Bugfix: Stop calling deprecated all_specs method to check for the presence of newrelic-grape**

  In 9.14.0, we released a fix for calls to the deprecated `Bundler.rubygems.all_specs`, but the fix fell short for the agent's Grape instrumentation and deprecation warnings could still be raised. The condition has been simplified and deprecation warnings should no longer be raised. Thank you, [@excelsior](https://github.com/excelsior) for bringing this to our attention. [Issue#2885](https://github.com/newrelic/newrelic-ruby-agent/issues/2885) [PR#2906](https://github.com/newrelic/newrelic-ruby-agent/pull/2906)

- **Bugfix: Instrumentation errors when using the ruby-kafka gem**

  Kafka::Consumer#each_message takes keyword arguments, while the prepended method is defined with a single splat positional argument. In Ruby >= 3.0, this signature mismatch raises an ArgumentError. Thank you [@patrickarnett](https://github.com/patrickarnett) for providing this bugfix. [PR#2915](https://github.com/newrelic/newrelic-ruby-agent/pull/2915)

- **Bugfix: Restore AWS Lambda layer operational functionality**

  Version 9.14.0 of the agent introduced an optimization related to how the agent handles boolean configuration parameters which inadvertently caused the agent to stop operating properly in an AWS Lambda layer context. [Issue#2919](https://github.com/newrelic/newrelic-ruby-agent/issues/2919)[PR#2920](https://github.com/newrelic/newrelic-ruby-agent/pull/2920)


