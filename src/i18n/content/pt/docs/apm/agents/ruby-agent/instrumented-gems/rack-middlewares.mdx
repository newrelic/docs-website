---
title: Middlewares de rack
tags:
  - Agents
  - Ruby agent
  - Instrumented gems
metaDescription: New Relic's Ruby agent instruments Rack middlewares and uses middlewares for functions like cross application tracing and browser auto-instrumentation.
freshnessValidatedDate: never
translationType: machine
---

O agente Ruby automaticamente instrumento [rack](http://rack.github.io/) middlewares. Se você não estiver familiarizado com os fundamentos dos middlewares Rack, revise os [recursos vinculados pelo guia Rails on Rack](http://guides.rubyonrails.org/rails_on_rack.html#resources). Além disso, o agente Ruby fornece alguns recursos via middlewares Rack:

* [Rastreamento distribuído](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing/)

* instrumentação automática para

  <InlinePopover type="browser">
    [](/docs/agents/ruby-agent/features/page-load-timing-ruby)
  </InlinePopover>

A New Relic instala automaticamente esses middlewares para Rails e Sinatra.

## Instrumentação de rack [#instrumentation]

As duas maneiras mais comuns de configurar middlewares Rack são a API `Rack::Builder` (geralmente de <DNT>**config.ru**</DNT>) e a configuração stack de middleware Rails:

<CollapserGroup>
  <Collapser
    id="rack_builder"
    title="Rack::Builder"
  >
    Middlewares em seu arquivo <DNT>**config.ru**</DNT> são configurados usando `Rack::Builder`. Para que o agente Ruby possa utilizar middlewares de instrumento de `Rack::Builder`, seu aplicativo deve rodar a versão 1.1.0 ou superior da gema `rack` . Este é o uso mais comum de middlewares com Sinatra ou aplicativo pure-rack.
  </Collapser>

  <Collapser
    id="rails_middlewares"
    title="Middlewares Rails"
  >
    Rails usa sua própria classe (`ActionDispatch::MiddlewareStack`) em vez de `Rack::Builder` para configurar middlewares. Mesmo que você não tenha adicionado middlewares explicitamente ao seu aplicativo Rails, muitos componentes do próprio Rails são implementados como middleware, portanto, os dados do middleware aparecerão por padrão.

    O agente Ruby instrumento automaticamente middlewares adicionados via `ActionDispatch::MiddlewareStack` em <DNT>**Rails 3.0 or higher**</DNT>. Para obter mais informações sobre como configurar middlewares com Rails, consulte o [guia Ruby on Rails](http://guides.rubyonrails.org/rails_on_rack.html).
  </Collapser>
</CollapserGroup>

## Visualizando dados de middleware [#viewing_middleware_data]

Você pode visualizar dados de middleware no APM.

<CollapserGroup>
  <Collapser
    id="apm-overview"
    title="Na página Resumo do APM"
  >
    O gráfico principal na [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/applications-overview-dashboard)do seu aplicativo inclui uma barra roxa que mostra o tempo médio gasto por solicitação em todos os middlewares Rack do seu aplicativo.

    <img
      title="web_transactions.png"
      alt="web_transactions.png"
      src="/images/apm_screenshot-crop_web-transactions.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Summary:**</DNT> O tempo do middleware aparece em roxo no gráfico Visão geral principal do seu aplicativo.
    </figcaption>
  </Collapser>

  <Collapser
    id="apm-transactions"
    title="Na página de transação da APM"
  >
    Você também pode ver o tempo de middlewares individuais para um nome de transação específico na [página APM<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)do seu aplicativo.

    <img
      title="transactions_page.png"
      alt="transactions_page.png"
      src="/images/apm_screenshot-full_transactionspagesummary.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Monitor > Transactions > (selected transaction) > Trace details:**</DNT> Aqui está um exemplo de tempo de middleware para uma transação selecionada para seu aplicativo.
    </figcaption>
  </Collapser>

  <Collapser
    id="apm-trace"
    title="No APM trace o resumo da transação"
  >
    O trace da transação também captura informações detalhadas sobre chamadas de middleware.

    <img
      title="trace_summary.png"
      alt="trace_summary.png"
      src="/images/apm_screenshot-full_trace-summary.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Monitor > Transactions > (selected transaction trace):**</DNT> Aqui está um exemplo de detalhes de middleware em um rastreamento de transação.
    </figcaption>
  </Collapser>
</CollapserGroup>

## Desativando a instrumentação do Rack [#disabling]

Se não quiser instrumentar middlewares de Rack, você pode desativar a instrumentação de middleware de Rack com a configuração [`disable_middleware_instrumentation`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration) . Você também pode [ignorar transações específicas](/docs/agents/ruby-agent/installation-configuration/ignoring-specific-transactions).

## Instalando manualmente os middlewares do agente Ruby [#manual]

A implementação do recurso [de rastreamento multiaplicativo](/docs/apm/traces/cross-application-traces/cross-application-tracing) do agente Ruby da New Relic usa instrumentação de middleware Rack para ler e gravar cabeçalhos HTTP necessários para passar informações entre aplicativos de monitor. Se você estiver usando o Sinatra, desativou a instrumentação de middleware conforme descrito acima e deseja usar o rastreamento multiaplicativo, deverá adicionar manualmente o middleware `NewRelic::Rack::AgentHooks` à sua stack de middleware.

<Callout variant="important">
  A partir da versão 8.0.0, o rastreamento multiaplicativo está obsoleto em favor do [distributed tracing](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing/). Quando ativado, distributed tracing é configurado automaticamente para todos os aplicativos baseados em rack, sem a necessidade de um middleware adicional.

  Se quiser continuar usando o rastreamento multiaplicativo, você precisará [atualizar sua configuração](/docs/agents/ruby-agent/features/cross-application-tracing-ruby#configuration).
</Callout>

## Instrumentação manual de rack [#manual_instrumentation]

Versões anteriores do agente Ruby suportavam middlewares Rack instrumentados manualmente por meio do módulo `NewRelic::Agent::Instrumentation::Rack` . Esta instrumentação foi removida e não há garantia de funcionamento no agente Ruby versão 4.0.0 ou superior. Esta forma de instrumentação manual é desnecessária na instrumentação automática de middleware. Recomendamos que você remova referências a este módulo do seu código após atualizar para 3.9.0 ou superior.
