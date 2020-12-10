---
name: root.span.id
type: attribute
events:
  - DistributedTraceSummary
---

The unique identifier of the root span of this trace. The root of a distributed trace is the first span, and it has a null value for parent.id.