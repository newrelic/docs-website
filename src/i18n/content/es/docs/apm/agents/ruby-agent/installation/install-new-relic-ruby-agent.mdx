---
title: Instale el agente New Relic Ruby
tags:
  - Agents
  - Ruby agent
  - Installation
metaDescription: 'Rails 3.2 and higher: To install New Relic''s Ruby agent as a gem, start here.'
freshnessValidatedDate: never
translationType: machine
---

Nuestro agente Ruby auto-instrumentó su código para que pueda iniciar la aplicación de monitoreo. Puede utilizar nuestro iniciador o seguir las instrucciones de este documento para completar una instalación básica del agente Ruby.

<ButtonLink
  role="button"
  to="https://one.newrelic.com/launcher/nr1-core.settings?pane=eyJuZXJkbGV0SWQiOiJ0dWNzb24ucGxnLWluc3RydW1lbnQtZXZlcnl0aGluZyJ9&cards[0]=eyJuZXJkbGV0SWQiOiJzZXR1cC1uZXJkbGV0cy5zZXR1cC1ydWJ5LWludGVncmF0aW9uIiwiYWNjb3VudElkIjoyNjQwNDA5fQ==&platform[accountId]=1"
  variant="primary"
>
  Agregar datos de Ruby
</ButtonLink>

## Instalar la gema [#Installing_the_Gem]

<Callout variant="important">
  Si está utilizando el agente en un contenedor docker , instale el contenedor del agente <DNT>**within each**</DNT>.
</Callout>

