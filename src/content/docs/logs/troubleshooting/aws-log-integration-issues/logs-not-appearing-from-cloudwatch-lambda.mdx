---
title: Logs not appearing from CloudWatch via Lambda
type: troubleshooting
tags:
  - Logs
  - Log management
  - Troubleshooting
metaDescription: 'Troubleshooting tips if the Logs are not appearing from CloudWatch via Lambda.'
freshnessValidatedDate: never
---

## Problem

Logs are not appearing in New Relic for a CloudWatch via Lambda integration setup.

## Solution

Possible reasons and their solutions:

* The New Relic ingest license key may not be valid. In your AWS account, find the resource with Logical Id `NewRelicLogsLicenseKeySecret` from <DNT>**CloudFormation stack > Resources**</DNT>, and verify the key.
* To debug further, navigate to <DNT>**CloudFormation Stack > Resources > NewRelicServerlessLogForwarder (Lambda Function) > Configuration > Environment Variables**</DNT> and set the `DEBUG_MODE` parameter to true. Then, check the CloudWatch logs for the Lambda function to get the debug logs.
* The event may have been a genuine failure. To check, navigate to <DNT>**CloudFormation Stack > Resources > NewRelicLogForwarderDLQ**</DNT>, or search for your DLQ in AWS SQS, and examine the DLQ resource.
* The New Relic region and the ingest license key provided to the Lambda function or Firehose may not match. Verify and match it.
  
  For example, if the New Relic region is EU, provide a New Relic ingest license key from the EU region.
* The `NewRelicServerlessLogForwarder` may not have the CloudWatch trigger. Examine the output of the nested CloudFormation stacks.