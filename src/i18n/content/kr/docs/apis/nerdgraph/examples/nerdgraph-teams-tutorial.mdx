---
title: 'NerdGraph 튜토리얼: 팀 설정'
metaDescription: How to create your New Relic Teams using NerdGraph
tags:
  - Teams
  - APIs
  - NerdGraph
  - Examples
freshnessValidatedDate: never
translationType: machine
---

UI 에서 뉴렐릭 팀을 설정하는 것의 대안으로, NerdGraph API 사용하여 프로그래밍 방식으로 팀을 설정할 수 있습니다.

쉽게 시작하려면 [NerdGraph API 탐색기를](/docs/apis/nerdgraph/get-started/nerdgraph-explorer) 사용하여 팀 정보를 만들고 편집하세요. 아래 예시의 각 필드에 대한 정의는 NerdGraph에서 확인할 수 있습니다. GraphiQL IDE 사용에 도움이 필요하면 [NerdGraph API 탐색기 튜토리얼을](/docs/apis/nerdgraph/get-started/nerdgraph-explorer/) 참조하세요.

## 팀을 만드세요 [#create-a-team]

다음은 `entityManagementCreateTeam` 돌연변이 쿼리를 사용하여 팀을 만드는 NerdGraph 호출의 예입니다.

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

이 돌연변이를 사용할 때 다음 사항을 기억하세요.

* 필수 필드는 `teamName` 과 `scope` 뿐입니다.

* `organizationID`) 알아내는 데 도움이 필요하면 아래의 [조직 ID 정보 검색을](#organization-id) 참조하세요.

* `externalIntegration` 팀의 동기화를 유지하기 위해 외부 시스템과 연결하는 것을 말합니다.

  * `externalId`: 외부 시스템의 ID
  * `type`: 외부 시스템의 유형

* 팀을 생성하면 두 개의 컬렉션이 자동으로 생성되어 해당 팀에 연결됩니다. 참고사항 추가에 대한 자세한 내용은 [컬렉션 관리를](#manage-collections) 참조하세요.

  * `ownership`: 이 컬렉션은 팀이 소유한 정보를 관리합니다.
  * `membership`: 이 컬렉션은 팀 멤버를 관리합니다. `userID` 에 대한 자세한 내용은 [사용자 ID 검색을](#user-id) 참조하세요.

## 조직 검색 `id` [#organization-id]

팀을 만들려면 범위에 조직 ID를 제공해야 합니다.

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

## 컬렉션 관리 [#manage-collections]

팀에 사용자 또는 항목을 추가하려면 팀과 관련된 컬렉션에 구성원을 추가해야 합니다. 각 컬렉션 ID에 맞는 적절한 변형을 사용하세요. 사용자에는 `membership` 컬렉션을 사용하고 파티션에는 `ownership` 컬렉션을 사용합니다. 요청당 최대 100개의 지침을 컬렉션에 추가할 수 있습니다.

```graphql
mutation {
  entityManagementAddCollectionMembers(collectionId: "INSERT_YOUR_COLLECTION_ID", ids: ["ENTITY_ID"])
}
```

팀에서 사용자 또는 상태를 제거하려면 다음 쿼리를 사용하여 팀에 연결된 상태 컬렉션에서 구성원을 제거해야 합니다.

```graphql
mutation {
  entityManagementRemoveCollectionMembers(collectionId: "INSERT_YOUR_COLLECTION_ID", ids: ["ENTITY_ID"])
}
```

## 사용자를 검색합니다 `id` [#user-id]

사용자를 팀에 추가하려면 사용자 분리에 대한 고유한 분리(GUID라고도 함)가 필요합니다.

GUID를 찾는 데 도움이 되는 여러 가지 쿼리를 사용할 수 있습니다.

<Callout variant="tip">
  아래 예에서 모든 유형은 대소문자를 구분한다는 점을 기억하세요. 예를 들어, `USER` 및 `TEAM` 사용해야 합니다.
</Callout>

### 사용자 도메인 찾기 `id` [#query-by-name]

먼저, 사용자 도메인 ID를 찾아야 합니다. 사용자 이름이나 이메일로 쿼리하고 필터링하면 됩니다.

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

### 도메인을 가지고 있는 ID를 찾으세요 `id` [#query-by-domain-id]

`id` 도메인을 확보하면 다음 쿼리를 사용하여 GUID를 검색할 수 있습니다.

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

이러한 유형의 쿼리의 경우 `in` 연산자도 유효합니다. 예:

```graphql
...
     entitySearch(query: "type = 'USER' AND tags.userId IN ('domainId1', 'domainId2')") {
...
```

## 팀 정보 검색 [#retrieve-team-info]

팀 정보를 검색하는 데에는 몇 가지 옵션이 있습니다.

### 팀별로 `id` [#team-id]

`id` 팀이 있는 경우 다음 쿼리를 사용하여 팀에 대한 정보를 검색합니다.

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

### 모든 팀 [#query-all-teams]

`team id` 없으면 기존 팀을 모두 확인할 수도 있습니다.

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

## 팀 업데이트 [#update-team]

`entityManagementUpdateTeam` 변형을 사용하여 팀을 업데이트합니다. 위의 쿼리를 사용하여 팀의 `id` 찾으세요.

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

## 컬렉션의 요소 보기 [#collection-members]

`collectionElements` 쿼리를 사용하여 멤버십 컬렉션에서 사용자를 보거나 소유권 컬렉션에서 이미지를 확인하세요.

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

## 팀 조직 설정 보기 및 업데이트 [#update-team-settings]

팀은 조직 범위에 속하므로 조직 수준에서 적용되는 일부 설정이 있습니다. 조직의 설정을 쿼리하려면 다음을 사용할 수 있습니다.

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

이 쿼리를 사용할 때 다음 사항에 유의하세요.

* `discovery`: 이 기능은 태그를 통해 엔티티를 팀에 할당할 수 있게 해줍니다.
* `enabled`: 이는 `discovery` 기능이 조직에 대해 활성화되어 있는지 여부를 지정합니다.
* `tagKeys`: 팀 이름과 별칭을 찾는 데 사용되는 태그 키입니다. 기본값은 `Team` 입니다. 따라서 태그 `Team: teamName` 있는 모든 문은 해당 이름이나 해당 이름과 일치하는 별칭을 가진 팀에 할당됩니다.
* `syncGroups`: 이 기능을 사용하면 사용자 그룹을 인식하기 위한 규칙을 정의하고, ID 공급자(IdP)의 팀에 대한 CRUD 작업을 완전히 자동화할 수 있습니다. 이를 통해 수동 개입 없이도 팀 생성, 업데이트 및 멤버십 관리가 항상 최신 상태로 유지됩니다.
* `enabled`: 이는 조직에 대해 `syncGroups` 기능이 활성화되어 있는지 여부를 지정합니다.
* `rules`: `conditions` 의 목록입니다.
* `conditions`: `value` 및 `type` 의 목록입니다.
* `value`: 공급자 그룹 이름을 식별하는 데 사용할 문자열입니다.
* `type`: 그룹 이름과 일치해야 하는 값 유형입니다. 가능한 값은 `STARTS_WITH`, `CONTAINS` 및 `ENDS_WITH` 입니다.

조직의 특정 구성원만 조직 설정을 편집할 수 있습니다. 다음 쿼리를 사용하면 됩니다.

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

<UserJourneyControls previousStep={{"path":"/docs/service-architecture-intelligence/getting-started","title":"팀 UI 설정으로 돌아가기","body":"뉴렐릭 팀 소개"}} />