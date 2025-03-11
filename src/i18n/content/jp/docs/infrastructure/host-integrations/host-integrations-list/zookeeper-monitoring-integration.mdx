---
title: Zookeeper モニタリングの統合
tags:
  - Integrations
  - On-host integrations
  - On-host integrations list
metaDescription: An introduction to New Relic's open-source ZooKeeper integration.
freshnessValidatedDate: never
translationType: machine
---

弊社の Apache ZooKeeper インテグレーションは、ZooKeeper クラスタのパフォーマンスを監視し、分散システムの管理と同期を支援します。 当社の Apache ZooKeeper インテグレーションでは、クラスタレベルとノードレベルのメトリックを含む構築済みのダッシュボードが提供されます。

<img
  src="/images/infrastructure_screenshot-full_apache-zookeeper-dashboard.webp"
  title="Apache ZooKeeper dashboard landing page"
  alt="A screenshot of a dashboard with Apache ZooKeeper metrics."
/>

<figcaption>
  New Relic との統合を設定したら、すぐにこのようなダッシュボードでデータを確認できます。
</figcaption>

インテグレーションをインストールするには、次の手順を実行します。

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします [#infra]

    Zookeeper インテグレーションを使用するには、まず同じホストに[インフラストラクチャエージェントをインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。 インフラストラクチャエージェントはホスト自体を監視し、次のステップでインストールするインテグレーションは Zookeeper 固有のデータを使用して監視を拡張します。
  </Step>

  <Step>
    ## NRI-Flex を使用してメトリクスを取得する

    Flex を使用すると、Apache Zookeeper メトリックをキャプチャできます。 これは、前の手順でインストールしたNew Relic Infrastructureにバンドルされています。

    1. `/newrelic-infra/integrations.d`パスに`zookeeper-config.yml`という名前のファイルを作成します。

    2. 次の設定例で`zookeeper-config.yml`を更新します。

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: zookeeperFlex
             apis:
               - name: zookeeper
                 event_type: zkSample
                 commands:
                   - run: echo mntr | nc localhost 2181  ## change to your zookeeper server
                     split_by: "\t"  ## split by tab
                 snake_to_camel: true
                 custom_attributes:
                   myCustomAttr: theValue  ## inject your own additional custom attributes
       ```
  </Step>

  <Step>
    ## New Relic インフラストラクチャ エージェントを再起動します

    データの読み取りを開始する前に、 [infrastructureagent ドキュメント](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/)の指示に従って、infrastructureagent を再起動してください。

    ```bash
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## データを検索する

    `Apache ZooKeeper` という名前の事前に構築されたダッシュボード テンプレートを選択して、Zookeeper アプリケーションのメトリクスを監視できます。事前に構築されたダッシュボード テンプレートを使用するには、次の手順に従います。

    1. [one.newrelic.com](https://one.newrelic.com)から、

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       ページに移動します。

    2. <DNT>
         **Dashboards**
       </DNT>

       をクリックします。

    3. 検索バーに`apache zookeeper`と入力します。

    4. ZooKeeper ダッシュボードが表示されます。それをクリックしてインストールします。

       Apache ZooKeeper ダッシュボードはカスタム ダッシュボードとみなされ、<DNT>**Dashboards**</DNT> UIにあります。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメントを](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)参照してください。

       `nri-flex` 統合を使用すると、指標は指定された `EVENT_TYPE`にエクスポートされます。以下は、 `nri-flex` 統合を使用して ZooKeeper 名前空間内の znode の数を確認する NRQL クエリです。

       ```sql
       FROM <EVENT_TYPE> 
       SELECT latest(zkZnodeCount)
       ```
  </Step>
</Steps>

## 次は何ですか？

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。
* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。
* ダッシュボードを[管理して、ダッシュ](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)ボードの表示モードを調整したり、ダッシュボードにコンテンツを追加したりします。
