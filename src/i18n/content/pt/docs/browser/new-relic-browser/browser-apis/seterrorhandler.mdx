---
title: setErrorHandler
type: apiDoc
shortDescription: Permite ignorar e agrupar seletivamente os erros conhecidos que o agente browser captura.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser monitoring API call to allow selective ignoring and grouping of known errors captured by the agent.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```js
newrelic.setErrorHandler(function $callback)
```

Permite ignorar e agrupar seletivamente os erros conhecidos que o agente browser captura.

## Requisitos

* Browser Pro ou agente Pro+SPA (v974 ou superior)

  * Para capacidade de agrupamento de erros, é necessária [a versão 1.230.0](/docs/release-notes/new-relic-browser-release-notes/browser-agent-release-notes/browser-agent-v1.230.0) ou superior.

* Se estiver usando o npm para instalar o agente browser, você deverá ativar o recurso `jserrors` ao instanciar a classe `BrowserAgent` . Na matriz `features` , adicione o seguinte:

  ```js
  import { JSErrors } from '@newrelic/browser-agent/features/jserrors';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      JSErrors
    ]
  }
  ```

  Para obter mais informações, consulte a [documentação de instalação do browser npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descrição

A chamada de API `newrelic.setErrorHandler()` permite ignorar seletivamente erros conhecidos capturados pelo agente browser. É necessária uma única função de tratamento de erros, que será chamada para cada erro que o agente browser capturar. Se o manipulador retornar `true`, o New Relic **não** registrará o erro. Caso contrário, o erro será processado normalmente.

Além disso, versões posteriores do agente suportam impressão digital ou agrupamento de exceções com um rótulo personalizado fornecido. Para fazer isso, retorne um objeto em vez de um booleano com uma propriedade `group` definida como a _string_ desejada. É importante saber que fornecer uma string vazia, ou qualquer objeto que não esteja em conformidade com esta especificação exata, é tratado da mesma forma que o caso `true` , para o qual o erro será _ignorado_. Esse comportamento é compatível com versões anteriores.

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
        Obrigatório<DNT>**.**</DNT> Quando ocorre um erro, o retorno de chamada é chamado com o objeto de erro como parâmetro. O retorno de chamada será chamado com cada erro, portanto não é específico para um erro.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### Use uma função básica de tratamento de erros [#include-error]

Inclua o objeto de erro dentro da função de retorno de chamada para ignorar erros específicos que o agente browser captura.

```js
newrelic.setErrorHandler(function(err) {
  if (shouldIgnoreError(err)) {
    return true;
  } else {
    return false;
  }
});
```

### Erros de impressão digital na função de manipulador

Atribua rótulos personalizados a erros específicos para visualização na interface Errors Inbox .

```js
newrelic.setErrorHandler(function(err) {
  if (isReferenceError(err)) {
    return { group: 'My reference errors' }; // error is included and tagged under this label
  } else if (isSomeSpecificError(err)) {
    return { group: '' }; // error will be excluded!
    // return { Group: 'still excluded - prop name has capital G!' };
  } else {
    return false; // error is included without any label
  }
})
```
