---
title: New RelicをGrafanaのPrometheusデータソースとして設定する
tags:
  - Integrations
  - Grafana integrations
  - Set up and configure
metaDescription: How to configure New Relic as a Prometheus data source for Grafana
freshnessValidatedDate: never
translationType: machine
---

[Grafana](https://grafana.com/docs/grafana/latest/features/datasources/prometheus/)で[Prometheusデータソース](https://grafana.com/login)を設定し、[PromQLスタイルクエリ言語](/docs/integrations/prometheus-integrations/view-query-data/supported-promql-features)を使用して、New Relicデータベース（NRDB）に保存されたデータをクエリできます。

## Prometheusデータソースを追加する [#create-update]

これらのステップに従い、GrafanaのPrometheusデータソースとしてNew Relicを追加します。以下では、Grafanaバージョン6.7以上で作業する際にプロセスを完了する方法を詳細に説明します。

<Callout variant="important">
  設定プロセスを開始する前に、[Prometheusリモート書込みインテグレーションプロセスを完了](/docs/integrations/prometheus-integrations/install-configure/set-your-prometheus-remote-write-integration)する必要があります。
</Callout>

1. New Relicで、[インサイトクエリキーを新規作成します](/docs/apis/intro-apis/new-relic-api-keys/#insights-query-key)。

   <Callout variant="important">
     注: Grafana では、これをカスタム <DNT>**X-Query-Key**</DNT> HTTP ヘッダーに配置する必要があります (以下の手順 7 を参照)。ただし、これはNew Relicクエリキーと同じテンプレートです。
   </Callout>

2. [Grafana](https://grafana.com/login) <DNT>**Home**</DNT>画面から、 <DNT>**Configuration > Data Sources**</DNT>に移動して<DNT>**Add data source**</DNT>をクリックします。

3. <DNT>**Add data source**</DNT>画面の<DNT>**Time series databases**</DNT>オプションから<DNT>**Prometheus**</DNT>を選択します。

4. 新しい Prometheus データ ソースに使用する<DNT>**Name**</DNT>を入力します。

5. これを Prometheus クエリのデフォルトのデータ ソースにするかどうかに応じて、 <DNT>**Default**</DNT>トグルをオンまたはオフの位置に設定します。

   * オフ：デフォルトのデータソースにしない
   * オン：デフォルトのデータソースにする

6. 正しい<DNT>**URL**</DNT>を入力してください:

   * 米国: [prometheus-api.newrelic.com](https://prometheus-api.newrelic.com)
   * EU: [prometheus-api.eu.newrelic.com](https://prometheus-api.eu.newrelic.com)

7. <DNT>**Custom Headers**</DNT>の下で、 <DNT>**Add Header**</DNT>を選択します。 <DNT>**Header**</DNT>の名前を<DNT>**X-Query-Key.**</DNT>に設定します。 <DNT>**Value**</DNT>には、手順 1 で作成したクエリキーを入力します。

8. <DNT>**Save & Test**</DNT>をクリックします。

<Callout variant="tip">
  グラフが接続された線ではなく点の集まりとして表示される場合は、グラフ スタイルを変更して線を表示することができます。 これを行うには、Grafana の<DNT>**[Graph panel](https://grafana.com/docs/grafana/latest/panels/visualizations/graph-panel/)**</DNT>に移動し、 <DNT>**Stacking and null value > connected**</DNT>を選択します。
</Callout>

<CollapserGroup>
  <Collapser
    id=""
    title="サンプル設定の画像"
  >
    <img
      title="Configure New Relic as a Prometheus data source for Grafana"
      alt="Screen capture of the add data source workflow in Grafana"
      src="/images/more-integrations_screenshot-crop_grafana-data-source-config.webp"
    />

    <figcaption>
      [dbarnesbrown.newrelic.com](/users/dbarnesbrownnewreliccom)によるGrafanaデータソースConfig.webp
    </figcaption>
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## バージョン管理の考慮事項

New Relicでは、バージョン6.7.x以上を使用し、PrometheusデータソースとしてNew Relicを設定することを強く推奨しています。旧バージョンを実行して設定を完了することを選択する場合は、次のいずれかを実行してデータソースを正常に設定する必要があります。

* 基本的な認証を使用するよう新しいデータソースを設定してしてから、基本的な認証ワークフローのパスワードとしてクエリキーを入力します。
* クエリキーを含めるよう、新規データソースURLを設定します： `` https://prometheus-api.newrelic.com/auth/`<query-key>` ``

## Prometheus APIの動作をカスタマイズする [#customize-API]

[リモート書込みインテグレーション](/docs/integrations/prometheus-integrations/install-configure/set-your-prometheus-remote-write-integration)を使用して、複数のPrometheusサーバーをNew Relicに接続している場合は、ヘッダーは特に重要です。カスタマイズの詳細は、次のとおりです。

<CollapserGroup>
  <Collapser
    id=""
    title="X-Query-Key（クエリキー）"
  >
    [クエリキー](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#x-query-key)は、 New Relicで認証し、メトリックスを含むアカウントを識別するために必要です。 Grafana ではこれを<DNT>**X-Query key**</DNT>と呼びますが、New Relic UI では<DNT>**Query key**</DNT>として表示されます。

    詳細

    * 必須
    * 認証に使用するAPIクエリキー
    * Prometheusリモート書込みインテグレーションを使用している場合、X-クエリキーは、リモート書込みの統合に使用したX-ライセンスキーと同じアカウントに対応している必要があります。
  </Collapser>

  <Collapser
    id=""
    title="X-Prometheus専用"
  >
    <Callout variant="important">
      Grafanaの自動完了サポートでは、Prometheus命名規則に厳格に従えないメトリクスは扱いません。New Relicでは、このパラメーターに従わないメトリクスを含めないことを推奨しています。
    </Callout>

    詳細

    * オプション
    * APIによりさらされるメトリクスを、Prometheusからのメトリクスに制限します
    * デフォルト = 指定されていない場合はtrue
  </Collapser>

  <Collapser
    id=""
    title="X-Prometheusサーバー"
  >
    このパラメーターは、複数のPrometheusサーバーからメトリクスを収集している場合に有用です。たとえば、Grafanaを使用している場合、New Relicに接続している各Prometheusサーバーのデータソースを作成してから、すべてのPrometheusサーバーでのクエリに使用できる別のデータソースを作成できます。

    詳細

    * オプション
    * APIによりさらされるメトリクスを、指定したPrometheusサーバーから収集したメトリクスに制限します
    * この値は、PrometheusサーバーをNew Relicに接続する際に使用したリモート書込みURLの`prometheus_server` URLパラメーターと一致する必要があります
    * デフォルトで、すべてのサーバーから収集したメトリクスを返します
  </Collapser>
</CollapserGroup>

## Prometheusデータソースを削除する [#delete]

Grafanaでデータソースを削除する場合は、以下の手順に従います。

1. <DNT>
     **Configuration > Data Sources**
   </DNT>

   に移動します。

2. 削除するデータソースをクリックします。

3. ページの下部にある

   <DNT>
     **Delete**
   </DNT>

   ボタンをクリックします。
