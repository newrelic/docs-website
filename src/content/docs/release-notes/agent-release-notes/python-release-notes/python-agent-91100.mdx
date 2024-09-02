---
subject: 'Python agent'
releaseDate: '2024-06-13'
version: 9.11.0
downloadLink: 'https://pypi.python.org/pypi/newrelic'
features: ['Add agent_language to lambda metadata', 'Optimize plugins list capturing', 'Add support for injecting the agent into Kubernetes', 'Add support for psycopg 3.0+']
bugs: ['Fix Large Language Model event duration units', 'Fix crash when using OpenAI with_raw_response', 'Fix crash when using OpenAI with_streaming_response', 'Fix a crash in ASGI when the Content-Length header is missing']
security: []
---

## Notes

This release of the Python agent adds agent_language to lambda metadata, support for injecting the agent into Kubernetes, support for [psycopg 3.0+](https://pypi.org/project/psycopg/), optimizes plugins list capturing, fixes the Large Language Model event duration units, a crash in ASGI when the Content-Length header is missing, a crash when using [OpenAI](https://pypi.org/project/openai)'s `.with_raw_response.` and `.with_streaming_response.`.

Install the agent using `easy_install/pip/distribute` via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or download it directly from the [New Relic download site](https://download.newrelic.com/python_agent/release).

## New features

* **Add `agent_language` to lambda metadata**

  * Add `agent_language` to collected lambda metadata.

* **Optimize plugins list capturing**

  * Skip checking for a package version on newrelic hooks that we know do not have versions.

* **Add support for injecting the agent into Kubernetes**

  * Updates the bootstrap sitecustomize file to support injecting the agent into a Kubernetes cluster.
  * A full product for agent injection in Kubernetes will be coming soon in public preview.
  * A new informational only setting called `k8s_operator.enabled` (with `NEW_RELIC_K8S_OPERATOR_ENABLED` as an environment variable) was added, which is used to report when the agent is injected into a Kubernetes cluster. This setting does **not** enable/disable this function of the agent.

* **Add support for [psycopg 3.0+](https://pypi.org/project/psycopg/)**

  * New instrumentation for psycopg 3.0+ has been added, providing database tracing for both the `Connection` and `AsyncConnection` classes.

## Bug fixes

* **Fix Large Language Model event duration units**

  * Previously, durations on LLM events were recorded in seconds which did not match some of the other language agents. This has been changed to be milliseconds.

* **Fix crash when using [OpenAI](https://pypi.org/project/openai)'s `.with_raw_response.`**

  * Previously, an exception would be raised inside the instrumentation when `.with_raw_response.` was used. This no longer happens, the instrumentation successfuly records LLM data when `.with_raw_response.` is used.

* **Fix crash when using [OpenAI](https://pypi.org/project/openai)'s `.with_streaming_response.`**

  * Previously, an exception would be raised inside the instrumentation when `.with_streaming_response.` was used. This no longer happens, the instrumentation is just skipped.

* **Fix a crash in ASGI when the Content-Length header is missing**

  * Previously, an exception would be raised inside the instrumentation that injects the browser agent when an ASGI response was missing the Content-Length header. This issue has been fixed.

## Support statement

We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read [more](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/) about keeping agents up to date.

See the New Relic Python agent [EOL policy](/docs/apm/agents/python-agent/getting-started/python-agent-eol-policy/) for information about agent releases and support dates.
