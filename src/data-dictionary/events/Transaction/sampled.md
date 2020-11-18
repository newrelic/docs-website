---
name: sampled
type: attribute
events:
  - Transaction
  - TransactionError
---

Indicates whether this event was sampled for inclusion in a distributed trace. Only present when distributed tracing is enabled.