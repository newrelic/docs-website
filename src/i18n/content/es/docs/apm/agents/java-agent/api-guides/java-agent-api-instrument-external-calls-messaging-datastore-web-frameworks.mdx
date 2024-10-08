---
title: 'Agente de Java API: Instrumentar de llamadas externas, mensajería, almacenamiento de datos, marco web'
tags:
  - Agents
  - Java agent
  - API guides
metaDescription: 'Use the New Relic Java API to instrument web and non-web transactions: external calls, cross app tracing, messaging, datastore, web frameworks, etc.'
freshnessValidatedDate: never
translationType: machine
---

El agente de Java de New Relic recopila y reporta información sobre [transacciones web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) y [transacciones no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions), como tareas en segundo plano. El agente debe soportar el marco del instrumento automáticamente, sin necesidad de modificar el código de su aplicación. Sin embargo, además del código personalizado y el marco o la tecnología que no figuran en la documentación [Compatibilidad y requisitos para el agente de Java](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent) , algunas implementaciones del marco compatible pueden requerir [instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation).

Este documento describe cómo utilizar el [API del agente de Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api) para implementar llamadas externas, marco de mensajería, [Distributed tracing](/docs/distributed-tracing/), almacenes de datos y marco web. Para obtener mejores resultados al utilizar la API, asegúrese de tener la [última versión del agente de Java](/docs/release-notes/agent-release-notes/java-release-notes). Varias API utilizadas en los ejemplos requieren agente de Java 3.36.0 o superior.

## API externa [#external]

El <DNT>**External API**</DNT> permite que la aplicación informe llamadas de servicios externos a New Relic. Esta información aparece en la [página<DNT>**External services**</DNT> ](/docs/apm/applications-menu/monitoring/external-services-page)en APM. Para informar la actividad externa HTTP, simplemente cree una instancia de `ExternalParameters` usando el constructor `HttpParameters` y llame a `reportAsExternal(ExternalParameters parameters)` en el método traza que desea informar.

<CollapserGroup>
  <Collapser
    id="external-api-example"
    title="API externa"
  >
    ```java
    String library = "HttpClient"; // a user-recognizable name for the library that is being used
    URI uri = request.getURI();    // the URI that is being requested
    String procedure = "execute";  // these are typically named after the method in the library that's being instrumented

    // construct external parameters
    ExternalParameters params = HttpParameters
        .library(library)
        .uri(uri)
        .procedure(procedure)
        .inboundHeaders(inboundHeaders)
        .build();

    // report the current method as doing external activity
    NewRelic.getAgent().getTracedMethod().reportAsExternal(params);
    ```
  </Collapser>
</CollapserGroup>

## Constructores de parámetros externos [#external-parameters]

Hay varios constructores para crear `ExternalParameters`:

* `DatastoreParameters`
* `HttpParameters`
* `GenericParameters`
* `MessageConsumeParameters`
* `MessageProduceParameters`

Estos constructores crean el objeto de parámetro de entrada para la llamada API `reportAsExternal` [de`TracedMethod`](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/TracedMethod.html) . Estos objetos de parámetros se utilizan para cosas como vincular llamadas externas HTTP a través de distributed tracing, rastrear llamadas externas a un almacenamiento de datos, rastrear llamadas externas a un almacenamiento de datos con procesamiento adicional de consulta lenta, así como rastrear llamadas entre productores de mensajes y consumidores.

<Callout variant="important">
  Todos los métodos de esta clase tienen el potencial de exponer información privada confidencial. Tenga cuidado al crear los argumentos, prestando especial atención a los URI y los valores de cadena.
</Callout>

## Rastreo distribuido API [#distributed-tracing]

La API [de rastreo distribuida](/docs/distributed-tracing/) permite al agente de Java New Relic vincular transacciones entre aplicaciones instrumentadas por el agente de Java New Relic o por otra herramienta estándar de instrumentación abierta. Utiliza un contenedor para permitir que el agente lea/escriba encabezados de solicitudes.

### Envoltorio de encabezados

El agente utiliza la interfaz `Headers` para leer/escribir encabezados de una solicitud. Tanto el cliente como el servidor necesitan implementar esta interfaz utilizando las clases de su framework de comunicaciones. Por ejemplo:

