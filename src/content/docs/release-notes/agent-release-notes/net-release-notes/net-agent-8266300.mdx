---
subject: .NET agent
releaseDate: '2020-04-20'
version: 8.26.630.0
downloadLink: 'https://download.newrelic.com/dot_net_agent/latest_release'
redirects:
  - /docs/release-notes/agent-release-notes/net-release-notes/net-agent-8262300
features: ['Add Infinite Tracing feature', 'Add Error Attributes to Span Events']
bugs: ['Fix InstrumentAllNETFramework option on MSI installs', 'Fix incompatibility with Azure App Service and Kudu on Linux', 'Better handle Ignored Errors', 'Fix possible exception when instrumenting StackExchange.Redis']
security: []
---

### New Features

* **Infinite Tracing on New Relic Edge**

  This release adds support for [Infinite Tracing on New Relic Edge](https://docs.newrelic.com/docs/understand-dependencies/distributed-tracing/enable-configure/enable-distributed-tracing). Infinite Tracing observes 100% of your distributed traces and provides visualizations for the most actionable data so you have the examples of errors and long-running traces so you can better diagnose and troubleshoot your systems.

  You configure your agent to send traces to a trace observer in New Relic Edge. You view your distributed traces through the New Relic’s UI. There is no need to install a collector on your network.

  Infinite Tracing is currently available on a sign-up basis. If you would like to participate, please contact your sales representative.

  Agent version 8.30 introduces significant performance enhancements to Infinite Tracing. To use Infinite Tracing, please upgrade to version 8.30 or later.
* **Error attributes now added to each span that exits with an error or exception**

  Error attributes `error.class` and `error.message` are now included on the span event in which an error or exception was noticed, and, in the case of unhandled exceptions, on any ancestor spans that also exit with an error. The public API method `NoticeError` now attaches these error attributes to the currently executing span.

  [Spans with error details are now highlighted red in the Distributed Tracing UI](https://docs.newrelic.com/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#rules-limits), and error details will expose the associated `error.class` and `error.message`. It is also now possible to see when an exception leaves the boundary of the span, and if it is caught in an ancestor span without reaching the entry span. NOTE: This “bubbling up” of exceptions will impact the error count when compared to prior behavior for the same trace. It is possible to have a trace that now has span errors without the trace level showing an error.

  If multiple errors occur on the same span, only the most recent error information is added to the attributes. Prior errors on the same span are overwritten.

  These span event attributes conform to [ignored errors](https://docs.newrelic.com/docs/agents/manage-apm-agents/agent-data/manage-errors-apm-collect-ignore-or-mark-expected#ignore) configuration.

### Fixes

* Fixes issue in the MSI installer which prevented the `InstrumentAllNETFramework` feature selection from working as expected on the command line.
* Fixes issue for Azure App Service environments running on Linux that caused both the application and its Kudu process to be instrumented by the agent. The Kudu process is no longer instrumented.
* Fixes issue when using the [`ignoreErrors` configuration](https://docs.newrelic.com/docs/agents/net-agent/configuration/net-agent-configuration#error-ignoreErrors). Previously, when an exception contained a inner exception(s), the `ignoreErrors` config was only applied to the outer-most exception. Now, both the outer-most and inner-most exception type are considered when evaluating the `ignoreErrors` configuration.
* Fixes an issue that could cause an exception to occur in the instrumentation for StackExchange Redis. This exception caused the instrumentation to shut down leaving StackExchange Redis uninstrumented.

### Upgrading

* Follow standard procedures to [update the .NET agent](/docs/agents/net-agent/installation-configuration/update-net-agent).
* If you are upgrading from a particularly old agent, review the list of major changes and procedures to [upgrade legacy .NET agents](/docs/agents/net-agent/troubleshooting/upgrade-legacy-net-agents).
