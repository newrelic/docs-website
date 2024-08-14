---
title: Atributo del agente Ruby
tags:
  - Agents
  - Ruby agent
  - Attributes
metaDescription: A summary of attributes captured by New Relic's Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

[Los atributos](/docs/features/agent-attributes) son pares de valores principales que contienen información que determina las propiedades de un evento o transacción. Estos pares de valores principales se pueden ver dentro de la traza de la transacción en APM, errores de traza en APM, evento de transacción en el tablero y vistas de página en el tablero. Puedes personalizar exactamente qué atributo se enviará a cada uno de estos destinos.

Esta configuración de atributos se aplica a la versión 3.12.0 o superior del agente Ruby.

## Atributo del agente Ruby [#attributes]

La siguiente tabla enumera los atributos que el agente Ruby puede capturar automáticamente:

<CollapserGroup>
  <Collapser
    id="httpResponseCode"
    title="httpResponseCode"
  >
    El código de estado de respuesta para una solicitud web. Valores predeterminados:

    * Traza de la transacción: Habilitado

    * Recolector de errores (errores de traza): Habilitado

    * Evento de transacción: Habilitado

    * Vistas de página (<InlinePopover type="browser"/>): no disponible

      <DNT>**Note:**</DNT> El atributo `httpResponseCode` (valor de cadena) está obsoleto a partir de la versión 6.12.0 del agente. En su lugar, se debe utilizar `http.statusCode` (valor entero).
  </Collapser>

  <Collapser
    id="requestHeadersReferer"
    title="request.headers.referer"
  >
    El encabezado de referencia HTTP, si está presente (menos la cadena de consulta). Valores predeterminados:

    * Traza de la transacción: Disabled
    * Recolector de errores (errores de traza): Habilitado
    * Evento de transacción: Deshabilitado
    * Vistas de página (monitoreo de navegador): No disponible
  </Collapser>

  <Collapser
    id="requestParameters"
    title="request.parameters.*"
  >
    Los parámetros de solicitud HTTP están asociados con la transacción. Disponible únicamente para aplicaciones Rails, Sinatra, Roda y Grape. Valores predeterminados:

    * Traza de la transacción: Disabled
    * Recolector de errores (errores de traza): Deshabilitado
    * Evento de transacción: Deshabilitado
    * Vistas de página (monitoreo de navegador): Deshabilitado
  </Collapser>

  <Collapser
    id="jobResqueArguments"
    title="job.resque.args.*"
  >
    Argumentos de trabajo pasados al trabajador de Resque. Los argumentos transmitidos a los trabajadores de Resque son posicionales. Estos argumentos se almacenan como claves del formato `job.resque.args.<position>` donde la posición es el índice del argumento del método `perform` . Por ejemplo, un trabajo Resque que toma dos argumentos tendrá las claves `job.resque.args.0` y `job.resque.args.1`. Valores predeterminados:

    * Traza de la transacción: Disabled

    * Recolector de errores (errores de traza): Deshabilitado

    * Evento de transacción: Deshabilitado

    * Vistas de página (monitoreo de navegador): No disponible

      <DNT>**Note:**</DNT> La propiedad `resque.capture_params` está en desuso. Sin embargo, si se establece en `true`, permitirá la captura de argumentos de Resque para errores de traza de la transacción y traza.
  </Collapser>

  <Collapser
    id="jobSidekiqArguments"
    title="job.sidekiq.args.*"
  >
    Argumentos laborales pasados al trabajador de Sidekiq. Los argumentos transmitidos a los trabajadores de Sidekiq son posicionales. Estos argumentos se almacenan como claves del formato `job.sidekiq.args.<position>` donde la posición es el índice del argumento del método `perform` . Por ejemplo, un trabajo de Sidekiq que toma dos argumentos tendrá las claves `job.sidekiq.args.0` y `job.sidekiq.args.1`. Valores predeterminados:

    * Traza de la transacción: Disabled

    * Recolector de errores (errores de traza): Deshabilitado

    * Evento de transacción: Deshabilitado

    * Vistas de página (monitoreo de navegador): No disponible

      <DNT>**Note:**</DNT> La propiedad `sidekiq.capture_params` está en desuso. Sin embargo, si se establece en `true`, permitirá la captura de argumentos de Sidekiq para errores de traza de la transacción y de traza.
  </Collapser>
</CollapserGroup>

## Agregar atributo personalizado [#add-custom-attributes]

Para capturar atributos personalizados adicionales de su aplicación, use `NewRelic::Agent.add_custom_attributes`. Para obtener referencia completa, consulte [Recopilación de atributos personalizados](/docs/apm/other-features/attributes/collecting-custom-attributes#ruby-att). Valores predeterminados:

* Traza de la transacción: Habilitado
* Recolector de errores (errores de traza): Habilitado
* Evento de transacción: Habilitado
* Vistas de página (monitoreo de navegador): Deshabilitado

<Callout variant="caution">
  Si desea consultar su parámetro o atributo personalizado, evite utilizar cualquiera de los [términos reservados](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words) para nombrarlos.
</Callout>

## Actualización del agente Ruby [#upgrading]

Al actualizar al agente Ruby <DNT>**3.12.0**</DNT> o superior, actualice su configuración <DNT>**newrelic.yml**</DNT> .