<CollapserGroup>
  <Collapser
    id="headers-example"
    title="Implementación de encabezados"
  >
    ```java
    class HeadersWrapper implements Headers {
        private final HttpMessage delegate;

        public HeadersWrapper(HttpMessage request) {
            this.delegate = request;
        }

        @Override
        public void setHeader(String name, String value) {
            delegate.setHeader(name, value);
        }

        @Override
        public HeaderType getHeaderType() {
            return HeaderType.HTTP;
        }

        @Override
        public String getHeader(String name) {
            return delegate.getFirstHeader(name).getValue();
        }

        @Override
        public Collection<String> getHeaders(String name) {
            return Arrays.stream(delegate.getHeaders(name))
                    .map(NameValuePair::getValue)
                    .collect(Collectors.toList());
        }

        @Override
        public void addHeader(String name, String value) {
            delegate.addHeader(name, value);
        }

        @Override
        public Collection<String> getHeaderNames() {
            return Arrays.stream(delegate.getAllHeaders())
                    .map(NameValuePair::getName)
                    .collect(Collectors.toSet());
        }

        @Override
        public boolean containsHeader(String name) {
            return Arrays.stream(delegate.getAllHeaders())
                    .map(NameValuePair::getName)
                    .anyMatch(headerName -> headerName.equals(name));
        }
    }
    ```
  </Collapser>
</CollapserGroup>

### Implementación de rastreo distribuido usando wrappers [#dt-implementation]

Utilizando el objeto contenedor descrito en la sección anterior, puede permitir que el agente de Java informe la traza en el lado del cliente y del servidor. Por ejemplo:

<CollapserGroup>
  <Collapser
    id="dt-client-example"
    title="Rastreo distribuido: Lado del cliente"
  >
    ```java
    @Trace
    public int makeExternalCall(URI uri) throws IOException {
        HttpUriRequest request = RequestBuilder.get().setUri(uri).build();

        // Wrap the outbound Request object
        Headers outboundHeaders = new HeadersWrapper(request);

        // Obtain a reference to the current transaction
        Transaction transaction = NewRelic.getAgent().getTransaction();
        // Add headers for outbound external request
        transaction.insertDistributedTraceHeaders(outboundHeaders);

        CloseableHttpClient connection = HttpClientBuilder.create().build();
        CloseableHttpResponse response = connection.execute(request);

        return response.getStatusLine().getStatusCode();
    }
    ```
  </Collapser>
</CollapserGroup>

En este código de muestra, el agente está configurado para reportar una llamada externa usando rastreo distribuido en el cliente que inicia la solicitud. Estos pasos se pueden resumir de la siguiente manera:

1. Implemente `Headers` utilizando clases framework en el cliente.
2. Utilice `insertDistributedTraceHeaders(Headers headers)` para que el agente agregue encabezados adecuados a la solicitud saliente.

<CollapserGroup>
  <Collapser
    id="dt-server-example"
    title="Rastreo distribuido: Del lado del servidor"
  >
    ```java
    @Trace(dispatcher = true)
    @Override
    public Response serve(IHTTPSession request) {
        // Obtain a reference to the current Transaction
        Transaction tx = NewRelic.getAgent().getTransaction();

        // Set the name of the current transaction
        NewRelic.setTransactionName("Custom", "ExternalHTTPServer");

        // Wrap the Request object
        Headers req = new HeadersWrapper(request);

        // Set the request for the current transaction and convert it into a web transaction
        tx.acceptDistributedTraceHeaders(TransportType.HTTP, req);

        queryDB();

        return newFixedLengthResponse("<html><body><h1>SuccessfulResponse</h1>\n</body></html>\n");
    }
    ```
  </Collapser>
</CollapserGroup>

En este código de muestra, el agente está configurado para leer los encabezados de la solicitud. Estos pasos se pueden resumir de la siguiente manera:

1. Implemente `Headers` utilizando clases framework en el servidor.
2. Utilice `acceptDistributedTraceHeaders(TransportType transportType, Headers headers)` para vincular esta transacción a la transacción que realizó la llamada.

## API de seguimiento multiaplicación [#cat-api]

