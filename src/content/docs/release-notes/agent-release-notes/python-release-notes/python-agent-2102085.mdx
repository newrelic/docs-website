---
subject: Python agent
releaseDate: '2018-02-05'
version: 2.102.0.85
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

## Notes

This release of the Python agent contains improvements to the time tracing API as well as bug fixes.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## Time Trace API Improvements

* **Time trace APIs (such as function_trace) can now be used with coroutines**

  The following decorator APIs can now be used with native coroutines and generators:

  * function_trace
  * database_trace
  * datastore_trace
  * external_trace
  * message_trace
  * memcache_trace

  Example:

  ```
  @function_trace(name='my_coroutine')
  async def my_coroutine():
    await asyncio.sleep(0.1)
  ```

## Bug Fixes

* **gRPC instrumentation used on Python 2.x can cause a memory leak**

  When using gRPC on Python 2, gRPC futures would not be garbage collected resulting in a memory leak. gRPC futures will now be garbage collected.
* **Instrumentation for Dropbox v8.0 and newer caused error log messages**

  Dropbox client version 8.0 or higher raised instrumentation errors. These errors did not prevent metrics on Dropbox from being sent. These errors have been removed.
* **Values from negated ranges were sometimes added to ignore_status_codes**

  Negated status codes not found in the current ignore_status_codes were added if they were part of a range of values. This issue has been addressed.
