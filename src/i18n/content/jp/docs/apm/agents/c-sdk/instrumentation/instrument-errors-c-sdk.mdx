---
title: C SDKでの機器エラー
metaDescription: Learn how to instrument errors in your C application so you can monitor them with New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="EOL通知"
>
  2022 年 4 月以降、C SDK 機能はサポートされていません。詳細については、 [サポート フォーラムの投稿 を](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744)参照してください。
</Callout>

New Relicは、 [Webまたは非Webトランザクション](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm)をソフトウェアアプリケーションの1つの論理的な作業単位として定義しています。[トランザクションをインストル](/docs/instrument-transactions-c-agent)メント化すると、トランザクションのエラーをインストルメント化して、NewRelicUIでエラーを監視することもできます。 C SDKを使用してエラーを監視するには、New Relic関数`newrelic_notice_error()`を追加して、ソースコードを手動でインストルメント化する必要があります。

<Callout variant="tip">
  エラートレースに関数呼び出しを含めるには、コンパイル時にGNUの`-rdynamic`リンカーフラグを使用し[てアプリをリンクします](/docs/install-c-agent-compile-link-your-code#compile)。 `-rdynamic`リンカフラグは、より意味のあるエラートレースを提供します。
</Callout>

## トランザクションにおける機器のエラー [#errors]

トランザクションのエラーをインストゥルメントするには：

1. [Start a transaction](/docs/instrument-transactions-c-agent#start-transaction).
2. `newrelic_notice_error()`でエラーを記録し、必要なパラメーターを指定します。
3. [トランザクションの終了](/docs/instrument-transactions-c-agent#end-transaction).

## エラーを表示する

トランザクション エラーと[エラー トレースは、](#error-trace-examples) New Relic UI の[<DNT>**Error analytics**</DNT>ページ](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces)に表示されます。 C SDK は、 <DNT>**Error analytics**</DNT>ページでエラーの合計数と 1 分あたり最大 100 件のエラー トレースを報告します。

トランザクションエラーを`TransactionError`イベントとして表示、クエリ、および視覚化することもできます。

## エラーの詳細についてログを調べる [#logs-context]

ログとアプリケーションのデータを統合して、トラブルシューティングをより簡単かつ迅速に行うことができます。[コンテキストのログ](/docs/logs/logs-context/c-sdk-configure-logs-context/)では、エラーとトレースに関連するログメッセージをアプリケーションのUIで直接表示できます。

1. <DNT>
     **Errors**
   </DNT>

   ページからトレースをクリックすると、

   <DNT>
     [**Error details**](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/)
   </DNT>

   [ページ](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems/)に移動します。

2. エラーの詳細ページで、

   <DNT>
     **See logs**
   </DNT>

   をクリックします。

3. 個々のログメッセージに関連する詳細を表示するには、メッセージを直接クリックします。

また、Kubernetesクラスターなどの[インフラストラクチャデータ](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/)のコンテキストでログを表示することもできます。別のUIページに切り替える必要はありません。
