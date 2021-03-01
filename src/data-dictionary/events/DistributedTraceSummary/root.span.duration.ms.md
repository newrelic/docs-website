---
name: root.span.duration.ms
type: attribute
units: milliseconds (ms)
events:
  - DistributedTraceSummary
---

The elapsed time in milliseconds of the root span of this trace. The root of a distributed trace is the first span, and will have a null value for parent.id.