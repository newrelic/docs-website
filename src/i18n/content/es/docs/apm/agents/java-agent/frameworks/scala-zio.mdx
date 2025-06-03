---
title: Instrumentación Scala ZIO
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

ZIO es una biblioteca Scala utilizada para ejecutar operaciones asincrónicas. Para aprovechar al máximo la estructura evaluada de forma diferida de ZIO, ofrecemos una API de ZIO para crear transacciones y segmentos.

## Instalar la API de ZIO [#install-zio-api]

Para acceder a la clase API, agregue la siguiente información a su archivo de configuración de Scala según la versión de ZIO que esté utilizando.

<CollapserGroup>
  <Collapser
    id="install-zio1-api"
    title={<><strong>Configure ZIO 1.X usando el archivo project/build.scala</strong></>}
  >
    Agregue la siguiente línea (reemplazando `S.V` con la versión de Scala y `X.Y.Z` con la [versión del agente de Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que usa) al método `appDependencies` en el archivo `project/build.scala` de su aplicación:

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-zio-api_S.V" % "X.Y.Z"
    ```
  </Collapser>

  <Collapser
    id="install-zio2-api"
    title={<><strong>Configure ZIO 2.0.0 o superior usando el archivo project/build.scala</strong></>}
  >
    Agregue la siguiente línea (reemplazando `S.V` con la versión de Scala y `X.Y.Z` con la [versión del agente de Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que usa) al método `appDependencies` en el archivo `project/build.scala` de su aplicación:

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-zio2-api_S.V" % "X.Y.Z"
    ```
  </Collapser>
</CollapserGroup>

Las versiones compatibles de Scala son 2.11, 2.12 y 2.13. El usuario de Scala 3.0 puede utilizar el jar 2.13. La versión mínima de Scala para ZIO v2 es 2.12.

<Callout variant="important">
  Para obtener mejores resultados al utilizar la API, asegúrese de tener la última versión del agente de Java.

  * La New Relic ZIO v1 API requiere agente de Java 7.2.0 o superior.
  * La New Relic ZIO v2 API requiere agente de Java 8.10.0 o superior.
</Callout>

## Utilice la API de ZIO [#use-zio-api]

Primero debe realizar su declaración de importación y luego podrá crear transacciones y segmentos.

### Hacer declaración de importación [#import-statements]

Para aprovechar la API de ZIO, realice la siguiente declaración de importación para su versión:

**API ZIO v1**

```scala
import com.newrelic.zio.api.TraceOps
```

**API ZIO v2**

```scala
import com.newrelic.zio2.api.TraceOps
```

Las API para ambos son las mismas excepto por los nombres de los paquetes.

### Crear transacción [#transactions]

Puede crear transacciones de forma perezosa utilizando el método `TraceOps.txn` . Si ya existe una transacción antes de llamar al método, este método será parte de la transacción existente.

<Callout variant="important">
  A diferencia del [método de transacción de Scala API](/docs/apm/agents/java-agent/frameworks/scala-installation-java/#transactions), este método no crea una transacción con entusiasmo. En su lugar, pasa un bloque `ZIO` en el que se crea un efecto en una instancia devuelta que crea perezosamente un rastreador de transacciones. Finaliza cuando finalizan todas las operaciones de ZIO. Como resultado, cualquier código que se ejecute fuera de cualquier instancia u operación de ZIO no se capturará en la nueva transacción.
</Callout>

Por ejemplo:

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

### Crear segmentos [#create-segments]

Para crear un segmento para un bloque de código síncrono, utilice `TraceOps.trace`. Por ejemplo:

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
  `TraceOps.trace` sólo funciona con código síncrono. Cualquier operación realizada a través de un efecto, operación o ambos de ZIO debe utilizar `TraceOps.asyncTrace` (ver más abajo).
</Callout>

Si desea crear un segmento para un bloque de código asincrónico usando ZIO, use `TraceOps.asyncTrace`. Esto garantizará que el tiempo del segmento incluya el tiempo necesario para que se complete el efecto u operación ZIO.

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

También puedes usar `asyncTrace` en Scala para comprensión:

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

Si desea crear un segmento para una función anónima sincrónica, utilice `TraceOps.traceFun`. Por ejemplo:

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTraceFun
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTraceFun

val x: ZIO[_, _, Int] = ZIO.succeed(1)
  .map(traceFun("statement segment")(i => i + 1))
  .debug // prints 2

```

Si desea crear un segmento para una función asincrónica que devuelva una instancia ZIO,  
utilizar `TraceOps.asyncTraceFun`. Esto garantizará que el cronograma del segmento incluya el tiempo necesario para completar las operaciones de ZIO. Por ejemplo:

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTraceFun
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTraceFun

val x: ZIO[_, _, Int] = ZIO.succeed(1)
  .flatMap(asyncTraceFun("statement segment")(i => ZIO.succeed(i + 1)))
  .debug // prints 2 on completion of the zio operations
```

## Más funciones API [#other-api]

Para obtener más información sobre la API del agente de Java y su funcionalidad, consulte la [introducción a la API del agente de Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api).
