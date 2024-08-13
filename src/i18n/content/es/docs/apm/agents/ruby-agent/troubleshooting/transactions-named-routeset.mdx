---
title: 'Transaction labelled `Middleware/Rack/ActionDispatch::Routing::RouteSet#call`'
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'Find out what to do if you see transactions named Middleware/Rack/ActionDispatch::Routing::RouteSet#call in your APM UI.'
freshnessValidatedDate: '2023-11-13T00:00:00.000Z'
translationType: machine
---

## Problema [#problem]

Ve transacciones en la UI de APM denominada `Middleware/Rack/ActionDispatch::Routing::RouteSet#call`, pero no está seguro de cuáles son.

## Causa [#cause]

La transacción con el nombre `Middleware/Rack/ActionDispatch::Routing::RouteSet#call` representa una ruta en tu aplicación Rails que no ha sido instrumentada. Dado que el middleware Rails está instrumentado, New Relic puede capturar el tiempo dedicado a la transacción, pero no puede proporcionar ningún detalle más allá de eso.

Hay una variedad de situaciones que pueden llevar a una transacción llamada `Middleware/Rack/ActionDispatch::Routing::RouteSet#call`. Proporcionamos dos soluciones para las causas más comunes de este tipo de transacción.

## Solución [#solution]

<Tabs>
  <TabsBar>
    <TabsBarItem id="route-gem">
      Agregar instrumentación personalizada a una gema sin instrumentos
    </TabsBarItem>

    <TabsBarItem id="route-controller">
      Instrumenta tu controlador directamente
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="route-gem">
      Si una ruta en su aplicación pasa a través de middleware instrumentado hasta una gema no instrumentada, entonces deberá agregar instrumentación personalizada a esa gema para ver datos más específicos sobre la transacción. Para agregar instrumentación personalizada, recomendamos leer nuestro [documento de instrumentación personalizada de Ruby](/docs/agents/ruby-agent/installation-configuration/ruby-custom-instrumentation).

      Agregar instrumentación personalizada a su aplicación es la mejor manera de obtener más detalles sobre estas transacciones.
    </TabsPageItem>

    <TabsPageItem id="route-controller">
      El agente Ruby instrumentó controladores insertando instrumentación en `ActionController::Base`. Sin embargo, si una ruta pasa por un controlador que no hereda `ActionController::Base`, entonces ese controlador necesita instrumentación. Instrumente su controlador directamente agregando esto a su clase de controlador:

      ```ruby
      include NewRelic::Agent::Instrumentation::ControllerInstrumentation
      ```
    </TabsPageItem>
  </TabsPages>
</Tabs>
