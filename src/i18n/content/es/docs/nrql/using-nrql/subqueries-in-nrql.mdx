---
title: Utilice subconsultas para vincular varias consultas
metaDescription: 'How to use subqueries in NRQL, the New Relic query language.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

Con NRQL, puede ejecutar un <DNT>**subquery**</DNT>, que es una consulta anidada dentro de otra consulta. Una subconsulta es una consulta anidada dentro de otra consulta: le permiten utilizar el resultado de una consulta en otra consulta. Con subconsultas, puedes:

* Realizar cálculos sobre las entidades hijas de una entidad matriz.
* Consulte el registro de errores para hosts con alta carga de CPU según la utilización de CPU del agente de infraestructura

En NRQL, las subconsultas pueden aparecer en la declaración [`SELECT`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#state-select) y en la cláusula [`WHERE`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-where) .

Aquí hay una consulta de ejemplo para obtener un recuento de transacciones con una duración superior al promedio:

```sql
SELECT count(*) FROM Transaction WHERE duration > (SELECT average(duration) FROM Transaction)
```

Los resultados de una subconsulta deben tener sentido en contexto. En el ejemplo anterior, la condición mayor que en la cláusula `WHERE` requiere una subconsulta que devuelva un valor único. Una subconsulta que devuelva un conjunto de valores (por ejemplo, una subconsulta [`uniques()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-uniques) ) fallaría.

También puede anidar una subconsulta dentro de otra subconsulta. NRQL permite un máximo de tres subconsultas, anidadas o no, dentro de una única consulta.

El rango de tiempo de la subconsulta será el mismo que el de la consulta externa, a menos que se especifique explícitamente con [`SINCE`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-since)/[`UNTIL`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-until). En un panel, al elegir una ventana del [selector de tiempo](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) , se alinea el rango de tiempo de la subconsulta con el de la consulta externa. Si ha configurado <DNT>**Ignore Time Picker**</DNT> para ese gráfico, entonces el rango de tiempo de la subconsulta y el rango de tiempo de la consulta externa no serán los mismos.

## Ejecución de subconsulta [#subquery-execution]

Durante la ejecución de la consulta, cada subconsulta se ejecuta de forma independiente y su resultado se utiliza como un valor constante o conjunto de valores en la consulta externa. Debido a este modelo de ejecución, es posible que las subconsultas no hagan referencia a atributos y valores de la consulta externa.

El [límite de duración de la consulta](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/#query-duration) se respeta para consultas con subconsultas. Esto significa que todas las subconsultas y la consulta externa deben completar la ejecución dentro del límite de duración.

El número máximo de resultados que puede devolver una subconsulta es el mismo que el [valor`LIMIT MAX` ](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit): 5000. Cuando se excede ese límite, es posible que se obtengan resultados incompletos y este mensaje de error: "La subconsulta puede haber alcanzado el límite máximo de miembros de resultados, lo que puede provocar un resultado incompleto".

## Subconsultas y agregación anidada [#subquery-vs-nested-aggregation]

Aunque parecen similares, las subconsultas son diferentes de [las agregaciones anidadas](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query), que permiten agregar el resultado de una consulta anidada. Las agregaciones anidadas se utilizan en la cláusula `FROM` , mientras que las subconsultas se utilizan en la declaración `SELECT` y la cláusula `WHERE` .

## Límites [#subquery-limitations]

* Las subconsultas no son compatibles con las reglas de condición de alerta o evento a métrica (E2M) NRQL. Debido a que la consulta con subconsultas requiere realizar múltiples pases sobre los datos, las subconsultas son incompatibles con las alertas de transmisión u otros productos basados en el procesamiento de datos de transmisión.
* Las cláusulas `TIMESERIES` y `COMPARE WITH` , que hacen que consulta devuelva múltiples conjuntos de resultados, no se admiten en subconsultas.
* Las subconsultas no pueden aparecer en la cláusula `FACET` , aunque pueden aparecer en las cláusulas `WHERE` utilizadas en `FACET CASES`.
* Tiene [límites en el número de resultados.](#subquery-execution)

## Ejemplos de subconsultas [#subquery-examples]

Aquí hay algunos ejemplos de subconsultas:

<CollapserGroup>
  <Collapser
    id="numeric-conditions"
    title="Condiciones numéricas"
  >
    Puede utilizar cualquier consulta que devuelva un único valor numérico, como las que utilizan el agregador `average()`, `count()`, `uniqueCount()` o `latest()` en condiciones numéricas.

    La siguiente consulta encuentra el recuento de transacciones cuya duración fue mayor que el promedio:

    ```sql
    FROM Transaction SELECT count(*)
    WHERE duration > (FROM Transaction SELECT average(duration))
    ```
  </Collapser>

  <Collapser
    id="in-conditions"
    title="En condiciones"
  >
    Cualquier consulta que devuelva un conjunto de valores, incluidos aquellos que usan `uniques()`, se puede utilizar en una condición `IN` .

    La siguiente consulta calcula la duración promedio de las transacciones que son hijas de una entidad en particular:

    ```sql
    FROM Transaction SELECT average(duration) WHERE entityGuid IN
      (FROM Relationship SELECT targetEntityGuid
      WHERE sourceEntityGuid = 'MjUyMDUyOHxOUjF8V09SS0xPQUR8NzYzMDQ'
      AND relationshipType = 'CONTAINS')
      SINCE 1 day ago
    ```
  </Collapser>

  <Collapser
    id="string-condition"
    title="Condición de cadena con una subconsulta facetada"
  >
    Cuando se utiliza un operador de comparación (`=`, `!=`, `<`, etc.) con una subconsulta facetada, se debe especificar `LIMIT 1` para limitar el resultado a un solo valor.

    La siguiente consulta busca errores de transacción asociados con la última transacción de la cuenta con la duración promedio de transacción más alta:

    ```sql
    FROM TransactionError SELECT * WHERE guid = (FROM Transaction SELECT latest(guid) FACET accountId ORDER BY average(duration) LIMIT 1)
    ```
  </Collapser>

  <Collapser
    id="delta-query"
    title="Consulta delta"
  >
    Puede utilizar los resultados de la subconsulta en los cálculos de la declaración `SELECT` . Una subconsulta puede especificar un rango de tiempo diferente al de la consulta externa.

    La siguiente consulta muestra la diferencia entre la duración promedio actual de la transacción y la duración promedio de la última semana:

    ```sql
    FROM Transaction SELECT average(duration) -
      (FROM Transaction SELECT average(duration)
      SINCE 7 days ago) TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="multiple-subqueries"
    title="Múltiples subconsultas"
  >
    Pueden aparecer hasta tres subconsultas en una sola consulta.

    La siguiente consulta encuentra las cuentas únicas responsables de transacciones cuya duración fue mayor al percentil 99:

    ```sql
    FROM Transaction SELECT uniques(accountId) WHERE guid IN
      (FROM Transaction SELECT uniques(guid) WHERE duration >
      (FROM Transaction SELECT percentile(duration, 99)))
    ```
  </Collapser>

  <Collapser
    id="function-argument"
    title="Subconsulta como argumento de función"
  >
    Muchas funciones NRQL pueden tomar una subconsulta como argumento.

    La siguiente consulta genera una cadena que muestra la duración de la transacción individual en comparación con el promedio:

    ```sql
    SELECT concat('This transaction duration: ', duration, '; average transaction duration: ',
      (SELECT average(duration) FROM Transaction), precision: 4) FROM Transaction
    ```
  </Collapser>
</CollapserGroup>
