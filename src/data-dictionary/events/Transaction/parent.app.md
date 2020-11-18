---
name: parent.app
type: attribute
units: ID
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

If a distributed tracing payload is received, this is the application identifier. APM agents retrieve this value in the connect response under the key primary\_application\_id.