---
title: Aerospike プラットフォームの統合
tags:
  - New Relic integrations
  - Aerospike
metaDescription: Use New Relic's infrastructure monitoring to get a dashboard with metrics from your Aerospike platform.
freshnessValidatedDate: never
translationType: machine
---

Aerospike 統合は、Aerospike データ プラットフォームのパフォーマンスを監視し、アプリケーションの問題を診断してコードを最適化するのに役立ちます。Aerospike との統合により、最も重要な Aerospike アプリの指標を備えた事前構築済みのダッシュボードが提供されます。

<img
  title="aerospike dashboard"
  alt="A screenshot depicting an Aerospike pre-built dashboard"
  src="/images/infrastructure_screenshot-full_aerospike-dashboard.webp"
/>

<figcaption>
  New Relic との統合を設定したら、すぐにこのようなダッシュボードでデータを確認できます。
</figcaption>

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします [#infra]

    Aerospike インテグレーションを使用するには、まず同じホストに[インフラストラクチャエージェントをインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。 インフラストラクチャエージェントはホスト自体を監視し、次のステップでインストールするインテグレーションは Aerospike 固有のデータを使用して監視を拡張します。
  </Step>

  <Step>
    ## Aerospikeインテグレーションをインストールする

    1. nri-aerospike をインストールするには、次のコマンドを使用します。

       ```bash
       sudo apt-get install nri-aerospike
       ```

    2. `nri-aerospike`が正常にインストールされたことを確認するには:

       * <DNT>**Exporter**</DNT>が`/var/db/newrelic-infra/newrelic-integrations/bin`ディレクトリにインストールされていることを確認しています。
       * `/etc/newrelic-infra/integrations.d`ディレクトリ内の設定ファイルを確認しています
  </Step>

  <Step>
    ## 統合を構成します。

    1. サンプル設定ファイルの名前を`aerospike-config.yml.sample`から`aerospike-config.yml`に変更します:

       ```shell
       sudo cp aerospike-config.yml.sample aerospike-config.yml
       ```

    2. 必要に応じて設定ファイルを編集します。 以下は設定ファイルの基本的な例です。

       ```yml
       integrations:
         - name: nri-aerospike
           config:
             # API URL of the aerospike service
             aerospike_db_host: localhost
             aerospike_db_port: 3000

             # Port to expose scrape endpoint on, If this is not provided a random port will be used to launch the exporter
             exporter_port: 9145

             # Cluster name is used on the aerospike.prometheus.json.template - 
             # all the metrics captured by nri-prometheus will be categorized under this cluster name
             aerospike_cluster_name: YOUR_DESIRED_CLUSTER_NAME
             scrape_timeout: 5s
      
             label_type: development
             label_source: aerospike

             exporter_files_path: /tmp
       ```

       `nri-aerospike`を正常に構成すると、 `http://localhost:9145/metrics`のモニター Aerospike メトリックのリストが表示されます。
  </Step>

  <Step>
    ## データを検索する [#find-data]

    Aerospike ダッシュボードを取得するには:

    1. [one.newrelic.com](https://one.newrelic.com)から、 [<DNT>**Integrations & Agents**</DNT>ページ](https://one.newrelic.com/marketplace)に移動します。
    2. <DNT>**Dashboards**</DNT>をクリックします。
    3. 検索バーに`Aerospike`と入力します。
    4. Aerospike ダッシュボードが表示されます。それをクリックしてインストールします。

       Aerospike ダッシュボードはカスタム ダッシュボードとみなされ、<DNT>**Dashboards**</DNT> UIに表示されます。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメントを](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)参照してください。

       この統合により、 [インフラストラクチャ エージェント](/docs/infrastructure/manage-your-data/data-instrumentation/default-infrastructure-monitoring-data/#infrastructure-events)の形式でデータがレポートされます。

       名前空間で空きメモリ容量の割合をチェックする NRQL クエリの例を次に示します。

       ```sql
       FROM Metric 
       SELECT latest (aerospike_namespace_memory_free_pct)
       ```
  </Step>
</Steps>

## 次は何ですか？ [#whats-next]

データのクエリとカスタム ダッシュボードの作成について詳しくは、次のドキュメントをご覧ください。

* [クエリビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)
* [カスタム ダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)
* [ダッシュボードの管理](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)
