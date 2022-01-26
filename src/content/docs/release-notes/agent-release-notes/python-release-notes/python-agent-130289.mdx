---
subject: Python agent
releaseDate: '2012-06-12'
version: 1.3.0.289
metaDescription: Release notes for Python Agent 1.3.0.289.
---

<Callout variant="important">
  The end-of-life date for this agent version is July 29, 2019. To update to the latest agent version, see [Update the agent](/docs/agents/manage-apm-agents/installation/update-new-relic-agent). For more information, see [End-of-life policy](/docs/agents/manage-apm-agents/maintenance/new-relic-agent-plugin-end-life-policy).
</Callout>

### Notes:

This release of the Python agent has focused on improving the way the agent communicates with the New Relic core application. This includes improved logging and error handling, but also adds support for SSL and connecting via a proxy when the monitored host is located behind a firewall.

For a list of known issues with the Python agent see our online help article on the [status of the Python agent](https://newrelic.com/docs/python/status-of-python-agent).

### Changed features:

* The request method for a call to an external web service, when able to be collected by instrumentation, is now shown against a web external node in a slow transaction trace where as previously it showed the path segment of the URL. The URL, minus embedded user/password and query string is instead now shown as a label when hovering over the web external node in the slow transaction trace details.
* Improved logging and error handling when communicating with the New Relic core application. Many messages previously logged as errors will now be logged as warnings and an error only logged when a recurring problem is detected. This should reduce emails triggered from errors logged via the Python logging module to only those that may actually require action.
* Significant error messages or warnings will be output to standard output when running the agent test via the 'newrelic-admin validate-config' command. This ensures that it will be easier to detect when the test has failed due to network connectivity or license key issues.

### New features:

* Connecting to the New Relic core application using a secure SSL connection is now supported. This is enabled by setting the 'ssl' setting in the agent configuration file to 'true'.
* Connecting to the New Relic core application via a proxy is now supported. This is enabled by setting the 'proxy_host' and 'proxy_port' settings in the agent configuration file. If a secure SSL connection is desired, the 'ssl' setting can be set to 'true' at the same time. If the proxy requires a user name and password, the 'proxy_user' and 'proxy_pass' settings can be additionally set.
* When sending collected data to the New Relic core application it will be compressed when over a certain size to cut down on the amount of data being sent.
* The Python agent now includes its own self instrumentation and profiling capabilities to allow New Relic to monitor the performance of the agent itself and help debug any performance issues reported by a user which may occur in rare circumstances with certain web applications.

### Bug fixes:

* Where a user name and password were being included as part of a URL for a call to an external web service, eg., 'user:[pass@localhost](mailto:pass@localhost)/', that the Python agent was instrumenting, the details were not always being scrubbed properly from details being reported to the New Relic core application.
