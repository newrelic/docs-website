---
title: 'アプリケーションが応答しない: ANR エラーを追跡して分析する'
tags:
  - Mobile monitoring
  - Mobile monitoring UI
  - Application not responding
  - Errors
metaDescription: Use New Relic's Application Not Monitoring UI page to track and analyze ANR errors.
freshnessValidatedDate: '2024-06-24T00:00:00.000Z'
translationType: machine
---

Android[ モバイル](https://developer.android.com/topic/performance/vitals/anr) UIアプリでは、アプリケーションのメイン スレッドが 5 秒以上ブロックされると 、アプリケーション応答なし (ANR) エラーが 発生します。ANR エラーは、ネットワーク呼び出し、複雑な計算、リソースの競合など、さまざまな要因によって発生する可能性があります。 頻度と発生パターンを監視することで、アプリ全体の安定性とユーザーエクスペリエンスに関する貴重な情報を得ることができます。

## ANRエラーがNew Relicに報告される仕組み [#anr-reporting]

デフォルトでは、Android エージェントは ANR エラーを[`MobileApplicationExit`](/attribute-dictionary/?event=MobileApplicationExit)イベントとして報告します。これは、Android の[`ApplicationExitInfo` API](https://developer.android.com/reference/android/app/ApplicationExitInfo)を利用してモニターし、アプリ終了のさまざまな原因を報告します。 エージェントは、次のアプリリリースで `ApplicationExitInfo` APIを読み取り、履歴内のアプリ終了ごとに `MobileApplicationExit` イベントをNew Relicに非同期的に送信します。

### New Relic と Google Play Console 間の ANR の不一致を理解する [#new-relic-vs-google-play]

New Relic と Google Play Console の間で ANR の数とレートに違いが生じる場合があります。 これはデータ収集方法の違いによるものです。

* Android バージョン カバレッジ:

  * New Relic は、Android 11 以降を実行しているデバイスからの ANR に重点を置いています。
  * Google Play Console は、すべての Android バージョンにわたって ANR をキャプチャします。

* デバイスとアプリのスコープ:

  * New Relic は、アプリのソースに関係なく、New Relic エージェントがインストールされているデバイスからレポートします。
  * Google Play Console は、Play ストアからアプリをダウンロードした認定デバイスからのレポートのみを表示します。

詳細については、 [Google Play のドキュメント](https://developer.android.com/topic/performance/vitals)をご覧ください。

## New RelicでANRを表示する [#view-anr-in-new-relic]

デフォルトでは、Android エージェントは ANR エラーを収集し、New Relic に報告します。 ANR データは次の 2 つの場所で見つかります。

* 概要ページには、エラーの割合を表示する

  <DNT>
    **ANR rate**
  </DNT>

  というウィジェットがあります。

* ANR ページでは、エラー率の内訳、影響を受けるユーザーのグループ、属性の詳細を表示できます。

<img
  title="ANR UI page"
  alt="screenshot of ANR UI page"
  src="/images/mobile_screenshot-full_anr-ui-page.webp"
  style="float: left;"
/>

ANR ページを表示するには:

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities)**
   </DNT>

   に移動します。

2. <DNT>
     **Mobile**
   </DNT>

   をクリックします。

3. Android アプリを選択します。

4. 左側のペインで、

   <DNT>
     **ANR**
   </DNT>

   をクリックします。

### ANRグループでフィルタリング [#filter]

ANR ページのウィジェットは、ANR のグループに基づいています。 デフォルトでは、ANR は`description`属性によってグループ化されます。

<img
  title="top occurences chart"
  width="50%"
  alt="screenshot of top occurences chart"
  src="/images/mobile_screenshot-crop_group-by.webp"
  style="float: left;"
/>

ANR のグループ化方法 (デバイスの種類、アプリのバージョン、[カスタムアトリビュート](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/)など) を変更するには、 <DNT>**Group by**</DNT>をクリックして、リストから属性を選択します。 ANR ページが更新され、新しい ANR グループのデータが表示されます。

### ANRレートを監視する [#anr-rate-chart]

<DNT>**ANR rate**</DNT>グラフでは、ANR 全般に予期しない急上昇、急降下、パターンがあるかどうかを一目で確認できます。

たとえば、最近のアプリ バージョンをリリースした場合、ANR 率グラフには、時間の経過とともにエラーが発生したセッションの割合が、すべてのセッションの割合としてアプリ バージョン別に表示されます。 平均 ANR セッション パーセントは右上に表示されます。

<img
  title="anr rate chart"
  alt="screenshot of anr rate chart"
  src="/images/mobile_screenshot-crop_anr-rate-chart.webp"
  style="float: left;"
  width="60%"
/>

<DNT>**ANR rate by day**</DNT>グラフには、時間の経過とともに ANR を経験したユニーク ユーザーの割合が、すべてのユニーク ユーザーの割合として表示されます。

注: 選択した時間に関係なく、このグラフには過去 28 日間の平均 ANR 率が表示されます。

### ANR の発生を重要度別に表示する [#anr-occurences]

<DNT>**ANR occurrences by importance**</DNT>グラフは、ANR による終了前のアプリのプロセスの相対的な重要度による ANR の分布を示しています。 アプリのプロセスの重要性の詳細については、[こちらを](https://developer.android.com/reference/android/app/ApplicationExitInfo#getImportance)ご覧ください。

<img
  title="anr occurrences by importance"
  alt="screenshot of anrs by importance"
  src="/images/mobile_screenshot-crop_anr-occurences-by-importance.webp"
  style="float: left;"
/>

### ANRプロファイルを詳しく見る [#anr-profiles]

ANR プロファイルは、すべての ANR 発生における属性の分布を示し、パターンを特定して根本原因を迅速に絞り込み、トラブルシューティングするのに役立ちます。

<img
  title="anr profiles"
  alt="screenshot of anr profiles"
  src="/images/mobile_screenshot-crop_anr-profiles.webp"
  style="float: left;"
/>

## ANR監視を無効にする [#disable-anr-monitoring]

<Callout variant="important">
  サーバーサイド構成は常にローカルエージェント設定よりも優先されます。 同時にアクティブなデバイスが 100,000 台未満のモバイル アプリの場合、エンドユーザーのデバイスに変更を適用するまでに最大 10 分かかることがあります。 アクティブデバイスが 100,000 台を超えるアプリの場合、数時間かかることがあります。
</Callout>

ANR監視を無効にする必要がある場合:

1. New Relic で、モバイル アプリに移動します。

2. 左側のペインの

   <DNT>
     **Settings**
   </DNT>

   の下で、

   <DNT>
     **Application**
   </DNT>

   をクリックします。

3. **Application Not Responding (ANR)** \[アプリケーション応答なし (ANR) を]オフに切り替えます。

4. クリック **保存**.

<img
  title="ANR setting toggle"
  alt="Screenshot of the ANR setting"
  src="/images/mobile_screenshot-crop_anr-setting-toggle.webp"
  style="float: left;"
/>
