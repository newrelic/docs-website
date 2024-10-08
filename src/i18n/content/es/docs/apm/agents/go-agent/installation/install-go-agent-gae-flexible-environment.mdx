---
title: Instale el agente Go en el entorno flexible GAE
tags:
  - Agents
  - Go agent
  - Installation
metaDescription: How to install your New Relic's Go app in the Google App Engine (GAE) flexible environment.
freshnessValidatedDate: never
translationType: machine
---

Con nuestro [agente Go](/docs/agents/go-agent/get-started/introduction-new-relic-go), puede monitor las aplicaciones que residen en el [entorno flexible de Google App Engine (GAE)](https://cloud.google.com/appengine/docs/flexible/go/). Agregar New Relic a su aplicación GAE flex le brinda información valiosa sobre el estado y el rendimiento de su aplicación y amplía GAE con métricas que puede ver en [APM](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm) y [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser).

Aquí explicamos cómo agregar New Relic a su aplicación GAE flex configurando un [tiempo de ejecución personalizado](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes) y damos un ejemplo de cómo implementar una aplicación Go con docker.

<Callout variant="important">
  El agente Go puede ejecutarse en un entorno flexible GAE utilizando un tiempo de ejecución personalizado. Debido a las limitaciones de otros entornos, no utilice el entorno estándar GAE ni la instalación [en "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) de Google App Engine.
</Callout>

## Cree un tiempo de ejecución personalizado usando Docker [#build-runtime]

Consulte [la documentación de Google para crear tiempos de ejecución personalizados](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build). Este ejemplo describe cómo agregar New Relic a su aplicación GAE flex instalando el agente Go, creando un tiempo de ejecución de Go personalizado para docker y implementando una aplicación Golang.

Para obtener más información sobre cómo implementar y configurar su aplicación Go en el entorno flexible GAE, consulte:

* [Documentación de Google App Engine](https://cloud.google.com/appengine/docs/flexible/go/) para Go
* [Tutoriales de Google App Engine](https://cloud.google.com/appengine/docs/flexible/go/tutorials) para desplegar una aplicación Go

<CollapserGroup>
  <Collapser
    id="setup-gae"
    title="1. Configure el proyecto GAE e instale dependencia"
  >
    1. Siga los procedimientos estándar para [instalar el agente Go](/docs/agents/go-agent/get-started/get-new-relic-go) para su servidor de aplicaciones específico, incluida su [clave de licencia](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key).

    2. Siga [los procedimientos de Google App Engine para Go](https://cloud.google.com/appengine/docs/flexible/go/quickstart) para crear un nuevo proyecto de plataforma Cloud, crear una aplicación App Engine, descargar e instalar [git](https://git-scm.com) y completar otros requisitos previos para [Google Cloud SDK](https://cloud.google.com/sdk/docs/).

       El SDK de Google Cloud proporciona la herramienta `gcloud` línea de comando para administrar e implementar aplicaciones GAE.
  </Collapser>

  <Collapser
    id="configure-app-yaml"
    title="2. Configura tu app.yaml"
  >
    El archivo de configuración `app.yaml` es necesario para una aplicación de entorno flexible GAE con un tiempo de ejecución personalizado. Como mínimo, asegúrese de que contenga:

    ```yaml
    runtime: custom
    env: flex
    ```
  </Collapser>

  <Collapser
    id="configure-dockerfile"
    title="3. Configurar un Dockerfile"
  >
    El [Dockerfile](http://docs.docker.com/engine/reference/builder/) define la imagen de Docker que se creará y es necesario para una aplicación de entorno flexible GAE. El siguiente código de ejemplo de Dockerfile define la versión de golang utilizada.

    ```dockerfile
    FROM golang:1.8-onbuild
    CMD go run main.go
    ```
  </Collapser>

  <Collapser
    id="build-docker-image"
    title="4. Cree una imagen Docker"
  >
    Para crear la imagen Docker , ejecute el siguiente comando. Asegúrese de incluir el punto al final del código, para indicar que el directorio actual contiene los archivos de compilación.

    ```bash
    docker build --rm -t Docker-image-name .
    ```
  </Collapser>

  <Collapser
    id="deploy-docker-image-to-gae"
    title="5. desplegar la imagen Docker en el entorno flexible GAE inicializado"
  >
    1. Para desplegar la imagen de su Docker en su [entorno flexible GAE inicializado](https://cloud.google.com/sdk/docs/initializing), ejecute el siguiente comando:

       ```bash
       gcloud --project go-app-name app deploy
       ```

    2. Espere hasta que se complete el despliegue.

    3. Para ver los datos de su aplicación GAE flex en New Relic, vaya a la [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/apm-overview-page).
  </Collapser>
</CollapserGroup>

<InstallFeedback/>

## Recomendación: deshabilite los controles de salud [#health-checks]

Google App Engine envía [solicitudes periódicas de verificación de estado](https://cloud.google.com/appengine/docs/flexible/go/configuring-your-app-with-app-yaml#health_checks) para confirmar que una instancia se ha implementado correctamente y para comprobar que una instancia en ejecución mantiene un estado saludable. Una verificación de estado es una solicitud HTTP a la URL `/_ah/health`.

Si crea un tiempo de ejecución personalizado, su aplicación debe poder manejar una gran cantidad de solicitudes de verificación de estado. De lo contrario, es posible que los datos de su aplicación no se muestren correctamente en APM.

<DNT>**Recommendation:**</DNT> Configure su `app.yaml` para deshabilitar las comprobaciones de estado agregando:

```yaml
health_check:
  enable_health_check: False
```

## Obtener el registro de resolución de problemas del agente del GAE [#agent-logs]

Utilice estos recursos para solucionar problemas de su aplicación de entorno flexible GAE:

* Para conectarse a la instancia de GAE e iniciar un shell en el contenedor docker que ejecuta su código, consulte [la documentación de GAE para depurar una instancia](https://cloud.google.com/appengine/docs/flexible/go/debugging-an-instance).

* Para redirigir el registro del agente de New Relic Go a [Stackdriver](http://cloud.google.com/logging/docs/view/logs_viewer_v2) en la [consola de Cloud plataforma](https://cloud.google.com/compute/docs/console), cambie el archivo `newrelic.yml` a:

  ```yaml
  log_file_name: STDOUT
  ```
