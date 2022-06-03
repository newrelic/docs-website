---
name: request.headers.contentLength
type: attribute
units: bytes (B)
events:
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
  - Transaction
  - TransactionError
---

Incoming request size in bytes as read from the `Content-Length` HTTP request header.