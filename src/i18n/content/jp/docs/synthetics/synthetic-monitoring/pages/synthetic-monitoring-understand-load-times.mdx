---
title: シンセティックモニタリング。ロードタイムの把握
tags:
  - Synthetics
  - Synthetic monitoring
  - Pages
metaDescription: 'Use the Resources page to understand how your website''s resources perform. Compare usage across resources, or view individual resource loads.'
freshnessValidatedDate: never
translationType: machine
---

**リソース** ページを使用して、ウェブサイト上の各リソースのロードタイムの影響を把握します。 [resources load time](#resources-load-time), [time spent by third parties](#third-parties), [irregular response codes](#response-codes) のグラフで高レベルの概要を確認し、 [resources list](#resources-list) で大きなCSSファイルや画像など影響の大きいリソースを特定します。

また、 [詳細なリソースメトリクス](#detailed-metrics) を使って、特定のリソースを調査することができます。これは、1つのリソースのパフォーマンス情報を集約したものです。さらに深く掘り下げて、 [そのリソースの1つのロードを見ることができます。](#resource-results) 正確なリクエストとレスポンスのヘッダーを使用して、パフォーマンスの問題をピンポイントで特定します。

## リソースのページを見る [#viewing]

モニターの**Resources** \[リソース]ページにアクセスするには、 **[one.newrelic.com](https://one.newrelic.com/synthetics-nerdlets) > Synthetic monitoring > (モニターを選択) > Resources**に移動します。

<img
  title="screen-synthetics-resources.png"
  alt="screen-synthetics-resources.png"
  src="/images/synthetic_screenshot-full_resources-Page.webp"
/>

<figcaption>
  **[one.newrelic.com](https://one.newrelic.com/synthetics-nerdlets) > Synthetic monitoring > (モニターを選択) > Resources**: **Resources** \[リソース]ページを使用して、Web サイト上の各リソースのパフォーマンスを分析し、[個々のリソース負荷](#resource-results)の詳細なメトリクスにアクセスします。
</figcaption>

## リソースメトリクスの理解 [#understanding]

**リソース** ページを使用して、ウェブサイト上の各リソースのパフォーマンスへの影響を把握することができます。

* **リソースリスト**: 監視しているウェブサイトのリソースを **平均ダウンロード時間でリストアップ**.このリストを使用して、ダウンロード時間を短縮し、ウェブサイトのパフォーマンスを最適化します。また、 **Search all resources** フィールドでリソースを検索することで、特定のリソースのロード時間を表示することができます。リソースを選択すると、 [個別のリソースメトリクスが表示されます。](#individual) 。
* **Load time \[読み込み時間]**: すべてのリソースの平均読み込み時間をリソース タイプ ( `jpeg` 、 `json` 、または`javascript`など) ごとにグラフ化します。このグラフを使用して、Web サイトの読み込み時間が時間の経過とともにどのように変化するかを理解します。
* **サードパーティの使用時間**: ウェブフォント、埋め込まれたTwitterのタイムライン、外部でホストされた画像など、すべてのサードパーティリソースの平均ロードタイムをグラフ化します。このグラフを使って、サードパーティのウェブサイトがウェブサイトのパフォーマンスに影響を与えているかどうかを確認します。
* **不規則な応答コード**: モニターが受信した負の HTTP 応答コード ( [HTTP ステータス コード](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)とも呼ばれる) の数をグラフ化します。このグラフには、300 (リダイレクト)、400 (クライアント エラー)、および 500 (サーバー エラー) の範囲のすべての応答が含まれています。100 または 200 の範囲の応答はカウントされません。Synthetics は、多数の [カスタム応答コード](/docs/synthetics/new-relic-synthetics/using-monitors/synthetics-response-codes)も収集します。

これらの指標を分析することで、問題のあるリソースを突き止め、そのパフォーマンスを改善することができます。例えば、最適化されていないロゴ画像は、サイトを訪れたすべての人にスローダウンをもたらすかもしれませんし、米国内のサーバーからのみ提供されているトラッカーは、米国外からの訪問者にスローパフォーマンスをもたらすかもしれません。

## 詳細なリソースメトリクスの表示 [#detailed-metrics]

また、自分のサイトの各リソースの詳細なメトリクスを表示することもできます。詳細なメトリクスを表示するには、 [特定のリソースを探す](#locate-resource) 、または **リソース** ページから興味のあるリソースを選択します。リソースを選択した後、そのリソースの概要メトリクスを表示したり、 [個々のリソースの負荷を表示することができます。](#resource-results)

* **Max duration**, **Min duration**, **Avg duration**: Load time metrics for this resource over [selected time frame](#time-frame).
* **For 50% of requests**: **最速** 50% of requests の最大ダウンロード時間です。これは、このリソースに対するリクエストの50％が、指定された時間以上の速さで完了したことを意味します。
* **For 95% of requests**: **最速** 95% of requests の最大ダウンロード時間です。これは、このリソースへのリクエストの95%が、指定された時間以上の速さで完了したことを意味します。
* **Average load time**: [選択された時間枠での、このリソースの平均ロードタイムをグラフ化します](#time-frame).このグラフを使って、ウェブサイトの最適化（画像サイズの縮小やCSSの最小化など）が機能しているかどうかを確認します。

また、 [チャート要素の非表示/表示解除](#hide-unhide) 、場所によるフィルタリング、 [リソース結果](#resource-results) リストのソート **ダウンロード時間** または **DNS ルックアップ** が可能です。リソース名の上にマウスを置くと、フルパスが表示されます（動的に生成された非常に長いリソース名の場合に便利です）。

## 個々のリソースの負荷を表示 [#resource-results]

特定のリソースの [詳細なメトリクス](#detailed-metrics) を表示した後、個々のリソース負荷を選択して、1 つのパフォーマンス低下インシデントを深く理解できます。その後、合計接続時間の内訳を表示して問題が発生した場所を理解し、要求ヘッダーと応答ヘッダーを調べることができます。

<img
  title="screen-synthetics-individual-resource-results.png"
  alt="screen-synthetics-individual-resource-results.png"
  src="/images/synthetic_screenshot-full_find-resource-load-details.webp"
/>

<figcaption>
  **[one.newrelic.com > 合成モニタリング](https://one.newrelic.com/synthetics-nerdlets)** > (モニターを選択) > **リソース** > (リソースを選択) > (リソース負荷を選択): 個々のリソース負荷を選択して、接続時間、リクエスト ヘッダー、および応答ヘッダーの詳細な内訳を表示します。 . [HTTP アーカイブ 1.2 仕様](http://www.softwareishard.com/blog/har-12-spec/#timings)から取得したネットワーク タイミング構造。
</figcaption>

## ページ機能の利用 [#ui-functions]

**Resources** ページでは、以下の機能をサポートしています。

<table>
  <thead>
    <tr>
      <th width={200}>
        **あなたがしたい場合は...**
      </th>

      <th>
        **これを行う...**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="sort-results">
      <td>
        結果リストのソート
      </td>

      <td>
        **Sort By** ドロップダウンから、ソートオプションを選択します。

        * 並び替え **平均ダウンロード時間** 最も読み込みの遅いリソースを表示します。
        * 並び替え **平均サイズ** あなたの最大のリソースを表示します。
      </td>
    </tr>

    <tr id="hide-unhide">
      <td>
        チャート要素の表示・非表示
      </td>

      <td>
        チャートの要素を選択して、非表示にしたり、解除したりすることができます。

        <img
          title="crop-quick-monitor-switcher.png"
          alt="switch monitors by selecting the monitor name"
          src="/images/synthetic_screenshot-crop_hide-unhide-differences.webp"
        />
      </td>
    </tr>

    <tr id="locate-resource">
      <td>
        特定のリソースを探す
      </td>

      <td>
        **Search all resources**\[すべてのリソースを検索] フィールドにリソース名の一部を入力します (例: **search-icon.webp** または **latest.json**)。リソースを選択して、 [そのリソースの詳細なメトリックを表示します](#detailed-metrics)。
      </td>
    </tr>

    <tr id="quickly-switch">
      <td>
        別のモニターに素早くアクセス
      </td>

      <td>
        1. 画面上部の現在のモニターの名前をクリックすると、ドロップダウンメニューが表示されます。

        2. 最近のモニターのリストから選択するか、検索フィールドに名前を入力して特定のモニターを検索します。

           <img
             title="Switch synthetic monitor quickly"
             alt="Switch synthetic monitor quickly"
             src="/images/synthetic_screenshot-crop_new-monitor-quick.webp"
           />
      </td>
    </tr>

    <tr id="time-frame">
      <td>
        タイムフレームの変更
      </td>

      <td>
        [タイム ピッカーを](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) 使用して、返される結果の数を調整します。
      </td>
    </tr>
  </tbody>
</table>
