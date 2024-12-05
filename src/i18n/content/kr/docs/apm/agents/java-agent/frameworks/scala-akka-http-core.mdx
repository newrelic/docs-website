---
title: Scala Akka HTTP 핵심 계측
tags:
  - Agents
  - Java agent
  - Scala instrumentation
  - Custom instrumentation
metaDescription: Supplemental directions for instrumenting the New Relic Java agent with Scala applications using the Akka HTTP Core framework.
freshnessValidatedDate: never
translationType: machine
---

잔류 에이전트 릴리스 7.8.0의 도입으로, 잘못 중복된 트랜잭션이 보고될 수 있는 시나리오를 제거하기 위해 `bindAndHandle` 메서드의 기본 계측인 <DNT>**remove**</DNT> 이 변경되었습니다. 어떤 상황에서는 이러한 변경 사항을 보완하기 위해 명시적인 메서드 호출을 수행해야 할 수도 있습니다.

## 배경: HttpExt 계측 [#background]

Akka HTTP Core에 대한 계측은 서버의 기본 진입점 역할을 하는 `akka.http.scaladsl.HttpExt` 클래스에서 수행됩니다.HTTP 서버를 시작하는 데 사용할 수 있는 `HttpExt` 의 두 가지 편리한 방법이 계측되었습니다.

* `bindAndHandleAsync`: 주어진 엔드포인트에서 새로운 HTTP 서버를 시작하고 `HttpRequest` 을 수신하고 `Future[HttpResponse]`
* `bindAndHandleSync`: 주어진 엔드포인트에서 새로운 HTTP 서버를 시작하고 `HttpRequest` 을 수신하고 `HttpResponse`

프로세서의 잘못된 중복이 보고되지 않도록 하기 위해 `akka.stream.scaladsl.Flow` 외를 사용하여 새 HTTP 서버를 시작하는 `bindAndHandle` 메서드에 계측이 <DNT>**no longer**</DNT> 적용되고 있습니다.

트랜잭션 중복은 Akka Http Routing DSL 계측의 충돌로 인해 발생합니다.

## 솔루션 - 명시적으로 bindAndHandleAsync 호출 [#solution]

`akka.stream.scaladsl.Flow` 에서 HTTP 서버를 시작하려면 `bindAndHandleAsync` 메서드를 명시적으로 호출해야 합니다.예를 들어:

```scala
val flow: Flow[HttpRequest, HttpResponse, NotUsed] = ???
val asyncHandler: HttpRequest => Future[HttpResponse] = request => Source.single(request).via(flow).runWith(Sink.head)

Http().bindAndHandleAsync(asyncHandler, host, port)
```

<Callout variant="important">
  Akka HTTP 라우팅 DSL을 사용하여 `akka.http.scaladsl.Route` 에서 HTTP 서버를 시작할 때 `bindAndHandle` 를 호출하는 유사한 해결 방법은 필요 **하지 않습니다** .에이전트 계측은 다른 편리한 방법에서 호출될 때 정상적으로 작동합니다.
</Callout>
