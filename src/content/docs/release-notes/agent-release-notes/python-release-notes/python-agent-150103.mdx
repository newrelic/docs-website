---
subject: Python agent
releaseDate: '2012-09-04'
version: 1.5.0.103
metaDescription: Release notes for Python Agent 1.5.0.103.
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes:

This release of the Python agent contains capacity analysis reporting, an improved sampling algorithm to ensure a wider sampling of slow transactions and added support for TastyPie, dropbox and facepy modules.

For a list of known issues with the Python agent see our online help article on the [status of the Python agent](https://newrelic.com/docs/python/status-of-python-agent).

### New features:

* Enable capacity analysis reporting where web application is single threaded or multithreaded (but not coroutine based system such as gevent and eventlet). This report helps you determine if you have enough instances deployed to keep up with request load and so tune your configuration for optimal performance.
* Criteria by which slow transaction samples are captured has been changed so as to include slow transactions for a broader range of transactions. Previously the transaction with the slowest overall response time would always be captured and reported. Whether a specific transaction will be preserved as a sample of a slow transaction will now also depend on whether a recent slow transaction had already been captured for it and give preference to recording slow transactions for a different transaction, rather than the same transaction all the time, if it is always the slowest.
* Where TastyPie is being used with Django, instead of all web transactions being handled by TastyPie being labeled against the TastyPie wrapper, the web transactions will now be aggregated against the specific methods of the resource or API object handling the request.
* Added instrumentation for the 'dropbox' Python module to track time spent calling out to the DropBox web service. A call to this web service would have been tracked previously by virtue of the 'dropbox' module internally using the 'httplib' module. This added instrumentation however makes the data collected more accurate as will properly track time spent sending the request and receiving the response. It will also attribute the call to the 'dropbox' module in transaction traces and performance breakdown data.
* Added instrumentation for the 'facepy' Python module to track time spent calling out to the Facebook web service. A call to this web service would have been tracked previously by virtue of the 'facepy' module internally using the 'requests' module. This added instrumentation however allows the call to be attributed to the 'facepy' module in transaction traces and performance breakdown data.
* Added support for gevent &lt; 0.13.7 by way of patching an existing bug in gevent. The specific problem in gevent was patched in version 0.13.7 of that package. This change will allow older versions of gevent to also be used if there is a requirement.

### Bug fixes/Improvements:

* Instrumentation for Genshi templates was failing when the OR operator was used inside of a template.
* If an exception occurred in the first call to read data from wsgi.input to get the request content, it would cause a subsequent exception when recording of response time was being finalised. This wasn't causing any impact on user requests, but would result in any metrics for that request being discarded and an error being logged in the agent log.
