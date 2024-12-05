---
title: Guía para utilizar la API agente de Java
tags:
  - Agents
  - Java agent
  - API guides
metaDescription: 'A goal-focused guide to New Relic''s Java agent API, with links to relevant sections of the complete API documentation on GitHub.'
freshnessValidatedDate: never
translationType: machine
---

La API New Relic agente de Java le permite controlar, personalizar y ampliar la funcionalidad del <InlinePopover type="apm"/>[agente de Java](/docs/agents/java-agent/getting-started/new-relic-java). Esta API consta de:

* Métodos estáticos en la clase `com.newrelic.api.agent.NewRelic`
* Una [anotación @Trace](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-annotation) para implementar instrumentación personalizada
* Una jerarquía de objetos API que proporciona funcionalidad adicional

Utilice esta API para configurar [la instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) de su aplicación Java y recopilar datos más detallados. Para obtener información detallada sobre esta API, consulte el [Javadoc completo en GitHub](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html).

Otra forma de configurar instrumentación personalizada es utilizar [instrumentación XML](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-xml). La opción XML es más simple y no requiere modificación del código de su aplicación, pero carece de la funcionalidad completa de la API del agente de Java.

<Callout variant="important">
  Para obtener mejores resultados al utilizar la API, asegúrese de tener la [última versión del agente de Java](/docs/release-notes/agent-release-notes/java-release-notes). Varias API utilizadas en los ejemplos requieren agente de Java 6.4.0 o superior.
</Callout>

Para conocer todas las API de New Relic disponibles, consulte [Introducción a las API](/docs/apis/getting-started/introduction-new-relic-apis).

## Utilice la API [#api]

Para acceder a la API, descárguela desde maven central mediante una herramienta de compilación.

A continuación se muestra un ejemplo de gradle donde puede reemplazar `${agent.version}` con la versión de su agente:

```groovy
implementation 'com.newrelic.agent.java:newrelic-api:${agent.version}'
```

Puede llamar a la API incluso sin que el agente se esté ejecutando, pero los métodos no funcionarán hasta que el agente cargue su aplicación.

## Transacción

