---
title: setAttribute (API SPA)
type: apiDoc
shortDescription: Adiciona um atributo SPA personalizado apenas à interação atual no browser.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: SPA API call with browser monitoring to add a custom attribute only to the current interaction.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```js
newrelic.interaction().setAttribute(string $key, any $value)
```

Adiciona um atributo SPA personalizado apenas à interação atual no browser.

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

Este método adiciona um atributo personalizado a uma interação. Se salvo, esse atributo será exposto como uma nova propriedade no evento [`BrowserInteraction`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#browserinteraction-attributes) resultante. Ao contrário dos atributos adicionados com [`setCustomAttribute()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-api-newrelicsetcustomattribute), um atributo adicionado a uma interação só será aplicado à interação atual e não será adicionado ao evento [`PageAction`](/docs/insights/explore-data/attributes/browser-default-attributes-insights#pageaction-list) .

A New Relic mescla esses atributos personalizados com o atributo personalizado definido chamando [`setCustomAttribute()`](/docs/browser/new-relic-browser/browser-agent-apis/browser-api-newrelicsetcustomattribute) e com o atributo personalizado definido por um agente do lado do servidor.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Order of precedence**
        </DNT>
      </th>

      <th>
        <DNT>
          **Custom attributes**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Mais alto nível
      </td>

      <td>
        `BrowserInteraction` atributo definido com a API SPA: Estes substituem o atributo definido das outras duas maneiras.
      </td>
    </tr>

    <tr>
      <td>
        Próximo nível
      </td>

      <td>
        Atributo definido por `setCustomAttribute()`: Estes substituem o atributo personalizado do lado do servidor.
      </td>
    </tr>

    <tr>
      <td>
        Nível mais baixo
      </td>

      <td>
        Atributo personalizado set server-side.
      </td>
    </tr>
  </tbody>
</table>

Erros de atributo personalizado serão incluídos em evento na [página Erros JS](/docs/browser/new-relic-browser/browser-pro-features/javascript-errors-page-detect-analyze-errors). Para visualizar ou log erros de um atributo personalizado via API, use a chamada [`noticeError`](/docs/browser/new-relic-browser/browser-agent-spa-api/newrelicnoticeerror-browser-agent-api) da API do agente browser.

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
        `$key`

        _corda_
      </td>

      <td>
        Obrigatório. Usado como nome do atributo no evento `BrowserInteraction` .
      </td>
    </tr>

    <tr>
      <td>
        `$value`

        _qualquer_
      </td>

      <td>
        Obrigatório. Usado como valor de atributo no evento `BrowserInteraction` . Pode ser uma string, número, booleano ou objeto. Se for um objeto, o New Relic o serializa em uma string JSON.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Este método retorna o mesmo objeto de API criado por `interaction()`.

## Exemplos

```js
router.addRoute('/profile', () => {
  const user = getCurrentUser();
  newrelic.interaction()
    .setAttribute('username', user.username)
    .setAttribute('userId', user.id);
  renderProfile(user);
});
```
