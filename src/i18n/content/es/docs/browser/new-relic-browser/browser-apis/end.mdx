---
title: end (SPA API)
type: apiDoc
shortDescription: Finaliza la interacción SPA en el momento actual.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser to end the interaction at the current time.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
newrelic.interaction().end()
```

Finaliza la interacción SPA en el momento actual.

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

Este método SPA finalizará la interacción browser en el momento actual. Cualquier devolución de llamada o solicitud posterior no se incluirá como parte de la interacción del SPA.

## Valores de retorno

Este método devuelve el mismo objeto API creado por `interaction()`.

## Ejemplos

```js
router.addRoute('/profile', () => {
  startSlowBackgroundAjax(); // Start work that will continue past the end of the interaction
  renderProfileComponents().then(() => { // Do work that is part of the interaction
    newrelic.interaction().end(); // End the interaction once the important components an the page have finished rendering
  });
});
```
