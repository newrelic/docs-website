---
title: 'New Relic Control host-based fleets are now generally available'
summary: 'Linux and Windows host-based fleets for Agent Control and Fleet Control are now GA, with support for config approval governance, remote agent upgrades, audit logging, and on-host integrations.'
releaseDate: '2026-09-29'
learnMoreLink: 'https://docs.newrelic.com/docs/new-relic-control/getting-started/'
---

Linux and Windows host support for Agent Control and Fleet Control reaches General Availability today, matching the GA support for Kubernetes that shipped in September 2025. New Relic Control now gives you one observability control plane across Kubernetes, Linux, and Windows hosts, so your entire fleet is managed the same way no matter where it runs.

## Host-based fleets for Linux and Windows

Linux and Windows hosts now join Kubernetes clusters as first-class fleet types in Fleet Control and supported platforms for Agent Control. Group hosts into fleets by environment, application, or business unit, and apply the same RBAC, configuration templates, and deployment strategies you already use for Kubernetes, regardless of operating system. Roll out a change to thousands of hosts as easily as to a single cluster.

## Configuration approval governance

Fleet Control now gives you governance over every agent configuration change before it reaches your fleet. An approval workflow lets you decide exactly how many people must approve a config change and set different rules for different agent types, so nothing ships without the review your team requires. Every approval, and every deployment it authorizes, is captured in Fleet Control's audit log, so you can always answer who changed what and when.

## Remote agent upgrades now available on hosts

Agent Control can now remotely update itself and its managed agents on Linux and Windows hosts, the same way it already does on Kubernetes. Deploy a configuration change through Fleet Control, and any agent that needs an update, including Agent Control itself, can be upgraded as part of that deployment. Keeping your fleet current stops being a separate project and becomes a property of using Fleet Control.

## Initial wave of on-host integrations

On-host integrations move from Public Preview to General Availability alongside the New Relic infrastructure agent, including Flex, Redis, NGINX, MySQL, PostgreSQL, Memcached, and Apache. All are fully supported on both Linux and Windows. This is the first wave of several planned batches, with more integrations rolling out in upcoming releases.

## Agent version intelligence, right where you deploy

When you deploy or update an agent from Fleet Control, the deployment page now shows richer detail on the agent type itself, including its version history, feature notes, bug fixes, security notes, breaking changes, and end-of-life dates, all pulled live from the associated version. Make your upgrade decision from the same screen where you're already configuring the deployment, instead of cross-referencing external release notes.

## More secret and value provider support

Agent Control now pulls configuration values from an even wider range of sources, including HashiCorp Vault, Kubernetes Secrets, Kubernetes ConfigMaps, local files, and environment variables. Wherever a value already lives, your agent configuration authored in Fleet Control can reference it directly, so you're not stuck duplicating settings or relocating secrets just to get Agent Control running.

## Get started

- [New Relic Control](https://docs.newrelic.com/docs/new-relic-control/getting-started/)
- [Agent Control overview](https://docs.newrelic.com/docs/new-relic-control/agent-control/overview/)
- [Supported agent types](https://docs.newrelic.com/docs/new-relic-control/agent-control/agent-types/)
- [Overview of Fleet Control](https://docs.newrelic.com/docs/new-relic-control/fleet-control/overview/)
