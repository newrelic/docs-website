---
title: Entender y consultar alta cardinalidad métrica
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to understand high cardinality metrics and successfully query for them using NRQL.'
freshnessValidatedDate: never
translationType: machine
---

Es importante comprender cómo funciona la alta cardinalidad, porque puede afectar la rapidez con la que se alcanzan los límites de datos.

## ¿Qué es la cardinalidad y por qué es importante? [#what-why]

La cardinalidad se define generalmente como el número de elementos únicos en un conjunto. Para métricas dimensionales, el conjunto en cuestión es la colección de mapas únicos de atributos observados para una métrica determinada en un período de un día. Puedes consultar la cardinalidad de una métrica en New Relic con el siguiente formato NRQL:

```sql
FROM Metric SELECT cardinality(metric.name) SINCE today RAW
```

Por ejemplo, para consultar la cardinalidad de la métrica `memory.heap` y averiguar cuántos pares principales de valores únicos existen para esta métrica, ejecute la siguiente consulta:

```sql
FROM Metric SELECT cardinality(memory.heap) SINCE today RAW
```

<Callout variant="tip">
  Recomendamos incluir la cláusula `RAW` en la consulta de cardinalidad que utilice `FROM Metric`. Esto se debe a que, en caso de que su cardinalidad haya sido limitada, una consulta como `SINCE today` consultará los paquetes acumulativos que ya no generan informes y, por lo tanto, necesitan examinar los puntos de datos sin procesar para realizar el análisis necesario.

  Tenga en cuenta que, debido a que la consulta de los puntos de datos sin procesar en intervalos de tiempo prolongados puede ser lenta, no se permiten `RAW` consultas que abarquen más de dos días de datos.
</Callout>

Si bien los conceptos básicos de lo que significa cardinalidad pueden ser simples de explicar, aprender a abordar y gestionar la alta cardinalidad puede ser un poco más complicado.

### Límites de cardinalidad y aplicación

New Relic impone límites a su cardinalidad métrica tanto a nivel per-métrica como a nivel de cuenta. La cardinalidad se evalúa a lo largo de un día UTC, comenzando a las 00:00:00 UTC y terminando a las 23:59:59 UTC.

Para obtener más información sobre los límites de datos y las políticas relacionadas, consulte [Límites y políticas de uso de datos de New Relic.](/docs/licenses/license-information/general-usage-licenses/new-relic-data-usage-limits-policies/)

## Cardinalidad y dimensionalidad métrica. [#dimensional-metrics]

La cardinalidad de una métrica es el tamaño del conjunto de mapas únicos de atributo observados para la métrica dada en un período de un día. Si las claves o valores en ese mapa cambian con el tiempo, agregarán una nueva cardinalidad para esa métrica. Veamos un ejemplo.

Imagine una red de 4 hosts, cada uno con 2 contenedores ejecutándose en ellos, y cada contenedor informa periódicamente la métrica del medidor `memory.heap`, con el nombre del host y la identificación del contenedor agregados como atributo.

<img
  title="Multiple hosts with multiple containers"
  alt="Host and containers combination resulting in high cardinality"
  src="/images/queries-nrql_diagram_high-cardinality-metrics.webp"
/>

Cuando se envía a la API métrica, una de estas métricas podría verse así:

```json
{
  "metrics": [
    {
      "name": "memory.heap",
      "type": "gauge",
      "value": 5514,
      "timestamp": 1234567890,
      "attributes": {
        "host": "W",
        "container": "1"
      }
    }
  ]
}
```

Esta métrica tendría entonces una cardinalidad de 8, ya que esa es la cantidad de mapeo únicos de `host` y `container` que son posibles. Si se toma una nueva medición para esta métrica con un atributo idéntico al que se había informado anteriormente, no se contabilizará ninguna nueva cardinalidad.

## Influencias de la cardinalidad [#influences]

Como se muestra arriba, cualquier cambio en las claves o valores representará una nueva cardinalidad, pero predecir cómo esos cambios afectarán su cardinalidad total puede resultar un poco complicado. Es tentador suponer que la cardinalidad de una métrica es entonces el producto del número de todos los valores posibles para cada clave posible, pero este rara vez es el caso en la práctica, ya que los valores de una clave determinada a menudo dependen de los valores de otras claves o los determinan. llaves.

Usando el ejemplo anterior, una vez que tuvimos un valor de `container` de `1`, el valor de `host` se fijó en `W`, asumiendo que esos ID de contenedor son globalmente únicos. Entonces, si bien hay 8 contenedores en 4 hosts, la cardinalidad sigue siendo 8, no 4 \* 8 = 32, ya que la mayoría de las combinaciones contadas mediante el método de multiplicación simple no son posibles y, por lo tanto, no contribuyen a la cardinalidad de esa métrica. Nunca veremos la combinación de `host = 'X', container = 1`, por ejemplo.

