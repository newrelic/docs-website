---
title: ネストされた集計を使用して追加の計算を行う
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to use nested aggregation to understand how many users complete a set of steps in a procedure.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

ネストされた集計を使用すると、 [NRQLクエリ](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql)を完了し、そのクエリの結果を使用して追加の計算を行うことができます。ネストされた集約は、サブクエリが外部クエリの`FROM`句にあるSQLサブクエリまたはサブセレクトのクラスと同様のNRQL機能を提供します。

<Callout variant="tip">
  この機能は、 `SELECT`および`WHERE`句でサブクエリを実行できる[サブクエリ機能](/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql)とは異なります。
</Callout>

ネストされた集約は、複数のクエリを構築することなく、このような質問に答えるのに役立ちます。

* 自分のアプリケーションの1分あたりのリクエスト数をカウントして、過去1時間の1分あたりの最大リクエスト数を取得するにはどうしたらいいですか？
* すべてのサーバーやホストの平均CPU使用率を計算して、使用率が90％以上のものだけをリストアップするにはどうしたらいいですか？
* すべてのユーザーセッションから、どのくらいの割合ですぐにバウンドしたかを把握するにはどうしたらいいでしょうか？

## ネストされた集計クエリ構造 [#requirements]

すべてのNRQLクエリ[は、 `SELECT`ステートメントまたは`FROM`句で始まる必要があります](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions)。ネストされた集計クエリは、 `SELECT`ステートメントと`FROM`句の両方を使用し、それらを1つまたは複数の括弧内に含まれるクエリに適用します。

完全で適切にフォーマットされたネストされた集計クエリは次のようになります。

```sql
SELECT function(attribute)
FROM (
  SELECT function(attribute)
  FROM dataType
  WHERE attribute
  TIMESERIES integer units
)
```

クエリと句の動作について、他にもいくつかご紹介します。

* ネストされたクエリには 3 つ以上のレベルを含めることができます。
* `TIMESERIES`と`FACET`の両方をネストされたクエリの任意の部分に適用できます。 すべてのレベルで同一である必要はありません。
* `SINCE`、 `UNTIL` 、および`COMPARE WITH`句はクエリ全体に適用され、最も外側のレベルでのみ使用できます。

## ネストされた集計クエリの例 [#examples]

ネストされたクエリの例をいくつか示します。

<CollapserGroup>
  <Collapser
    id="total-tx"
    title="総取引数と1分間の最高回答率"
  >
    この例では、最初に内側のクエリが過去 60 分間ごとに`myApp`のトランザクションをカウントし、次に外側のクエリが 1 分間の最高リクエスト レートを返します。

    また、最初のクエリの結果 ( `as rpm` ) に名前を付けることで、返された値のラベルを作成できます。 ラベルを追加しないと、このクエリは外側のクエリで使用するカウントとして値を返します。

    ```sql
    SELECT max(rpm)
    FROM (
      SELECT count(*) as rpm
      FROM Transaction
      WHERE appName = 'myApp'
      TIMESERIES 1 minute
    )
    ```
  </Collapser>

  <Collapser
    id="avg-cpu"
    title="平均的なCPU使用率と90%以上のCPU使用率"
  >
    この例では、内側のクエリで全ホストの平均CPU使用率を計算し、外側のクエリでCPU使用率がリスクのあるしきい値（90％）を超えるホストのみに結果を絞り込みます。

    ```sql
    SELECT hostname, cpu
    FROM (
      SELECT average(cpuPercent) as cpu
      FROM SystemSample
      FACET hostname
      TIMESERIES 1 minute
    )
    WHERE cpu > 90
    ```
  </Collapser>

  <Collapser
    id="pageviews"
    title="各ユーザーセッションでのページビューと、1回しかページビューがなかったセッション数"
  >
    この例では、内側のクエリで各ユーザー セッションの`PageView`イベントの数を計算し、次に外側のクエリでそれらのセッションの何パーセントが関連付けられたビューを 1 つしか持っていないかを計算します。

    ```sql
    SELECT percentage(count(*), WHERE sessionLength = 1)
    FROM (
      SELECT count(*) as sessionLength
      FROM PageView
      FACET session
    )
    ```
  </Collapser>

  <Collapser
    id="x-slowest-entity"
    title="上位 N 個のトランザクションのうち X より遅いエンティティの数"
  >
    この例では、内部クエリは、平均トランザクション時間が最も遅い上位のエンティティ guid を検索します。次に、外側のクエリは、それらのクエリのうちしきい値より遅いクエリがいくつあるかを見つけます。ここで、クエリは上位 50 のクエリを選択し、1 秒の期間しきい値に対して測定します。

    ```sql
    SELECT count(avgDurations)
    FROM (
      SELECT average(duration) AS avgDurations
      FROM Transaction
      FACET entity.guid
      LIMIT 50
    )
    WHERE avgDurations > 1
    ```
  </Collapser>

  <Collapser
    id="disk-writes-percentile"
    title="1 時間あたりの平均ディスク書き込み数が最も多いホストのパーセンタイル"
  >
    この例には、2 つのネストされた集計があります。最も内側のクエリは、各ホストの 1 時間あたりの平均`diskWritesPerSecond`を見つけます。次のクエリは各ホストの最大平均を見つけ、最も外側のクエリはそれらの最大値の 50、75、および 99 パーセンタイルを計算します。

    ```sql
    SELECT percentile(avgMaxWrites, 50, 75, 99)
    FROM (
      SELECT max(avgWrites) AS avgMaxWrites
      FROM (
        SELECT average(diskWritesPerSecond) as avgWrites
        FROM SystemSample
        FACET hostname
        TIMESERIES 1 hour
        LIMIT 50
      )
      FACET hostname
      LIMIT 50
    )
    SINCE 1 day ago
    ```
  </Collapser>
</CollapserGroup>
