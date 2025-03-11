---
title: Cola de mensajes
tags:
  - Agents
  - Nodejs agent
  - Extend your instrumentation
metaDescription: 'New Relic''s Node.js agentsupports the amqplib RabbitMQ client library, giving you insight into the performance of your message processing.'
freshnessValidatedDate: never
translationType: machine
---

El agente New Relic Node.js es compatible con la [biblioteca cliente amqplib RabbitMQ](https://www.npmjs.com/package/amqplib), lo que le brinda información valiosa sobre el rendimiento del procesamiento de mensajes, tanto para mensajes entrantes como salientes.

La UI de APM mostrará la transacción iniciada a través de la recepción de mensajes de RabbitMQ (suscripción/consumo de mensajes) como <DNT>**Message**</DNT> tareas en segundo plano. La creación de mensajes a través de RabbitMQ también aparece en la traza de la transacción.

Esta característica requiere [la versión 2.0.0 o superior del agente New Relic Node.js.](/docs/release-notes/agent-release-notes/nodejs-release-notes)

## Mejoras de rendimiento con tareas en segundo plano. [#background]

Una forma de aumentar la capacidad de respuesta de la aplicación web es delegar el trabajo a procesos en segundo plano. La cola de mensajes se utiliza comúnmente para esta comunicación entre procesos.

En el contexto de los sistemas de colas de mensajes, la aplicación suele interactuar con los intermediarios de mensajes para enviar y recibir mensajes. La biblioteca cliente `amqplib` permite que la aplicación Node.js interactúe con agentes de mensajes que implementan el protocolo avanzado de cola de mensajes (AMQP) 0.9 o superior.

El agente Node.js de New Relic muestra los mensajes enviados y recibidos utilizando la biblioteca cliente RabbitMQ. Con esta visibilidad, puede ver detalles que incluyen:

* Número de mensajes producidos por tu aplicación
* Tiempo que tu aplicación dedica a publicar mensajes
* Tiempo que su aplicación dedica a procesar mensajes "consumidos"

[APM](#view-queue) agrupa e informa convenientemente operaciones que interactúan con las colas. Al analizar esta información, puede identificar más fácilmente el cuello de botella y las áreas de mejora del rendimiento en su arquitectura de transmisión de mensajes.

## Operaciones en cola [#queue-ops]

Los puntos de entrada admitidos para operaciones de cola aparecen como `Put` (publicar un mensaje) o `Take` (recibir un mensaje) en la interfaz de usuario de APM.

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

## Ver en UIde New Relic [#view-queue]

Las operaciones en cola aparecen en [la página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-dashboard)de APM para la aplicación seleccionada. Las `Put` y `Take` métricas aparecen en la <DNT>**Breakdown table**</DNT> y se categorizan como `MessageBroker` métrica. Aquí hay un ejemplo:

<img
  title="metric-breakdown-table"
  alt="metric-breakdown-table"
  src="/images/apm_screenshot-crop_messaging-breakdown-table.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Applications > (select an app) > Transactions > (select a transaction):**</DNT> El <DNT>**Breakdown table**</DNT> de la transacción categoriza las operaciones de cola como `MessageBroker` métrica y las etiqueta como `Put` (publicar un mensaje) o `Take` (recibir un mensaje).
</figcaption>

La [página**de resumen de la traza de la transacción** ](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)puede mostrar las operaciones `Put` y `Take` en la sección **Componentes más lentos** . Por ejemplo:

<img
  title="slow-message-component"
  alt="slow-message-component"
  src="/images/apm_screenshot-crop_trx-slowest-components.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > Applications > (select an app) > Summary > (select a transaction trace):**</DNT> En este ejemplo, la traza de la transacción <DNT>**Summary**</DNT> seleccionada muestra las operaciones de RabbitMQ en el gráfico de barras de colores. La sección <DNT>**Slowest components**</DNT> también enumera los resultados de RabbitMQ `Put` y `Take` .
</figcaption>

La [página<DNT>**Transaction trace**</DNT> ](/docs/apm/transactions/transaction-traces/transaction-traces)también incluye una pestaña dedicada <DNT>**Messages**</DNT> que muestra un resumen de la actividad de mensajes que ocurrió como parte de la transacción.

<Callout variant="tip">
  Puede [seleccionar la traza de la transacción](/docs/apm/transactions/transaction-traces/viewing-transaction-traces) desde las páginas <DNT>**Summary**</DNT> o <DNT>**Transactions**</DNT> de la aplicación en <DNT>**APM**</DNT>.
</Callout>
