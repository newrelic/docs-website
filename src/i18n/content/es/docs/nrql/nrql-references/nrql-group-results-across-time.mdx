---
title: 'NRQL: Resultados de facetas por tiempo'
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'New Relic NRQL: use the FACET clause to return results segmented by time buckets.'
freshnessValidatedDate: never
translationType: machine
---

Con [NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql), puede crear consultas que agrupen resultados a lo largo del tiempo. Por ejemplo, puede agrupar los resultados según la marca de tiempo separándolos en depósitos que cubran un rango específico de fechas y horas.

Cuando se utilizan las funciones de tiempo de la siguiente tabla en la consulta NRQL, los resultados regresan en UTC. Para ajustar los resultados a su zona horaria, incluya la [cláusula`WITH TIMEZONE` ](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-timezone)en su consulta.

<table>
  <thead>
    <tr>
      <th width={210}>
        <DNT>
          **Time-based function**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>

      <th>
        <DNT>
          **String format**
        </DNT>
      </th>

      <th>
        <DNT>
          **Numeric format**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td nowrap>
        `yearOf(attr [, format])`
      </td>

      <td>
        Devuelve el año de una timestamp.
      </td>

      <td nowrap>
        `2023`
      </td>

      <td nowrap>
        `2023`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `quarterOf(attr [, format])`
      </td>

      <td>
        Devuelve el trimestre del año. El valor devuelto incluye tanto el trimestre como el año cuando se formatea como una cadena.
      </td>

      <td nowrap>
        `Q1 2014`
      </td>

      <td nowrap>
        `1`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `monthOf(attr [, format])`
      </td>

      <td>
        Devuelve el mes y el año de la timestamp cuando se formatea como una cadena, o el mes numérico cuando se formatea como un número.
      </td>

      <td nowrap>
        `July 2014`
      </td>

      <td nowrap>
        `7`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `weekOf(attr)`
      </td>

      <td>
        Devuelve la semana en la que se produjo la timestamp nombrando el mes y el día del lunes de esa semana.
      </td>

      <td nowrap>
        `Week of January 15`
      </td>

      <td nowrap>
        N/A
      </td>
    </tr>

    <tr>
      <td nowrap>
        `weekdayOf(attr [, format])`
      </td>

      <td>
        Devuelve el día de la semana de la timestamp. El valor devuelto regresa al final de la semana, lo que le permite ver las tendencias por día de la semana a lo largo del tiempo.
      </td>

      <td nowrap>
        `Sunday`
      </td>

      <td nowrap>
        `0`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `dateOf(attr)`
      </td>

      <td>
        Devuelve la fecha de la timestamp. El valor devuelto incluye mes, día y año.
      </td>

      <td nowrap>
        `July 15, 2014`
      </td>

      <td nowrap>
        N/A
      </td>
    </tr>

    <tr>
      <td nowrap>
        `dayOfMonthOf(attr [, format])`
      </td>

      <td>
        Devuelve la fecha numérica dentro de un solo mes de la timestamp, un valor del 1 al 31. El valor devuelto no incluye el mes.
      </td>

      <td nowrap>
        `23`
      </td>

      <td nowrap>
        `23`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `daysInMonthOf(attr [, format])`
      </td>

      <td>
        Devuelve el número de días del mes de la timestamp.
      </td>

      <td nowrap>
        `30`
      </td>

      <td nowrap>
        `30`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `hourOf(attr [, format])`
      </td>

      <td>
        Devuelve la hora de la timestamp.

        El valor devuelto no incluye un 0 antepuesto para las horas entre la 1 a. m. y las 9 a. m. Esto difiere de funciones y cláusulas como `SINCE`, que aceptan estas horas con un 0 al inicio.
      </td>

      <td nowrap>
        `6:00`, `12:00`, `18:00`
      </td>

      <td nowrap>
        `6`, `12`, `18`
      </td>
    </tr>

    <tr>
      <td nowrap>
        `minuteOf(attr [, format])`
      </td>

      <td>
        Devuelve el minuto de la timestamp.

        El valor devuelto no incluye un 0 antepuesto para los minutos entre 1 y 9. Esto difiere de funciones y cláusulas como `SINCE`, que aceptan estos minutos con un 0 al inicio.
      </td>

      <td nowrap>
        `0`, `6`, `48`
      </td>

      <td nowrap>
        `0`, `6`, `48`
      </td>
    </tr>
  </tbody>
