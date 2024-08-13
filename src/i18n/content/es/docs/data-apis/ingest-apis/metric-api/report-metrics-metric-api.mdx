---
title: Reporte métrica a través de la API métrica
tags:
  - Ingest and manage data
  - Ingest APIs
metaDescription: 'Quick start guide to send your first metrics using New Relic''s Metric API, and a full spec for the JSON payload and endpoint.'
freshnessValidatedDate: never
translationType: machine
---

Utilice la [API de métrica](/docs/introduction-new-relic-metric-api) para enviar métrica personalizada a la plataforma New Relic. Este documento incluye un inicio rápido para enviar su primera métrica personalizada, además de información detallada sobre cómo formatear y enviar sus datos de métrica.

## Inicio rápido: Enviar datos métricos [#send-metric-data]

Reportamos los tipos métricos `count`, `gauge` y `summary`. Para más información sobre métrica consulte [nuestra documentación](/docs/telemetry-data-platform/ingest-manage-data/understand-data/metric-data-type).

Los datos métricos se envían a New Relic a través de una solicitud HTTP POST. Cada solicitud se compone de uno o más puntos de datos de métrica, que constan de un nombre de métrica, una timestamp y un valor.

Siga este ejemplo para enviar sus primeros puntos de datos métricos a New Relic:

1. Obtenga el <InlinePopover type="licenseKey"/>para la cuenta a la que desea informar datos.

