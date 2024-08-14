---
title: Instrumentar los segmentos Go
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: 'With APM''s Go agent, you can set up segments, which measure the timing of specific blocks of code in your Golang app.'
freshnessValidatedDate: never
translationType: machine
---

Con New Relic for Go, puede monitor los segmentos específicos de una [transacción](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) en una aplicación Go para obtener más detalles sobre funciones o bloques de código específicos.

## Medir el tiempo para funciones y bloques de código. [#go-segments]

<DNT>**Segments**</DNT> son las partes específicas de una [transacción](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) en una aplicación. Mediante segmentos instrumentados, puede medir el tiempo que toman funciones y bloques de código, como llamadas externas, llamadas de almacenamiento de datos, agregar mensajes a colas y tareas en segundo plano.

<DNT>**Example:**</DNT> Tiene una transacción asociada con un proceso de pago, que procesa tanto la información de envío como la información de la tarjeta de crédito. Podrías instrumentar tu aplicación para dividir esa transacción en dos partes: un segmento para envío y un segmento para pago.

## Segmentos de bloque de código [#segment-code-block]

Una vez que instrumente una [transacción](/docs/agents/go-agent/get-started/instrument-go-transactions), estará listo para instrumentar uno o más segmentos de esa transacción.

Para instrumentar un bloque de código arbitrario como segmento, utilice el siguiente patrón e incluya [`txn`](/docs/agents/go-agent/get-started/instrument-go-transactions) como nombre de variable establecido para la transacción:

```go
segment := newrelic.Segment{}
segment.Name = "mySegmentName"
segment.StartTime = txn.StartSegmentNow()
// ... code you want to time here ...
segment.End()
```

`StartSegment` es una ayuda conveniente. Crea un segmento y lo inicia:

```go
segment := txn.StartSegment("mySegmentName")
// ... code you want to time here ...
segment.End()
```

## Segmentos de función [#segment-function]

