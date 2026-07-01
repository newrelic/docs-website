---
title: 'New Relic Agent Control and Fleet Control are now generally available for Kubernetes!' 
summary: 'Take complete control of your observability stack with the GA release of both Agent Control and Fleet Control for Kubernetes, and a Public Preview of Agent Control for on-host Linux.' 
releaseDate: '2025-09-30' 
learnMoreLink: 'https://docs.newrelic.com/docs/new-relic-control/getting-started/'
---

We're thrilled to announce the General Availability of New Relic Control for Kubernetes, a major milestone in observability management that brings together Agent Control and Fleet Control as a unified, intelligent control plane to manage observability at scale.

Agent Control acts as the essential lightweight supervisor installed on your clusters to keep infrastructure instrumentation healthy and configurations up to date and compliant. Fleet Control serves as the remote command center, centralizing configurations and deployments with safe, progressive rollouts, RBAC permissions, and a clear audit trail.

In addition, we're excited to launch a Public Preview of Fleet & Agent Control for Linux host-based fleets, extending the same remote instrumentation management capabilities beyond Kubernetes to Linux host environments.

This release eliminates the high complexity and toil of agent lifecycle management so you can maintain an optimized and consistent observability posture with minimal operational overhead.

## Key features
### Agent Control: Instrumentation supervisor for Kubernetes
Agent Control is a lightweight, Kubernetes-native supervisor that installs on your clusters to manage New Relic and open source telemetry agents. It keeps your instrumentation healthy and in sync with remote configurations received from Fleet Control.

- **Seamless remote updates:** Agent Control can remotely update itself and its managed agents to stay current with the latest features and security patches.

- **Kubernetes-native design:** Leverage a declarative approach to agent management, ensuring consistency across your entire environment with a single source of truth for agent configuration.

- **Enhanced security and control:** Robust security features include integration with Kubernetes Secrets and Vault for credential handling and system identities for secure, authenticated onboarding.

- **Expanded agent support:** This release includes support for a curated set of infrastructure agent types, including the New Relic infrastructure agent, New Relic eBPF agent, Fluent Bit, Prometheus, and New Relic OpenTelemetry collector (NRDOT).

### Fleet Control: Centralized management at scale
Fleet Control is the centralized command center to define and reuse configurations across fleets and deploy instrumentation changes with safe, progressive rollouts. It enables consistent deployments at scale with deployment rings, fine-grained RBAC permissions, and a full audit trail.

- **Centralize agent operations:** Install, monitor, configure, and update managed agents and integrations across your environment from a single experience and API.

- **Customize fleets for bulk management:** Group your Kubernetes clusters into logical fleets based on instrumentation needs and easily make changes to the entire fleet in a few clicks.

- **Prevent configuration drift:** Maintain consistent, compliant configurations across all entities in a fleet, eliminating hidden observability gaps and reducing manual toil.

- **Delegate access with confidence:** Define RBAC roles and assign fine-grained access permissions to control who can change what and track every action with a clear audit trail.

## Get started and learn more
To begin centrally managing instrumentation on Kubernetes clusters, install Agent Control on your clusters, then use the Fleet Control to define configuration and roll out changes to your agents across fleets.

- [Install Agent Control](https://docs.newrelic.com/docs/new-relic-control/agent-control/setup/)

- [Overview of Fleet Control](https://docs.newrelic.com/docs/new-relic-control/fleet-control/overview/)

- [Supported agent types](https://docs.newrelic.com/docs/new-relic-control/agent-control/agent-types/)

Fleet Control and Agent Control for Linux host-based fleets are also available in Public Preview and your feedback is invaluable. We encourage you to try it out and let us know what you think!
