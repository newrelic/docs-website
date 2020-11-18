---
name: request.headers.referer
type: attribute
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

The incoming request referer as read from the Referer request header.