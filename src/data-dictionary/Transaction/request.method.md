---
name: request.method
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
  - Span
---

The HTTP request method used. Example values: POST, GET.