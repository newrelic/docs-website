---
title: rate()를 사용하여 기간 시각화
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to use the rate() function to visualize event occurrences over a set period of time.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

`rate()` 함수는 기간을 기준으로 이벤트 발생을 버킷으로 집계합니다. 이를 사용하여 이벤트 발생 빈도를 시각화할 수 있습니다. 예를 들어 지난 하루 동안 시간당 발생한 오류 수를 확인할 수 있습니다. 모니터링하고 싶은 큰 시간 창이 있지만 더 큰 창 내에서 더 짧은 기간을 시각화해야 하는 경우 NRQL에서 이 기능을 많이 활용할 수 있습니다.

## rate() 함수를 사용하세요

`rate()` 사용 시 `TIMESERIES` 키워드를 사용하여 시간 경과에 따른 비율이 포함된 선 차트를 생성할 수 있습니다. `TIMESERIES` 생략하면 시간 경과에 따른 평균 단일 요율 값을 표시하는 빌보드 보기가 생성됩니다. 다음은 지난 30분 동안의 분당 트랜잭션 오류를 꺾은선형 차트 형식으로 시각화하는 쿼리입니다.

```sql
SELECT rate(count(*), 1 minute) AS 'Errors' FROM TransactionError TIMESERIES SINCE 30 minutes ago
```

<img
  title="Rate function with time series"
  alt="A screenshot displaying an example of the rate() function"
  src="/images/example_rate_function.webp"
/>

`TIMESERIES` 포함하지 않고 동일한 쿼리를 실행하면 일정 기간 동안의 평균 발생을 나타내는 단일 값이 표시됩니다.

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

## 최신Rate()를 사용하여 변화율을 추적하세요.

`latestRate()` 함수는 지정된 속성과 시간 간격을 사용하여 가장 최근의 두 데이터 포인트에 대한 값의 변화율을 반환합니다. 함수의 단위는 `change in attribute` / `time window` 입니다. 이 기능을 사용하여 최첨단 추세를 확인할 수 있습니다.

다음은 지난 두 번의 트랜잭션 오류에 대해 초당 기간 변경을 반환하는 쿼리 예시입니다.

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
  `latestRate()` 함수는 가장 최근의 데이터 포인트 2개를 사용하며 때로는 결과가 불안정할 수도 있다는 점을 기억하세요. 더 큰 이벤트 발생 버킷에 대한 평균을 원하는 경우에는 `rate()` 사용을 고려하십시오.
</Callout>

## Rate() 예시

<CollapserGroup>
  <Collapser
    id="error-by-hostname"
    title="호스트별 오류율 시각화"
  >
    호스트를 기준으로 선을 차트로 표시하려면 `host` 별로 `FACET` 할 수 있습니다. 이 예에서는 `rate()` 함수를 사용하여 잘못된 호스트를 식별하는 방법을 보여줍니다.

    ```sql
    SELECT rate(count(*), 1 minute) FROM TransactionError TIMESERIES SINCE 30 minutes ago FACET host
    ```

    쿼리를 실행하면 각 호스트에 대해 별도의 줄이 포함된 차트가 반환됩니다.
  </Collapser>

  <Collapser
    id="average-appname-errors"
    title="지난 30분 동안 appName별 평균 오류"
  >
    애플리케이션별 오류를 보려면 `appName` 로 `FACET` 할 수 있습니다. 이 예에서는 지난 한 시간 동안 애플리케이션별 평균 오류를 식별하는 방법을 보여줍니다.

    ```sql
    SELECT rate(count(*), 1 minute) FROM TransactionError SINCE 30 minutes ago FACET appName
    ```

    쿼리를 실행하면 애플리케이션 이름별로 결과 테이블이 반환됩니다.
  </Collapser>
</CollapserGroup>
