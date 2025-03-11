---
title: 'Agente de Java API: Instrumento que utiliza anotación'
tags:
  - Agents
  - Java agent
  - API guides
metaDescription: 'With New Relic monitoring for Java, you can use annotations in your app code to extend the default instrumentation of your app.'
freshnessValidatedDate: never
translationType: machine
---

El agente de Java de New Relic proporciona varias opciones para [instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation). Una de esas opciones es agregar las anotaciones `@Trace`, `@TraceLambda` o `@TraceByReturnType` del agente de Java API al código de su aplicación. Este documento describe cómo utilizar las anotaciones.

<Callout variant="important">
  Para utilizar anotaciones, debe modificar el código fuente. Si no puede o no quiere modificar su código fuente, consulte [instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) para conocer otras opciones de instrumentación.
</Callout>

## Las anotaciones están habilitadas de forma predeterminada. [#configure]

De forma predeterminada, la configuración `enable_custom_tracing` está establecida en `true` en el agente de Java, que es la configuración necesaria para que funcionen las anotaciones @Trace.

Esta configuración **no** está incluida en `newrelic.yml` de forma predeterminada. Si desea desactivar las anotaciones, establezca `enable_custom_tracing: false` (precedido por dos espacios) en la sección `common` de su `newrelic.yml`.

## @Rastro [#trace]

Anotar un método con `@Trace` le dice al agente de Java que se deben tomar medidas para ese método.

Para agregar una llamada a un método como una traza personalizada, agregue `@Trace` anotaciones a su método. Asegúrese de que `newrelic-api.jar` aparezca en su classpath ya que contiene todas estas anotaciones.

```java
import com.newrelic.api.agent.Trace;

...

  @Trace
  public void run() {
    // background task
  }
```

### Crear una nueva transacción [#new-trans]

Si las transacciones no aparecen y desea iniciar una nueva transacción, incluya `dispatcher=true` con la anotación `@Trace` :

```java
@Trace (dispatcher=true)
public void run() {
  // background task
}
```

### Añade detalles a tu transacción [#detail]

Si su traza de la transacción muestra grandes bloques de tiempo no instrumentados y desea incluir algunos métodos más dentro de la traza, puede usar la anotación `@Trace` sin parámetro:

```java
@Trace
protected void methodWithinTransaction() {
  // work
}
```

### Convertir una transacción en una solicitud web [#web-request]

Para generar un informe de tarea en segundo plano como una transacción browser web con una llamada [API de agente de Java](/docs/java/java-agent-api) : En el método anotado con `@Trace(dispatcher=true)`, llame a:

```java
NewRelic.setRequestAndResponse(Request request, Response response)
```

Los argumentos son implementaciones de las interfaces `Request` y `Response` en `newrelic-api.jar`.

<Callout variant="important">
  Incluso si sus objetos `Request` y `Response` ya están presentes, aún necesita agregar esta llamada API.
</Callout>

### Defina su propia clase de anotación @Trace [#custom-class]

Si define su propia clase de anotación `@Trace` , no hay dependencia de `newrelic-api.jar`. Para definir la clase:

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

Luego, configure el agente para usar esta anotación en la sección `common` de `newrelic.yml`:

```yml
class_transformer:
  trace_annotation_class_name: com.test.Trace
```

### Propiedades para @Trace [#properties]

La anotación `@Trace` admite las siguientes propiedades.

