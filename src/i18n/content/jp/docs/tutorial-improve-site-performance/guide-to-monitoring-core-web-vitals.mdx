---
title: ウェブ上の重要な要素を監視する
tags:
  - Browser
  - Browser monitoring
  - Guides
metaDescription: A guide to monitor Google's core web vitals.
freshnessValidatedDate: '2024-03-21T00:00:00.000Z'
translationType: machine
---

コア ウェブ バイタルは、全体的なユーザー エクスペリエンスを評価する Google の指標です。これらは、ユーザーがあなたのビジネスをどのように見ているかについての貴重な洞察を提供し、サイトの SEO ランキングに影響を与える可能性があります。ユーザー エクスペリエンスを把握するスコアを取得することで、サイトが何を必要としているかを推測するのではなく、特定の問題に対してアクションを起こすことができます。

## 目的 [#objectives]

このチュートリアルでは、New Relic を使用して Web の重要な要素を分析する方法を説明します。チュートリアルが終わるまでに、次のタスクが完了します。

* New Relicでコアウェブバイタルを見つけてください。
* Web の重要な要素がサイトのパフォーマンスにどのように反映されるかを理解します。
* New Relic データを調査して、スコアに寄与しているものを特定します。

## コアウェブバイタルについて知る [#learn]

Google は、ウェブサイト全体のパフォーマンスを次の 3 つのメトリクスで測定します。

