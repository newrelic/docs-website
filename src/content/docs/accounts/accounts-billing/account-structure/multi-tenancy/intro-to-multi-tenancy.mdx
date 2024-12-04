---
title: "Introduction to multi-tenancy" 
metaDescription: "The multi-tenancy feature helps you manage multiple organizations and accounts"
redirects:
  - /docs/accounts/original-accounts-billing/original-users-roles/parent-child-account-structure
  - /docs/new-relic-partnerships/partner-integration-guide/partner-account-maintenance/partnership-accounts-users-subscriptions
  - /docs/new-relic-partnerships/partner-integration-guide/getting-started/partner-integration-requirements
  - /docs/new-relic-partnerships/partner-integration-guide/getting-started/partners-contact-new-relic
  - /docs/new-relic-partnerships/partner-integration-guide/getting-started/co-branding-new-relic-partners
  - /docs/new-relic-partnerships/partner-integration-guide/getting-started/partnership-admin-console
  - /docs/new-relic-partnerships/partner-integration-guide/getting-started/support-resources-new-relic-partners
  - /docs/new-relic-partnerships/partner-integration-guide/getting-started/walkthrough-signoff
  - /docs/new-relic-partnerships/partnerships/getting-started/using-partner-portal
  - /docs/new-relic-partnerships/partnerships/getting-started/partner-marketing
  - /docs/new-relic-partnerships/partner-integration-guide/partner-account-maintenance/partner-account-access-administrators
  - /docs/new-relic-partnerships/partner-integration-guide/partner-account-maintenance/restricted-access-partnerships
  - /docs/new-relic-partnerships/partner-integration-guide/partner-account-maintenance/welcome-messages-partnerships
  - /docs/new-relic-partnerships/partner-integration-guide/partner-account-maintenance/staging-production
  - /docs/new-relic-partnerships/partner-integration-guide/partner-account-maintenance/tips-tricks
  - /docs/new-relic-partnerships/partner-integration-guide/new-relic-products-features/partner-products-pricing-billing
  - /docs/new-relic-partnerships/partner-integration-guide/new-relic-products-features/single-sign-access-control
  - /docs/new-relic-partnerships/partner-integration-guide/new-relic-products-features/other-partnership-settings
  - /docs/new-relic-partnerships/partner-integration-guide/appendix/version-history
  - /docs/new-relic-partnerships/partner-integration-guide/partner-account-maintenance/partner-api
  - /docs/new-relic-partnerships/partnerships/partner-api/partner-api-reference
  - /docs/new-relic-partnerships/partnerships/partner-api/partnership-api-keys
  - /docs/new-relic-partnerships/partnerships/partner-api/typical-integration-example
  - /docs/new-relic-partnerships/partnerships/partner-api/partnership-api-account-object
  - /docs/new-relic-partnerships/partnerships/partner-api/partnership-api-sub-account-object
  - /docs/new-relic-partnerships/partnerships/partner-api/partnership-api-user-object
  - /docs/new-relic-partnerships/partnerships/partner-api/partnership-api-subscription-object
  - /docs/new-relic-partnerships/partnerships/partner-api/partnership-billing-integration-api
  - /docs/new-relic-partnerships/partnerships/partner-api/product-buckets
  - /docs/apis/nerdgraph/tutorials/provisions-your-subscriptions-nerdgraph
freshnessValidatedDate: 2024-09-05
---

If your company is composed of more than one business unit, you can use multi-tenancy to model your company structure in New Relic. This feature allows you to set up multiple tenants (organizations) related to a primary, managing organization. 

This structure prevents the leakage of personally identifiable information (PII) and sets secure data boundaries between business units or end customers. You'll benefit from these boundaries whether you have a large enterprise company with multiple, independent business units or a managed service provider (MSP) overseeing customer environments.

<img
    style={{ maxWidth: '75%' }}
    title="Diagram showing the primary org with two related orgs"
    alt="Diagram showing the primary org with two related orgs"
    src="/images/accounts_diagram_multi-tenancy-overview.webp"
/>
<figcaption>
  This diagram is a simplified example of an enterprise company with two subsidiaries.  
</figcaption>

When you set up your company in a multi-tenant environment, your managing organization can take advantage of these benefits: 

* Consolidated billing: View aggregate billing details across your managed organizations.
* Managed organization creation: Allows select users within the managing organization to create additional managed organizations. This is useful for MSPs who are onboarding customers or enterprise customers who are acquiring/developing new business units.
* Account sharing: Allows select users within the managing organization to share an account to a managed organization. This is used mostly for collaborative use cases, such as managed services providers (MSPs) providing direct end customer access to the accounts they're monitoring.  
* Delegated administration: Allows select users within the managing organization to conduct user and access management administration within managed organizations. This feature is commonly used by MSPs who want to do all the administrative work for their managed customers.   


## Requirements [#requirements]

To use multi-tenancy, you need to complete the following for your organization:

1. Get approval: Contact your account representative to confirm your organization has been added to multi-tenancy. Once approved, you receive the multi-tenant entitlement.
2. Make sure you have correct user types: Users within the managing org that will leverage the above feature set need to be provisioned as either a core or full platform users.
3. Add users to a designated group: Users with the core or full platform user type need to be added to a group with `tenant_settings` applied. 


## Overview of multi-tenancy approaches [#approaches]

You can set up multi-tenancy in a couple of ways: high touch and low-touch. The approach you choose depends on how much control you want your managing organization to have over the managed organizations. You are not limited to a single approach&mdash;you can combine the high-touch and low-touch options.   

