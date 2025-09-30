---
title: Analise problemas de desempenho em nível de banco de dados e instância
tags:
  - APM
  - APM UI pages
  - Features
metaDescription: 'How to use APM to identify if performance problems and errors are due to database performance, one or more hosts/instances or services, or both.'
freshnessValidatedDate: never
translationType: machine
---

Quando você faz parte de uma equipe de desenvolvimento, operações ou DevOps , os problemas de banco de dados precisam ser investigados rapidamente. Para resolver problemas e erros de desempenho com um aplicativo lento ou com falha, você precisa analisar se a causa subjacente está relacionada ao desempenho do banco de dados, a um ou mais hosts ou serviços, ou ambos.

Usando [o trace da transação](/docs/apm/transactions/transaction-traces/transaction-traces), [o slow query trace](/docs/apm/applications-menu/monitoring/viewing-slow-query-details) e [os mapas de serviço](/docs/data-analysis/service-maps/get-started/service-maps-visualize-monitor-apps-entire-architecture) do APM, você pode examinar a consulta específica, a instância do banco de dados (host e porta) e o nome do banco de dados para o problema. A métrica em nível de instância do APM pode ajudá-lo a detalhar a instância ou instâncias específicas envolvidas. Isso ajuda você a avaliar rapidamente o impacto e resolver o problema.

<img
  title="APM Databases slow query details: Database and instances information"
  alt="APM Databases slow query details: Database and instances information"
  src="/images/apm_screenshot-full_database-overview.webp"
/>

## Compatibilidade e requisitos [#compatibility]

New Relic coleta detalhes de instância para uma variedade de bancos de dados e drivers do banco de dados. A capacidade de visualizar instâncias específicas e os tipos de informações do banco de dados no APM depende do driver do banco de dados e da versão do agente:

