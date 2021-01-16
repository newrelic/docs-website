---
subject: .NET agent
releaseDate: '2020-02-19'
version: 8.24.244.0
downloadLink: 'https://download.newrelic.com/dot_net_agent/latest_release'
---

### New Features

* **Adding custom transaction attributes using the .NET Agent API**

  New method, `AddCustomAttribute(string, object)` has been added to `ITransaction`.

  * This new method accepts and supports all data types.
  * Method `AddCustomParameter(string, IConvertable)` is still available with limited data-type support; however, this method should be considered obsolete and will be removed in a future release of the agent API.
  * Further information may be found within [.NET Agent API documentation](https://docs.newrelic.com/docs/agents/net-agent/net-agent-api/itransaction).
* **Enhanced type support for `RecordCustomEvent` and `NoticeError` API methods.**

  APIs for recording exceptions and custom events now support values of all types.

  * The `NoticeError` API method has new overloads that accept an `IDictionary<string, object>`.
  * The `RecordCustomEvent` methods have been modified to handle all types of data. In that past, they only handled `string` and `float` types.
  * Further information may be found within [.NET agent API documentation](https://docs.newrelic.com/docs/agents/net-agent/net-agent-api).
* **New attributes on span events**

  * Spans created for external HTTP calls now include the `http.statusCode` attribute representing the status code of the call.
  * Spans created for calls to a datastore now include the `db.collection` attribute. For instance, this will be the table name for a call to MS SQL Server.
* **Ability to exclude attributes from span events**

  Attributes on span events (e.g., `http.url`) can now be excluded via configuration. See [.NET agent configuration](https://docs.newrelic.com/docs/agents/net-agent/configuration/net-agent-configuration#span_events) for further information.

### Fixes

* New Relic distributed tracing relies on propagating trace and span identifiers in the headers of external calls (e.g., an HTTP call). These identifiers now only contain lowercase alphanumeric characters. Previous versions of the .NET agent used uppercase alphanumeric characters. The usage of uppercase alphanumeric characters can break traces when calling downstream services also monitored by a New Relic agent that supports W3C trace context (New Relic's .NET agent does not currently support W3C trace context. Support for W3C trace context for .NET will be in an upcoming release). This is only a problem if a .NET application is the originator of the trace.

### Upgrading

* Follow standard procedures to [update the .NET agent](/docs/agents/net-agent/installation-configuration/update-net-agent).
* If you are upgrading from a particularly old agent, review the list of major changes and procedures to [upgrade legacy .NET agents](/docs/agents/net-agent/troubleshooting/upgrade-legacy-net-agents).
