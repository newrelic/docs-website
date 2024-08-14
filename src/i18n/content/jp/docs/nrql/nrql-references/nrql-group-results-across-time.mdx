---
title: 'NRQL: 時間ごとのファセット結果'
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'New Relic NRQL: use the FACET clause to return results segmented by time buckets.'
freshnessValidatedDate: never
translationType: machine
---

[NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) では、時間をまたいで結果をグループ化するクエリを作成することができます。例えば、指定した日時の範囲をカバーするバケットに結果を分けることで、タイムスタンプに基づいて結果をグループ化することができます。

NRQL クエリで以下の表の時間関数を使用すると、結果は UTC で返されます。結果をタイムゾーンに合わせて調整するには、クエリに[`WITH TIMEZONE`句を](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-timezone)含めます。

<table>
  <thead>
    <tr>
      <th width={210}>
        <DNT>
          **Time-based function**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>

      <th>
        <DNT>
          **String format**
        </DNT>
      </th>

      <th>
        <DNT>
          **Numeric format**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td nowrap>
        `yearOf(attr [, format])`
      </td>

      <td>
        タイムスタンプの年を返します。
      </td>

      <td nowrap>
        `2023`
      </td>

      <td nowrap>
        `2023`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `quarterOf(attr [, format])`
      </td>

      <td>
        年の四半期を返します。戻り値には、文字列としてフォーマットされている場合、四半期と年の両方が含まれます。
      </td>

      <td nowrap>
        `Q1 2014`
      </td>

      <td nowrap>
        `1`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `monthOf(attr [, format])`
      </td>

      <td>
        文字列としてフォーマットされた場合はタイムスタンプの月と年を返し、数値としてフォーマットされた場合は数値の月を返します。
      </td>

      <td nowrap>
        `July 2014`
      </td>

      <td nowrap>
        `7`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `weekOf(attr)`
      </td>

      <td>
        タイムスタンプが発生した週を、その週の月曜日の月と日を指定して返します。
      </td>

      <td nowrap>
        `Week of January 15`
      </td>

      <td nowrap>
        該当なし
      </td>
    </tr>

    <tr>
      <td nowrap>
        `weekdayOf(attr [, format])`
      </td>

      <td>
        取得したタイムスタンプの曜日を返します。返された値は週の終わりにループバックするので、曜日ごとの傾向を時系列で見ることができます。
      </td>

      <td nowrap>
        `Sunday`
      </td>

      <td nowrap>
        `0`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `dateOf(attr)`
      </td>

      <td>
        取得したタイムスタンプの日付を返します。返される値には、月、日、年が含まれます。
      </td>

      <td nowrap>
        `July 15, 2014`
      </td>

      <td nowrap>
        該当なし
      </td>
    </tr>

    <tr>
      <td nowrap>
        `dayOfMonthOf(attr [, format])`
      </td>

      <td>
        RETURN関数は、タイムスタンプの1ヶ月以内の日付を、1～31の数値で返します。返される値は月を含みません。
      </td>

      <td nowrap>
        `23`
      </td>

      <td nowrap>
        `23`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `daysInMonthOf(attr [, format])`
      </td>

      <td>
        タイムスタンプの月の日数を返します。
      </td>

      <td nowrap>
        `30`
      </td>

      <td nowrap>
        `30`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `hourOf(attr [, format])`
      </td>

      <td>
        タイムスタンプの時間を返します。

        戻り値には、午前 1 時から午前 9 時までの時間の前に付加された 0 は含まれません。これは、 `SINCE`などの関数や句とは異なります。これらの時間は、先頭に 0 を付けて受け入れます。
      </td>

      <td nowrap>
        `6:00`、 `12:00` 、 `18:00`
      </td>

      <td nowrap>
        `6`、 `12` 、 `18`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `minuteOf(attr [, format])`
      </td>

      <td>
        タイムスタンプの分を返します。

        戻り値には、1 から 9 までの分の前に追加された 0 は含まれません。これは、先頭が 0 の分を受け入れる `SINCE`などの関数や句とは異なります。
      </td>

      <td nowrap>
        `0`、 `6` 、 `48`
      </td>

      <td nowrap>
        `0`、 `6` 、 `48`
      </td>
    </tr>
  </tbody>
