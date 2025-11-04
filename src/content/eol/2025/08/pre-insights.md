---
title: 'End of Life Announcement: Pre-insights APM legacy embedded charts'
subject: On June 30, 2026, APM legacy embedded charts will be deprecated
publishDate: '2025-10-17'
eolEffectiveDate: '2026-06-30'
---

We’re reaching out to inform you about an important change regarding the removal of APM Legacy Embedded Charts.

## What are APM legacy embedded charts? [#what-is-apm]

The embedded chart feature of the original New Relic RPM site allowed users to create a standalone version of a chart displayed in the UI. This standalone chart could be loaded by unauthenticated users and could be embedded in other sites, often dashboards or summary pages.

When New Relic launched the new user experience, we updated this functionality for users for the new platform. Previously created charts have remained accessible since then, and they can be identified by looking at the URL of the chart link. These legacy charts have a url pattern like: `https://rpm.newrelic.com/public/charts/<key>`

## Overview of changes [#overview]

As part of our continued efforts to enhance security and reliability, we're retiring APM legacy embedded charts. These public charts, created through the now deprecated legacy APM experience, have remained accessible through public URLs, which may also be embedded into external websites and applications. We are preparing to deprecate this service, which will result in the **affected links failing to display the chart's data effective June 30, 2026**. To replace them with updated New Relic charts, [learn how to share charts externally](/docs/query-your-data/explore-query-data/dashboards/share-charts-dashboards-externally/).

**Note**: This change only affects charts shared publicly via external URLs. It doesn't impact charts viewed within New Relic.

Failure to create replacement embedded charts may lead to missing out on the information in those APM legacy embedded charts. We advise that you take this opportunity to explore the embedded chart links to create replacement charts in order to continue accessing data.

## Impact by account type [#impact-account-type]

Effective June 30, 2026, the legacy embedded charts feature will be retired, and all legacy URLs will expire for all users.

 - **For Pro & Enterprise Accounts**: Your legacy charts will stop working. You can manually recreate them using the new embedded charts feature, which is already available to you.
 - **For Free & Standard Accounts**: Your legacy charts will stop working. The new embedded charts feature is not available on your current tier.
 - **Action Required for Free/Standard**: To continue using embedded charts, you must upgrade to a Pro or Enterprise account and recreate your charts using the new feature.

## What do you need to do [#what-to-do]

- Follow the instructions [here](/docs/query-your-data/explore-query-data/dashboards/share-charts-dashboards-externally/) to enable the functionality to share charts publicly in your account
- Since the legacy charts do not show the query used to create them, you’ll need to: 
  - Navigate to your **APM & Services** page
    - Explore the available charts to find a match for your legacy chart
    - Click the ellipsis (three dots) and select **Get Chart Link**

<img
     title="Image of the Get Chart Link"
     alt="Image of the Get chart link"
     src="/images/get-chart-link.webp"
   />
  
- If a match is not found, but you know what data was being queried, then you can try and replicate the query in **Data Explorer** (Query Your Data):
  - Run the query and select the type of chart to use 
  - Click the ellipsis and select **Get Chart Link**

## Additional support

Our support team is here to assist you during this transition. Please know that we’re committed to supporting you throughout this process. If you have any questions or need further assistance, please don't hesitate to reach out to our [support team](https://support.newrelic.com/s/).
