---
subject: Python agent
releaseDate: '2017-02-23'
version: 2.80.0.60
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

## Notes

This release of the Python agent enhances our [introductory support for Tornado 4](/docs/agents/python-agent/hosting-mechanisms/introductory-tornado-4-support), most notably by adding support for `tornado.curl_httpclient`.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release/).

## New Features

* **Tornado 4 curl_httpclient support**

  Previously, the agent's Tornado 4 instrumentation only supported the default `tornado.simple_httpclient`. With this release, support has been added for `tornado.curl_httpclient` as well.
* **Tornado 4 ZeroMQ IOLoop support**

  Using `ZMQIOLoop` in place of the default Tornado `IOLoop` is now supported for Tornado 4 applications.

## Improved Feature

* **Improved transaction names for Django REST Framework**

  When using the Python agent with Django REST Framework and Python 3, function-based views wrapped with the `rest_framework.decorators.api_view` decorator would result in transactions with names based on the decorator (`WrappedAPIView.handler`) rather than names based on the original view function. (This did not affect applications running with Python 2.)

  With this release, the transaction names for these wrapped views are now based on the name of the original view function in both Python 2 and Python 3.

## Bug Fix

* **End transactions correctly with Tornado 4 @asynchronous decorator**

  When the agent records a transaction for a Tornado 4 `RequestHandler` method that is decorated with the `@tornado.web.asynchronous` decorator, the transaction should remain open until `RequestHandler.finish()` is called. Prior to this release, there were some circumstances where the agent closed the transaction prematurely, resulting in transaction durations that were too short. This has now been fixed.
