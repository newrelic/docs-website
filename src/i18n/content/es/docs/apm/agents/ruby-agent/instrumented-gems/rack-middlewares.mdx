---
title: Middleware de rack
tags:
  - Agents
  - Ruby agent
  - Instrumented gems
metaDescription: New Relic's Ruby agent instruments Rack middlewares and uses middlewares for functions like cross application tracing and browser auto-instrumentation.
freshnessValidatedDate: never
translationType: machine
---

El agente Ruby instrumentó automáticamente los middlewares [de Rack](http://rack.github.io/) . Si no está familiarizado con los conceptos básicos de los middlewares de Rack, revise los [recursos vinculados en la guía Rails on Rack](http://guides.rubyonrails.org/rails_on_rack.html#resources). Además, el agente Ruby proporciona algunas características a través del middleware Rack:

* [Rastreo distribuido](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing/)

* instrumentación automática para

  <InlinePopover type="browser">
    [](/docs/agents/ruby-agent/features/page-load-timing-ruby)
  </InlinePopover>

New Relic instala automáticamente estos middlewares para Rails y Sinatra.

## Instrumentación en rack [#instrumentation]

Las dos formas más comunes de configurar middlewares de Rack son la API `Rack::Builder` (más a menudo de <DNT>**config.ru**</DNT>) y la configuración stack de middleware de Rails:

<CollapserGroup>
  <Collapser
    id="rack_builder"
    title="Rack::Builder"
  >
    Los middlewares en su archivo <DNT>**config.ru**</DNT> se configuran usando `Rack::Builder`. Para que el agente Ruby utilice middlewares de `Rack::Builder`, su aplicación debe ejecutar la versión 1.1.0 o superior de la gema `rack` . Este es el uso más común de middlewares con Sinatra o aplicación pura-rack.
  </Collapser>

  <Collapser
    id="rails_middlewares"
    title="Middleware de Rails"
  >
    Rails usa su propia clase (`ActionDispatch::MiddlewareStack`) en lugar de `Rack::Builder` para configurar middlewares. Incluso si no ha agregado middleware explícitamente a su aplicación Rails, muchos componentes del propio Rails se implementan como middleware, por lo que los datos del middleware aparecerán de forma predeterminada.

    El agente Ruby instrumentó automáticamente los middlewares agregados a través de `ActionDispatch::MiddlewareStack` en <DNT>**Rails 3.0 or higher**</DNT>. Para obtener más información sobre la configuración de middlewares con Rails, consulte la [guía de Ruby on Rails](http://guides.rubyonrails.org/rails_on_rack.html).
  </Collapser>
</CollapserGroup>

## Ver datos de middleware [#viewing_middleware_data]

Puede ver datos de middleware en APM.

<CollapserGroup>
  <Collapser
    id="apm-overview"
    title="En la página Resumen de APM"
  >
    El gráfico principal de [la página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/applications-overview-dashboard)de su aplicación incluye una barra violeta que muestra el tiempo promedio por solicitud invertido en todos los middlewares de Rack para su aplicación.

    <img
      title="web_transactions.png"
      alt="web_transactions.png"
      src="/images/apm_screenshot-crop_web-transactions.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Summary:**</DNT> El tiempo del middleware aparece en color violeta en el cuadro de descripción general principal de su aplicación.
    </figcaption>
  </Collapser>

  <Collapser
    id="apm-transactions"
    title="En la página de transacciones de APM"
  >
    También puede ver el tiempo de middlewares individuales para un nombre de transacción específico en [la página APM<DNT>**Transactions**</DNT> ](/docs/apm/applications-menu/monitoring/transactions-page)de su aplicación.

    <img
      title="transactions_page.png"
      alt="transactions_page.png"
      src="/images/apm_screenshot-full_transactionspagesummary.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Monitor > Transactions > (selected transaction) > Trace details:**</DNT> A continuación se muestra un ejemplo de tiempo de middleware para una transacción seleccionada para su aplicación.
    </figcaption>
  </Collapser>

  <Collapser
    id="apm-trace"
    title="En APM traza de la transacción resumen"
  >
    La traza de la transacción también captura información detallada de llamadas de middleware.

    <img
      title="trace_summary.png"
      alt="trace_summary.png"
      src="/images/apm_screenshot-full_trace-summary.webp"
    />

    <figcaption>
      <DNT>**APM > (selected application) > Monitor > Transactions > (selected transaction trace):**</DNT> A continuación se muestra un ejemplo de detalles de middleware en una traza de la transacción.
    </figcaption>
  </Collapser>
</CollapserGroup>

## Deshabilitar la instrumentación del rack [#disabling]

Si no desea utilizar middlewares de Rack, puede desactivar la instrumentación de middleware de Rack con la configuración [`disable_middleware_instrumentation`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration) . También puedes [ignorar transacciones específicas](/docs/agents/ruby-agent/installation-configuration/ignoring-specific-transactions).

## Instalación manual del middleware del agente Ruby [#manual]

La implementación del agente Ruby de la característica [de rastreo multiaplicación](/docs/apm/traces/cross-application-traces/cross-application-tracing) de New Relic utiliza instrumentación de middleware Rack para leer y escribir encabezados HTTP que son necesarios para pasar información entre aplicaciones de monitor. Si está utilizando Sinatra, ha deshabilitado la instrumentación de middleware como se describe anteriormente y desea utilizar el seguimiento de múltiples aplicaciones, debe agregar manualmente el middleware `NewRelic::Rack::AgentHooks` a su stack de middleware.

<Callout variant="important">
  A partir de la versión 8.0.0, el rastreo de múltiples aplicaciones está obsoleto en favor de [rastreo distribuido](/docs/distributed-tracing/enable-configure/language-agents-enable-distributed-tracing/). Cuando está habilitado, rastreo distribuido se configura automáticamente para todas las aplicaciones basadas en rack sin necesidad de middleware adicional.

  Si desea continuar utilizando el rastreo multiaplicación, deberá [actualizar su configuración](/docs/agents/ruby-agent/features/cross-application-tracing-ruby#configuration).
</Callout>

## Instrumentación manual en rack [#manual_instrumentation]

Las versiones anteriores del agente Ruby admitían middlewares Rack instrumentados manualmente a través del módulo `NewRelic::Agent::Instrumentation::Rack` . Esta instrumentación se eliminó y no se garantiza que funcione en la versión 4.0.0 o superior del agente Ruby. Esta forma de instrumentación manual es innecesaria con la instrumentación automática de middleware. Le recomendamos que elimine las referencias a este módulo de su código después de actualizar a 3.9.0 o superior.
