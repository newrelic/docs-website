---
title: 'Distributed tracing enabled by default with PHP agent update: version 9.21.0'
summary: 'Get started easier with distributed tracing' 
releaseDate: '2022-06-09'
learnMoreLink: 'https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9210311'
getStartedLink: 'https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9210311'
---
With the release of [PHP agent version v9.21.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9210311), upon agent upgrade, customers will now have [distributed tracing](https://newrelic.com/products/edge-infinite-tracing) on by default. This eliminates the need to configure the agent in order to have access to distributed traces. Distributed tracing gives software teams working in modern environments an easy way to capture, visualize, and analyze traces through complex architectures, including architectures that use both monoliths and microservices. 

**What’s the impact?**

With this change, New Relic users will see distributed traces immediately upon upgrading to PHP version [v9.21.0](https://docs.newrelic.com/docs/release-notes/agent-release-notes/php-release-notes/php-agent-9210311). Distributed tracing provides more data and better visibility for cross-application requests.

If you don't need this feature, it can be turned off in the PHP [agent configuration file](https://docs.newrelic.com/docs/apm/agents/php-agent/configuration/php-agent-configuration) by setting `distributed_tracing.enabled=false` OR by setting the environment variable  `NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=false`. 
