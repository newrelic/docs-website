---
subject: Python agent
releaseDate: '2019-01-10'
version: 4.10.0.112
downloadLink: 'https://pypi.python.org/pypi/newrelic'
redirects:
  - /docs/release-notes/agent-release-notes/python-release-notes/python-agent-4100111
---

## Notes

This release of the Python agent adds support for excluding attributes from span events and transaction trace segments, adds a new api called add_custom_parameters, and includes various bug fixes.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## Features

* **Add ability to exclude attributes from span events and transaction trace segments**

  This release adds support to exclude attributes (such as `http.url`) from span events (via the `span_events.include`/`span_events.exclude` options) and from transaction segments (via the `transaction_segments.include`/`transaction_segments.exclude` option).

  As with other attribute destinations, these new options will inherit values from the top-level `attributes.include`/`attributes.exclude` settings. See the documentation for more information.
* **Add public add_custom_parameters API**

  The method add_custom_parameters on Transaction is now exposed through newrelic.agent.add_custom_parameters

## Bug Fixes

* **Transaction counts were not reported for aiohttp's built-in error pages**

  When a built-in error route was reached in aiohttp (such as a 404 due to a missing route), transactions were not recorded. As a result, the transaction counts may have been artificially low. aiohttp system route traffic will now be reported.
* **aiohttp cross application tracing linking to non-Python applications may have been omitted if using multidict&lt;3.0**

  For aiohttp users using multidict versions less than 3.0, cross application tracing HTTP headers may have been generated in a way that was incompatible with non-Python applications. Headers are now generated in a format compatible with all New Relic agents.
* **aiohttp 3.5.x versions generated agent instrumentation errors**

  The agent previously failed to instrument aiohttp applications running versions 3.5.0 and greater. The agent now supports aiohttp versions up to 3.5.1.
