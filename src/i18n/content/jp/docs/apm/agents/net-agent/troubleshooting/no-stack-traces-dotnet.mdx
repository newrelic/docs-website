---
title: スタックトレースがない（.NET）
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting steps for situations when stack traces are missing for error traces with your New Relic .NET app.
freshnessValidatedDate: never
translationType: machine
---

## 問題

状況によっては、APMのUIで、.NETアプリのスタックトレースが含まれていない、 [エラートレース](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces) が表示されることがあります。

## 解決

状況に応じて、以下のトラブルシューティングの手順に従ってください。

<CollapserGroup>
  <Collapser
    id="500-errors"
    title="500エラーのスタックトレースがない"
  >
    これは、.NET エージェントが 500 エラーを処理する方法の[通常の動作](#cause)です。スタック トレースを強制的にレポートするには、独自のコードから New Relic .NET API を呼び出します。`NewRelic.NoticeError(Exception)`メソッドを実行すると、 `Exception`で表されるスタック バックトレースとともにエラーが報告されます。このメソッドとそのオーバーロードの詳細については、 [GitHub の New Relic の .NET エージェント API](/docs/agents/net-agent/net-agent-api/noticeerror-net-agent-api/)を参照してください。
  </Collapser>
</CollapserGroup>

## 原因

`500`エラーを返すということは、アプリケーション サーバー自体がエラーを検出し、HTTPS `500`ステータス コードを設定したことを意味します。

* エラー状態がアプリケーション・ロジックで検出され処理された場合、例外オブジェクトは存在せず、したがってスタックもありません。
* ある時点で例外オブジェクトがあったものの、応答に`500`ステータスを設定するアプリケーション コードによって内部的に処理された場合、その例外は .NET エージェントから認識されることはありません。.NET エージェントがレポートできるスタックがありません。

スタックトレースが報告される場合、エラーは、アプリケーションサーバーロジック内で捕捉および処理されなかった例外に起因しています。.NETエージェントは、監視されたトランザクション中に処理されない例外を見たので、スタックトレースを報告します。

ただし、アプリケーション サーバーがエラーを処理してステータス コードを設定しているため、 `500`エラーのスタック トレースは表示されません。アプリケーション コード自体はスタック トレースを保持しません。
