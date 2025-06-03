---
title: Agente de Java API para aplicación asincrónica
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: How to use the New Relic for Java API to instrument asynchronous application activity.
freshnessValidatedDate: never
translationType: machine
---

[New Relic para Java](/docs/agents/java-agent/getting-started/introduction-new-relic-java) ( [versión del agente 3.37](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-3370) o superior) incluye una API para la actividad de instrumento asincrónico. Para [el marco compatible](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent), el agente generalmente instrumenta el trabajo asíncrono automáticamente. Sin embargo, la API asíncrona aún puede resultar útil para agregar detalles. Este documento proporciona ejemplos del uso de tokens y segmentos para instrumentar su aplicación.

* Para obtener más información sobre cómo funciona New Relic instrumentado y muestra asíncrono en laUI

  <InlinePopover type="apm"/>

  , consulte [Consideraciones de monitoreo para aplicaciones asincrónicas](/docs/agents/java-agent/instrumentation/asynchronous-applications-monitoring-considerations).

* Para obtener detalles sobre las clases y métodos reales, consulte el [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/NewRelic.html).

* Para obtener información general sobre la API del agente de Java, consulte la [guía de la API del agente de Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api-guide).

* Para la resolución de problemas comunes, consulte [resolución de problemas de la aplicación asincrónica Java](/docs/agents/java-agent/java-agent-api/troubleshooting-java-asynchronous-applications).

## Herramientas de seguimiento asíncrono: token y segmentos [#tokens_segments]

La API del agente de Java proporciona dos formas de trazar la actividad asincrónica:

* <DNT>
    **[Tokens](#tokens)**
  </DNT>

  : los tokens se pasan entre subprocesos para vincular una unidad de trabajo asincrónica a una transacción específica. No realizan ningún cronometraje directamente.

* <DNT>
    **[Segments](#segments)**
  </DNT>

  : Los segmentos se utilizan para medir una pieza arbitraria de código de aplicación asincrónico, no necesariamente asociado con un método o hilo. Los segmentos se utilizan normalmente para rastrear llamadas externas que se completan mediante un mecanismo de devolución de llamada.

## Token: conectar subprocesos asíncronos [#tokens]

Utilice token para vincular unidades de trabajo arbitrarias que se encuentran en hilos separados. Esta sección describe cómo usar las llamadas relacionadas con tokenjuntas para que el instrumento funcione asíncrono. Para obtener información detallada sobre clases y métodos, consulte el Javadoc.

Para usar tokens, primero debe crear el token y luego vincular otra llamada a la transacción de origen. Debes vincular el token lo antes posible dentro de la otra llamada. Si no vincula el token inmediatamente, corre el riesgo de perder cualquier método que contenga un `@Trace` debajo de la llamada que está intentando vincular. También puede caducar el token en la llamada original. El agente de Java luego vinculará el trabajo en la UI de New Relic. Estos ejemplos ilustran cómo utilizar juntas las llamadas relacionadas con el token :

<CollapserGroup>
  <Collapser
    id="use-gettoken"
    title="1. Inicie una transacción, luego cree y caduque un token"
  >
    Considere el método `parallelStream()` en el fragmento de código siguiente. Debido a que algunas de las llamadas a `requestItemAsync()` se producirán en un hilo separado, se crea un token y se pasa para vincular ese trabajo asincrónico al hilo solicitante.

    ```java
    /**
    * Example showing multi-threaded implementation of requesting data using a parallel {@link Stream}.
    */
    @RequestMapping("parallel_stream")
    @Trace(dispatcher = true) // starts a transaction
    public ResponseEntity<String> parallelStream(@RequestParam("ids") List<Long> ids) {
        final Token token = NewRelic.getAgent().getTransaction().getToken();
        List<item> results = ids
                .parallelStream()
                .map(id -> requestItemAsync(id, token)) // requestItemAsync represents an  example of work being passed to another thread. The token is passed along to allow linking the work on the new thread back to the thread that the token was originally created on.
                .filter(item -> item != null)
                .collect(Collectors.toList());
        token.expire();
        return formattedResponse("parallel_stream", results);
    }
    ```

    Las llamadas a la API del agente en este ejemplo son:

    * `@Trace(dispatcher = true)`: Le dice al agente que inicie una transacción. Para obtener más información sobre este método, consulte el [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Trace.html).
    * `getToken()`: Crea el token que vinculará el trabajo. Para obtener más información sobre este método, consulte el [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Transaction.html#getToken()).
    * `token.expire()`: El token caduca. Esto permite que la transacción finalice. Para obtener más información sobre este método, consulte el [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Token.html#expire()).
  </Collapser>

  <Collapser
    id="retrive-token"
    title="2. Marcar una transacción como asíncrona y vincularla al hilo de solicitud"
  >
    El siguiente ejemplo de código muestra `requestItemAsync`, que podría ejecutarse en un subproceso independiente del subproceso solicitante. Por este motivo, el token que se creó en el ejemplo de código anterior está vinculado a la transacción en `requestItemAsync`. Tenga en cuenta que `requestItemAsync()` tiene la anotación `@Trace(async=true)` , que le indica al agente que trace este método si está vinculado a una transacción existente.

    Después de que `parallelStream()` recopile todos los resultados, el token caduca. Esto es importante porque garantiza que la transacción no permanezca abierta después de que se complete `parallelStream()` .

    ```java
    @Trace(async = true)
    private Item requestItemAsync(long id, Token token) {
        token.link();
        return requestItem(id);
    }
    ```

    Las llamadas a la API del agente en este ejemplo son:

    * `@Trace(async = true)`: inicia una transacción. Para obtener más información sobre este método, consulte el [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Trace.html).
    * `token.link()`: Vincula el trabajo que se está realizando en `requestItemAsync()` (que se ejecuta en un hilo diferente) al hilo solicitante. Para obtener más información sobre este método, consulte el [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Token.html#link()).
  </Collapser>

  <Collapser
    id="token-in-ui"
    title="3. Vea su traza asíncrona en la UIde New Relic"
  >
    Para ver los detalles de la traza de la transacción, vaya a: <DNT>**[one.newrelic.com](https://one.newrelic.com) APM & services > (select an app) > Transactions > Transaction trace > Trace details**</DNT>.

    La actividad asincrónica se muestra en la vista de cascada de traza mediante segmentos que se superponen horizontalmente, en la dimensión temporal.

    No es necesario vincular métodos que están en el mismo hilo, pero hacerlo no tendrá ningún efecto negativo. A menudo ocurre que se puede compartir un único token, como en el ejemplo `parallelStream()` .
  </Collapser>
</CollapserGroup>

<Callout variant="tip">
  De forma predeterminada, una transacción puede crear un máximo de 3000 tokens y cada token tiene un tiempo de espera predeterminado de 180 segundos. Puede cambiar el límite anterior con la opción de configuración `token_limit` y el último con la opción de configuración [`token_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-token_timeout) . La traza para transacciones que excedan el `token_limit` contendrá un atributo `token_clamp` . Aumentar cualquiera de las opciones de configuración puede aumentar el uso de memoria del agente.
</Callout>

## Segmentos: actividad asíncrona arbitraria de tiempo [#segments]

Los segmentos se utilizan para medir una pieza arbitraria de código de aplicación asincrónico, no necesariamente asociado con un método o hilo. Esto se utiliza más comúnmente para cronometrar conexiones a servicios externos. Utilice segmentos si desea:

* Código de tiempo que se completa mediante una devolución de llamada
* Cronometrar una llamada asincrónica que abarque muchos métodos
* Mida el tiempo entre el momento en que se crea el trabajo y su ejecución (por ejemplo, en un grupo de subprocesos)

<CollapserGroup>
  <Collapser
    id="segments-part-1"
    title="1. Cree una transacción y llame a un servicio externo."
  >
    El siguiente método realiza una llamada a un servicio externo (en este caso una base de datos) utilizando el método `storeItem()`:

    ```java
    /**
    * Example showing single threaded implementation of inserting data into a datasource.
    */
    @RequestMapping("insert")
    @Trace(dispatcher = true) //starts a transaction
    public ResponseEntity insert(@RequestParam("id") Long id) {
        if (id != null) {
            storeItem(id);
            return new ResponseEntity<>("insert", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("insert", HttpStatus.BAD_REQUEST);
        }
    }
    ```

    El objetivo en este caso es averiguar cuánto tiempo espera `Callable` en la declaración Lambda en el grupo de subprocesos antes de ejecutarse, en lugar de determinar cuánto tiempo se ejecuta `storeItem()` . Por este motivo, se utiliza un segmento en lugar de un token y `@Trace(async = true)` no es necesario como lo era para un token.

    La llamada API del agente en este ejemplo es:

    * `@Trace(dispatcher = true)`: inicia una transacción. Para obtener más información sobre este método, consulte el [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Trace.html).
  </Collapser>

  <Collapser
    id="segment-reportasexternal"
    title="2. Iniciar un segmento, informar sobre los aspectos externos y finalizar el segmento."
  >
    El siguiente ejemplo de código muestra un segmento que comienza en el método `storeItem` para medir cuánto tiempo espera la declaración Lambda en el grupo de subprocesos. Para dejar de cronometrar el segmento, debe llamar a `.end()` o `.ignore()`. Si <DNT>**don't**</DNT> desea informar el segmento como parte de su transacción principal, llame a `.ignore()`. De lo contrario, para informar el segmento como parte de su transacción principal, llame a `.end()`.

    ```java
    private void storeItem(long id) {
        Segment segment = NewRelic.getAgent().getTransaction().startSegment("storeItem");

        segment.reportAsExternal(DatastoreParameters
               .product("H2")
               .collection(null)
               .operation("insert")
               .instance("localhost", 8080)
               .databaseName("test")
               .build());

        // fire and forget
        DB_POOL.submit(() -> {
            segment.end();
            insertData(id);
        });
    }
    ```

    Las llamadas a la API del agente en este ejemplo son:

    * `startSegment(...)`: Comienza el segmento que cronometrará el código. Para obtener más información sobre este método, consulte el [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Segment.html).
    * `reportAsExternal(DatastoreParameters())`: Asocia la hora con una llamada externa de almacenamiento de datos. Esto se mostrará en APM con [almacenamiento de datos datos](/docs/apm/applications-menu/features/analyze-database-instance-level-performance-issues). Para obtener más información, consulte [API reportAsExternal](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/TracedMethod.html).
    * `segment.end()`: Detiene el cronometraje de este segmento. Para obtener más información sobre este método, consulte el [Javadoc](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/Segment.html#end()).
  </Collapser>

  <Collapser
    id="segment-in-ui"
    title="3. Vea su traza asíncrona en la UIde New Relic"
  >
    Cuando se completa el método, APM muestra una traza de la transacción con una llamada externa.
  </Collapser>
</CollapserGroup>

<Callout variant="tip">
  De forma predeterminada, el agente puede rastrear un máximo de 1000 segmentos durante una transacción determinada. Puede cambiar este límite con la opción de configuración [`segment_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-segment_timeout) . La traza de transacción que exceda este límite contendrá un atributo `segment_clamp` . Aumentar este límite puede aumentar el uso de memoria del agente.
</Callout>
