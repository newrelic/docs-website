---
title: NerdGraphチュートリアル。APIキーの管理
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph (our GraphQL API) to create and manage license keys and user keys.
freshnessValidatedDate: never
translationType: machine
---

このドキュメントには、[ NerdGraph](/docs/introduction-new-relic-graphql) をNew RelicAPI 使用して、ライセンスキー、 キー、 などの キーをプログラムで管理する方法に関するチュートリアルが含まれています。browser<InlinePopover type="userKey" />キーに関する一般的な情報については、 [APIキーを](/docs/apis/get-started/intro-apis/types-new-relic-api-keys)参照してください。

## 機能説明の概要 [#terms]

[API キー UI](https://one.newrelic.com/launcher/api-keys-ui.api-keys-launcher)を使用してキーを作成および管理できます。または、 [NerdGraph](/docs/introduction-new-relic-graphql)の`ApiAccess`フィールドを使用して、次のタイプのキーをプログラムで作成および管理できます。

* [ユーザーキー](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#personal-api-key), NerdGraphを使用するために必要です。

* などのデータインジェストキー。

  * <InlinePopover type="licenseKey" />: <InlinePopover type="browser" />データと<InlinePopover type="mobile" />データを除くほとんどのデータを New Relic に取り込むために必要です
  * [ブラウザキー](/docs/browser/new-relic-browser/configuration/copy-browser-monitoring-license-key-app-id): ブラウザモニタリングデータの取り込みに必要です。

この機能の一般的な使用例としては、セキュリティのためにキーを回転させる機能があります。なお、このNerdGraphの機能を使って、あるアカウントで最初に作成されたライセンス・キーやブラウザ・キーを削除することはできないので、オリジナルのキーを削除することはできません。追加ライセンス・キーの作成と、作成したライセンス・キーの管理のみ可能です。

この機能についての注意事項

* すべてのミューテーションは、複数のキーを引数として受け取ることができ、変更の成功とエラーに関する詳細を返します。詳細は以下の例を参照してください。

* すべてのミューテーション (作成、更新、および削除) は、監査目的で照会できる`NrAuditEvent`になります。詳細については、「 [監査イベント](/docs/insights/use-insights-ui/manage-account-data/query-account-audit-logs-nrauditevent)」を参照してください。

* 取り込みキーについて:

  * ライセンス キーとブラウザー キーは、NerdGraph によって<DNT>**ingest keys**</DNT>に分類されます。 これは、主な用途がデータの取り込みを可能にすることだからです。
  * 各取り込みキー タイプにつき最大 1,000 個のキーを作成でき、キーのローテーションが可能になります。
  * 元のアカウントの取り込みキーを管理または削除することはできませんが、New Relic サポートに連絡してこれらをローテーションすることはできます。追加の取り込みキーまたはユーザー キーを作成し、作成したキーを管理することのみ可能です。

## 使用例の前に [#before-examples]

これらのサンプルクエリを使用する前に注意すべきことがあります。

* データ構造を理解するには、 [GraphiQL explorer](https://api.newrelic.com/graphiql) を使って、クエリを試してみることをお勧めします。
* また、 [UIを使ってユーザーキーの作成、閲覧、削除を行うことができます。](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#personal-api-key)

## キーの作成

<Callout variant="tip">
  インターフェイスの上部にある[NerdGraph GraphQL エクスプローラー](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/#explorer)を使用して、ユーザー キーを検索および生成できます。
</Callout>

複数のアカウントとキー タイプに対して、1 回のミューテーションで複数のキー (ユーザー キーまたはインジェスト キー) を作成します。 ミューテーションは、正常に作成されたキーだけでなく、キーの作成中に発生したエラーも返す可能性があることに注意してください。

キーの作成例

```graphql
mutation {
  apiAccessCreateKeys(
    keys: {
      ingest: {
        accountId: YOUR_ACCOUNT_ID
        ingestType: BROWSER
        name: "Browser Key"
        notes: "A note."
      }
    }
  ) {
    createdKeys {
      id
      key
      name
      notes
      type
      ... on ApiAccessIngestKey {
        ingestType
      }
    }
    errors {
      message
      type
      ... on ApiAccessIngestKeyError {
        accountId
        errorType
        ingestType
      }
    }
  }
}
```

結果はあなたのデータによって異なります。 [GraphiQL explorer](https://api.newrelic.com/graphiql) を使って、ミューテーションやクエリーを試してみてください。

このクエリを使って、 [ユーザーキー](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#user-api-key) を作成する例を示します。

<CollapserGroup>
  <Collapser id="create-personal-api-key" title="ユーザーキーの作成">
    [ユーザー キー](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#user-api-key)を作成するには、上記のクエリの`keys`セクションを少し変更します。

    ```graphql
    mutation {
      apiAccessCreateKeys(
        keys: { 
          user: { 
            accountId: YOUR_ACCOUNT_ID, 
            userId: YOUR_USER_ID 
          }
        }
      ) {
        createdKeys {
          id
          key
          name
          notes
          type
          ... on ApiAccessIngestKey {
            ingestType
          }
        }
        errors {
          message
          type
          ... on ApiAccessIngestKeyError {
            accountId
            errorType
            ingestType
          }
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## キーの更新

アップデート・ミューテーションでは、キー文字列ではなく、キーIDを使ってキーを識別します。

```graphql
mutation {
  apiAccessUpdateKeys(
    keys: {
      ingest: { 
        keyId: KEY_ID, 
        name: "Updated name", 
        notes: "A new note!" 
      }
    }
  ) {
    updatedKeys {
      id
      key
      type
      name
      notes
    }
    errors {
      message
    }
  }
}
```

結果はあなたのデータによって異なります。 [GraphiQL explorer](https://api.newrelic.com/graphiql) を使って、ミューテーションやクエリーを試してみてください。

## 削除キー

削除変異では、キーの識別にキー文字列ではなくキーIDを使用します。削除されたキーは、New Relic システムへのアクセスが許可されなくなり、API アクセス GraphQL API への問い合わせで返されなくなります。

```graphql
mutation {
  apiAccessDeleteKeys(keys: { ingestKeyIds: INGEST_KEY_ID }) {
    deletedKeys {
      id
    }
    errors {
      message
    }
  }
}
```

結果はあなたのデータによって異なります。 [GraphiQL explorer](https://api.newrelic.com/graphiql) を使って、ミューテーションやクエリーを試してみてください。

## 検索キー

`actor`をスコープとする単一のキーまたはすべてのキーをクエリすることで、インジェスト キーとユーザー キーにアクセスできます。単一のキーを照会する場合は、キー ID とタイプ ( `INGEST`または`USER` ) を指定する必要があります。複数のキーのクエリは、必須のタイプ リストとオプションのスコープを使用して結果をフィルター処理するキー検索によって実行されます。他のユーザーに属するユーザー キーは、結果では難読化されます。

シングルキーの例のクエリです。

```graphql
query {
  actor {
    apiAccess {
      key(id: "INGEST_KEY_ID", keyType: INGEST) {
        key
        name
        type
        ... on ApiAccessIngestKey {
          ingestType
        }
      }
    }
  }
}
```

主要な検索例クエリ。

```graphql
query {
  actor {
    apiAccess {
      keySearch(query: { 
        types: INGEST, 
        scope: { 
          ingestTypes: BROWSER 
        } 
      }) {
        keys {
          name
          key
          type
          ... on ApiAccessIngestKey {
            ingestType
          }
        }
      }
    }
  }
}
```

結果はあなたのデータによって異なります。 [GraphiQL explorer](https://api.newrelic.com/graphiql) を使って、ミューテーションやクエリーを試してみてください。