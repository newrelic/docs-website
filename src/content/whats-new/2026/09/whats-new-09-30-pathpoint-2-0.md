---
title: "The updated version of Pathpoint is now available in Public Preview"
summary: "Map your most critical business journeys to the telemetry that powers them — now with programmatic management and richer KPIs."
releaseDate: "2026-09-30"
learnMoreLink: "https://docs.newrelic.com/docs/pathpoint/get-started-pathpoint/"
---

The updated version of Pathpoint is now available in Public Preview. When something breaks in a complex system, sometimes the hardest part isn't fixing it, but figuring out how it may impact the business and what part of the customer journey to look at first.

Pathpoint helps map your technical health to your customer business journeys, such as checkout, onboarding, and in-store payments. Instead of staring at a list of service alerts, you see exactly which stage of the customer journey is degraded and what business metric might be moving because of it.

When payment latency spikes, Pathpoint tells you the Checkout stage is unhealthy, cart abandonment is climbing, which microservice in the dependency chain is failing, and which team owns it. The SRE has a clear starting point. Incident communicators and business stakeholders can see what the incident affects and why it matters, without waiting on a bridge call to find out.

## Programmatic access: Terraform and NerdGraph

The updated version of Pathpoint now exposes a full NerdGraph API and Terraform provider, so teams that run infrastructure-as-code workflows can create, version, and deploy Pathpoint flows the same way they manage everything else — through pull requests, code review, and CI/CD pipelines. No more one-off manual setup in the UI that lives outside your standard deployment process.

Existing generally available Pathpoint users can export their current configuration directly as Terraform, migrating to the updated version of Pathpoint without rebuilding from scratch.

## Contextual business KPIs

KPIs in the updated version of Pathpoint surface business metrics — orders placed, cart abandonment, and conversion rate — directly alongside technical health, so you can see whether a service degradation is actually moving a business number.

KPIs work at two levels. Flow-level KPIs represent the health of the entire journey — total checkout value, overall conversion rate — with trend lines and period-over-period comparisons so anomalies are obvious without further analysis. Stage-level KPIs scope to where they belong: cart abandonment on the Checkout stage, open rate on Email Confirmation, and successful logins on Authentication. For deeper analysis, a dedicated KPIs page provides a full drill-down beyond the inline flow view to surface trends and anomalies.

## Configurable health status

Today, a stage turns red when a technical signal fires. But a business flow can be broken for business reasons too — and the two don't always move together.

The updated version of Pathpoint now lets you configure what makes a stage red: a technical condition like high latency on the Add to Cart service, or a business condition like cart abandonment crossing 50%. At the flow level, you can similarly configure overall flow health to reflect a flow-level KPI threshold rather than just a rollup of stage health.

[Learn more about the updated version of Pathpoint](https://docs.newrelic.com/docs/pathpoint/get-started-pathpoint/), or find it under **All Capabilities** in the New Relic platform.