Para instrumentar [`Transactions`](/docs/apm/applications-menu/monitoring/transactions-page) en su aplicación, utilice las siguientes API.

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Si quieres...
      </th>

      <th>
        Utilizar esta
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Crea un `Transaction` cuando New Relic no crea uno automáticamente
      </td>

      <td>
        [`@Trace(dispatcher = true)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Trace.html) sobre el método que engloba el trabajo a reportar. Cuando esta anotación se utiliza en un método dentro del contexto de una transacción existente, esto no iniciará una nueva transacción, sino que incluirá el método en la transacción existente.
      </td>
    </tr>

    <tr>
      <td>
        Captura la duración de un método que New Relic no traza automáticamente
      </td>

      <td>
        [`@Trace()`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Trace.html) en el método que desea cronometrar.
      </td>
    </tr>

    <tr>
      <td>
        Establecer el nombre de la corriente `Transaction`
      </td>

      <td>
        [`NewRelic.setTransactionName(...)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)
      </td>
    </tr>

    <tr>
      <td>
        Inicie el cronómetro para el tiempo de respuesta del `Transaction` actual y para hacer que un `Transaction` que cree se informe como una transacción `Web` , en lugar de como una transacción `Other` .
      </td>

      <td>
        [`NewRelic.setRequestAndReponse(...)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)
      </td>
    </tr>

    <tr>
      <td>
        Agregue [un atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes) a `Transactions` y `TransactionEvents`
      </td>

      <td>
        [`NewRelic.addCustomParameter(...)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)
      </td>
    </tr>

    <tr>
      <td>
        Agrega [seguimiento de usuarios](/docs/apm/agents/java-agent/attributes/java-agent-attributes#user-attributes) a `Transactions` configurando el atributo de agente `enduser.id` .
      </td>

      <td>
        [`NewRelic.setUserId()`](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)
      </td>
    </tr>

    <tr>
      <td>
        Evitar que un `Transaction` sea reportado a New Relic
      </td>

      <td>
        [`NewRelic.ignoreTransaction()`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)
      </td>
    </tr>

    <tr>
      <td>
        Excluye un `Transaction` al calcular la puntuación [Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) de tu aplicación
      </td>

      <td>
        [`NewRelic.ignoreApdex()`](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)
      </td>
    </tr>
  </tbody>
</table>

## Ver registro relacionado [#logs]

Para ver el registro directamente dentro del contexto de los errores y la traza de su aplicación, use estas llamadas API para anotar su registro:

* [`getTraceMetadata`](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Agent.html#getTraceMetadata())
* [`getLinkingMetadata`](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Agent.html#getLinkingMetadata())

Para obtener más información sobre cómo correlacionar los datos log con otros telemetry data, consulte nuestra documentación [logs en el contexto](/docs/logs/logs-context/java-configure-logs-context-all/) .

## Instrumentar el trabajo asincrónico [#async]

Para obtener información detallada, consulte [agente de Java API para aplicación asincrónica](/docs/agents/java-agent/async-instrumentation/java-agent-api-asynchronous-applications).

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Si quieres...
      </th>

      <th>
        Utilizar esta
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Traza un método asíncrono si está vinculado a un `Transaction` existente...
      </td>

      <td>
        [`@Trace(async = true)`](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)
      </td>
    </tr>

    <tr>
      <td>
        Vincular el `Transaction` asociado con el `Token` en el hilo actual...
      </td>

      <td>
        [`Token.link()` o `Token.linkAndExpire()`](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Token.html)
      </td>
    </tr>

    <tr>
      <td>
        Caducar un `Token` asociado con el `Transaction` actual...
      </td>

      <td>
        [`Token.expire()`](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Token.html)
      </td>
    </tr>

    <tr>
      <td>
        Deje de cronometrar un `Segment` y haga que se informe como parte de su padre `Transaction`
      </td>

      <td>
        [`Segment.end()`](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Segment.html)
      </td>
    </tr>

    <tr>
      <td>
        Dejar de cronometrar un `Segment` y **no** informarlo como parte de su padre `Transaction`
      </td>

      <td>
        [`Segment.ignore()`](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Segment.html)
      </td>
    </tr>
  </tbody>
</table>

## Uso de API de rastreo distribuido [#trace-calls]

Estas API requieren que [rastreo distribuido esté habilitado](/docs/enable-distributed-tracing). Consulte [la configuración del agente de Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#distributed-tracing) para conocer todas las opciones de configuración del rastreo distribuido.

Rastreo distribuido te permite ver el camino que sigue una solicitud a medida que viaja a través de un sistema distribuido. Para obtener instrucciones generales sobre cómo utilizar las siguientes llamadas para implementar rastreo distribuido, consulte [Usar las API de rastreo distribuido](/docs/enable-distributed-tracing#agent-apis). Para ver estas API en acción, consulte [Uso del agente de Java para distribuir API de seguimiento con Kafka](https://github.com/newrelic/newrelic-java-examples/tree/main/newrelic-java-agent/distributed-tracing/kafka-examples).

<Callout variant="important">
  Con [la versión 6.4.0 del agente](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-640), se introdujeron las siguientes API de rastreo distribuido, con la excepción de `addCustomAttribute()`, que se introdujo en 6.1.0. Recomendamos encarecidamente utilizar estas API en lugar de las [obsoletas](#deprecated-trace-apis).
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Si quieres...
      </th>

      <th>
        Utilizar esta
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Obtenga información sobre los encabezados de tipo específico de un mensaje entrante o saliente.
      </td>

      <td>
        ```
        <a href="http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Headers.html">Headers</a>
        ```

        Para una implementación proporcionada de `Headers` use `ConcurrentHashMapHeaders`.

        Vea un ejemplo de implementación de encabezados W3C Trace Context en el [uso de la API de DT con Kafka](https://github.com/newrelic/newrelic-java-examples/tree/main/newrelic-java-agent/distributed-tracing/kafka-examples).
      </td>
    </tr>

    <tr>
      <td>
        Cree e inserte encabezados de rastreo distribuido en una estructura de datos `Headers` . Esta API insertará encabezados `newrelic` y W3C Trace Context (`traceparent` y `tracestate`), a menos que el agente esté [configurado explícitamente para excluir los encabezados `newrelic` ](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#dt-exclude_newrelic_header).
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Transaction.html">Transaction.insertDistributedTraceHeaders(Headers)</a>
        ```

        Para obtener más información sobre cómo obtener referencias a la transacción actual y otras clases de API, consulte [Obtener referencias](#obtain-references).
      </td>
    </tr>

    <tr>
      <td>
        Acepte los encabezados de rastreo distribuido enviados desde el servicio de llamadas y vincule estos servicios en un rastreo distribuido.
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Transaction.html">Transaction.acceptDistributedTraceHeaders(TransportType, Headers)</a>
        ```

        Para obtener más información sobre cómo obtener referencias a la transacción actual y otras clases de API, consulte [Obtener referencias](#obtain-references).
      </td>
    </tr>

    <tr>
      <td>
        Comprenda una clase de utilidad que proporciona constantes de enumeración para definir el tipo de transporte al aceptar encabezados distribuidos de rastreo.
      </td>

      <td>
        ```
        <a href="http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/TransportType.html">TransportType</a>
        ```
      </td>
    </tr>

    <tr>
      <td>
        Agregar [atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes) a `SpanEvents` en rastreo distribuido
      </td>

      <td>
        [`NewRelic.getAgent().getTracedMethod().addCustomAttribute(...)`](https://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/TracedMethod.html)
      </td>
    </tr>
  </tbody>
</table>

<Callout
  id="deprecated-trace-apis"
  variant="caution"
>
  Con [la versión 6.4.0 del agente](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-640), las siguientes API de rastreo distribuido han quedado obsoletas y reemplazadas por las API de la tabla anterior. Se recomienda encarecidamente actualizar el agente y utilizar las nuevas API en lugar de estas obsoletas.
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Si quieres...
      </th>

      <th>
        Utilizar esta
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Cree una carga útil para enviarla a un servicio llamado.
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Transaction.html">Transaction.createDistributedTracePayload()</a>
        ```

        Para obtener más información sobre cómo obtener referencias a la transacción actual y otras clases de API, consulte [Obtener referencias](#obtain-references).

        <Callout variant="caution">
          API obsoleta a partir del agente 6.4.0
        </Callout>
      </td>
    </tr>

    <tr>
      <td>
        Aceptar una carga útil enviada desde el primer servicio; esto unirá estos servicios en una traza.
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Transaction.html">Transaction.acceptDistributedTracePayload(...)</a>
        ```

        Para obtener más información sobre cómo obtener referencias a la transacción actual y otras clases de API, consulte [Obtener referencias](#obtain-references).

        <Callout variant="caution">
          API obsoleta a partir del agente 6.4.0
        </Callout>
      </td>
    </tr>

    <tr>
      <td>
        Carga utilizada para conectar servicios. La llamada `text()` devuelve una representación de cadena JSON de la carga útil.
      </td>

      <td>
        `DistributedTracePayload.text()`

        <Callout variant="caution">
          API obsoleta a partir del agente 6.4.0
        </Callout>
      </td>
    </tr>

    <tr>
      <td>
        Carga utilizada para conectar servicios. La llamada `httpSafe()` devuelve una representación de cadena JSON codificada en base64 de la carga útil.
      </td>

      <td>
        `DistributedTracePayload.httpSafe()`

        <Callout variant="caution">
          API obsoleta a partir del agente 6.4.0
        </Callout>
      </td>
    </tr>
  </tbody>
</table>

## Uso de API de seguimiento de múltiples aplicaciones (CAT) [#trace-calls-cat]

<Callout variant="important">
  El seguimiento de aplicaciones múltiples ha quedado obsoleto a partir de la versión 7.4.0 del agente y se eliminará en una versión futura del agente.

  En lugar de utilizar el rastreo multiaplicación, recomendamos nuestra característica [rastreo distribuido](#distributed-tracing) . rastreo distribuido es una mejora de la característica de rastreo multiaplicación y se recomienda para sistemas distribuidos grandes.
</Callout>

Para rastrear llamadas externas y agregar [rastreo de múltiples aplicaciones](/docs/apm/transactions/cross-application-traces/cross-application-tracing), use las siguientes API:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Si quieres...
      </th>

      <th>
        Utilizar esta
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Traza a través de un canal de transporte personalizado que New Relic no admite de forma predeterminada, como un transporte RPC propietario
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Transaction.html">Transaction.getRequestMetadata(), .processRequestMetadata(...), .getResponseMetadata(), .processResponseMetadata(...)</a>
        ```

        Consulte también la información de este documento sobre el uso `Transaction` para [obtener referencias a las clases de API de New Relic](#).
      </td>
    </tr>

    <tr>
      <td>
        Ver o cambiar el nombre de la métrica o el nombre de una métrica acumulada de un `TracedMethod`

        (El nombre de una métrica acumulada, como `OtherTransaction/all`, no tiene como ámbito una transacción específica. Representa todas las transacciones en segundo plano.)
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/TracedMethod.html">TracedMethod.getMetricName(), .setMetricName(...), .setRollupMetricName(...)</a>
        ```

        Consulte también la información de este documento sobre el uso `TracedMethod` para [obtener referencias a las clases de API de New Relic](#).
      </td>
    </tr>

    <tr>
      <td>
        Informar una llamada a un servicio HTTP externo, servidor de base de datos, cola de mensajes u otro recurso externo que se está trazando utilizando la [anotación`@Trace` ](/docs/agents/java-agent/custom-instrumentation/java-instrumentation-annotation)del agente de Java API
      </td>

      <td>
        [`TracedMethod.reportAsExternal(...)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/TracedMethod.html) pasando argumentos construidos usando el constructor [`ExternalParameters`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/ExternalParameters.html) .

        Consulte también la información de este documento sobre el uso `TracedMethod` para [obtener referencias a las clases de API de New Relic](#).
      </td>
    </tr>

    <tr>
      <td>
        Habilite y agregue [seguimiento de aplicaciones múltiples](/docs/apm/transactions/cross-application-traces/cross-application-tracing) cuando se comunique con un servicio HTTP o JMS externo instrumentado por New Relic
      </td>

      <td>
        [`TracedMethod.addOutboundRequestHeaders(...)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/TracedMethod.html) junto con `TracedMethod.reportAsExternal(...)`

        Consulte también la información de este documento sobre el uso `TracedMethod` para [obtener referencias a las clases de API de New Relic](#).
      </td>
    </tr>

    <tr>
      <td>
        Agregar tiempo para un servidor de aplicaciones o despachador que no es compatible automáticamente
      </td>

      <td>
        `Transaction.setRequest(...), Transaction.setResponse(...)`, o `NewRelic.setRequestAndResponse(...)`, y `Transaction.markResponseSent()`

        Consulte también la información de este documento sobre el uso `Transaction` para [obtener referencias a las clases de API de New Relic](#).
      </td>
    </tr>
  </tbody>
</table>

## Obtener referencias a las clases API de New Relic [#obtain-references]

Otras tareas requieren el objeto New Relic `Agent`. El objeto `Agent` expone varios objetos que le brindan la siguiente funcionalidad:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Si quieres...
      </th>

      <th>
        Utilizar esta
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Obtener una referencia a la actualidad `Transaction`
      </td>

      <td>
        [`NewRelic.getAgent().getTransaction()`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Transaction.html)
      </td>
    </tr>

    <tr>
      <td>
        Obtenga un `Token` para vincular trabajo asincrónico
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Transaction.html">NewRelic.getAgent().getTransaction().getToken()</a>
        ```
      </td>
    </tr>

    <tr>
      <td>
        Comience y obtenga una referencia a un `Segment`
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Transaction.html">NewRelic.getAgent().getTransaction().startSegment()</a>
        ```
      </td>
    </tr>

    <tr>
      <td>
        Obtener una referencia del método que se está trazando actualmente.
      </td>

      <td>
        [`NewRelic.getAgent().getTracedMethod()`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/TracedMethod.html)
      </td>
    </tr>

    <tr>
      <td>
        Obtener una referencia al logger `Agent`
      </td>

      <td>
        [`NewRelic.getAgent().getLogger()`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Logger.html)
      </td>
    </tr>

    <tr>
      <td>
        Obtener una referencia a la [configuración](/docs/agents/java-agent/configuration/java-agent-configuration-config-file) `Agent`
      </td>

      <td>
        [`NewRelic.getAgent().getConfig()`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Config.html)
      </td>
    </tr>

    <tr>
      <td>
        Obtenga una referencia a un agregador de [métrica personalizada](/docs/agents/manage-apm-agents/agent-data/custom-metrics)
      </td>

      <td>
        [`NewRelic.getAgent().getAggregator()`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/MetricAggregator.html)
      </td>
    </tr>

    <tr>
      <td>
        Obtener una referencia a `Insights` (nuestro nombre original de la característica que regía el evento personalizado) para registrar [el evento personalizado.](/docs/insights/new-relic-insights/custom-events/inserting-custom-events-new-relic-apm-agents)
      </td>

      <td>
        [`NewRelic.getAgent().getInsights()`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/Insights.html)
      </td>
    </tr>
  </tbody>
</table>

## Funcionalidad API adicional [#additional]

Las siguientes API brindan funcionalidad adicional, como configurar información del servidor de aplicaciones, informar errores, agregar información [de tiempo de carga de la página](/docs/agents/java-agent/instrumentation/page-load-timing-java) , registrar [métrica personalizada](/docs/agents/manage-apm-agents/agent-data/custom-metrics) y [enviar eventos personalizados](/docs/insights/new-relic-insights/custom-events/inserting-custom-events-new-relic-apm-agents).

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Si quieres...
      </th>

      <th>
        Utilizar esta
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Establecer explícitamente la información de puerto, nombre y versión para un servidor de aplicaciones o despachador y el nombre de instancia para una JVM
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html">NewRelic.setAppServerPort(...), .setServerInfo(...), and .setInstanceName(...)</a>
        ```
      </td>
    </tr>

    <tr>
      <td>
        Informar un error que New Relic no informa automáticamente
      </td>

      <td>
        [`NewRelic.noticeError(...)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)

        Dentro de una transacción, gana la última llamada a `noticeError` . Solo se informará 1 error por transacción.
      </td>
    </tr>

    <tr>
      <td>
        Agrupe los errores con su propia huella digital definida personalizada; implemente la interfaz [`ErrorGroupCallback`](/docs/apm/agents/java-agent/api-guides/java-agent-api-register-error-group-callback-to-set-fingerprint) que se utiliza para generar claves de agrupación para los errores que se enviarán a New Relic. La huella digital se utilizará para agrupar mensajes de error en la Errors Inbox UI de la .
      </td>

      <td>
        [`public interface ErrorGroupCallback { String generateGroupingString(ErrorData errorData); }`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)
      </td>
    </tr>

    <tr>
      <td>
        Configure su propia huella digital de error mediante una función de devolución de llamada. Para registrar un [`ErrorGroupCallback`](/docs/apm/agents/java-agent/api-guides/java-agent-api-register-error-group-callback-to-set-fingerprint) que se utiliza para generar una clave de agrupación para el error proporcionado.
      </td>

      <td>
        [`NewRelic.setErrorGroupCallback(errorGroupCallback)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)
      </td>
    </tr>

    <tr>
      <td>
        Agregue [el tiempo de carga de la página](/docs/agents/java-agent/custom-instrumentation/java-agent-api-example-program#include-browser) del browser para `Transactions` que New Relic no agrega al encabezado automáticamente
      </td>

      <td>
        ```
        <a href="https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html">NewRelic.getBrowserTimingHeader(), .getBrowserTimingFooter(), .setUserName(String name), .setAccountName(String name), and .setProductName(String name)</a>
        ```
      </td>
    </tr>

    <tr>
      <td>
        Crear y acumular [métricas personalizadas](/docs/agents/manage-apm-agents/agent-data/custom-metrics)
      </td>

      <td>
        [`NewRelic.recordMetric(...)`, `.recordResponseTimeMetric(...)`, o `.incrementCounter(...)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html)
      </td>
    </tr>

    <tr>
      <td>
        Grabar [evento personalizado](/docs/insights/new-relic-insights/custom-events/inserting-custom-events-new-relic-apm-agents)
      </td>

      <td>
        `Insights.recordCustomEvent(...)`

        O utilice [`NewRelic.addCustomParameter(...)`](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html) para agregar un atributo personalizado al tipo `TransactionEvent` definido por New Relic .

        Consulte también la información de este documento sobre el uso `Insights` para [obtener referencias a las clases de API de New Relic](#).
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos de uso de API adicionales [#api-examples]

Para obtener ejemplos de código detallados sobre el uso de las API, consulte la documentación de New Relic sobre instrumentación personalizada para:

* [Llamadas externas, multiaplicación traza, mensajería, datastores y framework web](/docs/agents/java-agent/custom-instrumentation/java-agent-api-overview-custom-instrumentation-external-calls-cat-messaging-datastore-web-frameworks)
* [Rastreo multiaplicación y almacenamiento externo de datos de llamadas](/docs/agents/java-agent/custom-instrumentation/java-agent-api-example-application-using-custom-instrumentation-cross-application-tracing-cat)
* [Aplicaciones que utilizan instrumentación personalizada con anotaciones](/docs/agents/java-agent/custom-instrumentation/java-agent-api-example-program)
* [API de instrumentación framework personalizado](/docs/agents/java-agent/custom-instrumentation/java-agent-instrumentation-api)
* [Prevención de instrumentación no deseada](/docs/agents/java-agent/instrumentation/blocking-instrumentation-java)
* [Insertar atributo personalizado](/docs/data-analysis/metrics/collecting-custom-attributes#java-att)
* [Insertar evento personalizado](/docs/insights/new-relic-insights/adding-querying-data/inserting-custom-events-new-relic-apm-agents#java-att)
* [Recogida métrica personalizada](/docs/apm/other-features/metrics/custom-metrics)
