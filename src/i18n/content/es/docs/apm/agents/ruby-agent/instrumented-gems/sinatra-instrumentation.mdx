---
title: Instrumentación Sinatra
tags:
  - Agents
  - Ruby agent
  - Instrumented gems
metaDescription: 'As of version 2.10, New Relic''s Ruby agent supports Sinatra 1.2.x or higher.'
freshnessValidatedDate: never
translationType: machine
---

El agente Ruby de New Relic funciona con [Sinatra](http://www.sinatrarb.com/) 1.2.x o superior. En la UI de New Relic, las acciones de Sinatra parecen similares a las acciones del controlador. Las acciones en la UI corresponden a la expresión de patrón utilizada para unirlas. Las operaciones HTTP no se distinguen. Todas las coincidencias se rastrean como acciones separadas.

## Empezando

Para configurar Sinatra:

1. Instale la última gema `newrelic_rpm` .

2. En su aplicación Sinatra, inmediatamente debajo de la directiva Sinatra <DNT>**require**</DNT> , agregue:

   ```
   require 'newrelic_rpm'
   ```

3. Establezca `RACK_ENV` en el entorno correspondiente a las definiciones de configuración en su archivo <DNT>**newrelic.yml**</DNT> ; por ejemplo, desarrollo, de prueba, producción, etc.

<DNT>**Note:**</DNT> El modo desarrolladores solo funciona con Rails.

## Instalación de middleware

Versiones del agente Ruby anteriores a la 3.6.3 requería la adición manual de middlewares New Relic para habilitar ciertas características, como el seguimiento de múltiples aplicaciones y <InlinePopover type="browser"/>. Para obtener más información sobre los middlewares necesarios, consulte [Middlewares en rack](/docs/ruby/rack-middlewares) o actualice al agente Ruby más reciente.

## Ignorando rutas

Versiones del agente Ruby 3.6.3 o soporte superior para ignorar ciertas rutas, similar a lo que estaba disponible anteriormente en la instrumentación del controlador Rails. Para especificar estos valores, utilice el mismo estilo de rutas que utiliza para definir su aplicación Sinatra. Por ejemplo, para ignorar una ruta `ping` en una aplicación Sinatra, incluya el siguiente código en la aplicación:

```
newrelic_ignore '/ping'

    get '/ping' do
      # ...
    end
```

Si desea que se ignore una aplicación completa (por ejemplo, en una aplicación montada), llame a `newrelic_ignore` sin parámetro:

```
newrelic_ignore
```

Además, se admiten `newrelic_ignore_apdex` y `newrelic_ignore_enduser` .

* La llamada `newrelic_ignore_apdex` excluirá una ruta determinada de la consideración en los cálculos generales de Apdex.
* La llamada `newrelic_ignore_enduser` evitará la inyección automática del JavaScript de sincronización de carga de la página cuando se represente una ruta.

## Padrino

[Padrino](http://www.padrinorb.com/ "El enlace se abre en una ventana nueva.") es un framework construido sobre Sinatra. A partir de la versión 3.6.3 del agente Ruby, La instrumentación Sinatra de New Relic funciona con las versiones de Padrino 0.10.x o superiores.

## Escopeta (no compatible) [#shotgun]

El agente New Relic Ruby no funcionará con [escopeta](http://rubygems.org/gems/shotgun "El enlace se abre en una ventana nueva."). No puede establecer una conexión antes de que finalice el proceso del despachador. Ni el modo desarrolladores ni el modo monitor funcionarán.
