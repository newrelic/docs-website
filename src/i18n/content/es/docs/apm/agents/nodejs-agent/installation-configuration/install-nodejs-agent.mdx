---
title: Instalar el agente Node.js
tags:
  - Agents
  - Nodejs agent
  - Installation and configuration
metaDescription: Procedures and resources to install New Relic's Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

Para completar una instalación básica del agente Node.js, puede utilizar nuestra instalación guiada para una instalación automatizada (elija UE si se encuentra en la UE) o seguir las instrucciones de este documento. De cualquier manera, necesita una cuenta New Relic si aún no tiene una. (¡ [Es gratis, para siempre!](/docs/accounts/accounts-billing/new-relic-one-pricing-billing/new-relic-one-pricing-billing/#how-pricing-works))

<ButtonGroup>
  <ButtonLink
    role="button"
    to="https://newrelic.com/signup"
    variant="primary"
  >
    Obtener una cuenta
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.newrelic.com/marketplace/install-data-source?state=ccfdfbe4-d603-7a77-19ff-ba44f5de7c82"
    variant="primary"
  >
    Iniciar la instalación del agente
  </ButtonLink>

  <ButtonLink
    role="button"
    to="https://one.eu.newrelic.com/marketplace/install-data-source?state=ccfdfbe4-d603-7a77-19ff-ba44f5de7c82"
    variant="primary"
  >
    Instalación de la UE
  </ButtonLink>
</ButtonGroup>

Nuestro agente Node.js está disponible públicamente en el [repositorio de administrador de paquetes (npm) de Node](https://npmjs.org/package/newrelic) , así como en [GitHub](https://github.com/newrelic/node-newrelic).

## Instalar el agente Node.js [#installing]

<Callout variant="important">
  Si está utilizando el agente en un contenedor Docker, [instálelo en cada contenedor](/docs/agents/nodejs-agent/installation-configuration/install-new-relic-nodejs-agent-docker).
</Callout>

Para instalar el agente Node.js:

1. Crea una cuenta New Relic . ¿No tienes uno? [¡Registrate gratis!](https://newrelic.com/signup) No se requiere tarjeta de crédito.

2. Asegúrese de cumplir con el [requisito del sistema](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent). En particular, asegúrese de utilizar una versión compatible de Node.js.

3. Utilice el comando `npm install newrelic` para cada aplicación que desee monitor. Si su aplicación utiliza [uno de estos módulos de servidor Apollo,](/docs/apm/agents/nodejs-agent/extend-your-instrumentation/apollo-server-plugin-nodejs/) instale nuestro complemento Apollo con `npm install @newrelic/apollo-server-plugin`. [Puede encontrar más detalles sobre el uso de `@newrelic/apollo-server-plugin` aquí](https://github.com/newrelic/newrelic-node-apollo-server-plugin/tree/main#readme).

   <Callout variant="important">
     Si utiliza Next.js, utilice nuestro [agente`@newrelic/next` ](https://github.com/newrelic/newrelic-node-nextjs)independiente en lugar del agente `newrelic` . [Aquí hay un ejemplo de aplicación Next.js](https://github.com/newrelic/newrelic-node-nextjs#example-project)
   </Callout>

4. Desde `node_modules/newrelic`, copie `newrelic.js` en el directorio raíz de su aplicación.

5. Configure el agente a través del archivo `newrelic.js` o mediante [la variable de entorno](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#environment):

   * Personalice la configuración `license_key` con

     <InlinePopover type="licenseKey"/>

     .

   * Personalice la configuración [`app_name`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#app_name) con uno o más [nombres de aplicaciones significativos](/docs/apm/new-relic-apm/installation-and-configuration/naming-your-application).

6. Agregue `-r newrelic` al script de inicio de su aplicación. Por ejemplo, si el punto de entrada de su aplicación es `./dist/server.js` , entonces usaría el indicador require de esta manera:

   ```bash
   node -r newrelic ./dist/server.js
   ```

   Un comando Docker de ejemplo:

   ```dockerfile
   CMD ["node", "-r", "newrelic", "server.js"]
   ```

   <Callout variant="important">
     Para Next.js utilice `-r @newrelic/next` en lugar de `-r newrelic`.

     Si está utilizando Nest.JS y el comando `nest start` para iniciar la aplicación, modifique su binario de inicio para cargar el agente New Relic: `nest start --exec 'node -r newrelic'`. [Aquí hay un ejemplo de aplicación Nest.js.](https://github.com/newrelic/newrelic-node-examples/tree/main/nestjs)
   </Callout>

   Más información sobre la [opción de línea de comando de Node.js `-r` aquí](https://nodejs.org/api/cli.html#-r---require-module).

   <Callout variant="important">
     Si no puede utilizar el indicador de requisito `-r` , también puede utilizar `require('newrelic')` como primera línea del módulo principal de su aplicación. <DNT>**Note**</DNT> Si está utilizando [Babel](https://babeljs.io/docs/en/index.html) o un transpilador similar `require('newrelic')` causará problemas de instrumentación.

     Si ninguna de estas opciones funciona para usted (por ejemplo, cargar de forma asincrónica la clave de API desde una ubicación remota durante el arranque de la aplicación), también puede agregar instrumentación estándar a un [módulo compatible](https://github.com/newrelic/node-newrelic/blob/0113eb5f0e707dc662a17d262a841503bab88841/lib/instrumentations.js#L6#L6) ya cargado usando [`newrelic.instrumentLoadedModule`](/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/#instrumentLoadedModule):

     ```js
     // module loaded before newrelic 
     const expressModule = require('express');

     // load the agent
     const newrelic = require('newrelic');

     // instrument express after the agent has been loaded
     newrelic.instrumentLoadedModule(
       'express',    // the module's name, as a string
       expressModule // the module instance
     );
     ```
   </Callout>

7. Opcional: para obtener [estadísticas adicionales a nivel de tiempo de ejecución de Node.js](/docs/agents/nodejs-agent/supported-features/node-vms-statistics-page), asegúrese de que el [paquete`@newrelic/native-metrics` esté instalado](/docs/agents/nodejs-agent/supported-features/node-vm-measurements).

8. Genere algo de tráfico y luego espere unos minutos hasta que aparezcan los datos en la [UIde APM](/docs/apm/applications-menu/monitoring/apm-overview-page).

Puede [personalizar aún más el comportamiento de su agente](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration) a través de `newrelic.js` o una variable de entorno. Para mantener la configuración del agente separada de su aplicación, edite la [variable ambiental`NEW_RELIC_HOME` ](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#home).

Para obtener más información, consulte nuestro [documento API](/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/).

<InstallFeedback/>

## Ver el registro de sus datos de infraestructura y APM [#logs-context]

También puede reunir los datos de su registro y de la aplicación para que la resolución de problemas sea más fácil y rápida. Con [el contexto de inicio de sesión](/docs/logs/logs-context/configure-logs-context-nodejs/), puede ver el mensaje de registro relacionado con sus errores y la traza directamente en UI de su aplicación. También puede ver el inicio de sesión en el contexto de [los datos de su infraestructura](/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/), como el clúster de Kubernetes. No es necesario cambiar a otra página de UI.

## Mantenga actualizado su agente de Node.js [#upgrading]

Para asegurarse de tener la versión más actualizada de New Relic, consulte las [notas de la versión de Node.js.](/docs/release-notes/agent-release-notes/nodejs-release-notes) Cuando corresponde, las notas de la versión incluyen un enlace de descarga con instrucciones sobre cómo [actualizar el agente Node.js.](/docs/agents/nodejs-agent/installation-configuration/upgrade-nodejs-agent)

## Resolución de problemas [#troubleshoot]

Después de actualizar el agente, genere algo de tráfico y espere unos minutos. Si no aparecen datos en la UI de New Relic, consulte los [procedimientos de resolución de problemas](/docs/agents/nodejs-agent/troubleshooting/troubleshooting-your-nodejs-installation).
