---
title: Crear métricas a partir de otros tipos de datos
tags:
  - Ingest and manage data
  - Convert data to metrics
metaDescription: 'How to create a rule in New Relic to turn data for events, logs, or spans into metric data.'
freshnessValidatedDate: never
translationType: machine
---

Utilice [el servicio API métrica](/docs/introduction-events-metrics-api) de New Relic para definir reglas para crear [métricas](/docs/telemetry-data-platform/ingest-manage-data/understand-data/metric-data-type) a partir de otros tipos de datos, como eventos, registros o intervalos. <DNT>**Recommendation:**</DNT> Antes de comenzar, revise nuestros [requisitos y sugerencias para crear reglas](/docs/telemetry-data-platform/ingest-manage-data/convert-data-metrics/creating-metric-rules-requirements-tips).

## Crear una regla métrica [#overview-process]

Para crear una regla para crear métricas a partir de eventos, log o spans:

1. [Construya la regla métrica usando NRQL](#create-nrql).
2. [Cree una solicitud de API NerdGraph (formato GraphQL)](#create-request) que contenga su regla NRQL.
3. [Cree la métrica realizando la solicitud de API](#graphql-api-request).

Una vez creada una métrica, puede [consultarla y trazarla utilizando NRQL](#find-your-data).

## Paso 1. Crear regla de consulta NRQL [#create-nrql]

La parte más importante de [la creación de una regla de métricas](#overview-process) es construir la consulta NRQL que define la métrica para sus datos de evento, registro o intervalos. Puedes crear hasta [10 métricas con una sola consulta NRQL](#multiple-metrics) siguiendo este procedimiento:

1. [Usando la interfaz NRQL de New Relic](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql#where), cree una consulta para la métrica que desea crear. Por ejemplo:

   ```sql
   FROM ProcessSample SELECT average(ioTotalReadBytes)
   WHERE nr.entityType = 'HOST'
   ```

   <Callout variant="important">
     Las reglas [de evento a métrica](/docs/data-apis/convert-to-metrics/analyze-monitor-data-trends-metrics/) no soportan la cláusula `WITH ... AS` en [NRQL consulta](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/).
   </Callout>

2. Edite la consulta para utilizar uno de los tres tipos métricos disponibles:

   * `summary`: Úselo si la función de la consulta es `min`, `max`, `sum`, `count` o `average`.

   * `uniqueCount`: Úselo si la función de la consulta es `uniqueCount`.

   * `distribution`: Úselo si la función de la consulta es [`percentile`](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions#func-percentile) o [`histogram`](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions#func-histogram).

     Esta consulta de ejemplo usa `average`, así que use `summary`:

     ```sql
     FROM ProcessSample SELECT summary(ioTotalReadBytes) 
     WHERE nr.entityType = 'HOST'
     ```

     Esta consulta de ejemplo utiliza `count` en un campo no numérico:

     ```sql
     FROM ProcessSample SELECT count(hostname) 
     WHERE hostname LIKE '%prod%'
     ```

     Para `summary` en un campo no numérico, utilice `summary(1)`:

     ```sql
     FROM ProcessSample SELECT summary(1) 
     WHERE hostname LIKE '%prod%'
     ```

     <Callout variant="tip">
       Para obtener información más detallada sobre el uso de estos tipos métricos en reglas, consulte [Creación de reglas métricas: requisitos y consejos](/docs/telemetry-data-platform/ingest-manage-data/convert-data-metrics/creating-metric-rules-requirements-tips).
     </Callout>

3. Decida los atributos que desea adjuntar a la métrica, siguiendo los [límites de cardinalidad de combinaciones únicas de nombre de métrica/valor de atributo](#attributes-limit).

   <DNT>**Recommendation:**</DNT> Ejecute una consulta independiente para garantizar que la cardinalidad máxima no supere los 50 000 durante una ventana de 30 segundos. Por ejemplo, la siguiente consulta encontrará la cardinalidad máxima encontrada en un período de 30 segundos durante las últimas 3 horas para el evento `ProcessSample` al incluir los atributos `awsRegion`, `awsAvailabilityZone` y `commandName` :

   ```sql
   FROM (FROM ProcessSample
    SELECT rate(uniqueCount(awsRegion, awsAvailabilityZone, commandName), 30 seconds) AS 'cardinalityRate'
    WHERE nr.entityType = 'HOST' TIMESERIES 30 seconds) SELECT max(cardinalityRate) AS 'maxCardinalityRate' SINCE 3 hours AGO
   ```

4. Para poder agregar y filtrar tus métricas, agrega el atributo que deseas adjuntar a la métrica usando la cláusula `FACET` . Por ejemplo:

   ```sql
   FROM ProcessSample
   SELECT summary(ioTotalReadBytes) WHERE nr.entityType = 'HOST' 
   FACET awsRegion, awsAvailabilityZone, commandName
   ```

5. Establezca el [nombre de la métrica](#naming) utilizando la función `AS` . Por ejemplo:

   ```sql
   FROM ProcessSample SELECT summary(ioTotalReadBytes) AS 'io.totalread.bytes'
   WHERE nr.entityType = 'HOST' FACET awsRegion, awsAvailabilityZone, commandName
   ```

Una vez que su regla NRQL esté completa, úsela para [crear la solicitud de API](#create-request).

## Paso 2. Crear solicitud de API [#create-request]

Después de crear la regla NRQL para convertir datos de evento, registro o intervalos a métrica, continúe con la creación de la solicitud API. Puede [utilizar nuestra herramienta API NerdGraph](/docs/introduction-events-metrics-api#use-graphql-api-tool) para explorar la estructura de datos y construir y realizar su solicitud.

Para verificar que la regla se creó correctamente, puede [ejecutar una consulta para devolver esa regla usando su ID](/docs/introduction-events-metrics-api#list-rule-by-rule-id). Para obtener consejos sobre cómo consultar la métrica que has creado, consulta [consulta y traza tu métrica](#find-your-data).

<CollapserGroup>
  <Collapser
    id="api-examoke"
    title="Ejemplo de solicitud de API de NerdGraph"
  >
    El siguiente ejemplo de solicitud de API NerdGraph utiliza la misma regla NRQL del paso 1. El `IO Total Read Bytes Rule` crea una métrica denominada `io.totalread.bytes`. (El nombre de la regla puede tener espacios, lo que difiere de las [reglas de nomenclatura métrica](#naming)).

    ```
    mutation {
      eventsToMetricsCreateRule(rules: {
        name: "io.totalread.bytes for computeSample entities",
        description:"Created by Zach on March 27, 2019. Used by team Network.",
        nrql:"FROM ProcessSample SELECT summary(ioTotalReadBytes) AS 'io.totalread.bytes' WHERE nr.entityType = 'ComputeSample' FACET awsRegion, awsAvailabilityZone, commandName",
        accountId: 123456
      })
      {
        successes {
          id
          name
          nrql
          enabled
        }
        failures {
          submitted {
            name
            nrql
            accountId        
          }
          errors {
            reason
            description
          }
        }
      }
    }
    ```

    En esta solicitud:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Solicitar elementos
          </th>

          <th>
            Descripción
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `mutation`
          </td>

          <td>
            Uno de los [tipos de operaciones API](/docs/apis/graphql-api/getting-started/introduction-new-relic-graphql-api#tutorials) básicas.
          </td>
        </tr>

        <tr>
          <td>
            `eventsToMetricsCreateRule`
          </td>

          <td>
            El método que se llama para crear una regla.
          </td>
        </tr>

        <tr>
          <td>
            `rules`
          </td>

          <td>
            Toma cuatro parámetros:

            * `name`: El [nombre de la regla](#naming).
            * `description`: Opcional. La descripción de la regla. Le recomendamos incluir información sobre quién creó los datos métricos y quién los utilizará.
            * `accountId`: El [ID de la cuenta New Relic](/docs/accounts/install-new-relic/account-setup/account-id) donde vive el evento, registro o intervalos y se creará la métrica.
            * `nrql`: la consulta NRQL que crea la regla. Para obtener más información sobre esto, consulte [Crear consulta NRQL](#create-nrql).
          </td>
        </tr>

        <tr>
          <td>
            `successes` y `submitted` bloques
          </td>

          <td>
            Aquí usted define los datos devueltos por una respuesta exitosa o fallida. Los parámetros disponibles para estos bloques incluyen:

            * `id` (`ruleId` para `submitted`)
            * `name`
            * `description`
            * `nrql`
            * `enabled` (estado habilitado/deshabilitado)
            * `accountId`
          </td>
        </tr>

        <tr>
          <td>
            `ruleId` y `accountId`
          </td>

          <td>
            Si se produce un error, los `ruleId` y `accountId` enviados se devolverán junto con el motivo del error y la descripción del error.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="example-response"
    title="Ejemplo de respuesta de la API NerdGraph"
  >
    A continuación se muestra un ejemplo de una respuesta devuelta:

    ```
    {
      "data": {
        "eventsToMetricsCreateRule": {
          "failures": [],
          "successes": [
            {
              "enabled": true,
              "id": "46",
              "name": "io.totalread.bytes for computeSample entities",
              "nrql": "FROM ProcessSample SELECT summary(ioTotalReadBytes) AS 'io.totalread.bytes' WHERE nr.entityType = 'ComputeSample' FACET awsRegion, awsAvailabilityZone, commandName"
            }
          ]
        }
      }
    }
    ```
  </Collapser>
</CollapserGroup>

## Paso 3. Crea una regla métrica con solicitud API [#graphql-api-request]

Cuando su solicitud API esté lista, puede [usar la API NerdGraph](/docs/introduction-events-metrics-api#use-graphql-api-tool) para realizar la solicitud, lo que creará la métrica.

## Consulta y traza tu métrica [#find-your-data]

Después de crear una regla métrica para convertir datos para su evento, registro o intervalos, puede ver los nuevos datos métricos en la UI de New Relic. Para ver sus datos:

1. Vaya a [la interfaz de consulta NRQL de New Relic](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql#where).

2. Ejecute la siguiente consulta para ver el nombre de todas sus métricas:

   ```sql
   SELECT uniques(metricName) FROM Metric
   ```

3. Elija la métrica de interés y luego ejecute la siguiente consulta para ver el atributo disponible:

   ```sql
   SELECT * FROM Metric where metricName = 'yourMetric'
   ```

4. Si no ve los datos esperados, siga los procedimientos [de resolución de problemas](#troubleshooting) .

Las [funciones del agregador NRQL](/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions#functions) disponibles dependen del [tipo de métrica](#summary-and-uniquecount) que haya creado. Aquí hay unos ejemplos.

<CollapserGroup>
  <Collapser
    id="summary"
    title="Ejemplo de métrica de resumen"
  >
    Si creó un tipo de métrica de resumen, puede usar las funciones de agregador `count`, `sum`, `max`, `min` y `average` , como se muestra en la siguiente consulta:

    ```
    SELECT count(appStartResponseTime), sum(appStartResponseTime), max(appStartResponseTime), min(appStartResponseTime),  average(appStartResponseTime) FROM Metric
    ```
  </Collapser>

  <Collapser
    id="uniqueCount"
    title="Ejemplo de métrica de conteo"
  >
    Si creó un tipo de métrica `uniqueCount` , solo puede usar la función `uniqueCount` , como se muestra en la siguiente consulta:

    ```sql
    SELECT uniqueCount(playbackErrorStreamUniqueCount) * 100 / uniqueCount(streamUniqueCount) AS '% of Streams Impacted' FROM Metric
    ```
  </Collapser>

  <Collapser
    id="distribution"
    title="Ejemplo de métrica de distribución"
  >
    Si creó un tipo de métrica `distribution` , use las funciones `percentile` o `histogram` , como se muestra en la siguiente consulta:

    ```sql
    SELECT percentile(service.responseTime, 95) FROM Metric
    ```

    O

    ```sql
    SELECT histogram(service.responseTime, 10, 20) FROM Metric
    ```
  </Collapser>
</CollapserGroup>

## Resolución de problemas

Si su llamada NerdGraph no se construye correctamente, puede recibir un mensaje como este:

```
Cannot parse the unexpected character "\u201C”
```

Verifique que las comillas en la llamada NerdGraph no sean comillas tipográficas (comillas rizadas). Nuestra API NerdGraph solo acepta cotizaciones directas.
