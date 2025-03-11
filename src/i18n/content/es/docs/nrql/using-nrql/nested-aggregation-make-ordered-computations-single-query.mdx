---
title: Utilice agregación anidada para realizar cálculos adicionales
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to use nested aggregation to understand how many users complete a set of steps in a procedure.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

Con la agregación anidada, puede completar una [consulta NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) y luego realizar cálculos adicionales utilizando los resultados de esa consulta. La agregación anidada proporciona capacidades NRQL similares a la clase de subconsultas o subselecciones SQL donde la subconsulta está en la cláusula `FROM` de la consulta externa.

<Callout variant="tip">
  Esta característica es diferente de nuestra [característica de subconsulta](/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql), que permite subconsultas en las cláusulas `SELECT` y `WHERE` .
</Callout>

La agregación anidada puede ayudarle a responder preguntas como estas sin crear múltiples consultas:

* ¿Cómo puedo contar las solicitudes por minuto para mi aplicación y luego obtener el máximo de solicitudes por minuto de la última hora?
* ¿Cómo puedo calcular el uso promedio de CPU de todos mis servidores o hosts y enumerar solo aquellos con un uso superior al 90%?
* De todas mis sesiones de usuario, ¿cómo puedo saber qué porcentaje rebotó inmediatamente?

## Estructura de consulta de agregación anidada [#requirements]

Cada consulta NRQL [debe comenzar con una declaración `SELECT` o una cláusula `FROM` ](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions). Una consulta de agregación anidada utiliza una declaración `SELECT` y una cláusula `FROM` y las aplica a una consulta completa o consultas contenidas entre paréntesis.

Una consulta de agregación anidada completa y con el formato adecuado se parece a esto:

```sql
SELECT function(attribute)
FROM (
  SELECT function(attribute)
  FROM dataType
  WHERE attribute
  TIMESERIES integer units
)
```

Algunos otros detalles sobre el comportamiento de consultas y cláusulas:

* La consulta anidada puede tener más de dos niveles.
* Puede aplicar tanto `TIMESERIES` como `FACET` a cualquier parte de la consulta anidada. No es necesario que sean idénticos en todos los niveles.
* `SINCE`Las cláusulas , `UNTIL` y `COMPARE WITH` se aplican a toda la consulta y solo puede usarlas en el nivel más externo.

## Ejemplos de consulta de agregación anidada [#examples]

A continuación se muestran algunos ejemplos de consulta anidada:

<CollapserGroup>
  <Collapser
    id="total-tx"
    title="Transacción total y tasa de respuesta más alta en un minuto"
  >
    En este ejemplo, la consulta interna primero cuenta la transacción de `myApp` para cada uno de los últimos 60 minutos y luego la consulta externa devuelve la tasa de solicitudes de 1 minuto más alta.

    Además, al darle un nombre al resultado de la primera consulta (`as rpm`), puede crear una etiqueta para el valor devuelto. Sin agregar la etiqueta, esta consulta devolverá el valor como recuento para usar en la consulta externa.

    ```sql
    SELECT max(rpm)
    FROM (
      SELECT count(*) as rpm
      FROM Transaction
      WHERE appName = 'myApp'
      TIMESERIES 1 minute
    )
    ```
  </Collapser>

  <Collapser
    id="avg-cpu"
    title="Uso promedio de CPU y uso de CPU superior al 90%"
  >
    En este ejemplo, la consulta interna calcula el uso promedio de CPU para todos los hosts, luego la consulta externa filtra los resultados solo para hosts con un uso de CPU superior a un umbral de riesgo (90%).

    ```sql
    SELECT hostname, cpu
    FROM (
      SELECT average(cpuPercent) as cpu
      FROM SystemSample
      FACET hostname
      TIMESERIES 1 minute
    )
    WHERE cpu > 90
    ```
  </Collapser>

  <Collapser
    id="pageviews"
    title="Vistas de página en cada sesión de usuario y número de sesiones con una sola vista de página"
  >
    En este ejemplo, la consulta interna calcula el número de `PageView` evento en cada sesión de usuario, luego la consulta externa calcula qué porcentaje de esas sesiones solo tenían una única vista asociada.

    ```sql
    SELECT percentage(count(*), WHERE sessionLength = 1)
    FROM (
      SELECT count(*) as sessionLength
      FROM PageView
      FACET session
    )
    ```
  </Collapser>

  <Collapser
    id="x-slowest-entity"
    title="Número de entidades fuera del top N transacciones que son más lentas que X"
  >
    En este ejemplo, la consulta interna encuentra los principales guías de entidades con la duración promedio de transacción más lenta. Luego, la consulta externa descubre cuántas de esas consultas son más lentas que el umbral. Aquí, la consulta selecciona las 50 consultas principales y las mide con un umbral de duración de 1 segundo.

    ```sql
    SELECT count(avgDurations)
    FROM (
      SELECT average(duration) AS avgDurations
      FROM Transaction
      FACET entity.guid
      LIMIT 50
    )
    WHERE avgDurations > 1
    ```
  </Collapser>

  <Collapser
    id="disk-writes-percentile"
    title="Percentil de hosts con el promedio más alto de escrituras en disco por hora"
  >
    En este ejemplo, hay dos agregaciones anidadas. La consulta más interna encuentra el promedio `diskWritesPerSecond` por hora para cada host. La siguiente consulta encuentra el promedio máximo para cada host y la consulta más externa calcula los percentiles 50, 75 y 99 de esos máximos.

    ```sql
    SELECT percentile(avgMaxWrites, 50, 75, 99)
    FROM (
      SELECT max(avgWrites) AS avgMaxWrites
      FROM (
        SELECT average(diskWritesPerSecond) as avgWrites
        FROM SystemSample
        FACET hostname
        TIMESERIES 1 hour
        LIMIT 50
      )
      FACET hostname
      LIMIT 50
    )
    SINCE 1 day ago
    ```
  </Collapser>
</CollapserGroup>
