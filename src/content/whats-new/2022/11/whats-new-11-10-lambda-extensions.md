---
title: 'Ingest Telemetry directly from Lambda using New Relic Extensions' 
summary: ' Access your AWS Lambda telemetry directly using the New Relic extension to receive enhanced telemetry data (logs, platform traces, and new performance metrics) directly from Lambda execution environment through a single interface' 
releaseDate: '2022-11-10' 
learnMoreLink: 'https://discuss.newrelic.com/t/ingest-telemetry-directly-from-lambda-using-new-relic-extensions/190989' 
getStartedLink: 'https://docs.newrelic.com/docs/infrastructure/amazon-integrations/aws-integrations-list/aws-lambda-telemetry'


In the past, Amazon Web Services (AWS) enabled the ingest of AWS Lambda logs directly to reduce cloud spend, bypassing Amazon CloudWatch and saving costs for our customers. AWS has now extended this functionality to all telemetry data types, including metrics, events, and traces. Observability data on Lambda function execution can now be delivered through a new lambda extension. 

The Lambda telemetry API is an enhancement to the logs API. It makes it simpler for the New Relic extension to receive telemetry about Lambda function invocation, such as runtime, tags, max memory, and timeout. Customers can use this API to receive telemetry streams from the Lambda service, including function and extension logs, traces, and metrics coming from the Lambda platform.

The New Relic extension subscribes to the telemetry streams directly from within the Lambda execution environment, allowing an in-depth understanding of the Lambda function and extension. 

Telemetry API allows extensions to subscribe to three different telemetry streams: 
Function logs - custom logs that Lambda function code generates (stdout/stderr)
Extension logs - Lambda extension code generates custom logs to stdout and stderr 
Platform telemetry - metrics, events and traces which describe events and errors related to execution environment runtime lifecycle, extension lifecycle, and function invocations.

Traces can be received directly from Lambda, bypassing the previously-required custom instrumentation through AWS X-Ray, with trace spans compatible with the Open Telemetry format. Trace segments can be enriched by additional metadata for easier contextualization and diagnosis. Pairing this trace data with log data, you can rapidly troubleshoot performance problems, outages, and errors. 

![Metrics, events and logs from Lambda Extensions displayed in New Relic](./images/INSERT_IMAGE_FILE_NAME "Metrics, events and logs from Lambda Extensions displayed in New Relic")

