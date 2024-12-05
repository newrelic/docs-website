---
title: Instalar New Relic agente de Java para docker
tags:
  - Agents
  - Java agent
  - Additional installation
metaDescription: How to install New Relic's Java agent for APM on a Docker container.
freshnessValidatedDate: never
translationType: machine
---

Este documento explica una instalación básica de la aplicación <InlinePopover type="apm"/>agente para Java en un contenedor docker . Analizamos la configuración requerida y también exploramos algunas configuraciones opcionales, que incluyen:

* Cómo utilizar archivos de configuración New Relic idénticos para cada contenedor, independientemente del entorno donde se utilicen los contenedores
* Cómo utilizar la capa docker cuando cada agente en cada entorno necesita datos de configuración ligeramente diferentes
* Cómo deshabilitar el agente New Relic en algunos entornos y habilitarlo en otros

Aunque no analizamos las opciones avanzadas aquí, puede instalar el agente de Java en volúmenes docker y usar la imagen del contenedor docker en otro software como Swarm, ECS, AKS, EKS, OpenShift y Kubernetes. Nuestros ejemplos docker se refieren a Tomcat, por lo que si está utilizando otro servidor de aplicaciones, consulte la documentación de su proveedor.

## Obtener el agente de Java [#download-agent]

Descargue `newrelic-java.zip` usando `curl`, `Invoke-WebRequest` (PowerShell) o la UI de New Relic:

