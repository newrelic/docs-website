---
title: 顧客エクスペリエンスを向上させる
metaDescription: 'New Relic observability maturity series: this guide gives you a quality foundation for optimizing your web application''s performance to improve your customer experience.'
freshnessValidatedDate: '2023-08-16T00:00:00.000Z'
translationType: machine
---

[デジタル エクスペリエンスのパフォーマンスの現在の状態を確立し](/docs/tutorial-customer-experience/establish-current-state/)たら、収集した情報を取得して、それを使用してカスタマー エクスペリエンスを向上させ始めます。ニーズはさまざまであるため、どの領域を改善する必要があるかを知ることができるのはあなただけです。次の手順は、顧客エクスペリエンスを向上させるために使用する推奨順序であり、最も関連性の高いものに注目し、そうでないものはスキップできます。これは継続的なプロセスであるため、将来 KPI が変更されたときに参照できるように、このページをブックマークしておくことをお勧めします。

[現在の状態を確立する](/docs/tutorial-customer-experience/establish-current-state/)と、システム全体でのユーザー エクスペリエンスがどのように見えるかがわかります。そこから、次のどの領域を改善する必要があるかを判断する必要があります。

1. **ビジネスの優先順位から始める:** ビジネス上の明確な指示がある場合は、組織にとって最も重要なことに焦点を当てる必要があります。たとえば、会社が最近、事業分野に関する新しい取り組みを開始したものの、UI に関連する KPI が目標を下回っている場合、これは取り組みに集中するのに最適な場所です。
2. **データを KPI に合わせる:** 主要業績評価指標は、顧客にとって問題点となるシステムのさまざまな側面に関する洞察を提供します。そのデータを取得して KPI と比較し、どこを改善する必要があるかを確認します。
3. **各セグメントをフィルタリングする:** 前のドキュメントで作成した各セグメントをグループ化し、特定の地域、デバイス、またはその他の有用なグループ化にさらに焦点を当てる必要があるかどうかを確認します。

### 対象となるKPIの改善 [#improve-kpi]

進行状況を追跡するには、新しいダッシュボードを作成し (または既存のダッシュボードに新しいページを追加し)、 `Quality Foundation KPI Improvement`という名前を付けます。詳細については、 [「Web 稼働時間の向上」](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-web-uptime)を参照してください。

### ページの読み込みパフォーマンスを向上させる [#improve-performance]

品質基盤ダッシュボードを作成したら、目標 KPI 値を満たしていない特定のページに焦点を絞ります。

品質基盤ダッシュボードで低いと報告されているページ読み込み KPI 結果ごとに、 `COMPARE WITH` 句を削除し、 `FACET pageUrl/targetGroupedUrl LIMIT MAX` を追加して、どのページのパフォーマンスが低いかを調べます。顧客 ID が URL の一部である場合など、多数の結果がある場合は、 `targetGroupedUrl` を使用します。それ以外の場合は、 `pageUrl`を使用します。

元のダッシュボードクエリ：

```
FROM PageViewTiming SELECT percentile(largestContentfulPaint, 75) WHERE appName ='WebPortal' AND pageUrl LIKE '%phone%' SINCE 1 week AGO COMPARE WITH 1 week AGO 
```

問題のあるページを特定するための新しいクエリです。

```
FROM PageViewTiming SELECT percentile(largestContentfulPaint, 75) WHERE appName ='WebPortal' AND pageUrl LIKE '%phone%' FACET targetGroupedUrl LIMIT MAX
```

改善するページを特定したら、「[ページの読み込みパフォーマンスを改善する」](/docs/new-relic-solutions/observability-maturity/customer-experience/cx-improve-page-load)のガイダンスを参照してください。

### AJAXのレスポンスタイムの向上 [#improve-ajax-response]

不十分なページ読み込み時間を特定して修正した後、AJAX 応答時間は次のステップに進むのに最適です。遅い AJAX 応答時間を見つけるには:

1. ダッシュボードのAJAX期間ウィジェットに移動します。
2. **View query** \[クエリの表示] を選択し、クエリ ビルダーで開きます。
3. クエリの最後に`facet requestUrl LIMIT MAX`を追加します。
4. クエリを実行します。
5. 結果を表として表示し、KPI改善ダッシュボードに`LOB - AjaxResponseTimes`として保存します。
6. `timeToSettle` >2.5秒でリクエストの改善に焦点を合わせます。

