---
name: databaseCallCount
type: attribute
units: count
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

The number of database calls made by this transaction.