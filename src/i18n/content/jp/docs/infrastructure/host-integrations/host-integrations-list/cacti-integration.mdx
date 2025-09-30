---
title: サボテンインテグレーション
tags:
  - Cacti integration
  - New Relic integrations
metaDescription: Use the New Relic infrastructure agent to monitor your Cacti data.
freshnessValidatedDate: never
translationType: machine
---

Cacti を New Relic と統合すると、New Relic の統合プラットフォーム内で RRD データをユーザーフレンドリーなグラフィカルな形式で表示できるようになります。

<img
  title="Cacti dashboard"
  alt="Cacti dashboard"
  src="/images/infrastructure_screenshot-full_cacti-dashboard.webp"
/>

<figcaption>
  Cacti インテグレーションをNew Relicでセットアップすると、ダッシュボードでデータを確認できます。
</figcaption>

## Cactiインテグレーションをセットアップする [#setup]

Cacti インテグレーションをセットアップするには、次の手順を実行します。

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします [#install]

    Cacti インテグレーションを使用するには、まず同じホストに[インフラストラクチャエージェントをインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。
  </Step>

  <Step>
    ## Expose Cacti メトリクス [#Expose]

    RRD データを CSV または JSON 形式で公開するには、以下の手順を実行します。

    1. RRDTool を使用して、Cacti の RRD ファイルから`XML format`にデータをエクスポートします。
    2. XML データを`CSV or JSON`形式に変換します。
  </Step>

  <Step>
    ## NRI-Flexを使用してCSV形式のメトリクスをキャプチャする [#capture-csv]

    Flex はNew Relic Infrastructureにバンドルされています。 Cacti 用に NRI-Flex を設定し、flex 設定ファイルを作成する必要があります。 次の手順を実行します：

    1. `/newrelic-infra/integrations.d`パスに`cacti-config.yml`という名前のファイルを作成します。

    2. 次の設定例で`cacti-config.yml`を更新します。

       ```yml
       ---
       integrations:
         - name: nri-flex
           config:
             name: machineLoad
             apis:
              - name: machineLoad
                file: /home/ubuntu/xmlToCsv/local_linux_machine_load_1min_2.csv
              - name: memSwap
                file: /home/ubuntu/xmlToCsv/local_linux_machine_mem_swap_5.csv
              - name: proc
                file: /home/ubuntu/xmlToCsv/local_linux_machine_proc_1.csv
              - name: machineUser
                file: /home/ubuntu/xmlToCsv/local_linux_machine_users_3.csv
              - name: memBuffers
                file: /home/ubuntu/xmlToCsv/local_linux_machine_mem_buffers_4.csv
              - name: ApacheCpuLoad
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_cpuload_6.csv
              - name: ApacheTotalHits
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_total_hits_7.csv
              - name: ApacheTotalKbytes
                file: /home/ubuntu/xmlToCsv/local_linux_machine_apache_total_kbytes_8.csv
              - name: UserLogins
                file: /home/ubuntu/xmlToCsv/local_linux_machine_active_10.csv
       ```
  </Step>

  <Step>
    ## Cacti ログを転送する [#forward]

    Cacti ログを New Relic に転送するには、次の手順に従います。

    1. 次のパスにある`logging.yml`という名前のログファイルを編集します。

       ```shell
       cd /etc/newrelic-infra/logging.d
       ```

    2. 次のスニペットを`logging.yml`ファイルに追加します。 必要に応じて、 `file`を Cacti ログファイル パスに置き換えます。

       ```yml
       logs:
         - name: cacti.log
           file: /var/www/html/cacti/log/LOG_FILE_NAME
           attributes:
             logtype: cacti_log
       ```
  </Step>

  <Step>
    ## New Relic インフラストラクチャ エージェントを再起動します [#restart]

    インフラストラクチャを再起動します:

    ```shell
    sudo systemctl restart newrelic-infra.service
    ```

    アプリケーションは数分以内にメトリックを[one.newrelic.com](https://one.newrelic.com)に送信します。
  </Step>

  <Step>
    ## データを検索する [#find-data]

    事前に構築されたダッシュボード テンプレートを使用して、Cacti アプリケーション メトリックを監視できます。 事前に構築されたダッシュボード テンプレートを使用するには、次の手順に従ってください。

    1. [one.newrelic.com](https://one.newrelic.com)から、

       <DNT>
         **+ Integrations & Agents**
       </DNT>

       ページに移動します

    2. クリック

       <DNT>
         **Dashboards**
       </DNT>

    3. 検索バーに次のように入力します。 `Cacti`

    4. Cacti ダッシュボードが表示されます。 クリックしてインストールしてください

       Cacti ダッシュボードはカスタムダッシュボードとみなされ、<DNT>**Dashboards**</DNT> UIで見つけることができます。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメント](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)をご覧ください。

       以下は、ユーザー ログインの数を表示するための NRQL クエリの例です。

       ```sql
       SELECT latest(value) FROM UserLoginsSample FACET name
       ```
  </Step>
</Steps>

## 次は何ですか？ [#whats-next]

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。
* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。
* [ダッシュボードを管理して](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)、ダッシュボードの表示モードを調整したり、コンテンツを追加したりします。
