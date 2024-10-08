---
title: Solucionar problemas de instrumentación asincrónica de Java
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: 'Log your Java async work, and troubleshoot common issues with Java async instrumentation.'
freshnessValidatedDate: never
translationType: machine
---

Si tiene problemas al utilizar la [API del agente de Java para tokens y segmentos asíncronos](/docs/agents/java-agent/java-agent-api/java-agent-api-asynchronous-applications), utilice estas técnicas para encontrar respuestas y resolver problemas.

## Verifique su instrumentación [#verify-instrumentation]

La API tiene una serie de mecanismos de seguridad integrados para evitar problemas causados por el uso incorrecto de la API, pero puede utilizar estas técnicas para verificar que la instrumentación de su aplicación sea correcta:

* Después de instrumentar su código, verifique que el registro muestre que se ha creado y caducado una cantidad igual de tokens. Para obtener más información sobre qué mensaje de registro buscar, consulte [Usar registros para solucionar problemas](#log-async).

* Consulte las estadísticas de recolección de basura en [la página](/docs/agents/java-agent/features/jvm-metrics-page)

  <DNT>
    [**JVMs**](/docs/agents/java-agent/features/jvm-metrics-page)
  </DNT>

  [](/docs/agents/java-agent/features/jvm-metrics-page)de APM para determinar si sus cambios han alterado significativamente los patrones de recolección de basura.

* Verifique si algún segmento o token está caducando revisando su [traza de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) para un atributo `timed_out` . Si es así, puedes cambiar el límite con [`token_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-token_timeout) y [`segment_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-segment_timeout).

## Utilice el registro para solucionar problemas [#log-async]

Para personalizar el registro de su agente de Java, consulte [Generando registro](/docs/agents/java-agent/troubleshooting/generating-logs-troubleshooting-java). Luego, puede examinar su registro en busca de estos mensajes comunes:

* Para ver el token creado, consulte el registro en `FINEST` para ver:

  ```
  Transaction com.newrelic.agent.Transaction@5a7cc8e: created active token com.newrelic.agent.TokenImpl@7db8d0e8
  ```

* Para ver los tokens caducados y la hora en que caducaron, consulte el registro en `FINEST` para ver:

  ```
  Transaction com.newrelic.agent.Transaction@5a7cc8e: expired token com.newrelic.agent.TokenImpl@7db8d0e8
  ```

* Para ver los segmentos creados, consulte el registro en `FINEST` para ver:

  ```
  Transaction com.newrelic.agent.Transaction@486b7f04: startSegment(): com.newrelic.agent.Segment@2b7fdad3 created and started with tracer com.newrelic.agent.tracers.OtherRootTracer@4df4a953
  ```

* Para ver los segmentos finalizados y la hora en que finalizaron, consulte el registro en `FINEST` para ver:

  ```
  com.newrelic.agent.Transaction@486b7f04--finish segment(): com.newrelic.agent.Segment@2b7fdad3 async finish with tracer com.newrelic.agent.tracers.OtherRootTracer@4df4a953
  ```

## Problema: los tiempos de transacción son demasiado largos [#problem-long-txns]

Asegúrese de hacer caducar el token y finalizar o ignorar los segmentos; de lo contrario, la transacción puede tardar más en informarse a New Relic. El agente de Java tiene un mecanismo de tiempo de espera para tokens y segmentos que no finalizan correctamente. Para obtener más información, consulte [`token_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-token_timeout) y [`segment_timeout`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-segment_timeout).

## Problema: No hay traza de datos de la transacción. [#problem-no-traces]

Inspeccione la traza de la transacción para asegurarse de que se informe el trabajo asincrónico esperado. Si no ve ninguna traza de la transacción, asegúrese de que la duración de su transacción exceda el umbral de la traza de la transacción establecido en [`transaction_threshold`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-transaction_threshold).

## Problema: muy pocas llamadas asíncronas [#problem-too-few-calls]

Si se informan muy pocas llamadas:

<CollapserGroup>
  <Collapser
    id="ensure-appropriate-link"
    title="Asegúrese de que cada actividad que monitor esté adecuadamente vinculada"
  >
    En el siguiente ejemplo defectuoso, se utiliza una secuencia paralela, lo que significa que el trabajo realizado dentro de la lambda en la llamada a `map()` se puede programar en un hilo diferente al hilo que maneja la solicitud. Sin [crear un token](/docs/agents/java-agent/java-agent-api/java-agent-api-asynchronous-applications#tokens) para vincular todo este trabajo, no verá ningún trabajo programado en un hilo diferente dentro de su transacción.

    ```java
    @RequestMapping("parallel_stream_bad")
    @Trace(dispatcher = true)
    public ResponseEntity parallelStreamBad(@RequestParam("ids") List<long> ids) {
        List<item> results = ids
                .parallelStream()
                .map(i -> requestItem(i))
                .filter(item -> item != null)
                .collect(Collectors.toList());
        return formattedResponse("parallel_stream_bad", results);  
    }
    ```
  </Collapser>

  <Collapser
    id="check-annotations"
    title="Compruebe si le faltan anotaciones obligatorias"
  >
    El siguiente ejemplo informará solo un subconjunto de las llamadas a `requestItem()` porque es imposible colocar `@Trace(async = true)` en bloques de trabajo anónimo dentro de la llamada a `map()`. En su lugar, debes pasar el token a `requestItem()` , vincularlo y luego agregar `@Trace(async=true)` a su alrededor. O utilice una función auxiliar como `requestItemAsync()` para hacer esto sin cambiar sus métodos existentes.

    ```java
    @RequestMapping("parallel_stream_bad2")
    @Trace(dispatcher = true)
    public ResponseEntity parallelStreamBad2(@RequestParam("ids") List<long> ids) {
        final Token token = NewRelic.getAgent().getTransaction().getToken();
        List<item> results = ids
                .parallelStream()
                .map(id -> {
                    token.link();
                    return requestItem(id);
                })
                .filter(item -> item != null)
                .collect(Collectors.toList());
        return formattedResponse("parallel_stream_bad2", results);
    }
    ```

    Compare esto con el ejemplo correcto a continuación, en el que la expresión lambda está envuelta por la clase contenedora `InstrumentedCallable`. Esta clase acepta un token y una lambda, luego envuelve el trabajo asincrónico en `@Trace(async = true)` y usa un token para vincular el trabajo al hilo de solicitud.

    ```java
    @RequestMapping("parallel_stream_wrap")
    @Trace(dispatcher = true)
    public ResponseEntity parallelStreamWrap(@RequestParam("ids") List<long> ids) {
        final Token token = NewRelic.getAgent().getTransaction().getToken();
        List<item> results = ids
                .parallelStream()
                .map(id -> InstrumentedCallable.instrumentCallable(token, () -> requestItem(id)))
                .map(c -> c.call())
                .filter(item -> item != null)
                .collect(Collectors.toList());
        token.expire();
        return formattedResponse("parallel_stream_wrap", results);
    }
    ```
  </Collapser>
</CollapserGroup>
