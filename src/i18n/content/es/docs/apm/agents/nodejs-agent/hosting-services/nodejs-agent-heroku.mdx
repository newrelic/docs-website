---
title: Agente Node.js y Heroku
tags:
  - Agents
  - Nodejs agent
  - Hosting services
metaDescription: Installation and configuration procedures when using Heroku as a hosting service with New Relic's Node.js agent.
freshnessValidatedDate: never
translationType: machine
---

[Heroku](https://devcenter.heroku.com/articles/newrelic) es una solución de plataforma como servicio (PaaS) para alojar aplicaciones web en varios lenguajes de agentes, incluido Node.js. Con New Relic, puedes extender Heroku con métrica de [<InlinePopover type="apm"/>](/docs/apm/new-relic-apm)y [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser).

Aquí describimos consideraciones especiales para usar Heroku como servicio de alojamiento con el agente Node.js de New Relic.

## Instalar el complemento del agente [#installing]

Después de implementar su aplicación Node.js en Heroku, instale el agente New Relic. La instalación del complemento crea automáticamente una cuenta privada de New Relic y configura el acceso a los servidores Heroku.

Para instalar el complemento New Relic a través de la [página de complementos del sitio web de Heroku para New Relic](https://addons.heroku.com/newrelic), debe iniciar sesión en Heroku.

1. En la página de complementos de Heroku para New Relic, seleccione el [plan de suscripción apropiado](https://elements.heroku.com/addons/newrelic#pricing). Luego ejecute este comando del cinturón de herramientas:

   ```shell
   heroku addons:create newrelic:$planlevel
   ```

2. Desde <DNT>**Select an app**</DNT>, selecciona tu aplicación New Relic.

3. Utilice este comando del cinturón de herramientas para darle a su aplicación un [nombre descriptivo](/docs/apm/new-relic-apm/installation-configuration/name-your-application):

   ```shell
   heroku config:set NEW_RELIC_APP_NAME='Your Application Name'
   ```

4. Si está utilizando variables de entorno en lugar de la configuración del archivo de configuración `newrelic.js` para [personalizar la configuración del agente Node.js](#variables), utilice este comando del cinturón de herramientas:

   ```shell
   heroku config:set NEW_RELIC_NO_CONFIG_FILE='true'
   ```

5. Verifique el nombre de su aplicación New Relic, <InlinePopover type="licenseKey"/>y [la configuraciónlog ](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#logging_config):

   ```shell
   heroku config
   ```

6. Instale el agente de Node.js y guárdelo en su `npm` dependencia.

   ```shell
   npm install newrelic --save
   ```

7. Para asegurarse de que el paquete `newrelic` esté incluido en su archivo `package.json` cuando envíe a Heroku, instale el [paquete para el agente New Relic Node.js](/docs/agents/nodejs-agent/installation-configuration/installing-maintaining-nodejs) en su sistema local. Utilice el indicador Node.js `-r/--require` cuando ejecute su programa para asegurarse de que el módulo de New Relic esté cargado:

   ```shell
   node -r newrelic YOUR_PROGRAM.js
   ```

8. Ejecute los siguientes comandos:

   ```shell
   git add . && git commit -m "Add New Relic"
   git push heroku master && heroku logs  --tail
   ```

9. Reinicie su banco de pruebas.

10. Genera algo de tráfico a tu aplicación.

New Relic comenzará a monitorear el rendimiento de la aplicación, la experiencia del usuario final y el rendimiento del host recopilados después de instalar el complemento. En unos minutos, los datos deberían empezar a aparecer en su [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/apm-overview-page).

## Solucionar problemas de su instalación [#troubleshooting]

Si no aparecen datos dentro de unos minutos después de completar los procedimientos de instalación, siga los [procedimientos de resolución de problemas del agente Node.js.](/docs/agents/nodejs-agent/troubleshooting/troubleshooting-your-nodejs-installation)

## Personaliza tu configuración [#variables]

Puede personalizar el [archivo de configuración New Relic`newrelic.js` ](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#methods-and-precedence)para su agente Node.js. También puede utilizar las variables de entorno del agente Node.js de New Relic en el entorno Heroku para anular los valores del archivo de configuración.

A continuación se muestra un ejemplo del uso de la línea de comando de Heroku para configurar variables de entorno en lugar de usar su archivo de configuración `newrelic.js` .

```shell
heroku config:set NEW_RELIC_LICENSE_KEY=your license key
heroku config:set NEW_RELIC_APP_NAME=your production app name
heroku config:set NEW_RELIC_NO_CONFIG_FILE='true'
```

Para confirmar su configuración desde la línea de comando, use:

```shell
heroku config
```

## Actualización desde una instalación existente de New Relic [#upgrading]

Para actualizar la versión de su agente Node.js si New Relic ya está instalado, use este comando del cinturón de herramientas:

```shell
npm install newrelic --save
```
