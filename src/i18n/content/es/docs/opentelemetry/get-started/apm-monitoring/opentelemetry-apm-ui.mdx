---
title: OpenTelemetry APM UI
tags:
  - Integrations
  - Open source telemetry integrations
  - OpenTelemetry
metaDescription: The OpenTelemetry APM UI provides tools for identifying and diagnosing problems with services monitoring with OpenTelemetry.
freshnessValidatedDate: '2024-05-17T00:00:00.000Z'
translationType: machine
---

La OpenTelemetry APM UI es una experiencia seleccionada disponible para [la entidad de servicio](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services). Si no configuró su servicio con New Relic y OpenTelemetry, consulte [MonitoreoOpenTelemetry APM ](/docs/opentelemetry/get-started/apm-monitoring/opentelemetry-apm-intro/).

Las OpenTelemetry APM UI páginas están diseñadas para ayudar a identificar y diagnosticar problemas rápidamente. Muchos requieren que los datos se ajusten a varias [convenciones semánticas de OpenTelemetry](https://opentelemetry.io/docs/specs/semconv/), pero algunos son de propósito general.

Los siguientes conceptos de New Relic se repiten o se superponen en todas las páginas:

* [Señales doradas](#golden-signals)
* [Limitar datos con filtros](#narrow-with-filters)
* [Alternar métrica o tramos](#metrics-spans-toggle)

## Encuentre servicios OpenTelemetry APM [#find-apm-services]

Para encontrar los OpenTelemetry APM servicios , navegue a **All entities &gt; Services &gt; OpenTelemetry** o **APM &amp; Services**. Haga clic en un servicio para navegar a la [Summary page](#summary-page) del servicio.

Dentro del explorador de entidades, puedes filtrar por [etiqueta de entidad](/docs/new-relic-solutions/new-relic-one/core-concepts/use-tags-help-organize-find-your-data/). Para obtener detalles sobre cómo se calculan las etiquetas de entidad, consulte [los recursosOpenTelemetry en New Relic](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources).

## Página: Resumen [#summary-page]

La página de resumen proporciona una descripción general del estado de su servicio, que incluye:

* **Golden signals**: tiempo de respuesta, rendimiento y tasa de errores. Consulte [Golden signals](#golden-signals) para obtener detalles sobre cómo se calculan.
* **Entidad relacionada**: otros servicios que se comunican con este servicio e infraestructura relacionada. Consulte [el Service map](#service-map-page) para obtener una vista detallada.
* **Actividad**: estado de cualquier alerta activa para este servicio.
* **rastreo distribuido información valiosa**: descubra si la entidad downstream o upstream podría estar contribuyendo a la degradación del rendimiento. Consulte [Señales de entidad traza relacionadas](/docs/distributed-tracing/ui-data/related-trace-entity-signals/) para obtener más detalles.
* **Instancia**: desglose de señales doradas por instancia cuando un servicio se escala horizontalmente. Depende del atributo de recurso `service.instance.id` (consulte [Servicios](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services) para obtener más detalles).

## Página: rastreo distribuido [#distributed-tracing-page]

La página de rastreo distribuido proporciona información detallada y valiosa sobre los datos de traza OpenTelemetry . Consulte [rastreo distribuido](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/) para obtener información sobre el uso de la página. Consulte [OpenTelemetry traza en New Relic](/docs/opentelemetry/best-practices/opentelemetry-best-practices-traces) para obtener detalles sobre cómo se incorporan los datos de OpenTelemetry traza en New Relic.

Al igual que con [las señales doradas](#golden-signals), los intervalos se clasifican como errores si el estado del intervalo se establece en `ERROR` (por ejemplo, `otel.status_code = ERROR`). Si el intervalo es un error, la descripción del estado del intervalo (por ejemplo, `otel.status_description`) se muestra en **los detalles del error**.

OpenTelemetry span evento adjunta información de contexto de evento adicional a un lapso particular. Se emplean más comúnmente para capturar información de excepciones. Si está disponible, puede ver el evento de un lapso en **trace details**.

<Callout variant="tip">
  La presencia de un evento de excepción de lapso no califica el lapso como un error por sí solo. Sólo los intervalos con estado de intervalo establecido en `ERROR` se clasifican como errores.
</Callout>

<img title="Screenshot showing the right pane showing the two links for span events" alt="Screenshot showing the right pane showing the two links for span events" src="/images/opentelemetry_screenshot-crop_view-span-events.webp" />

## Página: Mapa de servicios [#service-map-page]

La página del mapa de servicio proporciona una representación visual de toda su arquitectura. Consulte [los mapas de servicio](/docs/new-relic-solutions/new-relic-one/ui-data/service-maps/service-maps/) para obtener más información.

## Página: transacción [#transactions-page]

La página de transacciones proporciona herramientas para identificar problemas y analizar [la transacción](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm/#txn-defined) de un servicio.

Para métrica, la consulta asume que los datos se ajustan a las convenciones semánticas [HTTP métrica](https://opentelemetry.io/docs/specs/semconv/http/http-metrics/) o [RPC métrica](https://opentelemetry.io/docs/specs/semconv/rpc/rpc-metrics/) . Los atributos `http.route` y `rpc.method` se emplean para listar y filtrar por transacción.

Para los tramos, las consultas son genéricas y emplean solo el modelo de datos de tramo de nivel superior. Los lapsos se cuentan para el rendimiento de la transacción y el tiempo de respuesta como se describe en [señales doradas](#golden-signals). El campo de nombre de intervalo se emplea para enumerar y filtrar por transacción.

## Página: base de datos [#databases-page]

La página de base de datos proporciona herramientas para identificar problemas y analizar las operaciones del cliente de base de datos de un servicio.

No existe una vista basada en métricas de la base de datos ya que actualmente no hay convenciones semánticas disponibles.

Para los intervalos, la consulta asume que los datos se ajustan a las convenciones semánticas [de intervalo de la base de datos](https://opentelemetry.io/docs/specs/semconv/database/database-spans/) . El nombre del intervalo y los atributos `db.system`, `db.sql.table` y `db.operation` se emplean para enumerar y filtrar operaciones de base de datos.

## Página: Servicios externos [#externals-page]

La página de externos proporciona herramientas para identificar problemas y analizar las llamadas externas de un servicio, incluidas las llamadas de entidad (servicios ascendentes) y las llamadas de entidad (servicios descendentes).

No existe una vista basada en métricas de la página de servicios externos.

Para los tramos, las consultas son genéricas y emplean solo el modelo de datos de tramo de nivel superior. Los intervalos se cuentan para el rendimiento del servicio externo y el tiempo de respuesta si están saliendo de un servicio, se calcula empleando una heurística de `WHERE span.kind = client OR span.kind = producer`. La base de datos abarcada por el cliente se filtra usando `WHERE db.system is null` (consulte [Página: base de datos](#databases-page)). Al igual que con [las señales doradas](#golden-signals), los intervalos son errores si tienen un código de estado de `ERROR` (por ejemplo, `otel.status_code = ERROR`). Si están disponibles, se emplean datos de las convenciones semánticas [HTTP span](https://opentelemetry.io/docs/specs/semconv/http/http-spans/) y [RPC span](https://opentelemetry.io/docs/specs/semconv/rpc/rpc-spans/) para clasificar las llamadas de servicios externos.

## Página: tiempo de ejecución de JVM [#jvm-runtime-page]

La página de tiempo de ejecución de JVM proporciona herramientas para identificar problemas y analizar la JVM de un servicio Java. La página solo se muestra para servicios que emplean [OpenTelemetry java](https://opentelemetry.io/docs/languages/java/). Para diferenciar entre distintas instancias de servicio, la página requiere que se configure el atributo de recurso `service.instance.id` (ver [Servicios](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services) para obtener más detalles).

La página de tiempo de ejecución JVM muestra señales doradas junto con el tiempo de ejecución de JVM métrica para correlacionar los problemas de tiempo de ejecución con el uso del servicio. El [interruptor métrica o spans](#metrics-spans-toggle) determina si las [señales doradas](#golden-signals) son impulsadas por datos span o métricas. No existe una vista basada en intervalos para el tiempo de ejecución métrica JVM .

Para métrica, la consulta asume que los datos se ajustan a las convenciones semánticas [de métricaJVM ](https://opentelemetry.io/docs/specs/semconv/runtime/jvm-metrics/). Tenga en cuenta que estas convenciones están incorporadas en [la biblioteca de instrumentación de ejecución de JavaOpenTelemetry ](https://github.com/open-telemetry/opentelemetry-java-instrumentation/tree/main/instrumentation/runtime-telemetry/runtime-telemetry-java8/library), que se incluye automáticamente con el agente de Java de OpenTelemetry .

## Página: Ir al tiempo de ejecución [#go-runtime-page]

La página de tiempo de ejecución de Go proporciona herramientas para identificar problemas y analizar el tiempo de ejecución de un servicio Go. La página solo se muestra para servicios que emplean [OpenTelemetry Go](https://opentelemetry.io/docs/languages/go/). Para diferenciar entre distintas instancias de servicio, la página requiere que se configure el atributo de recurso `service.instance.id` (ver [Servicios](/docs/opentelemetry/best-practices/opentelemetry-best-practices-resources/#services) para obtener más detalles).

La página de tiempo de ejecución de Go muestra señales doradas junto con el tiempo de ejecución de Go métrico para correlacionar los problemas de tiempo de ejecución con el uso del servicio. El [interruptor métrica o spans](#metrics-spans-toggle) determina si las [señales doradas](#golden-signals) son impulsadas por datos span o métricas. No existe una vista basada en intervalos para el tiempo de ejecución de Go métrica.

Para métrica, la consulta asume que los datos son producidos por la [biblioteca de instrumentación en tiempo de ejecución OpenTelemetry Go](https://github.com/open-telemetry/opentelemetry-go-contrib/tree/main/instrumentation/runtime). Tenga en cuenta que actualmente no existen convenciones semánticas para Go runtime métrica.

## Página: logs [#logs-page]

La página de Logs proporciona herramientas para identificar problemas y analizar el log de un servicio. Consulte [Usar UI de log](/docs/logs/ui-data/use-logs-ui/) para obtener más información.

## Página: Errors Inbox [#errors-inbox-page]

La página Bandeja de entrada de errores proporciona herramientas para detectar y clasificar los errores de un servicio. Consulte [Primeros pasos con la Bandeja de entrada de errores](/docs/errors-inbox/getting-started/) para obtener más detalles.

La página errors inbox está controlada por detalles de traza. Al igual que con [las señales doradas](#golden-signals), los intervalos se clasifican como errores si el estado del intervalo se establece en `ERROR` (por ejemplo, `otel.status_code = ERROR`).

Los intervalos de error se agrupan por su huella digital de error, y se calculan normalizando valores de identificación como UUID, valores hexadecimales, direcciones de email, etc. Cada intervalo de error distinto es una instancia individual dentro del grupo de errores. El mensaje del grupo de errores se determina de la siguiente manera:

* Descripción del estado del intervalo (por ejemplo, `otel.status_description`)
* `rpc.grpc.status_code` De las convenciones semánticas de [RPC](https://opentelemetry.io/docs/specs/semconv/rpc/rpc-spans/)
* `http.status_code` De las convenciones semánticas de [HTTP](https://opentelemetry.io/docs/specs/semconv/http/http-spans/)
* `http.response.status_code` De las convenciones semánticas de [HTTP](https://opentelemetry.io/docs/specs/semconv/http/http-spans/)
* `undefined` si ninguno de los anteriores está presente

## Página: explorador métrica [#metrics-explorer-page]

El explorador métrico proporciona herramientas para explorar la métrica de un servicio de manera genérica. Consulte [Explorar sus datos](/docs/query-your-data/explore-query-data/browse-data/introduction-data-explorer/#explore-data) para obtener más información.

## Señales doradas [#golden-signals]

Las señales doradas de rendimiento, tiempo de respuesta y tasa de errores aparecen en varios lugares de la OpenTelemetry APM UI. Cuando se emplean, se calculan de la siguiente manera:

Para métrica, la consulta asume que los datos se ajustan a las convenciones semánticas [HTTP métrica](https://opentelemetry.io/docs/specs/semconv/http/http-metrics/) o [RPC métrica](https://opentelemetry.io/docs/specs/semconv/rpc/rpc-metrics/) .

Para los tramos, las consultas son genéricas y emplean únicamente el modelo de datos de tramos de nivel superior. Los intervalos se cuentan para el rendimiento y el tiempo de respuesta si son intervalos de entrada raíz en un servicio, se calculan empleando una heurística de `WHERE span.kind = server OR span.kind = consumer`. Los intervalos son errores si tienen un código de estado de `ERROR` (por ejemplo, `otel.status_code = ERROR`).

## Limitar datos con filtros [#narrow-with-filters]

Varias páginas incluyen una barra de filtros, con opciones como **Restringir datos a...**. Esto le permite filtrar consultas en la página para que coincidan con los criterios. Por ejemplo, puede restringir el despliegue a un canario en individuo filtrando por `service.version='1.2.3-canary'`. Los filtros se conservan al navegar entre páginas.

## Alternar métrica o tramos [#metrics-spans-toggle]

Varias páginas incluyen un interruptor métrico o de extensión. Esto le permite elegir si las consultas se basan en datos métricos o span según los requisitos de análisis y la disponibilidad de datos.

Las métricas no están sujetas a ejemplificación y, por lo tanto, son más precisas, especialmente cuando se calculan tasas como el rendimiento. Sin embargo, las métricas están sujetas a restricciones de cardinalidad y pueden carecer de ciertos atributos importantes para el análisis. Por el contrario, los tramos están muestreados y, por lo tanto, están sujetos a problemas de precisión, pero tienen atributos más ricos ya que no están sujetos a restricciones de cardinalidad.

Históricamente, OpenTelemetry API y SDK del lenguaje y la instrumentación priorizaron la instrumentación de traza. Sin embargo, el proyecto recorrió un largo camino y Métrica está disponible en casi todos los idiomas. Consulte la [documentación](https://opentelemetry.io/docs/languages/) del lenguaje y la instrumentación relevantes para obtener más detalles.

## Métricas doradas

Las métricas doradas son versiones de baja cardinalidad de datos de señales doradas, como HTTP/RPC métrica. Pueblan varias experiencias de plataforma, incluida la entidad Explorer, la página de actividad de carga de trabajo y la página de detalles de seguimiento de cambios. Estas métricas emplean nombres como `newrelic.goldenmetrics.ext.service.*`.

<Callout variant="important">
  Históricamente, las métricas doradas OpenTelemetry se calculaban a partir de tramos. Los intervalos suelen ser muestreados, por lo que solo proporcionan una imagen parcial. Ahora que las métricas están ampliamente disponibles, las métricas doradas se calculan empleando datos métricos en lugar de datos de intervalo.
</Callout>