---
title: Instrumentación Java personalizada
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: An overview of the ways you can implement custom instrumentation for your New Relic-monitored Java application.
freshnessValidatedDate: never
translationType: machine
---

[APM para Java](/docs/agents/java-agent/getting-started/introduction-new-relic-java) normalmente producirá datos de rendimiento útiles de forma automática. Sin embargo, si New Relic no es [compatible con su framework](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent), o si desea configurar un monitoreo adicional, deberá implementar instrumentación personalizada.

[La instrumentación personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/) le permite rastrear interacciones que no son capturadas por la instrumentación automática de New Relic y le permite agregar detalles a su [traza de la transacción](/docs/traces/transaction-traces), para ayudarlo a identificar problemas clave.

New Relic recopila [métricas y eventos](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data) de muchos marcos automáticamente. Si está utilizando un [framework o componente compatible](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent), es posible que vea cierta información de transacción lista para usar y se puede usar instrumentación personalizada para complementar la información que el agente informa de forma predeterminada.

<Callout variant="important">
  Si está utilizando un framework compatible, pero no ve [transacciones](/docs/apm/applications-menu/monitoring/transactions-page), obtenga soporte en [support.newrelic.com](https://support.newrelic.com) para asegurarse de que la instrumentación framework esté funcionando.
</Callout>

## Cuándo elegir instrumentación personalizada [#choosing]

Elija instrumentación personalizada en estas situaciones:

* New Relic no es compatible con su framework y las transacciones no aparecen en la UI
* Le gustaría agregar detalles a su traza de la transacción
* La traza de la transacción incluye grandes bloques de `application code` tiempo sin suficiente detalle.

## Implementar instrumentación personalizada [#implementing]

Puede implementar instrumentación personalizada con uno de estos métodos:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Method**
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
        La New Relic UIde reliquia
      </td>

      <td>
        New Relic para Java incluye una opción en la UI para instrumentación personalizada llamada [Editor de instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-quickly-customize-your-java-instrumentation). Esta opción no requiere ninguna modificación directa del código de su aplicación, por lo que es una buena opción si no desea o no puede modificar su código. Sin embargo, el editor tiene una funcionalidad bastante limitada en comparación con la API del agente de Java.
      </td>
    </tr>

    <tr>
      <td>
        Anotación API
      </td>

      <td>
        Con la API New Relic agente de Java, puede [anotar los métodos en el código de su aplicación](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-annotation) que desea monitor. El método de anotación es sólido y fácil de solucionar. Si está dispuesto a modificar su código fuente, la anotación es el método recomendado. Si tiene muchos métodos que desea instrumentar, es posible que prefiera [la instrumentación XML](#xml).

        Para obtener más información sobre la API y sus otras funciones, consulte [Introducción a la API del agente de Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api).
      </td>
    </tr>

    <tr>
      <td>
        XML
      </td>

      <td>
        Si no puede modificar su código, o si necesita instrumentar muchos métodos, la instrumentación XML es el mejor método de instrumentación personalizada. Con este método, especificas las clases que deseas instrumentar en un archivo XML externo.

        Si bien la instrumentación XML es poderosa, también es más difícil de usar que otros métodos de instrumentación. Para necesidades de instrumentación más simples, New Relic recomienda [anotaciones](#annotation) o [instrumentación a través de la UI](#instrument-ui). Para más información, consulte [Instrumentación Java por XML](/docs/java/custom-instrumentation-by-xml).
      </td>
    </tr>
  </tbody>
</table>

También puede monitor Java Management Extensions (JMX) a través de instrumentación personalizada. JMX es una forma de monitor y administrar aplicaciones, dispositivos y servicios. Puede implementar el monitoreo JMX a través de un [archivo <DNT>**YAML**</DNT> externo](/docs/java/custom-jmx-instrumentation-by-yml).
