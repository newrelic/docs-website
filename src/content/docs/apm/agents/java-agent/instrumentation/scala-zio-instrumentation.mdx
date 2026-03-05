---
title: Scala ZIO instrumentation
tags:
  - Agents
  - Java agent
  - Scala instrumentation
  - Custom instrumentation
  - ZIO
metaDescription: Directions for instrumenting the New Relic Java agent with Scala applications using the ZIO libreary.
freshnessValidatedDate: 2024-03-28 
---

ZIO is a Scala library used to run asynchronous operations. In order to fully leverage ZIO's lazy evaluated structure,
we offer a ZIO API to create transactions and segments.

## Install the ZIO API [#install-zio-api]

To access the API class add the following information to your Scala configuration file depending on the version of ZIO you are using.

<CollapserGroup>
  <Collapser
    id="install-zio1-api"
    title={<><strong>Configure ZIO 1.X using the project/build.scala</strong> file</>}
  >
    Add the following line (replacing `S.V` with the Scala version
    and `X.Y.Z` with the
    [Java agent version](/docs/agents/java-agent/installation/update-java-agent#procedures)
    you use) to the `appDependencies` method in your application's
    `project/build.scala` file:

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-zio-api_S.V" % "X.Y.Z"
    ```
  </Collapser>

  <Collapser
    id="install-zio2-api"
    title={<><strong>Configure ZIO 2.0.0 or higher using the project/build.scala</strong> file</>}
  >
    Add the following line (replacing `S.V` with the Scala version
    and `X.Y.Z` with the
    [Java agent version](/docs/agents/java-agent/installation/update-java-agent#procedures)
    you use) to the `appDependencies` method in your application's
    `project/build.scala` file:

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-zio2-api_S.V" % "X.Y.Z"
    ```
  </Collapser>
</CollapserGroup>

Supported Scala versions are 2.11, 2.12, and 2.13. Scala 3.0 users can use the 2.13 jar.
The minimum Scala version for ZIO v2 is 2.12.

<Callout variant="important">
  For best results when using the API, ensure that you have the latest Java agent
  release.

  * The New Relic ZIO v1 API requires Java agent 7.2.0 or higher.
  * The New Relic ZIO v2 API requires Java agent 8.10.0 or higher.
</Callout>

## Use the ZIO API [#use-zio-api]

You first need to make your import statement, and then you can create transactions and segments.

### Make import statement [#import-statements]

To leverage the ZIO API, make the following import statement for your version:

**ZIO v1 API**

```scala
import com.newrelic.zio.api.TraceOps
```

**ZIO v2 API**

```scala
import com.newrelic.zio2.api.TraceOps
```

The APIs for both are the same except for the package names.

### Create transactions [#transactions]

You can lazily create transactions using the `TraceOps.txn` method.
If a transaction already exists before the method is called, this method will be part of the existing transaction.

<Callout variant="important">
  Unlike the [Scala API's transaction method](/docs/apm/agents/java-agent/frameworks/scala-installation-java/#transactions),
  this method does not eagerly create a transaction. Instead you pass in a `ZIO` block in which an effect is created in a returned instance
  that lazily creates a transaction tracer. It ends when all ZIO operations end.
  As a result any code run outside any ZIO instance or operations will not be captured in the new transaction.
</Callout>

For example:

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

### Create segments [#create-segments]

To create a segment for a synchronous code block use `TraceOps.trace`. For
example:

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
  `TraceOps.trace` only works with synchronous code.
  Any operations done through a ZIO effect, operation, or both should instead use `TraceOps.asyncTrace` (see below).
</Callout>

If you want to create a segment for an asynchronous code block using ZIO, use `TraceOps.asyncTrace`.
This will ensure the timing for the segment includes the time taken for the ZIO effect or operation to complete.

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

You can also use `asyncTrace` in Scala for comprehensions:

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

If you want to create a segment for a synchronous anonymous function, use
`TraceOps.traceFun`. For example:

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTraceFun
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTraceFun

val x: ZIO[_, _, Int] = ZIO.succeed(1)
  .map(traceFun("statement segment")(i => i + 1))
  .debug // prints 2

```

If you want to create segment for an asynchronous function that returns a ZIO instance,  
use `TraceOps.asyncTraceFun`. This will ensure the timing for the segment
includes the time taken for the ZIO operations to complete. For example:

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTraceFun
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTraceFun

val x: ZIO[_, _, Int] = ZIO.succeed(1)
  .flatMap(asyncTraceFun("statement segment")(i => ZIO.succeed(i + 1)))
  .debug // prints 2 on completion of the zio operations
```

## More API functions [#other-api]

For more about the Java agent API and its functionality, see the [Java agent API introduction](/docs/agents/java-agent/custom-instrumentation/java-agent-api).
