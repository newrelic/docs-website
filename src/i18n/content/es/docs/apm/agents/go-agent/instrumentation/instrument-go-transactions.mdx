---
title: Instrumento transacción Go
tags:
  - Agents
  - Go agent
  - Instrumentation
metaDescription: Learn how to set up New Relic monitoring of  web and non-web transactions in your Golang application or microservice.
freshnessValidatedDate: never
translationType: machine
---

Monitor su aplicación o microservicios [New Relic for Go](/docs/agents/go-agent/get-started/new-relic-go) creando [transacciones](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) asociadas con actividades específicas del servidor de aplicaciones, como respuestas HTTP o tareas en segundo plano. Luego podrá ver el rendimiento de su aplicación en New Relic, incluida la [página APM <DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page).

## Identificar web y transacción no web [#go-monitoring]

A diferencia de muchos otros lenguajes, la aplicación Go se ejecuta desde un archivo binario nativo compilado. Esto significa que configurar New Relic para su aplicación Golang requiere que agregue manualmente métodos New Relic a su código fuente.

En APM las transacciones se identifican como [transacción web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) o [transacción no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions).

* Cuando instrumenta o envuelve una transacción que tiene una solicitud HTTP y un escritor de respuesta, New Relic la trata como una transacción web.
* Cuando instrumenta o envuelve una transacción que no tiene datos HTTP, New Relic la trata como una transacción no web.

Los segmentos son las funciones y llamadas que componen una transacción. También puedes usar New Relic for Go para [agregar detalles a nivel de segmento a tu transacción](/docs/agents/go-agent/get-started/instrument-go-segments).

## Monitor una transacción [#go-txn]

<Callout variant="important">
  No utilice corchetes `[suffix]` al final del nombre de su transacción. New Relic elimina automáticamente los corchetes del nombre. En su lugar, utilice paréntesis `(suffix)` u otros símbolos si es necesario.
</Callout>

Para monitor una transacción: Coloque el siguiente código inmediatamente después del inicio de la función que desea monitor. Por ejemplo:

```go
txn := app.StartTransaction("transaction_name")
defer txn.End()
```

En este ejemplo de código:

