---
title: Atualizar chamada de API obsoleta
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: Update deprecated API calls for the New Relic Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Ocasionalmente, removemos API obsoletas. Se você usar qualquer um dos métodos a seguir, deverá atualizar sua chamada de API com as substituições recomendadas antes de atualizar para determinadas versões do agente Ruby.

## Agente Ruby 9.0.0

A API a seguir foi removida com o agente Ruby 9.0.0. Atualize sua API com as seguintes substituições recomendadas:

<CollapserGroup>
  <Collapser
    id="disable_transaction_tracing"
    title={<InlineCode>NewRelic::Agent#disable_transaction_tracing</InlineCode>}
  >
    Substitua por `NewRelic::Agent#disable_all_tracing` ou `NewRelic::Agent#ignore_transaction`
  </Collapser>
</CollapserGroup>

## Agente Ruby 4.0.0

A API a seguir foi removida com o agente Ruby 4.0.0. Atualize sua API com as seguintes substituições recomendadas:

<CollapserGroup>
  <Collapser
    id="newrelic_notice_error"
    title={<InlineCode>ActionController#newrelic_notice_error</InlineCode>}
  >
    Substituir com `NewRelic::Agent#notice_error`
  </Collapser>

  <Collapser
    id="abort_transaction"
    title={<InlineCode>NewRelic::Agent.abort_transaction!</InlineCode>}
  >
    Substituir com `NewRelic::Agent.ignore_transaction`
  </Collapser>

  <Collapser
    id="add_custom-parameters"
    title={<InlineCode>NewRelic::Agent.add_custom_parameters</InlineCode>}
  >
    Substituir com `NewRelic::Agent.add_custom_attributes`
  </Collapser>

  <Collapser
    id="add_request_parameters"
    title={<InlineCode>NewRelic::Agent.add_request_parameters</InlineCode>}
  >
    Substituir com `NewRelic::Agent.add_custom_attributes`
  </Collapser>

  <Collapser
    id="browser_timing_footer"
    title={<InlineCode>NewRelic::Agent.browser_timing_footer</InlineCode>}
  >
    Exclua a chamada do método, pois ela não é mais necessária e estava retornando uma string vazia.
  </Collapser>

  <Collapser
    id="get_stats"
    title={<InlineCode>NewRelic::Agent.get_stats</InlineCode>}
  >
    * Se você encadeou `get_stats` com `increment_count`, use:

      `NewRelic::Agent.increment_metric`

    * Se você encadeou `get_stats` com `record_data_point`, use:

      `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="get_stats_no_scope"
    title={<InlineCode>NewRelic::Agent.get_stats_no_scope</InlineCode>}
  >
    * Se você encadeou `get_stats_no_scope` com `increment_count`, use:

      `NewRelic::Agent.increment_metric`

    * Se você encadeou `get_stats_no_scope` com `record_data_point`, use:

      `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="record_transaction"
    title={<InlineCode>NewRelic::Agent.record_transaction</InlineCode>}
  >
    Exclua a chamada do método, pois ela apenas registra uma mensagem de aviso no log do agente.
  </Collapser>

  <Collapser
    id="reset_stats"
    title={<InlineCode>NewRelic::Agent.reset_stats</InlineCode>}
  >
    Substituir com `NewRelic::Agent.drop_buffered_data`
  </Collapser>

  <Collapser
    id="set_user_attributes"
    title={<InlineCode>NewRelic::Agent.set_user_attributes</InlineCode>}
  >
    Substituir com `NewRelic::Agent.add_custom_attributes`
  </Collapser>

  <Collapser
    id="ActiveRecordHelper.rollup_metrics_for"
    title={<InlineCode>NewRelic::Agent::Instrumentation::ActiveRecordHelper.rollup_metrics_for</InlineCode>}
  >
    Substituir com `NewRelic::Agent::Datastores::MetricHelper.metrics_for`
  </Collapser>

  <Collapser
    id="MetricFrame.recording_web_transaction"
    title={<InlineCode>NewRelic::Agent::Instrumentation::MetricFrame.recording_web_transaction?</InlineCode>}
  >
    Substituir com `NewRelic::Agent::Transaction.recording_web_transaction?`
  </Collapser>

  <Collapser
    id="MetricFrame.abort_transaction"
    title={<InlineCode>NewRelic::Agent::Instrumentation::MetricFrame.abort_transaction!</InlineCode>}
  >
    Substituir com `NewRelic::Agent::Transaction.abort_transaction!`
  </Collapser>

  <Collapser
    id="Rack"
    title={<InlineCode>NewRelic::Agent::Instrumentation::Rack</InlineCode>}
  >
    Exclua inclusões deste módulo. A partir do agente Ruby versão 3.9.0, Novos middlewares Relic instrumento Rack por padrão. Como resultado, todo este módulo foi descontinuado.
  </Collapser>

  <Collapser
    id="MethodTracer_get_stats_scoped"
    title={<InlineCode>NewRelic::Agent::MethodTracer.get_stats_scoped</InlineCode>}
  >
    Substituir com `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="MethodTracer_get_stats_unscoped"
    title={<InlineCode>NewRelic::Agent::MethodTracer.get_stats_unscoped</InlineCode>}
  >
    Substituir com `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="MethodTracer_trace_method_execution"
    title={<InlineCode>NewRelic::Agent::MethodTracer.trace_method_execution</InlineCode>}
  >
    Substitua por um destes métodos:

    * `NewRelic::Agent::MethodTracer.trace_execution_scoped`
    * `NewRelic::Agent::MethodTracer.trace_execution_unscoped`
  </Collapser>

  <Collapser
    id="trace_method_execution_no_scope"
    title={<InlineCode>NewRelic::Agent::MethodTracer.trace_method_execution_no_scope</InlineCode>}
  >
    Substituir com `NewRelic::Agent::MethodTracer.trace_execution_unscoped`
  </Collapser>

  <Collapser
    id="trace_method_execution_with_scope"
    title={<InlineCode>NewRelic::Agent::MethodTracer.trace_method_execution_with_scope</InlineCode>}
  >
    Substituir com `NewRelic::Agent::MethodTracer.trace_execution_scoped`
  </Collapser>

  <Collapser
    id="MetricStats_get_stats"
    title={<InlineCode>NewRelic::Agent::StatsEngine::MetricStats#get_stats</InlineCode>}
  >
    Substituir com `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="MetricStats_no_scope"
    title={<InlineCode>NewRelic::Agent::StatsEngine::MetricStats#get_stats_no_scope</InlineCode>}
  >
    Substituir com `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="Samplers_add_sampler"
    title={<InlineCode>NewRelic::Agent::StatsEngine::Samplers.add_sampler</InlineCode>}
  >
    Exclua a chamada do método, pois ela apenas registra uma mensagem de aviso no log do agente.
  </Collapser>

  <Collapser
    id="Samplers_add_harvest_sampler"
    title={<InlineCode>NewRelic::Agent::StatsEngine::Samplers.add_harvest_sampler</InlineCode>}
  >
    Exclua a chamada do método, pois ela apenas registra uma mensagem de aviso no log do agente.
  </Collapser>

  <Collapser
    id="MetricSpec"
    title={<InlineCode>NewRelic::MetricSpec#sub</InlineCode>}
  >
    Exclua a chamada do método, pois ela não é mais suportada
  </Collapser>

  <Collapser
    id="NoticedError"
    title={<InlineCode>NewRelic::NoticedError#exception_class</InlineCode>}
  >
    Substituir com `NewRelic::NoticedError#exception_class_name`
  </Collapser>

  <Collapser
    id="Rack_ErrorCollector"
    title={<InlineCode>NewRelic::Rack::ErrorCollector</InlineCode>}
  >
    Exclua inclusões deste módulo. O agente Ruby coleta erros automaticamente para todos os aplicativos Rack em qualquer uma destas situações:

    * Se a instrumentação automática de middleware Rack estiver habilitada
    * Se você adicionou manualmente qualquer middleware New Relic à sua stackde middleware
  </Collapser>
</CollapserGroup>
