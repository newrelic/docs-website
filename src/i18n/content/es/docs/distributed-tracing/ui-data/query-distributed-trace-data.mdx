---
title: Consulta rastreo datos distribuidos
tags:
  - Understand dependencies
  - Distributed tracing
  - UI and data
metaDescription: How to query your New Relic distributed tracing data with NRQL or the NerdGraph GraphiQL explorer.
freshnessValidatedDate: never
translationType: machine
---

Puedes consultar los datos de tu [rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing) de varias formas:

* La barra de búsqueda en la parte superior de la [UIde rastreo distribuido](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data)
* [Consulta NRQL](#example-nrql-queries)
* [Explorador NerdGraph GraphiQL](/docs/apis/graphql-api/tutorials/query-distributed-trace-data-using-graphql-api)

Para conocer la estructura de traza, consulte [Cómo funciona rastreo distribución](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works).

## Ejemplo de consulta NRQL

<Callout variant="tip">
  También puedes crear consultas complejas en la barra de búsqueda en la parte superior de la [UIdel rastreo distribuido](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data).
</Callout>

Algunos ejemplos de consulta NRQL:

<CollapserGroup>
  <Collapser
    id="percentile-datastore"
    title="Percentil de tiempo de almacenamiento de datos para una aplicación"
  >
    ```sql
    SELECT percentile(duration, 50, 95) FROM Span WHERE category = 'datastore' 
    AND appName = 'YOUR_APP_NAME' SINCE 4 hours ago TIMESERIES 1 minute
    ```
  </Collapser>

  <Collapser
    id="database-query-by-host"
    title="Tiempo de consulta de almacenamiento de datos para una aplicación, facetado por host."
  >
    ```sql
    SELECT average(duration) FROM Span WHERE appName = 'YOUR_APP_NAME' 
    AND category = 'datastore' FACET host TIMESERIES 1 minute
    ```
  </Collapser>

  <Collapser
    id="avg-duration-for-method-by-host"
    title="Duración media de un método de servicio, facetada por anfitrión"
  >
    ```sql
    SELECT average(duration) FROM Span WHERE appName = 'YOUR_APP_NAME'
    AND name = 'FUNCTION_NAME' FACET host TIMESERIES 1 minute
    ```
  </Collapser>

  <Collapser
    id="histogram-external-services-by-uri"
    title="Histograma de servicios externos llamados por un servicio, facetado por URI externo"
  >
    ```sql
    SELECT histogram(duration, 10, 60) FROM Span WHERE category = 'http'
    AND appName = 'YOUR_APP_NAME' FACET `http.url` SINCE 4 hours ago
    ```
  </Collapser>

  <Collapser
    id="avg-duration-external-all-apps"
    title="Duración promedio de llamadas externas en todas las aplicaciones"
  >
    ```sql
    SELECT average(duration) FROM Span WHERE category = 'http'
    SINCE 4 hours ago FACET `http.url` TIMESERIES 1 minute
    ```
  </Collapser>
</CollapserGroup>

## Ejemplo de consulta NerdGraph [#graphql-queries]

También puedes utilizar [NerdGraph](/docs/apis/graphql-api/get-started/introduction-new-relic-nerdgraph) para consultar los datos de tu traza utilizando la API. Para obtener más información, consulte los [ejemplos de consulta de datos distribuidos de rastreo de NerdGraph](/docs/apis/graphql-api/tutorials/query-distributed-trace-data-using-graphql-api).

## ¿No encuentras datos? [#issues]

¿Tiene problemas para encontrar datos al realizar consultas? Ver [resolución de problemas: datos faltantes](/docs/apm/distributed-tracing/troubleshooting/troubleshooting-missing-trace-data).
