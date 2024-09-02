---
title: getContext (API SPA)
type: apiDoc
shortDescription: Armazena valores para a interação SPA atual de forma assíncrona no browser.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call to store values across the current SPA interaction asynchronously in browser monitoring.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```js
newrelic.interaction().getContext(function $callback)
```

Armazena valores para a interação SPA atual de forma assíncrona no browser.

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

Este método API recebe um retorno de chamada que será invocado de forma assíncrona com o objeto de contexto associado à interação atual. Use isto para agregar dados associados à interação atual. Esses valores podem ser usados em outras partes do seu código.

Esse contexto também é fornecido pela chamada [`onEnd`](/docs/browser/new-relic-browser/browser-agent-spa-api/spa-on-end) .

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
        Obrigatório. Uma função que aceita o objeto de contexto de interação como seu único argumento.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Este método retorna o mesmo objeto de API criado por `interaction()`.

## Exemplos

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
