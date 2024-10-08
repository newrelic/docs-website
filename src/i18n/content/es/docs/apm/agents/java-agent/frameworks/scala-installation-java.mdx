---
title: Instrumentación Scala
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: Supplemental directions for instrumenting the New Relic Java agent with Scala applications.
freshnessValidatedDate: never
translationType: machine
---

El agente de Java New Relic es [compatible con Scala](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#other) y admite API de llamada, anotaciones e [instrumentación personalizada de](/docs/java/custom-instrumentation-with-the-java-agent) New Relic. Toda la información a continuación es complementaria a [las instrucciones de instalación del agente de Java](/docs/java/java-agent-manual-installation) de New Relic.

<Callout variant="tip">
  Para Heroku, consulte [agente de Java con Scala en Heroku](/docs/agents/java-agent/heroku/java-agent-scala-heroku).
</Callout>

## Marco Scala [#frameworks]

Si su [framework](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#frameworks) no es compatible de forma nativa con New Relic, o si desea configurar un monitoreo adicional, [la instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) es una excelente manera de profundizar en su aplicación.

## Instrumento Scala con la API de Scala [#using-the-scala-api]

La API del agente New Relic Scala le permite controlar, personalizar y ampliar la funcionalidad del APM agente de Java utilizando código idiomático de Scala. Se puede utilizar junto con la [API Java de New Relic](/docs/agents/java-agent/api-guides/guide-using-java-agent-api/) y también permite al usuario

* Crear segmentos para funciones anónimas síncronas y asincrónicas
* Crear segmentos para bloques de código síncrono y asincrónico
* Cree una transacción si aún no se ha iniciado ninguna

<Callout variant="important">
  Para obtener mejores resultados al utilizar la API, asegúrese de tener la última versión del agente de Java. La API de New Relic Scala requiere agente de Java 7.1.0 o mas alto.
</Callout>

### Utilice la API de Scala

Para acceder a la clase API, agregue la siguiente información a su archivo de configuración de Scala:

<CollapserGroup>
  <Collapser
    id="build-scala"
    title={<><strong>Configurar usando el archivo project/build.scala</strong></>}
  >
    Agregue la siguiente línea (reemplazando `S.V` con la versión de Scala y `X.Y.Z` con la [versión del agente de Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que usa) al método appDependencies en el archivo `project/build.scala` de su aplicación:

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-api_S.V" % "X.Y.Z"
    ```
  </Collapser>

  <Collapser
    id="build.sbt"
    title={<><strong>Configurar usando el archivo project/build.sbt</strong></>}
  >
    Agregue la siguiente línea (reemplazando `S.V` con la versión de Scala y `X.Y.Z` con la[versión del agente de Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que usa) al archivo `project/build.sbt` de su aplicación:

    ```scala
    libraryDependencies += "com.newrelic.agent.java" % "newrelic-scala-api_S.V" % "X.Y.Z"
    ```
  </Collapser>
</CollapserGroup>

Las versiones soportadas de Scala son 2.10, 2.11, 2.12 y 2.13. El usuario de Scala 3.0 puede utilizar el jar 2.13. El jar se implementa en Maven Central y también está en el archivo zip de instalación del agente de Java de New Relic. Puede llamar a la API cuando el agente de Java no se esté ejecutando. Los métodos API subyacentes son sólo códigos auxiliares; la implementación se agrega cuando el agente de Java se está ejecutando.

### Segmentos

Para crear un segmento para un bloque de código síncrono, utilice `TraceOps.trace`. Por ejemplo:

```scala
import com.newrelic.scala.api.TraceOps.trace

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

`trace` También se puede utilizar en Scala para comprensiones.

```scala
import scala.concurrent.{ExecutionContext, Future}
import com.newrelic.scala.api.TraceOps.trace

// implicit execution
implicit val ec: ExecutionContext = ???

  val x: Option[Int] = for {
    one <- trace("segment one")(Option(1))
    two <- trace("segment two")(Option(one + 1))
    three <- trace("segment three")(Option(two + 1))
  } yield three

println(x) // Some(3)
```

Si desea crear un segmento para un bloque de código asincrónico que contenga un Scala Future, utilice `TraceOps.asyncTrace`. Esto garantizará que el cronograma del segmento incluya el tiempo necesario para que se complete el Futuro.

En el siguiente ejemplo, el tiempo del segmento no será inferior a 5 segundos debido al retraso creado en el futuro empaquetado.

```scala
import scala.concurrent.{ExecutionContext, Future}
import com.newrelic.scala.api.TraceOps.asyncTrace
// implicit execution
implicit val ec: ExecutionContext = ???

val x: Future[Int] = asyncTrace("segment name")(Future {
  Thread.sleep(5000)
  1
})
x.foreach(println) // prints 1 on completion of Future
```

`asyncTrace` También se puede utilizar en Scala para comprensiones.

```scala
import scala.concurrent.{ExecutionContext, Future}
import com.newrelic.scala.api.TraceOps.asyncTrace
// implicit execution
implicit val ec: ExecutionContext = ???

 val x: Future[Int] = for {
    one <- asyncTrace("segment one")(Future(1))
    two <- asyncTrace("segment two")(Future(one + 1))
    three <- asyncTrace("segment three")(Future(two + 1))
  } yield three

x.foreach(println) // prints 3 on completion of Future
```

Si desea crear un segmento para una función anónima sincrónica, utilice `TraceOps.traceFun`. Por ejemplo:

```scala
import com.newrelic.scala.api.TraceOps.traceFun

val x: Option[Int] = Option(1)
            .map(traceFun("statement segment")(i => i + 1))
println(x) //Some(2)
```

Si desea crear un segmento para una función asincrónica que devuelva un Scala Future use `TraceOps.asyncTraceFun`. Esto garantizará que el tiempo del segmento incluya el tiempo necesario para completar la función.

En el siguiente ejemplo, el tiempo del segmento no será inferior a 5 segundos debido al retraso creado en el futuro empaquetado.

```scala
import scala.concurrent.{ExecutionContext, Future}
import com.newrelic.scala.api.TraceOps.asyncTraceFun
// implicit execution
implicit val ec: ExecutionContext = ???

val x: Future[Int] = Future(1)
            .flatMap(asyncTraceFun("statement segment")(i => Future(i + 1)))

x.foreach(println) // prints 2 on completion of Future
```

### Transacción

La transacción se puede crear utilizando el método `TraceOps.txn` . Por ejemplo:

```scala
import com.newrelic.scala.api.TraceOps.txn
txn {
    val i = 1
    val j = 2
    println(i + j)
}
```

`txn` se puede utilizar como declaración (como arriba) o como expresión

```scala
import com.newrelic.scala.api.TraceOps.txn
val i: Int = txn(1 + 2) //transaction created
println(i) // 3
```

`txn` se puede utilizar con cualquiera de los `TraceOp` métodos para crear segmentos. El siguiente ejemplo crea una transacción con 3 segmentos.

```scala
import scala.concurrent.{ExecutionContext, Future}
import com.newrelic.scala.api.TraceOps.{txn, asyncTrace}
// implicit execution
implicit val ec: ExecutionContext = ???

 val x: Future[Int] = txn(
     for {
        one <- asyncTrace("segment one")(Future(1))
        two <- asyncTrace("segment two")(Future(one + 1))
        three <- asyncTrace("segment three")(Future(two + 1))
    } yield three
 )

x.foreach(println) // prints 3 on completion of Future
```

## Instrumento Scala con el agente de Java API [#using-the-java-api]

instrumento Scala para usar la clase API New Relic o [anotaciones](/docs/agents/java-agent/java-agent-api/java-agent-api-instrument-using-annotation).

1. Agregue la siguiente información a su archivo de configuración de Scala:

   <CollapserGroup>
     <Collapser
       id="build-scala"
       title={<><strong>Configurar usando el archivo project/build.scala</strong></>}
     >
       Agregue la siguiente línea (reemplazando `X.Y.Z` con la [versión del agente de Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que usa) al método appDependencies en el archivo `project/build.scala` de su aplicación:

       ```scala
       "com.newrelic.agent.java" % "newrelic-api" % "X.Y.Z"
       ```
     </Collapser>

     <Collapser
       id="build.sbt"
       title={<><strong>Configurar usando el archivo project/build.sbt</strong></>}
     >
       Agregue la siguiente línea (reemplazando `X.Y.Z` con la [versión del agente de Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que usa) al archivo `project/build.sbt` de su aplicación:

       ```scala
       libraryDependencies += "com.newrelic.agent.java" % "newrelic-api" % "X.Y.Z"
       ```
     </Collapser>
   </CollapserGroup>

2. Importe la clase NewRelic y úsela en su aplicación:

   ```java
   import com.newrelic.api.agent.NewRelic
   ...
   NewRelic.setTransactionName(null, "/myTransaction");
   ```

### Más funciones API [#other-api]

Para obtener más información sobre la API del agente de Java y su funcionalidad, consulte la [introducción a la API del agente de Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api).

## Instrumento Scala con instrumentación XML

La instrumentación XML está disponible para cualquier aplicación Scala que se ejecute con el agente de Java. Permite agregar instrumentación sin ningún cambio en el código.

Para más información, consulte [Instrumentación Java por XML](/docs/java/custom-instrumentation-by-xml/).

## Instrumentación adicional

Si usas Kamon, echa un vistazo al [reportero de New Relic Kamon](/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/kamon-reporter).
