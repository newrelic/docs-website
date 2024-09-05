---
title: "Step 2: Manage users and access" 
metaDescription: "Use the delegated administration options in multi-tenancy to manage user access in other organizations"
freshnessValidatedDate: 2024-09-05
---

When setting up multi-tenancy, you can use delegated administration to make user or access management changes within other managed organizations. In the case of managed service providers, delegated administration allows you to manage users and access on behalf of your end customers. 

## Requirements [#requirements]

As a reminder, to use the multi-tenancy feature, make sure you've completed the following for your organization:

1. Get Approval: Contact your account representative to confirm your organization has been added to multi-tenancy. Once approved, you receive the multi-tenant entitlement.
2. Make sure you have correct user types: Users within the managing org that will leverage the above feature set need to be provisioned as either a core or full platform users.
3. Add users to appropriate group: Users with the core or full platform user type need to be added to a group with `tenant_settings` applied. 



## What can you call in NerdGraph? [#user-calls]

Once you confirm that you meet the requirements for multi-tenancy, you can call our NerdGraph queries and mutations for managing users in managed organizations. 

You'll be able to query all `customerAdministration` fields and execute a variety of mutations:


<CollapserGroup>
    <Collapser
        id="grant-access-to-group"
        title="Grant access to user group"
    >
Use this mutation to grant access to a group. To find the `roleID`, see [List roles](#list-roles).

```graphql
mutation {
  authorizationManagementGrantAccess(
    grantAccessOptions: {
      groupId: "11111111-1111-1111-1111-111111111111"
      accountAccessGrants: {
        accountId: YOUR_ACCOUNT_ID
        roleId: "YOUR_ROLE_ID"
      }
    }
  ) {
    roles {
      displayName
      accountId
    }
  }
}
```
    </Collapser>
    <Collapser
        id="revoke-access-to-group"
        title="Revoke access to user group"
    >
```graphql
mutation {
  authorizationManagementRevokeAccess(
    revokeAccessOptions: {
      accountAccessGrants: {
        accountId: YOUR_ACCOUNT_ID
        roleId: "YOUR_ROLE_ID"
      }
      groupId: "YOUR_GROUP_ID"
    }
  ) {
    roles {
      accountId
      displayName
    }
  }
}
```        
    </Collapser>
    <Collapser
        id="create-user-group"
        title="Create user group"
    >
    
```graphql
mutation {
  userManagementCreateGroup(
    createGroupOptions: {
      authenticationDomainId: "YOUR_AUTH_DOMAIN_ID"
      displayName: "GROUP_DISPLAY_NAME"
    }
  ) {
    group {
      displayName
      id
    }
  }
}


 ```   
    </Collapser>
    <Collapser
        id="delete-user-group"
        title="Delete user group"
    >
```graphql
mutation {
  userManagementDeleteGroup(groupOptions: {id: "GROUP_ID_HERE"}) {
    group {
      displayName
      id
    }
  }
}
```
    </Collapser>
    <Collapser
        id="add-user-to-group"
        title="Add user to a group"
    >
 ```graphql
mutation {
    userManagementAddUsersToGroups(addUsersToGroupsOptions: {groupIds: ["II"], userIds: ["3"]}) {
	groups {
  	  id
  	  displayName
  	  users {
    	    totalCount
  	  }
	}
  }
}
```   
    
    </Collapser>
    <Collapser
        id="remove-user-from-group"
        title="Remove user from a group"
    >

```graphql
mutation {
  userManagementRemoveUsersFromGroups(
    removeUsersFromGroupsOptions: {
      groupIds: [YOUR_GROUP_IDS]
      userIds: [YOUR_USER_IDS]
    }
  ) {
    groups {
      displayName
      id
    }
  }
}

```
    </Collapser>
    <Collapser
        id="modify-group-name"
        title="Modify group name"
    >
```graphql
mutation {
  userManagementUpdateGroup(
    updateGroupOptions: {
      id: "YOUR_GROUP_ID"
      displayName: "NEW_GROUP_DISPLAY_NAME"
    }
  ) {
    group {
      displayName
      id
    }
  }
}
```
    </Collapser>
    <Collapser
        id="Create new user"
        title="Create new user"
    >
Use this mutation to create a new user. To find the `authenticationDomainId`, see 
[Query authentication domains](#query-domains).

```graphql
mutation {
  userManagementCreateUser(
    createUserOptions: {
      authenticationDomainId: "B"
      email: "a@b.c"
      name: "A B C"
    }
  ) {
    createdUser {
      id
      email
      name
    }
  }
}
```
    </Collapser>
    <Collapser
        id="delete-user"
        title="Delete user"
    >
```graphql
mutation {
  userManagementDeleteUser(deleteUserOptions: {id: "ID_OF_YOUR_USER"}) {
    deletedUser {
      id
    }
  }
}

```
    </Collapser>
    <Collapser
        id="query-domains"
        title="Query authentication domains"
    >
```graphql
{
  customerAdministration {
    authenticationDomains(filter: {organizationId: {eq: "Y"}}) {
  	items {
    	  id
    	  name
    	  provisioningType
    	  authenticationType
  	}
    }
  }
}
```
    </Collapser>
    <Collapser
        id="list-roles"
        title="List roles"
    >
```graphql
{
  customerAdministration {
    roles(filter: {organizationId: {eq: "ANY_ORG_ID"}}) {
      items {
        id
        name
        scope
        type
      }
    }
  }
}
```
    </Collapser>
</CollapserGroup>

<UserJourneyControls
previousStep={{path: "/docs/accounts/accounts-billing/account-structure/multi-tenancy/org-creation", title: "Step 1", body: "Create accounts and  organizations"}}
nextStep={{path: "/docs/accounts/accounts-billing/account-structure/multi-tenancy/share-accounts", title: "Step 3", body: "Share accounts (optional)"}}
/>
