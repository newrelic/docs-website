---
title: NVIDIA DCGM の統合
tags:
  - NVIDIA integration
  - DCGM integration
  - New Relic integrations
metaDescription: Use New Relic infrastructure agent to get a dashboard with DCGM metrics.
freshnessValidatedDate: '2023-10-30T00:00:00.000Z'
translationType: machine
---

NVIDIA DCGM 統合は、GPU のステータスの監視を支援します。この統合は、インフラストラクチャ エージェントと、NVIDIA の SMI ユーティリティとシームレスに統合される Prometheus リモート書き込み統合を活用します。GPU 使用率、XID エラー数、クロックとパフォーマンスの状態、温度、電力使用量などの重要な DCGM メトリクスを含む事前構築されたダッシュボードが提供されます。

<img
  title="NVIDIA DCGM dashboard"
  alt="NVIDIA DCGM dashboard"
  src="/images/infrastructure_screenshot-full_nvidia-dcgm-dashboard.webp"
/>

<figcaption>
  NVIDIA DCGM 統合をセットアップすると、DCGM メトリクスのダッシュボードが提供されます。
</figcaption>

## インフラストラクチャエージェントをインストールします [#infra]

データを New Relic に取り込むには、インフラストラクチャ エージェントをインストールします。当社のインフラストラクチャ エージェントはデータを収集して取り込むため、DCGM のパフォーマンスを追跡できます。

インフラストラクチャ エージェントは、次の 2 つの方法でインストールできます。

* [ガイド付きインストール](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd)は、システムを検査し、システムに最適なアプリケーション監視エージェントとともにインフラストラクチャ エージェントをインストールする CLI ツールです。ガイド付きインストールの仕組みの詳細については、[ガイド付きインストールの概要](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview)をご覧ください。
* インフラストラクチャ エージェントを手動でインストールしたい場合は、 [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux) 、 [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/)の手動インストールのチュートリアルに従ってください。

## DCGM エクスポーターを構成する [#configure-exporter]

1. ターミナルで、 `dcgm-exporter`リポジトリのクローンを作成します。

   ```shell
   git clone https://github.com/NVIDIA/dcgm-exporter
   ```

2. クローン作成されたリポジトリで、 `dcgm-exporter`ディレクトリに移動します。

   ```shell
   cd dcgm-exporter
   ```

3. 必要なバイナリをインストールします。

   ```shell
   make binary
   ```

   ```shell
   sudo make install
   ```

4. `dcgm-exporter`を開始します。

   ```shell
   dcgm-exporter &
   ```

5. DCGM メトリクスの詳細を確認します。

   ```shell
   curl localhost:9400/metrics
   ```

## Prometheus での NVIDIA-DCGM 構成 [#configure-prometheus]

Prometheus は、NVIDIA-DCGM エクスポーターを使用して NVIDIA GPU を監視するために使用できるオープンソースの監視およびアラート ツールです。DCGM メトリクスを監視するように Prometheus を設定するには、次の手順に従います。

1. 最新リリースを見つけるには、 [Prometheus ダウンロード ページ](https://prometheus.io/download/)にアクセスしてください。

2. オペレーティング システムとアーキテクチャに適切なバージョンを選択します。Linux の場合は、linux-amd64 バージョンを選択することになるでしょう。tarball ( `.tar.gz`ファイル) のダウンロード リンクをコピーします。

3. Prometheus をダウンロードしたら、ダウンロードした tar ファイルを解凍します。

   ```shell
   tar -xvzf <filename.tar.gz>
   ```

4. ダウンロードした Prometheus フォルダーに移動します。

   ```shell
   cd /DOWNLOADED-FOLDER/
   ```

5. `prometheus.yml`ファイルを開き、次の行を追加します。

   ```yml
   ---
   scrape_configs:
     - job_name: NVIDI
       static_configs:
         - targets:['localhost:9400']
   ```

6. プロメテウスを起動します。

   ```shell
   ./prometheus --config.file=prometheus.yml
   ```

## NVIDIA-DCGM 用の Prometheus リモート書き込みエージェントをインストールする [#install-remote-write]

Prometheus 構成をセットアップした後、NVIDIA DCGM メトリクスを Prometheus に送信する必要があります。その後、Prometheus メトリクスを New Relic と統合するために、Prometheus リモート書き込みエージェントを利用できます。[UI の Prometheus リモート書き込みセットアップ ランチャーに](https://one.newrelic.com/catalog-pack-details?state=04de330d-ad8b-b61c-68e2-ad852c2ca1d4)従ってください。

## New Relic インフラストラクチャ エージェントを再起動します [#restart-infra-agent]

データの読み取りを開始する前に、 [インフラストラクチャ エージェントのドキュメント](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) の手順に従ってインフラストラクチャ エージェントを再起動します。

```shell
sudo systemctl restart newrelic-infra.service
```

## New Relic で DCGM メトリクスを表示する [#view-data]

上記のセットアップが完了すると、nvidia-dcgm という名前の事前に構築されたダッシュボード テンプレートを使用してメトリクスを表示できます。このダッシュボードにアクセスするには:

1. <DNT>
     **[one.newrelic.com](https://one.newrelic.com/) > + Integrations & Agents**
   </DNT>

   に移動します。

2. <DNT>
     **Dashboards**
   </DNT>

   タブをクリックします。

3. 検索ボックスに「nvidia-dcgm」と入力します。

4. 選択して

   <DNT>
     **Install**
   </DNT>

   をクリックします。

`nvidia-dcgm`クイックスタートを試してメトリックとアラートを確認するには、**Install now** \[今すぐインストール]ボタンをクリックして、 Nvidia-DCGM[ クイックスタート ページ](https://newrelic.com/instant-observability/nvidia-dcgm) に従うこともできます。

以下に、クエリの例を示します。

<DNT>**Example:**</DNT> デバイスの GPU 温度のカウントを表示する

```sql
SELECT latest(DCGM_FI_DEV_GPU_TEMP) FROM Metric WHERE metricName LIKE 'DCGM_FI_DEV_GPU_TEMP' TIMESERIES
```

## 次は何ですか？ [#whats-next]

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。

* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。

* [ダッシュボードを管理して](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)、

  <InlinePopover type="dashboards"/>

  表示モードを調整したり、ダッシュボードにコンテンツを追加したりできます。
