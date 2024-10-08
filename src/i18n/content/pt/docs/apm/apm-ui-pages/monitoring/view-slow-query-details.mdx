---
title: Ver detalhes da consulta lenta
tags:
  - APM
  - APM UI pages
  - Monitoring
metaDescription: 'APM: How to view slow query data, and how to enable and configure slow query data collection.'
freshnessValidatedDate: '2024-06-07T00:00:00.000Z'
translationType: machine
---

No APM, quando coletamos [o rastreamento da transação](/docs/apm/transactions/transaction-traces/introduction-transaction-traces), também podemos encontrar alguns dados <DNT>**Slow query**</DNT> adicionais e exibi-los na página [<DNT>**Databases**</DNT>](/docs/apm/apm-ui-pages/monitoring/databases-page-view-operations-throughput-response-time/) . Vejamos o que são dados de consulta lenta, onde encontrá-los e como configurá-los.

## Amostragem de dados de consulta lenta [#about]

Quando [o rastreamento da transação](/docs/apm/transactions/transaction-traces/introduction-transaction-traces) é relatado, o recurso de consulta lenta mostra a consulta ao banco de dados mais lenta nesses rastreamentos e relata dados sobre eles na página [<DNT>**Databases**</DNT>](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) . Os dados de consulta lenta podem incluir:

* Duração dos segmentos de consulta
* Consultar/explicar planos (se reconhecido)
* [Detalhes de nível de host e instância](/docs/apm/applications-menu/features/analyze-database-instance-level-performance-issues) (se suportados pelo agente)

## Ver dados de consulta lenta [#db_slowsql]

Você pode visualizar dados sobre consultas SQL lentas em nossa interface APM :

1. Vá para

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & Services**
   </DNT>

   .

2. Selecione um aplicativo.

3. Na seção

   <DNT>
     **Monitor**
   </DNT>

   , clique em

   <DNT>
     **Databases**
   </DNT>

   .

4. Selecione uma transação de banco de dados.

