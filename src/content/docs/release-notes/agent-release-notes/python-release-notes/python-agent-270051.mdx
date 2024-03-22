---
subject: Python agent
releaseDate: '2016-09-06'
version: 2.70.0.51
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

### Notes

This release of the Python agent adds support for the improved Django middleware introduced in Django v1.10, and also adds instrumentation for the `boto3` and `awscli` packages.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from our [download site](https://download.newrelic.com/python_agent/release/).

### New Features

* **Django 1.10 Middleware Support**

  As described in [Django Enhancement Proposal 5](https://github.com/django/deps/blob/master/final/0005-improved-middleware.rst) and in the [Django v1.10 middleware documentation](https://docs.djangoproject.com/en/1.10/topics/http/middleware/), Django introduced a new style of middleware in version 1.10. Previously, Django allowed you to define certain methods on middleware classes: `process_request()` methods would run before the view handler was invoked, and `process_response()` methods would run after the response was generated. Accordingly, the Python agent would instrument these as separate, self-contained methods, and in the Transaction Trace Details view, they would be displayed at the same level as the view handler in the segments hierarchy.

  With the improved version in Django v1.10, the middleware classes form a "chain", and each middleware calls the next middleware, until it reaches the end of the chain and calls the actual view. This means that new-style middleware acts as a wrapper, and each one is nested inside the previous one. As a result, in the Transaction Trace Details view, each middleware will be nested inside the previous one, and the actual view handler will be displayed nested inside the innermost middleware class. Furthermore, the duration of each middleware segment will include the duration of the middleware nested inside it.

  Because Django v1.10 is backwards-compatible with the old-style middleware, the agent also supports instrumenting old-style middleware in Django v1.10
* **Boto3 and AWS CLI Support**

  With this release, API calls to Amazon Web Services endpoints made with the `boto3` and `awscli` packages will be recorded as `External Traces` and will be visible in the `External Services` tab in APM. This is achieved by instrumenting the `botocore` library, which both `boto3` and `awscli` utilize.

### Bug Fixes

* **Proxy Scheme Output of `network-config` Command**

  Prior to this release, the `newrelic-admin network-config` command would output the incorrect proxy scheme. That is now fixed.
* **Debug Console Works with Python 3**

  The `newrelic-admin debug-console` is now compatible with Python 3.
