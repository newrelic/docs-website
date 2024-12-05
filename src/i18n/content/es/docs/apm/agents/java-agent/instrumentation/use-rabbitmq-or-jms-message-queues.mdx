---
title: Utilice RabbitMQ o JMS para cola de mensajes
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: 'To troubleshoot queue operations'' performance problems, use RabbitMQ with New Relic APM for Java applications.'
freshnessValidatedDate: never
translationType: machine
---

Nuestro agente de Java versión 3.9.0 o superior admite tanto la [API Java Message Service (JMS) 1.1](https://docs.oracle.com/javaee/7/api/javax/jms/package-summary.html#package.description) como la [biblioteca cliente Java RabbitMQ](https://www.rabbitmq.com/java-client.html). Esto le brinda información valiosa sobre el rendimiento del procesamiento de mensajes, tanto para mensajes entrantes como salientes.

La UI de <InlinePopover type="apm"/>mostrará la transacción iniciada a través de JMS 1.1 o la recepción de mensajes de RabbitMQ como <DNT>**Message**</DNT> tareas en segundo plano. La creación de mensajes vía JMS o RabbitMQ también aparece en la traza de la transacción.

## Requisitos [#installation]

Para monitor la actividad de su cliente RabbitMQ, asegúrese de haber descargado e instalado [el agente de Java versión 3.9.0 o superior](/docs/release-notes/agent-release-notes/java-release-notes) de New Relic.

Para monitor JMS, asegúrese de haber descargado e instalado [el agente de Java versión 3.3.1 o superior](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-331) de New Relic.

<Callout variant="tip">
  Para un monitoreo más profundo de RabbitMQ, recomendamos [nuestra integración en el host de RabbitMQ](/docs/infrastructure/host-integrations/host-integrations-list/rabbitmq-monitoring-integration).
</Callout>

## Mejoras de rendimiento con tareas en segundo plano. [#background]

Una forma de aumentar la capacidad de respuesta de la aplicación web es delegar el trabajo a procesos en segundo plano. La cola de mensajes se utiliza comúnmente para esta comunicación entre procesos.

En el contexto de los sistemas de colas de mensajes, la aplicación suele interactuar con los intermediarios de mensajes para enviar y recibir mensajes. La biblioteca cliente Java RabbitMQ permite que la aplicación Java interactúe con intermediarios de mensajes que implementan el Protocolo avanzado de cola de mensajes (AMQP) 0.9.

El agente de Java de New Relic muestra los mensajes enviados y recibidos utilizando la biblioteca cliente RabbitMQ y JMS. Con esta visibilidad, puede ver detalles que incluyen:

* Número de mensajes manejados por tu aplicación
* Tiempo que tu aplicación dedica a publicar mensajes
* Tiempo que dedica su aplicación a procesar mensajes "eliminados de la cola"

[Los APM](#view-queue) agrupan e informan convenientemente operaciones que interactúan con colas temporales. Al analizar esta información, puede identificar más fácilmente áreas donde los procesos toman demasiado tiempo y pueden manejarse mejor como mensajes en segundo plano.

## Operaciones en cola [#queue-ops]

Los puntos de entrada admitidos para operaciones de cola aparecen como `Put` (publicar un mensaje) o `Take` (recibir un mensaje) en la interfaz de usuario de APM.

<table>
  <thead>
    <tr>
      <th width={150}>
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
        `basicPublish`
      </td>

      <td>
        `basicGet`, `nextDelivery` y `handleDelivery`
      </td>
    </tr>

    <tr>
      <td>
        JMS
      </td>

      <td>
        `send`
      </td>

      <td>
        `receive`, `receiveNoWait` y `onMessage`
      </td>
    </tr>
  </tbody>
</table>

## Ver operaciones de la cola de mensajes [#view-queue]

Las operaciones en cola aparecen en [la página <DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-dashboard)de APM para la aplicación seleccionada. Las `Put` y `Take` métricas aparecen en la <DNT>**Breakdown table**</DNT> y se categorizan como `MessageBroker` métrica. [La traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces) puede proporcionar detalles adicionales.

<img
  title="Breakdown table inside the transaction details page"
  alt="Breakdown table inside the transaction details page"
  src="/images/apm_screenshot-crop_breakdown-table.webp"
/>

<figcaption>
  Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services**</DNT> y haga clic en su aplicación. En la sección <DNT>**Monitor**</DNT> , haga clic en <DNT>**Transaction**</DNT>, seleccione una transacción para ver la tabla de desglose.
</figcaption>

Otros lugares donde puede aparecer información de RabbitMQ:

* La [página**de resumen de la traza de la transacción** ](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)puede mostrar las operaciones `Put` y `Take` en la sección **Componentes más lentos** .
* La página **Transaction trace** puede incluir una pestaña dedicada **Messages** .
