---
title: 'NerdGraph チュートリアル: スコアカードの表示と管理'
tags:
  - Scorecards
  - APIs
  - NerdGraph
  - Examples
metaDescription: How to use New Relic NerdGraph API to create and update Scorecards and rules.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="プレビュー">
  この機能はまだ開発中ですが、ぜひお試しください。

  この機能は現在、弊社の[プレリリース ポリシー](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy)に従ってプレビュー プログラムの一部として提供されています。
</Callout>

New Relic では、NerdGraph[スコアカード](/docs/service-architecture-intelligence/scorecards/getting-started)GraphQL ミューテーションを使用してスコアカードとルールを管理できます。 これらのミューテーションにより、既存のワークフローおよびインテグレーションでスコアカードとそれに関連するルールを作成、更新、削除、取得できます。

このチュートリアルでは、NerdGraph を使用してスコアカードとルールを管理する方法の例を示します。 これらの例を使用して、スコアカードの作成、ルールの追加、スコアカードの詳細の更新などのスコアカード管理タスクを自動化できます。

## 変異 [#mutations]

New Relic は、スコアカードと関連ルールを作成および管理するためのさまざまな NerdGraph ミューテーションを提供します。

<CollapserGroup>
  <Collapser id="create-scorecard" title="スコアカードを作成する">
    `entityManagementCreateScorecard`ミューテーションを使用して独自のスコアカードを作成できます。

    #### 入力

    <table>
      <thead>
        <tr>
          <th>
            パラメータ
          </th>

          <th>
            データタイプ
          </th>

          <th>
            必須ですか?
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `name`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            スコアカードの名前。
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            弦
          </td>

          <td>
            いいえ
          </td>

          <td>
            スコアカードの簡単な説明。
          </td>
        </tr>

        <tr>
          <td>
            `accountId`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            エンティティが保存されるアカウント。
          </td>
        </tr>
      </tbody>
    </table>

    #### サンプルリクエスト

    ```graphql
      mutation CreateScorecard($description: String, $name: String!, $id: ID!) {
        entityManagementCreateScorecard(
          scorecardEntity: {description: $description, name: $name, scope: {id: $id, type: ACCOUNT}}
        ) {
          entity {
            description
            id
            rules {
              id // COLLECTION ID
            }
            name
          }
        }
      }
      // PARAMETERS
      {
        "description": "Test test Best Practices",
        "name": "Test Engineering Best Practices",
        "id": 1
      }
    ```
  </Collapser>

  <Collapser id="create-rule" title="ルールの作成">
    `entityManagementCreateScorecardRule`ミューテーションを使用して、スコアカードの新しいルールを作成できます。

    #### 入力

    <table>
      <thead>
        <tr>
          <th>
            パラメータ
          </th>

          <th>
            データタイプ
          </th>

          <th>
            必須ですか?
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `name`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            ルールの名前。
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            弦
          </td>

          <td>
            いいえ
          </td>

          <td>
            ルールの簡単な説明。
          </td>
        </tr>

        <tr>
          <td>
            `query`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            コンプライアンスを評価するための NRQL クエリ。
          </td>
        </tr>

        <tr>
          <td>
            `accounts`
          </td>

          <td>
            Int
          </td>

          <td>
            はい
          </td>

          <td>
            ルールがクエリを実行するアカウント ID のリスト。
          </td>
        </tr>
      </tbody>
    </table>

    #### サンプルリクエスト

    ```graphql
      mutation CreateRule($name: String!, $description: String, $query: String!, $accounts: [Int!]!) {
        entityManagementCreateScorecardRule(
          scorecardRuleEntity: {
            name: $name,
            description: $description
            enabled: true,
            nrqlEngine: {
              accounts: $accounts,
              query: $query
            },
            scope: {id: 1, type: ACCOUNT}}
        ) {
          entity {
            id // RULE Id
          }
        }
      }
    ```
  </Collapser>

  <Collapser id="add-rule" title="ルールの作成">
    `entityManagementCreateScorecardRule`ミューテーションを使用して、スコアカードの新しいルールを作成できます。

    #### 入力

    <table>
      <thead>
        <tr>
          <th>
            パラメータ
          </th>

          <th>
            データタイプ
          </th>

          <th>
            必須ですか?
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `name`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            ルールの名前。
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            弦
          </td>

          <td>
            いいえ
          </td>

          <td>
            ルールの簡単な説明。
          </td>
        </tr>

        <tr>
          <td>
            `query`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            コンプライアンスを評価するための NRQL クエリ。
          </td>
        </tr>

        <tr>
          <td>
            `accounts`
          </td>

          <td>
            Int
          </td>

          <td>
            はい
          </td>

          <td>
            ルールがクエリを実行するアカウント ID のリスト。
          </td>
        </tr>
      </tbody>
    </table>

    #### サンプルリクエスト

    ```graphql
      mutation CreateRule($name: String!, $description: String, $query: String!, $accounts: [Int!]!) {
        entityManagementCreateScorecardRule(
          scorecardRuleEntity: {
            name: $name,
            description: $description
            enabled: true,
            nrqlEngine: {
              accounts: $accounts,
              query: $query
            },
            scope: {id: 1, type: ACCOUNT}}
        ) {
          entity {
            id // RULE Id
          }
        }
      }

      // PARAMETERS
      {
        "name": "APM Services Have Alerts Defined",
        "description": "Check that APM services have alerts associated with them",
        "query": "SELECT if(latest(alertSeverity) != 'NOT_CONFIGURED', 1, 0) as 'score' FROM Entity WHERE type = 'APM-APPLICATION' AND tags.nr.team IS NOT NULL AND tags.environment IS NOT NULL FACET id as 'entityGuid', tags.nr.team as 'team', tags.environment as 'environment' LIMIT MAX SINCE 1 day ago",
        "accounts": [1]
      }
    ```
  </Collapser>

  <Collapser id="add-rule" title="スコアカードにルールを追加する">
    `entityManagementAddCollectionMembers`ミューテーションを使用して、スコアカードにルールを関連付けることができます。

    #### 入力

    <table>
      <thead>
        <tr>
          <th>
            パラメータ
          </th>

          <th>
            データタイプ
          </th>

          <th>
            必須ですか?
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `collectionId`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            ルールを追加するスコアカードの ID。
          </td>
        </tr>

        <tr>
          <td>
            `rules`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            スコアカードに追加するルール ID のリスト。
          </td>
        </tr>
      </tbody>
    </table>

    #### サンプルリクエスト

    ```graphql
      mutation AddRuleToCollection($collectionId: ID!, $rules: [ID!]!) {
        entityManagementAddCollectionMembers(
          collectionId: $collectionId
          ids: $rules
        )
      }
      // PARAMETERS
      {
        "collectionId": "", // Collection ID is from the rule.id from scorecard entity
        "rules": [] // Provide list of all rule ids which are generated during rule creation.
      }
    ```
  </Collapser>

  <Collapser id="update-scorecard" title="スコアカードを更新する">
    `entityManagementUpdateScorecard`ミューテーションを使用して、既存のスコアカードの詳細を更新できます。

    #### 入力

    <table>
      <thead>
        <tr>
          <th>
            パラメータ
          </th>

          <th>
            データタイプ
          </th>

          <th>
            必須ですか?
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `id`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            スコアカードの一意の識別子。
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            弦
          </td>

          <td>
            いいえ
          </td>

          <td>
            スコアカードの説明を更新しました。
          </td>
        </tr>

        <tr>
          <td>
            `name`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            スコアカードの名前が更新されました。
          </td>
        </tr>
      </tbody>
    </table>

    #### サンプルリクエスト

    ```graphql
    mutation UpdateScorecard($id: ID!, $description: String, $name: String!) {
      entityManagementUpdateScorecard(
        id: $id
        scorecardEntity: {description: $description, name: $name}
      ) {
        entity {
          name
          id
          rules {
            id
          }
        }
      }
    }
    ```
  </Collapser>

  <Collapser id="update-rule" title="ルールを更新する">
    `entityManagementUpdateScorecardRule`ミューテーションを使用してスコアカードのルールを更新できます。

    #### 入力

    <table>
      <thead>
        <tr>
          <th>
            パラメータ
          </th>

          <th>
            データタイプ
          </th>

          <th>
            必須ですか?
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `ruleId`
          </td>

          <td>
            ID
          </td>

          <td>
            はい
          </td>

          <td>
            ルールの一意の識別子。
          </td>
        </tr>

        <tr>
          <td>
            `name`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            ルールの名前。
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            弦
          </td>

          <td>
            いいえ
          </td>

          <td>
            ルールの簡単な説明。
          </td>
        </tr>

        <tr>
          <td>
            `query`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            コンプライアンスを評価するための NRQL クエリ。
          </td>
        </tr>

        <tr>
          <td>
            `queryAccounts`
          </td>

          <td>
            Int
          </td>

          <td>
            はい
          </td>

          <td>
            ルールがクエリを実行するアカウント ID のリスト。
          </td>
        </tr>

        <tr>
          <td>
            `enabled`
          </td>

          <td>
            ブール値
          </td>

          <td>
            いいえ
          </td>

          <td>
            ルールを有効または無効にします。
          </td>
        </tr>
      </tbody>
    </table>

    #### サンプルリクエスト

    ```graphql
      mutation UpdateRule($ruleId: ID!, $name: String!, $description: String, $query: String!, $queryAccounts: [Int!]!, $enabled: Boolean) {
        entityManagementUpdateScorecardRule(
          id: $ruleId
          scorecardRuleEntity: {description: $description, name: $name, enabled: $enabled, nrqlEngine: {accounts: $queryAccounts, query: $query}}
        ) {
          entity {
            id
            name
            description
            nrqlEngine {
              accounts
              query
            }
          }
        }
      }
    ```
  </Collapser>

  <Collapser id="delete-scorecard" title="スコアカードまたはルールを削除する">
    `entityManagementDelete`ミューテーションを使用して、既存のスコアカードまたはルールを削除できます。

    #### 入力

    <table>
      <thead>
        <tr>
          <th>
            パラメータ
          </th>

          <th>
            データタイプ
          </th>

          <th>
            必須ですか?
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `id`
          </td>

          <td>
            ID
          </td>

          <td>
            はい
          </td>

          <td>
            ターゲット 削除するスコアカードまたはルール ID。
          </td>
        </tr>
      </tbody>
    </table>

    #### サンプルリクエスト

    ```graphql
    mutation DeleteEntity($id: ID!) {
      entityManagementDelete(
        id: $id
      ) {
        id
      }
    }
    ```
  </Collapser>
