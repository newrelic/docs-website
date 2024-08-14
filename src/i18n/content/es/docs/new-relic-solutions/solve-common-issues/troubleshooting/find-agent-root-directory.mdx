---
title: Encuentre el directorio raíz del agente New Relic
tags:
  - Using New Relic
  - Cross-product functions
  - Troubleshooting
metaDescription: How to find the root directory for New Relic agents.
freshnessValidatedDate: never
translationType: machine
---

Algunas [soluciones de New Relic](https://newrelic.com/instant-observability/) requieren la instalación de un agente. El directorio raíz del agente es la carpeta principal que contiene los archivos del agente. Normalmente, el directorio raíz del agente es el directorio donde el proceso de instalación del agente coloca el archivo de configuración del agente.

Es posible que necesite encontrar el directorio raíz del agente por varios motivos:

* Para personalizar su [archivo de configuración](/docs/agents/manage-apm-agents/configuration/configure-agent).
* Para ejecutar [New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics).
* Para [instalar](/docs/agents/manage-apm-agents/installation/install-agent), [actualizar](/docs/agents/manage-apm-agents/installation/update-new-relic-agent) o [desinstalar](/docs/agents/manage-apm-agents/installation/uninstall-agent) el agente.
* Para solucionar problemas si [no aparecen datos](/docs/agents/manage-apm-agents/troubleshooting/not-seeing-data) en la UI de New Relic.

<Callout variant="tip">
  Estas estrategias para encontrar el directorio raíz son aplicables si siguió el [procedimiento de instalación](/docs/agents/manage-apm-agents/installation/install-agent) predeterminado. Si realizó la instalación en un directorio diferente, es posible que esta información no se aplique.
</Callout>

## Agente APM

El directorio raíz del agente depende del agente que esté utilizando:

<CollapserGroup>
  <Collapser
    id="go-agent"
    title="Agente de Go"
  >
    El directorio raíz del agente Go es el directorio raíz de su aplicación, donde importó el paquete `go-agent` cuando [instaló el agente Go](/docs/agents/go-agent/installation/install-new-relic-go).
  </Collapser>

  <Collapser
    id="java-agent"
    title="Agente de Java"
  >
    El directorio raíz del agente de Java se llama `newrelic`, que creó en el directorio raíz del servidor de aplicaciones cuando [instaló el agente de Java](/docs/agents/java-agent/installation/install-java-agent).
  </Collapser>

  <Collapser
    id="dotnet-agent-core"
    title="Agente .NET Core 2.0"
  >
    La ubicación del directorio raíz del agente .NET Core 2.0 depende de su sistema:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Sistema
          </th>

          <th>
            Ubicación del directorio raíz del agente
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Windows
          </td>

          <td>
            Busque en la [variable de entorno`CORECLR_NEWRELIC_HOME` ](/docs/agents/net-agent/configuration/net-agent-configuration#environment-variables)de su aplicación para encontrar la ubicación del directorio raíz del agente.
          </td>
        </tr>

        <tr>
          <td>
            Linux
          </td>

          <td>
            La ubicación del directorio raíz del agente es `/usr/local/newrelic-netcore20-agent`.

            También puede buscar en la [variable de entorno`CORECLR_NEWRELIC_HOME` ](/docs/agents/net-agent/configuration/net-agent-configuration#environment-variables)de su aplicación para encontrar la ubicación del directorio raíz del agente.
          </td>
        </tr>

        <tr>
          <td>
            Docker
          </td>

          <td>
            En el directorio raíz de su aplicación, busque el directorio raíz del agente llamado `NewRelic`, que creó cuando [instaló el agente Core 2.0 con Docker](/docs/agents/net-agent/installation/install-net-core-20-agent-docker#windows-prep).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="dotnet-agent-framework"
    title="Agente framework .NET"
  >
    La ubicación del directorio raíz del agente de .NET framework es `C:\Program Files\New Relic\.NET Agent`.
  </Collapser>

  <Collapser
    id="node-js-agent"
    title="Agente de Node.js"
  >
    El directorio raíz del agente Node.js es el directorio raíz de su aplicación, donde copió `newrelic.js` cuando [instaló el agente Node.js.](/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent)
  </Collapser>

  <Collapser
    id="php-agent"
    title="Agente PHP"
  >
    La ubicación del directorio raíz del agente PHP depende de cómo instaló el agente:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Método de instalación
          </th>

          <th>
            Ubicación del directorio raíz
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Con un administrador de paquetes o archivo tar
          </td>

          <td>
            Utilice [`phpinfo()`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-background) y busque en las secciones denominadas <DNT>**Scan this dir for additional .ini files**</DNT> o <DNT>**Additional .ini files parsed**</DNT> la ubicación del archivo `newrelic.ini` . Este archivo estará en el directorio raíz del agente, que se llama `newrelic-php5`.

            <Callout variant="tip">
              El directorio raíz del agente PHP se llama `newrelic-php5` para todas las versiones de PHP compatibles, incluido PHP 7.
            </Callout>
          </td>
        </tr>

        <tr>
          <td>
            Con un sistema de configuración, como Puppet o Chef
          </td>

          <td>
            Para encontrar todas las ubicaciones donde se instaló el agente PHP, verifique la [variable de entorno`NR_INSTALL_PHPLIST` ](/docs/agents/php-agent/advanced-installation/silent-mode-install-script-advanced#NR_INSTALL_PHPLIST)para obtener una lista del directorio raíz del agente.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="python-agent"
    title="Agente Python"
  >
    Puede instalar el agente Python en cualquier lugar de su sistema host y luego proporcionarle una ruta a través de la variable de entorno `NEW_RELIC_CONFIG_FILE` o la llamada API `newrelic.agent.initialize()` .

    Para encontrar la ubicación del archivo de configuración del agente, busque en la [variable de entorno`NEW_RELIC_CONFIG_FILE` o en la llamada `newrelic.agent.initialize()` ](/docs/agents/python-agent/configuration/python-agent-configuration#agent-configuration-file)la ruta al directorio raíz del agente.
  </Collapser>

  <Collapser
    id="ruby-agent"
    title="Agente Ruby"
  >
    La ubicación del directorio raíz del agente Ruby depende de cómo instaló el agente:

    <table>
      <thead>
        <tr>
          <th style={{ width: "250px" }}>
            Método de instalación
          </th>

          <th>
            Ubicación del directorio raíz
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Con la gema `newrelic_rpm`
          </td>

          <td>
            El directorio raíz del agente Ruby está en el directorio raíz de su aplicación en un directorio llamado `config`.
          </td>
        </tr>

        <tr>
          <td>
            Sin la gema
          </td>

          <td>
            Busque en la variable de entorno `NEW_RELIC_CONFIG_PATH` la ruta al directorio raíz del agente.

            Si no hay una ruta en esa variable de entorno, verifique los siguientes directorios para encontrar el que contiene el archivo `newrelic.yml` :

            * `config`
            * `$HOME/.newrelic/`
            * `$HOME/`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Agente móvil [#mobile]

El directorio raíz del agente móvil es el directorio raíz de su aplicación.

## Agente de infraestructura [#infrastructure]

La ubicación del directorio raíz del agente de infraestructura depende de su sistema:

<CollapserGroup>
  <Collapser
    id="infra-agent"
    title="Agente de infraestructura"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Sistema
          </th>

          <th>
            Ubicación del directorio raíz
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Windows
          </td>

          <td>
            `C:\Program Files\New Relic\newrelic-infra\`
          </td>
        </tr>

        <tr>
          <td>
            Linux, docker y Elastic Beanstalk
          </td>

          <td>
            `/etc`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="infra-on-host"
    title="Integracion on-host"
  >
    La ubicación del directorio raíz para la integración en el host es `/etc`.
  </Collapser>

  <Collapser
    id="infra-cloud"
    title="Integracion en la nube"
  >
    Debido a que integración en la nube no está instalado pero está conectado a nuestro monitoreo de infraestructura a través de su proveedor de servicios en la nube, no existe un directorio raíz específico para integración en la nube.
  </Collapser>
</CollapserGroup>

## Información de directorio para otras herramientas [#other]

Para obtener información sobre directorios de otras herramientas que no figuran aquí, consulte la [documentación de una solución específica](https://newrelic.com/instant-observability/) .