* <DNT>
    **Go:**
  </DNT>

  Consulte [Compatibilidade em nível de instância do agente Go](/docs/agents/go-agent/get-started/go-agent-compatibility-requirements#datastores) para armazenamentos de dados.

* <DNT>
    **Java:**
  </DNT>

  Consulte [Compatibilidade em nível de instância do agente Java](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent#instance-level-db) para banco de dados.

* <DNT>
    **.NET:**
  </DNT>

  Consulte [Compatibilidade em nível de instância do agente .NET](/docs/agents/net-agent/getting-started/compatibility-requirements-net-agent#instance-details) para armazenamentos de dados.

* <DNT>
    **Node.js:**
  </DNT>

  Consulte [Compatibilidade em nível de instância do agente Node.js](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent#instance-details) para armazenamentos de dados.

* <DNT>
    **PHP:**
  </DNT>

  Consulte [Compatibilidade em nível de instância do agente PHP](/docs/agents/php-agent/getting-started/php-agent-compatibility-requirements#instance-details) para banco de dados.

* <DNT>
    **Python:**
  </DNT>

  Consulte [Compatibilidade em nível de instância do agente Python](/docs/agents/python-agent/getting-started/instrumented-python-packages#instance-details) para banco de dados e pacotes.

* <DNT>
    **Ruby:**
  </DNT>

  Consulte [Compatibilidade em nível de instância do agente Ruby](/docs/agents/ruby-agent/getting-started/ruby-agent-requirements-supported-frameworks#instance_details) para ORMs e gems.

Para solicitar informações em nível de instância de datastores atualmente não listados para seu agente, obtenha suporte em [support.newrelic.com](https://support.newrelic.com).

## Use detalhes da instância do armazenamento de dados para monitor e solucionar problemas do seu aplicativo [#workflow-examples]

Use estes exemplos como pontos de partida para monitor e solucionar problemas de desempenho de conexões entre seu aplicativo e a instância de armazenamento de dados associada. Os exemplos descrevem os recursos do New Relic que podem ajudá-lo a determinar se a causa subjacente por trás dos problemas de desempenho do aplicativo está relacionada aos seus aplicativos, a um problema de configuração da instância de banco de dados (como um índice ausente), aos recursos da sua organização ou a uma combinação deles.

<CollapserGroup>
  <Collapser
    id="slow-sql-example"
    title="Exemplo de detalhes trace de consulta lenta"
  >
    Seu [Apdex](/docs/apm/new-relic-apm/apdex/view-your-apdex-score) está caindo e você deseja determinar o que está afetando sua experiência do usuário final com seu aplicativo. Na página [banco de dados](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) do APM, você percebe algumas consultas lentas e deseja investigar mais detalhadamente com as ferramentas do fornecedor do banco de dados.

    Para fazer isso, você precisa saber o nome do banco de dados e a instância onde ocorreu a consulta lenta, pois o problema pode ser específico da instância. Por exemplo, o problema pode ser um índice ausente. Use [o rastreamento de consulta lenta](/docs/apm/applications-menu/monitoring/viewing-slow-query-details) do APM para revisar o desempenho da consulta, localizar o nome e a instância do banco de dados e identificar quaisquer consultas mal escritas ou ineficientes.
  </Collapser>

  <Collapser
    id="tx-trace-example"
    title="Exemplo de detalhes de rastreamento da transação"
  >
    Seu aplicativo tem um problema de desempenho e você usou a página [Transações](/docs/apm/applications-menu/monitoring/transactions-page) do APM para identificar uma transação suspeita. Ao selecionar um [rastreamento da transação](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page) para a transação lenta, você percebe que o tempo do banco de dados é o principal contribuinte para o desempenho da transação.

    A partir do [trace da transação **Details**](/docs/apm/transactions/transaction-traces/transaction-traces-trace-details-page) selecionado, você seleciona o **Banco de Dados** <Icon name="fe-database"/> ícone para revisar as informações da **consulta ao banco de dados** . Isso mostra os detalhes da consulta e a instância específica onde a consulta foi executada. A partir daqui, você pode usar as ferramentas do fornecedor de banco de dados para diagnosticar melhor o problema.

    <img
      title="APM transaction trace: Database and instances information"
      alt="APM transaction trace: Database and instances information"
      src="/images/apm_screenshot-full_transaction-trace-database-icon-drilldown.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Databases > (select a trace) > Trace details:**</DNT> Para visualizar informações sobre um banco de dados e uma instância específicos que podem estar contribuindo para o problema de desempenho de um aplicativo, selecione o ícone <DNT>**Database**</DNT> .
    </figcaption>
  </Collapser>

  <Collapser
    id="insights-example"
    title="Exemplo de criador de consulta"
  >
    Se você estiver usando um agente APM que [suporta detalhes de instância de banco de dados](#compatibility), poderá usar [o criador de consulta](/docs/query-your-data/explore-query-data/query-builder/introduction-query-builder) para relatar métricas, como tempo de resposta e taxas de transferência.
  </Collapser>

  <Collapser
    id="alerts-example"
    title="Alerta sobre métrica personalizada por exemplo exemplo de desempenho"
  >
    Para ser notificado sobre um problema de desempenho entre seu aplicativo e uma instância de banco de dados antes que ele afete negativamente a experiência dos seus clientes, use [alerta](/docs/alerts/new-relic-alerts/getting-started/welcome-new-relic-alerts). Você pode criar [políticas de alertas](/docs/alerts/new-relic-alerts/configuring-alert-policies/alert-policy-workflow) que [notificam automaticamente o pessoal apropriado](/docs/alerts/new-relic-alerts/managing-notification-channels/notification-channels-controlling-where-send-alerts) por meio de PagerDuty, webhooks etc. quando os problemas atingem o limite <DNT>**Critical**</DNT> definido por você.

    Como parte da configuração da política de alertas, crie uma condição com [métrica personalizada](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-custom-metrics-alert-condition) para uma instância específica, utilizando este formato:

    ```
    Datastore/instance/vendor/host/port
    ```

    Por exemplo:

    ```
    Datastore/instance/MySQL/msql-agent-1/12345
    ```
  </Collapser>
</CollapserGroup>
