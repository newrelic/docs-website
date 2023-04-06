---
subject: Python agent
releaseDate: '2016-03-30'
version: 2.62.0.47
downloadLink: 'https://pypi.python.org/pypi/newrelic'
metaDescription: Release notes for Python Agent 2.62.0.47.
---

### Notes

This release of the Python agent adds introductory support for instrumenting Tornado 4 applications.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from our [download site](https://download.newrelic.com/python_agent/release/).

For a list of known issues with the Python agent, see [Status of the Python agent](https://docs.newrelic.com/docs/python/status-of-python-agent).

### New Feature

* Introductory Support for Tornado 4. (See below for details.)

### Bug Fix

* Django Template Tags for Browser Monitoring Fixed for Django 1.9

For manual insertion of the browser monitoring javascript for page load timing, the Python agent offers two Django template tags: `newrelic_browser_timing_header` and `newrelic_browser_timing_footer`.

Starting in [Django version 1.9](https://docs.djangoproject.com/en/1.9/releases/1.9/#simple-tag-now-wraps-tag-output-in-conditional-escape), the output of `simple_tag` is now escaped, which results in the browser monitoring javascript being included as escaped text in the HTML output. To fix this issue, the agent now uses `django.utils.safestring:mark_safe()` to prevent automatic escaping for these two template tags.

### Introductory Support for Tornado 4

New Relic is pleased to announce introductory support for Tornado 4. While not all features are supported at this point, providing it at an early stage allows interested customers to preview our Tornado 4 support, and provide feedback on what works well and what doesn't.

<Callout variant="important">
  We strongly advise running the introductory Tornado 4 instrumentation in a testing or staging environment before considering using it in a production environment.
</Callout>

For detailed information about the introductory Tornado 4 support, including Supported Features, Design Decisions, and Known Limitations, see [Introductory Tornado 4 support](https://docs.newrelic.com/docs/agents/python-agent/hosting-mechanisms/introductory-tornado-4-support).

### Status of Tornado 4 Support

The following is a list of known limitations for our Tornado 4 support as it exists in the current version of the agent. In the next few releases, we plan to address these issues.

* If you use `psycopg2` in aynchronous mode, you must disable explain plans in the Python agent, or else the agent will throw an error when it attempts to run an explain plan query. Add this setting to your `newrelic.ini` configuration file:

  ```
  transaction_tracer.explain_enabled = false
  ```
* Metric names should be more consistent. For a method of a class, the metric name should contain both the name of the class and the method, but sometimes, the metric name will be missing the class name.
* The nesting of segments in a Transaction Trace should be improved. Right now, transaction traces give a good indication of the order that callbacks run on the IOLoop, but they do not group together callbacks that belong to the same coroutine, nor do they show how callbacks relate to each other.
* Transaction Traces mislabel time spent in "Application code". Because the Tornado 4 instrumentation traces all callbacks that run on the IOLoop, nearly everything that happens in a transaction is recorded. Very little is uninstrumented "Application code". When you see "Application code" time in a transaction trace, that usually means that the IOLoop was either busy running callbacks belonging to another transaction, or was waiting and not doing any work. This will be made clearer in a future release.
* In the current version of the agent, the Total Time for a transaction will always equal the duration of the transaction. In future versions, we may begin measuring the time spent waiting for asynchronous External Traces and Datastore Traces to return results, which will increase the Total Time for a transaction, making it possible to have a Total Time greater than the duration of the transaction.
* When using `tornado.httpclient`, no Cross Application Tracing headers are added to the outgoing requests. (This is true for both `HTTPClient` and `AsyncHTTPClient`.) That means that the application that the `httpclient` connects to will not show up in any of the following: trace maps, transaction maps, and service maps.
* Asynchronous External Traces only trace the initial HTTP connection. They do not trace the time for the response to come back.
* If you monitor your Tornado 4 application with synthetic monitoring, the Python agent will not capture transaction traces for synthetic checks, so you will be unable to connect your synthetic results to APM transaction traces.
* Measuring thread utilization is disabled for Tornado applications.
* Exceptions thrown in `RequestHandler.initialize()` are not recorded.
* Use of Tornado's built-in multi-process mode to start multiple processes and have them all share the same port is untested and unsupported.
* Use of `tornado.wsgi.WSGIAdapter` and `tornado.wsgi.WSGIContainer` is untested and unsupported.
* Use of `tornado.platform.asyncio` to bridge between `asyncio` and Tornado IOLoop is untested and unsupported. Currently, the agent only supports the use of the `tornado.ioloop.IOLoop`.
* Use of the `async` and `await` keywords is untested and unsupported.
* Integration with `Twisted` is untested and unsupported.
