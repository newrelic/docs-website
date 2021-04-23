---
name: tripId
type: attribute
units: ID
events:
  - Transaction
---

A unique ID (a randomly-generated string) used to identify a single request as it crosses application boundaries. If distributed tracing is enabled, this will be reported as `traceId`.