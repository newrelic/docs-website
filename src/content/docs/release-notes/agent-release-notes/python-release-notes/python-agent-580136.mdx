---
subject: Python agent
releaseDate: '2020-02-24'
version: 5.8.0.136
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

## Notes

This release of the Python agent includes a new API for adding custom attributes on span events, improvements to external type spans, deprecations, and bug fixes.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## New features

* **Add new api newrelic.agent.add_custom_span_attribute**

  There is now a public API method allowing users to add custom attributes directly to spans.

## Improved features

* **External spans now contain HTTP response code**

  External HTTP spans will now contain a new attribute `http.statusCode` with the http response code for each external call made. This attribute will be added when using any supported HTTP client.

## Deprecations

* **LambdaHandlerWrapper and lambda_handler APIs are deprecated**

  The Lambda API functionality has been moved to a separate package called [newrelic-lambda](https://pypi.org/project/newrelic-lambda/). All future lambda implementations should use the new package for lambda monitoring.

## Bug fixes

* **Fix application crash when using a non-WSGI framework with synthetics**

  When synthetic monitors were used with an application utilizing a non-WSGI web framework (such as aiohttp), a crash could have occurred if an outbound HTTP request was attempted from within the transaction. This crash has now been fixed.
* **The Python agent generates an invalid nr tracestate entry**

  Under certain random conditions, the agent may have generated an invalid New Relic w3c tracestate entry, resulting in potentially missing parts of traces. This invalid tracestate entry would not impact propagation of tracestate values from other vendors.

## Known issues and workarounds

* If a .NET agent is initiating distributed traces as the root service, you must update that .NET agent to version 8.24 or later before upgrading your downstream New Relic Python agents to this agent release.
