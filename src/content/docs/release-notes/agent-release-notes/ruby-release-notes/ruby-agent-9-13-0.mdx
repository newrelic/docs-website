---
subject: Ruby agent
releaseDate: '2024-08-22'
version: 9.13.0
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.13.0.gem
features: ["Enhance AWS Lambda function instrumentation", "Add experimental OpenSearch instrumentation", "Improve framework detection accuracy for Grape and Padrino", "Silence Bundler `all_specs` deprecation warning"]
bugs: ["Fix Falcon dispatcher detection", "Fix for a Redis instrumentation error when Redis::Cluster::Client is present", "Address JRuby concurrency issue with config hash accessing"]
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.13.0

Version 9.13.0 enhances support for AWS Lambda functions, adds experimental OpenSearch instrumentation, updates framework detection, silences a Bundler deprecation warning, fixes Falcon dispatcher detection, fixes a bug with Redis instrumentation installation, and addresses a JRuby-specific concurrency issue.

- **Feature: Enhance AWS Lambda function instrumentation**

When utilized via the latest [New Relic Ruby layer for AWS Lambda](https://layers.newrelic-external.com/), the agent now offers enhanced support for AWS Lambda function instrumentation. 
* The agent's instrumentation for AWS Lambda functions now supports distributed tracing. 
* Web-triggered invocations are now identified as being "web"-based when an API Gateway call is involved, with support for both API Gateway versions 1.0 and 2.0. 
* Web-based calls have the HTTP method, URI, and status code recorded. 
* The agent now recognizes and reports on 12 separate AWS resources that are capable of triggering a Lambda function invocation: ALB, API Gateway V1, API Gateway V2, CloudFront, CloudWatch Scheduler, DynamoStreams, Firehose, Kinesis, S3, SES, SNS, and SQS. 
* The type of the triggering resource and its ARN will be recorded for each resource, and for many of them, extra resource-specific attributes will be recorded as well. For example, Lambda function invocations triggered by S3 bucket activity will now result in the S3 bucket name being recorded.
[PR#2811](https://github.com/newrelic/newrelic-ruby-agent/pull/2811)

- **Feature: Add experimental OpenSearch instrumentation**

  The agent will now automatically instrument the `opensearch-ruby` gem. We're marking this instrumentation as experimental because more work is needed to fully test it. OpenSearch instrumentation provides telemetry similar to Elasticsearch. Thank you, [@Earlopain](https://github.com/Earlopain) for reporting the issue and [@praveen-ks](https://github.com/praveen-ks) for an initial draft of the instrumentation. [Issue#2228](https://github.com/newrelic/newrelic-ruby-agent/issues/2228) [PR#2796](https://github.com/newrelic/newrelic-ruby-agent/pull/2796)

- **Feature: Improve framework detection accuracy for Grape and Padrino**

  Previously, applications using the Grape framework would set `ruby` as their framework within the Environment Report. Now, Grape applications will be set to `grape`. Similarly, applications using the Padrino framework would be set to `sinatra`. Now, they will be set to `padrino`. This will help the New Relic security agent compatibility checks. Thank you, [@prateeksen](https://github.com/prateeksen) for making this change. [Issue#2777](https://github.com/newrelic/newrelic-ruby-agent/issues/2777) [PR#2789](https://github.com/newrelic/newrelic-ruby-agent/pull/2789)

- **Feature: Silence Bundler `all_specs` deprecation warning**

  `Bundler.rubygems.all_specs` was deprecated in favor of `Bundler.rubygems.installed_specs` in Bundler versions 2+, causing the agent to emit deprecation warnings. The method has been updated when Bundler 2+ is detected and warnings are now silenced. Thanks to [@jcoyne](https://github.com/jcoyne) for reporting this issue. [Issue#2733](https://github.com/newrelic/newrelic-ruby-agent/issues/2733) [PR#2823](https://github.com/newrelic/newrelic-ruby-agent/pull/2823)

- **Bugfix: Fix Falcon dispatcher detection**

  Previously, we tried to use the object space to determine whether the [Falcon web server](https://github.com/socketry/falcon) was in use. However, Falcon is not added to the object space until after the environment report is generated, resulting in a `nil` dispatcher. Now, we revert to an earlier strategy that discovered the dispatcher using `File.basename`. Thank you, [@prateeksen](https://github.com/prateeksen) for reporting this issue and researching the problem. [Issue#2778](https://github.com/newrelic/newrelic-ruby-agent/issues/2778) [PR#2795](https://github.com/newrelic/newrelic-ruby-agent/pull/2795)

- **Bugfix: Fix for a Redis instrumentation error when Redis::Cluster::Client is present**

  The Redis instrumentation previously contained a bug that would cause it to error out when `Redis::Cluster::Client` was present, owing to the use of a Ruby `return` outside of a method. Thanks very much to [@jdelStrother](https://github.com/jdelStrother) for not only reporting this bug but pointing us to the root cause as well. [Issue#2814](https://github.com/newrelic/newrelic-ruby-agent/issues/2814) [PR#2816](https://github.com/newrelic/newrelic-ruby-agent/pull/2816)

- **Bugfix: Address JRuby concurrency issue with config hash accessing**

  The agent's internal configuration class maintains a hash that occassionally gets rebuilt. During the rebuild, certain previously dynamically determined instrumentation values are preserved for the benefit of the [New Relic Ruby security agent](https://github.com/newrelic/csec-ruby-agent). After reports from JRuby customers regarding concurrency issues related to the hash being accessed while being modified, two separate fixes went into the hash rebuild logic previously: a `Hash#dup` operation and a `synchronize do` block. But errors were still reported. We ourselves remain unable to reproduce these concurrency errors despite using the same exact versions of JRuby and all reported software. After confirming that the hash access code in question is only needed for the Ruby security agent (which operates only in non-production dedicated security testing environments), we have introduced a new fix for JRuby customers that will simply skip over the troublesome code when JRuby is in play but the security agent is not. [PR#2798](https://github.com/newrelic/newrelic-ruby-agent/pull/2798)


