---
title: NVMLインテグレーション
tags:
  - NVML integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with nvml metrics.
freshnessValidatedDate: never
translationType: machine
---

NVML をNew Relicと統合すると、アプリケーションとシステムの GPU 使用率とパフォーマンス メトリックに関する貴重な情報が得られ、リソースの最適化、パフォーマンスのボトルネックの特定、環境全体の安定性と効率の維持が容易になります。

<img
  title="NVML dashboard"
  alt="nvml dashboard"
  src="/images/infrastructure_screenshot-full_nvml-dashboard.webp"
/>

<figcaption>
  New Relicで NVML インテグレーションを設定すると、すぐにダッシュボードでデータを確認できます。
</figcaption>

## NVMLインテグレーションを設定する

NVML インテグレーションをセットアップするには、次の手順を実行します。

<Steps>
  <Step>
    ## インフラストラクチャエージェントをインストールします

    NVML インテグレーションを使用するには、まず同じホストに[インフラストラクチャエージェントをインストールする](/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent-new-relic/)必要があります。 インフラストラクチャエージェントはホスト自体を監視し、nvml インテグレーションは GPU クラスタに固有のデータを使用して監視を拡張します。
  </Step>

  <Step>
    ## NRI-Flex を使用してメトリクスを取得する

    Flex はNew Relic Infrastructureにバンドルされています。 nvml 用に NRI-Flex を設定し、flex 設定ファイルを作成する必要があります。 次の手順を実行します：

    1. 以下のパスに `nvml-config.yml` という名前のファイルを作成します。

       * Linuxの場合、 `/etc/newrelic-infra/integrations.d`
       * 窓用、 `C:\Program Files\New Relic\newrelic-infra\integrations.d\`

    2. 以下のスニペットを使用して、という名前の構成ファイルを更新します。 `nvml-config.yml`

       ```yml
       integrations:
         - name: nri-flex
           # interval: 30s
           config:
             name: NVMLexample
             apis:
               - name: nvml
                 file: <PATH_TO_METRIC_CSV_FILE>
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
    ## New Relicでnvmlメトリクスを表示する [#view-data]

    上記の設定を完了すると、事前に構築されたダッシュボード テンプレートを使用してメトリクスを表示できます。 このダッシュボードにアクセスするには:

    1. **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**に移動します。
    2. **Dashboards** \[ダッシュボード]タブをクリックします。
    3. 検索ボックスに `nvml`と入力します。
    4. それを選択し、 **Install** \[インストール]をクリックします。

       nvml クイックスタート を 計 算 し、 メトリクス と アラート を確認するには、 `Install now`ボタンをクリックして[NVML クイックスタート ページ](https://newrelic.com/instant-observability/nvml)に従うこともできます。

       GPU 内のデバイス数を確認するクエリの例を次に示します。

       ```sql
       SELECT latest(temperature_gpu) FROM nvmlSample TIMESERIES 
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
