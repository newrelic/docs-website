---
title: '処理された例外: 傾向の分析、クラッシュの防止、発生の調査'
tags:
  - Mobile monitoring
  - Mobile monitoring UI
  - Crashes
metaDescription: 'Use the handled exceptions UI to analyze major factors contributing to poor mobile app experience, and use filterable data to find a resolution.'
freshnessValidatedDate: never
translationType: machine
---

処理された例外の監視機能は、モバイル アプリケーションのエクスペリエンスを低下させる重要な要因を特定し、フィルター可能なデータを使用して解決策をより迅速に見つけるのに役立ちます。また、 [Handled Exceptions API](#hex-api) を使用して送信するデータをカスタマイズし、NRQL を使用してデータのクエリと共有を行うこともできます。

<img
  title="Mobile Handled Exceptions"
  alt="Mobile Handled Exceptions"
  src="/images/mobile_screenshot-full_handled-exceptions-summary.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> グラフや表の豊富なデータを調べる際には、グループとフィルターを使用して、モバイル アプリの例外の根本原因を特定するのに役立つパターンを見つけます。
</figcaption>

## 特徴

発生した例外を処理すると、モバイル アプリのユーザー エクスペリエンスが向上しますが、例外をキャッチするだけでは不十分です。それらを防ぐ方法も知っておく必要があります。処理された例外機能は、次のような質問に答えるのに役立ちます。

* 処理された例外の種類はいくつ発生していますか?発生率が高い場合は、バックエンド システムに変更を加える必要があることを示している可能性があります。
* なぜユーザーのアプリ使用でトライ/キャッチが発生するのか？例外が発生する背景は何ですか？
* 処理された例外に対するテスト環境の反応は、どのような場合に、より深刻な問題を示唆するのでしょうか？
* 実稼働環境で例外がキャッチされなかった場合、クラッシュの原因は何でしたか?他に (コードまたはバックエンド API で) まだユーザー エクスペリエンスに影響を与えているものはありますか?

処理された例外を使用することで、この種の問題をより迅速に特定し、解決することができます。

## 要件

処理された例外データを表示するには、アプリが次の要件を満たしている必要があります。

* <DNT>
    **Android:**
  </DNT>

  [Android エージェント バージョン 5.15.0 以上](/docs/release-notes/mobile-release-notes/android-release-notes)

* <DNT>
    **iOS:**
  </DNT>

  [iOS エージェント バージョン 5.15.0 以上](/docs/release-notes/mobile-release-notes/ios-release-notes)

## 例外的なパーセントチャート [#percentage-charts]

まず、 <DNT>**Users affected**</DNT>と<DNT>**Sessions affected**</DNT>パーセンテージ チャートから始めて、予期しない急上昇、急降下、または例外的なパターンが全般的にないか確認します。 <DNT>**Users affected**</DNT>グラフが空の場合は、選択した期間中にユーザー セッションがなかったことを意味します。

これを使用して、次のような質問に答えます。

* 最近のバージョンリリースの近くにスパイクはありますか？
* ユーザーの割合が例外的に大きく影響を受けた時期はありますか？
* 何事もない時期はありますか？

データをさらに詳しく調べるには、任意のグラフの下で[<DNT>**Expand chart**</DNT>](#top5-image)を選択します。

<CollapserGroup>
  <Collapser
    id="percentage-charts-image"
    title="例外的なパーセントチャートの例"
  >
    <img
      title="Mobile Handled Exceptions: Percentage charts"
      alt="Mobile Handled Exceptions: Percentage charts"
      src="/images/mobile_screenshot-full_handled-exception-percentages.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> パーセンテージ チャートは、予期しない急上昇、急降下、または例外のあるパターンを全般的にすばやく確認するのに役立ちます。
    </figcaption>
  </Collapser>
</CollapserGroup>

## グループとフィルター [#groups-filters]

グループとフィルターを使用して、クラッシュ、デバイス、場所、またはその他のカスタム属性の属性をより詳細に調べます。グループを選択してから、特定のデータにフィルターをかけることができます。これを使用して、次のようなことを行います。

* 例外の場所（デフォルト）、原因、アプリのビルドまたはバージョン、デバイス、接続、またはその他のカスタム属性によってリストをグループ化できます。これにより、例外のパターンを発見し、根本的な原因を特定することができます。

* [タイム ピッカーを](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) 使用して、現在選択されている期間を調整します。

* 特定の

  <DNT>
    **Version**
  </DNT>

  または 1 つ以上の属性

  <DNT>
    **Filter**
  </DNT>

  ( `appVersion` 、 `exceptionLocationMethod` 、 `lastInteraction`など)、あるいは標準およびカスタムアトリビュートの[長いリスト](/docs/insights/insights-data-sources/default-data/mobile-events-attributes)のいずれかでフィルタリングします。

現在選択されているフィルターは、UIページの上部に表示されます。これらを閉じたり、他のフィルターを追加したり、他のグループやフィルターを選択することができます。

<CollapserGroup>
  <Collapser
    id="groups-filters-image"
    title="グループとフィルターの例"
  >
    <img
      title="Mobile Handled Exceptions: Groups and filters"
      alt="Mobile Handled Exceptions: Groups and filters"
      src="/images/mobile_screenshot-full_handled-exception-groups.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> 最も重要な属性ごとにデータをグループ化し、例外の背後にある特定の原因を特定するために 1 つ以上のフィルターを選択します。
    </figcaption>
  </Collapser>
</CollapserGroup>

## トップ例外のロケーション [#top5-exceptions]

<DNT>**Top exception locations**</DNT>テーブルを使用して[、グループとフィルター](#groups-filters)から選択した例外のタイプのパターンを検索または並べ替えます。 これも：

* スタックトレースの繰り返しの位置
* モバイルアプリ版
* 発生回数
* [選択した期間](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker)中に影響を受けたユーザーの数

たとえば、 `Exception Message`でグループ化し、 `timeout`メッセージにフィルターをかけ、テーブルから個々のタイムアウトの場所を選択して、スタック トレース スレッドと各発生の詳細を確認できます。

* その他の属性でフィルタリングやグループ化を行うには、テーブルの検索ウィンドウを使用するか、利用可能なフィルタを選択します。例えば、オカレンスのタイプ、デバイス、特定の場所、または任意のカスタム属性でフィルタリングします。
* 他の履歴パターンを探すには、選択した期間を変更します。

<CollapserGroup>
  <Collapser
    id="top-image"
    title="上位の例外場所の例"
  >
    <img
      title="Mobile Handled Exceptions: Top locations"
      alt="Mobile Handled Exceptions: Top locations"
      src="/images/mobile_screenshot-full_handled-exception-locations.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions:**</DNT> この例では、 <DNT>**Expand chart**</DNT>ボタンとクエリ ビルダーへのリンクが表示され、クエリの実行、ダッシュボードの作成、処理された例外データの共有を行うことができます。
    </figcaption>
  </Collapser>
</CollapserGroup>

## クエリビルダーのリンク [#insights]

<DNT>**Handled exceptions**</DNT> チャートは、モバイル イベント ( [`MobileHandledException`](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#mobilehandledexception-attributes)を含む) のデフォルトの属性と、このイベント タイプに追加したカスタム アトリビュートを使用します。 グラフの上にマウスを置くと、グラフの下に[直接リンクが](#top5-image)表示されます。 クエリビルダーへのこれらのリンクを使用すると、モバイル アプリのデータをさらに詳細に分析できます。

* <DNT>
    **View query**
  </DNT>

  リンク: チャート データの計算に使用される[NRQL クエリ](/docs/insights/new-relic-insights/using-new-relic-query-language/using-nrql)を表示します。

* <DNT>
    **View in query builder**
  </DNT>

  リンク: [チャートを表示し](/docs/insights/new-relic-insights/using-insights-interface/query-page-creating-editing-nrql-queries)、他のユーザーと共有します。

## エクセプション・ロケーション・テーブル [#locations-table]

<DNT>**Exception locations**</DNT>表はグラフを補足します。 スタックトレース スレッド内で処理された例外の上位 5 つがどこに表示されるかをリストし、関連する詳細へのリンクを示します。 各行は、次のような質問に対する答えを見つけるのに役立ちます。

* この例外は、選択した [の期間内に何件発生したのか](#time-period)?
* 特定のアプリバージョンでは、影響を受けるユーザーの数が多い（または少ない）のですか？
* 発生回数が最も少ない例外はどれですか？

並べ替え順序やフィルター オプションを変更して、自分やチームにとって最も重要な例外の種類だけに焦点を当てることができます。 例外の[発生ごとに追加のスレッド詳細](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/handled-exceptions-occurrences)を表示するには、 <DNT>**Top exceptions location**</DNT>テーブルからレコードを選択します。

<CollapserGroup>
  <Collapser
    id="table-image"
    title="エクセプション・ロケーション・テーブルの例"
  >
    <img
      title="Mobile Handled Exceptions: Locations table"
      alt="Mobile Handled Exceptions: Locations table"
      src="/images/mobile_screenshot-full_handled-exception-location-example.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions > (click on an exception):**</DNT> 処理された例外の<DNT>**Occurrences**</DNT>ページに進むには、テーブル上の任意の行を選択します。
    </figcaption>
  </Collapser>
</CollapserGroup>

## 処理例外発生内容 [#hex-occurrences]

処理された例外の発生ごとに詳細を表示するには、次のようにします。

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions**
   </DNT>

   に移動します。

2. <DNT>
     **Top exception locations**
   </DNT>

   テーブルから、任意の行で処理された例外を選択します。

<DNT>**Occurrences**</DNT>ページには、デバイス タイプまたは OS ごとの内訳データ、影響を受けるユーザーの数、選択した期間の合計発生回数、属性など、選択した例外に関する詳細が表示されます。

<img
  title="Mobile Handled Exceptions: Occurrences"
  alt="Mobile Handled Exceptions: Occurrences"
  src="/images/mobile_screenshot-full_handled-exception-occurrences.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions > (select an exception) > Occurrences:**</DNT> スレッドの詳細を使用して、スタックトレース内の処理された例外のパターンをさらに調べます。
</figcaption>

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        一般的なパターンを見つける
      </td>

      <td>
        <DNT>**Occurrences**</DNT>ページから:

        * 選択した発生の

          <DNT>
            **Summary**
          </DNT>

          情報を確認します。

        * <DNT>
            **Occurrence by version**
          </DNT>

          と

          <DNT>
            **Breakdown of handled exception type**
          </DNT>

          グラフを比較します。

        * <DNT>
            **Breakdown of handled exception type**
          </DNT>

          チャートで、 `Device type`と`OS version`を切り替えます。

        * [タイム ピッカーを](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) 使用して、現在選択されている期間を調整します。

        * 他のパターンを検索するには、

          <DNT>
            **Back to handled exceptions**
          </DNT>

          を選択します。
      </td>
    </tr>

    <tr>
      <td>
        より具体的なパターンを探す
      </td>

      <td>
        以下のいずれかを行ってください。

        * ページの上部から、特定の

          <DNT>
            **Version**
          </DNT>

          を選択するか、1 つ以上の

          <DNT>
            **Filter**
          </DNT>

          を選択します。

        * スレッドのデータを調べる。

        * <DNT>
            **Stack trace**
          </DNT>

          の詳細から、発生回数をスクロールします。

        * [タイム ピッカーを](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) 使用して、現在選択されている期間を調整します。
      </td>
    </tr>

    <tr>
      <td>
        属性からパターンを見つける
      </td>

      <td>
        以下を含む、オカレンスに関連する[`MobileHandledException`属性](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#mobilehandledexception-attributes)のリストを確認します。

        * ハンドルされた例外
        * デバイス
        * 繋がり
        * 場所
        * その他、 [カスタムアトリビュート](/docs/insights/insights-data-sources/custom-events/insert-custom-events-attributes-mobile-data) を作成した場合など
      </td>
    </tr>

    <tr>
      <td>
        オカレンスデータのクエリやビジュアライズ
      </td>

      <td>
        New Relic を使用して、 [データを照会する](/docs/insights/nrql-new-relic-query-language/using-nrql/query-page-create-edit-nrql-queries) または [ダッシュボードを作成する](/docs/insights/use-insights-ui/manage-dashboards/create-edit-copy-insights-dashboards) を表示または共有することができます。
      </td>
    </tr>
  </tbody>
</table>

### オカレンスのイベント トレイル [#event-trail]

<DNT>**Event trail**</DNT>チャートでは、処理された例外に至るまでのタイムスタンプ付きイベントを確認できます。

<img
  title="event trail chart for handled exceptions"
  alt="event trail chart for handled exceptions"
  src="/images/mobile_screenshot-full_event-trail-handled-exceptions.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Mobile > (select an app) > Exceptions > Handled exceptions > (click an exception) > (scroll down to Event trail chart):**</DNT> 処理された例外に至るまでのイベントのイベント履歴を表示します。
</figcaption>

## 記号化されていないスタックトレス [#unsymbolicated]

New Relic は、処理された例外のシンボル化されていないスタックトレースを保存しません。これは、 [クラッシュイベントトレイル](/docs/mobile-monitoring/mobile-monitoring-ui/crashes/mobile-crash-event-trail) とは異なります。新しい処理された例外がシンボル化されるようになるので、必要に応じて後から [dSYM](/docs/mobile-monitoring/new-relic-mobile-ios/install-configure/upload-dsyms-bitcode-apps) をアップロードすることができます。

## 処理された例外 API [#hex-api]

<DNT>**Handled exceptions**</DNT>機能には、クエリ ビルダーで処理された例外データを調べて特定の詳細を取得するために使用できるデフォルトのプロパティが自動的に含まれます。

* [`recordHandledExceptions()` メソッド](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/record-handled-exceptions/)を使用します。

* イベント タイプを [`MobileHandledException`](/docs/insights/insights-data-sources/default-data/mobile-events-attributes#mobilehandledexception-attributes)[クエリします 。](/docs/insights/nrql-new-relic-query-language/using-nrql/query-page-create-edit-nrql-queries)詳細については、

  <InlinePopover type="mobile"/>

  の[NRQL の例](/docs/insights/nrql-new-relic-query-language/nrql-query-examples/insights-query-examples-new-relic-mobile#mobilehandledexception-examples)を参照してください。

## カスタムアトリビュートとイベントの作成

[カスタムアトリビュート](/docs/mobile-monitoring/new-relic-mobile/maintenance/add-custom-data-new-relic-mobile/#custom-attributes)や[カスタムイベント](/docs/mobile-monitoring/new-relic-mobile/maintenance/add-custom-data-new-relic-mobile)もできます。 作成したら、 <DNT>**Handled exceptions**</DNT>ページで属性を選択してクエリを実行します。
