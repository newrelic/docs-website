---
title: 'Rastreo distribuido: Guía de planificación'
tags:
  - Understand dependencies
  - Distributed tracing
  - Get started
metaDescription: Enabling New Relic distributed tracing impacts some APM features.
freshnessValidatedDate: never
translationType: machine
---

rastreo distribuido está habilitado de forma predeterminada en muchos de nuestros productos, pero si planea implementarlo en un sistema distribuido grande, le recomendamos revisar los pasos [de planificación](#rollout) a continuación.

Además, si ha estado usando versiones anteriores del agente <InlinePopover type="apm"/>y no ha estado usando rastreo distribuido, le recomendamos revisar [la característica Impacto en APM](#changes) antes de implementar rastreo distribuido.

## Planifica tu lanzamiento [#rollout]

Si está habilitando rastreo distribuido para sistemas distribuidos grandes, aquí tiene algunos consejos:

* Si actualmente es usuario de APM, consulte [Impacto en la característica de APM](#changes).

* Determine las solicitudes que son más importantes para su negocio, o las que tienen más probabilidades de requerir análisis y resolución de problemas, y [habilite el rastreo distribuido](#enable) para esos servicios. Habilite el seguimiento de servicios aproximadamente al mismo tiempo para que pueda medir más fácilmente qué tan completa está su traza de extremo a extremo.

* Cuando miras la traza en la [UIdel rastreo distribuido](/docs/apm/distributed-tracing/ui-data/understand-use-distributed-tracing-data), verás intervalos en la traza para llamadas externas a otros servicios. Luego, podrás [habilitar rastreo distribuido](#enable) para cualquiera de esos servicios que desees. Si un servicio es bastante independiente y no se utiliza con frecuencia en contexto con otros servicios, es posible que no desee habilitar rastreo distribuido para él.

  Aquí hay una representación visual de dicha implementación gradual:

  <img
    title="Diagram showing a roll-out strategy for distributed tracing."
    alt="Diagram showing a roll-out strategy for distributed tracing."
    src="/images/distributed-tracing_diagram_distributed-tracing-rollout.webp"
  />

* Si está utilizando <InlinePopover type="apm"/>para un servicio monolítico grande, puede haber muchos intervalos de subprocesos por traza y [los límites de APM](/docs/distributed-tracing/ui-data/understand-use-distributed-tracing-ui/#rules-limits) pueden dar como resultado menos trazas de las esperadas. Puede resolver esto utilizando la instrumentación del agente APM para deshabilitar la presentación de informes de datos sin importancia.

* Rastreo distribuido funciona [propagando la información del encabezado](/docs/distributed-tracing/concepts/how-new-relic-distributed-tracing-works/#headers) de un servicio a otro en una ruta de solicitud. Algunos servicios pueden comunicarse a través de un proxy u otro servicio intermediario que no propaga automáticamente el encabezado. En ese caso, debe configurar ese proxy para que permita que el valor del encabezado `newrelic` se propague desde el origen al destino.

## Impacto en la característica APM [#changes]

Nuestro rastreo distribuido mejora la [característica de rastreo multiaplicación](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces) anterior de APM. Éstos son algunos de los beneficios clave:

* Vea más detalles de la actividad entre servicios y una traza de extremo a extremo más completa.
* Filtrar y consultar traza, así como realizar gráficos personalizados.
* Vea la traza completa incluso cuando las llamadas cruzan los límites de la cuenta de una organización.
* Consulte [Introducción al rastreo distribuido](/docs/intro-distributed-tracing) para conocer más características.

[Habilitar rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing#enable) puede afectar algunas <InlinePopover type="apm"/>características que usas actualmente. Estos cambios afectan solo el monitor de aplicaciones por agente que tiene habilitado rastreo distribuido; no se aplican a nivel de cuenta.

Es posible que proporcionemos compatibilidad con versiones anteriores de algunas o todas las características afectadas en versiones futuras. Por ahora, debes comprender los siguientes cambios antes de habilitar rastreo distribuido:

<CollapserGroup>
  <Collapser
    id="txn-trace-changes"
    title="UI de traza de la transacción muestra URL de servicio, no enlaces de transacción"
  >
    Cuando rastreo distribuido está habilitado para una aplicación, la UI traza de la transacción ya no tendrá el nombre de la transacción ni el enlace para el servicio llamado (ver captura de pantalla a continuación). Esto será reemplazado por la URL del servicio llamado.

    <img
      title="distributed-tracing_screenshot-full_transaction-trace-UI.png"
      alt="Distributed tracing - Transaction trace effects"
      src="/images/distributed-tracing_screenshot-full_transaction-trace-UI.webp"
    />

    <img
      title="distributed-tracing_screenshot-crop_trace-name-change-UI.png"
      alt="distributed-tracing_screenshot-crop_trace-name-change-UI.png"
      src="/images/distributed-tracing_screenshot-crop_trace-name-change-UI.webp"
    />

    <figcaption>
      <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions > (select a transaction trace)**</DNT>: Esto muestra la UI de la traza de la transacción antes de habilitar el rastreo distribuido, con un enlace a la transacción asociada. Con rastreo distribuido habilitado mostrará la URL del servicio.
    </figcaption>

    Si desea obtener más detalles sobre la actividad de la traza, debe ir a la página UI <DNT>**Distributed tracing**</DNT> y examinar esa traza.
  </Collapser>

  <Collapser
    id="cat-disabled"
    title="El rastreo multiaplicación estará deshabilitado."
  >
    Habilitar rastreo distribuido deshabilitará la característica [de rastreo multiaplicación](/docs/apm/transactions/cross-application-traces/introduction-cross-application-traces) . rastreo distribuido es una versión mejorada del rastreo multiaplicación y solo se puede habilitar una a la vez.
  </Collapser>

  <Collapser
    id="maps-no-browser-mobile"
    title="Impactos relacionados con el monitoreo de móviles"
  >
    Los impactos relacionados con APMincluyen:

    * Cuando rastreo distribuido está habilitado para una entidad de monitor APM, legacy [los mapas de servicios](/docs/understand-dependencies/understand-system-dependencies/service-maps/introduction-service-maps) no mostrarán el monitor de aplicación antes del

      <InlinePopover type="mobile"/>

      .

    * La característica [de profundización](/docs/mobile-monitoring/mobile-monitoring-ui/network-pages/http-requests-page#details) del legacy servidor de aplicaciones de la página de solicitudes HTTP móviles UI no está disponible.
  </Collapser>
</CollapserGroup>

## Habilitar rastreo distribuido [#enable]

El uso del rastreo distribuido requiere una cuenta New Relic. Si aún no lo ha hecho, cree su cuenta New Relic gratuita a continuación para comenzar a monitorear sus datos hoy.

<InlineSignup/>

Si conoce el impacto de la característica <InlinePopover type="apm"/>y ha pensado en su implementación, está listo para configurar rastreo distribuido. Ver las [opciones de configuración](/docs/distributed-tracing/concepts/quick-start).
