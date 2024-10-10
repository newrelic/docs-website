---
title: トレース詳細 UI ページを理解する
tags:
  - Distributed tracing
  - UI and data
  - Trace details
metaDescription: 'Dive deeper into New Relic''s distributed tracing feature: learn how to use and understand the trace details UI.'
freshnessValidatedDate: '2023-07-19T00:00:00.000Z'
translationType: machine
---

トレース リストからトレースを選択すると、UI のトレース詳細ページに移動します。 トレースの詳細を使用して、ディストリビューティッド（分散）トレーシングを構成する操作のフローを理解し、ビューを調整して最も重要な情報を見つけます。

<img
  title="Trace details page"
  alt="New Relic distributed tracing UI - trace details page"
  src="/images/distributed-tracing-trace-details-page.webp"
/>

<figcaption>
  トレースのリストからトレースを選択すると、その詳細が表示されます。
</figcaption>

トレースのスパンを表示する方法を確認してください。

<Tabs>
  <TabsBar>
    <TabsBarItem id="timeline-view">
      タイムラインビュー
    </TabsBarItem>

    <TabsBarItem id="latency-view">
      レイテンシービュー
    </TabsBarItem>

    <TabsBarItem id="waterfall-view">
      滝の眺め
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="timeline-view">
      タイムライン ビューは、トレース内のすべてのスパンの高密度ビューです。このビューを使用すると、トレース全体をすばやくスクロールして、遅延とエラーがトレース内およびエンティティの境界を越えてどのように伝播するかを確認できます。このビューからスパンを選択すると、その下のウォーターフォール ビューでスパンの詳細を確認できます。
    </TabsPageItem>

    <TabsPageItem id="latency-view">
      レイテンシ ビューには、トレース内の各エンティティが寄与するレイテンシの量と、エンティティごとのエラー スパンの数が表示されます。エンティティによってもたらされる待機時間は、エンティティが 1 つ以上のプロセスを実行していながら、外部呼び出しやデータベース呼び出しを行って **いない** 実時間です。以下に 2 つの例を示します。

      * エンティティに 500 ミリ秒続くプロセスがあり、その時間のうち 400 ミリ秒が外部呼び出しを行っている場合、トレースに 100 ミリ秒の遅延が発生していると表示されます。

      * エンティティに 3 つのプロセスが 1 秒間並行して実行されており、それらのプロセスのどれも外部呼び出しを行わなかった場合、トレースに 1 秒の遅延が生じていると表示されます。

        <img
          title="Latency view"
          alt="Screenshot showing the distributed tracing latency view"
          src="/images/distributed-tracing-trace-details-page-latency-view.webp"
        />
    </TabsPageItem>

    <TabsPageItem id="waterfall-view">
      ページの下部にあるウォーターフォール ビューには、分散トレースを構成するすべての操作の詳細なフローが表示されます。これにより、レイテンシとエラーが発生する正確なコンテキストを確認できます。

      ### ウォーターフォール コントロール [#waterfall-controls]

      ウォーターフォール ビューには、重要なスパンを見つけやすくするための多くのコントロールがあります。

      * <DNT>**Expand all/Collapse all**</DNT>: このオプションを使用して、すべてのスパン (インプロセススパンを含む) の表示と折りたたまれたスパンの表示を切り替えます。

      * <DNT>**Standard/Manual**</DNT>: 標準モードでは、各プロセスの最初のスパンを含む半展開ビューが表示されます。 手動モードでは、展開したものだけが表示されます。

        * <DNT>
            **Standard**
          </DNT>

          と

          <DNT>
            **Manual**
          </DNT>

          両方とも、すべてのスパンを表示する

          <DNT>
            **Expand all**
          </DNT>

          によってオーバーライドされます。

        * 標準モードまたは手動モードで

          <DNT>
            **Collapse all**
          </DNT>

          をクリックすると、ウォーターフォールは使用しているモードのデフォルトにリセットされます。

      * <DNT>**Focus on**</DNT>: スパンにエラーまたは異常がある場合は、それぞれのタイプのチェックボックスが表示されます。 これらのボックスをオンにすると、ウォーターフォール ビューでは他のすべての種類のスパンが折りたたまれ、色分けされたエラーまたは異常なスパンのみが表示されます。 これは問題のあるスパンを素早く見つける方法です。<img style={{ width: "70%",align: "left" }} title="Screenshot showing the color coding of focus on" alt="Screenshot showing the color coding of focus on" src="/images/distributed-tracing_screenshot-crop_focus-on-example.webp"/>

      * <DNT>**Maximize**</DNT>: これにより、ウォーターフォールを拡大し、エンティティマップを非表示にすることで、画面上により多くのスパンを表示できるようになります。

        ### ウォーターフォール スパン プロパティ [#span-icons]

        UIでは、スパンのプロパティをこれらのアイコンで表示します。

        <table id="span-types">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                スパン特性
              </th>

              <th style={{ width: "110px" }}>
                指標
              </th>

              <th>
                説明
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                サービス
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-service-span-icon.png"
                  alt="New Relic distributed tracing service icon"
                  src="/images/new-relic-distributed-tracing-service-icon.webp"
                />
              </td>

              <td>
                このアイコンは、サービスの入り口となるスパンを表しています。
              </td>
            </tr>

            <tr id="in-process">
              <td>
                インプロセス
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-in-process-span-icon.png"
                  alt="New Relic distributed tracing in-process span icon "
                  src="/images/new-relic-distributed-tracing-inprocess-icon.webp"
                />
              </td>

              <td>
                このアイコンは、 [in-process span](#in-process) を表しています。これは、（クロスプロセススパンとは対照的に）プロセス内で行われるスパンのことです。例：ミドルウェアのインスツルメンテーション、ユーザーが作成したスパン。
              </td>
            </tr>

            <tr>
              <td>
                データストア
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-database-span-icon.png"
                  alt="New Relic distributed tracing datastore span icon"
                  src="/images/new-relic-distributed-tracing-databases-icon.webp"
                />
              </td>

              <td>
                このアイコンは、データストアへのスパンコールを表しています。
              </td>
            </tr>

            <tr>
              <td>
                外部の
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-external-span-icon.png"
                  alt="New Relic distributed tracing external span icon"
                  src="/images/new-relic-distributed-tracing-external-icon.webp"
                />
              </td>

              <td>
                このアイコンは、HTTPを介した外部サービスへの呼び出しを表すカテゴリーを表しています。
              </td>
            </tr>

            <tr>
              <td>
                ブラウザアプリ
              </td>

              <td>
                <img
                  title="distributed-tracing-browser-span-icon.png"
                  alt="New Relic distributed tracing browser span icon"
                  src="/images/distributed-tracing-browser-span-icon.webp"
                />
              </td>

              <td>
                このアイコンは、 [ブラウザアプリケーションのスパン](/docs/browser/new-relic-browser/browser-pro-features/browser-data-distributed-tracing) を表しています。
              </td>
            </tr>

            <tr>
              <td>
                ラムダ
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lambda-icon.png"
                  alt="New Relic distributed tracing external span icon"
                  src="/images/new-relic-distributed-tracing-lambda-icon.webp"
                />
              </td>

              <td>
                このアイコンは、 [ラムダ関数](/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/introduction-new-relic-monitoring-aws-lambda) からのスパンを表しています。
              </td>
            </tr>
          </tbody>
        </table>

        いくつかのスパンには追加のインジケータがあります。

        <table id="span-types-table">
          <thead>
            <tr>
              <th style={{ width: "130px" }}>
                スパン特性
              </th>

              <th style={{ width: "110px" }}>
                指標
              </th>

              <th>
                説明
              </th>
            </tr>
          </thead>

          <tbody>
            <tr id="connecting-lines">
              <td>
                接続の種類
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-lines-image.png"
                  alt="New Relic distributed tracing connecting lines image"
                  src="/images/new-relic-distributed-tracing-lines-image.webp"
                />
              </td>

              <td>
                実線は直接の親子関係、つまりあるプロセスや機能が他のプロセスや機能を直接呼び出していることを示しています。点線は、非直接的な関係を示しています。スパン間の関係については、 [Trace structure](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure) を参照してください。
              </td>
            </tr>

            <tr>
              <td>
                エラー
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-error-icon.png"
                  alt="New Relic distributed tracing error icon"
                  src="/images/new-relic-distributed-tracing-error-icon.webp"
                />
              </td>

              <td>
                エラーが発生したスパン。 [How to understand span errors](#error-tips) を参照してください。
              </td>
            </tr>

            <tr>
              <td>
                アノマリー
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-anomalous-icon.png"
                  alt="New Relic distributed tracing datastore span icon"
                  src="/images/new-relic-distributed-tracing-anomalous-icon.webp"
                />
              </td>

              <td>
                このアイコンは、 [異常なスパンの検出を表しています](#anomalous-spans) 。
              </td>
            </tr>

            <tr>
              <td>
                孤児のスパン
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-fragmented-icon.png"
                  alt="New Relic distributed tracing orphaned span icon"
                  src="/images/new-relic-distributed-tracing-orphan-icon.webp"
                />
              </td>

              <td>
                スパンの中には、"孤児になったり、" 、トレースから切り離されたりするものがあります。これらのスパンは、トレースの下部に表示されます。詳細については、 [Fragmented traces](#fragmented-traces) を参照してください。
              </td>
            </tr>

            <tr>
              <td>
                複数のアプリ名
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-multiple-app-names-indicator.png"
                  alt="New Relic distributed tracing multiple app names indicator"
                  src="/images/new-relic-distributed-tracing-multiapp-icon.webp"
                />
              </td>

              <td>
                スパン名の横にある場合、これは[複数のアプリ名が設定され](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app)ているエンティティを表します。これを選択すると、レポート先のすべてのアプリ名が表示されます。代替アプリ名でトレースデータを検索するには、 `appName`属性を使用します。
              </td>
            </tr>

            <tr>
              <td>
                クライアント/サーバーの時間差
              </td>

              <td>
                <img
                  title="new-relic-distributed-tracing-client-server-time-indicator.png"
                  alt="New Relic distributed tracing client-server time difference indicator"
                  src="/images/new-relic-distributed-tracing-client-server-time-indicator.webp"
                />
              </td>

              <td>
                スパンの継続時間インジケータが完全に色づけされていない場合（この例のように）、そのアクティビティのサーバ側の継続時間とクライアント側の継続時間に時間的な相違があることを意味します。これについての詳細は、 [クライアント/サーバーの時間差](#client-server-time) を参照してください。
              </td>
            </tr>
          </tbody>
        </table>
    </TabsPageItem>
  </TabsPages>
</Tabs>

## スパン詳細画面 [#span-details]

スパンを選択すると、ペインが開き、スパンの詳細が表示されます。これらの詳細は、パフォーマンスの問題のトラブルシューティングに役立ちます。このページには 3 つのタブがあります。

* <DNT>
    **Performance**
  </DNT>

  : そのスパン操作の平均期間とスループット、およびこの特定のスパンのパフォーマンスが平均とどのように比較されるかを示すグラフが表示されます。

* <DNT>
    **Attributes**
  </DNT>

  :[データ ディクショナリ](/attribute-dictionary/?dataSource=Distributed+Tracing&event=Span)から属性について詳しく学ぶことができます。

* <DNT>
    **Details**
  </DNT>

  : [スパンの完全名](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#prettified-span-names)やデータ ソースなどの詳細を表示できます。

スパンに表示される内容は、そのスパンのタイプに基づいています。たとえば、データストア スパンの詳細にはデータベース クエリが含まれます。トレース構造とスパン プロパティの決定方法の詳細については、 [「 トレース構造 」を](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works#trace-structure)参照してください。

## スパン属性 [#span-attributes]

`Span` データについて詳しく知りたい場合:

* [クエリ ビルダーを](/docs/chart-builder/use-chart-builder/get-started/introduction-chart-builder)使用してスパン データを調査します。
* スパンデータに付けられたデフォルトの属性を確認するには、 [データ辞書](/attribute-dictionary/?event=Span) を使用します。
* これらの属性を使用した NRQL クエリのヘルプについては、これらの [サンプル クエリ](/docs/apm/distributed-tracing/ui-data/example-insights-queries-distributed-trace-data) を確認してください。

## 関連ログを見る [#view-your-logs]

[ログ イン コンテキスト](/docs/logs/logs-context/configure-logs-context-apm-agents/) 機能を使用している場合、お客様のトレースにリンクしているログを見ることができます。

1. トレースをクリックすると、トレースの詳細ページが表示されます。

2. スパンの詳細ページの左上隅にある

   <DNT>
     **Logs**
   </DNT>

   タブをクリックします。

3. 個々のログメッセージに関する詳細は、そのメッセージを直接クリックしてください。
