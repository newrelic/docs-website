---
title: Cómo utilizar nuestra API REST (v2)
tags:
  - APIs
  - REST API v2
  - Get started
metaDescription: 'How to get the most out of using New Relic''s REST API (v2) , including a demo, setup and format requirements, and links to detailed examples.'
freshnessValidatedDate: never
translationType: machine
---

La API REST de New Relic le permite recuperar datos y enviarlos a las herramientas de New Relic, así como configurar características y realizar operaciones de eliminación. También puede utilizar [API Explorer](/docs/apis/rest-api-v2/api-explorer-v2/getting-started-new-relics-api-explorer) para comprender los datos disponibles a través de la API REST, obtener comando curl y ver respuestas JSON.

## Configuración

La estructura del comando de la API REST sigue esta plantilla:

```
curl  -X GET <a href="#appid"><var>URL</var></a> -H "Api-Key:<a href="#api_key"><var>$API_KEY</var></a>" -d '<a href="#payload"><var>PAYLOAD</var></a>'
```

El comando `GET` también podría ser `POST` o `DELETE`, según la intención de la consulta.

Para entender el marcador de posición, sigue leyendo.

<Callout variant="tip">
  Nuestros ejemplos utilizan curl como una herramienta de línea de comando común para extraer datos de intervalo de tiempo de métrica de la API REST. Sin embargo, puede utilizar cualquier método para realizar sus solicitudes REST. Los comandos `curl` incluyen URL de destino, información de encabezado y datos que son relevantes para cualquier mecanismo de solicitud.
</Callout>

## URL [#appid]

La API de llamada requiere una URL para especificar la ubicación desde la que se accederá a los datos. Debe reemplazar el marcador de posición `<URL>` con la URL adecuada que cambiará según el tipo de datos que se soliciten. En general, la URL sigue esta plantilla:

```
https://api.newrelic.com/v2/applications/$APP_ID/metrics/data.json
```

El [$APP_ID](/docs/apis/rest-api-v2/requirements/finding-product-id) especifica la aplicación o producto exacto para el cual se solicitan los datos. La información que sigue a este parámetro variará según la solicitud de datos.

Si tiene una [cuenta de región de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center), la URL es:

```
api.eu.newrelic.com/v2/applications/$APP_ID/metrics/data.json
```

<Callout variant="tip">
  Puede recuperar datos XML en lugar de JSON reemplazando `.json` con `.xml`.
</Callout>

## Clave de API `$API_KEY` [#api_key]

La API de llamada de New Relic requiere una clave de API. Esta puede ser una de varias claves de API:

* Una [clave de usuario](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#user-api-key): se recomienda. Es nuestra implementación clave más reciente y tiene menos limitaciones que una clave de API REST. La clave de usuario también se utiliza para nuestra [API NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph).
* Una [clave REST de API](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#rest-api-key): esta es nuestra implementación de clave anterior. Para obtener más información al respecto, consulte [REST clave de API](/docs/apis/get-started/intro-apis/types-new-relic-api-keys#rest-api-key). Si utiliza esta clave, el encabezado requerido es `X-Api-Key` y no `Api-Key`.
* Si tiene una cuenta de asociación de New Relic, utilizará una clave diferente: consulte [Autenticación de asociación](/docs/apis/rest-api-v2/get-started/admin-users-api-key-partnerships).

En nuestros ejemplos de API REST, tomamos prestado el marcador de posición de clave API $API_KEY de la programación shell de Unix. Asegúrese de reemplazar esa y otras variables específicas del usuario al realizar llamadas.

## Detalles de la consulta (carga) [#payload]

La carga contiene los detalles de la consulta, que definen:

* El nombre de la métrica que desea consultar y el valor que desea recuperar
* El [rango de tiempo](/docs/apis/rest-api-v2/requirements/specifying-time-range-v2) definido para recuperar métrica
* (Opcional): El promedio del intervalo de tiempo de métrica datos usando [resumen](/docs/apis/rest-api-v2/requirements/calculating-average-metric-values-summarize)

## Ejemplos

Consulte los siguientes documentos para ver ejemplos de casos de uso de API REST:

* [Ejemplos de APM](/docs/apis/rest-api-v2/application-examples-v2) (cómo recuperar datos de intervalo de tiempo de métrica de

  <InlinePopover type="apm"/>

  ).

* [Ejemplos de navegador](/docs/apis/rest-api-v2/browser-examples-v2) (cómo recuperar datos de intervalo de tiempo de métrica de

  <InlinePopover type="browser"/>

  ). La API REST solo devuelve el script Lite agente del navegador. Para obtener más información, [consulte esta tabla que compara los tipos Lite, Pro y Pro+SPA](/docs/browser/browser-monitoring/installation/install-browser-monitoring-agent).

* [Ejemplos de alerta de infraestructura](/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/rest-api-calls-new-relic-infrastructure-alerts)

* [Ejemplos de alertas](/docs/alerts/new-relic-alerts/rest-api-alerts) (crear condición de alerta y configurar canal de notificación, y más).
