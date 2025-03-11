---
subject: Go agent
releaseDate: '2024-03-27'
version: 3.31.0
downloadLink: 'https://github.com/newrelic/go-agent/tree/v3.31.0'
features: ["go-openai AI library instrumentation", "awsbedrock AI library instrumentation","Dockerfile in the `examples/server` sample app which facilitates the easy creation of a containerized ready-to-run sample app for situations where that makes testing easier"]
bugs: [".Ignore was not ignoring transaction", "Added nil error check in wrap function","Fixed  `WrapBackgroundCore` background logger not sending logs to New Relic","Corrected pgx5 integration example which caused a race condition"]
security: ["`github.com/jackc/pgx/v5` to 5.5.4 in `nrpgx5` integration"," `google.gopang.org/protobuf` to 1.33.0 in `nrmicro` and `nrgrpc` integrations","`github.com/jackc/pgx/v4` to 4.18.2 in `nrpgx` integration"]
---

<Callout variant="important">
  We recommend updating to the latest agent version as soon as it's available. If your organization has established practices that prevent you from updating to the latest version, ensure that your agents are regularly updated to a version that's at most 90 days old. Read more about [keeping your agent up to date](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/install-configure/update-new-relic-agent/).
</Callout>

## 3.31.0

### Added

* Integration packages to instrument AI model invocations (see below).
  * New package nrawsbedrock v1.0.0 introduced to instrument calls to <DNT>Amazon Bedrock</DNT> Runtime Client API `InvokeModel` and `InvokeModelWithResponseStream` calls. Also provides a simple one-step method which invokes stream invocations and harvests the response stream data for you.
  * New package nropenai v1.0.0 introduced to instrument calls to OpenAI using `NRCreateChatCompletion`, `NRCreateChatCompletionStream`, and `NRCreateEmbedding` calls.
* Dockerfile in the `examples/server` sample app which facilitates the easy creation of a containerized ready-to-run sample app for situations where that makes testing easier.

### Fixed

* `.Ignore` was not ignoring transaction. Fixes [Issue #845](https://github.com/newrelic/go-agent/issues/845).
* Added nil error check in wrap function. Fixes [Issue #862](https://github.com/newrelic/go-agent/issues/862).
* `WrapBackgroundCore` background logger was not sending logs to New Relic. Fixes [Issue #859](https://github.com/newrelic/go-agent/issues/859).
* Corrected pgx5 integration example which caused a race condition. Thanks to @WillAbides! Fixes [Issue #855](https://github.com/newrelic/go-agent/issues/855).
* Updated third-party library versions due to reported security or other supportability issues:
  * `github.com/jackc/pgx/v5` to 5.5.4 in `nrpgx5` integration
  * `google.gopang.org/protobuf` to 1.33.0 in `nrmicro` and `nrgrpc` integrations
  * `github.com/jackc/pgx/v4` to 4.18.2 in `nrpgx` integration

### AI Monitoring Configuration

New configuration options are available specific to AI monitoring. These settings include:

* `AIMonitoring.Enabled`, configured via `ConfigAIMonitoring.Enabled(`_bool_`)` [default `false`]
* `AIMonitoring.Streaming.Enabled`, configured via `ConfigAIMonitoringStreamingEnabled(`_bool_`)` [default `true`]
* `AIMonitoring.Content.Enabled`, configured via `ConfigAIMonitoringContentEnabled(`_bool_`)` [default `true`]

### AI Monitoring Public API Methods

Two new AI monitoring related public API methods have been added, as methods of the `newrelic.Application` value returned by `newrelic.NewApplication`:

* [app.RecordLLMFeedbackEvent](https://pkg.go.dev/github.com/newrelic/go-agent/v3/newrelic#Application.RecordLLMFeedbackEvent)
* [app.SetLLMTokenCountCallback](https://pkg.go.dev/github.com/newrelic/go-agent/v3/newrelic#Application.SetLLMTokenCountCallback)

### AI Monitoring

New Relic AI monitoring is the industry’s first APM solution that provides end-to-end visibility for AI Large Language Model (LLM) applications. It enables end-to-end visibility into the key components of an AI LLM application. With AI monitoring, users can monitor, alert, and debug AI-powered applications for reliability, latency, performance, security and cost. AI monitoring also enables AI/LLM specific insights (metrics, events, logs and traces) which can easily integrate to build advanced guardrails for enterprise security, privacy and compliance.

AI monitoring offers custom-built insights and tracing for the complete lifecycle of an LLM’s prompts and responses, from raw user input to repaired/polished responses. AI monitoring provides built-in integrations with popular LLMs and components of the AI development stack. This release provides instrumentation for [OpenAI](https://pkg.go.dev/github.com/newrelic/go-agent/v3/integrations/nropenai)
and [Bedrock](https://pkg.go.dev/github.com/newrelic/go-agent/v3/integrations/nrawsbedrock).

When AI monitoring is enabled with `ConfigAIMonitoringEnabled(true)`, the agent will now capture AI LLM related data. This data will be visible under a new APM tab called AI Responses. See our [AI Monitoring documentation](https://docs.newrelic.com/docs/ai-monitoring/intro-to-ai-monitoring/) for more details.

### Support statement

We use the latest version of the Go language. At minimum, you should be using no version of Go older than what is supported by the Go team themselves.
See the [Go agent EOL Policy](/docs/apm/agents/go-agent/get-started/go-agent-eol-policy) for details about supported versions of the Go agent and third-party components.
