---
title: NerdGraphチュートリアル。APMエージェントの設定例
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Examples of using New Relic NerdGraph API to adjust APM
freshnessValidatedDate: never
translationType: machine
---

このドキュメントは、NerdGraph API を使用して<InlinePopover type="apm"/>エージェントを構成する例を記載したものです。

## サーバーサイドの設定 [#server-side-config]

<InlinePopover type="apm"/>エージェントが NerdGraph 経由で変更された設定値を使用するには、 [サーバーサイドコンフィギュレーションが](/docs/apm/agents/manage-apm-agents/configuration/server-side-agent-configuration#requirements)有効になっている必要があることに注意してください。

要件については、 [server-side config requirements](/docs/apm/agents/manage-apm-agents/configuration/server-side-agent-configuration#requirements) を参照してください。

以下は、指定されたエンティティのサーバー側の構成設定のステータスを返すクエリの例です。

```graphql
query ExampleReadQuery {
  actor {
    entity(guid:"ZjY1ODgxfEFQTXxBUFBYSUNBVElPTnz0ODEwMTY3NzZ") {
      ...on ApmApplicationEntity {
        apmSettings {
          apmConfig {
            useServerSideConfig
          }
        }
      }
    }
  }
}
```

[サーバー側の設定を](/docs/apm/agents/manage-apm-agents/configuration/server-side-agent-configuration)無効にする例を次に示します。`guid`は配列を使用することに注意してください。これは、複数のエンティティを更新する場合に役立ちます。

```graphql
mutation ExampleUpdateQuery {
  agentApplicationSettingsUpdate(
    guid: "ZjY1ODgxfEFQTXxBUFBYSUNBVElPTnz0ODEwMTY3NzZ"
    settings: { apmConfig: { useServerSideConfig: false } }
  ) {
    apmSettings {
      apmConfig {
        useServerSideConfig
      }
    }
    errors {
      description
      errorClass
      field
    }
  }
}
```

エンティティのGUIDを検索する方法については、 [エンティティデータの検索](/docs/new-relic-one/use-new-relic-one/core-concepts/what-entity-new-relic/#find) を参照してください。

## 設定値の取得 [#get-settings]

ここでは、エンティティのトランザクショントレーサー設定を返す例を示します。

```graphql
query ExampleReadQuery {
  actor {
    entity(guid:"ZjY1ODgxfEFQTXxBUFBYSUNBVElPTnz0ODEwMTY3NzZ") {
      ... on ApmApplicationEntity {
        guid
        name
        apmSettings {
          transactionTracer {
            enabled
            explainEnabled
            explainThresholdType
            explainThresholdValue
          }
        }
      }
    }
  }
}
```
