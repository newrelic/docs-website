---
title: Deshabilitar el agente APM
tags:
  - APM
  - Maintenance
metaDescription: How to temporarily disable your APM agent.
freshnessValidatedDate: never
translationType: machine
---

Es posible que desee desactivar temporalmente un agente APM con fines de prueba o resolución de problemas. Este documento explica los procedimientos para apagar temporalmente el agente APM.

Trámites relacionados:

* Para deshabilitar permanentemente APM, [desinstale el agente](/docs/agents/manage-apm-agents/installation/uninstall-agent).
* Para configurar un agente para monitor algunas cosas pero no otras, use [instrumentación personalizada](/docs/apm/agents/manage-apm-agents/agent-data/custom-instrumentation/).

## Deshabilitar o apagar el agente APM [#agents]

Seleccione su tipo de agente para obtener instrucciones:

<CollapserGroup>
  <Collapser
    id="go"
    title="Go"
  >
    Hay dos formas principales de desactivar el agente Go:

    * Elimine la importación del paquete `github.com/newrelic/go-agent` de su aplicación y elimine o comente cualquier llamada al namespace `newrelic`. Luego, vuelva a compilar y reiniciar su aplicación.

    * Utilice la opción de configuración [`enabled`](/docs/agents/go-agent/configuration/go-agent-configuration#enabled) . Luego, vuelva a compilar y reiniciar su aplicación. (Esto **no** reducirá los gastos generales porque la instrumentación aún está ejecutándose; solo evitará el envío de datos al [recolector New Relic](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#collector)).

      <Callout variant="tip">
        Después de desactivar el agente, los datos pueden tardar varios minutos en dejar de aparecer.
      </Callout>
  </Collapser>

  <Collapser
    id="java"
    title="Java"
  >
    Hay tres formas principales de desactivar el agente de Java:

    * Establezca [`agent_enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-agent_enabled) en `false` y luego reinicie la JVM.

    * Utilice el indicador de línea de comando JVM:

      ```ini
      -Dnewrelic.config.agent_enabled=false
      ```

      Luego reinicie la JVM.

    * Elimine el archivo `newrelic.jar` o `newrelic.yml` y luego reinicie la JVM.

      <Callout variant="tip">
        Después de desactivar el agente, los datos pueden tardar varios minutos en dejar de aparecer.
      </Callout>
  </Collapser>

  <Collapser
    id="net"
    title=".NET"
  >
    El método para deshabilitar el agente depende de si está utilizando framework o Core:

    * .NET framework: establezca [`agentEnabled`](/docs/agents/net-agent/configuration/net-agent-configuration#config-agentEnabled) en `false` en el archivo global `newrelic.config`, que se encuentra en `C:\ProgramData\New Relic\.NET Agent\`. Si la aplicación está alojada en IIS, reinicie IIS. Si es autohospedado (no IIS), reinicie la aplicación.

    * .NET Core: establezca [`agentEnabled`](/docs/agents/net-agent/configuration/net-agent-configuration#config-agentEnabled) en `false` en el archivo `newrelic.config` que se encuentra en el directorio de instalación del agente Core (para Windows junto con `NewRelic.Profiler.dll` y para Linux junto con `NewRelic.Profiler.so`). Si utiliza el módulo ASP..NET Core, reinicie IIS. De lo contrario, reinicie su aplicación Core.

      <Callout variant="tip">
        Después de desactivar el agente, los datos pueden tardar varios minutos en dejar de aparecer.
      </Callout>
  </Collapser>

  <Collapser
    id="node"
    title="Node.js"
  >
    Hay dos formas principales de desactivar el agente Node.js:

    * Establezca [`agent_enabled`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#enabled) en `false` en el archivo de configuración de su agente y luego reinicie el servidor de aplicaciones.

    * Establezca la variable de entorno [`NEW_RELIC_ENABLED`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#enabled) en `false`.

      <Callout variant="tip">
        Después de desactivar el agente, los datos pueden tardar varios minutos en dejar de aparecer.
      </Callout>
  </Collapser>

  <Collapser
    id="php"
    title="PHP"
  >
    Para deshabilitar el agente PHP, establezca la configuración [`newrelic.enabled`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-enabled) en `false` y luego reinicie el servidor web o PHP.

    <Callout variant="tip">
      Después de desactivar el agente, los datos pueden tardar varios minutos en dejar de aparecer.
    </Callout>
  </Collapser>

  <Collapser
    id="python"
    title="Python"
  >
    Hay tres formas principales de desactivar el agente Python, según sus preferencias y configuración:

    * [Instalación estándar](/docs/agents/python-agent/installation/standard-python-agent-install#install): utilice la opción de configuración [`monitor_mode`](/docs/agents/python-agent/configuration/python-agent-configuration#monitor_mode) . Esto se puede hacer editando el archivo de configuración o usando una [variable de entorno](/docs/agents/python-agent/configuration/python-agent-configuration#environment-variables).

    * Instalación estándar con script `newrelic-admin`: elimine la referencia a esa script en su aplicación.

    * [Instrumentación manual](/docs/agents/python-agent/installation-configuration/python-agent-integration#manual-integration): Elimina el script de inicialización de tu aplicación.

      <Callout variant="tip">
        Después de desactivar el agente, los datos pueden tardar varios minutos en dejar de aparecer.
      </Callout>
  </Collapser>

  <Collapser
    id="ruby"
    title="Ruby"
  >
    Hay varias formas de desactivar el agente Ruby, según sus preferencias y configuración.

    Estos métodos eliminarán la mayor parte de la instrumentación, pero aún habrá una pequeña cantidad de actividad y gastos generales:

    * Utilice la opción de configuración [`agent_enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#agent_enabled) . Esto se puede hacer en el archivo de configuración o en las secciones por entorno. Reinicie su servidor de aplicaciones luego.

    * Haga lo mismo a través de una [variable de entorno](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#Options), luego reinicie el servidor de aplicaciones.

      Los siguientes métodos eliminarán toda la instrumentación y los gastos generales:

    * Elimine `newrelic_rpm` del Gemfile y realice la instalación del paquete.

    * Configure lo siguiente en Gemfile y realice la instalación del paquete:

      ```ruby
      gem 'newrelic_rpm', :require => false
      ```

      Esta opción garantiza que la gema se instale si es necesaria en algún lugar de la aplicación, pero no la instala al agruparla.

      <Callout variant="tip">
        Después de desactivar el agente, los datos pueden tardar varios minutos en dejar de aparecer.
      </Callout>
  </Collapser>
</CollapserGroup>