<CollapserGroup>
  <Collapser
    id="trace-dispatcher"
    title={<InlineCode>despachador</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Booleano
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Si es `true`, el agente iniciará una transacción cuando llegue a un método con esta anotación `@Trace` si aún no hay una transacción en progreso. Si ya hay una transacción en curso, el método con esta anotación se incluirá en la transacción en curso, en lugar de iniciar una nueva.

    Si `false` (predeterminado), no se registrará ninguna métrica si el agente no ha iniciado una transacción antes de alcanzar la anotación `@Trace` . Por ejemplo:

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
            Booleano
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Si `true`, este método se marca como asincrónico y el agente trazará este método si está vinculado a una transacción existente. Por ejemplo:

    ```java
    @Trace(async=true)
    ```

    Si `false` (predeterminado), el método no está marcado como asincrónico. Si hay otras anotaciones `@Trace` presentes y el método no se ejecuta de forma asincrónica, seguirá siendo traza.
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
            Cadena
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            (ninguno)
          </td>
        </tr>
      </tbody>
    </table>

    Esta propiedad afecta la traza de la transacción y el informe de errores. De forma predeterminada, el nombre de la métrica incluirá el nombre de la clase seguido del nombre del método. Si no desea que la clase siga el método, puede utilizar esta propiedad para cambiar el nombre de la métrica.

    Si configura el `metricName`, como en `@Trace(metricName="YourMessageHere")`, entonces el tiempo dedicado a este método aparecerá como YourMessageHere en cualquier traza de la transacción.

    Si configura el `metricName` además del despachador, como en `@Trace(metricName="YourMessageHere", dispatcher=true)`, entonces el nombre de la transacción aparecerá como YourMessageHere en la página APM <DNT>**Transactions**</DNT> pero el tiempo empleado en este método no aparecerá como YourMessageHere en ninguna traza de la transacción.

    Aquí hay un ejemplo:

    ```java
    @Trace(metricName="YourMetricName")
    ```

    <Callout variant="important">
      No utilice corchetes `[suffix]` al final del nombre de su transacción. New Relic elimina automáticamente los corchetes del nombre. En su lugar, utilice paréntesis `(suffix)` u otros símbolos si es necesario.
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
            Booleano
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Si `true`, el método será excluido de la traza de la transacción. El agente seguirá recopilando métrica para el método. Aquí hay un ejemplo:

    ```java
    @Trace(excludeFromTransactionTrace=true)
    ```
  </Collapser>

  <Collapser
    id="leaf-tracer"
    title={<InlineCode>leaf</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Booleano
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Un rastreador de hojas no tiene rastreadores de niños. Esto es útil cuando desea asignar todo el tiempo al trazador, incluso si se encuentran otros puntos de la traza durante la ejecución del trazador.

    La base de datos rastreador suele actuar como una hoja, de modo que todo el tiempo es un atributo de la actividad de la base de datos, incluso si se realizan llamadas externas instrumentadas. Aquí hay un ejemplo:

    ```java
    @Trace(leaf=true)
    ```

    Si un rastreador de hojas no participa en la traza de la transacción, el agente puede crear un rastreador con menores gastos generales. Aquí hay un ejemplo:

    ```java
    @Trace(excludeFromTransactionTrace=true, leaf=true)
    ```
  </Collapser>
</CollapserGroup>

## @TraceLambda [#tracelambda]

Esta característica está deshabilitada de forma predeterminada y debe habilitarse explícitamente (p. ej. `-Dnewrelic.config.instrumentation.trace_lambda.enabled=true`) para que las anotaciones surtan efecto. La variable de entorno equivalente es `NEW_RELIC_INSTRUMENTATION_TRACE_LAMBDA_ENABLED`.

Si su traza de la transacción muestra grandes bloques de tiempo no instrumentados y desea incluir expresiones lambda dentro de la traza, puede usar la anotación `@TraceLambda` sin parámetro:

```java
import com.newrelic.api.agent.TraceLambda;

@TraceLambda
class ClassContainingLambdaExpressions() {
  // work
}
```

Las expresiones lambda se convierten en métodos estáticos de la clase que las contiene después de la compilación. De forma predeterminada, los métodos estáticos dentro de las clases marcadas con la anotación `@TraceLambda` que coincidan con el patrón de anotaciones se marcarán con la anotación `@Trace` .

### Propiedades para @TraceLambda [#tracelambda-properties]

La anotación `@TraceLambda` admite las siguientes propiedades.

<CollapserGroup>
  <Collapser
    id="trace-lambda-pattern"
    title={<InlineCode>patrón</InlineCode>}
  >
    <table>
      <tbody>
        <tr>
          <th>
            Tipo:
          </th>

          <td>
            Cadena
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `^\$?(lambda\|anonfun)\$(?\<name\>.*)`
          </td>
        </tr>
      </tbody>
    </table>

    Si configura `pattern`, como en `@TraceLambda(pattern="YourPattern")`, los nombres de los métodos de las clases marcadas coincidirán con el patrón de expresiones regulares `YourPattern`. Si coincide, el método relacionado se marcará con la anotación `@Trace` .

    Aquí hay un ejemplo:

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
            Booleano
          </td>
        </tr>

        <tr>
          <th>
            Por defecto:
          </th>

          <td>
            `false`
          </td>
        </tr>
      </tbody>
    </table>

    Si es `true`, los métodos no estáticos de las clases marcadas serán elegibles para la evaluación según el patrón de instrumentación.

    Aquí hay un ejemplo:

    ```java
    @TraceLambda(includeNonstatic="true")
    ```
  </Collapser>
</CollapserGroup>

## @TraceByReturnType [#tracebyreturntype]

Para incluir métodos con un tipo de retorno particular dentro de la traza, puede usar la anotación `@TraceByReturnType` para marcar una clase que pasa los tipos de retorno como una propiedad. Los métodos de las clases anotadas que coincidan con uno de los tipos de devolución especificados se marcarán con la anotación `@Trace` .

```java
@TraceByReturnType(traceReturnTypes={Integer.class, String.class})
class ClassContainingMethods() {
  // ...
}
```

### Propiedades de @TraceByReturnType [#tracebyreturntype-properties]

La anotación `@TraceByReturnType` admite las siguientes propiedades.

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
            Por defecto:
          </th>

          <td>
            lista vacía
          </td>
        </tr>
      </tbody>
    </table>

    Si configura `traceReturnTypes`, como en `@TraceByReturnType(traceReturnTypes={String.class})`, los tipos de retorno del método de clases marcados se compararán con `String.class`. Todos los métodos coincidentes se marcarán con la anotación `@Trace` .

    Aquí hay un ejemplo:

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

## Consideraciones de rendimiento

Cuando el agente de Java está presente en la JVM, inyectará código en los métodos anotados. El impacto en el rendimiento es insignificante en operaciones pesadas, como base de datos o llamadas a servicios web, pero es notable en métodos que se llaman con frecuencia, como un descriptor de acceso llamado miles de veces por segundo.

<Callout variant="caution">
  No utilice instrumentos en todos sus métodos, ya que esto puede provocar una disminución del rendimiento y un [problema de agrupación métrica](/docs/apm/other-features/metrics/metric-grouping-issues).
</Callout>

## Más funciones API [#other-api]

Para obtener más información sobre la API del agente de Java y su funcionalidad, consulte la [introducción a la API del agente de Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api).
