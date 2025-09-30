---
title: Instrumentação principal HTTP Scala Akka
tags:
  - Agents
  - Java agent
  - Scala instrumentation
  - Custom instrumentation
metaDescription: Supplemental directions for instrumenting the New Relic Java agent with Scala applications using the Akka HTTP Core framework.
freshnessValidatedDate: never
translationType: machine
---

Com a introdução do agente Java versão 7.8.0, foram feitas alterações em <DNT>**remove**</DNT> a instrumentação padrão do método `bindAndHandle` , para eliminar cenários que poderiam resultar no relato de transações duplicadas erroneamente. Em algumas situações, pode ser necessário fazer chamadas de método explícitas para compensar essa alteração.

## Antecedentes: instrumentação HttpExt [#background]

A instrumentação para Akka HTTP Core é realizada na classe `akka.http.scaladsl.HttpExt` que serve como ponto de entrada principal para um servidor. Dois métodos convenientes de `HttpExt` que podem ser usados para iniciar um servidor HTTP foram instrumentados:

* `bindAndHandleAsync`: um método de conveniência que inicia um novo servidor HTTP em um determinado endpoint e usa um manipulador que é uma função que recebe um `HttpRequest` e retorna um `Future[HttpResponse]`
* `bindAndHandleSync`: um método de conveniência que inicia um novo servidor HTTP em um determinado endpoint e usa um manipulador que é uma função que recebe um `HttpRequest` e retorna um `HttpResponse`

Para evitar que a duplicação errônea de transação seja reportada, está sendo aplicada instrumentação <DNT>**no longer**</DNT> ao método `bindAndHandle` , que inicia um novo servidor HTTP usando uma instância `akka.stream.scaladsl.Flow` .

A duplicação da transação se deve a um conflito na instrumentação DSL do Akka Http Routing.

## Solução - chame explicitamente bindAndHandleAsync [#solution]

Se desejar iniciar um servidor HTTP a partir de um `akka.stream.scaladsl.Flow`, você deverá invocar explicitamente o método `bindAndHandleAsync` . Por exemplo:

```scala
val flow: Flow[HttpRequest, HttpResponse, NotUsed] = ???
val asyncHandler: HttpRequest => Future[HttpResponse] = request => Source.single(request).via(flow).runWith(Sink.head)

Http().bindAndHandleAsync(asyncHandler, host, port)
```

<Callout variant="important">
  Uma solução alternativa semelhante, chamar `bindAndHandle` ao iniciar um servidor HTTP a partir de um `akka.http.scaladsl.Route` usando o Akka HTTP Routing DSL, **não** é necessária. a instrumentação de agente funcionará normalmente quando for chamada de outros métodos de conveniência.
</Callout>
