---
title: 'Linux and Windows host support for New Relic Agent Control and Fleet Control is now generally available'
summary: 'Bring Linux and Windows hosts into the same fleet model as Kubernetes, with self-upgrade, seven new on-host integrations, and unified fleet management.'
releaseDate: '2026-09-29'
learnMoreLink: 'https://docs.newrelic.com/docs/new-relic-control/getting-started/'
---

Linux and Windows host support for Agent Control and Fleet Control reaches General Availability today, matching the Kubernetes GA that shipped in September 2025. Kubernetes, Linux, and Windows now run on the same control plane, with a growing shared set of on-host integrations and the same self-upgrade capability. If you're already managing Kubernetes fleets with Agent Control, you can bring your Linux and Windows hosts into the same fleet model without adopting a different tool.

## Agent Control self-upgrade now available on hosts

Agent Control's self-upgrade capability was Kubernetes-only until this release. It now works the same way on Linux and Windows hosts, so you no longer need a separate process to keep Agent Control current across your fleet, regardless of platform.

## First wave of on-host integrations reaches GA

Seven on-host integrations move from Public Preview to GA alongside the infrastructure agent: Redis, NGINX, MySQL, PostgreSQL, Memcached, Apache, and Flex. All seven are fully supported on both Linux and Windows. This is the first of several planned batches; more integrations will roll out as fast follows in upcoming releases.

## Support for more secret and value providers

Agent Control now pulls configuration values from an even wider range of sources: HashiCorp Vault, Kubernetes Secrets, local files, environment variables, and now Kubernetes ConfigMaps. Wherever a value already lives, your agent configuration can reference it directly, so you're not stuck duplicating settings or relocating secrets just to get Agent Control running.

## Unified fleet management across Kubernetes, Linux, and Windows

Fleet Control groups hosts into fleets by environment, application, or business unit, the same way it already groups Kubernetes clusters. Apply consistent RBAC, configuration templates, and deployment strategies regardless of operating system, and roll out a change to thousands of Linux and Windows hosts as easily as to a single cluster.

Improved security also comes through configurable governance workflows: similar to familiar review-and-approval patterns from source control, you can set how many approvals a new configuration needs before it goes out, configurable per agent type, for full control over how changes reach your fleet.

## More agent detail right on the deployment page

When you deploy or update a sub-agent from Fleet Control, the deployment page now shows richer detail on the agent type itself: version history, feature notes, bug fixes, security notes, breaking changes, and end-of-life dates, all pulled live from the associated version. Make your upgrade decision from the same screen where you're already configuring the deployment, instead of cross-referencing external release notes.

## Get started

- [Agent Control overview](https://docs.newrelic.com/docs/new-relic-control/agent-control/overview/)
- [Supported agent types](https://docs.newrelic.com/docs/new-relic-control/agent-control/agent-types/)
- [Overview of Fleet Control](https://docs.newrelic.com/docs/new-relic-control/fleet-control/overview/)
