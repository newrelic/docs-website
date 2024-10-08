---
title: 메시지 대기열
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: 'New Relic''s Node.js agentsupports the amqplib RabbitMQ client library, giving you insight into the performance of your message processing.'
freshnessValidatedDate: never
translationType: machine
---

New Relic Node.js 에이전트는 수신 및 발신 메시지 모두에 대한 메시지 처리 성능에 대한 통찰력을 제공하는 [amqplib RabbitMQ 클라이언트 라이브러리](https://www.npmjs.com/package/amqplib) 를 지원합니다.

APM UI는 RabbitMQ 메시지 수신(메시지 구독/소비)을 통해 시작된 트랜잭션을 <DNT>**Message**</DNT> 백그라운드 작업으로 표시합니다. RabbitMQ를 통한 메시지 생성은 프로세서 트레이스에도 나타납니다.

이 기능을 사용하려면 New Relic [Node.js 에이전트 버전 2.0.0 이상](/docs/release-notes/agent-release-notes/nodejs-release-notes) 이 필요합니다.

## 백그라운드 작업으로 성능 향상 [#background]

웹 애플리케이션의 응답성을 높이는 한 가지 방법은 작업을 백그라운드 프로세스에 위임하는 것입니다. 메시지 큐는 일반적으로 이러한 프로세스 간 통신에 사용됩니다.

메시지 대기열 시스템과 관련하여 응용 프로그램은 일반적으로 메시지 브로커와 상호 작용하여 메시지를 보내고 받습니다. `amqplib` 클라이언트 라이브러리를 사용하면 Node.js 애플리케이션이 AMQP(Advanced Message Queuing Protocol) 0.9 이상을 구현하는 메시지 브로커와 인터페이스할 수 있습니다.

New Relic의 Node.js 에이전트는 RabbitMQ 클라이언트 라이브러리를 사용하여 주고받은 메시지를 보여줍니다. 이 가시성을 통해 다음을 포함한 세부 정보를 볼 수 있습니다.

* 앱에서 생성된 메시지 수
* 앱에서 메시지 게시에 소요한 시간
* 앱이 "소비된" 메시지를 처리하는 데 소비한 시간

[APM](#view-queue) 은 대기열과 상호 작용하는 작업을 편리하게 그룹화하고 보고합니다. 이 정보를 분석하면 메시지 전달 아키텍처에서 병목 현상과 성능 향상을 위한 영역을 보다 쉽게 식별할 수 있습니다.

## 대기열 작업 [#queue-ops]

대기열 작업에 지원되는 진입점은 APM의 사용자 인터페이스에서 `Put` (메시지 게시) 또는 `Take` (메시지 수신)으로 나타납니다.

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Queue operations**
        </DNT>
      </th>

      <th>
        <DNT>
          **Publish a message (`Put` in UI)**
        </DNT>
      </th>

      <th>
        <DNT>
          **Receive a message (`Take` in UI)**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        RabbitMQ
      </td>

      <td>
        `publish`

        `sendToQueue`
      </td>

      <td>
        `get`

        `consume`
      </td>
    </tr>
  </tbody>
</table>

## New Relic UI에서 보기 [#view-queue]

대기열 작업은 선택한 앱에 대한 APM의 [<DNT>**Transactions**</DNT> 페이지](/docs/apm/applications-menu/monitoring/transactions-dashboard) 에 나타납니다. `Put` 및 `Take` 지수는 <DNT>**Breakdown table**</DNT> 에 표시되며 `MessageBroker` 지수로 분류됩니다. 예는 다음과 같습니다.

<img
  title="metric-breakdown-table"
  alt="metric-breakdown-table"
  src="/images/apm_screenshot-crop_messaging-breakdown-table.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Applications > (select an app) > Transactions > (select a transaction):**</DNT> 트랜잭션의 <DNT>**Breakdown table**</DNT> 는 대기열 작업을 `MessageBroker` 지표로 분류하고 이를 `Put` (메시지 게시) 또는 `Take` (메시지 수신)으로 레이블을 지정합니다.
</figcaption>

[**프로세서 트레이스 요약** 페이지의](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page) **Slowest components** 섹션에 `Put` 및 `Take` 작업이 표시될 수 있습니다. 예를 들어:

<img
  title="slow-message-component"
  alt="slow-message-component"
  src="/images/apm_screenshot-crop_trx-slowest-components.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Applications > (select an app) > Summary > (select a transaction trace):**</DNT> 이 예에서 선택한 프로세서 트레이스의 <DNT>**Summary**</DNT> RabbitMQ 작업을 색상이 지정된 바 차트로 표시합니다. <DNT>**Slowest components**</DNT> 섹션에는 RabbitMQ `Put` 및 `Take` 결과도 나열되어 있습니다.
</figcaption>

[<DNT>**Transaction trace**</DNT> 페이지에는](/docs/apm/transactions/transaction-traces/transaction-traces) 트랜잭션의 일부로 발생한 메시지 활동 요약을 표시하는 전용 <DNT>**Messages**</DNT> 탭도 포함되어 있습니다.

<Callout variant="tip">
  <DNT>**APM**</DNT> 에 있는 앱의 <DNT>**Summary**</DNT> 또는 <DNT>**Transactions**</DNT> 페이지에서 [프로세서 트레이스를 선택할](/docs/apm/transactions/transaction-traces/viewing-transaction-traces) 수 있습니다.
</Callout>
