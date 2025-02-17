---
title: "Tutoriel NerdGraph\_:agent monitoring exemples mobiles"
tags:
  - APIs
  - NerdGraph
  - Examples
  - Mobile
metaDescription: 'For New Relic mobile monitoring, how to use our NerdGraph API to configure a mobile agent.'
freshnessValidatedDate: never
translationType: machine
---

Vous pouvez créer une application mobile dans l&apos;API NerdGraph au lieu d&apos;utiliser l&apos;UI. L&apos;avantage de cela est que lorsqu&apos;il est temps d&apos;instrument votre application mobile avec New Relic, vous pouvez créer et récupérer par programmation le jeton application à copier et coller dans votre application mobile.

## Créer une nouvelle application mobile [#create-mobile]

Voici un exemple de mutation pour créer une nouvelle application mobile. Vous devez fournir un identifiant de compte et un nom pour l&apos;application.

Mutation:

```graphql
mutation CreateExampleMobileApplication($accountId: Int!, $name: String!) {
  agentApplicationCreateMobile(accountId: $accountId, name: $name) {
    accountId
    applicationToken
    guid
    name
  }
}
```

Variables:

```json
{
  "accountId": Int!,
  "name": String!
}
```

## Récupération du jeton d&apos;application [#get-mobile-token]

Vous pouvez récupérer un jeton d’application mobile avec la requête suivante.

requête:

```graphql
query FetchMobileApplicationToken($guid: EntityGuid!) {
  actor {
    entity(guid: "") {
      ... on MobileApplicationEntity {
        guid
        name
        mobileProperties {
          applicationToken
        }
      }
    }
  }
}
```

Variables:

```json
{
  "guid": EntityGuid!
}
```

## Changer le nom d&apos;une application mobile [#configure-mobile-application]

Voici un exemple de mutation qui change le nom de votre application mobile dans New Relic :

Mutation:

```graphql
mutation UpdateMobileApplicationAlias(
    $guid: EntityGuid!, 
    $settings: $AgentApplicationSettingsUpdateInput
) {
  agentApplicationSettingsUpdate(guid: $guid, settings: $settings) {
    alias
    guid
    errors {
      description
      errorClass
      field
    }
  }
}
```

Variables:

```json
{
  "guid": EntityGuid!,
  "settings": {
    "alias": String
  }
}
```

## Exemples de configuration de monitoring des applications mobiles [#configure-mobile-application]

Voici un exemple de configuration des paramètres <InlinePopover type="mobile" />via NerdGraph :

Mutation:

```graphql
mutation UpdateMobileSettingsExample(
  $guid: EntityGuid!
  $settings: AgentApplicationSettingsUpdateInput!
) {
  agentApplicationSettingsUpdate(guid: $guid, settings: $settings) {
    guid
    errors {
      description
      errorClass
      field
    }
    alias
    mobileSettings {
      networkSettings {
        aliases {
          alias
          hosts
        }
        filterMode
        hideList
        ignoredStatusCodeRules {
          hosts
          statusCodes
        }
        showList
      }
      useCrashReports
    }
  }
}
```

Variables:

```json
{
  "guid": EntityGuid!,
  "settings": {
    "alias": String,
    "mobileSettings": {
      "networkSettings": {
        "aliases": [
          {
            "alias": String!,
            "hosts": [String!]!
          }
        ],
        "filterMode": AgentApplicationSettingsNetworkFilterMode,
        "hideList": [String!],
        "ignoredStatusCodeRules": [
          {
            "hosts": [String!]!,
            "statusCodes": [String!]!
          }
        ],
        "showList": [String!]
      },
      "useCrashReports": Boolean
    }
  }
}
```