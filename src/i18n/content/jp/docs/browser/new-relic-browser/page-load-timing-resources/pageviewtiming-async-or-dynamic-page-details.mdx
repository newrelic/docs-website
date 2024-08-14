---
title: PageViewTimingです。非同期または動的なページの詳細
tags:
  - Browser
  - Browser monitoring
  - Page load timing resources
metaDescription: The PageViewTiming event sends each data point separately to New Relic so you can receive first paint or first interaction data regardless of when it fires.
freshnessValidatedDate: '2024-03-27T00:00:00.000Z'
translationType: machine
---

ブラウザ モニタリングの[`PageViewTiming`イベント](/attribute-dictionary/?event=PageViewTiming)は、各データ ポイントが利用可能になるとすぐに個別のイベントとして送信します。タイミングを制限していないため、発火のタイミングに関係なく、最初のペイントまたは最初のインタラクション データを受け取ることができます。このドキュメントでは、 `PageViewTiming`とその属性を使用してサイト、コンポーネントの読み込み、およびユーザー パフォーマンス メトリックに関するデータを照会する理由と方法について、ビジュアルと応答性の両方の観点から説明します。

## PageViewTimingを使う理由は？ [#why-pageviewtiming]

非同期ページや動的ページを使用しているアプリケーションでは、サイトやコンポーネントの読み込みに関する追加情報が必要な場合があります。しかし、ページは様々な方法でコンテンツをロードすることができ、ユーザーはいつそのコンテンツとインタラクトするかをコントロールすることができます。このような理由から、ユーザー中心のパフォーマンス指標は、ブラウザエージェントの標準的なウィンドウのオンロード（ページロード時間）の外側で行われます。

例えば、ユーザーはせっかちになり、コンテンツがウェブページに表示されるとすぐにクリックし始めるかもしれません。あるいは、コンテンツが読み込まれてからしばらくしてからページの利用を始めるかもしれません。

`PageViewTiming`イベントは、他のイベントに依存しない、よりリアルタイムの配信メカニズムを提供します。追加のメトリックは、視覚的および応答性の両方の観点から、ユーザーがサイトをどのように体験するかを理解するのに役立ちます。

## Googleのコアウェブバイタルのサポート

