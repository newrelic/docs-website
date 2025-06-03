---
subject: Python agent
releaseDate: '2018-09-11'
version: 4.4.0.103
downloadLink: 'https://pypi.python.org/pypi/newrelic'
redirects:
  - /docs/release-notes/agent-release-notes/python-release-notes/python-agent-440101
  - /docs/release-notes/agent-release-notes/python-release-notes/python-agent-440102
---

## Notes

This release of the Python agent introduces instrumentation for Sanic, and contains bug fixes.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## Features

* **Add instrumentation for Sanic framework**

  Data is now automatically collected for applications using the Sanic framework. Data for Sanic applications will appear in both APM and Insights. Additionally, cross application tracing and distributed tracing is supported for incoming requests for Sanic applications. In addition to service maps, Sanic applications will now show the calling application in transaction traces. See the [instrumented packages page](https://docs.newrelic.com/docs/agents/python-agent/getting-started/instrumented-python-packages) for more details.

## Bug Fixes

* **Explain plans were not generated when using psycopg2 named cursors**

  When using named cursors in psycopg2, the agent attempted to generate an explain plan using the same named cursor. This resulted in a syntax error when the query was issued to the database. When using the default connection and cursor factories, the agent will now execute the explain query using only unnamed cursors.
* **Convert bytes-like SQL statements to strings before obfuscating**

  If a bytes-like object is used instead of a string when making a SQL call, a traceback was seen in the logs with `TypeError: cannot use a string pattern on a bytes-like object`. This issue has now been fixed.
* **Save settings to MessageTrace objects**

  If an external call using an instrumented http external library (for example `requests`) was used within a `MessageTrace`, a traceback was seen in the logs with `AttributeError: 'MessageTrace' object has no attribute 'settings'`. This issue has now been fixed.