Instrumentar una función como un segmento es esencialmente lo mismo que instrumentar un bloque arbitrario de código como un segmento. La principal diferencia es que, debido a que una función tiene un final discreto, puedes usar [la declaración aplazar](https://gobyexample.com/defer) de Go.

Para instrumentar una función como segmento, agregue el siguiente código al inicio de la función e incluya [`txn`](/docs/agents/go-agent/get-started/instrument-go-transactions) como el nombre de variable establecido para la transacción:

```go
defer txn.StartSegment("mySegmentName").End()
```

## Segmentos de nido [#go-nesting-segments]

Los segmentos se pueden anidar. El segmento que finaliza debe ser el segmento iniciado más recientemente.

A continuación se muestra un ejemplo de un segmento que comienza y termina dentro de otro segmento:

```go
s1 := txn.StartSegment("outerSegment")
s2 := txn.StartSegment("innerSegment")
// s2 must end before s1
s2.End()
s1.End()
```

Un segmento de valor cero puede finalizarse de forma segura. Por lo tanto, el siguiente código es seguro incluso si el condicional falla:

```go
var s newrelic.Segment
if recordSegment {
    s.StartTime = txn.StartSegmentNow()
}
// ... code you wish to time here ...
s.End()
```

## Segmentos de almacenamiento de datos [#go-datastore-segments]

Puede Instrumentar a la aplicación Go de almacenamiento de datos de llamadas. Los segmentos de almacenamiento de datos aparecen en la tabla APM <DNT>**Transactions breakdown**</DNT> y en la pestaña <DNT>**Databases**</DNT> de la [página<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)en New Relic.

Si está utilizando un controlador de base de datos MySQL, PostgreSQL o SQLite, la forma más sencilla de agregar segmentos de almacenamiento de datos es utilizar nuestros paquetes de integración prediseñados. De lo contrario, puede crear manualmente segmentos de almacenamiento de datos para cada llamada a la base de datos.

<CollapserGroup>
  <Collapser
    id="instrumentation-pkg"
    title="Usar paquete de instrumentación"
  >
    Existe un paquete de integración para cada controlador de la base de datos que admitimos:

    <table>
      <thead>
        <tr>
          <th width={250}>
            Base de datos biblioteca soportada
          </th>

          <th>
            Paquete de integración
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql)
          </td>

          <td>
            [v3/integrations/nrmysql](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrmysql)
          </td>
        </tr>

        <tr>
          <td>
            [lib/pq/pq](https://github.com/lib/pq)
          </td>

          <td>
            [v3/integrations/nrpq](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrpq)
          </td>
        </tr>

        <tr>
          <td>
            [mattn/go-sqlite3](https://github.com/mattn/go-sqlite3)
          </td>

          <td>
            [v3/integrations/nrsqlite3](https://godoc.org/github.com/newrelic/go-agent/v3/integrations/nrsqlite3)
          </td>
        </tr>
      </tbody>
    </table>

    Para utilizar una de estas integraciones, primero reemplace el controlador con nuestra versión de integración:

    ```go
    import (
    	// import our integration package in place of "github.com/go-sql-driver/mysql"
    	_ "github.com/newrelic/go-agent/v3/integrations/nrmysql"
    )

    func main() {
    	// open "nrmysql" in place of "mysql"
    	db, err := sql.Open("nrmysql", "user@unix(/path/to/socket)/dbname")
    }
    ```

    En segundo lugar, utilice los métodos `ExecContext`, `QueryContext` y `QueryRowContext` de [sql.DB](https://golang.org/pkg/database/sql/#DB), [sql.Conn](https://golang.org/pkg/database/sql/#Conn), [sql.Tx](https://golang.org/pkg/database/sql/#Tx) y [sql.Stmt](https://golang.org/pkg/database/sql/#Stmt) y proporcione un contexto que contenga transacciones. Las llamadas a `Exec`, `Query` y `QueryRow` no se instrumentan.

    ```go
    ctx := newrelic.NewContext(context.Background(), txn)
    row := db.QueryRowContext(ctx, "SELECT count(*) from tables")
    ```

    Si está utilizando una [base de datos/base de datos SQL](https://golang.org/pkg/database/sql/) que no figura en la lista anterior, puede escribir su propia instrumentación utilizando [InstrumentConnector](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#InstrumentConnector), [InstrumentDriver](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#InstrumentDriver) y [DriverSegmentBuilder](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#DriverSegmentBuilder). Los paquetes de integración actúan como ejemplos de cómo hacer esto.

    <Callout variant="important">
      Los paquetes de integración de almacenamiento de datos para MySQL, PostgreSQL y SQLite se agregaron en Go agente v2.8.0 y requieren Go v1.10 o superior.
    </Callout>
  </Collapser>

  <Collapser
    id=""
    title={<>Usar <InlineCode>DatastoreSegment</InlineCode></>}
  >
    Al igual que los segmentos básicos, los segmentos de almacenamiento de datos comienzan cuando se completa el campo `StartTime` y terminan cuando se llama al método `End` . Para instrumentar un segmento de almacenamiento de datos, coloque lo siguiente al comienzo de la función que desea monitor:

    ```go
    s := newrelic.DatastoreSegment{
        Product: newrelic.DatastoreMySQL,
        Collection: "users",
        Operation: "INSERT",
        ParameterizedQuery: "INSERT INTO users (name, age) VALUES ($1, $2)",
        QueryParameters: map[string]interface{}{
            "name": "Dracula",
            "age": 439,
        },
        Host: "mysql-server-1",
        PortPathOrID: "3306",
        DatabaseName: "my_database",
    }
    s.StartTime = txn.StartSegmentNow()
    // ... make the datastore call
    s.End()
    ```

    Para más información sobre:

    * Asignación de `Collection`, `Operation`, `DatabaseName` y otros valores de parámetros: consulte la [documentación del segmento de almacenamiento de datos de New Relic en GoDoc](https://godoc.org/github.com/newrelic/go-agent#DatastoreSegment).
    * Valores disponibles para `Product`: consulte la [documentación de New Relic en GitHub](https://github.com/newrelic/go-agent/blob/master/datastore.go).

    Al instrumentar una llamada de almacenamiento de datos que abarca una llamada de función completa, puede usar la declaración defer para simplificar la instrumentación:

    ```go
    s := newrelic.DatastoreSegment{
        StartTime: txn.StartSegmentNow(),
        Product: newrelic.DatastoreMySQL,
        Collection: "users",
        Operation: "INSERT",
        ParameterizedQuery: "INSERT INTO users (name, age) VALUES ($1, $2)",
        QueryParameters: map[string]interface{}{
            "name": "Dracula",
            "age": 439,
        },
        Host: "mysql-server-1",
        PortPathOrID: "3306",
        DatabaseName: "my_database",
    }
    defer s.End()
    ```
  </Collapser>
</CollapserGroup>

## Segmentos externos [#go-external-segments]

Puede utilizar la aplicación Instrument Go para realizar llamadas a servicios externos, como servicios web, recursos en la nube y cualquier otra llamada de red. Los segmentos externos aparecen en la tabla <InlinePopover type="apm"/><DNT>**Transactions breakdown**</DNT> y en la [página<DNT>**External services**</DNT> ](/docs/apm/applications-menu/monitoring/external-services-page)de New Relic.

Hay dos formas de instrumentar segmentos externos:

<CollapserGroup>
  <Collapser
    id="start-external-segment"
    title={<>Usar <InlineCode>StartExternalSegment()</InlineCode></>}
  >
    <DNT>**Recommendation:**</DNT> Utilice el ayudante `StartExternalSegment`, ya que New Relic lo utiliza para trazar la actividad entre su aplicación mediante [Distributed tracing](/docs/agents/go-agent/features/distributed-tracing-go).

    ```go
    func external(txn *newrelic.Transaction, req *http.Request) (*http.Response, error) {
        s := newrelic.StartExternalSegment(txn, req)
        response, err := http.DefaultClient.Do(req)
        s.Response = response
        s.End()
        return response, err
    }
    ```
  </Collapser>

  <Collapser
    id="new-round-tripper"
    title={<>Usar <InlineCode>NewRoundTripper()</InlineCode></>}
  >
    `NewRoundTripper` devuelve un [http.RoundTripper](https://golang.org/pkg/net/http/#RoundTripper), que le permite realizar llamadas externas sin llamar `StartExternalSegment` modificando el campo `Transport` de su `http.Client`. El `RoundTripper` devuelto buscará un `Transaction` en el contexto de la solicitud usando [FromContext](https://godoc.org/github.com/newrelic/go-agent#FromContext).

    A continuación se muestra un ejemplo de `NewRoundTripper` instrumentación:

    ```go
    client := &http.Client{}
    client.Transport = newrelic.NewRoundTripper(client.Transport)

    request, _ := http.NewRequest("GET", "http://example.com", nil)
    request = newrelic.RequestWithTransactionContext(request, txn)

    response, err := client.Do(request)
    ```
  </Collapser>
</CollapserGroup>

## Segmentos de productores de mensajes [#go-message-producer-segments]

Puede utilizar llamadas de la aplicación Go que agregan mensajes a sistemas de cola como RabbitMQ y Kafka. Los segmentos de productores de mensajes aparecen en el APM <DNT>**Transactions breakdown**</DNT> en New Relic.

Sólo hay una forma de instrumentart mensajes a los segmentos de productores:

<CollapserGroup>
  <Collapser
    id="start-external-segment"
    title={<>Usar <InlineCode>MessageProducerSegment</InlineCode></>}
  >
    Al igual que los segmentos básicos, los segmentos productores de mensajes comienzan cuando se completa el campo `StartTime` y terminan cuando se llama al método `End` . Para instrumentar un segmento de productor de mensajes, coloque lo siguiente al comienzo de la función que desea monitor:

    ```go
    s := newrelic.MessageProducerSegment{
        Library:              "RabbitMQ",
        DestinationType:      newrelic.MessageExchange,
        DestinationName:      "myExchange",
        DestinationTemporary: false,
    }
    s.StartTime = txn.StartSegmentNow()
    // ... add message to queue
    s.End()
    ```

    Para obtener más información sobre cómo asignar los campos `Library`, `DestinationType`, `DestinationName` o `DestinationTemporary` , consulte la [documentación del segmento del productor de mensajes New Relic en GoDoc](https://godoc.org/github.com/newrelic/go-agent#MessageProducerSegment).

    Al instrumentar una llamada de productor de mensajes que abarca una llamada de función completa, puede usar la instrucción aplazar para simplificar la instrumentación:

    ```go
    s := newrelic.MessageProducerSegment{
        StartTime:            txn.StartSegmentNow(),
        Library:              "RabbitMQ",
        DestinationType:      newrelic.MessageExchange,
        DestinationName:      "myExchange",
        DestinationTemporary: false,
    }
    defer s.End()
    // ... add message to queue
    ```

    <Callout variant="important">
      Los segmentos de productores de mensajes se agregaron en la versión 2.14.0 del agente Go.
    </Callout>
  </Collapser>
</CollapserGroup>
