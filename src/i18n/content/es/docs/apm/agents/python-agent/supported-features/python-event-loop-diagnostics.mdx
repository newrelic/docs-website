---
title: Diagnóstico del bucle de eventos de Python
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: 'The Python agent supports asyncio event loop diagnostics, giving you insight into transactions delaying or blocking the completion of event loops.'
freshnessValidatedDate: never
translationType: machine
---

El [agente Python](/docs/agents/python-agent/getting-started/introduction-new-relic-python) admite el diagnóstico de bucle de eventos [asíncio](https://docs.python.org/3/library/asyncio.html) . Cuando hay transacciones que bloquean o retrasan un bucle de eventos, el agente puede generar diagnósticos para ayudar a encontrarlos y resolverlos.

## Requisitos

Requiere [la versión 5.0.0.124 o superior del agente Python](/docs/release-notes/agent-release-notes/python-release-notes).

## Ver en UIde New Relic

En APM, los datos de su transacción de bucle de eventos estarán en la tabla de desglose de transacciones y en la página de detalles de la traza.

Evento loop métrica aparecerá en la transacción <DNT>**Breakdown table**</DNT>:

<img
  title="Find APM transaction table"
  alt="Where to find the APM transaction table link from Transactions in the UI"
  src="/images/apm_screenshot-full_find-apm-transaction-table.webp"
/>

<img
  title="Find APM transaction table"
  alt="Where to find the APM transaction table link from Transactions in the UI"
  src="/images/apm_screenshot-crop_transaction-table-breakdown.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Transactions**</DNT>, haga clic en <DNT>**See transaction table**</DNT> y luego seleccione una transacción: el evento de indicadores <DNT>**Breakdown table**</DNT> de la transacción se repite con asyncio.
</figcaption>

El tiempo de espera en otras transacciones se mostrará en la página de transacción <DNT>**Trace details**</DNT> :

<img
  title="python-event-loop-trace-details.png"
  alt="Python event loop trace details"
  src="/images/apm_screenshot-crop_transaction-breakdown-page.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com](https://one.newrelic.com/all-capabilities) APM & services > (select an app) > Transactions > (select a transaction trace) > Trace details:**</DNT> La página <DNT>**Trace details**</DNT> contiene una tabla con desgloses para cada segmento (método o llamada de función) en una traza de la transacción.
</figcaption>

## Evento Loop consulta NRQL

`eventLoopTime` y `eventLoopWait` atributo estará disponible mediante consulta NRQL. Una consulta de ejemplo podría ser:

`SELECT count(*) as 'count', average(eventLoopTime) as 'loopTime', average(eventLoopWait) as 'loopWait' FROM Transaction facet name`

## Dónde diagnosticar bucles de eventos

El diagnóstico de bucle de eventos estará disponible de forma predeterminada a través de nuestro marco de instrumentación existente aiohttp, sanic y Tornado. Las corrutinas que utilizan la API del agente Python [background_task](/docs/agents/python-agent/python-agent-api/background_task) y las API decoradoras [web_transaction](/docs/agents/python-agent/python-agent-api/webtransaction) también admiten los bucles de eventos de asyncio.
