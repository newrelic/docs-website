---
title: 'End of Life Announcement: Pre-insights APM legacy embedded charts'
subject: EOL for pre-insights APM legacy embedded charts 
publishDate: '2025-08-10'
eolEffectiveDate: '2025-08-10'
---

We’re reaching out to inform you about an important change regarding the removal of APM Legacy Embedded Charts.

## What are APM legacy embedded charts? [#what-is-apm]

The embedded chart feature of the original New Relic RPM site allowed users to create a standalone version of a chart displayed in the UI. This standalone chart could be loaded by unauthenticated users and could be embedded in other sites, often dashboards or summary pages.

When New Relic launched the new user experience, we updated this functionality for users for the new platform. Previously created charts have remained accessible since then, and they can be identified by looking at the URL of the chart link. These legacy charts have a url pattern like: `https://rpm.newrelic.com/public/charts/<key>`

## Overview of changes [#overview]

As part of our continued efforts to enhance security and reliability, we’re retiring the APM legacy embedded charts. These public charts, created through the now deprecated legacy APM experience have remained accessible through public urls, which may also be embedded into external websites and applications.  We are preparing to deprecate this service, which will result in the **affected links failing to display the chart's data effective end of June 2026**. To replace them with new New Relic Charts, please visit the [link](/docs/query-your-data/explore-query-data/dashboards/share-charts-dashboards-externally/) for more information.

Failure to create replacement embedded charts may lead to missing data for your enterprise if you rely on the presence of APM Legacy Embedded Charts charts. We advise that you take this opportunity to explore the embedded chart links you are still accessing to create replacements.

## Impact by account type [#impact]

Effective end of June 2026, URLs generated prior to the rollout of New Relic one will expire on that date and will be inaccessible moving forward irrespective of their account (Free, Standard, Enterprise, Pro or any other accounts). Additionally, users in **Free and Standard accounts** will no longer be able to create embedded charts.

Effective end of June 2026, URLs generated prior to the rollout of New Relic One will expire and will be inaccessible moving forward, regardless of account tier (Free, Standard, Pro, Enterprise, or legacy accounts). Additionally, users in **Free and Standard accounts** will no longer be able to create embedded charts. For legacy, Standard, and Free tier customers, account renewal will not enable the use of public charts after the EOL date; to continue using this feature, customers must upgrade to **Pro or Enterprise accounts**.

## Actions required [#actions-required]

  - Follow the instructions [here](/docs/query-your-data/explore-query-data/dashboards/share-charts-dashboards-externally/) to enable the functionality to share charts publicly in your account
  - Since the legacy charts do not show the query used to create them, you’ll need to: 
    - Navigate to your APM & Services experience
      - Explore the charts available to see if there’s a good match
      - Click the ellipsis and select **Get Chart Link**
      
  
  - If a match is not found, but you know what data was being queried, then you can try and replicate the query in Data Explorer/UQE:
    - Run the query and select the type of chart to use 
    - Click the ellipsis and select **Get chart link**


## Additional support

Our support team is here to assist you during this transition. Please know that we’re committed to supporting you throughout this process. If you have any questions or need further assistance, please don't hesitate to reach out to our [support team](https://support.newrelic.com/s/).
