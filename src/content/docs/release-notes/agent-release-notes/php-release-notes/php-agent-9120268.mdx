---
subject: PHP agent
releaseDate: '2020-07-21'
version: 9.12.0.268
downloadLink: 'https://download.newrelic.com/php_agent/archive/9.12.0.268/'
redirects:
  - /docs/release-notes/agent-release-notes/php-release-notes/php-agent-9120
features: ['Add span attributes', 'Add Infinite Tracing support']
bugs: ['Fix agent to daemon IP address resolution for separate hosts']
security: []
---

### New Features

* With the addition of attributes on spans, the PHP agent now fully supports [Infinite Tracing on New Relic Edge](https://docs.newrelic.com/docs/understand-dependencies/distributed-tracing/enable-configure/enable-distributed-tracing).

  Infinite Tracing observes 100% of your distributed traces and provides visualizations for the most actionable data so you have the examples of errors and long-running traces so you can better diagnose and troubleshoot your systems. You [configure your agent](https://docs.newrelic.com/docs/agents/php-agent/configuration/php-agent-configuration#inivar-inftr-host) to send traces to a trace observer in New Relic Edge. You view your distributed traces through the New Relic’s UI. There is no need to install a collector on your network.

  Infinite Tracing is currently available on a sign-up basis. If you would like to participate, please contact your sales representative.
* Added support for attributes on spans. All custom attributes and some agent attributes previously applied as “Transaction events” are now also applied to the currently executing span, subject to the new span configuration settings.

  * Added the `transaction.name` to spans.
  * Added `http.statusCode` to external spans, representing the status code on an http response.
  * Added error attributes to each span that exits with an error or exception. `error.class` and `error.message` are now included on the span in which an error or exception was noticed, and, in the case of unhandled exceptions, on any ancestor spans that also exit with an error. Also, the public API method [`newrelic_notice_error`](https://docs.newrelic.com/docs/agents/php-agent/php-agent-api/newrelic_notice_error) now attaches these error attributes to the currently executing span, while still creating a Transaction Error event.

    [Spans with error details are now highlighted red in the distributed tracing UI](https://docs.newrelic.com/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data#error-tips), and error details will expose the associated `error.class` and `error.message`. It is also now possible to see when an exception leaves the boundary of the span, and if it is caught in an ancestor span without reaching the entry span. NOTE: This “bubbling up” of exceptions will impact the error count when compared to prior behavior for the same trace. It is possible now to have a trace that has span errors without showing an error on the root span or entry spans.
  * Added a new API method [`newrelic_add_custom_span_parameter`](https://docs.newrelic.com/docs/agents/php-agent/php-agent-api/newrelic_add_custom_parameter) that allows adding custom attributes to spans. This is independent of the transaction; using this new API to add custom attributes to spans does not add them to transactions. If the maximum number of custom attributes is reached, span-level custom attributes take precedence over transaction-level custom attributes.
  * Added the following span event attributes configuration to enable attribute filtering for spans:

    * [`newrelic.span_events.attributes.enabled`](https://docs.newrelic.com/docs/agents/php-agent/attributes/enable-or-disable-attributes#cfg-tt-attributes-enabled)
    * [`newrelic.span_events.attributes.include`](https://docs.newrelic.com/docs/agents/php-agent/attributes/enable-or-disable-attributes#cfg-tt-attributes-include)
    * [`newrelic.span_events.attributes.exclude`](https://docs.newrelic.com/docs/agents/php-agent/attributes/enable-or-disable-attributes#cfg-tt-attributes-exclude)

    Note: Security recommendation—Review your Transaction attributes configuration. Any attribute include or exclude settings specific to Transaction events, should be applied to your Span attributes configuration or your global attributes configuration.

### Bug Fixes

* In cases where the agent is configured to connect to the hostname of a daemon that exists in a separate container/host, after successfully connecting, the agent would not attempt to resolve the IP address again. This was seen when the daemon container/host goes down and then comes up again with a new IP address. Now, the agent will wait 45 seconds since either the last known good connection or the last IP address resolution and will attempt to resolve an IP address again.
