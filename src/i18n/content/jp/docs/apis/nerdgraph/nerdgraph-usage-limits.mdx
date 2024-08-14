---
title: NerdGraph の使用制限
tags:
  - APIs
  - GraphQL API
  - NerdGraph
  - Rate Limit
  - Concurrency Limit
metaDescription: New Relic NerdGraph limits the number of concurrent connections users make.
freshnessValidatedDate: '2023-08-08T00:00:00.000Z'
translationType: machine
---

NerdGraph API は、ユーザーごとの同時リクエストの制限を強制します。

## 制限の詳細 [#limit-enforcement]

NerdGraph は<DNT>**25 concurrent requests per user**</DNT>の制限を適用します。

リクエストのレートには制限はなく、 <DNT>**concurrent**</DNT>リクエストの数のみに制限があります。

同時実行性は、ユーザー キーごとで**はなく** 、ユーザーごとに追跡および適用されます。複数のユーザー キーを使用して同じユーザーによって行われたリクエストはすべて、そのユーザーの同時リクエストの合計に寄与します。

システムの状態に応じて、ユーザーごとに25を超える同時リクエストを許可する場合があります。 <DNT>**only 25 concurrent requests are guaranteed.**</DNT>

リクエストが制限されている場合、リクエストは HTTP ステータス コード `429`で拒否されます。処理中のリクエストが完了し、合計同時実行数が低下すると、新しいリクエストは自動的に再び成功し始めます。

## 限界に達しないようにする [#avoid-limit]

コード内で NerdGraph への同時リクエストを行っている場合は、クライアント側での合計同時実行数を制限することが重要です。たとえば、100 件のリクエストを行う必要がある場合は、次のようになります。

* プーリング ソリューションを実装して、同時接続が使用可能であることが検出された場合にのみリクエストが行われるようにします。
* 25 件の同時呼び出しのバッチでリクエストを送信します。
* 同時実行コードを順次コードに置き換え、前のリクエストが完了した後にのみリクエストを作成します。

これらの推奨事項のいくつかの実装に関連するコード例については、 [「NerdGraph 同時実行チュートリアル」を](/docs/apis/nerdgraph/examples/nerdgraph-concurrency-tutorial)参照してください。

一度に複数の場所でコードを実行することに注意してください。非同時実行コードであっても、複数の場所で実行されている場合は同時実行が発生します。
