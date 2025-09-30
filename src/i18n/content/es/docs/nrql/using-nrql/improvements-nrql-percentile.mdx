---
title: Improvements to NRQL percentile()
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: A closer look at how New Relic calculates percentile().
freshnessValidatedDate: never
translationType: machine
---

En telemetría, el percentil es una medida estadística importante con muchas aplicaciones. Sin embargo, también presenta un desafío para quienes trabajan con grandes conjuntos de datos. Esto se debe a que el método estándar para calcular el percentil también es técnicamente "caro" debido a la necesidad de ordenar los datos.

La nueva función `percentile()` funciona en un conjunto de datos arbitrariamente grande, con un costo mínimo. También es excelente para distribuciones de cola larga. Su relativa coherencia de errores está garantizada en todos los ámbitos para percentiles del 0% al 100%.

Como usuario, no necesita hacer nada para obtener el nuevo algoritmo. Todas tus llamadas `percentile()` se ejecutan automáticamente usándolo. Pero si desea obtener más información sobre cómo se desarrolló la nueva función `percentile()` y en qué es superior al método utilizado anteriormente, siga leyendo para profundizar en los cambios y la justificación de New Relic.

## Tipos de errores e impactos en los datos reportados [#heading_name]

Hasta hace poco, New Relic se ha basado en el método descrito en [Quantiles over Data Streams: An Experimental Study](http://dimacs.rutgers.edu/%7Egraham/pubs/papers/nquantiles.pdf). Este método utiliza un error de clasificación y, con el parámetro New Relicaplicado, da como resultado un error de clasificación del 0,3%. Pero debido a que el error de clasificación se calcula de manera diferente que el error relativo o absoluto, esto significa que puede haber una variación mucho mayor entre los valores reales y reportados de lo que sería deseable.

Para comprender mejor el impacto de los diferentes tipos de errores, resulta útil observar más de cerca los tipos de errores en el contexto del cálculo del percentil `percentile(p) = x`. La tabla muestra cómo el tipo de error afecta los límites inferior y superior del valor informado.

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Error type**
        </DNT>
      </th>

      <th>
        <DNT>
          **Lower bound of reported_x**
        </DNT>
      </th>

      <th>
        <DNT>
          **Upper bound of reported_x**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        error absoluto
      </td>

      <td>
        actual_x - absolute_error
      </td>

      <td>
        actual_x + absolute_error
      </td>
    </tr>

    <tr>
      <td>
        error relativo
      </td>

      <td>
        actual_x \* (1 - relative_error)
      </td>

      <td>
        actual_x \* (1 + relative_error)
      </td>
    </tr>

    <tr>
      <td>
        error de clasificación
      </td>

      <td>
        percentile \* (p - rank error)
      </td>

      <td>
        percentile \* (p + rank error)
      </td>
    </tr>
  </tbody>
</table>

Como puede ver en la tabla, para el error absoluto, el valor informado está dentro del +/- rango del valor real, y para el error relativo, el valor informado está dentro del +/- por ciento del valor real.

El error de clasificación funciona un poco diferente y se describe mejor con un ejemplo concreto: si solicita el percentil 99 de un conjunto de datos y el valor informado es 500 con un error de clasificación del 0,3 %, significa que el valor informado está dentro del rango de 98,7 y percentil 99,3 para el conjunto de datos.

¿Porque es esto importante? Porque, dado que el error de clasificación se calcula en relación con el percentil _p_ y no con el valor _x_, no hay garantía de que el valor informado sea particularmente cercano al valor real. En las distribuciones de telemetría de cola larga, la diferencia entre los valores reales y los informados puede ser bastante grande. Por ejemplo, cuando el valor correspondiente al percentil 98,7 es 1000, pero el valor correspondiente al percentil 99,3 es 2000, cualquier valor informado entre 1000 y 2000 cumple con la especificación de error de rango del 0,3%, lo que crea un margen de error bastante grande.

Como puede ver en el ejemplo, la precisión del método anterior depende de cuánto varía el valor dentro del percentil. Si bien este método suele ser adecuado para la mediana (50%) y hasta el 90%, a menudo se queda corto para una distribución de cola larga superior al 99%.

## Hacer que los cálculos de percentiles sean más precisos

En julio de 2020, New Relic lanzó una nueva forma de calcular `percentile()` que utiliza un algoritmo patentado en lo que se conoce como familia de histogramas de igual ancho de escala logarítmica. Al igual que otros métodos de esta familia, proporciona una relativa garantía de error.

El error relativo típico del nuevo método para la mayoría de los conjuntos de datos es de alrededor del 3%. Esto significa que, independientemente de que el percentil que solicite sea 1%, 99% o 99,99%, se garantiza que el valor informado estará dentro del 3% del valor actual. Esto es particularmente bueno para el seguimiento de cola larga. No importa qué percentil solicite, se mantiene el mismo error relativo del 3%.

### Relación de contraste y error relativo.

Las relaciones de contraste se calculan dividiendo el número más grande del conjunto de datos de entrada por el número más pequeño distinto de cero del conjunto de datos de entrada. Si la entrada tiene números negativos, la relación de contraste se calcula por separado en el conjunto de números positivos y en los valores absolutos del conjunto de números negativos. La relación de contraste final es la mayor entre la relación de contraste de los números positivos y negativos. Cuando el contraste del conjunto de datos es mayor, el error relativo también es mayor.

Para controlar qué tan "costosos" son los cálculos en términos de manejo de datos, el nuevo algoritmo limita el número de grupos de histogramas, con un error relativo de alrededor del 3% para el conjunto de datos dentro del grupo de relación de contraste de 1.000 a 1 millón. Esto debería cubrir casos de uso para la mayoría de los clientes. La siguiente tabla muestra cómo los rangos de contraste por debajo de 1000 y por encima de 1 millón afectan el error relativo y, a escala, la duración de tiempo que puede representar una relación de contraste.

<table>
  <thead>
    <tr>
      <th width={250}>
        <DNT>
          **Contrast ratio**
        </DNT>
      </th>

      <th width={150}>
        <DNT>
          **Relative error**
        </DNT>
      </th>

      <th width={250}>
        <DNT>
          **Duration range example**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        32 a 1K
      </td>

      <td>
        1,5635%
      </td>

      <td>
        1 milisegundo a 1 segundo
      </td>
    </tr>

    <tr>
      <td>
        1K a 1M
      </td>

      <td>
        3,125%
      </td>

      <td>
        1 milisegundo a 16 minutos
      </td>
    </tr>

    <tr>
      <td>
        1M a 1T (2^40, aproximadamente 10^12)
      </td>

      <td>
        6,25%
      </td>

      <td>
        1 milisegundo a 31 años
      </td>
    </tr>

    <tr>
      <td>
        1T a 2^80 (aproximadamente 10^24)
      </td>

      <td>
        12,5%
      </td>

      <td>
        1 nanosegundo a 31 millones de años
      </td>
    </tr>
  </tbody>
</table>

### Números negativos y cero.

El nuevo método cubre cualquier combinación de números positivos, cero y números negativos. El error relativo para números negativos se define en función de valores absolutos. El cero se excluye en el cálculo de contraste.

### Medición estable

El nuevo método arroja una medición estable. Cuando los cambios en el conjunto de datos medidos están dentro del margen de error, el método devuelve el mismo número. Esto proporciona una señal clara al usuario: si el número no cambia, entonces no hay ningún cambio mensurable. Si el número cambia, hay un cambio mensurable.

En comparación, el método antiguo puede devolver un número diferente incluso cuando no hay un cambio estadísticamente significativo en el conjunto de datos. La carga recae en el usuario para determinar si la diferencia en los números devueltos representa un cambio mensurable. Un cambio es significativo sólo cuando la diferencia es mayor que el margen de error.

## Ver error relativo

El error relativo de una llamada `percentile()` se devuelve en los resultados JSON de la consulta NRQL a través del campo `relativeError`. Si está utilizando una UI gráfica, deberá cambiar al formato JSON para ver los metadatos del resultado.

A continuación se muestra un ejemplo de metadatos de resultados que muestra un error relativo del 3,125 %.

```json
"contents": [
{
  "function": "percentile",
  "attribute": "wallClockTime",
  "relativeError": 0.03125,
  "thresholds": [
    50,
    99
  ]
}
```

## Verificación de resultados

Para verificar la precisión del nuevo método, puede ejecutar la función `histogram()` NRQL para obtener una imagen general de la distribución. Al observar el histograma, se puede saber si un percentil informado tiene sentido. Por ejemplo, puede estimar visualmente si la población por encima del percentil del 99 % informado está cerca del 1 % esperado. Tenga cuidado al ejecutar la consulta de percentil en un conjunto de datos con atributo _nulo_ . Estas filas _nulas_ son ignoradas por la función percentil, pero se cuentan en la población total en la función porcentual. Cualquier filtro `where` en la consulta de percentil también debe copiarse en la consulta de validación.

Para una verificación precisa de un valor percentil y su error relativo, puede utilizar el siguiente método (asumiendo números positivos).

Sea el valor reportado _r_ y el valor verdadero sea _t_. Entonces el error relativo _e_ se puede definir como:

```
e = absolute(r - t) / t
```

Usando la fórmula anterior, podemos expresar el rango de _r_ usando _t_, luego expresar el rango de _t_ usando _r_ como se muestra a continuación:

```
r > t * (1 - e) => t < r / (1 - e)

r < t * (1 + e) => t > r / (1 + e)
```

Usando _r_ y _e_ reportados a partir de una consulta de percentil, podemos calcular el límite inferior y superior de _t_, usando una consulta `percentage()` como la siguiente. Esto es posible porque la función `percentage()` no utiliza aproximación. Siempre devuelve el resultado exacto.

```sql
FROM myEventType SELECT percentage(count(*), where wallClockTime < 188 / (1 + 0.03125)) 
AS 'lower', percentage(count(*), WHERE wallClockTime < 188 / (1 - .03125)) AS 'upper' 
WHERE wallClockTime is not null
```

En este ejemplo, 188 es el percentil informado de `wallClockTime` al 90 %. El error relativo es .03125. El resultado de la consulta devuelto es:

```
lower: 89.54, upper: 90.23
```

El resultado muestra que el 90% efectivamente se encuentra dentro del rango. En otras palabras, el percentil del 90% solicitado está dentro del margen de error. Esto verifica la exactitud del valor informado.

<Callout variant="tip">
  El mismo algoritmo se utiliza para la distribución tipo métrica en [evento a servicio métrica](/docs/accounts/accounts/data-management/events-metrics-create-metrics). Entonces, ya sea que esté consultando directamente un evento o mediante una distribución métrica, sus resultados serán igualmente precisos.
</Callout>
