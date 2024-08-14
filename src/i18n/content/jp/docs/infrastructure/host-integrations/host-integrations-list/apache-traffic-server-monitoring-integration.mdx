---
title: Apache Traffic Serverの統合
tags:
  - Apache Traffic Server integration
  - New Relic integrations
metaDescription: Install our Apache Traffic Server dashboards and see your Apache Traffic Server  data in New Relic.
freshnessValidatedDate: '2023-06-28T00:00:00.000Z'
translationType: machine
---

当社の Apache Traffic Server 統合は、Apache Traffic Server のパフォーマンスを監視します。HTTP/HTTPS トラフィックは、いずれかまたは両方向に転送またはリバース プロキシされ、パフォーマンスとスケーラビリティの両方を提供します。

<img
  title="Apache Traffic Server dashboard"
  alt="Apache Traffic Server dashboard"
  src="/images/infrastructure_screenshot-full_apache-traffic-server-dashboard.webp"
/>

<figcaption>
  Apache Traffic Server を設定した後、Apache Traffic Server メトリクスのダッシュボードをインストールできます。
</figcaption>

## インフラストラクチャエージェントをインストールします [#infra]

データを New Relic に取り込むには、インフラストラクチャ エージェントをインストールします。当社のインフラストラクチャ エージェントはデータを収集して取り込むので、アプリのパフォーマンスを追跡できます。NRI-Flex 統合をサポートするには、バージョンが 1.10.7 以降である必要があります。

インフラストラクチャ エージェントは、次の 2 つの方法でインストールできます。

