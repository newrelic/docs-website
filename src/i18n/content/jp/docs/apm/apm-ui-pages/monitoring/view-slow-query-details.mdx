---
title: スロークエリの詳細を表示する
tags:
  - APM
  - APM UI pages
  - Monitoring
metaDescription: 'APM: How to view slow query data, and how to enable and configure slow query data collection.'
freshnessValidatedDate: '2024-06-07T00:00:00.000Z'
translationType: human
---

APMでは、[トランザクショントレース](/docs/apm/transactions/transaction-traces/introduction-transaction-traces)を収集するときに追加の<DNT>**Slow query**</DNT>スロークエリデータも検出され、それが[<DNT>**Databases**</DNT>](/docs/apm/apm-ui-pages/monitoring/databases-page-view-operations-throughput-response-time/)ページに表示されることがあります。スロークエリデータとは何か、存在する場所、その設定方法を見てみましょう。

## スロークエリデータのサンプリング [#about]

[トランザクショントレース](/docs/apm/transactions/transaction-traces/introduction-transaction-traces)が報告されると、スロークエリ機能によってトレース内で最も遅いデータベースクエリがサンプリングされ、それらに関するデータが[<DNT>**Databases**</DNT>](/docs/apm/applications-menu/monitoring/databases-slow-queries-page)ページに報告されます。スロークエリデータの内容：

* クエリセグメントの期間
* クエリ/説明プラン（認識される場合）
* [ホストおよびインスタンスレベルの詳細](/docs/apm/applications-menu/features/analyze-database-instance-level-performance-issues)（エージェントでサポートされる場合）

## スロークエリデータを表示する [#db_slowsql]

スローSQLクエリに関するデータはAPMのUIで表示できます。

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**
   </DNT>

   に移動します。

2. アプリを選択します。

3. <DNT>
     **Monitor**
   </DNT>

   セクションで、

   <DNT>
     **Databases**
   </DNT>

   をクリックします。

4. データベースのトランザクションを選択します。

