---
title: 'Tutorial de NerdGraph: Configurar equipos'
metaDescription: How to create your New Relic Teams using NerdGraph
tags:
  - Teams
  - APIs
  - NerdGraph
  - Examples
freshnessValidatedDate: never
translationType: machine
---

Como alternativa a la configuración de equipos New Relic en la UI, puedes configurarlos mediante programación con nuestra API NerdGraph.

Para comenzar fácilmente, emplee nuestro [explorador de API NerdGraph](/docs/apis/nerdgraph/get-started/nerdgraph-explorer) para crear y editar información de equipos. Las definiciones están disponibles en NerdGraph para cada uno de los campos en los ejemplos siguientes. Si necesita ayuda para emplear el IDE GraphiQL, consulte nuestro [tutorial del explorador de API NerdGraph](/docs/apis/nerdgraph/get-started/nerdgraph-explorer/).

## Crear un equipo [#create-a-team]

El siguiente es un ejemplo de una llamada NerdGraph que crea un equipo empleando la consulta de mutación `entityManagementCreateTeam` .

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

Cuando emplees esta mutación, recuerda que:

* Los únicos campos obligatorios son `teamName` y `scope`.

* Si necesita ayuda para determinar `organizationID`, consulte [Recuperar la información de identificación de la organización](#organization-id) a continuación.

* `externalIntegration` Se refiere a una conexión con un sistema externo para mantener al equipo sincronizado.

  * `externalId`: Id en el sistema externo
  * `type`:El tipo de sistema externo

* Cuando se crea un equipo, se crean automáticamente dos entidades de colección y se vinculan a él. Para obtener más información sobre cómo agregar entidades, consulte [Gestionar colecciones](#manage-collections).

  * `ownership`:Esta colección gestiona la entidad propiedad del equipo.
  * `membership`:Esta colección gestiona los miembros del equipo. Para obtener más información sobre `userID`, consulte [Recuperar el Id. de usuario](#user-id).

## Recuperar la organización `id` [#organization-id]

Para crear un equipo, debe proporcionar el ID de la organización en el alcance.

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

## Gestionar colecciones [#manage-collections]

Para agregar un usuario o entidad a un equipo, es necesario agregar miembros a las colecciones asociadas al equipo. Emplee la mutación adecuada con el ID de colección correspondiente. Emplee la colección `membership` para el usuario y la colección `ownership` para la entidad. Puede agregar hasta 100 entidades a una colección por solicitud.

```graphql
mutation {
  entityManagementAddCollectionMembers(collectionId: "INSERT_YOUR_COLLECTION_ID", ids: ["ENTITY_ID"])
}
```

Para eliminar un usuario o entidad de un equipo, deberá eliminar afiliados a la colección entidad adjunta al equipo mediante la siguiente consulta.

```graphql
mutation {
  entityManagementRemoveCollectionMembers(collectionId: "INSERT_YOUR_COLLECTION_ID", ids: ["ENTITY_ID"])
}
```

## Recuperar el usuario `id` [#user-id]

Para agregar un usuario a un equipo, necesita el identificador único para la entidad del usuario (también conocido como GUID).

Hay un serial de consultas disponibles para ayudarlo a encontrar el GUID.

<Callout variant="tip">
  En los ejemplos siguientes, recuerde que todos los tipos distinguen entre mayúsculas y minúsculas. Por ejemplo, debes emplear `USER` y `TEAM`.
</Callout>

### Encontrar usuario de dominio `id` [#query-by-name]

Primero, debes encontrar el ID del dominio del usuario. Puedes hacer esto consultando y filtrando con el nombre o email del usuario:

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

### Encuentra id que tenga el dominio `id` [#query-by-domain-id]

Una vez que tengas el dominio `id` puedes buscar el GUID con la siguiente consulta:

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

Para este tipo de consulta también es válido el operador `in` , por ejemplo:

```graphql
...
     entitySearch(query: "type = 'USER' AND tags.userId IN ('domainId1', 'domainId2')") {
...
```

## Recuperar información del equipo [#retrieve-team-info]

Tiene algunas opciones para recuperar información del equipo.

### Por equipo `id` [#team-id]

Emplee la siguiente consulta para recuperar la información sobre un equipo si tiene el equipo `id`:

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

### Todos los equipos [#query-all-teams]

Si no tienes el `team id`, también puedes consultar todos los equipos existentes:

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

## Actualizar un equipo [#update-team]

Emplee la mutación `entityManagementUpdateTeam` para actualizar un equipo. Emplee la consulta anterior para encontrar el `id` del equipo:

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

## Ver elementos de una colección [#collection-members]

Emplee la consulta `collectionElements` para ver el usuario en la colección de membresía o la entidad en la colección de propiedad.

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

## Ver y actualizar la configuración de la organización del equipo [#update-team-settings]

Los equipos son entidades de ámbito organizacional y, como tales, tienen algunas configuraciones que se aplican a nivel de organización. Para consultar la configuración de su organización puede emplear lo siguiente:

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

Tenga en cuenta lo siguiente al emplear esta consulta:

* `discovery`:Esta es una característica que permite asignar entidades a equipos a través de su etiqueta.
* `enabled`:Esto especifica si la característica `discovery` está habilitada para la organización.
* `tagKeys`:Las claves de etiqueta que se emplean para buscar nombres de equipo y alias. El valor predeterminado es `Team`. Por lo tanto, cualquier entidad con la etiqueta `Team: teamName` se asignaría al equipo con ese nombre o cualquier alias que coincida con ese nombre.
* `syncGroups`:Esta función le permite definir reglas para reconocer grupos de usuarios, lo que permite la automatización completa de las operaciones CRUD para equipos de proveedores de identidad (IdP). Esto garantiza que la creación, actualización y gestión de membresías del equipo estén siempre actualizadas sin necesidad de intervención manual.
* `enabled`:Esto especifica si la característica `syncGroups` está habilitada para la organización.
* `rules`:Una lista de `conditions`.
* `conditions`:Una lista de `value` y `type`.
* `value`:La cadena que debe coincidir con los nombres de los grupos de proveedores de identificación.
* `type`:El tipo de valor que debe coincidir con el nombre del grupo. Los valores posibles son `STARTS_WITH`, `CONTAINS` y `ENDS_WITH`.

Sólo ciertos afiliados a una organización pueden editar la configuración de la organización. Esto se hace con la siguiente consulta:

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

<UserJourneyControls previousStep={{"path":"/docs/service-architecture-intelligence/getting-started","title":"Regresar a la configuración UI de los equipos","body":"Introducción a los equipos de New Relic"}} />