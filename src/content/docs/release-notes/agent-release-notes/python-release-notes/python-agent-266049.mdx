---
subject: Python agent
releaseDate: '2016-05-26'
version: 2.66.0.49
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

### Notes

This release of the Python agent is a bug fix release that addresses several outstanding issues. In addition, the agent's instrumentation for the Pyramid web framework was updated to handle changes introduced in version 1.7 of Pyramid.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from our [download site](https://download.newrelic.com/python_agent/release/).

For a list of known issues with the Python agent, see [Status of the Python agent](https://docs.newrelic.com/docs/python/status-of-python-agent).

### New Feature

* **Support for Pyramid 1.7**

  In version 1.7 of the Pyramid web framework, the `ViewDeriver` class was removed and replaced with a custom view pipeline, composed with view derivers. This required a change to where the agent applied it's instrumentation, since we were previously instrumenting the `ViewDeriver` class.

### Bug Fixes

* **Gevent and Python 3.4+**

  When running the agent with `gevent` in Python 3.4+, the agent would throw an `AttributeError` when accessing the `_sleep` attribute in the `threading` module, which was removed in Python 3.4. The agent now handles this properly.
* **Possible missing application exceptions in APM Error Analytics**

  Using the `record_exception()` API, it is possible to record an exception against the application, but outside of a transaction. If there was a time window in which no transaction exceptions were recorded, but only application exceptions were recorded, then no exceptions would be displayed when viewing that time window in APM Error Analytics. With this release, application exceptions show up as expected, whether or not transaction exceptions were also recorded.
* **CherryPyWSGIServer and keyword arguments**

  Previously, the agent would fail to instrument `CherryPyWSGIServer` correctly when it was initialized using keyword arguments. That is now handled correctly.
* **Missing attributes in Transaction Events**

  In [version 2.60.0.46](https://docs.newrelic.com/docs/release-notes/agent-release-notes/python-release-notes/python-agent-260046) of the agent, two response header attributes were renamed, but they were not added to Transaction Events as they should have been.

  * `response.headers.contentLength`
  * `response.headers.contentType`

  These attributes are now included in Transaction Events.

### Changed Feature

* **Capture port for all HTTP requests to External Services**

  Prior to this release, the agent would capture the port for HTTP requests to external services for only some of the HTTP libraries that the agent instruments. Notably, the port was missing when using these libraries directly: `httplib`, `httplib2`, and `urllib3`. The agent now captures the port for these libraries.
