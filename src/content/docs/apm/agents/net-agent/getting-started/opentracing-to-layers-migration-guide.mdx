---
title: .NET OpenTracing to AWS Lambda layers migration guide
tags:
  - Agents
  - NET agent
  - Migration guides
metaDescription: 'This guide helps New Relic AWS Lambda Agent for .NET users migrate from NewRelic.OpenTracing.AmazonLambda.Tracer to AWS Lambda layers'
freshnessValidatedDate: never
---

This guide outlines the major changes between `NewRelic.OpenTracing.AmazonLambda.Tracer` and the .NET Agent Lambda layer. It also details the  different available options when upgrading, and how to migrate successfully to using the .NET Agent Lambda layer.

<Callout variant="important">
  Support for instrumenting AWS Lambda functions starts in v10.24.0 of the .NET Agent.
</Callout>

Here are the major changes for this transition:

* The `NewRelic.OpenTracing.AmazonLambda.Tracer` package conflicts with agent instrumentation and must be removed.
* Any code changes made to the AWS Lambda function for OpenTracing need to be reverted.
* The New Relic .NET Agent will be used to instrument the AWS Lambda function.
* AWS Lambda Layers are available when you bundle the .NET Agent and the required New Relic Lambda Extension.
* In most cases, the instrumentation of the AWS Lambda function is automatic.
* The .NET Agent relies on the New Relic Lambda extension for sending data in AWS Lambda functions.
* Layers can be configured using the New Relic Lambda CLI tool, a Serverless Framework plugin, or manually.
* Metric names and timings will differ because the way the function is instrumented has fundamentally changed.
* Any dashboard, alerts, or queries that are based on the old metrics will need to be updated after migrating.

## Removing NewRelic.OpenTracing.AmazonLambda.Tracer and OpenTracing [#remove]

The `NewRelic.OpenTracing.AmazonLambda.Tracer` package must be removed before using the .NET Agent and any changes made to your AWS Lambda functions to support it must be undone.

1. Setting up the `NewRelic.OpenTracing.AmazonLambda.Tracer` package requires creating a new `FunctionHandler` that calls the original `FunctionHandler`, wrapping it to enable instrumentation.  Before removing the `NewRelic.OpenTracing.AmazonLambda.Tracer` you will need to undo that call to make the clean up go more smoothly.
2. The .NET Agent does not support using OpenTracing APIs to pass custom data.  Any changes to your code that relied on OpenTracing APIs, whether directly or via the `NewRelic.OpenTracing.AmazonLambda.Tracer` package, need to be removed or migrated to use .NET Agent APIs.
3. Remove the `NewRelic.OpenTracing.AmazonLambda.Tracer` package from the your project.  Clean up any left over issues related to the removal.

## Selecting a layer installation method [#install]

After you've removed the `NewRelic.OpenTracing.AmazonLambda.Tracer` package the next step is to select which method you will use to install and configure the .NET AWS Lambda layer. As mentioned above there are primarily three options:

* New Relic Lambda CLI
* New Relic Serverless Framework plugin
* Fully manual install

We recommend choosing either the Lambda CLI or the Serverless Framework plugin since they automate most of the configuration.  Each have their own dependencies and requirements that need to taken into consideration, some of which will be outlined in the next section.  If you already use one of these approaches, we recommend keeping things simple by using the same approach for all of your AWS Lambda functions.

For a complete set of detailed getting started instructions for AWS Lambda monitoring see our [enablement guide](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/enable-aws-lambda-monitoring/).

## New Relic Lambda CLI [#cli]

<Callout variant="important">
  Support for the .NET Agent AWS Lambda layer starts in v0.9.2 of the Lambda CLI.
</Callout>

The Lambda CLI [quickstart](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/) has an example of the command to update your AWS Lambda function to use the .NET Agent layer.  This will automatically detect the runtime of the function and select the appropriate layer.  You can find additional setup options in the [Lambda CLI repo](https://github.com/newrelic/newrelic-lambda-cli?tab=readme-ov-file#recommendations).

## New Relic Serverless Framework plugin [#serverless]

<Callout variant="important">
  Support for the .NET Agent AWS Lambda layer starts in v5.3.0 of the Serverless Framework plugin.
</Callout>

The [Serverless Framework plugin quickstart](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/) has the steps required to install the plugin and update the Serverless Framework configuration.  You can find additional setup options in the [Serverless Framework plugin repo](https://github.com/newrelic/serverless-newrelic-lambda-layers).

## Fully manual install [#manual]

While we don't recommend manually instrumenting your AWS Lambda function, we have information on the steps required to do so [here](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/instrument-your-own/#console).

* The .NET Agent will automatically instrument your AWS Lambda function, in most cases when installed manually
* The New Relic Lambda Extension is still required for sending data
