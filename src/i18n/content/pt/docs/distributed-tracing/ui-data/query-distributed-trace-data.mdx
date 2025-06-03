---
title: Consultar dados distributed trace
tags:
  - Understand dependencies
  - Distributed tracing
  - UI and data
metaDescription: How to query your New Relic distributed tracing data with NRQL or the NerdGraph GraphiQL explorer.
freshnessValidatedDate: never
translationType: machine
---

Você pode consultar seus dados [distributed tracing](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing) de diversas maneiras:

* A barra de pesquisa na parte superior da [interfacedistributed tracing](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data)
* [Consulta NRQL](#example-nrql-queries)
* [Explorador NerdGraph GraphiQL](/docs/apis/graphql-api/tutorials/query-distributed-trace-data-using-graphql-api)

Para saber mais sobre a estrutura trace , consulte [Como funciona distributed tracing ](/docs/understand-dependencies/distributed-tracing/get-started/how-new-relic-distributed-tracing-works).

## Exemplo de consulta NRQL

<Callout variant="tip">
  Você também pode criar consultas complexas na barra de pesquisa na parte superior da [interfacedistributed tracing ](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data).
</Callout>

Alguns exemplos de consulta NRQL:

<CollapserGroup>
  <Collapser
    id="percentile-datastore"
    title="Percentil de tempo do armazenamento de dados para um aplicativo"
  >
    ```sql
    SELECT percentile(duration, 50, 95) FROM Span WHERE category = 'datastore' 
    AND appName = 'YOUR_APP_NAME' SINCE 4 hours ago TIMESERIES 1 minute
    ```
  </Collapser>

  <Collapser
    id="database-query-by-host"
    title="Tempo de consulta do armazenamento de dados para um aplicativo, facetado por host"
  >
    ```sql
    SELECT average(duration) FROM Span WHERE appName = 'YOUR_APP_NAME' 
    AND category = 'datastore' FACET host TIMESERIES 1 minute
    ```
  </Collapser>

  <Collapser
    id="avg-duration-for-method-by-host"
    title="Duração média de um método de serviço, facetado por host"
  >
    ```sql
    SELECT average(duration) FROM Span WHERE appName = 'YOUR_APP_NAME'
    AND name = 'FUNCTION_NAME' FACET host TIMESERIES 1 minute
    ```
  </Collapser>

  <Collapser
    id="histogram-external-services-by-uri"
    title="Histograma de serviços externos chamados por um serviço, facetado por URI externo"
  >
    ```sql
    SELECT histogram(duration, 10, 60) FROM Span WHERE category = 'http'
    AND appName = 'YOUR_APP_NAME' FACET `http.url` SINCE 4 hours ago
    ```
  </Collapser>

  <Collapser
    id="avg-duration-external-all-apps"
    title="Duração média de chamadas externas em todos os aplicativos"
  >
    ```sql
    SELECT average(duration) FROM Span WHERE category = 'http'
    SINCE 4 hours ago FACET `http.url` TIMESERIES 1 minute
    ```
  </Collapser>
</CollapserGroup>

## Exemplo de consulta NerdGraph [#graphql-queries]

Você também pode usar [o NerdGraph](/docs/apis/graphql-api/get-started/introduction-new-relic-nerdgraph) para consultar seus dados trace usando a API. Para obter mais informações, consulte os [exemplos de consulta de dados distributed tracing do NerdGraph](/docs/apis/graphql-api/tutorials/query-distributed-trace-data-using-graphql-api).

## Não consegue encontrar dados? [#issues]

Está tendo problemas para encontrar dados durante a consulta? Veja [resolução de problemas: dados faltantes](/docs/apm/distributed-tracing/troubleshooting/troubleshooting-missing-trace-data).
