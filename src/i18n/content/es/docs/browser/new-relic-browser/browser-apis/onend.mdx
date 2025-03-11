---
title: onEnd (API SPA)
type: apiDoc
shortDescription: Cambie los valores asociados con una interacción SPA antes de guardar la interacción.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call to add and update values at the end of an interaction event for browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```js
onEnd(function $callback)
```

Cambie los valores asociados con una interacción SPA antes de guardar la interacción.

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

Esta llamada proporciona el mismo objeto que [`getContext()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractiongetcontext). Cuando se llama a esto, puede realizar ajustes finales a la interacción antes de que se grabe. Por ejemplo, podría agregar [atributos](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#attribute) adicionales según los valores del contexto.

Otros métodos para modificar la interacción incluyen:

* [`setName()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetname)
* [`save()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsave)
* [`ignore()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionignore)
* [`setAttribute()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetattribute)

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
        Requerido. Esta función se llama cuando finaliza la interacción. Se llama con un parámetro, que es el contexto de interacción.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Este método devuelve el mismo objeto API creado por `interaction()`.

## Ejemplos

```js
// router.js
router.addRoute('/dashboard', () => {
  const interaction = newrelic.interaction().onEnd(ctx => {
    interaction.setAttribute(
      'averageChartLoadTime',
      ctx.totalChartLoadTime / ctx.chartLoadCount
    );
  });
  getCharts().forEach(loadChart);
});

// chart-loader.js
function loadChart(chart) {
  const start = Date.now();
  chart.load().then(() => {
    const loadTime = Date.now() - start;
    interaction.getContext(ctx => {
      ctx.totalChartLoadTime = (ctx.totalChartLoadTime || 0) + loadTime;
      ctx.chartLoadCount += (ctx.chartLoadCount || 0) + 1;
    });
  })
}
```
