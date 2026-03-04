---
title: 'Windows Host Support and Enhanced Agent Selection now in New Relic Control Public Preview'
summary: 'Extend your observability management with the new Windows host support for Agent Control and Fleet Control, now available in Public Preview.'
releaseDate: '2026-02-26'
learnMoreLink: 'https://docs.newrelic.com/docs/new-relic-control/getting-started/'
---

Windows host support in New Relic Agent Control and Fleet Control is now available in Public Preview. This release brings the same automated, centralized management experience you use for Kubernetes and Linux hosts to your Windows infrastructure.

## Windows host support

Agent Control now extends its agent supervisor capabilities to Windows hosts, including VMs, bare metal, and cloud instances.

- **Zero-touch management:** Manage instrumentation on Windows hosts remotely without needing to RDP into servers or handle local MSI packages manually.

- **Automated lifecycle:** Deploy, configure, and update the New Relic infrastructure agent and NRDOT collectors across your entire Windows fleet from a single pane of glass in Fleet Control.

- **Unified package distribution:** Download agent packages from our Open Container Initiative (OCI)-compliant package repository to ensure agent distribution is fast, reliable, and cryptographically signed for Windows environments.

## Simplified agent version management

Simplify one of the biggest hurdles in managing instrumentation across complex environments by mapping specific agent versions to their underlying requirements.

- **No more manual mapping:** Skip the toil associated with manually mapping Helm chart versions to agent versions for Kubernetes or tracking individual MSI and package versions for hosts.

- **Direct version selection:** Simply choose the desired agent version within Fleet Control, start a deployment, and let the platform handle the underlying orchestration and upgrade steps automatically.

## Unified fleet management

Fleet Control allows you to group Windows hosts into logical fleets by environment, application, or business unit and manage them alongside your existing Linux and Kubernetes clusters.

- **Cross-platform consistency:** Apply fine-grained RBAC, configuration templates, and deployment strategies to your fleets regardless of the operating system.

- **Bulk operations:** Roll out a configuration change to thousands of Windows servers just as you would to a single cluster.

## Advanced modular configurations

This release introduces multi-configuration support, allowing for a more modular approach to instrumentation.

- **Reusable templates:** Define a standard Windows configuration once and apply it consistently across many fleets to streamline governance.

- **Reduced sprawl:** Keep your environment organized by inheriting global settings while allowing for specific overrides where necessary.

## Enterprise-grade security

Security is at the core of New Relic Control, and this release adds more security protections.

- **Secure secrets management:** Native integration with secure secrets providers like HashiCorp Vault, AWS Secrets Manager, and Kubernetes Secrets ensures that license keys and credentials are never stored in plain text.

- **Validated packages:** New Relic signs and validates all Windows agent packages distributed via Fleet Control to keep your production environments secure.

## Get started with Public Preview

If you're already part of the New Relic Control Public Preview for Host-based Fleets, you can begin adding Windows hosts today.

- [Install Agent Control on Windows](https://docs.newrelic.com/docs/new-relic-control/agent-control/setup/)

- [Windows configuration guide](https://docs.newrelic.com/docs/new-relic-control/agent-control/windows/)

- [View supported agent types](https://docs.newrelic.com/docs/new-relic-control/agent-control/agent-types/)
