---
subject: Python agent
releaseDate: '2016-07-19'
version: 2.68.0.50
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

### Notes

This release of the Python agent is a bug fix release that addresses several recently reported issues.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from our [download site](https://download.newrelic.com/python_agent/release/).

### Bug Fixes

* **WebSocket requests could cause application errors**

  When an application is using [gevent-websocket](https://pypi.python.org/pypi/gevent-websocket/) to serve a mixture of WSGI and WebSocket endpoints, it is possible for WebSocket requests to interfere with the instrumentation of non-WebSocket requests, and cause application errors. While a [fix](https://bitbucket.org/noppo/gevent-websocket/commits/0df192940acd288e8a8f6d2dd30329a3381c90f1) for this has been added to the 'gevent-websocket\` main branch, that fix has not been released to PyPI yet. To address the problem now, the Python agent explicitly ignores WebSocket requests.
* **Disabling browser monitoring inadvertently disabled other features**

  Disabling browser monitoring had the unintended effect of disabling certain other Response-related features of the agent. Specifically, the `response.status` attribute was not recorded, and the [Cross Application Tracing](https://docs.newrelic.com/docs/apm/transactions/cross-application-traces/cross-application-tracing) headers were not added to the HTTP headers of the outgoing response. With this release, those features now work when using the configuration setting of `browser.monitoring.enabled = False`.
* **Calling a Celery task within another task could cause a RuntimeError**

  The Python agent would throw a `RuntimeError('transaction already active')` when instrumenting a Celery task that performed the following combination of actions:

  1. Utilized the agent API to end the transaction early ([`end_of_transaction`](https://docs.newrelic.com/docs/agents/python-agent/customization-extension/python-transaction-api#end_of_transaction)), or to ignore the transaction altogether ([`ignore_transaction`](https://docs.newrelic.com/docs/agents/python-agent/customization-extension/python-transaction-api#ignore_transaction)).
  2. After ending or ignoring the transaction, called another Celery task that would run synchronously.

  This scenario, which most commonly occurs when taking advantage of [Celery Workflows](http://docs.celeryproject.org/en/latest/userguide/canvas.html) to compose multiple tasks together, will no longer result in a `RuntimeError`.
