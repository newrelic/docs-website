---
title: 'Office 365 connectors for Microsoft Teams End-of-life'
summary: 'Microsoft is retiring Office 365 connectors within Microsoft Teams '
releaseDate: '2025-01-23'
learnMoreLink: 'https://support.newrelic.com/s/hubtopic/aAXPh0000008Rz7OAE/upcoming-endoflife-microsoft-teams-connectors-integration'
---

Microsoft has announced the [retirement of the Office 365 connectors feature for Microsoft Teams](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/). This change could impact the New Relic accounts that use these connectors for outbound notifications. The transition to a new URL structure is required as part of [Microsoft's service hardening updates](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/). 

As a result, the webhook URLs of all existing Office 365 connectors with New Relic must either (1) be updated following the instructions below or (2) deleted and replaced with new connectors by January 31, 2025 to continue posting messages into Microsoft Teams. [Microsoft recommends](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/) deleting existing connectors and creating new connectors to avoid having to do another round of updates at a later date. 

## What you need to do

1. **To update your existing connectors:** Follow the steps [recommended by Microsoft](https://learn.microsoft.com/en-us/microsoftteams/m365-custom-connectors#update-connectors-url) to update the webhook URLs of your Office 365 connectors. Edit the corresponding webhook destinations in New Relic UI by updating the new URLs in the **Endpoint URL** field.
    
    **NOTE:** [Microsoft recommends](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/) deleting existing connectors and creating new connectors to prevent further updates. See additional instructions below to create new connectors.
    
    OR

2. **To create new connectors:** Microsoft recommends designing a workflow within Microsoft Teams using the Workflows app. We have provided the step-by-step instructions along with a [sample payload template](/docs/alerts/get-notified/new-relic-webhook-for-microsoft-teams-workflow/) to help you get started.


Our support team is here to assist you during this transition. Additional solutions may be available from New Relic in the future. If you have questions about these changes, please [contact Support](https://docs.newrelic.com/docs/new-relic-solutions/solve-common-issues/find-help-get-support/).