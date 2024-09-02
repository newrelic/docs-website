---
title: C SDKを使ったトランザクションの計測
metaDescription: Learn how to instrument transactions in your C application so you can monitor them with New Relic.
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="EOL通知"
>
  2022 年 4 月以降、C SDK 機能はサポートされていません。詳細については、 [サポート フォーラムの投稿 を](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744)参照してください。
</Callout>

C SDK を使用して、C ライブラリをインポートできる言語を使用する Linux 上のあらゆるアプリケーション[を](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm)監視できます。 関数を追加してソースコードにトランザクションを手動で計装すると、New Relic の[<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)ページ でデータを表示できます。New RelicUI

## トランザクションをインストゥルメントする [#c-agent-txn]

トランザクションをインスツルメンテーションして New Relic UI でモニターできるようにするには、インスツルメンテーションを開始および停止する New Relic の関数をトランザクションの周りにラップします。使用する関数は、 [Web トランザクションと非 Web トランザクションのどちらをインスツルメンテーションするかによって異なります](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm#types) 。

1. モニターするトランザクションのすぐ後に次のコードを追加します。 <DNT>**before**</DNT>

   ウェブトランザクションの場合：

   ```c
   newrelic_txn_t *txn;
   /* ... */
   txn = newrelic_start_web_transaction(app, "NAME_YOUR_TRANSACTION");
   ```

   非ウェブトランザクションの場合：

   ```c
   newrelic_txn_t *txn;
   /* ... */
   txn = newrelic_start_non_web_transaction(app, "NAME_YOUR_TRANSACTION");
   ```

2. 監視したい Web または非ウェブサイトの直後に次のコードを追加します。

   ```c
   newrelic_end_transaction(&txn);
   ```

## 機器のセグメントとエラー [#segments-errors]

セグメントとは、トランザクションを構成する関数やコールのことです。トランザクションをインストルメント化した後は、以下のことができます。

* [トランザクションのインストゥルメントセグメント](/docs/instrument-segments-c-agent) そのトランザクション中に呼び出された関数に関する詳細なデータが必要な場合。
* [Instrument errors](/docs/instrument-errors-c-agent) 、New Relic UIを使ってトランザクション中に発生したエラーを監視できるようになります。
