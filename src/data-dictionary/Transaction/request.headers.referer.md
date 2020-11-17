---
name: request.headers.referer
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

The incoming request referer as read from the Referer request header.