---
title: 'Monitoramento sintético: relatório SLA'
tags:
  - Synthetics
  - Synthetic monitoring
  - Pages
metaDescription: 'Use SLA reports to view summary performance metrics across all your monitors, and to compare your current performance to historical metrics.'
freshnessValidatedDate: never
translationType: machine
---

Use relatórios de SLA para visualizar métricas resumidas de desempenho ao longo do tempo ou em vários monitores. Compare seu desempenho atual com métricas históricas com relatórios diários, semanais e mensais.

## Visualizar relatórios de SLA de monitoramento sintético [#viewing]

Para visualizar o relatório de SLA de toda a conta: Vá para <DNT>**[one.newrelic.com > Synthetic monitoring > SLA Report](https://one.newrelic.com/synthetics-nerdlets/global-sla)**</DNT>. Escolha entre relatórios agregados por dia, semana ou mês selecionando <DNT>**Daily**</DNT>, <DNT>**Weekly**</DNT> ou <DNT>**Monthly**</DNT> conforme apropriado.

Você também pode visualizar relatórios de SLA para monitores individuais: Vá para <DNT>**[one.newrelic.com > Synthetic monitoring > SLA](https://one.newrelic.com/synthetics-nerdlets/global-sla)**</DNT>.

<img
  title="screen-synthetics-sla-report.png"
  alt="screen-synthetics-sla-report.png"
  src="/images/synthetic_screenshot-full_SLA-report.webp"
/>

<figcaption>
  <DNT>**[one.newrelic.com > Synthetic monitoring > SLA](https://one.newrelic.com/synthetics-nerdlets/global-sla)**</DNT>: use relatórios de SLA para entender o desempenho do seu monitor ao longo do tempo.
</figcaption>

## Entenda a métrica do relatório SLA [#understanding]

Use relatórios de SLA para visualizar métricas de desempenho agregadas para um único monitor ou para todos os seus monitores na página <DNT>**SLA Reports**</DNT> de toda a conta. Os relatórios de SLA incluem as seguintes métricas:

* <DNT>**Duration**</DNT>: a duração média em todos os resultados do monitor.

* <DNT>**Uptime**</DNT>: a porcentagem de todos os resultados do monitor que foram encerrados com êxito. Por exemplo, monitor A pode verificar 50 vezes por dia e monitor B pode verificar 150 vezes por dia. Se monitor A tiver 29 sucessos em 50 e monitor B tiver 148 sucessos em 150, o <DNT>**Uptime**</DNT> seria 88,5:

  (29+148)/(50+150)=88,5

  Para relatórios de SLA individuais, a pontuação do tempo de operação inclui apenas o monitor selecionado.

* <DNT>**Apdex**</DNT>: O [Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) médio em todos os monitores. monitor possui um [Apdex T](/docs/apm/new-relic-apm/getting-started/glossary#apdex_t) padrão de 7 segundos que pode ser modificado ao criar ou atualizar seu monitor Sintético. [Apdex F](/docs/apm/new-relic-apm/getting-started/glossary#apdex_f), que define um resultado frustrante, é sempre quatro vezes Apdex T. Para obter mais informações sobre Apdex, consulte [Apdex: Medindo a satisfação do usuário](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction). Para visualizar as pontuações Apdex do seu monitor Sintético usando um valor Apdex T diferente, use a [função NRQL apdex](/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/#func-apdex) e o [evento SyntheticCheck](/attribute-dictionary/?event=SyntheticCheck).

  Para relatórios de SLA individuais, a pontuação Apdex inclui apenas o monitor selecionado.

* <DNT>**% Satisfied**</DNT>: a porcentagem de resultados do monitor concluídos em um [tempo "satisfatório"](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction#bullet-satisfied). Um tempo satisfatório é definido como um resultado do monitor que termina no [Apdex T](/docs/apm/new-relic-apm/getting-started/glossary#apdex_t) ou menos.

* <DNT>**% Toleration**</DNT>: a porcentagem de resultados do monitor concluídos em um [tempo "tolerável"](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction#bullet-tolerating). Um tempo tolerável é maior que [Apdex T](/docs/apm/new-relic-apm/getting-started/glossary#apdex_t), mas menor que [Apdex F](/docs/apm/new-relic-apm/getting-started/glossary#apdex_f) (quatro vezes [Apdex T](/docs/apm/new-relic-apm/getting-started/glossary#apdex_t)).

* <DNT>**% Frustrated**</DNT>: a porcentagem de resultados do monitor concluídos em um [tempo "frustrante"](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction#bullet-tolerating). Um tempo frustrante é maior que [o Apdex F](/docs/apm/new-relic-apm/getting-started/glossary#apdex_f) (quatro vezes [o Apdex T](/docs/apm/new-relic-apm/getting-started/glossary#apdex_t)).

O relatório de SLA para toda a conta inclui todos os tipos de monitor (ping, browser simples, browser com script e teste de API).

## Usar funções de página [#using]

Os relatórios de SLA suportam o seguinte recurso:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **If you want to...**
        </DNT>
      </th>

      <th>
        <DNT>
          **Do this...**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="download-report">
      <td>
        Visualize o relatório no Excel ou em um programa externo
      </td>

      <td>
        Selecione <DNT>**Download this report as .csv**</DNT> para fazer download de uma cópia dos dados do seu SLA. Abra o arquivo no Excel, Google Drive ou outro editor de planilhas para analisar seus dados.
      </td>
    </tr>

    <tr id="time-frame">
      <td>
        Alterar o prazo
      </td>

      <td>
        Escolha entre agregação diária, semanal ou mensal selecionando a guia apropriada.
      </td>
    </tr>
  </tbody>
</table>

## Gerar valores de SLA [#generating_sla_in_insights]

Os valores do relatório de SLA são gerados a partir de consulta de NRQL frente aos dados de monitoramento sintético disponíveis. Você pode recriar facilmente esses valores e modificar a consulta para atender às suas necessidades.

Esta consulta retorna a duração média, o apdex e o tempo de operação. Substitua seus valores pelas variáveis destacadas e descritas abaixo.

```sql
SELECT average(duration), apdex(duration, t:), percentage(count(*), WHERE result='SUCCESS') FROM SyntheticCheck FACET timeperiod
```

<table>
  <thead>
    <tr>
      <th width={200}>
        Variável
      </th>

      <th>
        Valor
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `t:`
      </td>

      <td>
        Forneça o [Apdex T](/docs/site/apdex-measuring-user-satisfaction#what-is) com o qual você gostaria de calcular seu apdex. O atributo de duração no evento `SyntheticCheck` é armazenado em milissegundos, portanto, um valor Apdex T de 7 segundos deve ser incluído como 7.000.
      </td>
    </tr>

    <tr>
      <td>
        `timeperiod`
      </td>

      <td>
        Este é o período que você gostaria de calcular. Para uma faceta <DNT>**daily report**</DNT> em `dateOf(timestamp)`, para uma faceta <DNT>**weekly report**</DNT> em `weekOf(timestamp)` e para uma faceta <DNT>**monthly report**</DNT> em `monthOf(timestamp)`.
      </td>
    </tr>
  </tbody>
</table>

[A consulta NRQL](/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language) é padrão para consultar a última hora de dados. Para ampliar o escopo dos seus dados, você precisará incluir uma [cláusula`SINCE` ](/docs/insights/new-relic-insights/using-new-relic-query-language/nrql-reference#sel-since)no final da sua consulta.

<DNT>
  **Example #1: Daily report for the last week**
</DNT>

Para gerar um relatório diário da última semana você adicionaria `SINCE 1 week ago`:

```sql
SELECT average(duration), apdex(duration, t:7), percentage(count(*), WHERE result='SUCCESS') 
FROM SyntheticCheck FACET dateOf(timestamp) SINCE 1 week ago
```

<DNT>
  **Example #2: Report for a particular monitor**
</DNT>

Para definir o escopo dos resultados para um monitor específico, você pode editar a consulta abaixo para incluir um nome de monitor específico:

```sql
SELECT average(duration), apdex(duration, t:7), percentage(count(*), WHERE result='SUCCESS') 
FROM SyntheticCheck FACET dateOf(timestamp) WHERE monitorName = 'mymonitor1'
```

<DNT>
  **Example #3: Report for multiple monitors**
</DNT>

Para definir o escopo dos resultados para uma coleção de monitores:

```sql
SELECT average(duration), apdex(duration, t:7), percentage(count(*), WHERE result='SUCCESS') 
FROM SyntheticCheck FACET dateOf(timestamp) WHERE monitorName IN ('mymonitor1', 'mymonitor2', 'mymonitor3')
```
