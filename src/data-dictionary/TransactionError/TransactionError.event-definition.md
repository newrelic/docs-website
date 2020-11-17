---
name: TransactionError
dataSources:
  - APM
---

Transaction errors occur when a transaction throws an exception in the code path that was taken to complete that transaction. The number of transaction errors does not equal the number of transactions, because you can specify whether you want to collect, ignore, or mark errors as expected.