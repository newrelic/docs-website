---
title: Gemas incompatibles
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: A few incompatible gems and their workarounds with the New Relic Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Estás utilizando una gema Ruby que es incompatible con el agente New Relic Ruby.

## Solución

Si bien New Relic se esfuerza por ser compatible con todas las gemas, hay algunas que no funcionarán correctamente con el agente Ruby. Esto detalla gemas incompatibles y soluciones alternativas conocidas.

<CollapserGroup>
  <Collapser
    id="db-charmer"
    title="db-charmer"
  >
    <DNT>**Problem**</DNT>: La gema [db-charmer](http://rubygems.org/gems/db-charmer) tiene incompatibilidades en cuanto a cómo parchea los controladores Rails.

    <DNT>**Solution**</DNT>: Fuerza la carga y el inicio de New Relic antes de que se llame a `DbCharmer.enable_controller_magic!` . Por ejemplo, agregue lo siguiente a su <DNT>**config/application.rb**</DNT>:

    ```
    require 'newrelic_rpm'
    NewRelic::Agent.manual_start
    DbCharmer.enable_controller_magic!
    ```
  </Collapser>

  <Collapser
    id="escape_utils"
    title="escape_utils"
  >
    <DNT>**Problem:**</DNT> La gema [escape_utils](https://github.com/brianmario/escape_utils) es incompatible con la instrumentación automática para la característica de tiempo de carga de página de New Relic (a veces denominada monitoreo de usuarios reales o RUM). Debido a la forma en que `escape_utils` parchea Rack, es posible que se escape toda su respuesta HTML.

    <DNT>**Solution:**</DNT> Si ve la fuente HTML en lugar de la página representada, use cualquiera de estas opciones:

    * Retire la gema `escape_utils` .
    * Utilice [instrumentación manual](/docs/agents/ruby-agent/features/page-load-timing-ruby#manual_instrumentation) para sincronizar la carga de la página.
  </Collapser>

  <Collapser
    id="right_http_connection"
    title="right_http_connection"
  >
    <DNT>**Problem:**</DNT> Si la gema [right_http_connection](http://rubygems.org/gems/right_http_connection) se carga después de `newrelic_rpm`, parchea la clase `Net::HTTP` de una manera que hace que se pase por alto la instrumentación externa de New Relic.

    <DNT>**Solution:**</DNT> Asegúrese de que `right_http_connection` sea necesario antes de `newrelic_rpm`.
  </Collapser>

  <Collapser
    id="ar-octopus"
    title="ar-octopus"
  >
    <DNT>**Problem:**</DNT> La gema [ar-octopus](https://github.com/tchandy/octopus) cambia la forma en que funciona la administración de conexiones de ActiveRecord, rompiendo la capacidad del agente Ruby para recopilar información de instancia, aplicar ofuscación específica del proveedor a la consulta y capturar planes explicativos para una consulta de base de datos de larga duración.

    <DNT>**Solution:**</DNT> No se conoce ninguna solución. Elimine la gema `ar-octopus` o continúe usándola, en cuyo caso no se capturarán los planes explicativos.
  </Collapser>
</CollapserGroup>
