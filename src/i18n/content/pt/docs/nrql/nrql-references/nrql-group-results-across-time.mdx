---
title: 'NRQL: resultados de faceta por tempo'
tags:
  - Query your data
  - 'NRQL: New Relic Query Language'
  - NRQL query tutorials
metaDescription: 'New Relic NRQL: use the FACET clause to return results segmented by time buckets.'
freshnessValidatedDate: never
translationType: machine
---

Com [o NRQL](/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql), você pode criar consultas que agrupam resultados ao longo do tempo. Por exemplo, você pode agrupar os resultados com base no carimbo de data/hora, separando-os em grupos que cobrem um intervalo especificado de datas e horas.

Ao utilizar as funções de tempo da tabela abaixo na consulta NRQL, os resultados retornam em UTC. Para ajustar os resultados ao seu fuso horário, inclua a [cláusula`WITH TIMEZONE` ](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-timezone)na sua consulta.

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
        Retorna o ano de um timestamp.
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
        Retorna o trimestre do ano. O valor retornado inclui o trimestre e o ano quando formatado como uma string.
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
        Retorna o mês e o ano do timestamp de data/hora quando formatado como uma string ou o mês numérico quando formatado como um número.
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
        Retorna a semana em que ocorreu o timestamp , nomeando o mês e o dia da segunda-feira daquela semana.
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
        Retorna o dia da semana do timestamp. O valor retornado retorna no final da semana, permitindo que você observe as tendências por dia da semana ao longo do tempo.
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
        Retorna a data do timestamp. O valor retornado inclui mês, dia e ano.
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
        Retorna a data numérica dentro de um único mês do timestamp, um valor de 1 a 31. O valor retornado não inclui o mês.
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
        Retorna o número de dias do mês do timestamp.
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
        Retorna a hora do timestamp.

        O valor retornado não inclui um 0 prefixado para horas entre 1h e 9h. Isso difere de funções e cláusulas como `SINCE`, que aceitam essas horas com 0 no início.
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
        Retorna o minuto do timestamp.

        O valor retornado não inclui um 0 prefixado para minutos entre 1 e 9. Isso difere de funções e cláusulas como `SINCE`, que aceitam esses minutos com 0 no início.
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

## Defina o intervalo de tempo da sua consulta NRQL [#cohorts]

<Callout variant="tip">
  Nestes exemplos, usamos um atributo de timestamp personalizado enviado com o evento PageView chamado `createdAt`. Para definir o momento da ingestão do evento PageView, você pode usar o atributo `timestamp` .
</Callout>

Para criar sua consulta NRQL, use uma [cláusula`FACET` ](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-facett)com uma função de bucket que funciona com um atributo timestamp . Execute uma consulta `FACET` padrão, mas em vez de facetar por um atributo, facetar por tempo. Por exemplo:

```sql
SELECT count(*) FROM K8sDaemonsetSample FACET monthOf(createdAt)
```

<img
  title="NRQL facet by time"
  alt="A screenshot displaying a NRQL query faceted by time"
  src="/images/queries_screenshot-crop_facet-by-time-query.webp"
/>

Para executar várias funções na mesma consulta, use o recurso multifacetado do NRQL:

```sql
SELECT count(*) FROM K8sDaemonsetSample FACET dateOf(createdAt), monthOf(createdAt)
```

<img
  title="NRQL facet by time with two functions"
  alt="NRQL facet by time with two functions"
  src="/images/queries_screenshot-crop_facet-by-time-two-functions.webp"
/>

Muitas funções baseadas em tempo aceitam um segundo argumento opcional de `string` (o padrão) ou `numeric`, que controla o formato do valor do resultado.

```sql
SELECT count(*) FROM K8sDaemonsetSample FACET monthOf(createdAt, numeric)
```

## Exemplos de facetas [#facet-examples]

<CollapserGroup>
  <Collapser
    id="facet-time-example"
    title="Resultados do grupo por mês"
  >
    Para agrupar todos os resultados com base no mês, use a função `monthOf` . Neste exemplo, a consulta NRQL inclui uma função (`count(*)`), um tipo de dados, um período de tempo (`SINCE 1 day ago`) e uma faceta de tempo (`monthOf(createdAt)`).

    ```sql
    SELECT count(*) FROM K8sDaemonsetSample SINCE 1 day ago FACET monthOf(createdAt)
    ```

    A execução da consulta retorna uma tabela de resultados por mês.
  </Collapser>

  <Collapser
    id="facet-other-examples"
    title="Outros exemplos de agrupamento com cláusula FACET"
  >
    Você pode executar a consulta NRQL para agrupar seus dados de outras maneiras, não apenas de tempo. Para obter exemplos adicionais, consulte a [documentação do NRQL `FACET` ](/docs/insights/nrql-new-relic-query-language/nrql-resources/nrql-syntax-components-functions#sel-facet).
  </Collapser>

  <Collapser
    id="timeseries-chart-examples"
    title="Exemplo de criação de um gráfico especificando TIMESERIES"
  >
    Você precisa estar ciente de que `UNTIL` adiciona a função `TIMESERIES` e usa a função de tempo em um gráfico de série temporal.

    O valor padrão de `UNTIL` é `NOW`, portanto, se você não especificar nada, os valores das funções de tempo poderão ser separados ou combinados.

    Ao especificar `UNTIL today`, você pode criar um gráfico que termina às 12h do mesmo dia.

    ```sql
    SELECT count(*) FROM PageView TIMESERIES 1 day WITH TIMEZONE 'Europe/London' SINCE 4 week ago UNTIL today
    ```

    Se quiser visualizar os dados de `last month` em vez dos das últimas quatro semanas, você pode usar `SINCE last month UNTIL this month`.

    ```sql
    SELECT count(*) FROM PageView TIMESERIES 1 day  WITH TIMEZONE 'Europe/London' SINCE last month UNTIL this month
    ```
  </Collapser>
</CollapserGroup>
