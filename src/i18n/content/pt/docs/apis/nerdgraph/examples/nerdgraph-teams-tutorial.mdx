---
title: 'Tutorial do NerdGraph: Configurar equipes'
metaDescription: How to create your New Relic Teams using NerdGraph
tags:
  - Teams
  - APIs
  - NerdGraph
  - Examples
freshnessValidatedDate: never
translationType: machine
---

Como alternativa à configuração de equipes do New Relic na interface do usuário, você pode configurá-las programaticamente com nossa API NerdGraph.

Para começar facilmente, use nosso [explorador de API NerdGraph](/docs/apis/nerdgraph/get-started/nerdgraph-explorer) para criar e editar informações de equipes. As definições estão disponíveis no NerdGraph para cada um dos campos nos exemplos abaixo. Se precisar de ajuda para usar o IDE GraphiQL, consulte nosso [tutorial do NerdGraph API Explorer](/docs/apis/nerdgraph/get-started/nerdgraph-explorer/).

## Crie uma equipe [#create-a-team]

A seguir está um exemplo de uma chamada NerdGraph que cria uma equipe usando a consulta de mutação `entityManagementCreateTeam` .

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

Ao usar esta mutação, lembre-se de que:

* Os únicos campos obrigatórios são `teamName` e `scope`.

* Se precisar de ajuda para descobrir `organizationID`, consulte [Recuperar as informações de ID da organização](#organization-id) abaixo.

* `externalIntegration` refere-se a uma conexão com um sistema externo para manter a equipe sincronizada.

  * `externalId`: Id no sistema externo
  * `type`: O tipo de sistema externo

* Quando você cria uma equipe, duas entidades de coleção são criadas automaticamente e vinculadas a ela. Para obter mais informações sobre como adicionar entidades, consulte [Gerenciar coleções](#manage-collections).

  * `ownership`:Esta coleção gerencia a entidade de propriedade da equipe.
  * `membership`: Esta coleção gerencia os membros da equipe. Para obter mais informações sobre `userID`, consulte [Recuperar o ID do usuário](#user-id).

## Recuperar a organização `id` [#organization-id]

Para criar uma equipe, você precisa fornecer o ID da organização no escopo.

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

## Gerenciar coleções [#manage-collections]

Para adicionar um usuário ou entidade a uma equipe, você precisa adicionar membros às coleções associadas à equipe. Use a mutação apropriada com o respectivo ID de coleção. Use a coleção `membership` para usuário e a coleção `ownership` para entidade. Você pode adicionar até 100 entidades a uma coleção por solicitação.

```graphql
mutation {
  entityManagementAddCollectionMembers(collectionId: "INSERT_YOUR_COLLECTION_ID", ids: ["ENTITY_ID"])
}
```

Para remover usuário ou entidade de uma equipe, você precisará remover membros da entidade de coleção anexada à equipe usando a seguinte consulta.

```graphql
mutation {
  entityManagementRemoveCollectionMembers(collectionId: "INSERT_YOUR_COLLECTION_ID", ids: ["ENTITY_ID"])
}
```

## Recuperar o usuário `id` [#user-id]

Para adicionar usuário a uma equipe, você precisa do identificador exclusivo da entidade usuário (também conhecido como GUID).

Há várias consultas disponíveis para ajudar você a encontrar o GUID.

<Callout variant="tip">
  Nos exemplos abaixo, lembre-se de que todos os tipos diferenciam maiúsculas de minúsculas. Por exemplo, você deve usar `USER` e `TEAM`.
</Callout>

### Encontre o usuário `id` [#query-by-name]

Primeiro, você precisa encontrar o ID de domínio do usuário. Você pode fazer isso consultando e filtrando pelo nome ou e-mail do usuário:

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

### Encontre o id que tem o domínio `id` [#query-by-domain-id]

Depois de ter o domínio `id` você pode procurar o GUID com a seguinte consulta:

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

Para este tipo de consulta, o operador `in` também é válido, por exemplo:

```graphql
...
     entitySearch(query: "type = 'USER' AND tags.userId IN ('domainId1', 'domainId2')") {
...
```

## Recuperar informações da equipe [#retrieve-team-info]

Você tem algumas opções para recuperar informações da equipe.

### Por equipe `id` [#team-id]

Use a seguinte consulta para recuperar informações sobre uma equipe se você tiver a equipe `id`:

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

### Todas as equipes [#query-all-teams]

Se não tiver o `team id`, você também pode verificar todas as equipes existentes:

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

## Atualizar uma equipe [#update-team]

Use a mutação `entityManagementUpdateTeam` para atualizar uma equipe. Use a consulta acima para encontrar o `id` da equipe:

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

## Ver elementos de uma coleção [#collection-members]

Use a consulta `collectionElements` para visualizar o usuário na coleção de membros ou a entidade na coleção de propriedade.

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

## Visualizar e atualizar as configurações da organização da equipe [#update-team-settings]

As equipas são entidades de âmbito organizacional e, como tal, possuem algumas configurações que são aplicadas a nível organizacional. Para consultar as configurações da sua organização você pode utilizar o seguinte:

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

Tenha em mente o seguinte ao usar esta consulta:

* `discovery`: Este é um recurso que permite que entidades sejam atribuídas a equipes por meio de suas tags.
* `enabled`: Isso especifica se o recurso `discovery` está habilitado para a organização.
* `tagKeys`: As chaves tag que são usadas para procurar nomes de equipes e aliases. O valor padrão é `Team`. Portanto, qualquer entidade com a tag `Team: teamName` seria atribuída à equipe com esse nome ou qualquer alias correspondente a esse nome.
* `syncGroups`: Este recurso permite que você defina regras para reconhecer grupos de usuários, permitindo a automação completa de operações CRUD para equipes de provedores de identidade (IdPs). Isso garante que a criação, atualização e gerenciamento de membros da equipe estejam sempre atualizados, sem exigir intervenção manual.
* `enabled`: Isso especifica se o recurso `syncGroups` está habilitado para a organização.
* `rules`: Uma lista de `conditions`.
* `conditions`: Uma lista de `value` e `type`.
* `value`: A string para corresponder aos nomes dos grupos de provedores de identificação.
* `type`: O tipo de valor que precisa corresponder ao nome do grupo. Os valores possíveis são `STARTS_WITH`, `CONTAINS` e `ENDS_WITH`.

Somente determinados membros de uma organização têm permissão para editar as configurações da organização. Isso é feito com a seguinte consulta:

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

<UserJourneyControls previousStep={{"path":"/docs/service-architecture-intelligence/getting-started","title":"Retornar à configuração da interface do usuário das equipes","body":"Introdução às equipes do New Relic"}} />