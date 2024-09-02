---
title: Use agregação aninhada para fazer cálculos adicionais
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to use nested aggregation to understand how many users complete a set of steps in a procedure.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

Com a agregação aninhada, você pode concluir uma [consulta NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql) e, em seguida, fazer cálculos adicionais usando os resultados dessa consulta. A agregação aninhada fornece recursos NRQL semelhantes à classe de subconsultas ou subseleções SQL em que a subconsulta está na cláusula `FROM` da consulta externa.

<Callout variant="tip">
  Esse recurso é diferente do nosso [recurso de subconsulta](/docs/query-your-data/nrql-new-relic-query-language/get-started/subqueries-in-nrql), que permite subconsultas em cláusulas `SELECT` e `WHERE` .
</Callout>

A agregação aninhada pode ajudá-lo a responder perguntas como estas sem criar várias consultas:

* Como posso contar as solicitações por minuto do meu aplicativo e obter o máximo de solicitações por minuto na última hora?
* Como posso calcular o uso médio da CPU de todos os meus servidores ou hosts e listar apenas aqueles com uso superior a 90%?
* De todas as minhas sessões de usuário, como posso descobrir qual porcentagem foi recuperada imediatamente?

## Estrutura de consulta de agregação aninhada [#requirements]

Toda consulta NRQL [deve começar com uma instrução `SELECT` ou uma cláusula `FROM` ](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-clauses-functions). Uma consulta de agregação aninhada usa uma instrução `SELECT` e uma cláusula `FROM` e as aplica a uma consulta inteira ou a consultas contidas entre parênteses.

Uma consulta de agregação aninhada completa e formatada corretamente se parece com isto:

```sql
SELECT function(attribute)
FROM (
  SELECT function(attribute)
  FROM dataType
  WHERE attribute
  TIMESERIES integer units
)
```

Alguns outros detalhes sobre o comportamento da consulta e da cláusula:

* A consulta aninhada pode ter mais de dois níveis.
* Você pode aplicar `TIMESERIES` e `FACET` a qualquer parte da consulta aninhada. Eles não precisam ser idênticos em todos os níveis.
* `SINCE`As cláusulas , `UNTIL` e `COMPARE WITH` se aplicam a toda a consulta e você só pode usá-las no nível mais externo.

## Exemplos de consulta de agregação aninhada [#examples]

Aqui estão alguns exemplos de consultas aninhadas:

<CollapserGroup>
  <Collapser
    id="total-tx"
    title="Transação total e maior taxa de resposta em um minuto"
  >
    Neste exemplo, a consulta interna primeiro conta a transação de `myApp` para cada um dos últimos 60 minutos e, em seguida, a consulta externa retorna a maior taxa de solicitação de 1 minuto.

    Além disso, ao dar um nome ao resultado da primeira consulta (`as rpm`), você pode criar um rótulo para o valor retornado. Sem adicionar o rótulo, esta consulta retornará o valor como contagem para uso na consulta externa.

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
    title="Uso médio de CPU e uso de CPU acima de 90%"
  >
    Neste exemplo, a consulta interna calcula o uso médio da CPU para todos os hosts e, em seguida, a consulta externa filtra os resultados para apenas os hosts com uso de CPU acima de um limite de risco (90%).

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
    title="Visualizações de página em cada sessão de usuário e número de sessões com apenas uma visualização de página"
  >
    Neste exemplo, a consulta interna calcula o número de eventos `PageView` em cada sessão do usuário e, em seguida, a consulta externa calcula qual porcentagem dessas sessões tinha apenas uma única visualização associada.

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
    title="Número de entidades dentre as N principais transações que são mais lentas que X"
  >
    Neste exemplo, a consulta interna encontra os principais guias de entidade com a duração média da transação mais lenta. Então, a consulta externa descobre quantas dessas consultas são mais lentas que o limite. Aqui, a consulta seleciona as 50 principais consultas e mede em relação a um limite de duração de 1 segundo.

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
    title="Percentual de hosts com maior média de gravações em disco por hora"
  >
    Neste exemplo, existem duas agregações aninhadas. A consulta mais interna encontra a média `diskWritesPerSecond` por hora para cada host. A próxima consulta encontra a média máxima para cada host, e a consulta mais externa calcula o 50º, 75º e 99º percentil desses máximos.

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
