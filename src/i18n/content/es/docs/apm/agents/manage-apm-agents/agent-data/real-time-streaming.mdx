---
title: Detalles sobre la transmisión en tiempo real de APM
tags:
  - Agents
  - Manage APM agents
  - Agent data
metaDescription: 'For APM, query and visualize data for transactions, errors, and custom events in  near real time.'
freshnessValidatedDate: never
translationType: machine
---

Con la transmisión en tiempo real, los datos de su evento APM se envían a New Relic cada cinco segundos. Puede consultar y visualizar sus datos para transacciones, errores y eventos personalizados casi en tiempo real. Una carga más pequeña da como resultado actualizaciones de gráficos más rápidas y una consulta más rápida de los datos que son más importantes para usted.

Para obtener detalles sobre los agentes que admiten esta característica, consulte [versiones del agente](#enable).

¿Quiere transmitir sus datos de New Relic a la nube? Ver [streaming de datos de exportación](/docs/apis/nerdgraph/examples/nerdgraph-streaming-export).

## Por qué es importante [#benefits]

La transmisión en tiempo real no da como resultado el envío de más eventos. La combinación de publicaciones más frecuentes, con una menor cantidad de eventos por publicación, da como resultado aproximadamente la misma cantidad de eventos por minuto que habría sin la transmisión en tiempo real.

La siguiente imagen muestra una comparación entre los datos enviados a New Relic con y sin transmisión en tiempo real. Tenga en cuenta que 10.000 es un número de ejemplo de evento; Algunos agentes tienen límites predeterminados más bajos.

<img
  title="Real time streaming diagram"
  alt="Real time streaming diagram"
  src="/images/apm_diagram_real-time-streaming.webp"
/>

Los límites generales sobre cuántos eventos se pueden enviar por minuto no han cambiado. Además, los datos que no son de evento (spans, traza y métrica) no se ven afectados; todavía se envían cada minuto.

Utilice la transmisión en tiempo real para comprender rápidamente el impacto cuando algo cambia, como desplegar una nueva versión de la aplicación.

* Examine los indicadores de rendimiento clave (rendimiento, tasa de errores, gráficos, etc.) casi en tiempo real.
* Responder rápidamente a condiciones de falla y anomalía.
* Aproveche al máximo nuestro [panel de control](#create).
* Reduzca el tiempo medio de detección con informes de eventos APM cada cinco segundos.

## Consulta streaming de datos en tiempo real [#nrql]

Al crear gráficos, incluya lo siguiente en su consulta NRQL:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Cláusula NRQL
      </th>

      <th>
        Comentarios
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `SINCE 5 minutes ago`
      </td>

      <td>
        Asegúrese de agregar una [cláusula`SINCE 5 minutes ago` ](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-components-functions#sel-since)a su consulta NRQL para aprovechar el intervalo de actualización del gráfico de 5 segundos. Esto se debe a que el [intervalo de actualización del gráfico](/docs/insights/use-insights-ui/manage-dashboards/insights-chart-refresh-intervals) se basa en la ventana de tiempo.
      </td>
    </tr>

    <tr>
      <td>
        `TIMESERIES` balde
      </td>

      <td>
        Para establecer el intervalo de actualización de los gráficos de series temporales, también puede especificar el tamaño del depósito como argumento opcional de la [cláusula`TIMESERIES` ](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-components-functions#sel-timeseries). Por ejemplo, `SINCE 30 minutes ago TIMESERIES 5 seconds` mostrará una ventana de 30 minutos con una resolución de 5 segundos. Puede tener un máximo de 366 depósitos.
      </td>
    </tr>
  </tbody>
</table>

## Crea gráficos de transmisión en tiempo real [#create]

Puede visualizar los resultados de su consulta NRQL a través de gráficos en tiempo real:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Query builder**
   </DNT>

   .

2. Utilice el [explorador métrica & eventos](/docs/query-your-data/explore-query-data/browse-data/introduction-data-explorer) para comenzar a crear un gráfico.

3. Para consultas aplicables, coloque el cursor sobre la consulta y haga clic en

   <DNT>
     **Edit in query builder**
   </DNT>

   para refinar su consulta.

4. En su consulta NRQL, ajuste las [cláusulas`SINCE` y `TIMESERIES` ](#nrql)para aprovechar los intervalos de actualización de 5 segundos.

## Versiones del agente con esta característica [#enable]

La transmisión en tiempo real es compatible con todos los agentes APM. Estas son las versiones mínimas del agente:

* <DNT>
    **Go:**
  </DNT>

  [v2.8.0 o superior](/docs/release-notes/agent-release-notes/go-release-notes)

* <DNT>
    **Java:**
  </DNT>

  [v5.5.0 o superior](/docs/release-notes/agent-release-notes/java-release-notes)

* <DNT>
    **.NET:**
  </DNT>

  [v8.23.107.0 o superior](/docs/release-notes/agent-release-notes/net-release-notes)

* <DNT>
    **Node.js:**
  </DNT>

  [v5.13.0 o superior](/docs/release-notes/agent-release-notes/nodejs-release-notes)

* <DNT>
    **PHP:**
  </DNT>

  [v9.5.0.252 o superior](/docs/release-notes/agent-release-notes/php-release-notes)

* <DNT>
    **Python:**
  </DNT>

  [v5.2.0.127 o superior](/docs/release-notes/agent-release-notes/python-release-notes)

* <DNT>
    **Ruby:**
  </DNT>

  [v6.7.0.359 o superior](/docs/release-notes/agent-release-notes/ruby-release-notes)

<Callout variant="caution">
  Si el informe de eventos de transacciones está [deshabilitado](/docs/insights/use-insights-ui/manage-account-data/data-summary-page-manage-apps-reporting-insights#enable-disable), esto puede afectar algunos elementos UI en New Relic. Es posible que vea algunos gráficos vacíos en algunas páginas UI que se basan en estos datos.
</Callout>
