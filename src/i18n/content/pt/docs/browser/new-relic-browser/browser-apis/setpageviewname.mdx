---
title: setPageViewName
type: apiDoc
shortDescription: Agrupa visualizações de página para ajudar na estruturação do URL ou para capturar as informações de roteamento do URL.
tags:
  - Browser
  - Browser monitoring
  - Browser agent and SPA API
metaDescription: 'Browser API call to group page views, to help URL structure or help capture the URL''s routing information.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```js
newrelic.setPageViewName(string $name[, string $host])
```

Agrupa visualizações de página para ajudar na estruturação do URL ou para capturar as informações de roteamento do URL.

## Requisitos

* Agente browser Lite, Pro ou Pro+SPA (v593 ou superior)

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

Nomes de página personalizados podem ajudá-lo a agrupar de forma mais eficaz suas visualizações de página se sua estrutura de URL não fornecer agrupamentos úteis ou se o agente browser não capturar a parte da URL onde as informações de roteamento são armazenadas. Ao consultar o [evento](/docs/using-new-relic/data/understand-data/new-relic-data-types#event-data) `PageView` , o nome personalizado será exposto como o atributo `browserTransactionName` . O nome personalizado também ficará visível na interface <InlinePopover type="browser"/>.

Para usar um [nome de visualização de página](/docs/browser/new-relic-browser/additional-standard-features/page-views-insights-your-sites-popularity) personalizado em vez do URL da página, formate o nome como uma sequência delimitada por barra. Faça essa chamada antes que o evento `window load` seja acionado para que ele apareça corretamente.

<Callout variant="tip">
  Esta chamada de API se aplica a dados em visualizações de página padrão no browser e ao evento [`PageView`](/docs/insights/insights-data-sources/default-data/browser-default-events-attributes-insights#browser-attributes-table) . Para configurar um nome customizado para visualizações de páginas SPA e o evento `BrowserInteraction` , consulte [SPA: setName](/docs/browser/new-relic-browser/browser-agent-spa-api/spa-set-name). É recomendado usar as duas chamadas juntas.
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
        Obrigatório. O nome da página que você deseja usar. Use caracteres alfanuméricos.
      </td>
    </tr>

    <tr>
      <td>
        `$host`

        _corda_
      </td>

      <td>
        Opcional. O padrão é `http://custom.transaction`. Normalmente defina `host` como o URI do domínio do seu site.

        Para agrupar ainda mais essas transações personalizadas, forneça um `host` personalizado. Caso contrário, as visualizações de página receberão o domínio padrão `custom.transaction`. Os segmentos dentro do nome devem ser adicionados explicitamente às [configurações da lista de permissões de URL](/docs/browser/new-relic-browser/configuration/group-browser-metrics-urls) , caso ainda não apareçam.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

```js
newrelic.setPageViewName('/login')
// Or
newrelic.setPageViewName('/login', 'https://www.myapp.com')
```
