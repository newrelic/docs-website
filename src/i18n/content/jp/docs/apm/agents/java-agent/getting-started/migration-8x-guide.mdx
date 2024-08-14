---
title: Java エージェント 7.x から 8.x への移行ガイド
tags:
  - Agents
  - Java agent
  - Getting started
freshnessValidatedDate: never
translationType: machine
---

このガイドでは、Java エージェントの 7.x シリーズと 8.x シリーズの間の主な変更点について説明します。アップグレード中に発生する可能性のある問題と、バージョン 8.x に正常に移行する方法について説明します。主な変更点は次のとおりです。

* [変更および削除されたトランザクションおよびスパン属性](#changed_and_removed_attributes)
* [削除された計装](#removed_instrumentation)

<Callout variant="important">
  バージョン 8.0 ～ 8.7 で削除された属性は、8.8.0 に再導入されます。 これにより、 <InlinePopover type="alerts"/>またはダッシュボードでこれらの属性を引き続き使用する顧客に下位互換性が提供されます。
</Callout>

## 変更および削除されたトランザクションおよびスパン属性 [#changed_and_removed_attributes]

APM エージェント全体で一貫性を確保し、業界標準との整合性を高めるために、Java エージェントの場所とスパンのプロパティを変更しました。 Javaエージェント バージョン 7.6.0 以降、 新しい標準属性<DNT>**http.statusCode**</DNT>と<DNT>**http.statusText**</DNT>を導入し、 <DNT>**httpResponseCode**</DNT> 、 <DNT>**response.status**</DNT> 、および<DNT>**response.statusMessage**</DNT>を非推奨としてマークしました。

| 非推奨の属性                                | 新しい属性                          | データ型の変更                      |
| ------------------------------------- | ------------------------------ | ---------------------------- |
| <DNT>**httpResponseCode**</DNT>       | <DNT>**http.statusCode**</DNT> | <DNT>**String to INT**</DNT> |
| <DNT>**response.status**</DNT>        | <DNT>**http.statusCode**</DNT> | <DNT>**String to INT**</DNT> |
| <DNT>**response.statusMessage**</DNT> | <DNT>**http.statusText**</DNT> | <DNT>**N/A**</DNT>           |

## 推奨されるアクション

* 非推奨の属性を使用するアラートまたはダッシュボードがあり、エージェントのバージョン 8.0 ～ 8.7 を使用している場合は、エージェントを 8.8 に更新するか、削除された属性への参照を更新する必要があります。すべてのアラートまたはダッシュボードを新しい標準属性に更新した場合は、互換性フラグを無効にして、新しい標準属性のみを使用することができます。互換性フラグの設定については、 `http_attribute_mode`構成を参照してください。
* 非推奨の属性を使用しているアラートとダッシュボードを更新します。

### 影響を受けるアラート クエリの検索

影響を受けるアラートを見つけて修正するには:

1. [NerdGraph Explorer](https://one.newrelic.com/nerdgraph-graphiql)を使用し、探している属性ごとに`queryLike`演算子を使用してアラートを検索します。例えば：

   ```
   {
     actor {
       user {
         name
       }
       account(id: <ACCOUNTID>) {
         alerts {
           nrqlConditionsSearch(searchCriteria: {queryLike: "httpResponseCode"}) {
             nrqlConditions {
               nrql {
                 query
               }
               id
               name
               policyId
             }
           }
         }
       }
     }
   }  
   ```

2. 返されたそれぞれの集計について、<DNT>**Alerts> [Alerts Conditions](https://one.newrelic.com/alerts-ai/condition-builder/condition-list)**</DNT> UIで ID または名前を使用して集計を見つけることができます。

3. アラートの状態と信号範囲を確認して、アラートへの影響を確認します。

4. [「影響を受けるアラートとダッシュボードの NRQL ステートメントを修正する」](#fixing_nrql)の手順を使用して、NRQL ステートメントを更新します。

### 影響を受けるダッシュボード クエリの検出

ダッシュボードの影響を受けるクエリを見つけるには:

1. NerdGraph Explorer とダッシュボードのメタデータにあるエンティティ guid を使用すると、ダッシュボードのすべての NRQL クエリを取得できます。

   ```
    {
     actor {
       entity(guid: "[ENTITY GUID]") {
         ... on DashboardEntity {
           guid
           name
           pages {
             widgets {
               rawConfiguration
             }
           }
         }
       }
     }
   }
   ```

2. NRQL クエリは`rawConfiguration`項目で返されます。テキスト検索を使用して、削除された属性を見つけることができます。

3. [「影響を受けるアラートとダッシュボードの NRQL ステートメントを修正する」](#fixing_nrql)の手順を使用して、NRQL ステートメントを更新します。

次のクエリを使用して、すべてのダッシュボードのエンティティ guid のリストを取得することもできます。

```
 {
  actor {
    entitySearch(query: "domain IN ('VIZ')") {
      results {
        entities {
          guid
          accountId
        }
      }
    }
  }
}
```

### 影響を受けるアラートとダッシュボードの NRQL ステートメントを修正する [#fixing_nrql]

<DNT>**http.statusCode**</DNT> これも異なるデータ型を持つ<DNT>**httpResponseCode**</DNT>または<DNT>**response.status**</DNT>への参照を置き換えます。 以前は次のような参照を使用していました:

`[...] WHERE (Numeric(response.status)\>399 [...]`

文字列データ型を数値に変換します。これを行う必要はなくなり、代わりに次のような単純な数値演算を使用できるようになりました。

`[...] WHERE (http.statusCode \>399) [...]`

<DNT>**http.statusText**</DNT> は、 <DNT>**response.statusMessage**</DNT>への参照を置き換えます。 この属性のデータ型は変更されていません。

## 削除された計装 [#removed_instrumentation]

それぞれのメンテナによってサポートされなくなったライブラリ バージョンの次のインストルメンテーション モデルを削除しました。

* cassandra-datastax-2.1.2
* httpクライアント-3.0
* jdbc-embedded-derby-10.2.1.6
* jdbc-embedded-derby-10.10.1.1
* 桟橋-7
* 桟橋-7.6
* 桟橋-9
* 桟橋-9.0.4
* 桟橋-9.1
* mongodb-2.12
* mongodb-2.14
* mongodb-3.0
* khttp-3.0.0
* khttp-3.4.0
* khttp-3.5.0

アプリケーションがいずれかのライブラリを使用している場合、Java エージェント バージョン v8.x に更新すると、そのライブラリのインストルメンテーションによって生成されたメトリックとトランザクションを受信できなくなります。

## 推奨されるアクション

可能であれば、影響を受けるライブラリをメンテナと New Relic がサポートするバージョンに更新し、エージェントを更新します。EOL になったライブラリを更新できない場合でも、エージェントを更新できますが、削除されたデータによって重要な領域にギャップが生じていないかどうかを確認するために、テストとレビューを行うことをお勧めします。
