---
title: Matemática NRQL usando SELECT
tags:
  - Query your data
  - 'NRQL: New Relic query language'
  - Get started
metaDescription: 'How to perform basic and advanced mathematical calculations in NRQL, the New Relic query language'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

O NRQL oferece suporte ao uso de operadores matemáticos básicos e avançados em uma cláusula `SELECT` . Você pode aplicar cálculos matemáticos tanto em atributos individuais quanto nos resultados de funções agregadoras.

## Use operadores matemáticos básicos com `SELECT` [#basicmath]

Para usar funções matemáticas básicas em NRQL, inclua operadores na cláusula `SELECT` :

* Adição: `+`
* Subtração: `-`
* Multiplicação: `*`
* Divisão: `/`

Aqui estão alguns exemplos:

```sql
SELECT duration-databaseDuration FROM Transaction
```

```sql
SELECT count(*)/uniqueCount(session) FROM PageView
```

```sql
SELECT average(duration-databaseDuration) FROM Transaction
```

## Use operadores matemáticos avançados com `SELECT` [#advancedmath]

O NRQL também inclui algumas funções matemáticas avançadas que podem ser usadas para cálculos complexos. Isto é útil se você deseja processar dados para exibi-los de forma mais eficaz na interface ou fazer cálculos sobre os resultados da consulta em uma única etapa.

### `abs` [#abs]

`abs(n)` retorna o valor absoluto de _n_. Para _n_ não negativo retorna _n_, e para _n_ negativo retorna o número positivo -_n_. Por exemplo `abs(2) = 2` e `abs(-4) = 4`.

### `clamp_max`, `clamp_min` [#clamp]

As funções de fixação impõem um limite superior ou inferior aos valores. Por exemplo, `clamp_max(duration, 10)` retorna a duração, a menos que exceda 10, caso em que 10 é retornado. Da mesma forma `clamp_min(duration, 1)` não retornará nenhum valor inferior a 1.

O exemplo de consulta e gráfico a seguir mostra o resultado da fixação de mínimo e máximo para manter o valor no intervalo 96-98.

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
  Exemplo de gráfico mostrando dados brutos com função de fixação aplicada.
</figcaption>

### `exp` [#exp]

Calcule a função exponencial natural do argumento: `exp(n) = pow(e, n)`.

### Funções logarítmicas: `ln`, `log`, `log2`, `log10` [#log]

Estas funções calculam o logaritmo do argumento para várias bases.

* `ln(n)` calcule o logaritmo natural: o logaritmo base e.
* `log2(n)` calcule o logaritmo na base 2.
* `log10(n)` calcule o logaritmo na base 10.
* `log(n, b)` permite que logaritmos sejam calculados com uma base arbitrária b.
* Todos os logaritmos satisfazem a identidade: `log(pow(b, n), b) = n`.

Observe que `log(0)` é indefinido para todas as bases. Esteja ciente de que se você calcular o logaritmo de algo que pode ser zero, poderá acabar recebendo `no value` de volta da sua consulta.

### `pow` [#pow]

`pow(n, m)` computador _n_ elevado à potência _m_. Por exemplo, `n * n * ... * n`, com _m_ cópias de _n_.

### Funções de arredondamento: `round`, `floor`, `ceil` [#rounding]

Essas três funções forçam os números decimais para um dos inteiros vizinhos.

* `floor(n)` retorna o número inteiro mais próximo menor ou igual a _n_.
* `ceil(n)` (abreviação de "teto") retorna o número inteiro mais próximo maior ou igual a _n_.
* `round(n)` retorna o número inteiro mais próximo de _n_ em qualquer direção.

<img
  title="Rounding-functions-chart.png"
  alt="Image of a chart using rounding functions"
  src="/images/queries-nrql_screenshot-crop_NRQL-math-floor-ceiling.webp"
/>

<figcaption>
  Exemplo de gráfico mostrando dados brutos, com funções de piso, arredondamento e teto aplicadas.
</figcaption>

### `sqrt` [#sqrt]

`sqrt(n)` retorna a raiz quadrada de _n_, ou seja, o número tal que `sqrt(n) * sqrt(n) = n`.

## Resultados com STRING ou float [#strings]

Aqui está como o NRQL lida com strings presentes em cálculos matemáticos:

Exemplos:

* `sum(1+STRING)` = 0
* `sum(1+MIXED)` = pula registros onde `MIXED` é uma string
* `average(1+STRING)` = 0
* `average(1+MIXED)` = pula registros onde `MIXED` é uma string

NULL e zero aparecem como 0 no dashboard. Para substituir valores NULL por outro valor numérico, use a sintaxe:

```sql
SELECT average(purchasePrice OR 0)
```

Isso substituirá os valores NULL por 0 ou qualquer número especificado.

<Callout variant="tip">
  Você também pode usar isso se algo retornar NULL ou zero. `(zero) OR 1` retorna 0 e `(NULL) OR 1` retorna 1.
</Callout>
