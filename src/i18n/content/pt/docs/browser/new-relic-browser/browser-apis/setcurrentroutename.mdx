---
title: setCurrentRouteName (API SPA)
type: apiDoc
shortDescription: Fornece nomes mais precisos às rotas SPA do que nomes padrão. monitorar rotas específicas em vez de agrupar por padrão.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser monitoring to give routes more accurate names and monitor specific routes rather than by default grouping.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```js
newrelic.setCurrentRouteName(string $name)
```

Fornece nomes mais precisos às rotas SPA do que nomes padrão. monitorar rotas específicas em vez de agrupar por padrão.

## Requisitos

* Agente browser Pro+SPA (v998 ou superior)

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

Este método nomeia a rota atual. Isso pode ser útil para:

* Dê às rotas nomes mais precisos do que teriam por padrão.
* Monitor uma rota que poderia ser agrupada com outras rotas por padrão.

Atualmente este método se aplica apenas ao evento SPA [`BrowserInteraction`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browserinteraction-attributes) . O uso desta API cria dois novos atributos personalizados que rastreiam a rota anterior e a rota de destino:

* `previousRouteName`
* `targetRouteName`

Ao usar esta API, o atributo [`browserInteractionName`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#interaction-name) assumirá o valor `targetRouteName` . Se `setName` for usado para definir o nome da interação do browser, isso terá precedência.

A API `setCurrentRouteName()` determina o nome atributo para [`BrowserInteraction` evento](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browserinteraction-attributes), portanto esta API deve se chamar <DNT>**every time**</DNT> caso haja uma mudança de rota. Isso garantirá que `BrowserInteraction` tenha o atributo correto.

<Callout variant="tip">
  Compare com [`setName()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteractionsetname), que define um nome para uma interação do browser, não uma rota.
</Callout>

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
        `$name`

        _corda_
      </td>

      <td>
        Obrigatório. Nome da rota atual da página.

        Os nomes de rotas passados para `setCurrentRouteName()` podem ser qualquer sequência, mas devem representar um roteamento <DNT>**pattern**</DNT> em vez de um recurso específico. Por exemplo, use `/users/:id` em vez de `/users/123`.

        Se `null`, sai do requisito de mudança de rota e retorna a estratégia de nomenclatura padrão.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

```js
router.onChange(function(route) {
  newrelic.setCurrentRouteName(route.name);
});
```
