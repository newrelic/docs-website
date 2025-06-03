---
title: Python message queues
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: 'The Python agent supports the Pika RabbitMQ, Kafka Python, and Confluent Kafka client libraries, giving you insight into the performance of your message processing.'
redirects:
  - /docs/agents/python-agent/supported-features/python-message-queues
  - /docs/agents/python-agent/supported-features/use-rabbitmq-message-queues
  - /docs/agents/python-agent/supported-features/use-kafka-message-queues
  - /docs/agents/python-agent/supported-features/message-queues
freshnessValidatedDate: never
---

The Python agent supports the [<DNT>Pika</DNT> <DNT>RabbitMQ</DNT> client library](https://pypi.python.org/pypi/pika), [<DNT>Kafka</DNT> <DNT>Python</DNT> client library](https://pypi.python.org/pypi/kafka-python), and the [<DNT>Confluent</DNT> <DNT>Kafka</DNT> client library](https://pypi.org/project/confluent-kafka/) giving you visibility into the performance of your message processing, for both incoming and outgoing messages.

The New Relic UI will show transactions initiated via message receipt (subscribe/consume messages) as <DNT>**Message**</DNT> background tasks. Message creation also appears in transaction traces.

## Requirements

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Message Queue**
        </DNT>
      </th>

      <th>
        <DNT>
          **Python agent version required**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Pika RabbitMQ
      </td>

      <td>
        2.88.0.72
      </td>
    </tr>

    <tr>
      <td>
        Kafka Python
      </td>

      <td>
        8.2.0.181
      </td>
    </tr>

    <tr>
      <td>
        Confluent Kafka
      </td>

      <td>
        8.2.0.181
      </td>
    </tr>
  </tbody>
</table>

For more information, see [the release notes](/docs/release-notes/agent-release-notes/python-release-notes).

<Callout variant="caution">
  RabbitMQ message tasks are not started for consumers using [TornadoConnection](https://pika.readthedocs.io/en/latest/modules/adapters/tornado.html#pika.adapters.tornado_connection.TornadoConnection).
</Callout>

<Callout variant="caution">
  When consuming messages via Kafka, transactions are reported for each message as it is consumed by the consumer. Transactions will not be reported for bulk consumption operations where multiple messages are consumed at once.
</Callout>

## Performance improvements with background tasks [#background]

One way to increase responsiveness of web applications is to delegate work to background processes. Message queues are commonly used for this inter-process communication.

In the context of message queuing systems, applications typically interact with message brokers to send and receive messages. In the case of RabbitMQ Pika, this client library allows Python applications to interface with message brokers that implement the Advanced Message Queueing Protocol (AMQP) 0.9 or higher.

The Python agent shows messages sent and received using the client libraries. With this visibility, you can see details including:

* Number of messages produced by your app
* Time your app spends publishing/producing messages
* Time your app spends processing/consuming messages

[APM](#view-queue) conveniently groups and reports operations that interact with queues. By analyzing this information, you can more easily identify bottlenecks and areas for performance improvement in your message passing architecture.

## Supported Metrics

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Message Queue**
        </DNT>
      </th>

      <th>
        <DNT>
          **Pika RabbitMQ**
        </DNT>
      </th>

      <th>
        <DNT>
          **Kafka Python**
        </DNT>
      </th>

      <th>
        <DNT>
          **Confluent Kafka**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **Publish a Message**
        </DNT>
      </td>

      <td>
        Yes--Referred to as `Put`
      </td>

      <td>
        Yes--Referred to as `Produce`
      </td>

      <td>
        Yes--Referred to as `Produce`
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Receive a Message**
        </DNT>
      </td>

      <td>
        Yes--Referred to as `Take`
      </td>

      <td>
        Yes--Referred to as `Consume`
      </td>

      <td>
        Yes--Referred to as `Consume`
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Serialization**
        </DNT>
      </td>

      <td>
        No
      </td>

      <td>
        Yes
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Deserialization**
        </DNT>
      </td>

      <td>
        No
      </td>

      <td>
        No
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Heartbeat**
        </DNT>
      </td>

      <td>
        No
      </td>

      <td>
        Yes
      </td>

      <td>
        No
      </td>
    </tr>
  </tbody>
</table>

## View in New Relic UI [#view-queue]

Queue operations appear on APM's [<DNT>**Transactions**</DNT> page](/docs/apm/applications-menu/monitoring/transactions-dashboard) for the selected app.

The `Put` (publish a message) and `Take` (receive a message) metrics appear in the <DNT>**Breakdown table**</DNT> and are categorized as `MessageBroker` metrics for RabbitMQ. Here is an example:

<img
  title="screen-rabbitmq-transaction.png"
  alt="New Relic for Python rabbitmq task"
  src="/images/apm_screenshot-crop_rabbitmq-transaction-task.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction):**</DNT> The transaction’s <DNT>**Breakdown table**</DNT> categorizes queue operations as `MessageBroker` metrics for RabbitMQ and labels them as `Put` (publish a message) or `Take` (receive a message).
</figcaption>

[Transaction traces](/docs/apm/transactions/transaction-traces/transaction-traces) also provide additional details for messages.

<Callout variant="tip">
  You can [select transaction traces](/docs/apm/transactions/transaction-traces/viewing-transaction-traces) from the app's <DNT>**Summary**</DNT> or <DNT>**Transactions**</DNT> pages in APM.
</Callout>

The [**Transaction trace summary** page](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page) may show `Put` and `Take` operations for RabbitMQ in the **Slowest components** section. For example:

<img
  title="screen-rabbitmq-trace-slowest.png"
  alt="New Relic for Python rabbitmq transaction trace summary"
  src="/images/apm_screenshot-crop_rabbit-mq-transaction-trace-summary.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > (select a transaction trace):**</DNT> In this example, the selected transaction trace's <DNT>**Summary**</DNT> shows RabbitMQ operations in the colored bar chart. The <DNT>**Slowest components**</DNT> section also lists the RabbitMQ `Put` and `Take` results.
</figcaption>
