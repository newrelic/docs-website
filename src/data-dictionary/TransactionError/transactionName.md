---
name: transactionName
events:
  - TransactionError
  - AwsLambdaInvocationError
---

Name of the transaction in which the error occurred. Example value: Controller/customers/show. Value may be 'Unknown' if an error occurs outside of a transaction.