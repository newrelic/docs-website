---
title: New Relic でテレメトリ データを最適化する
metaDescription: Our data ingest governance guide helps you get optimal value for the telemetry data you're reporting to New Relic.
freshnessValidatedDate: '2023-07-26T00:00:00.000Z'
translationType: machine
---

テレメトリ データ、つまり 1 つのソースから収集され、分析のためにモニターに報告されるデータは、収集するデータ ソースが複数ある現代の組織で使用されることが増えています。ただし、そのデータの操作と管理には独自の考慮事項が必要であり、テレメトリ データの処理方法を最適化することで時間とコストを節約できます。これは、多数の事業単位や作業グループを持つ複雑な組織に特に当てはまります。

ここで、 <DNT>**Data ingest governance**</DNT> 、つまり組織が収集したテレメトリー データの最適な値を確保する実践が登場します。 私たちのガイドは、組織内でこのコンセプトを使用するためのベストプラクティスの準備と実行に役立ちます。 このチュートリアル シリーズを完了すると、次のことができるようになります。

* 冗長または不要なテレメトリ データを削減し、時間とコストを節約します。
* 組織内のどのグループがどのデータに貢献しているかを正確に理解します。
* テレメトリ データの出所を明らかにし、データ管理のサイロ化を削減します。
* 明確かつ簡潔な方法で取り込みコストを考慮します。
* データの可観測性値の完全なコンテキストに基づいて、取り込み量を調整します。

<img
  title="Data ingest governance path"
  alt="A diagram displaying the path for setting up data ingest governance with New Relic. The path is 1. Baseline your data, 2. detect anomalies, and 3. optimize your telemetry"
  src="/images/telemetry_diagram_data-ingest-path.webp"
/>

## あなたが始める前に [#before-begin]

<DNT>**data ingest governance**</DNT>を使用して最適化できるように、データが New Relic で管理されていることを確認する必要があります。 さらに詳しい情報が必要な場合は、[データ管理に関するドキュメントを](/docs/data-apis/manage-data/manage-your-data/)参照してください。

<Collapser
  id="understand-nr-consumption-metrics"
  title="消費イベントの種類を理解する"
