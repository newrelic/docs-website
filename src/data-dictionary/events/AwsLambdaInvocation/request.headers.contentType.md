---
name: request.headers.contentType
type: attribute
events:
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
  - Transaction
  - TransactionError
---

Incoming request content-type as read from the HTTP request header `Content-Type`. Example value: `application/octet-stream`.