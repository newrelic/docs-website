---
title: 配列を整理に使用する
metaDescription: 'How to use arrays in NRQL, the New Relic query language'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

OpenTelemetry Protocol (OTLP) のサポートの一環として、New Relic は配列を含む属性を処理できます。 しかし、配列とは何でしょうか? 基本的に、配列は、NRQL でクエリできる、順序付けられた値のコレクションを含むデータ構造です。 通常、配列は`[1, 2, 3, 4, 5]`または`["US", "CA", "UK"]`のような形式で表示されます。

現在、単純な 1 次元配列のみがサポートされています。 単純な配列を使用して、同じプリミティブ型の値のリストを格納できます。たとえば、数値、ブール値、文字列などです。 配列にデータが含まれていることをすばやく確認するには、JSON グラフ タイプを使用して、データが配列構造で表示されるかどうかを確認します。

## サポートされている機能 [#supported-features]

* `FACET`句は配列属性をサポートします。
* 関数`getfield()` 、 `length()` 、および`contains()`を配列に対して実行できます。
* `uniques()` 、 `uniqueCount()` 、および`latest()`集計関数も使用できます。
* 配列には最大64個の要素を含めることができます。

## 非対応の機能 [#unsupported-features]

* `=` 、 `!=` 、 `IN`などの比較演算子は配列ではサポートされていません。
* `sum()` 、 `min()` 、 `max()`などの他の集計関数を使用して配列を集計することはできません。
* 配列には、 `["UK", "US", ["CA", "OR", "ATL"]]`などの他の配列を含めることはできません。
* 配列に`NULL`を含めることはできません。

## 配列関数と例 [#array-functions]

<CollapserGroup>
  <Collapser
    className="freq-link"
    title={<InlineCode>getfield(attribute, i) OR attribute\[i].</InlineCode>}
  >
    `getfield()`表記を使用して、配列内の`i`番目の要素を取得します。

    <Callout variant="important">
      配列のインデックスは`0`で始まります。
    </Callout>

    <DNT>**Example:**</DNT> 期間属性に格納された単純な配列`[100, 110, 90, 100, 105]`を考えてみましょう。

    `getfield(durations, 2)` `90`を返します。

    関数`getfield()`の代わりに角括弧`[ ]`の省略表現を使用できます。

    <DNT>**Example:**</DNT> `durations[4]` `105`を返します。
  </Collapser>

  <Collapser
    className="freq-link"
    title={<InlineCode>長さ</InlineCode>}
  >
    配列内の要素数を返すには、 `length()`関数を使用します。

    <DNT>**Example:**</DNT> 値が`["US", "CA", "UK"]`である単純な配列`countries`を考えてみましょう。

    `length(countries)` `3`を返します。
  </Collapser>

  <Collapser
    className="freq-link"
    title={<InlineCode>contains(attribute, element)</InlineCode>}
  >
    `contains()`関数を使用して、配列内に要素があるかどうかを確認します。

    <CollapserGroup>
      <Collapser title="例配列に要素があるかどうかを確認する">
        例: 配列`guids`を`["9999-1234-9999", "3333-7890-3333", "5555-3456-555"]`とします。

        `contains(guids, '5555-3456-555')` `TRUE`を返します。
      </Collapser>

      <Collapser title={<>の項目をフィルタリングするためにcontainsを使用します。 <InlineCode>count(\*)</InlineCode></>}>
        値が`["9999-1234-9999", "3333-7890-3333", "5555-3456-555"]`の`guids`配列を含む`Transaction`イベント タイプを考えてみます。`"9999-1234-9999"` GUID を含むトランザクションの数を確認するには、次を使用します。

        ```sql
        SELECT count(*) FROM Transaction WHERE contains(guids, '9999-1234-9999')
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>
