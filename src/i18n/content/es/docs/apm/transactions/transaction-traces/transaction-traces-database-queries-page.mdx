---
title: 'Traza de la transacción: página de consulta de la base de datos'
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: 'In APM, transaction traces can include database query data, which gives you deeper insight into performance issues.'
freshnessValidatedDate: never
translationType: machine
---

En [APM](/docs/apm/new-relic-apm/getting-started/welcome-new-relic-apm), la traza de la transacción puede contener datos de consulta de la base de datos. Utilice la página <DNT>**Database queries**</DNT> para analizar una transacción lenta o cambiar la configuración de recopilación de la base de datos.

## Buscar consulta de la base de datos [#view-sql]

Si los datos de la consulta de la base de datos están asociados con su [traza de la transacción seleccionada](/docs/apm/transactions/transaction-traces/transaction-traces#find-view), la página <DNT>**Database queries**</DNT> será visible desde la página de detalles <DNT>**Transaction trace**</DNT> .

Si espera ver datos de la base de datos para una traza de la transacción pero no los ve, es posible que deba cambiar la [configuración de consulta de la base de datos](#settings).

<img
  title="transaction trace database queries tab"
  alt="A screenshot depicting the transaction trace database queries tab in the UI."
  src="/images/apm_screenshot-crop_transaction-trace-database-queries-tab.webp"
/>

<figcaption>
  Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace) > Database queries**</DNT>.
</figcaption>

## Utilice la consulta de la base de datos [#use]

Estas son situaciones en las que puede utilizar la página **de consulta de la base de datos** para analizar y solucionar problemas de una transacción lenta:

* Observa en la [página **Overview** de APM](/docs/apm/applications-menu/monitoring/apm-overview-page) que una transacción es anormalmente lenta.
* Selecciona una [traza de la transacción](/docs/apm/transactions/transaction-traces/transaction-traces) para obtener más detalles sobre esa transacción.
* Selecciona la página de **Database queries** para examinar la consulta lenta en la traza y utilizarla como base para [solucionar problemas y mejorar el rendimiento de tu aplicación](#troubleshooting).
* Cuando exista un rastreo del stack asociado con una consulta de la base de datos, haga clic en la fila en la **tabla de consulta de la base de datos** para ver el rastreo del stack formateado.

<img
  title="transaction trace stacktrace view"
  alt="A screenshot showing the stacktrace view of a transaction trace in the UI"
  src="/images/apm_screenshot-crop_transaction-trace-stacktrace-view.webp"
/>

## Configurar los ajustes de consulta de la base de datos [#settings]

Puede cambiar la configuración de consulta de la base de datos de la misma manera que cambia otras [configuraciones de traza de la transacción](/docs/apm/transactions/transaction-traces/configure-transaction-traces); por ejemplo, mediante la configuración del agente New Relic o, para algunos agentes, a través de la UI.

Los cambios comunes en la configuración de la consulta de la base de datos incluyen:

* [Recopilar datos de consultas sin procesar en lugar de ofuscarlos o desactivar la recopilación de consultas](/docs/apm/transactions/transaction-traces/configure-transaction-traces#record-sql)
* Cambiando el umbral del rastreo del stack
* Activar consulta para explicar la recopilación del plan

## Utilice la consulta de la base de datos para mejorar el rendimiento [#troubleshooting]

A continuación se ofrecen algunos consejos para mejorar el rendimiento de la base de datos de su aplicación:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Use database queries**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tiempo
      </td>

      <td>
        Busque consultas en las que `TOTAL DURATION` contribuya con una gran cantidad de tiempo al tiempo total de transacción. Esto indica un buen lugar para intentar mejorar su consulta de la base de datos con un índice o alguna otra optimización.
      </td>
    </tr>

    <tr>
      <td>
        Consulta duplicada
      </td>

      <td>
        Busque consultas que consulten repetidamente el mismo tipo de información; por ejemplo, consultas múltiples para buscar ID de cuentas individuales. Intente reescribir la consulta a `INCLUDE` los valores específicos (ID de cuenta 1, 2, 10, 14, 17, etc.) para que una sola consulta pueda obtener todos los elementos relevantes.
      </td>
    </tr>

    <tr>
      <td>
        Sobrecarga de base de datos
      </td>

      <td>
        Mire la estructura de su consulta para ver si existen oportunidades para combinar diferentes tipos de información en una sola llamada; por ejemplo, consultando el ID de la cuenta, el nombre, etc. Esto es útil, por ejemplo, si su centro de base de datos está en una ubicación geográfica diferente, porque reducirá los gastos generales.

        La cantidad de tiempo para la solicitud y respuesta de su base de datos puede ser muy rápida. Sin embargo, al combinar solicitudes en menos llamadas, puedes reducir ese tiempo aún más.
      </td>
    </tr>

    <tr>
      <td>
        MySQL
      </td>

      <td>
        Desde la página principal [APM <DNT>**Summary**</DNT>](/docs/apm/applications-menu/monitoring/apm-overview-page) de su aplicación, compare el tiempo de la base de datos en el gráfico principal con otros tiempos de procesamiento. Los picos repentinos o mayores cantidades de tiempo de la base de datos en comparación con otros tiempos de procesamiento pueden indicar problemas.
      </td>
    </tr>
  </tbody>
</table>

## Encuentra otra consulta lenta [#slow-queries]

La página **Trace details** es útil para examinar los detalles de una transacción específica. Para ver todas las consultas más lentas de tu aplicación en un solo lugar, utiliza la [consulta lenta característica](/docs/apm/applications-menu/monitoring/viewing-slow-query-details).
