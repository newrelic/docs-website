---
subject: Python agent
releaseDate: '2018-06-11'
version: 3.2.2.94
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

## Notes

This release of the Python agent contains various bug fixes.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## Bug Fixes

* **Improved handling of celery max-tasks-per-child**

  Data recorded by the Python Agent may not have been reported when celery was operated with the max-tasks-per-child setting. All data is now reported independent of the max tasks per child setting.
* **Improve support for PyMongo v3.x**

  PyMongo v3 added many new methods on the `pymongo.Collection` object that did not exist in v2. These methods have now been instrumented. Calls to these methods will now appear in APM.
* **Scheduling tasks that run after a transaction ends causes an error**

  Coroutines scheduled to execute after a transaction ends using create_task or ensure_future may have caused the runtime instrumentation error and subsequent crash:

  ```
  The transaction already completed meaning a child called complete trace after the trace had been finalized.
  ```

  Coroutines that execute beyond the end of a transaction will no longer cause an error.
