---
title: Instale el agente Python en el entorno flexible GAE
tags:
  - Agents
  - Python agent
  - Hosting services
metaDescription: How to install your Python app in the Google App Engine (GAE) flexible environment.
freshnessValidatedDate: never
translationType: machine
---

Con el [agente Python](/docs/agents/python-agent/getting-started/introduction-new-relic-python), puede monitor aplicaciones que residen en el [entorno flexible de Google App Engine (GAE)](https://cloud.google.com/appengine/docs/flexible/python/). Agregar datos de agente a su aplicación GAE flex le brinda información valiosa sobre el estado y el rendimiento de su aplicación y amplía GAE con métricas que puede ver en la UI de New Relic.

Este documento explica cómo agregar datos de agente a su aplicación GAE flex utilizando cualquiera de estos métodos:

* Instalación [en "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) de Google App Engine con un tiempo de ejecución GAE estándar
* Instalación Docker usando un [tiempo de ejecución personalizado](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)

## Desplegar usando el soporte nativo de GAE [#native]

Al utilizar la instalación [en "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) de Google App Engine, usted proporciona el código de su aplicación y un archivo `app.yaml` . Luego, Google App Engine lo desplegará en una imagen Docker estándar prediseñada.

Por ejemplo, para implementar con soporte nativo para una aplicación Flask/Django:

1. Siga los procedimientos estándar para [instalar el agente Python](/docs/agents/python-agent/getting-started/python-agent-quick-start#install), incluido su

   <InlinePopover type="licenseKey"/>

   .

2. Establezca [`NEW_RELIC_CONFIG_FILE`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#agent-configuration-file) como una variable de entorno que apunte a `newrelic.ini`.

Una vez que se hayan instalado el agente y el archivo de configuración, el agente Python puede monitor automáticamente la aplicación que reside en el entorno flexible GAE. Espere hasta que se complete el despliegue, luego vea los datos de su aplicación GAE flex en la [página Resumen de APM](/docs/apm/applications-menu/monitoring/apm-overview-page).

## Cree un tiempo de ejecución personalizado usando Docker [#build-runtime]

Consulte [la documentación de Google para crear tiempos de ejecución personalizados](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build). Este ejemplo describe cómo agregar datos del agente a su aplicación GAE flex mediante la creación de un tiempo de ejecución personalizado para Docker.

Para obtener más información sobre cómo implementar y configurar su aplicación Node.js en el entorno flexible GAE, consulte:

* [Nuestros ejemplos flexibles de GAE en Github](https://github.com/GoogleCloudPlatform/python-docs-samples/tree/master/appengine/flexible) para Python
* [Documentación de Google App Engine](https://cloud.google.com/appengine/docs/flexible/python/) para Python
* [Tutoriales de Google App Engine](https://cloud.google.com/appengine/docs/flexible/python/tutorials) para desplegar una aplicación Python

<CollapserGroup>
  <Collapser
    id="setup-gae"
    title="1. Configure el proyecto GAE e instale dependencia"
  >
    Al crear un tiempo de ejecución personalizado usando Docker, configure [`NEW_RELIC_CONFIG_FILE`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#agent-configuration-file) como una variable de entorno que apunte al Dockerfile en lugar de al `newrelic.ini` de su aplicación Python.

    1. Siga los procedimientos estándar para [instalar el agente Python](/docs/agents/python-agent/getting-started/python-agent-quick-start#install), incluido su <InlinePopover type="licenseKey"/>.

    2. Siga los procedimientos de Google App Engine Python para crear un [proyecto de Google Cloud Platform](https://cloud.google.com/appengine/docs/flexible/python/managing-projects-apps-billing#create), crear una aplicación de App Engine y completar otros requisitos previos para el [SDK de Google Cloud](http://cloud.google.com/appengine/docs/flexible/python/download).

       El SDK de Google Cloud también proporciona la herramienta `gcloud` línea de comando para administrar e implementar aplicaciones GAE.
  </Collapser>

  <Collapser
    id="configure-app-yaml"
    title="2. Configura tu app.yaml"
  >
    El archivo de configuración `app.yaml` es necesario para una aplicación de entorno flexible GAE con un tiempo de ejecución personalizado. Como mínimo, asegúrese de que contenga:

    ```
    env: flex
    runtime: custom
    ```
  </Collapser>

  <Collapser
    id="configure-dockerfile"
    title="3. Configurar un Dockerfile"
  >
    El [Dockerfile](http://docs.docker.com/engine/reference/builder/) define la imagen de Docker que se creará y es necesario para una aplicación de entorno flexible GAE. El siguiente ejemplo de Dockerfile muestra el agente Python instalado para una aplicación servida con gunicorn.

    Estos procedimientos son similares a la [guía de inicio rápido de Python](/docs/agents/python-agent/getting-started/python-agent-quick-start). El Dockerfile contendrá código específico del cliente, incluida la versión de Python, los requisitos de instalación, etc.).

    ```
    # [START dockerfile]
    FROM gcr.io/google_appengine/python

    # Install the fortunes binary from the debian repositories.
    RUN apt-get update && apt-get install -y fortunes

    # Optional: Change the -p argument to use Python 2.7.
    RUN virtualenv /env -p python3.5

    # Set virtualenv environment variables. This is equivalent to running
    # source /env/bin/activate.
    ENV VIRTUAL_ENV /env
    ENV PATH /env/bin:$PATH

    ADD requirements.txt /app/
    RUN pip install -r requirements.txt
    ADD . /app/

    CMD NEW_RELIC_CONFIG_FILE=newrelic.ini newrelic-admin run-program gunicorn -b :$PORT main:app
    # [END dockerfile]
    ```
  </Collapser>

  <Collapser
    id="deploy-docker-image-to-gae"
    title="4. desplegar la imagen Docker en el entorno flexible GAE inicializado"
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

    4. Para ver los datos de su aplicación GAE flex, vaya a la [página Resumen de APM](/docs/apm/applications-menu/monitoring/apm-overview-page).
  </Collapser>
</CollapserGroup>

## Recomendación: deshabilite los controles de salud [#health-checks]

Google App Engine envía [solicitudes periódicas de verificación de estado](https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed) para confirmar que una instancia se ha implementado correctamente y para comprobar que una instancia en ejecución mantiene un estado saludable. Una verificación de estado es una solicitud HTTP a la URL `/_ah/health`.

Si crea un tiempo de ejecución personalizado, su aplicación debe poder manejar una gran cantidad de solicitudes de verificación de estado. De lo contrario, es posible que los datos de su aplicación no se muestren correctamente en APM.

<DNT>**Recommendation:**</DNT> Configure su `app.yaml` para [deshabilitar las comprobaciones de estado](https://cloud.google.com/appengine/docs/flexible/python/configuring-your-app-with-app-yaml#health_checks) agregando:

```
health_check:
  enable_health_check: False
```

## Obtener el registro de resolución de problemas del agente del GAE [#agent-logs]

Utilice estos recursos para solucionar problemas de su aplicación de entorno flexible GAE:

* Para conectarse a la instancia GAE e iniciar un shell en el contenedor Docker que ejecuta su código, consulte [Depurar una instancia](https://cloud.google.com/appengine/docs/flexible/python/debugging-an-instance).

* Para redirigir el registro del agente Python a [Stackdriver](http://cloud.google.com/logging/docs/view/logs_viewer_v2) en la [consola de Cloud plataforma](https://cloud.google.com/compute/docs/console), agregue la siguiente declaración a la configuración `newrelic.ini` :

  ```
  log_file = stderr
  ```

* Para ver el registro, utilice el [Visor de log de la Consola de Cloud plataforma](https://cloud.google.com/appengine/docs/flexible/php/writing-application-logs).
