---
subject: Python agent
releaseDate: '2020-03-09'
version: 5.10.0.138
downloadLink: 'https://pypi.python.org/pypi/newrelic'
redirects:
  - /docs/release-notes/agent-release-notes/python-release-notes/python-agent-5100137
---

## Notes

This release of the Python agent includes an update to the API for recording exceptions, default request attributes, optional function trace attributes, and bug fixes.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## Improved features

* **newrelic.agent.record_exception now adds attributes to spans**

  The public API method `newrelic.agent.record_exception` now attaches exception details to the currently executing span. Spans with error details are now highlighted red in the distributed tracing UI. Also, the attributes `error.class` and `error.message` are added to the span. If multiple errors are recorded for a single span, only the final error's attributes will be added to the span.
* Note: Exceptions recorded on spans may be double counted in the distributed tracing UI.
* **New default web request attributes.**

  The previously optional attributes `request.headers.accept`, `request.headers.host`, and `request.headers.userAgent` are now included by default on all web transactions. These attributes can be excluded through [agent configuration](/docs/agents/python-agent/attributes/enabling-disabling-attributes-python).
* **peer.address and peer.hostname can now be excluded from spans through configuration**

  peer.address and peer.hostname may be excluded from span events through `attribute.exclude` options in the [agent configuration](/docs/agents/python-agent/attributes/enabling-disabling-attributes-python).

## Bug fixes

* **Fix issue which could potentially lead to missing event data**

  When the agent was shutting down, event harvest may have been skipped causing any events captured in the final 5 seconds of application execution to be discarded. This has now been fixed.
* **Runtime instrumentation error messages for calling `__exit__` before `__enter__` were erroneously logged**

  Under certain conditions, the agent may have logged an error message for transaction `__exit__` being called before trace `__enter__`. This error message is now printed only if the error condition is true.

## Known issues and workarounds

* If a .NET agent is initiating distributed traces as the root service, you must update that .NET agent to version 8.24 or later before upgrading your downstream New Relic Python agents to this agent release.
