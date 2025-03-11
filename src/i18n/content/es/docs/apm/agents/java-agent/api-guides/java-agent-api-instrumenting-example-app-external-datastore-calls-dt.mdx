---
title: 'Agente de Java API: aplicación de ejemplo instrumentada para almacenamiento externo de datos, llamadas y rastreo distribuido'
tags:
  - Agents
  - Java agent
  - API guides
metaDescription: 'For New Relic Java agent API, an example of using custom instrumentation in an app to monitor distributed tracing and external datastore calls.'
freshnessValidatedDate: never
translationType: machine
---

Este documento demuestra el uso de la [API New Relic agente de Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api) para implementar una aplicación cliente y servidor sencilla. La instrumentación tiene estos objetivos:

* Para registrar HTTP externo y almacenamiento de datos [de transacciones](/docs/apm/applications-menu/monitoring/transactions-page).
* Para vincular transacciones externas entre dos aplicaciones que ejecutan New Relic agente (conocido como [rastreo distribuido](/docs/distributed-tracing) o DT).

Consulte el [Javadoc API de agente de Java](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html) para obtener descripciones completas de las clases y métodos de API disponibles.

<Callout variant="important">
  Para obtener mejores resultados al utilizar la API, asegúrese de tener la [última versión del agente de Java](/docs/release-notes/agent-release-notes/java-release-notes). Varias API utilizadas en los ejemplos requieren agente de Java 3.36.0 o superior.
</Callout>

## Ejemplo del lado del cliente [#complete-client]

A continuación se muestra un ejemplo del código del lado del cliente para una aplicación cliente-servidor sencilla:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="complete-client"
    title="Código de ejemplo de cliente completo"
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

Aquí está el mismo código de la aplicación cliente dividido en secciones que describen cómo se usa la API:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="client-import-java"
    title="Importar clases API de agente de Java"
  >
    Esta sección llama a las importaciones de API del agente de Java que se utilizan para agregar rastreo distribuido a la aplicación cliente más adelante en el código de ejemplo.

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
    title="Inicie el cliente y configure los detalles del entorno como se muestran en la UI ."
  >
    Esta sección inicia el servidor cliente en el puerto 8080 y utiliza la clase `NewRelic` de la API para llamar a los métodos `setServerInfo`, `setAppServerPort` y `setInstanceName`. Estas API de llamadas afectan lo que se muestra en la UI de New Relic.

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
    title="Comience a rastrear una transacción con el agente de Java usando la anotación @Trace"
  >
    Este método crea una base de datos de muestra, suspende el subproceso y realiza una llamada externa a la aplicación del servidor que escucha en el puerto 8081. La anotación `@Trace(dispatcher = true)` le dice al agente que inicie una nueva transacción cuando se llama al método `serve` , si no se llama como parte de una transacción existente (y en este caso, no lo es). Si se llamara como parte de una transacción existente, simplemente se incluiría como parte de esa transacción en lugar de iniciar una nueva.

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
    title="Realizar una llamada externa utilizando la API del agente de Java"
  >
    Esta sección contiene el código que inicia el rastreo distribuido hasta la aplicación que realiza la solicitud. La anotación `@Trace` le indica al agente que rastree este método como parte de una transacción existente iniciada por el método `serve` .

    El objeto de solicitud está envuelto por una clase que implementa la interfaz `Headers` de la API del agente de Java, lo que garantiza que se establezca el `HeaderType` adecuado (en este caso, `HTTP`). Una llamada a `insertDistributedTraceHeaders` agrega los encabezados al `request` y la solicitud se envía al servidor.

    Cuando `response` regresa, está empaquetado por una clase que implementa la interfaz `InboundHeaders` de la API del agente de Java. `Headers` es una subinterfaz de `InboundHeaders` y, en este caso, la clase contenedora podría reutilizarse.

    El `inboundHeaders`, junto con los argumentos `"library"`, `URI` y `"procedure"` , se utilizan para crear un objeto `HttpParameters` . Luego, el objeto `params` se pasa como argumento al método `reportAsExternal` , que informa el `TracedMethod` como una llamada HTTP externa.

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
    title="Implementar la interfaz de encabezados de la API del agente de Java"
  >
    Se utiliza una implementación de la interfaz `Headers` de la API del agente de Java para envolver el objeto de solicitud del servidor cliente, que en este ejemplo es de tipo `HttpUriRequest`. La solicitud se pasa al constructor de la clase `HeadersWrapper` y se proporcionan las implementaciones de los métodos necesarios.

    El método `getHeaderType` devuelve una enumeración `HeaderType` que puede ser `HeaderType.HTTP` o `HeaderType.MESSAGE`, según lo define la API del agente de Java. En este ejemplo, el protocolo de llamada externa es HTTP, por lo que se devuelve `HeaderType.HTTP` .

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
    title="Crear una base de datos sencilla"
  >
    Este método simplemente crea una base de datos SQLite de ejemplo. La anotación `@Trace` le indica al agente que rastree este método como parte de una transacción existente iniciada por el método `serve` .

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

