---
title: 'Tutorial de NerdGraph: Ejecute la consulta NRQL de forma asincrónica'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph to make asynchronous NRQL queries that have longer query duration limits.
freshnessValidatedDate: never
translationType: machine
---

Puede [utilizar NerdGraph para ejecutar NRQL consulta](/docs/apis/nerdgraph/examples/nerdgraph-nrql-tutorial). Además, también puedes utilizar NerdGraph para ejecutar una consulta NRQL asincrónica. Las consultas asincrónicas se ejecutan en segundo plano y puede realizar solicitudes de seguimiento para recuperar los resultados de la consulta o el estado de la consulta. Este tipo de consulta evita que una consulta se vea interrumpida por problemas como tiempos de espera browser o tiempos de espera de la conexión HTTP. Es especialmente útil para ejecutar consultas que pueden tardar mucho en completarse.

## Requisitos [#requirements]

Si tiene [Data Plus](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing#data-plus), puede ejecutar una consulta asincrónica con una duración máxima de 10 minutos utilizando NerdGraph o la UI de usuario del generador de consultas.

Para obtener más información sobre los límites de consulta, consulte [límites de consulta](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/#query-duration).

## Ejemplo de consulta asincrónica [#example]

A continuación se muestra un ejemplo de una consulta asincrónica llamada NerdGraph. El `async: true` es lo que hace que la consulta sea asincrónica. Esta consulta arrojará resultados si se completa dentro del tiempo de espera predeterminado de 5 segundos; de lo contrario, devolverá datos `queryProgress` para su uso en consultas de seguimiento al campo `nrqlQueryProgress` .

```graphql
{
  actor {
    account(id: YOUR_ACCOUNT_ID) {
      nrql(query: "SELECT * FROM Transaction", async: true) {
        results
        queryProgress {
          queryId
          completed
          retryAfter
          retryDeadline
          resultExpiration
        }
      }
    }
  }
}
```

## Obtener los resultados o el estado de una consulta asíncrona [#example-query-results]

Si su consulta excede el tiempo de espera predeterminado, devolverá un ID de consulta. Puede tomar esa identificación y ejecutar una segunda consulta para obtener los resultados de la consulta, si finalizó, o el estado de esa consulta.

```graphql
{
  actor {
    account(id: YOUR_ACCOUNT_ID) {
      nrqlQueryProgress(queryId: "YOUR_QUERY_ID") {
        results
        queryProgress {
          queryId
          completed
          retryAfter
          retryDeadline
          resultExpiration
        }
      }
    }
  }
}
```

Algunos detalles importantes sobre esta consulta:

* El `queryId` proviene de los datos `queryProgress` devueltos por la consulta asincrónica original.
* El argumento `account` debe coincidir con el argumento `account` de la consulta original.
* Esta consulta devolverá resultados si se ha completado la ejecución asincrónica; de lo contrario, devolverá `queryProgress` datos.
* La consulta se puede repetir palabra por palabra hasta que se devuelvan resultados o un error.
