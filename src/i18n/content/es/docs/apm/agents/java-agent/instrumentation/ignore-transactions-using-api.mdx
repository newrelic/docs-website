---
title: Ignorar transacción específica
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: How to set up New Relic's Java agent to ignore specific web transactions (including Apdex scores) using the API.
freshnessValidatedDate: never
translationType: machine
---

New Relic para Java le ofrece múltiples métodos para ignorar transacciones específicas. Este documento explica cómo utilizar [las anotaciones de la API del agente de Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api) y `ServletRequest` para ignorar la transacción.

También es posible utilizar la [llamada API](http://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html) `ignoreTransaction()` y [los archivos de instrumentación XML](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format) para ignorar la transacción.

<Callout variant="important">
  Ignorar la transacción implica cambiar el código fuente de su aplicación y volver a compilarla en todos los casos <DNT>**unless**</DNT> en los que utilice un [archivo de instrumentación XML](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation-xml-examples#file-format). Si no puede manipular su código, use XML para ignorar la transacción.
</Callout>

## Ignorar transacción web con ServletRequest [#servlet]

Para ignorar una transacción web, establezca un atributo [`ServletRequest`](http://docs.oracle.com/javaee/6/api/javax/servlet/ServletRequest.html) denominado `com.newrelic.agent.IGNORE` en `true` durante la solicitud:

```java
request.setAttribute("com.newrelic.agent.IGNORE", true);
```

Para especificar las URL que desea ignorar, cree un [filtro](http://docs.oracle.com/javaee/6/api/javax/servlet/Filter.html) de servlet que establezca ese atributo y aplique el filtro al servlet que desea ignorar. El filtro tendrá acceso al URI de solicitud si necesita ignorar URL específicas.

## Ignorar transacción con anotación [#annotation]

Para decirle al agente de Java que ignore la transacción usando anotaciones:

1. Defina una anotación llamada `NewRelicIgnoreTransaction` en el código de su aplicación o una biblioteca que pueda integrar con su aplicación:

   ```java
   @Target(ElementType.METHOD)
   @Retention(RetentionPolicy.RUNTIME)
   public @interface NewRelicIgnoreTransaction {
   }
   ```

2. Aplique la anotación a los métodos o clases que desee ignorar. Por ejemplo:

   ```java
   @NewRelicIgnoreTransaction
   public void methodToBeIgnored() {
   }
   ```

Si una transacción llama a un método o clase anotada con `@NewRelicIgnoreTransaction`, la transacción se ignora. Esto significa que no contribuye a la puntuación general de Apdex; y no se reporta la traza de la transacción ni los datos de desempeño.

## Ignorar apdex pero no traza [#apdex]

También puede evitar que la transacción contribuya a la puntuación de Apdex pero aún así se utilice en la transacción. Esto puede evitar que una transacción particularmente larga sesgue su puntuación Apdex. Para evitar que una transacción contribuya a su puntuación Apdex:

1. Defina una anotación llamada `NewRelicIgnoreApdex` en el código de su aplicación o una biblioteca que pueda integrar con su aplicación:

   ```java
   @Target(ElementType.METHOD)
   @Retention(RetentionPolicy.RUNTIME)
   public @interface NewRelicIgnoreApdex {
   }
   ```

2. Aplique la anotación a los métodos o clases que desee ignorar. Por ejemplo:

   ```java
   @NewRelicIgnoreApdex
   public void ignoreApdexOfThisMethod() {
   }
   ```

Si una transacción llama a un método o clase anotado con `@NewRelicIgnoreApdex`, la transacción se informa, pero no contribuye a la puntuación general de Apdex.
