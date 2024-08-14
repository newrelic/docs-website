---
title: '트랜잭션 추적: 데이터베이스 쿼리 페이지'
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: 'In APM, transaction traces can include database query data, which gives you deeper insight into performance issues.'
freshnessValidatedDate: never
translationType: machine
---

[APM](/docs/apm/new-relic-apm/getting-started/welcome-new-relic-apm) 에서 프로세서 트레이스에는 데이터베이스 쿼리 데이터가 포함될 수 있습니다. 느린 트랜잭션을 분석하거나 데이터베이스 쿼리 수집 설정을 변경하려면 <DNT>**Database queries**</DNT> 페이지를 사용하세요.

## 데이터베이스 쿼리 찾기 [#view-sql]

데이터베이스 쿼리 데이터가 [선택한 프로세서 트레이스](/docs/apm/transactions/transaction-traces/transaction-traces#find-view) 와 연결된 경우 <DNT>**Transaction trace**</DNT> 세부정보 페이지에 <DNT>**Database queries**</DNT> 페이지가 표시됩니다.

트랜잭션 추적에 대한 데이터베이스 데이터가 표시될 것으로 예상되지만 표시되지 않는 경우 [데이터베이스 쿼리 설정](#settings) 을 변경해야 할 수 있습니다.

<img
  title="transaction trace database queries tab"
  alt="A screenshot depicting the transaction trace database queries tab in the UI."
  src="/images/apm_screenshot-crop_transaction-trace-database-queries-tab.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace) > Database queries**</DNT> 으)로 이동합니다.
</figcaption>

## 데이터베이스 쿼리 사용 [#use]

**Database queries** 페이지를 사용하여 느린 트랜잭션을 분석하고 문제를 해결할 수 있는 상황은 다음과 같습니다.

* [APM **개요** 페이지](/docs/apm/applications-menu/monitoring/apm-overview-page) 에서 트랜잭션이 비정상적으로 느린 것을 알 수 있습니다.
* [트랜잭션 추적](/docs/apm/transactions/transaction-traces/transaction-traces) 을 선택하면 해당 트랜잭션에 대한 자세한 정보를 얻을 수 있습니다.
* **Database queries** 페이지를 선택하여 트레이스의 느린 쿼리를 검사하고 이를 기초로 사용하여 [문제를 해결하고 앱 성능을 향상시킵니다](#troubleshooting).
* 데이터베이스 쿼리와 연결된 스택 추적이 있는 경우 **database queries table** 의 행을 클릭하면 형식이 지정된 스택 추적을 볼 수 있습니다.

<img
  title="transaction trace stacktrace view"
  alt="A screenshot showing the stacktrace view of a transaction trace in the UI"
  src="/images/apm_screenshot-crop_transaction-trace-stacktrace-view.webp"
/>

## 데이터베이스 쿼리 설정 구성 [#settings]

다른 [트랜잭션 추적 설정](/docs/apm/transactions/transaction-traces/configure-transaction-traces) 을 변경하는 것과 같은 방식으로 데이터베이스 쿼리 설정을 변경할 수 있습니다. 예를 들어 New Relic 에이전트 구성을 통해 또는 일부 에이전트의 경우 UI를 통해.

일반적인 데이터베이스 쿼리 설정 변경 사항은 다음과 같습니다.

* [난독화하거나 쿼리 수집을 끄는 대신 원시 쿼리 데이터 수집](/docs/apm/transactions/transaction-traces/configure-transaction-traces#record-sql)
* 스택 추적 임계값 변경
* 쿼리 설명 계획 수집 켜기

## 데이터베이스 쿼리를 사용하여 성능 향상 [#troubleshooting]

다음은 앱의 데이터베이스 성능을 개선하기 위한 몇 가지 팁입니다.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Use database queries**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        시간
      </td>

      <td>
        `TOTAL DURATION` 이 전체 트랜잭션 시간에 많은 시간을 기여하는 쿼리를 찾습니다. 이것은 인덱스 또는 기타 최적화를 사용하여 데이터베이스 쿼리를 향상시키기에 좋은 위치를 나타냅니다.
      </td>
    </tr>

    <tr>
      <td>
        중복 쿼리
      </td>

      <td>
        같은 종류의 정보를 반복적으로 쿼리하는 쿼리를 찾습니다. 예를 들어, 개별 계정 ID를 조회하기 위한 여러 쿼리. 단일 쿼리로 모든 관련 항목을 가져올 수 있도록 쿼리를 `INCLUDE` 특정 값(계정 ID 1, 2, 10, 14, 17 등)으로 다시 작성해 보십시오.
      </td>
    </tr>

    <tr>
      <td>
        데이터베이스 오버헤드
      </td>

      <td>
        쿼리의 구조를 살펴보고 여러 유형의 정보를 단일 호출로 결합할 수 있는 기회가 있는지 확인하십시오. 예를 들어 계정 ID, 이름 등을 쿼리합니다. 예를 들어 데이터베이스 센터가 다른 지리적 위치에 있는 경우에 유용합니다. 이렇게 하면 오버헤드가 줄어들기 때문입니다.

        데이터베이스 요청 및 응답에 걸리는 시간은 매우 빠를 수 있습니다. 그러나 요청을 더 적은 수의 호출로 결합하면 그 시간을 훨씬 더 줄일 수 있습니다.
      </td>
    </tr>

    <tr>
      <td>
        MySQL
      </td>

      <td>
        앱의 기본 [APM <DNT>**Summary**</DNT>](/docs/apm/applications-menu/monitoring/apm-overview-page) 페이지에서 기본 차트의 데이터베이스 시간을 다른 처리 시간과 비교하세요. 다른 처리 시간에 비해 데이터베이스 시간이 갑자기 급증하거나 더 길어지면 문제가 있음을 나타낼 수 있습니다.
      </td>
    </tr>
  </tbody>
</table>

## 다른 느린 쿼리 찾기 [#slow-queries]

**추적 세부 정보** 페이지는 특정 거래의 세부 정보를 검사하는 데 유용합니다. 애플리케이션에서 가장 느린 모든 쿼리를 한 곳에서 보려면 [느린 쿼리 기능](/docs/apm/applications-menu/monitoring/viewing-slow-query-details) 을 사용하세요.
