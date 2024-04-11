---
title: 'Important permission update for sharing charts'
summary: 'Update gives you more control over who can use the Get chart link feature'
releaseDate: '2024-04-12'
learnMoreLink: 'https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#data-share'
getStartedLink: ''
---

We have made some improvements to our existing Get Chart Link feature! Please read below about what is changing and how to use these improvements in the Get Chart Link feature. **These changes will take effect on April 30th, 2024.**

## What's changing?
We have implemented some improvements to Role-Based Access Controls (RBACs) for Pro and Enterprise accounts. Here is what you can expect to see if you are a user from **Pro or Enterprise account:**
- Admins will get new [permission options](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions/#dashboards) to allow certain users to view, create, and revoke chart links.
- Other users will gain access to the permissions via admins. The access will be possible only through custom roles which are created only by admins.
- Existing links from your account will continue to work. So if you want to delete/disable any of these existing links, please visit our [Manage Your Dashboard Documentation](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#data-share).


## Why?
We are updating the chart-sharing features to increase security controls for customer accounts and their admins. 

## What action is needed by you?
Review your user permissions and ensure the right user roles have access to creating live chart URLs.

Review the Documentation:
- [User permissions](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-permissions/#dashboards)
- [Manage your dashboard > Share your data](https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#data-share)
- [NerdGraph tutorial: List and revoke live chart URLs](https://docs.newrelic.com/docs/apis/nerdgraph/examples/manage-live-chart-urls-via-api/)