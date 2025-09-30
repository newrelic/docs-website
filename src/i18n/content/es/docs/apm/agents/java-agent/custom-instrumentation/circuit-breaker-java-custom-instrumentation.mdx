---
title: Interruptor para instrumentación personalizada de Java
tags:
  - Agents
  - Java agent
  - Custom instrumentation
metaDescription: New Relic's Java agent 3.16.1 or higher includes a circuit breaker that "trips" to protect apps from the effects of over-instrumentation.
freshnessValidatedDate: never
translationType: machine
---

El agente de Java New Relic incluye un interruptor que protege la aplicación de los efectos de la sobreinstrumentación. Cuando el interruptor detecta los primeros síntomas de agotamiento de la memoria, automáticamente se "dispara" y limita la instrumentación. El agente deja de recopilar datos de transacciones hasta que el interruptor se reinicia automáticamente después de decidir que el reinicio es seguro.

El interruptor tiene en cuenta dos parámetros ([uso del montón y tiempo dedicado a la recolección de basura](#cpu-thresholds)) para determinar cuándo debe activarse. Los valores predeterminados para estos umbrales son porcentajes:

* Umbral de memoria: 20%
* Umbral de CPU de recolección de basura: 10%

Cuando el porcentaje de memoria dinámica libre es menor que `memory_threshold` y el tiempo de CPU dedicado a la recolección de basura es mayor que `gc_cpu_threshold`, el interruptor se activa. Cuando se dispara el interruptor, el agente deja de recopilar datos de la transacción. El rendimiento informado en laUI <InlinePopover type="apm"/>estará subestimado y no verá la traza de la transacción durante un período de tiempo.

## Razones del agotamiento de la memoria [#when]

El interruptor se activa cuando detecta signos de agotamiento de la memoria. Esto puede suceder por varias razones:

<CollapserGroup>
  <Collapser
    id="over-instrumented"
    title="Su aplicación está sobre instrumentada."
  >
    Su aplicación muestra signos tempranos de agotamiento de la memoria debido al despliegue reciente de instrumentación personalizada (mediante XML, llamada API, anotaciones de traza o el [editor de instrumentación personalizada](/docs/apm/applications-menu/features/custom-instrumentation-editor-quickly-customize-your-java-instrumentation) del agente de Java) o debido a la instrumentación incorporada.
  </Collapser>

  <Collapser
    id="load-spike"
    title="Su aplicación ha experimentado un pico de carga."
  >
    Su aplicación experimentó un pico de carga y mostró signos de agotamiento de la memoria. En este caso, el agente no contribuye al pico, pero el interruptor puede ayudar a conservar recursos y garantizar que el agente no contribuya a `OutOfMemoryErrors`.
  </Collapser>

  <Collapser
    id="memory-limit"
    title="Su aplicación se ejecuta cerca de su límite de memoria por diseño."
  >
    Su aplicación está ajustada para ejecutarse cerca de su límite de memoria.
  </Collapser>
</CollapserGroup>

## Resolución de problemas

Si el interruptor se dispara, pruebe estos consejos de resolución de problemas.

<CollapserGroup>
  <Collapser
    id="disable"
    title="Identificar y desactivar la instrumentación."
  >
    Utilice la tabla <DNT>**Top methods by call count**</DNT> en la página del interruptor <DNT>**Events**</DNT> para encontrar métodos que podrían estar sobre instrumentados. Identificar y desactivar la instrumentación personalizada.

    En general, el uso de memoria del agente es proporcional al recuento de llamadas de un método. Se debe utilizar instrumentación personalizada en métodos que se llamen no más de diez veces por transacción. Si la instrumentación está integrada en el agente, revise la documentación [de instrumentación personalizada](/docs/agents/java-agent/custom-instrumentation/java-custom-instrumentation) de New Relic para Java. Si necesita ayuda adicional, obtenga soporte en [support.newrelic.com](https://support.newrelic.com).
  </Collapser>

  <Collapser
    id="java-heap"
    title="Aumente el tamaño máximo del montón de Java."
  >
    Revise cuidadosamente el historial de uso de memoria de su aplicación y determine si es necesario aumentar el tamaño máximo del montón de Java.
  </Collapser>

  <Collapser
    id="disable"
    title="Desactive el interruptor."
  >
    Si su aplicación se comporta como se esperaba, es posible que desee desactivar el interruptor. Para desactivar el interruptor, agregue `enabled: false` en la sección `circuitbreaker` de su archivo de configuración `newrelic.yml` :

    ```yml
    common: &default_settings
      circuitbreaker:
        enabled: false
    ```
  </Collapser>

  <Collapser
    id="cpu-thresholds"
    title="Ajuste el umbral de tiempo de CPU de memoria y recolección de basura."
  >
    Para detectar signos tempranos de agotamiento de la memoria, el interruptor utiliza una fórmula con dos variables: `memory_threshold` y `gc_cpu_threshold`. Cuando el porcentaje de memoria dinámica libre es menor que `memory_threshold` y el tiempo de CPU dedicado a la recolección de basura es mayor que `gc_cpu_threshold`, el interruptor se activa. Ajuste estos valores según sea necesario, según el rendimiento operativo y el comportamiento de su aplicación.

    Para obtener detalles de configuración, consulte `memory_threshold` y `gc_cpu_threshold`.
  </Collapser>
</CollapserGroup>
