---
title: 'NerdGraph チュートリアル: チームの設定'
metaDescription: How to create your New Relic Teams using NerdGraph
tags:
  - Teams
  - APIs
  - NerdGraph
  - Examples
freshnessValidatedDate: never
translationType: machine
---

UI で New Relic チームを設定する代わりに、NerdGraph API を使用してプログラムで設定することもできます。

簡単に始めるには、 [NerdGraph API エクスプローラー](/docs/apis/nerdgraph/get-started/nerdgraph-explorer)を使用してチーム情報を作成および編集します。 以下の例の各フィールドの定義は、NerdGraph で確認できます。 GraphiQL IDE の使用に関してサポートが必要な場合は、 [NerdGraph API エクスプローラー チュートリアル](/docs/apis/nerdgraph/get-started/nerdgraph-explorer/)をご覧ください。

## チームを作成する [#create-a-team]

以下は、 `entityManagementCreateTeam`ミューテーション クエリを使用してチームを作成する NerdGraph 呼び出しの例です。

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

このミューテーションを使用する場合は、次の点に注意してください。

* 必須フィールドは`teamName`と`scope`のみです。

* `organizationID`についてサポートが必要な場合は、以下の[組織 ID 情報の取得を](#organization-id)参照してください。

* `externalIntegration` チームの同期を保つために外部システムとの接続を指します。

  * `externalId`: 外部システム内のID
  * `type`: 外部システムのタイプ

* チームを作成すると、2 つのコレクション エンティティが自動的に作成され、チームにリンクされます。 エンティティの追加の詳細については、 [「コレクションの管理」](#manage-collections)を参照してください。

  * `ownership`: このコレクションは、チームが所有するエンティティを管理します。
  * `membership`: このコレクションはチームのメンバーを管理します。 `userID`詳細については、 [「ユーザー ID の取得」](#user-id)を参照してください。

## 組織を取得する `id` [#organization-id]

チームを作成するには、スコープ内に組織 ID を指定する必要があります。

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

## コレクションを管理する [#manage-collections]

チームにユーザーまたはエンティティを追加するには、チームに関連付けられているコレクションにメンバーを追加する必要があります。 それぞれのコレクション ID で適切なミューテーションを使用します。 ユーザーには`membership`コレクションを使用し、エンティティには`ownership`コレクションを使用します。 リクエストごとに最大 100 個のエンティティをコレクションに追加できます。

```graphql
mutation {
  entityManagementAddCollectionMembers(collectionId: "INSERT_YOUR_COLLECTION_ID", ids: ["ENTITY_ID"])
}
```

チームからユーザーまたはエンティティを削除するには、次のクエリを使用して、チームに添付されたコレクション エンティティからメンバーを削除する必要があります。

```graphql
mutation {
  entityManagementRemoveCollectionMembers(collectionId: "INSERT_YOUR_COLLECTION_ID", ids: ["ENTITY_ID"])
}
```

## ユーザーを取得する `id` [#user-id]

ユーザーをチームに追加するには、ユーザー エンティティ (GUID とも呼ばれます) の一意の識別子が必要です。

GUID を見つけるのに役立つクエリが多数あります。

<Callout variant="tip">
  以下の例では、すべての型で大文字と小文字が区別されることに注意してください。 たとえば、 `USER`と`TEAM`を使用する必要があります。
</Callout>

### ユーザーのドメインを見つける `id` [#query-by-name]

まず、ユーザーのドメイン ID を見つける必要があります。 これは、ユーザーの名前またはメールでクエリとフィルタリングを行うことで実行できます。

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

### ドメインを持つIDを見つける `id` [#query-by-domain-id]

ドメイン`id`を取得したら、次のクエリを使用して GUID を検索できます。

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

このタイプのクエリでは、 `in`演算子も有効です。例:

```graphql
...
     entitySearch(query: "type = 'USER' AND tags.userId IN ('domainId1', 'domainId2')") {
...
```

## チーム情報を取得する [#retrieve-team-info]

チーム情報を取得するにはいくつかのオプションがあります。

### チーム別 `id` [#team-id]

チーム`id`がある場合、次のクエリを使用してチームに関する情報を取得します。

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

### 全チーム [#query-all-teams]

`team id`がない場合は、既存のチームをすべて確認することもできます。

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

## チームを更新する [#update-team]

チームを更新するには、 `entityManagementUpdateTeam`ミューテーションを使用します。 上記のクエリを使用して、チームの`id`見つけます。

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

## コレクションの要素を表示する [#collection-members]

`collectionElements`クエリを使用して、メンバーシップ コレクション内のユーザーまたは所有権コレクション内のエンティティを表示します。

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

## チーム組織設定の表示と更新 [#update-team-settings]

チームは組織スコープのエンティティであるため、組織レベルで適用される設定がいくつかあります。 組織の設定を行うには、次のコマンドを使用できます。

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

このクエリを使用するときは、次の点に注意してください。

* `discovery`: これは、タグを介してエンティティをチームに割り当てることができる機能です。
* `enabled`: 組織に対して`discovery`機能が有効になっているかどうかを指定します。
* `tagKeys`: チーム名とエイリアスを検索するために使用されるタグ キー。 デフォルト値は`Team`です。 したがって、タグ`Team: teamName`を持つすべてのエンティティは、その名前またはその名前に一致するエイリアスを持つチームに割り当てられます。
* `syncGroups`: この機能を使用すると、ユーザー グループを認識するためのルールを定義し、アイデンティティ プロバイダー (IdP) からのチームの CRUD 操作を完全に自動化できます。 これにより、手動による介入を必要とせずに、チームの作成、更新、メンバーシップ管理が常に最新の状態に保たれます。
* `enabled`: 組織に対して機能`syncGroups`が有効になっているかどうかを指定します。
* `rules`: `conditions`のリスト。
* `conditions`: `value`と`type`のリスト。
* `value`: 識別プロバイダー グループ名と一致する文字列。
* `type`: グループ名と一致する必要がある値の型。 可能な値は`STARTS_WITH` 、 `CONTAINS` 、 `ENDS_WITH`です。

組織の設定を編集できるのは、組織の特定のメンバーのみです。 これは次のクエリで実行されます。

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

<UserJourneyControls previousStep={{"path":"/docs/service-architecture-intelligence/getting-started","title":"チームUI設定に戻る","body":"New Relic チームの紹介"}} />