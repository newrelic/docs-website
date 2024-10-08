---
title: Guía para utilizar la API del agente Node.js
tags:
  - Agents
  - Nodejs agent
  - API guides
metaDescription: 'A goal-focused guide to New Relic''s Node.js agent API, with links to relevant sections of the complete API documentation and tutorials.'
freshnessValidatedDate: never
translationType: machine
---

Nuestra API [del agente Node.js](/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent) le permite ampliar la funcionalidad estándar del agente. Puede utilizar esta API para:

* Crear parámetro de transacción personalizado
* Reportar errores personalizados y métricos

También puede utilizar la API para [instrumentación personalizada](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation). Para [el marco compatible](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent), el agente instrumentó la mayor parte de la actividad automáticamente. La instrumentación personalizada le permite extender ese monitoreo al marco sin instrumentación predeterminada.

Otros recursos:

* La [documentación de la API del agente Node.js en GitHub](http://newrelic.github.io/node-newrelic/) tiene tutoriales más detallados y prácticos.
* También puede ajustar el comportamiento predeterminado del agente Node.js con [los ajustes de configuración](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration).
* Para ver todas las API de New Relic disponibles, consulte [Introducción a las API](/docs/apis/getting-started/introduction-new-relic-apis).

## Requisitos

Para utilizar la API del agente Node.js, asegúrese de tener la [última versión del agente Node.js.](/docs/release-notes/agent-release-notes/nodejs-release-notes) Además, consulte:

* [Requisitos de la API del agente Node.js](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api)
* [Procedimientos iniciales](http://newrelic.github.io/node-newrelic/index.html) en GitHub

## instrumentar faltan secciones de tu código con transacción. [#creating-transactions]

Para instrumentar su aplicación, New Relic separa cada ruta a través de su código en su propia [transacción](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction). New Relic mide (o "instrumentado") el método principal en estas transacciones para medir el rendimiento general de su aplicación y recopila [la traza de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) de transacciones de larga duración para obtener detalles adicionales.

Utilice estos métodos cuando New Relic no esté instrumentada en absoluto en una parte particular de su código:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Hacer esto...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Comenzar a cronometrar un método New Relic no se instrumenta automáticamente
      </td>

      <td>
        Crea una nueva transacción. Ver [`newrelic.startWebTransaction()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#startWebTransaction).
      </td>
    </tr>

    <tr>
      <td>
        Dejar de cronometrar un método una vez completado su trabajo
      </td>

      <td>
        Utilice cualquiera de estas opciones:

        * Devuelve una promesa de la devolución de llamada entregada a [`newrelic.startWebTransaction`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#startWebTransaction).
        * Llame `end` en un [identificador](http://newrelic.github.io/node-newrelic/API.html#getTransaction) (GitHub) devuelto por [`newrelic.getTransaction`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#getTransaction).
      </td>
    </tr>

    <tr>
      <td>
        Evitar que una transacción se informe a New Relic
      </td>

      <td>
        Ignore la transacción usando cualquiera de estas opciones:

        * Ver [Reglas para ignorar solicitudes](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#ignoring)`.`
        * Llame `ignore()` en un [identificador](http://newrelic.github.io/node-newrelic/TransactionHandle.html) (GitHub) devuelto por [`newrelic.getTransaction`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#getTransaction).
      </td>
    </tr>
  </tbody>
</table>

## Métodos específicos de tiempo que utilizan segmentos [#segments]

Si una transacción ya es visible en New Relic, pero no tiene suficientes datos sobre un método en particular que se llamó durante esa transacción, puede crear segmentos para cronometrar esos métodos individuales con mayor detalle. Por ejemplo, es posible que desee cronometrar un método particularmente crítico con lógica compleja.

Utilice este método cuando desee instrumentar un método dentro de una transacción existente:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Hacer esto...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Cronometrar un método particular
      </td>

      <td>
        Ver [`newrelic.startSegment()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#startSegment).
      </td>
    </tr>
  </tbody>
</table>

Para obtener más información sobre la sincronización, consulte el [tutorial de instrumentación en GitHub](http://newrelic.github.io/node-newrelic/tutorial-Instrumentation-Basics.html).

## Mejorar los metadatos de una transacción [#metadata]

A veces, el código al que se dirige es visible en New Relic, pero algunos detalles del método no son útiles. Por ejemplo:

* Es posible que el nombre predeterminado no resulte útil. (Quizás esté causando un [problema de agrupación métrica](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues#video)).
* Quieres agregar [un atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes) a tu transacción para poder filtrarlas.

Utilice estos métodos cuando desee cambiar la forma en que New Relic instrumentó una transacción que ya está visible en New Relic:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Hacer esto...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Cambiar el nombre de una transacción
      </td>

      <td>
        Consulte [`newrelic.setTransactionName`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#transaction) y [`rules.name`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#rules-name).
      </td>
    </tr>

    <tr>
      <td>
        Agregue metadatos (como el nombre de la cuenta de sus clientes o el nivel de suscripción) a su transacción
      </td>

      <td>
        Utilice [un atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes#nodejs-att). La colección de atributos personalizados está habilitada de forma predeterminada en el agente Node.js). Consulte [`newrelic.addCustomAttribute()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#add-custom-attribute) y [`newrelic.addCustomAttributes()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#add-custom-attributes).
      </td>
    </tr>

    <tr>
      <td>
        Crear una nueva transacción para trabajo en segundo plano
      </td>

      <td>
        Ver [`newrelic.startBackgroundTransaction()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#startBackgroundTransaction).
      </td>
    </tr>

    <tr>
      <td>
        Crear una nueva transacción web
      </td>

      <td>
        Utilice `newrelic.startWebTransaction()`.
      </td>
    </tr>

    <tr>
      <td>
        Evite que una transacción afecte su puntuación [Apdex](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#apdex)
      </td>

      <td>
        Consulte [Reglas para nombrar e ignorar solicitudes](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#ignoring), incluido el [ejemplo de ignorar reglas](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#example-ignoring-rule).
      </td>
    </tr>

    <tr>
      <td>
        Registre otros datos de rendimiento, como tiempos o datos de recursos informáticos.
      </td>

      <td>
        Utilice la [API métrica personalizada](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#custom-metric-api).
      </td>
    </tr>
  </tbody>
</table>

## Ver registro relacionado [#logs]

El agente envía de forma predeterminada el registro directamente dentro del contexto de los errores y la traza de su aplicación. Para obtener más información sobre la correlación de datos log con otros telemetry data y el marco compatible, consulte [nuestros documentos de logs en el contexto](/docs/logs/logs-context/configure-logs-context-nodejs).

Si está utilizando un mecanismo de registro que no está instrumentado por New Relic, puede usar directamente esta llamada API para registrar y reenviar su logs en el contexto:

* [`newrelic.recordLogEvent`](/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/#recordLogEvent)

Un método alternativo más antiguo es utilizar su propio reenviador de registros en lugar de dejar que el agente haga el reenvío por usted. En este caso, deberá anotar su registro con el contexto adecuado antes de reenviarlo. Utilice estas API de llamadas:

* [`newrelic.getTraceMetadata`](/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/#getTraceMetadata)
* [`newrelic.getLinkingMetadata`](/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/#getLinkingMetadata)

## Instrumentar el trabajo asincrónico [#async]

Para [el marco compatible](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent#supported-frameworks) y [las versiones de Node.js compatibles](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent#version), el agente Node.js de New Relic generalmente instrumenta correctamente el trabajo asíncrono. Sin embargo, si su aplicación usa otro framework, o si la instrumentación asíncrona predeterminada no es precisa, puede realizar un seguimiento explícito del trabajo asíncrono.

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Hacer esto...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Traza un método asíncrono que New Relic ya está instrumentado
      </td>

      <td>
        Ver [`newrelic.startSegment`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#startSegment).
      </td>
    </tr>

    <tr>
      <td>
        Traza un método asíncrono que New Relic no está instrumentado
      </td>

      <td>
        Ver [`newrelic.startSegment`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#startSegment).
      </td>
    </tr>

    <tr>
      <td>
        Traza una transacción que se perdió
      </td>

      <td>
        Ver [`newrelic.startSegment`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#startSegment). También puedes crear tu propia [instrumentación personalizada](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation) para bibliotecas que estén perdiendo su transacción.
      </td>
    </tr>

    <tr>
      <td>
        Traza un estado de transacción perdida
      </td>

      <td>
        Un problema común es la pérdida del estado de transacción al utilizar una biblioteca no instrumentada. Para obtener más información, consulte el [tutorial de preservación de transacciones en GitHub](http://newrelic.github.io/node-newrelic/tutorial-Context-Preservation.html).
      </td>
    </tr>
  </tbody>
</table>

## Instrumentar las llamadas a servicios externos [#external-services]

Una vez que se carga la [API de nomenclatura de solicitud](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#loading) , el agente Node.js de New Relic puede identificar automáticamente las llamadas de servicio externo. También puedes utilizar estos métodos para recopilar datos sobre las conexiones de tu aplicación a otras aplicaciones o base de datos:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Hacer esto...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Cronometrar una llamada a un recurso externo (como un servicio externo, un servidor de base de datos o una cola de mensajes)
      </td>

      <td>
        Utilice cualquiera de estos según corresponda:

        * [API de instrumentación personalizada](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#custom-instrumentation-api)

        * [Cola de mensajes](/docs/agents/nodejs-agent/supported-features/message-queues)

          Consulte también los tutoriales sobre [almacenamiento de datos](http://newrelic.github.io/node-newrelic/DatastoreShim.html) y [corrección de mensajes](http://newrelic.github.io/node-newrelic/MessageShim.html) en GitHub para .
      </td>
    </tr>

    <tr>
      <td>
        Conecte la actividad a otra aplicación instrumentada por un agente de New Relic
      </td>

      <td>
        Utilice [rastreo multiaplicación](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces).

        <Callout variant="important">
          El rastreo de aplicaciones múltiples ha quedado obsoleto en favor de [Distributed tracing](/docs/enable-distributed-tracing) y se eliminará en una versión futura de agente.
        </Callout>
      </td>
    </tr>

    <tr>
      <td>
        Vea el camino que sigue una solicitud a medida que viaja a través de un sistema distribuido.
      </td>

      <td>
        [rastreo distribuido](/docs/agents/enable-distributed-tracing)
      </td>
    </tr>
  </tbody>
</table>

## Cobro o error omitido [#errors]

Normalmente el agente detecta errores automáticamente. Sin embargo, puede marcar manualmente un error con el agente. También puede marcar los errores como [ignorados](/docs/apm/applications-menu/error-analytics/ignoring-errors-new-relic-apm).

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Hacer esto...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Informar un error que el agente no informa automáticamente
      </td>

      <td>
        Ver [`newrelic.noticeError()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#noticeError).
      </td>
    </tr>

    <tr>
      <td>
        Agrupe los errores por nombre, utilizando una función de filtro personalizada que usted defina
      </td>

      <td>
        Ver [`newrelic.setErrorGroupCallback()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#setErrorGroupCallback).
      </td>
    </tr>

    <tr>
      <td>
        Asociar errores con usuario
      </td>

      <td>
        Ver [`newrelic.setUserId()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#setUserId).
      </td>
    </tr>
  </tbody>
</table>

## Envía datos de eventos personalizados y métricos desde tu app [#custom-data]

New Relic incluye varias formas de registrar datos personalizados arbitrarios. Para obtener una explicación de los tipos de datos de New Relic, consulte [Recopilación de datos](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data).

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Si quieres...
      </th>

      <th>
        Hacer esto...
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Envía datos sobre un evento para que puedas analizarlo en New Relic
      </td>

      <td>
        Crea un [evento personalizado](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#node-att). Ver [`newrelic.recordCustomEvent()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#record_custom_event).
      </td>
    </tr>

    <tr>
      <td>
        Etiqueta tu evento con metadatos para filtrarlos y facetarlos
      </td>

      <td>
        Agregue [un atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes#nodejs=att) si es necesario. La colección de atributos personalizados está habilitada de forma predeterminada en el agente Node.js). Consulte [`newrelic.addCustomAttribute()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#add-custom-attribute) y [`newrelic.addCustomAttributes()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#add-custom-attributes).
      </td>
    </tr>

    <tr>
      <td>
        Informar datos de rendimiento personalizados
      </td>

      <td>
        Cree una [métrica personalizada](/docs/agents/manage-apm-agents/agent-data/custom-metrics). Consulte [`newrelic.recordMetric()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#record_metric) y [`newrelic.incrementMetric()`](/docs/agents/nodejs-agent/supported-features/nodejs-agent-api#increment_metric). Para ver los datos, utilice [<DNT>**metrics and events**</DNT>](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer).
      </td>
    </tr>
  </tbody>
</table>

## Controlar el agente del navegador [#browser]

Por lo general, el agente <InlinePopover type="browser"/>se agrega automáticamente a sus páginas o se implementa copiando y pegando el fragmento de JavaScript. Para obtener más información sobre estos métodos recomendados, consulte [Agregar aplicaciones de browser a New Relic](/docs/browser/new-relic-browser/installation-configuration/add-apps-new-relic-browser).

También puede controlar el agente del browser a través de la API de llamada del agente APM. Para obtener más información, consulte [monitoreo del browser y el agente Node.js.](/docs/agents/nodejs-agent/supported-features/new-relic-browser-nodejs-agent)

## Ampliar la instrumentación personalizada [#custom-instrumentation]

El `newrelic.instrument()` proporciona flexibilidad adicional para instrumentación personalizada. Para obtener más información, incluidos tutoriales y ejemplos, consulte la [documentación de corrección](http://newrelic.github.io/node-newrelic/Shim.html) en GitHub.

Para agregar instrumentación personalizada en las aplicaciones del módulo ES, consulte nuestra documentación [del módulo ES](/docs/apm/agents/nodejs-agent/installation-configuration/es-modules) o [la aplicación de ejemplo](https://github.com/newrelic/newrelic-node-examples/tree/main/esm-app) en GitHub.
