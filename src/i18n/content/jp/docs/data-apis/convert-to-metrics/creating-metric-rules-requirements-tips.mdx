---
title: メトリクス作成のルール：要件とヒント
tags:
  - Telemetry Data Platform
  - Ingest and manage data
  - Convert data to metrics
metaDescription: 'How to create metric rules for data from events, logs, or spans in New Relic.'
freshnessValidatedDate: never
translationType: machine
---

ここでは、イベント、ログ、またはスパンからメトリクスを作成する際の制限、要件、および推奨事項について説明します。

## メトリックアグリゲーション [#summary-and-uniquecount]

NRQLクエリでは、次の`summary` 、 `uniqueCount` 、または`distribution`関数のいずれかを使用してメトリックを集計する必要があります。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        働き
      </th>

      <th>
        コメントコメント
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `summary`
      </td>

      <td>
        各時間ウィンドウ (現在は 1 分) の概要メトリクス データ ポイントを作成します。 NRQLクエリが、`average`、`sum`、`min`、`max`などのサマリーメトリックスタイプでサポートされている[集計関数](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#functions)を使用する場合は、これを使用します。

        <DNT>
          **Example rule-creation query:**
        </DNT>

        ```sql
        SELECT summary(duration) AS 'service.responseTime' FROM Transaction 
        WHERE appName = 'Data Points Staging' FACET name, appName, host
        ```
      </td>
    </tr>

    <tr>
      <td>
        `uniqueCount`
      </td>

      <td>
        1分の時間枠ごとに`uniqueCount`メトリックデータポイントを作成します。 NRQLクエリが`uniqueCount` [アグリゲータータイプ](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#functions)を使用する場合は、これを使用します。

        ルール作成のためのクエリの例

        ```sql
        FROM Transaction SELECT uniqueCount(request.headers.userAgent) 
        AS 'server.request.header.userAgent.uniqueCount' 
        WHERE appName = 'Browser Monitoring Router' FACET http.statusCode, name, appName, host
        ```
      </td>
    </tr>

    <tr>
      <td>
        `distribution`
      </td>

      <td>
        1 分間の時間ウィンドウごとに分布メトリック データ ポイントを作成します。 NRQL クエリで`percentile` 、 `histogram` 、 `min` 、 `max` 、 `average` 、 `sum` 、 `count`などの[集計関数](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#functions)を使用する場合は、これを使用します。 関心のある属性のみを引数として使用し、 `percentile`または`histogram`からの残りの引数を破棄します。 生成されたメトリクスは、 `percentile`または`histogram`の任意の引数をサポートします。

        <DNT>
          **Example of creating a `distribution` rule:**
        </DNT>

        ```sql
        SELECT distribution(duration) AS 'service.responseTime' FROM Transaction 
        WHERE appName = 'Data Points Staging' FACET name, appName, host
        ```
      </td>
    </tr>

    <tr>
      <td>
        単純なカウント： `summary(1)`および `sum`
      </td>

      <td>
        特定の`WHERE`句に一致するイベント、ログ、またはスパンの単純なカウントであるメトリックが必要な場合は、 `summary(1)`メトリックを使用します。このメトリックタイプは、指定されたイベント、ログ、または1分あたりのスパンの数をカウントします。作成されたメトリックを照会するときは、 `sum`メソッドを使用して結果を確認してください。

        <DNT>**Example:**</DNT> `foo` という名前のトランザクションをカウントする `foo.count` という名前のメトリックを作成する場合、 NRQLは次のようになります。

        ```sql
        FROM Transaction SELECT summary(1) AS 'foo.count' WHERE name = 'foo'
        ```

        そして、次のように照会します。

        ```sql
        FROM Metric SELECT sum(foo.count) SINCE 30 minutes ago
        ```

        メトリクスの詳細については、 [メトリクスの種類に関するドキュメント](/docs/telemetry-data-platform/ingest-manage-data/understand-data/metric-data-type#metric-types) を参照してください。
      </td>
    </tr>
  </tbody>
</table>

## ルール作りの限界 [#limits]

これらの制限は、メトリックルールの作成に影響します。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        制限
      </th>

      <th>
        コメントコメント
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        アカウント制限
      </td>

      <td>
        1つのアカウントには、最大1,000個のメトリック作成ルールを設定できます。
      </td>
    </tr>

    <tr>
      <td>
        メトリックルールの制限
      </td>

      <td>
        ルールができる。

        * 作成する [最大10個のメトリクス](#multiple-metrics).
        * 1種類のデータ（イベント、ログ、スパン）のみを使用する。
        * 最大20個の属性（ファセット）を選択して、メトリックに含めることができます。
      </td>
    </tr>

    <tr>
      <td>
        タイムウィンドウの制限
      </td>

      <td>
        30 秒の時間枠内の 1 つのメトリックに対する一意のメトリック名/属性値の組み合わせに対する 50K の制限。ロールアップの通常[のカーディナリティ制限](/docs/data-apis/ingest-apis/metric-api/metric-api-limits-restricted-attributes/#requirements)が適用されます。

        30秒のウィンドウ制限で50kを超えると、ルールが無効になり、そのアカウントに次のような[`NrIntegrationError`イベント](/docs/telemetry-data-platform/manage-data/nrintegrationerror)が作成されます。

        * ルールの詳細
        * ファセットの数が多すぎることについてのメッセージ
        * の`newRelicFeature`属性値 `eventToMetric`
      </td>
    </tr>
  </tbody>
</table>

## カーディナリティ制限 [#attributes-limit]

[ルール作成の制限](#limits) には、メトリック名と属性値のユニークな組み合わせの数の制限が含まれる。この制限が存在するのは、属性や属性値の数が多いと、報告されるデータのサイズが指数関数的に増加する可能性があるためです。

<DNT>
  **Example metric creation rule that attaches five attributes:**
</DNT>

```sql
FROM ProcessSample SELECT summary(ioTotalReadBytes) 
WHERE entityType = 'ComputeSample' 
FACET awsRegion, awsAvailabilityZone, commandName, entityName, processId
```

仮に5つの属性のそれぞれが1分間に10個のユニークな値を報告したとすると、ユニークなメトリック名と属性の組み合わせの数は理論的には最大で10x10x10x10x10、つまり100,000個になります。複数のユニークな値を持つ複数の属性は、多数のユニークなメトリックエントリにつながります。

実際には、属性は関連していることが多いため、これは通常は当てはまりません。たとえば、1つの属性が`hostname`で、別の属性が`awsRegion`の場合、ホスト名Aが表示されると、その属性は常にAWSリージョンBにあります。ホスト名Aやその他のAWSリージョンの値は表示されません。

これが、 [NRQLの作成プロセス](#create-nrql)中に、 `uniqueCount`関数を使用して、NRQLクエリが生成している一意のメトリック名/属性値の組み合わせの数を確認することが重要である理由です。

## 1つのルールから複数の評価指標が得られる [#multiple-metrics]

1つのルールで作成できるメトリクスは10個までです。1つのルールで1つずつ作成されたメトリクスと、1つのルールで作成されたメトリクスの間には、機能的な違いはありません。1つのルールで複数のメトリクスを作成する理由。

* [rules-per-account limitに到達する可能性が低い](#limits).
* 複数のメトリクスに同じ属性を追加しやすくなりました。

<DNT>
  **Example creating multiple metrics with a single rule:**
</DNT>

```sql
FROM Transaction SELECT uniqueCount(request.headers.userAgent) AS 'server.request.header.userAgent.uniqueCount', 
summary(duration) AS 'server.duration', summary(totalTime) AS 'server.totalTime' 
WHERE appName = 'Browser Monitoring Router' FACET http.statusCode, name, appName, host
```

## メートル単位のネーミング [#naming]

メトリックには、 [NRQLルール作成プロセス](#create-nrql)の一部として、 `AS`句で名前が付けられます。次のNRQLの例では、メトリックの名前は`io.totalread.bytes`です。

```sql
FROM ProcessSample SELECT summary(ioTotalReadBytes) AS 'io.totalread.bytes' 
WHERE entityType = 'ComputeSample' FACET awsRegion, awsAvailabilityZone, commandName
```

`AS`句で割り当てられた名前がない場合、メトリック名は照会された属性の名前です。この例では、名前が割り当てられていない場合、メトリック名は`ioTotalReadBytes`になります。

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        メトリック名
      </th>

      <th>
        要件および推奨
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        要件
      </td>

      <td>
        メトリックのネーミングに関する要件

        * 255（UTF-16）以下の16ビットコード単位。制限を確実に守るためには、各文字列を数えやすい127以下にすることです。

        * スペースはありません。

        * 手紙から始める。

          強力なメトリック名の例

        * `rubyvm.memory.heap_used`

        * `redis.container.cpu.percent`

        * `memcached.process_virtual_memory.bytes`
      </td>
    </tr>

    <tr>
      <td>
        長さと構造
      </td>

      <td>
        他の人がこの指標を見つけ、理解し、使用することが容易になるような名称と構造を決定する。

        * 読みやすさを考慮して、メートル法の名前は40文字以下にすることをお勧めします。長くなると切れてしまったり、他の名称と重なってしまう可能性があります。
        * メトリックの命名方法は、お客様のビジネスロジックによって異なります。名前空間を使用してメトリック名の前に付けることもできますし、より一般的な名前にする必要があるかもしれません。
      </td>
    </tr>

    <tr>
      <td>
        名前の中の成分
      </td>

      <td>
        メトリクス名の中にコンポーネント（メトリクスのソースや測定対象物など）を作りたい場合は、broadからspecificへ（左から右へ）進むことをお勧めします。

        1. New Relic のメトリック名と一致させるために、これらのコンポーネントをドットで区切ります。

        2. そして、ドットの中の単語をアンダースコアで区切ります。

           <DNT>
             **Example:**
           </DNT>

           ```
           application.page_view.duration
           ```
      </td>
    </tr>

    <tr>
      <td>
        属性
      </td>

      <td>
        メトリック名に属性を入れないようにします。属性とは、クラスタやアベイラビリティー・ゾーンのように、データのフィルタリングやファセットに使用できるメトリックの品質です。

        <DNT>**Example:**</DNT> メトリクス名に可用性ゾーンを含めると、そのメトリクスではすべての可用性ゾーンにわたる結果を表示できなくなります。
      </td>
    </tr>

    <tr>
      <td>
        メートル法の名称変更
      </td>

      <td>
        メトリック名を変更した場合、履歴データは **not** その新しい名前に更新されます。過去のデータを照会したりグラフ化するには、古いメトリック名を指定する必要があります。
      </td>
    </tr>
  </tbody>
</table>
