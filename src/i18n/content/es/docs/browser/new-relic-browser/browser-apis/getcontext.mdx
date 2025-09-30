---
title: getContext (SPA API)
type: apiDoc
shortDescription: Almacena valores para la interacción SPA actual de forma asincrónica en browser.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call to store values across the current SPA interaction asynchronously in browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.interaction().getContext(function $callback)
```

Almacena valores para la interacción SPA actual de forma asincrónica en browser.

## Requisitos

* Browser Pro+SPA agente (v963 o superior)

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

Este método API recibe una devolución de llamada que se invocará de forma asincrónica con el objeto de contexto asociado con la interacción actual. Utilícelo para agregar datos asociados con la interacción actual. Estos valores se pueden utilizar en otras partes de su código.

Este contexto también lo proporciona la llamada [`onEnd`](/docs/browser/new-relic-browser/browser-agent-spa-api/spa-on-end) .

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
        `$callback`

        _función_
      </td>

      <td>
        Requerido. Una función que acepta el objeto de contexto de interacción como único argumento.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Este método devuelve el mismo objeto API creado por `interaction()`.

## Ejemplos

```js
router.addRoute('/products/{productId}', params => {
  newrelic.interaction().getContext(ctx => ctx.productId = params.productId);
  renderProduct(params.productId);
  updateHash();
});

window.addEventListener('hashchange', (ev) => {
  const interaction = newrelic.interaction();
  interaction.getContext(ctx => {
    if (ctx.productId) {
      interaction.setAttribute('productId', ctx.productId);
    }
  });
});
```
