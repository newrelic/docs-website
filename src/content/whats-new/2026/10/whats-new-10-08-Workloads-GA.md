---
title: 'Updates to Intelligent Workloads and Standard Workloads'
summary: 'Enhancements to Intelligent Workloads include bulk creation alongside an updated summary page for Standard Workloads.'
releaseDate: '2026-10-08'
learnMoreLink: 'https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/workloads/use-workloads/#health'
getStartedLink: 'https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/workloads/create-intelligent-workload/#bulk-create'
---


## Create and define Intelligent Workloads
Intelligent Workloads is now generally available (GA), designed for teams that want to proactively monitor business-impacting transactions and associated KPIs. You can now leverage bulk creation to build multiple workloads at once. Customers who want to scope their Intelligent Workloads can now use exclude filters to prune unwanted dependency paths.

* **Bulk workload creation**: You can now create multiple Intelligent Workloads at once using the [bulk create](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/workloads/create-intelligent-workload/#bulk-create) option in the recommendations modal. New Relic automatically surfaces candidate transactions based on processing time, latency, or error rates so you can quickly curate and spin up workloads in bulk.
* **Workloads Scoping**: [Exclude filters](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/workloads/create-intelligent-workload/#exclude-filters) allow you to prune unowned microservices, third-party APIs, or irrelevant pipeline branches from your Intelligent Workload dependency graph. Defining target entities and pruning directions ensures future trace paths automatically filter out unwanted dependencies without requiring manual maintenance.


## Improvements to Standard Workloads
Standard Workloads now shares the same context-rich summary page structure as Intelligent Workloads, bringing both experiences closer to feature parity. Customers who want to define Standard Workload health using alert policies and conditions can now do so directly.

The updated Standard Workload [summary page](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/workloads/use-workloads/#health) provides a central operational dashboard with richer contextual data during active investigation. We recommend starting with the **What's Changed** timeline when a workload status shifts to view recent deployments, error group spikes, or alert activity. From there, you can filter directly to entities in **Critical** or **Warning** states and review their aggregated golden metrics to see if an error rate or latency spike is driving the degradation. This structured flow helps you pinpoint performance issues before you jump to an individual entity details page.

Standard Workloads now support custom [alert policies and conditions](https://docs.newrelic.com/docs/new-relic-solutions/new-relic-one/workloads/workload-status-configuration/#alert-policy-conditions), bringing health configuration to full parity with Intelligent Workloads. You can reuse existing alert conditions or KPIs to set workload health directly from active alert states. This eliminates manual rule setup and ensures your workload status aligns with your team's established monitoring thresholds.