---
title: 느린 쿼리 세부정보 보기
tags:
  - APM
  - APM UI pages
  - Monitoring
metaDescription: 'APM: How to view slow query data, and how to enable and configure slow query data collection.'
freshnessValidatedDate: '2024-06-07T00:00:00.000Z'
translationType: machine
---

APM 에서는 [칩셋 트레이스를](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) 수집할 때 추가 <DNT>**Slow query**</DNT> 데이터를 찾아 [<DNT>**Databases**</DNT>](/docs/apm/apm-ui-pages/monitoring/databases-page-view-operations-throughput-response-time/) 페이지에 표시할 수도 있습니다. 느린 쿼리 데이터가 무엇인지, 어디서 찾을 수 있는지, 어떻게 구성하는지 살펴보겠습니다.

## 느린 쿼리 데이터 샘플링 [#about]

[거울 트레이스가](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) 보고되면, 불쾌한 쿼리 기능은 해당 트레이스에서 가장 느린 데이터베이스 쿼리를 샘플링하고 이에 대한 데이터를 [<DNT>**Databases**</DNT>](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) 페이지에 보고합니다. 느린 쿼리 데이터에는 다음이 포함될 수 있습니다.

* 쿼리 세그먼트 기간
* 계획 쿼리/설명(인정된 경우)
* [호스트 및 인스턴스 수준 세부정보](/docs/apm/applications-menu/features/analyze-database-instance-level-performance-issues) (에이전트에서 지원하는 경우)

## 느린 쿼리 데이터 보기 [#db_slowsql]

APM UI에서 느린 SQL 쿼리에 대한 데이터를 볼 수 있습니다.

1. <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**
   </DNT>

   으)로 이동합니다.

2. 앱을 선택하세요.

3. <DNT>
     **Monitor**
   </DNT>

   섹션에서

   <DNT>
     **Databases**
   </DNT>

   클릭합니다.

4. 데이터베이스 트랜잭션을 선택합니다.

