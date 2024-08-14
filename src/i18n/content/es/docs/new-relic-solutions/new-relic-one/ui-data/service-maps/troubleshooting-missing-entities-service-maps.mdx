---
title: 'Resolución de problemas: Falta entidad en mapas de servicios'
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

Al utilizar [mapas de servicios](/docs/understand-dependencies/understand-system-dependencies/service-maps/service-maps-new-relic-one), no puede ver el conjunto completo de entidades o las relaciones entre entidades que espera ver.

## Solución

Asegúrese de que la entidad esté siendo monitoreada con un agente. Si tiene una combinación de agentes con algunos que tienen [el rastreo distribuido](/docs/apm/distributed-tracing/getting-started/introduction-distributed-tracing) activado y otros que lo tienen desactivado, no verá las relaciones entre esos agentes. La solución para este escenario es ejecutar todos los agentes con el rastreo distribuido activado (preferido) o desactivarlo para todos los agentes. Si esto no soluciona el problema, es posible que el servicio que está intentando ver requiera instrumentación manual.

Cuando ve aplicaciones y servicios que instrumentamos automáticamente en mapas de servicios, generalmente verá datos completos y detallados para esos nodos en la UI de rastreo distribuida. Sin embargo, puede notar que algunos de estos servicios o aplicaciones faltan en los mapas de servicios.

<Callout variant="tip">
  Algunos <DNT>**browser apps**</DNT> son excepciones a esto y pueden faltar porque:

  * No se detectan relaciones de copiar y pegar agente del navegador.
  * Solo se muestran las relaciones para [el agente inyectado del navegador](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent#options) (la aplicación en la que se inyecta el agente). Las relaciones de llamadas (por ejemplo, llamadas AJAX a otras aplicaciones) no se muestran.
</Callout>

Si faltan servicios o aplicaciones, es posible que desee implementar [instrumentación personalizada](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis) de aplicación o transacción específica para ver más detalles en la traza. Algunos ejemplos de cuándo puede necesitar hacer esto:

* <DNT>
    **Transactions not automatically instrumented**
  </DNT>

  . Para asegurarse de que su aplicación se instrumente automáticamente, lea la [documentación de requisitos y compatibilidad](/docs/apm/new-relic-apm/getting-started/introduction-apm) del agente que está utilizando. Si una aplicación no se instrumenta automáticamente, o si desea agregar instrumentación de una actividad específica, consulte [instrumentación personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/#implementing).

* <DNT>
    **All Go applications**
  </DNT>

  . El agente Go, a diferencia de otros agentes, requiere instrumentación manual de su código. Para obtener instrucciones, consulte [instrumentación de una aplicación Go](/docs/agents/go-agent/instrumentation/instrument-go-transactions).

* <DNT>
    **A service doesn't use HTTP**
  </DNT>

  . Si un servicio no se comunica vía HTTP, el agente no enviará encabezados de rastreo distribuido. Este puede ser el caso de alguna aplicación no web o cola de mensajes. Para solucionar este problema, utilice las [API distribuidas por rastreo](/docs/apm/distributed-tracing/enable-configure/enable-distributed-tracing#agent-apis) para instrumentar la aplicación que llama o la que llama.
