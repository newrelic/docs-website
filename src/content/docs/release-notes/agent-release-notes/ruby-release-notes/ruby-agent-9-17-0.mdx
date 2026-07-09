---
subject: Ruby agent
releaseDate: '2025-01-29'
version: 9.17.0
downloadLink: https://rubygems.org/downloads/newrelic_rpm-9.17.0.gem
features: ["Support Ruby 3.4.0", "Add instrumentation for aws-sdk-firehose", "Kubernetes APM auto-attach - new agent version precedent", "Add health checks when the agent runs within Agent Control", "Add Redshift as recognized ActiveRecord adapter", "Add instrumentation for aws-sdk-kinesis"]
bugs: ["Stop emitting inaccurate debug-level log about deprecated configuration options", "Do not attempt to decorate logs with `nil` messages", "Stop renaming final Grape segment"]
security: []
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If you can't upgrade to the latest version, update your agents to a version no more than 90 days old. Read more about [keeping agents up to date](/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).

  See the New Relic Ruby agent [EOL policy](https://docs.newrelic.com/docs/apm/agents/ruby-agent/getting-started/ruby-agent-eol-policy/) for information about agent releases and support dates.
</Callout>

## v9.17.0

- **Feature: Support Ruby 3.4.0**

  The agent now supports Ruby 3.4.0. We've made incremental changes throughout the preview stage to reach compatibility. This release includes an update to the Thread Profiler for compatibility with Ruby 3.4.0's new backtrace format. [Issue#2992](https://github.com/newrelic/newrelic-ruby-agent/issues/2992) [PR#2997](https://github.com/newrelic/newrelic-ruby-agent/pull/2997)
  
- **Feature: Add instrumentation for aws-sdk-firehose**

  The agent now has instrumentation for the [aws-sdk-firehose](https://rubygems.org/gems/aws-sdk-firehose) gem. [PR#2973](https://github.com/newrelic/newrelic-ruby-agent/pull/2973)

- **Feature: Kubernetes APM auto-attach - new agent version precedent**

  Previously, when a customer installed the Ruby agent via [Kubernetes APM auto-attach](https://docs.newrelic.com/docs/kubernetes-pixie/kubernetes-integration/installation/k8s-agent-operator/) and also had the Ruby agent listed in their `Gemfile`, the agent version in `Gemfile` would take precedence. Now, the agent version installed by auto-attach takes priority. [PR#3018](https://github.com/newrelic/newrelic-ruby-agent/pull/3018)

- **Feature: Add health checks when the agent runs within Agent Control**

  When the agent is started within an [Agent Control](https://docs-preview.newrelic.com/docs/new-relic-agent-control) environment, a health check file will be created at the configured file location for every agent process. By default, this location is: '/newrelic/apm/health'. The health check files will be updated at the configured frequency, which defaults to every five seconds. [PR#2995](https://github.com/newrelic/newrelic-ruby-agent/pull/2995)

- **Feature: Add Redshift as recognized ActiveRecord adapter**

  When the agent does not recognize an ActiveRecord adapter, the host, port, and database name information is not added to the datastore span. Redshift will now be treated like PostgreSQL, and the agent will save the host, port, and database name on the span. [PR#3032](https://github.com/newrelic/newrelic-ruby-agent/pull/3032)

- **Feature: Add instrumentation for aws-sdk-kinesis**

  The agent now has instrumentation for the [aws-sdk-kinesis](https://rubygems.org/gems/aws-sdk-kinesis) gem. It will record message broker segments for `get_records`, `put_record`, and `put_records` operations. All other operations will record standard segments. [PR#2974](https://github.com/newrelic/newrelic-ruby-agent/pull/2974)

- **Bugfix: Stop emitting inaccurate debug-level log about deprecated configuration options**

  In the previous major release, we dropped support for many `disable_library_name` configuration options in favor of `instrumentation.library_name`. Previously, a DEBUG level log warning appeared whenever `disable_*` options were set to `true`, even for libraries (e.g. Action Dispatch) without equivalent `instrumentation.*` options:

```json
  >DEBUG : [DEPRECATED] configuration disable_library_name for library_name will be removed in the next major release. Use instrumentation. library_name with one of ["auto", "disabled", "prepend", "chain"]
```

  This inaccurate warning has been removed. If you are disabling instrumentation using `instrumentation.library_name: disabled` or `NEW_RELIC_INSTRUMENTATION_LIBRARY_NAME=disabled`, please verify the option exists by consulting our [configuration documentation](https://docs.newrelic.com/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#instrumentation). If the option does not exist, check the ['Disabling' section](https://docs.newrelic.com/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#disabling) to see if there is a related option. We apologize for the confusion. [PR#3005](https://github.com/newrelic/newrelic-ruby-agent/pull/3005)

- **Bugfix: Do not attempt to decorate logs with `nil` messages**

  The agent no longer attempts to add New Relic linking metadata to logs with `nil` messages. Thank you, [@arlando](https://github.com/arlando) for bringing this to our attention! [Issue#2985](https://github.com/newrelic/newrelic-ruby-agent/issues/2985) [PR#2986](https://github.com/newrelic/newrelic-ruby-agent/pull/2986)

- **Bugfix: Stop renaming final Grape segment**

  Previously, the agent renamed the final segment in Grape transactions to `"Middleware/Grape/#{class_name}/call"`. This was a part of an old instrumentation pattern that is no longer relevant. Many thanks to [@seriousdev-gh](https://github.com/seriousdev-gh) for bringing this issue to our attention and along with a great reproduction and suggested fix. [PR#2987](https://github.com/newrelic/newrelic-ruby-agent/pull/2987).


