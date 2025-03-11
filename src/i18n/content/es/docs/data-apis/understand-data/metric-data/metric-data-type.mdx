---
title: Estructura de datos métrica
tags:
  - Ingest and manage data
  - Understand data
metaDescription: Details about the structure of the New Relic dimensional metric data type (the Metric data object).
freshnessValidatedDate: never
translationType: machine
---

La plataforma New Relic reporta cuatro [tipos principalestelemetry data ](/docs/telemetry-data-platform/ingest-manage-data/understand-data/new-relic-data-types): métrica, evento, log y traza.

Este documento le ayudará a comprender algunos detalles sobre la estructura de nuestro tipo de datos `Metric` . Este tipo de datos también se conoce como "dimensional métrica". Para obtener una explicación de alto nivel de este tipo de datos, consulte [Tipo de datos de métrica](/docs/data-apis/understand-data/new-relic-data-types/#metrics). Y para saber cómo consultar este tipo de datos, ver [consulta métrica](/docs/telemetry-data-platform/get-data/apis/query-metric-data-type).

Comprender mejor los detalles de la estructura `Metric` le ayudará a comprender lo que ve en New Relic y le ayudará a crear consultas y gráficos personalizados de sus datos. Cuanto más utilice las características avanzadas de New Relic, como informes métricos personalizados y creación de gráficos personalizados, más útil le resultará este conocimiento.

## Tipos métricos

La métrica `type` determina cómo se agregan los datos durante períodos de tiempo más largos y determina qué [campos](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-getfield) y funciones están disponibles para analizar y consultar.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Tipos métricos
      </th>

      <th style={{ width: "300px" }}>
        API compatibles
      </th>

      <th>
        Descripción
      </th>

      <th style={{ width: "150px" }}>
        Funciones de consulta disponibles
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `count`
      </td>

      <td>
        ✅ [New Relic métrica API](/docs/data-apis/ingest-apis/metric-api/report-metrics-metric-api)

        ❌ [New Relic a métrica](/docs/data-apis/convert-to-metrics/analyze-monitor-data-trends-metrics)

        ✅ [Escritura remota Prometheus](/docs/infrastructure/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic)

        ✅ [OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-metrics)
      </td>

      <td>
        Mide el número de ocurrencias de un evento. El recuento debe restablecerse a `0` cada vez que se informa la métrica. Los ejemplos incluyen el almacenamiento de caché por intervalo de informe y el número de subprocesos creados por intervalo de informe.

        Debe especificar un valor para `interval.ms` al informar el tipo de métrica `count` utilizando la [API de métrica](/docs/telemetry-data-platform/get-data/apis/introduction-metric-api).

        El valor debe ser un doble positivo.

        Generalmente, desea tomar la tasa de la suma:

        `From Metric select rate(sum(myMetric), 1 minute`). . .
      </td>

      <td>
        * [sum](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions#func-sum)
      </td>
    </tr>

    <tr>
      <td>
        `cumulativeCount`
      </td>

      <td>
        ❌ [New Relic métrica API](/docs/data-apis/ingest-apis/metric-api/report-metrics-metric-api)

        ❌ [New Relic a métrica](/docs/data-apis/convert-to-metrics/analyze-monitor-data-trends-metrics)

        ✅ [Escritura remota Prometheus](/docs/infrastructure/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic)

        ✅ [OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-metrics)
      </td>

      <td>
        Equivale al tipo `count` descrito anteriormente, pero además da acceso a campos métricos acumulativos. Para más información sobre esto, consulte [Métrica acumulativa](/docs/data-apis/understand-data/metric-data/cumulative-metrics). <Callout variant="important">Este tipo es ligeramente más grande que un `count` típico y, por lo tanto, se puede agregar a [la ingesta de datos](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing).</Callout>
      </td>

      <td>
        * [sum](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions#func-sum)
      </td>
    </tr>

    <tr>
      <td>
        `distribution`
      </td>

      <td>
        ❌ [New Relic métrica API](/docs/data-apis/ingest-apis/metric-api/report-metrics-metric-api)

        ✅ [New Relic a métrica](/docs/data-apis/convert-to-metrics/analyze-monitor-data-trends-metrics) (solo delta)

        ✅ [Escritura remota Prometheus](/docs/infrastructure/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic)

        ✅ [OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-metrics)
      </td>

      <td>
        Realiza un seguimiento de la distribución estadística de un atributo numérico. Esta métrica es reagregable. Por ejemplo, los puntos de datos de 1 minuto de 60 minutos se pueden agregar en un punto de datos de 1 hora, sin degradación de la precisión.

        Este tipo:

        * Admite funciones estadísticas como percentil e histograma, y todas las funciones admitidas por el tipo de resumen.
        * Utiliza el mismo algoritmo que la función percentil.
      </td>

      <td>
        * percentil
        * histogram
        * mín.
        * máx.
        * sum
        * count
        * promedio
      </td>
    </tr>

    <tr>
      <td>
        `gauge`
      </td>

      <td>
        ✅ [New Relic métrica API](/docs/data-apis/ingest-apis/metric-api/report-metrics-metric-api)

        ❌ [New Relic a métrica](/docs/data-apis/convert-to-metrics/analyze-monitor-data-trends-metrics)

        ✅ [Escritura remota Prometheus](/docs/infrastructure/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic)

        ✅ [OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-metrics)
      </td>

      <td>
        Representa un valor que puede aumentar o disminuir con el tiempo. Ejemplos de medidor incluyen la temperatura, el uso de la CPU y la memoria.

        Por ejemplo, siempre hay una temperatura, pero periódicamente se toma la temperatura y se informa sobre ella.

        El valor debe encajar en el rango de un doble de Java.
      </td>

      <td>
        * el último
        * mín.
        * máx.
        * sum
        * count
        * promedio
      </td>
    </tr>

    <tr>
      <td>
        `summary`
      </td>

      <td>
        ✅ [New Relic métrica API](/docs/data-apis/ingest-apis/metric-api/report-metrics-metric-api)

        ✅ [New Relic a métrica](/docs/data-apis/convert-to-metrics/analyze-monitor-data-trends-metrics)

        ✅ [Escritura remota Prometheus](/docs/infrastructure/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic)

        ✅ [OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-metrics) (legacy)
      </td>

      <td>
        Se utiliza para informar datos preagregados o información sobre eventos discretos agregados. Un resumen incluye un valor `count`, `sum` , `min` y `max` . El valor `count` debe ser positivo. Los ejemplos incluyen el recuento/duración de transacciones y el recuento/duración de colas.

        Debe especificar un valor para `interval.ms` al informar el tipo de métrica `summary` utilizando la [API de métrica](/docs/telemetry-data-platform/get-data/apis/introduction-metric-api).
      </td>

      <td>
        * mín.
        * máx.
        * sum
        * count
        * promedio
      </td>
    </tr>

    <tr>
      <td>
        `uniqueCount`
      </td>

      <td>
        ❌ [New Relic métrica API](/docs/data-apis/ingest-apis/metric-api/report-metrics-metric-api)

        ✅ [New Relic a métrica](/docs/data-apis/convert-to-metrics/analyze-monitor-data-trends-metrics)

        ❌ [Escritura remota Prometheus](/docs/infrastructure/prometheus-integrations/get-started/send-prometheus-metric-data-new-relic)

        ❌ [OpenTelemetry](/docs/more-integrations/open-source-telemetry-integrations/opentelemetry/best-practices/opentelemetry-best-practices-metrics) (legacy)
      </td>

      <td>
        Realiza un seguimiento del número de valor único en una cadena o atributo numérico. Esta métrica es reagregable. Por ejemplo, los puntos de datos de 1 minuto de 60 minutos se pueden agregar en un punto de datos de 1 hora, sin degradación de la precisión.

        Este tipo se genera únicamente a través del [servicio evento-to-métrica](/docs/accounts/accounts/data-management/introduction-events-metrics-service).
      </td>

      <td>
        * [uniqueCount](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions#func-uniqueCount)
      </td>
    </tr>
  </tbody>
</table>
