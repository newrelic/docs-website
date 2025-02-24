---
title: 'Updates to New Relic access control'
summary: 'New default role and access grants for upcoming new product capabilities'
releaseDate: '2025-02-19'
learnMoreLink: 'https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts/#admin-settings'
getStartedLink: ''
---
New Relic is introducing enhanced user access controls to support upcoming capabilities and features to be announced at [New Relic Now+](https://newrelic.com/event/new-relic-now-2025). This includes a new default role and access grants, effective February 19, 2025. Admins should review and audit grants if you want to limit access to new capabilities.


### What's changing?


1. **New Organization Product admin role:** We are adding a new [standard role](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts/#standard-roles) to your New Relic organization. This new role, called **Organization Product Admin**, will contain capabilities that allow users to configure features that are scoped to your organization. This role lives under the [administrative settings](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts/#admin-settings) section when creating and editing a group. 
2. **New standard access grant:** We are creating a new standard access grant that will assign the Organization Product Admin role to the [default User and Admin groups](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts/#default-groups). 
**Note: This will allow all users in these groups to access and manage these new features.**

4. **New permissions:** We are adding new permissions to the existing **Organization Manager** role. These permissions are ones we deem extra sensitive, like the ability to delete new types of entities.
5.  **Custom role management:** We have already released API endpoints to create and manage org-scoped custom roles, or what we call [administration settings](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts/#admin-settings) today.


These changes will take effect on **Feb 19, 2025**, before we announce and release the new features to which the new permissions pertain.


### What action is required? 


Admins should audit and make any necessary changes to your groups and access grants. If you would like to limit access, you can create custom groups and custom roles by completing both of the following:


1. Create custom groups [via our UI](https://docs.newrelic.com/docs/accounts/accounts-billing/new-relic-one-user-management/account-user-mgmt-tutorial/#group-access) or[ API](https://docs.newrelic.com/docs/apis/nerdgraph/examples/nerdgraph-manage-groups/#create-group)
2. Create custom roles, which can only be done via our API. Learn more in this [doc](https://docs.newrelic.com/docs/apis/nerdgraph/examples/nerdgraph-manage-groups/#create-role).


No action is required if default access is acceptable for your organization.


### What if I don't take action?


Users that are in the default User and Admin groups will be able to gain access to the new Advanced Compute features after completing the onboarding steps for the new capabilities.

Note that products in public preview will not generate additional CCU costs
