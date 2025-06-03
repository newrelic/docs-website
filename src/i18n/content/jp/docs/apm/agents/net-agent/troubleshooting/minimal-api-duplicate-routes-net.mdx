---
title: 最小限のAPIエンドポイントが1つのトランザクションとして表示される
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting steps for using the New Relic .NET Agent in a Minimal APIs app with duplicate route paths but different HTTP request methods.
freshnessValidatedDate: '2023-06-13T00:00:00.000Z'
translationType: machine
---

## 問題 [#problem]

.NETエージェントが、Asp.Net Coreの「最小限のAPI」アプリケーションを監視している場合、複数のエンドポイントが1つのウェブトランザクションとして表示されることがあります。この原因は、エンドポイントが異なるHTTPリクエストメソッドを持っている場合でも、同じルートパスを共有するためです。

これらのエンドポイントを区別するには、`SetTransactionName()` API呼び出しを適用することをお勧めします。

## 解決 [#solution]

`SetTransactionName()`を追加して、各エンドポイントに一意のトランザクション名を指定します。API呼び出しの引数は異なる場合がありますが、以下の例のように`SetTransactionName()`を追加することをお勧めします。

```cs
// map a minimal API with GET and POST endpoints on the same route
app.MapGet(“/minimalApi”, () =>
{
  NewRelic.Api.Agent.NewRelic.SetTransactionName(null, name: “minimalApi/Get”);
  return Results.Ok(“Get: minimalApi”);
});
app.MapPost(“/minimalApi”, () =>
{
  NewRelic.Api.Agent.NewRelic.SetTransactionName(null, name: “minimalApi/Post”);
  return Results.Ok(“Post: minimalApi”);
});
```

トランザクションへの名前の設定方法については、[SetTransactionNameドキュメント](/docs/agents/net-agent/net-agent-api/settransactionname-net-agent-api)を参照してください。
