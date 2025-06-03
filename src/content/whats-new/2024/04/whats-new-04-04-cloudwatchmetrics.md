---
title: 'Enhanced AWS CloudWatch metrics for serverless functions'
summary: 'Gain deeper insights into performance and health of serverless function with additional CloudWatch metrics'
releaseDate: '2024-04-04'
learnMoreLink: ''
getStartedLink: 'https://docs.newrelic.com/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/monitoring-aws-lambda-serverless-monitoring/'
---

We have enhanced CloudWatch metrics to provide richer insights into performance, health, and behavior of your serverless functions. This will empower you to optimize efficiency and proactively manage your serverless applications.

Previously, CloudWatch metrics allowed you to monitor invocation count, duration, errors, and
throttling. Now, we've added a range of new metrics to provide even more granular insights:

* **Performance**:

  * **Throughput**: Track the number of function invocations per second.
  * **Memory Size**: Monitor the memory allocated to your functions.
  * **Latency**: Measure the time it takes for your functions to return a response.

* **Provisioned concurrency**:

  * **Provisioned concurrency executions**: Understand how often your provisioned concurrency is being utilized.
  * **Spillover invocations**: Identify when your invocations exceed provisioned concurrency limits.

* **Function**:

  * **Cold start count**: Track the number of times your functions experience a cold start.
  * **Cold start time**: Measure the duration of your functions' cold starts.
  * **Async event dropped and received**: Monitor for dropped and received asynchronous events.
  * **Async event age**: Gain insights into the age and processing time of received events
  * **Timeouts**: Identify functions exceeding their allocated execution time.

These new metrics, along with existing ones, empower you to:

* **Optimize function efficiency**: By analyzing throughput, memory size, and latency, you can identify areas for improvement and optimize your functions for better performance.

* **Gain deeper insights into provisioned concurrency**: The new metrics provide a clearer picture of how your provisioned concurrency is being used, allowing you to make informed decisions about scaling.

* **Troubleshoot function issues**: Cold start counts, times, and async event drops will help pinpoint issues related to function initialization and asynchronous processing.