* [最大コンテンツフル ペイント](https://web.dev/articles/lcp)(LCP): ページのメイン コンテンツの読み込みにかかる時間。 たとえば、LCP が遅い Web ページにアクセスしたユーザーには、コンテンツが表示される前に数秒間空白の画面が表示されることがあります。
* [インタラクションから次のペイントまで](https://web.dev/articles/inp)(INP): ページがユーザーのインタラクションに応答するまでにかかる時間。 たとえば、ユーザーがボタンをクリックした場合、INP はクリックしてから次のページが開くまでにかかる時間を測定します。 INP が高い場合は、Web ページのエクスペリエンスが遅く応答しないことを反映しており、ユーザー エンゲージメントが妨げられます。
* [累積レイアウト シフト](https://web.dev/articles/cls)(CLS): 読み込み中にページ上で予期しないレイアウト シフトが発生する頻度。 たとえば、ユーザーがボタンをクリックしようとすると、コンテンツが画面上の新しい場所にジャンプしてしまい、誤って別のものをクリックしてしまう可能性があります。 CLS が高いと、Web ページがぎこちなく感じられ、操作が困難になることがあります。

各ウェブ バイタルには、アプリのパフォーマンスと SEO を追跡するのに役立つ次のしきい値があります。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}/>

      <th style={{ width: "200px" }}>
        良い
      </th>

      <th style={{ width: "275px" }}>
        改善が必要
      </th>

      <th style={{ width: "200px" }}>
        悪い
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Largest contentful paint**
        </DNT>
      </td>

      <td>
        2.5秒以内
      </td>

      <td>
        2.5秒から4秒の間
      </td>

      <td>
        4秒以上
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Interaction to next paint**
        </DNT>
      </td>

      <td>
        200ミリ秒未満
      </td>

      <td>
        200 ～ 500 ミリ秒
      </td>

      <td>
        500ミリ秒を超える
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Cumulative layout shift**
        </DNT>
      </td>

      <td>
        0.1未満
      </td>

      <td>
        0.1～0.25の間
      </td>

      <td>
        0.25以上
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="tip">
  ### CLS スコアはどのように計算されますか?

  累積レイアウト シフト スコアは 0 から無限大までの単位のない値であり、他のコアウェブバイタルのような時間ベースの測定ではありません。 これは、Web ページの読み込みプロセス中に発生する予期しないレイアウトの変更の影響の合計を反映しています。 CLS スコアの計算方法は次のとおりです。

  * レイアウト シフト スコア: これは 2 つの要素を考慮します。

    * シフトされたビューポートの割合: ページ (ビューポート) の表示領域のどの程度がレイアウトのシフトによって影響を受けるか。
    * コンテンツの移動距離: 移動された要素が元の位置からどれだけ離れているか。

  * 複数のレイアウト シフト: CLS スコアでは、短い時間枠 (セッション ウィンドウ) 内に発生するすべてのレイアウト シフトが考慮されます。 最大のセッション ウィンドウのスコアが最終的な CLS 値になります。
</Callout>

<DNT>**Good**</DNT> Web Vitals は、組織のコスト削減と SEO の向上に役立ちます。 <DNT>**Poor**</DNT>または<DNT>**Needs improvement**</DNT> 、組織に対するユーザーの否定的な認識を反映している可能性があり、顧客の不満やビジネス チャンスの損失につながる可能性があります。

New Relic は、Google の[`web-vitals` API ライブラリ](https://github.com/GoogleChrome/web-vitals)を活用して、追加の計算を行うことなく、生の状態で Web バイタルを収集します。 コアウェブバイタルが重要な理由とその計算方法の詳細については、web.dev の記事[「ユーザー中心のパフォーマンス メトリクス」を](https://web.dev/articles/user-centric-performance-metrics)参照してください。

## New Relic で Web の重要な要素を見つける [#view-data-in-nr]

コアウェブバイタルは多くのNew Relic機能に組み込まれていますが、Web バイタルを高レベルで表示する最良の方法は次のとおりです。

1. <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser**</DNT>に移動します。

2. アプリを選択します。

3. 左側のメニューから<DNT>**Web vitals**</DNT>をクリックします。

   **Web Vitals**ページには、Web サイト全体の Web Vital の平均が表示されます。 このビューから、特定のページまたはメトリクスにドリルダウンして、何がスコアに影響を与えているかを確認できます。

   <img
     title="Track core web vitals site-wide, favorite key webpages, and filter by time period."
     alt="overview of the web vitals page"
     src="/images/browser_screenshot-full_web-vitals.gif"
   />

### 特定のページにドリルダウンする [#drill-down]

インサイトを重要なページ (e コマースのチェックアウト ページなど) に含める場合は、 <DNT>**Page URL**</DNT>テーブルで見つけます。 コアウェブバイタルに寄与しているものの詳細が表示され、エンドユーザーがサイトのこれらの領域をどのように体験しているかを理解するために使用できます。 たとえば、Chrome ブラウザのパフォーマンス低下のパターンに気付いた場合は、そのユーザー ベースに対する今後の改善策を厳選できます。

<img
  title="Click on a page URL to see page-specific web vitals."
  alt="Click on a page URL to see page-specific web vitals."
  src="/images/browser_screenshot-full_page-url-view.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Monitor > Web vitals > (click on a page URL)**</DNT>: 最も影響力のある Web ページのコアバイウェブタルの内訳を表示します。
</figcaption>

### 主要な属性によるフィルタリング [#key-attributes]

バックエンドの変更やパフォーマンスの問題がコアウェブバイタルにどのような影響を与えたかなど、特定のことを調査したい場合は、 <DNT>**Filter by**</DNT>ツールを使用して主要な属性をフィルタリングできます。

<img
  title="Use the filter tool to filter core web vitals by key attributes"
  alt="Filter by key attributes"
  src="/images/browser_screenshot-full_filtered-web-vitals.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Browser > (select an app) > Monitor > Web vitals > (add filters)**</DNT>: フィルタ ツールを使用して、主要な属性によってコアウェブバイタルをフィルタリングします。
</figcaption>

ほぼすべてのキー属性でフィルタリングできますが、役に立つ例をいくつか読んでください。

<CollapserGroup>
  <Collapser
    id="device"
    title="デバイスの種類別"
  >
    デスクトップとモバイルのパフォーマンスを比較し、コアウェブバイタルが 2 つのプラットフォームでどのように異なるかを比較したいとします。 <DNT>**Web vitals**</DNT>でこれを調査するには:

    1. <DNT>
         **Filter by**
       </DNT>

       フィールドで、

       <DNT>
         **Attribute**
       </DNT>

       `deviceType`に、

       <DNT>
         **Value**
       </DNT>

       `desktop`に設定します。

    2. 重複したbrowserで、

       <DNT>
         **Attribute**
       </DNT>

       を `deviceType` に、

       <DNT>
         **Value**
       </DNT>

       を `mobile` に設定し、結果を比較します。
  </Collapser>

  <Collapser
    id="user-info"
    title="ユーザー情報別"
  >
    11 月 1 日の午後 12 時ごろ、エンドユーザーがサイトのチェックアウト ページでパフォーマンスの問題を報告したとします。このユーザーに何が起こったのかを確認したいとします。 <DNT>**Web vitals**</DNT>でこれを調査するには:

    1. 時間範囲を 11 月 1 日の午前 11 時から午後 1 時までに設定します。

    2. <DNT>
         **Page URL**
       </DNT>

       テーブルで、チェックアウト ページの URL をクリックします。

    3. <DNT>
         **Filter by**
       </DNT>

       フィールドで、

       <DNT>
         **Attribute**
       </DNT>

       `userID`に、

       <DNT>
         **Value**
       </DNT>

       `user ID`に設定します。

       <Callout
         variant="tip"
         title="ユーザーIDについて"
       >
         `userID` は、 [ブラウザの SPA API](/docs/browser/new-relic-browser/browser-agent-spa-api/setcustomattribute-browser-agent-api/)を使用して設定する必要があるカスタム属性です。`userID`が利用できない場合は、 `username`や`session`などの他のユーザー情報でフィルタリングすることもできます。
       </Callout>
  </Collapser>

  <Collapser
    id="resource"
    title="リソース別"
  >
    たとえば、あなたの組織が最近、11 月 10 日午前 8 時にサイトのホームページの画像を更新し、その変更がコアウェブバイタルに影響を与えたかどうかを確認したいとします。 <DNT>**Web vitals**</DNT>でこれを調査するには:

    1. 時間範囲を 11 月 10 日の午前 7 時から午前 9 時までに設定します。

    2. <DNT>
         **Page URL**
       </DNT>

       テーブルで、ホームページ URL をクリックします。

    3. <DNT>
         **Filter by**
       </DNT>

       フィールドで、

       <DNT>
         **Attribute**
       </DNT>

       `elementTagName`に、

       <DNT>
         **Value**
       </DNT>

       `IMG`に設定します。
  </Collapser>
</CollapserGroup>

## セッショントレースでより多くのコンテキストを取得 [#session-traces]

New Relic は、特定のページ上のユーザーのセッションに関するデータをキャプチャします。セッション トレースはランダムにサンプリングされ、ユーザーがページ読み込みタイミングの問題、JavaScript イベント、その他のエラーをどのように経験したかを確認できます。

<img
  title="Session traces in the New Relic UI"
  alt="Session traces in Browser UI lets you look at real user sessions for a given page"
  src="/images/browser_screenshot-crop_session-traces.gif"
/>

セッション トレースを使用して、さまざまなユーザー セッションにわたるパターンを見つけることをお勧めします。コアの Web Vitals スコアの 1 つを改善できる場合、オプションの 1 つは、セッション トレースを調べて、さまざまなユーザー セッション間でどのような共通属性が共有されているかを確認することです。セッション トレースがサイトの改善にどのように役立つかを示す例を次に示します。

1. <DNT>
     **Web vitals**
   </DNT>

   タブで、パフォーマンスが低下しているページをクリックします。 上の画像を例として使用すると、サイトの全体的な LCP スコアは良好ですが、個々のページの一部には改善が必要であることがわかります。

2. <DNT>
     **Web vitals**
   </DNT>

   ページの

   <DNT>
     **Page URLs**
   </DNT>

   セクションを見ると、ホームページ URL の LCP スコアが 4 秒を超えていることがわかります。 これはすべてのユーザーに影響するエラーによるものですか、それとも 1 種類のユーザーのみに影響するものですか? たとえば、特定のバージョンの Chrome または特定の OS を使用しているユーザーでページロードタイムが遅いことに気付いた場合、問題の特定の原因をより適切にトラブルシューティングできます。

3. トラブルシューティングする URL をクリックすると、新しいウィンドウが表示されます。 LCP スコアがサイト全体の LCP スコアよりもはるかに高いことに気づきました。 このページの下部にある

   <DNT>
     **Session traces**
   </DNT>

   セクションまでスクロールすると、実際のユーザー セッションのさまざまなサンプルが表示されます。 これらのセッションでは、ユーザーが AJAX リクエスト、DOM 読み込みに関連する問題、JavaScript イベント、またはその他のエラーをどのように経験したかについて、より詳細な情報を得ることができます。

ランダム化されたセッションからのデータは、Web ページとの数百または数千のユーザー操作全体のパターンを見つけるのに役立ちます。このランダムに選択されたデータにパターンが現れた場合、問題を解決するための計画によってページ スコアが向上するという確信が持てます。

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-improve-site-performance/fixing-high-latency","title":"次のステップ","body":"サービス全体のレイテンシーの問題を見つける"}}
  previousStep={{"path":"/docs/tutorial-improve-site-performance/improve-website-performance","title":"一つ前の手順","body":"サイトを計測する"}}
/>
