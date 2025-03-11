---
title: サンキーチャートに「データが見つかりません」エラーが表示されます
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: The sankey chart for flow analysis is showing a 'no data found' error in your UI.
freshnessValidatedDate: never
translationType: machine
---

## 問題 [#problem]

フローテレメトリの分析中に、サンキーダイアグラムにフィルターやファセットを追加すると、データが見つからないというエラーが発生します。

<img
  title="Sankey No Data Found Error"
  alt="Sankey No Data Found Error"
  src="/images/network_screenshot-crop_sankey-no-data.webp"
/>

<figcaption>
  フローテレメトリの分析中にエラーが見つかりました。
</figcaption>

このエラーは、サンキーダイアグラムに適用されたフィルターやファセットによって生成された基になるNRQLクエリに、グラフのレンダリングに必要なテレメトリが含まれていない場合に発生します。

## 解決 [#solution]

サンキーチャートをレンダリングすると、ユーザーの選択に基づいて特定の依存関係を持つ、基になるNRQLクエリが動的に作成されます。少なくとも、検出されたフローレコードに次のフィールドが含まれている必要があります。

* `sample_rate`

* `provider = 'kentik-flow-device'`

* `in_bytes` または、チャートの切り替えスイッチを

  <DNT>
    **Byte traffic**
  </DNT>

  または

  <DNT>
    **Packet traffic**
  </DNT>

  どちらに選択したかに応じて`in_pkts`なります。

ユーザーによるファセットの選択も必要になります。たとえば、上のスクリーンショットでは、フィールド`CustomBytes1`と`CustomBytes2`は、フィルターの送信元IPアドレスと宛先IPアドレスを使用する会話のフローレコードには存在しません。

この問題を解決するには、まず、チャートの右上のアイコンにある<DNT>**View query**</DNT>アクションを選択して、サンキー チャートの基になる NRQL クエリを調査し、クエリから null または空の値を返すフィールドを特定します。 次のステップでは、フロー エクスポーターのフロー テンプレートを更新して、必要なフィールドがすべて期待どおりに KTranslate エージェントに送信されるようにします。
