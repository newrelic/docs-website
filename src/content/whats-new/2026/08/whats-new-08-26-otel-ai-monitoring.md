---
title: 'OpenTelemetry support for AI monitoring is now GA'
summary: 'No New Relic agent required. If your app already emits OpenTelemetry traces, you can now send GenAI spans directly to AI monitoring and see every LLM call, tool call, and agent step.'
releaseDate: '2026-08-31'
learnMoreLink: 'https://docs.newrelic.com/docs/ai-monitoring/opentelemetry-ai-monitoring/'
---

No New Relic agent required. If your app already emits OpenTelemetry traces, you can now send GenAI spans directly to AI monitoring and see every LLM call, tool call, and agent step — as part of your existing distributed traces.



## What you get

- **Full LLM visibility without an agent** — Set two environment variables, add the GenAI instrumentation package for your framework, and your spans start flowing into AI monitoring. No new agent to install.
- **Support for popular frameworks** — Works with the OpenTelemetry GenAI instrumentation packages for OpenAI, Anthropic, LangChain, and AWS Bedrock. Any other language or framework with OTel GenAI instrumentation works the same way.
- **Privacy-first content capture** — Prompt and completion content capture is off by default. Opt in explicitly when you're ready, and use drop filters or attribute-level obfuscation to protect sensitive data before it reaches New Relic.
- **Full trace context** — LLM calls appear as spans within your existing distributed traces, so you can correlate model latency and errors with the rest of your service in a single view.

## Get started

Set your two OTLP exporter environment variables, add the GenAI instrumentation package for your framework, and send a small amount of traffic. Within a few minutes your service appears in AI monitoring.

See the [OpenTelemetry AI monitoring documentation](https://docs.newrelic.com/docs/ai-monitoring/opentelemetry-ai-monitoring/) for the full setup.
