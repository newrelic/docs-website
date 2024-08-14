---
title: Consultar el tipo de datos Métricas
metaDescription: 'How to query New Relic''s Metric data type, which is reported by our Metric API and the integrations that use it.'
freshnessValidatedDate: never
translationType: machine
---

Cuando las métricas se informan a New Relic a través de la [API de métrica](/docs/data-ingest-apis/get-data-new-relic/metric-api/introduction-metric-api) (incluidas las integraciones que usan esa API), los datos se informan como el [tipo de datos`Metric` ](/docs/data-apis/understand-data/metric-data/metric-data-type)y están disponibles para consultas.

Este documento explica:

* Cómo [ver y consultar tu métrica](#view-and-query)
* [Ejemplo consulta métrica](#example-metric-queries)
* Cómo [consultar múltiples métricas con comodines](#query-multiple-metrics-wildcards)
* Cómo [explorar datos métricos](#explore-metric-data)

## Consulta APM intervalo de tiempo de datos métricos [#metric-timeslice]

APM reporta un tipo específico de datos que llamamos intervalo de tiempo de datos métricos. Para saber cómo consultar eso, consulte [consulta intervalo de tiempo de datos métricos](/docs/query-data/nrql-new-relic-query-language/nrql-query-tutorials/query-metric-timeslice-data-nrql).

<Callout variant="important">
  No se puede consultar timeslice métrica en conjunto con dimensional métrica o datos de evento. Cualquier consulta que involucre `newrelic.timeslice.value` o una `apm.*` métrica solo puede devolver métricas APM.
</Callout>

Para obtener información sobre otros tipos de métrica, consulte [tipos de datos métricos](/docs/using-new-relic/data/understand-data/new-relic-data-types#metrics-new-relic).

## Visualiza y consulta tu métrica [#view-and-query]

Puedes usar [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) para consultar tus datos métricos en el [generador de consultas](/docs/chart-builder/use-chart-builder/get-started/introduction-chart-builder) o usar nuestra [API NerdGraph](/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph).

Para consultar una métrica, puede utilizar el siguiente formato de consulta:

```
FROM Metric SELECT function(metric_name) WHERE attribute=value FACET attribute TIMESERIES
```

Para obtener información sobre qué funciones son compatibles con qué tipos de datos métricos, consulte [estructura de datos métricos](/docs/data-apis/understand-data/metric-data/metric-data-type).

Agregue los nombres de las métricas que desea graficar con la función de valor apropiada en la cláusula `SELECT` . Las cláusulas `WHERE` y `FACET` se pueden utilizar con valores de atributos. Recuerde incluir la palabra clave `TIMESERIES` si desea graficar los datos.

Este ejemplo demuestra cómo se puede representar gráficamente el uso de CPU en segundos para el clúster `foo` . Esta consulta desglosa el uso de CPU por contenedor, dada una métrica `count` denominada `container_cpu_usage_seconds_total` con el atributo `containerName` y `clusterName`:

```
FROM Metric select sum(container_cpu_usage_seconds_total) 
  WHERE clusterName = 'foo' 
  FACET containerName 
  TIMESERIES
```

Si desea el uso de CPU por minuto (la tasa de cambio), puede agregar la función de tasa a la consulta anterior.

```
FROM Metric select rate(sum(container_cpu_usage_seconds_total), 1 minute) 
  WHERE clusterName = 'foo' 
  FACET containerName 
  TIMESERIES
```

## Ver ejemplo consulta métrica [#example-metric-queries]

Los ejemplos anteriores demuestran formas básicas de consulta métrica, pero NRQL también se puede utilizar para trazar, explorar y analizar datos métricos.

<CollapserGroup>
  <Collapser
    id="example-multiple-metrics"
    title="Tabla métrica múltiple"
  >
    Grafique múltiples métricas usando una sola consulta proporcionando una lista de métricas separadas por comas en la cláusula `SELECT` . Por ejemplo, para representar gráficamente el uso de memoria de un contenedor junto con la métrica de límite de memoria, utilice la siguiente consulta:

    ```
    FROM Metric 
      SELECT latest(container_memory_usage_bytes), latest(container_spec_memory_limit_bytes) 
      WHERE containerName = 'inventory' 
      TIMESERIES
    ```

    También puedes hacer esto usando [comodines](#query-multiple-metrics-wildcards), como se explica a continuación.
  </Collapser>

  <Collapser
    id="example-math"
    title="Realizar operaciones matemáticas sobre datos métricos."
  >
    Realice operaciones matemáticas en una o más métricas para calcular una nueva métrica derivada. Para monitor la memoria disponible, puedes calcular el porcentaje de memoria disponible a partir de las dos métricas utilizadas en el ejemplo anterior:

    ```
    FROM Metric 
      SELECT (latest(container_spec_memory_limit_bytes) - latest(container_memory_usage_bytes)) 
        / latest(container_spec_memory_limit_bytes) 
        * 100 
        AS '% Memory Available' 
      WHERE containerName = 'inventory' 
      TIMESERIES
    ```

    También puedes hacer esto usando [comodines](#query-multiple-metrics-wildcards), como se explica a continuación.
  </Collapser>

  <Collapser
    id="example-filters-timeseries"
    title="Utilice filtros para seleccionar series temporales específicas"
  >
    Además de utilizar una cláusula `WHERE` que se aplica a todo lo incluido en `SELECT`, NRQL proporciona otra función de agregación llamada `filter` que se puede utilizar para seleccionar una serie de tiempo específica para graficarla u operarla.

    El siguiente ejemplo muestra una métrica de uso de memoria etiquetada como `"Total (k8s)"` que se calcula sumando el uso de memoria de dos contenedores específicos dentro de un pod:

    ```
    FROM Metric 
      SELECT filter(
        latest(
          container_memory_usage_bytes), 
        WHERE containerName = 'discovery') 
      + filter(
        latest(
          container_memory_usage_bytes), 
        WHERE containerName = 'my-proxy') 
      AS 'Total (k8s)' 
      WHERE clusterName = 'my-cluster' AND podName LIKE 'my-pilot-%' 
      TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="example-view-raw-datapoints"
    title="Ver los puntos de datos métricos sin procesar"
  >
    Al consultar datos métricos usando `FROM Metric`, New Relic selecciona automáticamente el agregado específico que se usará en la consulta, según la longitud de la ventana de consulta y cualquier tamaño de depósito especificado como argumento para la palabra clave `TIMESERIES` . Esto garantiza consultas y resolución de gráficos eficientes. Si desea anular este comportamiento para ver u operar con los puntos de datos métricos sin procesar, utilice la palabra clave opcional `RAW` en su consulta.

    Al consultar estos puntos de datos métricos sin procesar, existe un límite de tiempo de consulta de 48 horas. Cualquier consulta que intente acceder a más de 48 horas de datos métricos sin procesar resultará en un error de consulta.

    Este ejemplo muestra cómo enumerar los últimos 20 puntos de datos recibidos para una métrica en particular:

    ```
    FROM Metric SELECT * WHERE metricName = 'container_fs_usage_bytes' LIMIT 20 RAW
    ```
  </Collapser>
</CollapserGroup>

## Consulta métrica múltiple con comodines [#query-multiple-metrics-wildcards]

Los comodines están representados en NRQL por el carácter `%` . Si desea consultar varias métricas que utilizan una convención de nomenclatura estándar, puede utilizar la característica comodín para devolver resultados para todas ellas sin tener que especificar el nombre de cada métrica individualmente.

Los comodines pueden ayudarte a:

* Métrica agregada juntos y graficar los resultados
* `FACET` resultados por nombre de métrica en un gráfico
* Encuentre y represente gráficamente todas las métricas que coincidan con una convención de nomenclatura determinada.

Los comodines son particularmente útiles si luego agregas nuevas métricas que coincidan con una convención de nomenclatura existente. Al utilizar `%` en lugar de escribir cada nombre de métrica en su consulta, no tendrá que volver a escribir la consulta cuando agregue nuevas métricas.

Digamos que tiene varios algoritmos que realizan una tarea similar. Se pueden definir las siguientes métricas, que muestran la duración de los diferentes algoritmos:

* `myNeatProcess.algorithm1.duration`
* `myNeatProcess.algorithm2.duration`
* `myNeatProcess.algorithm3.duration`

Si se utiliza en una consulta, `myNeatProcess.%.duration` devolverá resultados para los tres algoritmos anteriores. Si luego crea nuevos algoritmos llamados `algorithm4`, `algorithm5` y `algorithm6`, la misma consulta devolverá resultados para los seis algoritmos.

<CollapserGroup>
  <Collapser
    id="example-multiple-metrics-wildcard"
    title="Gráfico métrico múltiple con comodines"
  >
    Puede trazar múltiples métricas usando una sola consulta usando comodines (`%`) en la cláusula `SELECT` . Por ejemplo, para consultar todos los algoritmos del ejemplo anterior y trazar una línea en el gráfico para la duración promedio de cada algoritmo, utilice la siguiente consulta:

    ```
    FROM Metric 
    	SELECT average(myNeatProcess.%.duration) 
    	FACET metricName TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="example-math"
    title="Realizar operaciones matemáticas sobre datos métricos con comodines."
  >
    También puedes usar comodines para realizar operaciones matemáticas en múltiples métricas y calcular una nueva métrica. Puede calcular la duración media de todos los algoritmos enumerados en el ejemplo anterior:

    ```
    FROM Metric 
    	SELECT average(myNeatProcess.%.duration) TIMESERIES
    ```

    Puede calcular qué porcentaje del tiempo de ejecución total requiere un único algoritmo:

    ```
    FROM Metric 
    	SELECT myNeatProcess.algorithm1.duration / sum(myNeatProcess.%.duration) TIMESERIES
    ```
  </Collapser>
</CollapserGroup>

## Devolver resultados para campos individuales usando `getField()` [#use-getField]

Hay [varios tipos de datos `Metric` ](/docs/data-apis/understand-data/metric-data/metric-data-type/#metric-types)(por ejemplo, `gauge` y `count`) y cada tipo tiene varios <DNT>**fields**</DNT> asociados. Para obtener detalles sobre los tipos de campos disponibles, consulte [`getField()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-getfield).

Puede utilizar `getField()` para extraer esos campos. Por ejemplo, si desea utilizar un valor único dentro de una métrica para realizar una comparación en una cláusula `WHERE` , puede utilizar `getField(metricName, field)` o `metricName[field]`.

<CollapserGroup>
  <Collapser
    id="example-list-gauge-metrics"
    title="Lista de medidor métrica"
  >
    Esta consulta de ejemplo devuelve una lista de medidor métrica:

    ```
    FROM Metric SELECT uniques(metricName) WHERE %[type] = 'gauge'
    ```
  </Collapser>

  <Collapser
    id="example-list-names-host"
    title="Enumere todos los nombres métricos para un host en particular"
  >
    El valor promedio de una métrica se calcula como `total` sobre `count`, por lo que la siguiente consulta devuelve datos de métrica donde el resultado de la función de valor `average()` es mayor que 2.

    ```
    FROM Metric SELECT average(apm.service.transaction.duration) WHERE appName = 'MyApp' AND apm.service.transaction.duration[total] / apm.service.transaction.duration[count] > 2
    ```
  </Collapser>
</CollapserGroup>

## Explorar datos métricos [#explore-metric-data]

Las funciones NRQL `keyset` y `uniques` se pueden usar junto con el atributo `metricName` (disponible en todas las métricas) para realizar tareas como enumerar todas las métricas disponibles en su cuenta o descubrir los atributos disponibles en una métrica particular.

<CollapserGroup>
  <Collapser
    id="example-list-names-account"
    title="Listar todos los nombres métricos en una cuenta"
  >
    ```
    FROM Metric SELECT uniques(metricName)
    ```
  </Collapser>

  <Collapser
    id="example-list-names-host"
    title="Enumere todos los nombres métricos para un host en particular"
  >
    ```
    FROM Metric SELECT uniques(metricName) WHERE hostname = 'host1.mycompany.com'
    ```
  </Collapser>

  <Collapser
    id="example-show-keys-metric"
    title="Mostrar las claves de atributos para una métrica específica"
  >
    ```
    FROM Metric SELECT keyset() WHERE metricName = METRIC_NAME
    ```
  </Collapser>
</CollapserGroup>
