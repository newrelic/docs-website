---
title: Use subconsultas para vincular várias consultas
metaDescription: 'How to use subqueries in NRQL, the New Relic query language.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

Com NRQL, você pode executar um <DNT>**subquery**</DNT>, que é uma consulta aninhada dentro de outra consulta. Uma subconsulta é uma consulta aninhada dentro de outra consulta: elas permitem que você use o resultado de uma consulta em outra consulta. Com subconsultas, você pode:

* Realizar cálculos nas entidades filhas de uma entidade controladora
* Consulte o log de erros para hosts com alta carga de CPU com base na utilização de CPU do agente de infraestrutura

No NRQL, as subconsultas podem aparecer na instrução [`SELECT`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#state-select) e na cláusula [`WHERE`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-where) .

Aqui está um exemplo de consulta para obter uma contagem de transações com duração acima da média:

```sql
SELECT count(*) FROM Transaction WHERE duration > (SELECT average(duration) FROM Transaction)
```

Os resultados de uma subconsulta devem fazer sentido no contexto. No exemplo acima, a condição maior que na cláusula `WHERE` requer uma subconsulta que retorne um único valor. Uma subconsulta que retorna um conjunto de valores (por exemplo, uma subconsulta [`uniques()`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-uniques) ) falharia.

Você também pode aninhar uma subconsulta dentro de outra subconsulta. NRQL permite no máximo três subconsultas, aninhadas ou não aninhadas, em uma única consulta.

O intervalo de tempo da subconsulta será igual ao da consulta externa, a menos que seja explicitamente especificado com [`SINCE`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-since)/[`UNTIL`](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-until). Em um painel, escolher uma janela no [seletor de hora](/docs/query-your-data/explore-query-data/dashboards/manage-your-dashboard/#dash-time-picker) alinha o intervalo de tempo da subconsulta com o da consulta externa. Se você definiu <DNT>**Ignore Time Picker**</DNT> para esse gráfico, o intervalo de tempo da subconsulta e o intervalo de tempo da consulta externa não serão iguais.

## Execução de subconsulta [#subquery-execution]

Durante a execução da consulta, cada subconsulta é executada de forma independente e seu resultado é usado como um valor constante, ou conjunto de valores, na consulta externa. Devido a este modelo de execução, as subconsultas não podem referenciar atributos e valores da consulta externa.

O [limite de duração da consulta](/docs/query-your-data/nrql-new-relic-query-language/get-started/rate-limits-nrql-queries/#query-duration) é respeitado para consultas com subconsultas. Isso significa que todas as subconsultas e a consulta externa devem concluir a execução dentro do limite de duração.

O número máximo de resultados que uma subconsulta pode retornar é igual ao [valor`LIMIT MAX` ](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#sel-limit): 5.000. Quando esse limite é excedido, isso pode resultar em resultados incompletos e nesta mensagem de erro: "A subconsulta pode ter atingido o limite máximo de membros de resultado, o que pode causar um resultado incompleto."

## Subconsultas e agregação aninhada [#subquery-vs-nested-aggregation]

Embora pareçam semelhantes, as subconsultas são diferentes das [agregações aninhadas](/docs/query-your-data/nrql-new-relic-query-language/nrql-query-tutorials/nested-aggregation-make-ordered-computations-single-query), que permitem a agregação do resultado de uma consulta aninhada. Agregações aninhadas são usadas na cláusula `FROM` , enquanto subconsultas são usadas na instrução `SELECT` e na cláusula `WHERE` .

## Limites [#subquery-limitations]

* Subconsultas não são suportadas em regras NRQL condição do alerta ou evento para métricas (E2M). Como a consulta com subconsultas exige múltiplas passagens pelos dados, as subconsultas são incompatíveis com alertas de streaming ou outros produtos baseados em processamento de dados de streaming.
* As cláusulas `TIMESERIES` e `COMPARE WITH` , que fazem com que a consulta retorne vários conjuntos de resultados, não são suportadas em subconsultas.
* As subconsultas não podem aparecer na cláusula `FACET` , embora possam aparecer nas cláusulas `WHERE` usadas em `FACET CASES`.
* Tem [limites no número de resultados](#subquery-execution)

## Exemplos de subconsulta [#subquery-examples]

Aqui estão alguns exemplos de subconsultas:

<CollapserGroup>
  <Collapser
    id="numeric-conditions"
    title="Condições numéricas"
  >
    Você pode usar qualquer consulta que retorne um único valor numérico, como aquelas que usam o agregador `average()`, `count()`, `uniqueCount()` ou `latest()` em condições numéricas.

    A consulta abaixo encontra a contagem de transações cuja duração foi maior que a média:

    ```sql
    FROM Transaction SELECT count(*)
    WHERE duration > (FROM Transaction SELECT average(duration))
    ```
  </Collapser>

  <Collapser
    id="in-conditions"
    title="DENTRO condições"
  >
    Qualquer consulta que retorne um conjunto de valores, incluindo aqueles que usam `uniques()`, pode ser usada em uma condição `IN` .

    A consulta abaixo calcula a duração média das transações que são filhos de uma determinada entidade:

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
    title="Condição de string com uma subconsulta facetada"
  >
    Ao usar um operador de comparação (`=`, `!=`, `<`, etc.) com uma subconsulta facetada, `LIMIT 1` deve ser especificado para limitar o resultado a um único valor.

    A consulta abaixo encontra erros de transação associados à transação mais recente da conta com a duração média de transação mais alta:

    ```sql
    FROM TransactionError SELECT * WHERE guid = (FROM Transaction SELECT latest(guid) FACET accountId ORDER BY average(duration) LIMIT 1)
    ```
  </Collapser>

  <Collapser
    id="delta-query"
    title="Consulta Delta"
  >
    Você pode usar resultados de subconsulta em cálculos na instrução `SELECT` . Uma subconsulta pode especificar um intervalo de tempo diferente da consulta externa.

    A consulta abaixo mostra a diferença entre a duração média atual da transação e a duração média da última semana:

    ```sql
    FROM Transaction SELECT average(duration) -
      (FROM Transaction SELECT average(duration)
      SINCE 7 days ago) TIMESERIES
    ```
  </Collapser>

  <Collapser
    id="multiple-subqueries"
    title="Várias subconsultas"
  >
    Até três subconsultas podem aparecer em uma única consulta.

    A consulta abaixo encontra as únicas contas responsáveis pela transação cuja duração foi superior ao percentil 99:

    ```sql
    FROM Transaction SELECT uniques(accountId) WHERE guid IN
      (FROM Transaction SELECT uniques(guid) WHERE duration >
      (FROM Transaction SELECT percentile(duration, 99)))
    ```
  </Collapser>

  <Collapser
    id="function-argument"
    title="Subconsulta como argumento de função"
  >
    Muitas funções NRQL podem receber uma subconsulta como argumento.

    A consulta abaixo cria uma string mostrando a duração da transação individual em comparação com a média:

    ```sql
    SELECT concat('This transaction duration: ', duration, '; average transaction duration: ',
      (SELECT average(duration) FROM Transaction), precision: 4) FROM Transaction
    ```
  </Collapser>
</CollapserGroup>
