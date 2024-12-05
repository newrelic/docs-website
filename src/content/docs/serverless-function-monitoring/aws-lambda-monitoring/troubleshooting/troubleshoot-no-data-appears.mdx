---
title: Troubleshoot no data appears for AWS Lambda
type: troubleshooting
tags:
  - Serverless function monitoring
  - AWS Lambda monitoring
  - Troubleshooting
metaDescription: Troubleshooting steps if data does not appear in your app for AWS Lambda.
freshnessValidatedDate: never
---

## Problem

After generating traffic for your AWS Lambda function and waiting five minutes, none of your function data appears in the New Relic UI. There aren't any errors in the logs, and no `NRIntegrationErrors` or `NRIntegrationWarnings` in the New Relic UI.

## Solution

The most common reason for no data appearing and no errors is that the [license key and account ID](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/) are from different accounts. In the case of a mismatch, the [New Relic Lambda extension](https://github.com/newrelic/newrelic-lambda-extension) or [lambda that processes cloud watch logs](/docs/infrastructure/amazon-integrations/connect/aws-metric-stream/) does report the data successfully, but silently drops it since the account ID doesn't match. This results in no errors or warnings.

To resolve this issue, make sure that the license key and account ID are from the same account. Using the [New Relic Lambda CLI](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/#rec) to enable serverless monitoring is recommended to minimize these types of issues. You can update the license key in the AWS Secrets Manager. For the account ID and configurations not using the AWS Secrets Manager, you can update the [environment variables](/docs/serverless-function-monitoring/aws-lambda-monitoring/enable-lambda-monitoring/account-linking/#env-var) with the correct license key or account ID to correct the problem.
