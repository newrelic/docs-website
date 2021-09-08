---
subject: Python agent
releaseDate: '2012-11-07'
version: 1.7.0.31
metaDescription: Release notes for Python Agent 1.7.0.31.
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes:

This release of the Python agent focuses on providing a low-overhead thread profiler which can monitor and record executing threads for a specified time, without affecting the customer experience.

For a list of known issues with the Python agent see our online help article on the [status of the Python agent](https://newrelic.com/docs/python/status-of-python-agent).

### New features:

* Low-overhead thread profiler. A profiling session can be initiated for a period from 2 to 10 minutes. The profiler will periodically sample what all the executing threads are doing, aggregating the results together to get a statistical snapshot of where in your application most time is being spent.

### Bug fixes/Improvements:

* Importing of the greenlet module was resulting in the capacity analysis report metrics being disabled, even though it was meant to only be disabled when specifically using a coroutine based WSGI server such as gevent and eventlet mode of gunicorn.
* Improvements to the instrumentation wrapper applied to the Django view handler function so that code which tries to compare the view handler to an expected value should work. Note that this is dependent upon using an equality test rather than an identity test.
* Reverted prior change which stripped the instrumentation wrapper from the Django view handler when it was passed to any Django view middleware. Improvements to the instrumentation wrapper should remove the need to do this. Having the view handler passed in with the wrapper applied is required to ensure that calls to the view handler are tracked properly where the view handler is called from within the view middleware.
* Although not strictly required due to improvements to the instrumentation wrapper applied to a Django view handler, strip the wrapper when a view handler is passed into django.core.urlresolvers.reverse() function to ensure it can correctly determine the URL mapping to the view handler.
* Disable automatic RUM header/footer insertion when using Django 1.5 and the new streaming HTTP response object is returned. This is being disabled so that the response is not buffered, thereby interfering with the streaming process. If streaming a HTML response and RUM reporting is still required, the RUM header and footer will need to be [added manually](https://newrelic.com/docs/python/real-user-monitoring-in-python).
* Instrumentation of the feedparser module was causing an exception when a file like object rather than a string was passed to the feedparser.parse() function.
* Tastypie instrumentation was failing to be applied if using Python 2.5.
