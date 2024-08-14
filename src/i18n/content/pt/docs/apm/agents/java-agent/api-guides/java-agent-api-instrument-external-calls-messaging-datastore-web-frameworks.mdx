---
title: 'API do agente Java: instrumento de chamadas externas, mensagens, armazenamento de dados, framework web'
tags:
  - Agents
  - Java agent
  - API guides
metaDescription: 'Use the New Relic Java API to instrument web and non-web transactions: external calls, cross app tracing, messaging, datastore, web frameworks, etc.'
freshnessValidatedDate: never
translationType: machine
---

O agente Java da New Relic coleta e relata informações sobre [transação da web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) e [transação fora da web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions), como tarefas em segundo plano. O agente deverá suportar o framework automaticamente, sem necessidade de modificar o código da sua aplicação. No entanto, além do código customizado e da estrutura ou tecnologia não listada na documentação [Compatibilidade e requisitos para o agente Java](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent) , algumas implementações da estrutura suportada podem exigir [instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation).

Este documento descreve como usar a [API agente do Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api) para instrumentar chamadas externas, estrutura de mensagens, [Distributed tracing](/docs/distributed-tracing/), armazenamento de dados e estrutura web. Para obter melhores resultados ao usar a API, certifique-se de ter a [versão mais recente do agente Java](/docs/release-notes/agent-release-notes/java-release-notes). Várias API usadas nos exemplos requerem o agente Java 3.36.0 ou superior.

## API externa [#external]

O <DNT>**External API**</DNT> permite que o aplicativo relate chamadas de serviço externas para a New Relic. Essas informações aparecem na [página<DNT>**External services**</DNT> ](/docs/apm/applications-menu/monitoring/external-services-page)do APM. Para relatar atividades externas HTTP, basta criar uma instância de `ExternalParameters` usando o construtor `HttpParameters` e chamar `reportAsExternal(ExternalParameters parameters)` no método de rastreamento que você deseja relatar.

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

## Construtores de parâmetros externos [#external-parameters]

Existem vários construtores para criar `ExternalParameters`:

* `DatastoreParameters`
* `HttpParameters`
* `GenericParameters`
* `MessageConsumeParameters`
* `MessageProduceParameters`

