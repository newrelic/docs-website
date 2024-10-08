---
title: Agente de Node.js en aplicaciones web de Microsoft Azure
tags:
  - Agents
  - Nodejs agent
  - Hosting services
metaDescription: How to install APM for Node.js on Microsoft Azure Web Apps.
freshnessValidatedDate: never
translationType: machine
---

Conozca las consideraciones especiales para usar Microsoft Azure Web Apps como servicio de hospedaje con el agente Node.js de New Relic.

## Que necesitas [#compatibility]

Además de la [compatibilidad y los requisitos para el agente de Node.js](/docs/agents/nodejs-agent/getting-started/compatibility-requirements-nodejs-agent), este tutorial asume que tiene una instalación funcional de Node.js y el SDK de Windows Azure para Node.js para su plataforma:

* Instale el SDK de Azure para Node.js.
* Asegúrese de que Git esté instalado.

<Callout variant="important">
  El agente de Node.js no puede entregar telemetría para Azure Functions. En su lugar, deberá utilizar la [integración de monitoreo de Azure Functions](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-functions-monitoring-integration/)
</Callout>

## Instalación del agente Node.js [#install_nodejs]

Para agregar el agente New Relic Node.js a su aplicación de Azure, asegúrese de que el módulo `newrelic` esté cargado primero, use el indicador Node.js `-r`/`--require` para ejecutar lo siguiente:

```shell
node -r newrelic server.js
```

<Callout variant="important">
  Para una aplicación Next.js, utilice nuestro [agente`@newrelic/next` ](https://github.com/newrelic/newrelic-node-nextjs)independiente en lugar del agente `newrelic` , por ejemplo:

  ```shell
  node -r @newrelic/next server.js
  ```
</Callout>

## Agregar configuraciones de aplicaciones en Azure [#azure_settings]

Después de la instalación, debe configurar su aplicación en Azure Web Apps:

1. Inicia sesión en <DNT>**[portal.azure.com](https://portal.azure.com)**</DNT>.

2. Seleccione <DNT>**App Services > (select a Node.js app) > Configure**</DNT>.

3. Agregue lo siguiente al <DNT>**app settings**</DNT>:

   * `new_relic_app_name`: el nombre de su sitio web de Windows Azure

   * `new_relic_license_key`: Tu New Relic

     <InlinePopover type="licenseKey"/>

4. Guarde su configuración.

5. Reinicie su aplicación Node.js.

Genera algo de tráfico a tu aplicación y espera unos minutos. Después de esperar, consulta tus datos yendo a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select your app)**</DNT>.

## Opcional: agregar configuraciones de aplicaciones con la CLI [#app_settings]

Opcional: A continuación se muestra un ejemplo de cómo agregar la configuración de la aplicación mediante la CLI (SDK de Node.js):

```bash
azure account download "YOUR_SUBSCRIPTION_NAME"
azure account import "PATH_TO_PUBLISH_SETTINGS_FILE"
azure site config add "new_relic_app_name=REPLACE_WITH_YOUR_APP_NAME"
azure site config add "new_relic_license_key=REPLACE_WITH_YOUR_LICENSE_KEY"
azure site restart AZURE_WEB_APP_NAME
```

## Usando variables de entorno [#variables]

Si su agente se ejecuta en entornos PaaS como Heroku o Azure Web Apps, todas las variables de configuración en `newrelic.js` tienen contrapartes que se pueden configurar como variables de entorno. Puede mezclar y combinar libremente variables en el archivo de configuración. Las variables de entorno [anulan la configuración del archivo de configuración](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#methods-and-precedence).

Por ejemplo, para comodidad del usuario de Azure, el agente usará `APP_POOL_ID` como nombre de la aplicación ([`NEW_RELIC_APP_NAME`](/docs/nodejs/configuring-nodejs-with-environment-variables#app_name)) si está configurado, de modo que pueda usar el nombre que eligió sin configurarlo dos veces. Para obtener más información, consulte [Configuración de Node.js con variables de entorno](/docs/nodejs/configuring-nodejs-with-environment-variables).
