---
title: 'API do agente Java: aplicativo de exemplo instrumentado para chamadas externas de armazenamento de dados e distributed tracing'
tags:
  - Agents
  - Java agent
  - API guides
metaDescription: 'For New Relic Java agent API, an example of using custom instrumentation in an app to monitor distributed tracing and external datastore calls.'
freshnessValidatedDate: never
translationType: machine
---

Este documento demonstra o uso da [API do agente Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api) New Relic para instrumentar um aplicativo simples de cliente e servidor. A instrumentação tem estes objetivos:

* Para registrar HTTP externo e [transações](/docs/apm/applications-menu/monitoring/transactions-page) de armazenamento de dados.
* Para vincular transações externas entre dois aplicativos executando o agente New Relic (conhecido como [distributed tracing](/docs/distributed-tracing) ou DT).

Consulte o [Javadoc da API do agente Java](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html) para obter descrições completas das classes e métodos de API disponíveis.

<Callout variant="important">
  Para obter melhores resultados ao usar a API, certifique-se de ter a [versão mais recente do agente Java](/docs/release-notes/agent-release-notes/java-release-notes). Várias API usadas nos exemplos requerem o agente Java 3.36.0 ou superior.
</Callout>

## Exemplo do lado do cliente [#complete-client]

Aqui está um exemplo de código do lado do cliente para um aplicativo cliente-servidor simples:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="complete-client"
    title="Código completo do exemplo do cliente"
  >
    ```java
    package com.newrelic.example;

    import java.io.IOException;
    import java.net.URI;
    import java.net.URISyntaxException;
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.Statement;
    import java.util.Arrays;
    import java.util.Collection;
    import java.util.stream.Collectors;

    <a href="#client-import-java">// New Relic API imports</a>
    import com.newrelic.api.agent.ExternalParameters;
    import com.newrelic.api.agent.HeaderType;
    import com.newrelic.api.agent.Headers;
    import com.newrelic.api.agent.HttpParameters;
    import com.newrelic.api.agent.NewRelic;
    import com.newrelic.api.agent.Trace;
    import com.newrelic.api.agent.TracedMethod;
    import com.newrelic.api.agent.Transaction;

    import fi.iki.elonen.NanoHTTPD;
    import org.apache.http.HttpMessage;
    import org.apache.http.NameValuePair;
    import org.apache.http.client.methods.CloseableHttpResponse;
    import org.apache.http.client.methods.HttpUriRequest;
    import org.apache.http.client.methods.RequestBuilder;
    import org.apache.http.impl.client.CloseableHttpClient;
    import org.apache.http.impl.client.HttpClientBuilder;

    public class NewRelicApiExample extends NanoHTTPD {

        <a href="#client-env-details">public NewRelicApiExample() throws IOException, URISyntaxException {</a>
            super(8080);

            // Set Dispatcher name and version
            NewRelic.setServerInfo("NanoHttp", "2.3.1");
            // Set Appserver port for JVM identification
            NewRelic.setAppServerPort(8080);
            // Set JVM instance name
            NewRelic.setInstanceName("Client");

            start(NanoHTTPD.SOCKET_READ_TIMEOUT, false);
            System.out.println("Running at: http://localhost:8080/");
        }

        public static void main(String[] args) throws URISyntaxException {
            try {
                new NewRelicApiExample();
            } catch (IOException ioe) {
                System.err.println("Unable to start the server:\n" + ioe);
            }
        }

        @Trace(dispatcher = true)
        @Override
        <a href="#client-trace">public Response serve(IHTTPSession session) {</a>
            URI uri = null;
            int status = 0;

            try {
                createDB();
                Thread.sleep(1000);
                uri = new URI("http://localhost:8081");
                status = makeExternalCall(uri);
            } catch (URISyntaxException | InterruptedException | IOException e) {
                e.printStackTrace();
            }

            if (status == 200) {
                return newFixedLengthResponse("<html><body><h1>Successful Response</h1>\n</body></html>\n");
            } else {
                return newFixedLengthResponse("<html><body><h1>Error\n" + status + "</h1>\n</body></html>\n");
            }
        }

        @Trace
        <a href="#client-external">public int makeExternalCall(URI uri) throws IOException {</a>
            HttpUriRequest request = RequestBuilder.get().setUri(uri).build();

            // Wrap the outbound Request object
            Headers outboundHeaders = new HeadersWrapper(request);

            // Obtain a reference to the current transaction
            Transaction transaction = NewRelic.getAgent().getTransaction();
            // Add headers for outbound external request
            transaction.insertDistributedTraceHeaders(outboundHeaders);

            CloseableHttpClient connection = HttpClientBuilder.create().build();
            CloseableHttpResponse response = connection.execute(request);

            // Wrap the incoming Response object
            Headers inboundHeaders = new HeadersWrapper(response);

            // Create an input parameter object for a call to an external HTTP service
            ExternalParameters params = HttpParameters
                .library("HttpClient")
                .uri(uri)
                .procedure("execute")
                .inboundHeaders(inboundHeaders)
                .build();

            // Obtain a reference to the method currently being traced
            TracedMethod tracedMethod = NewRelic.getAgent().getTracedMethod();
            // Report a call to an external HTTP service
            tracedMethod.reportAsExternal(params);

            return response.getStatusLine().getStatusCode();
        }

        // Implement Headers interface to create a wrapper for the outgoing Request/incoming Response headers
        <a href="#client-outboundheaders">static class HeadersWrapper implements Headers {</a>
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

        @Trace
        <a href="#client-database">public void createDB() {</a>
            Connection c = null;
            Statement stmt = null;

            try {
                Class.forName("org.sqlite.JDBC");
                c = DriverManager.getConnection("jdbc:sqlite:/tmp/test.db");
                System.out.println("Opened database successfully");

                stmt = c.createStatement();

                String dropSql = "DROP TABLE IF EXISTS COMPANY;";
                stmt.executeUpdate(dropSql);

                String sql = "CREATE TABLE COMPANY " +
                        "(ID INT PRIMARY KEY     NOT NULL," +
                        " NAME           TEXT    NOT NULL, " +
                        " AGE            INT     NOT NULL, " +
                        " ADDRESS        CHAR(50), " +
                        " SALARY         REAL)";
                stmt.executeUpdate(sql);

                sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) " +
                       "VALUES (1, 'Paul', 32, 'California', 20000.00 );";
                stmt.executeUpdate(sql);

                sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) " +
                        "VALUES (2, 'Allen', 25, 'Texas', 15000.00 );";
                stmt.executeUpdate(sql);

                sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) " +
                "VALUES (3, 'Teddy', 23, 'Norway', 20000.00 );";
                stmt.executeUpdate(sql);

                sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) " +
                        "VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00 );";
                stmt.executeUpdate(sql);

                stmt.close();
                c.close();
            } catch (Exception e) {
                System.err.println(e.getClass().getName() + ": " + e.getMessage());
                System.exit(0);
            }
        }
    }
    ```
  </Collapser>
