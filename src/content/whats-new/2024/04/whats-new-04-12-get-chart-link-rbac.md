---
title: 'Important permission update for sharing charts'
summary: 'Update gives you more control over who can use the Get chart link feature'
releaseDate: '2024-04-16'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#data-share'
getStartedLink: ''
---

We've made improvements to our existing Get Chart Link feature. These changes take effect on **April 30th, 2024.**

## What's changing?

We've improved Role-Based Access Controls (RBACs) for Pro and Enterprise accounts. If you're a user from Pro or Enterprise account, you can expect these changes:

- Admins receive new [permission options](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions/#dashboards) to allow certain users to view, create, and revoke chart links.
- Other users gain access to these permissions via admins. The access is only possible through custom roles created by admins configuring the new capability. Read more about configuration [in our documentation](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#data-share). 
- Your existing links within your account will continue to work. If you want to delete or disable any of these existing links, review the Data share section of our [Manage Your Dashboard Documentation](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#data-share) documentation.

## What do you need to do?

Review your user permissions so the right user roles have access to creating or revoking live chart URLs when the new capabilities become effective on April 30th: 

- To update your user permissions in the UI: From **[one.newrelic.com](https://one.newrelic.com)**, click **User menu** in the lower right, then go to **Administration > Access management > Role**. 
- You can learn more about updating your account settings at our [Introduction to account settings](https://docs.newrelic.com/docs/accounts/accounts-billing/general-account-settings/intro-account-settings/) doc.
- You can use NerdGraph to [list and revoke live chart URLs](https://docs.newrelic.com/docs/apis/nerdgraph/examples/manage-live-chart-urls-via-api/) as needed. 

## Why did we make these changes?

We're updating our chart sharing features to improve security controls for customer accounts and their admins. 
