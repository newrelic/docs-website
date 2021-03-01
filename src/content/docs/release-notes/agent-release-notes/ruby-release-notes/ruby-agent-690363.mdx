---
subject: Ruby agent
releaseDate: '2020-02-20'
version: 6.9.0
downloadLink: 'https://rubygems.org/downloads/newrelic_rpm-6.9.0.363.gem'
redirects:
  - /docs/release-notes/agent-release-notes/ruby-release-notes/ruby-agent-690362
---

# New Relic Ruby Agent Release Notes

* **Added support for W3C Trace Context, with easy upgrade from New Relic trace context**

  * [Distributed tracing now supports W3C Trace Context headers](https://docs.newrelic.com/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing#w3c-support) for HTTP protocols when distributed tracing is enabled. Our implementation can accept and emit both the W3C trace header format and the New Relic trace header format. This simplifies agent upgrades, allowing trace context to be propagated between services with older and newer releases of New Relic agents. W3C trace header format will always be accepted and emitted. New Relic trace header format will be accepted, and you can optionally disable emission of the New Relic trace header format.
  * When distributed tracing is enabled by setting `distributed_tracing.enabled` to `true`, the Ruby agent will now accept W3C's `traceparent` and `tracestate` headers when calling `DistributedTracing.accept_distributed_trace_headers` or automatically via `http` instrumentation. When calling `DistributedTracing.insert_distributed_trace_headers`, or automatically via `http` instrumentation, the Ruby agent will include the W3C headers along with the New Relic distributed tracing header, unless the New Relic trace header format is disabled by setting `exclude_newrelic_header` setting to `true`.
  * Added `DistributedTracing.accept_distributed_trace_headers` API for accepting both New Relic and W3C TraceContext distributed traces.
  * Deprecated `DistributedTracing.accept_distributed_trace_payload` which will be removed in a future major release.
  * Added `DistributedTracing.insert_distributed_trace_headers` API for adding outbound distributed trace headers. Both W3C TraceContext and New Relic formats will be included unless `distributed_tracing.exclude_newrelic_header: true`.
  * Deprecated `DistributedTracing.create_distributed_trace_payload` which will be removed in a future major release.

  Known issues and workarounds:

  * If a .NET agent is initiating distributed traces as the root service, you must update that .NET agent to version 8.24 or later before upgrading your downstream Ruby New Relic agents to this agent release.
* **Official Ruby 2.7 support**

  The Ruby agent has been verified to run with Ruby 2.7.0.
* **Reduced allocations when tracing transactions using API calls**

  Default empty hashes for `options` parameter were not frozen, leading to excessive and unnecessary allocations when calling APIs for tracing transactions.

  Thanks to Joel Turkel (jturkel) for the contribution!
* **Bugfix for Resque worker thread race conditions**

  Recent changes in Rack surfaced issues marshalling data for Resque, surfaced a potential race-condition with closing out the worker-threads before flushing the data pipe. This is now fixed.

  Thanks to Bertrand Paquet (bpaquet) for the contribution!
* **Bugfix for Content-Length when injecting browser monitoring JS**

  The Content-Length HTTP header would be incorrect after injecting the browser monitoring JS into the HEAD tag of the HTML source with Content-Length and lead to the HTML BODY content being truncated in some cases. The Content-Length is now correctly updated after injecting the browser monitoring JS script.

  Thanks to Slava Kardakov (ojab) for the contribution!
