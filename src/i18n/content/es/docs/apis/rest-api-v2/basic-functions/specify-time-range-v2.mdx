---
title: Especificar un rango de tiempo (v2)
tags:
  - APIs
  - REST API v2
  - Basic functions
metaDescription: 'How to use New Relic''s REST API (v2) to request output for a specific time range by changing the default 30 minutes range , as well as offsetting UTC.'
freshnessValidatedDate: never
translationType: machine
---

Puede especificar un rango de tiempo para que los datos se devuelvan en una API de llamada REST de New Relic. También puede solicitar [devolver un promedio](/docs/apm/apis/requirements/calculating-average-metric-values-summarize) durante el rango de tiempo en lugar de la serie de valores devueltos de forma predeterminada.

## Cambiar el rango de tiempo predeterminado de 30 minutos [#api-call]

El rango de tiempo predeterminado para una llamada API son los últimos 30 minutos. Para modificar el intervalo de tiempo, incluya los valores `from=` y `to=` opcionales. (Para finalizar el intervalo de tiempo en el momento actual, omita `to=`).

<Callout variant="tip">
  La disponibilidad de datos está sujeta a la [política de retención de datos](/docs/accounts-partnerships/accounts/account-maintenance/data-retention) de su nivel de suscripción.
</Callout>

<DNT>
  **Example:**
</DNT>

```
curl -X GET "https://api.newrelic.com/v2/applications/${APP_ID}/metrics/data.json" \ -H "Api-Key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i \ -d 'names[]=Agent/MetricsReported/count&from=2014-08-11T14:42:00+00:00&to=2014-08-11T15:12:00+00:00'
```

El período de tiempo devuelto para cada punto de datos depende del [rango de tiempo](/docs/apm/apis/requirements/extracting-metric-data#time) que especifique. Para modificar el período de tiempo, incluya el [parámetro período](/docs/apm/apis/requirements/extracting-metric-data#period) en su consulta.

Si está utilizando New Relic REST API Explorer (v2), puede usar el diamante<img title="icon-api-diamond" alt="icon-api-diamond" src="/images/apis-and-data_icon_REST-API-explorer-diamond.webp"/>

icono para seleccionar rangos de tiempo. Si tiene una [cuenta de la región de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center), la URL anterior comienza con `https://api.eu.newrelic.com`.

## UTC compensado [#utc]

De forma predeterminada, la entrada de hora de la API utiliza la hora universal coordinada (UTC). Para compensar la UTC, utilice más o menos `00:00` en su llamada API. Esto le permite ingresar horas en una zona horaria diferente; sin embargo, este <DNT>**does not**</DNT> modifica los horarios de salida, que siempre son UTC.

* Para zonas horarias al este de UTC, utilice un signo menos (`-`). Este símbolo no tiene ningún significado especial en solicitudes HTTP o HTTPS.
* Para las zonas horarias al oeste de UTC, utilice el valor codificado `%2B` para indicar un signo más (+).
* Si tiene una [cuenta de la región de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center), las siguientes URL comienzan con `https://api.eu.newrelic.com`.

<CollapserGroup>
  <Collapser
    id="offset-minus"
    title={<>Esta llamada API muestra una zona horaria al este de UTC por 2 horas (<InlineCode>-02:00</InlineCode>)</>}
  >
    ```
    curl -X GET "https://api.newrelic.com/v2/applications/$APP_ID/metrics/data.json" \
         -H "Api-Key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i \
         -d 'names[]=Agent/MetricsReported/count&from=2014-08-11T14:42:00-02:00&to=2014-08-11T15:12:00-02:00'
    ```
  </Collapser>

  <Collapser
    id="offset-plus"
    title={<>Esta llamada API muestra una zona horaria al oeste de UTC por +8 horas (<InlineCode>%2B08:00</InlineCode>)</>}
  >
    ```
    curl -X GET "https://api.newrelic.com/v2/applications/$APP_ID/metrics/data.json" \
         -H "Api-Key:<a href='/docs/apis/rest-api-v2/getting-started/introduction-new-relic-rest-api-v2#api_key'>$API_KEY</a>" -i \
         -d 'names[]=Agent/MetricsReported/count&from=2014-08-11T14:42:00%2B08:00&to=2014-08-11T15:12:00%2B08:00
    ```
  </Collapser>
</CollapserGroup>
