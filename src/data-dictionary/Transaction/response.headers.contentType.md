---
name: response.headers.contentType
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

For an HTTP response, the data type of the returned response. Example values: text/html, application/json.