ブラウザ監視の[エージェント バージョン 1177](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1177)では、[コアウェブバイタル](https://web.dev/vitals/#core-web-vitals)を完全にサポートしています。 この機能は、エージェントのすべてのバージョン (Lite、Pro、または Pro+SPA) で利用できます。

コアウェブバイタルを構成するメトリクスは時間の経過とともに[進化すること](https://web.dev/vitals/#evolving-web-vitals)に注意してください。 現在のセットは、ユーザー エクスペリエンスの 3 つの側面、つまり読み込み、対話性、視覚的な安定性に焦点を当てています。 これには、次のメトリクスとそれぞれの閾値が含まれます。

* <DNT>
    **[Largest contentful paint (LCP)](https://web.dev/lcp/)**
  </DNT>

  : 読み込みパフォーマンスを測定します。 良好なユーザー エクスペリエンスを提供するには、ページの最初の読み込み開始時に LCP が

  <DNT>
    **within 2.5 seconds**
  </DNT>

  発生する必要があります。

* <DNT>
    **[Interaction to next paint (INP)](https://web.dev/inp/)**
  </DNT>

  ：全ユーザーインタラクションのレイテンシをページごとに計測します。 優れたユーザー エクスペリエンスを提供するには、ページの INP が

  <DNT>
    **less than 200 milliseconds**
  </DNT>

  である必要があります。

* <DNT>
    **[Cumulative layout shift (CLS)](https://web.dev/cls/)**
  </DNT>

  : 視覚的な安定性を測定します。 優れたユーザー エクスペリエンスを提供するには、ページは

  <DNT>
    **less than 0.1**
  </DNT>

  の CLS を維持する必要があります。

これらの各メトリクスについて、ほとんどのユーザーに対して推奨ターゲットに達していることを確認するには、モバイル デバイスとデスクトップ デバイス間でセグメント化されたページ読み込みの<DNT>**75th percentile**</DNT>を測定するのが適切な閾値です。

もっと詳しく知りたい方は、 [Nerd Days talk](https://fast.wistia.net/embed/channel/nb8bpgbntl?wchannelid=nb8bpgbntl&wmediaid=n7p4x6skee) on perceived performanceをご覧ください。

## ビジュアル、インタラクティブ性、応答性の詳細な評価指標 [#interactivity-metrics]

`BrowserInteraction`イベントと`PageView`イベントは、[ページ ウィンドウの読み込み](/docs/browser/new-relic-browser/page-load-timing-resources/page-load-timing-process)(またはウィンドウの読み込みと AJAX) のタイミングを受け取ると、レポートを終了します。ただし、ペイントとインタラクティブ メトリックはいつでも発生する可能性があります。`PageViewTiming`は、これらの指標を個別のイベントとして次の目的に配信します。

* このタイミングのばらつきを考慮する。
* 任意のタイムアウトを設定することは避けてください。
* `BrowserInteraction`および`PageView`イベントを無期限に保持しないようにします。

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        追加データ
      </th>

      <th>
        コメントコメント
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `firstPaint` および `firstContentfulPaint`
      </td>

      <td>
        [`firstPaint`](/attribute-dictionary/?event=PageViewTiming&attribute=firstPaint) 属性と [`firstContentfulPaint`](/attribute-dictionary/?event=PageViewTiming&attribute=firstContentfulPaint) 属性は、 `BrowserInteraction` イベントと `PageView` イベントですでに使用可能です。ただし、ウィンドウの onload イベントが発生する前に、常に確実にキャプチャされるとは限りません。

        `PageViewTiming`を使用すると、元のページの読み込み時間後に発生した場合でも、これらの指標を取得できます。これにより、その読み込みイベントの応答性とコンテンツの視覚的なレンダリングとの相関関係をよりよく理解できます。
      </td>
    </tr>

    <tr>
      <td>
        `largestContentfulPaint`
      </td>

      <td>
        [`largestContentfulPaint`](/attribute-dictionary/?event=PageViewTiming&attribute=largestContentfulPaint)メトリクス[はエージェント バージョン 1163 以降](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1163)で使用できます。 ビューポートに表示される最大のコンテンツ要素のレンダリング時間を報告します。

        Google の調査によると、最大の要素がレンダリングされたタイミングを見ることが、ページのメインコンテンツが読み込まれて有用になったタイミングを測定するより正確な方法であることがわかりました。この指標についての制限や考慮点などの詳細は、 [w3c draft](https://wicg.github.io/largest-contentful-paint/) をご覧ください。

        また、LCP を使用した累積レイアウト シフト スコア属性も報告します。 この属性は`cumulativeLayoutShift`として報告されます。

        最大のコンテンツ ペイントは、Google が[コア ウェブ バイタル](https://web.dev/vitals/)として識別する 3 つのメトリックのうちの 1 つです。 2.5 秒までの LCP 値は「良好」とみなされ、2.5 ～ 4 秒の間は「改善が必要」とみなされ、4 秒を超えると「不良」とみなされます。
      </td>
    </tr>

    <tr>
      <td>
        `firstInteraction` および `interactionToNextPaint`
      </td>

      <td>
        [`firstInteraction`](/attribute-dictionary/?event=PageViewTiming&attribute=firstInteraction)と[`interactionToNextPaint`](/attribute-dictionary/?event=PageViewTiming&attribute=interactionToNextPaint)を追加すると、ユーザーがそのビジュアル コンテンツをどのように操作しているかをすぐに判断できます。 これらのメトリクスは、ユーザーがいつインタラクションを行ったかだけでなく、どのようなタイプのインタラクション (マウスダウン、ポインターダウンなど) や、サイトから応答を受け取るまでにどれくらいの時間がかかったかを示します。

        `interactionToNextPaint`メトリックは、 `FirstContentfulPaint`と対話までの時間 (TTI) メトリックの中間にあります。最初の入力が可能になってから、ブラウザーのメイン スレッドが対話に応答できるようになるまでの時間を測定します。

        また、ユーザーの最初のインタラクションの時点での累積レイアウト シフト (CLS) スコア属性も報告します。この属性は次のように報告されます。 `cumulativeLayoutShift.`

        INP は、Google によって[コアウェブバイタル](https://web.dev/vitals/)として特定された 3 つのメトリクスのうちの 1 つです。 200 ミリ秒以下の INP スコアは「良好」とみなされ、200 ～ 500 ミリ秒の場合は「改善が必要」とみなされ、500 ミリ秒を超えると「不良」とみなされます。
      </td>
    </tr>

    <tr>
      <td>
        `cumulativeLayoutShift`
      </td>

      <td>
        [累積レイアウト シフト (CLS) は、](https://web.dev/cls/) [エージェント v1177 以降](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1177)で使用できます。 CLS は、ユーザー エクスペリエンスが予想外にレイアウトを変更する頻度を定量化するのに役立つため、[視覚的な安定性](https://web.dev/user-centric-performance-metrics/#types-of-metrics)を測定するためのユーザー中心の重要なメトリクスです。 CLS が低いと、ページが[魅力的で](https://web.dev/user-centric-performance-metrics/#questions)あることが保証されます。

        累積レイアウトシフトは、Google が[コアウェブバイタル](https://web.dev/vitals/)として特定した 3 つのメトリクスの 1 つです。 CLS スコアが 0.1 までは「良好」とみなされ、0.1 ～ 0.25 は「改善が必要」とみなされ、0.25 を超えると「不良」とみなされます。
      </td>
    </tr>

    <tr>
      <td>
        `interactionToNextPaint`
      </td>

      <td>
        [次のペイント (INP) へのインタラクションは、](https://web.dev/inp/) [エージェント v1227 以降](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1227)で利用できます。 INP は、[実行時の応答性](https://web.dev/user-centric-performance-metrics/#types-of-metrics)とユーザーが知覚するパフォーマンスを測定するための新しいメトリクスです。 ユーザーインタラクションからページの応答または再描画までの最大レイテンシを測定します。 これは実験的ですが、 [Web Vitals](https://github.com/GoogleChrome/web-vitals) v3 で追加された重要なメトリクスです。

        200 ミリ秒までの INP スコアは「良好」と見なされ、200 ～ 500 ミリ秒の間は「改善が必要」と見なされ、500 ミリ秒を超えると「不良」と見なされます。
      </td>
    </tr>

    <tr>
      <td>
        `timingName`
      </td>

      <td>
        `firstPaint` 、 `firstContentfulPaint` 、 `firstInteraction` 、 `largestContentfulPaint` 、 `pageHide` 、 `windowUnload`など、 `timingName`属性を使用してさまざまなタイプのアクティビティを確認できます。たとえば、 `PageViewTiming`イベントには、 `firstPaint`の`timingName`と`.03`の`firstPaint`値が含まれる場合があります。イベントには、標準の`BrowserInteraction`および`PageView`イベントに含まれるすべてのデフォルト属性も含まれます。
      </td>
    </tr>

    <tr>
      <td>
        `elementId`
      </td>

      <td>
        これは、指定されている場合、 `largestContentfulPaint`要素の`Id`です。この値は、LCP メトリックでのみ報告されます。この値は`null`です。
      </td>
    </tr>

    <tr>
      <td>
        `elementSize`
      </td>

      <td>
        これは、 `largestContentfulPaint`要素の報告されたサイズです。この値は、LCP メトリックでのみ報告されます。
      </td>
    </tr>

    <tr>
      <td>
        `longTask`
      </td>

      <td>
        [エージェント v1227](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1227)から、長いタスクのレポートが利用可能になりました。 このイベントは、メイン UI スレッドを 50 ミリ秒以上ブロックするタスクを報告する実験的な [PerformanceLongTaskTiming API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming)によって観測されたエントリごとに表されます。

        注: このイベントは実験的な機能として利用できますが、そのデータは自動的に収集されません。`init`オブジェクトのフラグを使用して、ブラウザ エージェントの構成で有効にする必要があります。`init: { page_view_timing: { long_task: true } }` .

        ユーザー入力や対話の処理の遅延を防ぐために、これらのタスク [を分割して最適化する](https://web.dev/optimize-long-tasks/) ことをお勧めします。 長いタスクは、 `interactionToNextPaint`メトリックに影響を与えるか、密接に関連している可能性があります。API は現在、これらのタスクの原因に関する詳細なコンテキストを提供しておらず、複数の異なる機能で構成されている場合でも、ブラウジング フレーム内のすべての長いタスクをまとめて照合することに注意してください。
      </td>
    </tr>

    <tr>
      <td>
        `pageHide`
      </td>

      <td>
        [エージェント v1177 以降](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1177)で使用可能な`pageHide`イベントは、ドキュメントがユーザーに対して非表示になったときに送信されます。現代の慣行では、これはユーザー セッションの_潜在的な終了_を最も確実に通知します。このイベントは、発生した場合は常に`windowUnload`を伴いますが、ユーザーがタブを切り替えたときに個別に発生することもあります。その場合、アンロードは起動されません。

        また、累積レイアウト シフト (CLS) スコア属性を`pageHide`で報告します。この属性は次のように報告されます。 `cumulativeLayoutShift.`
      </td>
    </tr>

    <tr>
      <td>
        `windowLoad`
      </td>

      <td>
        `windowLoad`イベントは、 [エージェント v1177 以降](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1177)で使用できます。これは、スタイルシートや画像などのすべての依存リソースを含め、ページ全体が読み込まれたときに発生します。`windowLoad`イベントのサポート ドキュメントとブラウザの互換性については、 [MDN Web Docs サイト](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)を参照してください。

        また、累積レイアウト シフト (CLS) スコア属性を`windowLoad`で報告します。この属性は次のように報告されます。 `cumulativeLayoutShift.`
      </td>
    </tr>

    <tr>
      <td>
        `windowUnload`
      </td>

      <td>
        [エージェント v1163 以降](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1163)で使用可能な`windowUnload`イベントは、ページのアンロードが検出されたときに送信されます。現代の慣例では、これはウィンドウの pagehide イベントの発生に基づいており、ユーザーが別の場所に移動していることを意味します。

        また、累積レイアウト シフト (CLS) スコア属性を`windowUnload`で報告します。この属性は`cumulativeLayoutShift`として報告されます。
      </td>
    </tr>
  </tbody>
</table>

## 互換性と要件 [#requirements]

要件：

* Meets [installation requirements](/docs/browser/new-relic-browser/getting-started/compatibility-requirements-new-relic-browser).
* このイベントの報告には [、ブラウザ エージェント バージョン 1153 以降が](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes)必要です。

[ブラウザエージェントのリリースノート](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes) をフォローすると、新しいメトリクスがリリースされたときに知ることができます。

これらのメトリックは、次のブラウザー バージョンでサポートされています。サポートされていないブラウザの場合、 `PageViewTiming`イベントは記録されません。

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        指標
      </th>

      <th>
        対応するブラウザのバージョン
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `cumulativeLayoutShift`
      </td>

      <td>
        * クローム79

          * メトリックは安定しています。メトリックの定義の変更はこのログで報告されます。

        * クロム77

          * API 経由で公開されるメトリクス:[レイアウト](https://web.dev/cls/)[不安定性 API 経由で利用可能な累積レイアウト シフト](https://github.com/WICG/layout-instability)
      </td>
    </tr>

    <tr>
      <td>
        `firstPaint`

        `firstContentfulPaint`
      </td>

      <td>
        * デスクトップおよびモバイルのChrome 60以上（AndroidウェブビューおよびChrome for Android）
        * デスクトップ用Opera 47以上
        * Opera 44以上（Androidモバイル用
        * サムスンの携帯電話向けインターネット
      </td>
    </tr>

    <tr>
      <td>
        `largestContentfulPaint`
      </td>

      <td>
        * デスクトップおよびモバイルのChrome 77以上
      </td>
    </tr>

    <tr>
      <td>
        `interactionToNextPaint`
      </td>

      <td>
        * Chrome 96 以降

        * エッジ 96 以上

          web-vitals API ごとに、サポートは [PerformanceEventTiming.interactionId](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEventTiming/interactionId#browser_compatibility)によって決定されます。
      </td>
    </tr>

    <tr>
      <td>
        `longTask`
      </td>

      <td>
        * Chrome 58 以降

        * エッジ 79 以上

          サポートは [PerformanceLongTaskTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming#browser_compatibility)によって決定されます。
      </td>
    </tr>

    <tr>
      <td>
        `pageHide`
      </td>

      <td>
        このイベントは現在、14.1 (デスクトップ) または 14.5 (iOS) 未満の Safari を除く、ほとんどの最新のブラウザー バージョンでサポートされています。[MDN ドキュメントによる互換性マトリックス](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event#browser_compatibility)。
      </td>
    </tr>

    <tr>
      <td>
        `windowLoad`
      </td>

      <td>
        このイベントは現在、デスクトップとモバイルのすべてのブラウザーでサポートされています。[MDN ドキュメントによる互換性マトリックス](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event#Browser_compatibility)。
      </td>
    </tr>

    <tr>
      <td>
        `windowUnload`
      </td>

      <td>
        このイベントは現在、デスクトップとモバイルのすべてのブラウザーでサポートされています。[MDN ドキュメントによる互換性マトリックス](https://developer.mozilla.org/en-US/docs/Web/API/Window/pagehide_event#Browser_compatibility)。
      </td>
    </tr>
  </tbody>
</table>

## 累積レイアウトリフト [#cumulative-layout-shift]

累積レイアウト シフト (CLS) は、Web ページ上のコンテンツの安定性を測定するメトリクスです。 詳しい説明については、 [web.dev/cls を](https://web.dev/cls/)参照してください。

### CLSはどのようにしてNew Relicに取り込まれるのか

[Layout Instability API](https://developer.mozilla.org/en-US/docs/Web/API/Layout_Instability_API)によって報告されるページ レイアウトの変化は、ページの有効期間全体にわたって集計され、すべての`PageViewTiming`イベントの属性として報告され、そのイベントが発生したときの CLS 値を表します。

このモデルを使うと、ユーザーはページのさまざまな時点でのCLS値を見ることができます。たとえば、ユーザーが初めてページに触れるまでのCLS値や、ページを非表示にするまでのCLS値などです。

### 他のCLSソースとの近似性

Lighthouse は、ページが読み込まれるまでの CLS 値のみをキャプチャします。これは、開発環境またはラボ環境で役立ちます。`windowLoad` `PageViewTiming`イベントを調べることで、Lighthouse の値を概算できます。

CrUX レポートは、ページの存続期間にわたってキャプチャされた値を使用します。これは、RUM 環境での最悪のケースの変化を分析するのに役立ちます。`windowUnload` `PageViewTiming`イベントの CLS 属性を調べることで、CrUX 値を概算できます。これらの値は、サンプル セットが異なり、長期間有効な Web ページの値がどのように含まれているかが異なるため、まったく同じではありません。New Relic ブラウザー監視エージェントは、ページのアンロード時に CLS をキャプチャし、CrUX はページの存続期間全体にわたってメトリックを収集および更新します。

### CLSの集計方法

2021年7月現在、GoogleはCLS値の集計方法を更新しています。ブラウザ監視エージェントのバージョンv12xxでは、 [Evolving the CLS metric](https://web.dev/cls-web-tooling/) で説明されている方法を使用しています。

<DNT>
  **Browser monitoring agent v12xx or higher:**
</DNT>

レイアウトシフトの値はウィンドウに取り込まれます。最初のシフトと最後のシフトの間が5秒以内で、互いに1秒以内に発生したレイアウト・シフトは、同じウィンドウに含まれます。CLSスコアは、レイアウトシフト値の合計が最も大きいウィンドウのレイアウトシフト値の合計を表します。

<DNT>
  **Prior to Browser agent v12xx:**
</DNT>

CLSスコアは、そのページの寿命までに発生したすべてのレイアウトの変化の合計を表します。

## イベントデータの検索 [#insights-queries]

ここでは、イベントデータに対するいくつかのサンプルクエリをご紹介します。

<CollapserGroup>
  <Collapser
    id="percentile-time"
    title="時系列のパーセンタイル"
  >
    時系列での最初の塗料と最初の含有塗料の95パーセンタイルを表示します。

    ```
    SELECT FILTER(percentile(firstPaint, 95), where(timingName = 'firstPaint')) as 'fp', FILTER(percentile(firstContentfulPaint, 95), where(timingName = 'firstContentfulPaint')) as 'fcp' FROM PageViewTiming TIMESERIES 1 minute SINCE 1 hour ago
    ```
  </Collapser>

  <Collapser
    id="percentile-transaction"
    title="トランザクションとインタラクション別のパーセンタイル"
  >
    次に時系列にペイントするインタラクションの 95 パーセンタイルを、トランザクション名とインタラクション タイプ別にファセット化して表示します。

    ```
    SELECT percentile(interactionToNextPaint, 75) as 'INP' FROM PageViewTiming WHERE timingName = 'interactionToNextPaint' TIMESERIES 1 minute FACET browserTransactionName, interactionType SINCE 3 hours ago
    ```
  </Collapser>

  <Collapser
    id="histogram-delay"
    title="遅延時間のヒストグラム"
  >
    最初のインタラクション時間範囲ごとに次のペイント タイミングまでのインタラクションのヒストグラムを表示します。

    ```
    FROM PageViewTiming SELECT percentile(interactionToNextPaint, 75) WHERE entityGuid = ‘xyz’ FACET `pageUrl` SINCE 24 hours ago
    ```
  </Collapser>
</CollapserGroup>
