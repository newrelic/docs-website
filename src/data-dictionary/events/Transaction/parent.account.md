---
name: parent.account
type: attribute
units: ID
events:
  - Transaction
  - TransactionError
  - AwsLambdaInvocation
  - AwsLambdaInvocationError
---

If a distributed tracing payload is received, this is the account identifier for the transaction's upstream caller.