---
subject: Python agent
releaseDate: '2020-02-03'
version: 5.6.0.135
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

## Notes

This release of the Python agent includes an implementation for w3c trace context, support for uvloop, and various bug fixes.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## New Features

* **New APIs for creating / accepting distributed trace headers**

  This version of the agent deprecates `newrelic.agent.create_distributed_trace_payload` and `newrelic.agent.accept_distributed_trace_payload` in favor of `newrelic.agent.insert_distributed_trace_headers` and `newrelic.agent.accept_distributed_trace_headers`. See the Python agent API documentation for details.
* **Support for W3C Trace Context, with easy upgrade from New Relic Trace Context**

  Distributed Tracing now supports W3C Trace Context headers for HTTP and gRPC protocols when distributed tracing is enabled. Our implementation can accept and emit both W3C trace header format and New Relic trace header format. This simplifies agent upgrades, allowing trace context to be propagated between services with older and newer releases of New Relic agents. W3C trace header format will always be accepted and emitted. New Relic trace header format will be accepted, and you can optionally disable emission of the New Relic trace header format.

  When distributed tracing is enabled with `distributed_tracing.enabled = true`, the Python agent will now accept W3C's `traceparent` and `tracestate` headers when calling `accept_distributed_trace_headers`. When calling `insert_distributed_trace_headers`, the Python agent will include the W3C headers along with the New Relic distributed tracing header, unless the New Relic trace header format is disabled using `distributed_tracing.exclude_newrelic_header = true`

  Also, see the "Known Issues and Workarounds" section of these Release notes.

## Improved Features

* **Add support for uvloop**

  Transaction context may not have been propagated when using uvloop. This could have resulted in incomplete traces or instrumentation failures when using uvloop. uvloop is now supported.

## Bug Fixes

* **Fix crash when using aiohttp_cors**

  Customers using the agent with aiohttp_cors may have experienced a crash when the aiohttp_cors framework was used in conjunction with aiohttp class based views. This crash has now been fixed.
* **Fix grpc v1.26 instrumentation errors**

  Customers using grpc v1.26 and above may have experienced an error message in the New Relic agent logs indicating there was an instrumentation error. Additionally, some data may have been missing when this error was encountered. This issue has now been fixed.

## Known Issues and Workarounds

* If a .NET agent is initiating distributed traces as the root service, you must update that .NET agent to version 8.24 or later before upgrading your downstream New Relic Python agents to this agent release.
