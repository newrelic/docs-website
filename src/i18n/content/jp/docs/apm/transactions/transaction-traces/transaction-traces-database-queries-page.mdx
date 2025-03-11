---
title: トランザクションのトレース。データベースクエリのページ
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: 'In APM, transaction traces can include database query data, which gives you deeper insight into performance issues.'
freshnessValidatedDate: never
translationType: machine
---

[APM](/docs/apm/new-relic-apm/getting-started/welcome-new-relic-apm)では、現場トレースにデータベース書き込みデータを含めることができます。 <DNT>**Database queries**</DNT>ページを使用して、遅いトランザクションを分析したり、データベース書き込みコレクションの設定を変更したりできます。

## データベースクエリの検索 [#view-sql]

データベース書き込みデータが[選択した舞台トレース](/docs/apm/transactions/transaction-traces/transaction-traces#find-view)に関連付けられている場合、 <DNT>**Transaction trace**</DNT>の詳細ページから<DNT>**Database queries**</DNT>ページが表示されます。

トランザクショントレースのデータベースデータが表示されるはずなのに表示されない場合は、 [Database query settings](#settings) を変更する必要があるかもしれません。

<img
  title="transaction trace database queries tab"
  alt="A screenshot depicting the transaction trace database queries tab in the UI."
  src="/images/apm_screenshot-crop_transaction-trace-database-queries-tab.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace) > Database queries**</DNT>に移動します。
</figcaption>

## データベースクエリの使用 [#use]

**Database queries**ページを使用して、遅いトランザクションを分析およびトラブルシューティングできる状況は次のとおりです。

* [APM **概要** ページ](/docs/apm/applications-menu/monitoring/apm-overview-page) で、あるトランザクションが異常に遅いことに気がつきました。
* [トランザクションのトレース](/docs/apm/transactions/transaction-traces/transaction-traces) を選択すると、そのトランザクションの詳細が表示されます。
* **Database queries**ページを選択してトレース内のスローペースを調べ、それをベースとして[トラブルシューティングを行い、アプリのパフォーマンスを改善します](#troubleshooting)。
* データベース書き込みに関連付けられたスタックトレースが存在する場合、**データベース書き込みテーブル**の行をクリックして、フォーマットされたスタックトレースを表示します。

<img
  title="transaction trace stacktrace view"
  alt="A screenshot showing the stacktrace view of a transaction trace in the UI"
  src="/images/apm_screenshot-crop_transaction-trace-stacktrace-view.webp"
/>

## データベースクエリの設定 [#settings]

データベースクエリの設定は、他の [トランザクショントレースの設定を変更するのと同じ方法で変更できます。](/docs/apm/transactions/transaction-traces/configure-transaction-traces) 例えば、New Relic エージェントの設定や、一部のエージェントでは UI を通じて変更することができます。

一般的なデータベースクエリの設定変更は以下の通りです。

* [難読化されたクエリデータではなく、生のクエリデータを収集する、またはクエリの収集をオフにする](/docs/apm/transactions/transaction-traces/configure-transaction-traces#record-sql)
* スタックトレースの閾値の変更
* クエリの説明プラン収集をオンにする

## データベースクエリを使用してパフォーマンスを向上 [#troubleshooting]

ここでは、アプリのデータベースのパフォーマンスを向上させるためのヒントをご紹介します。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Use database queries**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        時刻
      </td>

      <td>
        `TOTAL DURATION`がトランザクション時間全体に占める割合が大きいクエリを探します。これは、インデックスまたはその他の最適化を使用してデータベース クエリを強化するのに適した場所であることを示しています。
      </td>
    </tr>

    <tr>
      <td>
        重複したクエリ
      </td>

      <td>
        同じ種類の情報を繰り返しクエリするクエリを探します。たとえば、個々のアカウント ID を検索するための複数のクエリです。クエリを`INCLUDE`特定の値 (アカウント ID 1、2、10、14、17 など) に書き換えて、1 つのクエリですべての関連アイテムを取得できるようにしてください。
      </td>
    </tr>

    <tr>
      <td>
        データベースのオーバーヘッド
      </td>

      <td>
        クエリの構造を見て、異なるタイプの情報を1つのコールにまとめる機会があるかどうかを確認してください。例えば、アカウントID、名前などをクエリすることができます。例えば、データベースセンターが別の場所にある場合、オーバーヘッドを減らすことができるため、これは便利です。

        データベースのリクエストとレスポンスの時間は非常に速いかもしれません。しかし、リクエストをより少ないコールにまとめることで、その時間をさらに短縮することができます。
      </td>
    </tr>

    <tr>
      <td>
        MySQL
      </td>

      <td>
        アプリのメイン[APM <DNT>**Summary**</DNT>](/docs/apm/applications-menu/monitoring/apm-overview-page)ページから、メイン グラフのデータベース時間を他の処理時間と比較します。 他の処理時間と比較してデータベース時間が突然スパイクしたり、データベース時間が長くなったりする場合は、問題があることを示している可能性があります。
      </td>
    </tr>
  </tbody>
</table>

## 他の遅いクエリを見つける [#slow-queries]

**Trace details** ページは、特定のトランザクションの詳細を調べるのに便利です。アプリケーションの最も遅いクエリをすべて一度に確認するには、 [Slow queries feature](/docs/apm/applications-menu/monitoring/viewing-slow-query-details) を使用してください。
