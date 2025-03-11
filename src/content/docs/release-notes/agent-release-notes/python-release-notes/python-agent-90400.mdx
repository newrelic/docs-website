---
subject: Python agent
releaseDate: '2024-01-08'
version: 9.4.0
downloadLink: 'https://pypi.python.org/pypi/newrelic'
features: ['Add nonced context security policy support', 'Add wheels for Python 3.12 and musl', 'Publish newrelic.agent.CallableObjectProxy API', 'Deprecate ObjectWrapper API', 'Deprecate get_browser_timing_footer API']
bugs: ['Fix distributed tracing headers in kafka', 'Fix case sensitive header search in ASGIBrowserMiddleware']
security: []
---

## Notes

This release of the Python agent adds support for nonced content security policies for browser agent injection, adds new wheels for Python 3.12 and musl Linux systems such as Alpine, deprecates the ObjectWrapper and `get_browser_timing_footer` APIs, fixes a crash with Kafka instrumentation when using distributed tracing, and removes a case sensitive header check in `ASGIBrowserMiddleware`.

Install the agent using `easy_install/pip/distribute` via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or download it directly from the [New Relic download site](https://download.newrelic.com/python_agent/release).

## Deprecations

* Deprecated `newrelic.agent.ObjectWrapper` API
  * Removes custom `newrelic.agent.ObjectWrapper` implementation and instead creates a pass through to `wrapt.FunctionWrapper`.

* Deprecated `get_browser_timing_footer` API
  * Previously `get_browser_timing_footer` was an API that would be used to supply information to the browser agent loaded by `get_browser_timing_header`.
  * This step is now included in `get_browser_timing_header`, making `get_browser_timing_footer` obsolete. This function now returns an empty string to avoid breaking existing applications.

## New features

* Added nonced content security policies (CSPs) for browser agent injection
  * The browser agent injection API `get_browser_timing_header` has a new parameter `nonce` that takes a cryptographic nonce for use with content security policies. The nonce will be automatically inserted into the generated HTML.

* Added additional wheel options for Python 3.12 and musl Linux
  * Added pre-built binary wheel support for Python 3.12 as well as alternative wheels for musl-based Linux operating systems (such as Alpine).

* Added `newrelic.agent.CallableObjectProxy` to public APIs
  * Previously `CallableObjectProxy` was never exposed for general use with custom instrumentation, but was present in internal modules used by the agent.
  * This API has been added to `newrelic.agent.CallableObjectProxy` for general use.

## Bug fixes

* Fixed a crash with [kafka-python](https://pypi.org/project/kafka-python/) and [confluent-kafka](https://pypi.org/project/confluent-kafka/) when using distributed tracing
  * Previously Kafka instrumentation packages would sometimes fail to generate distributed tracing headers and cause a crash. This has been fixed and distributed tracing headers should now generate correctly.

* Removed case sensitive header check in `ASGIBrowserMiddleware`
  * The agent previously only supported HTML insertion for headers that were lowercase in ASGI applications. The header check is now case insensitive in compliance with the ASGI specification.

## Support statement

We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read [more](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/) about keeping agents up to date.

See the New Relic Python agent [EOL policy](/docs/apm/agents/python-agent/getting-started/python-agent-eol-policy/) for information about agent releases and support dates.
