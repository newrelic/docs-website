---
title: レガシーエラーページ
tags:
  - APM
  - APM UI pages
  - Error analytics
metaDescription: Use APM's Errors page for detailed investigations of reported errors.
freshnessValidatedDate: never
translationType: machine
---

<DNT>**Errors**</DNT> UI を使用すると、ユーザーエクスペリエンスの低下の原因となっているコード行を確認し、問題を再現するのに十分なデータを取得して修正することができます。 そうすることで、修正が本番環境で機能していることを確認できます。

<DNT>**Errors**</DNT>タブを使用して次の操作を行います。

* イベントをグループ化およびフィルタリングして、重要なエラーに優先順位を付けます。

* エラーに関するアラート通知を受け取ります。

* スタックトレース、[ログ](#logs-context)、およびその他の詳細を確認します。

* チャートやダッシュボードでエラー情報を共有します。

* インストゥルメンテーションを使用して新しいエラーを報告し、特定のエラーが報告されないようにし、

  <DNT>
    [**expected errors**](#expected-errors)
  </DNT>

  を使用してノイズの多いエラーを除外します。

## エラープロファイル：傾向のトラブルシューティング

DevOpsの専門家がアプリのエラーの原因を追跡する必要がある場合、原因を特定するのは容易ではないかもしれません。APMのエラープロファイルは、あるイベントのセットを別のイベントと自動的に比較します。

各エラープロファイルでは、イベントの異なる値の頻度における有意な差について、視覚的な詳細が示されています。各 [属性](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute) 、エラープロファイルには以下が含まれます。

* 誤差の属性が最も乖離している値にどのように分布しているかを示す円グラフ
* エラー属性の分布を非エラーのトランザクションの分布と比較した表

これにより、アプリのエラーを解決するための推測作業が少なくなります。エラーを無視しても大丈夫なのか、それとも新しいデプロイメント、コードの編集、顧客とのコミュニケーションなどでエラーの解決を図るべきなのかを簡単に判断することができます。

## エラープロファイル属性の例 [#error-profile-attributes]

エラープロファイルにアクセスするには <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Errors > Error profiles**</DNT>

<img
  title="APM: Error profiles example"
  alt="APM: Error profiles example"
  src="/images/apm_screenshot-full_seldon-error-profiles.webp"
/>

<figcaption>
  エラープロファイルを使用して、アプリのエラーイベントの頻度の傾向や大きな違いをトラブルシューティングします。
</figcaption>

エラープロファイルは、非エラーと比較して著しく異なる特性を持つ [属性](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute) の集まりです。属性は、一連のイベントが通常のもの（たとえば、所定の時間ウィンドウのすべてのトラフィックと比較したエラー）、または類似の基準（たとえば、2つの異なるホスト）間の差異を表す場合、"異常な" 。

エラーは以下のような事象に関連している可能性があります。

* 特定の [Web トランザクション](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) の名前や [非 Web トランザクション](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) の名前、JVM スレッド名など。
* エラーメッセージやクラスなどのユニークなタイプ。
* ランダムなお客様とのやりとり：例えば、特定のエラーは1人のお客様のアカウントから発生するが、通常のトラフィックは多種多様なアカウントから発生する場合など
* 外部からの通話回数や時間
* エコシステム内のホスト間のタイミングの違い、クラスターのエージェントIDなど。
* その他のアノマリー

## エラープロファイル基準の選択 [#criteria]

New Relic は、アプリの[<DNT>**Errors**</DNT>ページ](/docs/apm/applications-menu/error-analytics/error-analytics-explore-events-behind-errors)の基準に基づいて異常な傾向を分析し、その重要度別にリストします。 選択した基準は次のとおりです:

* [タイムウィンドウ](/docs/data-analysis/user-interface-functions/view-your-data/time-picker-setting-time-periods-view-data)

* <DNT>
    **Errors**
  </DNT>

  ページフィルター

* <DNT>
    **Errors**
  </DNT>

  ページまたは

  <DNT>
    **Error profiles**
  </DNT>

  タブの検索条件

エラー プロファイルの結果を調べてさらに詳しく調べたい場合は、アプリのエラー プロファイル条件を追加または変更します。 <DNT>**Error profile**</DNT>タブが更新され、更新された条件に一致するエラーを区別する特性が表示されます。

<CollapserGroup>
  <Collapser
    id="profile-criteria-example"
    title="エラープロファイル基準の例"
  >
    アプリの<DNT>**Error profile**</DNT>タブには現在、いくつかのエラー クラスまたはメッセージが表示されています。 特定のエラー クラスまたはメッセージをフィルターするには、次のいずれかのオプションを使用します。

    * <DNT>
        **Errors**
      </DNT>

      ページのタイムピッカーから、時間の範囲を変更します。 たとえば、デフォルト (30 分) を

      <DNT>
        **Last 24 hours, ending now**
      </DNT>

      に変更します。

    * <DNT>
        **Errors**
      </DNT>

      ページのフィルターから

      <Icon name="fe-filter"/>

      セクション:

      <DNT>
        **Back to groupings list**
      </DNT>

      を選択し、他の

      <DNT>
        **Error groups**
      </DNT>

      、

      <DNT>
        **Error attributes**
      </DNT>

      、または

      <DNT>
        **Custom attributes**
      </DNT>

      を選択します。

    * <DNT>
        **Errors**
      </DNT>

      ページのフィルターから

      <Icon name="fe-filter"/>

      セクション: リスト上の特定の項目をクリックしてフィルターを絞り込みます。 たとえば、複数のエラーメッセージがリストされている場合は、興味のあるメッセージのみをクリックします。

    * <DNT>
        **Error profiles**
      </DNT>

      タブの検索から

      <Icon name="fe-search"/>

      ボックスに、 `class` 、 `message` 、またはその他の検索値を入力します。
  </Collapser>
</CollapserGroup>

## エラープロファイルの結果を分析する [#details]

アプリのエラープロファイルで属性結果の詳細を調べるには、従来のAPMビューを使用する必要があります。

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Errors**
   </DNT>

   に移動し、

   <DNT>
     **Show new view**
   </DNT>

   を切り替えて、APM が

   <DNT>
     **Errors**
   </DNT>

   ページのクラシック ビューを表示するようにします。

2. <DNT>
     **Errors**
   </DNT>

   ページから、

   <DNT>
     **Error profile**
   </DNT>

   タブを選択します。

3. <DNT>
     **Error profile**
   </DNT>

   タブから、現在選択されている[エラー プロファイル条件](#criteria)に一致するエラー属性のリストを確認します。

4. 特定の属性の詳細を表示するには、その属性をクリックします。

5. 特定のエラーの詳細を強調表示するには、円グラフのセグメントまたは表の属性の行にマウスオーバーします。

6. アプリのエラーの特定の属性を調査するには、

   <DNT>
     **Error profiles**
   </DNT>

   タブの検索ウィンドウにその名前を入力するか、現在選択されている[エラー プロファイルの条件](#criteria)を変更します。

差が大きい値を比較して、属性のエラーを区別する特徴を特定します。エラープロファイルの結果と [エラートレースの詳細](/docs/apm/applications-menu/error-analytics/error-analytics-manage-error-traces) の比較データは、追加のトラブルシューティングとエラーの解決のためにどのような手順を踏むべきかを判断するのに役立ちます。

## 誤差と非誤差の分布 [#distribution]

エラーの属性によっては、エラーの場合と非エラーの場合とで属性の分布が異なることがあります。

<CollapserGroup>
  <Collapser
    id="top"
    title="偏差値トップ"
  >
    New Relic は、アプリのエラーについて各属性を分析し、基準に合致したエラーの分布を、エラーのないトランザクションと比較します。これらのエラーの割合が、エラーのないトランザクションと比較してほぼ同じであれば、その属性にはデバッグに役立つ情報があまり含まれていません。

    New Relic では、各属性のエラープロファイルの円グラフと表で、偏差値の高いものだけを表示するように制限しています。割合がほぼ同じである場合、New Relic はエラープロファイルに含めません。
  </Collapser>

  <Collapser
    id="other"
    title="その他のカテゴリー"
  >
    最も逸脱した値の後に、エラー プロファイルは残りを<DNT>**Other**</DNT>カテゴリにグループ化します。 これにより、これらのエラーの異なる値に焦点を当てることができます。
  </Collapser>

  <Collapser
    id="no-value"
    title="価値のないカテゴリー"
  >
    値が異常に存在するか、エラーに存在しない場合は、エラー プロファイルのリストに<DNT>**No value**</DNT>カテゴリが表示されることがあります。
  </Collapser>

  <Collapser
    id="filters"
    title="フィルタ"
  >
    フィルターが選択されていない場合、プロファイルには、お客様のエラーが示す特徴的な特性が全体として表示されます。

    <DNT>**Example:**</DNT> 特定の種類のトランザクションは、トラフィック全体の 20% を占め、エラーの 80% の原因となっています。 エラー プロファイルには、 `Transaction`属性の予期しない割合が表示されます。

    [エラープロファイルの基準](#criteria) を調整して、プロファイル結果をさらに深く掘り下げることで、特定のエラーイベントのトラブルシューティングと解決をより効果的に行うことができます。
  </Collapser>
</CollapserGroup>
