---
title: Solucionar problemas de API métrica con el evento NRIntegrationError
type: troubleshooting
tags:
  - Ingest and manage data
  - Ingest APIs
metaDescription: Troubleshoot missing data from the Metric API by querying NRIntegrationError data.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Enviaste puntos de datos de métrica a la [API de métrica](/docs/introduction-new-relic-metric-api) y no ves lo que esperas al consultar los datos. Utilice la siguiente lista de verificación para determinar la causa raíz:

* Asegúrese de [consultar los datos correctamente](/docs/introduction-new-relic-metric-api#view-and-query).
* Verifique los [códigos de estado HTTP devueltos por la API](/docs/report-metrics-metric-api#response-validation). Problemas como errores de autorización se pueden diagnosticar con códigos de estado HTTP.
* Si está enviando datos desde un servidor Prometheus a través [del extremo remoto_write de New Relic](/docs/integrations/prometheus-integrations/get-started/monitor-prometheus-new-relic#remote-write), verifique el registro del servidor Prometheus para ver si hay errores o respuestas HTTP que no sean 2xx del extremo New Relic.
* Consulta tu cuenta para [`NrIntegrationError` evento](/docs/telemetry-data-platform/manage-data/nrintegrationerror). El extremo de ingestión de New Relic es asincrónico, lo que significa que el extremo verifica la carga útil _después_ de devolver la respuesta HTTP. Si ocurre algún problema al verificar su carga útil, se creará un evento `NrIntegrationError` en su cuenta. New Relic también utiliza `NrIntegrationError` evento para notificar a los clientes cuando se han alcanzado varios límites de tarifas.

## Solución

### Ver detalles del error [#error-details]

Para obtener una introducción al uso del evento `NrIntegrationError` , consulte [`NrIntegrationError`](/docs/telemetry-data-platform/manage-data/nrintegrationerror).

A continuación se muestra un NRQL de ejemplo para examinar problemas con la ingesta de API métrica:

```sql
SELECT count(*) FROM NrIntegrationError WHERE newRelicFeature = 'Metrics' 
FACET category, message LIMIT 100 SINCE 24 hours ago
```

El `category` indica el tipo de error y el `message` proporciona información más detallada sobre el error. Si `category` es `rateLimit`, también debe examinar el campo `rateLimitType` para obtener más información sobre el tipo de limitación de velocidad.

<table>
  <thead>
    <tr>
      <th>
        Categoría
      </th>

      <th>
        rateLimitType
      </th>

      <th>
        Descripción y solución
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `BadRequest`
      </td>

      <td>
        (no establecido)
      </td>

      <td>
        Hay un problema con la carga útil JSON. Estos incluyen errores de sintaxis JSON, nombres de atributos o valores demasiado largos.

        Verifique el campo `message` para determinar el problema exacto. Luego revise la carga útil JSON y actualícela para asegurarse de que cumpla con las pautas semánticas adecuadas.
      </td>
    </tr>

    <tr>
      <td>
        `RateLimit`
      </td>

      <td>
        `DatapointsPerMinute`
      </td>

      <td>
        Estás enviando demasiados puntos de datos por minuto. Si recibe este error, puede enviar datos con menos frecuencia o solicitar cambios en los límites de su tasa métrica comunicándose con su representante de cuenta de New Relic o visitando nuestro [portal de soporte](https://support.newrelic.com/).
      </td>
    </tr>

    <tr>
      <td>
        `RateLimit`
      </td>

      <td>
        `UniqueTimeseriesPerDay`
      </td>

      <td>
        Tienes un atributo con un alto número de valor único, como `containerId` o `URI`. Para resolver este error, revise cualquier atributo que pueda estar causando el problema y elimínelo. Si lo desea, puede utilizar [reglas de eliminación de datos](/docs/accounts/accounts/data-management/drop-data-using-nerdgraph) para eliminar el atributo en el momento de la ingesta.
      </td>
    </tr>

    <tr>
      <td>
        `RateLimit`
      </td>

      <td>
        `UniquePrometheusTimeseries`
      </td>

      <td>
        Tiene servidores Prometheus que informan demasiadas series temporales únicas a través [del extremo remoto_write de New Relic](/docs/integrations/prometheus-integrations/get-started/monitor-prometheus-new-relic#remote-write).

        Reduzca la cantidad de series temporales únicas reportadas modificando [la configuración de su servidor Prometheus](https://prometheus.io/docs/prometheus/latest/configuration/configuration/) para reducir la cantidad de objetivos que se eliminan, o usando [reglas de reetiqueta](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config) en la [sección remote_write](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write) de la configuración de su servidor para eliminar series temporales o etiquetas altamente exclusivas.
      </td>
    </tr>

    <tr>
      <td>
        `RateLimit`
      </td>

      <td>
        `RequestsPerMinute`
      </td>

      <td>
        Se envían demasiadas solicitudes por minuto. Para resolver esto, coloque más puntos de datos en cada solicitud y envíelos con menos frecuencia.
      </td>
    </tr>

    <tr>
      <td>
        `RateLimit`
      </td>

      <td>
        `ErrorGroupsPerDay`
      </td>

      <td>
        Ha excedido su límite de grupo de errores diario. Los grupos de errores entrantes se eliminarán durante el resto del día y continuarán normalmente después de la medianoche UTC.

        Para resolver esto, reduzca la cantidad de mensajes de error únicos recopilados por New Relic.
      </td>
    </tr>
  </tbody>
</table>

### Errores de coincidencia con la carga ingerida [#errors-payloads]

Cuando se crea un [evento`NrIntegrationError` ](/docs/telemetry-data-platform/manage-data/nrintegrationerror)como resultado de un problema de sintaxis con la carga útil de la solicitud HTTP, el evento contiene el atributo `apiKeyPrefix` y `requestId`.

* El `apiKeyPrefix` coincide con los primeros 6 caracteres de la clave de API utilizada para enviar los datos.
* El `requestId` coincide con el `requestId` enviado en la respuesta HTTP.

Para ver estos campos, ejecute esta consulta NRQL:

```sql
SELECT message, apiKeyPrefix, requestId FROM NrIntegrationError LIMIT 100
```

Para verificar un `requestId` específico, ejecute esta consulta NRQL:

```sql
SELECT * FROM NrIntegrationError WHERE requestId = 'REQUEST_ID'
```

### Recuperar mediante programación el evento NrIntegrationError

Para recuperar estos errores mediante programación:

1. Asegúrese de tener una [clave de consulta API con información valiosa](/docs/insights/insights-api/get-data/query-insights-event-data-api) (vaya a <DNT>**[insights.newrelic.com](https://insights.newrelic.com) > Manage data > API keys**</DNT>).

2. Cree una solicitud HTTP como se muestra a continuación:

   <Callout variant="tip">
     Si su organización aloja datos en el centro de datos de la UE, asegúrese de utilizar el [extremo de la región de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center#endpoints).
   </Callout>

   ```bash
   curl -H "Accept: application/json" -H "X-Query-Key:YOUR_API_KEY_HERE" "https://insights-api.newrelic.com/v1/accounts/YOUR_ACCOUNT_HERE/query?nrql=SELECT%20*%20FROM%20NrIntegrationError%20where%20newRelicFeature='Metrics'"
   ```