</CollapserGroup>

### スコアカードの NerdGraph クエリ

<CollapserGroup>
  <Collapser id="fetch-scorecards" title="スコアカードでルールを取得する">
    `FetchScorecardDetails`クエリを使用して、特定のスコアカードに関連付けられているすべてのルールを取得できます。

    #### 入力

    <table>
      <thead>
        <tr>
          <th>
            パラメータ
          </th>

          <th>
            データタイプ
          </th>

          <th>
            必須ですか?
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `scorecardId`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            ルールを取得するためのスコアカードの ID。
          </td>
        </tr>
      </tbody>
    </table>

    #### サンプルリクエスト

    ```graphql
      query FetchScorecardDetails($scorecardId: ID!) {
        actor {
          entityManagement {
            entity(id: $scorecardId) {
              ... on EntityManagementScorecardEntity {
                name
                description
                rules {
                  id
                }
              }
            }
          }
        }
      }
    ```
  </Collapser>

  <Collapser id="fetch-rule" title="ルールに関連付けられたスコアカードの詳細を取得する">
    特定のルールに関連付けられたスコアカードの詳細を取得するには、まず`FindRuleOwnerCollections`クエリを使用してルールを含むコレクション ID を取得し、次に`FetchCollectionParent`クエリを使用してコレクションの親の詳細を取得します。

    ### `FindRuleOwnerCollections` クエリ

    #### 入力

    <table>
      <thead>
        <tr>
          <th>
            パラメータ
          </th>

          <th>
            データタイプ
          </th>

          <th>
            必須ですか?
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `ruleId`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            ルールの一意の識別子。
          </td>
        </tr>
      </tbody>
    </table>

    #### サンプルリクエスト

    ```graphql
      query FindRuleOwnerCollections($ruleId: ID!) {
        actor {
          entityManagement {
            relationships(filter: {targetId: {eq: $ruleId}, type: {eq: "HAS_MEMBER"}}) {
              items {
                source {
                  id
                  type
                }
                type
              }
            }
          }
        }
      }
    ```

    ### `FetchCollectionParent` クエリ

    `FetchCollectionParent`クエリを使用してコレクションの親の詳細を取得できます。このクエリには、 `FindRuleOwnerCollections`応答から取得したコレクション ID が必要です。

    #### 入力

    <table>
      <thead>
        <tr>
          <th>
            パラメータ
          </th>

          <th>
            データタイプ
          </th>

          <th>
            必須ですか?
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `collectionId`
          </td>

          <td>
            弦
          </td>

          <td>
            はい
          </td>

          <td>
            `FindRuleOwnerCollections`

            応答から取得された ID。
          </td>
        </tr>
      </tbody>
    </table>

    #### サンプルリクエスト

    ```graphql
      query FetchRulesCollection($rulesId: ID!) {
        actor {
          entityManagement {
            collectionElements(filter: {collectionId: {eq: $rulesId}}) {
              items {
                ... on EntityManagementScorecardRuleEntity {
                  id
                  name
                  nrqlEngine {
                    accounts
                    query
                  }
                }
              }
              nextCursor
            }
          }
        }
      }
    ```
  </Collapser>
</CollapserGroup>