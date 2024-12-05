---
title: Rastreo multiaplicación con Go
tags:
  - Agents
  - Go agent
  - Features
metaDescription: How to implement cross application tracing with the Go agent in order to connect transactions across APM-monitored apps.
freshnessValidatedDate: never
translationType: machine
---

El agente Go admite [rastreo multiaplicación (CAT)](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces). El seguimiento de múltiples aplicaciones vincula la transacción entre la aplicación APM-monitor, lo cual es vital para la aplicación que implementa una arquitectura orientada a servicios o microservicios.

<Callout variant="important">
  El rastreo de aplicaciones múltiples ha quedado obsoleto en favor de [Distributed tracing](/docs/agents/go-agent/features/distributed-tracing-go) y se eliminará en una versión futura de agente.
</Callout>

## Habilitar el rastreo multiaplicación con Go [#enable]

Puede habilitar o deshabilitar el seguimiento de múltiples aplicaciones en el agente Go usando el indicador de configuración [`CrossApplicationTracer.Enabled`](/docs/agents/go-agent/instrumentation/go-agent-configuration#cross-tracer-enabled) .

## Pautas de transacciones y solicitudes HTTP con Go [#guidelines]

Incluso con el seguimiento de aplicaciones múltiples habilitado, deberá asegurarse de que su aplicación siga algunas convenciones simples al responder a solicitudes HTTP, realizar sus propias solicitudes HTTP o [crear su propia transacción](/docs/agents/go-agent/get-started/instrument-go-transactions).

<CollapserGroup>
  <Collapser
    id="create-transactions"
    title="Creating transactions via http.ServeMux"
  >
    Si está utilizando [`http.ServeMux`](https://golang.org/pkg/net/http/#ServeMux) de Go y desea compatibilidad con CAT, deberá utilizar los contenedores `WrapHandle` y `WrapHandleFunc` del agente. Estos contenedores inician y finalizan automáticamente la transacción con el escritor de solicitud y respuesta, que [agregará automáticamente los encabezados CAT correctos](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces#security). Su código debería ser similar al siguiente:

    ```go
    http.HandleFunc("/users", usersHandler)
    http.HandleFunc(newrelic.WrapHandleFunc(app, "/users", usersHandler))
    ```

    Puedes leer más sobre estos envoltorios en [Instrumentar Go transacción](/docs/agents/go-agent/get-started/instrument-go-transactions#http-handler-txns).
  </Collapser>

  <Collapser
    id="create-manually"
    title="Crear transacción web manualmente"
  >
    Al crear su propia transacción con `app.StartTransaction`, asegúrese de llamar también `Transaction.SetWebRequest` y `Transaction.SetWebResponse`. Por ejemplo, una transacción iniciada con el siguiente código tendrá CAT habilitado:

    ```go
    txn := app.StartTransaction("transactionName")
    // req is a *http.Request, this marks the transaction as a web transaction
    txn.SetWebRequestHTTP(req)

    // writer is a http.ResponseWriter, use the returned writer in place of the original
    writer = txn.SetWebResponse(writer)
    writer.WriteHeader(500)

    defer txn.End()
    ```

    Sin embargo, una transacción comenzó sin que las llamadas a `Transaction.SetWebRequest` y `Transaction.SetWebResponse` <DNT>**will not**</DNT> tuvieran CAT habilitado:

    ```go
    // Cross application tracing not enabled
    txn := app.StartTransaction("transactionName")
    defer txn.End()
    ```

    Además, si configura códigos de respuesta HTTP, utilice el método `txn.WriteHeader` del agente Go en lugar del método [`http.ResponseWriter.WriteHeader`](https://golang.org/pkg/net/http/#ResponseWriter) de la biblioteca estándar.

    ```go
    // old code
    // writer.WriteHeader(http.StatusInternalServerError)

    // replace with this
    txn := app.StartTransaction("transactionName")
    txn.SetWebRequest(req)
    writer = txn.SetWebResponse(writer)
    writer.WriteHeader(http.StatusInternalServerError)
    ```
  </Collapser>

  <Collapser
    id="make-http-requests"
    title="Realizar solicitudes HTTP"
  >
    Para que sus solicitudes HTTP salientes sean elegibles para CAT, deberá [crear un segmento externo](/docs/agents/go-agent/get-started/instrument-go-segments#go-external-segments).

    La forma más sencilla de crear un segmento externo para su solicitud HTTP saliente es utilizar el método `newrelic.NewRoundTripper` . Por ejemplo, este código realizará una solicitud a `http://api.example.com/` que incluye los encabezados CAT salientes.

    ```go
    func useNewRoundTripper(txn *newrelic.Transaction) (*http.Response, error) {
        client := &http.Client{}
        client.Transport = newrelic.NewRoundTripper(client.Transport)
        req, _ := http.NewRequest("GET", "http://api.example.com/", nil)
        req = newrelic.RequestWithTransactionContext(req, txn)
        return client.Do(req)
    }
    ```

    Si tiene una solicitud más compleja que utiliza `http.Request` de la biblioteca estándar de Go, deberá utilizar el método `newrelic.StartExternalSegment` para asegurarse de que su solicitud saliente sea apta para CAT.

    ```go
    func external(txn *newrelic.Transaction, req *http.Request) (*http.Response, error) {
        s := newrelic.StartExternalSegment(txn, req)
        response, err := http.DefaultClient.Do(req)
        s.Response = response
        s.End()
        return response, err
    }
    ```

    Si bien también es posible crear un `ExternalSegment` mediante una estructura literal, este segmento <DNT>**will not**</DNT> será elegible para CAT. Debido a esto, New Relic recomienda usar [`newrelic.NewRoundTripper` o `newrelic.ExternalSegment`](/docs/agents/go-agent/get-started/instrument-go-segments#go-external-segments).

    ```go
    func noGoodForCat(txn *newrelic.Transaction, url string) (*http.Response, error) {
        // CAT headers not inserted
        defer newrelic.ExternalSegment{
            StartTime: txn.StartSegmentNow(),
            URL:       url,
        }.End()

        return http.Get(url)
    }
    ```
  </Collapser>
</CollapserGroup>

## Obtener rastreo distribuido [#distributed-tracing]

New Relic también ofrece [rastreo distribuido](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing). rastreo distribuido es una mejora del rastreo multiaplicación y se recomienda para sistemas distribuidos grandes.
