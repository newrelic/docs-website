---
title: SonarQube モニタリングの統合
tags:
  - New Relic integrations
  - SonarQube
metaDescription: Use New Relic browser monitoring to get a dashboard with metrics from your SonarQube.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

SonarQube 統合は、SonarQube アプリケーションのパフォーマンスを監視し、コードの診断と最適化を支援します。 当社の SonarQube インテグレーションは、インフラストラクチャエージェント、PosgreSQL インテグレーション、NRI-Prometheus、NRI-JMX を活用し、最も重要な SonarQube メトリックを含む事前構築されたダッシュボードを提供します。

<img
  title="New Relic SonarQube dashboard"
  alt="New Relic SonarQube dashboard"
  src="/images/infrastructure_screenshot_full-sonarqube-dashboard.webp"
/>

<figcaption>
  SonarQube 統合をセットアップすると、SonarQube メトリクスのダッシュボードが提供されます。
</figcaption>

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします [#infra-install]

    SonarQube 統合を使用するには、まず同じホストに[インフラストラクチャエージェントをインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。 すべてのオンホスト インテグレーションには、メトリックをNew Relicに公開してレポートするインフラストラクチャ エージェントが必要です。
  </Step>

  <Step>
    ## PostgreSQLインテグレーションのインストール

    SonarQube 統合を使用するには、まず PostgreSQL 統合をインストールする必要があります。

    1. インテグレーションをインストールする前に、 [ドキュメント](/docs/infrastructure/host-integrations/host-integrations-list/postgresql/postgresql-integration/)で PostgreSQL インテグレーションの要件を確認してください。 互換性を確認してから、このドキュメントに戻ってください。

    2. PostgreSQL クイックスタート ページ [PostgreSQL クイックスタート インストール](https://newrelic.com/instant-observability/postresql)を開きます。

    3. <DNT>
         **Install now**
       </DNT>

       をクリックして PostgreSQL クイックスタート インストレーションを開始します。
  </Step>

  <Step>
    ## NRI-Prometheus の構成

    1. 次のコマンドを実行して、NRI-Prometheus 構成ファイルを作成します。

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. 次のスニペットを新しい構成ファイルに貼り付けます。 関連するフィールドで`cluster_name`と`urls`必ず更新してください。

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true 
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk 
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "YOUR_CLUSTER_NAME"

             targets:
               - description: Sonarqube metrics list
                 urls: ["http://user_name:password@YOUR_HOST_IP:9000/api/monitoring/metrics"]

             #     tls_config:
             #     ca_file_path: "/etc/etcd/etcd-client-ca.crt"
             #     cert_file_path: "/etc/etcd/etcd-client.crt"
             #      key_file_path: "/etc/etcd/etcd-client.key"

             # Whether the integration should run in verbose mode or not. Defaults to false
             verbose: false

             # Whether the integration should run in audit mode or not. Defaults to false.
             # Audit mode logs the uncompressed data sent to New Relic. Use this to log all data sent.
             # It does not include verbose mode. This can lead to a high log volume, use with care
             audit: false

             # The HTTP client timeout when fetching data from endpoints. Defaults to 30s.
             # scrape_timeout: "30s"

             # Length in time to distribute the scraping from the endpoints
             scrape_duration: "5s"

             # Number of worker threads used for scraping targets.
             # For large clusters with many (&gt;400) endpoints, slowly increase until scrape
             # time falls between the desired `scrape_duration`.
             # Increasing this value too much will result in huge memory consumption if too
             # many metrics are being scraped.
             # Default: 4
             # worker_threads: 4

             # Whether the integration should skip TLS verification or not. Defaults to false
             insecure_skip_verify: true
           timeout: 10s
       ```
  </Step>

  <Step>
    ## JMXインテグレーションのインストールと設定

    SonarQube インテグレーションを使用するには、 [JMX 監視インテグレーションもインストールする](/docs/infrastructure/host-integrations/host-integrations-list/jmx-monitoring-install/)必要があります。 JMX インテグレーションは SonarQube データをスクレイピングし、後でダッシュボードとクエリ可能なデータに変換します。

    1. [JMX 監視インテグレーションをインストールします](/docs/infrastructure/host-integrations/host-integrations-list/jmx-monitoring-install/)。

    2. 次のコード スニペットを`/opt/sonarqube/conf/sonar.properties`に追加します。

       ```yml
       # SonarQube Web Server JMX configuration.
         sonar.web.javaOpts=-Dcom.sun.management.jmxremote \
                         -Dcom.sun.management.jmxremote.port=9010 \
                         -Dcom.sun.management.jmxremote.authenticate=false \
                         -Dcom.sun.management.jmxremote.ssl=false

       # SonarQube Compute Engine JMX configuration.
         sonar.ce.javaOpts=-Dcom.sun.management.jmxremote \
                         -Dcom.sun.management.jmxremote.port=9011 \
                         -Dcom.sun.management.jmxremote.authenticate=false \
                         -Dcom.sun.management.jmxremote.ssl=false
       ```

    3. 次のコード スニペットを`/etc/newrelic-infra/integrations.d/jvm-sonarqube-web-metrics.yml/`に追加します。

       ```yml
       collect:
         - domain: SonarQube
           event_type: JVMSampleSonarQubeWebMetrics
           beans:
             - query: name=AsyncExecution
               attributes:
                 - QueueSize
                 - WorkerCount
                 - LargestWorkerCount
             - query: name=Database
               attributes:
                 - MigrationStatus
                 - PoolActiveConnections
                 - PoolMaxActiveConnections
                 - PoolIdleConnections
                 - PoolMaxIdleConnections
                 - PoolMinIdleConnections
                 - PoolInitialSize
                 - PoolMaxWaitMillis
                 - PoolRemoveAbandoned
                 - PoolRemoveAbandonedTimeoutSeconds
             - query: name=SonarQube
               attributes:
                 - Version
                 - ServerId
                 - LogLevel
       ```

    4. 次のコード スニペットを`/etc/newrelic-infra/integrations.d/jvm-sonarqube-compute-engine-metrics.yml`に追加します。

       ```yml
       collect:
         - domain: SonarQube
           event_type: JVMSampleSonarQubeComputeEngineMetrics
           beans:
             - query: name=ComputeEngineDatabaseConnection
               attributes:
                 - PoolInitialSize
                 - PoolActiveConnections
                 - PoolMaxActiveConnections
                 - PoolIdleConnections
                 - PoolMaxIdleConnections
                 - PoolMinIdleConnections
                 - PoolMaxWaitMillis
                 - PoolRemoveAbandoned
                 - PoolRemoveAbandonedTimeoutSeconds
             - query: name=ComputeEngineTasks
               attributes:
                 - PendingCount
                 - LongestTimePending
                 - InProgressCount
                 - ErrorCount
                 - SuccessCount
                 - ProcessingTime
                 - WorkerMaxCount
                 - WorkerCount
                 - WorkerUuids
                 - EnabledWorkerUuids
       ```

    5. 次のコード スニペットを`/etc/newrelic-infra/integrations.d/jmx-sonarqube-compute-engine-config.yml`に追加します。

       ```yml
       integrations:
         - name: nri-jmx
           env:
             COLLECTION_FILES: /etc/newrelic-infra/integrations.d/jvm-sonarqube-compute-engine-metrics.yml
             JMX_HOST: <YOUR_HOST>
             JMX_PASS: admin
             JMX_PORT: 9010
             JMX_USER: admin
             CONNECTION_URL: service:jmx:rmi://<YOUR_IP>:9010/jndi/rmi://<YOUR_IP>:9010/jmxrmi
             REMOTE_MONITORING: "true"
           interval: 15s
           labels:
             env: staging
       ```

    6. 次のコード スニペットを`/etc/newrelic-infra/integrations.d/jmx-sonarqube-web-config.yml`に追加します。

       ```yml
       integrations:
         - name: nri-jmx
           env:
             COLLECTION_FILES: /etc/newrelic-infra/integrations.d/jvm-sonarqube-web-metrics.yml
             JMX_HOST: <YOUR_HOST>
             JMX_PASS: admin
             JMX_PORT: 9011
             JMX_USER: admin
             CONNECTION_URL: service:jmx:rmi://<YOUR_IP>:9011/jndi/rmi://<YOUR_IP>:9011/jmxrmi
             REMOTE_MONITORING: "true"
           interval: 15s
           labels:
             env: staging
       ```
  </Step>

  <Step>
    ## SonarQube ログを New Relic に転送する

    SonarQube ログを New Relic に転送するには、次の手順に従います。

    1. 次のパスに`logging.yml`という名前のログファイルを作成します。

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. 次のスクリプトを `logging.yml` ファイルに追加します。

       ```yml
       logs:
         - name: sonar_logs
           file: /opt/sonarqube/logs/sonar.log
           attributes: 
             logtype: sonar_logs
         - name: ce_logs
           file: /opt/sonarqube/logs/ce.log
           attributes:
             logtype: sonar_ce_logs
         - name: es_logs
           file: /opt/sonarqube/logs/es.log
           attributes: 
             logtype: sonar_es_logs
         - name: web_logs
           file: /opt/sonarqube/logs/web.log
           attributes:
             logtype: sonar_web_logs
       ```
  </Step>

  <Step>
    ## New Relic インフラストラクチャ エージェントを再起動します

    インフラストラクチャを再起動します:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    数分以内に、アプリケーションはメトリクスを[one.newrelic.com](https://one.newrelic.com)に送信します。
  </Step>

  <Step>
    ## データを検索する

    `SonarQube` という名前の事前に構築されたダッシュボード テンプレートを選択して、SonarQube アプリケーションのメトリクスを監視できます。事前に構築されたダッシュボード テンプレートを使用するには、次の手順に従います。

    1. [one.newrelic.com](https://one.newrelic.com)から、

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       ページに移動します。

    2. <DNT>
         **Dashboards**
       </DNT>

       をクリックします。

    3. 検索バーに`sonarqube`と入力します。

    4. SonarQube ダッシュボードが表示されます。それをクリックしてインストールします。

       SonarQube ダッシュボードはカスタム ダッシュボードとみなされ、<DNT>**Dashboards**</DNT> UIに表示されます。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメントを](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)参照してください。

       Postfix データに対する NRQL クエリの例をいくつか示します。

       <CollapserGroup>
         <Collapser
           id="webstatus"
           title="SonarQube の Web ステータスを確認する"
         >
           ```sql
           SELECT latest(sonarqube_web_uptime_minutes) 
           AS 'SonarQube Web Uptime (minutes)' 
           FROM Metric
           ```
         </Collapser>

         <Collapser
           id="jvm-metrics"
           title="JVMメトリクスを表示する"
         >
           ```sql
           SELECT latest(PoolIdleConnections) FROM JVMSampleSonarQubeWebMetrics
           ```
         </Collapser>
       </CollapserGroup>
  </Step>
</Steps>

## 次は何ですか？

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。
* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。
* ダッシュボードを[管理して、ダッシュ](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)ボードの表示モードを調整したり、ダッシュボードにコンテンツを追加したりします。
