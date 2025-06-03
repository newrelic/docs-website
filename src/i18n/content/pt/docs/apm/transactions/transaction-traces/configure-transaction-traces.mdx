---
title: Configurar rastreamento de transação
tags:
  - APM
  - Transactions
  - Transaction traces
metaDescription: How to configure transaction trace settings in APM.
freshnessValidatedDate: never
translationType: machine
---

No APM, [o rastreamento da transação](/docs/apm/transactions/transaction-traces/transaction-traces) registra detalhes detalhados sobre a transação da sua aplicação e chamadas de banco de dados. Você pode editar as configurações padrão para rastreamento de transação.

## Definir configurações de rastreamento da transação via agente [#agent-trace-config]

Você pode personalizar suas configurações de rastreamento de transação por meio de arquivos de configuração do agente New Relic e outros métodos de configuração "locais", como variáveis de ambiente. Para obter mais informações sobre as opções de configuração do trace da transação, consulte a documentação específica do agente de idiomas da New Relic:

* [Go](/docs/agents/go-agent/instrumentation/go-agent-configuration#transaction-tracer)
* [Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#h2-transaction-tracer)
* [.NET](/docs/agents/net-agent/installation-configuration/net-agent-configuration#transaction_tracer)
* [Nó](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#tx_tracer_config)
* [PHP](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-settings)
* [Python](/docs/agents/python-agent/installation-configuration/python-agent-configuration#txn-tracer-settings)
* [Ruby](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#transaction_tracer)

## Configure o rastreamento da transação usando configuração no lado do servidor [#fields]

A capacidade de configurar o rastreamento da transação usando [a configuração no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) depende do [agente New Relic](#agent-trace-config). Se a configuração no lado do servidor não for suportada, as configurações do trace da transação ficarão visíveis na interface, mas não poderão ser editadas.

Se as configurações de configuração no lado do servidor estiverem disponíveis para seu agente New Relic, você poderá vê-las em: <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Application > Server-side agent configuration**</DNT>.

As configurações de rastreamento da transação disponíveis usando a configuração no lado do servidor serão diferentes dependendo do [agente New Relic](#agent-trace-config) que você usar. A interface inclui descrições de cada um. As configurações na interface podem incluir:

* Rastreamento e limite de transação
* Registre SQL, incluindo nível de gravação e campos de entrada
* Log SQL e limite stack trace
* Planos e limites de consulta SQL
* Coleta de erros, incluindo código HTTP e classe de erro
* Consulta lenta rastreamento
* Profiler de thread
* Rastreamento multiaplicativo

## Configurar rastreamento para transação principal específica [#key-txns]

Se você deseja monitor ou alertar sobre uma transação de forma diferente de outras transações, torne-a uma [transação principal](/docs/apm/transactions/key-transactions/key-transactions-tracking-important-transactions-or-events). Isso é útil, por exemplo, quando você deseja [definir um Apdex específico da transação](/docs/apm/new-relic-apm/apdex/change-your-apdex-settings#key-transaction) que seja diferente do seu [limite geral de Apdex T.](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction#what-is)

Alterar o Apdex do principal da transação altera a probabilidade de ele criar um rastreamento da transação. Por exemplo:

* Se você quiser aumentar a probabilidade de um principal de transação gerar trace da transação,

  <DNT>
    **lower**
  </DNT>

  seu valor Apdex T.

* Se você quiser tornar uma transação principal menos provável de ser rastreada,

  <DNT>
    **raise**
  </DNT>

  seu valor Apdex T.

<Callout variant="important">
  Se você tiver o [limite de rastreamento da transação](#fields) definido para um número de segundos, e não para a configuração padrão do Apdex, o limite do número de segundos atuará como o limite para <DNT>**all**</DNT> transações, mesmo para transações principais que tenham configurações personalizadas de Apdex .
</Callout>

## Visualize o log do seu APM e dados de infraestrutura [#logs-context]

Você também pode reunir os dados do seu log e da aplicação para tornar a resolução de problemas mais fácil e rápida. Com [os logs contextualizados](/docs/logs/logs-context/configure-logs-context-apm-agents/), você pode ver a mensagem do log relacionada aos seus erros e rastrear diretamente na interface do seu aplicativo. Você também pode ver o logs contextualizados dos [dados da sua infraestrutura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como cluster do Kubernetes. Não há necessidade de mudar para outra página de interface.

## Criar transação personalizada [#custom-txns]

Você pode criar transações personalizadas para atividades de aplicativos que não estão sendo capturadas automaticamente como transação pelo agente New Relic. Para mais informações, consulte [instrumentação personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/).

## Coletar atributo de solicitação HTTP, parâmetro [#config-attributes]

Por [motivos de segurança de dados](/docs/apm/transactions/transaction-traces/security-options-transaction-traces), o rastreamento da transação não coleta atributos de solicitação HTTP potencialmente confidenciais, às vezes chamados de <DNT>**parameters**</DNT>. trace coleta alguns atributos básicos de solicitação HTTP, que a New Relic chama de <DNT>**agent attributes**</DNT>. Para editar as configurações de coleta de atributo, consulte o agente específico da New Relic:

* [Go](/docs/agents/go-agent/instrumentation/go-agent-attributes)
* [Java](/docs/agents/java-agent/attributes/java-agent-attributes)
* [.NET](/docs/agents/net-agent/attributes/net-agent-attributes)
* [Node.js](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#params) (não permite configuração de atributo HTTP)
* [PHP](/docs/agents/php-agent/attributes/php-agent-attributes)
* [Python](/docs/agents/python-agent/attributes/python-agent-attributes)
* [Ruby](/docs/agents/ruby-agent/attributes/ruby-agent-attributes)

Para obter mais informações, consulte [Coletar atributo personalizado](/docs/agents/manage-apm-agents/agent-data/collect-custom-attributes).

## Excluir um rastreamento da transação [#delete-trace]

Quando você exclui um rastreamento de transação, ele é excluído permanentemente.

<CollapserGroup>
  <Collapser
    id="delete-all"
    title="Excluir todos os vestígios da transação"
  >
    Para excluir permanentemente o rastreamento <DNT>**all**</DNT> do aplicativo selecionado:

    1. Vá para <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions**</DNT>.

    2. Clique em <DNT>**Delete all traces**</DNT>.

       Pode levar quinze minutos ou mais para que todos os registros de rastreamento da transação desapareçam da interface.

       Para excluir todos os rastros de sua conta, entre em contato conosco em [support.newrelic.com](https://support.newrelic.com).

       <Callout variant="tip">
         Se você estiver fazendo uma limpeza geral de registros, você também pode excluir [o banco de dados e consultar lenta trace](/docs/apm/applications-menu/monitoring/databases-slow-queries-page) ou [error trace](/docs/apm/applications-menu/events/viewing-apm-errors-error-traces). Isso removerá dados potencialmente confidenciais, mantendo os outros dados do aplicativo (como Apdex, informações de implantação, etc.).
       </Callout>
  </Collapser>
</CollapserGroup>
