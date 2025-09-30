---
title: API de consulta de información valiosa
tags:
  - Event data sources
metaDescription: 'The New Relic Insights query API is an older API for querying data: now we recommend NerdGraph for querying'
freshnessValidatedDate: never
translationType: machine
---

La API de información valiosa consulta de New Relic es una API REST para realizar consultas NRQL.

<Callout variant="tip">
  <DNT>**This API is no longer the preferred way to query New Relic data.**</DNT> Utilice [NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) para hacer eso.
</Callout>

## Requisitos y recomendaciones [#requirements]

<DNT>**This API is no longer the preferred way to query New Relic data.**</DNT> Para obtener mejores resultados, debe utilizar [NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph) para consultar datos.

El uso de esta API puede estar restringido por permisos de usuario relacionados con roles.

Para agregar datos personalizados a New Relic, consulte [Informar datos personalizados](/docs/data-apis/custom-data/get-custom-data-from-any-source).

Si su organización aloja datos en el centro de datos de la UE, asegúrese de utilizar el [extremo de región de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center#endpoints) adecuado.

## 1. Registra una clave de API [#register]

Para utilizar la API de información valiosa consulta, necesita una clave de consulta. Puede tener varias claves de consulta y cualquier consulta se puede utilizar para iniciar cualquier consulta API de información valiosa. Si tiene varios sistemas que consultan información valiosa o diferentes destinos de datos, New Relic recomienda utilizar varias claves de consulta para mejorar la seguridad de los datos.

Por razones de seguridad, las claves de consulta no se pueden modificar ni leer mediante la API. Para cambiar o leer una clave de consulta, utilice la UI de New Relic.

<Callout variant="tip">
  <DNT>**This API is no longer the preferred way to query New Relic data.**</DNT> Utilice [NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/) para hacer eso.
</Callout>

Para crear una nueva clave de consulta:

1. Vaya a [one.newrelic.com/api-keys](https://one.newrelic.com/api-keys). Si está utilizando el centro de datos de la UE, vaya a [one.eu.newrelic.com/api-keys](https://one.eu.newrelic.com/api-keys) en cambio.
2. Haga clic en <DNT>**Create a key button**</DNT> ubicado en la esquina superior derecha de la página clave de API.
3. Configure la nueva clave:

* Ingrese un nombre para la nueva clave en el campo provisto.
* Agregue una descripción (como "Clave de consulta").

4. Haga clic en

   <DNT>
     **Save**
   </DNT>

   para generar la nueva clave.

## 2. Cree la solicitud de consulta API [#create-request]

Cuando [crea o edita una clave de consulta](#register), verá un ejemplo de consulta curl que puede usar como plantilla. La consulta de ejemplo no funcionará a menos que siga estas reglas de consulta:

* La [cadena de consulta NRQL](/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql) debe estar [codificada en URL](http://www.w3schools.com/tags/ref_urlencode.asp).
* La cadena de consulta debe tener menos de 4000 bytes.
* La URL debe contener un ID de cuenta válido.
* El `X-Query-Key` debe contener una [clave de consulta](#register) válida.
* El `Content-Type` debe ser `application/json`.

### Linux [#unix]

Aquí hay un ejemplo de curl:

```
curl -H "Accept: application/json" -H "X-Query-Key: YOUR_QUERY_KEY" "https://insights-api.newrelic.com/v1/accounts/<a href="/docs/accounts-partnerships/accounts/account-setup/account-id">YOUR_ACCOUNT_ID</a>/query?nrql=YOUR_URL_ENCODED_QUERY"
```

### Microsoft Windows [#windows]

Puedes usar <DNT>**Powershell**</DNT> para consultar eventos vía API:

```
Invoke-WebRequest -Uri https://insights-api.newrelic.com/v1/accounts/<a href="/docs/accounts-partnerships/accounts/account-setup/account-id">YOUR_ACCOUNT_ID</a>/query?nrql=YOUR_URL_ENCODED_QUERY -Headers @{"X-Query-Key"="YOUR_QUERY_KEY"} -ContentType "application/json" -Method GET
```

## 3. Procese el JSON devuelto [#process-result]

La API de consulta devuelve resultados en formato JSON. Hay un límite de 5000 resultados por solicitud.

La estructura de los datos JSON depende del NRQL que utilizó en la solicitud: diferentes combinaciones de declaraciones, cláusulas y funciones `SELECT` devuelven cada una una respuesta adecuada. Al escribir su código para procesar el JSON, debe realizar una ejecución de prueba de su consulta y examinar el JSON resultante.

## Ejemplo

La API de consulta de información valiosa devuelve datos JSON. A continuación se muestra un ejemplo de una consulta, su formato de solicitud de consulta y los datos devueltos:

<CollapserGroup>
  <Collapser title="Consulta, solicitud de consulta API, datos devueltos">
    <DNT>
      **Original NRQL query:**
    </DNT>

    ```
    SELECT count(appName) FROM PageView SINCE '2014-08-04 00:00:00+0500'
    ```

    <DNT>**Query cURL request (with URL-encoded NRQL query)**</DNT>:

    ```
    curl -H "Accept: application/json" -H "X-Query-Key: YOUR_QUERY_KEY" "https://insights-api.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/query?nrql=SELECT+count%28appName%29+FROM+PageView+SINCE+%272014-08-04+00%3A00%3A00%2B0500%27"
    ```

    <DNT>
      **Returned JSON data:**
    </DNT>

    ```
    {
      "results": [
        {
          "count": 80275388
        }
      ],
      "metadata": {
        "eventTypes": [
          "PageView"
        ],
        "eventType": "PageView",
        "openEnded": true,
        "beginTime": "2014-08-03T19:00:00Z",
        "endTime": "2017-01-18T23:18:41Z",
        "beginTimeMillis=": 1407092400000,
        "endTimeMillis": 1484781521198,
        "rawSince": "'2014-08-04 00:00:00+0500'",
        "rawUntil": "`now`",
        "rawCompareWith": "",
        "clippedTimeWindows": {
          "Browser": {
            "beginTimeMillis": 1483571921198,
            "endTimeMillis": 1484781521198,
            "retentionMillis": 1209600000
          }
        },
        "messages": [],
        "contents": [
          {
            "function": "count",
            "attribute": "appName",
            "simple": true
          }
        ]
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Pautas de limitación de tarifas [#rate-limiting]

Tenemos [límites de tarifas de consulta](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/). Probablemente no encontrará estos límites, especialmente si sigue estas pautas generales:

* Limite la cantidad de solicitudes con consultas complejas (por ejemplo, consultas con cláusulas `FACET` o `TIMESERIES` , o consultas de más de un millón de eventos) ejecutadas al mismo tiempo.
* Limite la cantidad de solicitudes ejecutadas simultáneamente durante períodos prolongados a un máximo de 5, especialmente si incluyen consultas complejas.

Si New Relic aplica límites de velocidad en su cuenta para la cantidad de consultas por minuto, la API de consulta devuelve un error 429. Si New Relic aplica límites de tasa en su cuenta para los registros inspeccionados, la API de consulta devuelve un error 503 y sus gráficos pueden mostrar un mensaje de error de tiempo de espera.
