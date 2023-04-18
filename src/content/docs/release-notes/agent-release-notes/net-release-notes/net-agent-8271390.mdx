---
subject: .NET agent
releaseDate: '2020-04-30'
version: 8.27.139.0
downloadLink: 'https://download.newrelic.com/dot_net_agent/latest_release'
features: ['Add support for W3C Trace Context']
bugs: ['Fix incompatibility between Synthetics and Distributed Tracing', 'Remove unnecessary dependencices on RPM-based Linux distros', 'Correctly report TransportDuration metric']
security: []
---

### New Features

* **Support for W3C Trace Context, with easy upgrade from New Relic trace context**
  * [Distributed Tracing now supports W3C Trace Context headers](https://docs.newrelic.com/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing#w3c-support) for HTTP when distributed tracing is enabled. Our implementation can accept and emit both W3C trace header format and New Relic trace header format. This simplifies agent upgrades, allowing trace context to be propagated between services with older and newer releases of New Relic agents. W3C trace header format will always be accepted and emitted. New Relic trace header format will be accepted, and you can optionally disable emission of the New Relic trace header format.
  * When distributed tracing is enabled with `<distributedTracing enabled="true" />`, the .NET agent will now accept W3C's `traceparent` and `tracestate` headers when calling [Transaction.AcceptDistributedTraceHeaders](https://docs.newrelic.com/docs/agents/net-agent/net-agent-api/itransaction#acceptdistributedtraceheaders). When calling [Transaction.InsertDistributedTraceHeaders](https://docs.newrelic.com/docs/agents/net-agent/net-agent-api/itransaction#insertdistributedtraceheaders), the .NET agent will include the W3C headers along with the New Relic distributed tracing header, unless the New Relic trace header format is disabled using `<distributedTracing enabled="true" excludeNewrelicHeader="true" />`.
  * The existing `Transaction.AcceptDistributedTracePayload` and `Transaction.CreateDistributedTracePayload` APIs are **deprecated** in favor of [Transaction.AcceptDistributedTraceHeaders](https://docs.newrelic.com/docs/agents/net-agent/net-agent-api/itransaction#acceptdistributedtraceheaders) and [Transaction.InsertDistributedTraceHeaders](https://docs.newrelic.com/docs/agents/net-agent/net-agent-api/itransaction#insertdistributedtraceheaders).

### Fixes

* Fixes issue which prevented synthetic monitors from working when distributed tracing is enabled.
* Fixes issue where our RPM package for installing the agent on RPM-based Linux distributions included a 32-bit shared library, which created unnecessary dependencies on 32-bit system libraries.
* Fixes issue where the TransportDuration metric for distributed traces was always reporting 0.

### Upgrading

* Follow standard procedures to [update the .NET agent](/docs/agents/net-agent/installation-configuration/update-net-agent).
* If you are upgrading from a particularly old agent, review the list of major changes and procedures to [upgrade legacy .NET agents](/docs/agents/net-agent/troubleshooting/upgrade-legacy-net-agents).
