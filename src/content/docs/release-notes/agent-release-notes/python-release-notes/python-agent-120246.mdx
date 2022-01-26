---
subject: Python agent
releaseDate: '2012-03-27'
version: 1.2.0.246
metaDescription: Release notes for Python Agent 1.2.0.246
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Bug fixes:

* Added full support for being able to use agent package with buildout. Previously the 'newrelic-admin' script was not installed correctly when buildout was being used to manage package installation.
* Added support for versions 2.2 and 2.5 of the distributed task queuing system [Celery](http://celeryproject.org/).
* Added support for older 'redis' client versions which did not separate commands into 'StrictRedis' and 'Redis' client objects.
* The database table name was not always extracted properly from SQL queries where sub selects were being used, especially when additional bracketing was being used for readability. Usually this was occuring where hand crafted SQL was being generated rather than being automatically generated through an ORM or DAL.
* Type handler registration in psycopg2 client module would fail due to agent instrumentation wrapper around connection and cursor objects.
* Javascript header added into response of type 'text/html' when Django being used and end user monitoring enabled, would be placed into wrong location of '' element if 'X-UA-Compatible' meta tag existed. This would cause issues for IE browser clients which meta tag related to.

### New features:

* Server side configuation is now available for the Python agent. This will be of most use for Heroku installations where there is by default no agent configuration file for defining local override settings.
* Distiguish time spent invoking the WSGI application for a request and the subsequent processing of any iterable returned by the WSGI application. These will show as nodes 'WSGI/Application' and 'WSGI/Response' in performance breakdowns and slow transaction traces. This mainly helps where iterable is a generator which performs work for each yielded item as provides proper context. Time spent in writing back a large reponse to a slow HTTP client will also be more visible.
* Distinguish separately the time spent in the top level WSGI application callable where the agent WSGI middleware wrapper is being applied. This will be the node which gets listed immediately under 'WSGI/Application' in a slow transaction trace.
* For Django, record separately time spent in processing certain types of form POSTs. This helps to show where being spent processing a large data upload.
* Show content length and content type details for a request in slow transaction and error details.
* Show content length for a response in slow transaction and error details.

### Features changed:

* Longer timeout when doing an agent test using the 'validate-config' command of the 'newrelic-admin' script. The short timeout was previously causing some users with slow DNS or networks to see the test as failing.
