---
title: actionText (SPA API)
type: apiDoc
shortDescription: Establece el valor de texto del elemento HTML en el que se hizo clic para iniciar una interacción browser .
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser to set the name and trigger of a browser interaction that is not a route change or URL change.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.interaction().actionText(string $value)
```

Establece el valor de texto del elemento HTML en el que se hizo clic para iniciar una interacción browser .

## Requisitos

* Browser Pro+SPA agente (v1099 o superior)

* Si está utilizando npm para instalar el agente del navegador, debe habilitar la característica `spa` al crear una instancia de la clase `BrowserAgent` . En la matriz `features` , agregue lo siguiente:

  ```js
  import { Spa } from '@newrelic/browser-agent/features/spa';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      Spa
    ]
  }
  ```

  Para obtener más información, consulte la [documentación de instalación del navegador npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descripción

Este método de monitoreo de SPA establece el valor de texto del elemento HTML en el que se hizo clic para iniciar una interacción browser . El valor se expondrá como el atributo [`actionText`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#interaction-actionText) en el evento `BrowserInteraction` .

NOTA: El agente intenta determinar automáticamente el valor del texto del elemento HTML en el que se hizo clic. Esto se aplica solo a los elementos `<a>`, `<button>` y `<input>` . La API `actionText` se puede utilizar en los casos en que esto no sea suficiente o preciso.

<Callout variant="tip">
  Esta llamada API se aplica a los datos de [las vistas de páginas SPA](/docs/browser/single-page-app-monitoring/get-started/introduction-single-page-app-monitoring) en el navegador y al tipo de evento [`BrowserInteraction`](/docs/insights/insights-data-sources/default-data/browser-default-events-attributes-insights#browserinteraction-attributes) . Para establecer un nombre personalizado para las vistas de página estándar y el tipo de evento <DNT>**`PageView`**</DNT> , consulte [`setPageViewName`](/docs/browser/new-relic-browser/browser-agent-spa-api/set-pageview-name). Se recomienda utilizar ambas llamadas juntas.
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
        `$value`

        _cadena_
      </td>

      <td>
        El valor de texto del elemento HTML que representa la acción que inició la interacción.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Este método devuelve el mismo objeto API creado por `interaction()`.

## Ejemplos

```js
document.getElementById('subscribe').addEventListener('submit', () => {
    newrelic.interaction().actionText('Create Subscription');
    createSubscription();
});
```
