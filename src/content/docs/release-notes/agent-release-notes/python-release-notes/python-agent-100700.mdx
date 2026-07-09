---
subject: 'Python agent'
releaseDate: '2025-03-06'
version: 10.7.0
downloadLink: 'https://pypi.python.org/pypi/newrelic'
features: ['Add support for asynchronous AWS Bedrock LLM calls']
bugs: ['Fix crash in aiomysql instrumentation', 'Fix segfaults with greenlets']
---

## Notes

This release of the Python agent adds support for asynchronous AWS Bedrock LLM calls in [aioboto3](https://pypi.org/project/aioboto3/), a fix for a segfault with [greenlet](https://pypi.org/project/greenlet/)s, a fixed a crash in [aiomysql](https://pypi.org/project/aiomysql/) instrumentation, and reformatted the codebase with [Ruff](https://docs.astral.sh/ruff/).

Install the agent using `easy_install/pip/distribute` via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or download it directly from the [New Relic download site](https://download.newrelic.com/python_agent/release).

## New features

* Add support for asynchronous AWS Bedrock LLM calls

  * Adds instrumentation to support calls to `invoke_model` and `invoke_model_with_response_stream` made on [aioboto3](https://pypi.org/project/aioboto3/) clients


## Bug fixes

* Fix crash in `aiomysql` instrumentation

  * Previously, using `aiomysql.sa` (the included `sqlalchemy` engine) with the agent would result in a crash due to a missing `__await__` method in the instrumentation. This has been corrected.

* Fix segfaults with greenlets

  * Previously, a segfault occured when the maximum number of worker processes were called.  This was due to a combination of using a weak reference for the agent's trace ID caching and greenlet's `greenlet.getcurrent()` retrieval function being called after the last greenlet has already been garbage collected.  This fix allows the worker process to restart without the segfault occurring.

## Changes

* Reformatted entire codebase with Ruff

  * Switched to [Ruff](https://docs.astral.sh/ruff/) linter and reformatted the entire codebase.

## Support statement

We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read [more](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/) about keeping agents up to date.

See the New Relic Python agent [EOL policy](/docs/apm/agents/python-agent/getting-started/python-agent-eol-policy/) for information about agent releases and support dates.
