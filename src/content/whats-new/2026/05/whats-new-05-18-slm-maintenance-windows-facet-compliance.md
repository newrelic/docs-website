---
title: 'SLM update: Maintenance Windows and Facet Compliance are now Generally Available'
summary: 'We have implemented two major updates to our Service Level Management (SLM) workflow to improve reporting accuracy and provide deeper diagnostic capabilities.'
learnMoreLink: '/docs/service-level-management/intro-slm/'
releaseDate: '2026-05-18'
---

* **Service Level Maintenance Windows**: You can now schedule maintenance windows directly within the SLM module. During these windows, any "bad events" or downtime are automatically excluded from your SLI calculations. This prevents planned maintenance from unfairly depleting your **error budgets** and ensures your compliance data reflects actual unplanned service health.
* **Facet-Based Compliance Tracking**: We've introduced the ability to **facet** SLO compliance. You can now break down a single SLI by any attribute (e.g., request.uri, countryCode, or deviceType). This allows teams to identify specific "detractors"—particular transactions or regions that are disproportionately damaging the overall SLO—without needing to create hundreds of individual service levels.

**Learn more**

* [Service Level Maintenance Windows](/docs/service-level-management/maintenance-windows-slm/intro/)
* [Facet-Based Compliance Tracking](/docs/service-level-management/facet-slm/intro/)


