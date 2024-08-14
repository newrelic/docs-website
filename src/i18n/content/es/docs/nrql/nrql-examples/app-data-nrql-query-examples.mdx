---
title: Ejemplos de consulta NRQL de datos de aplicaciones
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: Basic examples of using NRQL to query app data collected by New Relic products.
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar NRQL para consultar los datos de la aplicación recopilados por [<InlinePopover type="apm"/>](/docs/apm/), [<InlinePopover type="browser"/>](/docs/browser/)y [monitoreo de móviles](/docs/mobile-monitoring/). Luego puede utilizar estos datos para responder una variedad de preguntas. A continuación se muestran algunos ejemplos básicos.

## Usuario único [#unique-users]

¿Cuántas sesiones de usuario único tuviste en la última semana?

```
<a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#state-select">SELECT</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-uniqueCount">uniqueCount</a>(session) <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-from">FROM</a> <a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#browser-defaults">PageView</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since">SINCE</a> 1 week ago
```

## Tendencias de usuario únicas [#unique-users-trends]

¿Sus sesiones de usuario único aumentaron o disminuyeron la semana pasada en comparación con la semana anterior?

```
<a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#state-select">SELECT</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-uniqueCount">uniqueCount</a>(session) <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-from">FROM</a> <a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#browser-defaults">PageView</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since">SINCE</a> 1 week ago <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-compare">COMPARE WITH</a> 1 week ago
```

## Tendencias de páginas vistas [#pageview-trend-graphs]

¿Cómo puedo graficar el número de usuarios únicos ayer en comparación con el día anterior?

```
<a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#state-select">SELECT</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-count">count</a>(*) <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-from">FROM</a> <a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#browser-defaults">PageView</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since">SINCE</a> 1 day ago <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-compare">COMPARE WITH</a> 1 day ago <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-timeseries">TIMESERIES</a> AUTO
```

## Versión del sistema operativo [#os-version-example]

¿Cuántos de sus usuarios de dispositivos móviles tienen la última versión del sistema operativo?

```
<a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#state-select">SELECT</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-uniqueCount">uniqueCount</a>(<a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#uuid">uuid</a>) <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-from">FROM</a> MobileSession <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-facet">FACET</a> <a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#mob-osversion">osVersion</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since">SINCE</a> 7 days ago
```

## Apdex de cuenta clave [#key-acct-apdex]

¿Cuál es la [puntuación Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) para un cliente especialmente importante? Si ha [definido algún atributo personalizado](/docs/insights/new-relic-insights/decorating-events/insights-custom-attributes), puede consultar para monitor cómo este cliente experimenta su aplicación desde el punto de vista del rendimiento:

```
<a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#state-select">SELECT</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#func-apdex">apdex</a>(<a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#txn-duration">duration</a>, <a href="/docs/apm/new-relic-apm/getting-started/glossary#apdex_t">t</a>: 0.4) <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-from">FROM</a> <a href="/docs/insights/new-relic-insights/decorating-events/insights-attributes#transaction-defaults">Transaction</a> <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-where">WHERE</a> customerName='ReallyImportantCustomer' <a href="/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since">SINCE</a> 1 day ago
```
