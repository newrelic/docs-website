---
subject: 'Python agent'
releaseDate: '2024-11-18'
version: 10.3.0
downloadLink: 'https://pypi.python.org/pypi/newrelic'
features: ['Add Valkey support', 'Add TOML configuration file support', 'Add protobuf v5 support for infinite tracing', 'Add support for attaching custom attributes to logs', 'Add support for attaching labels to logs', 'Minor cleanup of HTTPX instrumentation']
bugs: ['Collect module information periodically']
security: []
---

## Notes

This release of the Python agent adds support for Valkey, configuration via TOML file, protobuf v5 for infinite tracing, attaching custom attributes and labels to log events, and some minor cleanup of HTTPX instrumentation. HTTP/2 support was validated for [Daphne](https://pypi.org/project/daphne/), [Hypercorn](https://pypi.org/project/Hypercorn/), and [HTTPX](https://pypi.org/project/httpx/). Module information is now collected periodically which fixes a bug where the CPU usage would spike on application startup.

The Python agent now allows you to opt-in to adding your custom tags (labels) to agent-forwarded logs. With custom tags on logs, platform engineers can easily filter, search, and correlate log data for faster and more efficient troubleshooting, improved performance, and optimized resource utilization. To learn more about this feature see the [documentation](/docs/logs/logs-context/Custom-tags-agent-forwarder-logs).
 
Install the agent using `easy_install/pip/distribute` via the [Python Package Index](https://pypi.python.org/pypi/newrelic) or download it directly from the [New Relic download site](https://download.newrelic.com/python_agent/release).

## New features

* Add support for Valkey

  * Add instrumentation for [Valkey](https://pypi.org/project/valkey/). Thanks [@jairhenrique](https://github.com/jairhenrique) for the contribution!
  
* Add TOML configuration file support  

  * Support to read TOML configuration is now available. Thanks [@Tatsh](https://github.com/Tatsh) for the contribution!
  
* Add infinite tracing pb2 file for protobuf v5

  * This adds an additional pb2 file used for infinite tracing that is compatible with [protobuf](https://pypi.org/project/protobuf/) v5. 

* Add support for attaching custom attributes to logs

  * A new configuration option has been added called `application_logging.forwarding.custom_attributes` that will add custom attributes to all log events when set.

* Add support for attaching labels to log events

  * Labels as attributes can now be added to log events. When `application_logging.forwarding.labels.enabled` is set the values in `labels` will be added to all log events. Labels can be excluded by setting `application_logging.forwarding.labels.exclude`.

## Enhancements

* Minor cleanup of HTTPX instrumentation

  * Some minor cleanup was done in the HTTPX instrumentation.

* Validate HTTP/2 support

  * Added tests to ensure HTTP/2 support for the following frameworks:
    * [Daphne](https://pypi.org/project/daphne/)
    * [Hypercorn](https://pypi.org/project/Hypercorn/)
    * [HTTPX](https://pypi.org/project/httpx/)
    
## Bug fixes

* Collect module information from application periodically instead of at startup

  * Previously, the New Relic Python agent collected the application's module information all at once during startup. In some extreme cases this would cause a large spike in CPU usage. This enhancement allows the agent to do this incrementally throughout the application's operation, preventing potential memory spikes during agent startup.
  
## Support statement

We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read [more](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/) about keeping agents up to date.

See the New Relic Python agent [EOL policy](/docs/apm/agents/python-agent/getting-started/python-agent-eol-policy/) for information about agent releases and support dates.
