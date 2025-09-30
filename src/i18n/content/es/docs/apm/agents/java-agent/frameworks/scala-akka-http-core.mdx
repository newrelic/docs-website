---
title: Instrumentación central HTTP de Scala Akka
tags:
  - Agents
  - Java agent
  - Scala instrumentation
  - Custom instrumentation
metaDescription: Supplemental directions for instrumenting the New Relic Java agent with Scala applications using the Akka HTTP Core framework.
freshnessValidatedDate: never
translationType: machine
---

Con la introducción del agente de Java versión 7.8.0, Se realizaron cambios en <DNT>**remove**</DNT> la instrumentación predeterminada del método `bindAndHandle` , para eliminar escenarios que podrían resultar en que se reporten transacciones duplicadas erróneamente. En algunas situaciones, puede que sea necesario realizar llamadas explícitas a métodos para compensar este cambio.

## Antecedentes: instrumentación HttpExt [#background]

La instrumentación para Akka HTTP Core se lleva a cabo en la clase `akka.http.scaladsl.HttpExt` que sirve como punto de entrada principal para un servidor. Se han instrumentado dos métodos convenientes de `HttpExt` que se pueden utilizar para iniciar un servidor HTTP&#x3A;

* `bindAndHandleAsync`: Un método conveniente que inicia un nuevo servidor HTTP en el extremo dado y utiliza un controlador que es una función que recibe un `HttpRequest` y devuelve un `Future[HttpResponse]`
* `bindAndHandleSync`: Un método conveniente que inicia un nuevo servidor HTTP en el extremo dado y utiliza un controlador que es una función que recibe un `HttpRequest` y devuelve un `HttpResponse`

Para evitar que se informe la duplicación errónea de transacciones, se está aplicando instrumentación <DNT>**no longer**</DNT> al método `bindAndHandle` , que inicia un nuevo servidor HTTP utilizando una instancia `akka.stream.scaladsl.Flow` .

La duplicación de la transacción se debe a un choque en la instrumentación DSL de Akka Http Routing.

## Solución: llamar explícitamente a bindAndHandleAsync [#solution]

Si desea iniciar un servidor HTTP desde un `akka.stream.scaladsl.Flow`, debe invocar explícitamente el método `bindAndHandleAsync` . Por ejemplo:

```scala
val flow: Flow[HttpRequest, HttpResponse, NotUsed] = ???
val asyncHandler: HttpRequest => Future[HttpResponse] = request => Source.single(request).via(flow).runWith(Sink.head)

Http().bindAndHandleAsync(asyncHandler, host, port)
```

<Callout variant="important">
  **No** es necesaria una solución alternativa similar, llamar `bindAndHandle` al iniciar un servidor HTTP desde un `akka.http.scaladsl.Route` utilizando el DSL de enrutamiento HTTP de Akka. La instrumentación del agente funcionará normalmente cuando se llame desde otros métodos convenientes.
</Callout>
