---
title: 'Exportación de datos históricos: devuelve respuestas NRQL más grandes'
tags:
  - APIs
  - NerdGraph
  - Examples
metaDescription: The New Relic historical data export feature lets you use NerdGraph API to return large NRQL responses with no query timeout.
freshnessValidatedDate: never
translationType: machine
---

Cuando ejecuta una [consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language), está restringido por [varios límites](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries), como un límite en la cantidad de puntos de datos devueltos en una respuesta y un tiempo de espera de consulta. Nuestra característica de exportación de datos históricos se puede utilizar para ejecutar una consulta NRQL que devuelve 200.000.000 puntos de datos en una respuesta (en lugar del [límite habitual de 5.000](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit)) y no tiene tiempo de espera de consulta. Los resultados se devuelven como uno o más archivos JSON.

## Requisitos [#requirements]

* Requiere [datos más](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/data-ingest-billing#data-prices)
* Para exportar datos, debe ser un [usuario principal o de la plataforma completa](/docs/accounts/accounts-billing/new-relic-one-user-management/user-type)

## Límites y restricciones [#limits-restrictions]

Aquí hay algunos límites y restricciones sobre la característica:

### Límites de uso [#usage-limits]

Los siguientes son los límites de uso predeterminados para una exportación:

* Se debería estimar que las exportaciones arrojarán menos de 200 millones.
* Se estima que las exportaciones ascenderán a menos de 5 mil millones
* No más de dos exportaciones simultáneas por cuenta

Si desea límites más altos, hable con su representante de cuenta.

### Restricciones de tipo de datos [#data-type-restrictions]

Ninguno de los siguientes tipos de datos está disponible para exportar:

* [Intervalo de tiempo de datos métricos](/docs/data-apis/understand-data/new-relic-data-types/#timeslice-data)
* [Datos FedRAMP](/docs/security/security-privacy/compliance/certificates-standards-regulations/fedramp/)
* [Atributo blob](/docs/logs/ui-data/long-logs-blobs/)
* Atributo de matriz
* Atributo percentil

### Restricciones de rango de tiempo [#time-range-restrictions]

La característica de exportación de datos históricos no admite la consulta de datos en vivo o de las 12 horas anteriores. El rango de tiempo debe finalizar al menos 12 horas antes.

### Requisitos de sintaxis de consulta [#syntax-requirements]

Esta característica admite la selección de nombres de atributos específicos y comodines (`SELECT *`). Por ejemplo, apoyamos consultas como estas:

```sql
SELECT * FROM MobileRequest SINCE 3 days ago until 2 days ago
```

```sql
SELECT duration, appId FROM Transaction
WHERE appName = 'interesting-application'
SINCE '2022-06-11 11:05:00-0600' UNTIL '2022-06-11 11:10:00-0600'
```

Se utilizarán los siguientes [componentes NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions) <DNT>**cannot**</DNT> en la consulta:

* Funciones de agregación (`sum`, `count`, `average`, `max`)
* Las funciones evaluables (`numeric`, `log`, `concat`) _solo_ se admiten en la cláusula `WHERE`
* `FACET`
* `TIMESERIES`
* `COMPARE WITH`
* `JOIN`
* Agregaciones anidadas
* Subconsultas
* Enlaces variables
* Consulta cruzada de cuentas

## Detalles extremos [#endpoints]

La característica de exportación de datos históricos utiliza nuestra API NerdGraph y hace uso de tres extremos:

* El extremo

  <DNT>
    **create**
  </DNT>

  permite al usuario especificar el ID de la cuenta y el NRQL que desea ejecutar como exportación.

* El extremo

  <DNT>
    **get details for export**
  </DNT>

  permite al usuario especificar un ID de cuenta y un ID de exportación (que se encuentran en el cuerpo de la respuesta del extremo de creación) y usarlos para recuperar el estado de la exportación. Cuando se completa la exportación, los resultados, en forma de una o más URL de descarga, se pueden encontrar en la respuesta de este extremo.

* El extremo

  <DNT>
    **get details for account exports**
  </DNT>

  permite a un usuario especificar un ID de cuenta y recuperar los detalles de todas las exportaciones activas y no vencidas de esa cuenta.

## Ejemplo de consulta [#example-queries]

### Crear exportación [#create-export]

Una forma de utilizar NerdGraph es con el [explorador NerdGraph](/docs/apis/nerdgraph/get-started/nerdgraph-explorer). Las instrucciones de esta sección se centrarán en el uso del explorador NerdGraph. Si está interesado en ejecutar su propio script, consulte [script](#scripts).

En el esquema NerdGraph, el extremo `historicalDataExportCreateExport` se puede encontrar en `mutation > historicalDataExport`. Utilice una consulta como la siguiente para ejecutar una exportación.

Se recomienda seleccionar ID para el cuerpo de la respuesta, ya que se utilizará para obtener detalles para la exportación y recuperar resultados.

```graphql
mutation {
  historicalDataExportCreateExport(
    accountId: YOUR_ACCOUNT_ID,
    nrql: "FROM Transaction SELECT duration, appId WHERE appName = 'interesting-application' SINCE '2022-06-11 11:05:00-0600' UNTIL '2022-06-11 11:10:00-0600'"
  ) {
    percentComplete
    nrql
    status
    id
    message
  }
}
```

#### Ejemplo de respuesta [#create-export-response]

A continuación se muestra una respuesta de ejemplo para crear una exportación:

```json
{
  "data": {
    "historicalDataExportCreateExport": {
      "id": "609b6916-8ca9-417c-bbf8-02e4cdc3afd2",
      "message": null,
      "nrql": "FROM Transaction SELECT duration, appId WHERE appName = 'interesting-application' SINCE '2022-06-11 11:05:00-0600' UNTIL '2022-06-11 11:10:00-0600'",
      "percentComplete": 5,
      "status": "WAITING"
    }
  }
}
```

### Cancelar exportación [#cancel-export]

En el esquema NerdGraph, el extremo `historicalDataExportCancelExport` se puede encontrar en `mutation` > `historicalDataExport`. Utilice una consulta como la siguiente para ejecutar una exportación.

Se recomienda seleccionar el estado en el cuerpo de la respuesta para verificar que la exportación se canceló exitosamente.

```graphql
mutation {
  historicalDataExportCancelExport(accountId: YOUR_ACCOUNT_ID, id: "YOUR_EXPORT_ID") {
    status
    id
  }
}
```

#### Ejemplo de respuesta [#cancel-export-response]

Aquí hay un ejemplo de respuesta para cancelar una exportación:

```json
{
  "data": {
    "historicalDataExportCancelExport": {
      "id": "YOUR_EXPORT_ID",
      "status": "CANCELED"
    }
  }
}
```

### Obtenga detalles para una exportación específica [#details-for-export]

Utilice el ID de exportación que se encuentra en la respuesta del extremo de creación para consultar los detalles de la exportación, como se muestra a continuación. Este extremo se puede encontrar en NerdGraph en `query` > `actor` > `account` > `historicalDataExport` > `export`.

```graphql
{
  actor {
    account(id: YOUR_ACCOUNT_ID) {
      historicalDataExport {
        export(id: "YOUR_EXPORT_ID") {
          availableUntil
          eventCount
          eventTypes
          id
          message
          nrql
          percentComplete
          results
          status
        }
      }
    }
  }
}
```

#### Ejemplo de respuesta [#get-export-details-response]

Aquí está la respuesta para obtener los detalles de una exportación específica:

```json
{
  "data": {
    "actor": {
      "account": {
        "historicalDataExport": {
          "export": {
            "availableUntil": 1655499642845,
            "eventCount": 1291,
            "eventTypes": [
              "MobileRequest"
            ],
            "id": "4776677a-1e0f-4ad5-a790-cdbe40a1f348",
            "message": null,
            "nrql": "SELECT * FROM MobileRequest SINCE 3 days ago UNTIL 2 days ago",
            "percentComplete": 100,
            "results": [
              "downloadLink1",
              "downloadLink2"
            ],
            "status": "COMPLETE_SUCCESS"
          }
        }
      }
    }
  }
}
```

### Obtener detalles de exportación para una cuenta [#get-details-account]

Puede utilizar el ID de la cuenta para obtener los detalles de todas las exportaciones de esa cuenta, como se muestra a continuación. El extremo se puede encontrar en el esquema NerdGraph en `query` > `actor` > `account` > `historicalDataExport` > `exports`.

```graphql
{
  actor {
    account(id: YOUR_ACCOUNT_ID) {
      historicalDataExport {
        exports {
          availableUntil
          eventCount
          eventTypes
          id
          message
          nrql
          percentComplete
          results
          status
        }
      }
    }
  }
}
```

#### Ejemplo de respuesta [#get-details-account-response]

Aquí hay un ejemplo de respuesta para obtener detalles de exportación para una cuenta:

```json
{
  "data": {
    "actor": {
      "account": {
        "historicalDataExport": {
          "exports": [
            {
              "availableUntil": 1655499642845,
              "eventCount": 1291,
              "eventTypes": [
                "MobileRequest"
              ],
              "id": "4776677a-1e0f-4ad5-a790-cdbe40a1f348",
              "message": null,
              "nrql": "SELECT * FROM MobileRequest SINCE 3 days ago UNTIL 2 days ago",
              "percentComplete": 100,
              "results": [
                "downloadLink1",
                "downloadLink2"
              ],
              "status": "COMPLETE_SUCCESS"
            }
          ]
        }
      }
    }
  }
}
```

## Usar guión [#scripts]

Puede resultar útil consultar las exportaciones de datos históricos mediante programación, desde un script. El siguiente comando curl puede resultar útil para empezar. Para ver ejemplos de respuestas, consulte las respuestas en la sección Ejemplo de consulta.

<Callout variant="important">
  Debe escapar de todas las instancias de comillas simples (`'`) en su consulta NRQL de exportación con una barra invertida (`\'`). Los comandos `curl` siguientes se basan en un `$` inicial en el argumento `--data-raw` , cuya funcionalidad proporciona las comillas ANSI-C. Hay más información disponible a través del [manual oficial de GNU](https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html).
</Callout>

### Crear exportación [#create-export-script]

```bash
curl --location --request POST 'https://api.newrelic.com/graphql' \
     --header 'Content-Type: application/json' \
     --header 'API-Key: $USER_API_KEY' \
     --data-raw $'{"query":"mutation {historicalDataExportCreateExport(accountId: $ACCOUNT_ID, nrql: \\"$NRQL_QUERY_TO_EXPORT\\") {percentComplete nrql status message id}}","variables":{}}'
```

### Cancelar exportación [#cancel-export-script]

```bash
curl --location --request POST 'https://api.newrelic.com/graphql' \
     --header 'Content-Type: application/json' \
     --header 'API-Key: $USER_API_KEY' \
     --data-raw $'{"query":"mutation {historicalDataExportCancelExport(accountId: $ACCOUNT_ID, id: \\"$YOUR_EXPORT_ID\\") { status message id}}","variables":{}}'
```

### Obtener detalles para exportar [#export-details-script]

```bash
curl --location --request POST 'https://api.newrelic.com/graphql' \
     --header 'Content-Type: application/json' \
     --header 'API-Key: $USER_API_KEY' \
     --data-raw $'{"query":"{actor {account(id: $ACCOUNT_ID) {historicalDataExport {export(id: \\"$YOUR_EXPORT_ID\\") {availableUntil eventCount eventTypes id message nrql percentComplete results status}}}}}","variables":{}}'
```

### Obtener detalles para exportaciones de cuentas [#export-details-account-script]

```bash
curl --location --request POST 'https://api.newrelic.com/graphql' \
     --header 'Content-Type: application/json' \
     --header 'API-Key: $USER_API_KEY' \
     --data-raw $'{"query":"{actor {account(id: $USER_API_KEY) {historicalDataExport {exports {availableUntil eventCount eventTypes id message nrql percentComplete results status}}}}}","variables":{}}'
```

## Formato de resultados de exportación [#export-results-format]

Los resultados de la consulta están en el campo de resultados de cualquiera de los dos `get details` extremos. Tienen la forma de uno o más enlaces de descarga. Los archivos de resultados en sí son válidos durante una semana desde que se ejecutó la exportación y contienen aproximadamente 100 MB o menos de JSON comprimido GZIP. Cada enlace está prefirmado para tener una validez de 6 horas. Si el enlace caduca, puede obtener uno nuevo consultando nuevamente el objeto de detalles de exportación en NerdGraph para obtener los resultados.

A continuación se muestra un ejemplo de archivo de resultados descomprimido:

```json
[
  {
    "attributes": {
      "duration": 36,
      "eventType": "Transaction",
      "accountId": YOUR_ACCOUNT_ID,
      "timestamp": 1655174793213
    }
  },
  {
    "attributes": {
      "duration": 3,
      "eventType": "MobileRequest",
      "accountId": YOUR_ACCOUNT_ID,
      "timestamp": 1655174793215
    }
  }
]
```

## Consulta y alerta sobre eventos relacionados con la exportación. [#query-alert]

Esta característica generará un evento personalizado en la cuenta New Relic en la que se ejecutó la exportación. Puede ser útil consultar o crear alertas sobre estos eventos para obtener información sobre las exportaciones que se han ejecutado en una cuenta.

El tipo de evento `HistoricalDataExport` contiene información como el estado de la exportación (`Created`, `Completed`, `Failed`, `Canceled`), el ID de exportación, la cadena NRQL desde la que se genera la exportación y más.

La siguiente consulta, que puede ejecutar en el [generador de consultas](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) o agregar a un dashboard, devolverá todas las exportaciones creadas en la última semana y la cantidad de aquellas que se completaron exitosamente y no tuvieron un error:

```sql
FROM HistoricalDataExport SELECT * WHERE status = 'Created' SINCE 1 WEEK AGO
```

```sql
FROM HistoricalDataExport SELECT count(*) WHERE status != 'Completed' FACET status SINCE 1 WEEK AGO
```

## Resolución de problemas [#troubleshooting]

### Cuenta aún no habilitada [#account-not-yet-enabled]

Al intentar crear una exportación, es posible que vea un mensaje de error que dice:

```
Cannot query field \"historicalDataExportCreateExport\" on type \"RootMutationType\".
```

Si recibes esto, probablemente significa que la característica de exportación de datos históricos aún no se ha habilitado para la cuenta desde la que estás intentando exportar. Si tiene preguntas, revise los requisitos y hable con su representante de cuenta para preguntar sobre el acceso.

### El enlace de resultados expiró [#results-link-expired]

Al intentar descargar resultados utilizando una URL prefirmada, es posible que vea un error como este:

```xml
<Error>
  <Code>AccessDenied</Code>
  <Message>Request has expired</Message>
  <X-Amz-Expires>120</X-Amz-Expires>
  <Expires>2022-06-24T15:16:45Z</Expires>
  <ServerTime>2022-06-24T17:56:40Z</ServerTime>
  <RequestId>1234567890ABC</RequestId>
  <HostId>ABCD1234HOST-ID098765-XYZ</HostId>
</Error>
```

Un error como este indica que la URL de resultados ha caducado y deberá volver a consultar el objeto de exportación para obtener una URL de resultados nueva. No es necesario volver a ejecutar la exportación, simplemente obtenga un nuevo conjunto de URL para los resultados.
