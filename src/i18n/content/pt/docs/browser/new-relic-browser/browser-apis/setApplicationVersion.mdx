---
title: setApplicationVersion
type: apiDoc
shortDescription: Adiciona uma string de versão do aplicativo definida pelo usuário ao evento subsequente na página.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: Browser API call to add an application version string to subsequent events on the page.
freshnessValidatedDate: '2023-08-17T00:00:00.000Z'
translationType: machine
---

## Sintaxe

```js
newrelic.setApplicationVersion(value: string|null)
```

Adiciona uma string de versão do aplicativo definida pelo usuário ao evento subsequente na página.

## Requisitos

* Agente browser Lite, Pro ou Pro+SPA (v1.238.0 ou superior)

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

Ao executar esta função com um valor válido, o agente browser anexa um atributo `application.version` a todos os eventos subsequentes até que o atributo seja desdefinido manualmente ou a página seja descarregada. Se a função for chamada mais de uma vez, apenas o valor fornecido mais recente será enviado no evento subsequente. Se esta função for chamada com um valor `null`, qualquer versão existente do aplicativo deixará de ser enviada no evento subsequente.

Definir o atributo `application.version` ajudará você a identificar quais versões do seu software estão produzindo erros. Uma próxima versão da Errors Inbox rastreará automaticamente quais versões do seu software estão produzindo erros. Se você estiver usando [o monitoramento SPA](/docs/browser/single-page-app-monitoring/get-started/welcome-single-page-app-monitoring) com uma versão de agente compatível, a versão do aplicativo também será incluída no evento [`newrelic.interaction`](/docs/browser/new-relic-browser/browser-agent-apis/browser-spa-api-newrelicinteraction) .

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
        Obrigatório. Uma string que representa a versão do aplicativo web, útil para vincular todos os eventos do browser a uma tag de lançamento específica. O parâmetro `value` não precisa ser exclusivo. Se os IDs forem exclusivos, o chamador será responsável por essa validação.

        Passar um valor `null` desativa qualquer versão de aplicativo existente.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### Decorando evento com versão de aplicativo

```js
newrelic.setApplicationVersion('1.2.3') // decorates events with the property 'application.version':'1.2.3'
```

### Impedindo que o evento decore a versão do aplicativo

```js
newrelic.setApplicationVersion(null) // events will no longer have an 'application.version' property set
```