<Callout variant="important">
  El seguimiento de aplicaciones múltiples ha quedado obsoleto a partir de la versión 7.4.0 del agente y se eliminará en una versión futura del agente.

  En lugar de utilizar el rastreo multiaplicación, recomendamos nuestra característica [rastreo distribuido](#distributed-tracing) . rastreo distribuido es una mejora de la característica de rastreo multiaplicación y se recomienda para sistemas distribuidos grandes.
</Callout>

La API [de seguimiento de múltiples aplicaciones](/docs/apm/transactions/cross-application-traces/cross-application-tracing) (CAT) permite al agente de Java de New Relic vincular transacciones a través del monitor de aplicaciones de New Relic. La API utiliza contenedores de cliente y servidor que permiten al agente leer encabezados de solicitudes y agregar encabezados a las respuestas.

### Envoltorios de clientes

Para que el agente escriba encabezados de solicitud salientes en el cliente que inicia la solicitud, utilice la interfaz `OutboundHeaders` . Por ejemplo:

<CollapserGroup>
  <Collapser
    id="outbound-header-example"
    title="Implementación de encabezados salientes"
  >
    ```java
    class OutboundWrapper implements OutboundHeaders {
        private final HttpUriRequest delegate;

        // OutboundHeaders is implemented by delegating to the library's request object
        public OutboundWrapper(HttpUriRequest request) {
            this.delegate = request;
        }

        // This allows the agent to add the correct headers to the HTTP request
        @Override
        public void setHeader(String name, String value) {
            delegate.addHeader(name, value);
        }

        // New Relic CAT specifies different header names for HTTP and MESSAGE
        @Override
        public HeaderType getHeaderType() {
            return HeaderType.HTTP;
        }
    }
    ```
  </Collapser>
</CollapserGroup>

Para que el agente lea los encabezados de respuesta entrantes en el cliente que recibe la respuesta, implemente `InboundHeaders`. Por ejemplo:

<CollapserGroup>
  <Collapser
    id="inbound-headers-example"
    title="Implementación de encabezados entrantes"
  >
    ```java
    class InboundWrapper implements InboundHeaders {
        private final CloseableHttpResponse responseHeaders;

        // OutboundHeaders is implemented by delegating to the library's response object
        public InboundWrapper(CloseableHttpResponse responseHeaders) {
            this.responseHeaders = responseHeaders;
        }

        // New Relic CAT specifies different header names for HTTP and MESSAGE
        @Override
        public HeaderType getHeaderType() {
            return HeaderType.HTTP;
        }

        // this allows the agent to read the correct headers from the HTTP response
       @Override
       public String getHeader(String name) {
           return responseHeaders.getFirstHeader(name).getValue();
       }
    }
    ```
  </Collapser>
</CollapserGroup>

### Envoltorios de servidor

Para que el agente obtenga encabezados de solicitud web, debe extender la clase `ExtendedRequest` :

<CollapserGroup>
  <Collapser
    id="extendedrequest-example"
    title="Extender la clase ExtendedRequest"
  >
    ```java
    // Extend ExtendedRequest class to create a wrapper for the Request object
    class RequestWrapper extends ExtendedRequest {
        private IHTTPSession session;

        public RequestWrapper(IHTTPSession session) {
            super();
            this.session = session;
        }

        @Override
        public String getRequestURI() {
            return session.getUri();
        }

        @Override
        public String getHeader(String name) {
            return session.getHeaders().get(name);
        }

        @Override
        public String getRemoteUser() {
            return null;
        }

        @SuppressWarnings("rawtypes")
        @Override
        public Enumeration getParameterNames() {
            return Collections.enumeration(session.getParms().keySet());
        }

        @Override
        public String[] getParameterValues(String name) {
            return new String[] { session.getParms().get(name) };
        }

        @Override
        public Object getAttribute(String name) {
            return null;
        }

        @Override
        public String getCookieValue(String name) {
            return null;
        }

        @Override
        public HeaderType getHeaderType() {
            return HeaderType.HTTP;
        }

        @Override
        public String getMethod() {
            return session.getMethod().toString();
        }
    }
    ```
  </Collapser>
</CollapserGroup>

Para que el agente configure los encabezados de respuesta web, implemente la interfaz `Response` :

<CollapserGroup>
  <Collapser
    id="response-interface-example"
    title="Implementación de la interfaz de respuesta"
  >
    ```java
    // Implement Response interface to create a wrapper for the outgoing Response object
    public class ResponseWrapper implements com.newrelic.api.agent.Response {

        private final Response httpResponse;

        public ResponseWrapper(Response httpResponse) {
            this.httpResponse = httpResponse;
        }

        @Override
        public int getStatus() throws Exception {
            return 200;
        }

        @Override
        public String getStatusMessage() throws Exception {
            return null;
        }

        @Override
        public void setHeader(String name, String value) {
            httpResponse.addHeader(name, value);
        }

        @Override
        public String getContentType() {
            return "";
        }

        @Override
        public HeaderType getHeaderType() {
            return HeaderType.HTTP;
        }
    }
    ```
  </Collapser>
</CollapserGroup>

### Implementación CAT usando contenedores [#cat-implementation]

Utilizando los objetos contenedores descritos en las secciones anteriores, puede habilitar al agente de Java para realizar seguimiento de múltiples aplicaciones (CAT) en el lado del cliente y del servidor. Por ejemplo:

<CollapserGroup>
  <Collapser
    id="cat-client-example"
    title="Rastreo multiaplicación: Del lado del cliente"
  >
    ```java
    @Trace
    public int makeExternalCall(URI uri) throws IOException {
        String library = "HTTPClient";
        String procedure = "Execute";
        HttpUriRequest request = RequestBuilder.get().setUri(uri).build();

        // Wrap the outbound Request object
        OutboundWrapper outboundHeaders = new OutboundWrapper(request);
        // Obtain a reference to the method currently being traced
        TracedMethod tracedMethod = NewRelic.getAgent().getTracedMethod();
        // Add headers for outbound external request
        tracedMethod.addOutboundRequestHeaders(outboundHeaders);

        CloseableHttpClient connection = HttpClientBuilder.create().build();
        CloseableHttpResponse response = connection.execute(request);

        // Wrap the incoming Response object
        InboundWrapper inboundHeaders = new InboundWrapper(response);
        // Create an input parameter object for a call to an external HTTP service
        ExternalParameters params = HttpParameters
                .library(library)
                .uri(uri)
                .procedure(procedure)
                .inboundHeaders(inboundHeaders)
                .build();

        // Report a call to an external HTTP service
        tracedMethod.reportAsExternal(params);

        return response.getStatusLine().getStatusCode();
    }
    ```
  </Collapser>
</CollapserGroup>

En este código de muestra, el agente está configurado para informar una llamada externa mediante CAT en el cliente que inicia la solicitud. Estos pasos se pueden resumir de la siguiente manera:

1. Implemente `OutboundHeaders` y `InboundHeaders` utilizando clases framework en el cliente.
2. Utilice `addOutboundRequestHeaders(OutboundHeaders outboundHeaders)` para que el agente agregue encabezados adecuados a la solicitud saliente.
3. Cree un objeto `ExternalParameters` utilizando el constructor `HttpParameters` y proporcione encabezados de respuesta entrante.
4. Informar como una solicitud externa usando `reportAsExternal(ExternalParameters params)`.

<CollapserGroup>
  <Collapser
    id="cat-server-example"
    title="Rastreo multiaplicación: Del lado del servidor"
  >
    ```java
    @Trace(dispatcher = true)
    @Override
    public Response serve(IHTTPSession session) {
        // Obtain a reference to the current Transaction
        Transaction tx = NewRelic.getAgent().getTransaction();

        // Set the name of the current transaction
        NewRelic.setTransactionName("Custom", "ExternalHTTPServer");

        // Wrap the Request object
        ExtendedRequest req = new RequestWrapper(session);

        // Set the request for the current transaction and convert it into a web transaction
        tx.setWebRequest(req);

        queryDB();
        Response res = newFixedLengthResponse("<html><body><h1>SuccessfulResponse</h1>\n</body></html>\n");

        // Set the response for the current transaction and convert it into a web transaction
        tx.setWebResponse(new ResponseWrapper(res));

        // Instruct the transaction to write the outbound response headers
        tx.addOutboundResponseHeaders();

        // Mark the time when the response left the server
        tx.markResponseSent();

        return res;
    }
    ```
  </Collapser>
</CollapserGroup>

En este código de muestra, el agente está configurado para informar una llamada externa mediante CAT en el servidor que responde a la solicitud. Estos pasos se pueden resumir de la siguiente manera:

1. Implemente `Response` y amplíe la clase `ExtendedRequest` utilizando clases framework en el servidor.

2. Utilice `setWebRequest(ExtendedRequest request)` y `setWebResponse(Response response)` para convertir la transacción en una transacción web y juntos proporcionen al agente los encabezados de solicitud entrantes y un lugar para registrar los encabezados salientes.

   Es importante utilizar `setWebRequest(ExtendedRequest request)` y `setWebResponse(Response response)` juntos, porque el nombre de la transacción depende del objeto de solicitud y el código de respuesta depende del objeto de respuesta.

3. Utilice `addOutboundResponseHeaders()` para que el agente agregue encabezados adecuados a la respuesta saliente.

4. Marque el final de la respuesta con una llamada a `markResponseSent()`.

## API de mensajería

La API de mensajería permite a la aplicación informar la interacción con los corredores de cola de mensajes. Se basa en la API externa proporcionando `MessageConsumerParametersMessage` y `MessageConsumerParameters`.

Esta API genera la métrica necesaria para identificar la interacción del intermediario de mensajes. La UI utilizará estas métricas para mostrar datos de mensajería, incluidos segmentos en transacción con la acción y el recuento adecuados (entrada o recepción de mensaje), una pestaña de mensajes dedicada en la traza de la transacción y más. Proporcionar encabezados entrantes y salientes a la API también permite al agente agregar encabezados CAT y registrar métrica CAT, lo que permite a la UI dibujar [mapas de servicios](/docs/data-analysis/service-maps/get-started/service-maps-visualize-monitor-your-apps-entire-architecture) que muestran conexiones entre aplicaciones.

<Callout variant="important">
  La API de mensajería se basa en la comunicación bidireccional entre productores y consumidores. Si su productor no recibe un reconocimiento de un consumidor, como en un patrón de disparar y olvidar, la API de mensajería no reflejará con precisión la interacción con los agentes de la cola de mensajes.
</Callout>

El siguiente ejemplo demuestra cómo instrumentar una biblioteca JMS ficticia.

<CollapserGroup>
  <Collapser
    id="messaging-example"
    title="Implementación de API de mensajería"
  >
    ```java
    public class MessageProducer {
        // instrument the method that puts messages on a queue
        @Trace
        public void sendMessageToQueue(Message message) {
            ExternalParameters messageProduceParameters = MessageProduceParameters.library("JMS")
                    .destinationType(DestinationType.NAMED_QUEUE)
                    .destinationName(message.getJMSDestination())
                    .outboundHeaders(new OutboundWrapper(message))
                    .build();

            NewRelic.getAgent().getTracedMethod().reportAsExternal(messageProduceParameters);
        }
    }
    ```
  </Collapser>
</CollapserGroup>

Para simplificar las cosas, el agente supone que `sendMessageToQueue` siempre coloca un mensaje en una cola con nombre. En realidad, un mensaje se puede enviar a diferentes tipos de destino, incluidas colas con nombre, colas temporales, temas y temas temporales. La API proporciona una enumeración para informar mensajes a diferentes tipos de destino: `NAMED_QUEUE`, `TEMP_QUEUE`, `NAMED_TOPIC`, `TEMP_TOPIC`. Es importante especificar el tipo de destino apropiado porque la UI mostrará los nombres de las colas y los temas con nombre y omitirá los nombres de las colas y los temas temporales.

Si la biblioteca es capaz de transmitir encabezados CAT, se proporcionará un objeto `OutboundHeaders` a la API para que el agente pueda agregar encabezados CAT.

<CollapserGroup>
  <Collapser
    id="message-outbound-example"
    title="Mensaje con implementación de encabezados CAT"
  >
    ```java
    public class MessageConsumer {
        @Trace
        public Message messageReceive() {
            ExternalParameters messageConsumeParameters = MessageConsumeParameters.library("JMS")
                    .destinationType(DestinationType.NAMED_QUEUE)
                    .destinationName(message.getJMSDestination())
                    .inboundHeaders(new InboundWrapper(message))
                    .build();

            NewRelic.getAgent().getTracedMethod().reportAsExternal(messageConsumeParameters);

            return message;
        }
    }
    ```
  </Collapser>
</CollapserGroup>

## API de almacenamiento de datos

Cuando un método de traza se informa como una llamada de almacenamiento de datos externo, la llamada se muestra en la página [base de datos de](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) APM. Debido a que los almacenes de datos son externos a la aplicación en ejecución, el método se informa como actividad de almacenamiento de datos mediante el método `reportAsExternal(ExternalParameters params)` . La única diferencia es que se utiliza un constructor diferente, `DatastoreParameters`, para crear el objeto `ExternalParameters` apropiado.

<CollapserGroup>
  <Collapser
    id="datstore"
    title="Implementación de API de almacenamiento de datos"
  >
    ```java
    TracedMethod tracedMethod = NewRelic.getAgent().getTracedMethod();
        tracedMethod.reportAsExternal(
            DatastoreParameters
            .product("sqlite") // the datastore vendor
            .collection("test.db") // the name of the collection (or table for SQL databases)
            .operation("select") // the operation being performed, for example "SELECT" or "UPDATE" for SQL databases
            .instance("localhost", 8080) // the datastore instance information - generally can be found as part of the connection
            .databaseName("test.db") // may be null, indicating no keyspace for the command
            .build());
    ```
  </Collapser>
</CollapserGroup>

## API de almacenamiento de datos: consulta lenta [#datastore-slow-query]

Esta API de llamada proporciona el mismo comportamiento que la [API de almacenamiento de datos de llamada](#datastore-api) y lo amplía para permitir el seguimiento de la información [de consulta lenta](/docs/apm/apm-ui-pages/monitoring/view-slow-query-details/) . Se utilizan el mismo método y constructor `reportAsExternal(ExternalParameters params)` , pero con un método de constructor adicional.

<CollapserGroup>
  <Collapser
    id="datastore-slow-query-example"
    title="Almacenamiento de datos con implementación de consulta lenta"
  >
    A continuación se ilustra la creación del objeto `ExternalParameters` apropiado:

    ```java
    // Reporting a method as doing datastore activity
    TracedMethod tracedMethod = NewRelic.getAgent().getTracedMethod();
    tracedMethod.reportAsExternal(
        DatastoreParameters
            .product("sqlite")           // the datastore vendor
            .collection("test.db")       // the name of the collection (or table for SQL databases)
            .operation("select")         // the operation being performed, for example "SELECT" or "UPDATE" for SQL databases
            .instance("localhost", 8080) // the datastore instance information - generally can be found as part of the connection
            .databaseName("test.db")     // may be null, indicating no keyspace for the command
            .slowQuery(rawQuery, QUERY_CONVERTER)
            .build());

    private static QueryConverter<String> QUERY_CONVERTER = new QueryConverter<String>() {

        @Override
        public String toRawQueryString(String statement) {
            // Do work to transform raw query object to string
            return statement;
        }

        @Override
        public String toObfuscatedQueryString(String statement) {
            // Do work to remove any sensitive information here
            return obfuscateQuery(statement);
        }
    };
    ```
  </Collapser>
</CollapserGroup>

## API de marcos web

La API de WebFrameworks permite al agente proporcionar [información de identificación adicional sobre la aplicación.](/docs/agents/java-agent/configuration/hostname-logic-java#unique-identifier)

```java
// Set the dispatcher name and version which is reported to APM.
// The dispatcherName is intended to represent the type of server that this
// application is running on such as: Tomcat, Jetty, Netty, etc.
NewRelic.setServerInfo(String dispatcherName, String version)

// Set the app server port which is reported to APM.
NewRelic.setAppServerPort(int port)

// Set the instance name in the environment.
// A single host:port may support multiple JVM instances.
// The instance name is intended to help identify a specific JVM instance.
NewRelic.setInstanceName(String instanceName)
```

<Callout variant="tip">
  Estos valores se pueden establecer sólo una vez. Las convocatorias posteriores no tendrán efecto.
</Callout>

<CollapserGroup>
  <Collapser
    id="webframeworks-example"
    title="Implementación de la API de WebFrameworks"
  >
    ```java
    public NewRelicApiClient() throws IOException, URISyntaxException {
        super(8080);

        // Set Dispatcher name and version.
        NewRelic.setServerInfo("NanoHttp", "2.3.1");

        // Set Appserver port for jvm identification
        NewRelic.setAppServerPort(8080);

        // Set JVM instance name
        NewRelic.setInstanceName("Client:8080");

        start(NanoHTTPD.SOCKET_READ_TIMEOUT, false);
        System.out.println("\nRunning on http://localhost:8080/ \n");
    }
    ```
  </Collapser>
</CollapserGroup>
