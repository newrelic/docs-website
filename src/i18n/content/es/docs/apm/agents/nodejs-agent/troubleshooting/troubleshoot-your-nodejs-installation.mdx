---
title: Solucionar problemas de instalación de Node.js
type: troubleshooting
tags:
  - Agents
  - Nodejs agent
  - Troubleshooting
metaDescription: Troubleshooting tips if you have problems installing your New Relic Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Si ha encontrado alguno de estos problemas comunes después de instalar su agente New Relic Node.js, pruebe estos consejos de resolución de problemas.

## Solución

Algunos problemas comunes que encuentra el usuario después de instalar el agente New Relic Node.js incluyen:

<CollapserGroup>
  <Collapser
    id="no_data"
    title="No ver datos"
  >
    Para minimizar la cantidad de ancho de banda que consume el agente Node.js, New Relic solo informa datos una vez por minuto. Si agrega el agente a pruebas que tardan menos de un minuto en ejecutarse, no tendrá tiempo de informar datos a New Relic.

    Si no ve la traza de la transacción u otros datos después de desplegar al agente, esto puede deberse a la configuración, framework o los ajustes de Apdex. Utilice [New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics) para intentar identificar automáticamente el problema.
  </Collapser>

  <Collapser
    id="installation"
    title="Problemas de instalación"
  >
    <table>
      <thead>
        <tr>
          <th>
            <DNT>
              **What to check**
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
            Ejecutar script
          </td>

          <td>
            Asegúrese de que su módulo `newrelic` esté cargado primero usando el indicador `-r/--require` : `node -r newrelic your-program.js`.
          </td>
        </tr>

        <tr>
          <td>
            Módulo principal
          </td>

          <td>
            Si no puede controlar cómo se ejecuta su módulo principal, asegúrese de haber agregado `require('newrelic')` como la primera línea del módulo principal de la aplicación. Si el requisito se agrega más adelante, es posible que el agente de Node.js no implemente adecuadamente su aplicación.
          </td>
        </tr>

        <tr>
          <td>
            Lógica condicional
          </td>

          <td>
            Si tiene alguna lógica condicional en su `require`, mueva la lógica condicional a su archivo de configuración `newrelic.js` .
          </td>
        </tr>

        <tr>
          <td>
            Frameworks
          </td>

          <td>
            Si tiene problemas con [el marco compatible](/docs/agents/nodejs-agent/getting-started/new-relic-nodejs#requirements), asegúrese de estar utilizando Connect, Express, Hapi, Kraken o Restify. Hay otros marcos Node.js, pero New Relic no los admite todos.
          </td>
        </tr>

        <tr>
          <td>
            Apdex
          </td>

          <td>
            Si tiene problemas con sus resultados [de Apdex](/docs/apm/new-relic-apm/apdex/apdex-measuring-user-satisfaction) , intente ajustar su puntuación de Apdex a través [del archivo de configuración del agente Node.js](/docs/nodejs/customizing-your-nodejs-config-file#apdex) (`newrelic.js`) o la [interfaz de usuario de New Relic](/docs/site/changing-your-apdex-settings).
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="logs"
    title="Archivo de registro"
  >
    El agente de Node.js escribe su log en el archivo `newrelic_agent.log` en el directorio de la aplicación, a menos que haya cambiado la [configuración de registro](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#logging_config). Si el agente no envía datos o falla su aplicación, puede generar un [archivo de registro de resolución de problemas](/docs/agents/nodejs-agent/troubleshooting/generate-trace-log-troubleshooting-nodejs) para acompañar los informes de errores y [las solicitudes de soporte](/docs/accounts-partnerships/education/getting-started-new-relic/finding-help).
  </Collapser>

  <Collapser
    id="vm_metrics"
    title="Falta máquina virtual (VM) métrica"
  >
    El agente puede recolectar máquina virtual (VM) métrica relacionada con la recolección de basura (GC), la memoria y la CPU. Algunas de estas métricas requieren la instalación de un [módulo nativo adicional](/docs/agents/nodejs-agent/supported-features/node-vm-measurements) .

    A continuación se muestran algunos problemas comunes y sus soluciones:

    <DNT>
      **Problem**
    </DNT>

    Durante la instalación, npm muestra uno de los siguientes mensajes de error:

    ```
    gyp ERR! configure error
    gyp ERR! stack Error: Can't find Python executable "python", you can set the PYTHON env variable.
    ```

    ```
    gyp ERR! build error
    gyp ERR! stack Error: not found: make
    ```

    ```
    make: g++: Command not found
    ```

    <DNT>
      **Solution**
    </DNT>

    Asegúrese de que los requisitos previos para el módulo `node-gyp` estén instalados. En la plataforma Debian/Ubuntu, use este comando:

    ```bash
    apt-get install build-essential
    ```

    Para obtener más información, consulte [Mediciones de máquina virtual (VM) de Node.js.](/docs/agents/nodejs-agent/extend-your-instrumentation/nodejs-vm-measurements)
  </Collapser>
</CollapserGroup>

Otros recursos de resolución de problemas en nuestro foro Foro de soporte:

* [Resolución de problemas de instalación](https://discuss.newrelic.com/t/node-js-troubleshooting-framework-install/108682)
* [Configuración general resolución de problemas](https://discuss.newrelic.com/t/node-js-troubleshooting-framework-configuration/119977)
