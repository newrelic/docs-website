---
title: Instrumentación Roda
tags:
  - Agents
  - Ruby agent
  - Instrumented gems
metaDescription: 'As of version 9.4.0, the New Relic Ruby agent supports Roda 3.19.0 or higher.'
freshnessValidatedDate: '2023-08-15T00:00:00.000Z'
translationType: machine
---

El [agente New Relic Ruby](/docs/agents/ruby-agent/getting-started/new-relic-ruby) instrumentó automáticamente [Roda](https://roda.jeremyevans.net/) 3.19.0 y superior.

<Callout variant="important">
  La instrumentación de Roda requiere la versión 9.4.0 o superior del agente Ruby.
</Callout>

## Empezando

Para configurar su aplicación Roda con New Relic:

1. Agregue la gema `newrelic_rpm` a Gemfile y agrupe.

   ```
   gem 'newrelic_rpm'
   ```

2. En su aplicación Roda, debajo de la directiva Roda <DNT>**require**</DNT> , agregue `require 'newrelic_rpm'`. Por ejemplo:

   ```
   require 'roda'
   require 'newrelic_rpm'

   class App < Roda
     route do |r|
       r.root do
         "Hello World!"
       end
     end
   end
   ```

## Ignorando rutas

Las versiones 9.6.0 o superiores del agente Ruby admiten ignorar ciertas rutas. Para especificar estos valores, utilice el mismo estilo de rutas que utiliza para definir su aplicación Roda. Por ejemplo, para ignorar una ruta `hello_world` en una aplicación Roda, declara `newrelic_ignore '/hello_word'` fuera del bloque `route` :

```
newrelic_ignore '/hello_world'

route do |r|
  r.on '/hello_world' do
    "Hello World!"
  end
end
```

Si desea que se ignore una aplicación completa (por ejemplo, en una aplicación montada), llame a `newrelic_ignore` sin parámetro:

```
newrelic_ignore
```

Además, se admiten `newrelic_ignore_apdex` y `newrelic_ignore_enduser` .

* La llamada `newrelic_ignore_apdex` excluirá una ruta determinada de la consideración en los cálculos generales de Apdex.
* La llamada `newrelic_ignore_enduser` evitará la inyección automática del JavaScript de sincronización de carga de la página cuando se represente una ruta.

<Callout variant="important">
  Todos los métodos newrelic_ignore\* deben llamarse fuera del bloque `route` .
</Callout>

## Instrumentación en rack

Como framework basado en Rack, la instrumentación Roda requiere instrumentación Rack para funcionar correctamente. La instrumentación del bastidor está habilitada de forma predeterminada.
