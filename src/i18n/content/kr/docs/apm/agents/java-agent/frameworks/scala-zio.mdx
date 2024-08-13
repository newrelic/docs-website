---
title: 'Scala ZIO 측정, 로그'
tags:
  - Agents
  - Java agent
  - Scala instrumentation
  - Custom instrumentation
  - ZIO
metaDescription: Directions for instrumenting the New Relic Java agent with Scala applications using the ZIO libreary.
freshnessValidatedDate: '2024-03-28T00:00:00.000Z'
translationType: machine
---

ZIO는 비동기 작업을 실행하는 데 사용되는 Scala 라이브러리입니다. ZIO의 지연 평가 구조를 최대한 활용하기 위해 우리는 프로세서 및 세그먼트를 생성하는 ZIO API 제공합니다.

## ZIO API 설치 [#install-zio-api]

API 클래스에 액세스하려면 사용 중인 ZIO 버전에 따라 Scala 설정 파일에 다음 정보를 추가하세요.

<CollapserGroup>
  <Collapser
    id="install-zio1-api"
    title={<><strong>project/build.scala 파일을 사용하여 ZIO 1.X 구성</strong></>}
  >
    플러그인의 `project/build.scala` 파일에 있는 `appDependencies` 메서드에 다음 줄을 추가합니다( `S.V` Scala 버전으로 바꾸고 `X.Y.Z` 를 사용하는 [인스턴스 에이전트 버전](/docs/agents/java-agent/installation/update-java-agent#procedures) 으로 바꿈).

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-zio-api_S.V" % "X.Y.Z"
    ```
  </Collapser>

  <Collapser
    id="install-zio2-api"
    title={<><strong>project/build.scala 파일을 사용하여 ZIO 2.0.0 이상 구성</strong></>}
  >
    플러그인의 `project/build.scala` 파일에 있는 `appDependencies` 메서드에 다음 줄을 추가합니다( `S.V` Scala 버전으로 바꾸고 `X.Y.Z` 를 사용하는 [인스턴스 에이전트 버전](/docs/agents/java-agent/installation/update-java-agent#procedures) 으로 바꿈).

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-zio2-api_S.V" % "X.Y.Z"
    ```
  </Collapser>
</CollapserGroup>

지원되는 Scala 버전은 2.11, 2.12 및 2.13입니다. Scala 3.0 사용자는 2.13 jar을 사용할 수 있습니다. ZIO v2의 최소 Scala 버전은 2.12입니다.

<Callout variant="important">
  API 사용할 때 최상의 결과를 얻으려면 최신 에이전트 릴리스가 있는지 확인하십시오.

  * 뉴켈릭 ZIO v1 API 저항 에이전트 7.2.0 이상이 필요합니다.
  * 뉴렐릭 ZIO v2 API 저항 에이전트 8.10.0 이상이 필요합니다.
</Callout>

## ZIO API 사용 [#use-zio-api]

먼저 가져오기 명령문을 작성해야 하며 그런 다음 프로세서와 세그먼트를 생성할 수 있습니다.

### 수입 명세서 작성 [#import-statements]

ZIO API를 활용하려면 해당 버전에 대해 다음 가져오기 문을 만드세요.

**ZIO v1 API**

```scala
import com.newrelic.zio.api.TraceOps
```

**ZIO v2 API**

```scala
import com.newrelic.zio2.api.TraceOps
```

두 API 모두 패키지 이름을 제외하면 동일합니다.

### 제거 생성 [#transactions]

`TraceOps.txn` 메서드를 사용하여 트랜잭션을 지연 생성할 수 있습니다. 메서드가 호출되기 전에 트랜잭션이 이미 존재하는 경우 이 메서드는 기존 트랜잭션의 일부가 됩니다.

<Callout variant="important">
  [Scala API의 트랜잭션 메소드](/docs/apm/agents/java-agent/frameworks/scala-installation-java/#transactions) 와 달리 이 메소드는 트랜잭션을 적극적으로 생성하지 않습니다. 대신, 지연서로 프로세서 트레이서를 생성하는 반환된 처리에서 효과가 생성되는 `ZIO` 블록을 전달합니다. 모든 ZIO 작업이 종료되면 종료됩니다. 결과적으로 ZIO 인스턴스 또는 작업 외부에서 실행되는 코드는 새 트랜잭션에서 캡처되지 않습니다.
</Callout>

예를 들어:

```scala
import com.newrelic.zio.api.TraceOps.{txn, traceFun, trace}
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.{txn, traceFun, trace}


val x = txn {
    // The segment named "not-captured" will not be
    // captured in the transaction because it is not ran within Zio.
    trace("not-captured") {
        println("hello")
    } 

    // The segment named "trace map UIO" will be 
    // captured as part of the transaction because it is ran within Zio.
    ZIO.succeed(1).map(traceFun("trace map UIO")(i => i + 1))
}
```

### 세그먼트 만들기 [#create-segments]

동기 코드 블록에 대한 세그먼트를 생성하려면 `TraceOps.trace` 사용하세요. 예를 들어:

```scala
import com.newrelic.zio.api.TraceOps.trace
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.trace

trace("statement segment") {
    val i = 1
    val j = 2
    println(i + j)
}
// trace can also be used as an expression
val x: Int = trace("expression segment") {
    val i = 1
    val j = 2
    i + j
}
println(x) // 2
```

<Callout variant="important">
  `TraceOps.trace` 동기 코드에서만 작동합니다. ZIO 효과, 작업 또는 둘 다를 통해 수행되는 모든 작업은 대신 `TraceOps.asyncTrace` 사용해야 합니다(아래 참조).
</Callout>

ZIO를 사용하여 비동기 코드 블록에 대한 세그먼트를 생성하려면 `TraceOps.asyncTrace` 사용하세요. 이렇게 하면 세그먼트 타이밍에 ZIO 효과 또는 작업이 완료되는 데 걸리는 시간이 포함됩니다.

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTrace
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTrace

val x: ZIO[_, _, Int] = asyncTrace("segment name") {
  ZIO.succeed(1) <*
  ZIO.sleep(zio.duration.Duration.fromMillis(1.second.toMillis))
}.debug // prints 1 after the completion of the segment.

```

이해를 위해 Scala에서 `asyncTrace` 사용할 수도 있습니다.

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTrace
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTrace

 val x: ZIO[_, _, Int] = for {
    one <- asyncTrace("segment one")(ZIO.succeed(1))
    two <- asyncTrace("segment two")(ZIO.succeed(one + 1))
    three <- asyncTrace("segment three")(ZIO.succeed(two + 1))
  } yield three

val x2 = x.debug // prints 3 on completion of the segments in x
```

동기식 익명 함수에 대한 세그먼트를 생성하려면 `TraceOps.traceFun` 사용하세요. 예를 들어:

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTraceFun
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTraceFun

val x: ZIO[_, _, Int] = ZIO.succeed(1)
  .map(traceFun("statement segment")(i => i + 1))
  .debug // prints 2

```

ZIO 인스턴스를 반환하는 비동기 함수에 대한 세그먼트를 생성하려면,  
`TraceOps.asyncTraceFun` 사용하세요. 이렇게 하면 세그먼트 타이밍에 ZIO 작업이 완료되는 데 걸리는 시간이 포함됩니다. 예를 들어:

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTraceFun
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTraceFun

val x: ZIO[_, _, Int] = ZIO.succeed(1)
  .flatMap(asyncTraceFun("statement segment")(i => ZIO.succeed(i + 1)))
  .debug // prints 2 on completion of the zio operations
```

## 더 많은 API 기능 [#other-api]

Java 에이전트 API 및 해당 기능에 대한 자세한 내용은 [Java 에이전트 API 소개](/docs/agents/java-agent/custom-instrumentation/java-agent-api) 를 참조하십시오.
