---
title: 'Send GenAI traces to New Relic AI Monitoring with OpenTelemetry'
summary: 'No New Relic agent required. If your app already emits OpenTelemetry traces, you can now send GenAI spans directly to AI Monitoring and see every LLM call, tool call, and agent step.'
releaseDate: '2026-08-26'
learnMoreLink: 'https://docs.newrelic.com/docs/ai-monitoring/opentelemetry-ai-monitoring/'
---

New Relic AI Monitoring now supports OpenTelemetry (OTel) as a first-class instrumentation path. If your application already emits OTel traces, you can send GenAI spans directly to AI Monitoring without installing a New Relic agent — just point your OTLP exporter at New Relic and add the right OTel GenAI instrumentation package.

Once your app is sending traces, the AI Monitoring view shows every LLM call your service makes, tool calls and agent steps as part of the full request trace, and errors and slow calls surfaced alongside the rest of your APM data.

## What you get

**Full LLM visibility without a New Relic agent**
If your app already uses OpenTelemetry, there's no new agent to install. Set two environment variables, add an instrumentation package, and your GenAI spans start flowing into AI Monitoring.

**Support for popular frameworks**
Works with the OpenTelemetry GenAI instrumentation packages for OpenAI, Anthropic, LangChain, and AWS Bedrock. Any other language or framework with OTel GenAI instrumentation works the same way.

**Privacy-first content capture**
Prompt and completion content capture is disabled by default. You control whether message bodies appear in AI Monitoring — opt in explicitly when you're ready, and use drop filters or attribute-level obfuscation to protect sensitive data before it reaches New Relic.

**Full trace context**
LLM calls appear as spans within your existing distributed traces, so you can correlate model latency and errors with the rest of your service's behavior in a single view.

## Get started

Set your OTLP exporter environment variables, add the GenAI instrumentation package for your framework, and trigger a small amount of traffic. Within a few minutes you should see your service appear in AI Monitoring. To learn more, see the [OTel AI Monitoring documentation](https://docs.newrelic.com/docs/ai-monitoring/opentelemetry-ai-monitoring/).