<CollapserGroup>
  <Collapser
    id="download-from-curl"
    title={<>Descargar usando <InlineCode>curl</InlineCode></>}
  >
    Complete lo siguiente:

    1. Iniciar una sesión de línea de comando.

    2. Cambie a un directorio temporal donde pueda descargar el archivo zip.

    3. Ejecute este comando `curl` :

       ```
       curl -O https://download.newrelic.com/newrelic/java-agent/newrelic-agent/current/newrelic-java.zip
       ```

    4. Abrir la cremallera `newrelic-java.zip`
  </Collapser>

  <Collapser
    id="download-from-powershell"
    title={<>Descargar usando <InlineCode>Invoke-WebRequest</InlineCode> (PowerShell)</>}
  >
    Complete lo siguiente:

    1. Inicie una sesión de PowerShell.

    2. Cambie a un directorio temporal donde pueda descargar el archivo zip.

    3. Ejecute este comando de PowerShell:

       ```
       Invoke-WebRequest -Uri https://download.newrelic.com/newrelic/java-agent/newrelic-agent/current/newrelic-java.zip -OutFile newrelic-java.zip
       ```

    4. Descomprimir `newrelic-java.zip`:

       ```
       Expand-Archive -Path newrelic-java.zip -DestinationPath DESTINATION_PATH
       ```
  </Collapser>

  <Collapser
    id="download-from-UI"
    title="Descargar desde la UIde New Relic"
  >
    1. Desde

       <DNT>
         **[one.newrelic.com](https://one.newrelic.com/all-capabilities)**
       </DNT>

       , haga clic en

       <DNT>
         **Add more data**
       </DNT>

       y luego busque "Java".

    2. Seleccione la opción de monitoreo de aplicaciones Java y complete el proceso.
  </Collapser>
</CollapserGroup>

## Configurar el directorio de instalación [#install-directory]

Puede descomprimir el archivo `newrelic-java.zip` donde le resulte más cómodo. En las secciones siguientes asumimos que lo extrajo en el directorio de trabajo actual, lo que coloca los archivos que necesitamos en `./newrelic`.

## Modificar script de inicio [#start-up-scripts]

El script de inicio que contiene el comando para iniciar su servidor de aplicaciones debe incluir el argumento integrado de Java `-javaagent`. Le recomendamos que establezca este argumento con la variable de entorno `JAVA_OPTS` . El valor de ese argumento debe contener la ubicación donde `ADD` el archivo jar del agente Java APM a la imagen.

Por ejemplo, con Tomcat, utilice comandos como estos en `Dockerfile`:

```
RUN mkdir -p /usr/local/tomcat/newrelic
ADD ./newrelic/newrelic.jar /usr/local/tomcat/newrelic/newrelic.jar
ENV JAVA_OPTS="$JAVA_OPTS -javaagent:/usr/local/tomcat/newrelic/newrelic.jar"
```

## Establecer configuración del agente [#agent-configs]

De forma predeterminada, el comportamiento del agente se controla mediante entradas de configuración en `newrelic.yml`, que normalmente se encuentra en el mismo directorio que el agente. Esta sección explica cómo anular esta configuración `newrelic.yml` mediante el uso de variables de entorno o propiedades del sistema Java en `Dockerfile`.

Antes de ver algunas configuraciones específicas, aquí se explica cómo cargar `newrelic.yml` usando `Dockerfile`:

```
ADD ./newrelic/newrelic.yml /usr/local/tomcat/newrelic/newrelic.yml
```

Para una instalación básica docker , complete esta configuración:

* [Nombre de la aplicación](#app-name)
* [Clave de licencia](#license-key)
* [Registro](#logs)
* [Medio ambiente](#environment) (opcional)
* [agente habilitado](#agent-enabled) (opcional)

### Nombre de la aplicación [#app-name]

El nombre de la aplicación es una configuración que usted establece para identificar su aplicación en New Relic.

<Callout variant="tip">
  Puede reutilizar el nombre de una aplicación para varias aplicaciones que cumplen la misma función, de modo que todos los datos de esas aplicaciones se acumulen en la misma aplicación lógica en New Relic. Para obtener más detalles sobre opciones de agrupación adicionales, consulte [Usar varios nombres para una aplicación](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app).
</Callout>

Reemplace MY_APP_NAME con el nombre de su aplicación en uno de estos `Dockerfile` comandos:

<table>
  <thead>
    <tr>
      <th style={{ width: "125px" }}>
        Opción
      </th>

      <th>
        Dominio
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Ambiente  
                variable
      </td>

      <td>
        ```
        ENV NEW_RELIC_APP_NAME="MY_APP_NAME"
        ```
      </td>
    </tr>

    <tr>
      <td>
        Sistema java  
                propiedad
      </td>

      <td>
        ```
        ENV JAVA_OPTS="$JAVA_OPTS -Dnewrelic.config.app_name='MY_APP_NAME'"
        ```
      </td>
    </tr>
  </tbody>
</table>

Después de iniciar el contenedor, el nombre de su aplicación aparece en New Relic.

### Clave de licencia

Esta configuración es necesaria para que usted pueda reportar datos a su cuenta New Relic.

Para copiar su clave de licencia:

1. Vaya a la clave de API UI y obtenga un <InlinePopover type="licenseKey"/>.

2. En uno de estos `Dockerfile` comandos, reemplace MY_LICENSE_KEY con su clave de licencia:

   <table>
     <thead>
       <tr>
         <th style={{ width: "125px" }}>
           Opción
         </th>

         <th>
           Dominio
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td>
           Ambiente  
                   variable
         </td>

         <td>
           ```
           ENV NEW_RELIC_LICENSE_KEY="MY_LICENSE_KEY"
           ```
         </td>
       </tr>

       <tr>
         <td>
           Sistema java  
                   propiedad
         </td>

         <td>
           ```
           ENV JAVA_OPTS="$JAVA_OPTS -Dnewrelic.config.license_key='MY_LICENSE_KEY'"
           ```
         </td>
       </tr>
     </tbody>
   </table>

### Registro

De forma predeterminada, los registros se escriben en el directorio de registros relativo a la ubicación de `newrelic.jar`. Asegúrese de que la cuenta de usuario que inicia su servidor de aplicaciones también tenga derecho a realizar tareas como:

* Creando el directorio de registro.
* Creando y añadiendo al archivo de log en ese directorio.

A continuación se muestra un ejemplo de Dockerfile donde `tomcat` es el usuario que inicia Tomcat:

```
RUN mkdir -p /usr/local/tomcat/newrelic/logs
RUN chown -R tomcat:tomcat /usr/local/tomcat/newrelic/logs
```

También puede enviar el registro a `STDOUT` agregando uno de los siguientes al Dockerfile:

<table>
  <thead>
    <tr>
      <th style={{ width: "125px" }}>
        Opción
      </th>

      <th>
        Dominio
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Ambiente  
                Variable
      </td>

      <td>
        ```
        ENV NEW_RELIC_LOG_FILE_NAME=STDOUT
        ```
      </td>
    </tr>

    <tr>
      <td>
        Sistema java  
                propiedad
      </td>

      <td>
        ```
        ENV JAVA_OPTS=-Dnewrelic.config.log_file_name=STDOUT
        ```
      </td>
    </tr>
  </tbody>
</table>

### Medio ambiente (opcional) [#environment]

Puede pasar una propiedad Java o una variable de entorno para determinar cuál de las secciones específicas del entorno utiliza el agente en `newrelic.yml`. Utilice este enfoque si prefiere tener la configuración específica del entorno de control de archivos `newrelic.yml` en lugar de pasar toda la configuración a través de docker.

A continuación se muestra un `Dockerfile` ejemplo de cómo pasar la `newrelic.environment` propiedad del sistema Java a través de docker para usar el valor personalizado `dev` en la sección de entorno de `newrelic.yml`:

1. Usando la forma de shell de la instrucción CMD, incluya una referencia a una nueva variable de entorno que elija (por ejemplo, `ENV`):

   ```
   CMD java -Dnewrelic.environment=$ENV -jar myjar.jar
   ```

2. En su línea de comando `docker run` , incluya un argumento para establecer la variable de entorno en el contenedor:

   ```
   docker run -it -e "ENV=dev" myDockerImage
   ```

<Callout variant="important">
  Si no especifica un valor para `newrelic.environment`, el agente asume que se está ejecutando en su entorno de producción y utiliza los valores del cuerpo principal del archivo de configuración.
</Callout>

### Agente habilitado (opcional) [#agent-enabled]

Esta configuración controla si el agente está habilitado. Supongamos que desea la misma imagen docker para cada instalación. Sin embargo, no desea ejecutar el agente New Relic cada vez que un ingeniero inicia una aplicación de prueba porque no desea aumentar el recuento de instancias.

Este problema se puede resolver utilizando la propiedad del sistema Java `newrelic.environment` .

1. En el cuerpo principal de `newrelic.yml`, deshabilite el agente de Java configurando `agent_enabled: false`.
2. En secciones de entorno específicas de `newrelic.yml`, establezca `agent_enabled: true`.

Luego, puede ejecutar un agente específico especificando el entorno en tiempo de ejecución.

## Ejemplos adicionales de Tomcat Dockerfile [#code-samples]

<CollapserGroup>
  <Collapser
    id="both-env-and-props"
    title="Tomcat con entorno y propiedades del sistema Java"
  >
    ```
    FROM tomcat:9
    # Add the newrelic.jar and -javaagent parameters
    RUN mkdir -p /usr/local/tomcat/newrelic
    ADD ./newrelic/newrelic.jar /usr/local/tomcat/newrelic/
    ENV JAVA_OPTS="$JAVA_OPTS -javaagent:/usr/local/tomcat/newrelic/newrelic.jar"
    # Add the configuration file
    ADD ./newrelic/newrelic.yml /usr/local/tomcat/newrelic/
    # An example of setting a system property config
    ENV JAVA_OPTS="$JAVA_OPTS -Dnewrelic.config.app_name='My Application'"
    # An example of setting an Environment variable config
    ENV NEW_RELIC_LICENSE_KEY="license_key"
    # Config to include the agent logs in Docker's stdout logging
    ENV JAVA_OPTS="$JAVA_OPTS -Dnewrelic.config.log_file_name=STDOUT"
    EXPOSE 8080
    CMD ["catalina.sh", "run"]
    ```
  </Collapser>

  <Collapser
    id="start-up"
    title="Cómo iniciar una aplicación con el agente de Java"
  >
    ```
    FROM openjdk:8
    ADD my-application.jar /app
    ADD newrelic.jar  /app
    ADD newrelic.yml  /app 
    ENV NEW_RELIC_APP_NAME="My Application"
    ENV NEW_RELIC_LICENSE_KEY="license_key"
    ENV NEW_RELIC_LOG_FILE_NAME="STDOUT"
    ENTRYPOINT ["java","-javaagent:/app/newrelic.jar","-jar","/app/my-application.jar"]
    ```
  </Collapser>
</CollapserGroup>

## Próximos pasos [#what-is-next]

Ahora que tiene una instalación básica del agente en docker, aquí hay algunos pasos adicionales a considerar:

* Revise otra [configuración](/docs/agents/java-agent/configuration/java-agent-configuration-config-file) para el agente.
* Lea una [publicación detallada en el foro de soporte](https://discuss.newrelic.com/t/relic-solution-what-you-need-to-know-about-new-relic-when-deploying-with-docker/52492) sobre Docker y New Relic.
