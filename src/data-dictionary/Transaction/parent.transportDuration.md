---
name: parent.transportDuration
events:
  - Transaction
  - TransactionError
---

When distributed tracing is enabled and a payload is received, the difference in time between the timestamp given for when the payload was sent and the moment it was processed.