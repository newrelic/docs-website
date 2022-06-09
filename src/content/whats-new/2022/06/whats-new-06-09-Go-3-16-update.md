---
title: 'Distributed Tracing enabled by default with Go Agent Update: Version 3.16.0'
summary: 'Get started easier with distributed tracing' 
releaseDate: '2022-06-09'
learnMoreLink: 'https://docs.newrelic.com/docs/release-notes/agent-release-notes/go-release-notes/go-agent-3-16-0'
getStartedLink: 'https://docs.newrelic.com/docs/release-notes/agent-release-notes/go-release-notes/go-agent-3-16-0'
---
With the release of [Go Agent version v3.16.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/go-release-notes/go-agent-3-16-0), upon agent upgrade, customers will now have [Distributed Tracing](https://newrelic.com/products/edge-infinite-tracing) on by default. This eliminates the need to configure the agent in order to have access to distributed traces. Distributed Tracing gives software teams working in modern environments an easy way to capture, visualize, and analyze traces through complex architectures, including architectures that use both monoliths and microservices. 

**What’s the impact?**

With this change, New Relic users will see distributed traces immediately upon upgrading to Go version [v3.16.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/go-release-notes/go-agent-3-16-0). Distributed Tracing on by default provides more data and better visibility for cross-application requests.

If you do not need this feature, it can be turned off in the Go [agent configuration file](https://docs.newrelic.com/docs/apm/agents/go-agent/configuration/go-agent-configuration) by setting distributed_tracing.enabled=false OR by setting the environment variable  NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=false. 