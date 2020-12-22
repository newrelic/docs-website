---
subject: Node.js agent
releaseDate: '2020-02-12'
version: 6.4.0
downloadLink: 'https://www.npmjs.com/package/newrelic'
---

## New Features

* Added support for W3C Trace Context, with easy upgrade from New Relic trace context.

  * Distributed tracing now supports [W3C Trace Context](https://docs.newrelic.com/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#headers) headers for HTTP protocols when distributed tracing is enabled. Our implementation can accept and emit both the W3C trace header format and the New Relic trace header format. This simplifies agent upgrades, allowing trace context to be propagated between services with older and newer releases of New Relic agents. W3C trace header format will always be accepted and emitted. New Relic trace header format will be accepted, and you can optionally disable emission of the New Relic trace header format.
  * When distributed tracing is enabled with `distributed_tracing.enabled: true`, the Node agent will now accept W3C's `traceparent` and `tracestate` headers when calling `TransactionHandle#acceptDistributedTraceHeaders` or automatically via `http` instrumentation. When calling `Transaction#insertDistributedTraceHeaders`, or automatically via `http` instrumentation, the Node agent will include the W3C headers along with the New Relic distributed tracing header, unless the New Relic trace header format is disabled using `distributed_tracing.exclude_newrelic_header:true`.
  * Added `TransactionHandle#acceptDistributedTraceHeaders` API for accepting both New Relic and W3C Trace Context distributed traces.

    Deprecated `TransactionHandle#acceptDistributedTracePayload` which will be removed in a future major release.
  * Added `TransactionHandle#insertDistributedTraceHeaders` API for adding outbound distributed trace headers. Both W3C Trace Context and New Relic formats will be included unless `distributed_tracing.exclude_newrelic_header: true`.

    Deprecated `TransactionHandle#createDistributedTracePayload` which will be removed in a future major release.

  Known issues and workarounds

  * If a .NET agent is initiating distributed traces as the root service, you must update that .NET agent to version `8.24` or later before upgrading your downstream Node New Relic agents to this agent release.

## Improvements

* Improved transaction and trace ID generation.
* AWS Lambda

  * Added collection of additional AWS Lambda event source meta data.
  * Added event type detection for Lambda invocation events.
  * Expanded ARN harvest to include ALB and CloudWatch.

## Fixes

* Fixed issue where Lambda invocation errors were not noticed in Node 10 or Node 12 environments.
* Pins Node 12 CI/testing version to `v12.15` to avoid breakages with `v12.16.0` until cause(s) resolved.
* Updated publish-docs script to use `npm run` instead of `make`.

## Known issues and workarounds

* If a .NET agent is initiating distributed traces as the root service, you must update that .NET agent to version 8.24 or later before upgrading your downstream New Relic Node agents to this agent release.
