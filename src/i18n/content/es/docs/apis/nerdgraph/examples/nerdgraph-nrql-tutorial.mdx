---
title: 'Tutorial de NerdGraph: consulta tus datos usando NRQL'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: Use New Relic NerdGraph to query data using New Relic Query Language (NRQL).
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar nuestra API NerdGraph para realizar consultas [NRQL](/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql) .

## Descripción general de las consultas con NerdGraph [#overview]

Puede ejecutar NRQL consulta utilizando el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) en la UI o puede utilizar nuestra API NerdGraph. NerdGraph le brinda la posibilidad de hacer algunas cosas que no puede hacer desde la UI, como [consultar entre varias cuentas](#cross-account-query) y ejecutar [una consulta asincrónica](/docs/apis/nerdgraph/examples/async-queries-nrql-tutorial).

## Requisitos [#requirements]

* Todo [tipo de usuario](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type) puede consultar los datos de las cuentas a las que tiene acceso. Si no puedes realizar la consulta a través de NerdGraph, puede deberse a que no tienes [acceso a esa cuenta](/docs/accounts/accounts-billing/new-relic-one-user-management/user-management-concepts/#understand-concepts).
* Todas las consultas están sujetas a [los límites de consulta de NRQL.](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries)

## Consulta básica de NRQL con NerdGraph [#basic-queries]

Para realizar una consulta básica de NRQL utilizando NerdGraph, existen dos requisitos principales:

* Debe pasar la consulta NRQL como argumento de cadena al objeto NRQL
* Debes incluir el campo `results` en tu consulta

Por ejemplo, para obtener un recuento de todos [los eventos de transacciones](/docs/insights/insights-data-sources/default-data/apm-default-event-attributes-insights#transaction-event) en la última hora, ejecutaría la siguiente consulta, especificando su [ID de cuenta New Relic](/docs/accounts/accounts-billing/account-structure/account-id).

```graphql
{
   actor {
      account(id: YOUR_ACCOUNT_ID) {
         nrql(query: "SELECT count(*) FROM Transaction SINCE 1 HOUR AGO") {
            results
         }
      }
   }
}
```

Este ejemplo de consulta devolvería un resultado como este:

```graphql
{
   "data": {
      "actor": {
         "account": {
            "nrql": {
               "results": [
                 {
                  "count": 1000
                 }
                ]
            }
         }
      }
   }
}
```

¿Busca detalles sobre cómo redactar una consulta NRQL? Consulte [la sección de documentos NRQL](/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql).

## Consulta entre cuentas [#cross-account-query]

Con NerdGraph, puedes ejecutar una consulta en más de una cuenta, lo que no puedes hacer en el generador de consultas. Necesitará los [ID de las cuentas](/docs/accounts/accounts-billing/account-structure/account-id) que desea consultar.

A continuación se muestra un ejemplo de ejecución de una consulta NRQL entre cuentas:

```graphql
{ 
   actor {
      nrql(accounts: [ACCOUNT_ID_1, ACCOUNT_ID_2, ACCOUNT_ID_3], 
      options: {}, 
      query: "YOUR_NRQL_QUERY", 
      timeout: 70) 
         {   results}  
   }  
}
```

Para saber cómo crear un dashboard con datos de varias cuentas, consulte [el tutorial dashboard NerdGraph](/docs/apis/nerdgraph/examples/nerdgraph-dashboards#cross-account).

## Crear gráficos integrables [#embeddable-charts]

Además de devolver datos sin procesar, puede obtener enlaces de gráficos integrables para que los datos se utilicen en una aplicación. Por ejemplo, en lugar de un único recuento de [transacciones](/docs/insights/insights-data-sources/default-data/apm-default-event-attributes-insights#transaction-event), puede crear un [gráfico](/docs/insights/use-insights-ui/manage-dashboards/chart-types#widget-types) que ilustre una serie temporal de recuentos agrupados a lo largo del tiempo. Agregue `TIMESERIES` a su consulta con `embeddedChartUrl`:

```graphql
{
   actor {
      account(id: YOUR_ACCOUNT_ID) {
         nrql(query: "SELECT count(*) from Transaction TIMESERIES") {
            embeddedChartUrl
         }
      }
   }
}
```

Este ejemplo de consulta de NerdGraph devuelve la URL del gráfico en la siguiente respuesta:

```graphql
{
   "data": {
      "actor": {
         "account": {
            "nrql": {
               "embeddedChartUrl": "https://chart-embed.service.newrelic.com/charts/EMBEDDABLE-CHART-ID"
            }
         }
      }
   }
}
```

Si ve la URL del gráfico incrustado utilizando cualquier cliente HTTP estándar, devuelve una imagen que muestra una visualización de la respuesta a la consulta que envió. Estos gráficos siguen las mismas [reglas de gráficos integrados](/docs/using-new-relic/user-interface-functions/share-your-data/embed-charts-external-webpages#rules) que los gráficos integrados que se crean en otros lugares. Para cambiar el estilo de la visualización de datos, pase un argumento `chartType` a `embeddedChartUrl`.

## Facetas sugeridas [#suggest-facets]

Cuando utilice NerdGraph para explorar sus datos, puede utilizar el campo `suggestedFacets` para devolver el atributo sugerido para usar en [la consulta NRQL facetada](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-facet).

<CollapserGroup>
  <Collapser
    id="suggested-facet-rules"
    title="Reglas que rigen las facetas sugeridas"
  >
    Estas son algunas de las reglas que rigen qué atributo se sugiere:

    * <DNT>**Built-in suggestions.**</DNT> Cada [tipo de evento](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#event) viene con su propio conjunto de atributos recomendados. Estos son atributos elegidos por New Relic por su importancia y popularidad.

    * <DNT>**Usage-based suggestions.**</DNT> Algunas sugerencias de atributos se basan en la consulta que su cuenta ha utilizado con frecuencia. Estas sugerencias pueden incluir un atributo personalizado.

    * <DNT>**Role restriction.**</DNT> [El usuario restringido](/docs/accounts/accounts/roles-permissions/users-roles) no tiene acceso a sugerencias de facetas relacionadas con la cuenta.

      Para deshabilitar el uso de datos de la cuenta para determinar la consulta sugerida, [comuníquese con Soporte](/docs/using-new-relic/welcome-new-relic/getting-started/find-help-or-file-support-ticket#support_tickets).
  </Collapser>
</CollapserGroup>

<CollapserGroup>
  <Collapser
    id="example-suggested-query"
    title="Ejemplo de devolución de atributo sugerido"
  >
    A continuación se muestra un ejemplo de devolución del atributo sugerido para facetar recuentos [de transacciones](/docs/insights/insights-data-sources/default-data/apm-default-event-attributes-insights#transaction-event) . La respuesta sugiere el atributo `host` . El facetado por `host` puede revelar que un host atiende más solicitudes que otros hosts.

    ```graphql
    {
       actor {
          account(id: YOUR_ACCOUNT_ID) {
             nrql(query: "<a href="/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#state-select">SELECT</a> count(*) from <a href="https://docs.newrelic.com/docs/insights/insights-data-sources/default-data/apm-default-event-attributes-insights#transaction-event">Transaction</a> <a href="/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-timeseries">TIMESERIES</a>") {
                suggestedFacets {
                   attributes
                }
             }
          }
       }
    }
    ```

    Este ejemplo de consulta de NerdGraph devuelve una respuesta similar a esta:

    ```graphql
    {
       "data": {
          "actor": {
             "account": {
                "nrql": {
                   "suggestedFacets": [
           	          "attributes": ["host"]
                   ]
                }
             }
          }
       }
    }
    ```
  </Collapser>
</CollapserGroup>

## Consulta de mayor duración [#async]

Si necesita ejecutar una consulta NRQL de mayor duración, consulte [una consulta asincrónica](/docs/apis/nerdgraph/examples/async-queries-nrql-tutorial).

## Otras opciones de consulta [#other-options]

NerdGraph le ofrece otras opciones de consulta, como:

* [Consulta asincrónica](/docs/apis/nerdgraph/examples/async-queries-nrql-tutorial)
* [Exportación de datos históricos](/docs/apis/nerdgraph/examples/nerdgraph-historical-data-export)
* [Crear panel](/docs/apis/nerdgraph/examples/create-widgets-dashboards-api)
