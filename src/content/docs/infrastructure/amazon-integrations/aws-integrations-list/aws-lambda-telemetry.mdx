---
title: AWS Lambda Extensions Telemetry API integration
tags:
  - Integrations
  - Amazon integrations
  - Lambda Extension
freshnessValidatedDate: never
---

<DNT>
  **Work in progress**
</DNT>

The New Relic AWS Lambda Telemetry extension allows users to send telemetry data straight from their lambda functions into New Relic, with no need to set up triggers or connect Amazon CloudWatch. Send your logs, events, metrics, and traces by adding the extension as the layer, and get insights from your data instantly on the New Relic platform.

## Installation

1. In the AWS Console go to <DNT>**Lambda > Functions**</DNT> and choose the function you'd like to ingest data from.
2. Select <DNT>**Layers > Add Layer**</DNT>.
3. In <DNT>**Choose a layer**</DNT> select the <DNT>**Specify a layer by providing the ARN**</DNT> option.
4. Go to [https://layers.newrelic-external.com/](https://layers.newrelic-external.com/), search for AwsLambdaExtension in your region to find the `ARN` with the most recent layer version, and then paste that in the `ARN` field back in your AWS console.
   If you can't find the AwsLambdaExtension, use the following pattern to get `arn`:

   `arn:aws:lambda:{your-region}:533243300146:layer:AwsLambdaExtension:{version}`

To get the most recent version of the extension, select Version 1 and click <DNT>**Save**</DNT>. Then click <DNT>**Edit**</DNT> and select the highest version available.
5\. Go to <DNT>**Configuration**</DNT>, select <DNT>**Environment variables**</DNT> and add `Key: NEW_RELIC_LICENSE_KEY  Value: YOUR_LICENSE_KEY`. Note: `Key: NEW_RELIC_ACCOUNT_ID` is an optional parameter and has to be set to your New Relic account ID.

To verify that set up has been done correctly, click the <DNT>**Test**</DNT> button in <DNT>**code**</DNT> section.

## Find your data

You can find your data on New Relic by navigating to <DNT>**[https://one.newrelic.com/](https://one.newrelic.com/)**</DNT> and one of these categories in the left-hand menu: <DNT>**Logs**</DNT> or <DNT>**Metrics & events**</DNT>, or <DNT>**...Add More > Traces**</DNT>.

### Logs:

Logs can be filtered by specific attributes set. Click <DNT>**Attributes**</DNT> in left menu and then choose the attributes of interest. For example:

```
NEWRELIC > SOURCE > api.logs
AWS > EXTENSION.NAME > AwsLambdaExtension
PLUGIN > TYPE > lambda extension
```

### Metrics:

Metrics sent by the extension are prefixed with `aws.telemetry.lambda_ext.`. Currently there are 6 AWS lambda metrics:

```
'durationMs'
'billedDurationMs'
'initDurationMs'
'memorySizeMB'
'maxMemoryUsedMB'
'producedBytes'
```

### Events

To see event sent by this extension, in <DNT>**Custom events**</DNT> section look for `AwsLambdaExtension`. Currently there are twelve event types:

```
platform_initStart
platform_initRuntimeDone
platform_initReport
platform_start
platform_runtimeDone
platform_fault
platform_report
platform_extension
platform_telemetrySubscription
platform_logsDropped
function
extension
```

You can filter the data further under the `Dimensions` menu.

### Traces

Trace data are displayed in <DNT>**Traces**</DNT> tab. To see traces sent by the extension, search for \`AwsLambdaExtension'.