AJAX リクエストの改善の詳細については、 [「AJAX トラブルシューティングのヒント」を](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls/)参照してください。

### AJAXエラーレートの改善 [#improve-ajax-error]

AJAX の応答時間を特定して改善したら、すでに AJAX を扱っているため、エラー率の改善にも進む必要があります。失敗したリクエストを見つけるには:

1. に行く

   <InlinePopover type="dashboards"/>

   \> Query builder。

2. 次のクエリを入力して実行します。

   ```
   FROM AjaxRequest 
   SELECT percentage(count(*), WHERE httpResponseCode >= 400) 
   WHERE httpResponseCode >= 200 AND <Ajax Request filter>
   SINCE 1 week AGO facet pageUrl, appName
   ```

3. 結果を表として表示し、KPI改善ダッシュボードに`LOB - Pages with AjaxErrors`として保存します。

4. 最も問題のあるページについて再度クエリを実行し、失敗しているリクエストを見つけます。

   ```
   FROM AjaxRequest 
   SELECT percentage(count(*), WHERE httpResponseCode >= 400) 
   WHERE httpResponseCode >= 200 AND pageUrl=PROBLEMATIC_PAGE AND appName = YOUR_APP_NAME <Ajax Request filter> 
   SINCE 1 week AGO facet requestUrl
   ```

   不十分な AJAX エラー率を特定できたら、応答時間を改善する方法の詳細について、 [AJAX トラブルシューティングのヒント](/docs/browser/browser-monitoring/browser-pro-features/ajax-page-identify-time-consuming-calls) を参照してください。

### JavaScriptエラーの改善 [#improve-java]

改善プロセスを締めくくるには、過剰な JavaScript エラーの修正に重点を置く必要があります。最も一般的な失敗を見つけるには:

1. に行く

   <InlinePopover type="dashboards"/>

   \> Query builder

2. 次のクエリを入力して実行します。

   ```
   FROM JavaScriptError 
   SELECT count(errorClass) 
   SINCE 1 week AGO WHERE <PageView filter>  
   FACET transactionName, errorClass, errorMessage, domain
   ```

3. 結果を表として表示し、KPI改善ダッシュボードに`LOB - Javascript Errors`として保存します。

4. この情報を使用して、どのエラーに対処する必要があるかを判断します。詳細については [、JavaScript エラー ページ: エラーの検出と分析に関する](/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-detect-analyze-errors/) ドキュメントを参照してください。

5. 価値を追加しないサードパーティのエラーを削除します。

<Callout variant="tip">
  ノイズは多いものの期待どおりに動作するサードパーティの JavaScript を使用している可能性があります。次のようないくつかのアプローチを取ることができます。

  * JavaScript エラー/ページビュー比率ウィジェットからドメイン名を削除し、それを独自のウィジェットとして追加して、予期しない変化を確認できるようにします。[Anomaly NRQL](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-baseline-alert-conditions/)アラートを使用して、これについてアラートを出すことができます。
  * ドロップ[フィルター](/docs/logs/log-management/ui-data/drop-data-drop-filter-rules)を使用してJavaScriptエラーをドロップします。このオプションは、エラーの量がデータの取り込みに大きな影響を与えている場合にのみ使用してください。ドロップフィルターでできるだけ具体的にしてください。
</Callout>

## 前進する [#movingforward]

上記の手順を実行した後は、KPI を定期的に見直して、カスタマー エクスペリエンスが常に適切な品質であることを確認することをお勧めします。各組織には異なるニーズがあるため、使用する手順は組織ごとに異なります。ただし、次の提案に留意してください。

* 各スプリントの最後にパフォーマンスメトリックを再検討します。
* パフォーマンスの改善を開発者のスプリントに組み込む。
* サポートしている事業部門やその他の内部の利害関係者とメトリックをオープンに共有します。
* カスタマーエクスペリエンスSLOを定義します。
* ビジネス上の重要な品質基盤 KPI の低下に関する[アラートを作成します](/docs/tutorial-create-alerts/create-new-relic-alerts/) 。

<UserJourneyControls
  nextStep={{"path":"/docs/tutorial-customer-experience/bottom-funnel-analysis/","title":"次のステップ","body":"顧客エクスペリエンスの終わりを分析してコンバージョンを向上させる方法を学びます"}}
  previousStep={{"path":"/docs/tutorial-customer-experience/establish-current-state/","title":"一つ前の手順","body":"現在の状態を確立してベースラインを作成する方法を学びます"}}
/>
