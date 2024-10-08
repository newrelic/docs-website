---
title: AJAXページ。時間のかかる呼び出しを特定する
metaDescription: Use New Relic's browser monitoring AJAX page to pinpoint problems with your end users' experience when you have time-consuming or failing AJAX calls.
freshnessValidatedDate: never
translationType: machine
---

<InlinePopover type="browser"/><DNT>**AJAX**</DNT> UIには、ブラウザから HTTP や HTTPS ドメインなどの外部インフラストラクチャへの最近の AJAX リクエストが表示されます。 この情報は、サイトの Web ページの一部を更新する AJAX 呼び出しに時間がかかったり失敗したりした場合に、エンドユーザー エクスペリエンスに関する問題を特定するのに役立ちます。 デスクトップ ブラウザ、モバイル デバイス、タブレットなど、デバイスの種類別に問題を確認できます。

## トラブルシューティングのポイント [#troubleshooting]

ここでは、アプリのパフォーマンス問題を特定するためのトラブルシューティングのヒントをご紹介します。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        AJAXコールのトラブルシューティング
      </th>

      <th>
        例
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        リクエスト全体の問題
      </td>

      <td>
        [問題がどこにあるのかわからない場合、またはリクエストを最初から最後まで追跡したい場合は、](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing) の \[分散トレース]<DNT>**AJAX**</DNT>UI リンクをクリックします。
      </td>
    </tr>

    <tr>
      <td>
        タイミングの問題
      </td>

      <td>
        Total [time percentages](#time-percentage-example), throughput requests per minute (rpm), and average data transfer rates per requestは、タイミングの問題を特定するのに役立ちます。

        * <DNT>
            **AJAX**
          </DNT>

          概要ページの

          <DNT>
            **Average data transfer per request**
          </DNT>

          グラフで大きなスパイクを探します。

        * <DNT>
            **Group By**
          </DNT>

          ドロップダウンを使用してデータの傾向を分析し、リクエスト URL、GraphQL 操作名、その他の多くのフィールド別に AJAX パフォーマンスを評価します。

        * 個々の呼び出しの

          <DNT>
            **AJAX performance**
          </DNT>

          タブから、高いコールバック時間値とデータ転送速度の相関関係を探します。
      </td>
    </tr>

    <tr>
      <td>
        エンドポイントの問題
      </td>

      <td>
        異常なエンドポイントを探し、そこからの個々のリクエストを調査します。

        <DNT>**AJAX**</DNT>概要ページの<DNT>**Status codes**</DNT>チャートには、呼び出しからの戻り動作に関する情報が提供されます。 `200`の範囲外のステータス コードが多数表示される場合は、AJAX エンドポイントに問題がある可能性があります。
      </td>
    </tr>

    <tr>
      <td>
        具体的なWebページの位置の問題
      </td>

      <td>
        読み込まれるページのコンテキスト内で潜在的な AJAX の問題を調べます。 AJAX トランザクションを選択し、 [<DNT>**Session traces with AJAX**</DNT>](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle)テーブルから任意のトレースを選択します。
      </td>
    </tr>
  </tbody>
</table>

## 設定方法 [#ajax-dashboard]

アプリのAJAXリクエストに関する問題をトラブルシューティングするためのものです。

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > AJAX**
   </DNT>

   に移動します。

2. デバイスのタイプを選択します：デスクトップ（デフォルト）、モバイル、およびタブレット。

3. AJAX リクエストをクリックします。

Ajax リクエストに照準を合わせたら、調査を開始します。これらの戦略のいくつかを試してください。

<CollapserGroup>
  <Collapser
    id="ajax-summary"
    title="AJAXの要約チャートを始める"
  >
    サマリーページには、AJAXコールのトラブルシューティングに役立ついくつかのチャートが用意されています。

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            AJAXによる要約ページ
          </th>

          <th>
            コメントコメント
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            グループとフィルター
          </td>

          <td>
            UI で利用可能な<DNT>**Sort by**</DNT>オプションのいずれかを使用します。 2分以上かかるAJAXリクエストはすべて自動的にフィルタリングされます。
          </td>

          <td>
            より柔軟にデータを表示するには、 <DNT>**Group by**</DNT>オプションを使用して`requestUrl`または`groupedRequestUrl`のいずれかを選択します。
          </td>
        </tr>

        <tr>
          <td>
            エンドポイント
          </td>

          <td>
            <DNT>**Throughput**</DNT>チャートには、スループットが最も高い 5 つのエンドポイントが表示されます。 通話に 5 つ以上のエンドポイントがある場合、それらはチャート上で<DNT>**Other**</DNT>として統合されます。
          </td>
        </tr>

        <tr>
          <td>
            New Relicからの呼び出し
          </td>

          <td>
            お客様のアプリへのAJAXコールを当社のブラウザが監視しているのが見えるかもしれません。これは正常なことです。なぜなら、すべてのアクティビティはブラウザのセッション中にキャプチャされるからです。
          </td>
        </tr>

        <tr>
          <td>
            欠落しているブラウザデータ
          </td>

          <td>
            AJAXのタイミングの詳細は、IE 7、IE 8、Chrome for iOSのブラウザでは確認できません。他のブラウザで期待通りのデータが表示されない場合は、 [AJAXのトラブルシューティング手順](/docs/browser/new-relic-browser/troubleshooting/troubleshoot-ajax-data-collection) に従ってください。
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="ajax-performancex"
    title="コール数やページビューで詳細を確認"
  >
    <DNT>**AJAX**</DNT>概要ページから特定の通話を選択した後、 <DNT>**AJAX performance**</DNT>リンクを使用して詳細情報にドリルダウンできます。 これには[、セッショントレースの詳細](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle)への直接リンクが含まれます。

    ここからタブを選択して、ページ ビュー別のパフォーマンス データを取得することもできます。(アプリ サーバーのリクエスト数がブラウザの `PageView` トランザクション数を大幅に上回っている場合は、バックエンドへのリクエストの一部が AJAX を介して行われているためです。詳細については、 [トラブルシューティング手順を](/docs/browser/new-relic-browser/troubleshooting/app-server-requests-greatly-outnumber-browser-pageview-transactions)参照してください。)

    <img
      title="New Relic browser monitoring: AJAX details"
      alt="A screenshot of the AJAX details UI in New Relic"
      src="/images/browser_screenshot-full_ajax-details.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > AJAX > (select an AJAX call)**</DNT>: この例では、特定の AJAX 呼び出しのパフォーマンスの詳細を示します。 ページビューごとのパフォーマンスの詳細を表示することもできます。
    </figcaption>

    <DNT>**Average response time**</DNT>チャート上の AJAX エンドポイントは、4 つまたは 2 つの期間として表示されます。 これは[、クロスアプリケーション トレース ヘッダー](/docs/apm/transactions/cross-application-traces/cross-application-tracing#security)があるかどうかによって異なります。

    * 4 つの期間 (

      <DNT>
        **Application time**
      </DNT>

      、

      <DNT>
        **Queue time**
      </DNT>

      、

      <DNT>
        **Network time**
      </DNT>

      、

      <DNT>
        **Callback time**
      </DNT>

      ): これらの AJAX 呼び出しは、クロスアプリケーション トレース ヘッダーを提供する

      <InlinePopover type="apm"/>

      エージェントによってアプリ モニターに対して実行されます。

    * 2 つの期間 (

      <DNT>
        **Response time**
      </DNT>

      と

      <DNT>
        **Callback time**
      </DNT>

      ): これらの AJAX 呼び出しは、 APMエージェントによって監視されていないアプリ、またはクロスアプリケーション トレース ヘッダーを提供しないエージェントによって監視されているアプリに対して行われます。
  </Collapser>

  <Collapser
    id="distributed tracing"
    title="お客様のリクエストを最初から最後まで追跡"
  >
    [リクエストを最初から最後まで追跡するには、](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing) の \[分散トレース] リンクをクリックすることもできます。<DNT>**AJAX**</DNT>UI

    * ディストリビューティッド（分散）トレーシングのリストを表示するには、AJAX 概要レベルの

      <DNT>
        **AJAX**
      </DNT>

      UIのリンクをクリックします。

    * アプリケーションと特定のリクエスト タイプでフィルターされたすべてのトレースを表示するには、

      <DNT>
        **AJAX**
      </DNT>

      UIで選択したリクエストの \[分散トレース] リンクをクリックします。
  </Collapser>

  <Collapser
    id="time-percentage-example"
    title="時間の割合の例"
  >
    AJAX カテゴリ リストを<DNT>**Total time percentage**</DNT>で並べ替えると、リストには各 AJAX カテゴリの割合が表示されます。 また、グラフには、時間の割合が最も高い上位のリクエストが表示されます。

    この情報を表示するために、ブラウザは各AJAXカテゴリの累積リクエスト時間を取得し、それをすべてのAJAXリクエストの累積リクエスト時間で割ります。スループットの高いリクエストは、スループットの低いリクエストよりも優先されるため、レスポンスタイムを最適化する場所を特定するのに役立ちます。

    <DNT>
      **Example: Calculating time percentages for two AJAX categories**
    </DNT>

    この例では、 `api1.example.com`と`api2.example.com`の2つのAJAXカテゴリを使用しています。

    * `api1.example.com`は1回ヒットし、応答するのに1秒（1000ms）かかります（1 x1秒=1秒）。

    * `api2.example.com`は500回ヒットし、応答するのに1ミリ秒かかります（500 x1ミリ秒=500ミリ秒、つまり0.5秒）。

      すべてのAJAXカテゴリの累積リクエスト時間は1500ms、または1.5秒です。時間のパーセンテージを得るためには、各AJAXカテゴリを累積リクエスト時間で割り、パーセンテージのために100を掛けてください。

      したがって、 `api1.example.com`は合計時間パーセンテージの67％（1000を1500で割ったものに100を掛けたもの）であり、 `api2.example.com`は33％（500を1500で割ったものに100を掛けたもの）です。

      <table>
        <thead>
          <tr>
            <th>
              <DNT>
                **Time calculations**
              </DNT>
            </th>

            <th>
              <DNT>
                **api1**
              </DNT>
            </th>

            <th>
              <DNT>
                **api2**
              </DNT>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              ヒット数
            </td>

            <td>
              1
            </td>

            <td>
              500
            </td>
          </tr>

          <tr>
            <td>
              対応時期
            </td>

            <td>
              1秒（1000ms）

              1ヒット×1000ms＝1000ms(1秒)
            </td>

            <td>
              1ミリ秒（1ms）

              500ヒット×1ms＝500ms（0.5秒）
            </td>
          </tr>

          <tr>
            <td>
              すべてのAJAXカテゴリの累積リクエスト時間
            </td>

            <td>
              1000ms + 500ms = 1500ms (1.5秒)
            </td>

            <td>
              1000ms + 500ms = 1500ms (1.5秒)
            </td>
          </tr>

          <tr>
            <td>
              Time percentage = Category / 1500ms cumulative request time x 100 for percentage
            </td>

            <td>
              1000ms / 1500 x 100 = 67%となります。
            </td>

            <td>
              500ms / 1500 x 100 = 33
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>
</CollapserGroup>

## 次のステップ [#next]

<DNT>**AJAX**</DNT> UI に加えて、次のリソースも使用できます。

* 主要パフォーマンス指標に[アラート](/docs/alerts-applied-intelligence/new-relic-alerts/get-started/introduction-alerts)を使用することで、問題の発生を防ぐことができます。
* [シングルページアプリ（SPA）の監視](/docs/browser/single-page-app-monitoring/get-started/introduction-single-page-app-monitoring) を使用します。これは、AJAXリクエストを使用してコンテンツを動的に引き出し、流動的なユーザーエクスペリエンスを実現しているアプリに有効です。
* UIまたはAPIで[データをクエリ](/docs/query-your-data/explore-query-data/explore-data/introduction-querying-new-relic-data)します。たとえば、[デフォルトのブラウザイベント](/docs/insights/insights-data-sources/default-data/browser-default-events-insights)でクエリを実行したり、地理データとブラウザデータに[SPA `AjaxRequest`](/attribute-dictionary/?event=AjaxRequest)を使用したり、独自の[カスタムデータ](/docs/telemetry-data-platform/get-data-new-relic/getting-started/introduction-new-relic-data-ingest-apis-sdks)をNewRelicに取得したりできます。
* [チャート](/docs/insights/use-insights-ui/manage-dashboards/chart-types) と [ダッシュボード](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards) でデータを視覚化し、共有することができます。
