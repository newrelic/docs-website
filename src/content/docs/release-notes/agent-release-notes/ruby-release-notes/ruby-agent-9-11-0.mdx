---
subject: Ruby agent
releaseDate: '2024-06-20'
version: 9.11.0
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.11.0.gem
features: ["Add instrumentation for SQS"]
bugs: ["HTTP status code based expected errors will now have an \"expected\" value of \"true\"", "Stripe metric names will no longer include full request paths to limit the unique name count"]
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.11.0

Version 9.11.0 introduces instrumentation for the aws-sdk-sqs gem, fixes a bug related to expected errors not bearing a "true" value for the "expected" attribute if expected as a result of an HTTP status code match and changes the way Stripe instrumentation metrics are named to prevent high-cardinality issues.

* **Feature: Add instrumentation for SQS**

  The agent has added instrumentation for the [aws-sdk-sqs gem](https://rubygems.org/gems/aws-sdk-sqs). The agent will now record message broker spans for SQS client calls made with the aws-sdk-sqs gem. [PR#2679](https://github.com/newrelic/newrelic-ruby-agent/pull/2679)

* **Bugfix: HTTP status code based expected errors will now have an "expected" value of "true"**

  Previously when an error was treated as expected by the agent as a result of a matching HTTP status code being found in the :'error_collector.expected_status_codes' configuration setting, the error would not appear with an "expected" attribute value of "true" in the errors in the errors inbox. [PR#2710](https://github.com/newrelic/newrelic-ruby-agent/pull/2710)

* **Bugfix: Stripe metric names will no longer include full request paths to limit the unique name count**

  The Stripe instrumentation introduced in agent version v9.5.0 produced instrumentation metric names that used the full Stripe request path. For any significant Stripe usage, this could quickly lead to very large number of distinct metric names. Now only the API version and the category part of the request path are included in the metric name which still includes the "Stripe" opener and method (ex: "get") closer. Thanks to [@jdelStrother](https://github.com/jdelStrother) and [@jsneedles](https://github.com/jsneedles) for bringing this issue to our attention and providing terrific information explaining the problem and potential paths to resolution. [PR#2716](https://github.com/newrelic/newrelic-ruby-agent/pull/2716)
