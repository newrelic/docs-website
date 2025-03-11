---
title: Instale el agente Node.js para docker
tags:
  - Agents
  - Nodejs agent
  - Installation and configuration
metaDescription: How to use New Relic's Node.js agent to instrument Node.js applications deployed in Docker containers.
freshnessValidatedDate: never
translationType: machine
---

Puede utilizar nuestro agente Node.js para implementar la aplicación Node.js en el contenedor docker . Este documento explica cómo construir, configurar y desplegar su aplicación Dockerizada Node.js que ha sido instrumentada con New Relic.

## Instrumento tu contenedor [#instrument]

Con solo unas pocas adiciones, su Dockerfile existente se puede utilizar con nuestro agente Node.js. Configurará el agente ejecutando su nueva imagen docker con las variables de entorno configuradas.

1. Añade `newrelic` a tu `package.json`:

   ```json
   "newrelic": "latest",
   ```

   Instale una versión específica o utilice cualquiera de las otras opciones proporcionadas por el [formato`package.json` ](https://docs.npmjs.com/files/package.json#dependencies). Consulte [las notas de la versión del agente Node.js](/docs/release-notes/agent-release-notes/nodejs-release-notes) para obtener información sobre versiones anteriores del agente.

2. Dependiendo de cómo esté configurado su contenedor, puede editar el `ENTRYPOINT` para incluir el módulo `newrelic` primero con el indicador `-r`/`--require` de Node.js ejecutando `node -r newrelic YOUR_PROGRAM.js`. Si no puede controlar cómo se ejecuta su programa, puede cargar el módulo `newrelic` antes que cualquier otro módulo en su programa agregando `require('newrelic')`.

   Para Next.js utilice `@newrelic/next` en lugar de `newrelic`. <Callout variant="tip">Si tiene un script npm para ejecutar su programa, como `npm start`, puede modificar este script mediante programación ejecutando `npm pkg set scripts.start="node -r newrelic your-program.js"`.</Callout>

   <Callout variant="important">
     Si su agente Node.js es anterior a [la versión 7.2.0](/docs/release-notes/agent-release-notes/nodejs-release-notes/node-agent-7-2-0) , deberá agregar la variable de entorno `NEW_RELIC_NO_CONFIG_FILE=true` a su Dockerfile para que el agente pueda ejecutarse sin un archivo de configuración. Puede encontrar más información sobre nuestros ajustes de configuración y el orden de precedencia [aquí](/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/).
   </Callout>

3. Cree su imagen docker como lo hace normalmente.

4. Para ejecutar su aplicación docker con el agente habilitado, agregue su <InlinePopover type="licenseKey"/>y [el nombre de la aplicación](/docs/agents/manage-apm-agents/app-naming/name-your-application) a su comando `docker run` como variables de entorno:

   ```bash
   docker run -e NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY \
          -e NEW_RELIC_APP_NAME="YOUR_APP_NAME" \
          YOUR_IMAGE_NAME:latest
   ```

<InstallFeedback/>

## Otras opciones de configuración [#configure]

<Callout variant="caution">
  No incluya su clave de licencia en su Dockerfile o imagen docker . Para obtener más información, consulte [nuestra documentación sobre seguridad de clave de licencia](/docs/accounts/install-new-relic/account-setup/license-key#license-key-security).
</Callout>

Además de configurar el nombre de su aplicación o la clave de licencia, puede configurar [otras opciones de configuración](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration) iniciando su contenedor con la opción `-e` . Por ejemplo, para habilitar [rastreo distribuido](/docs/understand-dependencies/distributed-tracing/get-started/introduction-distributed-tracing), use:

```bash
 docker run -e NEW_RELIC_LICENSE_KEY=YOUR_LICENSE_KEY \
        -e NEW_RELIC_APP_NAME="YOUR_APP_NAME" \
        -e NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true \
        YOUR_IMAGE_NAME:latest
```

También puede establecer opciones de configuración en su Dockerfile usando directivas `ENV` :

```dockerfile
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true \
    NEW_RELIC_LOG=stdout
    # etc.
```