1. La gema del agente Ruby está disponible en [rubygems.org](https://rubygems.org/) como `newrelic_rpm`. Para una aplicación que use Bundler, agregue esta gema al Gemfile:

   ```
   gem 'newrelic_rpm'
   ```

2. Para utilizar Infinite Tracing, la gema Infinite Tracing también está disponible en rubygems.org como `newrelic-infinite_tracing`. Para aplicaciones que usan Bundler, incluya adicionalmente la gema Infinite Tracing en el Gemfile:

   ```
   gem 'newrelic-infinite_tracing'
   ```

3. El siguiente paso varía dependiendo de si estás usando Rails, Roda o Sinatra:

   <table>
     <thead>
       <tr>
         <th style={{ width: "200px" }}>
           <DNT>
             **Ruby installation**
           </DNT>
         </th>

         <th>
           <DNT>
             **Comments**
           </DNT>
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td>
           Si usa Rails, Roda o Sinatra
         </td>

         <td>
           * <DNT>**Rails**</DNT>: Rails llamará automáticamente `Bundler.require` y hará que se requiera `newrelic_rpm` durante el inicio de su aplicación.

           * <DNT>**Roda, Sinatra**</DNT>: Si está utilizando Roda, Sinatra u otro framework, debe llamar manualmente a `require 'newrelic_rpm'`. Además, si utiliza Infinite Tracing, llame manualmente a `require 'newrelic/infinite_tracing'`.

             Como alternativa, llame manualmente `Bundler.require`, lo que también habilita Infinite Tracing.
         </td>
       </tr>

       <tr>
         <td>
           Si no utiliza Rails, Roda o Sinatra
         </td>

         <td>
           Para utilizar el monitoreo automático de aplicaciones browser en una aplicación Rack que **no** utiliza Roda, Sinatra o Rails, debe incluir manualmente [middlewares Rack](/docs/agents/ruby-agent/frameworks/rack-middlewares#manual) adicionales proporcionados por el agente. Coloque la gema New Relic lo más abajo posible en la lista, permitiendo que el marco encima de ella se instrumente cuando la gema se inicialice.
         </td>
       </tr>
     </tbody>
   </table>

## Instalar el archivo de configuración [#Configuration_file]

Después de instalar el agente, deberá instalar el archivo de configuración `newrelic.yml` y nombrar su aplicación:

1. Descargue una copia de [`newrelic.yml`](https://github.com/newrelic/newrelic-ruby-agent/blob/dev/newrelic.yml) de nuestro repositorio de GitHub.

2. Copie el archivo `newrelic.yml` en el subdirectorio `config` de su aplicación.

3. Edite el valor `license_key` para incluir su

   <InlinePopover type="licenseKey"/>

   .

4. Edite el valor `app_name` por [un nombre significativo](/docs/agents/manage-apm-agents/app-naming/name-your-application).

Alternativamente, puede generar un archivo `newrelic.yml` manualmente con el siguiente comando:

```
newrelic install --license_key="YOUR_LICENSE_KEY" "YOUR_APP_NAME"
```

También puede utilizar la opción `--force` con este comando si necesita sobrescribir un `newrelic.yml` existente.

<InstallFeedback/>

## Ver el registro de sus datos de infraestructura y APM [#logs-context]

También puede reunir los datos de su registro y de la aplicación para que la resolución de problemas sea más fácil y rápida. Con [el contexto de inicio de sesión](/docs/logs/logs-context/configure-logs-context-ruby/), puede ver el mensaje de registro relacionado con sus errores y la traza directamente en UI de su aplicación. También puede ver el inicio de sesión en el contexto de [los datos de su infraestructura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como el clúster de Kubernetes. No es necesario cambiar a otra página de UI.

## Actualizar el agente [#Updating_the_Agent]

Consulte [Actualizar las versiones del agente Ruby](/docs/agents/ruby-agent/installation/upgrade-ruby-agent-versions).

## Instalar agente fuera del entorno de producción [#Outside_production_environments]

Normalmente instalará el agente Ruby en su entorno de producción. Si desea probar el agente Ruby en un entorno de desarrollo o localhost, verifique en el bloque `environment:` correspondiente del archivo `newrelic.yml` que el valor de configuración `monitor_mode` se haya establecido en `true`.

Por ejemplo, para implementar New Relic en su [entorno de desarrollo](/docs/ruby/developer-mode) y aún poder ver la métrica de rendimiento de su aplicación: en el bloque `development:` , establezca el valor de configuración `monitor_mode` en `true`.

## Desinstalar la gema del agente Ruby [#Uninstalling_Gem]

Para desinstalar el agente Ruby usando Bundler, elimine `gem 'newrelic_rpm'` de su Gemfile. Si no utiliza Bundler, elimine todas las referencias a `newrelic_rpm` de su archivo `environment.rb` .

## Instalar en versiones anteriores de Rails [#Older_Rails_installations]

Si está instalando el agente Ruby en Rails 2.x y no está utilizando Bundler, siga estos procedimientos.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        <DNT>
          **Ruby installation**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr id="Rails2_Without_Bundler">
      <td>
        Rails 2.1 - 2.3 sin Bundler
      </td>

      <td>
        1. Instale la gema usando `gem install newrelic_rpm`.

        2. Edite `environment.rb` y agréguelo al bloque inicializador:

           ```
           config.gem "newrelic_rpm"
           ```

        3. Si habilita el seguimiento infinito, agregue lo siguiente a la siguiente línea del archivo `environment.rb` :

           ```
           config.gem "newrelic-infinite_tracing"
           ```
      </td>
    </tr>

    <tr id="Older_Rails_installations">
      <td>
        Rails anteriores a 2.1
      </td>

      <td>
        New Relic no admite oficialmente versiones de Rails anteriores a la 2.1. Sin embargo, si desea utilizar New Relic for Rails versiones 2.0.\*, edite `environment.rb` y agregue esta declaración después del bloque `initializer:` :

        ```
        require "newrelic_rpm"
        ```

        <DNT>
          **Infinite Tracing**
        </DNT>

        Si habilita el seguimiento infinito, agregue lo siguiente a la siguiente línea del archivo `environment.rb` :

        ```
        require "newrelic/infinite_tracing"
        ```
      </td>
    </tr>
  </tbody>
</table>
