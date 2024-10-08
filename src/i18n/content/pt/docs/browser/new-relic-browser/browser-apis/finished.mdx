---
title: finalizado
type: apiDoc
shortDescription: 'Registra um ponto no tempo adicional como &quot;concluído&quot; em um trace da sessão, e envia o evento para o New Relic.'
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: 'Browser API call to record an additional time point as a finished event in a browser session trace, and report it to New Relic.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```js
newrelic.finished(time $time_stamp)
```

Registra um ponto de tempo adicional como “terminado” em uma sessão de rastreamento e envia o evento para o New Relic.

## Requisitos

* Agente browser Pro, Pro+SPA ou Lite (v593 ou superior)

* Se estiver usando o npm para instalar o agente browser, você deverá ativar o recurso `generic_events` e/ou `session_trace` ao instanciar a classe `BrowserAgent` . Na matriz `features` , adicione o seguinte:

  ```js
  import { GenericEvents } from '@newrelic/browser-agent/features/generic_events'
  import { SessionTrace } from '@newrelic/browser-agent/features/session_trace';

  const options = {
    info: { ... },
    loader_config: { ... },
    init: { ... },
    features: [
      GenericEvents
      SessionTrace
    ]
  }
  ```

  Para obter mais informações, consulte a [documentação de instalação do browser npm](https://www.npmjs.com/package/@newrelic/browser-agent#new-relic-browser-agent).

## Descrição

Registra um momento adicional quando a página é concluída de acordo com seus critérios personalizados, antes ou depois do evento de carregamento da página. Isto é útil, por exemplo, para páginas com muitos componentes que carregam de forma assíncrona.

Você só pode chamar esse método uma vez por carregamento de página e ele não altera os outros dados de tempo de carregamento de página registrados para o carregamento. Para um carregamento de página individual, esta chamada:

1. Adiciona um evento `finished` ao [rastreamento atual do browser da sessão](/docs/browser/new-relic-browser/browser-pro-features/session-traces-exploring-webpages-life-cycle), se houver algum em andamento.
2. Envia um [evento`PageAction` ](/docs/insights/explore-data/attributes/browser-default-attributes-insights#pageaction-list)com o nome `finished` para o New Relic.

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
        `$time_stamp`

        _inteiro_ (horário UNIX)
      </td>

      <td>
        Opcional. O padrão é a hora atual da chamada. Se usado, marca o momento em que a página é "concluída" de acordo com seus próprios critérios.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

```js
aboveTheFoldContent.on('ready', function() {
  newrelic.finished();
});
```
