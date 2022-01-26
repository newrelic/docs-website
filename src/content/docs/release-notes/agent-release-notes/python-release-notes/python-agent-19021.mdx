---
subject: Python agent
releaseDate: '2012-12-19'
version: 1.9.0.21
metaDescription: Release notes for Python Agent 1.9.0.21.
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes:

This release of the Python agent addresses an issue with under reporting of memory use on Linux, as well as other minor bug fixes and enhancements.

For a list of known issues with the Python agent see our online help article on the [status of the Python agent](https://newrelic.com/docs/python/status-of-python-agent).

### New features:

* Added support for automatically wrapping the WSGI application entry point when using the Paste HTTP server.
* Custom metrics can now be reported via the public agent API by supplying an appropriate application object as an additional argument to 'newrelic.agent.record_custom_metric()'.
* Added support for the 'psycopg2ct' database client module for PostgreSQL.
* When needing to communicate via a firewall, the proxy settings can now be set via environment variables in addition to being able to be set in the agent configuration file.
* The number of CPU cores is now being reported in the agent environment and displayed in the UI.
* A warning will now be logged in the agent log file if an older version of uWSGI is being used which has bugs with its conformance to the WSGI specification. Such older uWSGI versions would see incorrect data being reported due to the bug in uWSGI.
* A warning will now be logged in the agent log file if uWSGI is being used and the 'enable-threads' option is not being supplied to uWSGI to enable threading within the Python interpreter, a feature which is a mandatory requirement for the Python agent to be able to work.
* A range of additional logging and debugging options have been added to allow our support team to better help you when you are having issues with setting up the agent.

### Bug fixes/Improvements:

* Addressed problem where memory usage was being under reported on Linux systems. The degree to which memory usage was under reported was dependent on the memory page size the system was using. If affected you can expect to see memory usage being reported jump up as it reports the correct value.
* If the local Python installation is already using a 'sitecustomize.py' file, the agent's own 'sitecustomize.py' file will ensure that the existing copy is imported and code in it executed so that existing definitions are still applied.
* Installation of the agent could fail under buildout due to a missing Python future import for the Python with statement under Python 2.5.
* Made parsing of URLs more tolerant to malformed URLs in web external calls. The agent was encountering an error when the port number of a URL was not an integer, resulting in the data for that transaction being discarded.
* Use of raw greenlets from within a transaction was failing causing an exception and the users web request to typically fail with a HTTP 500 error response.
* Configuration of the agent will no longer fail on startup if there is no 'newrelic' section in the configuration file.
