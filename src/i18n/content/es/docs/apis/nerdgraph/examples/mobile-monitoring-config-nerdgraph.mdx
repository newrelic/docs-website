---
title: 'Tutorial de NerdGraph: ejemplos de monitoreo de agentes móviles'
tags:
  - APIs
  - NerdGraph
  - Examples
  - Mobile
metaDescription: 'For New Relic mobile monitoring, how to use our NerdGraph API to configure a mobile agent.'
freshnessValidatedDate: never
translationType: machine
---

Puede crear una aplicación móvil en la API NerdGraph en lugar de utilizar la UI. La ventaja de esto es que cuando llega el momento de instrumentar su aplicación móvil con New Relic, puede crear y recuperar mediante programación el token de la aplicación para copiarlo y pegarlo en su aplicación móvil.

## Crear una nueva aplicación móvil [#create-mobile]

A continuación se muestra un ejemplo de mutación para crear una nueva aplicación móvil. Debe proporcionar una identificación de cuenta y un nombre para la aplicación.

Mutación:

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

```JSON
{
  "accountId": Int!,
  "name": String!
}

```

## Recuperar el token de la aplicación [#get-mobile-token]

Puede recuperar un token de aplicación móvil con la siguiente consulta.

Consultar:

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

```JSON
{
  "guid": EntityGuid!
}
```

## Cambiar el nombre de una aplicación móvil [#configure-mobile-application]

Aquí hay un ejemplo de mutación que cambia el nombre de su aplicación móvil en New Relic:

Mutación:

```graphql
mutation UpdateMobileApplicationAlias($guid: EntityGuid!, $settings: $AgentApplicationSettingsUpdateInput) {
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

```JSON
{
  "guid": EntityGuid!,
  "settings": {
    "alias": String
  }
}
```

## Ejemplos de configuración de monitoreo de móviles [#configure-mobile-application]

A continuación se muestra un ejemplo de cómo configurar <InlinePopover type="mobile"/>ajustes a través de NerdGraph:

Mutación:

```graphql
mutation UpdateMobileSettingsExample($guid: EntityGuid!, $settings: AgentApplicationSettingsUpdateInput!) {
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

```JSON
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
