---
title: Instrumentação Scala ZIO
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

ZIO é uma biblioteca Scala usada para executar operações assíncronas. Para aproveitar ao máximo a estrutura de avaliação lenta do ZIO, oferecemos uma API ZIO para criar transações e segmentos.

## Instale a API ZIO [#install-zio-api]

Para acessar a classe API, adicione as seguintes informações ao seu arquivo de configuração Scala, dependendo da versão do ZIO que você está usando.

<CollapserGroup>
  <Collapser
    id="install-zio1-api"
    title={<><strong>Configure o ZIO 1.X usando o arquivo project/build.scala</strong></>}
  >
    Adicione a seguinte linha (substituindo `S.V` pela versão Scala e `X.Y.Z` pela [versão do agente Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que você usa) ao método `appDependencies` no arquivo `project/build.scala` do seu aplicativo:

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-zio-api_S.V" % "X.Y.Z"
    ```
  </Collapser>

  <Collapser
    id="install-zio2-api"
    title={<><strong>Configure o ZIO 2.0.0 ou superior usando o arquivo project/build.scala</strong></>}
  >
    Adicione a seguinte linha (substituindo `S.V` pela versão Scala e `X.Y.Z` pela [versão do agente Java](/docs/agents/java-agent/installation/update-java-agent#procedures) que você usa) ao método `appDependencies` no arquivo `project/build.scala` do seu aplicativo:

    ```scala
    "com.newrelic.agent.java" % "newrelic-scala-zio2-api_S.V" % "X.Y.Z"
    ```
  </Collapser>
</CollapserGroup>

As versões suportadas do Scala são 2.11, 2.12 e 2.13. O usuário Scala 3.0 pode usar o jar 2.13. A versão mínima do Scala para ZIO v2 é 2.12.

<Callout variant="important">
  Para obter melhores resultados ao usar a API, certifique-se de ter a versão mais recente do agente Java.

  * A API New Relic ZIO v1 requer o agente Java 7.2.0 ou superior.
  * A API New Relic ZIO v2 requer o agente Java 8.10.0 ou superior.
</Callout>

## Use a API ZIO [#use-zio-api]

Primeiro você precisa fazer sua declaração de importação, para depois criar transações e segmentos.

### Faça declaração de importação [#import-statements]

Para aproveitar a API ZIO, faça a seguinte instrução de importação para sua versão:

**API ZIO v1**

```scala
import com.newrelic.zio.api.TraceOps
```

**API ZIO v2**

```scala
import com.newrelic.zio2.api.TraceOps
```

A API para ambos é a mesma, exceto pelos nomes dos pacotes.

### Criar transação [#transactions]

Você pode criar transações preguiçosamente usando o método `TraceOps.txn` . Se uma transação já existir antes do método ser chamado, esse método fará parte da transação existente.

<Callout variant="important">
  Ao contrário do [método de transação da API Scala](/docs/apm/agents/java-agent/frameworks/scala-installation-java/#transactions), esse método não cria uma transação avidamente. Em vez disso, você passa um bloco `ZIO` no qual um efeito é criado em uma instância retornada que cria preguiçosamente um tracer transação . Termina quando todas as operações do ZIO terminam. Como resultado, qualquer código executado fora de qualquer instância ou operação ZIO não será capturado na nova transação.
</Callout>

Por exemplo:

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

### Criar segmentos [#create-segments]

Para criar um segmento para um bloco de código síncrono, use `TraceOps.trace`. Por exemplo:

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
  `TraceOps.trace` só funciona com código síncrono. Quaisquer operações realizadas por meio de um efeito ZIO, operação ou ambos devem usar `TraceOps.asyncTrace` (veja abaixo).
</Callout>

Se você quiser criar um segmento para um bloco de código assíncrono usando ZIO, use `TraceOps.asyncTrace`. Isso garantirá que o tempo do segmento inclua o tempo necessário para a conclusão do efeito ou operação ZIO.

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

Você também pode usar `asyncTrace` no Scala para compreensão:

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

Se você quiser criar um segmento para uma função anônima síncrona, use `TraceOps.traceFun`. Por exemplo:

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTraceFun
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTraceFun

val x: ZIO[_, _, Int] = ZIO.succeed(1)
  .map(traceFun("statement segment")(i => i + 1))
  .debug // prints 2

```

Se você deseja criar um segmento para uma função assíncrono que retorne uma instância ZIO,  
use `TraceOps.asyncTraceFun`. Isso garantirá que o tempo do segmento inclua o tempo necessário para a conclusão das operações ZIO. Por exemplo:

```scala
import zio.ZIO
import com.newrelic.zio.api.TraceOps.asyncTraceFun
// or if using ZIO 2, comment out the line above and uncomment the line below
// import com.newrelic.zio2.api.TraceOps.asyncTraceFun

val x: ZIO[_, _, Int] = ZIO.succeed(1)
  .flatMap(asyncTraceFun("statement segment")(i => ZIO.succeed(i + 1)))
  .debug // prints 2 on completion of the zio operations
```

## Mais funções de API [#other-api]

Para obter mais informações sobre a API do agente Java e sua funcionalidade, consulte [Introdução à API do agente Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api).
