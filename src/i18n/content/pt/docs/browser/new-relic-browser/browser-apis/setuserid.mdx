---
title: setUserId
type: apiDoc
shortDescription: Adiciona uma string de identificador definida pelo usuário ao evento subsequente na página.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to add an identifier to subsequent events on the page.
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```js
newrelic.setUserId(value: string|null)
```

Adiciona uma string de identificador definida pelo usuário ao evento subsequente na página.

## Requisitos

* Agente browser Lite, Pro ou Pro+SPA (v1.230.0 ou superior)

* Se estiver usando o npm para instalar o agente browser, você deverá ativar pelo menos um recurso ao instanciar a classe `BrowserAgent` . Por exemplo, adicione o seguinte na matriz`features` :

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

  Para obter mais informações, consulte a [documentação de instalação do browser npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descrição

Ao executar esta função com um valor válido, o agente browser registra o valor como o atributo `enduser.id` com todos os eventos até que o atributo seja desdefinido manualmente. O identificador será armazenado no browser, para que as visitas subsequentes à página da _mesma_ origem o anexem no evento <DNT>**within a session**</DNT> span. Observe que esta funcionalidade pode variar dependendo das configurações de privacidade do browser do usuário final. Se esta função for chamada com `value = null`, qualquer ID de usuário existente será excluído de <DNT>**both**</DNT> o evento e o armazenamento da página atual.

O ID será anexado ao evento JavaScriptError em particular para uso [Errors Inbox](/docs/errors-inbox/errors-inbox/) . Se você estiver usando [o monitoramento SPA](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) com uma versão de agente compatível, o ID do usuário também será incluído no evento [`newrelic.interaction`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteraction) .

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
        `value`

        _string_ OU _nulo_
      </td>

      <td>
        Obrigatório. Um identificador de string para o usuário final, útil para vincular todos os eventos do browser a um usuário específico. O parâmetro `value` não precisa ser exclusivo. Se os IDs forem exclusivos, o chamador será responsável por essa validação.

        Passar um valor `null` desativa qualquer ID de usuário existente.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### Marcando o "início da sessão" de um usuário final

```js
newrelic.setUserId('user-1234-v1.0')
```

### Parando evento de atributo ao usuário atual

```js
newrelic.setUserId(null)
```
