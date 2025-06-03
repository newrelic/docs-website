---
title: Matemáticas NRQL usando SELECT
tags:
  - Query your data
  - 'NRQL: New Relic query language'
  - Get started
metaDescription: 'How to perform basic and advanced mathematical calculations in NRQL, the New Relic query language'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

NRQL admite el uso de operadores matemáticos básicos y avanzados dentro de una cláusula `SELECT` . Puede aplicar cálculos matemáticos tanto en atributos individuales como también en los resultados de funciones agregadas.

## Utilice operadores matemáticos básicos con `SELECT` [#basicmath]

Para utilizar funciones matemáticas básicas en NRQL, incluya operadores dentro de la cláusula `SELECT` :

* Suma: `+`
* Sustracción: `-`
* Multiplicación: `*`
* División: `/`

Aquí hay unos ejemplos:

```sql
SELECT duration-databaseDuration FROM Transaction
```

```sql
SELECT count(*)/uniqueCount(session) FROM PageView
```

```sql
SELECT average(duration-databaseDuration) FROM Transaction
```

## Utilice operadores matemáticos avanzados con `SELECT` [#advancedmath]

NRQL también incluye algunas funciones matemáticas avanzadas que pueden usarse para cálculos complejos. Esto es útil si desea procesar datos para mostrarlos de manera más efectiva en la UI o realizar cálculos sobre los resultados de la consulta en un solo paso.

### `abs` [#abs]

`abs(n)` devuelve el valor absoluto de _n_. Para _n_ no negativo devuelve _n_ y para _n_ negativo devuelve el número positivo -_n_. Por ejemplo `abs(2) = 2` y `abs(-4) = 4`.

### `clamp_max`, `clamp_min` [#clamp]

Las funciones de sujeción imponen un límite superior o inferior a los valores. Por ejemplo, `clamp_max(duration, 10)` devuelve la duración, a menos que supere 10, en cuyo caso se devuelve 10. De manera similar `clamp_min(duration, 1)` no devolverá ningún valor inferior a 1.

La siguiente consulta y gráfico de ejemplo muestran el resultado de fijar tanto el mínimo como el máximo para mantener el valor en el rango 96-98.

```sql
FROM SystemSample 
SELECT average(cpuPercent) AS 'raw',
clamp_min(clamp_max(average(cpuPercent), 98), 96) AS 'clamped'
TIMESERIES
```

<img
  title="Min-max-clamp-chart.png"
  alt="Image of a chart using clamping with both min and max"
  src="/images/queries-nrql_screenshot-crop_NRQL-math-clamp.webp"
/>

<figcaption>
  Gráfico de muestra que muestra datos sin procesar con la función de sujeción aplicada.
</figcaption>

### `exp` [#exp]

Calcular la función exponencial natural del argumento: `exp(n) = pow(e, n)`.

### Funciones logarítmicas: `ln`, `log`, `log2`, `log10` [#log]

Estas funciones calculan el logaritmo del argumento para varias bases.

* `ln(n)` calcular el logaritmo natural: el logaritmo en base e.
* `log2(n)` calcular el logaritmo en base 2.
* `log10(n)` calcular el logaritmo en base 10.
* `log(n, b)` permite calcular logaritmos con una base arbitraria b.
* Todos los logaritmos satisfacen la identidad: `log(pow(b, n), b) = n`.

Tenga en cuenta que `log(0)` no está definido para todas las bases. Tenga en cuenta que si toma el logaritmo de algo que podría ser cero, puede terminar obteniendo `no value` de su consulta.

### `pow` [#pow]

`pow(n, m)` calcular _n_ elevado a la potencia _m_. Por ejemplo, `n * n * ... * n`, con _m_ copias de _n_.

### Funciones de redondeo: `round`, `floor`, `ceil` [#rounding]

Estas tres funciones fuerzan los números decimales a uno de los números enteros vecinos.

* `floor(n)` devuelve el número entero más cercano menor o igual a _n_.
* `ceil(n)` (abreviatura de "techo") devuelve el número entero más cercano mayor o igual a _n_.
* `round(n)` devuelve el número entero más cercano a _n_ en cualquier dirección.

<img
  title="Rounding-functions-chart.png"
  alt="Image of a chart using rounding functions"
  src="/images/queries-nrql_screenshot-crop_NRQL-math-floor-ceiling.webp"
/>

<figcaption>
  Gráfico de muestra que muestra datos sin procesar, con funciones de piso, redondo y techo aplicadas.
</figcaption>

### `sqrt` [#sqrt]

`sqrt(n)` devuelve la raíz cuadrada de _n_, es decir, el número tal que `sqrt(n) * sqrt(n) = n`.

## Resultados con STRING o flotante [#strings]

Así es como NRQL maneja las cadenas presentes en los cálculos matemáticos:

Ejemplos:

* `sum(1+STRING)` = 0
* `sum(1+MIXED)` = omite registros donde `MIXED` es una cadena
* `average(1+STRING)` = 0
* `average(1+MIXED)` = omite registros donde `MIXED` es una cadena

NULL y cero aparecen como 0 en el dashboard. Para anular valores NULL con otro valor numérico, use la sintaxis:

```sql
SELECT average(purchasePrice OR 0)
```

Esto reemplazará los valores NULL con 0 o cualquier número especificado.

<Callout variant="tip">
  También puedes usar esto si algo devuelve NULL o cero. `(zero) OR 1` devuelve 0 y `(NULL) OR 1` devuelve 1.
</Callout>
