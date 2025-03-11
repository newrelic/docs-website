---
title: 'API do agente Java: instrumento usando anotação'
tags:
  - Agents
  - Java agent
  - API guides
metaDescription: 'With New Relic monitoring for Java, you can use annotations in your app code to extend the default instrumentation of your app.'
freshnessValidatedDate: never
translationType: machine
---

O agente Java da New Relic oferece diversas opções para [instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation). Uma dessas opções é adicionar as anotações `@Trace`, `@TraceLambda` ou `@TraceByReturnType` da API do agente Java ao código do seu aplicativo. Este documento descreve como usar anotações.

<Callout variant="important">
  Para usar anotações, você deve modificar o código-fonte. Caso você não possa ou não queira modificar seu código fonte, veja [instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) para outras opções de instrumentação.
</Callout>

## As anotações estão habilitadas por padrão [#configure]

Por padrão, a definição de configuração `enable_custom_tracing` é definida como `true` no agente Java, que é a configuração necessária para que as anotações @Trace funcionem.

Essa configuração **não** está incluída em `newrelic.yml` por padrão. Se você deseja desativar as anotações, defina `enable_custom_tracing: false` (precedido por dois espaços) na seção `common` do seu `newrelic.yml`.

## @Vestígio [#trace]

A anotação de um método com `@Trace` informa ao agente Java que medições devem ser feitas para esse método.

Para adicionar uma chamada de método como um trace personalizado, adicione anotações `@Trace` ao seu método. Certifique-se de que `newrelic-api.jar` apareça no seu caminho de classe, pois contém todas essas anotações.

```java
import com.newrelic.api.agent.Trace;

...

  @Trace
  public void run() {
    // background task
  }
```

### Crie uma nova transação [#new-trans]

Caso as transações não apareçam e você queira iniciar uma nova transação, inclua `dispatcher=true` com a anotação `@Trace` :

```java
@Trace (dispatcher=true)
public void run() {
  // background task
}
```

### Adicione detalhes à sua transação [#detail]

Se o seu trace da transação mostra grandes blocos de tempo não instrumentado e você deseja incluir mais alguns métodos dentro do trace, você pode usar a anotação `@Trace` sem parâmetro:

```java
@Trace
protected void methodWithinTransaction() {
  // work
}
```

### Converter uma transação em uma solicitação da web [#web-request]

Para fazer um relatório de tarefa em segundo plano como uma transação do browser da web com uma chamada [de API do agente Java](/docs/java/java-agent-api) : No método anotado com `@Trace(dispatcher=true)`, chame:

```java
NewRelic.setRequestAndResponse(Request request, Response response)
```

Os argumentos são implementações das interfaces `Request` e `Response` em `newrelic-api.jar`.

<Callout variant="important">
  Mesmo que seus objetos `Request` e `Response` já estejam presentes, você ainda precisará adicionar esta chamada de API.
</Callout>

### Defina sua própria classe de anotação @Trace [#custom-class]

Se você definir sua própria classe de anotação `@Trace` , não haverá dependência do `newrelic-api.jar`. Para definir a classe:

```java
package com.test;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)

public @interface Trace {
  public static final String NULL = "";
  String metricName() default NULL;
  boolean dispatcher() default false;
  String tracerFactoryName() default NULL;
}
```

Em seguida, configure o agente para usar esta anotação na seção `common` do `newrelic.yml`:

```yml
class_transformer:
  trace_annotation_class_name: com.test.Trace
```

### Propriedades para @Trace [#properties]

A anotação `@Trace` oferece suporte às propriedades a seguir.

