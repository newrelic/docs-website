---
title: Introducción a la instrumentación asíncrona de Java
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: 'An explanation of what asynchronous application activity is, and how it impacts New Relic performance monitoring of Java applications.'
freshnessValidatedDate: never
translationType: machine
---

[New Relic para Java](/docs/agents/java-agent/getting-started/introduction-new-relic-java) incluye un [conjunto de métodos API](/docs/agents/java-agent/java-agent-api/java-agent-api-asynchronous-applications) para instrumentación personalizada de actividad asincrónica. Esto es más útil para instrumentar la actividad asincrónica en [un marco no compatible](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#frameworks), pero también puede usar la API para agregar instrumentación a un marco compatible. Este documento explica cómo se produce la actividad asincrónica y cómo funciona el monitor asincrónico de New Relic.

## Operaciones asincrónicas [#h2_asynchronous_basics]

Con un modelo de programación <DNT>**synchronous**</DNT> , las tareas de programación normalmente se ejecutan en un orden específico. Una tarea debe completarse antes de que comience la siguiente, y cada tarea bloquea la finalización de la siguiente.

<DNT>**Asynchronous**</DNT> La programación utiliza un modelo sin bloqueo, por lo que las tareas se pueden ejecutar en paralelo. Las tareas ejecutadas de forma asincrónica son completamente independientes entre sí en su ejecución e inicialización. Debido a que el código asincrónico no se ejecuta en un orden específico, toda la potencia de procesamiento del servidor se puede utilizar de manera más eficiente y el rendimiento de la aplicación aumenta.

## Asíncrono y cambio de subprocesos [#thread_switching]

Para aplicaciones que utilizan procesamiento asincrónico, <DNT>**thread-switching**</DNT> es cuando un programa o tarea cambia de un subproceso a otro. Comprender estos entrelazados asincrónicos puede ayudarle a decidir qué métodos deben instrumentarse.

A continuación se muestra un método de ejemplo con un controlador que realiza solicitudes externas en paralelo. Estas solicitudes se ejecutan de forma asincrónica, por lo que cada solicitud se ejecuta de forma independiente y `getScoreAsync()` regresa inmediatamente después de ser llamada. Esto permite que el hilo solicitante continúe realizando solicitudes mientras `getScoreAsync()` realiza una llamada externa y envía una respuesta.

```java
@ResponseBody
@RequestMapping("getScores", method = RequestMethod.Get
    produces = "text/plain")
public String getCreditScores(@RequestParam(name = "uids") uids) {
    return Arrays.stream(uids.split(","))
                 .parallel()
                 .map(Integer::valueOf)
                 .map(uid -> getScoreAsync(uid))
                 .collect(Collectors.toList());}
```

Algunas de estas solicitudes terminarán antes que otras. Algunos incluso podrían terminar después de que el hilo solicitante haya pasado a otras tareas:

<img
  title="async diagram"
  alt="async diagram"
  src="/images/apm_diagram_Java-async-activity.webp"
/>

En laUI <InlinePopover type="apm"/>, en la vista en cascada de detalles de la traza, la UI muestra una actividad asincrónica superpuesta en el eje x horizontal.

## Asíncrono y tiempo de respuesta [#response_time]

<DNT>**Response time**</DNT> se define como la duración de una transacción desde la perspectiva del solicitante. Para una aplicación asincrónica, el tiempo de respuesta suele ser menor que el tiempo total de transacción. Esto se debe a que los métodos no tienen que esperar a que se completen todos los métodos anteriores antes de regresar. Como las tareas se pueden aplazar, la aplicación puede aprovechar sus recursos limitados y procesar las cosas más rápidamente.

La línea de tiempo de respuesta del gráfico le brinda más información valiosa sobre el comportamiento percibido y la velocidad de su aplicación que el tiempo total de transacción web:

<img
  title="web_transaction_overview.png"
  alt="web_transaction_overview.png"
  src="/images/apm_screenshot-crop_web-transaction-overview.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Summary**</DNT>: En la página APM <DNT>**Summary**</DNT> , la actividad asincrónica en una aplicación Java puede resultar en que el tiempo de respuesta (la línea azul) sea menor que el tiempo total de transacción. Esto se debe a que los métodos no tienen que esperar a que se completen todos los métodos anteriores antes de regresar.
</figcaption>

## Instrumentación personalizada con la API asíncrona [#async-api]

Para implementar instrumentación personalizada de trabajo asíncrono, consulte la [guía de API asíncrona del agente de Java](/docs/agents/java-agent/java-agent-api/java-agent-asynchronous-api-guide). Para obtener información general sobre cómo utilizar la API del agente de Java, consulte [la guía de la API del agente de Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api-guide).
