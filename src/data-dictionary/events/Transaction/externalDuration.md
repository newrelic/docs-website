---
name: externalDuration
type: attribute
units: seconds (s)
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

The total response time of all external (out-of-process) services, in seconds.