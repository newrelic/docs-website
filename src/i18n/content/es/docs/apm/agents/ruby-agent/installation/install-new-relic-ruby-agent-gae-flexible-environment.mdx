---
title: Instale el agente New Relic Ruby en el entorno flexible GAE
tags:
  - Agents
  - Ruby agent
  - Installation
metaDescription: How to set up the New Relic Ruby agent with an app on the Google App Engine (GAE) flexible environment.
freshnessValidatedDate: never
translationType: machine
---

Con [el agente Ruby](/docs/agents/ruby-agent/getting-started/introduction-new-relic-ruby) de APM, puede monitor aplicaciones que residen en el [entorno flexible de Google App Engine (GAE)](https://cloud.google.com/appengine/docs/flexible/ruby/). Agregar New Relic a su aplicación GAE flex le brinda información valiosa sobre el estado y el rendimiento de su aplicación y amplía GAE con métricas que puede ver usando soluciones como [<InlinePopover type="apm"/>](/docs/apm)y [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser).

Este documento explica cómo agregar New Relic a su aplicación GAE flex utilizando cualquiera de estos métodos:

* Instalación [en "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) de Google App Engine con un tiempo de ejecución GAE estándar
* Instalación Docker usando un [tiempo de ejecución personalizado](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)

El método de ejecución personalizado incluye un ejemplo de implementar una aplicación Sinatra. Si necesita una biblioteca o encabezados específicos, New Relic recomienda utilizar el método de tiempo de ejecución personalizado.

## Desplegar usando el soporte nativo de GAE [#native]

Al utilizar la instalación [en "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) de Google App Engine, usted proporciona el código de su aplicación y un archivo `app.yaml` . Luego, Google App Engine lo desplegará en una imagen Docker estándar prediseñada.

Para implementar con soporte nativo para Sinatra o Rails:

1. Siga los procedimientos estándar de New Relic para [instalar la gema](/docs/agents/ruby-agent/installation/install-new-relic-ruby-agent#Installing_the_Gem), incluido su

   <InlinePopover type="licenseKey"/>

   .

2. Instale el [archivo de configuración](/docs/agents/ruby-agent/installation/install-new-relic-ruby-agent#Configuration_file) del agente Ruby.

Una vez que se hayan instalado la gema y el archivo de configuración, el agente Ruby puede monitor automáticamente la aplicación que reside en el entorno flexible GAE. Espere hasta que se complete el despliegue, luego vea los datos de su aplicación GAE flex en la [página Resumen de APM](/docs/apm/applications-menu/monitoring/apm-overview-page).

## Cree un tiempo de ejecución personalizado usando Docker [#build-runtime]

<Callout variant="tip">
  Si su aplicación Ruby necesita una biblioteca o encabezados específicos, New Relic recomienda utilizar el método de tiempo de ejecución personalizado. Además, New Relic recomienda que permita que Google App Engine se encargue de los controles de estado.
</Callout>

Consulte [la documentación de Google para crear tiempos de ejecución personalizados](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build). Este ejemplo describe cómo agregar New Relic a su aplicación GAE flex mediante la creación de un tiempo de ejecución personalizado para docker. El ejemplo utiliza una aplicación Sinatra para Ruby.

Para obtener más información sobre cómo implementar y configurar su aplicación Ruby en el entorno flexible GAE, consulte:

* [Documentación de Google App Engine](https://cloud.google.com/appengine/docs/flexible/ruby/) para Ruby
* [Tutoriales de Google App Engine](https://cloud.google.com/appengine/docs/flexible/ruby/tutorials) para Ruby

<CollapserGroup>
  <Collapser
    id="setup-gae"
    title="1. Configure el proyecto GAE e instale dependencia"
  >
    1. Siga los procedimientos estándar para instalar el agente Ruby de New Relic, incluido su <InlinePopover type="licenseKey"/>.

    2. Siga los procedimientos de Google App Engine para Ruby para crear un nuevo [proyecto de Google Cloud Platform](https://cloud.google.com/appengine/docs/flexible/ruby/managing-projects-apps-billing#create), crear una aplicación de App Engine y completar otros requisitos previos para el [SDK de Google Cloud](http://cloud.google.com/appengine/docs/flexible/ruby/download).

       El SDK de Google Cloud proporciona la herramienta `gcloud` línea de comando para administrar e implementar aplicaciones GAE.
  </Collapser>

  <Collapser
    id="configure-app-yaml"
    title="2. Configura tu app.yaml"
  >
    El archivo de configuración `app.yaml` es necesario para una aplicación de entorno flexible GAE con un tiempo de ejecución personalizado. Como mínimo, asegúrese de que contenga:

    ```
    env: flex
    runtime: custom
    entrypoint: bundle exec ruby app.rb
    ```
  </Collapser>

  <Collapser
    id="configure-dockerfile"
    title="3. Configurar un Dockerfile"
  >
    El [Dockerfile](http://docs.docker.com/engine/reference/builder/) define la imagen de Docker que se creará y es necesario para una aplicación de entorno flexible GAE. Para crear la imagen base recomendada para el monitor de aplicaciones mediante el agente New Relic Ruby:

    ```
    FROM gcr.io/google-appengine/ruby:latest
    ```
  </Collapser>

  <Collapser
    id="build-docker-image"
    title="4. Cree una imagen Docker"
  >
    Asegúrese de incluir el punto al final del código, para indicar que el directorio actual contiene los archivos de compilación.

    ```
    docker build -f Dockerfile -t custom_ruby_app_container:latest .
    ```

    Después de ejecutar este comando, verifique que tenga una imagen docker denominada `custom_ruby_app_container` y la etiqueta `latest`.
  </Collapser>

  <Collapser
    id="deploy-docker-image-to-gae"
    title="5. desplegar la imagen Docker en el entorno flexible GAE inicializado"
  >
    1. Para desplegar la imagen de su Docker en su [entorno flexible GAE inicializado](https://cloud.google.com/sdk/docs/initializing), ejecute el siguiente comando:

       ```
       gcloud app deploy
       ```

    2. Espere hasta que se complete el despliegue.

    3. Para abrir la aplicación en el browser, ejecute el siguiente comando:

       ```
       gcloud app browse
       ```

    4. Para ver los datos de su aplicación GAE flex en New Relic, vaya a la [página Resumen de APM](/docs/apm/applications-menu/monitoring/apm-overview-page).
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Recomendación: realizar controles de salud [#health-checks]

Google App Engine envía [solicitudes periódicas de verificación de estado](https://cloud.google.com/appengine/docs/flexible/ruby/how-instances-are-managed) para confirmar que una instancia se ha implementado correctamente y para comprobar que una instancia en ejecución mantiene un estado saludable. Una verificación de estado es una solicitud HTTP a la URL `/_ah/health`.

Si crea un tiempo de ejecución personalizado, su aplicación debe poder manejar una gran cantidad de solicitudes de verificación de estado. De lo contrario, es posible que los datos de su aplicación no se muestren correctamente en APM.

New Relic recomienda [permitir comprobaciones de estado de las aplicaciones Ruby](https://cloud.google.com/appengine/docs/flexible/ruby/how-instances-are-managed#health_checking) para que Google pueda comprobar que su servicio está funcionando y equilibrado correctamente. Sin embargo, si los controles de estado excesivos causan una congestión en la traza de la transacción, puede configurar el agente Ruby para que ignore las solicitudes de control de estado.

* Para

  <DNT>
    **handle**
  </DNT>

  verificaciones de estado, agregue una ruta para `_ah/health` en su aplicación.

* Para

  <DNT>
    **ignore**
  </DNT>

  solicitudes de verificación de estado, establezca la configuración `rules.ignore_url_regexes` en la configuración del agente Ruby de la aplicación para incluir `'_ah/health'`.

## Obtenga el registro de resolución de problemas del agente New Relic de GAE [#agent-logs]

Utilice estos recursos para solucionar problemas de su aplicación de entorno flexible GAE:

* Para conectarse a la instancia GAE e iniciar un shell en el contenedor docker que ejecuta su código, consulte [Depurar una instancia](https://cloud.google.com/appengine/docs/flexible/go/debugging-an-instance).

* Para redirigir el registro del agente Ruby de New Relic a [Stackdriver](http://cloud.google.com/logging/docs/view/logs_viewer_v2) en la [consola de la plataforma Cloud](https://cloud.google.com/compute/docs/console), cambie el archivo de configuración `newrelic.js` a:

  ```
  log_file_name: STDOUT
  ```

* Para ver el registro, utilice el [Visor de log de la Consola de Cloud plataforma](https://cloud.google.com/appengine/docs/flexible/php/writing-application-logs).
