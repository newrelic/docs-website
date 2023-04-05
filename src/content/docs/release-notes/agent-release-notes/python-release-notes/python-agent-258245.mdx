---
subject: Python agent
releaseDate: '2015-11-25'
version: 2.58.2.45
downloadLink: 'https://pypi.python.org/pypi/newrelic'
metaDescription: Release notes for Python Agent 2.58.2.45.
---

### Notes

This release of the Python agent is a hotfix release to address a problem where the agent could fail to validate the SSL certificate of the New Relic collector in some environments.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from our [download site](https://download.newrelic.com/python_agent/release/).

For a list of known issues with the Python agent, see [Status of the Python agent](https://docs.newrelic.com/docs/python/status-of-python-agent).

### Bug Fix

If the Python agent was used in an environment where the `certifi` package was installed, the Python agent would use the `certifi` CA certificates bundle to validate the certificate of the New Relic collector. However, the latest release of `certifi` (November 20, 2015) removed some older CA certificates with 1024-bit keys.

The SSL certificate for the New Relic collector is cross-signed with both a 1024-bit certificate and a 2048-bit certificate, but in some circumstances, the stronger root certificate was not used for validation. When the 1024-bit certificate was no longer included in the `certifi` bundle, SSL validation would fail. Affected customers would see warnings in their agent log stating "Data collector is not contactable" due to an `SSLError`.

To address this issue, the agent no longer uses the `certifi` CA certificates bundle, nor the certificates bundled with `requests`. Instead, it only uses the CA bundle included with the agent to validate the New Relic collector certificate.