<CollapserGroup>
  <Collapser
    id="trace-dispatcher"
    title={<InlineCode>expedidor</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Boleano
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Se `true`, o agente iniciará uma transação quando atingir um método com esta anotação `@Trace` se uma transação ainda não estiver em andamento. Se uma transação já estiver em andamento, o método com esta anotação será incluído na transação em andamento, em vez de iniciar uma nova.

    Se `false` (padrão), nenhuma métrica será registrada se o agente não tiver iniciado uma transação antes que a anotação `@Trace` seja alcançada. Por exemplo:

    ```java
    @Trace(dispatcher=true)
    ```
  </Collapser>

  <Collapser
    id="trace-async"
    title={<InlineCode>async</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Boleano
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Se `true`, esse método será marcado como assíncrono e o agente trace esse método se ele estiver vinculado a uma transação existente. Por exemplo:

    ```java
    @Trace(async=true)
    ```

    Se `false` (padrão), o método não será marcado como assíncrono. Se outras anotações `@Trace` estiverem presentes e o método não estiver sendo executado de forma assíncrona, ele ainda será rastreado.
  </Collapser>

  <Collapser
    id="trace-metric-name"
    title={<InlineCode>metricName</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Corda
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            (nenhum)
          </td>
        </tr>
      </tbody>
    </table>

    Esta propriedade afeta o rastreamento da transação e o relatório de erros. Por padrão, o nome da métrica incluirá o nome da classe seguido do nome do método. Se você não quiser que a classe seja seguida pelo método, você poderá usar esta propriedade para alterar o nome da métrica.

    Se você definir `metricName`, como em `@Trace(metricName="YourMessageHere")`, então o tempo gasto neste método aparecerá como YourMessageHere em qualquer rastreamento da transação.

    Se você definir `metricName` além do despachante, como em `@Trace(metricName="YourMessageHere", dispatcher=true)`, o nome da transação aparecerá como YourMessageHere na página <DNT>**Transactions**</DNT> do APM, mas o tempo gasto neste método não aparecerá como YourMessageHere em nenhum rastreamento da transacção.

    Aqui está um exemplo:

    ```java
    @Trace(metricName="YourMetricName")
    ```

    <Callout variant="important">
      Não use colchetes `[suffix]` no final do nome da sua transação. O New Relic remove automaticamente os colchetes do nome. Em vez disso, use parênteses `(suffix)` ou outros símbolos, se necessário.
    </Callout>
  </Collapser>

  <Collapser
    id="trace-exclude-trace"
    title={<InlineCode>excludeFromTransactionTrace</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Boleano
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Se `true`, o método será excluído do rastreamento da transação. O agente ainda coletará métricas para o método. Aqui está um exemplo:

    ```java
    @Trace(excludeFromTransactionTrace=true)
    ```
  </Collapser>

  <Collapser
    id="leaf-tracer"
    title={<InlineCode>folha</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Boleano
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Um tracer de folhas não possui rastreador filho. Isso é útil quando você deseja atribuir todos os tempos ao tracer, mesmo que outros pontos trace sejam encontrados durante a execução do tracer.

    O banco de dados tracer geralmente atua como uma folha para que todo o tempo seja atribuído à atividade do banco de dados, mesmo que chamadas externas instrumentadas sejam feitas. Aqui está um exemplo:

    ```java
    @Trace(leaf=true)
    ```

    Se um tracer folha não participar do rastreamento da transação, o agente poderá criar um tracer com menor sobrecarga. Aqui está um exemplo:

    ```java
    @Trace(excludeFromTransactionTrace=true, leaf=true)
    ```
  </Collapser>
</CollapserGroup>

## @TraceLambda [#tracelambda]

Este recurso está desabilitado por padrão e deve ser habilitado explicitamente (por exemplo `-Dnewrelic.config.instrumentation.trace_lambda.enabled=true`) para que as anotações tenham efeito. A variável de ambiente equivalente é `NEW_RELIC_INSTRUMENTATION_TRACE_LAMBDA_ENABLED`.

Se o seu trace da transação mostra grandes blocos de tempo não instrumentado e você deseja incluir expressões lambda dentro do trace, você pode usar a anotação `@TraceLambda` sem parâmetro:

```java
import com.newrelic.api.agent.TraceLambda;

@TraceLambda
class ClassContainingLambdaExpressions() {
  // work
}
```

As expressões lambda tornam-se métodos estáticos da classe que os contém após a compilação. Por padrão, os métodos estáticos nas classes marcadas com a anotação `@TraceLambda` que correspondem ao padrão de anotações serão marcados com a anotação `@Trace` .

### Propriedades para @TraceLambda [#tracelambda-properties]

A anotação `@TraceLambda` oferece suporte às propriedades a seguir.

<CollapserGroup>
  <Collapser
    id="trace-lambda-pattern"
    title={<InlineCode>padrão</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Corda
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `^\$?(lambda\|anonfun)\$(?\<name\>.*)`
          </td>
        </tr>
      </tbody>
    </table>

    Se você definir `pattern`, como em `@TraceLambda(pattern="YourPattern")`, os nomes dos métodos das classes marcadas serão comparados ao padrão regex `YourPattern`. Se corresponder, o método relacionado será marcado com a anotação `@Trace` .

    Aqui está um exemplo:

    ```java
    @TraceLambda(pattern="YourPattern")
    ```
  </Collapser>

  <Collapser
    id="trace-lambda-includeNonstatic"
    title={<InlineCode>includeNonstatic</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Boleano
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Se `true`, os métodos não estáticos das classes marcadas serão elegíveis para avaliação em relação ao padrão de instrumentação.

    Aqui está um exemplo:

    ```java
    @TraceLambda(includeNonstatic="true")
    ```
  </Collapser>
</CollapserGroup>

## @TraceByReturnType [#tracebyreturntype]

Para incluir métodos com um tipo de retorno específico no trace, você pode usar a anotação `@TraceByReturnType` para marcar uma classe que transmite os tipos de retorno como uma propriedade. Os métodos em classes anotadas que correspondam a um dos tipos de retorno especificados serão marcados com a anotação `@Trace` .

```java
@TraceByReturnType(traceReturnTypes={Integer.class, String.class})
class ClassContainingMethods() {
  // ...
}
```

### Propriedades para @TraceByReturnType [#tracebyreturntype-properties]

A anotação `@TraceByReturnType` oferece suporte às propriedades a seguir.

<CollapserGroup>
  <Collapser
    id="trace-by-return-type-traceReturnTypes"
    title={<InlineCode>traceReturnTypes</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            List&lt;Class>
          </td>
        </tr>

        <tr>
          <th>
            Padrão:
          </th>

          <td>
            lista vazia
          </td>
        </tr>
      </tbody>
    </table>

    Se você definir `traceReturnTypes`, como em `@TraceByReturnType(traceReturnTypes={String.class})`, os tipos de retorno do método de classes marcados serão comparados com `String.class`. Todos os métodos correspondentes serão marcados com a anotação `@Trace` .

    Aqui está um exemplo:

    ```java
    @TraceByReturnType(traceReturnTypes={Integer.class, String.class})
    class ClassContainingMethods() {
      public String doSomething() { // matches
        // ...
      }

      public Long somethingElse() { // does not match
        // ...
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Considerações de desempenho

Quando o agente Java estiver presente na JVM, ele injetará código nos métodos anotados. O impacto no desempenho é insignificante em operações pesadas, como chamadas de banco de dados ou de webservice, mas é perceptível em métodos chamados com frequência, como um acessador chamado milhares de vezes por segundo.

<Callout variant="caution">
  Não instrumente todos os seus métodos, pois isso pode levar à diminuição do desempenho e a um [problema de agrupamento métrico](/docs/apm/other-features/metrics/metric-grouping-issues).
</Callout>

## Mais funções de API [#other-api]

Para obter mais informações sobre a API do agente Java e sua funcionalidade, consulte [Introdução à API do agente Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api).
