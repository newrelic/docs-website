---
subject: Python agent
releaseDate: '2024-01-25'
version: 9.6.0
downloadLink: 'https://pypi.python.org/pypi/newrelic'
features: ['Support dictionary type logs in NewRelicLogForwardingHandler', 'Support logging formatters in NewRelicLogForwardingHandler']
bugs: ['Fix a bug when specifying processors in structlog']
security: []
---

## Notes

This release of the Python agent fixes a bug when specifying processors in [structlog](https://pypi.org/project/structlog/), and updates the `NewRelicLogForwardingHandler` to support dictionary type logs and formatters.

Install the agent using `easy_install/pip/distribute` via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or download it directly from the [New Relic download site](https://download.newrelic.com/python_agent/release).

## New features

* **Support dictionary type logs in `NewRelicLogForwardingHandler`**

  * Dictionary type log messages are now supported in `NewRelicLogForwardingHandler` when passed as the log message, or when a custom formatter returns a dictionary.
  * The key `message` will be extracted if available and treated as the log message, and any other items will be considered context data attributes and prefixed with `message.`.
    * These attributes are subject to the same filtering rules as other context data. The `message.` prefix is not considered when filtering attributes from logs.
    * To report these attributes, [enable context data forwarding](/docs/agents/python-agent/configuration/python-agent-configuration#application_logging.forwarding.context_data.enabled) and optionally configure [include](/docs/agents/python-agent/configuration/python-agent-configuration#application_logging.forwarding.context_data.include) and [exclude](/docs/agents/python-agent/configuration/python-agent-configuration#application_logging.forwarding.context_data.exclude) rules to filter the allowed attributes.

* **Support logging formatters in `NewRelicLogForwardingHandler`**
  * Logging formatters added with `setFormatter()` are now supported, and may return a string or dicitionary log message type to be forwarded to New Relic.

## Bug fixes

* **Fix a bug when specifying processors in [structlog](https://pypi.org/project/structlog/)**
  * Previously, there was a bug in the structlog instrumentation where `processors` was assumed to be list type. Now the instrumentation supports processors of all iterable types.

## Support statement

We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read [more](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/) about keeping agents up to date.

See the New Relic Python agent [EOL policy](/docs/apm/agents/python-agent/getting-started/python-agent-eol-policy/) for information about agent releases and support dates.
