---
title: Apache Mesos インテグレーション
tags:
  - New Relic integrations
  - Apache Mesos integration
metaDescription: Use New Relic infrastructure agent to get a dashboard with metrics from your Apache Mesos.
freshnessValidatedDate: '2024-05-20T00:00:00.000Z'
translationType: machine
---

Apache Mesos クラスタをNew Relicとシームレスに統合して、パフォーマンス、健全性、リソース使用率を包括的に監視します。 マスターノードとスレーブノードを追跡し、タスクの実行を監視し、システムメトリックを確認します。

<img
  title="Apache Mesos dashboard"
  alt="Apache Mesos dashboard"
  src="/images/infrastructure_screenshot_full-apache-mesos-dashboard.webp"
/>

<figcaption>
  Apache Mesos インテグレーションをセットアップすると、Apache Mesos メトリックのダッシュボードが提供されます。
</figcaption>

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします [#infra-install]

    Apache Mesos インテグレーションを使用するには、同じホストに[インフラストラクチャエージェントもインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。 インフラストラクチャエージェントはホスト自体を監視しますが、次の手順でインストールするインテグレーションは Apache Mesos 固有のデータを使用して監視を拡張します。
  </Step>

  <Step>
    ## nri-flexでApache Mesosインテグレーションを有効にする

    Apache Mesos インテグレーションをセットアップするには、次の手順に従います。

    1. Integration ディレクトリに`nri-apache-mesos-config.yml`という名前のファイルを作成します。

       ```shell
       touch /etc/newrelic-infra/integrations.d/nri-apache-mesos-config.yml
       ```

    2. エージェントが Apache Mesos データをキャプチャできるようにするには、次のスニペットを`nri-apache-mesos-config.yml`ファイルに追加します。

       ```yml
       integrations:
         - name: nri-flex
           interval: 30s
           config:
             name: apacheMesos
             apis:
               - event_type: apacheMesos
                 url: http://<ip-address>:5050/metrics/snapshot
       ```
  </Step>

  <Step>
    ## Apache Mesos ログを転送する

    Apache Mesos ログを New Relic に転送するには、次の手順に従います。

    1. 次のパスにある`logging.yml`という名前のログファイルを編集します。

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. 次のスニペットを`logging.yml`ファイルに追加します。 必要に応じて、 `file` Apache Mesos ログ ファイル パスに置き換えます。

       ```yml
       logs:
         - name: apache-mesos.log
           file: /var/log/mesos/LOG_FILE_NAME
           attributes:
             logtype: apache_mesos_log
       ```
  </Step>

  <Step>
    ## New Relic インフラストラクチャ エージェントを再起動します

    インフラストラクチャを再起動します:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    数分以内に、アプリケーションはメトリックを[one.newrelic.com](https://one.newrelic.com)に送信し始めます。
  </Step>

  <Step>
    ## データを検索する

    事前に構築されたダッシュボード テンプレートを使用して、Apache Mesos アプリケーション メトリックを監視できます。 事前に構築されたダッシュボード テンプレートを使用するには、次の手順に従ってください。

    1. [one.newrelic.com](https://one.newrelic.com)から、

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       ページに移動します

    2. クリック

       <DNT>
         **Dashboards**
       </DNT>

    3. 検索バーに次のように入力します。 `Apache Mesos`

    4. Apache Mesos ダッシュボードが表示されます。 クリックしてインストールしてください

       Apache Mesos ダッシュボードはカスタムダッシュボードとみなされ、<DNT>**Dashboards**</DNT> UIで確認できます。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメント](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)をご覧ください。

       以下は、Apache Mesos マスターの稼働時間を表示するための NRQL クエリの例です。

       ```sql
       SELECT latest(`master/uptime_secs`) as 'Masters uptime (seconds)' FROM apacheMesos
       ```
  </Step>
</Steps>

## 次は何ですか？

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。
* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。
* ダッシュボードを[管理して、ダッシュ](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)ボードの表示モードを調整したり、ダッシュボードにコンテンツを追加したりします。
