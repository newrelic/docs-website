---
title: API REST de evento de incidente
tags:
  - Alerts and applied intelligence
  - Applied intelligence
  - Incident intelligence
metaDescription: Read about how to report activities from your applied intelligence incident management system to New Relic for advanced correlation.
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar la [API de eventos](/docs/data-apis/ingest-apis/introduction-event-api) para informar eventos de incidentes de inteligencia aplicada personalizados a New Relic.

La API es un extremo asíncrono. Esto significa que puede enviar un gran volumen de POSTS, de manera confiable, con baja latencia de respuesta.

## Uso de la API: descripción general [#overview]

Este es el proceso general para enviar eventos de incidentes personalizados a New Relic a través de la API de eventos de incidentes:

1. Genere un

   <InlinePopover type="licenseKey"/>

   para la cuenta a la que desea informar datos.

2. Antes de comenzar a crear un atributo personalizado, revise [los límites y los caracteres restringidos de la API del evento](/docs/data-apis/ingest-apis/introduction-event-api/#limits).

3. Genere el JSON para su evento de incidente que siga nuestras [pautas de formato JSON](/docs/data-apis/ingest-apis/introduction-event-api#instrument).

4. Envíe una carga útil JSON comprimida (por ejemplo, gzip o deflate) al extremo HTTPS usando curl en una solicitud POST.

Una vez que haya comenzado a enviar datos de eventos de incidentes a New Relic, le recomendamos que configure [la condición de alerta NRQL](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions) para recibir notificaciones sobre errores de análisis.

## Ejemplo JSON [#example-json]

Su carga útil JSON puede parecerse a este ejemplo.

```json
[
  {
    "eventType": "NrAiIncidentExternal",
    "title": "Test",
    "description": "The latency is above threshold of 500000 MS",
    "state": "trigger",
    "source": "luna",
    "entityName": "testEntity",
    "entity.guid": "testEntity123",
    "aggregationTag.serviceId": 5,
    "aggregationTag.environment": "testing",
    "aggregationTag.errorId": 10543,
    "tag.stackTrace": "some stack trace...",
    "version": 1
  }
]
```

El campo `eventType` debe utilizar `NrAiIncidentExternal`.

## Envíe su evento de incidente desde la línea de comando [#cli]

Aquí hay un ejemplo de cómo usar curl para enviar su carga útil JSON.

```bash
gzip -c example_incidents.json | curl --data-binary @- -X POST -H "Content-Type: application/json" -H "Api-Key: YOUR_LICENSE_KEY" -H "Content-Encoding: gzip"
https://insights-collector.newrelic.com/v1/accounts/YOUR_ACCOUNT/events
```

```json
Response
{"success":true, "uuid":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"}%
```

Una vez que haya enviado correctamente los datos del evento de incidente, podrá verlos en la UI de inteligencia aplicada o [consultando esos datos](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language).

### Ejemplo de consulta para evento incidente [#nrdb-example]

Puedes consultar tus datos con [Nerdgraph API](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/).

A continuación se muestra un ejemplo de una consulta NerdGraph y su resultado.

```graphql
{
  actor {
    account(id: YOUR_ACCOUNT_ID) {
      nrql(query: "SELECT * FROM NrAiInternalIncident since 3 days ago") {
        results
      }
    }
  }
}
```

```json
"results": [
  {
    "timestamp": 1641910123824,
    "totalViolations": 3,
    "violationIds": "[416e2e55069764086ad83e97a1160be0cb4c545b7950522f7c86baaa2a11b9b6]",
    "triggeredAt": 1641909163980,
    "entitiesData.ids": "testEntity123",
    "entitiesData.types": "unknown",
    "labelsHash": "91f938318e899dcd62965e2724548f4844f2898f3cf1c5411397ecc0eec87fc1",
    "annotations.description": "[\"The latency is above threshold of 500000 MS\"]",
    "labels.originalAccountIds": "YOUR_ACCOUNT_ID",
    "entitiesData.names": "testEntity",
    "entitiesData.entities": "{\"id\":\"testEntity123\",\"name\":\"testEntity\",\"type\":\"unknown\"}",
    "priority": "HIGH",
    "labels.serviceId": "5",
    "labels.environment": "testing",
    "closedAt": "",
    "updatedAt": 1641910123824,
    "annotations.title": "[\"Test\",\"Test2222\",\"Test3\"]",
    "nrAccountId": YOUR_ACCOUNT_ID,
    "accumulations": "{\"source\":[\"rest\"],\"origin\":[\"luna\"],\"entity_guid\":[\"testEntity123\"],\"tag.stackTrace\":[\"some stack trace...\"]}",
    "labels.accountIds": "YOUR_ACCOUNT_ID",
    "createdAt": 1641909163997,
    "priority.order": 2,
    "labels.aggregationKeys": "416e2e55069764086ad83e97a1160be0cb4c545b7950522f7c86baaa2a11b9b6",
    "accumulations.origins": "[\"luna\"]",
    "accumulations.entity_guid": "[\"testEntity123\"]",
    "incidentId": "a06ffb92-2f7e-473b-953f-151ff4777cb0",
    "labels.errorId": "10543",
    "dataMLModules": "{}",
    "triggerEvent": "VIOLATION_ADDED",
    "accumulations.tag.stackTrace": "[\"some stack trace...\"]",
    "isIint": false,
    "accumulations.sources": "[\"rest\"]",
    "entitiesData": "{\"name\":\"testEntity\",\"id\":\"testEntity123\",\"type\":\"unknown\",\"entities\":\"{\\\"id\\\":\\\"testEntity123\\\",\\\"name\\\":\\\"testEntity\\\",\\\"type\\\":\\\"unknown\\\"}\"}",
    "annotations": "{\"title\":[\"Test\",\"Test2222\",\"Test3\"],\"description\":[\"The latency is above threshold of 500000 MS\"]}",
    "labels": "{\"accountId\":\"XXXXXXX\",\"originalAccountId\":\"XXXXXXX\",\"entityId\":\"testEntity123\",\"entityName\":\"testEntity\",\"entityType\":\"unknown\",\"aggregationKey\":\"416e2e55069764086ad83e97a1160be0cb4c545b7950522f7c86baaa2a11b9b6\",\"serviceId\":\"5\",\"errorId\":\"10543\",\"environment\":\"testing\"}",
    "state": "CREATED"
  }
]
```

## Especificación de API de evento de incidente [#api-specs]

La API de eventos incidente utiliza los tipos de valores de la API de eventos. Para obtener descripciones de estos tipos de valores y pautas sobre su uso, consulte [nuestras pautas de evento API JSON](/docs/data-apis/ingest-apis/introduction-event-api/#json-guidelines).

<table>
  <thead>
    <tr>
      <th>
        Campo
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `aggregationTag.*`

        _cadena_, _número_ o _timestamp_
      </td>

      <td>
        <DNT>
          **REQUIRED**
        </DNT>

        Cualquier atributo con el prefijo `aggregationTag` se utilizará para agregar eventos de activación.

        En otras palabras, dos eventos desencadenantes con la misma etiqueta de agregación se agregan al mismo incidente. (Esto supone que no hay ningún evento de resolución entre ellos).

        Al resolver un incidente, es importante que el evento de resolución incluya la misma etiqueta de agregación.

        Se filtran las etiquetas de agregaciones con palabras clave reservadas. Por ejemplo, en una carga útil JSON con `aggregationTag.priority: 2` , este par principal de valor se omitirá en el evento del incidente con estas palabras clave reservadas:

        ```json
        reserved_key: {"priority",  "accountId", "originalAccountId", "policyId", "conditionId", "aggregationKey", "entityType", "entityName", "entityId", "violationUuid", "violationId", "nrIncidentId" }
        ```
      </td>
    </tr>

    <tr>
      <td>
        `state`

        _enumeración: (`trigger`, `resolve`)_
      </td>

      <td>
        <DNT>
          **REQUIRED**
        </DNT>

        Si el evento debería desencadenar un nuevo incidente o resolver uno existente. Las actualizaciones del incidente también se pueden enviar mediante un disparador.
      </td>
    </tr>

    <tr>
      <td>
        `priority`

        _enumeración: (`low`, `medium`, `high`, `critical`)_
      </td>

      <td>
        La prioridad del incidente. Predeterminado: `high`.

        Se utilizará la prioridad más alta cuando se envíen prioridades diferentes.
      </td>
    </tr>

    <tr>
      <td>
        `title`

        _cadena_
      </td>

      <td>
        <DNT>
          **REQUIRED, when `state` is `trigger`**
        </DNT>

        El título del evento desencadenante.
      </td>
    </tr>

    <tr>
      <td>
        `source`

        _cadena_
      </td>

      <td>
        <DNT>
          **REQUIRED, when `state` is `trigger`**
        </DNT>

        El origen del incidente, o el sistema de monitoreo que lo desencadenó (no la entidad que falló).
      </td>
    </tr>

    <tr>
      <td>
        `description`

        _cadena_
      </td>

      <td>
        La descripción del evento desencadenante.
      </td>
    </tr>

    <tr>
      <td>
        `deepLinkUrl`

        _cadena_
      </td>

      <td>
        Un enlace profundo a una página relacionada con el incidente.
      </td>
    </tr>

    <tr>
      <td>
        `runbookUrl`

        _cadena_
      </td>

      <td>
        Una URL del runbook.
      </td>
    </tr>

    <tr>
      <td>
        `externalId`

        _cadena_
      </td>

      <td>
        Una identificación externa que puedes adjuntar al evento.

        Por ejemplo, se puede utilizar para consultar errores relacionados con la ingesta de este evento.
      </td>
    </tr>

    <tr>
      <td>
        `entityName`

        _cadena_
      </td>

      <td>
        El nombre de la entidad que generó el incidente.
      </td>
    </tr>

    <tr>
      <td>
        `entity.guid`

        _cadena_
      </td>

      <td>
        El ID de la entidad que generó el incidente.
      </td>
    </tr>

    <tr>
      <td>
        `version`

        _Flotante_
      </td>

      <td>
        La versión del formato actual.
      </td>
    </tr>
  </tbody>
</table>
