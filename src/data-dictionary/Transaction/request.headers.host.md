---
name: request.headers.host
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

The name from the HTTP host request header.