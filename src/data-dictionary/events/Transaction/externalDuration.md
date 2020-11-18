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

The total response time of all externals, in seconds.