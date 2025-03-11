---
title: setPageViewName
type: apiDoc
shortDescription: Agrupa vistas de páginas para ayudar a estructurar la URL o capturar la información de enrutamiento de la URL.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: 'Browser API call to group page views, to help URL structure or help capture the URL''s routing information.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.setPageViewName(string $name[, string $host])
```

Agrupa vistas de páginas para ayudar a estructurar la URL o capturar la información de enrutamiento de la URL.

## Requisitos

* Browser Lite, Pro o Pro+SPA agente (v593 o superior)

* Si está utilizando npm para instalar el agente del navegador, debe habilitar al menos una función al crear una instancia de la clase `BrowserAgent` . Por ejemplo, agregue lo siguiente en la matriz`features` :

  ```js
  import { Metrics } from '@newrelic/browser-agent/features/metrics'

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Metrics
    ]
  }
  ```

  Para obtener más información, consulte la [documentación de instalación del navegador npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descripción

Los nombres de páginas personalizados pueden ayudarle a agrupar de manera más efectiva las vistas de su página si la estructura de su URL no proporciona agrupaciones útiles o si el agente del navegador no captura la parte de la URL donde se almacena la información de enrutamiento. Al consultar el [evento](/docs/using-new-relic/data/understand-data/new-relic-data-types#event-data) `PageView` , el nombre personalizado se expondrá como el atributo `browserTransactionName` . El nombre personalizado también será visible en laUI <InlinePopover type="browser"/>.

Para utilizar un [nombre de vista de página](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity) personalizado en lugar de la URL de la página, formatee el nombre como una cadena delimitada por barras. Realice esta llamada antes de que se active el evento `window load` para que aparezca correctamente.

<Callout variant="tip">
  Esta llamada API se aplica a los datos de las visitas a páginas estándar en el navegador y al evento [`PageView`](/docs/insights/insights-data-sources/default-data/browser-default-events-attributes-insights#browser-attributes-table) . Para establecer un nombre personalizado para las vistas de páginas SPA y el evento `BrowserInteraction` , consulte [SPA: setName](/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-name). Se recomienda utilizar ambas llamadas juntas.
</Callout>

## Parámetros

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$name`

        _cadena_
      </td>

      <td>
        Requerido. El nombre de la página que desea utilizar. Utilice caracteres alfanuméricos.
      </td>
    </tr>

    <tr>
      <td>
        `$host`

        _cadena_
      </td>

      <td>
        Opcional. El valor predeterminado es `http://custom.transaction`. Normalmente, establezca `host` en el URI del dominio de su sitio.

        Para agrupar aún más estas transacciones personalizadas, proporcione un `host` personalizado. De lo contrario, a las visitas a la página se les asignará el dominio predeterminado `custom.transaction`. Los segmentos dentro del nombre deben agregarse explícitamente a [la configuración de la lista de 'permitidos' de su URL](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls) si aún no aparecen.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

```js
newrelic.setPageViewName('/login')
// Or
newrelic.setPageViewName('/login', 'https://www.myapp.com')
```
