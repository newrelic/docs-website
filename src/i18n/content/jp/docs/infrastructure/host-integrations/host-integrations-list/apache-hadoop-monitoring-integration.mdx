---
title: Apache Hadoop の統合
tags:
  - Apache Hadoop integration
  - New Relic integrations
metaDescription: Install our Apache Hadoop dashboards and see your Apache Hadoop  data in New Relic.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

当社の Apache Hadoop インテグレーションは、Hadoop クラスタとアプリケーションのパフォーマンスを監視します。 インテグレーションは、HDFS (Hadoop 分散ファイル システム)、ブロック、システム負荷、データ ノード、NodeManager、ジョブに関するデータを提供することで、Apache Hadoop のパフォーマンスと健全性を詳細に把握できるようにします。

<img
  title="Apache Hadoop dashboard"
  alt="Apache Hadoop dashboard"
  src="/images/infrastructure_screenshot-full_apache-hadoop-dashboard.webp"
/>

<figcaption>
  Apache Hadoop をセットアップすると、Apache Hadoop メトリクスのダッシュボードが提供されます。
</figcaption>

インテグレーションをインストールするには、次の手順を実行します。

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします [#infra]

    Apache Hadoop インテグレーションを使用するには、まず同じホストに[インフラストラクチャエージェントをインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。 インフラストラクチャエージェントはホスト自体を監視しますが、次の手順でインストールするインテグレーションは Hadoop 固有のデータを使用して監視を拡張します。
  </Step>

  <Step>
    ## Apache Hadoop 用に NRI-Flex を構成する [#integrate]

    当社の flex インテグレーションはNew Relic Infrastructureエージェントにバンドルされており、Apache Hadoop データをNew Relicに送信するために使用されます。 flex 設定ファイルを作成するには、次の手順に従います。

    1. `/etc/newrelic-infra/integrations.d`パスに`nri-flex-hadoop-config.yml`という名前のファイルを作成します。

    2. [構成テンプレート](https://github.com/newrelic/nri-flex/blob/master/examples/json-read-cmd-example.yml) を使用して、作成された `nri-flex-hadoop-config.yml`という名前のファイル内のフィールド `EVENT_TYPE` と `YOUR_DOMAIN` を更新します。 `event_type` の値は、NRDB にメトリクスを保存するために使用されます。

       例：

       * `EVENT_TYPE1` に更新できます `HadoopResourceManagerSample`
       * `EVENT_TYPE2` に更新できます `HadoopNameNodeSample`

       `nri-flex-hadoop-config.yml`ファイルは次のようになります。

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: hadoopMetrics
             apis:
               - event_type: EVENT_TYPE1
                 commands: 
                   # run any command, you could cat .json file, or run some commands that produce a json output
                   # the example just calls an API that returns json
                   - run: curl -s https://YOUR_DOMAIN:9870/jmx #json output is retrieved from this command
               - event_type: EVENT_TYPE2
                 commands: 
                   - run: curl -s https://YOUR_DOMAIN:8088/jmx?qry=Hadoop:*
       ```
  </Step>

  <Step>
    ## Apache Hadoop ログを New Relic に転送する

    [ログ転送を](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) 使用して、Apache Hadoop ログを New Relic に転送できます。

    1. `logging.yml`という名前のログファイルを作成します `/etc/newrelic-infra/logging.d/`

    2. ログ ファイルを作成した後、次のスクリプトを `logging.yml` ファイルに追加します。

       ```yml
       logs:
         - name: hadoop_secondarynamenode_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-secondarynamenode-hadoop-master.log
           attributes:
             logtype: hadoop_secondarynamenode_logs
         - name: hadoop_resourcemanager_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-resourcemanager-hadoop-master.log
           attributes:
             logtype: hadoop_hadoop_resourcemanager_logs
         - name: hadoop_namenode_log
           file: /usr/local/hadoop/logs/hadoop-hadoopuser-namenode-hadoop-master.log
           attributes:
             logtype: hadoop_namenode_logs
       ```
  </Step>

  <Step>
    ## New Relic インフラストラクチャ エージェントを再起動します

    データの使用を開始する前に、 [インフラストラクチャ エージェントを再起動します](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/)。

    次のコマンドはほとんどのシステムで動作するはずです:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```
  </Step>

  <Step>
    ## データを検索する

    `Apache Hadoop` という名前の事前に構築されたダッシュボード テンプレートを選択して、Apache Hadoop サーバーのメトリクスを監視できます。事前に構築されたダッシュボード テンプレートを使用するには、次の手順に従います。

    1. [one.newrelic.com](https://one.newrelic.com)から、

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       ページに移動します。

    2. <DNT>
         **Dashboards**
       </DNT>

       をクリックします。

    3. 検索バーに`apache hadoop`と入力します。

    4. Apache Hadoop ダッシュボードが表示されます。それをクリックしてインストールします。

       Apache Hadoop ダッシュボードはカスタムダッシュボードとみなされ、<DNT>**Dashboards**</DNT> UIで確認できます。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメント](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)をご覧ください。

       以下は、リソース マネージャーからアクティブ ユーザーを確認するための NRQL クエリです。

       ```sql
       SELECT latest(activeUsers) 
       FROM HadoopResourceManagerSample
       ```

       以下は、ネーム ノードからアクティブなクライアントの数を表示する NRQL クエリです。

       ```sql
       SELECT latest(numActiveClients) 
       FROM HadoopNameNodeSample
       ```
  </Step>
</Steps>

## 次は何ですか？

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。
* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。
* ダッシュボードを[管理して、ダッシュ](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)ボードの表示モードを調整したり、ダッシュボードにコンテンツを追加したりします。
