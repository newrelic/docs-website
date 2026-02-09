---
title: 'End of Life Announcement: Drop Filter Rules API'
subject: EOL for Drop Filter Rules API
publishDate: '2025-05-21'
updatedDate: '2025-12-11'
eolEffectiveDate: '2026-06-30'
---

Effective June 30, 2026 16:00 UTC, the NRQL Drop Filter Rules API will be discontinued and fully replaced by the [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/). Your existing NRQL drop filter rules will be automatically migrated. However, you'll need to take action to ensure a smooth transition to the new cloud rules API.

## Background [#bg]

This update is part of our ongoing work to improve our platform and streamline our APIs. This helps us ensure continued innovation and a more sustainable system. The new [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/), integrated with Pipeline Control, offers the same functionality as the old API. It also works with the next-generation New Relic Control system, providing a more robust, consistent, and unified experience.

## What's changing [#whats-changing]
* The NRQL Drop Filter Rules API will be deprecated and shut off on June 30, 2026.
* As of June 30, 2026, you must use the [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/), or the centralized [Pipeline Control UI](https://newrelic.com/platform/pipeline-control), for all drop rule creation and management.
* On February 3, 2026, drop rules targeting infrastructure events in `SystemSample`, `ProcessSample`, `NetworkSample`, and `StorageSample` will also correctly drop aggregated data.
* Renewals after the effective date will require the use of [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/), which is available with the [Advanced Compute add-on](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/add-on-billing/).

## What do you need to do [#what-to-do]

* Maintain your data drop needs by:
    - Updating your integrations and references to the new [Pipeline Cloud Rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/) by June 30, 2026.
    - Using Pipeline Control gateway to drop data before it leaves your environment, with the added benefits of no egress costs for data dropped and upcoming enhancements including Dynamic DT Sampling and routing.
* Do not migrate your drop rules. New Relic will handle the move from the old NRQL Drop Filter Rules API to the [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/).
* Access a unified rules list in June 2025 for migration assistance and visibility across both APIs.
* Add Advanced Compute before June 30, 2026 (if you are on [Pay As You Go](/docs/licenses/license-information/usage-plans/new-relic-usage-plan/#pay-as-you-go)) to maintain uninterrupted use of drop rules.
* Upgrade to a paid plan (if you are on the free tier) to continue using drop rules after the effective date.

## If no action is taken [#no-action]
* As of June 30th, 2026, calls to NRQL Drop Filter Rules API will fail i.e. no rules can be created or deleted. Migrate to [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/) before then. 
* If you are on [Pay As You Go](/docs/licenses/license-information/usage-plans/new-relic-usage-plan/#pay-as-you-go) or free tier, drop rules will be disabled if your account is not on Advanced Compute before June 30, 2026. After the EOL date using Pipeline Control Cloud Rules drop data will generate aCCU usage.
* If you have a commitment contract, work with your account team to add Advanced Compute before your next renewal to ensure continuous rule processing and authoring. Otherwise, rule creation will be disabled, and existing rules will be turned off at your renewal. After the EOL date when you renew, using Pipeline Control Cloud Rules drop data will generate aCCU usage.

## Next steps
1. Review your current use of NRQL Drop Filter Rules API.
2. Begin planning your migration to the [Pipeline cloud rules API](/docs/new-relic-control/pipeline-control/cloud-rules-api/).
3. All rules are now visible from either API to help you migrate to the Pipeline Control API.
4. Contact your New Relic representative or support for assistance with migration or to discuss your options.

We understand that changes to capabilities can be disruptive, and we are committed to supporting you through this transition. Our goal is to provide ample time and resources to ensure a smooth migration with minimal impact to your workflows.

Our support team is here to assist you during this transition. If you have any questions about these changes, please [contact Support](/docs/new-relic-solutions/solve-common-issues/find-help-get-support/) or reach out to your account team. To learn more about the advantages of Pipeline Control UI, check out [New Relic Pipeline Control](https://newrelic.com/platform/pipeline-control).

Thank you for your partnership and understanding as we continue to improve our platform and services.
