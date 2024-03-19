---
title: 'Distributed Tracing enabled by default with Ruby agent version 8.0.0'
summary: 'See distrbuted traces immediately upon upgrading Ruby agent'
releaseDate: '2021-10-04'
learnMoreLink: 'https://docs.newrelic.com/docs/release-notes/agent-release-notes/ruby-release-notes/'
---

With the release of [Ruby Agent version v8.0.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/ruby-release-notes/), upon agent upgrade, you'll have [Distributed Tracing](https://newrelic.com/products/edge-infinite-tracing) on by default. This eliminates the need to configure the agent to have access to distributed traces. Distributed Tracing gives software teams working in modern environments an easy way to capture, visualize, and analyze traces through complex architectures, including architectures that use both monoliths and microservices. 

**What’s the impact?**

With this change, you'll see distributed traces immediately upon upgrading to Ruby version [v8.0.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/ruby-release-notes/). Distributed Tracing on by default provides more data and better visibility for cross-application requests.

If you do not need this feature, you can turn it off in the Ruby [agent configuration file](https://docs.newrelic.com/docs/agents/ruby-agent/configuration/ruby-agent-configuration/#distributed_tracing-enabled) by setting `distributed_tracing.enabled=false` or by setting the environment variable `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=false`. 

If you need more traces and are experiencing dropped spans, the agent reservoir can be expanded to accommodate more spans. To do so, set the environment variable or config item called [`span_events.max_samples_stored`](https://docs.newrelic.com/docs/agents/ruby-agent/configuration/ruby-agent-configuration/#span_events-max_samples_stored) to a value greater than 2,000 up to a maximum value of 10,000. Note that increasing this value may impact memory usage. 

With Distributed Tracing on by default, [Cross Application Tracing](https://docs.newrelic.com/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces/) (CAT) will now be deprecated and will be removed in a future version of the agent. If you're on CAT, you'll now see distributed traces instead. If you want to revert back to CAT, you can do so by setting `cross_application_tracer.enabled = true` in the configuration file. We recommend you to keep using distributed tracing, given that CAT will be removed in the future. 