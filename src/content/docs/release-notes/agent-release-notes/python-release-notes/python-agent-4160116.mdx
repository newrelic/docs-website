---
subject: Python agent
releaseDate: '2019-03-25'
version: 4.16.0.116
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

## Notes

This release of the Python agent adds support for native coroutines and generators with a new web_transaction API, as well as bugfixes.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## Features

* **Add a new web_transaction API**

  This method is now exposed both as a public API through `newrelic.agent.api.wrap_web_transaction`, and as a decorator with `newrelic.agent.api.web_transaction`. It can be used to instrument non-WSGI web transactions. For usage of this API see [https://docs.newrelic.com/docs/agents/python-agent/python-agent-api/webt...](https://docs.newrelic.com/docs/agents/python-agent/python-agent-api/webtransaction)

## Bug Fixes

* **The presence of unicode values in a SQL query on Python 2 may cause an application crash**

  The agent was not properly handling unicode values when recording SQL queries in Python 2. As a result, the presence of unicode values in SQL queries in Python 2 applications may have resulted in an application crash. Unicode values in Python 2 SQL queries are now properly handled.
* **The Python Agent may have improperly biased the random sampling of distributed traces**

  Distributed traces are randomly sampled across services. The agent is responsible for propagating the state of its sampling decision to other services. In propagating that decision, an improper sampling bias may have been introduced in downstream services.
* **The agent will no longer report the command arguments used to start newrelic-admin**

  The agent previously reported the startup command and arguments when using `newrelic-admin run-program` and `newrelic-admin run-python`. The command and arguments are no longer sent to New Relic. This data may continue to be logged to the agent log files when debug level logs are enabled.
