---
title: "Step 1: Create accounts and organizations" 
metaDescription: "Create organizations and accounts in the multi-tenency structure"
freshnessValidatedDate: 2024-09-05
---


Multi-tenancy allows you to set up any number of managed organizations in New Relic that are related to a primary, managing  organization. The first step in setting up multi-tenancy is to create accounts and organizations. To do this, you'll use various NerdGraph mutations, depending on the organization structure you're creating:

* [High touch](#high-touch): Managed service providers typically use this approach to onboard customers who want to access New Relic directly.  

* [Low touch](#low-touch): Enterprise businesses use this approach to create new organizations and accounts for business units or subsidiaries in New Relic. 
    
Not sure which approach to take? See [Overview of multi-tenancy approaches](/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy#approaches).  

<Callout variant="tip"> 
  If you are a multi-tenant customer on consumption pricing, ingest and user counts will be aggregated across your managed organizations. This aggregate data is visible only to the managing organization. 
</Callout>

## Requirements [#requirements]

As a reminder, to use the multi-tenancy feature, make sure you've completed the following for your organization:

1. Get approval: Contact your account representative to confirm your organization has been added to multi-tenancy. Once approved, you receive the multi-tenant entitlement.
2. Make sure you have correct user types: Users within the managing org that will leverage the above feature set need to be provisioned as either a core or full platform users.
3. Add users to appropriate group: Users with the core or full platform user type need to be added to a group with `tenant_settings` applied. 

## What can you call in NerdGraph? [#org-calls]

Find the mutations below that apply to the approach you want to take: low touch or high touch. 

### High touch structure [#high-touch]

If you're an administrator in a managed service provider or an enterprise who wants a lot of control over subsidiaries, complete the following:

<CollapserGroup>
  <Collapser
      id="high-touch-only-share"
      title="High touch: Create an account to share"
  >

A key benefit in the high-touch approach is that you can create customer accounts right in your own managing organization. These accounts in your managing organiztion allow you to monitor the telemetry of your customers. 

Then, if your customers decide they want to see the data in the account you're monitoring for them, you can share the account when you create an organization for them. Users in your managed organizations can only see the data in the accounts you specify.

To create accounts that you plan to share with managed organizations, execute the following mutation:

```graphql
mutation {
  accountManagementCreateAccount(
    managedAccount: { name: "NEW_ACCOUNT_NAME", regionCode: "eu01" }
  ) {
    managedAccount {
      id
      name
      regionCode
    }
  }
}
```

If you make a mistake and need to rename your account, see our [NerdGraph tutorial](/docs/apis/nerdgraph/examples/manage-accounts-nerdgraph/#rename-accounts). 

Once you create the accounts you want to share, you're ready to create organizations.
  </Collapser> 

  <Collapser
      id="high-touch-org"
      title="High touch: Create an organization"
  >
When you create an organization in a high-touch structure, you will often want to share an account you're managing in your own organization with the users of a managed organization. To create an organization and share an account at the same time, run a mutation similar to this:


```graphql
mutation {
  organizationCreate(
    customerId: "CC-1234567890"
    organization: {name: "New Customer Organization Name"}
    sharedAccount: {accountId: 1234, limitingRoleId: 0}
  ) {
    jobId
  }
}
```
If you don't initially want to share an account with a managed organization, you can always use the `organizationCreateSharedAccount` mutation later. For details about how to use that mutation, see [Step 3: Share accounts](/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts).
    </Collapser>
  </CollapserGroup>

### Low-touch structure [#low-touch]

  If you're an administrator in an enterprise organization who doesn't need much control over subsidiaries, you can create a managed organization and managed account in a single call:

  <CollapserGroup>
    <Collapser
        id="low-touch-org"
        title="Low touch: Create an organization"
    >
This mutation creates an organization and a new managed account:

```graphql
mutation {
  organizationCreate(
    customerId: "CC-123456789"
    newManagedAccount: {name: "New Managed Account Name", regionCode: EU01}
    organization: {name: "New Organizanization Name"}
  ) {
    jobId
  }
}
```
    </Collapser>

</CollapserGroup>

### Query your organizations [#org-queries]

Use the following query to keep track of your managed organizations:

<CollapserGroup>
    <Collapser
      id="list-orgs"
      title="List the managed organizations"
    >
```graphql
{
  customerAdministration {
    organizations {
      items {
        id
        name
      }
      nextCursor
    }
  }
}
```
    </Collapser>
  </CollapserGroup>










<UserJourneyControls
previousStep={{path: "/docs/accounts/accounts-billing/account-structure/multi-tenancy/intro-to-multi-tenancy", title: "Return to start", body: "Introduction to multi-tenancy"}}
nextStep={{path: "/docs/accounts/accounts-billing/account-structure/multi-tenancy/delegated-administration", title: "Step 2", body: "Manage users and access"}}
/>
