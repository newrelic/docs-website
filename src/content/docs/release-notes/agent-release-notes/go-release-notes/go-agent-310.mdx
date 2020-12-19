---
subject: Go agent
releaseDate: '2020-01-15'
version: 3.1.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v3.1.0'
---

### New Features

* Support for W3C Trace Context, with easy upgrade from New Relic trace context.

  Distributed Tracing now supports W3C Trace Context headers for HTTP and gRPC protocols when distributed tracing is enabled. Our implementation can accept and emit both W3C trace header format and New Relic trace header format. This simplifies agent upgrades, allowing trace context to be propagated between services with older and newer releases of New Relic agents. W3C trace header format will always be accepted and emitted. New Relic trace header format will be accepted, and you can optionally disable emission of the New Relic trace header format.

  When distributed tracing is enabled with `Config.DistributedTracer.Enabled = true`, the Go agent will now accept W3C's `traceparent` and `tracestate` headers when calling [`Transaction.AcceptDistributedTraceHeaders`](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#Transaction.AcceptDistributedTraceHeaders). When calling [`Transaction.InsertDistributedTraceHeaders`](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#Transaction.InsertDistributedTraceHeaders), the Go agent will include the W3C headers along with the New Relic distributed tracing header, unless the New Relic trace header format is disabled using `Config.DistributedTracer.ExcludeNewRelicHeader = true`.

  Also, see Knowns Issues and Workarounds.
* Added support for [elastic/go-elasticsearch](https://github.com/elastic/go-elasticsearch) in the new [v3/integrations/nrelasticsearch-v7](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrelasticsearch-v7) package.

### Known Issues and Workarounds

If a .NET agent is initiating distributed traces as the root service, you must update that .NET agent to version 8.24 or later before upgrading your downstream Go New Relic agents to this agent release.
