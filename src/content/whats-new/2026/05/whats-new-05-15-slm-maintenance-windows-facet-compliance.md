---
title: 'SLM update: maintenance windows and facet compliance now live'
summary: 'Exclude planned downtime from SLO calculations and break down compliance by attribute to pinpoint detractors across your service levels.'
learnMoreLink: 'https://docs.newrelic.com/docs/service-level-management/intro-slm/'
releaseDate: '2026-05-15'
---

We've shipped two major updates to the New Relic Service Level Management (SLM) workflow to improve reporting accuracy and give you deeper diagnostic capabilities for your SLIs and SLOs.

## Service level maintenance windows

You can now schedule maintenance windows directly within the SLM module. During an active window, any "bad events" or downtime are automatically excluded from your SLI calculations. This prevents planned maintenance from unfairly depleting your error budgets and ensures your compliance data reflects actual unplanned service health.

* **Schedule one-time or recurring windows:** Cover individual events or set up daily, weekly, or monthly schedules for routine maintenance.
* **Apply to multiple service levels:** Use the same maintenance window across multiple service levels within the same account.
* **Visualize maintenance periods:** See windows displayed as gray bars directly on your SLO compliance and good/bad events charts.
* **Manage in the UI or via NerdGraph:** Create, update, delete, and query maintenance windows programmatically using the [NerdGraph API](/docs/service-level-management/maintenance-windows-slm/nerdgraph).

[Learn more about service level maintenance windows](/docs/service-level-management/maintenance-windows-slm/intro).

## Facet-based compliance tracking

We've introduced the ability to facet SLO compliance. You can now break down a single SLI by any attribute (for example, `request.uri`, `countryCode`, or `deviceType`). This lets teams identify specific "detractors" — particular transactions or regions that are disproportionately damaging the overall SLO — without needing to create hundreds of individual service levels.

* **Get granular insights:** Identify performance issues in specific cells, regions, or environments without creating separate service levels.
* **Compare segments:** View compliance and error budget for different attribute combinations side by side.
* **Alert on facets:** Create SLI compliance, fast burn, and slow burn alerts based on specific facets so you're notified when a particular segment is failing.

[Learn more about faceted service levels](/docs/service-level-management/facet-slm/intro).

## Get started

Both features are available now in the SLM module. Visit your **Service Levels** page in <DNT>**[one.newrelic.com](https://one.newrelic.com)**</DNT> to start using them today. Your feedback drives our roadmap — let us know what you'd like to see next.
