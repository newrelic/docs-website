---
title: Métrica acumulada (OTel y Prometheus)
tags:
  - Integrations
  - Open source telemetry integrations
  - OpenTelemetry
metaDescription: How New Relic handles cumulative metrics from OpenTelemetry and Prometheus.
freshnessValidatedDate: never
translationType: machine
---

año constante de exportación = 2023; export const gaDate = '4 de abril'; exportar const gaDateAndYear = gaDate + ', ' + año;

Si informa métricas acumuladas de [nuestra integración OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/opentelemetry-introduction) o nuestra [integración de escritura remota Prometheus](/docs/infrastructure/prometheus-integrations/install-configure-remote-write/set-your-prometheus-remote-write-integration), le ayudará a comprender cómo New Relic maneja esos datos (por ejemplo, cómo los convertimos en mediciones delta). Esto le ayudará a comprender las vistas UI de New Relic, le ayudará a consultar sus datos y le ayudará a comprender los problemas relacionados con los informes de datos.

## Acumulado y delta métrica explicado [#explained]

Al recopilar datos métricos de una aplicación, es importante considerar _cómo_ se midieron esos datos al decidir cómo usarlos e interpretarlos en el momento de la consulta. El [tipo de métrica](/docs/data-apis/understand-data/metric-data/metric-data-type/#metric-types) es un factor importante, ya que ciertas funciones de agregación de New Relic funcionan con algunos tipos y no con otros. Pero otro factor importante es el <DNT>**temporality**</DNT> de la métrica.

Las dos temporalidades son <DNT>**delta**</DNT> y <DNT>**cumulative**</DNT>. `Delta` indica que las mediciones se restablecen entre intervalos de informes. `Cumulative` indica que no hay reinicio y las mediciones están acumuladas. Prometheus es un ejemplo común de un recopilador de métricas acumulativas ([documentos de Prometheus sobre tipos de datos](https://prometheus.io/docs/concepts/metric_types)), y OpenTelemetry también define formas de recopilar métricas acumulativas ([documentos de OpenTelemetry sobre temporalidad](https://opentelemetry.io/docs/reference/specification/metrics/data-model/#temporality)).

New Relic admite datos acumulativos de Prometheus y OpenTelemetry y realizará una conversión delta en la ingesta para alinearlos más con otras métricas en nuestra plataforma y facilitar la interacción con esos datos a través de [NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language). Los contadores acumulativos se almacenan como New Relic [`cumulativeCount`](/docs/data-apis/understand-data/metric-data/metric-data-type/#metric-types) y el histograma acumulativo se almacena como New Relic [`distribution`](/docs/data-apis/understand-data/metric-data/metric-data-type/#metric-types).

## Soporte de escritura remota de Prometheus [#prom-support]

Para obtener más información, consulte [Integración de escritura remota de Prometheus](/docs/infrastructure/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic).

## Soporte OpenTelemetry [#otel-support]

Para obtener más información sobre el soporte de OpenTelemetry, consulte [OpenTelemetry métrica: Mejores prácticas](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-metrics).

## Detalles de conversión acumulativa a delta [#delta-conversion]

En un nivel alto, la conversión delta se realiza tomando dos puntos de datos secuenciales en el tiempo del evento y calculando una diferencia. Sin embargo, en la práctica las cosas nunca son tan sencillas. A continuación se detallan algunos escenarios comunes que anticipamos y cómo los manejamos.

### Se reinicia [#resets]

Si los datos de una [serie temporal](https://opentelemetry.io/docs/reference/specification/metrics/data-model/#timeseries-model) disminuyen repentinamente de valor, lo tratamos como un reinicio y emitiremos esa nueva medición como su propio valor delta (en otras palabras, como si estuviera precedida por una medición `0` ).

[OpenTelemetry también define](https://opentelemetry.io/docs/reference/specification/metrics/data-model/#resets-and-gaps) situaciones en las que una disminución en el valor es inesperada, y hacemos todo lo posible para detectar estos casos y notificarle a través de [errores de integración de New Relic](/docs/data-apis/manage-data/nrintegrationerror) (consulte [la resolución de problemas](#troubleshooting) a continuación).

### Reordenar datos [#reorder-data]

Entendemos que muchas cosas pueden hacer que los puntos de datos lleguen desordenados a New Relic. Como tal, almacenaremos puntos de datos en buffer y los reordenaremos si detectamos una brecha inesperada en la serie temporal de informes. Las brechas se infieren a partir de un intervalo de presentación de informes esperado determinado por la velocidad a la que recibimos datos para una serie temporal determinada. El almacenamiento en búfer está limitado y eventualmente consideraremos un punto de datos "demasiado tarde para volver a secuenciarlo". En este caso, se calcula un delta a través de la brecha detectada y continúa el procesamiento de la serie temporal.

### Datos obsoletos [#stale-data]

Como la conversión delta es una operación con estado, debemos ser conscientes de las series temporales que pueden dejar de informar y eventualmente abandonar su estado. Si una serie temporal no ha informado ningún punto de datos nuevo para <DNT>**5 minutes**</DNT>, eliminaremos el estado que tenemos, incluido el cálculo de deltas en cualquier espacio almacenado en el búfer. Esto significa que si un punto de datos llega en un momento posterior, se tratará como si fuera el comienzo de esa serie temporal, perdiendo efectivamente el delta entre el último punto de datos antes de la descarga y el primer punto de datos después de la descarga. Esto significa que los intervalos de informes métricos deben ser inferiores a <DNT>**5 minutes**</DNT> para obtener el beneficio de la conversión delta.

### Nota especial sobre sumas acumuladas [#cumulative-sums]

Aunque los datos fueron registrados por su aplicación y enviados como una secuencia de valores crecientes monótonamente, llamar a `sum()` los tratará como si fueran una secuencia de valores delta; ¡No es necesario calcular ningún `derivative()`!

Al convertir una suma a un delta, New Relic también emitirá el valor acumulado junto con el delta para mantener la posibilidad de consultar el último valor acumulado. Para acceder al valor acumulado, puede usar [getField()](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-getfield) (consulte [Cómo consultar métrica](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-metrics/#query) para ver ejemplos).

Tenga en cuenta que los puntos de datos se trazan en su `timestamps` asociado, que es el comienzo de un intervalo. Sin embargo, los valores acumulativos están asociados con el `endTimestamp` del punto de datos, por lo que es posible que deba considerar el ancho de un punto de datos al interpretar la consulta acumulativa.

## Resolución de problemas [#troubleshooting]

En algunos casos, informaremos un [error de integración de New Relic](/docs/data-apis/manage-data/nrintegrationerror) como resultado del proceso de conversión acumulativo a delta. Aquí hay algunas razones comunes.

### Errores de traducción [#translation-errors]

La conversión delta implica la suposición de que dos puntos de datos secuenciales en el tiempo del evento tendrán valores acumulativos que aumentan monótonamente. El único momento en el que se espera que se rompa esta suposición es cuando se reinicia el proceso que se está monitoreando. Si la monotonicidad se rompe por cualquier otro motivo, seguiremos tratando esto como un reinicio, pero intentaremos notificarte generando un evento [de error de integración de New Relic](/docs/data-apis/manage-data/nrintegrationerror) en tu cuenta. Esto es posible hacer con los datos de OpenTelemetry <DNT>**but not Prometheus**</DNT>, porque OpenTelemetry incluye más información que se puede utilizar para detectar este tipo de situaciones. La causa más común de una interrupción inesperada de la monotonicidad es cuando la aplicación del lado del cliente alcanza límites de cardinalidad y elimina datos para aliviar la presión de la memoria. En ciertos casos, esto actúa como un reinicio inesperado y puede resultar en una disminución inesperada en los valores enviados a New Relic. Se recomienda que busque una instancia de esto en su registro OTLP:

```
Instrument % has exceeded the maximum allowed accumulations (2000)
```

El SDK de OpenTelemetry le permite [configurar sus límites de cardinalidad](https://opentelemetry.io/docs/specs/otel/metrics/sdk/#cardinality-limits). OpenTelemetry también proporciona una manera de reducir la cardinalidad del lado del cliente usando [<DNT>**Views**</DNT>](https://opentelemetry.io/docs/reference/specification/metrics/sdk/#view) y es la ruta recomendada para solucionar estos problemas. Otra opción es explorar la exportación de su [OTLP métrica usando la temporalidad Delta](https://opentelemetry.io/docs/reference/specification/metrics/sdk_exporters/otlp/#additional-configuration) , lo que puede ayudar a ahorrar memoria.

### Límites de cardinalidad [#card-limits]

Durante la traducción, también aplicamos de manera flexible límites de cardinalidad métrica que se basan en sus derechos métricos como protección del sistema. En lugar de imponer el límite [por día, como hacemos con los rollups](/docs/data-apis/ingest-apis/metric-api/metric-api-limits-restricted-attributes/#incident-unique-timeseries), este límite se aplica como el número de series temporales simultáneas de las que se realiza un seguimiento. Una vez que haya demasiadas [series temporales métricas únicas](/docs/data-apis/ingest-apis/metric-api/NRQL-high-cardinality-metrics/#what-why) concurrentes, eliminaremos nuevas series temporales entrantes hasta que una antigua caduque (consulte [Datos obsoletos](#stale-data)).

### Restablecimientos métricos acumulados [#cumulative-resets]

Los restablecimientos métricos acumulativos generalmente ocurren cuando se reinicia el servicio o la aplicación que los informa. Al consultar una métrica que se ha restablecido, puede parecer que el valor de la métrica ha disminuido; sin embargo, este es el comportamiento esperado como se describe en la [especificación de métrica de OpenTelemetry](https://opentelemetry.io/docs/reference/specification/metrics/data-model/#resets-and-gaps). Para diferenciar entre restablecimientos de métricas normales y una métrica problemática que <DNT>**is**</DNT> disminuye inesperadamente, revisa tu cuenta para ver si hay [errores de integración de New Relic](/docs/data-apis/manage-data/nrintegrationerror). Si no se informan errores de integración en relación con métricas con valores decrecientes, es probable que su aplicación que informa la métrica acumulada se esté reiniciando y restableciendo el valor de métrica.
