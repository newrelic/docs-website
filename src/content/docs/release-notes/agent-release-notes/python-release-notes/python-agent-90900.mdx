---
subject: Python agent
releaseDate: '2024-04-18'
version: 9.9.0
downloadLink: 'https://pypi.python.org/pypi/newrelic'
features: ['Update Celery instrumentation', 'Add new Langchain vectorstores', 'Add configuration to capture memory usage runtime metrics per process']
bugs: ['Report only raw content dictionary for Anthropic Claude']
security: ['Upgrade internal version of urllib3 to v1.26.18']
---

## Notes

This release of the Python agent updates Celery instrumentation, adds new Langchain vectorstores, adds configuration to capture memory usage runtime metrics per process, fixes a content reporting issue in Anthropic Claude, and upgrades internal version of urllib3 to v1.26.18.

Install the agent using `easy_install/pip/distribute` via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or download it directly from the [New Relic download site](https://download.newrelic.com/python_agent/release).

## Security

* **Upgrade internal version of urllib3 to v1.26.18**

  * Upgrade the internal version of [urllib3](https://pypi.org/project/urllib3/) used in the Python Agent to v1.26.18 to resolve security warnings.

## New features

* **Update Celery instrumentation**

  * Add support for distributed tracing in [Celery](https://pypi.org/project/celery/) over AMQP headers.
  * Remove duplicate function traces for some methods of running tasks.
    * All tasks should now only be instrumented once, and will report either an OtherTransaction, or a FunctionTrace if run under an existing transaction.
  * Fix instrumentation for grouped celery tasks APIs, such as `task.map()`, `celery.group()`, and `celery.chunks()`.
    * Tasks run using `task.map()` or `task.starmap()` will now name tasks in the format `Celery/celery.map/my_task` to allow you to differentiate between map tasks.
    * Individual task runs created by the `map()` and `starmap()` tasks will be traced with a FunctionTrace to capture individual timings.

* **Add new [Langchain](https://pypi.org/project/langchain/) vectorstores**

  * Support for the following Langchain vectorstores: `DuckDB`, `EcloudESVectorStore`, `InMemoryVectorStore`, `PathwayVectorClient`, `VDMS`

* **Add configuration setting to enable capturing of memory usage runtime metrics per process**

  * Add `memory_runtime_pid_metrics.enabled` configuration setting to toggle capturing of memory usage metrics (per process ID only) to reduce Metric Grouping Issues (MGI).

## Bug fixes

* **Report only raw content dictionary for Anthropic Claude**

  * Previously, AWS Bedrock's Anthropic Claude model would report a list of dictionaries of message content. Now it reports a single dictionary of message content.

## Support statement

We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read [more](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/) about keeping agents up to date.

See the New Relic Python agent [EOL policy](/docs/apm/agents/python-agent/getting-started/python-agent-eol-policy/) for information about agent releases and support dates.