>
  請求可能なすべてのテレメトリは、 `NrConsumption`および`NrMTDConsumption`イベントで追跡されます。このガイドでは、 `NrMTDConsumption`よりも詳細なリアルタイムデータを提供する`NrConsumption`のクエリ方法に焦点を当てています。 `NrConsumption`属性`usageMetric`は、テレメトリタイプを示します。

  `NrConsumption`を使用すると、「過去 30 日間に各アカウントが取り込んだ<InlinePopover type="browser"/>データの量はどれくらいですか?」などの質問をすることができます。 「過去 30 日間から摂取量はどう変化しましたか?」そのデータを返すクエリは次のとおりです。

  ```sql
  FROM NrConsumption SELECT sum(GigabytesIngested) WHERE usageMetric = 'BrowserEventsBytes' SINCE 30 days AGO COMPARE WITH 30 days AGO FACET consumingAccountName
  ```

  応答には、アカウントごとに取り込んだブラウザ監視データのGB数が表示されます。

  ```shell
  Banking platform, 75 GB, +2.9%
  Marketing platform, 40 GB, -1.3%
  ```

  以下は、さまざまな`usageMetric`タイプ、構成イベント（データが格納されるイベントタイプ）、およびデータ取り込みの作成を担当するエージェントまたはメカニズムのタイプの内訳です。

  ### 請求可能なテレメトリの内訳表

  <table>
    <thead>
      <tr>
        <th style={{ width: "200px" }}>
          NrcConsumption.usageMetric。
        </th>

        <th style={{ width: "200px" }}>
          構成要素のイベント
        </th>

        <th>
          ソース
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          InfraHostBytes
        </td>

        <td>
          `SystemSample`、`StorageSample`、`InfrastructureEvent`、 `NetworkSample`
        </td>

        <td>
          インフラストラクチャー・エージェント
        </td>
      </tr>

      <tr>
        <td>
          InfraProcessBytes
        </td>

        <td>
          `ProcessSample`
        </td>

        <td>
          インフラストラクチャー・エージェント
        </td>
      </tr>

      <tr>
        <td>
          InfraIntegrationBytes
        </td>

        <td>
          サードパーティのプラットフォーム統合のためのさまざまなイベント、および `ContainerSample`
        </td>

        <td>
          [オンホスト統合](/docs/infrastructure/host-integrations/get-started/introduction-host-integrations/)と特定の[クラウド統合](/docs/infrastructure/infrastructure-integrations/get-started/introduction-infrastructure-integrations/#cloud)
        </td>
      </tr>

      <tr>
        <td>
          ApmEventsBytes
        </td>

        <td>
          `Transaction`、 `TransactionError` 、そしておそらく `WorkloadStatus`
        </td>

        <td>
          APMエージェント
        </td>
      </tr>

      <tr>
        <td>
          TracingBytes
        </td>

        <td>
          `Span`, `SpanEvent`
        </td>

        <td>
          APMエージェントとOpenTelemetry
        </td>
      </tr>

      <tr>
        <td>
          BrowserEventsBytes
        </td>

        <td>
          `Browser`、 `BrowserInteraction` 、 `Browser:EventLog` 、 `Browser:JSErrors` 、 `JavaScriptError` 、 `PageView` 、 `PageViewTiming` 、 `PcvPerf`
        </td>

        <td>
          Browserエージェント
        </td>
      </tr>

      <tr>
        <td>
          MobileEventsBytes
        </td>

        <td>
          `Mobile`、 `MobileReqest` 、 `MobileRequestError` 、 `MobileSession` 、 `MobileHandleException` 、 `MobileCrash`
        </td>

        <td>
          モバイルエージェント
        </td>
      </tr>

      <tr>
        <td>
          SeverlessBytes
        </td>

        <td>
          クラウド固有のもの（AWS Lambdaのイベントなど）
        </td>

        <td>
          クラウド特化型（AWS Lambdaとの連携など）
        </td>
      </tr>

      <tr>
        <td>
          LoggingBytes
        </td>

        <td>
          `Log` パターンのパーティション固有のイベントと同様に `[partition].Log`
        </td>

        <td>
          各種（Fluentd、FluentBit、Syslog、クラウド専用ストリーミングサービス）
        </td>
      </tr>

      <tr>
        <td>
          MetricEventBytes
        </td>

        <td>
          `Metric`
        </td>

        <td>
          メトリックAPIとそれを使用する統合（[ディメンションメトリック](/docs/data-apis/understand-data/new-relic-data-types/#dimensional-metrics)）から、またはブラウザーエージェント、APMエージェント、モバイルエージェント（[メトリックタイムスライスデータ](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data)）などのエージェントから。
        </td>
      </tr>

      <tr>
        <td>
          CustomEventBytes
        </td>

        <td>
          各種
        </td>

        <td>
          さまざまなAPI。[アカウントで利用可能なすべてのイベントタイプを表示するには、 `SHOW EVENT TYPES`を使用します](#show-event-types)。
        </td>
      </tr>
    </tbody>
  </table>
</Collapser>

また、あなたまたはあなたのチームが以下を追跡および管理できることを確認する必要もあります。

* 該当する場合は、マネージャーと協力して月次の取り込み目標内に収まるようにします。
* 監視データはベースラインを取り込み、異常に対応します。
* 必要に応じて、データの最適化/削減の計画を立案および承認します。
* スケジュールされたチェックインに参加して、ベースライン データを分析し、取り込みターゲットと比較します。
* 必要に応じてターゲットを取り込むように変更を加えます。

まだ持っていない場合は、以下を担当するオブザーバビリティ センター オブ エクセレンス チーム (または類似のもの) の設立を検討する必要があります。

* New Relic との関係を維持します。
* アカウントとユーザーを管理します。
* 新しいチームや個人のオンボーディング。
* 可観測性知識ベースの維持。
* チーム間のコラボレーションと共有を促進します。

このようなチームを持つことは、組織全体で高品質の可観測性を実現するのに役立ちます。

## このシリーズには何がありますか?

<DocTiles>
  <DocTile
    title="Create baseline reports"
    path="/docs/tutorial-optimize-telemetry/create-baseline-report/"
  >
    正しいダッシュボードを使用して取り込みベースラインを作成する方法を学びます
  </DocTile>

  <DocTile
    title="Find anomalies"
    path="/docs/tutorial-optimize-telemetry/detect-anomalies/"
  >
    ベースライン レポートを使用してテレメトリの異常を発見する方法を学びます。
  </DocTile>

  <DocTile
    title="Create an optimization plan"
    path="/docs/tutorial-optimize-telemetry/develop-optimize-plan/"
  >
    取り込みコストを削減するための最適化計画を作成する方法を学びます。
  </DocTile>

  <DocTile
    title="Optimize your ingest data"
    path="/docs/tutorial-optimize-telemetry/data-optimize-techniques/"
  >
    さまざまなテクニックを使用して全体的な取り込みを最適化する方法を学びます
  </DocTile>
</DocTiles>
