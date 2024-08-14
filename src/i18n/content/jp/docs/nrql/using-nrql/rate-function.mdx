---
title: rate() を使用して期間を視覚化する
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to use the rate() function to visualize event occurrences over a set period of time.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

`rate()`関数は、時間枠に基づいてイベントの発生をバケットに集計します。これを利用して、イベントの発生頻度を視覚化できます。たとえば、過去 1 日に 1 時間あたりに発生したエラーの数を表示できます。監視したい大きな時間枠があるものの、その大きな時間枠内でより短い期間を視覚化する必要がある場合、NRQL のこの関数を大いに活用できます。

## rate() 関数を使用する

`rate()`を使用する場合は、 `TIMESERIES`キーワードを使用して、時間の経過に伴うレートの折れ線グラフを生成できます。`TIMESERIES`を省略すると、時間の経過とともに平均化された単一のレート値を示すビルボード ビューが生成されます。過去 30 分間の 1 分あたりのトランザクション エラーを折れ線グラフ形式で視覚化するクエリを次に示します。

```sql
SELECT rate(count(*), 1 minute) AS 'Errors' FROM TransactionError TIMESERIES SINCE 30 minutes ago
```

<img
  title="Rate function with time series"
  alt="A screenshot displaying an example of the rate() function"
  src="/images/example_rate_function.webp"
/>

`TIMESERIES`を含めずに同じクエリを実行すると、一定期間の平均発生数を表す単一の値が表示されます。

<SideBySide>
  <Side>
    ```sql
    SELECT rate(count(*), 1 minute) AS 'Errors' FROM TransactionError SINCE 30 minutes ago
    ```
  </Side>

  <Side>
    <img
      title="Rate function without time series"
      alt="A screenshot displaying an example of the rate() function without TIMESERIES"
      src="/images/example_rate_function_no_timeseries.webp"
    />
  </Side>
</SideBySide>

## 変化率を追跡するには、latestRate() を使用します

`latestRate()`関数は、指定された属性と時間間隔を使用して、最近の 2 つのデータ ポイントにわたる値の変化率を返します。関数の単位は`change in attribute` / `time window`になります。この機能を利用すると、最先端のトレンドを知ることができます。

過去 2 つのトランザクション エラーの 1 秒あたりの継続時間の変化を返すクエリの例を次に示します。

<SideBySide>
  <Side>
    ```sql
    SELECT latestrate(duration, 1 second) FROM TransactionError SINCE 30 minutes ago
    ```
  </Side>

  <Side>
    <img
      title="Latestrate function"
      alt="A screenshot displaying an example of the latestRate() function"
      src="/images/example_latestrate_function.webp"
    />
  </Side>
</SideBySide>

<Callout variant="important">
  `latestRate()`関数は最新の 2 つのデータポイントを使用しますが、結果が不安定になる場合があることに注意してください。イベント発生のより大きなバケットの平均が必要な場合は、 `rate()`のみの使用を検討してください。
</Callout>

## Rate() の例

<CollapserGroup>
  <Collapser
    id="error-by-hostname"
    title="ホストごとのエラー率を視覚化"
  >
    ホストに基づいて線をグラフ化するには、 `FACET` by `host`を使用できます。この例は、 `rate()`関数を使用して不正なホストを特定する方法を示しています。

    ```sql
    SELECT rate(count(*), 1 minute) FROM TransactionError TIMESERIES SINCE 30 minutes ago FACET host
    ```

    クエリを実行すると、ホストごとに別々の線を含むグラフが返されます。
  </Collapser>

  <Collapser
    id="average-appname-errors"
    title="過去 30 分間の appName 別平均エラー数"
  >
    アプリケーションごとにエラーを表示したい場合は、 `FACET` by `appName`を実行できます。この例は、過去 1 時間のアプリケーションごとの平均エラーを特定する方法を示しています。

    ```sql
    SELECT rate(count(*), 1 minute) FROM TransactionError SINCE 30 minutes ago FACET appName
    ```

    クエリを実行すると、アプリケーション名ごとの結果のテーブルが返されます。
  </Collapser>
</CollapserGroup>
