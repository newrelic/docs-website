---
title: Instale New Relic agente de Java en el entorno flexible GAE
tags:
  - Agents
  - Java agent
  - Additional installation
metaDescription: How to set up the New Relic Java agent with an app on the Google App Engine (GAE) flexible environment.
freshnessValidatedDate: never
translationType: machine
---

Con [el agente de Java](/docs/agents/java-agent/getting-started/introduction-new-relic-java) de APM, puede monitor aplicaciones que residen en el [entorno flexible de Google App Engine (GAE)](https://cloud.google.com/appengine/docs/flexible/java/). Agregar New Relic a su aplicación GAE flex le brinda información valiosa sobre el estado y el rendimiento de su aplicación y amplía GAE con métricas que puede ver en [<InlinePopover type="apm"/>](/docs/apm/new-relic-apm/getting-started/introduction-new-relic-apm), [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)y [el panel](/docs/query-your-data/explore-query-data/dashboards/introduction-new-relic-one-dashboards).

Este documento explica cómo agregar New Relic a su aplicación GAE flex configurando un [tiempo de ejecución personalizado](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes) y brinda un ejemplo de cómo implementar una aplicación Tomcat con docker.

<Callout variant="important">
  El agente de Java New Relic puede ejecutarse en un entorno flexible GAE utilizando un tiempo de ejecución personalizado. Debido a las limitaciones de otros entornos, no utilice el entorno estándar GAE ni la instalación [en "modo nativo"](/docs/accounts-partnerships/partnerships/google-cloud-platform-gcp/google-app-engine-environment#native-mode) de Google App Engine.
</Callout>

## Cree un tiempo de ejecución personalizado usando Docker [#build-runtime]

Consulte [la documentación de Google para crear tiempos de ejecución personalizados](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build). Hay muchas formas de crear un tiempo de ejecución personalizado que contenga el agente de Java New Relic ([por ejemplo, usando Tomcat](#tomcat-example)). En general, para crear un tiempo de ejecución personalizado:

1. [Configure su aplicación](#setup-gae) e instale la dependencia necesaria relacionada con GAE para tiempos de ejecución personalizados. Incluya el agente de Java New Relic en el proyecto.

2. Configure [Maven o Gradle](#configure-pom-xml) según corresponda.

3. Configure el [archivo`app.yaml` ](#configure-app-yaml).

4. Configure el [Dockerfile](#configure-dockerfile).

5. [Construya la imagen de Docker](#build-docker-image).

6. [desplegar](#deploy-docker-image-to-gae) la imagen de Docker en el entorno flexible GAE inicializado.

7. <DNT>
     **Recommendation:**
   </DNT>

   [Deshabilite las comprobaciones de estado de GAE](#health-checks).

Para obtener más información sobre cómo implementar y configurar su aplicación Java en el entorno flexible GAE, consulte:

* [Documentación de Google App Engine](https://cloud.google.com/appengine/docs/flexible/java/) para Java
* [Tutoriales de Google App Engine](https://cloud.google.com/appengine/docs/flexible/java/tutorials) para desplegar una aplicación Java

## Ejemplo flexible de GAE con Tomcat [#tomcat-example]

Este ejemplo describe cómo agregar New Relic a su aplicación GAE flex instalando el agente de Java New Relic, creando un tiempo de ejecución personalizado y implementando una aplicación WAR en Tomcat. Asegúrese de [instalar el agente de Java](/docs/agents/java-agent/installation/include-java-agent-jvm-argument) según sea necesario para su servidor de aplicaciones específico.

<CollapserGroup>
  <Collapser
    id="setup-gae"
    title="1. Configure el proyecto flexible GAE e instale la dependencia"
  >
    1. Siga los procedimientos estándar para [instalar el agente de Java](/docs/agents/java-agent/installation/include-java-agent-jvm-argument) según sea necesario para su servidor de aplicaciones específico y obtenga su [clave de licencia](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key).

    2. Siga [los procedimientos de Google App Engine para Java](https://cloud.google.com/appengine/docs/flexible/java/managing-projects-apps-billing#create) para crear un nuevo proyecto de plataforma Cloud, crear una aplicación App Engine y completar otros requisitos previos para el [SDK de Google Cloud](https://cloud.google.com/sdk/gcloud/).

    3. Instale cualquier dependencia necesaria, como el complemento [Maven](https://cloud.google.com/appengine/docs/flexible/java/using-maven) o [Gradle](https://cloud.google.com/appengine/docs/flexible/java/using-gradle) App Engine y [Java](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html).

       El SDK de Google Cloud proporciona la herramienta `gcloud` línea de comando para administrar e implementar aplicaciones GAE.
  </Collapser>

  <Collapser
    id="configure-pom-xml"
    title="2. Configure Maven pom.xml para incluir el agente de Java y el proyecto de compilación."
  >
    Este ejemplo utiliza Maven para construir el proyecto, una imagen docker Tomcat para ejecutarlo y la herramienta `gcloud` línea de comando para desplegar la imagen docker en un entorno flexible GAE.

    1. Agregue el agente de Java dependencia al directorio `target` del proyecto cuando se cree el proyecto, cuando [descargue y descomprima todos los componentes del agente de Java](/docs/agents/java-agent/frameworks/maven-installation-java#h2-zip).

    2. Después de agregar el agente de Java dependencia a `pom.xml`, cree su aplicación ejecutando:

       ```
       mvn clean install
       ```

    3. Verifique el directorio `target` de su proyecto para encontrar el archivo `WAR` de la aplicación y un directorio `newrelic` descomprimido.

       Estos archivos se incorporarán a una imagen docker .

       <Callout variant="tip">
         También puedes agregar el [complemento App Engine Maven o Jetty Maven](http://cloud.google.com/appengine/docs/flexible/java/using-maven#adding_the_app_engine_maven_and_jetty_maven_plugins) a tu `pom.xml`. Esto le permitirá utilizar Maven para implementar su aplicación en un entorno flexible GAE.
       </Callout>
  </Collapser>

  <Collapser
    id="configure-app-yaml"
    title="3. Configura tu app.yaml"
  >
    El archivo de configuración [app.yaml](https://cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml) es necesario para una aplicación de entorno flexible GAE con un tiempo de ejecución personalizado. Como mínimo, asegúrese de que contenga:

    ```
    env: flex
    runtime: custom
    ```
  </Collapser>

  <Collapser
    id="configure-dockerfile"
    title="4. Configurar el Dockerfile"
  >
    El [Dockerfile](http://docs.docker.com/engine/reference/builder/) define la imagen de Docker que se creará y es necesario para una aplicación de entorno flexible GAE. En el siguiente código de ejemplo de Dockerfile, los archivos `newrelic.yml` y `catalina.sh` se han configurado localmente para reemplazar los que ya se copiaron en la imagen docker . (Puede agregar su [clave de licencia de New Relic](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key) directamente a su Dockerfile o usar una variable de entorno en su comando `docker run` .)

    ```
    # base Tomcat image to build Docker image from
    FROM tomcat:8.5.14-jre8

    MAINTAINER Jane Doe <janedoe@mail.com>

    # Tomcat directory to copy Java agent files to
    ENV NEWRELIC_HOME /usr/local/tomcat/newrelic

    # copy application war from target to Tomcat webapps
    ADD target/*.war /usr/local/tomcat/webapps

    # copy Java agent files from target to Tomcat NEWRELIC_HOME
    ADD target/newrelic ${NEWRELIC_HOME}

    # update Java agent yml with license_key and app_name and copy to image  
    ADD newrelic.yml ${NEWRELIC_HOME}

    # update catalina.sh with <a href="/docs/agents/java-agent/installation/include-java-agent-jvm-argument#tomcat-catalinash">-javaagent:/path/to/newrelic.jar</a> and copy to image 
    ADD catalina.sh /usr/local/tomcat/bin/
    ```
  </Collapser>

  <Collapser
    id="build-docker-image"
    title="5. Cree la imagen de la docker ."
  >
    Para crear una imagen docker que ejecute Tomcat con el agente de Java New Relic monitoreando su aplicación WAR de implementación, ejecute el siguiente comando. Asegúrese de incluir el punto al final del código, para indicar que el directorio actual contiene los archivos de compilación.

    ```
    docker build -f Dockerfile -t newrelic-tomcat .
    ```

    Después de ejecutar este comando, verifique que tenga una imagen docker llamada `newrelic-tomcat`.
  </Collapser>

  <Collapser
    id="deploy-docker-image-to-gae"
    title="6. desplegar la imagen docker en el entorno flexible GAE inicializado"
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

    4. Para ver los datos de su aplicación GAE flex en New Relic, vaya a la [página APM <DNT>**Summary**</DNT> ](/docs/apm/applications-menu/monitoring/apm-overview-page).
  </Collapser>
</CollapserGroup>

## Recomendación: deshabilite los controles de salud [#health-checks]

Google App Engine envía [solicitudes periódicas de verificación de estado](https://cloud.google.com/appengine/docs/flexible/java/how-instances-are-managed) para confirmar que una instancia se ha implementado correctamente y para comprobar que una instancia en ejecución mantiene un estado saludable. Una verificación de estado es una solicitud HTTP a la URL `/_ah/health`.

Si crea un tiempo de ejecución personalizado, su aplicación debe poder manejar una gran cantidad de solicitudes de verificación de estado. De lo contrario, es posible que los datos de su aplicación no se muestren correctamente en APM. Para evitar agregar sobrecarga de instrumentación adicional y distorsionar el rendimiento de su aplicación, le recomendamos que deshabilite la verificación de estado.

<DNT>**Recommendation:**</DNT> Configure su `app.yaml` para [deshabilitar las comprobaciones de estado](https://cloud.google.com/appengine/docs/flexible/java/configuring-your-app-with-app-yaml#health_checks) agregando:

```
health_check:
  enable_health_check: False
```

## Obtener agente de Java log de resolución de problemas de GAE [#java-agent-logs]

Utilice estos recursos para solucionar problemas de su aplicación de entorno flexible GAE:

* Para conectarse a la instancia GAE e iniciar un shell en el contenedor docker que ejecuta su código, consulte [Depurar una instancia](https://cloud.google.com/appengine/docs/flexible/java/debugging-an-instance).

* Para redirigir el registro del agente de Java de New Relic a [Stackdriver](http://cloud.google.com/logging/docs/view/logs_viewer_v2) en la [consola de la plataforma Cloud](https://cloud.google.com/compute/docs/console), cambie el archivo `newrelic.yml`a:

  ```
  log_file_name: STDOUT
  ```

* Para ver el registro, utilice el [Visor de log de la Consola de Cloud plataforma](https://cloud.google.com/appengine/docs/flexible/php/writing-application-logs).
