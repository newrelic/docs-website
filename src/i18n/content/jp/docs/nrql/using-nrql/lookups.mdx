---
title: ルックアップを使用してテーブル データをクエリする
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'In New Relic, how to query data added via CSV lookup tables.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

[CSV 形式のルックアップテーブルをアップロードする](/docs/logs/ui-data/lookup-tables-ui)と、 `lookup()`関数を使用して NRQL クエリでそのデータにアクセスできます。 ルックアップテーブルを使用すると、テレメトリーデータの解析やデータのグループ化のカスタマイズに役立ちます。

## 基本的なクエリ構文 [#basic-syntax]

次の検索クエリは、 `storeNames`という名前のテーブルを使用し、そのテーブルからすべてのデータを選択するこの関数の基本的な構文を示しています。

```sql
FROM lookup(storeNames)
SELECT *
```

このクエリは、同じテーブルから特定の属性を選択します。

```sql
FROM lookup(storeNames)
SELECT store_ID, store_name, description
```

## クエリの制限 [#query-limits]

ルックアップテーブルは、クエリ時に他の NRQL データ型よりも高い[`LIMIT`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit)をサポートします。 クエリ、[サブクエリ](/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql/)、および[ネストされた集計](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query/)内でルックアップテーブルを使用する場合、 `LIMIT`を最大 20,000 に設定できます。

<Callout variant="tip">
  サブクエリ内でルックアップ テーブルを使用する場合、ルックアップ テーブルも使用しない限り、外側のクエリ`LIMIT`は標準の最大値によって制限されます。
</Callout>

## 技術的な制限 [#limitations]

* NRQL アラート条件ではルックアップ データを使用できません。

* ルックアップ テーブルをアップロードした[アカウント](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure/#organization-accounts)からのみルックアップ テーブルにクエリを実行できます。

* 次の NRQL 句はルックアップ クエリではサポートされていません。

  * `TIMESERIES`

  * `COMPARE WITH`

  * `EXTRAPOLATE`

  * <DNT>
      **Note:**
    </DNT>

    内部クエリに検索クエリが含まれている場合は、これらの句を使用できます。 例については[、このクエリを](#item-ids)参照してください。

## 検索の例 [#query-with-data]

ルックアップテーブルを使用すると、New Relic に保存されているテレメトリーデータとデータを組み合わせるクエリを使用できます。

次は、クエリの例です。

<CollapserGroup>
  <Collapser
    id="avoid-hardcording"
    title="ホストの長いリストをハードコーディングしないでください"
  >
    このクエリは、ルックアップ テーブルに含まれるホスト名をクエリすることで、ホストの長いリストのハードコーディングを回避します。

    ```sql
    FROM Log
    SELECT count(*)
    WHERE hostname IN (FROM lookup(myHosts) SELECT uniques(myHost))
    ```
  </Collapser>

  <Collapser
    id="using-join"
    title="JOINを使用したクエリ"
  >
    `JOIN`クエリを使用すると、データを理解しやすくなります。 たとえば、カスタムイベント タイプのこのクエリは、 `storeNames`テーブルを使用して、店舗名と総売上高を表示します。

    ```sql
    FROM StoreEvent
    JOIN (FROM lookup(storeNames) SELECT store_ID as storeId, storeName AS name LIMIT 10000) ON shopId = storeId
    SELECT shopId, storeName, totalSales
    ```

    [クエリ制限の](#query-limits)セクションで説明したように、ルックアップテーブルは他の NRQL データ型よりも高い制限をサポートしているため、これにより 10,000 という制限が可能になります。
  </Collapser>

  <Collapser
    id="map-values"
    title="値をより広範なカテゴリにマッピングする"
  >
    このクエリは、ルックアップ テーブル データの`JOIN`句を使用して、 `shopId`値をより広範な`storeCategory`値にマップします。これにより、これらのより広範なカテゴリに基づいて`StoreEvent`レコードに対して集計を実行し、データから新しい分析情報を抽出できるようになります。

    ```sql
    FROM StoreEvent
    JOIN (FROM lookup(storeCategories) SELECT store_ID as storeId, storeCategory) ON shopId = storeId
    SELECT sum(totalSales) FACET storeCategory
    ```
  </Collapser>

  <Collapser
    id="status-codes"
    title="ステータスコードを変換する"
  >
    以下は、ステータス コードを読み取り可能なステータスの概要に変換するクエリです。

    ```sql
    FROM Transaction
      JOIN (FROM lookup(statusCodeTable) SELECT status_code, status_summary, status_definition)
      ON http.statusCode=status_code
    SELECT count(*) FACET status_summary
    ```

    結果の例をいくつか示します。

    <img
      title="Screenshot of query for lookups translating status codes"
      alt="Screenshot of query for lookups translating status codes"
      src="/images/nrql_screenshot-crop_example-status-codes.webp"
    />
  </Collapser>

  <Collapser
    id="item-ids"
    title="アイテムIDを翻訳する"
  >
    このクエリは、複数の NRQL 機能が連携してログ データのクエリからビジネス情報を取得する方法を示しています。以下のクエリ:

    1. [`aparse()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-aparse)を使用してログ メッセージからアイテムに関する情報を抽出します。
    2. ルックアップ テーブル データで`JOIN`を使用して、わかりやすい項目名を取得します
    3. アイテム名とアイテムの格納数のテーブルを出力します

       ```sql
       WITH aparse(message, 'POST to carts: * body: {"itemId":"*","unitPrice":*}%') AS (URL, ItemID, Price)
       FROM Log
         JOIN (FROM lookup(itemNames) SELECT ItemID, itemName) ON ItemID
       SELECT count(*) FACET itemName
       WHERE message LIKE 'POST to carts%'
       SINCE 30 days ago
       ```

       結果の例をいくつか示します。

       <img
         title="Screenshot of query for lookups translating item IDs"
         alt="Screenshot of query for lookups translating item IDs"
         src="/images/nrql_screenshot-crop_lookup-query-translate-item-ids.webp"
       />
  </Collapser>

  <Collapser
    id="geoip"
    title="地理情報を使用して場所を分析する"
  >
    このクエリはルックアップと [GeoIP を](/docs/logs/ui-data/parsing#geo) 組み合わせて、最も失敗したステータスを持つ場所を見つけます。

    ```sql
    FROM Log
      JOIN (FROM lookup(statusCodeTable) SELECT status_code, status_summary, status_definition)
      ON CacheResponseStatus=status_code
    SELECT count(*) WHERE ClientIP.countryName IS NOT NULL AND status_summary != 'Success'
    FACET ClientIP.countryName, status_summary, CacheResponseStatus
    SINCE 1 day ago LIMIT MAX
    ```

    結果の例をいくつか示します。

    <img
      title="Screenshot of query for GeoIP info"
      alt="Screenshot of query for GeoIP info"
      src="/images/nrql_screenshot-crop_lookup-query-geoip.webp"
    />
  </Collapser>
</CollapserGroup>
