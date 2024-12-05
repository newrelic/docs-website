---
title: ナビゲーション開始時刻不明
tags:
  - Browser
  - Browser monitoring
  - Page load timing resources
metaDescription: How New Relic's browser monitoring handles navigation start time when the navigation timing API is unavailable.
freshnessValidatedDate: never
translationType: machine
---

<Callout variant="important">
  ブラウザ エージェント バージョン 1220 以降では、 [セッション Cookie の使用は廃止された](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1220/#removed-3rd-party-cookies)ため、この情報は、ブラウザ エージェント バージョン 1216 以前を使用している場合にのみ関連します。
</Callout>

ブラウザがページ読み込みのタイミングに[ナビゲーション タイミング API](/docs/browser/new-relic-browser/browser-agent-apis/navigation-timing-api)を使用しない場合、ブラウザは Cookie を使用してナビゲーションの開始時間を決定します。 ユーザーがページ ロード タイミングのないサイトからページ ロード タイミングのあるサイト<DNT>**with**</DNT> (たとえば、ページ ロード タイミングが有効なサイトの最初のページ) に移動する場合、ナビゲーション開始時間に関する特別な考慮事項が発生します。

## ネットワークの見積もり [#network]

ページ ロード タイミング JavaScript ユーティリティ ファイルは、ユーザーがページを離れたとき (ブラウザに応じて、イベント`beforeunload`または`pagehide`をフックすることによって) のナビゲーション開始時刻で Cookie を作成します。ただし、ページ読み込みタイミングが有効になっていないサイトから移動すると、JavaScript コードが存在せず、Cookie は作成されません。次に、ユーザーがサイトの最初のページにアクセスしたときに、Cookie がないため、ナビゲーションの開始時刻を特定できません。

この場合、Browseragent にはすべてのデータ (キュー時間、アプリ時間、 DOMコンテンツ、レンダリング時間) <DNT>**except**</DNT> ネットワーク時間が含まれます。 ネットワーク時間を計算するには、ナビゲーション開始時間が必要です。 ページ読み込みタイミング機能は、データを破棄するのではなく、地域別にアプリケーションの最近蓄積された平均に基づいてネットワーク時間を推定します。 この方法により、ページ読み込みタイミング機能により、より正確なスループット測定が提供され、残りのデータは保持されます。

これは、直帰率（ユーザーが1ページしか訪れないこと）が高いサイトでは特に重要です。異なる地域からの訪問者が多ければ多いほど、ネットワーク推定値はより正確になります。

## ネットワークの見積もりができない [#network-na]

お客様のアプリケーションおよびヒットが発生した地域のネットワーク推定値が得られない場合、ページロードタイミングプロセスは、その地域のすべてのレポートアプリケーションを対象としたネットワーク推定値に戻します。それができない場合、データは破棄されます。

<DNT>**Note:**</DNT> Navigation Timing APIを備えたブラウザの場合、Cookie を使用せずにナビゲーション開始時刻を決定できるため、これは問題になりません。