## Ejemplo del lado del servidor [#complete-server]

Aquí está el código del lado del servidor para esta aplicación de ejemplo:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="server-complete"
    title="Código de ejemplo de servidor completo"
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

A continuación se muestra el mismo código de servidor de ejemplo dividido en secciones que describen cómo se utiliza la API:

<CollapserGroup>
  <Collapser
    className="freq-link"
    id="server-import-java"
    title="Importar clases API de agente de Java"
  >
    Esta sección muestra las importaciones relevantes de API de agente de Java necesarias para agregar rastreo distribuido y generación de informes de llamadas de almacenamiento de datos externo a la aplicación del servidor.

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
    title="Inicie el servidor y configure su información como se muestra en UI"
  >
    Esta sección inicia el servidor en el puerto 8081 y utiliza la clase `NewRelic` de la API para llamar a los métodos `setServerInfo`, `setAppServerPort` y `setInstanceName`. Estas API de llamadas afectan lo que se muestra en la UI de APM.

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
    title="Comience a rastrear una transacción y agregue encabezados de respuesta salientes"
  >
    La anotación `@Trace(dispatcher = true)` le dice al agente que inicie una nueva transacción cuando se llama al método `serve` si no se llama como parte de una transacción existente (que en este caso no lo es). Si se llamara como parte de una transacción existente, simplemente se incluiría como parte de esa transacción en lugar de iniciar una nueva.

    Se obtiene una referencia al `Transaction` actual mediante una llamada a `getTransaction` y el nombre de la transacción se establece mediante una llamada al método `setTransactionName` .

    El objeto de solicitud, que en este ejemplo es de tipo `IHTTPSession`, luego se empaqueta utilizando una clase que extiende la clase `Headers` del agente de Java API. El `Transaction` actual se vincula luego a la traza principal mediante una llamada a `setWebRequest` que toma el `ExtendedRequest` envuelto como argumento.

    Luego se realiza una llamada a la base de datos y se devuelve el objeto de respuesta.

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
    title="Ampliar la clase de encabezados del agente de Java API"
  >
    Otra implementación de la clase `Headers` de la API del agente de Java se utiliza para envolver el objeto de solicitud del servidor, que en este ejemplo es de tipo `IHTTPSession`. La solicitud se pasa al constructor de la clase `HeadersWrapper` , que proporciona implementaciones de `getRequestURI`, `getHeader`, `getRemoteUser`, `getParameterNames`, `getParameterValues`, `getAttribute`, `getCookieValue`, `getHeaderType` y `getMethod` métodos.

    El método `getHeaderType` devuelve una enumeración `HeaderType` que puede ser `HeaderType.HTTP` o `HeaderType.MESSAGE`, según lo define la API del agente de Java. En este ejemplo, el protocolo de llamada externa es HTTP, por lo que se devuelve `HeaderType.HTTP` .

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
    title="Instrumento una llamada externa a un almacenamiento de datos"
  >
    Este método realiza una llamada externa a la base de datos SQLite creada por el cliente. La anotación `@Trace` le indica al agente que rastree este método como parte de una transacción existente iniciada por el método `serve` .

    Se obtiene una referencia al `TracedMethod` actual mediante una llamada a `getTracedMethod`. Luego se crea un objeto `DatastoreParameters` usando el patrón de construcción. Luego, el objeto `ExternalParameters` se pasa como argumento al método `reportAsExternal` , que tiene el efecto de informar el `TracedMethod` como una llamada de almacenamiento de datos externo.

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
