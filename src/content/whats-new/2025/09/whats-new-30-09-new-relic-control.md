---
title: 'New Relic Agent Control and Fleet Control are now generally available for Kubernetes!' 
summary: 'Take complete control of your observability stack with the GA release of both Agent Control and Fleet Control for Kubernetes, and a Public Preview of Agent Control for on-host Linux.' 
releaseDate: '2025-09-30' 
learnMoreLink: 'https://docs.newrelic.com/docs/new-relic-control/getting-started/'
---

We are thrilled to announce a major milestone in observability management: New Relic Agent Control and Fleet Control are now Generally Available (GA) for Kubernetes!

This dual release delivers a complete, production-ready solution for centrally managing the entire instrumentation lifecycle of your New Relic observability agents at scale. Agent Control acts as the essential lightweight supervisor installed on your clusters, and Fleet Control provides the unified, centralized command center.

In addition, we are excited to launch the Public Preview of Agent Control for on-host Linux, bringing the same powerful capabilities to your traditional Linux environments.

This release eliminates the key complexities of modern, cloud-native deployments, empowering you to maintain an always-up-to-date and performant observability posture with minimal operational overhead.

## Key features

### Agent Control: The Kubernetes supervisor
Agent Control is the lightweight, Kubernetes-native component that you install on your clusters. It acts as the supervisor that ensures instrumentation is correctly deployed, maintained, and remotely configured.

- **Kubernetes-native agent management:** Leverage a declarative approach to manage sub-agents, ensuring consistency across your entire environment with a single source of truth for your configuration.

- **Seamless remote updates:** Agent Control can remotely update itself and its managed agents, ensuring your stack is always current with the latest features and security patches.

- **Enhanced security and control:** Robust security features include native integration with Kubernetes Secrets and Vault for secure credential management, ensuring namespace isolation for sub-agents.

- **Expanded agent support:** This release includes support for a curated set of key agent types, including the New Relic Infrastructure Agent, Fluent Bit, Prometheus, the New Relic OpenTelemetry Collector, and the New Relic eBPF agent.

### Fleet Control: Centralized management at scale
Fleet Control is the centralized web interface that provides visibility and remote command over all your managed entities running Agent Control.

- **Centralize agent operations:** Install, monitor, configure, and update all agents and integrations across your environment from a single UI.

- **Customize fleets for bulk management:** Group your Kubernetes clusters into logical fleets based on instrumentation needs (for example, "Production-Web-Tier" or "Staging-EU"). Easily upgrade agent versions or deploy new configurations for entire fleets with a few clicks.

- **Avoid configuration drift:** Ensure consistent, compliant configurations across all entities in a fleet, eliminating hidden observability gaps and reducing manual toil.

## Get started and learn more
To begin centrally managing your Kubernetes clusters, start by installing Agent Control, then use the Fleet Control UI to configure your agents at scale.

- [Install Agent Control](https://docs.newrelic.com/docs/new-relic-control/agent-control/setup/)

- [Overview of Fleet Control](https://docs.newrelic.com/docs/new-relic-control/fleet-control/overview/)

- [Supported agent types](https://docs.newrelic.com/docs/new-relic-control/agent-control/agent-types/)

As the on-host Linux feature is in Public Preview, your feedback is invaluable. We encourage you to try it out and let us know what you think!