---
title: SPAのデータ収集
tags:
  - Browser
  - Single page app monitoring
  - Use SPA data
metaDescription: How browser stores data from an app that uses a single-page app (SPA) architecture.
freshnessValidatedDate: never
translationType: machine
---

このドキュメントでは、ブラウザが非同期シングルページアプリ（SPA）のデータをどのように収集・保存するかを説明します。これにより、ブラウザの UI に表示される [SPA データについての理解が深まります。また、 ](/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser)[SPA API](/docs/browser/single-page-app-monitoring/use-spa-data/use-spa-api) を使用して、より簡単にカスタム モニタリングを追加できるようになります。

## ブラウザのインタラクション [#browser-interaction]

SPA 監視 の中心となるのは<DNT>**browser interaction**</DNT>の概念です。 New Relic browserを、アプリ ユーザーのbrowserで発生するすべてのイベントと定義しています。例えば：

* ページの読み込みや経路の変更につながるユーザーの操作のこと。
* アプリのウィジェットを定期的かつ動的に更新する

ブラウザのインタラクションには、最初のトリガーとなるイベントだけでなく、AJAXリクエストや同期および非同期のJavaScriptなど、そのイベントによって引き起こされるアクティビティも含まれます。ブラウザインタラクションの原因だけでなく、その影響も追跡することで、ユーザーがアプリケーションのビューやルート変更をどのように体験しているかを把握することができます。

すべてのアプリケーションはそれぞれ異なり、モニタリングのニーズも異なります。そのため、デフォルトのモニタリングに加えて、任意のブラウザのインタラクションに対してカスタムモニタリングを設定できる機能も備えています。

## SPAデータレポートの種類 [#spa-data]

シングルページアプリのデータは、大きく分けて3つのカテゴリーでNew Relicに報告することができます。

* 初期のページロード
* ルート変更
* [SPA API](/docs/browser/single-page-app-monitoring/use-spa-data/use-spa-api)を介して作成されたカスタム ブラウザー インタラクション

これらはそれぞれ`BrowserInteraction`イベントを作成します。1 つ以上の AJAX リクエストがインタラクションの一部である場合、関連する`AjaxRequest`イベントも作成されます。これらのイベントとその属性は、 [クエリ ビルダー](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-specify-data)でクエリできます。

## 初期のページロード

<DNT>**initial page load**</DNT>は、URL の完全な読み込みまたは再読み込みによって発生する従来の URL 変更です。 これは、ページ読み込みイベントが発生したときにbrowserに表示されます (`window.onload` イベント)。 最初のページの読み込みは[、ブラウザ UI](/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser)のルート変更とともに表示されます。

## ルート変更

SPA ユーザーは、ページの読み込みと同様に動的なルート変更を体験します。 通常、サイトやアプリの訪問者は、新しいビューが配信されたか<DNT>**how**</DNT>を気にしません。アクションを実行すると新しいビューが表示されることだけを知っています。 このため、ルートの変更は UI でのページの読み込みと同様に扱われます。

シングルページアプリケーションを最適に監視するために、理論的にはルート変更につながる可能性のある多くのブラウザのインタラクションの監視を開始します。

* これらのインタラクションが **ルートの変更につながらない場合、ブラウザはモニタリングを開始しますが、その後、それらを破棄します。**
* \*\*\* これらのインタラクション

  <DNT>
    **do**
  </DNT>

  がルート変更につながる場合、 browser同期アクティビティと非同期アクティビティの両方に関する情報を含むインタラクション シーケンスを `BrowserInteraction` イベントとして保存します。\*\*

\*_次のいずれかが発生した場合、インタラクションはルート変更と見なされ、 `BrowserInteraction`イベントとして保存されます。_ URL ハッシュが変更されます (通常は`window.location.hash`を使用)。

* `popstate`イベントは、インタラクションに関連付けられたコールバック中に発生します。
* `pushState`または`replaceState` API が呼び出されました。ルートの変更は、 [ブラウザUI](/docs/browser/single-page-app-monitoring/browser-ui/view-spa-data-new-relic-browser) の最初のページロードとともに表示されます。ルート変更のURLからハッシュフラグメントを受け取り、保存します。ハッシュを使用してプライベートなデータや機密データを渡している場合、そのデータは New Relic アカウントのユーザーから見える可能性があります。データの収集とレポートについての詳細は、 [ブラウザのセキュリティ](/docs/browser/new-relic-browser/performance-quality/security-new-relic-browser) をご覧ください。## カスタムモニタリング [#api-custom-events][SPA API](/docs/browser/new-relic-browser/browser-agent-spa-api) を使用すると、デフォルトでは監視されないブラウザ インタラクションのカスタム監視を設定できます。また、この API を使用して、デフォルトの監視を無効にすることもできます。カスタム イベントは`BrowserInteraction`イベントとして保存され、次の属性があります:\* `category`属性の値は`Custom`になります。
* `trigger`属性の値は`api`になります。(これはデフォルト値ですが、API で変更できます。)## 従来のページロードタイミングとの違い [#page-load-timing-diff]シングルページアプリのモニタリングに最適なデータを提供するために，ページロードのタイミングを新しい方法で測定しました．これにより、新しいビューに必要な変更を完了するのにかかる時間をより詳細に表現することができます。これは、ページ読み込みタイミングの従来の方法とは異なります。[従来のページ読み込みタイミング](/docs/browser/new-relic-browser/page-load-timing-resources/page-load-timing-process)では、 `window.onload`イベントの発生を使用して、ページがいつ読み込まれるかを判断します。これは、ビュー変更のタイミングを測定する最適な方法ではありません。Web アプリには、 `window.onload`イベントの発生後、かなりの時間実行される非同期コードが含まれていることが多いためです。<Callout variant="tip">
  browserの標準の非 SPA <DNT>**Page views**</DNT> ページには、SPA 監視が有効になっているときとは異なるページロードタイムが表示されます。 SPA 監視はすべての非同期アクティビティを測定するため、SPA のロード時間は通常、標準のページロード時間よりも長くなります。
  </Callout>従来の`window.onload`ページの読み込みタイミングは、SPA <DNT>**Page views**</DNT>ページに引き続き表示されます。 特定のページロードイベントを選択すると、ページロードタイムチャートに<DNT>**Window onload**</DNT>赤い線で表示されます。 <DNT>**Switch to standard page views**</DNT>を選択すると、従来の読み込みタイミング表示に戻ることもできます。## タイマー [#spa-timers]エージェントは、タイマーを含むすべての非同期呼び出しを監視します。持続時間が1秒未満のタイマーはラップされます。1秒以上のタイマーはラップされません。なぜなら、通常、これらのタイマーは、 [非ウェブ・トランザクション](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) 、ユーザー・インタラクションとは無関係なバックグラウンド・ワークやポーリングなどのために使用されるからです。## イベントと属性 [#event-data-structure]ルートの変更とページの読み込みにつながるブラウザ インタラクションを`BrowserInteraction`イベントとして保存し、AJAX リクエストを`AjaxRequest`イベントとして保存します。これらのイベントは、 [クエリ ビルダー](/docs/query-your-data/explore-query-data/query-builder/use-advanced-nrql-mode-specify-data)でクエリできます。\*\*
