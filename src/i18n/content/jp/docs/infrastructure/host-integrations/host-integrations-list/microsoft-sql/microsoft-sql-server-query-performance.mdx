---
title: Microsoft SQL Serverの統合レベル監視
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
  - Configuration
metaDescription: Configuration New Relic's Kafka integration.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="プレビュー">
  この機能はまだ開発中ですが、ぜひお試しください。

  この機能は現在、弊社の[プレリリース ポリシー](https://docs.newrelic.com/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy/)に従ってプレビューの一部として提供されています。
</Callout>

発言レベルの分析を表示して、MSSQL データベース内の SQL 発言を監視し、そのパフォーマンスと影響を評価できます。 この機能は、インサイトの実行時間、リソース消費、潜在的なボトルネックを把握し、データベース操作を最適化できるようにします。 詳細については、 [「クエリ レベルの分析」](/docs/infrastructure/infrastructure-data/query-level-monitoring)を参照してください。

<img title="Query Performance monitoring" alt="Query Performance monitoring" src="/images/mssql-query-performance.webp" />

## 前提条件:

* Microsoft SQL Server は 2017、2019、または 2022 をサポートします。
* DB ユーザーは、sysadmin 固定サーバー ロールのメンバーであるか、 `VIEW SERVER STATE`権限を持っている必要があります。

クエリ レベルの監視機能を有効にするには、次の手順に従います。

<Steps>
  <Step>
    ## SQL ServerとWindows認証モードを有効にするには

    SQL Server および Windows 認証モードでのログインを有効にします。 詳細については、 [Microsoft の認証モードの変更に関するドキュメント](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/change-server-authentication-mode?view=sql-server-ver16&tabs=ssms)を参照してください。
  </Step>

  <Step>
    ## TCPを有効にするには

    1. [ドキュメント](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port?view=sql-server-ver16)を使用して、インスタンスのリモートアクセスに対してTCPが有効になっていることを確認します。
    2. ファイアウォールの設定を確認します:

    * ファイアウォールがポート`1433`上のトラフィックを許可していることを確認してください。 これは Microsoft SQL Server のリスニング ポートです。

      * **Windows Defender Firewall with Advanced Security** \[セキュリティが強化された Windows Defender ファイアウォール]を開きます。
      * 左側のメニューで、 **Inbound Rules**「受信の規則」をクリックします。
      * SQL Server のルールを検索します (通常は SQL Server (TCP-In) または SQL Server TCP 1433 という名前です)。
      * ルールが存在しない場合は、ポート 1433 で TCP トラフィックを許可する新しいルールを作成します。
  </Step>

  <Step>
    ## クエリストアを有効にするには [#queryStore]

    次のコマンドを実行します

    ```sql
    ALTER DATABASE DATABASE_NAME SET QUERY_STORE = ON ( QUERY_CAPTURE_MODE = ALL, DATA_FLUSH_INTERVAL_SECONDS = 900 )
    ```
  </Step>

  <Step>
    ## クエリストアが有効になっているかどうかを確認するには、以下のクエリを実行します。 [#confirmQueryStore]

    クエリの出力が 1 の場合、クエリ ストアが有効になっていると想定できます。

    ```sql
    SELECT is_query_store_on FROM sys.databases where physical_database_name = DATABASE_NAME
    ```
  </Step>

  <Step>
    ## MSSQL エージェントを統合するには

    [このガイドを使用して MSSQL エージェントを統合します。](/install/microsoft-sql)
  </Step>

  <Step>
    ## MSSQL 統合を構成して書き込みパフォーマンス監視を有効にするには

    1. ディレクトリを統合設定フォルダーに変更するには、次のコマンドを実行します。

    ```bash
    cd "C:\Program Files\New Relic\newrelic-infra\integrations.d\"
    ```

    2. 次の設定で`mssql-config.yml`ファイルを編集します。

    * `ENABLE_QUERY_MONITORING` - 書き込みパフォーマンス監視を有効にする - デフォルトは`false`です。
    * `QUERY_MONITORING_RESPONSE_TIME_THRESHOLD `- 個別の書き込みパフォーマンス メトリクスを取得するには、書き込み応答タイムの値をミリ秒単位で設定します。 `Defaults`は`500 ms`に設定されています。
    * `QUERY_MONITORING_COUNT_THRESHOLD` - 各書き込みパフォーマンス メトリクスのレコード数。 `Defaults`は`20`に設定されています。

    ```yaml
      integrations:
      - name: nri-mssql
      env:
        HOSTNAME: localhost
        PORT: 1433
        USERNAME: USERNAME
        PASSWORD: PASSWORD
        ENABLE_SSL: true
        TRUST_SERVER_CERTIFICATE: true
        # Enable collection of detailed query performance metrics.
        ENABLE_QUERY_MONITORING: true
        # Threshold in milliseconds for query response time. If response time exceeds this threshold, the query will be considered slow.
        QUERY_MONITORING_RESPONSE_TIME_THRESHOLD: 500
        # Maximum number of queries returned in query analysis results.
        QUERY_MONITORING_COUNT_THRESHOLD: 20
        # Interval in seconds for fetching grouped slow queries; Should always be same as mysql-config interval.
        QUERY_MONITORING_FETCH_INTERVAL: 15
      interval: 15s
      labels:
        environment: production
      inventory_source: config/mssql
    ```
  </Step>

  <Step>
    ## データを検索する

    事前に構築されたダッシュボード テンプレートを使用して、MSSQL メトリクスを監視できます。 事前に構築されたダッシュボード テンプレートを使用するには、次の手順に従ってください。

    1. [one.newrelic.com](https://one.newrelic.com)から、 <DNT>**+ Integrations &amp; Agents**</DNT>ページに移動します。
    2. クリック <DNT>**Dashboards**</DNT>
    3. 検索バーに次のように入力します。 `MSSQL On-Host Integration`
    4. MSSQL ダッシュボードが表示されます。 クリックしてインストールします。
  </Step>
</Steps>

## インテグレーションにより収集されたメトリクス

<CollapserGroup>
  <Collapser id="blockingSession" title="セッションのメトリクスのブロック">
    <table>
      <thead>
        <tr>
          <th>
            メトリック
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `blocking_spid`
          </td>

          <td>
            ブロックしているセッションの ID。
          </td>
        </tr>

        <tr>
          <td>
            `blocking_status`
          </td>

          <td>
            ブロックしているセッションのステータス。
          </td>
        </tr>

        <tr>
          <td>
            `blocked_spid`
          </td>

          <td>
            ブロックされたセッションの ID。
          </td>
        </tr>

        <tr>
          <td>
            `blocked_status`
          </td>

          <td>
            ブロックされたセッションのステータス。
          </td>
        </tr>

        <tr>
          <td>
            `wait_type`
          </td>

          <td>
            ブロックされたセッションで発生した待機の種類。
          </td>
        </tr>

        <tr>
          <td>
            `wait_time_in_seconds`
          </td>

          <td>
            セッションが待機していた時間（秒単位）。
          </td>
        </tr>

        <tr>
          <td>
            `command_type`
          </td>

          <td>
            実行されるコマンドの種類。
          </td>
        </tr>

        <tr>
          <td>
            `database_name`
          </td>

          <td>
            ブロックが発生しているデータベースの名前。
          </td>
        </tr>

        <tr>
          <td>
            `blocking_query_text`
          </td>

          <td>
            ブロックの原因となったクエリのテキスト。
          </td>
        </tr>

        <tr>
          <td>
            `blocked_query_text`
          </td>

          <td>
            ブロックされているクエリのテキスト。
          </td>
        </tr>

        <tr>
          <td>
            `blocked_query_start_time`
          </td>

          <td>
            ブロックされたクエリの開始時刻。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="executionPlan" title="クエリ実行プランのメトリクス">
    <table>
      <thead>
        <tr>
          <th>
            メトリック
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `sql_text`
          </td>

          <td>
            SQL ステートメントのテキスト。
          </td>
        </tr>

        <tr>
          <td>
            `query_id`
          </td>

          <td>
            クエリの一意の識別子。
          </td>
        </tr>

        <tr>
          <td>
            `query_plan_id`
          </td>

          <td>
            クエリ プランの一意の識別子。
          </td>
        </tr>

        <tr>
          <td>
            `NodeId`
          </td>

          <td>
            実行プラン内のノードの ID。
          </td>
        </tr>

        <tr>
          <td>
            `PhysicalOp`
          </td>

          <td>
            このノードによって実行される物理的な操作。
          </td>
        </tr>

        <tr>
          <td>
            `LogicalOp`
          </td>

          <td>
            このノードによって表される論理演算。
          </td>
        </tr>

        <tr>
          <td>
            `EstimateRows`
          </td>

          <td>
            この操作によって生成される行の推定数。
          </td>
        </tr>

        <tr>
          <td>
            `EstimateIO`
          </td>

          <td>
            この操作の推定 I/O コスト。
          </td>
        </tr>

        <tr>
          <td>
            `EstimateCPU`
          </td>

          <td>
            この操作の推定 CPU コスト。
          </td>
        </tr>

        <tr>
          <td>
            `AvgRowSize`
          </td>

          <td>
            このノードによって処理される行の平均サイズ。
          </td>
        </tr>

        <tr>
          <td>
            `TotalSubtreeCost`
          </td>

          <td>
            このサブツリーを実行するための推定総コスト。
          </td>
        </tr>

        <tr>
          <td>
            `EstimatedOperatorCost`
          </td>

          <td>
            ノードの操作にかかるコストの見積もり。
          </td>
        </tr>

        <tr>
          <td>
            `EstimatedExecutionMode`
          </td>

          <td>
            この操作の推定実行モード。
          </td>
        </tr>

        <tr>
          <td>
            `GrantedMemoryKb`
          </td>

          <td>
            このクエリに許可されるメモリの量（キロバイト単位）。
          </td>
        </tr>

        <tr>
          <td>
            `SpillOccurred`
          </td>

          <td>
            スピルが発生したかどうかを示すブール値インジケーター。
          </td>
        </tr>

        <tr>
          <td>
            `NoJoinPredicate`
          </td>

          <td>
            結合述語があるかどうかを示すブール値インジケーター。
          </td>
        </tr>

        <tr>
          <td>
            `total_worker_time`
          </td>

          <td>
            ワーカーの合計時間（ミリ秒単位）。
          </td>
        </tr>

        <tr>
          <td>
            `total_elapsed_time`
          </td>

          <td>
            経過時間の合計（ミリ秒単位）。
          </td>
        </tr>

        <tr>
          <td>
            `total_logical_reads`
          </td>

          <td>
            実行された論理読み取りの合計数。
          </td>
        </tr>

        <tr>
          <td>
            `total_logical_writes`
          </td>

          <td>
            実行された論理書き込みの合計数。
          </td>
        </tr>

        <tr>
          <td>
            `execution_count`
          </td>

          <td>
            クエリが実行された回数。
          </td>
        </tr>

        <tr>
          <td>
            `plan_handle`
          </td>

          <td>
            プランを取得するために使用されるプラン ハンドル。
          </td>
        </tr>

        <tr>
          <td>
            `avg_elapsed_time_ms`
          </td>

          <td>
            平均経過時間（ミリ秒単位）。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="waitTime" title="待ちイベントメトリクス">
    <table>
      <thead>
        <tr>
          <th>
            メトリック
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            チェック
          </td>

          <td>
            クエリの一意の識別子。
          </td>
        </tr>

        <tr>
          <td>
            データベース名
          </td>

          <td>
            データベースの名前。
          </td>
        </tr>

        <tr>
          <td>
            クエリテキスト
          </td>

          <td>
            クエリのテキスト。
          </td>
        </tr>

        <tr>
          <td>
            待機カテゴリ
          </td>

          <td>
            クエリによって発生する待機のカテゴリ。
          </td>
        </tr>

        <tr>
          <td>
            合計待ち時間（ミリ秒）
          </td>

          <td>
            待機時間の合計（ミリ秒単位）。
          </td>
        </tr>

        <tr>
          <td>
            平均待ち時間（ミリ秒）
          </td>

          <td>
            待機時間の平均（ミリ秒単位）。
          </td>
        </tr>

        <tr>
          <td>
            待機イベント数
          </td>

          <td>
            発生した待機イベントの数。
          </td>
        </tr>

        <tr>
          <td>
            最終実行時間
          </td>

          <td>
            クエリの最終実行時刻。
          </td>
        </tr>

        <tr>
          <td>
            コレクションタイムスタンプ
          </td>

          <td>
            データが収集されたときのタイムスタンプ。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser id="slowQueries" title="遅い書き込みメトリクス">
    <table>
      <thead>
        <tr>
          <th>
            指標
          </th>

          <th>
            説明
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            チェック
          </td>

          <td>
            クエリの一意の識別子。
          </td>
        </tr>

        <tr>
          <td>
            クエリテキスト
          </td>

          <td>
            クエリのテキスト。
          </td>
        </tr>

        <tr>
          <td>
            データベース名
          </td>

          <td>
            データベースの名前。
          </td>
        </tr>

        <tr>
          <td>
            スキーマ名
          </td>

          <td>
            スキーマの名前。
          </td>
        </tr>

        <tr>
          <td>
            最終実行タイムスタンプ
          </td>

          <td>
            クエリの最終実行のタイムスタンプ。
          </td>
        </tr>

        <tr>
          <td>
            実行回数
          </td>

          <td>
            クエリが実行された回数。
          </td>
        </tr>

        <tr>
          <td>
            平均CPU時間
          </td>

          <td>
            平均 CPU 時間（ミリ秒単位）。
          </td>
        </tr>

        <tr>
          <td>
            平均経過時間（ミリ秒）
          </td>

          <td>
            平均経過時間（ミリ秒単位）。
          </td>
        </tr>

        <tr>
          <td>
            平均ディスク読み取り
          </td>

          <td>
            ディスク読み取りの平均回数。
          </td>
        </tr>

        <tr>
          <td>
            平均ディスク書き込み
          </td>

          <td>
            ディスク書き込みの平均回数。
          </td>
        </tr>

        <tr>
          <td>
            ステートメントタイプ
          </td>

          <td>
            SQL ステートメントのタイプ。
          </td>
        </tr>

        <tr>
          <td>
            コレクションタイムスタンプ
          </td>

          <td>
            データが収集されたときのタイムスタンプ。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>