### High touch [#high-touch]

Use this approach if you are a managed services provider (MSP) or an enterprise customer who wants a high degree of control over the managed organizations. This approach is mostly used by MSPs who monitor customer data as it flows through customer accounts. MSPs can offer different degrees of high-touch experiences, depending on what their customers need.    

**Example**: Let's say you are an administrator in Betty's MSP that's set as a managing organization. You have two customers, Wayne Enterprises and Acme Widgets, who want you to monitor their data for them. They don't want to handle any administrative tasks and don't need direct access to New Relic. To set this up, you create accounts in Betty's MSP that correspond to Wayne Enterprises and Acme Widgets, and you monitor their telemetry in these accounts for them:

<img
    style={{ maxWidth: '75%' }}
    title="Diagram showing a managing org monitoring customer accounts"
    alt="Diagram showing a managing org monitoring customer accounts"
    src="/images/accounts_diagram_high-touch-no-view.webp"
/>

Later, users at Wayne Enterprises and Acme Widgets decide they want a more hands-on understanding of what's happening in the accounts you're monitoring for them. To solve this, you create organizations for Wayne Enterprises and Acme Widgets. You then share the accounts from Betty's MSP to their new corresponding organizations. Finally, you provision users in their respective organizations so they can see their data: 

<img
    style={{ maxWidth: '75%' }}
    title="Diagram showing a high-touch structure"
    alt="Diagram showing a high-touch structure"
    src="/images/accounts_diagram_high-touch-overview.webp"
/>

To create a structure like the one in the diagram above where Wayne Enterprises and Acme want to see their data, you'll make a series of NerdGraph API calls. You can use the steps below as a recipe for modeling your high-touch organization structure:  

1. [Create accounts and organizations](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation): As an administrator in Betty's MSP, execute a few mutations to create accounts and organizations.
    * Create accounts for Wayne Enterprises and Acme Widgets in Betty's MSP organization by running the `accountManagementCreateAccount` mutation  (you'll eventually share these accounts with their corresponding organizations).
    * Create the organizations Wayne Enterprises and Acme Widgets by running the `createOrganization` mutation, making sure to pass in the accounts you wanted to share from Betty's MSP:
        * As a byproduct of the organization creation calls, Wayne Enterprises and Acme Widgets will have their own default groups and roles created. (If you need more details about groups and roles, see our public docs site.) 
        * Since you specified the accounts to share, the Wayne Enterprises account is shared with the new Wayne Enterprises organization. Also, the Acme Widgets account is shared with the new Acme Widgets organization.  
        * We automatically set up access grants from the default groups against the shared accounts as part of the organization creation process.
2. [Manage users and access](/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration): Execute the `userManagementAddUsersToGroups` mutation to provision users into the default groups of Wayne Enterprises and Acme Widgets. 
3. [Account sharing](/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts): Later, if you decide to make account sharing changes, use these mutations to revoke or add new shared accounts.  

<Callout variant="tip">
  Once this structure is complete and the managed organizations start using the New Relic platform, aggregate usage is visible to you in Betty's MSP for consolidated billing.
</Callout>

When you're ready to create your first high-touch organizations, go to [Step 1: Create accounts and organizations](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation).

## Low touch [#low-touch]

If you're in an enterprise organization that has subsidiaries that run independently with little oversight, this is a good approach to model your organization in New Relic. With this structure, administrators in each organization handle their managed organizations' user and access management. Note that you will still have consolidated billing as part of your multi-tenant environment. 

**Example**:  Let's say you are an administrator in Clothing Holding Company that is set as the managing organization and want to set up two subsidiaries (Martha's Shoes and Rick's Outerwear). You create the two managed organizations which then allows the administrators of Martha's Shoes and Rick's Outerwear to independently manage their own accounts, groups, and users: 

<img
    style={{ maxWidth: '75%' }}
    title="Diagram showing a low-touch structure"
    alt="Diagram showing a low-touch structure"
    src="/images/accounts_diagram_low-touch-overview.webp"
/>

To create a structure like the one in the diagram above, you'll make a series of NerdGraph API calls. You can use the example below as a recipe for modeling your low-touch organization structure.  

1. [Create accounts and organizations](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation): As an administrator of Clothing Holding Company, create the organizations and accounts for Martha's Shoes and Rick's Outerwear by running the `createOrganization` mutation. 
    * As a byproduct of the organization creation calls, Martha's Shoes and Rick's Outerwear will have their own default groups and roles created. 
    * As part of the organization creation process, Clothing Holding Company sets up the initial account for both managed organizations. 
2. [Manage users and access](/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration): Execute some mutations to provision the first admin users.
    * This provisions users into the managed organization's `admin` group.
    * Since this group has organization management settings enabled, users in this group can conduct user and account management themselves.

When you're ready to create your first low-touch organizations, go to [Step 1: Create accounts and organizations](/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation).

## What's next? [#what-next]

If you haven't yet followed the links to the other docs listed in the recipes above, here's a bird's eye view of what you'll be doing to set up your organizations. Use these links to move sequentially between the steps. 
<DocTiles>
  <DocTile title='Step 1' path="/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation">Create accounts and organizations</DocTile>
  <DocTile title='Step 2' path="/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration">Manage users and access</DocTile>
  <DocTile title='Step 3' path="/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts">Share accounts (optional)</DocTile>
</DocTiles>
