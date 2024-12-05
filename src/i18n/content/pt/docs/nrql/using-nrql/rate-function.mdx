---
title: Use rate() para visualizar períodos de tempo
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'For New Relic Query Language (NRQL): how to use the rate() function to visualize event occurrences over a set period of time.'
freshnessValidatedDate: '2024-03-19T00:00:00.000Z'
translationType: machine
---

A função `rate()` agrega ocorrências de um evento em intervalos com base em janelas de tempo. Você pode usar isso para visualizar a frequência das ocorrências de eventos. Por exemplo, você pode visualizar quantos erros ocorreram por hora no dia anterior. Você pode aproveitar muito essa função no NRQL se tiver grandes janelas de tempo que gostaria de monitor, mas precisar visualizar períodos menores de tempo nessas janelas maiores.

## Use a função rate()

Ao usar `rate()`, você pode usar a palavra-chave `TIMESERIES` para gerar um gráfico de linhas com taxas ao longo do tempo. A omissão de `TIMESERIES` gerará uma visualização de outdoor mostrando um valor de taxa único calculado em média ao longo do tempo. Aqui está uma consulta que visualizará erros de transação por minuto nos últimos 30 minutos em um formato de gráfico de linhas:

```sql
SELECT rate(count(*), 1 minute) AS 'Errors' FROM TransactionError TIMESERIES SINCE 30 minutes ago
```

<img
  title="Rate function with time series"
  alt="A screenshot displaying an example of the rate() function"
  src="/images/example_rate_function.webp"
/>

Executar a mesma consulta sem incluir `TIMESERIES` exibirá um único valor representando a média de ocorrências durante um período de tempo.

<SideBySide>
  <Side>
    ```sql
    SELECT rate(count(*), 1 minute) AS 'Errors' FROM TransactionError SINCE 30 minutes ago
    ```
  </Side>

  <Side>
    <img
      title="Rate function without time series"
      alt="A screenshot displaying an example of the rate() function without TIMESERIES"
      src="/images/example_rate_function_no_timeseries.webp"
    />
  </Side>
</SideBySide>

## Use lastRate() para rastrear a taxa de mudança

A função `latestRate()` usa um atributo e um intervalo de tempo especificados para retornar a taxa de alteração de um valor nos dois pontos de dados mais recentes. As unidades da função estarão em `change in attribute` / `time window`. Você pode usar esta função para ver as tendências mais recentes.

Aqui está um exemplo de consulta que retornará a alteração na duração por segundo dos dois últimos erros de transação:

<SideBySide>
  <Side>
    ```sql
    SELECT latestrate(duration, 1 second) FROM TransactionError SINCE 30 minutes ago
    ```
  </Side>

  <Side>
    <img
      title="Latestrate function"
      alt="A screenshot displaying an example of the latestRate() function"
      src="/images/example_latestrate_function.webp"
    />
  </Side>
</SideBySide>

<Callout variant="important">
  Lembre-se de que a função `latestRate()` usa os dois pontos de dados mais recentes com resultados às vezes voláteis. Considere usar apenas `rate()` se desejar uma média de intervalos maiores de ocorrências de eventos.
</Callout>

## Exemplos de rate()

<CollapserGroup>
  <Collapser
    id="error-by-hostname"
    title="Visualize a taxa de erros por host"
  >
    Para traçar linhas com base em seu host, você pode `FACET` por `host`. Este exemplo mostra como você pode usar a função `rate()` para identificar um host inválido:

    ```sql
    SELECT rate(count(*), 1 minute) FROM TransactionError TIMESERIES SINCE 30 minutes ago FACET host
    ```

    A execução da consulta retorna um gráfico com linhas separadas para cada host.
  </Collapser>

  <Collapser
    id="average-appname-errors"
    title="Média de erros nos últimos 30 minutos por appName"
  >
    Se quiser visualizar os erros por aplicativo, você pode `FACET` por `appName`. Este exemplo mostra como você pode identificar os erros médios por aplicativo na última hora:

    ```sql
    SELECT rate(count(*), 1 minute) FROM TransactionError SINCE 30 minutes ago FACET appName
    ```

    A execução da consulta retorna uma tabela de resultados por nome do aplicativo.
  </Collapser>
</CollapserGroup>
