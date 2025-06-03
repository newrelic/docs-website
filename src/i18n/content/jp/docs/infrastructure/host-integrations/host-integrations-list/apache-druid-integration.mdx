---
title: Apache Druid インテグレーション
tags:
  - Druid integration
  - apache druid integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with druid metrics.
freshnessValidatedDate: '2024-04-21T00:00:00.000Z'
translationType: machine
---

Apache Druid をNew Relicと統合すると、Druid クラスタのパフォーマンスを監視、分析、最適化する能力が強化されます。 Apache Druid 統合は強力な監視機能とアラート機能を提供するため、Druid ベースの分析プラットフォームの信頼性と効率性を確保できます。

<img
  title="Apache Druid dashboard"
  alt="Apache Druid dashboard"
  src="/images/infrastructure_screenshot-full_apache-druid-dashboard.webp"
/>

<figcaption>
  New Relicとの Apache Druid 統合をセットアップしたら、箱から出してすぐにダッシュボードでデータを確認できます。
</figcaption>

## Apache Druid 統合のセットアップ

Apache Druid 統合をセットアップするには、次の手順を実行します。

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします

    Apache Druid 統合を使用するには、まず同じホストに[インフラストラクチャエージェントをインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。 インフラストラクチャエージェントはホスト自体を監視し、Apache Druid 統合は Druid クラスタに固有のデータを使用して監視を拡張します。
  </Step>

  <Step>
    ## Prometheus Emitter を使用して Druid メトリクスを公開する [#Expose]

    1. `apache-druid-$version/conf/druid/single-server/micro-quickstart/_common/common.runtime.properties`ファイルの拡張機能ロード リストの末尾に`prometheus.emitter`を追加します。

       ```yml
       druid.extensions.loadList=["druid-hdfs-storage", "druid-kafka-indexing-service", "druid-datasketches", "druid-multi-stage-query", "prometheus-emitter"]
       ```

    2. 左側の列にリストされているファイル パスに、右側の列にリストされているコード スニペットを追加します。

       <table>
         <thead>
           <tr>
             <th>
               ファイルパス
             </th>

             <th>
               コードスニペット
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               `PATH/TO/broker/runtime.properties`
             </td>

             <td>
               ```yml
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19091
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/coordinator-overlord/runtime.properties`
             </td>

             <td>
               ```yml
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19092
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/historical/runtime.properties`
             </td>

             <td>
               ```yml
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19093
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/middleManager/runtime.properties`
             </td>

             <td>
               ```yml
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19094
               ```
             </td>
           </tr>

           <tr>
             <td>
               `PATH/TO/router/runtime.properties`
             </td>

             <td>
               ```yml
               # Monitoring
               druid.monitoring.monitors=["org.apache.druid.java.util.metrics.JvmMonitor"]
               druid.emitter=prometheus
               druid.emitter.logging.logLevel=info
               druid.emitter.prometheus.strategy=exporter
               druid.emitter.prometheus.port=19095
               ```
             </td>
           </tr>
         </tbody>
       </table>
  </Step>

  <Step>
    ## Prometheus エミッター拡張機能をインストールする [#prometheus-emitter-extension]

    1. 次のコマンドを実行して、Apache Druid セットアップの`extensions`フォルダ ディレクトリ内に`prometheus-emitter`という名前のフォルダを作成します。

       ```shell
       cd apache-druid-$version/extensions/
       ```

       ```shell
       sudo mkdir prometheus-emitter
       ```

    2. druid ダウンロード ディレクトリに移動し、次のコマンドを実行して、サーバーが起動時に呼び出す jar ファイルを作成します。

       ```shell
       sudo java \
       -cp "lib/*" \
       -Ddruid.extensions.directory="extensions" \
       -Ddruid.extensions.hadoopDependenciesDir="hadoop-dependencies" \
       org.apache.druid.cli.Main tools pull-deps \
       --no-default-hadoop \
       -c "org.apache.druid.extensions.contrib:prometheus-emitter:24.0.0"
       ```
  </Step>

  <Step>
    ## Apache Druid 用に`nri-prometheus`を構成する [#configure]

    1. `nri-prometheus-config.yml`という名前のファイルを作成します。

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. 次のスニペットを`nri-prometheus-config.yml`ファイルに追加して、Apache Druid データのキャプチャを有効にします。

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "Apache-druid"

             targets:
               - description: Secure etcd example
                 urls: ["http://<YOUR_HOST_IP>:19091/metrics","http://<YOUR_HOST_IP>:19092/metrics", "http://<YOUR_HOST_IP>:19093/metrics","http://<YOUR_HOST_IP>:19094/metrics","http://<YOUR_HOST_IP>:19095/metrics"]
             #    tls_config:
             #      ca_file_path: "/etc/etcd/etcd-client-ca.crt"
             #      cert_file_path: "/etc/etcd/etcd-client.crt"
             #      key_file_path: "/etc/etcd/etcd-client.key"

             # Whether the integration should run in verbose mode or not. Defaults to false.
             verbose: false

             # Whether the integration should run in audit mode or not. Defaults to false.
             # Audit mode logs the uncompressed data sent to New Relic. Use this to log all data sent.
             # It does not include verbose mode. This can lead to a high log volume, use with care.
             audit: false

             # The HTTP client timeout when fetching data from endpoints. Defaults to "5s" if it is not set.
             # This timeout in seconds is passed as well as a X-Prometheus-Scrape-Timeout-Seconds header to the exporters
             # scrape_timeout: "5s"

             # Length in time to distribute the scraping from the endpoints. Default to "30s" if it is not set.
             scrape_duration: "5s"

             # Number of worker threads used for scraping targets.
             # For large clusters with many (>400) endpoints, slowly increase until scrape
             # time falls between the desired `scrape_duration`.
             # Increasing this value too much will result in huge memory consumption if too
             # many metrics are being scraped.
             # Default: 4
             # worker_threads: 4

             # Whether the integration should skip TLS verification or not. Defaults to false.
             insecure_skip_verify: false

           timeout: 10s
       ```
  </Step>

  <Step>
    ## Druid ログを New Relic に転送する

    1. 次のパスにある`logging.yml`という名前のログファイルを編集します。

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. 次のスニペットを`logging.yml`ファイルに追加します。

       ```yml
       - name: druid-logs
       file: /home/<Druid-Download Directory>/log/*.log
       attributes:
           logtype: apache-druid
       ```
  </Step>

  <Step>
    ## インフラストラクチャエージェントを再起動します [#restart-infra]

    [インフラストラクチャエージェント](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/)のドキュメントの指示に従って、インフラストラクチャエージェントを再起動します。 これはほとんどの人にとって機能する基本的なコマンドです。

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## New Relic で Druid メトリクスを表示する [#view-data]

    上記の設定を完了すると、事前に構築されたダッシュボード テンプレートを使用してメトリクスを表示できます。 このダッシュボードにアクセスするには:

    1. **[one.newrelic.com](https://one.newrelic.com/) > + Add data**に移動します。
    2. **Dashboards** \[ダッシュボード]タブをクリックします。
    3. 検索ボックスに `Apache druid`と入力します。
    4. それを選択し、 **Install** \[インストール]をクリックします。

       Apache Druid クイックスタートを計測し、メトリクスとアラートを確認するには、 `Install now`ボタンをクリックして[Apache Druid クイックスタート ページを](https://newrelic.com/instant-observability/apache-druid)フォローすることもできます。

       Druid セグメントの平均サイズを確認するクエリの例を次に示します。

       ```sql
       SELECT average(druid_segment_size) AS  'MiB' FROM Metric SINCE 30 MINUTES AGO
       ```
  </Step>
</Steps>

## 次は何ですか？ [#whats-next]

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。

* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。

* [ダッシュボードを管理して](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)、

  <InlinePopover type="dashboards"/>

  表示モードを調整したり、ダッシュボードにコンテンツを追加したりできます。
