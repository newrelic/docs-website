---
title: Guía de migración del agente Ruby 8.x a 9.x
tags:
  - Agents
  - Ruby agent
  - Getting started
freshnessValidatedDate: never
translationType: machine
---

Mientras se prepara para migrar, revise estos cambios importantes entre las series 8.x y 9.x del agente Ruby. También conocerá los problemas que podría enfrentar durante la actualización, lo que garantizará una migración exitosa a la versión 9.x.

## Resumen [#summary]

Los principales cambios incluyen:

* [Se eliminaron todas las opciones de configuración obsoletas.](#removed_config)
* [Se eliminó el soporte para Ruby 2.2 y 2.3.](#ruby_2223)
* [Seguimiento de subprocesos habilitado de forma predeterminada](#thread_tracing)
* [Se eliminó la instrumentación obsoleta para gemas.](#removed_gem_instrumentation)
* [Método API actualizado `set_transaction_name`](#set_transaction_name)
* [Se eliminaron métodos API obsoletos.](#removed_api_methods)

Consulte el [hito de 9.0](https://github.com/newrelic/newrelic-ruby-agent/milestone/28?closed=1) para obtener más información.

## Se eliminó la configuración obsoleta. [#removed_config]

Hemos eliminado las siguientes opciones de configuración, por lo que ya no funcionarán. Actualice todas las configuraciones para usar los reemplazos que se enumeran a continuación y consulte nuestra [documentación de configuración](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration) para obtener más detalles.

<table>
  <thead>
    <tr>
      <th>
        Remoto
      </th>

      <th>
        Reemplazo
      </th>

      <th>
        `newrelic.yml` ejemplo
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `analytics_events.capture_attributes`
      </td>

      <td>
        `transaction_events.attributes.enabled`
      </td>

      <td>
        `transaction_events.attributes.enabled: false`
      </td>
    </tr>

    <tr>
      <td>
        `browser_monitoring.capture_attributes`
      </td>

      <td>
        `browser_monitoring.attributes.enabled`
      </td>

      <td>
        `browser_monitoring.attributes.enabled: false`
      </td>
    </tr>

    <tr>
      <td>
        `error_collector.capture_attributes`
      </td>

      <td>
        `error_collector.attributes.enabled`
      </td>

      <td>
        `error_collector.attributes.enabled: false`
      </td>
    </tr>

    <tr>
      <td>
        `resque.capture_params`
      </td>

      <td>
        `attributes.include`
      </td>

      <td>
        `attributes.include: [&#39;job.resque.args.*&#39;]`
      </td>
    </tr>

    <tr>
      <td>
        `sidekiq.capture_params`
      </td>

      <td>
        `attributes.include`
      </td>

      <td>
        `attributes.include: [&#39;job.sidekiq.args.*&#39;]`
      </td>
    </tr>

    <tr>
      <td>
        `transaction_tracer.capture_attributes`
      </td>

      <td>
        `transaction_tracer.attributes.enabled`
      </td>

      <td>
        `transaction_tracer.attributes.enabled: false`
      </td>
    </tr>

    <tr>
      <td>
        `error_collector.ignore_errors`
      </td>

      <td>
        `error_collector.ignore_classes`
      </td>

      <td>
        `error_collector.ignore_classes: [&#39;ActionController::RoutingError&#39;, &#39;CustomError&#39;]`
      </td>
    </tr>

    <tr>
      <td>
        `analytics_events.enabled`
      </td>

      <td>
        `transaction_events.enabled`
      </td>

      <td>
        `transaction_events.enabled: false`
      </td>
    </tr>

    <tr>
      <td>
        `analytics_events.max_samples_stored`
      </td>

      <td>
        `transaction_events.max_samples_stored`
      </td>

      <td>
        `transaction_events.max_samples_stored: 1200`
      </td>
    </tr>

    <tr>
      <td>
        `disable_database_instrumentation`
      </td>

      <td>
        `disable_sequel_instrumentation`
      </td>

      <td>
        `disable_sequel_instrumentation: true`
      </td>
    </tr>

    <tr>
      <td>
        `disable_bunny`
      </td>

      <td>
        `instrumentation.bunny`
      </td>

      <td>
        `instrumentation.bunny: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_curb`
      </td>

      <td>
        `instrumentation.curb`
      </td>

      <td>
        `instrumentation.curb: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_dj`
      </td>

      <td>
        `instrumentation.delayed_job`
      </td>

      <td>
        `instrumentation.delayed_job: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_excon`
      </td>

      <td>
        `instrumentation.excon`
      </td>

      <td>
        `instrumentation.excon: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_grape`
      </td>

      <td>
        `instrumentation.grape`
      </td>

      <td>
        `instrumentation.grape: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_grape_instrumentation`
      </td>

      <td>
        `instrumentation.grape`
      </td>

      <td>
        `instrumentation.grape: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_httpclient`
      </td>

      <td>
        `instrumentation.httpclient`
      </td>

      <td>
        `instrumentation.httpcient: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_httprb`
      </td>

      <td>
        `instrumentation.httprb`
      </td>

      <td>
        `instrumentation.httprb: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_dalli`
      </td>

      <td>
        `instrumentation.memcache`
      </td>

      <td>
        `instrumentation.memcache: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_dalli_cas_client`
      </td>

      <td>
        `instrumentation.memcache`
      </td>

      <td>
        `instrumentation.memcache: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_memcache_client`
      </td>

      <td>
        `instrumentation.memcache-client`
      </td>

      <td>
        `instrumentation.memcache-client: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_memcache_instrumentation`
      </td>

      <td>
        `instrumentation.memcache`
      </td>

      <td>
        `instrumentation.memcache: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_memcached`
      </td>

      <td>
        `instrumentation.memcached`
      </td>

      <td>
        `instrumentation.memcached: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_mongo`
      </td>

      <td>
        `instrumentation.mongo`
      </td>

      <td>
        `instrumentation.mongo: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_net_http`
      </td>

      <td>
        `instrumentation.net_http`
      </td>

      <td>
        `instrumentation.net_http: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `prepend_net_instrumentation`
      </td>

      <td>
        `instrumentation.net_http`
      </td>

      <td>
        `instrumentation.net_http: prepend`
      </td>
    </tr>

    <tr>
      <td>
        `disable_puma_rack`
      </td>

      <td>
        `instrumentation.puma_rack`
      </td>

      <td>
        `instrumentation.puma_rack: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_puma_rack_urlmap`
      </td>

      <td>
        `instrumentation.puma_rack_urlmap`
      </td>

      <td>
        `instrumentation.puma_rack_urlmap: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_rack`
      </td>

      <td>
        `instrumentation.rack`
      </td>

      <td>
        `instrumentation.rack: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_rack_urlmap`
      </td>

      <td>
        `instrumentation.rack_urlmap`
      </td>

      <td>
        `instrumentation.rack_urlmap: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_redis`
      </td>

      <td>
        `instrumentation.redis`
      </td>

      <td>
        `instrumentation.redis: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_redis_instrumentation`
      </td>

      <td>
        `instrumentation.redis`
      </td>

      <td>
        `instrumentation.redis: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_resque`
      </td>

      <td>
        `instrumentation.resque`
      </td>

      <td>
        `instrumentation.resque: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_sinatra`
      </td>

      <td>
        `instrumentation.sinatra`
      </td>

      <td>
        `instrumentation.sinatra: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_rake`
      </td>

      <td>
        `instrumentation.rake`
      </td>

      <td>
        `instrumentation.rake: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_rake_instrumentation`
      </td>

      <td>
        `instrumentation.rake`
      </td>

      <td>
        `instrumentation.rake: disabled`
      </td>
    </tr>

    <tr>
      <td>
        `disable_typhoeus`
      </td>

      <td>
        `instrumentation.typhoeus`
      </td>

      <td>
        `instrumentation.typhoeus: disabled`
      </td>
    </tr>
  </tbody>
</table>

## Se eliminó el soporte para Ruby 2.2 y 2.3. [#ruby_2223]

Ruby 2.2 y 2.3 ya no son compatibles con el agente Ruby. Para continuar usando la última versión del agente Ruby, actualice a Ruby 2.4.0 o superior.

New Relic continúa admitiendo ciertas versiones anteriores de Ruby incluso después de que hayan salido de la ventana de mantenimiento oficialmente admitida proporcionada por el equipo de desarrollo del lenguaje Ruby (equipo Ruby). Por ejemplo, a partir del 31 de marzo de 2023, la versión más antigua de Ruby admitida por el equipo de Ruby será la versión 3.0, mientras que con la versión 9.0 del agente Ruby, las versiones 2.4 y superiores de Ruby aún son compatibles. Para obtener más información sobre el soporte oficial del equipo Ruby para las versiones de Ruby, consulte [Ramas de mantenimiento de Ruby](https://www.ruby-lang.org/en/downloads/branches/).

## Seguimiento de subprocesos habilitado de forma predeterminada [#thread_tracing]

La opción de configuración `instrumentation.thread.tracing` ahora está habilitada de forma predeterminada. Esta configuración permite al agente observar el código que ocurre dentro de los subprocesos. Ruby agente 9.0 registra código instrumentado dentro de subprocesos y lo asocia con la transacción actual.

Si actualmente utiliza instrumentación de subprocesos personalizada, este puede ser un cambio importante. Ya no se iniciarán nuevas transacciones dentro de los hilos si ya existe uno.

Si está utilizando la UI anterior, es posible que vea segmentos denominados "#" en sus gráficos de transacciones. Al mirar la tabla de segmentos, el nombre completo es "Subproceso: #". Estos segmentos se refieren a la instrumentación de hilos. Consulte [el número 1859](https://github.com/newrelic/newrelic-ruby-agent/issues/1859#issuecomment-1466774812) para obtener más detalles.

## Se eliminó la instrumentación obsoleta. [#removed_gem_instrumentation]

Las siguientes gemas instrumentadas habían quedado obsoletas anteriormente y ahora ya no son compatibles:

* Actúa como Solr

* Authlogic

* DataMapper

* Rainbows

* Sunspot

  Las versiones de las siguientes tecnologías habían quedado obsoletas anteriormente y ya no son compatibles.

* Passenger: 2.2.x - 4.0.x

* Puma: 2.0.x

* Grape: 0.2.0

* Padrino: 0.14.x

* Rails: 3.2.x

* Sinatra: 1.4.x, 1.5.x

* Mongo: 1.8.x - 2.3.x

* Sequel: 3.37.x, 4.0.x

* Delayed_Job: 2.0.x - 4.0.x

* Sidekiq: 4.2.x

* Excon: por debajo de 0,55,0

* Cliente HTTP&#x3A; 2.2.0 - 2.8.0

* HttpRb: 0.9.9 - 2.2.1

* Typhoeus: 0.5.3 - 1.2.x

* Bunny: 2.0.x - 2.6.x

* ActiveMerchant: 1.25.0 - 1.64.x

## Método API actualizado `set_transaction_name` [#set_transaction_name]

Cuando se llama al método `NewRelic::Agent.set_transaction_name` , ahora siempre cambiará el nombre y la categoría de la transacción actualmente en ejecución por lo que se pasa al método. Este es un cambio con respecto a las versiones anteriores del agente.

Anteriormente, si se llamaba `set_transaction_name` con un nuevo nombre de transacción y una nueva categoría que no coincidía con la categoría ya asignada a una transacción, ni el nuevo nombre ni la categoría se guardaban en la transacción.

Si se llama a este método en una situación en la que anteriormente se ignoraba debido a diferencias de categoría, ahora cambiará el nombre y la categoría de la transacción.

## Método API eliminado [#removed_api_methods]

Se ha eliminado el método API obsoleto `NewRelic::Agent.disable_transaction_tracing` . En su lugar, utilice `NewRelic::Agent#ignore_transaction` para deshabilitar el registro de la transacción actual o `NewRelic::Agent.disable_all_tracing` para generar un bloque sin recopilar ninguna métrica o traza en ninguna de las llamadas posteriores.
