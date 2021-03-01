---
name: externalCallCount
type: attribute
units: count
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

The number of external calls made by this transaction.