5. Clique em qualquer [consulta lenta](#slowsql_details) para obter detalhes.

   <img
     title="Screenshot showing the APM databases page with slow queries"
     alt="Screenshot showing the APM databases page with slow queries"
     src="/images/apm_screenshot-full_apm-databases-ui.webp"
   />

Se você não vir os dados esperados de consulta lenta, siga as [dicas de resolução de problemas](#troubleshooting).

## Configuração [#settings]

Em geral, você pode definir suas configurações de consulta lenta de uma destas maneiras:

* Configuração do agente (veja abaixo)
* [Configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) (se disponível para seu agente)

A configuração do agente oferece mais opções do que a configuração no lado do servidor. A forma como você escolhe configurar a consulta lenta dependerá de sua configuração e preferências. Para obter mais informações, consulte a documentação do agente específico:

<CollapserGroup>
  <Collapser
    id="go"
    title="Go"
  >
    Opções de configuração do agente:

    * Ativar/desativar: [`SlowQuery.Enabled`](/docs/agents/go-agent/configuration/go-agent-configuration#slow-query)
    * consulta lenta limite: [`SlowQuery.Threshold`](/docs/agents/go-agent/configuration/go-agent-configuration#slow-query-threshold)
    * Para outras opções de configuração de armazenamento de dados, consulte [configuração do rastreador de armazenamento de dados](/docs/agents/go-agent/configuration/go-agent-configuration#datastore-tracer).
  </Collapser>

  <Collapser
    id="java"
    title="Java"
  >
    Configuração do agente:

    * consulta lenta limite: [`explain_threshold`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-explain_threshold).

    * Para outras configurações relacionadas à transação e consulta lenta, consulte as [opções de configuração do tracer de transação](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-Transaction-tracer).

      Você também pode editar as configurações básicas de consulta lenta por meio [da configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>

  <Collapser
    id="net"
    title=".NET"
  >
    Configuração do agente:

    * Ativar/desativar: [`slowSql enabled`](/docs/agents/net-agent/configuration/net-agent-configuration#slow_sql)

    * consulta lenta limite: [explicaThreshold](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-explainThreshold)

    * Para outras configurações relacionadas à transação e consulta lenta, consulte as [opções de configuração tracer transação](/docs/agents/net-agent/configuration/net-agent-configuration#transaction_tracer) e as [opções tracer do Datastore](/docs/agents/net-agent/configuration/net-agent-configuration#datastore_tracer).

      Você também pode editar as configurações básicas de consulta lenta por meio [da configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>

  <Collapser
    id="node"
    title="Node.js"
  >
    Configuração do agente:

    * Ativar/desativar: [`enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#slow-sql-enabled)

    * limite: [`explain_threshold`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#explain_threshold)

    * Máximo de amostras de consulta lenta: [`max_samples`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#slow-sql-max-samples)

    * Para outras configurações relacionadas à transação e consulta lenta, consulte as [opções de configuração tracer transação](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config).

      [A configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) de dados de consulta lenta não é possível para o agente Node.js.
  </Collapser>

  <Collapser
    id="php"
    title="PHP"
  >
    Configuração do agente:

    * Ativar/desativar: [`slow_sql`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-slowsql)

    * limite: [`explain_threshold`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-epthreshold)

    * Para outras configurações relacionadas à transação e consulta lenta, consulte as [opções de configuração tracer transação](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-settings).

      [A configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) não é possível para o agente PHP.
  </Collapser>

  <Collapser
    id="python"
    title="Python"
  >
    Configuração do agente:

    * consulta lenta limite: [`explain_threshold`](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-explain-threshold)

    * Para outras configurações relacionadas à transação e consulta lenta, consulte as [opções de configuração do tracer de transação](/docs/agents/python-agent/configuration/python-agent-configuration#txn-tracer-settings) e as [opções do tracer do Datastore](/docs/agents/python-agent/configuration/python-agent-configuration#datastore-tracer-settings).

      Você também pode editar as configurações básicas de consulta lenta por meio [da configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>

  <Collapser
    id="ruby"
    title="Ruby"
  >
    Configuração do agente:

    * Ativar/desativar: [`slow_sql.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql-enabled)

    * consulta lenta limite: [`slow_sql.explain_threshold`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql-explain_threshold)

    * Para outras configurações relacionadas à transação e consulta lenta, consulte as [opções de configuração tracer transação](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer) e as [opções de configuração do SQL lento](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#slow_sql).

      Se aplicável ao idioma do agente do seu aplicativo, você também pode editar as configurações básicas de consulta lenta usando [configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration#customize-ssc).
  </Collapser>
</CollapserGroup>

## Consulta lenta métrica [#slowsql_details]

A lista da consulta lenta contém as seguintes métricas:

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Response time`
      </td>

      <td>
        O tempo médio de resposta (em milissegundos) para as instruções amostradas.
      </td>
    </tr>

    <tr>
      <td>
        `Sample count`
      </td>

      <td>
        O número de consultas lentas identificadas na amostra.
      </td>
    </tr>
  </tbody>
</table>

Para visualizar detalhes adicionais, selecione uma consulta lenta individual:

<table>
  <thead>
    <tr>
      <th width={150}>
        <DNT>
          **Metric**
        </DNT>
      </th>

      <th>
        <DNT>
          **Description**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Start time`
      </td>

      <td>
        Quando o stack trace começou a coletar os dados mostrados.
      </td>
    </tr>

    <tr>
      <td>
        `Max time`
      </td>

      <td>
        O tempo máximo para todas as instruções de consulta semelhantes na amostra.
      </td>
    </tr>

    <tr>
      <td>
        `Action`
      </td>

      <td>
        A ação ou processo que invoca a consulta.
      </td>
    </tr>

    <tr>
      <td>
        `Query`
      </td>

      <td>
        A consulta que está sendo relatada como lenta. Dependendo da sua configuração, algumas partes da consulta podem ficar ofuscadas.
      </td>
    </tr>

    <tr>
      <td>
        `Stack trace`
      </td>

      <td>
        Onde no código a instrução foi chamada.
      </td>
    </tr>
  </tbody>
</table>

Para MySQL, fornecemos uma análise de consulta, que explica o que aconteceu na sua consulta e o que você pode fazer para acelerá-la. Outros bancos de dados exibem um plano explicativo sempre que possível.

## Resolução de problemas: Sem consulta lenta de dados [#troubleshooting]

Se você não vir os dados da consulta lenta, é possível que não tenhamos instrumento seu banco de dados específico para SQL lento.

Também é possível que você tenha problemas de configuração:

* O recurso de consulta lenta foi desativado.
* A duração do limite está definida como muito alta e nenhuma consulta lenta está sendo relatada.
* A configuração de ofuscação de consulta (geralmente `record_sql` ou similar) pode ser definida como `Off`.

Consulte [opções de configuração](#settings) para obter mais informações.