</table>

## Faceta el rango de tiempo de tu consulta NRQL [#cohorts]

<Callout variant="tip">
  En estos ejemplos, utilizamos un atributo de timestamp personalizado enviado con el evento PageView llamado `createdAt`. Para facetar el momento de la ingesta del evento PageView, puede utilizar el atributo `timestamp` en su lugar.
</Callout>

Para crear su consulta NRQL, use una [cláusula`FACET` ](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-facett)con una función de depósito que funcione con un atributo timestamp . Ejecute una consulta `FACET` estándar, pero en lugar de facetar por un atributo, facetear por tiempo. Por ejemplo:

```sql
SELECT count(*) FROM K8sDaemonsetSample FACET monthOf(createdAt)
```

<img
  title="NRQL facet by time"
  alt="A screenshot displaying a NRQL query faceted by time"
  src="/images/queries_screenshot-crop_facet-by-time-query.webp"
/>

Para realizar múltiples funciones dentro de la misma consulta, use la capacidad multifacética de NRQL:

```sql
SELECT count(*) FROM K8sDaemonsetSample FACET dateOf(createdAt), monthOf(createdAt)
```

<img
  title="NRQL facet by time with two functions"
  alt="NRQL facet by time with two functions"
  src="/images/queries_screenshot-crop_facet-by-time-two-functions.webp"
/>

Muchas funciones basadas en tiempo aceptan un segundo argumento opcional de `string` (el valor predeterminado) o `numeric`, que controla el formato del valor del resultado.

```sql
SELECT count(*) FROM K8sDaemonsetSample FACET monthOf(createdAt, numeric)
```

## Ejemplos de facetas [#facet-examples]

<CollapserGroup>
  <Collapser
    id="facet-time-example"
    title="Resultados del grupo por mes"
  >
    Para agrupar todos los resultados según el mes, utilice la función `monthOf` . En este ejemplo, la consulta NRQL incluye una función (`count(*)`), un tipo de datos, un período de tiempo (`SINCE 1 day ago`) y una faceta de tiempo (`monthOf(createdAt)`).

    ```sql
    SELECT count(*) FROM K8sDaemonsetSample SINCE 1 day ago FACET monthOf(createdAt)
    ```

    Al ejecutar la consulta se devuelve una tabla de resultados por mes.
  </Collapser>

  <Collapser
    id="facet-other-examples"
    title="Otros ejemplos de agrupación con cláusula FACET"
  >
    Puede ejecutar NRQL consulta para agrupar sus datos de otras formas, no solo por tiempo. Para ver ejemplos adicionales, consulte la [documentación de NRQL `FACET` ](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-facet).
  </Collapser>

  <Collapser
    id="timeseries-chart-examples"
    title="Ejemplo de creación de un gráfico especificando TIMESERIES"
  >
    Debe tener en cuenta que `UNTIL` agrega la función `TIMESERIES` y utiliza la función de tiempo en un gráfico de series de tiempo.

    El valor predeterminado de `UNTIL` es `NOW`, por lo que si no especifica nada, los valores de las funciones de tiempo pueden separarse o combinarse.

    Al especificar `UNTIL today`, puede crear un gráfico que finalice a las 00:00 a. m. del mismo día.

    ```sql
    SELECT count(*) FROM PageView TIMESERIES 1 day WITH TIMEZONE 'Europe/London' SINCE 4 week ago UNTIL today
    ```

    Si desea visualizar datos de `last month` en lugar de las últimas cuatro semanas, puede utilizar `SINCE last month UNTIL this month`.

    ```sql
    SELECT count(*) FROM PageView TIMESERIES 1 day  WITH TIMEZONE 'Europe/London' SINCE last month UNTIL this month
    ```
  </Collapser>
</CollapserGroup>

Si aún no lo ha hecho, cree su cuenta New Relic gratuita a continuación para comenzar a monitorear sus datos hoy.

<InlineSignup/>
