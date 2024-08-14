---
title: 조회를 사용하여 테이블 데이터 쿼리
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'In New Relic, how to query data added via CSV lookup tables.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

[CSV 형식의 룩업테이블을 업로드할](/docs/logs/ui-data/lookup-tables-ui) 때 `lookup()` 함수를 사용하여 NRQL 쿼리의 해당 데이터에 액세스할 수 있습니다. 룩업테이블을 사용하면 텔레메트리 데이터를 구문 분석하고 데이터 그룹화를 사용자 정의하는 데 도움이 됩니다.

## 기본 쿼리 구문 [#basic-syntax]

다음 조회 쿼리는 `storeNames` 이라는 테이블을 사용하고 해당 테이블에서 모든 데이터를 선택하는 이 함수의 기본 구문을 보여줍니다.

```sql
FROM lookup(storeNames)
SELECT *
```

이 쿼리는 동일한 테이블에서 특정 속성을 선택합니다.

```sql
FROM lookup(storeNames)
SELECT store_ID, store_name, description
```

## 쿼리 제한 [#query-limits]

룩업 테이블은 다른 NRQL 데이터 유형보다 쿼리 시 더 높은 [`LIMIT`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit) 를 지원합니다. 쿼리, [하위 쿼리](/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql/), [중첩 집계](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query/) 내에서 룩업 테이블을 사용할 때 `LIMIT` 을 최대 20,000까지 설정할 수 있습니다.

<Callout variant="tip">
  하위 쿼리 내에서 조회 테이블을 사용하는 경우 외부 쿼리 `LIMIT` 은 조회 테이블도 사용하지 않는 한 표준 최대값으로 제한됩니다.
</Callout>

## 기술적 한계 [#limitations]

* NRQL 공지 조건에서는 조회 데이터를 사용할 수 없습니다.

* 조회 테이블을 업로드한 [계정](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure/#organization-accounts) 에서만 조회 테이블을 쿼리할 수 있습니다.

* 다음 NRQL 절은 조회 쿼리에서 지원되지 않습니다.

  * `TIMESERIES`

  * `COMPARE WITH`

  * `EXTRAPOLATE`

  * <DNT>
      **Note:**
    </DNT>

    내부 쿼리에 조회 쿼리가 포함된 경우 이러한 절을 사용할 수 있습니다. 예를 보려면 [이 쿼리를](#item-ids) 참조하세요.

## 조회 예 [#query-with-data]

룩업 테이블을 사용하면 엑셀에 저장된 텔메트리 데이터와 데이터를 결합하는 쿼리를 사용할 수 있습니다.

다음은 몇 가지 쿼리 예입니다.

<CollapserGroup>
  <Collapser
    id="avoid-hardcording"
    title="긴 호스트 목록을 하드코딩하지 마십시오."
  >
    이 쿼리는 조회 테이블에 포함된 호스트 이름을 쿼리하여 긴 호스트 목록을 하드코딩하는 것을 방지합니다.

    ```sql
    FROM Log
    SELECT count(*)
    WHERE hostname IN (FROM lookup(myHosts) SELECT uniques(myHost))
    ```
  </Collapser>

  <Collapser
    id="using-join"
    title="JOIN을 사용한 쿼리"
  >
    `JOIN` 쿼리를 사용하면 데이터를 더 쉽게 이해할 수 있습니다. 예를 들어 맞춤형 대시보드 유형에 대한 이 쿼리는 `storeNames` 테이블을 사용하여 총 매출과 함께 매장 이름을 표시합니다.

    ```sql
    FROM StoreEvent
    JOIN (FROM lookup(storeNames) SELECT store_ID as storeId, storeName AS name LIMIT 10000) ON shopId = storeId
    SELECT shopId, storeName, totalSales
    ```

    [쿼리 제한](#query-limits) 섹션에서 언급한 것처럼 룩업 테이블은 다른 NRQL 데이터 유형보다 더 높은 제한을 지원하기 때문에 10,000개의 제한이 허용됩니다.
  </Collapser>

  <Collapser
    id="map-values"
    title="더 넓은 범주에 값 매핑"
  >
    이 쿼리는 조회 테이블 데이터에서 `JOIN` 절을 사용하여 `shopId` 값을 더 넓은 `storeCategory` 값에 매핑합니다. 이를 통해 이러한 광범위한 범주를 기반으로 `StoreEvent` 레코드에 대한 집계를 수행하고 데이터에서 새로운 통찰력을 추출할 수 있습니다.

    ```sql
    FROM StoreEvent
    JOIN (FROM lookup(storeCategories) SELECT store_ID as storeId, storeCategory) ON shopId = storeId
    SELECT sum(totalSales) FACET storeCategory
    ```
  </Collapser>

  <Collapser
    id="status-codes"
    title="상태 코드 번역"
  >
    다음은 상태 코드를 읽을 수 있는 상태 요약으로 변환하는 쿼리입니다.

    ```sql
    FROM Transaction
      JOIN (FROM lookup(statusCodeTable) SELECT status_code, status_summary, status_definition)
      ON http.statusCode=status_code
    SELECT count(*) FACET status_summary
    ```

    다음은 몇 가지 예시 결과입니다.

    <img
      title="Screenshot of query for lookups translating status codes"
      alt="Screenshot of query for lookups translating status codes"
      src="/images/nrql_screenshot-crop_example-status-codes.webp"
    />
  </Collapser>

  <Collapser
    id="item-ids"
    title="항목 ID 번역"
  >
    이 쿼리는 여러 NRQL 기능이 함께 작동하여 로그 데이터 쿼리에서 비즈니스 정보를 얻을 수 있는 방법을 보여줍니다. 아래 쿼리:

    1. [`aparse()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-aparse)사용하여 로그 메시지에서 항목에 대한 정보를 추출합니다.
    2. 사용자 친화적인 항목 이름을 얻기 위해 조회 테이블 데이터에 `JOIN` 사용합니다.
    3. 항목 이름과 저장된 항목 수의 테이블을 출력합니다.

       ```sql
       WITH aparse(message, 'POST to carts: * body: {"itemId":"*","unitPrice":*}%') AS (URL, ItemID, Price)
       FROM Log
         JOIN (FROM lookup(itemNames) SELECT ItemID, itemName) ON ItemID
       SELECT count(*) FACET itemName
       WHERE message LIKE 'POST to carts%'
       SINCE 30 days ago
       ```

       다음은 몇 가지 예시 결과입니다.

       <img
         title="Screenshot of query for lookups translating item IDs"
         alt="Screenshot of query for lookups translating item IDs"
         src="/images/nrql_screenshot-crop_lookup-query-translate-item-ids.webp"
       />
  </Collapser>

  <Collapser
    id="geoip"
    title="지리적 정보를 사용하여 위치 분석"
  >
    이 쿼리는 조회와 [GeoIP를](/docs/logs/ui-data/parsing#geo) 결합하여 가장 실패한 상태인 위치를 찾습니다.

    ```sql
    FROM Log
      JOIN (FROM lookup(statusCodeTable) SELECT status_code, status_summary, status_definition)
      ON CacheResponseStatus=status_code
    SELECT count(*) WHERE ClientIP.countryName IS NOT NULL AND status_summary != 'Success'
    FACET ClientIP.countryName, status_summary, CacheResponseStatus
    SINCE 1 day ago LIMIT MAX
    ```

    다음은 몇 가지 예시 결과입니다.

    <img
      title="Screenshot of query for GeoIP info"
      alt="Screenshot of query for GeoIP info"
      src="/images/nrql_screenshot-crop_lookup-query-geoip.webp"
    />
  </Collapser>
</CollapserGroup>
