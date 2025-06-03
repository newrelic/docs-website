---
title: Sin datos con Unicornio
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'Include the preload_app true directive in your Unicorn configuration for New Relic''s Ruby agent, and then do a clean stop and restart.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Si no ve datos con Unicorn, siga estos procedimientos según la versión de su agente New Relic Ruby.

## Solución

Si está utilizando la versión 3.8.0 o superior del agente Ruby, no debería necesitar realizar ninguna configuración adicional. Si está utilizando un [frameworkweb compatible](/docs/ruby/supported-frameworks), el agente debería funcionar de inmediato independientemente de su configuración de Unicorn.

Si está utilizando una versión del agente Ruby <DNT>**prior to 3.8.0**</DNT> con Unicorn, deberá realizar una de las siguientes acciones para obtener informes de datos:

<CollapserGroup>
  <Collapser
    id="upgrade"
    title="Actualice a newrelic_rpm 3.8.0 o superior"
  >
    Como se señaló anteriormente, las versiones 3.8.0 o superiores de la gema newrelic_rpm deberían funcionar automáticamente correctamente independientemente de la configuración de su unicornio.
  </Collapser>

  <Collapser
    id="upload"
    title={<>Subir <InlineCode>preload_app true</InlineCode></>}
  >
    Utilice la directiva `preload_app true` en su archivo de configuración de Unicorn. Para obtener más información, consulte la [documentación de Unicorn para esta configuración](http://unicorn.bogomips.org/Unicorn/Configurator.html#method-i-preload_app). Debes asegurarte de que Unicorn vea tu archivo de configuración especificando la opción `-c <path>` en tu invocación `unicorn` (usuario de Heroku: esto estará en tu `Procfile`).

    <Callout variant="tip">
      La directiva es "preload_app true", no "preload_app = true". El formulario con el signo igual fallará silenciosamente.
    </Callout>
  </Collapser>

  <Collapser
    id="manual-start"
    title="Iniciar manualmente el agente"
  >
    Si no desea utilizar `preload_app true`, puede llamar manualmente al controlador del agente New Relic Ruby para bifurcar servidores web desde un archivo inicializador en `` config/initializers` ``:

    ```
    # Ensure the agent is started using Unicorn.
    # This is needed when using Unicorn and preload_app is not set to true.
    # See https://docs.newrelic.com/docs/ruby/no-data-with-unicorn 
    if defined?(Unicorn) && File.basename($0).start_with?('unicorn') 
       ::NewRelic::Agent.manual_start() 
       ::NewRelic::Agent.after_fork(:force_reconnect => true) 
    end
    ```

    Para que los cambios surtan efecto, realice un reinicio "limpio" (parada y arranque completos). Es posible que realizar un reinicio normal de Unicorn con `SIGUSR2` no inicialice correctamente la gema.
  </Collapser>
</CollapserGroup>
