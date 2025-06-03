---
title: Utilice búsquedas para consultar datos de tablas
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'In New Relic, how to query data added via CSV lookup tables.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

Cuando [carga una tabla de búsquedas en formato CSV](/docs/logs/ui-data/lookup-tables-ui), puede usar la función `lookup()` para acceder a esos datos en su consulta NRQL. Puede utilizar la tabla de búsquedas para ayudarle a analizar telemetry data y personalizar sus agrupaciones de datos.

## Sintaxis de consulta básica [#basic-syntax]

La siguiente consulta de búsqueda muestra la sintaxis básica de esta función usando una tabla llamada `storeNames` y seleccionando todos los datos de esa tabla:

```sql
FROM lookup(storeNames)
SELECT *
```

Esta consulta selecciona un atributo específico de esa misma tabla:

```sql
FROM lookup(storeNames)
SELECT store_ID, store_name, description
```

## Límites de consulta [#query-limits]

La tabla de búsquedas admite un [`LIMIT`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit) más alto al realizar consultas que otros tipos de datos NRQL. Puede establecer un `LIMIT` de hasta 20 000 cuando utiliza una tabla de búsquedas dentro de una consulta, [subconsulta](/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql/) y [agregación anidada](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query/).

<Callout variant="tip">
  Cuando utiliza una tabla de búsquedas dentro de una subconsulta, la consulta externa `LIMIT` está sujeta al valor máximo estándar a menos que también utilice una tabla de búsquedas.
</Callout>

## Limitaciones técnicas [#limitations]

* No puede utilizar datos de búsqueda con la condición de alerta NRQL.

* Solo puedes consultar la tabla de búsquedas desde la [cuenta](/docs/accounts/accounts-billing/account-structure/new-relic-account-structure/#organization-accounts) en la que subiste la tabla de búsquedas.

* Las siguientes cláusulas NRQL no son compatibles con la consulta de búsqueda:

  * `TIMESERIES`

  * `COMPARE WITH`

  * `EXTRAPOLATE`

  * <DNT>
      **Note:**
    </DNT>

    Puede utilizar estas cláusulas si contiene la consulta de búsqueda en una consulta interna. Vea [esta consulta](#item-ids) para ver un ejemplo.

## Ejemplos de búsqueda [#query-with-data]

La tabla de búsquedas le permite utilizar consultas que combinan datos con sus telemetry data almacenados en New Relic.

A continuación se muestran algunos ejemplos de consultas:

<CollapserGroup>
  <Collapser
    id="avoid-hardcording"
    title="Evite codificar una larga lista de hosts"
  >
    Esta consulta evita codificar una larga lista de hosts consultando los nombres de host contenidos en una tabla de búsquedas:

    ```sql
    FROM Log
    SELECT count(*)
    WHERE hostname IN (FROM lookup(myHosts) SELECT uniques(myHost))
    ```
  </Collapser>

  <Collapser
    id="using-join"
    title="Consulta usando JOIN"
  >
    Usar `JOIN` consulta puede hacer que tus datos sean más fáciles de entender. Por ejemplo, esta consulta para un tipo de evento personalizado utiliza la tabla `storeNames` para mostrar los nombres de las tiendas junto con las ventas totales.

    ```sql
    FROM StoreEvent
    JOIN (FROM lookup(storeNames) SELECT store_ID as storeId, storeName AS name LIMIT 10000) ON shopId = storeId
    SELECT shopId, storeName, totalSales
    ```

    Esto permite un límite de 10,000 porque la tabla de búsquedas admite un límite más alto que otros tipos de datos NRQL, como se menciona en la sección [de límites de consultas](#query-limits) .
  </Collapser>

  <Collapser
    id="map-values"
    title="Asignar valores a categorías más amplias"
  >
    Esta consulta asigna valores `shopId` a un valor `storeCategory` más amplio mediante el uso de una cláusula `JOIN` en la tabla de búsquedas de datos. Esto le permite realizar agregaciones en `StoreEvent` registros basados en estas categorías más amplias y extraer nueva Insights de sus datos.

    ```sql
    FROM StoreEvent
    JOIN (FROM lookup(storeCategories) SELECT store_ID as storeId, storeCategory) ON shopId = storeId
    SELECT sum(totalSales) FACET storeCategory
    ```
  </Collapser>

  <Collapser
    id="status-codes"
    title="Traducir códigos de estado"
  >
    Aquí hay una consulta que traduce códigos de estado en resúmenes legibles del estado:

    ```sql
    FROM Transaction
      JOIN (FROM lookup(statusCodeTable) SELECT status_code, status_summary, status_definition)
      ON http.statusCode=status_code
    SELECT count(*) FACET status_summary
    ```

    A continuación se muestran algunos resultados de ejemplo:

    <img
      title="Screenshot of query for lookups translating status codes"
      alt="Screenshot of query for lookups translating status codes"
      src="/images/nrql_screenshot-crop_example-status-codes.webp"
    />
  </Collapser>

  <Collapser
    id="item-ids"
    title="Traducir ID de artículos"
  >
    Esta consulta muestra cómo varias características NRQL pueden trabajar juntas para obtener información comercial a partir de consultas de datos de log . La siguiente consulta:

    1. Extrae información sobre elementos del mensaje de registro usando [`aparse()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-aparse)
    2. Utiliza `JOIN` en los datos de la tabla de búsquedas para obtener nombres de elementos fáciles de usar
    3. Genera una tabla de nombres de elementos y el número de elementos almacenados.

       ```sql
       WITH aparse(message, 'POST to carts: * body: {"itemId":"*","unitPrice":*}%') AS (URL, ItemID, Price)
       FROM Log
         JOIN (FROM lookup(itemNames) SELECT ItemID, itemName) ON ItemID
       SELECT count(*) FACET itemName
       WHERE message LIKE 'POST to carts%'
       SINCE 30 days ago
       ```

       A continuación se muestran algunos resultados de ejemplo:

       <img
         title="Screenshot of query for lookups translating item IDs"
         alt="Screenshot of query for lookups translating item IDs"
         src="/images/nrql_screenshot-crop_lookup-query-translate-item-ids.webp"
       />
  </Collapser>

  <Collapser
    id="geoip"
    title="Utilice información geográfica para analizar ubicaciones"
  >
    Esta consulta combina búsquedas y [GeoIP](/docs/logs/ui-data/parsing#geo) para encontrar qué ubicaciones tienen los estados más fallidos:

    ```sql
    FROM Log
      JOIN (FROM lookup(statusCodeTable) SELECT status_code, status_summary, status_definition)
      ON CacheResponseStatus=status_code
    SELECT count(*) WHERE ClientIP.countryName IS NOT NULL AND status_summary != 'Success'
    FACET ClientIP.countryName, status_summary, CacheResponseStatus
    SINCE 1 day ago LIMIT MAX
    ```

    A continuación se muestran algunos resultados de ejemplo:

    <img
      title="Screenshot of query for GeoIP info"
      alt="Screenshot of query for GeoIP info"
      src="/images/nrql_screenshot-crop_lookup-query-geoip.webp"
    />
  </Collapser>
</CollapserGroup>
