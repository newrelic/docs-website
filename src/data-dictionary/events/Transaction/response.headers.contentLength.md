---
name: response.headers.contentLength
type: attribute
units: bytes (B)
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

The outgoing response size in bytes as read from the Content-Length response header.