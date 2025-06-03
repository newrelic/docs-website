---
title: onEnd (API SPA)
type: apiDoc
shortDescription: Altere os valores associados a uma interação SPA antes que a interação seja salva.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call to add and update values at the end of an interaction event for browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```js
newrelic.interaction().onEnd(function $callback)
```

Altere os valores associados a uma interação SPA antes que a interação seja salva.

## Requisitos

* Agente browser Pro+SPA (v963 ou superior)

* Se estiver usando o npm para instalar o agente browser, você deverá ativar o recurso `spa` ao instanciar a classe `BrowserAgent` . Na matriz `features` , adicione o seguinte:

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

  Para obter mais informações, consulte a [documentação de instalação do browser npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descrição

Esta chamada fornece o mesmo objeto que [`getContext()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractiongetcontext). Quando isso é chamado, você pode fazer ajustes finais na interação antes de ela ser gravada. Por exemplo, você pode adicionar [atributos](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#attribute) adicionais com base nos valores de contexto.

Outros métodos para modificar a interação incluem:

* [`setName()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetname)
* [`save()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsave)
* [`ignore()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionignore)
* [`setAttribute()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetattribute)

## Parâmetro

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$callback`

        _função_
      </td>

      <td>
        Obrigatório. Esta função é chamada quando a interação termina. É chamado com um parâmetro, que é o contexto de interação.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Este método retorna o mesmo objeto de API criado por `interaction()`.

## Exemplos

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
