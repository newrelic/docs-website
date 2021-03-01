---
name: parent.type
type: attribute
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

If a distributed trace payload was received, the parent's data source type. Example values: App, Browser, Mobile.