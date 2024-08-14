---
title: サブクエリを使用して複数のクエリをリンクする
metaDescription: 'How to use subqueries in NRQL, the New Relic query language.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

NRQL を使用すると、別のクエリ内にネストされたクエリである<DNT>**subquery**</DNT>を実行できます。 サブクエリは、別のクエリ内にネストされた 1 つのクエリです。サブクエリを使用すると、あるクエリの結果を別のクエリで使用できます。 サブクエリを使用すると、次のことが可能になります。

* 親エンティティの子エンティティで計算を実行します
* インフラストラクチャエージェントのCPU使用率に基づいて、CPU負荷が高いホストのエラーログを参照してください

NRQL では、 [`SELECT`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#state-select)ステートメントと[`WHERE`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-where)句でサブクエリを使用できます。

平均以上の期間のトランザクションの数を取得するためのクエリの例を次に示します。

```sql
SELECT count(*) FROM Transaction WHERE duration > (SELECT average(duration) FROM Transaction)
```

サブクエリの結果は、コンテキストで意味をなす必要があります。上記の例では、 `WHERE`句の大なり条件には、単一の値を返すサブクエリが必要です。一連の値を返すサブクエリ ( [`uniques()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-uniques)サブクエリなど) は失敗します。

1 つのサブクエリを別のサブクエリの中にネストすることもできます。 NRQL では、単一のクエリ内で、ネストされているかどうかに関係なく、最大 3 つのサブクエリが許可されます。

[`SINCE`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-since) / [`UNTIL`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-until)で明示的に指定しない限り、サブクエリの時間範囲は外側のクエリの時間範囲と同じになります。 ダッシュボードで[タイムピッカー](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker)からウィンドウを選択すると、サブクエリの時間範囲が外側のクエリの時間範囲に合わせられます。 そのチャートに<DNT>**Ignore Time Picker**</DNT>を設定した場合、サブクエリの時間範囲と外側のクエリの時間範囲は同じになりません。

## サブクエリの実行 [#subquery-execution]

クエリの実行中、各サブクエリは独立して実行され、その結果は外部クエリの定数値または値のセットとして使用されます。 この実行モデルにより、サブクエリは外部クエリの属性と値を参照できない場合があります。

[クエリ期間の制限](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/#query-duration)は、サブクエリを含むクエリに対して適用されます。これは、すべてのサブクエリと外部クエリが期間制限内に実行を完了する必要があることを意味します。

サブクエリが返す結果の最大数は、 [`LIMIT MAX`値](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit)と同じ 5,000 です。 この制限を超えると、結果が不完全になり、エラーメッセージ「サブクエリが結果メンバーの最大制限に達した可能性があるため、不完全な結果が発生する可能性があります。」が表示される可能性があります。

## サブクエリとネストされた集計 [#subquery-vs-nested-aggregation]

サブクエリは似ているように見えますが、ネストされたクエリの結果を集計できる[ネストされた集計](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query)とは異なります。 ネストされた集計は`FROM`句で使用され、サブクエリは`SELECT`ステートメントと`WHERE`句で使用されます。

## 制限 [#subquery-limitations]

* サブクエリは、 NRQLアラート条件またはイベント メトリック (E2M) ルールではサポートされていません。 サブクエリを含むクエリではデータを複数回渡す必要があるため、サブクエリはストリーミング アラートやストリーミング データ処理に基づくその他の製品と互換性がありません。
* クエリが複数の結果セットを返す原因となる`TIMESERIES`句と`COMPARE WITH`句は、サブクエリではサポートされていません。
* サブクエリは`FACET`句には表示できませんが、 `FACET CASES`で使用される`WHERE`句には表示できます。
* [結果の数に制限があります](#subquery-execution)

## サブクエリの例 [#subquery-examples]

サブクエリの例を次に示します。

<CollapserGroup>
  <Collapser
    id="numeric-conditions"
    title="数値条件"
  >
    数値条件で集計`average()` 、 `count()` 、 `uniqueCount()` 、または`latest()`を使用するクエリなど、単一の数値を返す任意のクエリを使用できます。

    以下のクエリは、期間が平均より長かったトランザクションの数を見つけます。

    ```sql
    FROM Transaction SELECT count(*)
    WHERE duration > (FROM Transaction SELECT average(duration))
    ```
  </Collapser>

  <Collapser
    id="in-conditions"
    title="IN条件"
  >
    `uniques()`を使用するクエリを含め、値のセットを返すクエリはすべて、 `IN`条件で使用できます。

    以下のクエリは、特定のエンティティの子であるトランザクションの平均期間を計算します。

    ```sql
    FROM Transaction SELECT average(duration) WHERE entityGuid IN
      (FROM Relationship SELECT targetEntityGuid
      WHERE sourceEntityGuid = 'MjUyMDUyOHxOUjF8V09SS0xPQUR8NzYzMDQ'
      AND relationshipType = 'CONTAINS')
      SINCE 1 day ago
    ```
  </Collapser>

  <Collapser
    id="string-condition"
    title="ファセットサブクエリを使用した文字列条件"
  >
    ファセットサブクエリで比較演算子（ `=` 、 `!=` 、 `<`など）を使用する場合、結果を単一の値に制限するには、 `LIMIT 1`を指定する必要があります。

    以下のクエリは、平均トランザクション期間が最も長いアカウントの最新のトランザクションに関連するトランザクション エラーを検索します。

    ```sql
    FROM TransactionError SELECT * WHERE guid = (FROM Transaction SELECT latest(guid) FACET accountId ORDER BY average(duration) LIMIT 1)
    ```
  </Collapser>

  <Collapser
    id="delta-query"
    title="デルタクエリ"
  >
    `SELECT`ステートメントの計算でサブクエリの結果を使用できます。 サブクエリでは、外側のクエリとは異なる時間範囲を指定できます。

    以下のクエリは、現在の平均トランザクション期間と過去 1 週間の平均期間の差をグラフ化します。

    ```sql
    FROM Transaction SELECT average(duration) -
      (FROM Transaction SELECT average(duration)
      SINCE 7 days ago) TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="multiple-subqueries"
    title="複数のサブクエリ"
  >
    1つのクエリに最大3つのサブクエリが表示される場合があります。

    以下のクエリは、期間が 99 パーセンタイルを超えたトランザクションに関与する一意のアカウントを検索します。

    ```sql
    FROM Transaction SELECT uniques(accountId) WHERE guid IN
      (FROM Transaction SELECT uniques(guid) WHERE duration >
      (FROM Transaction SELECT percentile(duration, 99)))
    ```
  </Collapser>

  <Collapser
    id="function-argument"
    title="関数の引数としてのサブクエリ"
  >
    多くのNRQL関数は、引数としてサブクエリを取ることができます。

    以下のクエリは、平均と比較した個々のトランザクション期間を示す文字列を構築します。

    ```sql
    SELECT concat('This transaction duration: ', duration, '; average transaction duration: ',
      (SELECT average(duration) FROM Transaction), precision: 4) FROM Transaction
    ```
  </Collapser>
</CollapserGroup>
