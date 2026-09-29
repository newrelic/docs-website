---
title: "Pathpoint 2.0 is now available in Public Preview"
summary: "Map your most critical business journeys to the telemetry that powers them — now with programmatic management, richer KPIs, and time-travel into past flow health."
releaseDate: "2026-09-30"
learnMoreLink: "https://docs.newrelic.com/docs/pathpoint/get-started-pathpoint/"
---

Pathpoint 2.0 is now available in Public Preview. When something breaks in a complex system, sometimes the hardest part isn't fixing it, but figuring out how it may impact the business and what part of the customer journey to look at first.

Pathpoint helps map your technical health to your customer business journeys, such as checkout, onboarding, and in-store payments. Instead of staring at a list of service alerts, you see exactly which stage of the customer journey may be degraded and what business metric might be moving because of it.

When payment latency spikes, Pathpoint tells you: the Checkout stage is unhealthy, cart abandonment is climbing, and here's which microservice in the dependency chain is failing and which team owns it. The SRE knows exactly where to go. Incident communicators and business stakeholders know what's impacted and why it matters, without waiting on a bridge call to find out.

## Programmatic access: Terraform and NerdGraph

Pathpoint 2.0 now exposes a full NerdGraph API and Terraform provider, so teams that run infrastructure-as-code workflows can create, version, and deploy Pathpoint flows the same way they manage everything else — through pull requests, code review, and CI/CD pipelines. No more one-off manual setup in the UI that lives outside your standard deployment process.

Existing Pathpoint v2 users can export their current configuration directly as Terraform, migrating to Pathpoint 2.0 without rebuilding from scratch.

## Contextual business KPIs

Pathpoint 2.0 KPIs surface business metrics — orders placed, cart abandonment, conversion rate — directly alongside technical health, so you can see whether a service degradation is actually moving a business number.

KPIs work at two levels. Flow-level KPIs represent the health of the entire journey — total checkout value, overall conversion rate — with trend lines and period-over-period comparisons so anomalies are obvious without further analysis. Stage-level KPIs scope the signal to where it belongs: cart abandonment on the Checkout stage, open rate on Email Confirmation, successful logins on Authentication. For deeper analysis, a dedicated KPIs page provides a full drill-down beyond the inline flow view to surface trends and anomalies.

## Configurable health status

Today, a stage turns red when a technical signal fires. But a business flow can be broken for business reasons too — and the two don't always move together.

Pathpoint 2.0 now lets you configure what makes a stage red: a technical condition like high latency on the Add to Cart service, or a business condition like cart abandonment crossing 50%. At the flow level, overall Pathpoint health can similarly be configured to reflect a Pathpoint-level KPI threshold rather than just a rollup of stage health.

[Learn more about Pathpoint 2.0](https://docs.newrelic.com/docs/pathpoint/get-started-pathpoint/), or find it under **All Capabilities** in the New Relic platform to get started today.
