---
title: ページの読み込みパフォーマンスを改善するためのガイド
tags:
  - Observability maturity
  - Customer experience
  - Digital customer experience
  - Implementation guide
  - Core web vitals
  - Page load
  - Page render
metaDescription: Guide on how to improve page load and render metrics.
freshnessValidatedDate: never
translationType: machine
---

ページロードパフォーマンスの測定は進化し続けています。全体的なパフォーマンスとユーザーエクスペリエンスを向上させるためには、さまざまな測定基準を理解し、それらが互いにどのように関連しているかを知ることが役立ちます。

<img
  title="Page Load and Render Timings"
  alt="Page Load and Render Timings"
  src="/images/cx_diagram_page_load_render_timings.webp"
/>

以下のガイダンスに従う前に、改善しようとしている特定のページに範囲を絞ってください。最大限の効果を得るためには、頻繁にアクセスされているにもかかわらず、75パーセンタイルのユーザーのスコアが受け入れられているよりも低いページに焦点を当てます。

## ページ読み込みKPI

TTFB（Time to First Byte）をいかに改善するか。

最初のバイトまでの時間は、ナビゲーションの開始 (ユーザーがリンクをクリックする) からブラウザがサーバーから応答の最初のバイトを受信するまでの時間を測定します。75 パーセンタイルのユーザーが 1 つ以上のページで 0.5 秒を超える TTFB を経験している場合は、 [PageView](/attribute-dictionary/?dataSource=Browser+agent&event=PageView)で次の属性をクエリすることで、タイミングをさらに細分化できます。

* `backendDuration`
* `connectionSetupDuration`
* `dnsLookupDuration`
* `networkDuration`

多くの場合、レンダリング前の速度低下は、サードパーティのAPIまたはバックエンドアプリケーションのいずれかによるバックエンドの速度低下が原因で発生します。

サードパーティAPIの合成モニタリングは、運用チームと開発チームが根本原因が制御できない場合を理解するのに役立ちます。コードを制御できない場合でも、合成結果をサードパーティと共有して、顧客が何を経験しているかをサードパーティが理解できるようにすることで、結果に影響を与えることができます。

バックエンド アプリケーションがあなたまたはあなたのチームによって所有されている場合は、 <InlinePopover type="apm"/>エージェント、Pixie、または OpenTelemetry を使用してパフォーマンスを把握し、管理できます。 チーム間のコミュニケーションを容易にするために、サービスレベル管理境界を実装することをお勧めします。

## 累積レイアウトシフト（CLS）

Cumulative layout shiftは、一度読み込んだコンテンツがどれだけ移動するかを示すスコアです。CLSを改善するための一般的なヒントやコツです。

* スタイルシートのサイズを指定し、ブラウザのデフォルトのCSSでアスペクト比を制御します。
* 広告枠のスペースを静的に確保します。
* ビューポートの最上部付近には広告を表示しないでください。
* 既存のコンテンツの上に新しいコンテンツを挿入することは避けましょう。
* 埋め込みのための十分なスペースを事前に計算しておきます。

その他のリソース

* [CLS最適化に対するGoogleのアプローチ](https://web.dev/optimize-cls/)。
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) は、Googleが提供するツールで、特定のページに対して合成テストを行い、CLSを最適化する方法を含む推奨事項のリストを提供します。

## 最大のコンテンツフル・ペイント（LCP）

最大のコンテンツフルペイントは、ページレンダリングの開始から最大のコンテンツ要素をペイントするまでの差を測定します。 [web.dev](https://web.dev)によると、LCPが遅い一般的な原因：

* サーバーの応答時間が遅い
* レンダーブロッキングのJavaScriptとCSS
* リソースのロード時間が遅い
* クライアントサイドレンダリング

[ブラウザのセッショントレース情報](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle/) を使用して、最適化しようとしている特定のページに上記の一般的な原因のどれが影響しているかを理解します。

LCP改善のためのアプローチ

* CDNを利用し、キャッシュとエッジサーバーのパフォーマンスに注意してください。
* サードパーティの接続を早期に確立します。
* クリティカルではないJavascriptやCSSを遅延させる。

その他のリソース

* [LCP最適化に対するGoogleのアプローチ](https://web.dev/optimize-lcp/)。
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) は、Googleが提供するツールで、特定のページに対して合成テストを行い、CLSを最適化する方法を含む推奨事項のリストを提供します。

## 次のペイントへのインタラクション (INP) [#INP]

インタラクションから次のペイント (INP) は、ユーザーがページの存続期間中にクリック、タップ、キーボード インタラクションを介してページと対話した時間を計算します。 これは、実際のユーザーの行動に基づいて変化するフィールド メトリクス (結果はユーザーの焦りや行動のタイミングによって異なります) ですが、総ブロック時間 (TBT) を削減することで最適化できます。

そのためには、以下のことが必要です。

* ブロック化された長いタスクを分割する。
* 肥大化したJavaScriptを最適化する。
* ロジックをサーバーサイドに移動したり、ウェブワーカーを使ってバックグラウンドでスレッドを実行することを検討します。

[ブラウザのセッショントレース情報](/docs/browser/browser-monitoring/browser-pro-features/session-traces-explore-webpages-life-cycle/) を使用して、ブロッキングの間隔がどこで発生しているのか、どのくらいの時間続いているのかを把握します。

その他のリソース

* [INP 最適化に対する Google のアプローチ](https://web.dev/articles/optimize-inp)。
* [Lighthouse](https://developers.google.com/web/tools/lighthouse)は、特定のページに対して合成テストを実行し、INP を最適化する方法を含む推奨事項のリストを提供する Google のツールです。
