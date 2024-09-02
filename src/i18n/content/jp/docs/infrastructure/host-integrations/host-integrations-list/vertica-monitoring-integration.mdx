---
title: Vertica の統合
tags:
  - Vertica integration
  - New Relic integrations
metaDescription: Use New Relics infrastructure agent to get a dashboard with metrics from your Vertica.
freshnessValidatedDate: '2023-09-01T00:00:00.000Z'
translationType: machine
---

Vertica との統合により、データ ストレージのパフォーマンスが監視されます。

<img
  title="Vertica dashboard"
  alt="Vertica dashboard"
  src="/images/infrastructure_screenshot-full_Vertica-dashboard.webp"
/>

<figcaption>
  Vertica 統合を設定すると、Vertica メトリクスのダッシュボードが提供されます。
</figcaption>

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします [#infra-install]

    インフラストラクチャ エージェントは、次の 2 つの方法でインストールできます。

    * [ガイド付きインストール](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd)は、システムを検査し、システムに最適なアプリケーション監視エージェントとともにインフラストラクチャ エージェントをインストールする CLI ツールです。ガイド付きインストールの仕組みの詳細については、[ガイド付きインストールの概要](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview)をご覧ください。
    * インフラストラクチャ エージェントを手動でインストールする場合は、 [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux)、 [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/)、または [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/)の手動インストールのチュートリアルに従うことができます。
  </Step>

  <Step>
    ## `nri-flex`を使用して指標を取得します [#flex]

    Flex は New Relic インフラストラクチャ エージェントにバンドルされています。Vertica 用に`nri-flex`を構成し、フレックス構成ファイルを作成する必要があります。

    以下の手順に従ってください。

    1. このパスに `vertica-flex-config.yml` という名前のファイルを作成します。

       ```shell
       /etc/newrelic-infra/integrations.d
       ```

    2. ファイル `vertica-flex-config.yml` を次の構成で更新します。

       * `EVENT_TYPE`: `EVENT_TYPE` NRQL を使用してクエリできる New Relic データベース テーブルと考えることができます。
       * `COMMAND`: これには、端末上でメトリクスを出力するために使用されるコマンドが含まれています。

         構成ファイルが更新されると、次のようになります。

       ```yml
         --- 
         integrations:
           - name: nri-flex
             config:
               name: VerticaFlex
               apis:
                 - database: vertica
                   db_conn: 'vertica://dbadmin:vertica@13.235.79.230:5433/dbadmin'
                   logging:
                     open: true
                   db_async: true # process queries async
                   db_queries:
                     - name: VerticaFindCitiesDetails
                       run: SELECT * FROM cities;
                     - name: VerticaDiskSpaceUsedByTables
                       run: SELECT projection_schema, anchor_table_name, to_char(sum(used_bytes)/1024/1024/1024,'999,999.99') as disk_space_used_gb FROM projection_storage
       GROUP by projection_schema, anchor_table_name ORDER by disk_space_used_gb desc limit 50;
                     - name: VerticaFreeDiskSpace
                       run: SELECT to_char(sum(disk_space_free_mb)/1024,'999,999,999') AS disk_space_free_gb, to_char(sum(disk_space_used_mb)/1024,'999,999,999') AS disk_space_used_gb FROM disk_storage;
                     - name: VerticaUserInformation
                       run: SELECT user_name, is_super_user, resource_pool, memory_cap_kb, temp_space_cap_kb, run_time_cap FROM users;
                     - name: VerticaUserDetails
                       run: SELECT * FROM user_sessions;
                     - name: VerticaQueriesByUser
                       run: SELECT * FROM query_profiles WHERE user_name ILIKE '%dbadmin%';
                     - name: VerticaUserRolesInformation
                       run: SELECT * FROM roles;
                     - name: VerticaResourcePoolAssignments
                       run: SELECT user_name, resource_pool FROM users;
                     - name: VerticaTableInfo
                       run: SELECT table_name, is_flextable, is_temp_table, is_system_table, count(*) FROM tables GROUP by 1,2,3,4;
                     - name: VerticaActiveEvents
                       run: SELECT * FROM active_events WHERE event_problem_description NOT ILIKE '%state to UP';
                     - name: VerticaDiskStorage
                       run:  SELECT node_name, storage_path, storage_usage, storage_status, disk_space_free_percent FROM disk_storage;
                     - name: VerticaLongRunningQueries
                       run: SELECT query_duration_us/1000000/60 AS query_duration_mins, table_name, user_name, processed_row_count AS rows_processed, substr(query,0,70) FROM query_profiles ORDER BY query_duration_us DESC LIMIT 250;
                     - name: VerticaLicenseConsumption
                       run: SELECT GET_COMPLIANCE_STATUS();
                     - name: VerticaAudit
                       run: SELECT AUDIT('');

       ```
  </Step>

  <Step>
    ## Vertica ログを New Relic に転送する [#logs]

    [ログ転送を](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/)使用して、Vertica ログを New Relic に転送できます。

    Linux マシンでは、次のパスに`logging.yml`という名前のログ ファイルがあります。

    ```shell
    /etc/newrelic-infra/logging.d/
    ```

    ログ ファイルを作成した後、次のスクリプトを `logging.yml` ファイルに追加します。

    ```yml
    logs:
      - name: vertica.log
        file: /home/dbadmin/vdb/v_vdb_node0001_catalog/vertica.log
        attributes:
          logtype: vertica_log
    ```
  </Step>

  <Step>
    ## New Relic インフラストラクチャ エージェントを再起動します [#restart]

    データの読み取りを開始する前に、 [インフラストラクチャ エージェントのドキュメント](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) の手順に従ってインフラストラクチャ エージェントを再起動します。

    ```bash
    sudo systemctl restart newrelic-infra.service
    ```

    数分で、アプリケーションはメトリクスを [one.newrelic.com](https://one.newrelic.com)に送信します。
  </Step>

  <Step>
    ## データを検索する [#find-data]

    `Vertica`という名前の事前に構築されたダッシュボード テンプレートを選択して、Vertica アプリケーションのメトリクスを監視できます。事前に構築されたダッシュボード テンプレートを使用するには、次の手順に従います。

    1. [one.newrelic.com](https://one.newrelic.com)から、

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       ページに移動します。

    2. <DNT>
         **Dashboards**
       </DNT>

       をクリックします。

    3. 検索バーに`vertica`と入力します。

    4. Vertica ダッシュボードが表示されます。それをクリックしてインストールします。

       Vertica ダッシュボードはカスタムダッシュボードとみなされ、<DNT>**Dashboards**</DNT> UIで確認できます。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメント](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)をご覧ください。

       これは、ユーザー名、リソース プール、メモリ キャップ、一時スペース キャップ、実行時間キャップなどのデータ ポイントのデータベース ユーザー情報を検索する NRQL クエリです。

       ```sql
       SELECT user_name, is_super_user, resource_pool, memory_cap_kb, temp_space_cap_kb, run_time_cap 
       FROM VerticaUserInformation;
       ```
  </Step>
</Steps>

## 次は何ですか？ [#next]

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。

* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。

* [ダッシュボードを管理して](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)、

  <InlinePopover type="dashboards"/>

  表示モードを調整したり、ダッシュボードにコンテンツを追加したりできます。
