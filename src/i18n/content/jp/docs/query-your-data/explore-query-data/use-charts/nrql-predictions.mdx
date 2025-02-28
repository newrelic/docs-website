---
title: NRQL予測
tags:
  - Prediction on a chart
  - Forecasting on a chart
  - NRQL Predictions
  - Forecasting
metaDescription: Use NRQL Predictions to predict future trends and potential performance issues.
freshnessValidatedDate: never
translationType: machine
---

<Callout title="プレビュー">
  この機能はまだ開発中ですが、ぜひお試しください。

  この機能は現在、弊社の[プレリリース ポリシー](/docs/licenses/license-information/referenced-policies/new-relic-pre-release-policy)に従ってプレビュー プログラムの一部として提供されています。
</Callout>

<DNT>**NRQL Predictions**</DNT> New Relicは履歴データを使用して将来の傾向を予測し、メトリクスが将来どのように動作するかをインサイトに提供します。 このプロアクティブなアプローチにより、傾向を視覚化し、潜在的な問題を予測して、タイムリーな介入により最適なシステム パフォーマンスを維持できるようになります。 <DNT>**NRQL Predictions**</DNT>自体は潜在的な問題を特定するものではありませんが、傾向を評価し、将来の課題に備えるために必要な情報を提供します。

潜在的な問題を自動的に識別するには、現在パブリック プレビューで利用可能な<DNT>**[Predictive Alerts](/docs/query-your-data/explore-query-data/use-charts/nrql-predictions)**</DNT>機能に登録できます。 <DNT>**Predictive Alerts**</DNT> <DNT>**NRQL Predictions**</DNT>と連携して、予測される傾向が潜在的な問題を示している場合に自動的にアラートをトリガーし、システムをプロアクティブに管理できるようにします。

