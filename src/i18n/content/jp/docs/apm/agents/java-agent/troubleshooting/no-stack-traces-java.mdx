---
title: スタックトレースがない(Java)
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: Troubleshooting steps for situations when stack traces are missing for error traces with your New Relic Java app.
freshnessValidatedDate: never
translationType: machine
---

## 問題

状況によっては、Javaアプリのスタックトレースが含まれていない、APM UIの [エラートレース](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces) が表示されることがあります。

## 解決

状況に応じて、以下のトラブルシューティングの手順に従ってください。

<CollapserGroup>
  <Collapser
    id="repeated-errors"
    title="急速に繰り返されるエラーのスタックトレースがない"
  >
    急激に繰り返されるエラーが発生した場合、Javaコンパイラはパフォーマンスを向上させるためにスタックトレースを最適化することがあります。この最適化を無効にするにはJVMフラグの中に

    ```
    -XX:-OmitStackTraceInFastThrow
    ```
  </Collapser>

  <Collapser
    id="500-errors"
    title="500エラーのスタックトレースがない"
  >
    これは、Java エージェントが 500 エラーを処理する方法の[通常の動作](#cause)です。スタック トレースを強制的にレポートするには、独自のコードから New Relic Java API を呼び出します。`NewRelic.noticeError (Throwable t)`メソッドを実行すると、 `Throwable`で表されるスタック バックトレースとともにエラーが報告されます。このメソッドとそのオーバーロードの詳細については、 [GitHub の New Relic の Java エージェント API を参照してください。](https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html#noticeError-java.lang.Throwable-)
  </Collapser>
</CollapserGroup>

## 原因

`500`エラーを返すということは、アプリケーション サーバー自体がエラーを検出し、HTTPS `500`ステータス コードを設定したことを意味します。

* エラー状態がアプリケーション・ロジックで検出され処理された場合、例外オブジェクトは存在せず、したがってスタックもありません。
* ある時点で例外オブジェクトが存在したが、それが応答で`500`ステータスを設定するアプリケーション コードによって内部的に処理された場合、その例外は Java エージェントから認識されることはありません。Java エージェントがレポートできるスタックがありません。

スタック・トレースが報告される場合、アプリケーション・サーバ・ロジック内で捕捉および処理されなかった例外に起因するエラーです。Javaエージェントは、監視対象のトランザクション中に処理されなかった例外を発見したため、スタックトレースを報告します。

ただし、アプリケーション サーバーがエラーを処理してステータス コードを設定しているため、 `500`エラーのスタック トレースは表示されません。アプリケーション コード自体はスタック トレースを保持しません。
