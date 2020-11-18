---
name: Span
type: event
dataSources:
  - Distributed Tracing
---

Span events are created when New Relic agents, or other tracing instrumentation tools, instrument operations that are part of a distributed trace. The operations that a span can represent include datastore queries, calls to other services, and method-level timing. For example, in an HTTP service, a span is created at the beginning of an HTTP request and completed when the HTTP server returns a response. Span attributes contain important information about the operation that the span represents (such as duration, host data, etc.), including trace state details (such as traceId, guid) that allow New Relic to connect spans together in a trace.