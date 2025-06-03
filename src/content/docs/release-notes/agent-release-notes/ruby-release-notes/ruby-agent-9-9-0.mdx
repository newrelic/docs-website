---
subject: Ruby agent
releaseDate: '2024-04-17'
version: 9.9.0
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.9.0.gem
features: ["Serverless Mode for AWS Lambda", "Add support for Elasticsearch 8.13.0"]
bugs: ["Add 'request.temperature' to ruby-openai chat completion summaries"]
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.9.0

Version 9.9.0 introduces support for AWS Lambda serverless function observability, adds support for Elasticsearch 8.13.0, and adds the 'request.temperature' attribute to chat completion summaries in ruby-openai instrumentation.

* **Feature: Serverless Mode for AWS Lambda**

  The Ruby agent is now capable of operating in a quick and light serverless mode suitable for observing AWS Lambda function invocations. For serverless use, the agent is delivered by a New Relic Lambda [layer](https://github.com/newrelic/newrelic-lambda-layers) that can be associated with a Lambda function. All reported data will appear in New Relic's dedicated serverless UI views. Only AWS based Lambda functions are supported for now, though support for other cloud hosted serverless offerings may be added in future depending on Ruby customer demand. The serverless functionality is only intended for use with the official New Relic Ruby layers for Lambda. Any existing workflows that involve the manual use of the Ruby agent in an AWS Lambda context without a New Relic layer should not be impacted.

* **Feature: Add support for Elasticsearch 8.13.0**

  Elasticsearch 8.13.0 increased the number of arguments used in the method the agent instruments, `Elastic::Transport::Client#perform_request`. Now, the agent supports a variable number of arguments for the instrumented method to prevent future `ArgumentError`s.

* **Bugfix: Add 'request.temperature' to ruby-openai chat completion summaries**

  Previously, the agent was not reporting the `request.temperature` attribute on `LlmChatCompletionSummary` events through ruby-openai instrumentation. We are now reporting this attribute.