* [ガイド付きインストール](https://one.newrelic.com/nr1-core?state=4f81feab-35f7-e97e-9903-52510f8542bd)は、システムを検査し、システムに最適なアプリケーション監視エージェントとともにインフラストラクチャ エージェントをインストールする CLI ツールです。ガイド付きインストールの仕組みの詳細については、[ガイド付きインストールの概要](/docs/infrastructure/host-integrations/installation/new-relic-guided-install-overview)をご覧ください。
* インフラストラクチャ エージェントを手動でインストールする場合は、 [Linux](/docs/infrastructure/install-infrastructure-agent/linux-installation/install-infrastructure-monitoring-agent-linux)、 [Windows](/docs/infrastructure/install-infrastructure-agent/windows-installation/install-infrastructure-monitoring-agent-windows/)、または [macOS](/docs/infrastructure/install-infrastructure-agent/macos-installation/install-infrastructure-monitoring-agent-macos/)の手動インストールのチュートリアルに従うことができます。

## Apache New Relic エージェントをインストールする

Apache 統合では、TCP 接続、DNS ルックアップ、HTTPS、SSL、サーバーとワーカーのステータスなどのネットワーク メトリックを収集します。統合をインストールするには、 [ガイド付きインストールの](https://one.newrelic.com/launcher/nr1-core.explorer?pane=eyJuZXJkbGV0SWQiOiJucjEtY29yZS5saXN0aW5nIn0=&cards%5B0%5D=eyJuZXJkbGV0SWQiOiJucjEtaW5zdGFsbC1uZXdyZWxpYy5ucjEtaW5zdGFsbC1uZXdyZWxpYyIsInBhdGgiOiJvaGkiLCJyZWNpcGVOYW1lIjoiYXBhY2hlLW9wZW4tc291cmNlLWludGVncmF0aW9uIiwiYWN0aXZlQ29tcG9uZW50IjoiVlRTT0NvbW1hbmQiLCJhY3RpdmVFbnZpcm9ubWVudCI6ImFwYWNoZS1vcGVuLXNvdXJjZS1pbnRlZ3JhdGlvbiJ9)手順に従ってください。別の方法で統合をインストールする必要がある場合は、 [「Apache 監視統合」を](/docs/infrastructure/host-integrations/host-integrations-list/apache-monitoring-integration/)参照してください。

## メトリクスを公開する

インストールが成功したら、Apache Traffic Server が正常に起動する必要があります。そうすれば、ポート `8080`の `your_ip` で実行を開始する必要があります。メトリクス公開統計を構成する必要があります。

1. `plugin.config` ファイルに移動します。

   ```shell
   sudo nano /etc/trafficserver/plugin.config
   ```

2. `plugin.config` ファイルに以下の行を追加します。

   ```
   stats_over_http.so
   ```

3. メトリクスが以下の URL で公開されていることを確認してください。

   Apache Traffic Server のメトリクス: `http://YOUR_IP:8080/_stats`

## Apache Traffic Server 用に NRI-Flex を構成する [#integrate]

Flex は New Relic インフラストラクチャ エージェントにバンドルされています。フレックス構成ファイルを作成するには、次の手順に従います。

1. `integrations.d` ディレクトリに移動します。

   ```shell
   cd /etc/newrelic-infra/integrations.d
   ```

2. `nri-flex-apache-traffic-server-config.yml` 、 `nri-flex-ats-cache-config.yml` 、および `nri-flex-ats-http-config.yml`という名前の 3 つのファイルを作成します。

`event_type` の値は、NRDB にメトリクスを保存するために使用されます。ファイルは次のようになります。

`nri-flex-apache-traffic-server-config.yml`：

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ApcheTrafficServerMetrics
      apis:
        - event_type: ATSSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          remove_keys:
            - http
            - cache
```

`nri-flex-ats-cache-config.yml`：

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ATSCacheMetrics
      apis:
        - event_type: ATSCacheSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          keep_keys:
          	- cache
```

`nri-flex-ats-http-config.yml`：

```yml
integrations:
  - name: nri-flex
    interval: 30s
    config:
      name: ApcheTrafficServerMetrics
      apis:
        - event_type: ATSHttpSampleMetrics
          url: http://YOUR_IP:8080/_stats 
          keep_keys:
          	- http
```

## Apache Traffic Server ログを New Relic に転送する

[ログ転送を](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/) 使用して、Apache Traffic Server ログを New Relic に転送できます。

Linux マシンでは、 `logging.yml` という名前のログ ファイルが次のパスに存在する必要があります。

```shell
cd /etc/newrelic-infra/logging.d/
```

ログ ファイルを作成した後、次のスクリプトを `logging.yml` ファイルに追加します。

```yml
logs:
  - name: manager
    file: /var/log/trafficserver/manager.log
    attributes:
      logtype: ats_manager_logs
  - name: diags
    file: /var/log/trafficserver/diags.log
    attributes:
      logtype: ats_diags_logs 
```

## New Relic インフラストラクチャ エージェントを再起動します

データの読み取りを開始する前に、 [インフラストラクチャ エージェントのドキュメント](/docs/infrastructure/install-infrastructure-agent/manage-your-agent/start-stop-restart-infrastructure-agent/) の手順に従ってインフラストラクチャ エージェントを再起動します。

```shell
sudo systemctl restart newrelic-infra.service
```

数分以内に、Apache Traffic Server がメトリクスを [one.newrelic.com](https://one.newrelic.com)に送信します。

## データを検索する

`Apache Traffic Server` という名前の事前に構築されたダッシュボード テンプレートを選択して、Apache Traffic Server サーバーのメトリクスを監視できます。事前に構築されたダッシュボード テンプレートを使用するには、次の手順に従います。

1. [one.newrelic.com](https://one.newrelic.com)から、

   <DNT>
     **+ Integrations & Agents**
   </DNT>

   ページに移動します。

2. <DNT>
     **Dashboards**
   </DNT>

   をクリックします。

3. 検索バーに`Apache Traffic Server`と入力します。

4. Apache Traffic Server ダッシュボードが表示されます。それをクリックしてインストールします。

Apache Traffic Server ダッシュボードはカスタム ダッシュボードとみなされ、<DNT>**Dashboards**</DNT> UIで確認できます。 ダッシュボードの使用と編集に関するドキュメントについては、[ダッシュボードのドキュメント](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)をご覧ください。

Apache Traffic Server からのキャッシュ ミスの合計をチェックする NRQL クエリを次に示します。

```sql
SELECT latest(global.proxy.process.cache_total_misses) AS 'cache misses' FROM ATSCacheSampleMetrics
```

## 次は何ですか？

NRQL クエリの作成とダッシュボードの生成の詳細については、次のドキュメントをご覧ください。

* 基本的なクエリと高度なクエリを作成する[ためのクエリ ビルダーの概要](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder)。
* [ダッシュボードをカスタマイズしてさまざまなアクションを実行するためのダッシュボードの概要](/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards)。
* ダッシュボードを[管理して、ダッシュ](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard)ボードの表示モードを調整したり、ダッシュボードにコンテンツを追加したりします。