5. 任意の[スロークエリ](#slowsql_details)をクリックすると詳細が取得されます。

   <img
     title="Screenshot showing the APM databases page with slow queries"
     alt="Screenshot showing the APM databases page with slow queries"
     src="/images/apm_screenshot-full_apm-databases-ui.webp"
   />

想定していたスロークエリのデータが表示されない場合は、[トラブルシューティングのヒント](#troubleshooting)を参照してください。

## 設定 [#settings]

通常、スロークエリの設定は以下の方法で指定できます。

* エージェントの設定（以下を参照）
* [サーバーサイドコンフィグレーション](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) (エージェントで利用可能な場合)

エージェント設定には、サーバーサイドコンフィグレーションよりも多くのオプションが提供されています。スロークエリを構成する方法は、独自のセットアップと環境設定によって異なります。詳細については、エージェント固有のドキュメントを参照してください：

<CollapserGroup>
  <Collapser
    id="go"
    title="Go"
  >
    エージェント設定オプション：

    * 有効/無効：[`SlowQuery.Enabled`](/docs/agents/go-agent/configuration/go-agent-configuration#slow-query)
    * 低速クエリの閾値： [`SlowQuery.Threshold`](/docs/agents/go-agent/configuration/go-agent-configuration#slow-query-threshold)
    * その他のデータベース設定オプションについては、[データストアトレーサー設定](/docs/agents/go-agent/configuration/go-agent-configuration#datastore-tracer)を参照してください。
  </Collapser>

  <Collapser
    id="java"
    title="Java"
  >
    エージェントの設定：

    * 低速クエリの閾値：[`explain_threshold`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-explain_threshold)。

    * スロートランザクションとクエリに関連のあるその他の設定については、[トランザクショントレーサー設定オプション](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-Transaction-tracer)をご覧ください。

      [サーバーサイドコンフィグレーション](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc)を使用して、基本的なスロークエリの設定を編集することもできます。
  </Collapser>

  <Collapser
    id="net"
    title=".NET"
  >
    エージェントの設定：

    * 有効/無効：[`slowSql enabled`](/docs/agents/net-agent/configuration/net-agent-configuration#slow_sql)

    * スロークエリ閾値：[explainThreshold](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-explainThreshold)

    * 低速なトランザクションとクエリに関連のあるその他の設定については、[トランザクショントレーサー設定オプション](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer)および[データストアトレーサーのオプション](/docs/agents/net-agent/configuration/net-agent-configuration#datastore_tracer)をご覧ください。

      [サーバーサイドコンフィグレーション](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc)を使用して、基本的なスロークエリの設定を編集することもできます。
  </Collapser>

  <Collapser
    id="node"
    title="Node.js"
  >
    エージェントの設定：

    * 有効/無効：[`enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#slow-sql-enabled)

    * 閾値： [`explain_threshold`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#explain_threshold)

    * 低速クエリの最大サンプル：[`max_samples`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#slow-sql-max-samples)

    * スロートランザクションとクエリに関連のあるその他の設定については、[トランザクショントレーサー設定オプション](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config)をご覧ください。

      Node.jsエージェントでは、低速クエリデータの[サーバーサイドコンフィグレーション](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration)は不可能です。
  </Collapser>

  <Collapser
    id="php"
    title="PHP"
  >
    エージェントの設定：

    * 有効/無効：[`slow_sql`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-slowsql)

    * 閾値： [`explain_threshold`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-epthreshold)

    * スロートランザクションとクエリに関連のあるその他の設定については、[トランザクショントレーサー設定オプション](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-settings)をご覧ください。

      PHPエージェントでは、[サーバーサイドコンフィグレーション](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration)は不可能です。
  </Collapser>

  <Collapser
    id="python"
    title="Python"
  >
    エージェントの設定：

    * 低速クエリの閾値： [`explain_threshold`](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-explain-threshold)

    * 低速なトランザクションとクエリに関連のあるその他の設定については、[トランザクショントレーサー設定オプション](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings)および[データストアトレーサーのオプション](/docs/agents/python-agent/configuration/python-agent-configuration#datastore-tracer-settings)をご覧ください。

      [サーバーサイドコンフィグレーション](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc)を使用して、基本的なスロークエリの設定を編集することもできます。
  </Collapser>

  <Collapser
    id="ruby"
    title="Ruby"
  >
    エージェントの設定：

    * 有効/無効：[`slow_sql.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql-enabled)

    * 低速クエリの閾値： [`slow_sql.explain_threshold`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql-explain_threshold)

    * 低速トランザクションとクエリに関連のあるその他の設定については、[トランザクショントレーサー設定オプション](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer)および[低速SQL設定オプション](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql)をご覧ください。

      ご利用アプリケーションのエージェント言語に該当する場合は、[サーバーサイド構成](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc)を利用して基本的なスロークエリ設定を編集できます。
  </Collapser>
</CollapserGroup>

## 低速クエリのメトリックス [#slowsql_details]

低速クエリのリストには、次のメトリックスが含まれています。

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Response time`
      </td>

      <td>
        サンプリングされたステートメントの平均応答時間（ミリ秒単位）。
      </td>
    </tr>

    <tr>
      <td>
        `Sample count`
      </td>

      <td>
        サンプル内で特定された低速クエリの件数です。
      </td>
    </tr>
  </tbody>
</table>

さらに詳細を表示するには、個別のスロークエリを選択します：

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Start time`
      </td>

      <td>
        スタックトレースが、表示されたデータの収集を開始した時刻です。
      </td>
    </tr>

    <tr>
      <td>
        `Max time`
      </td>

      <td>
        サンプル内のすべての類似クエリステートメントの実行に要する最大時間です。
      </td>
    </tr>

    <tr>
      <td>
        `Action`
      </td>

      <td>
        クエリを呼び出すアクションまたはプロセスです。
      </td>
    </tr>

    <tr>
      <td>
        `Query`
      </td>

      <td>
        低速と報告されるクエリです。設定によっては、クエリの一部が難読化されることがあります。
      </td>
    </tr>

    <tr>
      <td>
        `Stack trace`
      </td>

      <td>
        コード内でステートメントが呼び出される位置です。
      </td>
    </tr>
  </tbody>
</table>

MySQLの場合、当社はクエリ解析を提供します。これは、クエリで発生した内容を説明し、スピードアップするために必要なものが何か説明します。その他のデータベースでは、可能であれば説明プランを表示します。

## トラブルシューティング：スロークエリデータなし [#troubleshooting]

スロークエリデータが表示されない場合は、そのデータベースがスローSQL用にインストゥルメントされていない可能性があります。

また、設定に問題がある可能性もあります。

* 低速クエリ機能が無効になっている。
* 閾値の期間の設定が長すぎるためスロークエリのレポートがありません。
* クエリの難読化設定（通常`record_sql`またはそれに類似するもの）が`Off`に設定されています。

詳細については[設定オプション](#settings)を参照してください。
