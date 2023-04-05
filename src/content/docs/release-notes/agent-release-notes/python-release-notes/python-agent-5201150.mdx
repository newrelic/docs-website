---
subject: Python agent
releaseDate: '2020-10-06'
version: 5.20.1.150
downloadLink: 'https://pypi.python.org/pypi/newrelic'
---

## Notes

This release of the Python agent adds support for Python 3.9 and includes bug fixes.

The agent can be installed using easy_install/pip/distribute via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or can be downloaded directly from the New Relic [download site](https://download.newrelic.com/python_agent/release).

## Bug Fixes

* **Duplicate warnings were logged repeatedly when using the agent with Python 3**

  The agent internally suppressed any warnings generated when data was sent via HTTP to New Relic in a way that caused the warning filters to mutate. This caused the cache of already printed warnings to be cleared, resulting in duplicate warnings after every data harvest. The agent no longer mutates the process warning filters on a background thread, resulting in consistent warning behavior.
* **AttributeError when passing an inactive transaction into ExternalTrace.generate_request_headers**

  When passing an inactive transaction into ExternalTrace.generate_request_headers, an AttributeError was generated. This agent version contains additional validation for the transaction argument in ExternalTrace.generate_request_headers.
* **The infinite tracing host configuration value did not have sufficient validation**

  When passing a URL or other invalid host to the infinite tracing host configuration, the agent accepted this value unchecked to use in the host parameter for later connections via grpc. The agent now validates this configuration and attempts to correct for invalid hosts if it is able to detect the host. If a host is not detected, the agent automatically falls back to infinite tracing disabled and logs an error.
