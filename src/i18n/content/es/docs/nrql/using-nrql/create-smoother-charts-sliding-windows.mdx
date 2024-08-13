---
title: Utilice ventanas deslizantes para gráficos más fluidos
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: Explains how to use the SLIDE BY clause with TIMESERIES to smooth out "spiky" charts.
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

Puede utilizar la función de ventanas deslizantes para crear gráficos utilizando la cláusula `SLIDE BY` junto con la cláusula `TIMESERIES` , que le permite recopilar datos en "ventanas" de tiempo que se superponen entre sí.

<Callout variant="tip">
  También puede utilizar ventanas deslizantes a través de la UI en la condición [de configuración de señal avanzada](/docs/alerts-applied-intelligence/new-relic-alerts/alert-conditions/create-nrql-alert-conditions/#advanced-signal).
</Callout>

Por ejemplo, en la imagen siguiente, una consulta recopila datos con ventanas de 5 minutos. Las ventanas se "deslizan" 1 minuto. Cada ventana se superpone con la ventana anterior durante 4 minutos.

<img
  title="TIMESERIES query with SLIDE BY clause"
  alt="Image representing a TIMESERIES query using the SLIDE BY clause"
  src="/images/queries-nrql_diagram_slide-by-window-time-series.webp"
/>

<figcaption>
  Ventanas de 5 minutos con "deslizamiento" de 1 minuto
</figcaption>

A diferencia de las ventanas correderas, las ventanas "giratorias" o "en cascada" no se superponen. Por ejemplo, en esta consulta `TIMESERIES 3 minutes` NRQL, las ventanas tienen una duración de 3 minutos y cada una comienza cuando la otra termina sin superposición en el intervalo de medición.

<img
  title="TIMESERIES query without SLIDE BY clause"
  alt="Image representing a standard TIMESERIES query"
  src="/images/queries-nrql_diagram_non-sliding-window-time-series.webp"
/>

<figcaption>
  Ventanas de 3 minutos sin superposición ni "deslizamiento".
</figcaption>

## Cuando usar ventanas correderas [#when-to-use]

Las ventanas deslizantes son útiles cuando necesitas suavizar gráficos "puntiagudos". Puede utilizar ventanas deslizantes para suavizar gráficos de líneas que tienen mucha variación en períodos cortos de tiempo. Esto es más útil en casos donde el agregado rodante (por ejemplo, una media rodante) es más importante que los agregados de ventanas de tiempo estrechas.

En el siguiente ejemplo, los datos varían mucho de un minuto a otro, por lo que el gráfico de ventana de caída de 1 minuto muestra muchos picos altos y valles bajos.

<img
  title="TIMESERIES query without SLIDE BY clause"
  alt="Image of a chart based on a standard TIMESERIES query"
  src="/images/queries-nrql_screenshot-full_timeseries-spiky-NRQL-query-builder.webp"
/>

<figcaption>
  TIMESERIES consulta sin cláusula SLIDE BY
</figcaption>

Sin embargo, en este ejemplo, las ventanas `TIMESERIES` de 5 minutos de ancho se suavizan con la ayuda de intervalos `SLIDE BY` de 1 minuto. La consulta devuelve datos similares pero crea un gráfico mucho más fluido.

<img
  title="SLIDE BY used with TIMESERIES"
  alt="Image of a chart based on a TIMESERIES query used together with the SLIDE BY clause"
  src="/images/queries-nrql_screenshot-full_timeseries-smoothed-with-slide-by-NRQL-query-builder.webp"
/>

<figcaption>
  TIMESERIES consulta con cláusula SLIDE BY
</figcaption>

## `SLIDE BY` sintaxis [#valid-syntax]

La sintaxis NRQL válida para la cláusula `SLIDE BY` sigue el formato siguiente.

```sql
SELECT ... TIMESERIES integer1 units SLIDE BY integer2 units
```

`integer1` especifica el ancho de la ventana deslizante y `integer2` especifica el intervalo `SLIDE BY` . `units` es una unidad de tiempo, como `second`, `minute`, `hour` o `day`. Se aceptan todas las unidades de tiempo estándar NRQL.

A continuación se muestra un ejemplo de la vida real que muestra ventanas `TIMESERIES` de 5 minutos con un intervalo `SLIDE BY` 1 minuto.

```sql
SELECT average(duration) from Transaction TIMESERIES 5 minutes SLIDE BY 1 minute
```

<Callout variant="tip">
  Cuando se combina con `SLIDE BY`, `TIMESERIES` no es compatible con `AUTO` o `MAX`. El valor `TIMESERIES` debe ser un valor de unidad de tiempo entero. En otras palabras, `SLIDE BY AUTO` o `SLIDE BY MAX` funcionarán, pero no se admite `TIMESERIES AUTO` o `TIMESERIES MAX` seguido de `SLIDE BY` y `MAX`, `AUTO` o una unidad de tiempo entera específica.
</Callout>

## Traducción de consulta estilo PromQL [#translate-promql]

Cuando corresponde, una consulta de estilo PromQL se traduce en una consulta de ventana deslizante NRQL. Por ejemplo, si su consulta de estilo PromQL usa `rate(request_count[5m])` durante los últimos 60 minutos con una ventana superpuesta de 1 minuto, así es como esa consulta se traduciría a NRQL.

```sql
SELECT rate(sum(request_count), 1 SECONDS) FROM Metric SINCE 3600 SECONDS AGO UNTIL NOW 
FACET dimensions() LIMIT 100 TIMESERIES 300000 SLIDE BY 60000
```

En el resultado de la traducción, la unidad predeterminada de milisegundos se utiliza para las cláusulas `TIMESERIES` y `SLIDE BY` . Para `TIMESERIES`, 300000 ms son 300 segundos o 5 minutos, especificando un tamaño de ventana de 5 minutos. Para `SLIDE BY`, 60000 ms son 60 segundos, especificando un intervalo de diapositiva de 1 minuto.

## Utilice `SLIDE BY` con `MAX` y `AUTO` [#auto-max]

Puede combinar `SLIDE BY` con argumentos `MAX` y `AUTO` para personalizar aún más los resultados de la consulta, como se muestra en los ejemplos siguientes.

```sql
SELECT average(duration) FROM Transaction TIMESERIES 5 minutes SLIDE BY MAX
```

```sql
SELECT average(duration) FROM Transaction TIMESERIES 5 minutes SLIDE BY AUTO
```

<Callout variant="tip">
  El valor `SLIDE BY` determinado por `AUTO` o `MAX` puede producir un intervalo de paso mayor que el tamaño de la ventana, lo que se mostrará como espacios vacíos y resultados inesperados. Si experimenta estos problemas con los resultados de la consulta, considere verificar la instancia de `SLIDE BY` donde el intervalo de pasos excede el tamaño de la ventana.
</Callout>