</CollapserGroup>

Aqui está o mesmo código do aplicativo cliente dividido em seções que descrevem como a API é usada:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="client-import-java"
    title="Importar classes de API do agente Java"
  >
    Esta seção chama as importações de API do agente Java usadas para adicionar distributed tracing ao aplicativo cliente posteriormente no código de exemplo.

    ```java
    import java.io.IOException;
    import java.net.URI;
    import java.net.URISyntaxException;
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.Statement;
    import java.util.Arrays;
    import java.util.Collection;
    import java.util.stream.Collectors;

    // New Relic API imports
    import com.newrelic.api.agent.ExternalParameters;
    import com.newrelic.api.agent.HeaderType;
    import com.newrelic.api.agent.Headers;
    import com.newrelic.api.agent.HttpParameters;
    import com.newrelic.api.agent.NewRelic;
    import com.newrelic.api.agent.Trace;
    import com.newrelic.api.agent.TracedMethod;
    import com.newrelic.api.agent.Transaction;

    import fi.iki.elonen.NanoHTTPD;
    import org.apache.http.HttpMessage;
    import org.apache.http.NameValuePair;
    import org.apache.http.client.methods.CloseableHttpResponse;
    import org.apache.http.client.methods.HttpUriRequest;
    import org.apache.http.client.methods.RequestBuilder;
    import org.apache.http.impl.client.CloseableHttpClient;
    import org.apache.http.impl.client.HttpClientBuilder;
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="client-env-details"
    title="Inicie o cliente e defina os detalhes do ambiente conforme exibido na interface"
  >
    Esta seção inicia o servidor cliente na porta 8080 e usa a classe `NewRelic` da API para chamar os métodos `setServerInfo`, `setAppServerPort` e `setInstanceName`. Essas chamadas de API afetam o que é mostrado na interface do New Relic.

    ```java
    public NewRelicApiExample() throws IOException, URISyntaxException {
        super(8080);

        // Set Dispatcher name and version
        NewRelic.setServerInfo("NanoHttp", "2.3.1");
        // Set Appserver port for jvm identification
        NewRelic.setAppServerPort(8080);
        // Set JVM instance name
        NewRelic.setInstanceName("Client");

        start(NanoHTTPD.SOCKET_READ_TIMEOUT, false);
        System.out.println("Running at: http://localhost:8080/");
    }

    public static void main(String[] args) throws URISyntaxException {
        try {
            new NewRelicApiExample();
        } catch (IOException ioe) {
            System.err.println("Unable to start the server:\n" + ioe);
        }
    }
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="client-trace"
    title="Comece a rastrear uma transação com o agente Java usando a anotação @Trace"
  >
    Este método cria um banco de dados de amostra, suspende o thread e faz uma chamada externa para o aplicativo do servidor que escuta na porta 8081. A anotação `@Trace(dispatcher = true)` informa ao agente para iniciar uma nova transação quando o método `serve` for chamado, se não for chamado como parte de uma transação existente (e neste caso, não é). Se fosse chamado como parte de uma transação existente, seria simplesmente incluído como parte dessa transação, em vez de iniciar uma nova.

    ```java
    @Trace(dispatcher = true)
    @Override
    public Response serve(IHTTPSession session) {
        URI uri = null;
        int status = 0;

        try {
            createDB();
            Thread.sleep(1000);
            uri = new URI("http://localhost:8081");
            status = makeExternalCall(uri);
        } catch (URISyntaxException | InterruptedException | IOException e) {
            e.printStackTrace();
        }

        if (status == 200) {
            return newFixedLengthResponse("<html><body><h1>Successful Response</h1>\n</body></html>\n");
        } else {
            return newFixedLengthResponse("<html><body><h1>Error\n" + status + "</h1>\n</body></html>\n");
        }
    }
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="client-external"
    title="Faça uma chamada externa usando a API do agente Java"
  >
    Esta seção contém o código que inicia distributed tracing para o aplicativo que faz a solicitação. A anotação `@Trace` instrui o agente a rastrear esse método como parte de uma transação existente iniciada pelo método `serve` .

    O objeto de solicitação é encapsulado por uma classe que implementa a interface `Headers` da API do agente Java, que garante que o `HeaderType` adequado seja definido (neste caso, `HTTP`). Uma chamada para `insertDistributedTraceHeaders` adiciona os cabeçalhos ao `request` e a solicitação é enviada ao servidor.

    Quando `response` retorna, ele é encapsulado por uma classe que implementa a interface `InboundHeaders` da API do agente Java. `Headers` é uma subinterface de `InboundHeaders` e, neste caso, a classe wrapper poderia ser reutilizada.

    O `inboundHeaders`, juntamente com os argumentos `"library"`, `URI` e `"procedure"` , são usados para construir um objeto `HttpParameters` . O objeto `params` é então passado como argumento para o método `reportAsExternal` , que relata o `TracedMethod` como uma chamada HTTP externa.

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

        // Wrap the incoming Response object
        Headers inboundHeaders = new HeadersWrapper(response);

        // Create an input parameter object for a call to an external HTTP service
        ExternalParameters params = HttpParameters
            .library("HttpClient")
            .uri(uri)
            .procedure("execute")
            .inboundHeaders(inboundHeaders)
            .build();

        // Obtain a reference to the method currently being traced
        TracedMethod tracedMethod = NewRelic.getAgent().getTracedMethod();
        // Report a call to an external HTTP service
        tracedMethod.reportAsExternal(params);

        return response.getStatusLine().getStatusCode();
    }
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="client-outboundheaders"
    title="Implementar a interface de cabeçalhos da API do agente Java"
  >
    Uma implementação da interface `Headers` da API do agente Java é usada para agrupar o objeto de solicitação do servidor cliente, que neste exemplo é do tipo `HttpUriRequest`. A solicitação é passada para o construtor da classe `HeadersWrapper` e as implementações dos métodos necessários são fornecidas.

    O método `getHeaderType` retorna uma enumeração `HeaderType` que pode ser `HeaderType.HTTP` ou `HeaderType.MESSAGE`, conforme definido pela API do agente Java. Neste exemplo, o protocolo de chamada externa é HTTP, então `HeaderType.HTTP` é retornado.

    ```java
    // Implement Headers interface to create a wrapper for the outgoing Request/incoming Response headers
    static class HeadersWrapper implements Headers {
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

  <Collapser
    className="freq-link"
    id="client-database"
    title="Crie um banco de dados simples"
  >
    Este método simplesmente cria um exemplo de banco de dados SQLite. A anotação `@Trace` instrui o agente a rastrear esse método como parte de uma transação existente iniciada pelo método `serve` .

    ```java
    @Trace
    public void createDB() {
        Connection c = null;
        Statement stmt = null;

        try {
            Class.forName("org.sqlite.JDBC");
            c = DriverManager.getConnection("jdbc:sqlite:/tmp/test.db");
            System.out.println("Opened database successfully");

            stmt = c.createStatement();

            String dropSql = "DROP TABLE IF EXISTS COMPANY;";
            stmt.executeUpdate(dropSql);

            String sql = "CREATE TABLE COMPANY " +
                    "(ID INT PRIMARY KEY     NOT NULL," +
                    " NAME           TEXT    NOT NULL, " +
                    " AGE            INT     NOT NULL, " +
                    " ADDRESS        CHAR(50), " +
                    " SALARY         REAL)";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) " +
                   "VALUES (1, 'Paul', 32, 'California', 20000.00 );";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) " +
                    "VALUES (2, 'Allen', 25, 'Texas', 15000.00 );";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) " +
            "VALUES (3, 'Teddy', 23, 'Norway', 20000.00 );";
            stmt.executeUpdate(sql);

            sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) " +
                    "VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00 );";
            stmt.executeUpdate(sql);

            stmt.close();
            c.close();
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
    }
    ```
  </Collapser>
</CollapserGroup>

## Exemplo do lado do servidor [#complete-server]

Aqui está o código do lado do servidor para este exemplo de aplicativo:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="server-complete"
    title="Código de exemplo completo do servidor"
  >
    ```java
    package com.newrelic.example;

    import java.io.IOException;
    import java.net.URISyntaxException;
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.ResultSet;
    import java.sql.Statement;
    import java.util.Collection;
    import java.util.Collections;

    <a href="#server-import-java">// New Relic API imports</a>
    import com.newrelic.api.agent.DatastoreParameters;
    import com.newrelic.api.agent.HeaderType;
    import com.newrelic.api.agent.Headers;
    import com.newrelic.api.agent.NewRelic;
    import com.newrelic.api.agent.Trace;
    import com.newrelic.api.agent.TracedMethod;
    import com.newrelic.api.agent.Transaction;
    import com.newrelic.api.agent.TransportType;

    import fi.iki.elonen.NanoHTTPD;

    public class NewRelicApiServer extends NanoHTTPD {

        <a href="#server-env-details">public NewRelicApiServer() throws IOException, URISyntaxException {</a>
            super(8081);

            // Set Dispatcher name and version
            NewRelic.setServerInfo("NanoHttp", "2.3.1");
            // Set Appserver port for jvm identification
            NewRelic.setAppServerPort(8081);
            // Set JVM instance name
            NewRelic.setInstanceName("Server");

            start(NanoHTTPD.SOCKET_READ_TIMEOUT, false);
            System.out.println("\nRunning on http://localhost:8081/ \n");
        }

        public static void main(String[] args) throws URISyntaxException {
            try {
                new NewRelicApiServer();
            } catch (IOException ioe) {
                System.err.println("Unable to start the server:\n" + ioe);
            }
        }

        @Trace(dispatcher = true)
        @Override
        <a href="#server-trace">public Response serve(IHTTPSession session) {</a>
            // Obtain a reference to the current Transaction
            Transaction tx = NewRelic.getAgent().getTransaction();
            // Set the name of the current transaction
            NewRelic.setTransactionName("Custom", "ExternalHTTPServer");

            // Wrap the Request object
            Headers req = new HeadersWrapper(session);

            // Set the request for the current transaction and convert it into a web transaction
            tx.acceptDistributedTraceHeaders(TransportType.HTTP, req);

            queryDB();

            return newFixedLengthResponse("<html><body><h1>SuccessfulResponse</h1>\n</body></html>\n");
        }

        // Implement Headers interface to create a wrapper for the outgoing Request/incoming Response headers
        <a href="#server-extendrequest">static class HeadersWrapper implements Headers {</a>
            private final IHTTPSession delegate;

            public HeadersWrapper(IHTTPSession request) {
                this.delegate = request;
            }

            @Override
            public HeaderType getHeaderType() {
                return HeaderType.HTTP;
            }

            @Override
            public String getHeader(String name) {
                return delegate.getHeaders().get(name);
            }

            @Override
            public Collection<String> getHeaders(String name) {
                return Collections.singletonList(getHeader(name));
            }

            @Override
            public void setHeader(String name, String value) {
                delegate.getHeaders().put(name, value);
            }

            @Override
            public void addHeader(String name, String value) {
                delegate.getHeaders().put(name, value);
            }

            @Override
            public Collection<String> getHeaderNames() {
                return delegate.getHeaders().keySet();
            }

            @Override
            public boolean containsHeader(String name) {
                return delegate.getHeaders().containsKey(name);
            }
        }

        @Trace
        <a href="#server-external-call">public void queryDB() {</a>
            Connection c = null;
            Statement stmt = null;
            try {
                Class.forName("org.sqlite.JDBC");
                c = DriverManager.getConnection("jdbc:sqlite:/tmp/test.db");
                c.setAutoCommit(false);
                System.out.println("Opened database successfully");

                stmt = c.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM COMPANY;");
                while (rs.next()) {
                    int id = rs.getInt("id");
                    String name = rs.getString("name");
                    int age = rs.getInt("age");
                    String address = rs.getString("address");
                    float salary = rs.getFloat("salary");
                    System.out.println("ID = " + id);
                    System.out.println("NAME = " + name);
                    System.out.println("AGE = " + age);
                    System.out.println("ADDRESS = " + address);
                    System.out.println("SALARY = " + salary);
                    System.out.println();
                }
                rs.close();
                stmt.close();
                c.close();
            } catch (Exception e) {
                System.err.println(e.getClass().getName() + ": " + e.getMessage());
                System.exit(0);
            }
            // Obtain a reference to the method currently being traced
            TracedMethod method = NewRelic.getAgent().getTracedMethod();

            // Create a DatastoreParameters object and report a call to an external datastore service
            method.reportAsExternal(
                    DatastoreParameters
                            .product("sqlite")
                            .collection("test.db")
                            .operation("select")
                            .instance("localhost", 8080)
                            .databaseName("test.db")
                            .build());
        }
    }
    ```
  </Collapser>
</CollapserGroup>

Aqui está o mesmo exemplo de código de servidor dividido em seções que descrevem como a API é usada:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="server-import-java"
    title="Importar classes de API do agente Java"
  >
    Esta seção mostra as importações relevantes da API do agente Java necessárias para adicionar distributed tracing e relatórios de chamadas externas do armazenamento de dados ao aplicativo do servidor.

    ```java
    import java.io.IOException;
    import java.net.URISyntaxException;
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.ResultSet;
    import java.sql.Statement;
    import java.util.Collection;
    import java.util.Collections;

    // New Relic API imports
    import com.newrelic.api.agent.DatastoreParameters;
    import com.newrelic.api.agent.HeaderType;
    import com.newrelic.api.agent.Headers;
    import com.newrelic.api.agent.NewRelic;
    import com.newrelic.api.agent.Trace;
    import com.newrelic.api.agent.TracedMethod;
    import com.newrelic.api.agent.Transaction;
    import com.newrelic.api.agent.TransportType;

    import fi.iki.elonen.NanoHTTPD;
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="server-env-details"
    title="Inicie o servidor e defina suas informações conforme exibidas na interface"
  >
    Esta seção inicia o servidor na porta 8081 e usa a classe `NewRelic` da API para chamar os métodos `setServerInfo`, `setAppServerPort` e `setInstanceName`. Essas chamadas de API afetam o que é mostrado na interface do APM.

    ```java
    public NewRelicApiServer() throws IOException, URISyntaxException {
        super(8081);

        // Set Dispatcher name and version
        NewRelic.setServerInfo("NanoHttp", "2.3.1");
        // Set Appserver port for jvm identification
        NewRelic.setAppServerPort(8081);
        // Set JVM instance name
        NewRelic.setInstanceName("Server");

        start(NanoHTTPD.SOCKET_READ_TIMEOUT, false);
        System.out.println("\nRunning on http://localhost:8081/ \n");
    }

    public static void main(String[] args) throws URISyntaxException {
        try {
            new NewRelicApiServer();
        } catch (IOException ioe) {
            System.err.println("Unable to start the server:\n" + ioe);
        }
    }
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="server-trace"
    title="Comece a rastrear uma transação e adicione cabeçalhos de resposta de saída"
  >
    A anotação `@Trace(dispatcher = true)` informa ao agente para iniciar uma nova transação quando o método `serve` for chamado, caso não seja chamado como parte de uma transação existente (o que, neste caso, não é). Se fosse chamado como parte de uma transação existente, seria simplesmente incluído como parte dessa transação, em vez de iniciar uma nova.

    Uma referência ao `Transaction` atual é obtida através de uma chamada para `getTransaction` e o nome da transação é definido através de uma chamada para o método `setTransactionName` .

    O objeto de solicitação, que neste exemplo é do tipo `IHTTPSession`, é então empacotado usando uma classe que estende a classe `Headers` da API do agente Java. O `Transaction` atual é então vinculado ao trace pai por meio de uma chamada para `setWebRequest` que usa o `ExtendedRequest` encapsulado como argumento.

    Uma chamada ao banco de dados é então feita e o objeto de resposta é retornado.

    ```java
    @Trace(dispatcher = true)
    @Override
    public Response serve(IHTTPSession session) {
        // Obtain a reference to the current Transaction
        Transaction tx = NewRelic.getAgent().getTransaction();
        // Set the name of the current transaction
        NewRelic.setTransactionName("Custom", "ExternalHTTPServer");

        // Wrap the Request object
        Headers req = new HeadersWrapper(session);

        // Set the request for the current transaction and convert it into a web transaction
        tx.acceptDistributedTraceHeaders(TransportType.HTTP, req);

        queryDB();

        return newFixedLengthResponse("<html><body><h1>SuccessfulResponse</h1>\n</body></html>\n");
    }
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="server-extendrequest"
    title="Estenda a classe Headers da API do agente Java"
  >
    Outra implementação da classe `Headers` da API do agente Java é usada para agrupar o objeto de solicitação do servidor, que neste exemplo é do tipo `IHTTPSession`. A solicitação é passada para o construtor da classe `HeadersWrapper` , que fornece implementações de `getRequestURI`, `getHeader`, `getRemoteUser`, `getParameterNames`, `getParameterValues`, `getAttribute`, `getCookieValue`, `getHeaderType` e `getMethod` métodos.

    O método `getHeaderType` retorna uma enumeração `HeaderType` que pode ser `HeaderType.HTTP` ou `HeaderType.MESSAGE`, conforme definido pela API do agente Java. Neste exemplo, o protocolo de chamada externa é HTTP, portanto `HeaderType.HTTP` é retornado.

    ```java
    // Implement Headers interface to create a wrapper for the outgoing Request/incoming Response headers
    static class HeadersWrapper implements Headers {
        private final IHTTPSession delegate;

        public HeadersWrapper(IHTTPSession request) {
            this.delegate = request;
        }

        @Override
        public HeaderType getHeaderType() {
            return HeaderType.HTTP;
        }

        @Override
        public String getHeader(String name) {
            return delegate.getHeaders().get(name);
        }

        @Override
        public Collection<String> getHeaders(String name) {
            return Collections.singletonList(getHeader(name));
        }

        @Override
        public void setHeader(String name, String value) {
            delegate.getHeaders().put(name, value);
        }

        @Override
        public void addHeader(String name, String value) {
            delegate.getHeaders().put(name, value);
        }

        @Override
        public Collection<String> getHeaderNames() {
            return delegate.getHeaders().keySet();
        }

        @Override
        public boolean containsHeader(String name) {
            return delegate.getHeaders().containsKey(name);
        }
    }
    ```
  </Collapser>

  <Collapser
    className="freq-link"
    id="server-external-call"
    title="Instrumento uma chamada externa para um datastore"
  >
    Este método faz uma chamada externa ao banco de dados SQLite criado pelo cliente. A anotação `@Trace` instrui o agente a rastrear esse método como parte de uma transação existente iniciada pelo método `serve` .

    Uma referência ao `TracedMethod` atual é obtida por meio de uma chamada para `getTracedMethod`. Um objeto `DatastoreParameters` é então criado usando o padrão construtor. O objeto `ExternalParameters` é então passado como um argumento para o método `reportAsExternal` , que tem o efeito de relatar o `TracedMethod` como uma chamada de armazenamento de dados externo.

    ```java
    @Trace
    public void queryDB() {
        Connection c = null;
        Statement stmt = null;
        try {
            Class.forName("org.sqlite.JDBC");
            c = DriverManager.getConnection("jdbc:sqlite:/tmp/test.db");
            c.setAutoCommit(false);
            System.out.println("Opened database successfully");

            stmt = c.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM COMPANY;");
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                String address = rs.getString("address");
                float salary = rs.getFloat("salary");
                System.out.println("ID = " + id);
                System.out.println("NAME = " + name);
                System.out.println("AGE = " + age);
                System.out.println("ADDRESS = " + address);
                System.out.println("SALARY = " + salary);
                System.out.println();
            }
            rs.close();
            stmt.close();
            c.close();
        } catch (Exception e) {
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
        // Obtain a reference to the method currently being traced
        TracedMethod method = NewRelic.getAgent().getTracedMethod();

        // Create a DatastoreParameters object and report a call to an external datastore service
        method.reportAsExternal(
                DatastoreParameters
                        .product("sqlite")
                        .collection("test.db")
                        .operation("select")
                        .instance("localhost", 8080)
                        .databaseName("test.db")
                        .build());
    }
    ```
  </Collapser>
</CollapserGroup>
