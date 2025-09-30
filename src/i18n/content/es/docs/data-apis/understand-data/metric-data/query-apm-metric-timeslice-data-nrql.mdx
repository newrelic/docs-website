---
title: Consulta APM intervalo de tiempo de datos métricos con NRQL
metaDescription: 'In New Relic, you can query metric timeslice data from APM using NRQL.'
freshnessValidatedDate: never
translationType: machine
---

APM reporta datos métricos en forma de [intervalo de tiempo de datos métricos](/docs/using-new-relic/data/understand-data/new-relic-data-types#timeslice-data), y puede usar [NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) para consultar y alertar sobre este tipo de datos. Para explorar tus datos de intervalo de tiempo, consulta [Explora tu métrica](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer#blocks-metrics).

## ¿Por qué consultar intervalo de tiempo de datos métricos? [#why]

New Relic informa [métrica de varias maneras](/docs/using-new-relic/data/understand-data/new-relic-data-types#metrics). Una variedad de datos métricos la llamamos <DNT>**metric timeslice data**</DNT>; este es el tipo de datos que se utilizan para generar muchos de los gráficos en APM, <InlinePopover type="mobile"/>y browser (para obtener más detalles, consulte [intervalo de tiempo de datos métricos](/docs/using-new-relic/data/understand-data/new-relic-data-types#timeslice-data)).

<InlinePopover type="apm"/>métricas se convierten automáticamente de datos de intervalo de tiempo de métrica a datos métricos dimensionales más detallados, lo que los abre para consultas a través de NRQL y a través de nuestra [API NerdGraph](/docs/apis/nerdgraph/examples/nerdgraph-nrql-tutorial). Esta capacidad le permite crear visualizaciones personalizadas potentes y detalladas de estas importantes métricas APM. Y esto incluye poder consultar tu [métrica personalizada](/docs/agents/manage-apm-agents/agent-data/collect-custom-metrics).

<Callout variant="important">
  No se puede consultar timeslice métrica en conjunto con dimensional métrica o datos de evento. Cualquier consulta que involucre `newrelic.timeslice.value` o una `apm.*` métrica solo puede devolver métricas APM.
</Callout>

## ¿Dónde consultar? [#where]

Recomendamos consultar los datos de intervalo de tiempo de métrica de APM utilizando nuestro [generador de consultas](/docs/chart-builder/use-chart-builder/choose-data/use-advanced-nrql-mode-specify-data). Esta experiencia ofrece funcionalidad NRQL completa y también brinda sugerencias útiles de autocompletar y comentarios sobre errores de consulta.

Tú también puedes:

* Realice una consulta NRQL utilizando nuestra [API NerdGraph (GraphQL)](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph)
* Alerta sobre consulta NRQL usando [NRQL condición de alerta](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions)

## Cómo construir una consulta [#form-query]

En APM, algunos gráficos tienen la opción de [ver la consulta NRQL que generó ese gráfico](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language#what-is-nrql). Este es un buen punto de partida para entender cómo realizar una consulta métrica. La consulta NRQL que aparece a continuación se modifica ligeramente con respecto al gráfico de tasa de errores de la página de resumen <InlinePopover type="apm"/>.

```sql
FROM Metric
  SELECT count(apm.service.error.count) / count(apm.service.transaction.duration)
  WHERE (entity.guid = 'AN_ENTITY_GUID')
  AND (transactionType = 'Web')
  SINCE 1 day ago TIMESERIES
```

A continuación se muestra un desglose de cómo funcionan las partes de esta consulta:

<table>
  <thead>
    <tr>
      <th style={{ width: "350px" }}>
        Segmento de consulta
      </th>

      <th>
        ¿Qué hace?
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `FROM Metric`
      </td>

      <td>
        `Metric` es uno de nuestros [tipos de datos](/docs/using-new-relic/data/understand-data/new-relic-data-types#dimensional-metrics) principales y los datos de intervalo de tiempo de métrica se almacenan como este tipo de datos. Para obtener consejos generales sobre cómo consultar datos `Metric` , consulte [ejemplos de consulta métrica](/docs/data-ingest-apis/get-data-new-relic/metric-api/view-query-you-metric-data).
      </td>
    </tr>

    <tr>
      <td>
        `SELECT count(apm.service.error.count) / count(apm.service.transaction.duration)`
      </td>

      <td>
        Esta matemática genera un conteo de errores sobre un conteo total de transacciones métricas. Esta consulta utiliza los [nombres métricos convertidos](#timeslice-conversion).

        Tenga en cuenta que puede utilizar otras [funciones de agregador](#aggregator-functions).
      </td>
    </tr>

    <tr>
      <td>
        `WHERE (entity.guid = 'AN_ENTITY_GUID')`
      </td>

      <td>
        Debe especificar al menos una fuente de datos. Puede seleccionar el GUID de una sola entidad, como se muestra aquí, o puede [seleccionar varias fuentes](#multiple-app-names). Esta consulta usa `entity.guid`, pero también puedes usar `appId` o `appName`.
      </td>
    </tr>

    <tr>
      <td>
        `AND (transactionType = 'Web')`
      </td>

      <td>
        Establece el tipo de transacción en web, lo que significa que no se contará el fondo/transacción no web.
      </td>
    </tr>

    <tr>
      <td>
        `SINCE 1 day ago`
      </td>

      <td>
        Seleccionar un rango de tiempo.
      </td>
    </tr>

    <tr>
      <td>
        `TIMESERIES`
      </td>

      <td>
        Esta cláusula opcional muestra los resultados en un gráfico basado en el tiempo.
      </td>
    </tr>
  </tbody>
</table>

Para obtener información general sobre la sintaxis de NRQL, incluidos `FROM`, `FACET` y `TIMESERIES`, consulte [Introducción a NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql).

Para obtener más consultas, consulte [ejemplos de consultas](#query-examples).

## Cómo se convierten los datos de intervalo de tiempo de métrica [#timeslice-conversion]

La conversión de la <InlinePopover type="apm"/>métrica de segmento de tiempo original en métrica dimensional que está disponible para consulta es un proceso continuo y no está completo. Si no ve la métrica que está buscando en esta sección, consulte [Consulta genérica](#generic-queries).

Así es como la [métrica de segmento de tiempo APM](/docs/using-new-relic/data/understand-data/new-relic-data-types#timeslice-data) original se convierte en métrica dimensional:

<table style={{ width: "700px" }}>
  <thead>
    <tr>
      <th>
        Intervalo de tiempo de estructura métrica
      </th>

      <th>
        Estructura métrica dimensional
      </th>
    </tr>
  </thead>

  <tbody/>

  <tbody>
    <tr>
      <td>
        Los nombres métricos de APM se representan como cadenas individuales de segmentos separados por barras diagonales.

        Por ejemplo, la métrica "`Datastore/statement/MySQL/users/select` " representa el tiempo dedicado a una operación de base de datos seleccionada en la tabla de usuarios.
      </td>

      <td>
        Una métrica unidimensional denominada `apm.service.datastore.operation.duration` representa todo el grupo de métricas de almacenamiento de datos.

        Esta métrica tiene tres atributos que representan los valores de datos codificados en el nombre de la métrica, el tipo de almacén de datos, la tabla y la operación:

        `datastoreType = ‘MySQL’`

        `table = ‘users’`

        `operation = ‘select’`
      </td>
    </tr>
  </tbody>
</table>

Algunas de las APM métricas disponibles como métrica dimensional:

<table>
  <thead>
    <tr>
      <th>
        Nombre de la métrica
      </th>

      <th>
        Descripción
      </th>

      <th>
        Atributo
      </th>

      <th>
        Unidad métrica
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `apm.service.cpu.usertime.utilization`
      </td>

      <td>
        Tiempo dedicado al código en modo de usuario
      </td>

      <td>
        percentage
      </td>

      <td>
        percentage
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.datastore.operation.duration`
      </td>

      <td>
        Tiempo de respuesta para llamadas de base de datos desglosadas por operaciones de tabla
      </td>

      <td>
        `datastoreType`, `table`, `operation`
      </td>

      <td>
        segundos
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.error.count`
      </td>

      <td>
        Recuento de errores de resumen métrico
      </td>

      <td>
        `transactionType`
      </td>

      <td>
        count
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.external.host.duration`
      </td>

      <td>
        Tiempo de respuesta para llamadas externas desglosadas por nombre de host externo
      </td>

      <td>
        `external.host`
      </td>

      <td>
        segundos
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.instance.count`
      </td>

      <td>
        Recuento del número de instancias de agente.
      </td>

      <td/>

      <td>
        count
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.memory.physical`
      </td>

      <td>
        Memoria de proceso en MB
      </td>

      <td/>

      <td>
        megabytes
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.transaction.apdex`
      </td>

      <td>
        Puntajes Apdex por transacción
      </td>

      <td>
        `transactionName`, `transactionType`
      </td>

      <td>
        apdex
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.transaction.duration`
      </td>

      <td>
        Tiempo de respuesta por transacción
      </td>

      <td>
        `keyTransactionName`, `transactionName`, `transactionType`
      </td>

      <td>
        segundos
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.transaction.error.count`
      </td>

      <td>
        Recuentos de errores por transacción
      </td>

      <td>
        `keyTransactionName`, `transactionName`, `transactionType`
      </td>

      <td>
        count
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.transaction.external.duration`
      </td>

      <td>
        Tiempo de respuesta de llamada externa por tipo de transacción
      </td>

      <td>
        `transactionType`
      </td>

      <td>
        segundos
      </td>
    </tr>
  </tbody>
</table>

Aprende cómo [ver todas las métricas disponibles para ti](#get-list). Para obtener la unidad de métrica para un nombre de métrica determinado, puede utilizar una consulta como:

```sql
FROM Metric
  SELECT unit
  WHERE appName = 'YOUR_APP_NAME'
  AND metricName = 'METRIC_NAME'
```

Para comprender más sobre la estructura general de los datos de intervalo de tiempo de métrica, incluidos algunos ejemplos comunes, consulte [intervalo de tiempo de datos métricos](/docs/using-new-relic/data/understand-data/new-relic-data-types#timeslice-data).

### Atributo

Estos atributos están disponibles además del atributo métrico específico que figura en la tabla métrica <InlinePopover type="apm"/>anterior.

<table style={{ width: "700px" }}>
  <thead>
    <tr>
      <th>
        Nombre
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `appName`
      </td>

      <td>
        El nombre de la aplicación.
      </td>
    </tr>

    <tr>
      <td>
        `appId`
      </td>

      <td>
        El ID de la aplicación.
      </td>
    </tr>

    <tr>
      <td>
        `entity.guid`
      </td>

      <td>
        El GUID de la aplicación.
      </td>
    </tr>

    <tr>
      <td>
        `host`
      </td>

      <td>
        El anfitrión del proceso de supervisión.
      </td>
    </tr>

    <tr>
      <td>
        `host.bootId`
      </td>

      <td>
        El ID del inicio del host, si está disponible.
      </td>
    </tr>

    <tr>
      <td>
        `host.displayName`
      </td>

      <td>
        El `display_name` del host, si estaba configurado en el agente.
      </td>
    </tr>

    <tr>
      <td>
        `instanceName`
      </td>

      <td>
        Para el agente <InlinePopover type="apm"/>de Java, `host : port`
      </td>
    </tr>

    <tr>
      <td>
        `metricName`
      </td>

      <td>
        El nombre de la métrica dimensional.
      </td>
    </tr>

    <tr>
      <td>
        `metricTimesliceName`
      </td>

      <td>
        El nombre del segmento de tiempo de la métrica legacy .
      </td>
    </tr>

    <tr>
      <td>
        `scope`
      </td>

      <td>
        (Opcional) El nombre del intervalo de tiempo de la métrica legacy a la que esta métrica tiene "alcance". Las métricas con alcance le pertenecen: sus medidas se aplican al contexto de la métrica nombrada en el atributo `scope` . Vea a continuación ejemplos.
      </td>
    </tr>
  </tbody>
</table>

## Descripción general métrica [#overview-metrics]

La descripción general métrica le permite obtener un desglose de dónde se dedica el tiempo durante la ejecución. Estas métricas son únicas en algunos aspectos:

* Son una combinación de muchos intervalos de tiempo.
* Están diseñados para funcionar únicamente con la función de agregador `average` .
* El código ejecutado simultáneamente mostrará el tiempo de ejecución combinado.

Por ejemplo, si su servicio llama a una base de datos MySQL en 3 subprocesos simultáneos con un tiempo de respuesta promedio de 0,1 segundos para cada subproceso, el segmento MySQL aparecerá como 0,3.

Se proporcionan varias métricas generales para diferentes propósitos:

<table>
  <thead>
    <tr>
      <th>
        Nombre de la métrica
      </th>

      <th>
        Descripción
      </th>

      <th>
        Atributo
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `apm.service.overview.web`
      </td>

      <td>
        Desglose del tiempo empleado en diferentes partes del servicio de transacción web
      </td>

      <td>
        segmentName
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.overview.other`
      </td>

      <td>
        Desglose del tiempo empleado en diferentes partes del servicio para fondo/transacción no web
      </td>

      <td>
        segmentName
      </td>
    </tr>

    <tr>
      <td>
        `apm.service.transaction.overview`
      </td>

      <td>
        Desglose del tiempo dedicado a una transacción específica
      </td>

      <td>
        metricTimesliceName
      </td>
    </tr>

    <tr>
      <td>
        `apm.key.transaction.overview`
      </td>

      <td>
        Desglose del tiempo dedicado a una transacción clave específica
      </td>

      <td>
        segmentName
      </td>
    </tr>
  </tbody>
</table>

## Consulta genérica con la métrica `newrelic.timeslice.value` [#generic-queries]

Para métricas que no han sido convertidas a métrica dimensional, o para su propia métrica personalizada, tenemos una métrica dimensional llamada `newrelic.timeslice.value`.

<Callout variant="important">
  Recomendamos utilizar la métrica dimensional de la [tabla de arriba](#timeslice-conversion) cuando sea posible.
</Callout>

### ¿Cuándo usar `newrelic.timeslice.value`? [#when-to-use]

Dado un nombre de intervalo de tiempo de métrica, puedes consultar para ver si tiene un equivalente métrico dimensional convertido con esta sintaxis:

```sql
FROM Metric
SELECT uniques(metricName)
WHERE metricTimesliceName = 'Datastore/statement/MySQL/test/select'
```

Si el único nombre de métrica devuelto es `newrelic.timeslice.value`, deberá consultar sus datos utilizando este enfoque general.

### Obtener disponible métrica [#get-list]

Para obtener una lista de métricas disponibles para una aplicación, puede utilizar una consulta como:

```sql
SELECT uniques(metricTimesliceName) 
FROM Metric WHERE appName='YOUR_APP_NAME' 
AND newrelic.timeslice.value IS NOT NULL
```

## Faceta en un segmento de nombre de métrica con comodines [#wildcard]

Algunos nombres de intervalo de tiempo de métrica incluyen valores de atributos como segmentos del nombre de la métrica. Por ejemplo, nuestro <InlinePopover type="apm"/>agente reporta métrica al rastrear la duración de las llamadas externas usando este formato:

```
External/{externalHost}/all
```

Aquí, `{externalHost}` representa el nombre de host para la llamada de red saliente.

A continuación se muestra un ejemplo de una [consulta `newrelic.timeslice.value` genérica](#generic-queries) de una métrica personalizada que tiene facetas en un segmento de métrica con comodines:

```sql
FROM Metric SELECT count(newrelic.timeslice.value) 
  WHERE appName = 'MY APP' 
  WITH METRIC_FORMAT 'Custom/Labels/{action}' 
  TIMESERIES FACET action
```

En esta consulta, `{action}` crea un atributo temporal, `action`, que luego utiliza `FACET action`. Puede usar cualquier nombre que desee, porque es solo un atributo que existe mientras dura la consulta. Debe elegir un nombre que no entre en conflicto con el nombre de un atributo existente.

## Funciones de agregador recomendadas [#aggregator-functions]

[Las funciones recomendadas del agregador](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions#functions) NRQL incluyen:

* `apdex`
* `average`
* `sum`
* `count`
* `rate`
* `uniques`

## Ejemplos de consulta

Algunos ejemplos de consulta de datos de intervalo de tiempo de métrica:

<CollapserGroup>
  <Collapser
    id="multiple-app-names"
    title="Faceta por varios nombres de aplicaciones"
  >
    Esta consulta utiliza [`WHERE… IN`](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions#sel-where) para especificar dos aplicaciones y luego las faceta:

    ```sql
    FROM Metric
      SELECT rate(count(apm.service.transaction.duration), 1 minute) as 'Web throughput' 
      WHERE appName IN ('MY_APPLICATION', 'MY_OTHER_APPLICATION')
      AND (transactionType = 'Web')
      FACET appName
      TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="rate"
    title="Tasa de rendimiento por minuto"
  >
    Esta consulta muestra un gráfico de solicitudes por minuto utilizando la función [`rate`](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions#func-rate) :

    ```sql
    FROM Metric 
      SELECT rate(count(apm.service.transaction.duration), 1 minute) as 'HttpDispatcher requests_per_minute' 
      WHERE appName = 'MY_APPLICATION' 
      AND (transactionType = 'Web')
      TIMESERIES SINCE 3 days ago
    ```
  </Collapser>

  <Collapser
    id="facet-by-host"
    title="Faceta por atributo relacionado con el host"
  >
    Esta consulta muestra un gráfico de solicitudes por minuto dividido por nombre de host:

    ```sql
    FROM Metric 
      SELECT count(apm.service.transaction.duration) as 'HttpDispatcher requests_per_minute' 
      WHERE appName = 'MY_APPLICATION' 
      AND (transactionType = 'Web')
      TIMESERIES SINCE 3 hours ago 
      FACET host 
      LIMIT 20
    ```

    En lugar de usar `host`, puede facetar con otro [atributo relacionado con el host](/node/36916/revisions/402556/view#infrastructure-attributes), como `host.bootId`.
  </Collapser>

  <Collapser
    id="average"
    title="Consulta de duración media de una métrica"
  >
    Esto consulta la duración promedio de una métrica usando [`average`](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions#func-average):

    ```sql
    FROM Metric
      SELECT average(apm.service.transaction.duration) as 'HttpDispatcher average duration' 
      WHERE appName = 'MY_APPLICATION' 
      AND (transactionType = 'Web') 
      TIMESERIES SINCE 3 days ago
    ```
  </Collapser>

  <Collapser
    id="average"
    title="Desglose el tiempo promedio dedicado a una transacción por los segmentos que la componen"
  >
    Esta consulta desglosa la duración promedio de una sola transacción (en este caso, la acción `show` en el `UsersController` de una aplicación Rails llamada `MY_APPLICATION`) en los 20 segmentos individuales principales (consulta de la base de datos, servicio externo llamadas, tiempo de recolección de basura, etc.). Reproduce gran parte del cuadro "Desglose de la aplicación" como se ve en la página de transacciones de APM para una entidad de servicio:

    ```sql
    FROM Metric 
      SELECT average(newrelic.timeslice.value, exclusiveTime: true) as 'duration, seconds' 
      WHERE appName = 'MY_APPLICATION' 
      AND scope = 'Controller/users/show'
      LIMIT 20 
      FACET metricTimesliceName
      TIMESERIES SINCE 3 days ago
    ```
  </Collapser>
</CollapserGroup>
