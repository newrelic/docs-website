---
title: API del agente Node.js
tags:
  - Agents
  - Nodejs agent
  - API guides
metaDescription: 'How to use the Node.js API to name, rename, and ignore requests, and to read router names with New Relic''s Node.js agent.'
freshnessValidatedDate: never
translationType: machine
---

New Relic ofrece varias herramientas para ayudar a obtener la información necesaria para proporcionar métricas útiles sobre su aplicación Node.js. Éstas incluyen:

* Leer los nombres de las rutas (si se usan) de los enrutadores Express y Restify
* Usar la API para nombrar la solicitud actual, ya sea con nombres simples o grupos de controladores con acciones
* Reglas de soporte que se almacenan en la configuración de su agente y que pueden marcar las solicitudes para cambiarles el nombre o ignorarlas en función de expresiones regulares que coincidan con las URL sin procesar de la solicitud (también disponible como API de llamada).

La cantidad de nombres que New Relic rastrea debe ser lo suficientemente pequeña para que la experiencia del usuario sea sólida. También debe ser lo suficientemente grande como para proporcionar la cantidad adecuada de información (sin abrumarlo con datos) para que pueda identificar los puntos problemáticos en su aplicación más fácilmente.

Para obtener más información, consulte la documentación [de configuración del agente Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration) y la [documentación de la API del agente Node.js en Github](https://newrelic.github.io/node-newrelic/).

## Solicitar nombres

El agente de Node.js captura el método HTTP junto con una ruta potencialmente parametrizada (como `/user/:id`) o una expresión regular (como `/^/user/([-0-9a-f]+)$/`). Estos datos pasan a formar parte del nombre de la solicitud.

Si tiene soporte para la traza de la transacción lenta y ha agregado `'request.parameters.*'` a [`attributes.include`](/docs/agents/nodejs-agent/attributes/nodejs-agent-attributes#cfg-attributes-include) en su archivo de configuración, la traza de la transacción también tendrá el parámetro de solicitud y sus valores adjuntos. Si no le gustan los nombres de solicitud que utiliza el agente de Node.js, puede usar llamada API para crear nombres más descriptivos.

<Callout variant="tip">
  Si agrupa sus solicitudes bajo el nombre genérico, entonces `/*` es suficiente y no necesita personalizar su archivo de configuración o API de llamada.
</Callout>

## Requisitos

New Relic utiliza nombres de solicitudes para agrupar solicitudes de muchos gráficos y tablas. El valor de estas visualizaciones disminuirá a medida que aumente la cantidad de nombres de solicitudes diferentes.

Por ejemplo, no incluya datos potencialmente dinámicos como GUID, ID numéricos o marcas de tiempo en los nombres de las solicitudes que cree. Si su solicitud es lo suficientemente lenta como para generar una traza de la transacción, esa traza contendrá la URL original. Si habilita la captura de parámetros, el parámetro también se adjuntará a la traza.

<Callout variant="tip">
  Evite tener más de 50 nombres de transacciones diferentes. Por ejemplo, si tiene más de un par de cientos de nombres de solicitudes diferentes, reconsidere su estrategia de nomenclatura.
</Callout>

## Evite problemas de agrupación métrica [#metric-grouping]

La API de nomenclatura de solicitudes ayuda a New Relic a evitar problemas al intentar manejar demasiadas métricas, lo que a veces se denomina "explosión métrica". New Relic tiene varias estrategias para abordar estos problemas; el más grave es simplemente agregar la aplicación infractora a su lista de denegados.

La razón principal para tener cuidado al utilizar estas herramientas de asignación de nombres de solicitudes es evitar que eso le suceda a su aplicación. Para obtener más información, consulte [problemas de agrupación métrica](/docs/apm/other-features/metrics/metric-grouping-issues).

## Pautas [#rules]

Define tus reglas de configuración desde las más específicas hasta las más generales. Las primeras reglas enumeradas en su archivo de configuración o agregadas con la [API de nomenclatura de transacciones de Node.js](/docs/nodejs/nodejs-transaction-naming-api) se aplicarán primero y deben tener un objetivo específico. Se deben agregar reglas más generales "opcionales" hacia el final de la lista, porque se evaluarán en el orden en que se configuraron o agregaron usando la API de nomenclatura de transacciones de Node.js.

<Collapser
  id="retailer-example"
  title="Coincidencia de patrones de URL"
>
  Un minorista en línea tiene un patrón de URL como este:

  ```
  /user/customers/all/prospects
  /user/customers/all/current
  /user/customers/all/returning
  /user/customers/John
  /user/customers/Jane
  ```

  El minorista podría crear reglas como esta:

  ```js
  // newrelic.js
  exports.config={
    //other configuration
    rules:{
      name:[
        { pattern: "/user/customers/all/prospects/", name: "/user/customers/all/prospects" },
        { pattern: "/user/customers/all/.*", name: "/user/customers/all" },
        { pattern: "/user/customers/.*", name: "/user/customers/:customer" }
      ]
    }
  };
  ```

  Con estas reglas, el minorista crearía tres nombres de transacción:

  * `/user/customers/:customer`

  * `/user/customers/all`

  * `/user/customers/all/prospects`

    Si el minorista invirtiera el pedido, las reglas detectarían `all` transacción en `:customer`, lo que no sería tan útil.
</Collapser>

## Cargue la API de nomenclatura de solicitud [#loading]

Asegúrese de que cargar el módulo New Relic sea lo primero que haga su aplicación, ya que necesita arrancar antes de que se cargue el resto de su aplicación:

```js
const newrelic = require('newrelic');
```

Esto devuelve la API de nomenclatura de solicitud. Puede requerir con seguridad el módulo de varios módulos en su aplicación, ya que solo se inicializa una vez.

## Solicitar API de llamada [#request-api]

Aquí hay un resumen de la API de solicitud de llamada para el agente Node.js de New Relic.

<CollapserGroup>
  <Collapser
    id="transaction"
    title={<InlineCode>newrelic.setTransactionName(name)</InlineCode>}
  >
    ```js
    newrelic.setTransactionName(name)
    ```

    Asigne un nombre a la solicitud actual, siguiendo los [requisitos de nomenclatura de la solicitud](#requirements). Puede llamar a esta función en cualquier lugar dentro del contexto de un controlador de solicitudes HTTP, en cualquier momento después de que haya comenzado el manejo de la solicitud, pero antes de que haya finalizado. En general, si los objetos de solicitud y respuesta están dentro del alcance, puede establecer el nombre.

    Llamar explícitamente `newrelic.setTransactionName()` anulará cualquier nombre establecido por las rutas Express o Restify. Además, las llamadas a `newrelic.setTransactionName()` y `newrelic.setControllerName()` se sobrescribirán entre sí. El último en ejecutarse antes de que finalice la solicitud gana.
  </Collapser>

  <Collapser
    id="controller"
    title={<InlineCode>newrelic.setControllerName(name, \[action])</InlineCode>}
  >
    ```js
    newrelic.setControllerName(name, [action])
    ```

    Asigne un nombre a la solicitud actual utilizando un patrón de estilo de controlador, incluyendo opcionalmente la acción del controlador actual. Si se omite la acción, New Relic incluirá el método HTTP (GET, POST, etc.) como acción. Las reglas sobre cuándo puede llamar `newrelic.setControllerName()` son las mismas que para `newrelic.setTransactionName()`, incluidos los [requisitos de denominación de la solicitud](#requirements).

    Llamar explícitamente `newrelic.setControllerName()` anulará cualquier nombre establecido por las rutas Express o Restify. Además, las llamadas a `newrelic.setTransactionName()` y `newrelic.setControllerName()` se sobrescribirán entre sí. El último en ejecutarse antes de que finalice la solicitud gana.
  </Collapser>
</CollapserGroup>

## API de llamada de instrumentación personalizada [#custom-instrumentation-api]

Utilice estas API de llamada para [ampliar su instrumentación con instrumentación personalizada](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation).

<CollapserGroup>
  <Collapser
    id="instrument"
    title={<InlineCode>newrelic.instrument(moduleName, onRequire \[, onError])</InlineCode>}
  >
    ```js
    newrelic.instrument(moduleName, onRequire [, onError])
    ```

    Establece una devolución de llamada de instrumentación para un módulo específico.

    La devolución de llamada `onRequire` proporcionada se activará cuando el módulo dado se cargue con `require`. El parámetro `moduleName` debe ser la cadena que se pasará a `require`; por ejemplo, `'express'` o `'amqplib/callback_api'`. La devolución de llamada opcional `onError` se llama si el parámetro `onRequire` arroja un error. Esto es útil para depurar su instrumentación.

    Utilice este método para:

    * Agregue instrumentación para módulos que New Relic no instrumenta actualmente.
    * Instrumenta tu propio código.
    * Reemplace la instrumentación integrada del agente Node.js por la suya propia.

    Para obtener más información, consulte [el tutorial de instrumentación Node.js de New Relic en Github](https://newrelic.github.io/node-newrelic/tutorial-Instrumentation-Basics.html).
  </Collapser>

  <Collapser
    id="instrumentDatastore"
    title={<InlineCode>newrelic.instrumentDatastore(moduleName, onRequire \[, onError])</InlineCode>}
  >
    ```js
    newrelic.instrumentDatastore(moduleName, onRequire [, onError])
    ```

    Establece una devolución de llamada de instrumentación para un módulo de almacenamiento de datos.

    Este método es similar a [`newrelic.instrument()`](#instrument), excepto que proporciona un [ajuste especializado en almacenamiento de datos](https://newrelic.github.io/node-newrelic/DatastoreShim.html). Para obtener más información, consulte [el tutorial de instrumentación de almacenamiento de datos Node.js de New Relic en Github](https://newrelic.github.io/node-newrelic/tutorial-Datastore-Simple.html).
  </Collapser>

  <Collapser
    id="instrumentLoadedModule"
    title={<InlineCode>newrelic.instrumentLoadedModule(moduleName, moduleInstance)</InlineCode>}
  >
    <Callout variant="important">
      Este método no es compatible ni necesario en la aplicación del módulo ES, ya que el agente arrancar en la aplicación del módulo ES es diferente a la aplicación CommonJS. En la aplicación del módulo ES, el agente puede compensar el problema que resuelve este método para la aplicación CommonJS.
    </Callout>

    ```js
    newrelic.instrumentLoadedModule(moduleName, moduleInstance)
    ```

    El método `instrumentLoadedModule` le permite agregar instrumentación estándar a módulos específicos en situaciones en las que es imposible tener `require('newrelic');` como la primera línea del módulo principal de su aplicación.

    ```js
    // load the agent
    const newrelic = require('newrelic');

    // module loaded before newrelic
    const expressModule = require('express');

    // instrument express after the agent has been loaded
    newrelic.instrumentLoadedModule(
      'express',    // the module's name, as a string
      expressModule // the module instance
    );
    ```

    <Callout variant="important">
      Este método no puede instrumentar ningún módulo arbitrario. Su propósito es agregar módulos que se perdieron porque el agente no se cargó como lo primero en su programa. El método `instrumentLoadedModule` solo puede tocar módulos que el agente normalmente tocaría. Puedes ver una lista de estos módulos en el [módulo lib/instrumentación](https://github.com/newrelic/node-newrelic/blob/0113eb5f0e707dc662a17d262a841503bab88841/lib/instrumentations.js#L6#L6) del agente.
    </Callout>
  </Collapser>

  <Collapser
    id="instrumentMessages"
    title={<InlineCode>newrelic.instrumentMessages(moduleName, onRequire \[, onError])</InlineCode>}
  >
    ```js
    newrelic.instrumentMessages(moduleName, onRequire [, onError])
    ```

    Establece una devolución de llamada de instrumentación para un módulo cliente de servicio de mensajes.

    Este método es similar a [`newrelic.instrument()`](#instrument), excepto que proporciona una [corrección especializada en el servicio de mensajes](https://newrelic.github.io/node-newrelic/MessageShim.html). Para obtener más información, consulte [el tutorial de instrumentación del servicio de mensajes Node.js de New Relic en Github](https://newrelic.github.io/node-newrelic/tutorial-Messaging-Simple.html).
  </Collapser>

  <Collapser
    id="instrumentWebframework"
    title={<InlineCode>newrelic.instrumentWebframework(moduleName, onRequire \[, onError])</InlineCode>}
  >
    ```js
    newrelic.instrumentWebframework(moduleName, onRequire [, onError])
    ```

    Establece una devolución de llamada de instrumentación para un módulo framework web.

    Este método es similar a [`newrelic.instrument()`](#instrument), excepto que proporciona una [corrección especializada en elframeworkweb](https://newrelic.github.io/node-newrelic/WebFrameworkShim.html). Para obtener más información, consulte [el tutorial de instrumentación framework web Node.js de New Relic en Github](https://newrelic.github.io/node-newrelic/tutorial-Webframework-Simple.html).
  </Collapser>

  <Collapser
    id="startWebTransaction"
    title={<InlineCode>newrelic.startWebTransaction(url, handle)</InlineCode>}
  >
    ```js
    newrelic.startWebTransaction(url, handle)
    ```

    Instrumento la transacción web especificada. Con esta llamada API, puede realizar transacciones con instrumentos que New Relic [no detecta automáticamente](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation#web-txn).

    * El `url` define el nombre de la transacción y debe ser estático. No incluya datos variables como el ID de usuario.
    * El `handle` define la función que deseas instrumento.

    New Relic capturará cualquier métrica que se capturaría mediante la instrumentación automática, así como la instrumentación manual a través de [`startSegment()`](#startSegment).

    Usted <DNT>**must**</DNT> maneja transacciones personalizadas manualmente llamando `newrelic.getTransaction()` al comienzo de su transacción y luego llamando a `transaction.end()` cuando haya terminado. New Relic comienza a cronometrar la transacción cuando se llama a `newrelic.startWebTransaction()` y finaliza la transacción cuando se llama `transaction.end()` .

    También puede devolver una promesa para indicar el final de la transacción. Tenga en cuenta que si esta promesa se rechaza, no se vincula automáticamente al rastreo de errores de New Relic. Esto debe hacerse manualmente con [`noticeError()`](#noticeError).
  </Collapser>

  <Collapser
    id="startBackgroundTransaction"
    title={<InlineCode>newrelic.startBackgroundTransaction(name, \[group], handle)</InlineCode>}
  >
    ```js
    newrelic.startBackgroundTransaction(name, [group], handle)
    ```

    Instrumento la transacción en segundo plano especificada. Con esta llamada API, puede ampliar la instrumentación de New Relic para [capturar datos de transacciones en segundo plano](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation#background-txn).

    * El `name` define el nombre de la transacción y debe ser estático. No incluya datos variables como el ID de usuario.

    * El `group` es opcional y le permite agrupar trabajos similares a través del

      <DNT>
        [**transaction type**](/docs/apm/applications-menu/monitoring/transactions-dashboard#txn-type-dropdown)
      </DNT>

      [en la interfaz de usuario](/docs/apm/applications-menu/monitoring/transactions-dashboard#txn-type-dropdown). Al igual que `name`, el `group` debe ser estático.

    * El `handle` define una función que incluye todo el trabajo en segundo plano que deseas instrumentar.

    New Relic capturará cualquier métrica que se capturaría mediante la instrumentación automática, así como la instrumentación manual a través de [`startSegment()`](#startSegment).

    Usted <DNT>**must**</DNT> maneja transacciones personalizadas manualmente llamando `newrelic.getTransaction()` al comienzo de su transacción y luego llamando a `transaction.end()` cuando haya terminado. New Relic comienza a cronometrar la transacción cuando se llama a `newrelic.startBackgroundTransaction()` y finaliza la transacción cuando se llama `transaction.end()` .

    También puede devolver una promesa para indicar el final de la transacción. Tenga en cuenta que si esta promesa se rechaza, no se vincula automáticamente al rastreo de errores de New Relic. Esto debe hacerse manualmente con [`noticeError()`](#noticeError).
  </Collapser>

  <Collapser
    id="getTransaction"
    title={<InlineCode>newrelic.getTransaction()</InlineCode>}
  >
    ```js
    newrelic.getTransaction()
    ```

    Devuelve un identificador de la transacción que se está ejecutando actualmente. Este identificador se puede utilizar para interactuar con una transacción determinada de forma segura desde cualquier contexto. Se utiliza mejor con `newrelic.startWebTransaction()` y `newrelic.startBackgroundTransaction()`.

    [Consulte la sección de manejo de transacciones para obtener más detalles.](#transaction-handle-methods)
  </Collapser>

  <Collapser
    id="endTransaction"
    title={<InlineCode>newrelic.endTransaction()</InlineCode>}
  >
    ```js
    newrelic.endTransaction()
    ```

    Finalice la transacción personalizada [web](#createWebTransaction) o [en segundo plano](#createBackgroundTransaction) actual. Este método requiere estar en el contexto de transacción correcto cuando se llama. Esta llamada API no acepta argumentos.
  </Collapser>

  <Collapser
    id="startSegment"
    title={<InlineCode>newrelic.startSegment(name, record, handler, callback)</InlineCode>}
  >
    ```js
    newrelic.startSegment(name, record, handler, callback)
    ```

    Instrumento: método particular para [mejorar la visibilidad de una transacción](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation#expanding-instrumentation) u, opcionalmente, convertirla en una métrica.

    * El `name` define un nombre para el segmento. Este nombre será visible en la traza de la transacción y como una nueva métrica en la UI de New Relic.
    * La marca `record` define si el segmento debe registrarse como una métrica.
    * El `handler` es la función que desea rastrear como segmento.
    * El `callback` opcional es una función que se pasa al controlador para que la active una vez finalizado su trabajo.

    El agente comienza a cronometrar el segmento cuando se llama a `startSegment` . El segmento finaliza cuando `handler` termina de ejecutarse o cuando se activa `callback` , si se proporciona.
  </Collapser>
</CollapserGroup>

## Métrica personalizada llamada API [#custom-metric-api]

Utilice estas API de llamada para [registrar métricas arbitrarias adicionales](/docs/agents/nodejs-agent/supported-features/nodejs-custom-metrics):

<CollapserGroup>
  <Collapser
    id="record_metric"
    title={<InlineCode>newrelic.recordMetric(name, value)</InlineCode>}
  >
    ```js
    newrelic.recordMetric(name, value)
    ```

    Utilice `recordMetric` para registrar una métrica basada en eventos, generalmente asociada con una duración particular. El `name` debe ser una cadena que siga las reglas de nomenclatura métrica estándar. El `value` normalmente será un número, pero también puede ser un objeto.

    * Cuando `value` es un valor numérico, debe representar la magnitud de una medición asociada con un evento; por ejemplo, la duración de una llamada a un método particular.
    * Cuando `value` es un objeto, debe contener claves `count`, `total`, `min`, `max` y `sumOfSquares` , todas con valores numéricos. Este formulario es útil para métrica agregada por su cuenta y reportarlas periódicamente; por ejemplo, de un `setInterval`. Estos valores se agregarán con cualquier valor recopilado previamente para la misma métrica. Los nombres de estas claves coinciden con los nombres de las claves utilizadas por la API de la plataforma.
  </Collapser>

  <Collapser
    id="increment_metric"
    title={<InlineCode>newrelic.incrementMetric(name, \[amount])</InlineCode>}
  >
    ```js
    newrelic.incrementMetric(name, [amount])
    ```

    Utilice `incrementMetric` para actualizar una métrica que actúa como un contador simple. El recuento de la métrica seleccionada se incrementará en la cantidad especificada, por defecto en 1.
  </Collapser>
</CollapserGroup>

## Evento personalizado llamada API [#custom-events-api]

Utilice estas API de llamada para registrar eventos adicionales:

<CollapserGroup>
  <Collapser
    id="record_custom_event"
    title={<InlineCode>newrelic.recordCustomEvent(eventType, attributes)</InlineCode>}
  >
    ```js
    newrelic.recordCustomEvent(eventType, attributes)
    ```

    Utilice `recordCustomEvent` para registrar una métrica basada en eventos, generalmente asociada con una duración particular.

    * El `eventType` debe ser una cadena alfanumérica de menos de 255 caracteres.
    * El `attributes` debe ser un objeto de pares clave y valor. Las claves deben tener menos de 255 caracteres y los valores deben ser cadenas, números o booleanos.

    <CollapserGroup>
      <Collapser
        id="example-link-bg-txn"
        title="Grabar un evento personalizado"
      >
        El siguiente ejemplo demuestra la grabación de un evento personalizado con múltiples atributos.

        ```js
        const attributes = {
          attribute1: 'value1',
          attribute2: 2
        };

        newrelic.recordCustomEvent('MessagingEvent', attributes);
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>

<CollapserGroup>
  <Collapser
    id="record_log_event"
    title={<InlineCode>newrelic.recordLogEvent(logEvent)</InlineCode>}
  >
    ```js
    newrelic.recordLogEvent({message, level})
    ```

    Utilice `recordLogEvent` para registrar un registro de eventos, en caso de que la instrumentación de registro automático sea insuficiente para su framework de registro. [Consulte la documentación generada automáticamente](https://newrelic.github.io/node-newrelic/API.html#recordLogEvent) para conocer los detalles de los tipos de parámetros aceptados.

    <CollapserGroup>
      <Collapser
        id="example-link-bg-txn"
        title="Grabar un log de evento con un objeto de error"
      >
        El siguiente ejemplo demuestra cómo registrar un registro de eventos asociado a un error.

        ```js
        const error = new SystemError('invalid state');
        const timestamp = Date.now();

        newrelic.recordLogEvent({message: 'an error happened', level: 'error', timestamp, error});
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>
</CollapserGroup>

## Métodos de manejo de transacciones

Esta sección detalla los métodos proporcionados por la instancia de clase `TransactionHandle` que se puede obtener a través de `newrelic.getTransaction()`.

Utilice estos métodos para interactuar directamente con la transacción actual:

<CollapserGroup>
  <Collapser
    id="transaction-handle-end"
    title={<InlineCode>transactionHandle.end(\[callback])</InlineCode>}
  >
    ```js
    transactionHandle.end([callback])
    ```

    Utilice `transactionHandle.end` para finalizar la transacción a la que hace referencia la instancia de identificador.

    El `callback` se invoca cuando la transacción ha finalizado por completo. La transacción finalizada pasó a la devolución de llamada como primer argumento.
  </Collapser>

  <Collapser
    id="transaction-handle-ignore"
    title={<InlineCode>transactionHandle.ignore()</InlineCode>}
  >
    ```js
    transactionHandle.ignore()
    ```

    Utilice `transactionHandle.ignore` para ignorar la transacción a la que hace referencia la instancia del identificador.
  </Collapser>

  <Collapser
    id="transaction-handle-insertDistributedTraceHeaders"
    title={<InlineCode>transactionHandle.insertDistributedTraceHeaders(headers)</InlineCode>}
  >
    ```js
    transactionHandle.insertDistributedTraceHeaders(headers)
    ```

    <Callout variant="important">
      Esta API requiere [que rastreo distribuido esté habilitado](/docs/enable-distributed-tracing).
    </Callout>

    Para obtener contexto sobre cómo utilizar esta llamada y su llamada asociada `acceptDistributedTraceHeaders`, primero lea [Habilitar rastreo distribuido con API de agente](/docs/enable-distributed-tracing#agent-apis).

    `transactionHandle.insertDistributedTraceHeaders` Se utiliza para implementar rastreo distribuido. Modifica el mapa `headers` que se pasa agregando encabezados W3C Trace Context y encabezados distribuidos de rastreo New Relic. Los encabezados de New Relic se pueden desactivar con `distributed_tracing.exclude_newrelic_header: true` en la configuración. Este método reemplaza el método obsoleto [`createDistributedTracePayload`](#transaction-handle-createDistributedTracePayload) , que solo crea carga distribuida de rastreo New Relic.

    <CollapserGroup>
      <Collapser
        id="example-link-bg-txn"
        title="Generando encabezados de rastreo distribuido"
      >
        En el siguiente ejemplo, al llamar a insertDistributedTraceHeaders con un objeto vacío, se generarán los encabezados de rastreo distribuido y los encabezados W3C Trace Context apropiados para la transacción.

        ```js
        // Call newrelic.getTransaction to retrieve a handle on the current transaction.
        const transactionHandle = newrelic.getTransaction();

        // This could be a header object from an incoming request as well
        const headersObject = {};
        newrelic.startBackgroundTransaction('background task', function executeTransaction() {
          const transaction = newrelic.getTransaction();
          // generate the headers
          transaction.insertDistributedTraceHeaders(headersObject);
        });
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="transaction-handle-acceptDistributedTraceHeaders"
    title={<InlineCode>transactionHandle.acceptDistributedTraceHeaders(transportType, headers)</InlineCode>}
  >
    ```js
    transactionHandle.acceptDistributedTraceHeaders(transportType, headers)
    ```

    <Callout variant="important">
      Esta API requiere [que rastreo distribuido esté habilitado](/docs/enable-distributed-tracing).
    </Callout>

    Para obtener contexto sobre cómo utilizar esta llamada y su llamada asociada `insertDistributedTraceHeaders`, primero lea [Habilitar rastreo distribuido con API de agente](/docs/enable-distributed-tracing#agent-apis).

    `transactionHandle.acceptDistributedTraceHeaders` se utiliza para instrumentar el servicio llamado para su inclusión en un rastreo distribuido. Vincula los tramos en una traza aceptando una carga útil generada por [`insertDistributedTraceHeaders`](#transaction-handle-insertDistributedTraceHeaders) o generada por algún otro rastreador compatible con W3C Trace Context . Este método acepta los encabezados de una solicitud entrante, busca los encabezados W3C Trace Context y, si no los encuentra, recurre a los encabezados distribuidos del rastreo de New Relic. Este método reemplaza el obsoleto (y ahora eliminado a partir de la versión 7.0.0) Método [`acceptDistributedTracePayload`](#transaction-handle-acceptDistributedTracePayload) , que solo maneja la carga distribuida de rastreo de New Relic.

    `transportType` debe ser una de las siguientes cadenas:

    * AMQP
    * HTTP
    * HTTPS
    * HierroMQ
    * JMS
    * kafka
    * Otro
    * Cola
    * Desconocido

    `headers` debe ser un objeto que contenga todos los encabezados de la solicitud entrante. Las claves deben estar en minúsculas.

    <CollapserGroup>
      <Collapser
        id="example-link-bg-txn"
        title="Aceptar encabezados entrantes de rastreo distribuido"
      >
        El siguiente ejemplo demuestra cómo agregar encabezados rastreo distribuido recuperados de un mensaje de Kafka. En este ejemplo, asumimos que el mensaje entrante de Kafka tiene encabezados de rastreo distribuido insertados.

        ```js
        // incoming Kafka message headers
        const headersObject = message.headers;

        // Call newrelic.getTransaction to retrieve a handle on the current transaction.
        const transactionHandle = newrelic.getTransaction();

        newrelic.startBackgroundTransaction('background task', function executeTransaction() {
          const transaction = newrelic.getTransaction();

          // accept the headers
          transaction.acceptDistributedTraceHeaders('Kafka', headersObject);
        });
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="transaction-handle-createDistributedTracePayload"
    title={<InlineCode>transactionHandle.createDistributedTracePayload()</InlineCode>}
  >
    ```js
    transactionHandle.createDistributedTracePayload()
    ```

    <Callout variant="caution">
      ¡Este método está en desuso y se eliminó en la versión 7.0.0! Por favor use `insertDistributedTraceHeaders.`
    </Callout>

    <Callout variant="important">
      Esta API requiere [que rastreo distribuido esté habilitado](/docs/enable-distributed-tracing).
    </Callout>

    Para obtener instrucciones sobre cómo utilizar esta llamada, junto con su llamada de socio [`acceptDistributedTracePayload`](#transaction-handle-acceptDistributedTracePayload), consulte [Habilitar rastreo distribuido con API de agente](/docs/enable-distributed-tracing#agent-apis).

    Esta convocatoria se utiliza para implementar rastreo distribuido. Genera una carga útil que la aplicación receptora lee con [`acceptDistributedTracePayload`](#transaction-handle-acceptDistributedTracePayload).

    <Callout variant="important">
      Nota: Para mantener el orden correcto de los tramos en una traza, se debe generar la carga útil en el contexto del tramo que la envía.
    </Callout>

    El objeto `DistributedTracePayload` tiene dos métodos disponibles que se utilizan para generar la carga útil en diferentes formatos:

    * `DistributedTracePayload#text`: devuelve una representación JSON de la carga útil.

      <CollapserGroup>
        <Collapser
          id="example-link-bg-txn"
          title="Vincular una transacción en segundo plano anidada"
        >
          ```js
          // Call newrelic.getTransaction to retrieve a handle on the current transaction.
          var transactionHandle = newrelic.getTransaction();
          var payload = transactionHandle.createDistributedTracePayload();
          var jsonPayload = payload.text();
          newrelic.startBackgroundTransaction('background task', function executeTransaction() {
            var backgroundHandle = newrelic.getTransaction();
            // Link the nested transaction by accepting the payload with the background transaction's handle
            backgroundHandle.acceptDistributedTracePayload(jsonPayload);
          });
          ```
        </Collapser>
      </CollapserGroup>

    * `DistributedTracePayload#httpSafe`: devuelve una representación JSON codificada en base64 de la carga útil.

      <CollapserGroup>
        <Collapser
          id="example-payload-outgoing-request"
          title="Colocar carga útil en una solicitud saliente"
        >
          ```js
          // Call newrelic.getTransaction to retrieve a handle on the current transaction.
          var transactionHandle = newrelic.getTransaction();
          var payload = transactionHandle.createDistributedTracePayload();
          // Place the base64 encoded value on an outbound request header.
          req.headers[myTracingHeader] = payload.httpSafe();
          ```
        </Collapser>
      </CollapserGroup>
  </Collapser>

  <Collapser
    id="transaction-handle-acceptDistributedTracePayload"
    title={<InlineCode>transactionHandle.acceptDistributedTracePayload(payload)</InlineCode>}
  >
    ```js
    transactionHandle.acceptDistributedTracePayload(payload)
    ```

    <Callout variant="caution">
      ¡Este método está en desuso y se eliminó en la versión 7.0.0! Por favor use `acceptDistributedTraceHeaders.`
    </Callout>

    <Callout variant="important">
      Esta API requiere [que rastreo distribuido esté habilitado](/docs/enable-distributed-tracing).
    </Callout>

    Para obtener contexto sobre cómo utilizar esta llamada y su llamada asociada `createDistributedTracePayload`, primero lea [Habilitar rastreo distribuido con API de agente](/docs/enable-distributed-tracing#agent-apis).

    `transactionHandle.acceptDistributedTracePayload` se utiliza para instrumentar el servicio llamado para su inclusión en un rastreo distribuido. Vincula los tramos en una traza aceptando la carga útil generada por [`createDistributedTracePayload`](#transaction-handle-createDistributedTracePayload).
  </Collapser>

  <Collapser
    id="transaction-handle-isSampled"
    title={<InlineCode>transactionHandle.isSampled()</InlineCode>}
  >
    ```js
    transactionHandle.isSampled()
    ```

    Devuelve si esta traza está siendo muestreada.
  </Collapser>
</CollapserGroup>

## Otra API de llamadas [#other-api]

El agente Node.js de New Relic incluye API de llamada adicional.

<CollapserGroup>
  <Collapser
    id="add-custom-attribute"
    title={<InlineCode>newrelic.addCustomAttribute(name, value)</InlineCode>}
  >
    ```js
    newrelic.addCustomAttribute(name, value)
    ```

    Establezca un valor de atributo personalizado que se mostrará junto con la traza de la transacción en la UI de New Relic. Esto debe llamarse dentro del contexto de una transacción para que tenga un lugar para configurar el atributo personalizado. El atributo personalizado aparecerá en la vista detallada de la traza de la transacción de APM y en los errores de la transacción.

    <CollapserGroup>
      <Collapser
        id="example-link-bg-txn"
        title="Agregar atributo personalizado"
      >
        ```js
        newrelic.addCustomAttribute('attribute1', 'value1')
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="caution">
      Si desea utilizar su atributo personalizado, evite utilizar cualquiera de los [términos reservados utilizados por NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) al nombrarlos.
    </Callout>
  </Collapser>

  <Collapser
    id="add-custom-attributes"
    title={<InlineCode>newrelic.addCustomAttributes(attributes)</InlineCode>}
  >
    ```js
    newrelic.addCustomAttributes(attributes)
    ```

    Establezca múltiples valores personalizados de atributos que se mostrarán junto con la traza de la transacción en la UI de New Relic. El atributo debe pasarse como un único objeto. Esto debe llamarse dentro del contexto de una transacción para que tenga un lugar para configurar el atributo personalizado. El atributo personalizado aparecerá en la vista detallada de la traza de la transacción y en los errores de la transacción.

    <CollapserGroup>
      <Collapser
        id="example-link-bg-txn"
        title="Agregar atributo personalizado"
      >
        ```js
        const attributes = {
          attribute1: 'value1',
          attribute2: 2
        };

        newrelic.addCustomAttributes(attributes);
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="caution">
      Si desea utilizar su atributo personalizado, evite utilizar cualquiera de los [términos reservados utilizados por NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) al nombrarlos.
    </Callout>
  </Collapser>

  <Collapser title={<InlineCode>newrelic.addCustomSpanAttribute(name, value)</InlineCode>}>
    ```js
    newrelic.addCustomSpanAttribute(name, value)
    ```

    Establezca un valor de atributo de intervalo personalizado que se mostrará junto con una traza de la transacción en la UI de New Relic. Esto debe llamarse dentro del contexto de un segmento/intervalo activo para que tenga un lugar para configurar el atributo de intervalo personalizado. El atributo de tramo personalizado aparecerá en la sección de atributos de la vista detallada del tramo.

    <CollapserGroup>
      <Collapser
        id="example-link-bg-txn"
        title="Agregar atributo de intervalo personalizado"
      >
        ```js
        newrelic.addCustomSpanAttribute('attribute1', 'value')
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="important">
      Esta API requiere que [rastreo distribuido](/docs/enable-distributed-tracing) y [span evento](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#span-events) estén habilitados.
    </Callout>

    <Callout variant="caution">
      Si desea utilizar su atributo span personalizado, evite utilizar cualquiera de los [términos reservados utilizados por NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) al nombrarlos.
    </Callout>
  </Collapser>

  <Collapser title={<InlineCode>newrelic.addCustomSpanAttributes(attributes)</InlineCode>}>
    ```js
    newrelic.addCustomSpanAttributes(attributes)
    ```

    Establezca múltiples valores de atributos de intervalo personalizados que se mostrarán junto con la traza de la transacción en la UI de New Relic. El atributo debe pasarse como un único objeto. Esto debe llamarse dentro del contexto de un segmento/intervalo activo para que tenga un lugar para configurar el atributo de intervalo personalizado. El atributo de tramo personalizado aparecerá en la sección de atributos de la vista detallada del tramo.

    <CollapserGroup>
      <Collapser
        id="example-link-bg-txn"
        title="Agregar atributo span personalizado"
      >
        ```js
        const attributes = {
          attribute1: 'value1',
          attribute2: 'value2'
        };

        newrelic.addCustomSpanAttributes(attributes);
        ```
      </Collapser>
    </CollapserGroup>

    <Callout variant="important">
      Esta API requiere que [rastreo distribuido](/docs/enable-distributed-tracing) y [span evento](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#span-events) estén habilitados.
    </Callout>

    <Callout variant="caution">
      Si desea utilizar su atributo span personalizado, evite utilizar cualquiera de los [términos reservados utilizados por NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) al nombrarlos.
    </Callout>
  </Collapser>

  <Collapser
    id="browserTimingHeader"
    title={<InlineCode>newrelic.getBrowserTimingHeader()</InlineCode>}
  >
    ```js
    newrelic.getBrowserTimingHeader()
    ```

    Devuelve el fragmento de HTML que se insertará en el encabezado de las páginas HTML para habilitar [<InlinePopover type="browser"/>](/docs/agents/nodejs-agent/supported-features/page-load-timing-nodejs). El HTML le indicará al browser que busque un pequeño archivo JavaScript e inicie el temporizador de la página.
  </Collapser>

  <Collapser
    id="noticeError"
    title={<InlineCode>newrelic.noticeError(error, \[customAttributes], \[expected])</InlineCode>}
  >
    ```js
    newrelic.noticeError(error, [customAttributes], [expected])
    ```

    Utilice esta llamada si su aplicación realiza su propio manejo de errores con cláusulas de dominio o try/catch, pero desea que toda la información sobre cuántos errores surgen de la aplicación se administre de manera centralizada. A diferencia de otras llamadas de Node.js, esto se puede usar fuera de los controladores de ruta, pero tendrá contexto adicional si se llama desde dentro del alcance de la transacción.

    `error` debe ser un `Error` o uno de sus subtipos, pero la API manejará cadenas y objetos que tengan una propiedad `.message` o `.stack` adjunta.

    `customAttributes` es un objeto opcional de cualquier atributo personalizado que se mostrará en la UI de New Relic.

    `expected` es un booleano opcional para clasificar el error como un error esperado. Si un error recopilado con `noticeError` es `expected`, se recopilará y reportará, pero no afectará `Apdex` ni a la tasa de errores métrica. De forma predeterminada, `expected` es `false`.

    <Callout variant="important">
      El parámetro `expected` requiere [la versión 9.12.1 o superior del agente Node.js.](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-9-12-1)
    </Callout>

    <DNT>
      **Example:**
    </DNT>

    ```js
    try {
      performSomeTask();
    } catch(err) {
      newrelic.noticeError(
        err,
        { extraInformation: "error already handled in the application" },
        true
      );
    }
    ```

    <Callout variant="caution">
      Los errores registrados con este método no obedecen al valor de configuración [`ignore_status_codes`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#error_ignore) .
    </Callout>
  </Collapser>

  <Collapser
    id="setErrorGroupCallback"
    title={<InlineCode>newrelic.setErrorGroupCallback(callback)</InlineCode>}
  >
    ```js
    newrelic.setErrorGroupCallback(callback)
    ```

    Este método le permite definir una devolución de llamada personalizada para generar nombres de grupos de errores, que serán utilizados por Errors Inbox para agrupar errores similares a través del atributo de agente `error.group.name`.

    Las funciones proporcionadas deben devolver una cadena y recibir un objeto como argumento. El objeto contiene información relacionada con el error ocurrido y tiene el siguiente formato:

    <Callout variant="important">
      El uso de `setErrorGroupCallback` requiere [la versión 9.14.0 o superior del agente Node.js.](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-9-14-0/)
    </Callout>

    ```js
    {
      "customAttributes": object,
      "request.uri": string,
      "http.statusCode": string,
      "http.method": string,
      "error": Error,
      "error.expected": boolean
    }
    ```

    Llamar a esta función varias veces reemplazará las versiones definidas previamente de esta función de devolución de llamada.

    Para obtener más información sobre esta función, consulte nuestra [aplicación de ejemplo](https://github.com/newrelic/newrelic-node-examples/tree/main/error-fingerprinting).
  </Collapser>

  <Collapser
    id="ignore"
    title={<InlineCode>newrelic.setIgnoreTransaction(ignored)</InlineCode>}
  >
    <Callout variant="caution">
      Este método está en desuso y se eliminó en la versión 7.0.0. Utilice [transactionHandle.ignore()](#transaction-handle-ignore)
    </Callout>

    ```js
    newrelic.setIgnoreTransaction(ignored)
    ```

    Indique al módulo si debe ignorar o no una solicitud determinada. Esto le permite filtrar explícitamente rutas o solicitudes irrelevantes y de sondeo largo que sabe que consumirán mucho tiempo. Esto también le permite recopilar métricas para solicitudes que de otro modo serían ignoradas.

    * Para ignorar la transacción, establezca el parámetro en `true`: esto ignorará la transacción.
    * Para evitar que una transacción sea ignorada con esta función, pase el parámetro `false`.
    * Pasar `null` o `undefined` no cambiará si se ignora la transacción.
  </Collapser>

  <Collapser
    id="setUserID"
    title={<InlineCode>newrelic.setUserID(string)</InlineCode>}
  >
    ```js
    newrelic.setUserID(string)
    ```

    Este método le brinda una manera de asociar un identificador único con un evento de transacción, traza de la transacción y errores dentro de la transacción. Se agregará una nueva propiedad, `enduser.id`, al error y se informará a Errors Inbox.

    <Callout variant="important">
      La API `setUserID` requiere [la versión 9.13.0 o superior del agente Node.js.](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-9-13-0/)
    </Callout>
  </Collapser>

  <Collapser
    id="shutdown"
    title={<InlineCode>newrelic.shutdown(\[options], callback)</InlineCode>}
  >
    ```js
    newrelic.shutdown(options, callback)
    ```

    Utilice este método para cerrar correctamente el agente; ambos parámetros son opcionales. Aquí hay una tabla general que muestra el parámetro:

    <table>
      <thead>
        <tr>
          <th style={{ width: "180px" }}>
            Parámetro
          </th>

          <th style={{ width: "100px" }}>
            Tipo
          </th>

          <th style={{ width: "100px" }}>
            Atributo
          </th>

          <th style={{ width: "200px" }}>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `options`
          </td>

          <td>
            `object`
          </td>

          <td>
            Opcional
          </td>

          <td>
            Objeto con opciones de apagado
          </td>
        </tr>

        <tr>
          <td>
            `callback`
          </td>

          <td>
            `function`
          </td>

          <td>
            Opcional
          </td>

          <td>
            Función de devolución de llamada que se ejecuta cuando el agente se detiene
          </td>
        </tr>
      </tbody>
    </table>

    Aquí hay una tabla detallada que muestra las opciones de apagado del objeto:

    <table>
      <thead>
        <tr>
          <th style={{ width: "180px" }}>
            Nombre de la opción
          </th>

          <th style={{ width: "100px" }}>
            Tipo
          </th>

          <th style={{ width: "100px" }}>
            Atributo
          </th>

          <th style={{ width: "50px" }}>
            Por defecto
          </th>

          <th style={{ width: "200px" }}>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `collectPendingData`
          </td>

          <td>
            `boolean`
          </td>

          <td>
            Opcional
          </td>

          <td>
            `false`
          </td>

          <td>
            Dígale al agente si debe enviar algún dato pendiente al recolector New Relic antes de apagarlo.
          </td>
        </tr>

        <tr>
          <td>
            `timeout`
          </td>

          <td>
            `number`
          </td>

          <td>
            Opcional
          </td>

          <td>
            `0`
          </td>

          <td>
            El tiempo predeterminado antes de forzar un apagado. Cuando `collectPendingData` es verdadero, el agente esperará una conexión antes de cerrarse. Este tiempo de espera es útil para procesos de corta duración, como AWS Lambda, para evitar que el proceso permanezca abierto demasiado tiempo mientras intenta conectarse.
          </td>
        </tr>

        <tr>
          <td>
            `waitForIdle`
          </td>

          <td>
            `boolean`
          </td>

          <td>
            Opcional
          </td>

          <td>
            `false`
          </td>

          <td>
            Si es verdadero, el agente no se cerrará hasta que no haya transacciones activas.
          </td>
        </tr>
      </tbody>
    </table>

    <DNT>
      **Example:**
    </DNT>

    ```js
    newrelic.shutdown({collectPendingData: true, timeout: 10000}, (error) => {
      process.exit();
    });
    ```
  </Collapser>

  <Collapser
    id="getLinkingMetadata"
    title={<InlineCode>newrelic.getLinkingMetadata()</InlineCode>}
  >
    ```js
    newrelic.getLinkingMetadata()
    ```

    Devuelve pares de valores principales que se pueden utilizar para vincular traza o entidad.

    Sólo contendrá elementos con valores significativos. Para instancia, si rastreo distribuido está deshabilitado, `trace.id` no se incluirá.
  </Collapser>

  <Collapser
    id="getTraceMetadata"
    title={<InlineCode>newrelic.getTraceMetadata()</InlineCode>}
  >
    ```js
    newrelic.getTraceMetadata()
    ```

    Devuelve un objeto que contiene el ID de traza actual y el ID de tramo.

    <Callout variant="important">
      Esta API requiere [que rastreo distribuido esté habilitado](/docs/enable-distributed-tracing) o se devolverá un objeto vacío.
    </Callout>
  </Collapser>
</CollapserGroup>

## Reglas para nombrar e ignorar solicitudes [#ignoring]

Si no desea colocar llamadas al módulo New Relic directamente en el código de su aplicación, puede usar reglas basadas en patrones para nombrar las solicitudes. Hay dos conjuntos de reglas: uno para cambiar el nombre de las solicitudes y otro para marcar las solicitudes que la instrumentación de New Relic debe ignorar.

Aquí está la estructura de las reglas en el agente Node.js de New Relic.

<CollapserGroup>
  <Collapser
    id="rules-name"
    title={<InlineCode>rules.name</InlineCode>}
  >
    Una lista de reglas del formato `{pattern : "pattern", name : "name"}` para hacer coincidir las URL de solicitud entrantes con `pattern` y nombrar la transacción New Relic coincidente `name`. Esto actúa como un reemplazo de expresiones regulares, donde puede establecer el patrón como una cadena o como un literal de expresión regular de JavaScript, y tanto el patrón como el nombre son obligatorios.

    Al pasar una expresión regular como una cadena, escape las barras invertidas, ya que el agente no las conserva cuando se las proporciona como una cadena en un patrón. Defina sus reglas de configuración desde las más específicas hasta las más generales, ya que los patrones se evaluarán en orden y son de naturaleza terminal. Para obtener más información, consulte las [pautas de nomenclatura](/docs/agents/nodejs-agent/installation-configuration/configuring-nodejs#rules).

    Esto también se puede configurar con la variable de entorno `NEW_RELIC_NAMING_RULES`, con múltiples reglas pasadas como una lista de literales de objetos JSON delimitados por comas:

    ```js
    NEW_RELIC_NAMING_RULES='{"pattern":"^t","name":"u"},{"pattern":"^u","name":"t"}'
    ```

    ### Atributo de reglas opcionales

    Hay disponibles atributos opcionales adicionales:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            <DNT>
              **Optional rules attributes**
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
            `terminate_chain`
          </td>

          <td>
            Por defecto: `true`

            Cuando se establece en `true` (predeterminado), no se evaluarán más reglas si esta regla coincide. Establecer esto en falso es útil cuando se deben usar varias reglas juntas. Por ejemplo, una regla podría reemplazar un patrón común en muchas URL diferentes, mientras que las reglas posteriores serían más específicas.
          </td>
        </tr>

        <tr>
          <td>
            `replace_all`
          </td>

          <td>
            Por defecto: `false`

            Cuando se establece en `true`, se reemplazarán todas las coincidencias del patrón. En caso contrario, sólo se sustituirá el primer partido. Usar el indicador `g` con una expresión literal literal tendrá el mismo efecto. Por ejemplo:

            ```
            pattern: '[0-9]+',
            replace_all: true
            ```

            Esto tiene el mismo efecto que `pattern: /[0-9]+/g`.
          </td>
        </tr>

        <tr>
          <td>
            `precedence`
          </td>

          <td>
            De forma predeterminada, las reglas se evalúan en orden, del primero al último. Si prefiere tener control total sobre el pedido, puede asignar a cada regla un atributo `precedence` . La precedencia es un número entero y las reglas se evalúan en orden ascendente. Si `precedence` no está definido explícitamente, se establecerá en 500 de forma predeterminada.

            Se ignoran los atributos adicionales.
          </td>
        </tr>
      </tbody>
    </table>

    ### Probando tus reglas de nomenclatura

    El agente de Node.js viene con una herramienta de línea de comando para probar reglas de nomenclatura. Para obtener más información, ejecute el siguiente comando en la ventana de terminal en un directorio donde esté instalada su aplicación:

    ```bash
    node node_modules/.bin/newrelic-naming-rules
    ```

    ### Ejemplos de reglas de nomenclatura [#examples-rules]

    A continuación se muestran algunos ejemplos de reglas de nomenclatura y los resultados.

    <CollapserGroup>
      <Collapser
        id="naming-full-url"
        title="Coincidir con la URL completa"
      >
        ```
        pattern: "^/items/[0-9]+$",
        name: "/items/:id"
        ```

        resultará en:

        ```
        /items/123   =>  /items/:id
        /orders/123  =>  /orders/123   (not replaced since the rule is a full match)
        ```
      </Collapser>

      <Collapser
        id="first-match-url"
        title="Reemplazar la primera coincidencia en la URL"
      >
        ```
        pattern: "[0-9]+",
        name: ":id"
        ```

        resultará en:

        ```
        /orders/123            =>  /orders/:id
        /items/123             =>  /items/:id
        /orders/123/items/123  =>  /orders/:id/items/123
        ```
      </Collapser>

      <Collapser
        id="replace-urls"
        title="Reemplazar todas las coincidencias en cualquier URL"
      >
        ```
        pattern: "[0-9]+",
        name: ":id",
        replace_all: true
        ```

        resultará en:

        ```
        /orders/123/items/123  =>  /orders/:id/items/:id
        ```
      </Collapser>

      <Collapser
        id="regular-match-group"
        title="Referencias del grupo de coincidencias"
      >
        Usando referencias de grupos de coincidencia de expresiones regulares:

        ```
        pattern: '^/(items|orders)/[0-9]+$',
        name: '/\\1/:id'
        ```

        resultará en:

        ```
        /orders/123  =>  /orders/:id
        /items/123   =>  /items/:id
        ```
      </Collapser>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="rules-ignore"
    title={<InlineCode>rules.ignore</InlineCode>}
  >
    Esto también se puede configurar mediante la variable de entorno `NEW_RELIC_IGNORING_RULES`, con múltiples reglas pasadas como una lista de patrones delimitados por comas. Actualmente no hay forma de escapar de las comas en los patrones.

    ```js
    NEW_RELIC_IGNORING_RULES='^/socket\.io/\*/xhr-polling,ignore_me'
    ```
  </Collapser>
</CollapserGroup>

A continuación se muestran ejemplos completos de cómo se incluyen las reglas en el archivo de configuración:

<CollapserGroup>
  <Collapser
    id="example-naming-rule"
    title="Ejemplo de regla de nomenclatura"
  >
    ```js
    // newrelic.js
    exports.config = {
      // other configuration
      rules : {
        name : [
          { pattern: "/tables/name-here", name: "/name-hererule1" }
        ]
      }
    };
    ```
  </Collapser>

  <Collapser
    id="example-ignoring-rule"
    title="Ejemplo de ignorar regla"
  >
    Si está utilizando <DNT>**socket.io**</DNT>, tendrá un caso de uso para ignorar reglas desde el primer momento. Para evitar que el sondeo prolongado de socket.io domine su métrica de tiempo de respuesta y afecte la métrica de Apdex de su aplicación, agregue una regla como:

    ```js
    // newrelic.js
    exports.config = {
      // other configuration
      rules : {
        ignore : [
          '^\/socket\.io\/.*\/xhr-polling'
        ]
      }
    };
    ```
  </Collapser>
</CollapserGroup>

## Llamada API para reglas [#api-calls-rules]

Aquí está la API de llamada para nombrar e ignorar reglas con el agente Node.js de New Relic.

<CollapserGroup>
  <Collapser
    id="addnamingrule"
    title={<InlineCode>newrelic.addNamingRule(pattern, name)</InlineCode>}
  >
    Versión programática de <DNT>**rules.name**</DNT>. Una vez que se agregan las reglas de nomenclatura, no se pueden eliminar hasta que se reinicie el proceso de Node.js. También se pueden agregar mediante la configuración del agente de Node.js. Ambos parámetros son obligatorios.
  </Collapser>

  <Collapser
    id="addignoringrule"
    title={<InlineCode>newrelic.addIgnoringRule(pattern)</InlineCode>}
  >
    Versión programática de <DNT>**rules.ignore**</DNT>. Una vez que se agregan reglas para ignorar, no se pueden eliminar hasta que se reinicie el proceso de Node.js. También se pueden agregar mediante la configuración del agente de Node.js. Este parámetro es obligatorio.
  </Collapser>
</CollapserGroup>
