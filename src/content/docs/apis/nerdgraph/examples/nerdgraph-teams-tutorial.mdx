---
title: "NerdGraph tutorial: Set up teams"
metaDescription: "How to create your New Relic Teams using NerdGraph"
tags:
    - Teams
    - APIs
    - NerdGraph
    - Examples
freshnessValidatedDate: never
---

As an alternative to setting up New Relic teams in the UI, you can set them up programmatically with our NerdGraph API.

For an easy way to get started, use our [NerdGraph API explorer](/docs/apis/nerdgraph/get-started/nerdgraph-explorer) to create and edit teams information. Definitions are available in NerdGraph for each of the fields in the examples below. If you need help using the GraphiQL IDE, see our [NerdGraph API explorer tutorial](/docs/apis/nerdgraph/get-started/nerdgraph-explorer/).

## Create a team [#create-a-team]

The following is an example of a NerdGraph call that creates a team using the `entityManagementCreateTeam` mutation query. 

```graphql
mutation {
  entityManagementCreateTeam(
    teamEntity: {
      name: "INSERT_YOUR_TEAM_NAME",
      description: "this is a description of a team",
      aliases: ["tn", "tName"],
      externalIntegration: {
        externalId: "INSERT_THE_EXTERNAL_ID",
        type: IAM_GROUP
      },
      resources: [
        {content: "email@mail.com", title: "email", type: "EMAIL"},
        {content: "https://slack.com/channels/team", title: "Team slack", type: "SLACK"}
      ],
      scope: {
        id: "INSERT_YOUR_ORGANIZATION_ID",
        type: ORGANIZATION
      }
  ) {
    entity {
      id
      ownership {
        id
      }
      membership {
        id
      }
    }
  }
}
```

When you use this mutation, remember that:

* The only required fields are `teamName` and `scope`.
* If you need help figuring out `organizationID`, see [Retrieve the organization Id](#organization-id) information below.
* `externalIntegration` refers to a connection with an external system to keep the team in sync.
    * `externalId`: Id in the external system 
    * `type`: The type of external system
* When you create a team, two collections entities are automatically created and linked to it. For more information on adding entities, refer to [Manage collections](#manage-collections).
    * `ownership`: This collection manages the entities owned by the team.
    * `membership`: This collection manages the team's members. For more information on `userID`, refer to [Retrieve the user Id](#user-id).

## Retrieve the organization `id` [#organization-id]

To create a Team you need to provide the Organization id in the scope.

```graphql
{
  actor {
    organization {
      name
      id
    }
  }
}
```

## Manage collections [#manage-collections]

To add users or entities to a team, you need to add members to the collections associated with the team. Use the appropriate mutation with the respective collection ID. Use the `membership` collection for users and the `ownership` collection for entities. You can add up to 100 entities to a collection per request.

```graphql
mutation {
  entityManagementAddCollectionMembers(collectionId: "INSERT_YOUR_COLLECTION_ID", ids: ["ENTITY_ID"])
}
```

To remove users or entities to a team you will need to remove members from the collection entities attached to the team using the following query.

```graphql
mutation {
  entityManagementRemoveCollectionMembers(collectionId: "INSERT_YOUR_COLLECTION_ID", ids: ["ENTITY_ID"])
}
```

## Retrieve the user `id` [#user-id]

To add users to a team, you need the unique identifier for the user entity (also known as the GUID). 

A number of queries are available to help you find the GUID.

<Callout variant="tip">
  In the examples below, remember that all the types are case sensitive. For example, you must use `USER` and `TEAM`.
</Callout>

### Find users domain `id` by name or email [#query-by-name]

First, you need to find the user domain ID. You can do this by querying and filtering with the user's name or email:

```graphql
{
  actor {
    users {
      userSearch(query: {scope: {email: "INSERT_PARTIAL_EMAIL"}}) {
        users {
          userId
        }
      }
    }
  }
}
```

```graphql
{
  actor {
    users {
      userSearch(query: {scope: {name: "INSERT_PARTIAL_NAME"}}) {
        users {
          userId
        }
      }
    }
  }
}
```

### Find id having the domain `id`  [#query-by-domain-id]

Once you have the domain `id` you can search for the GUID with the following query:

```graphql
{
  actor {
    entitySearch(query: "type='USER' AND tags.userId = 'INSERT_DOMAIN_ID'") {
      results {
        entities {
          guid
        }
      }
    }
  }
}
```

For this type of query, the `in` operator is also valid, for example:

```graphql
...
     entitySearch(query: "type = 'USER' AND tags.userId IN ('domainId1', 'domainId2')") {
...
```

## Retrieve team information [#retrieve-team-info] 

You have a few options for retrieving team information.

### By team `id` [#team-id]

Use the following query to retrieve the information about a team if you have the team `id`:

```graphql
{
  actor {
    entityManagement {
      entity(id = 'INSERT_TEAM_ENTITY_ID'") {
        ... on EntityManagementTeamEntity {
          id
          name
        }
      }
    }
  }
}
```

### All teams [#query-all-teams]

If don't have the `team id`, you can also check all the existing teams:

```graphql
{
  actor {
    entityManagement {
      entitySearch(query: "type = 'TEAM'") {
        entities {
          ... on EntityManagementTeamEntity {
            id
            name
            description
            aliases
          }
        }
      }
    }
  }
}
```

## Update a team [#update-team]

Use the `entityManagementUpdateTeam` mutation to update a team. Use the queries above to find the `id` of the team:

```graphql
mutation {
  entityManagementUpdateTeam(
    id: "INSERT_YOUR_TEAM_ID",
    teamEntity: {
      ...
    }) {
    entity {
      id
    }
  }
}
```

## View elements of a collection [#collection-members]

Use the `collectionElements` query to view users in the membership collection or entities in the ownership collection.

```graphql
{
  actor {
    entityManagement {
      collectionElements(filter: {collectionId: {eq: "INSERT_YOUR_COLLECTION_ID"}}) {
        items {
          id
          name
          type
        }
        nextCursor
      }
    }
  }
}
```

## View and update team organization settings [#update-team-settings]

Teams are organization-scoped entities, and as such, they have some settings that are applied at organization level. To query the settings for your organization you can use the following:

```graphql
{
  actor {
    entityManagement {
      entity(id: “INSERT_TEAMS_SETTINGS_ID”) {
        ... on EntityManagementTeamsOrganizationSettingsEntity {
          discovery {
            enabled
            tagKeys
          }
          syncGroups {
            rules {
              conditions {
                value
                type
              }
            }
            enabled
          }
        }
      }
    }
  }
}
```

Keep the following in mind when using this query: 
* `discovery`: This is a feature that allows entities to be assigned to teams via their tags.  
* `enabled`: This specifies whether the `discovery` feature is enabled for the organization.  
* `tagKeys`: The tag keys that are used to look for team names and aliases. The default value is `Team`. So, any entity with the tag `Team: teamName` would be assigned to the team with that name or any alias matching that name.
* `syncGroups`: This feature allows you to define rules for recognising user groups, enabling the full automation of CRUD operations for teams from identity providers (IdPs). This ensures that team creation, updatation, and membership management are always up-to-date without requiring manual intervention.
* `enabled`: This specifies whether the feature `syncGroups` is enabled for the organization.  
* `rules`: A list of `conditions`.
* `conditions`: A list of `value` and `type`.
* `value`: The string to match with identify provider groups names.
* `type`: The value type that needs to match the group name. Possible values are `STARTS_WITH`, `CONTAINS`, and `ENDS_WITH`.

Only certain members of an organization are allowed to edit the organization settings. This is done with the following query:

```graphql
mutation {
  entityManagementUpdateTeamsOrganizationSettings(
    id: "0bf6d7b0-e1f3-4172-a26a-6e4e0asample"
    teamsOrganizationSettingsEntity: {
      discovery: {
        enabled: true,
        tagKeys: ["Owner", "OwningTeam"]
      },
      syncGroups: {
        enabled: true,
        rules: [
          {
            conditions: [
              {
                type: "STARTS_WITH",
                value: "testing"
              }
            ]
          }
        ]
      }
    }
  )
}
```


<UserJourneyControls
previousStep={{path: "/docs/service-architecture-intelligence/getting-started", title: "Return to teams UI setup", body: "Introduction to New Relic teams"}}
/>
