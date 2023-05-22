---
subject: Python agent
releaseDate: '2019-06-24'
version: 4.20.1.121
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

## Notes

This release of the Python agent includes bug fixes, deprecations, and improved naming behavior for gRPC.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## Feature Enhancements

* **Improved gRPC support**

  The external and transaction pages now show the gRPC method being called in addition to the host and port.
* **Ability to disable sending db.statement as part of traces**

  When db.statement is added to either attributes.exclude or transaction_segments.attributes.exclude, the value will now no longer be sent to New Relic as part of transaction traces or spans.

## Deprecations

* **TransactionContext API is now deprecated**

  The TransactionContext API will be removed in a future release.
* **Tornado instrumentation + feature flag deprecation**

  The existing introductory support for Tornado and feature flags will be removed from a future release. Versions 6.x and newer will be the only versions of Tornado supported in future releases. See [this discussion](https://discuss.newrelic.com/t/python-tornado-support/75613) on the New Relic forums for more details.

## Bug Fixes

* **Fixed a crash when using uvicorn workers with gunicorn**

  When running ASGI applications with gunicorn, the agent would attempt to instrument the application as a WSGI application, resulting in a crash. The agent will no longer attempt to instrument gunicorn applications that are coroutines.
* **Remove logging of license keys**

  The agent logged license keys when data failed to send to New Relic. The agent will no longer log license keys to the agent logs under any circumstance.
* **Fix operation of distributed tracing and cross application tracing when httplib connections are reused**

  When making multiple requests via a single connection with httplib, httplib2, or urllib3, the proper headers will be added to each outgoing request. As a result, cross application tracing and distributed tracing will now operate as expected when reusing connection objects.
