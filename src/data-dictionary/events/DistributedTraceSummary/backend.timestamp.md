---
name: backend.timestamp
type: attribute
units: milliseconds (ms)
events:
  - DistributedTraceSummary
---

The timestamp of the first span in this trace from a backend entity. In distributed tracing, any events that are not from client-side applications contributed to the backend duration.