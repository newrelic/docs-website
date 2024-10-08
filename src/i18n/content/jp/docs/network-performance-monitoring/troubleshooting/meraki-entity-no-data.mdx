---
title: Meraki コントローラ エンティティにメトリックがありません
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: 'Meraki API polling is working, but expected metrics are missing.'
freshnessValidatedDate: never
translationType: machine
---

## 問題 [#problem]

Meraki API監視中に、エンティティに期待されるすべてのメトリクスが表示されるわけではありません。

## 解決 [#solution]

次のNRQLクエリを実行して、NewRelicに存在するメトリックを特定します。

```sql
FROM Metric, KExtEvent SELECT
  count(*)
FACET
  metricName OR eventType(),
  instrumentation.name
WHERE instrumentation.name LIKE 'meraki%'
OR eventType() = 'KExtEvent'
SINCE 1 HOUR AGO
LIMIT MAX
```

このクエリにより、過去 1 時間に Meraki コントローラから収集されたすべてのディメンション メトリックと構成変更イベントのリストが得られます。[Meraki API 統合の設定ドキュメントには、](/docs/network-performance-monitoring/advanced/advanced-config/#meraki)設定のさまざまなオプションに基づいて利用できるメトリクスと属性が説明されています。
