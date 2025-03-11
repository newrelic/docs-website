---
title: 'Resolução de problemas: entidade ausente nos mapas de serviços'
type: troubleshooting
tags:
  - Understand dependencies
  - Understand system dependencies
  - Service maps
metaDescription: Add missing entities to your service maps.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Ao usar [mapas de serviço](/docs/understand-dependencies/understand-system-dependencies/service-maps/service-maps-new-relic-one), você não pode visualizar o conjunto completo de entidades ou os relacionamentos entre entidades que espera ver.

## Solução

Certifique-se de que a entidade está sendo monitorada por um agente. Se você tiver uma combinação de agentes com alguns com [distributed tracing](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) ativado e outros desativados, você não verá as relações entre esses agentes. A solução para este cenário é executar todos os agentes com distributed tracing ativado (preferencial) ou desativá-lo para todos os agentes. Se isso não resolver o problema, o serviço que você está tentando visualizar poderá exigir instrumentação manual.

Ao visualizar aplicativos e serviços que instrumentamos automaticamente em mapas de serviço, você normalmente verá dados completos e detalhados para esses nós na interface distributed tracing . No entanto, você pode notar que alguns desses serviços ou aplicativos estão faltando nos mapas de serviço.

<Callout variant="tip">
  Alguns <DNT>**browser apps**</DNT> são exceções e podem estar ausentes porque:

  * Relacionamentos para o agente browser copiar e colar não são detectados.
  * Somente os relacionamentos do [agente browser injetado](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent#options) são mostrados (o aplicativo no qual o agente é injetado). Os relacionamentos de chamada (por exemplo, chamadas AJAX para outros aplicativos) não são exibidos.
</Callout>

Se serviços ou aplicativos estiverem faltando, você pode implementar [instrumentação personalizada](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis) do aplicativo ou transação específica para ver mais detalhes no rastreamento. Alguns exemplos de quando você pode precisar fazer isso:

* <DNT>
    **Transactions not automatically instrumented**
  </DNT>

  . Para garantir que seu aplicativo seja automaticamente instrumento, leia a [documentação de compatibilidade e requisitos](/docs/apm/new-relic-apm/getting-started/introduction-apm) do agente que você está usando. Caso uma aplicação não seja um instrumento automático, ou se desejar adicionar instrumentação de atividade específica, consulte [instrumentação personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/#implementing).

* <DNT>
    **All Go applications**
  </DNT>

  . O agente Go, diferentemente de outros agentes, requer instrumentação manual do seu código. Para obter instruções, consulte [Instrumento a aplicativo Go](/docs/agents/go-agent/instrumentation/instrument-go-transactions).

* <DNT>
    **A service doesn't use HTTP**
  </DNT>

  . Se um serviço não se comunicar via HTTP, o agente não enviará cabeçalhos distributed tracing . Esse pode ser o caso de algum aplicativo que não seja da web ou fila de mensagens. Para remediar isso, use a para instrumentar o [distributed tracing API](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis) aplicativo chamador ou chamado.
