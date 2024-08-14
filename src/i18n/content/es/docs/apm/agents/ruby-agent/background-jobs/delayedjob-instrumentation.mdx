---
title: 'Delayed::Job instrumentation'
tags:
  - Agents
  - Ruby agent
  - Background jobs
metaDescription: 'If jobs do not appear to be monitored in New Relic''s Delayed:Job library, review your Ruby agent''s log file.'
freshnessValidatedDate: never
translationType: machine
---

El agente Ruby tiene instrumentación integrada para la biblioteca `Delayed::Job` . No se requiere instrumentación adicional.

## Ver tareas en segundo plano [#viewing]

Siempre que la gema o el complemento del agente Ruby de New Relic se cargue antes de que se inicie el trabajador `Delayed::Job` , todas las tareas se monitorearán con el mismo nivel de detalle que las acciones del controlador. Para ver las acciones en sí:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Monitor > Transactions**
   </DNT>

   .

2. En la [página APM](/docs/apm/applications-menu/monitoring/transactions-page)

   <DNT>
     [**Transactions**](/docs/apm/applications-menu/monitoring/transactions-page)
   </DNT>

   [](/docs/apm/applications-menu/monitoring/transactions-page), seleccione

   <DNT>
     **Other transactions**
   </DNT>

   .

## Agregar atributo personalizado [#custom-attributes]

Si desea agregar un atributo personalizado a sus transacciones `Delayed::Job` , puede escribir un complemento `Delayed::Job` a través de un enlace de ciclo de vida y agregar esos atributos a la transacción para cada trabajo ejecutado.

1. Cree un complemento con la siguiente estructura:

   ```ruby
   module NewRelicInstrumenter
     class DelayedJobPlugin < Delayed::Plugin
       callbacks do |lifecycle|
         lifecycle.around(:invoke_job) do |job, *args, &block|
           # Forward the call to the next callback in the callback chain
           ::NewRelic::Agent.add_custom_attributes(
             {
               # Any custom attributes go here -- from here you can access info
               # about the job like run_at, created_at, etc
               my_custom_attribute: "my_custom_attribute_value"
             }
           )
           block.call(job, *args)
         end
       end
     end
   end
   ```

2. Agregue el complemento a `Delayed::Job` en el inicializador del archivo `config/initializers/delayed_job.rb` :

   ```ruby
   require "new_relic_instrumenter"

   Delayed::Worker.plugins << NewRelicInstrumenter::DelayedJobPlugin
   ```

## Resolución de problemas [#troubleshooting]

El agente Ruby depende de poder identificar que se está ejecutando en `Delayed::Job` para poder configurar correctamente la instrumentación. Para hacer esto, examina el nombre del script (la variable `$0` en Ruby) para ver si termina con `delayed_job`.

Si ha cambiado el nombre del script que utiliza para iniciar sus trabajadores `delayed_job` a otro, o si tiene un script personalizado con un nombre diferente, deberá decirle explícitamente al agente que está usando `Delayed::Job` configurando el `NEW_RELIC_DISPATCHER` variable de entorno a `delayed_job` al iniciar sus `Delayed::Job` trabajadores. Por ejemplo:

```bash
NEW_RELIC_DISPATCHER=delayed_job bundle exec ./script/my_custom_script
```

Si parece que los trabajos no se están supervisando, revise el archivo <DNT>**newrelic_agent.log**</DNT> generado cuando se inicia el trabajador. Debe indicar si el agente detecta `Delayed` y se comunica con el servidor. Si no encuentra un log, o si aún no puede determinar por qué los trabajos no aparecen, obtenga soporte en [support.newrelic.com](https://support.newrelic.com "El enlace se abre en una ventana nueva.").
