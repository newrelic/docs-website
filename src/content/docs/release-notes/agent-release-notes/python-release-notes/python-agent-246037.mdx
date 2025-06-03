---
subject: Python agent
releaseDate: '2015-03-04'
version: 2.46.0.37
downloadLink: 'https://pypi.python.org/pypi/newrelic'
metaDescription: Release notes for Python Agent 2.46.0.37.
---

### Notes

This release of the Python agent is a minor bug fix release, including changes which may help to reduce the incidence of spurious warnings about being able to communicate with our service.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from our [download site](https://download.newrelic.com/python_agent/release/).

For a list of known issues with the Python agent, see [Status of the Python agent](https://docs.newrelic.com/docs/python/status-of-python-agent).

### Bugs Fixed

* **Improved management of the network connection to our service**

  * When the agent registered itself with our data collector, it wasn't closing the socket connection immediately and instead it was holding it open for up to a minute when the first batch of data would be reported. If the socket connection was being closed remotely during that time, a `BadStatusLine` exception would be seen in the logs when the attempt was made to upload data.
  * When the agent received an internal restart request from our data collector as the result of a server side configuration change, the socket connection wasn't being closed explicitly. In the case of CPython it would still be cleaned up and closed immediately due to reference counting, but under PyPy when it was closed was dependent on when PyPy garbage collection occurred. This could mean that the socket descriptor could stay in use for a while.
* **Compatibility modules for transitioning from Python 2 to Python 3**

  When compatibility modules for Python 2/3 migration such as `pies2overrides` and `future` were installed in a Python 2 installation, they were installing modules which mimic modules which would normally only ever exist in a Python 3 installation. The presence of these modules were confusing the agent's instrumentation mechanisms. The result of this was that use of `http.client` from Python 3 in a Python 2 application would fail.
* **Failures when making calls to external web services**

  * If a HTTP client module was supplied `None` as the value for the URL being requested, this would cause an exception when the agent was recording the data for that transaction.
  * Use of the `ExternalTrace` context manager class directly, for recording external web services calls, would fail if there was no active transaction. This could occur in the time before the agent has successfully been able to register with our data collector.
* **Setting of response content length when using Django**

  The Django middleware installed by the agent to perform insertion of RUM monitoring code into responses, would always set the `Content-Length` even if it was not previously set. This could cause issues where a frontend had been set up with an expectation that `Content-Length` headers would never exist.
