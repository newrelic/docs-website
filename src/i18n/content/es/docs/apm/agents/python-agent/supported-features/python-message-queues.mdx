---
title: Python cola de mensajes
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: 'The Python agent supports the Pika RabbitMQ, Kafka Python, and Confluent Kafka client libraries, giving you insight into the performance of your message processing.'
freshnessValidatedDate: never
translationType: machine
---

El agente Python admite la [biblioteca cliente Pika RabbitMQ](https://pypi.python.org/pypi/pika), [la biblioteca cliente Kafka Python](https://pypi.python.org/pypi/kafka-python) y la [biblioteca cliente Confluent Kafka](https://pypi.org/project/confluent-kafka/) , lo que le brinda visibilidad del rendimiento de su procesamiento de mensajes, tanto para mensajes entrantes como salientes.

La UI de New Relic mostrará las transacciones iniciadas mediante la recepción de mensajes (suscripción/consumo de mensajes) como <DNT>**Message**</DNT> tareas en segundo plano. La creación del mensaje también aparece en la traza de la transacción.

## Requisitos

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

Para obtener más información, consulte [las notas de la versión](/docs/release-notes/agent-release-notes/python-release-notes).

<Callout variant="caution">
  Las tareas de mensajes de RabbitMQ no se inician para el consumidor mediante [TornadoConnection](https://pika.readthedocs.io/en/latest/modules/adapters/tornado.html#pika.adapters.tornado_connection.TornadoConnection).
</Callout>

<Callout variant="caution">
  Cuando se consumen mensajes a través de Kafka, se informan las transacciones para cada mensaje a medida que lo consume el consumidor. La transacción no se informará para operaciones de consumo masivo en las que se consumen varios mensajes a la vez.
</Callout>

## Mejoras de rendimiento con tareas en segundo plano. [#background]

Una forma de aumentar la capacidad de respuesta de la aplicación web es delegar el trabajo a procesos en segundo plano. La cola de mensajes se utiliza comúnmente para esta comunicación entre procesos.

En el contexto de los sistemas de colas de mensajes, la aplicación suele interactuar con los intermediarios de mensajes para enviar y recibir mensajes. En el caso de RabbitMQ Pika, esta biblioteca cliente permite que la aplicación Python interactúe con corredores de mensajes que implementan el Protocolo avanzado de cola de mensajes (AMQP) 0.9 o superior.

El agente Python muestra los mensajes enviados y recibidos utilizando la biblioteca del cliente. Con esta visibilidad, puede ver detalles que incluyen:

* Número de mensajes producidos por tu aplicación
* Tiempo que su aplicación dedica a publicar/producir mensajes
* Tiempo que su aplicación dedica a procesar/consumir mensajes

[APM](#view-queue) agrupa e informa convenientemente operaciones que interactúan con las colas. Al analizar esta información, puede identificar más fácilmente el cuello de botella y las áreas de mejora del rendimiento en su arquitectura de transmisión de mensajes.

## Soporte métrico

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
        Sí. Conocido como `Put`
      </td>

      <td>
        Sí. Conocido como `Produce`
      </td>

      <td>
        Sí. Conocido como `Produce`
      </td>
    </tr>

    <tr>
      <td>
        <DNT>
          **Receive a Message**
        </DNT>
      </td>

      <td>
        Sí. Conocido como `Take`
      </td>

      <td>
        Sí. Conocido como `Consume`
      </td>

      <td>
        Sí. Conocido como `Consume`
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
        Sí
      </td>

      <td>
        Sí
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
        Sí
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
        Sí
      </td>

      <td>
        No
      </td>
    </tr>
  </tbody>
</table>

## Ver en UIde New Relic [#view-queue]

Las operaciones en cola aparecen en [la página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-dashboard)de APM para la aplicación seleccionada.

Las métricas `Put` (publicar un mensaje) y `Take` (recibir un mensaje) aparecen en el <DNT>**Breakdown table**</DNT> y están categorizadas como `MessageBroker` métrica para RabbitMQ. Aquí hay un ejemplo:

<img
  title="screen-rabbitmq-transaction.png"
  alt="New Relic for Python rabbitmq task"
  src="/images/apm_screenshot-crop_rabbitmq-transaction-task.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction):**</DNT> El <DNT>**Breakdown table**</DNT> de la transacción clasifica las operaciones de cola como `MessageBroker` métrica para RabbitMQ y las etiqueta como `Put` (publicar un mensaje) o `Take` (recibir un mensaje).
</figcaption>

[Traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces) también proporciona detalles adicionales para los mensajes.

<Callout variant="tip">
  Puede [seleccionar la traza de la transacción](/docs/apm/transactions/transaction-traces/viewing-transaction-traces) desde las páginas <DNT>**Summary**</DNT> o <DNT>**Transactions**</DNT> de la aplicación en APM.
</Callout>

La [página**de resumen de la traza de la transacción** ](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)puede mostrar las operaciones `Put` y `Take` para RabbitMQ en la sección **Componentes más lentos** . Por ejemplo:

<img
  title="screen-rabbitmq-trace-slowest.png"
  alt="New Relic for Python rabbitmq transaction trace summary"
  src="/images/apm_screenshot-crop_rabbit-mq-transaction-trace-summary.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > (select a transaction trace):**</DNT> En este ejemplo, la traza de la transacción <DNT>**Summary**</DNT> seleccionada muestra las operaciones de RabbitMQ en el gráfico de barras de colores. La sección <DNT>**Slowest components**</DNT> también enumera los resultados de RabbitMQ `Put` y `Take` .
</figcaption>