5. 세부 정보를 보려면 [느린 쿼리를](#slowsql_details) 클릭하세요.

   <img
     title="Screenshot showing the APM databases page with slow queries"
     alt="Screenshot showing the APM databases page with slow queries"
     src="/images/apm_screenshot-full_apm-databases-ui.webp"
   />

예상되는 느린 쿼리 데이터가 표시되지 않으면 [문제 해결 팁](#troubleshooting) 을 따르세요.

## 구성 [#settings]

일반적으로 다음 방법 중 하나로 느린 쿼리 설정을 구성할 수 있습니다.

* 에이전트 설정(아래 참조)
* [서버 측 구성](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) (에이전트에서 사용 가능한 경우)

에이전트 구성은 서버 측 구성보다 더 많은 옵션을 제공합니다. 느린 쿼리를 구성하는 방법은 사용자의 설정과 기본 설정에 따라 다릅니다. 자세한 내용은 특정 에이전트에 대한 설명서를 참조하십시오.

<CollapserGroup>
  <Collapser
    id="go"
    title="가다"
  >
    에이전트 구성 옵션:

    * 활성화/비활성화: [`SlowQuery.Enabled`](/docs/agents/go-agent/configuration/go-agent-configuration#slow-query)
    * 느린 쿼리 임계값: [`SlowQuery.Threshold`](/docs/agents/go-agent/configuration/go-agent-configuration#slow-query-threshold)
    * 다른 데이터 저장소 구성 옵션은 [데이터 저장소 추적 프로그램 구성](/docs/agents/go-agent/configuration/go-agent-configuration#datastore-tracer) 을 참조하십시오.
  </Collapser>

  <Collapser
    id="java"
    title="자바"
  >
    에이전트 구성:

    * 느린 쿼리 임계값: [`explain_threshold`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-explain_threshold)

    * 느린 트랜잭션 및 쿼리와 관련된 기타 설정은 [트랜잭션 추적 프로그램 구성 옵션을](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-Transaction-tracer) 참조하세요.

      [서버 측 구성](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc) 을 통해 기본 느린 쿼리 설정을 편집할 수도 있습니다.
  </Collapser>

  <Collapser
    id="net"
    title=".그물"
  >
    에이전트 구성:

    * 활성화/비활성화: [`slowSql enabled`](/docs/agents/net-agent/configuration/net-agent-configuration#slow_sql)

    * 느린 쿼리 임계값: [ExplainThreshold](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-explainThreshold)

    * 느린 트랜잭션 및 쿼리와 관련된 기타 설정은 [트랜잭션 추적 프로그램 구성 옵션](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer) 및 [데이터 저장소 추적 프로그램 옵션을](/docs/agents/net-agent/configuration/net-agent-configuration#datastore_tracer) 참조하세요.

      [서버 측 구성](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc) 을 통해 기본 느린 쿼리 설정을 편집할 수도 있습니다.
  </Collapser>

  <Collapser
    id="node"
    title="노드.js"
  >
    에이전트 구성:

    * 활성화/비활성화: [`enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#slow-sql-enabled)

    * 임계값: [`explain_threshold`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#explain_threshold)

    * 최대 느린 쿼리 샘플: [`max_samples`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#slow-sql-max-samples)

    * 느린 트랜잭션 및 쿼리와 관련된 기타 설정은 [트랜잭션 추적 프로그램 구성 옵션을](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config) 참조하세요.

      Node.js 에이전트의 경우 느린 쿼리 데이터의 [서버 측 구성](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) 이 불가능합니다.
  </Collapser>

  <Collapser
    id="php"
    title="PHP"
  >
    에이전트 구성:

    * 활성화/비활성화: [`slow_sql`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-slowsql)

    * 임계값: [`explain_threshold`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-epthreshold)

    * 느린 트랜잭션 및 쿼리와 관련된 기타 설정은 [트랜잭션 추적 프로그램 구성 옵션을](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-settings) 참조하세요.

      PHP 에이전트의 경우 [서버 측 구성](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) 이 불가능합니다.
  </Collapser>

  <Collapser
    id="python"
    title="파이썬"
  >
    에이전트 구성:

    * 느린 쿼리 임계값: [`explain_threshold`](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-explain-threshold)

    * 느린 트랜잭션 및 쿼리와 관련된 다른 설정은 [트랜잭션 추적 프로그램 구성 옵션](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings) 및 [데이터 저장소 추적 프로그램 옵션을](/docs/agents/python-agent/configuration/python-agent-configuration#datastore-tracer-settings) 참조하세요.

      [서버 측 구성](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc) 을 통해 기본 느린 쿼리 설정을 편집할 수도 있습니다.
  </Collapser>

  <Collapser
    id="ruby"
    title="루비"
  >
    에이전트 구성:

    * 활성화/비활성화: [`slow_sql.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql-enabled)

    * 느린 쿼리 임계값:[`slow_sql.explain_threshold`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql-explain_threshold)

    * 느린 트랜잭션 및 쿼리와 관련된 다른 설정은 [트랜잭션 추적 프로그램 구성 옵션](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer) 및 [느린 SQL 구성 옵션을](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql) 참조하세요.

      애플리케이션의 에이전트 언어에 해당하는 경우 [서버 측 구성](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc) 을 사용하여 기본 느린 쿼리 설정을 편집할 수도 있습니다.
  </Collapser>
</CollapserGroup>

## 느린 쿼리 측정항목 [#slowsql_details]

느린 쿼리 목록에는 다음 측정항목이 포함됩니다.

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Response time`
      </td>

      <td>
        샘플링된 문에 대한 평균 응답 시간(밀리초)입니다.
      </td>
    </tr>

    <tr>
      <td>
        `Sample count`
      </td>

      <td>
        샘플에서 식별된 느린 쿼리 수입니다.
      </td>
    </tr>
  </tbody>
</table>

추가 세부정보를 보려면 개별 느린 쿼리를 선택하세요.

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Start time`
      </td>

      <td>
        스택 추적이 표시된 데이터 수집을 시작했을 때.
      </td>
    </tr>

    <tr>
      <td>
        `Max time`
      </td>

      <td>
        샘플의 모든 유사한 쿼리 문의 최대 시간입니다.
      </td>
    </tr>

    <tr>
      <td>
        `Action`
      </td>

      <td>
        쿼리를 호출하는 작업 또는 프로세스입니다.
      </td>
    </tr>

    <tr>
      <td>
        `Query`
      </td>

      <td>
        느린 것으로 보고된 쿼리입니다. 구성에 따라 쿼리의 일부가 난독화될 수 있습니다.
      </td>
    </tr>

    <tr>
      <td>
        `Stack trace`
      </td>

      <td>
        코드에서 명령문이 호출된 위치입니다.
      </td>
    </tr>
  </tbody>
</table>

MySQL의 경우 쿼리에서 발생한 일과 쿼리 속도를 높이기 위해 할 수 있는 작업을 설명하는 쿼리 분석을 제공합니다. 다른 데이터베이스는 가능할 때마다 계획 설명을 표시합니다.

## 문제 해결: 느린 쿼리 데이터 없음 [#troubleshooting]

에러 쿼리 데이터가 표시되지 않으면 느린 SQL에 대해 특정 데이터베이스를 축소하지 않을 가능성이 있습니다.

설정 문제가 있을 수도 있습니다.

* 느린 쿼리 기능이 비활성화되었습니다.
* 레버값 지속 시간이 너무 높게 설정되어 있어 드릴 쿼리가 보고되지 않습니다.
* 쿼리 난독화 설정(일반적으로 `record_sql` 또는 유사)은 `Off` 로 설정할 수 있습니다.

자세한 내용은 [설정 옵션을](#settings) 참조하세요.
