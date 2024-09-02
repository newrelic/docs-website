---
title: GraphQL メタデータが AjaxRequests で見つかりません
type: troubleshooting
tags:
  - Browser
  - Browser monitoring
  - Troubleshooting
metaDescription: Troubleshooting for not seeing GraphQL metadata on AjaxRequest events for your browser app.
freshnessValidatedDate: '2023-10-19T00:00:00.000Z'
translationType: machine
---

## 問題

AjaxRequest イベントが表示されますが、ブラウザー アプリの次の GraphQL メタデータ プロパティが含まれていません。

* [運営体制](/attribute-dictionary/?event=AjaxRequest&attribute=operationFramework)
* [オペレーション名](/attribute-dictionary/?event=AjaxRequest&attribute=operationName)
* [操作の種類](/attribute-dictionary/?event=AjaxRequest&attribute=operationType)

## 原因

ブラウザ エージェントは、各 AJAX リクエスト本文とクエリを分析し、共通の GraphQL パターンを識別しようとします。これらのパターンを検出すると、収集される送信 AjaxRequest イベントに追加のメタデータ プロパティが追加されます。エージェントがこれらのパターンの検出に失敗した場合、追加のイベント プロパティは追加されません。

## 解決

アプリケーション[にブラウザ監視の最新バージョンが実装されており](/docs/browser/new-relic-browser/installation-configuration/troubleshooting-browser-monitoring-installation)、すべての[Pro 機能の](/docs/browser/new-relic-browser/browser-pro-features)データを収集している場合は、AJAX リクエストが標準の GraphQL 形式を使用して送信されていることを確認してください。

AJAX リクエストの形式を確認するには、ブラウザの開発コンソールを使用してリクエストを表示し、以下の構文と比較します。

<CollapserGroup>
  <Collapser
    id="post"
    title="GraphQL POST リクエスト"
  >
    POST GraphQL クエリ、ミューテーション、およびサブスクリプションの場合、ブラウザー エージェントは次のようにフォーマットされたデータのリクエスト本文を解析します。

    ```js
    {
        "query": ...,
        "operationName": ...,
        "variables": ... 
      }
    ```
  </Collapser>

  <Collapser
    id="get"
    title="GraphQL GET リクエスト"
  >
    GET GraphQL クエリの場合、ブラウザ エージェントは次のようにフォーマットされたデータのリクエスト クエリ パラメータを解析します。

    ```js
    ?query=...&operationName=...&variables=...
    ```
  </Collapser>

  <Collapser
    id="batch"
    title="GraphQL のバッチ化された POST リクエスト"
  >
    バッチ化された GraphQL 操作の場合、ブラウザ エージェントは次のようにフォーマットされたデータのリクエスト本文を解析します。

    ```js
    [
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        {
          "query": ...,
          "operationName": ...,
          "variables": ... 
        },
        ...etc
      ]
    ```
  </Collapser>
</CollapserGroup>

これらの標準の詳細な説明については[、GraphQL のドキュメント](https://graphql.org/learn/serving-over-http/#post-request)を参照してください。

エージェントは、このペイロードの内容を使用して GraphQL パターンを検出し、メタデータ プロパティを構築します。`query`セクションが欠落しているリクエスト本文またはクエリは、GraphQL データとしてまったく処理されません。

GraphQL ペイロードがこのパターンに従っていない場合、エージェントは GraphQL メタデータを確実に検出できません。

これらのトラブルシューティング手順のいずれかが失敗する場合、または AJAX データ プロパティの欠落に関する問題が依然として発生する場合は、 [support.newrelic.com](https://support.newrelic.com)でサポートを受けてください。
