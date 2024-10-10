---
title: 중첩 집계를 사용하여 추가 계산 수행
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to use nested aggregation to understand how many users complete a set of steps in a procedure.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

중첩 집계를 사용하면 [NRQL 쿼리](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) 를 완료한 다음 해당 쿼리의 결과를 사용하여 추가 계산을 수행할 수 있습니다. 중첩 집계는 SQL 하위 쿼리 또는 하위 쿼리가 외부 쿼리의 `FROM` 절에 있는 하위 선택 클래스와 유사한 NRQL 기능을 제공합니다.

<Callout variant="tip">
  이 기능은 `SELECT` 및 `WHERE` 절에서 하위 쿼리를 허용하는 하위 [쿼리 기능](/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql) 과 다릅니다.
</Callout>

중첩 집계를 사용하면 여러 쿼리를 작성하지 않고도 다음과 같은 질문에 답할 수 있습니다.

* 내 애플리케이션의 분당 요청 수를 계산한 다음 지난 1시간 동안의 분당 최대 요청 수를 얻으려면 어떻게 해야 합니까?
* 내 모든 서버 또는 호스트의 평균 CPU 사용량을 계산하고 사용량이 90%를 초과하는 항목만 나열하려면 어떻게 해야 합니까?
* 내 모든 사용자 세션에서 즉시 이탈한 비율을 어떻게 알 수 있습니까?

## 중첩된 집계 쿼리 구조 [#requirements]

모든 NRQL 쿼리 [는 `SELECT` 문 또는 `FROM` 절로 시작해야 합니다](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions) . 중첩 집계 쿼리는 `SELECT` 문과 `FROM` 절을 모두 사용하고 괄호 안에 포함된 전체 쿼리 또는 쿼리에 적용합니다.

완전하고 올바른 형식의 중첩 집계 쿼리는 다음과 같습니다.

```sql
SELECT function(attribute)
FROM (
  SELECT function(attribute)
  FROM dataType
  WHERE attribute
  TIMESERIES integer units
)
```

쿼리 및 절 동작에 대한 몇 가지 기타 세부정보:

* 중첩된 쿼리는 세 개 이상의 수준을 가질 수 있습니다.
* 중첩 쿼리의 어느 부분에나 `TIMESERIES` 및 `FACET` 모두 적용할 수 있습니다. 모든 수준에서 동일할 필요는 없습니다.
* `SINCE`, `UNTIL` 및 `COMPARE WITH` 절은 전체 쿼리에 적용되며 가장 바깥쪽 수준에서만 사용할 수 있습니다.

## 중첩 집계 쿼리 예 [#examples]

다음은 중첩된 쿼리의 몇 가지 예입니다.

<CollapserGroup>
  <Collapser
    id="total-tx"
    title="총 트랜잭션 및 최고 1분 응답률"
  >
    이 예에서 내부 쿼리는 먼저 지난 60분마다 `myApp` 에 대한 트랜잭션을 계산한 다음 외부 쿼리가 가장 높은 1분 요청 비율을 반환합니다.

    또한 첫 번째 쿼리 결과(`as rpm`)에 이름을 지정하여 반환된 값에 대한 라벨을 생성할 수 있습니다. 레이블을 추가하지 않으면 이 쿼리는 외부 쿼리에 사용할 개수로 값을 반환합니다.

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
    title="평균 CPU 사용량 및 CPU 사용량 90% 이상"
  >
    이 예에서 내부 쿼리는 모든 호스트의 평균 CPU 사용량을 계산한 다음 외부 쿼리는 CPU 사용량이 위험한 임계값(90%)을 초과하는 호스트로만 결과를 필터링합니다.

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
    title="각 사용자 세션의 페이지 조회수 및 페이지 조회수가 1회인 세션 수"
  >
    이 예에서 내부 쿼리는 각 사용자 세션의 `PageView` 이벤트 수를 계산한 다음 외부 쿼리는 이러한 세션 중 하나의 연결된 보기만 있는 비율을 계산합니다.

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
    title="X보다 느린 상위 N개 트랜잭션 중 엔터티 수"
  >
    이 예에서 내부 쿼리는 평균 트랜잭션 기간이 가장 느린 상위 엔터티 GUID를 찾습니다. 그런 다음 외부 쿼리는 임계값보다 느린 쿼리 수를 찾습니다. 여기서 쿼리는 상위 50개 쿼리를 선택하고 기간 임계값 1초를 기준으로 측정합니다.

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
    title="시간당 평균 디스크 쓰기가 가장 높은 호스트의 백분위수"
  >
    이 예에는 두 개의 중첩 집계가 있습니다. 가장 안쪽 쿼리는 각 호스트에 대해 시간당 평균 `diskWritesPerSecond` 를 찾습니다. 다음 쿼리는 각 호스트의 최대 평균을 찾고, 가장 바깥쪽 쿼리는 해당 최대값의 50번째, 75번째, 99번째 백분위수를 계산합니다.

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