Esto también significa que agregar más claves a un mapa de atributos no implica necesariamente un aumento de la cardinalidad total. Si el valor de la nueva clave está determinado únicamente por los valores de las claves existentes, no agregará nueva cardinalidad a largo plazo. Por ejemplo, si agrega algo como `region` a su mapa en el ejemplo, es probable que el valor `container` también esté fijado a un valor de región particular y, por lo tanto, mantenga su cardinalidad en 8.

Una advertencia importante aquí es que, si bien agregar `region` no aumentará la cardinalidad en el futuro, introducirá una nueva cardinalidad cuando se agregue por primera vez. Esto se debe a que agregar claves hará que esos mapas de atributos sean distintos de los anteriores, lo que aumentará temporalmente la cardinalidad total para ese día.

## Ejemplos y muestra de flujo de trabajo. [#examples-samples]

Si alcanza uno de sus límites de cardinalidad, hay un par de opciones que puede utilizar para remediar la situación. Una respuesta fácil es aumentar tus límites, pero si prefieres no hacerlo, una buena alternativa es explorar qué dimensiones contribuyen más a tu cardinalidad y pensar en eliminarlas si no aportan valor. Esto puede ahorrar costos de almacenamiento y ancho de banda y potencialmente evitar que necesite aumentar sus límites.

### Buscar contribuyentes de cardinalidad: métrica [#metrics-contributors]

Recuerde cómo obtener la cardinalidad de una métrica particular:

```sql
FROM Metric SELECT cardinality(memory.heap) SINCE today RAW
```

Para la cardinalidad total de la cuenta, puede utilizar la misma estructura de consulta básica y simplemente omitir el nombre de la métrica:

```sql
FROM Metric SELECT cardinality() SINCE today RAW
```

La cardinalidad de la cuenta es esencialmente la suma de la cardinalidad de cada métrica, por lo que agregar una simple consulta `FACET` puede ayudar a encontrar las métricas de alta cardinalidad:

```sql
FROM Metric SELECT cardinality() SINCE today RAW FACET metricName
```

Finalmente, si cree que ha alcanzado uno de sus límites de cardinalidad, puede confirmarlo buscando un `NrIntegrationError` relacionado:

```sql
FROM NrIntegrationError SELECT count(*) 
WHERE name = 'CardinalityViolationException' AND newRelicFeature = 'Metrics' 
FACET cardinalityLimitType, metricName, message SINCE today 
```

### Encontrar contribuyentes de cardinalidad: dimensiones [#dimensions-contributors]

Una vez que haya determinado la métrica que desea explorar, el siguiente paso es determinar qué dimensiones de una métrica determinada contribuyen más a su cardinalidad. Si no está familiarizado con los valores de sus dimensiones, puede verlos así:

```sql
FROM Metric SELECT dimensions() WHERE metricName = 'memory.heap' SINCE today RAW
```

La vista de resultados JSON probablemente será recomendable aquí. Examinarlos podría revelar algunas dimensiones que contienen un ID único u otro valor altamente variable que podría valer la pena eliminar.

Si ya está familiarizado con los valores que puede tomar su atributo, los resultados de `keySet()` pueden ser más fáciles de analizar:

```sql
FROM Metric SELECT keySet() WHERE metricName = 'memory.heap' SINCE today RAW
```

Comprender las dimensiones que tienen la mayor influencia en su cardinalidad total se reduce a comprender cómo se correlacionan los valores de cada clave entre sí. Puedes experimentar con cuál sería tu cardinalidad sin una dimensión simplemente agregándola a la lista de exclusión:

```sql
FROM Metric SELECT cardinality(memory.heap, exclude: {'container.id'}) SINCE today RAW
```

Asimismo, hay una lista de inclusión si es más conveniente para el contexto de la consulta:

```sql
FROM Metric SELECT cardinality(memory.heap, include: {'host.name', 'region'}) SINCE today RAW
```

Gestionar la cardinalidad puede ser complicado de conceptualizar, pero los métodos anteriores le ayudarán a obtener respuestas a preguntas como "¿Qué métrica contribuye con la mayor cardinalidad?" y "¿Qué impacto tiene un determinado atributo en esa cardinalidad total?".

A menudo ocurre que la cardinalidad sigue el mayor valor único, ya que ese valor puede precisar los posibles valores que otros atributos pueden adoptar. Sin embargo, hay muchos casos en los que la explosión de posibles combinaciones de un puñado de atributos impulsa la cardinalidad total. Las cosas que parecen identificadores únicos generalmente son un buen punto de partida, pero a veces no se trata de una única clave, sino de la combinación de dos o más claves. Cuanto más familiarizado esté con sus datos y los sistemas que los generan, más fácil será saber qué atributo incluir o excluir.

<Callout variant="tip">
  Si desea obtener más información sobre los límites y la resolución de problemas de la API métrica, aquí tiene dos buenos recursos:

  * [Límites API métrica y atributo restringido](/docs/telemetry-data-platform/ingest-apis/metric-api/metric-api-limits-restricted-attributes/)
  * [Solucionar problemas de API métrica con el evento NRIntegrationError](/docs/telemetry-data-platform/ingest-apis/metric-api/troubleshoot-nrintegrationerror-events/) son excelentes recursos para explorar.
</Callout>
