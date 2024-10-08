---
title: C SDKでアプリケーションをインストゥルメントする
tags:
  - Agents
  - C SDK
  - Instrumentation
metaDescription: 'How to instrument transactions, their segments, and errors in your C application so you can monitor them with New Relic.'
freshnessValidatedDate: never
translationType: machine
---

<Callout
  variant="important"
  title="EOL通知"
>
  2022 年 4 月以降、C SDK 機能はサポートされていません。詳細については、 [サポート フォーラムの投稿 を](https://discuss.newrelic.com/t/q1-bulk-eol-announcement-fy23/181744)参照してください。
</Callout>

Cライブラリをインポートできる言語を使用して Linux上でアプリケーションをモニターするには、以下が必要です：

1. `newrelic_new_app_config()`を使用して設定を作成し、[`newrelic_init()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a03f07e64a51b5f0cd51caa4f28c8b6c1)を使用してデーモンに接続して、[`newrelic_create_app()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a61dd90439ae3cc5060021f6ab4701132)を使用してアプリケーションを接続します。詳細については、[C SDKのインストレーション手順](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code)を参照してください。
2. 本ドキュメントの説明通り、C SDKを使用して手動でトランザクションをインストゥルメントします。

New Relicでは[、Web または非 Web を](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm)ソフトウェア アプリケーション内の 1 つの論理的な作業単位として定義します。 関数を追加してソースコードにトランザクションを手動で計装すると、New Relic [<DNT>**Transactions**</DNT>](/docs/apm/applications-menu/monitoring/transactions-page)New Relicの ページ でデータを表示できます。トランザクションのセグメントとエラーを計装することもできます。

## トランザクションをインストゥルメントする [#instrument-c-txn]

モニターできるようにトランザクションをインストゥルメントするには、トランザクションの周囲でインストゥルメンテーションを開始および停止するNew Relic機能をラップします。使用する機能は、[ウェブまたは非ウェブトランザクション](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm#types)のいずれをインストゥルメントしたいかにより異なります。

次の例では、アプリケーションは`newrelic_create_app()`を呼び出した後に作成されています。詳細については、GitHubにある[C SDKのインストレーション手順](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code)および[C SDK `libnewrelic.h`ドキュメント](https://newrelic.github.io/c-sdk/libnewrelic_8h.html)を参照してください。

1. モニターするエンドポイントのすぐ後に次のコードを追加し、必要な引数を指定します。 <DNT>**before**</DNT>

   ウェブトランザクションの場合：

   ```
   // Example code:
   <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#add4646ef16f4f0c9b75934cf96909655">newrelic_txn_t</a> *txn;
   /* ... */
   txn = <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#adbf7c1fa57482f6e0a7f291e0b5ec80f">newrelic_start_web_transaction</a>(app, "NAME_YOUR_TRANSACTION");
   ```

   非ウェブトランザクションの場合：

   ```
   // Example code:
   newrelic_txn_t *txn;
   /* ... */
   txn = <a href="https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a88648cc287f8d7e371139dc3809b7afb">newrelic_start_non_web_transaction</a>(app, "NAME_YOUR_TRANSACTION");
   ```

2. 監視したい Web または非 Web 境界の直後に`newrelic_end_transaction()`を追加し、その場所にポインタ`&txn`を指定します。

## セグメントをインストゥルメントする [#segments]

C SDKを使用してトランザクションをインストゥルメントしたら、そこで[セグメント](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm#segments)をインストゥルメントできます。セグメントをインストゥルメントすることにより、トランザクション内の個別の機能および呼び出しをモニターできます。

<DNT>
  **Segments example**
</DNT>

チェックアウトプロセスに関連するトランザクションがあり、これは、発送情報とクレジットカード情報の両方をプロセスするものです。アプリケーションをインストゥルメントし、当該トランザクションを最大2つのセグメントに分割することができます：1つは発送用、もう1つは支払い用です。

セグメントをインストゥルメントし、次のような種類の呼び出しをモニターできます：

* 外部セグメントを使用した[外部サービス](#external-segments)
* 任意コードを対象とする[カスタムセグメント](#custom-segments)
* データストアセグメントを使用した[データストア](#datastore-segments)
* [低速クエリトレース](#slow-query-datastore)（SQL データストアのみ）

詳細については、GitHubにある[C SDKのインストレーション手順](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code)および[C SDK `libnewrelic.h`ドキュメント](https://newrelic.github.io/c-sdk/libnewrelic_8h.html)を参照してください。

<CollapserGroup>
  <Collapser
    id="external-segments"
    title="外部サービスへの機器呼び出し"
  >
    外部サービスへの呼び出しを監視するには、インストゥルメント化されたトランザクション内にある外部セグメントを計算します。 外部セグメントは[、 <DNT>**Transactions**</DNT>ページの<DNT>**Breakdown**</DNT>テーブル](/docs/apm/applications-menu/monitoring/transactions-page-find-specific-performance-problems)と[<DNT>**External services**</DNT>ページ](/docs/apm/applications-menu/monitoring/external-services-page)に表示されます。

    外部セグメントをインストゥルメントするには、モニターしたい機能の周囲でインストゥルメンテーションを開始および停止するNew Relic機能をラップします：

    1. [トランザクションをインストゥルメントします](#instrument-c-txn)。

    2. 必要なパラメーターを指定して、外部セグメントを説明する[`newrelic_external_segment_params_t`](https://newrelic.github.io/c-sdk/structnewrelic__external__segment__params__t.html)を作成します。

    3. モニターしたい機能の直前に`newrelic_start_external_segment()`を追加し、必要なパラメーターを供給します。

    4. モニターしたい機能の直後に`newrelic_end_segment()`を追加し、必要なパラメーターを供給します。

       詳細については、GitHubにある[C SDKのインストレーション手順](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code)および[C SDK `libnewrelic.h`ドキュメント](https://newrelic.github.io/c-sdk/libnewrelic_8h.html)を参照してください。
  </Collapser>

  <Collapser
    id="custom-segments"
    title="任意コードへの呼び出しをインストゥルメントする（カスタムセグメント）"
  >
    任意のコードへの呼び出しを監視するには、インストゥルメント化されたトランザクション内にあるカスタム セグメントを計算します。 カスタム セグメントは[、 <DNT>**Transactions**</DNT>ページ](/docs/apm/applications-menu/monitoring/transactions-page-find-specific-performance-problems)の<DNT>**Breakdown**</DNT>テーブルに表示されます。

    カスタムセグメントをインストゥルメントするには、モニターしたい機能の周囲でインストゥルメンテーションを開始および停止するNew Relic機能をラップします。

    1. [トランザクションをインストゥルメントします](#instrument-c-txn)。

    2. モニターしたい機能の直前に`newrelic_start_segment()`を追加し、必要なパラメーターを供給します。

    3. モニターしたい機能の直後に`newrelic_end_segment()`を追加し、必要なパラメーターを供給します。

       詳細については、GitHubにある[C SDKのインストレーション手順](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code)および[C SDK `libnewrelic.h`ドキュメント](https://newrelic.github.io/c-sdk/libnewrelic_8h.html)を参照してください。
  </Collapser>

  <Collapser
    id="datastore-segments"
    title="データストアへの呼び出しをインストゥルメントする"
  >
    データストアへの呼び出しを監視するには、インストゥルメント化されたトランザクション内のデータストア セグメントを計算します。 データストア セグメントは、New Relic の[<DNT>**Transactions**</DNT>ページ](/docs/apm/applications-menu/monitoring/transactions-page)の<DNT>**Breakdown**</DNT>テーブルと<DNT>**Databases**</DNT>タブに表示されます。 データストア セグメントを[ APM`Transaction` イベント](/docs/insights/insights-data-sources/default-events-attributes/apm-default-event-attributes) の[`databaseDuration` 属性](/attribute-dictionary/?event=Transaction&attribute=databaseDuration) として表示することもできます。

    データストアセグメントをインストゥルメントするには、モニターしたい機能の周囲でインストゥルメンテーションを開始および停止するNew Relic機能をラップします。

    1. [トランザクションをインストゥルメントします](#instrument-c-txn)。

    2. データストアセグメントを説明する[`newrelic_datastore_segment_params_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__params__t.html)を作成します。

    3. モニターしたい機能の直前に`newrelic_start_datastore_segment()`を追加し、必要なパラメーターを供給します。

    4. モニターしたい機能の直後に`newrelic_end_segment()`を追加し、必要なパラメーターを供給します。

       詳細については、GitHubにある[C SDKのインストレーション手順](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code)および[C SDK `libnewrelic.h`ドキュメント](https://newrelic.github.io/c-sdk/libnewrelic_8h.html)を参照してください。

       <Callout variant="tip">
         データベース名とデータベースインスタンスの報告方法を設定するには、[`newrelic_datastore_segment_config_t`](https://newrelic.github.io/c-sdk/structnewrelic__datastore__segment__config__t.html)を使用します。
       </Callout>
  </Collapser>

  <Collapser
    id="slow-query-datastore"
    title="データストアセグメントの低速クエリトレースを報告する（SQLのみ）"
  >
    <Callout variant="important">
      低速クエリトレースを報告できるのは、SQLデータベースのみです。
    </Callout>

    特定した時間より長くかかるデータストアセグメントについて低速クエリトレースを報告するには、[newrelic_app_config_t](https://newrelic.github.io/c-sdk/structnewrelic__app__config__t.html)で次の設定を有効化します。

    1. [`transaction_tracer.datastore_reporting.enabled`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html)を`true`に設定して、スロークエリトレーシングを有効にします。

    2. 閾値を設定するには、マイクロ秒単位の時間を[`transaction_tracer.datastore_reporting.threshold_us`](https://newrelic.github.io/c-sdk/structnewrelic__transaction__tracer__config__t.html)に追加します。

       次に、データストアの呼び出しに閾値よりも長い時間がかかる場合、C SDK はそれをスロークエリとして報告します。 スロークエリ トレースの詳細を表示するには、New Relic の[<DNT>**Databases**</DNT>](/docs/apm/applications-menu/monitoring/databases-page)ページと[<DNT>**Slow queries**</DNT>](/docs/apm/applications-menu/monitoring/view-slow-query-details)ページを使用します。

       詳細については、GitHubにある[C SDKのインストレーション手順](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code)および[C SDK `libnewrelic.h`ドキュメント](https://newrelic.github.io/c-sdk/libnewrelic_8h.html)を参照してください。
  </Collapser>
</CollapserGroup>

## エラーをインストゥルメントする [#errors]

トランザクションのエラーをモニターするためにC SDKを使用するには、[`newrelic_notice_error()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a02a9a959015a0ca68ce11c750f690475)関数を追加することにより、手動でソースコードをインストゥルメントする必要があります。

トランザクション エラーとエラー トレースは、New Relic の[<DNT>**Error analytics**</DNT>ページ](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces)に表示されます。 C SDK は、エラーの合計数と 1 分あたり最大 100 件のエラー トレースを報告します。 トランザクション エラーを[APM `TransactionError`イベント](/docs/insights/insights-data-sources/default-events-attributes/apm-default-event-attributes)として表示、クエリ、視覚化することもできます。

<Callout variant="tip">
  関数の呼び出しをエラートレースに含めるには、GNUの`-rdynamic`リンカーフラグを使い、[コンパイルする際にアプリケーションをリンクさせます](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code#compile)。`-rdynamic`リンカーフラグを使うと、エラートレースがより意味を持つものになります。
</Callout>

トランザクションのエラーをインストゥルメントするには：

1. [トランザクションを開始します](#start-transaction)。
2. [`newrelic_notice_error()`](https://newrelic.github.io/c-sdk/libnewrelic_8h.html#a02a9a959015a0ca68ce11c750f690475)でエラーを記録し、必要なパラメーターを指定します。
3. [トランザクションを終了](#end-transaction)し、必要なパラメーターを供給します。

詳細については、GitHubにある[C SDKのインストレーション手順](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code)および[C SDK `libnewrelic.h`ドキュメント](https://newrelic.github.io/c-sdk/libnewrelic_8h.html)を参照してください。

## メトリクスのグループ化問題を回避する [#mgi]

アカウントまたはアプリケーションが、グループで管理した方がよい個別のメトリックを多数送信する場合、 New Relicこの状況を説明するために <DNT>**metric grouping issue**</DNT> または <DNT>**MGI**</DNT> という用語を使用します。 アプリケーションが New Relic に不必要に大量のデータを送信すると、グラフ、表、レポートの有効性が低下します。

メトリクスのグループ化問題が最も起きやすいのはウェブトランザクションであり、特に当てはまるのはURLに基づく命名が行われた場合です。このような状況を回避するために、[メトリクスのグループ化問題](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues)を参照してください。
