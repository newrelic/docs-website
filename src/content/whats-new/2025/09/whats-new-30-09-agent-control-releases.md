---
title: 'New Relic Agent Control is Now Generally Available for Kubernetes!'
summary: 'Take control of your observability stack with the GA release of Agent Control for Kubernetes, and a Public Preview for on-host Linux.'
releaseDate: '2025-09-30'
learnMoreLink: 'https://docs.newrelic.com/docs/new-relic-control/agent-control/overview/'
---

We are thrilled to announce that **Agent Control is now `Generally Available (GA)` for Kubernetes**! This major milestone delivers a production-ready solution for centrally managing the lifecycle of your New Relic observability agents at scale.

In addition, we are excited to launch the **`Public Preview` of Agent Control for on-host Linux**, bringing the same powerful capabilities to your traditional Linux environments.

This release addresses the key complexities of modern, cloud-native deployments, empowering you to maintain an always-up-to-date and performant observability posture with minimal operational overhead.

## Key features

- **Kubernetes-Native Agent Management:** Leverage a declarative, Kubernetes-native approach to install, configure, and manage your agents. Ensure consistency across your entire fleet with a unified, single source of truth for your observability configuration.

- **Seamless Remote Updates:** Say goodbye to manual updates. Agent Control can remotely update itself and its managed agents, ensuring your observability stack is always current with the latest features and security patches without any downtime.

- **Enhanced Security and Control:** This release introduces robust security features, including native integration with **Kubernetes Secrets** and **Vault** for secure credential management. It also ensures namespace isolation, deploying Agent Control and its sub-agents in separate namespaces for improved security.

- **Expanded Support:** This release includes support for a curated set of key agent types, including the New Relic Infrastructure Agent, Fluent Bit, Prometheus, the New Relic OpenTelemetry Collector, and the New Relic eBPF agent.

## How to get started?

Getting started with Agent Control is easy with our guided installation experience.

- **Guided Install:** Go to **Integrations & Agents** in the New Relic UI, click the **Guided install** tile, and select **Kubernetes**.

- **Check our docs**:

    - [Install Agent Control](https://docs.newrelic.com/docs/new-relic-control/agent-control/setup/)

    - [Supported Agent Types](https://docs.newrelic.com/docs/new-relic-control/agent-control/agent-types/)

    - [Learn about On-Host Support (Public Preview)](https://docs.newrelic.com/docs/new-relic-control/agent-control/overview/)

As the on-host Linux feature is in Public Preview, your feedback is invaluable. We encourage you to try it out and let us know what you think!