2. Inserte la clave de licencia en el siguiente JSON y luego envíe el JSON a nuestro [extremo](#api-endpoint).

3. Actualice el `timestamp` con una timestamp epoch válida. Este ejemplo crea un único punto de datos métrico para una métrica llamada `memory.heap`, pero puede crear atributos o puntos de datos adicionales especificando [tipos de métricas](/docs/telemetry-data-platform/ingest-manage-data/understand-data/metric-data-type) o agregando [bloques `common` opcionales](#optional-map-attributes).

   ```bash
   curl -vvv -k -H "Content-Type: application/json" \
   -H "Api-Key: NEW_RELIC_LICENSE_KEY" \
   -X POST https://metric-api.newrelic.com/metric/v1 \
   --data '[{ 
           "metrics":[{ 
               "name":"memory.heap", 
               "type":"gauge", 
               "value":2.3, 
               "timestamp":CURRENT_TIME, 
               "attributes":{"host.name":"dev.server.com"} 
           }] 
       }]'
   ```

La métrica debería estar disponible en New Relic en unos segundos. Puedes consultar los datos desde cualquier [interfaz NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql#where) usando esta consulta:

```sql
FROM Metric SELECT max(memory.heap) TIMESERIES
```

Para obtener más información sobre dónde aparecen los datos, consulte [Buscar datos de API métrica](/docs/data-ingest-apis/get-data-new-relic/metric-api/introduction-metric-api#find-data).

## URL extrema [#api-endpoint]

Utilice un HTTP POST al enviar datos métricos a los extremos métricos de API:

```
https://metric-api.newrelic.com/metric/v1
```

<Callout variant="tip">
  Si su organización aloja datos en el centro de datos de la UE, asegúrese de utilizar el [extremo de la región de la UE](/docs/using-new-relic/welcome-new-relic/getting-started/introduction-eu-region-data-center#endpoints). Para esta API, el extremo de la UE es:

  ```
  https://metric-api.eu.newrelic.com/metric/v1
  ```
</Callout>

## Encabezados de solicitud HTTP [#headers-query-parameters]

Incluya los siguientes encabezados de solicitud HTTP con la solicitud POST. Puede enviar algún parámetro como parámetro de consulta en lugar de encabezados de solicitud.

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Encabezamiento
      </th>

      <th style={{ width: "150px" }}>
        ¿Enviar como parámetro de consulta?
      </th>

      <th>
        Detalles
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Content-Type`
      </td>

      <td>
        No
      </td>

      <td>
        <DNT>**Required**</DNT>. Debe ser `application/json`.
      </td>
    </tr>

    <tr>
      <td>
        `Content-Length`
      </td>

      <td>
        No
      </td>

      <td>
        <DNT>**Required (usually set automatically by the HTTP client)**</DNT>. La longitud del cuerpo de la solicitud en octetos (bytes de 8 bits), a menos que se envíe con codificación fragmentada. Este encabezado generalmente lo establece de forma predeterminada el cliente HTTP subyacente que envía los datos y, en la mayoría de los casos, no debería requerir ningún esfuerzo adicional por parte del usuario final.
      </td>
    </tr>

    <tr>
      <td>
        `Api-Key`
      </td>

      <td>
        Sí
      </td>

      <td>
        <DNT>**Required.**</DNT> Un <InlinePopover type="licenseKey"/>para la cuenta a la que desea informar datos. Si esto se proporciona como encabezado y parámetro de consulta, los valores deben coincidir.
      </td>
    </tr>

    <tr>
      <td>
        `Content-Encoding`
      </td>

      <td>
        No
      </td>

      <td>
        <DNT>**Required if GZIP.**</DNT> El valor debe ser `GZIP` o `Identity.` Si no hay ningún valor presente, se supone `Identity` .
      </td>
    </tr>

    <tr>
      <td>
        `x-request-id`
      </td>

      <td>
        No
      </td>

      <td>
        <DNT>**Optional - Reserved for future use.**</DNT> El valor debe ser un `UUID4` válido. Se espera que el valor sea único para cada solicitud.
      </td>
    </tr>
  </tbody>
</table>

## Cuerpo de solicitud HTTP [#body-format]

El cuerpo de la solicitud HTTP POST debe estar en formato JSON. A continuación se describen los requisitos y recomendaciones para la carga útil JSON.

La carga útil debe estar codificada como <DNT>**UTF-8**</DNT>.

### Estructura [#new-relic-guidelines]

La carga útil JSON utiliza esta estructura:

* La carga útil JSON es una matriz de mapas.
* Cada mapa debe contener una clave `metrics` cuyo valor es una matriz que contiene uno o más puntos de datos métricos.
* Un punto de datos métrico se identifica mediante `name`, `value` y `timestamp` junto con un conjunto opcional de atributos.

<CollapserGroup>
  <Collapser
    id="json-format-example"
    title="JSON carga creando dos métricas"
  >
    Esta carga útil de ejemplo crea dos métricas. `service.errors.all` es una métrica de conteo con tres atributos y `service.memory` es una métrica de medidor con dos atributos.

    ```json
    [
      {
        "metrics": [
          {
            "name": "service.errors.all",
            "type": "count",
            "value": 15,
            "timestamp": CURRENT_TIME,
            "interval.ms": 10000,
            "attributes": {
              "service.response.statuscode": "400",
              "host.name": "dev.server.com",
              "service.name": "foo"
            }
          },
          {
            "name": "service.memory",
            "type": "gauge",
            "value": 2.7,
            "timestamp": CURRENT_TIME,
            "attributes": {
              "host.name": "dev.server.com",
              "app.name": "foo"
            }
          }
        ]
      }
    ]
    ```
  </Collapser>
</CollapserGroup>

### Pares principales de valores requeridos [#json-payload-keys]

Cada mapa de puntos de datos métricos en la matriz `metrics` utiliza la siguiente estructura principal de valor:

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Llave
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `name`

        _cadena_
      </td>

      <td>
        <DNT>**Required**</DNT>. El nombre de la métrica. El valor debe tener menos de 255 caracteres.
      </td>
    </tr>

    <tr>
      <td>
        `value`

        _número_ o _mapa_
      </td>

      <td>
        <DNT>**Required**</DNT>. El valor varía según el [tipo de métrica](/docs/telemetry-data-platform/ingest-manage-data/understand-data/metric-data-type). Para `gauge` y `count` el valor debe ser un único número. Para `summary`, el valor debe ser un mapa con pares principales de valor que especifiquen el recuento, la suma, el mínimo y el máximo.
      </td>
    </tr>

    <tr>
      <td>
        `timestamp`

        _largo_
      </td>

      <td>
        <DNT>**Required**</DNT>. La hora de inicio de la métrica en [tiempo Unix](https://currentmillis.com/). El valor predeterminado utiliza la zona horaria UTC. Este campo también admite segundos, microsegundos y nanosegundos. Sin embargo, los datos se convertirán a milisegundos para su almacenamiento y consulta. métrica reportados con una timestamp anterior a 48 horas o posterior a 24 horas desde el momento en que se informan se eliminan.
      </td>
    </tr>

    <tr>
      <td>
        `interval.ms`

        _positivo largo_
      </td>

      <td>
        <DNT>**Required for `count` and `summary` [metric types](/docs/telemetry-data-platform/ingest-manage-data/understand-data/metric-data-type)**</DNT>. La duración de la ventana de tiempo.
      </td>
    </tr>

    <tr>
      <td>
        `type`
      </td>

      <td>
        <DNT>**Recommended**</DNT>. Este debería ser uno de los [tipos métricos admitidos](/docs/telemetry-data-platform/ingest-manage-data/understand-data/metric-data-type). Si no especifica un tipo, el valor predeterminado será `gauge`.
      </td>
    </tr>

    <tr>
      <td>
        `attributes`

        _cadenas_, _números JSON_ o _valores booleanos_
      </td>

      <td>
        <DNT>**Recommended**</DNT>. Un mapa de pares de valores principales asociados con esta métrica específica. Los valores pueden ser cadenas, números JSON o booleanos. Las claves distinguen entre mayúsculas y minúsculas y deben tener menos de 255 caracteres.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="metric-types-example"
    title="Carga JSON con tres tipos métricos."
  >
    A continuación se muestra una carga útil de ejemplo que contiene un punto de datos de métrica para cada tipo de métrica:

    ```json
    [
      {
        "metrics": [
          {
            "name": "cache.misses",
            "type": "count",
            "value": 15,
            "timestamp": CURRENT_TIME,
            "interval.ms": 10000,
            "attributes": {
              "cache.name": "myCache",
              "host.name": "dev.server.com"
            }
          },
          { 
            "name": "temperature", 
            "type": "gauge", 
            "value": 15, 
            "timestamp": CURRENT_TIME, 
            "attributes": { 
              "city": "Portland", 
              "state": "Oregon" 
            } 
          },
          {
            "name": "service.response.duration",
            "type": "summary",
            "value": {
              "count": 5, 
              "sum": 0.004382655, 
              "min": 0.0005093, 
              "max": 0.001708826
            },
            "interval.ms": 10000, 
            "timestamp": CURRENT_TIME,
            "attributes": {
              "host.name": "dev.server.com",
              "app.name": "foo"
            }
          }
        ]
      }
    ]
    ```
  </Collapser>
</CollapserGroup>

### Compartir atributo a través de métrica con `common` [#optional-map-attributes]

Si desea incluir un conjunto de atributos en múltiples métricas (y no agregar el mismo atributo para cada métrica), puede usar el bloque `common` . Este es un mapa opcional que especifica información que se aplica a todos los puntos de datos métricos asociados. Los valores de la sección común se anularán si existe la misma clave en un punto de datos métrico.

El bloque puede incluir:

<table>
  <thead>
    <tr>
      <th style={{ width: "180px" }}>
        Atributo
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `timestamp`

        _largo_
      </td>

      <td>
        La hora de inicio de la métrica en [tiempo Unix](https://currentmillis.com/). El valor predeterminado es la hora actual en la zona horaria UTC. Este campo también admite segundos, microsegundos y nanosegundos. Sin embargo, los datos se convertirán a milisegundos para su almacenamiento y consulta posterior.
      </td>
    </tr>

    <tr>
      <td>
        `interval.ms`

        _positivo largo_
      </td>

      <td>
        <DNT>**Required for `count` and `summary`.**</DNT>La duración de la ventana de tiempo.
      </td>
    </tr>

    <tr>
      <td>
        `attributes`

        _cadenas, números JSON o valores booleanos_
      </td>

      <td>
        Un mapa de pares de valores principales asociados con esta métrica específica. Los valores pueden ser cadenas, números JSON o booleanos.
      </td>
    </tr>
  </tbody>
</table>

<CollapserGroup>
  <Collapser
    id="example-common-attributes"
    title={<>Ejemplo de atributo <InlineCode>common</InlineCode></>}
  >
    En el siguiente ejemplo de carga útil, se envían tres métricas. Las tres métricas comparten el atributo `app.name` y `host.name` , especificado en el bloque `common` . Cada métrica también tiene un valor único para otro atributo, `server.response.statuscode`.

    ```json
    [
      {
        "common" : {
          "timestamp": 1531414060739,
          "interval.ms": 10000,
          "attributes": {
            "app.name": "foo",
            "host.name": "dev.server.com"
          }
        },
        "metrics": [
          {
            "name": "service.errors.all",
            "type": "count",
            "value": 9,
            "attributes": {
              "service.response.statuscode": "400"
            }
          },
          {
            "name": "service.errors.all",
            "type": "count",
            "value": 4,
            "attributes": {
              "service.response.statuscode": "500"
            }
          },
          {
            "name": "service.response.duration",
            "type": "summary",
            "value": {
              "count": 5,
              "sum": 0.004382655,
              "min": 0.0005093,
              "max": 0.001708826
            },
            "attributes": {
              "service.response.statuscode": "200"
            }
          }
        ]
      }
    ]
    ```
  </Collapser>
</CollapserGroup>

## Validación de respuesta y códigos de estado. [#response-validation]

La API de métrica devuelve un código de respuesta `202` para solicitudes exitosas. Cuando se aceptan sus datos, se devuelve un código de respuesta HTTP `202` con una estructura de respuesta como esta:

```
HTTP/1.1 202 Accepted
Content-Type: application/json; charset=UTF-8
Content-Length: 52
Access-Control-Allow-Methods: GET, POST, PUT, HEAD, OPTIONS
Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: *
Connection: keep-alive

{"requestId":"f0e7bfff-001a-b000-0000-01682bcf4565"}
```

### Faltan datos con `202` respuesta [#async-errors]

Un código `202` indica que la API recibió sus datos y que los datos pasaron las comprobaciones de validación básicas. Normalmente, sus datos estarán disponibles para su consulta en unos segundos. Sin embargo, New Relic ejecuta una validación adicional de forma asincrónica después de recibir sus datos. Si recibe una respuesta `202` pero no puede encontrar su métrica, esto indica que New Relic encontró un error durante esta validación asincrónica.

Puede encontrar estos errores consultando [`NrIntegrationError` evento](/docs/telemetry-data-platform/manage-data/nrintegrationerror) en la cuenta asociada con Insertar clave de API que utilizó. El `requestId` para cada solicitud será etiqueta en el evento `NrIntegrationError` . Para obtener más información, consulte [Solucionar problemas de un evento `NRIntegrationError` ](/docs/troubleshoot-nrintegrationerror-event).

### Códigos de estado [#response-status-codes]

La API métrica puede devolver los siguientes códigos de estado HTTP&#x3A;

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Código de estado
      </th>

      <th>
        Definición
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `202`
      </td>

      <td>
        Datos aceptados.
      </td>
    </tr>

    <tr>
      <td>
        `400`
      </td>

      <td>
        La estructura de la solicitud no es válida.
      </td>
    </tr>

    <tr>
      <td>
        `403`
      </td>

      <td>
        Fallo de autentificacion.
      </td>
    </tr>

    <tr>
      <td>
        `404`
      </td>

      <td>
        La ruta de la solicitud es incorrecta.
      </td>
    </tr>

    <tr>
      <td>
        `405`
      </td>

      <td>
        Se utilizó un método de solicitud distinto de POST.
      </td>
    </tr>

    <tr>
      <td>
        `408`
      </td>

      <td>
        La solicitud tardó demasiado en llegar al extremo.
      </td>
    </tr>

    <tr>
      <td>
        `411`
      </td>

      <td>
        El encabezado `Content-Length` no se incluyó.
      </td>
    </tr>

    <tr>
      <td>
        `413`
      </td>

      <td>
        La carga útil era demasiado grande. la carga debe tener menos de 1MB (10^6 bytes).
      </td>
    </tr>

    <tr>
      <td>
        `414`
      </td>

      <td>
        El URI de solicitud era demasiado largo.
      </td>
    </tr>

    <tr>
      <td>
        `415`
      </td>

      <td>
        El `Content-Type` o `Content-Encoding` no era válido.
      </td>
    </tr>

    <tr>
      <td>
        `429`
      </td>

      <td>
        Se ha superado la cuota de tasa de solicitud.
      </td>
    </tr>

    <tr>
      <td>
        `431`
      </td>

      <td>
        Los encabezados de la solicitud son demasiado largos.
      </td>
    </tr>

    <tr>
      <td>
        `5xx`
      </td>

      <td>
        Hubo un error en el servidor (vuelve a intentarlo).
      </td>
    </tr>
  </tbody>
</table>
