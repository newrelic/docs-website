---
name: db.enqueueDeadlocksPerTransaction
type: attribute
events:
  - OracleDatabaseSample
---

The number of times per transaction that a process detected a potential deadlock when exchanging two buffers and raised an internal, restartable error.