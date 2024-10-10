---
title: Instale el agente New Relic Node.js en el entorno flexible GAE
tags:
  - Agents
  - Nodejs agent
  - Hosting services
metaDescription: How to install your APM's Node.js app in the Google App Engine (GAE) flexible environment.
freshnessValidatedDate: never
translationType: machine
---

Con [el agente Node.js](/docs/agents/nodejs-agent/getting-started/introduction-new-relic-nodejs) de New Relic, puede monitor aplicaciones que residen en el [entorno flexible de Google App Engine (GAE)](https://cloud.google.com/appengine/docs/flexible/nodejs/). Agregar New Relic a su aplicación GAE flex le brinda información valiosa sobre el estado y el rendimiento de su aplicación y amplía GAE con métricas que puede ver en [<InlinePopover type="apm"/>](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm)y [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser).

Este documento explica cómo agregar New Relic a su aplicación GAE flex utilizando cualquiera de estos métodos:

* Instalación [en "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) de Google App Engine con un tiempo de ejecución GAE estándar
* Instalación Docker usando un [tiempo de ejecución personalizado](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)

## Usar despliegue nativo [#native-mode]

Para utilizar la instalación [en "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) de Google App Engine con su aplicación Node.js:

1. Siga los procedimientos estándar para [instalar el agente Node.js de New Relic](/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent), incluido su <InlinePopover type="licenseKey"/>. Asegúrese de guardar el módulo `newrelic` en el archivo `package.json` .

2. Siga [los procedimientos de Google App Engine para Node.js](https://cloud.google.com/appengine/docs/flexible/nodejs/quickstart) para crear un nuevo proyecto de plataforma Cloud, crear una aplicación App Engine y completar otros requisitos previos para [Google Cloud SDK](https://cloud.google.com/sdk/gcloud/).

3. Opcional: establezca variables de entorno para configurar el [archivo GAE `app.yaml` ](https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml)del agente Node.js.

4. Utilice la herramienta de línea de comando `gcloud` del SDK de Google Cloud para implementar aplicaciones GAE. Para implementar su aplicación Node.js en su [entorno flexible GAE inicializado](https://cloud.google.com/sdk/docs/initializing), ejecute el siguiente comando:

   ```bash
   gcloud --project new-relic-apm-nodejs app deploy
   ```

Google App Engine incluye automáticamente el archivo de configuración `newrelic.js` de su aplicación Node.js en el paquete desplegar. Espere hasta que se complete el despliegue y luego vea los datos de su aplicación GAE flex en la [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/apm-overview-page).

## Cree un tiempo de ejecución personalizado [#build-runtime]

Consulte [la documentación de Google para crear tiempos de ejecución personalizados](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build). Este ejemplo describe cómo agregar New Relic a su aplicación GAE flex mediante la creación de un tiempo de ejecución personalizado para docker. Puedes desplegar la aplicación sin ninguna configuración especial.

Para obtener más información sobre cómo implementar y configurar su aplicación Node.js en el entorno flexible GAE, consulte:

* [Documentación de Google App Engine](https://cloud.google.com/appengine/docs/flexible/nodejs/) para Node.js
* [Tutorial de Google App Engine](https://cloud.google.com/community/tutorials/run-expressjs-on-google-app-engine) para desplegar una aplicación Node.js

<CollapserGroup>
  <Collapser
    id="setup-gae"
    title="1. Configure el proyecto GAE e instale dependencia"
  >
    1. Siga los procedimientos estándar para [instalar el agente Node.js de New Relic](/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent), incluido su <InlinePopover type="licenseKey"/>. Asegúrese de guardar el módulo `newrelic` en el archivo `package.json` .

    2. Siga [los procedimientos de Google App Engine para Node.js](https://cloud.google.com/appengine/docs/flexible/nodejs/quickstart) para crear un nuevo proyecto de plataforma Cloud, crear una aplicación App Engine y completar otros requisitos previos para [Google Cloud SDK](https://cloud.google.com/sdk/gcloud/).

       El SDK de Google Cloud proporciona la herramienta `gcloud` línea de comando para administrar e implementar aplicaciones GAE.
  </Collapser>

  <Collapser
    id="configure-app-yaml"
    title="2. Configura tu app.yaml"
  >
    El archivo de configuración `app.yaml` es necesario para una aplicación de entorno flexible GAE con un tiempo de ejecución personalizado. Como mínimo, asegúrese de que contenga:

    ```yml
    runtime: custom
    env: flex
    ```

    Opcional: establezca variables de entorno.
  </Collapser>

  <Collapser
    id="configure-dockerfile"
    title="3. Configurar y desplegar"
  >
    El [Dockerfile](http://docs.docker.com/engine/reference/builder/) define la imagen de Docker que se creará y es necesario para una aplicación de entorno flexible GAE.

    1. Para crear el Dockerfile, compilar el contenedor y desplegar su aplicación, siga los [procedimientos GAE para Node.js.](https://cloud.google.com/appengine/docs/flexible/nodejs/run-flex-app-on-gke)

    2. Espere hasta que se complete el despliegue.

    3. Para ver los datos de su aplicación GAE flex en New Relic, vaya a la [página APM](/docs/apm/applications-menu/monitoring/apm-overview-page)

       <DNT>
         [**Summary**](/docs/apm/applications-menu/monitoring/apm-overview-page)
       </DNT>

       [](/docs/apm/applications-menu/monitoring/apm-overview-page).
  </Collapser>
</CollapserGroup>

## Opcional: deshabilite los controles de estado [#health-checks]

Google App Engine envía [solicitudes periódicas de verificación de estado](https://cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml#health_checks) para confirmar que una instancia se ha implementado correctamente y para comprobar que una instancia en ejecución mantiene un estado saludable. Una verificación de estado es una solicitud HTTP a la URL `/_ah/health`.

Si crea un tiempo de ejecución personalizado, su aplicación debe poder manejar una gran cantidad de solicitudes de verificación de estado. De lo contrario, es posible que los datos de su aplicación no se muestren correctamente en APM.

Si nota problemas de rendimiento, desactive las comprobaciones de estado de GAE. En tu `app.yaml`, agrega:

```yml
health_check:
  enable_health_check: False
```

## Obtenga el registro de resolución de problemas del agente New Relic de GAE [#agent-logs]

Utilice estos recursos para solucionar problemas de su aplicación de entorno flexible GAE:

* Para conectarse a la instancia GAE e iniciar un shell en el contenedor docker que ejecuta su código, consulte [Depurar una instancia](https://cloud.google.com/appengine/docs/flexible/go/debugging-an-instance).

* Para redirigir el registro del agente New Relic Node.js a [Stackdriver](http://cloud.google.com/logging/docs/view/logs_viewer_v2) en la [consola de Cloud plataforma](https://cloud.google.com/compute/docs/console), cambie el archivo de configuración `newrelic.js` a:

  ```yml
  log_file_name: STDOUT
  ```

* Para ver el registro, utilice el [Visor de log de la Consola de Cloud plataforma](https://cloud.google.com/appengine/docs/flexible/php/writing-application-logs).
