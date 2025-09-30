---
title: Actualizar API de llamada obsoleta
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

Ocasionalmente eliminamos API obsoletas. Si utiliza cualquiera de los siguientes métodos, debe actualizar su API de llamada con los reemplazos recomendados antes de actualizar a ciertas versiones del agente Ruby.

## Agente Ruby 9.0.0

Las siguientes API se eliminaron con Ruby agente 9.0.0. Actualice su API con los siguientes reemplazos recomendados:

<CollapserGroup>
  <Collapser
    id="disable_transaction_tracing"
    title={<InlineCode>NewRelic::Agent#disable_transaction_tracing</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent#disable_all_tracing` o `NewRelic::Agent#ignore_transaction`
  </Collapser>
</CollapserGroup>

## Agente Ruby 4.0.0

Las siguientes API se eliminaron con Ruby agente 4.0.0. Actualice su API con los siguientes reemplazos recomendados:

<CollapserGroup>
  <Collapser
    id="newrelic_notice_error"
    title={<InlineCode>ActionController#newrelic_notice_error</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent#notice_error`
  </Collapser>

  <Collapser
    id="abort_transaction"
    title={<InlineCode>NewRelic::Agent.abort_transaction!</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent.ignore_transaction`
  </Collapser>

  <Collapser
    id="add_custom-parameters"
    title={<InlineCode>NewRelic::Agent.add_custom_parameters</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent.add_custom_attributes`
  </Collapser>

  <Collapser
    id="add_request_parameters"
    title={<InlineCode>NewRelic::Agent.add_request_parameters</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent.add_custom_attributes`
  </Collapser>

  <Collapser
    id="browser_timing_footer"
    title={<InlineCode>NewRelic::Agent.browser_timing_footer</InlineCode>}
  >
    Elimine la llamada al método porque ya no es necesaria y devuelve una cadena vacía.
  </Collapser>

  <Collapser
    id="get_stats"
    title={<InlineCode>NewRelic::Agent.get_stats</InlineCode>}
  >
    * Si había encadenado `get_stats` con `increment_count`, use:

      `NewRelic::Agent.increment_metric`

    * Si había encadenado `get_stats` con `record_data_point`, use:

      `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="get_stats_no_scope"
    title={<InlineCode>NewRelic::Agent.get_stats_no_scope</InlineCode>}
  >
    * Si había encadenado `get_stats_no_scope` con `increment_count`, use:

      `NewRelic::Agent.increment_metric`

    * Si había encadenado `get_stats_no_scope` con `record_data_point`, use:

      `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="record_transaction"
    title={<InlineCode>NewRelic::Agent.record_transaction</InlineCode>}
  >
    Elimine la llamada al método, ya que solo registra un mensaje de advertencia en el log del agente.
  </Collapser>

  <Collapser
    id="reset_stats"
    title={<InlineCode>NewRelic::Agent.reset_stats</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent.drop_buffered_data`
  </Collapser>

  <Collapser
    id="set_user_attributes"
    title={<InlineCode>NewRelic::Agent.set_user_attributes</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent.add_custom_attributes`
  </Collapser>

  <Collapser
    id="ActiveRecordHelper.rollup_metrics_for"
    title={<InlineCode>NewRelic::Agent::Instrumentation::ActiveRecordHelper.rollup_metrics_for</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent::Datastores::MetricHelper.metrics_for`
  </Collapser>

  <Collapser
    id="MetricFrame.recording_web_transaction"
    title={<InlineCode>NewRelic::Agent::Instrumentation::MetricFrame.recording_web_transaction?</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent::Transaction.recording_web_transaction?`
  </Collapser>

  <Collapser
    id="MetricFrame.abort_transaction"
    title={<InlineCode>NewRelic::Agent::Instrumentation::MetricFrame.abort_transaction!</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent::Transaction.abort_transaction!`
  </Collapser>

  <Collapser
    id="Rack"
    title={<InlineCode>NewRelic::Agent::Instrumentation::Rack</InlineCode>}
  >
    Eliminar inclusiones de este módulo. A partir de la versión 3.9.0 del agente Ruby, New Relic instrumenta middlewares Rack de forma predeterminada. Como resultado, todo este módulo ha quedado obsoleto.
  </Collapser>

  <Collapser
    id="MethodTracer_get_stats_scoped"
    title={<InlineCode>NewRelic::Agent::MethodTracer.get_stats_scoped</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="MethodTracer_get_stats_unscoped"
    title={<InlineCode>NewRelic::Agent::MethodTracer.get_stats_unscoped</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="MethodTracer_trace_method_execution"
    title={<InlineCode>NewRelic::Agent::MethodTracer.trace_method_execution</InlineCode>}
  >
    Reemplace con cualquiera de estos métodos:

    * `NewRelic::Agent::MethodTracer.trace_execution_scoped`
    * `NewRelic::Agent::MethodTracer.trace_execution_unscoped`
  </Collapser>

  <Collapser
    id="trace_method_execution_no_scope"
    title={<InlineCode>NewRelic::Agent::MethodTracer.trace_method_execution_no_scope</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent::MethodTracer.trace_execution_unscoped`
  </Collapser>

  <Collapser
    id="trace_method_execution_with_scope"
    title={<InlineCode>NewRelic::Agent::MethodTracer.trace_method_execution_with_scope</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent::MethodTracer.trace_execution_scoped`
  </Collapser>

  <Collapser
    id="MetricStats_get_stats"
    title={<InlineCode>NewRelic::Agent::StatsEngine::MetricStats#get_stats</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="MetricStats_no_scope"
    title={<InlineCode>NewRelic::Agent::StatsEngine::MetricStats#get_stats_no_scope</InlineCode>}
  >
    Reemplazar con `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="Samplers_add_sampler"
    title={<InlineCode>NewRelic::Agent::StatsEngine::Samplers.add_sampler</InlineCode>}
  >
    Elimine la llamada al método, ya que solo registra un mensaje de advertencia en el log del agente.
  </Collapser>

  <Collapser
    id="Samplers_add_harvest_sampler"
    title={<InlineCode>NewRelic::Agent::StatsEngine::Samplers.add_harvest_sampler</InlineCode>}
  >
    Elimine la llamada al método, ya que solo registra un mensaje de advertencia en el log del agente.
  </Collapser>

  <Collapser
    id="MetricSpec"
    title={<InlineCode>NewRelic::MetricSpec#sub</InlineCode>}
  >
    Elimine la llamada al método porque ya no es compatible
  </Collapser>

  <Collapser
    id="NoticedError"
    title={<InlineCode>NewRelic::NoticedError#exception_class</InlineCode>}
  >
    Reemplazar con `NewRelic::NoticedError#exception_class_name`
  </Collapser>

  <Collapser
    id="Rack_ErrorCollector"
    title={<InlineCode>NewRelic::Rack::ErrorCollector</InlineCode>}
  >
    Eliminar inclusiones de este módulo. El agente Ruby recopila automáticamente errores para todas las aplicaciones de Rack en cualquiera de estas situaciones:

    * Si la instrumentación automática de middleware de Rack está habilitada
    * Si ha agregado manualmente algún middleware de New Relic a su stackde middleware
  </Collapser>
</CollapserGroup>
