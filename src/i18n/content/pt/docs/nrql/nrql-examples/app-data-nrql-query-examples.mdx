---
title: Exemplos de consulta NRQL de dados de aplicativos
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: Basic examples of using NRQL to query app data collected by New Relic products.
freshnessValidatedDate: never
translationType: machine
---

Você pode usar NRQL para consultar os dados do aplicativo coletados por [<InlinePopover type="apm"/>](/docs/apm/), [<InlinePopover type="browser"/>](/docs/browser/)e [monitoramento de Mobile](/docs/mobile-monitoring/). Você pode então usar esses dados para responder a uma variedade de perguntas. Aqui estão alguns exemplos básicos.

## Usuário único [#unique-users]

Quantas sessões de usuário único você teve na última semana?

```
<a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#state-select">SELECT</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-uniqueCount">uniqueCount</a>(session) <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-from">FROM</a> <a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#browser-defaults">PageView</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since">SINCE</a> 1 week ago
```

## Tendências exclusivas do usuário [#unique-users-trends]

Suas sessões de usuário único aumentaram ou diminuíram na semana passada em comparação com a semana anterior?

```
<a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#state-select">SELECT</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-uniqueCount">uniqueCount</a>(session) <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-from">FROM</a> <a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#browser-defaults">PageView</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since">SINCE</a> 1 week ago <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-compare">COMPARE WITH</a> 1 week ago
```

## Tendências de visualização de página [#pageview-trend-graphs]

Como posso representar graficamente o número de usuários únicos de ontem em comparação com o dia anterior?

```
<a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#state-select">SELECT</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-count">count</a>(*) <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-from">FROM</a> <a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#browser-defaults">PageView</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since">SINCE</a> 1 day ago <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-compare">COMPARE WITH</a> 1 day ago <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-timeseries">TIMESERIES</a> AUTO
```

## Versão do sistema operacional [#os-version-example]

Quantos dos seus usuários móveis estão na versão mais recente do sistema operacional?

```
<a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#state-select">SELECT</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-uniqueCount">uniqueCount</a>(<a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#uuid">uuid</a>) <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-from">FROM</a> MobileSession <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-facet">FACET</a> <a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#mob-osversion">osVersion</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since">SINCE</a> 7 days ago
```

## Conta-chave Apdex [#key-acct-apdex]

Qual é a [pontuação Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) para clientes particularmente importantes? Se você [definiu algum atributo personalizado](/docs/insights/new-relic-insights/decorating-events/insights-custom-attributes), você pode consultar para monitor como esse cliente vivencia seu aplicativo do ponto de vista de desempenho:

```
<a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#state-select">SELECT</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-apdex">apdex</a>(<a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#txn-duration">duration</a>, <a href="/docs/apm/new-relic-apm/getting-started/glossary#apdex_t">t</a>: 0.4) <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-from">FROM</a> <a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#transaction-defaults">Transaction</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-where">WHERE</a> customerName='ReallyImportantCustomer' <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since">SINCE</a> 1 day ago
```
