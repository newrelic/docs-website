---
title: Controlar cuándo se inicia el agente Ruby
type: troubleshooting
tags:
  - Agents
  - Ruby agent
  - Troubleshooting
metaDescription: 'When using APM''s Ruby agent, you can prevent the newrelic_rpm gem from starting, or force it to start if it is not reporting data.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

El agente Ruby no se inicia correctamente o no informa datos a New Relic.

## Solución

Para resolver este problema:

<CollapserGroup>
  <Collapser
    id="version-3-6-1-or-later"
    title="Verifique la versión de su agente Ruby."
  >
    Verifique [la versión de su agente Ruby](/docs/release-notes/agent-release-notes/ruby-release-notes) y actualícela si es necesario.
  </Collapser>

  <Collapser
    id="environment"
    title="Verifique el entorno de la aplicación utilizada."
  >
    Cuando la gema `newrelic_rpm` Ruby sea requerida en su entorno de aplicación, intentará determinar si iniciar el monitoreo automáticamente y comenzar a transmitir métrica a New Relic, o permanecer deshabilitado.

    * Producción y prueba: el agente normalmente está configurado para monitor automáticamente en estos entornos.

    * Prueba y desarrollo: el agente normalmente permanece deshabilitado en estos entornos.

      Para controlar esta lógica, establezca la clave de configuración `monitor_mode` en `true` o `false` en cada sección de entorno de `newrelic.yml`.
  </Collapser>

  <Collapser
    id="forcing-start"
    title="Obligar al agente a comenzar."
  >
    Para anular la lógica de inicio automático del agente, el mecanismo más sencillo es establecer una variable de entorno `NEW_RELIC_AGENT_ENABLED=true` ; Por ejemplo:

    ```
    NEW_RELIC_AGENT_ENABLED=true rake assets:precompile
    ```
  </Collapser>

  <Collapser
    id="autostart-config"
    title="Personalice las variables de configuración de inicio automático."
  >
    Si está ejecutando la versión 3.6.1 o superior del agente Ruby, existen algunas razones por las que el agente se negará a iniciarse:

    * El agente detecta que está en una sesión interactiva; por ejemplo, una sesión `rails console` o `irb` .

    * El agente detecta que está en una de las tareas de rake integradas de Rails; por ejemplo, `assets:precompile` o `db:migrate`.

      Puede utilizar variables de configuración en el archivo `newrelic.yml` de su agente Ruby para personalizar el comportamiento de inicio automático de constantes, nombres de script y tareas de rake.

      <table>
        <thead>
          <tr>
            <th width={150}>
              <DNT>
                **Variable**
              </DNT>
            </th>

            <th>
              <DNT>
                **Description**
              </DNT>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Constantes
            </td>

            <td>
              ```
              <a href="/docs/agents/ruby-agent/configuration/ruby-agent-configuration#autostart-denylisted_constants">autostart.denylisted_constants</a>
              ```

              * Constantes de Ruby que deberían impedir que el agente se inicie. Acepta una lista separada por comas.
              * El valor predeterminado es `"Rails::Console"`.
              * Configúrelo en `""` para indicarle al agente que se inicie cuando `Rails::Console` esté en el entorno.
            </td>
          </tr>

          <tr>
            <td>
              Tareas de rastrillo
            </td>

            <td>
              ```
              <a href="/docs/agents/ruby-agent/configuration/ruby-agent-configuration#autostart-denylisted_rake_tasks">autostart.denylisted_rake_tasks</a>
              ```

              * Rastrillar tareas que no desea que el agente monitor; por ejemplo, `assets:precompile`. Acepta una lista separada por comas.
              * No deshabilitamos el agente Ruby en todas las tareas de rake, porque tareas como `resque:work` generalmente son monitoreadas.
            </td>
          </tr>

          <tr>
            <td>
              Ejecutables
            </td>

            <td>
              ```
              <a href="/docs/agents/ruby-agent/configuration/ruby-agent-configuration#autostart-denylisted_executables">autostart.denylisted_executables</a>
              ```

              * Una lista de nombres script , como `irb`, que impedirán que el agente se inicie automáticamente. Acepta una lista separada por comas.
              * Establezca esto en `"rake"` para evitar que el agente se inicie en tareas de rake, o `"rake,my_ruby_script.rb"` para evitar que se inicie en rake y un script personalizado.
            </td>
          </tr>
        </tbody>
      </table>
  </Collapser>
</CollapserGroup>
