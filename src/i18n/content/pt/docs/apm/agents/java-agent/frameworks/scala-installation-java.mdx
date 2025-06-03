---
title: Instrumentação Scala
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: Supplemental directions for instrumenting the New Relic Java agent with Scala applications.
freshnessValidatedDate: never
translationType: machine
---

O agente Java New Relic é [compatível com Scala](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#other) e suporta chamada de API, anotações e [instrumentação personalizada](/docs/java/custom-instrumentation-with-the-java-agent) New Relic. Todas as informações abaixo são complementares às [instruções de instalação do agente Java](/docs/java/java-agent-manual-installation) da New Relic.

<Callout variant="tip">
  Para Heroku, consulte [agente Java com Scala no Heroku](/docs/agents/java-agent/heroku/java-agent-scala-heroku).
</Callout>

## Estrutura Scala [#frameworks]

Se sua [framework](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#frameworks) não tiver suporte nativo do New Relic ou se você quiser configurar monitoramento adicional, [a instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) é uma ótima maneira de se aprofundar em seu aplicativo.

## Instrumento Scala com a API Scala [#using-the-scala-api]

A API do agente New Relic Scala permite controlar, personalizar e estender a funcionalidade do agente Java APM usando código Scala idiomático. Ele pode ser usado junto com a [API Java da New Relic](/docs/agents/java-agent/api-guides/guide-using-java-agent-api/) , bem como permitir que o usuário

* Crie segmentos para funções anônimas síncronas e assíncronas
* Crie segmentos para blocos de código síncronos e assíncronos
* Crie uma transação se ainda não tiver sido iniciada

<Callout variant="important">
  Para obter melhores resultados ao usar a API, certifique-se de ter a versão mais recente do agente Java. A API New Relic Scala requer agente Java 7.1.0 ou mais alto.
</Callout>

### Use a API Scala

Para acessar a classe API adicione as seguintes informações ao seu arquivo de configuração Scala:

<CollapserGroup>
  <Collapser
    id="build-scala"
    title={<><strong>Configurar usando o arquivo project/build.scala</strong></>}
  >
    Adicione a seguinte linha (substituindo `S.V` pela versão Scala e `X.Y.Z` pela [versão do agente Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que você usa) ao método appDependencies no arquivo `project/build.scala` do seu aplicativo:

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-api_S.V" % "X.Y.Z"
    ```
  </Collapser>

  <Collapser
    id="build.sbt"
    title={<><strong>Configurar usando o arquivo project/build.sbt</strong></>}
  >
    Adicione a seguinte linha (substituindo `S.V` pela versão Scala e `X.Y.Z` pela[versão do agente Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que você usa) ao arquivo `project/build.sbt` do seu aplicativo:

    ```scala
    libraryDependencies += "com.newrelic.agent.java" % "newrelic-scala-api_S.V" % "X.Y.Z"
    ```
  </Collapser>
</CollapserGroup>

As versões do Scala suportadas são 2.10, 2.11, 2.12 e 2.13. O usuário Scala 3.0 pode usar o jar 2.13. O jar é implantado no Maven Central e também está no arquivo zip de instalação do agente Java New Relic. Você pode chamar a API quando o agente Java não estiver em execução. Os métodos de API subjacentes são apenas stubs; a implementação é incluída quando o agente Java está em execução.

### Segmentos

Para criar um segmento para um bloco de código síncrono, use `TraceOps.trace`. Por exemplo:

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

`trace` também pode ser usado em Scala para compreensões

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

Se você deseja criar um segmento para um bloco de código assíncrono contendo um Scala Future, use `TraceOps.asyncTrace`. Isso garantirá que o tempo do segmento inclua o tempo necessário para a conclusão do Futuro.

No exemplo abaixo o tempo do segmento não será inferior a 5 segundos devido ao atraso criado no Future empacotado.

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

`asyncTrace` também pode ser usado em Scala para compreensões

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

Se você deseja criar um segmento para uma função anônima síncrona, use `TraceOps.traceFun`. Por exemplo:

```scala
import com.newrelic.scala.api.TraceOps.traceFun

val x: Option[Int] = Option(1)
            .map(traceFun("statement segment")(i => i + 1))
println(x) //Some(2)
```

Se quiser criar segmento para uma função assíncrono que retorne um Scala Future use `TraceOps.asyncTraceFun`. Isso garantirá que o tempo do segmento inclua o tempo necessário para a conclusão da função.

No exemplo abaixo o tempo do segmento não será inferior a 5 segundos devido ao atraso criado no Future empacotado.

```scala
import scala.concurrent.{ExecutionContext, Future}
import com.newrelic.scala.api.TraceOps.asyncTraceFun
// implicit execution
implicit val ec: ExecutionContext = ???

val x: Future[Int] = Future(1)
            .flatMap(asyncTraceFun("statement segment")(i => Future(i + 1)))

x.foreach(println) // prints 2 on completion of Future
```

### Transação

Transação pode ser criada usando o método `TraceOps.txn` . Por exemplo:

```scala
import com.newrelic.scala.api.TraceOps.txn
txn {
    val i = 1
    val j = 2
    println(i + j)
}
```

`txn` pode ser usado como uma declaração (como acima) ou como uma expressão

```scala
import com.newrelic.scala.api.TraceOps.txn
val i: Int = txn(1 + 2) //transaction created
println(i) // 3
```

`txn` pode ser usado com qualquer um dos métodos `TraceOp` para criar segmentos. O exemplo abaixo cria uma transação com 3 segmentos.

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

## Instrumento Scala com a API do agente Java [#using-the-java-api]

Instrumento Scala para usar a classe ou [anotações](/docs/agents/java-agent/java-agent-api/java-agent-api-instrument-using-annotation) da API New Relic.

1. Adicione as seguintes informações ao seu arquivo de configuração Scala:

   <CollapserGroup>
     <Collapser
       id="build-scala"
       title={<><strong>Configurar usando o arquivo project/build.scala</strong></>}
     >
       Adicione a seguinte linha (substituindo `X.Y.Z` pela [versão do agente Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que você usa) ao método appDependencies no arquivo `project/build.scala` do seu aplicativo:

       ```scala
       "com.newrelic.agent.java" % "newrelic-api" % "X.Y.Z"
       ```
     </Collapser>

     <Collapser
       id="build.sbt"
       title={<><strong>Configurar usando o arquivo project/build.sbt</strong></>}
     >
       Adicione a seguinte linha (substituindo `X.Y.Z` pela [versão do agente Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que você usa) ao arquivo `project/build.sbt` do seu aplicativo:

       ```scala
       libraryDependencies += "com.newrelic.agent.java" % "newrelic-api" % "X.Y.Z"
       ```
     </Collapser>
   </CollapserGroup>

2. Importe a classe NewRelic e utilize-a em seu aplicativo:

   ```java
   import com.newrelic.api.agent.NewRelic
   ...
   NewRelic.setTransactionName(null, "/myTransaction");
   ```

### Mais funções de API [#other-api]

Para obter mais informações sobre a API do agente Java e sua funcionalidade, consulte [Introdução à API do agente Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api).

## Instrumento Scala com instrumentação XML

A instrumentação XML está disponível para qualquer aplicativo Scala em execução com o agente Java. Ele permite que a instrumentação seja adicionada sem quaisquer alterações no código.

Para mais informações, veja [Instrumentação Java por XML](/docs/java/custom-instrumentation-by-xml/).

## Instrumentação adicional

Se você usa Kamon, dê uma olhada no [repórter New Relic Kamon](/docs/integrations/open-source-telemetry-integrations/open-source-telemetry-integration-list/kamon-reporter).
