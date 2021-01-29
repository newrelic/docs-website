---
name: root.span.timestamp
type: attribute
units: milliseconds (ms)
events:
  - DistributedTraceSummary
---

The timestamp of the root span of this trace. The root of a distributed trace is the first span, and will have a null value for parent.id.