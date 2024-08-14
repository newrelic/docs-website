---
title: Cola de mensajes
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: 'New Relic for Ruby supports the Bunny RabbitMQ client library, giving you insight into the performance of your message processing.'
freshnessValidatedDate: never
translationType: machine
---

El agente New Relic Ruby es compatible con la [biblioteca cliente Bunny RabbitMQ](https://rubygems.org/gems/bunny), brindándole información valiosa sobre el rendimiento del procesamiento de mensajes, tanto para mensajes entrantes como salientes.

La UI de APM muestra la transacción iniciada a través de la recepción de mensajes de RabbitMQ (suscripción/consumo de mensajes) como <DNT>**Message**</DNT> tareas en segundo plano. La creación de mensajes a través de RabbitMQ también aparece en la traza de la transacción.

## Requisitos

Requiere [la versión 4.3.0 o superior del agente New Relic Ruby](/docs/release-notes/agent-release-notes/ruby-release-notes). La instrumentación es automática para [las versiones compatibles de Bunny AMQP](/docs/agents/ruby-agent/getting-started/ruby-agent-requirements-supported-frameworks#other) y no requiere configuración adicional.

## Mejoras de rendimiento con tareas en segundo plano. [#background]

Una forma de aumentar la capacidad de respuesta de la aplicación web es delegar el trabajo a procesos en segundo plano. La cola de mensajes se utiliza comúnmente para esta comunicación entre procesos.

En el contexto de los sistemas de colas de mensajes, la aplicación suele interactuar con los intermediarios de mensajes para enviar y recibir mensajes. La biblioteca cliente RabbitMQ Bunny permite que la aplicación Ruby interactúe con intermediarios de mensajes que implementan el Protocolo avanzado de cola de mensajes (AMQP).

El agente Ruby de New Relic muestra los mensajes enviados y recibidos utilizando la biblioteca cliente RabbitMQ. Con esta visibilidad, puede ver detalles que incluyen:

* Número de mensajes producidos por tu aplicación
* Tiempo que tu aplicación dedica a publicar mensajes
* Tiempo que su aplicación dedica a procesar mensajes "consumidos"

[APM](#view-queue) agrupa e informa convenientemente operaciones que interactúan con las colas. Al analizar esta información, puede identificar más fácilmente el cuello de botella y las áreas de mejora del rendimiento en su arquitectura de transmisión de mensajes.

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
        `publish`
      </td>

      <td>
        `pop`

        `subscribe (with block)`
      </td>
    </tr>
  </tbody>
</table>

## Ver en UIde New Relic [#view-queue]

Las operaciones de la cola de mensajes son visibles en varios lugares de la UI de APM:

<CollapserGroup>
  <Collapser
    id="view-in-txn-page"
    title="Página de transacciones"
  >
    Las operaciones en cola aparecen en [la página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-dashboard)de APM para la aplicación seleccionada. Las `Put` y `Take` métricas aparecen en la <DNT>**Breakdown table**</DNT> y se categorizan como `MessageBroker` métrica. Aquí hay un ejemplo:

    <img
      title="transactions_page.png"
      alt="transactions_page.png"
      src="/images/apm_screenshot-full_transactions-overview.webp"
    />

    [Traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces) también proporciona detalles adicionales para los mensajes.

    <Callout variant="tip">
      Puede [seleccionar la traza de la transacción](/docs/apm/transactions/transaction-traces/viewing-transaction-traces) desde las páginas <DNT>**Summary**</DNT> o <DNT>**Transactions**</DNT> de la aplicación en APM.
    </Callout>
  </Collapser>

  <Collapser
    id="view-in-txn-trace-summary"
    title="Página resumen de traza de la transacción"
  >
    La [página**de resumen de la traza de la transacción** ](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page)puede mostrar las operaciones `Put` y `Take` en la sección **Componentes más lentos** . Por ejemplo:

    <img
      title="trace_summary.png"
      alt="trace_summary.png"
      src="/images/apm_screenshot-full_trace-summary.webp"
    />
  </Collapser>

  <Collapser
    id="view-in-txn-trace-page"
    title="Pestaña de detalles de la traza de la transacción"
  >
    La página <DNT>**Transaction trace**</DNT> incluye una pestaña dedicada <DNT>**Details**</DNT> que muestra información más detallada sobre la transacción. Aquí hay un ejemplo:

    <img
      title="trace_details.png"
      alt="trace_details.png"
      src="/images/apm_screenshot-full_trace-details.webp"
    />
  </Collapser>
</CollapserGroup>
