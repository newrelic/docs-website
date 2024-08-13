---
title: Ignorar transação específica
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: How to set up New Relic's Java agent to ignore specific web transactions (including Apdex scores) using the API.
freshnessValidatedDate: never
translationType: machine
---

O New Relic for Java oferece vários métodos para ignorar transações específicas. Este documento explica como usar as [anotações da API do agente Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api) e `ServletRequest` para ignorar a transação.

Também é possível usar a [chamada de API](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html) `ignoreTransaction()` e [arquivos de instrumentação XML](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format) para ignorar a transação.

<Callout variant="important">
  Ignorar a transação envolve alterar o código-fonte do seu aplicativo e recompilá-lo em todos os casos <DNT>**unless**</DNT> em que você usa um [arquivo de instrumentação XML](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format). Se você não consegue manipular seu código, use XML para ignorar a transação.
</Callout>

## Ignorar transação da web com ServletRequest [#servlet]

Para ignorar uma transação da web, defina um atributo [`ServletRequest`](http://docs.oracle.com/javaee/6/api/javax/servlet/ServletRequest.html) denominado `com.newrelic.agent.IGNORE` como `true` durante a solicitação:

```java
request.setAttribute("com.newrelic.agent.IGNORE", true);
```

Para especificar URLs a serem ignorados, crie um [filtro](http://docs.oracle.com/javaee/6/api/javax/servlet/Filter.html) de servlet que defina esse atributo e aplique o filtro ao servlet que deseja ignorar. O filtro terá acesso ao URI da solicitação se você precisar ignorar URLs específicos.

## Ignorar transação com anotação [#annotation]

Para instruir o agente Java a ignorar a transação usando anotações:

1. Defina uma anotação chamada `NewRelicIgnoreTransaction` no código do seu aplicativo ou uma biblioteca que você possa integrar ao seu aplicativo:

   ```java
   @Target(ElementType.METHOD)
   @Retention(RetentionPolicy.RUNTIME)
   public @interface NewRelicIgnoreTransaction {
   }
   ```

2. Aplique a anotação aos métodos ou classes que deseja ignorar. Por exemplo:

   ```java
   @NewRelicIgnoreTransaction
   public void methodToBeIgnored() {
   }
   ```

Se uma transação chamar um método ou classe anotada com `@NewRelicIgnoreTransaction`, a transação será ignorada. Isso significa que não contribui para a pontuação geral do Apdex; e o rastreamento da transação e os dados de desempenho não são reportados.

## Ignore o apdex, mas não o trace [#apdex]

Você também pode evitar que a transação contribua para a pontuação Apdex, mas ainda assim seja usada na transação. Isso pode evitar que uma transação particularmente longa distorça sua pontuação Apdex. Para evitar que uma transação contribua para sua pontuação Apdex:

1. Defina uma anotação chamada `NewRelicIgnoreApdex` no código do seu aplicativo ou uma biblioteca que você possa integrar ao seu aplicativo:

   ```java
   @Target(ElementType.METHOD)
   @Retention(RetentionPolicy.RUNTIME)
   public @interface NewRelicIgnoreApdex {
   }
   ```

2. Aplique a anotação aos métodos ou classes que deseja ignorar. Por exemplo:

   ```java
   @NewRelicIgnoreApdex
   public void ignoreApdexOfThisMethod() {
   }
   ```

Se uma transação chamar um método ou classe anotada com `@NewRelicIgnoreApdex`, a transação será reportada, mas não contribuirá para a pontuação geral do Apdex.