<Callout variant="tip">
  New Relic は現在、予測に[Holt-Winters モデル](https://en.wikipedia.org/wiki/Exponential_smoothing#Triple_exponential_smoothing_\(Holt_Winters\))を使用しており、データの時間別、日別、週別の季節パターンと傾向をサポートしています。
</Callout>

## 価格 [#pricing]

プレビュー期間中の<DNT>**NRQL Predictions**</DNT>の使用は、お客様のアカウントに関連付けられた価格モデルに適用される注文に従って課金されます。 この機能の使用に関連するNew Relic書き込み言語 (NRQLS) は、コア計算製品として課金されます。 この機能が一般に利用可能になった場合、ご注文に応じて使用料が請求されます。

価格に関する詳細については、弊社の営業チームにお問い合わせいただくか、ご注文を参照してください。

## 登録 [#enrollment]

<DNT>**NRQL Predictions**</DNT>機能に登録するには、 <DNT>**[one.newrelic.com &gt; Administration](https://one.newrelic.com//admin-portal) &amp;gt; Preview &amp;amp; Trials**</DNT>に移動して<DNT>**NRQL predictions**</DNT>有効にします。

## 折れ線グラフまたは面グラフに予測を追加する [#add-prediction]

折れ線グラフまたは面グラフに予測を追加するには、次の手順に従います。

<Steps>
  <Step>
    ### 折れ線グラフまたは面グラフにアクセスする [#access-a-chart]

    1. [one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities)に移動します。
    2. 折れ線グラフまたは面グラフに予測を追加するには、 <DNT>**Dashboards**</DNT>から選択するか、 <DNT>**Metrics and events**</DNT>から開きます。
  </Step>

  <Step>
    ### 予測を追加 [#add-prediction]

    予測を追加するには、 <Icon name="fe-more-horizontal" />メニューで、 <DNT>**Predict trend**</DNT>を選択します。 **Data Explorer** \[データ エクスプローラー]では、将来の傾向を予測する予測傾向がグラフに表示されます。 予測範囲はクエリ ウィンドウの 20% に自動的に設定され、灰色で強調表示されます。 予測範囲内ではグラフが点線で表示されます。

    `PREDICT`キーワードがチャート クエリに追加されます。 要件に応じて[クエリを絞り込み](#customize-prediction-range)、実行して最新の傾向を取得できます。

    <Callout variant="tip">
      面グラフに予測を追加すると、グラフの種類が予測付き折れ線グラフに変わります。
    </Callout>
  </Step>

  <Step>
    ### ダッシュボードに追加 [#add-to-dashboard]

    1. 予測を含むグラフをダッシュボードに追加するには、 <DNT>**Add to dashboard**</DNT>クリックします。
    2. ウィジェット名を入力します。
    3. ウィジェットを追加するダッシュボードを選択するか、ウィジェット用の新しいダッシュボードを作成します。

    選択したダッシュボードで予測付きのチャートを表示できるようになりました。
  </Step>
</Steps>

## デフォルトの予測範囲 [#default-prediction-range]

予測をグラフに追加すると、 `PREDICT`関数は次のデフォルトの動作で既存のグラフ クエリに追加されます。

* **予測範囲**: クエリ ウィンドウで指定された合計時間の 20% を予測し、現在の傾向に基づいた短期的な予測を確認できます。
* **履歴データ**: 現在の書き込みウィンドウとその 2 つ前のウィンドウからの履歴データを処理して、予測を生成します。
* **時間間隔**: クエリ ウィンドウ上の予測のデータ ポイント間隔と一致し、データ投影の一貫性が確保されます。

例：

```sql
FROM Transaction SELECT count(*) WHERE error IS TRUE TIMESERIES PREDICT
```

チャート上のデフォルトの予測は次のように表示されます。

<img title="default prediction" alt="default prediction" src="/images/nrql-predictions-default.webp" />

<figcaption>
  <DNT>**[one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities) &amp;gt; dashboards**</DNT>: デフォルトの予測。
</figcaption>

## 予測範囲をカスタマイズする [#customize-prediction-range]

予測は以下の方法でカスタマイズできます。 NRQL について詳しくは、 [NRQL ドキュメント](/docs/nrql/get-started/introduction-nrql-new-relics-query-language)を参照してください。

<CollapserGroup>
  <Collapser id="hyperparameters" title="ハイパーパラメータとその平滑化レベルを使用してクエリをカスタマイズする">
    現在サポートされている予測モデルは<DNT>**Holt-Winters**</DNT>のみであるため、ハイパーパラメータと平滑化係数を`holtwinters`で調整することで、予測モデルをユースケースに合わせて微調整できます。

    予測をカスタマイズするには、次のハイパーパラメータを使用します。

    * **`seasonality`** : 時系列内の季節パターンの長さを表します。

      * **`seasonality: <time range>`** : 指定された時間範囲の時系列の季節性を表します。
      * **`seasonality: AUTO`** : 時系列の季節性を自動的に検出します。
      * **`seasonality: NONE`** : 時系列の季節性を無効にします。

    * **`alpha`** : 時系列のレベルまたは平均値を表します。

    * **`beta`** : 時系列の傾向または傾斜を表し、上昇または下降の動きを示します。

    * **`gamma`** : 時系列の季節的または繰り返しパターンを表します。

    * **`phi`** : 時系列トレンドの減衰係数を表します。

    **`alpha`** 、 **`beta`** 、 **`gamma`** 、 **`phi`**の平滑化係数を 0 ～ 1 に設定できます。値が高いほど最近のデータに重点が置かれ、値が低いほど履歴データに重点が置かれます。
  </Collapser>

  <Collapser id="prediction-range" title="予測範囲でクエリをカスタマイズする">
    指定した時間範囲までの予測を投影することで、クエリをカスタマイズできます。 指定された時間範囲までの予測を投影するには、 `BY`キーワードを使用します。 たとえば、 `PREDICT BY 3 hours` 。
  </Collapser>

  <Collapser id="historical-data-range" title="指定した時間範囲の履歴データを処理してクエリをカスタマイズします">
    定義された時間範囲の履歴データを処理して予測を予測することで、クエリをカスタマイズできます。 履歴データを処理するには、 `USING`キーワードを使用します。 たとえば、 `PREDICT USING 1 day` 。
  </Collapser>
</CollapserGroup>

例：

```sql
FROM Transaction SELECT count(*) WHERE error IS TRUE TIMESERIES PREDICT holtwinters(beta: 0.5) BY 3 hours USING 1 day
```

チャート上のカスタマイズされた予測は次のように表示されます。

<img title="Refined prediction" alt="Refined prediction" src="/images/nrql-predictions-refined.webp" />

<figcaption>
  <DNT>**[one.newrelic.com &gt; All capabilities](https://one.newrelic.com/all-capabilities) &amp;gt; dashboards**</DNT>: カスタマイズされた予測。
</figcaption>