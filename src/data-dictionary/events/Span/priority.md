---
name: priority
type: attribute
events:
  - Span
---

A priority ranking that dictates whether the trace will be reported in situations where the sampling reservoir has exceeded capacity. This is a float value set by the first New Relic agent that’s part of the request.