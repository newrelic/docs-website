---
title: Límites de eventos y muestreo para APM y monitoreo de móviles
tags:
  - APM
  - Troubleshooting
metaDescription: How APM and mobile agents limit the reporting of events and perform sampling when those limits are exceeded.
freshnessValidatedDate: never
translationType: machine
---

Nuestro <InlinePopover type="apm"/>agente y <InlinePopover type="mobile"/>agente tienen límites en la cantidad de eventos que se pueden informar. Este documento explica:

* Por qué son necesarios límites a la notificación de eventos
* Cómo funciona el muestreo
* Cómo trabajar con datos muestreados y comprenderlos

## Diferencia entre evento y métrica [#events-metrics]

Este documento trata sobre los límites de los datos de eventos y cómo esos límites conducen al muestreo. En primer lugar, puede resultarle útil comprender las diferencias entre estos dos tipos de datos:

* <DNT>
    **Metrics**
  </DNT>

  : mediciones agregadas a lo largo del tiempo. Ejemplos: tiempo de respuesta promedio en un rango de tiempo de un minuto, rendimiento en el tiempo, utilización de la CPU en el tiempo.

* <DNT>
    **Events**
  </DNT>

  : evento discreto que sucede en un momento específico en el tiempo. Ejemplos: un log o error que se informa, o un cambio de configuración. Algunos eventos se agregan a lo largo del tiempo para formar una métrica (por ejemplo: un recuento de errores a lo largo del tiempo).

Estos dos tipos de datos tienen diferentes usos: los métricos son útiles para reconocer patrones a lo largo del tiempo en su sistema, e incluso son útiles para profundizar y obtener detalles sobre las causas de esos patrones. Debido a que las métricas se agregan a lo largo del tiempo, son útiles para detectar tendencias y cambios en el comportamiento del sistema. Para las métricas que representan un recuento agregado de eventos (como una métrica de tiempo de respuesta HTTP), el evento individual le brinda detalles granulares sobre lo que sucedió y le permite facetar por atributos que tienen una cardinalidad alta (como cuenta o ID de usuario).

## Por qué es necesario el muestreo del evento [#sampling]

Nuestro agente APM y agente móvil tienen límites sobre cuántos eventos se pueden reportar por [ciclo de recolección](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#harvest-cycle). Esto es necesario porque si no hubiera límite, una gran cantidad de eventos enviados podría tener impactos en el rendimiento de su aplicación o de New Relic. Cuando se alcanza el límite, el agente comienza a muestrear el evento. Diferentes agentes tienen diferentes límites, pero el objetivo es dar una muestra representativa de todo el ciclo de recolección.

Además, el agente puede realizar una muestra si no puede conectarse a New Relic. Cuando un agente no puede conectarse a New Relic, continúa almacenando datos localmente. Pero debe restringir el tamaño de la carga útil que finalmente se envía. Por este motivo, muestrea el evento durante el período de desconexión. Cuanto más tiempo esté desconectado, más muestras tomará.

## El impacto del muestreo [#impact]

Un resultado del muestreo es que puede haber una discrepancia entre [los datos métricos no muestreados](/docs/using-new-relic/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#overview) y los datos de eventos muestreados. Ejemplos de esto:

* Un gráfico APM que muestra datos métricos no muestreados puede mostrarle un mayor rendimiento que una consulta NRQL equivalente de datos de eventos muestreados. Para obtener más información sobre la diferencia entre nuestros datos de intervalo de tiempo de métrica y datos de eventos, consulte [Tipos de datos](/docs/using-new-relic/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data).
* Un servicio de monitoreo que no sea de New Relic puede mostrar resultados diferentes a los de New Relic.

Los eventos que están limitados y sujetos a muestreo incluyen:

* `Transaction`
* `TransactionError`
* `Span` (ver [muestreo de rastreo distribuido](/docs/apm/distributed-tracing/getting-started/how-new-relic-distributed-tracing-works#sampling))
* evento personalizado reportado a través de la API del agente (ejemplo: [RecordCustomEvent](/docs/agents/net-agent/net-agent-api/record-custom-event) del agente .NET)
* `Mobile`
* `MobileRequest`
* `MobileCrash`
* `MobileHandledException`

<Callout variant="important">
  Para APM, puede [compensar el muestreo](#compensate) al consultar datos.
</Callout>

## Cambiar cómo se produce el muestreo [#change]

Antes de intentar cambiar la forma en que se realiza el muestreo, lea estas advertencias y recomendaciones:

* Informar más eventos hará que el agente utilice más memoria.
* Generalmente habrá una manera de obtener los datos que necesita sin aumentar el límite de informes de eventos de un agente.
* El límite de tamaño de carga útil es 1 MB (10^6 bytes) (comprimido), por lo que el número de eventos aún puede verse afectado por ese límite. Para determinar si se están eliminando eventos, consulte el log del agente para ver un mensaje de estado HTTP 413.

A continuación se muestran algunas formas de influir en el muestreo:

* La mayoría de los agentes tienen opciones de configuración para cambiar el límite de transacciones muestreadas (ejemplos: [`max_samples_stored`del agente de Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ae-max_samples_stored) o [`setMaxEventPoolSize`del agente móvil de Android](/docs/mobile-monitoring/new-relic-mobile/mobile-sdk/set-max-event-pool-size/)).
* Si es importante para usted que no se muestree la actividad de una aplicación específica, puede usar la [API de eventos](/docs/insights/insights-data-sources/custom-data/send-custom-events-event-api).
* Podrías desplegar tu aplicación en un mayor número de instancias. Debido a que los límites son por agente, más agentes significarán una reserva de eventos más grande.

## APM: Compensar el muestreo [#compensate]

Al consultar un evento informado por APM, puede compensar el muestreo usando [`EXTRAPOLATE`](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#extrapolate). Esto le dará una aproximación de cómo se ven los datos sin muestrear.