* `app` se refiere a la variable asignada durante el proceso de configuración de New Relic. Para obtener más información, consulte los [procedimientos de instalación del agente Go](/docs/agents/go-agent/installation/install-new-relic-go).
* La instrucción [`defer`](https://gobyexample.com/defer) pospone el final del segmento hasta que se cierra la función.

Para monitor una transacción web, llame a las API `Transaction.SetWebRequest` y, opcionalmente, a la `Transaction.SetWebResponse`:

```go
txn := app.StartTransaction("transaction_name")
defer txn.End()

// req is a *http.Request, this marks the transaction as a web transaction
txn.SetWebRequestHTTP(req)

// writer is a http.ResponseWriter, use the returned writer in place of the original
writer = txn.SetWebResponse(writer)
writer.WriteHeader(500)
```

<CollapserGroup>
  <Collapser
    id="transaction-example"
    title="Ejemplo de transacción"
  >
    A continuación se muestra un ejemplo sencillo de antes y después para crear una transacción llamada `checkout_transaction`:

    <DNT>
      **Before:**
    </DNT>

    ```go
    func checkout() {
        // function code here
    }
    ```

    <DNT>
      **After:**
    </DNT>

    ```go
    func checkout() {
        txn := app.StartTransaction("checkout_transaction")
        defer txn.End()
        // function code here
    }
    ```
  </Collapser>
</CollapserGroup>

## Monitor una transacción con múltiples goroutines [#goroutines]

Para monitor una transacción a través de múltiples goroutines, use `Transaction.NewGoroutine()`. El método `NewGoroutine` devuelve una nueva referencia a la transacción, que es requerida por cada rutina de creación de segmentos. No importa si llamas `NewGoroutine` antes o después de que comience la otra rutina.

Todos los métodos `Transaction` se pueden utilizar en cualquier referencia `Transaction` . El `Transaction`finalizará cuando se llame `End()` en cualquier rutina.

<CollapserGroup>
  <Collapser
    id="multie-example"
    title="Ejemplo de múltiples goroutines"
  >
    El siguiente ejemplo pasa una nueva referencia `Transaction` directamente a otra rutina:

    ```go
    go func(txn *newrelic.Transaction) {
        defer txn.StartSegment("async").End()
        time.Sleep(100 * time.Millisecond)
    }(txn.NewGoroutine())
    ```

    El siguiente ejemplo pasa una nueva referencia `Transaction` en un canal a otra rutina:

    ```go
    ch := make(chan *newrelic.Transaction)
    go func() {
        txn := <-ch
        defer txn.StartSegment("async").End()
        time.Sleep(100 * time.Millisecond)
    }()
    ch <- txn.NewGoroutine()
    ```
  </Collapser>
</CollapserGroup>

## Monitor una transacción envolviendo un controlador HTTP [#http-handler-txns]

Si está utilizando el paquete de biblioteca HTTP estándar, puede crear transacciones envolviendo solicitudes HTTP, como alternativa a [instrumentar el código de una función](/docs/agents/go-agent/get-started/new-relic-go-monitor-transactions#go-txn).

A continuación se muestra un ejemplo del antes y el después de la envoltura de un controlador HTTP&#x3A;

<DNT>
  **Before:**
</DNT>

```go
http.HandleFunc("/users", usersHandler)
```

<DNT>
  **After:**
</DNT>

Esto inicia y finaliza automáticamente una transacción con el autor de la solicitud y la respuesta.

```go
http.HandleFunc(newrelic.WrapHandleFunc(app, "/users", usersHandler))
```

Para acceder a la transacción en su controlador, utilice la API `newrelic.FromContext` . Tenga en cuenta que esto solo funcionará para las versiones 1.7 y posteriores de Go. Por ejemplo:

```go
func myHandler(w http.ResponseWriter, r *http.Request) {
    txn := newrelic.FromContext(r.Context())
    txn.NoticeError(errors.New("my error message"))
}
```

## Monitor errores [#go-error-methods]

New Relic for Go captura errores de tres maneras diferentes:

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
        Realice un seguimiento de los errores e informe cualquier combinación de mensaje, clase y atributo
      </td>

      <td>
        [`Transaction.NoticeError()`](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#noticeerror)
      </td>
    </tr>

    <tr>
      <td>
        Realice un seguimiento del error esperado e informe cualquier combinación de mensaje, clase y atributo sin activar alertas ni afectar el error métrico.
      </td>

      <td>
        [`Transaction.NoticeExpectedError()`](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#noticeerror)
      </td>
    </tr>

    <tr>
      <td>
        Informar pánicos
      </td>

      <td>
        La transacción finalizó con `defer` registros de pánico automáticamente. [Consulte la documentación de New Relic for Go GitHub para obtener más información](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#panics). A partir de la versión 3.0.0, esta característica debe habilitarse específicamente configurando la configuración `Config.ErrorCollector.RecordPanics` en `true`.
      </td>
    </tr>

    <tr>
      <td>
        Informar códigos de respuesta de error
      </td>

      <td>
        La transacción registra automáticamente los errores superiores a 400 y inferiores a 100. [Consulte la documentación de New Relic for Go GitHub para obtener más información](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#error-response-codes).
      </td>
    </tr>
  </tbody>
</table>

## Ver el registro de sus datos de infraestructura y APM [#logs-context]

También puede reunir los datos de su registro y de la aplicación para que la resolución de problemas sea más fácil y rápida. Con [el contexto de inicio de sesión](/docs/logs/logs-context/configure-logs-context-go/), puede ver el mensaje de registro relacionado con sus errores y la traza directamente en UI de su aplicación.

1. Desde la página

   <DNT>
     **Errors**
   </DNT>

   , haga clic en una traza para ir a la [página](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems)

   <DNT>
     [**Error details**](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems)
   </DNT>

   [](/docs/apm/apm-ui-pages/error-analytics/errors-page-find-fix-verify-problems).

2. En la página de detalles del error, haga clic en

   <DNT>
     **See logs**
   </DNT>

   .

3. Para ver detalles relacionados con un mensaje de registro individual, haga clic directamente en el mensaje.

También puede ver el inicio de sesión en el contexto de [los datos de su infraestructura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como el clúster de Kubernetes. No es necesario cambiar a otra UI.

## Métodos de transacción adicionales [#go-transactions-methods]

El objeto `Transaction` tiene varios métodos opcionales que se pueden utilizar para controlar el comportamiento de las transacciones, como `NoticeError`, `AddAttribute` y `Ignore`. Para obtener una lista de métodos de transacción, consulte los [métodos de transacción de New Relic for Go en Godoc](https://godoc.org/github.com/newrelic/go-agent/v3/newrelic#Transaction).
