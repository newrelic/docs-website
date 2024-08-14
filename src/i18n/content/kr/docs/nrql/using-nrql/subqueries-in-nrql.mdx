---
title: 여러 쿼리를 연결하려면 하위 쿼리를 사용하세요.
metaDescription: 'How to use subqueries in NRQL, the New Relic query language.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

NRQL을 사용하면 다른 쿼리 내에 중첩된 쿼리인 <DNT>**subquery**</DNT> 을 실행할 수 있습니다. 하위 쿼리는 다른 쿼리 내에 중첩된 하나의 쿼리입니다. 이를 통해 한 쿼리의 결과를 다른 쿼리에서 사용할 수 있습니다. 하위 쿼리를 사용하면 다음을 수행할 수 있습니다.

* 상위 엔티티의 하위 엔티티에 대한 계산 수행
* 인프라 에이전트의 CPU 사용률을 기반으로 CPU 로드가 높은 호스트에 대한 오류 로그 보기

NRQL에서 하위 쿼리는 [`SELECT`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#state-select) 문과 [`WHERE`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-where) 절에 나타날 수 있습니다.

다음은 평균 이상의 기간을 가진 트랜잭션 수를 가져오는 쿼리의 예입니다.

```sql
SELECT count(*) FROM Transaction WHERE duration > (SELECT average(duration) FROM Transaction)
```

하위 쿼리의 결과는 컨텍스트에서 의미가 있어야 합니다. 위의 예에서 `WHERE` 절의 보다 큼 조건에는 단일 값을 반환하는 하위 쿼리가 필요합니다. 값 집합을 반환하는 하위 쿼리(예: [`uniques()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-uniques) 하위 쿼리)는 실패합니다.

하나의 하위 쿼리를 다른 하위 쿼리 안에 중첩할 수도 있습니다. NRQL은 단일 쿼리 내에서 중첩되거나 중첩되지 않은 최대 3개의 하위 쿼리를 허용합니다.

하위 쿼리의 시간 범위는 [`SINCE`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-since)/[`UNTIL`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-until) 로 명시적으로 지정하지 않는 한 외부 쿼리의 시간 범위와 동일합니다. 대시보드의 [타임 피커](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) 에서 창을 선택하면 하위 쿼리의 시간 범위가 외부 쿼리의 시간 범위와 맞춰집니다. 해당 차트에 대해 <DNT>**Ignore Time Picker**</DNT> 설정한 경우 하위 쿼리의 시간 범위와 외부 쿼리의 시간 범위는 동일하지 않습니다.

## 하위 쿼리 실행 [#subquery-execution]

쿼리 실행 중에 각 하위 쿼리는 독립적으로 실행되며 해당 결과는 외부 쿼리에서 상수 값 또는 값 집합으로 사용됩니다. 이 실행 모델로 인해 하위 쿼리는 외부 쿼리의 속성과 값을 참조하지 못할 수 있습니다.

[쿼리 기간 제한](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/#query-duration) 은 하위 쿼리가 있는 쿼리에 적용됩니다.즉, 모든 하위 쿼리와 외부 쿼리는 기간 제한 내에서 실행을 완료해야 합니다.

하위 쿼리가 반환할 수 있는 최대 결과 수는 [`LIMIT MAX` 값인](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit) 5,000과 동일합니다. 해당 제한을 초과하면 불완전한 결과가 발생할 수 있으며 "하위 쿼리가 최대 결과 멤버 제한에 도달하여 불완전한 결과가 발생할 수 있습니다."라는 오류 메시지가 나타날 수 있습니다.

## 하위 쿼리 및 중첩 집계 [#subquery-vs-nested-aggregation]

유사해 보이지만 [하위 쿼리는 중첩 쿼리의 결과를 집계할 수 있는 중첩 집계](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query) 와 다릅니다. 중첩된 집계는 `FROM` 절에서 사용되는 반면 하위 쿼리는 `SELECT` 문 및 `WHERE` 절에서 사용됩니다.

## 제한 [#subquery-limitations]

* NRQL 공지 조건 또는 E2M(이벤트에 대한 지표) 규칙에서는 하위 쿼리가 지원되지 않습니다. 하위 쿼리가 있는 쿼리는 데이터에 대해 여러 번의 전달이 필요하기 때문에 하위 쿼리는 스트리밍 알림 또는 스트리밍 데이터 처리를 기반으로 하는 다른 제품과 호환되지 않습니다.
* 쿼리가 여러 결과 집합을 반환하도록 하는 `TIMESERIES` 및 `COMPARE WITH` 절은 하위 쿼리에서 지원되지 않습니다.
* 하위 쿼리는 `FACET` 절에 나타날 수 없지만 `FACET CASES` 에서 사용되는 `WHERE` 절에는 나타날 수 있습니다.
* [결과 수에 제한](#subquery-execution) 이 있습니다.

## 하위 쿼리 예 [#subquery-examples]

다음은 몇 가지 예제 하위 쿼리입니다.

<CollapserGroup>
  <Collapser
    id="numeric-conditions"
    title="숫자 조건"
  >
    숫자 조건에서 집계자 `average()`, `count()`, `uniqueCount()` 또는 `latest()` 을 사용하는 쿼리와 같이 단일 숫자 값을 반환하는 쿼리를 사용할 수 있습니다.

    아래 쿼리는 기간이 평균보다 긴 트랜잭션 수를 찾습니다.

    ```sql
    FROM Transaction SELECT count(*)
    WHERE duration > (FROM Transaction SELECT average(duration))
    ```
  </Collapser>

  <Collapser
    id="in-conditions"
    title="IN 조건"
  >
    `uniques()` 을 사용하는 값을 포함하여 값 집합을 반환하는 모든 쿼리는 `IN` 조건에서 사용할 수 있습니다.

    아래 쿼리는 특정 그룹의 하위 트랜잭션의 평균 기간을 계산합니다.

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
    title="패싯 하위 쿼리가 있는 문자열 조건"
  >
    패싯 하위 쿼리와 함께 비교 연산자( `=` , `!=` , `<` 등)를 사용할 때 결과를 단일 값으로 제한하려면 `LIMIT 1` 을 지정해야 합니다.

    아래 쿼리는 평균 프로세서 기간이 가장 높은 계정에 대한 최신 프로세서와 관련된 프로세서 오류를 찾습니다.

    ```sql
    FROM TransactionError SELECT * WHERE guid = (FROM Transaction SELECT latest(guid) FACET accountId ORDER BY average(duration) LIMIT 1)
    ```
  </Collapser>

  <Collapser
    id="delta-query"
    title="델타 쿼리"
  >
    `SELECT` 문의 계산에 하위 쿼리 결과를 사용할 수 있습니다. 하위 쿼리는 외부 쿼리와 다른 시간 범위를 지정할 수 있습니다.

    아래 쿼리는 현재 평균 소니 지속 시간과 지난 주의 평균 지속 시간 간의 차이를 차트로 표시합니다.

    ```sql
    FROM Transaction SELECT average(duration) -
      (FROM Transaction SELECT average(duration)
      SINCE 7 days ago) TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="multiple-subqueries"
    title="여러 하위 쿼리"
  >
    단일 쿼리에 최대 3개의 하위 쿼리가 나타날 수 있습니다.

    아래 쿼리는 지속 기간이 99번째 백분위수보다 긴 프로세서를 담당하는 고유 계정을 찾습니다.

    ```sql
    FROM Transaction SELECT uniques(accountId) WHERE guid IN
      (FROM Transaction SELECT uniques(guid) WHERE duration >
      (FROM Transaction SELECT percentile(duration, 99)))
    ```
  </Collapser>

  <Collapser
    id="function-argument"
    title="함수 인수로서의 하위 쿼리"
  >
    많은 NRQL 함수는 하위 쿼리를 인수로 사용할 수 있습니다.

    아래 쿼리는 평균과 비교하여 개별 프로세서 기간을 보여주는 문자열을 작성합니다.

    ```sql
    SELECT concat('This transaction duration: ', duration, '; average transaction duration: ',
      (SELECT average(duration) FROM Transaction), precision: 4) FROM Transaction
    ```
  </Collapser>
</CollapserGroup>
