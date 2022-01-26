---
subject: Python agent
releaseDate: '2013-04-09'
version: 1.11.0.55
metaDescription: Release notes for Python Agent 1.11.0.55.
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes

This release of the Python agent introduces a major new feature called X-Ray Sessions. This feature allows you to gain deeper insights into a key transaction's performance by showing transaction traces alongside long-running profiler results.

For a list of known issues with the Python agent see our online help article on the [status of the Python agent](https://newrelic.com/docs/python/status-of-python-agent).

### New features:

* X-Ray Sessions provide more targeted transaction trace samples and thread profiling for web transactions. For full details see our [X-Ray sessions documentation](https://newrelic.com/docs/site/xray-sessions).
* For new agent installations, the agent will now default to using a SSL connection when connecting to our data collector to report any data. If updating from an older agent version, you will however need to manually update your agent configuration file and change the 'ssl' setting to 'true' to always use SSL connections.
* When connecting direct to our data collector over a SSL connection, SSL certificate validation will now be performed to mitigate the possibility of man in the middle attacks.
* Breakdown metrics for transactions are now recorded as unscoped metrics as well as the existing metrics scoped to a web transaction. As custom dashboards can only chart unscoped metrics, what this means is that it is now possible to create custom dashboards that display data on specific breakdown metrics, such as time spent in traced functions. For example, you may wish to chart time spent in creating database connections, or specific middleware and view handler functions.
* When displaying error details, the full path of the exception is now displayed and not just the class name. This makes it easier to correctly identify the full name, with that name then being able to be directly copied into the 'error_collector.ignore_errors' setting of the agent configuration file if it is desired that that exception be ignored.
* Added the 'newrelic.agent.record_custom_metrics()' function to the public API for the agent to allow the recording of many custom metrics in one function call to the agent.

XXXFeatures Changed:

* We have temporarily disabled the generation of CPU burn information for transaction traces. This was displaying inaccurate values after a UI change, but also had an underlying issue whereby it was reporting CPU burn by the whole process and not just the thread handling the request. We are withdrawing the feature until we can improve the accuracy of the reported value.
* We have disabled the ability to get thread profiling information when a WSGI server makes use of coroutine libraries such as gevent or eventlet. This is because the nature of how coroutines are implemented, means we were are not able to generate accurate usable data.

### Bug fixes/Improvements:

* When queueing Celery tasks from a web application, those web transactions were in some cases being wrongly categorised as background tasks. The name of the transaction was also being labelled with a string with the object representation, resulting in metric grouping issues.
* The older version of the 'requests' package we were bundling and were using for any HTTP calls was not closing socket descriptors immediately when a requests session object was disposed of. This could result in a small number of open socket descriptors being held open until the Python garbage collector kicked in and closed them.
* Login credentials supplied as part of a URL, could in some circumstances appear with the URL parameter associated with a web external node in a transaction trace sample.
* Django 1.5 moved which module the 'Http404' exception was declared in. As a result we were no longer correctly ignoring it when catching exceptions to process as errors.
* A check designed to warn against the use of uWSGI versions prior to 1.2.6, which contain a bug which results in the agent recording incorrect response times, was failing on very old uWSGI versions.
* Updated our gevent instrumentation to accommodate a prototype change in gevent 1.0rc1.
* Updated our bottle instrumentation to handle the non numeric version string used in bottle development versions.
* After five minutes of being unable to connect to our data collector to report data, the agent will now internally reset itself, discarding accumulated metric data and require the agent to reregister itself with our core application before collecting data once again. This is to ensure that we do not unnecessarily keep accruing data and causing an increase in memory usage while we cannot contact our data collector.
* Avoid the potential for a web request to deadlock in a situation where a web framework transaction management system made a copy of the object we use to record details about web transactions or background tasks.
