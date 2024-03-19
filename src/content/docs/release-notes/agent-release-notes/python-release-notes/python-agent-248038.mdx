---
subject: Python agent
releaseDate: '2015-03-25'
version: 2.48.0.38
downloadLink: 'https://pypi.python.org/pypi/newrelic'
metaDescription: Release notes for Python Agent 2.46.0.37.
---

### Notes

This release of the Python agent adds instrumentation for Elasticsearch as a new datastore product and a more granular breakdown of various SQL operations in the “Databases” tab in the APM UI. In addition, the stack traces captured by the agent are now being trimmed to remove any code snippets.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from our [download site](https://download.newrelic.com/python_agent/release/).

For a list of known issues with the Python agent, see [Status of the Python agent](https://docs.newrelic.com/docs/python/status-of-python-agent).

### New Features

* **Improved SQL Breakdown**

  This agent release adds the ability to see the breakdown of time spent in SQL statements such as CREATE, DROP, ALTER, SET, CALL, EXEC, EXECUTE, COMMIT and ROLLBACK. Execution of stored procedures through the callproc() or CALL statements will provide further breakdown based on the name of the stored procedure.
* **Elasticsearch Support**

  Instrumentation support for the official Elasticsearch client module and the separate pyelasticsearch module have been added. Time spent in calls made to Elasticsearch will be listed in both the main overview chart, as well as in the Databases tab in the UI. Previously, calls to Elasticsearch would have been shown as time spent in external web service calls.

### Features Changed

* **Remove code snippets in stack traces**

  Stack traces captured for errors and slow SQL queries will no longer include code snippets. This change is to prevent the possibility of capturing sensitive data embedded within the code. It reduces the overhead in capturing stack trace information, and also avoids a potential problem caused when the code on disk has changed in the time since the process was started.

### Bugs Fixed

* Ensure that messages sent to the data collector containing parts which were already compressed and encoded, were not being compressed a second time at the HTTP request level causing additional overhead.
* Guard against a potential agent error where an invalid URL was being passed to an instrumented external web service client.
* Motor (an asynchronous MongoDB library) incorrectly returns a non string object when the agent tries to access the `__name__` attribute on Motor objects. This caused the agent to fail when calculating the name for an object, since we rely on this value being a string as specified by the Python object model definition. The agent now overrides the incorrect behavior of Motor to ensure that we can still generate names of objects correctly.
* When using Python 3 and audit logging was enabled, if messages being sent to our data collector were large enough that they were being compressed at the HTTP request level, the audit logging code would fail due to a bytes/Unicode mismatch.
* Instrumentation for the decr() method of umemcache client for Memcached was incorrectly calling the stats() method.
