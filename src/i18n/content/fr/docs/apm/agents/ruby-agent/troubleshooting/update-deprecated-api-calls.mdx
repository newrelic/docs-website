---
title: Mettre à jour l'appel d'API obsolète
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: Update deprecated API calls for the New Relic Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

## Problème

Nous supprimons occasionnellement les API obsolètes. Si vous utilisez l’une des méthodes suivantes, vous devez mettre à jour votre appel d’API avec les remplacements recommandés avant de procéder à la mise à niveau vers certaines versions de l’agent Ruby .

## Agent Ruby 9.0.0

Les API suivantes ont été supprimées avec l&apos;agent Ruby 9.0.0. Mettez à jour votre API avec les remplacements recommandés suivants :

<CollapserGroup>
  <Collapser
    id="disable_transaction_tracing"
    title={<InlineCode>NewRelic::Agent#disable_transaction_tracing</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent#disable_all_tracing` ou `NewRelic::Agent#ignore_transaction`
  </Collapser>
</CollapserGroup>

## Agent Ruby 4.0.0

Les API suivantes ont été supprimées avec l&apos;agent Ruby 4.0.0. Mettez à jour votre API avec les remplacements recommandés suivants :

<CollapserGroup>
  <Collapser
    id="newrelic_notice_error"
    title={<InlineCode>ActionController#newrelic_notice_error</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent#notice_error`
  </Collapser>

  <Collapser
    id="abort_transaction"
    title={<InlineCode>NewRelic::Agent.abort_transaction!</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent.ignore_transaction`
  </Collapser>

  <Collapser
    id="add_custom-parameters"
    title={<InlineCode>NewRelic::Agent.add_custom_parameters</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent.add_custom_attributes`
  </Collapser>

  <Collapser
    id="add_request_parameters"
    title={<InlineCode>NewRelic::Agent.add_request_parameters</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent.add_custom_attributes`
  </Collapser>

  <Collapser
    id="browser_timing_footer"
    title={<InlineCode>NewRelic::Agent.browser_timing_footer</InlineCode>
    }
  >
    Supprimez l&apos;appel de méthode car il n&apos;est plus nécessaire et renvoyait une chaîne vide.
  </Collapser>

  <Collapser
    id="get_stats"
    title={<InlineCode>NewRelic::Agent.get_stats</InlineCode>
    }
  >
    * Si vous aviez enchaîné `get_stats` avec `increment_count`, utilisez :

      `NewRelic::Agent.increment_metric`

    * Si vous aviez enchaîné `get_stats` avec `record_data_point`, utilisez :

      `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="get_stats_no_scope"
    title={<InlineCode>NewRelic::Agent.get_stats_no_scope</InlineCode>
    }
  >
    * Si vous aviez enchaîné `get_stats_no_scope` avec `increment_count`, utilisez :

      `NewRelic::Agent.increment_metric`

    * Si vous aviez enchaîné `get_stats_no_scope` avec `record_data_point`, utilisez :

      `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="record_transaction"
    title={<InlineCode>NewRelic::Agent.record_transaction</InlineCode>
    }
  >
    Supprimez l&apos;appel de méthode car il enregistre uniquement un message d&apos;avertissement dans le log de l&apos;agent.
  </Collapser>

  <Collapser
    id="reset_stats"
    title={<InlineCode>NewRelic::Agent.reset_stats</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent.drop_buffered_data`
  </Collapser>

  <Collapser
    id="set_user_attributes"
    title={<InlineCode>NewRelic::Agent.set_user_attributes</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent.add_custom_attributes`
  </Collapser>

  <Collapser
    id="ActiveRecordHelper.rollup_metrics_for"
    title={<InlineCode>NewRelic::Agent::Instrumentation::ActiveRecordHelper.rollup_metrics_for</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent::Datastores::MetricHelper.metrics_for`
  </Collapser>

  <Collapser
    id="MetricFrame.recording_web_transaction"
    title={<InlineCode>NewRelic::Agent::Instrumentation::MetricFrame.recording_web_transaction?</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent::Transaction.recording_web_transaction?`
  </Collapser>

  <Collapser
    id="MetricFrame.abort_transaction"
    title={<InlineCode>NewRelic::Agent::Instrumentation::MetricFrame.abort_transaction!</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent::Transaction.abort_transaction!`
  </Collapser>

  <Collapser
    id="Rack"
    title={<InlineCode>NewRelic::Agent::Instrumentation::Rack</InlineCode>
    }
  >
    Supprimer les inclusions de ce module. À partir de la version 3.9.0 de l&apos;agent Ruby, Nouveaux intergiciels Rack d&apos;instruments Relic par défaut. En conséquence, l’ensemble de ce module est obsolète.
  </Collapser>

  <Collapser
    id="MethodTracer_get_stats_scoped"
    title={<InlineCode>NewRelic::Agent::MethodTracer.get_stats_scoped</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="MethodTracer_get_stats_unscoped"
    title={<InlineCode>NewRelic::Agent::MethodTracer.get_stats_unscoped</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="MethodTracer_trace_method_execution"
    title={<InlineCode>NewRelic::Agent::MethodTracer.trace_method_execution</InlineCode>
    }
  >
    Remplacez par l’une de ces méthodes :

    * `NewRelic::Agent::MethodTracer.trace_execution_scoped`
    * `NewRelic::Agent::MethodTracer.trace_execution_unscoped`
  </Collapser>

  <Collapser
    id="trace_method_execution_no_scope"
    title={<InlineCode>NewRelic::Agent::MethodTracer.trace_method_execution_no_scope</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent::MethodTracer.trace_execution_unscoped`
  </Collapser>

  <Collapser
    id="trace_method_execution_with_scope"
    title={<InlineCode>NewRelic::Agent::MethodTracer.trace_method_execution_with_scope</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent::MethodTracer.trace_execution_scoped`
  </Collapser>

  <Collapser
    id="MetricStats_get_stats"
    title={<InlineCode>NewRelic::Agent::StatsEngine::MetricStats#get_stats</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="MetricStats_no_scope"
    title={<InlineCode>NewRelic::Agent::StatsEngine::MetricStats#get_stats_no_scope</InlineCode>
    }
  >
    Remplacer par `NewRelic::Agent.record_metric`
  </Collapser>

  <Collapser
    id="Samplers_add_sampler"
    title={<InlineCode>NewRelic::Agent::StatsEngine::Samplers.add_sampler</InlineCode>
    }
  >
    Supprimez l&apos;appel de méthode car il enregistre uniquement un message d&apos;avertissement dans le log de l&apos;agent.
  </Collapser>

  <Collapser
    id="Samplers_add_harvest_sampler"
    title={<InlineCode>NewRelic::Agent::StatsEngine::Samplers.add_harvest_sampler</InlineCode>
    }
  >
    Supprimez l&apos;appel de méthode car il enregistre uniquement un message d&apos;avertissement dans le log de l&apos;agent.
  </Collapser>

  <Collapser
    id="MetricSpec"
    title={<InlineCode>NewRelic::MetricSpec#sub</InlineCode>
    }
  >
    Supprimer l&apos;appel de méthode car il n&apos;est plus pris en charge
  </Collapser>

  <Collapser
    id="NoticedError"
    title={<InlineCode>NewRelic::NoticedError#exception_class</InlineCode>
    }
  >
    Remplacer par `NewRelic::NoticedError#exception_class_name`
  </Collapser>

  <Collapser
    id="Rack_ErrorCollector"
    title={<InlineCode>NewRelic::Rack::ErrorCollector</InlineCode>
    }
  >
    Supprimer les inclusions de ce module. L&apos;agent Ruby collecte automatiquement les erreurs pour toutes les applications Rack dans l&apos;une de ces situations :

    * Si Rack middleware automatique instrumentation est activée
    * Si vous avez ajouté manuellement des middlewares New Relic à votre stackde middlewares
  </Collapser>
</CollapserGroup>