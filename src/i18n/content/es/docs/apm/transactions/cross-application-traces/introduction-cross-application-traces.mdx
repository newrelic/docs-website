---
title: Introducción a la multiaplicación traza.
tags:
  - APM
  - Transactions
  - Cross application traces
metaDescription: APM's cross application tracing feature allows you to view details for applications that happen across multiple applications.
freshnessValidatedDate: never
translationType: machine
---

El rastreo de aplicaciones múltiples de APM le permite vincular transacciones entre su aplicación APM-monitor.

## ¿Qué es el rastreo multiaplicación? [#feature]

<Callout variant="important">
  El rastreo de aplicaciones múltiples ha quedado obsoleto en favor de [la característica de distribución de rastreo](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) y se eliminará en futuras versiones de agente. Distributed tracing es una mejora de la característica de rastreo multiaplicación y se recomienda para sistemas distribuidos de gran tamaño.
</Callout>

La multiaplicación de APM traza el enlace de transacciones entre aplicaciones APM en su arquitectura orientada a servicios (SOA). Esto es útil, por ejemplo, para identificar problemas de rendimiento entre su propia aplicación (la aplicación "que llama") y cualquier servicio interno o externo (la aplicación "llamada"), como el tráfico a servicios internos.

Esto te ayuda a:

* Localiza cuello de botella en tus flujos de llamadas multiaplicación.
* Comprenda de principio a fin cómo otras aplicaciones y servicios utilizan transacciones específicas.
* Diagnostica problemas más rápido y mejora la colaboración entre equipos.

## Consideraciones de Seguridad [#security]

El rastreo de múltiples aplicaciones se basa en tres encabezados HTTP para intercambiar información entre la aplicación que llama y la llamada.

* Los dos primeros (`X-NewRelic-ID` y `X-NewRelic-Transaction`) aparecen como encabezados de solicitud HTTP en solicitudes salientes enviadas por una aplicación instrumentada.
* El encabezado restante (`X-NewRelic-App-Data`) se inserta en la respuesta HTTP si la aplicación llamada pertenece a la misma cuenta de New Relic que la aplicación que llama.

New Relic ofusca todos estos encabezados usando un esquema de ofuscación idéntico al que usamos para <InlinePopover type="browser"/>, pero con una clave diferente.

<table>
  <thead>
    <tr>
      <th width={250}>
        <DNT>
          **HTTP header**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `X-NewRelic-ID`

        (en el encabezado de la solicitud)
      </td>

      <td>
        Contiene el ID de cuenta y el ID de la aplicación que realiza la llamada.
      </td>
    </tr>

    <tr>
      <td>
        `X-NewRelic-Transaction`

        (en el encabezado de la solicitud)
      </td>

      <td>
        Contiene información sobre una transacción individual creada por la llamada (un GUID exclusivo de la transacción que realiza la llamada, junto con información sobre las llamadas ascendentes que generaron la transacción)
      </td>
    </tr>

    <tr>
      <td>
        `X-NewRelic-App-Data`

        (en la respuesta si aplica)
      </td>

      <td>
        Contiene información sobre la aplicación llamada, que incluye:

        * ID de la cuenta
        * ID de la aplicación
        * Nombre de la transacción llamada
        * Información de tiempo para la transacción llamada
        * GUID de la transacción llamada
      </td>
    </tr>
  </tbody>
</table>
