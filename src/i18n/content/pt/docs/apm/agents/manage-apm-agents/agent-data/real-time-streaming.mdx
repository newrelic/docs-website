---
title: Detalhes sobre streaming em tempo real do APM
tags:
  - Agents
  - Manage APM agents
  - Agent data
metaDescription: 'For APM, query and visualize data for transactions, errors, and custom events in  near real time.'
freshnessValidatedDate: never
translationType: machine
---

Com streaming em tempo real, os dados do seu evento APM são enviados para a New Relic a cada cinco segundos. Você pode consultar e visualizar seus dados para transações, erros e eventos personalizados quase em tempo real. A carga menor resulta em atualizações de gráficos mais rápidas e consulta mais rápida dos dados que são mais importantes para você.

Para obter detalhes sobre os agentes que suportam esse recurso, consulte [versões do agente](#enable).

Quer transmitir seus dados do New Relic para a nuvem? Consulte [Exportação de dados de streaming](/docs/apis/nerdgraph/examples/nerdgraph-streaming-export).

## Por que isso importa [#benefits]

O streaming em tempo real não resulta no envio de mais eventos. A combinação de postagens mais frequentes, com um número menor de eventos por postagem, resulta em aproximadamente o mesmo número de eventos por minuto que ocorreria sem o streaming em tempo real.

A imagem a seguir mostra uma comparação entre os dados enviados para o New Relic com e sem streaming em tempo real. Observe que 10.000 é um número de exemplo de evento; alguns agentes têm limites padrão mais baixos.

<img
  title="Real time streaming diagram"
  alt="Real time streaming diagram"
  src="/images/apm_diagram_real-time-streaming.webp"
/>

Os limites gerais de quantos eventos podem ser enviados por minuto não foram alterados. Além disso, os dados não relacionados a eventos (spans, trace e métrica) não são afetados; eles ainda são enviados a cada minuto.

Use streaming em tempo real para entender rapidamente o impacto quando algo muda, como implantar uma nova versão do aplicativo.

* Examine os principais indicadores de desempenho (taxas de transferência, taxas de erros, gráficos, etc.) quase em tempo real.
* Responda rapidamente a condições de falha e anomalias.
* Aproveite ao máximo nosso [painel](#create).
* Reduza o tempo médio de detecção com relatórios de eventos APM a cada cinco segundos.

## Consultar dados de streaming em tempo real [#nrql]

Ao criar gráficos, inclua o seguinte em sua consulta NRQL:

<table>
  <thead>
    <tr>
      <th style={{ width: "250px" }}>
        Cláusula NRQL
      </th>

      <th>
        Comentários
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `SINCE 5 minutes ago`
      </td>

      <td>
        Certifique-se de adicionar uma [cláusula`SINCE 5 minutes ago` ](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-components-functions#sel-since)à sua consulta NRQL para aproveitar o intervalo de atualização do gráfico de 5 segundos. Isso ocorre porque o [intervalo de atualização do gráfico](/docs/insights/use-insights-ui/manage-dashboards/insights-chart-refresh-intervals) é baseado na janela de tempo.
      </td>
    </tr>

    <tr>
      <td>
        `TIMESERIES` bucket
      </td>

      <td>
        Para definir o intervalo de atualização para gráficos de série temporal, você também pode especificar o tamanho do intervalo como um argumento opcional para a [cláusula`TIMESERIES` ](/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-components-functions#sel-timeseries). Por exemplo, `SINCE 30 minutes ago TIMESERIES 5 seconds` exibirá uma janela de 30 minutos com resolução de 5 segundos. Você pode ter no máximo 366 buckets.
      </td>
    </tr>
  </tbody>
</table>

## Crie gráficos de streaming em tempo real [#create]

Você pode visualizar os resultados de sua consulta NRQL por meio de gráficos em tempo real:

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > Query builder**
   </DNT>

   .

2. Use o [métrica & evento explorer](/docs/query-your-data/explore-query-data/browse-data/introduction-data-explorer) para começar a construir um gráfico.

3. Para consultas aplicáveis, passe o mouse sobre a consulta e clique em

   <DNT>
     **Edit in query builder**
   </DNT>

   para refinar sua consulta.

4. Na sua consulta NRQL, ajuste as [cláusulas`SINCE` e `TIMESERIES` ](#nrql)para aproveitar os intervalos de atualização de 5 segundos.

## Versões de agente com este recurso [#enable]

O streaming em tempo real é suportado por todos os agentes APM. Aqui estão as versões mínimas do agente:

* <DNT>
    **Go:**
  </DNT>

  [v2.8.0 ou superior](/docs/release-notes/agent-release-notes/go-release-notes)

* <DNT>
    **Java:**
  </DNT>

  [v5.5.0 ou superior](/docs/release-notes/agent-release-notes/java-release-notes)

* <DNT>
    **.NET:**
  </DNT>

  [v8.23.107.0 ou superior](/docs/release-notes/agent-release-notes/net-release-notes)

* <DNT>
    **Node.js:**
  </DNT>

  [v5.13.0 ou superior](/docs/release-notes/agent-release-notes/nodejs-release-notes)

* <DNT>
    **PHP:**
  </DNT>

  [v9.5.0.252 ou superior](/docs/release-notes/agent-release-notes/php-release-notes)

* <DNT>
    **Python:**
  </DNT>

  [v5.2.0.127 ou superior](/docs/release-notes/agent-release-notes/python-release-notes)

* <DNT>
    **Ruby:**
  </DNT>

  [v6.7.0.359 ou superior](/docs/release-notes/agent-release-notes/ruby-release-notes)

<Callout variant="caution">
  Se o relatório de eventos de transação estiver [desativado](/docs/insights/use-insights-ui/manage-account-data/data-summary-page-manage-apps-reporting-insights#enable-disable), isso poderá afetar alguns elementos da interface do usuário em todo o New Relic. Você pode ver alguns gráficos vazios em algumas páginas da interface que dependem desses dados.
</Callout>
