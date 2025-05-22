---
title: "Install and configure Lambda monitoring on New Relic"
metaDescription: Configure your AWS Lambda functions with New Relic 
freshnessValidatedDate: never

---


## Before you begin [#begin]

* If you haven't done so, you may want to check that your Lambda function meets our [compatibility and requirements](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/compatibility-requirement-lambda-monitoring).


## Install Lambda monitoring [#setup]

Lambda monitoring includes:

* An AWS integration to ingest CloudWatch metrics and perform entity synthesis within New Relic.
* A New Relic agent included in our [New Relic Lambda Layers](https://github.com/newrelic/newrelic-lambda-layers) or [as an SDK](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/sdk-based-instrumentation).
* A method of sending payloads and logs to New Relic via our [newrelic-log-ingestion](https://github.com/newrelic/aws-log-ingestion) function or [Extension](https://github.com/newrelic/newrelic-lambda-extension). If you use [New Relic Lambda Layers](https://github.com/newrelic/newrelic-lambda-layers), you don't have to do any extra configuration to send data.

<Steps>
<Step>
## Link your AWS and New Relic accounts [#link]
<Callout variant="tip">
If you use the [newrelic-lambda-cli](https://github.com/newrelic/newrelic-lambda-cli) to instrument your Lambda function, the linking process is automated, allowing you to bypass this step.
</Callout>

By linking accounts, you're granting New Relic permission to create an inventory of your AWS account and automatically gather CloudWatch metrics for your Lambda functions. 
After you've linked accounts, resources in your AWS account appear as entities in the [entity explorer](/docs/new-relic-solutions/new-relic-one/core-concepts/new-relic-explorer-view-performance-across-apps-services-hosts/#find). Lambda function entities will be found in the Serverless Functions view.

You can link your AWS and New Relic account by one of the following integration methods.

<Tabs>
  <TabsBar>
    <TabsBarItem id="1">AWS Metric Streams(recommended)</TabsBarItem>
    <TabsBarItem id="2">API Polling</TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="1">
    For New Relic to monitor your Lambda functions, you need to set up an integration between New Relic and AWS. We recommend using [Metric Streams](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream) to help reduce latency and avoid throttling of our polling requests.
    
    </TabsPageItem>
    <TabsPageItem id="2">
    If you're not using a Metric Streams integration, you can choose to set up an [API Polling](/docs/infrastructure/amazon-integrations/connect/connect-aws-new-relic-infrastructure-monitoring) integration instead. By default, an API Polling integration with the Lambda service enabled will poll every 5 minutes for CloudWatch metrics.

You can use the [newrelic-lambda-cli](https://github.com/newrelic/newrelic-lambda-cli) to set up an API Polling integration, but not a Metric Streams integration.

```sh
newrelic-lambda integrations install --nr-account-id YOUR_NR_ACCOUNT_ID \
--nr-api-key YOUR_NEW_RELIC_USER_KEY
```
One step in the [integrations install command](https://github.com/newrelic/newrelic-lambda-cli?tab=readme-ov-file#aws-lambda-integration) will create a `NEW_RELIC_LICENSE_KEY` secret in [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) for improved security. This is configurable with a `--disable-license-key-secret` flag, along with other options and flags.
    </TabsPageItem>
  </TabsPages>
</Tabs>



</Step>

<Step>
## Instrument your Lambda function [#instrument]

To instrument your Lambda function, you need an agent, and an extension. These components are bundled together in the New Relic [Lambda layer](https://github.com/newrelic/newrelic-lambda-layers). If using Lambda layers isn't an option for you, you can manually incorporate the agent and extension into your function.
Based on the requirement of your Lambda function, select one of the following instrumention methods:

<Tabs>
  <TabsBar>
    
    <TabsBarItem id="layered-instrumentation">Layered instrumentation</TabsBarItem>
    <TabsBarItem id="sdk-based-instrumentation">SDK based instrumentation</TabsBarItem>
    <TabsBarItem id="containerized-instrumentation">Containerized instrumentation</TabsBarItem>
  </TabsBar>

  <TabsPages>

    <TabsPageItem id="layered-instrumentation">
    Use this method if your Lambda function is packaged as a Zip file and you can add layers. Layers are distribution mechanism for libraries, custom runtimes, and other dependencies. For more information, refer to [Layered instrumentation](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/instrument-your-own/) documentation.
    </TabsPageItem>
    <TabsPageItem id="sdk-based-instrumentation">
    Use this method if your Lambda function can't use layers, ensuring quick deployment without the necessity to modify layers. For more information, refer to [SDK based instrumentation](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/sdk-based-instrumentation/) documentation.
    </TabsPageItem>
    <TabsPageItem id="containerized-instrumentation">
    Use this method if your Lambda function runs inside a container. Containers provide a consistent, isolated execution environment for your applications. New Relic provides a pre-built Docker image that includes the New Relic Lambda layer, the New Relic Lambda extension, and the New Relic agent. For more information, refer to [Containerized instrumentation](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/containerized-images/) documentation.
    
    </TabsPageItem>
    
  </TabsPages>
</Tabs>

</Step>

<Step>
## Configure environment variables [#environment]

<Callout variant="tip">
* When you instrument New Relic's Lambda layer with the New Relic CLI, your mandatory environment variables are configured automatically. However, you may want to change some of the default settings and configure your Lambda functions with the environment variables that match your monitoring needs.
* If you're using the New Relic Lambda extension, you need to configure the environment variables manually.
</Callout>

[Environment variables](/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/env-variables-lambda) are used to configure the New Relic agent and Lambda extension. It's important to set these variables correctly to ensure that your Lambda functions are monitored correctly.

</Step>

</Steps>


## Try our example functions

After you've instrumented New Relic's Lambda layer, we strongly recommend trying out our example functions. These working examples should be used as a starting point for instrumenting your own serverless functions. Using these examples can help you become familiar with the the New Relic Lambda layer, testing the account link, and they can be used as a reference for your own instrumentation. Each example demonstrates adding permissions, runtime-specific techniques for wrapping your handler, managing function log retention in CloudWatch, and more.

While there are many ways to manage and deploy Lambda functions, AWS CloudFormation is the mechanism we use for our examples.

Our examples are published, alongside the New Relic Lambda Extension, in this
[GitHub repository](https://github.com/newrelic/newrelic-lambda-extension). There's one for each Lambda runtime New Relic supports:

* [Node.js](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/node)
* [Python](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/python)
* [Go](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/go)
* [Java](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/java)
* [Ruby](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/ruby)
* [.NET](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/dotnet)


You can also learn how to instrument distributed tracing into a non-trivial serverless application in our [distributed tracing example](https://github.com/newrelic/newrelic-lambda-extension/tree/main/examples/sam/distributedtracing). It illustrates manual trace propagation for SQS and SNS, two of the more popular services that might invoke Lambda functions, with Node, Python, Ruby and Java functions.

<Callout variant="tip">
    When manually testing, telemetry data can be delayed. We recommend waiting seven seconds before invoking the function again, allowing any buffered telemetry to be delivered.
</Callout>



<DocTiles>
  <DocTile title="Compatibility and requirement" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/instrument-lambda-function/compatibility-requirement-lambda-monitoring">Learn more about supported runtimes and prerequisites.</DocTile>
  <DocTile title="Data and UI" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/ui-data/understand-lambda-monitoring-ui/" >Learn how to use New Relic to monitor your AWS Lambda functions.</DocTile>
  <DocTile title="Troubleshooting" path="/docs/serverless-function-monitoring/aws-lambda-monitoring/troubleshooting" >Learn how to troubleshoot installation related issues.</DocTile>
  
</DocTiles>