</table>

## あなたのNRQLクエリの時間範囲のファセット [#cohorts]

<Callout variant="tip">
  これらの例では、 `createdAt`という PageView イベントとともに送信されるカスタム タイムスタンプ属性を使用します。PageView イベントの取り込み時までにファセットするには、代わりに`timestamp`属性を使用できます。
</Callout>

NRQL クエリを作成するには、タイムスタンプ属性で機能するバケット関数で[`FACET`句](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-facett)を使用します。標準の`FACET`クエリを実行しますが、属性によるファセットではなく、時間によるファセットを行います。例えば：

```sql
SELECT count(*) FROM K8sDaemonsetSample FACET monthOf(createdAt)
```

<img
  title="NRQL facet by time"
  alt="A screenshot displaying a NRQL query faceted by time"
  src="/images/queries_screenshot-crop_facet-by-time-query.webp"
/>

同じクエリで複数の機能を実行するには、NRQL のマルチファセット機能を使用します。

```sql
SELECT count(*) FROM K8sDaemonsetSample FACET dateOf(createdAt), monthOf(createdAt)
```

<img
  title="NRQL facet by time with two functions"
  alt="NRQL facet by time with two functions"
  src="/images/queries_screenshot-crop_facet-by-time-two-functions.webp"
/>

多くの時間ベースの関数は、結果値の形式を制御する `string` (デフォルト) または `numeric`のオプションの 2 番目の引数を受け入れます。

```sql
SELECT count(*) FROM K8sDaemonsetSample FACET monthOf(createdAt, numeric)
```

## ファセットの例 [#facet-examples]

<CollapserGroup>
  <Collapser
    id="facet-time-example"
    title="月別に集計"
  >
    すべての結果を月に基づいてグループ化するには、 `monthOf` 関数を使用します。この例では、NRQL クエリには関数 (`count(*)`)、データ型、タイムフレーム (`SINCE 1 day ago`)、および時間ファセット (`monthOf(createdAt)`) が含まれています。

    ```sql
    SELECT count(*) FROM K8sDaemonsetSample SINCE 1 day ago FACET monthOf(createdAt)
    ```

    このクエリを実行すると、月ごとの結果の表が返されます。
  </Collapser>

  <Collapser
    id="facet-other-examples"
    title="FACET句を使ったその他のグループ化の例"
  >
    NRQL クエリを実行して、時間だけでなく他の方法でデータをグループ化できます。その他の例については、 [NRQL `FACET`ドキュメント](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-facet)を参照してください。
  </Collapser>

  <Collapser
    id="timeseries-chart-examples"
    title="TIMESERIESを指定してチャートを作成する例"
  >
    `UNTIL` 時系列グラフで `TIMESERIES` 関数を追加し、time 関数を使用することに注意する必要があります。

    `UNTIL` のデフォルト値は `NOW`であるため、何も指定しない場合、時間関数の値は分離または結合される可能性があります。

    `UNTIL today`を指定すると、同日の午前 12 時に終了するグラフを作成できます。

    ```sql
    SELECT count(*) FROM PageView TIMESERIES 1 day WITH TIMEZONE 'Europe/London' SINCE 4 week ago UNTIL today
    ```

    過去 4 週間ではなく`last month`からのデータを視覚化する場合は、 `SINCE last month UNTIL this month`を使用できます。

    ```sql
    SELECT count(*) FROM PageView TIMESERIES 1 day  WITH TIMEZONE 'Europe/London' SINCE last month UNTIL this month
    ```
  </Collapser>
</CollapserGroup>
