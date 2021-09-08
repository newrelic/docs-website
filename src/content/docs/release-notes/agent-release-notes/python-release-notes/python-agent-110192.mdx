---
subject: Python agent
releaseDate: '2012-01-10'
version: 1.1.0.192
metaDescription: Release notes for Python Agent 1.1.0.192.
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Fixes:

* Addressed a performance issue which would cause high CPU load, when parsing SQL queries which had a large number of values for a SQL 'IN' clause.
* Agent version was not reported in form A.B.C.D in all cases. This was causing UI to warn that Python agent was out of date even when running version newer than the minimum recommended version.
* When 'feedparser' module is used, now correctly track external web service requests where URI used 'feed' or feed:http' for scheme.
* Illegal non ASCII characters in a URL could cause the agent to generate Unicode conversion warnings or outright fail a request with an exception where the character sequence could not be decoded to Unicode using the Python system default encoding.
* The table name for a SQL query was not being correctly derived when the SQL contained a select sub query or table name aliases were being used.
* Number of nodes captured for a slow transaction trace was not being capped properly resulted in too much data being sent through to core application. This could result in details of slow transaction being rejected by core application, or result in a timeout in UI when attempting to display the slow transaction trace.
* SQL calls made using 'psycopg2' were failing where optional parameters argument was not supplied to database cursor 'execute()' method and the SQL contained a '%' character such as in a 'LIKE' clause.
* Was not ignoring exception of type 'bottle.HTTPError' raised within application using Bottle. This is not a true exception but is used to programmatically indicate a non 200 HTTP response so shouldn't have been recorded as an error.
* The 'django-piston' instrumentation was failing when an error occurred in users handler and it tried to generate an error response. This was because 'django-piston' was assuming that a handler would always be a normal function. It would therefore fail for a decorator/wrapper implemented using a class object as is used by the agent instrumentation.

### New features:

* Added support for capturing explain plans for slow SQL when using MySQL and PostgreSQL.
* Added preliminary public API for manually instrumenting additional functions in user code and interacting with the current transaction to override how and what details about the transaction are recorded.
* Added the 'transaction_tracer.function_trace' setting in the agent configuration file for providing a simplified way of specifying additional Python functions for which time metrics should be collected. Time spent in these functions will then appear in web transaction performance break down and slow transaction traces.
* Added new or improved support for tracking external web service requests made using the 'urllib', 'urllib2', 'urllib3', 'httplib', 'httplib2' and 'requests' modules. Note that only time taken for the initial connect for the HTTP connection may be recorded. Uninstrumented time which appears immediately after an external web service request in a slow transaction trace made using one of these modules, will therefore possibly be the time then taken to send request data, wait for a response and consume that response data.
* Added support for tracking external requests to a Solr service using the 'pysolr' and 'solrpy' modules. Time spent making the request will show on the overview charts as Solr time. Metrics for individual types of requests will also be listed in web transaction performance breakdown and slow transaction traces.
* Added Django application called 'newrelic.extras.framework_django' which explicitly adds in 'newrelic_tags' tag library containing template tags for manually adding in RUM header and footer. Reliance on the old method whereby template tag library was added automatically is now deprecated and will be removed in a future version.
* Added support for Bottle 0.10.X in Bottle specific instrumentation.
* Added support for Redis using the 'redis' module. Support consists of tracking time spent connecting to and issuing commands against the Redis service.
* Added support for MongoDB using the 'pymongo' module. Support consists of tracking time spent connecting to and issuing commands against the MongoDB service.

### Features changed:

* The 'capture_params' setting was defaulting to 'true' rather than 'false' resulting in the request query string parameters being reported against errors and slow transaction traces. If upgrading you will need to change the agent configuration file you are already using to change it to 'false' if capturing parameters is not desired.
* Rollup metrics against web transactions for external web service requests will now only be recorded against the host and will not be broken out based on resource requested on the remote service.
