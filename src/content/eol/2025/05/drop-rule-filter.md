---
title: 'End of Life Announcement: Drop Filter Rules API'
subject: EOL for Drop Filter Rules API
publishDate: '2025-05-21'
eolEffectiveDate: '2026-01-07'
---

Effective January 7, 2026, the NRQL Drop Filter Rules API will be discontinued and fully replaced by the [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/). Your existing NRQL drop filter rules will be automatically migrated. However, you'll need to take action to ensure a smooth transition to the new cloud rules API.

## Background [#bg]

This update is part of our ongoing work to improve our platform and streamline our APIs. This helps us ensure continued innovation and a more sustainable system. The new [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/), integrated with Pipeline Control, offers the same functionality as the old API. It also works with the next-generation New Relic Control system, providing a more robust, consistent, and unified experience.

## What's changing [#whats-changing]
* The NRQL Drop Filter Rules API will be deprecated and shut off on January 7, 2026.
* After January 7, 2026, you must use the [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/), or the Pipeline Control UI, for all drop rule creation and management.
* Renewals after January 7, 2026 will require the use of [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/), which is available with the [Advanced Compute add-on](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/add-on-billing/).

## What do you need to do [#what-to-do]

* Update your integrations and references to the new Pipeline Cloud Rules API by January 7, 2026.
* Do not migrate your drop rules. New Relic will handle the move from the old NRQL Drop Filter Rules API to the [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/).
* Access a unified rules list in June 2025 for migration assistance and visibility across both APIs.
* Add Advanced Compute by January 7, 2026 (if you are on [Pay As You Go](/docs/licenses/license-information/usage-plans/new-relic-usage-plan/#pay-as-you-go)) to maintain uninterrupted use of drop rules.
* Upgrade to a paid plan (if you are on the free tier) to continue using drop rules after the effective date.

## If no action is taken [#no-action]
* After January 7th, 2026, calls to NRQL Ddrop Filter Rrules API will fail. Migrate to [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/) by then. 
* If you are on [Pay As You Go](/docs/licenses/license-information/usage-plans/new-relic-usage-plan/#pay-as-you-go) or free tier, drop rules will be disabled if your account is not on Advanced Compute at the next renewal after January 7th, 2026.
* If you have a commitment contract, work with your account team to add Advanced Compute before your next renewal to ensure continuous rule processing and authoring. Otherwise, rule creation will be disabled, and existing rules will be turned off at your renewal.

## Next steps
* Review your current use of NRQL Drop Filter Rules API.
* Begin planning your migration to the [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/).
* Watch for communications regarding the unified rules list and migration tools, coming June 2025.
* Contact your New Relic representative or support for assistance with migration or to discuss your options.

We understand that changes to capabilities can be disruptive, and we are committed to supporting you through this transition. Our goal is to provide ample time and resources to ensure a smooth migration with minimal impact to your workflows.

Our support team is here to assist you during this transition. If you have any questions about these changes, please [contact Support](/docs/new-relic-solutions/solve-common-issues/find-help-get-support/) or reach out to your account team. To learn more about the advantages of Pipeline Control UI, check out [New Relic Pipeline Control](https://newrelic.com/platform/pipeline-control).

Thank you for your partnership and understanding as we continue to improve our platform and services.
