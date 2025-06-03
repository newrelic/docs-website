---
subject: Python agent
releaseDate: '2015-07-29'
version: 2.54.0.41
downloadLink: 'https://pypi.python.org/pypi/newrelic'
metaDescription: Release notes for Python Agent 2.54.0.41
redirects:
  - /docs/release-notes/agent-release-notes/python-release-notes/python-agent-2540x
---

### Notes

This release of the Python agent adds the ability to strip exception messages from error traces, in order to prevent the inadvertent capture of sensitive information.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from our [download site](https://download.newrelic.com/python_agent/release/).

### New Features

* Allowing Exception Messages

Because an exception message can contain sensitive information, the agent now provides the ability to strip exception messages before sending error traces to APM. Exception messages will be stripped automatically in [high-security mode](/docs/accounts-partnerships/accounts/security/high-security).

For exception messages you know to be safe, you can add them to an allow list so that those messages are passed unaltered to APM. Two new configuration settings control this feature: [`strip_exception_messages.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#strip_exception_messages_enabled) and `strip_exception_messages.whitelist`.

### Bug Fixes

* `capture_request_params` API disabled for high-security mode

When operating in high-security mode, the agent should not capture query string parameters. However, prior to this release, it was possible to call `newrelic.agent.capture_request_params(flag=True)`, even if the agent was in high-security mode, and the agent would capture and report query string parameters. Now, the `capture_request_params` API call does not override the `capture_params` setting when the agent is in high-security mode, so query parameters are not captured.
