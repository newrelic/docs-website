---
subject: Python agent
releaseDate: '2016-04-20'
version: 2.64.0.48
downloadLink: 'https://pypi.python.org/pypi/newrelic'
metaDescription: Release notes for Python Agent 2.64.0.48.
---

### Notes

This release of the Python agent is a bug fix release which improves our introductory support for instrumenting Tornado 4 applications. Full details about the status of our Tornado 4 support can be found on our [Introductory Tornado 4 support](https://docs.newrelic.com/docs/agents/python-agent/hosting-mechanisms/introductory-tornado-4-support) page.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from our [download site](https://download.newrelic.com/python_agent/release/).

For a list of known issues with the Python agent, see [Status of the Python agent](https://docs.newrelic.com/docs/python/status-of-python-agent).

### New Feature

* New attributes captured for Tornado 4 applications

  The following attributes are now captured for requests made to Tornado 4 applications:

  * `request.headers.accept`
  * `request.headers.host`
  * `port`

### Bug Fixes

* Potentially too many metrics created for `tornado.httpclient` function traces

  The `tornado.httpclient` instrumentation for Tornado 4 applications could cause a ["metric grouping issue"](https://docs.newrelic.com/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues) in the function traces it created, if it was used to make requests to a large number of unique URLs. To address this issue, the URL is no longer included in the name of the function trace.
* Transactions in Tornado 4 applications could be created with invalid agent settings

  In the prior release, if a transaction started before the agent had completed registration with the collector, the transaction could have invalid settings, which would result in various errors in the agent log, including an `AttributeError` when an external call was made during the transaction. These errors only happened at application startup until registration was complete. With this release, transactions cannot start with invalid settings.
* The `httplib2` instrumentation did not process the cross application tracing headers in the response

  Failing to process the response headers resulted in the inability to [link to cross application tracing details in the Transaction Trace Details view](https://docs.newrelic.com/docs/apm/transactions/cross-application-traces/viewing-cross-application-traces), as well as missing `ExternalTransaction` and `ExternalApp` metrics. Now, the `httplib2` instrumentation in the agent processes the cross application tracing headers correctly.

### Known Tornado 4 Limitations Addressed

* Explain plans for queries made with psycopg2's "async mode" are disabled automatically

  Currently, the Python agent does not support explain plans for queries made in psycopg2's "async mode." In the prior release, it was necessary to add the configuration setting `transaction_tracer.explain_enabled = false` to disable explain plans, or else errors would occur during data harvest, potentially causing loss of data. With this release, the agent disables explain plans automatically when async mode is detected.
* Added support for synthetics transaction traces

  Tornado 4 applications will now recognize incoming requests from synthetics and [generate transaction traces for Synthetic requests](https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/using-monitors/collect-synthetic-transaction-traces).

### Status of Tornado 4 Support

A current list of known limitations can be found on our [Introductory Tornado 4 support](https://docs.newrelic.com/docs/agents/python-agent/hosting-mechanisms/introductory-tornado-4-support#h2-Known-limitations) page. No new known limitations have been added since our introductory release (v2.62.0.47). In the next few releases, we plan to continue addressing these issues.
