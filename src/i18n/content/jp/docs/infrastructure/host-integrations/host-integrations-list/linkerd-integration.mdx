---
title: Linkerd インテグレーション
tags:
  - New Relic integrations
  - Linkerd integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Linkerd.
freshnessValidatedDate: '2024-05-29T00:00:00.000Z'
translationType: machine
---

当社の Linkerd インテグレーションは、 Kubernetes用のサービス メッシュです。 コードを変更することなく、ランタイムデバッグ、耐障害性、信頼性、セキュリティを実現し、サービスの実行をより簡単かつ安全にします。

<img
  title="Linkerd dashboard"
  alt="Linkerd dashboard"
  src="/images/infrastructure_screenshot_full-linkerd-dashboard.webp"
/>

<figcaption>
  Linkerd インテグレーションをセットアップすると、Linkerd メトリックのダッシュボードが表示されます。
</figcaption>

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします [#infra-install]

    Linkerd インテグレーションを使用するには、同じホストに[インフラストラクチャエージェントもインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。 インフラストラクチャエージェントはホスト自体を監視しますが、次の手順でインストールするインテグレーションは Linkerd 固有のデータを使用して監視を拡張します。
  </Step>

  <Step>
    ## Linkerd メトリックを公開する [#expose-linkerd-metrics]

    1. 次のスクリプトを使用して、すべての Linkerd ポッドを確認します。

       ```shell
           kubectl get pods -n <LINKERD_NAMESPACE>
       ```

       * `LINKERD_NAMESPACE`を、Linkerd ポッドが実行されている実際のネームスペースに置き換えます。

    2. 次に、各 Linkerd ポッドのすべてのメトリックをポート 4191 に送信するようにします。

       ```shell
           kubectl port-forward --address 0.0.0.0 -n <LINKERD_NAMESPACE> <LINKERD_POD_NAME> 4191:4191 &
       ```

       * `LINKERD_NAMESPACE`を、Linkerd ポッドが実行されている実際のネームスペースに置き換え、 `LINKERD_POD_NAME`を各 Linkerd ポッドの実際の名前に置き換えます。
  </Step>

  <Step>
    ## nri-prometheus で Linkerd インテグレーションを有効にする [#enable-linkerd]

    Linkerd インテグレーションをセットアップするには、次の手順に従います。

    1. Integration ディレクトリに`nri-prometheus-config.yml`という名前のファイルを作成します。

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-prometheus-config.yml
       ```

    2. エージェントが Linkerd データをキャプチャできるようにするには、次のスニペットを`nri-prometheus-config.yml`ファイルに追加します。

       ```yml
       integrations:
         - name: nri-prometheus
           config:
             # When standalone is set to false nri-prometheus requires an infrastructure agent to work and send data. Defaults to true 
             standalone: false

             # When running with infrastructure agent emitters will have to include infra-sdk 
             emitters: infra-sdk

             # The name of your cluster. It's important to match other New Relic products to relate the data.
             cluster_name: "YOUR_DESIRED_CLUSTER_NAME"

             targets:
               - description: Linkerd metrics list
                 urls: ["http://<ip-address>:4191/metrics","http://<ip-address>:9090/metrics"]

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
    ## New Relic インフラストラクチャ エージェントを再起動します

    インフラストラクチャ エージェントを再起動します。

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    数分以内に、アプリケーションはメトリクスを[one.newrelic.com](https://one.newrelic.com)に送信します。
  </Step>

  <Step>
    ## データを検索する

    Linkerd アプリケーションのメトリックを監視するには、 `Linkerd`という名前の事前に構築されたダッシュボード テンプレートを選択できます。 事前に構築されたダッシュボード テンプレートを使用するには、次の手順に従ってください。

    1. [one.newrelic.com](https://one.newrelic.com)から、

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       ページに移動します。

    2. <DNT>
         **Dashboards**
       </DNT>

       をクリックします。

    3. 検索バーに`Linkerd`と入力します。

    4. Linkerd ダッシュボード オプションが表示されたら、クリックしてインストールします。

       Linkerd ダッシュボードはカスタムダッシュボードとみなされ、<DNT>**Dashboards**</DNT> UIで確認できます。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメント](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)をご覧ください。

       Linkerd ダウンストリームの合計接続数を確認するための NRQL クエリを次に示します。

       ```sql
       SELECT latest(process_virtual_memory_bytes)/(1024*1024) as 'Memory in MB' FROM Metric
       ```
  </Step>
</Steps>

## 次は何ですか？

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。
* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。
* ダッシュボードを[管理して、ダッシュ](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)ボードの表示モードを調整したり、ダッシュボードにコンテンツを追加したりします。
