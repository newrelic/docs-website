---
title: 'Distributed Tracing enabled by default with Node.js agent  version 8.3'
summary: 'See distrbuted traces immediately upon upgrading Node.js agent'
releaseDate: '2021-10-07'
learnMoreLink: 'https://docs.newrelic.com/docs/release-notes/agent-release-notes/nodejs-release-notes/'
---
With the release of [Node agent version v8.3](https://docs.newrelic.com/docs/release-notes/agent-release-notes/nodejs-release-notes/), upon agent upgrade, customers will now have [Distributed Tracing](https://newrelic.com/products/edge-infinite-tracing) on by default. This eliminates the need to configure the agent in order to have access to distributed traces. Distributed Tracing gives software teams working in modern environments an easy way to capture, visualize, and analyze traces through complex architectures, including architectures that use both monoliths and microservices. 

**What’s the impact?**

With this change, customers will see distributed traces immediately upon upgrading to Node version [v8.3](https://docs.newrelic.com/docs/release-notes/agent-release-notes/nodejs-release-notes/). Distributed Tracing on by default provides more data and better visibility for cross-application requests.

If you do not need this feature, it can be turned off in the Node [agent configuration file](https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#config_file) by setting distributed_tracing.enabled=false OR by setting the environment variable  `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED = false`. 

If you need more traces and are experiencing dropped spans, the agent reservoir can be expanded to accommodate more spans. To do so, set [`environment variable`](https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#environment) or [`config item`](https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#config_file) called `span_events.max_samples_stored` to a value greater than 2,000 up to a maximum value of 10,000. Note that increasing this value may impact memory usage. 

With Distributed Tracing on by default, [Cross Application Tracing](https://docs.newrelic.com/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces/) (CAT) will now be deprecated and will be removed in a future version of the agent. Customers on CAT will now see distributed traces instead. Customers who would like to revert back to CAT can do so in the configuration file by setting `cross_application_tracer.enabled = true`. It is however recommended to stay using distributed tracing, given that CAT will be removed in the future.
