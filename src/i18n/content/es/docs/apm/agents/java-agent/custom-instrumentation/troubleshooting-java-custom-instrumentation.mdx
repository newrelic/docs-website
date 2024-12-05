---
title: Resolución de problemas instrumentación personalizada Java
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: Troubleshooting tips when using custom instrumentation with your New Relic Java agent.
freshnessValidatedDate: never
translationType: machine
---

A continuación se ofrecen algunos consejos para la solución de problemas [de instrumentación personalizada con el agente de Java de New Relic](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation).

## Opciones UI

Puede utilizar UI de New Relic para [definir reglas de instrumentación](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-quickly-customize-your-java-instrumentation) con el editor de instrumentación personalizado o editar su archivo XML a través del <DNT>**Settings**</DNT> de su aplicación Java.

<DNT>**Java apps only:**</DNT> Para editar su archivo XML directamente desde la UI de New Relic: vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select a Java app) > Settings > Live Instrumentation**</DNT>. Desde aquí puedes:

* Descargue un archivo XML de muestra.
* Seleccione un archivo XML existente para editar.
* Busque en el historial de instrumentación.

## Transacción anidada en hilo generador de perfiles [#thread-profiler]

La instrumentación personalizada es útil para transacciones anidadas. En el generador de perfiles de subprocesos, los métodos con íconos grises al lado no se pueden instrumentar porque hacerlo resultaría en una sobrecarga inaceptable. Sin embargo, los hijos de esos métodos suelen ser instrumentados.

<img
  title="Thread profiler: Nested transactions colors"
  alt="Thread profiler: Nested transactions colors"
  src="/images/apm_screenshot-crop_Java-custom-instrumentation-colors.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler:**</DNT> Un icono gris significa que no se puede instrumentar. Un icono blanco significa que no está instrumentado pero que puede instrumentarse. Un ícono azul significa que actualmente está instrumentado.
</figcaption>

Para identificar métodos que puede tocar, expanda el árbol de perfiles de hilo hasta que encuentre un método adecuado:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Events > Thread profiler**
   </DNT>

   .

2. Expanda el árbol de perfiles de subprocesos hasta que encuentre un método adecuado.

3. Siga [los procedimientos estándar](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-quickly-customize-your-java-instrumentation) para definir y desplegar instrumentación personalizada.

## Clases y métodos [#classes-methods]

Cuando resuelva problemas con la instrumentación personalizada para su agente de Java, compare la información `pointcut` en su archivo de configuración `newrelic.yml` con los mensajes de confirmación en su [archivo de registro](/docs/agents/java-agent/troubleshooting/generating-logs-troubleshooting-java). Verifique que las clases y los métodos coincidan.

Aquí hay un ejemplo:

```xml
# This is a pointcut example in your newrelic.yml config file:
<pointcut transactionStartPoint="true">
  <className>com.example.class.name</className>
  <method>
    <name>exampleMethod</name>
  </method>
</pointcut>
```

Si esto se está instrumentando correctamente, es posible que vea un mensaje similar a este en el archivo de registro:

```
# This is a confirmation example in your log file:
Oct 1, 2015 10:58:52 -0700 [9805 1] com.newrelic FINER: Instrumenting com/example/class/name
```

Si la clase y el método del archivo de registro no coinciden con los valores de su instrumentación personalizada, revíselos y ajústelos según sea necesario. (Es posible que no siempre vea una confirmación en su archivo de registro sobre si la carga de instrumentación personalizada se realizó correctamente o falló).

## Transacción separada en XML [#separate-transaction]

A continuación se muestra un ejemplo de un punto de corte con varios valores `method` . Se agregó `nameTransaction` al XML para desglosar el método como una transacción separada en lugar de como un segmento en la [tabla de desglose de APM<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page).

```xml
# This is a pointcut example to identify a specific transaction with XML custom instrumentation:
<pointcut>
  <nameTransaction/>
  <className>com.examplename.client.actionflow.impl.exampleActionFlow</className>
  <method>
    <name>requestNAME</name>
    <parameters>
      <type>boolean</type>
    </parameters>
  </method>
</pointcut>
```

## Transacción asincrónica [#async]

Si su aplicación utiliza procesos asincrónicos, es posible conectar la actividad del trabajador asincrónico a la transacción principal mediante la API de Java. Por defecto estas transacciones no están vinculadas. Para obtener más información, consulte [Instrumentación asincrónica de Java](/docs/agents/java-agent/async-instrumentation/introduction-java-async-instrumentation).