Esses construtores criam o objeto de parâmetro de entrada para a chamada de API `reportAsExternal` [de`TracedMethod`](http://newrelic.github.io/java-agent-api/javadoc/com/newrelic/api/agent/TracedMethod.html) . Esses objetos de parâmetro são usados para vincular chamadas externas HTTP por meio de distributed tracing, rastrear chamadas externas para um armazenamento de dados, rastrear chamadas externas para um armazenamento de dados com processamento de consulta lenta adicional, bem como rastrear chamadas entre produtores de mensagens e consumidores.

<Callout variant="important">
  Todos os métodos desta classe têm o potencial de expor informações privadas confidenciais. Tenha cuidado ao criar os argumentos, prestando atenção especial aos URIs e aos valores de string.
</Callout>

## API distributed tracing [#distributed-tracing]

A API [distributed tracing](/docs/distributed-tracing/) permite que o agente Java da New Relic vincule transações entre aplicativos que são instrumentados pelo agente Java da New Relic ou por outra ferramenta padrão de instrumentação aberta. Ele usa um wrapper para permitir que o agente leia/grave cabeçalhos nas solicitações.

### Invólucro de cabeçalhos

O agente usa a interface `Headers` para ler/gravar cabeçalhos em uma solicitação. Tanto o cliente quanto o servidor precisam implementar esta interface usando as classes de sua framework de comunicação. Por exemplo:

<CollapserGroup>
  <Collapser
    id="headers-example"
    title="Implementação de cabeçalhos"
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

### Implementação distributed tracing usando wrappers [#dt-implementation]

Usando o objeto wrapper descrito na seção anterior, é possível ativar o agente Java para relatar rastreio no lado do cliente e do servidor. Por exemplo:

<CollapserGroup>
  <Collapser
    id="dt-client-example"
    title="Distributed tracing: lado do cliente"
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

Neste código de exemplo, o agente está configurado para relatar uma chamada externa usando distributed tracing no cliente que está iniciando a solicitação. Essas etapas podem ser resumidas da seguinte forma:

1. Implemente `Headers` usando classes framework no cliente.
2. Use `insertDistributedTraceHeaders(Headers headers)` para que o agente adicione cabeçalhos apropriados à solicitação de saída.

<CollapserGroup>
  <Collapser
    id="dt-server-example"
    title="Distributed tracing: lado do servidor"
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

Neste código de exemplo, o agente está configurado para ler os cabeçalhos da solicitação. Essas etapas podem ser resumidas da seguinte forma:

1. Implemente `Headers` usando classes framework no servidor.
2. Use `acceptDistributedTraceHeaders(TransportType transportType, Headers headers)` para vincular esta transação à transação que fez a chamada.

## API de rastreamento multiaplicativo [#cat-api]

<Callout variant="important">
  O rastreamento multiaplicativo foi descontinuado a partir da versão 7.4.0 do agente e será removido em uma versão futura do agente.

  Em vez de usar rastreamento multiaplicativo, recomendamos nosso recurso [distributed tracing](#distributed-tracing) . distributed tracing é uma melhoria no recurso de rastreamento multiaplicativo e é recomendado para sistemas distribuídos grandes.
</Callout>

A API [de rastreamento multiaplicativo](/docs/apm/transactions/cross-application-traces/cross-application-tracing) (CAT) permite que o agente Java da New Relic vincule a transação através do aplicativo monitor da New Relic. A API usa wrappers de cliente e servidor que permitem ao agente ler cabeçalhos de solicitações e adicionar cabeçalhos às respostas.

### Wrappers de cliente

Para que o agente grave cabeçalhos de solicitação de saída no cliente que inicia a solicitação, use a interface `OutboundHeaders` . Por exemplo:

<CollapserGroup>
  <Collapser
    id="outbound-header-example"
    title="Implementação de OutbounderHeaders"
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

Para que o agente leia os cabeçalhos de resposta de entrada no cliente que recebe a resposta, implemente o `InboundHeaders`. Por exemplo:

<CollapserGroup>
  <Collapser
    id="inbound-headers-example"
    title="Implementação de InboundHeaders"
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

### Wrappers de servidor

Para que o agente obtenha cabeçalhos de solicitação da web, você deve estender a classe `ExtendedRequest` :

<CollapserGroup>
  <Collapser
    id="extendedrequest-example"
    title="Estender a classe ExtendedRequest"
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

Para que o agente defina os cabeçalhos de resposta da Web, implemente a interface `Response` :

<CollapserGroup>
  <Collapser
    id="response-interface-example"
    title="Implementação de interface de resposta"
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

### Implementação CAT usando wrappers [#cat-implementation]

Usando os objetos wrapper descritos nas seções anteriores, é possível ativar o agente Java para fazer rastreamento multiaplicativo (CAT) no lado do cliente e do servidor. Por exemplo:

<CollapserGroup>
  <Collapser
    id="cat-client-example"
    title="Rastreamento multiaplicativo: lado do cliente"
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

Neste código de exemplo, o agente está configurado para relatar uma chamada externa usando CAT no cliente que está iniciando a solicitação. Essas etapas podem ser resumidas da seguinte forma:

1. Implemente `OutboundHeaders` e `InboundHeaders` usando classes framework no cliente.
2. Use `addOutboundRequestHeaders(OutboundHeaders outboundHeaders)` para que o agente adicione cabeçalhos apropriados à solicitação de saída.
3. Crie o objeto `ExternalParameters` usando o construtor `HttpParameters` e forneça cabeçalhos de resposta de entrada.
4. Reporte como uma solicitação externa usando `reportAsExternal(ExternalParameters params)`.

<CollapserGroup>
  <Collapser
    id="cat-server-example"
    title="Rastreamento multiaplicativo: lado do servidor"
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

Neste código de exemplo, o agente está configurado para relatar uma chamada externa usando CAT no servidor que está respondendo à solicitação. Essas etapas podem ser resumidas da seguinte forma:

1. Implemente `Response` e estenda a classe `ExtendedRequest` usando classes framework no servidor.

2. Use `setWebRequest(ExtendedRequest request)` e `setWebResponse(Response response)` para converter a transação em uma transação da web e, juntos, fornecer ao agente os cabeçalhos de solicitação de entrada e um local para registrar os cabeçalhos de saída.

   É importante usar `setWebRequest(ExtendedRequest request)` e `setWebResponse(Response response)` juntos, porque o nome da transação depende do objeto de solicitação e o código de resposta depende do objeto de resposta.

3. Use `addOutboundResponseHeaders()` para que o agente adicione cabeçalhos apropriados à resposta de saída.

4. Marque o final da resposta com uma chamada para `markResponseSent()`.

## API de mensagens

A API de mensagens permite que o aplicativo relate a interação com agentes de fila de mensagens. Ele se baseia na API externa, fornecendo `MessageConsumerParametersMessage` e `MessageConsumerParameters`.

Esta API gera as métricas necessárias para identificar a interação do message broker. A interface usará essas métricas para exibir dados de mensagens, incluindo segmentos em transações com a ação e contagem apropriada (mensagem colocada ou mensagem recebida), uma guia dedicada de mensagens no rastreamento da transação e muito mais. Fornecer cabeçalhos de entrada e saída para a API também permite que o agente adicione cabeçalhos CAT e registre métricas CAT, o que permite que a interface desenhe [mapas de serviço](/docs/data-analysis/service-maps/get-started/service-maps-visualize-monitor-your-apps-entire-architecture) que mostram conexões entre aplicativos.

<Callout variant="important">
  A API de mensagens depende da comunicação bidirecional entre produtores e consumidores. Se o seu produtor não receber uma confirmação de um consumidor, como em um padrão disparar e esquecer, a API de mensagens não refletirá com precisão a interação com os agentes de fila de mensagens.
</Callout>

O exemplo a seguir demonstra como instrumentar uma biblioteca JMS fictícia.

<CollapserGroup>
  <Collapser
    id="messaging-example"
    title="Implementação da API de mensagens"
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

Para simplificar, o agente assume que `sendMessageToQueue` sempre coloca uma mensagem em uma fila nomeada. Na realidade, uma mensagem pode ser enviada para diferentes tipos de destino, incluindo filas nomeadas, filas temporárias, tópicos e tópicos temporários. A API fornece uma enumeração para relatar mensagens para diferentes tipos de destino: `NAMED_QUEUE`, `TEMP_QUEUE`, `NAMED_TOPIC`, `TEMP_TOPIC`. É importante especificar o tipo de destino apropriado porque a interface exibirá os nomes das filas nomeadas e dos tópicos nomeados e omitirá os nomes das filas temporárias e dos tópicos temporários.

Se a biblioteca for capaz de transmitir cabeçalhos CAT, um objeto `OutboundHeaders` será fornecido à API para que o agente possa adicionar cabeçalhos CAT.

<CollapserGroup>
  <Collapser
    id="message-outbound-example"
    title="Mensagem com implementação de cabeçalhos CAT"
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

## API de armazenamento de dados

Quando um método de rastreamento é relatado como uma chamada de armazenamento de dados externo, a chamada é mostrada na página [banco de dados](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) do APM. Como os armazenamentos de dados são externos ao aplicativo em execução, o método é relatado como atividade do armazenamento de dados usando o método `reportAsExternal(ExternalParameters params)` . A única diferença é que um construtor diferente, `DatastoreParameters`, é usado para criar o objeto `ExternalParameters` apropriado.

<CollapserGroup>
  <Collapser
    id="datstore"
    title="Implementação da API do armazenamento de dados"
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

## API de armazenamento de dados: Consulta lenta [#datastore-slow-query]

Esta chamada de API fornece o mesmo comportamento que a [chamada de API de armazenamento de dados](#datastore-api) e o estende para permitir o rastreamento de informações [de consulta lenta](/docs/apm/apm-ui-pages/monitoring/view-slow-query-details/) . O mesmo método e construtor `reportAsExternal(ExternalParameters params)` são usados, mas com um método construtor adicional.

<CollapserGroup>
  <Collapser
    id="datastore-slow-query-example"
    title="Armazenamento de dados com implementação de consulta lenta"
  >
    A criação do objeto `ExternalParameters` apropriado é ilustrada abaixo:

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

## API WebFrameworks

A API WebFrameworks permite que o agente relate [informações adicionais de identificação sobre o aplicativo.](/docs/agents/java-agent/configuration/hostname-logic-java#unique-identifier)

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
  Esses valores podem ser definidos apenas uma vez. As chamadas subsequentes não terão efeito.
</Callout>

<CollapserGroup>
  <Collapser
    id="webframeworks-example"
    title="Implementação da API WebFrameworks"
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
