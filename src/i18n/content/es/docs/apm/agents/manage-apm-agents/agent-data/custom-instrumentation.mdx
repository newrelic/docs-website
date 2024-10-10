---
title: Instrumentación personalizada
tags:
  - Agents
  - Manage APM agents
  - Agent data
metaDescription: 'For an overview of custom instrumentation, including examples, best practices, and a quick reference by New Relic agent, start here.'
freshnessValidatedDate: never
translationType: machine
---

New Relic recopila y reporta información sobre [transacciones web](/docs/apm/transactions/intro-transactions/transactions-new-relic-apm) y [transacciones no web](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions), como tareas en segundo plano. New Relic normalmente produce información completa de forma automática, sin necesidad de modificar el código de su aplicación. Sin embargo, si no utiliza un [frameworkcompatible](/docs/agents/manage-apm-agents/installation/compatibility-requirements), es posible que deba agregar instrumentación personalizada.

La instrumentación personalizada también es útil para:

* Añade detalles a tu [traza de la transacción](/docs/apm/transactions/transaction-traces/introduction-transaction-traces#find-view).
* Bloquear instrumentación en transacciones seleccionadas que no desea instrumentar.
* Instrumento una parte de su código que New Relic simplemente no está captando.

La instrumentación personalizada que crea una nueva transacción recopila tanto [el intervalo de tiempo de métrica](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#timeslice-data) como los datos [del evento](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#event-data) . La instrumentación personalizada para transacciones ya instrumentadas recopila solo datos de intervalo de tiempo de métrica.

<Callout variant="important">
  No utilice corchetes `[suffix]` al final del nombre de su transacción. New Relic elimina automáticamente los corchetes del nombre. En su lugar, utilice paréntesis `(suffix)` u otros símbolos si es necesario.
</Callout>

## Cuándo utilizar instrumentación personalizada [#choosing]

La instrumentación personalizada le permite realizar un seguimiento de las interacciones que no son capturadas por la instrumentación automática de New Relic. La instrumentación personalizada también puede agregar detalles a su [traza de la transacción](/docs/traces/transaction-traces), para ayudarlo a identificar problemas clave.

New Relic recopila datos de muchos marcos automáticamente. Si está utilizando un [frameworkcompatible](/docs/agents/manage-apm-agents/installation/compatibility-requirements), no debería necesitar instrumentación personalizada para recopilar segmentos de tiempo, eventos y trazas métricas.

Sin embargo, si se encuentra con alguna de estas situaciones, es posible que necesite instrumentación personalizada:

* Las transacciones no aparecen en la UI.
* La traza de la transacción incluye grandes bloques de tiempo de código de aplicación sin detalles completos.

Si está utilizando un [frameworkcompatible](/docs/agents/manage-apm-agents/installation/compatibility-requirements), pero no ve la transacción en la [página APM<DNT>**Transactions**</DNT> ](/docs/applications-menu/transactions-dashboard), obtenga soporte en [support.newrelic.com](https://support.newrelic.com) para asegurarse de que la instrumentación framework esté funcionando.

## Implementar instrumentación personalizada [#implementing]

Cada agente implementa instrumentación personalizada de manera diferente:

<CollapserGroup>
  <Collapser
    id="go"
    title="Instrumentación personalizada de Go"
  >
    Debido a que las aplicaciones Golang se ejecutan desde un archivo binario nativo compilado, toda la instrumentación de New Relic debe realizarse manualmente. Consulte los segmentos [instrumento Go transacción](/docs/agents/go-agent/get-started/instrument-go-transactions) e [instrumento Go](/docs/agents/go-agent/get-started/instrument-go-transactions) para saber cómo configurar la instrumentación en su aplicación Go.
  </Collapser>

  <Collapser
    id="java"
    title="Instrumentación Java personalizada"
  >
    El agente de Java de New Relic admite dos métodos de instrumentación personalizada:

    * [Anotación](/docs/java/custom-instrumentation-by-annotation): agregue <DNT>**@Trace**</DNT> anotaciones a su código para garantizar que New Relic instrumente métodos específicos. La anotación es fácil de implementar si solo se instrumentan algunos métodos. Para instrumentación más compleja, o si no puede modificar su código, utilice XML.

    * [XML](/docs/java/custom-instrumentation-by-xml): defina los métodos que desea que New Relic monitor en un archivo XML. La instrumentación XML es flexible y no requiere editar el código, pero es más difícil de solucionar que la anotación.

      Para obtener más información, consulte [Instrumentación Java personalizada](/docs/java/custom-instrumentation-for-java).
  </Collapser>

  <Collapser
    id="dotnet"
    title="Instrumentación .NET personalizada"
  >
    El agente .NET de New Relic admite dos métodos de instrumentación personalizada:

    * Atributo: anota tu código con llamadas API del agente a métodos específicos del instrumento. La anotación es fácil de implementar, pero requiere editar el código fuente.

    * XML: Defina los métodos que desea que New Relic instrumente en un archivo XML. La instrumentación XML no requiere modificar su código fuente, pero es más complicada de crear y mantener actualizada que la instrumentación de atributos.

      Para obtener más información, consulte [Introducción a la instrumentación personalizada de .NET](/docs/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation).
  </Collapser>

  <Collapser
    id="nodejs"
    title="Instrumentación personalizada de Node.js"
  >
    El agente Node.js de New Relic utiliza la API de llamada para instrumentación personalizada. Para obtener más información, consulte [Instrumentación personalizada de Node.js.](/docs/agents/nodejs-agent/supported-features/nodejs-custom-instrumentation)
  </Collapser>

  <Collapser
    id="php"
    title="Instrumentación PHP personalizada"
  >
    El agente PHP de New Relic utiliza la API de llamada para instrumentación personalizada. Para obtener más información, consulte [Instrumentación PHP personalizada](/docs/php/php-custom-instrumentation).
  </Collapser>

  <Collapser
    id="python"
    title="Instrumentación Python personalizada"
  >
    El agente Python de New Relic admite dos métodos de instrumentación personalizada:

    * [Archivo de configuración](/docs/python/python-instrumentation-by-config-file): utilice el archivo de configuración del agente para especificar las funciones y métodos que desea instrumentar. El archivo de configuración del agente es fácil de configurar y no requiere que modifique su código. Sin embargo, es menos flexible que la API de llamada.

    * [llamada API](/docs/python/python-instrumentation-by-api): Edite su código para llamar a la API New Relic Python. La API es más flexible que la instrumentación a través del archivo de configuración, pero requiere que modifiques tu código.

      Para obtener más información, consulte [Instrumentación personalizada de Python](/docs/python/python-custom-instrumentation).
  </Collapser>

  <Collapser
    id="ruby"
    title="Ruby instrumentación personalizada"
  >
    El agente Ruby de New Relic utiliza la API de llamada para definir métodos de destino y agregarles rastreador de transacciones. Para obtener más información, consulte [Instrumentación personalizada de Ruby](/docs/ruby/ruby-custom-instrumentation).
  </Collapser>
</CollapserGroup>

## Problemas de agrupación [#mgi]

Se produce un [problema de agrupación de métricas](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues) cuando una cuenta envía demasiados intervalos de tiempo de métricas con nombres diferentes a New Relic, y esas transacciones individuales en la web no se agregan correctamente. Por ejemplo, en lugar de un único nombre de métrica `/user/controlpanel/` , es posible que vea `/user/controlpanel/alice`, `/user/controlpanel/bob` y `/user/controlpanel/carol`.

La instrumentación personalizada puede causar problemas de agrupación métrica si introduce demasiados intervalos de tiempo métricos con nombres únicos que New Relic no puede agrupar de manera efectiva. Si envía miles de métricas, New Relic puede aplicar reglas para reducir el número de transacciones.
