---
title: Incluir el agente de Java con un argumento JVM
tags:
  - Agents
  - Java agent
  - Installation
metaDescription: Detailed instructions on how to set APM's Java agent startup argument for your JVM or framework.
tocUnlisted: true
freshnessValidatedDate: never
translationType: machine
---

Este documento describe cómo pasar el argumento `-javaagent` a la JVM de su framework. Este paso de instalación garantiza que el agente esté incluido en su aplicación. Para todos los servidores de aplicaciones, asegúrese de pasar la ruta completa al archivo `newrelic.jar` .

Este documento es simplemente una referencia sobre cómo pasar el argumento. Para conocer los procedimientos de instalación detallados, consulte [agente de instalación de Java](/docs/agents/java-agent/installation/java-agent-manual-installation).

## ColdFusion [#Installing_on_ColdFusion]

Para pasar el argumento `-javaagent` en ColdFusion:

1. Inicie su servidor ColdFusion y navegue hasta su consola de administración de ColdFusion.

2. En el menú de la izquierda, seleccione <DNT>**SERVER SETTINGS > Java and JVM**</DNT>.

3. Si utiliza la API del agente: especifique la ruta a `newrelic-api.jar` en el campo <DNT>**ColdFusion Class Path**</DNT> .

4. En el campo <DNT>**JVM Arguments**</DNT> , agregue el argumento `-javaagent` :

   ```
   -javaagent:/full/path/to/newrelic.jar
   ```

5. Seleccione <DNT>**Submit Changes**</DNT> y luego reinicie su servidor ColdFusion.

## Geronimo [#Installing_on_Geronimo]

Para pasar el argumento `-javaagent` en Geronimo, consulte el archivo jar del agente New Relic en la variable de entorno `JAVA_OPTS` cuando ejecute el comando de inicio:

```sh
export JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar" && geronimo run
```

## Glassfish [#Installing_on_Glassfish]

Para pasar el argumento `-javaagent` en Glassfish:

1. Desde la consola Glassfish, seleccione <DNT>**Application Server > JVM Settings > JVM options**</DNT>.

2. En la página de opciones de JVM, seleccione <DNT>**Add JVM option**</DNT>.

3. Agregue una entrada para el argumento `-javaagent` :

   ```
   -javaagent:/full/path/to/newrelic.jar
   ```

4. Guarde y reinicie Glassfish.

Si Glassfish no se inicia, es posible que el argumento `-javaagent` no se haya configurado correctamente. Puede cambiar los argumentos de la JVM del servidor editando el archivo `domain.xml` .

<Callout variant="important">
  Un error en Glassfish 2.1 impide que las clases en el cargador de clases arrancar (el agente New Relic) utilicen la API de registro de Java. Esto parece solucionarse en versiones 2.1.1 o superiores.
</Callout>

## Grails [#Installing_on_Grails]

Para pasar el argumento `-javaagent` en Grails:

<CollapserGroup>
  <Collapser
    id="grails-run-app"
    title="Pasar con run-app"
  >
    1. Comience con una versión descomprimida de Grails.

    2. Ejecute este comando:

       ```sh
       grails -noreloading -javaagent:/full/path/to/newrelic.jar run-app
       ```
  </Collapser>

  <Collapser
    id="grails-run-war"
    title="Pasar con run-war"
  >
    1. En su aplicación Grails, abra este archivo con su editor de texto:

       ```
       grails-app/conf/BuildConfig.groovy
       ```

    2. Agregue o edite la línea de argumentos de JVM:

       ```ini
       grails.tomcat.jvmArgs = ["-javaagent:/full/path/to/newrelic.jar"]
       ```
  </Collapser>
</CollapserGroup>

## JBoss [#Installing_on_JBoss]

Para pasar el argumento `-javaagent` en JBoss:

<CollapserGroup>
  <Collapser
    id="jboss-domain-mode"
    title="Configurado con modo de dominio (6.x EAP y 7.0 AS)"
  >
    Utilice el modo de dominio para las versiones 6.x EAP y 7.0 AS o superiores de JBoss:

    1. Edite las propiedades de JVM para su grupo de servidores, ubicado en:

       ```
       domain/configuration/domain.xml
       ```

    2. Modifique las propiedades para incluir el argumento `-javaagent` :

       ```xml
       <server-group name="main-server-group" profile="full">
         <jvm name="default">
           <jvm-options>
             <option value="-javaagent:/full/path/to/newrelic.jar"/>
           </jvm-options>
         </jvm>
         ...
       </server-group>
       ```

       <Callout variant="caution">
         Un [error de JBoss en 7.0.2.Final y 7.1.0.Alpha1](https://issues.jboss.org/browse/AS7-1868) no permite configurar opciones de JVM en `domain.xml`. Si encuentra este problema, actualice su servidor de aplicaciones JBoss.
       </Callout>
  </Collapser>

  <Collapser
    id="jboss-standalone-mode"
    title="Conjunto con modo autónomo (otras versiones)"
  >
    Utilice el modo independiente para otras plataformas y versiones:

    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            Plataforma
          </th>

          <th>
            Direcciones
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Unix/macOS con 6.x EAP o 7.0.x AS y superiores
          </td>

          <td>
            En la parte inferior de `bin/standalone.conf`, agregue:

            ```ini
            JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar"
            ```
          </td>
        </tr>

        <tr>
          <td>
            Windows con 6.x EAP o 7.0.x AS o superior
          </td>

          <td>
            En `bin/standalone.bat`, antes de la línea:

            ```batch
            set JBOSS_ENDORSED_DIRS=%JBOSS_HOME%\lib\endorsed
            ```

            Agregar:

            ```batch
            set "JAVA_OPTS=-javaagent:C:/full/path/to/newrelic.jar %JAVA_OPTS%"
            ```
          </td>
        </tr>

        <tr>
          <td>
            Unix/macOS con 6.x o anterior
          </td>

          <td>
            En la parte inferior de `bin/run.conf`, agregue esto:

            ```ini
            JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar"
            ```
          </td>
        </tr>

        <tr>
          <td>
            Windows con 6.x o anterior
          </td>

          <td>
            En `bin/run.bat`, antes de la línea:

            ```batch
            set JBOSS_CLASSPATH=%RUN_CLASSPATH%
            ```

            Agregar:

            ```batch
            set "JAVA_OPTS=-javaagent:C:/full/path/to/newrelic.jar %JAVA_OPTS%"
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Jetty [#Installing_on_Jetty]

Para pasar el argumento `-javaagent` en Jetty:

<CollapserGroup>
  <Collapser
    id="jetty-jettysh"
    title={<>Si configura exec en <InlineCode>jetty.sh</InlineCode></>}
  >
    Edite el `JAVA_OPTIONS` en su script `jetty.sh`:

    ```sh
    export JAVA_OPTIONS="${JAVA_OPTIONS} -javaagent:/full/path/to/newrelic.jar"
    ```
  </Collapser>

  <Collapser
    id="jetty-startini"
    title={<>Si configura exec en <InlineCode>start.ini</InlineCode></>}
  >
    Agregue la ruta del agente a su archivo de configuración `start.ini` :

    ```
    -javaagent:/full/path/to/newrelic.jar
    ```
  </Collapser>
</CollapserGroup>

## Play [#Installing_on_Play]

Para pasar el argumento `-javaagent` en Play:

<CollapserGroup>
  <Collapser
    id="play-1-2-4"
    title="Play 1.2.4"
  >
    Agregue el argumento `-javaagent` cuando ejecute su aplicación Play:

    ```sh
    play run your_app_name -javaagent:/full/path/to/newrelic.jar
    ```
  </Collapser>

  <Collapser
    id="play-2.0"
    title="Play 2.0"
  >
    1. Comience con una distribución <DNT>**unzipped**</DNT> que contenga el script `start` :

       ```sh
       play clean dist && unzip dist/*.zip
       ```

    2. Añade el argumento `-javaagent` al iniciar tu aplicación Play:

       ```sh
       cd unzipped/folder; chmod a+x start; ./start -javaagent:/full/path/to/newrelic.jar
       ```
  </Collapser>

  <Collapser
    id="play-2-2"
    title="Play 2.2"
  >
    1. Comience con una distribución <DNT>**unzipped**</DNT> que contenga el script `start` :

       ```sh
       play clean dist && unzip target/directory/universal/*.zip
       ```

    2. Añade el argumento `-J-javaagent` al iniciar tu aplicación Play:

       ```sh
       cd unzipped/folder; ./bin/scriptname -J-javaagent:/full/path/to/newrelic.jar
       ```

       <Callout variant="tip">
         Para habilitar el tiempo de carga de la página, consulte [Manual de instrumentación con Play 2.2](/docs/agents/java-agent/instrumentation/page-load-timing-java#manual-play-2-2).
       </Callout>
  </Collapser>

  <Collapser
    id="play-2-3-etc"
    title="Play 2.3, 2.4 y 2.5"
  >
    1. Comience con una distribución <DNT>**unzipped**</DNT> que contenga el script `start` :

       ```sh
       activator clean dist && unzip target/directory/universal/*.zip
       ```

    2. Añade el argumento `-J-javaagent` al iniciar tu aplicación Play:

       ```sh
       cd unzipped/folder; ./bin/scriptname -J-javaagent:/full/path/to/newrelic.jar
       ```

    3. Si usa Typesafe Activator con Play 2.4, agregue esta línea a su `build.sbt`:

       ```scala
       javaOptions ++= Seq("-javaagent:/full/path/to/newrelic.jar")
       ```
  </Collapser>
</CollapserGroup>

## Resin [#Installing_on_Resin]

<DNT>
  **Java 8**
</DNT>

* Opción 1: agregue el argumento `javaagent` a través de la propiedad `jvmargs` en el archivo `resin.properties` del servidor:

  ```properties
  jvm_args : -javaagent:/full/path/to/newrelic.jar
  ```

* Opción 2: especifique el argumento `-javaagent` agregándolo a la sección `<jvm-args>` de su archivo `conf/resin.conf` o `conf/resin.xml` :

  ```xml
  <jvm-arg>-javaagent:/full/path/to/newrelic.jar</jvm-arg>
  ```

<DNT>
  **Java 9 or higher**
</DNT>

El sistema de módulos introducido en Java 9 puede provocar la excepción `NoClassDefFoundError: java/sql/SQLException` si la propiedad `-javaagent` se agrega a los archivos `conf/resin.conf` o `conf/resin.xml` . Si está utilizando Java 9 o superior, asegúrese de que la propiedad `-javaagent` no esté incluida en esos archivos.

Resin se puede ejecutar en Java 9 o superior, con el agente de Java usando una de las siguientes opciones:

* Opción 1: agregue el argumento `javaagent` a través de la propiedad `jvmargs` en el archivo `resin.properties` del servidor:

  ```properties
  jvm_args : -javaagent:/full/path/to/newrelic.jar
  ```

  Luego, el servidor Resin se puede ejecutar con `./bin/resin.sh start`.

* Opción 2: ejecutar resin jar con la propiedad `-javaagent` en la línea de comando:

  ```sh
  java -javaagent:/path/to/newrelic.jar -jar lib/resin.jar start
  ```

<Callout variant="important">
  El agente no funcionará con Resin en Windows cuando se utilice Java 9 o superior.
</Callout>

## Solr [#Installing_on_solr]

Para pasar el argumento `-javaagent` en Solr:

<CollapserGroup>
  <Collapser
    id="solr-standalone-5"
    title="Solr independiente 5.x o superior"
  >
    Agregue la propiedad `-javaagent` a `bin/solr.in.sh`:

    ```sh
    SOLR_OPTS="$SOLR_OPTS -javaagent:/full/path/to/newrelic.jar"
    ```
  </Collapser>

  <Collapser
    id="solr standalone-other"
    title="Solr independiente 4.x o inferior"
  >
    Agregue el `-javaagent` antes del `start.jar`:

    ```sh
    java -javaagent:/full/path/to/newrelic.jar -jar start.jar
    ```
  </Collapser>

  <Collapser
    id="solr-app-server"
    title="Servidor de aplicaciones Solr"
  >
    Cuando ejecute Solr en un <DNT>**application server**</DNT>, siga las instrucciones de ese servidor de aplicaciones para agregar la bandera `-javaagent` . Asegúrese también de que JMX esté habilitado para el servidor de aplicaciones. Si no ve datos en la página Solr de la UI de APM, siga los [procedimientos de resolución de problemas para datos Solr](/docs/agents/java-agent/troubleshooting/solr-data-not-appearing-apm-solr-tab-java).
  </Collapser>
</CollapserGroup>

## Bota de primavera

Para pasar el argumento `-javaagent` en Spring Boot, agréguelo a la línea de comando en la que inicia su aplicación. Asegúrate de agregarlo antes del argumento `-jar` :

```sh
java -javaagent:/full/path/to/newrelic.jar -jar app.jar
```

## Envoltorio Tanuki

Para pasar el argumento `-javaagent` en Tanuki Wrapper, agregue una opción de contenedor `wrapper.conf`. En la línea siguiente, sustituya `XXX` por un número no utilizado en este archivo:

```ini
wrapper.java.additional.XXX=-javaagent:/full/path/to/newrelic.jar
```

<Callout variant="tip">
  En los sistemas Linux, no se requieren comillas al establecer este valor. Este comportamiento puede variar en otros sistemas operativos.
</Callout>

## Tomcat [#Installing_on_Tomcat]

Para pasar el argumento `-javaagent` en Tomcat:

<CollapserGroup>
  <Collapser
    id="tomcat-setenvsh"
    title="Con setenv.sh"
  >
    Cree un script `CATALINA_BASE/bin/setenv.sh` si aún no existe ninguno. Configure su script `setenv.sh` para usar el agente New Relic usando la variable de entorno `CATALINA_OPTS`:

    ```sh
    export CATALINA_OPTS="$CATALINA_OPTS -javaagent:/full/path/to/newrelic.jar"
    ```
  </Collapser>

  <Collapser
    id="tomcat-setenvbat"
    title="Con setenv.bat"
  >
    Cree un script `CATALINA_BASE/bin/setenv.bat` si aún no existe ninguno. Configure su script `setenv.bat` para usar el agente New Relic usando la variable de entorno `CATALINA_OPTS`:

    ```batch
    SET "CATALINA_OPTS=%CATALINA_OPTS% -javaagent:/full/path/to/newrelic.jar"
    ```
  </Collapser>

  <Collapser
    id="tomcat-catalinash"
    title="Con catalina.sh (NO RECOMENDADO)"
  >
    <Callout variant="tip">
      Le recomendamos que no establezca ninguna variable en este script. En su lugar, colóquelos en una script `setenv.sh` en `CATALINA_BASE/bin` para mantener sus personalizaciones separadas.
    </Callout>

    Configure su archivo `catalina.sh` para usar el agente New Relic usando la variable de entorno `JAVA_OPTS` :

    ```sh
    export JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar"
    ```
  </Collapser>

  <Collapser
    id="tomcat-catalinabat"
    title="Con catalina.bat (NO RECOMENDADO)"
  >
    <Callout variant="tip">
      Le recomendamos que no establezca ninguna variable en este script. En su lugar, colóquelos en una script `setenv.bat` en `CATALINA_BASE/bin` para mantener sus personalizaciones separadas.
    </Callout>

    Si usa `catalina.bat` para iniciar Tomcat, configure la variable `JAVA_OPTS` cerca de la parte superior del archivo:

    ```batch
    SET JAVA_OPTS=%JAVA_OPTS% -javaagent:/full/path/to/newrelic.jar
    ```
  </Collapser>

  <Collapser
    id="tomcat-windows"
    title="Con Windows"
  >
    1. Seleccione <DNT>**Start > Apache Tomcat X.Y.Z. > Configure Tomcat > Java**</DNT>.

    2. En el cuadro de texto <DNT>**Java Options**</DNT> , ingrese el argumento. Utilice barras diagonales `/` para el separador de ruta. Para Tomcat 6, agregue un salto de línea después del argumento `-javaagent` .

       ```
       -javaagent:/full/path/to/newrelic.jar
       ```

    3. Seleccione <DNT>**Apply**</DNT> y luego reinicie Tomcat.
  </Collapser>

  <Collapser
    id="apache-commons-daemon"
    title="Con daemonApache Commons"
  >
    La versión del daemon Apache Commons (jsvc) incluida con Tomcat 6 no admite el argumento `-javaagent` utilizado por New Relic. Sin embargo, una compilación del daemon jsvc desde la fuente troncal admitirá el argumento `-javaagent` a través del prefijo `-X`. Vea el [error de Apache que rastrea el problema](https://issues.apache.org/jira/browse/DAEMON-84).

    Hay una solución en el repositorio de código fuente de Apache Commons. Para más información:

    * Consulte la [documentación del repositorio fuente de Apache](https://commons.apache.org/svninfo.html).
    * Vaya directamente al [repositorio de fuentes SVN](https://subversion.apache.org/).
  </Collapser>
</CollapserGroup>

## WebLogic [#Installing_on_WebLogic]

Para pasar el argumento `-javaagent` en WebLogic:

<CollapserGroup>
  <Collapser
    id="weblogic-nix"
    title="Servidores de administración en Linux o macOS"
  >
    1. Edite su archivo `startWebLogic.sh` , ubicado en el directorio `bin` del dominio.

    2. Cerca del comienzo del archivo, agregue:

       ```sh
       export JAVA_OPTIONS="$JAVA_OPTIONS -javaagent:/full/path/to/newrelic.jar"
       ```
  </Collapser>

  <Collapser
    id="weblogic-windows"
    title="Servidores de administración en Windows"
  >
    1. Edite su archivo `startWebLogic.bat` , ubicado en el directorio `bin` del dominio.

    2. Cerca del comienzo del archivo, agregue:

       ```batch
       set JAVA_OPTIONS=%JAVA_OPTIONS% -javaagent:"C:\full\path\to\newrelic.jar"
       ```
  </Collapser>

  <Collapser
    id="weblogic-managed-server"
    title="Instancia de servidor administrado"
  >
    Para la instancia del servidor de administración, siga las instrucciones de Linux/macOS o Windows. No puede utilizar la consola de administración para instalar la instancia del servidor de administración.

    Para instancias de servidor administrado, use la consola de administración:

    1. Desde la consola de administración, navegue hasta <DNT>**Environments > Servers > (select a server) > Server Start > Arguments**</DNT>.

    2. Desde <DNT>**Arguments**</DNT>, agregue:

       ```
       -javaagent:/full/path/to/newrelic.jar
       ```

    3. Guarde la página y luego reinicie la instancia de su servidor.
  </Collapser>
</CollapserGroup>

## WebSphere [#Installing_on_Websphere]

Para pasar el argumento `-javaagent` en WebSphere:

1. Desde la consola de administración, seleccione <DNT>**Servers > Application servers > (select a server) > Configuration > Service Infrastructure > Java and Process Management**</DNT>.

2. Seleccione <DNT>**Process Definition > Additional Properties**</DNT> y luego seleccione <DNT>**Java Virtual Machine**</DNT>.

3. En el campo <DNT>**Generic JVM arguments**</DNT> , agregue el argumento `-javaagent` para su archivo `newrelic.jar` :

   ```
   -javaagent:/full/path/to/newrelic.jar
   ```

4. Seleccione <DNT>**Apply**</DNT> y luego seleccione <DNT>**Save**</DNT>.

5. Reinicie su servidor.

Para obtener más información, consulte la documentación sobre [la recopilación de WebSphere PMI métrica](/docs/agents/java-agent/features/jvm-metrics-page#default-pmi).

## Comunidad WebSphere [#Installing_on_Websphere_Community_Edition]

Para pasar el argumento `-javaagent` en WebSphere Community Edition, consulte el archivo jar del agente New Relic en la variable de entorno `JAVA_OPTS` cuando ejecute el comando de inicio:

```sh
export JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar" && startup
```

## Perfil de WebSphere Liberty [#Installing_on_WebSphere_Liberty_Profile]

Para pasar el argumento `-javaagent` en WebSphere Liberty Profile:

1. Editar `${server.config.dir}/jvm.options`.

2. Agregue el argumento `-javaagent` para apuntar a su archivo `newrelic.jar` :

   ```
   -javaagent:/full/path/to/newrelic.jar
   ```

3. Reinicie su servidor.

## Wildfly [#Installing_on_WildFly]

Para pasar el argumento `-javaagent` en Wildfly (si usa Wildfly 11 o superior, consulte [las instrucciones de instalación adicionales](/docs/agents/java-agent/additional-installation/wildfly-version-11-installation-java)):

<CollapserGroup>
  <Collapser
    id="wildfly-domain-mode"
    title="Establecer con modo de dominio"
  >
    1. Edite las propiedades de JVM para su grupo de servidores, ubicado en:

       ```
       domain/configuration/domain.xml
       ```

    2. Modifique las propiedades para incluir el argumento `-javaagent` :

       ```xml
       <server-group name="main-server-group" profile="full">
         <jvm name="default">
           <jvm-options>
             <option value="-javaagent:/full/path/to/newrelic.jar"/>
           </jvm-options>
         </jvm>
         ...
       </server-group>
       ```
  </Collapser>

  <Collapser
    id="wildfly-standalone-mode"
    title="Configurar con modo independiente"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            Plataforma
          </th>

          <th>
            Direcciones
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Unix o macOS
          </td>

          <td>
            En la parte inferior de `bin/standalone.conf`, agregue:

            ```ini
            JAVA_OPTS="$JAVA_OPTS -javaagent:/full/path/to/newrelic.jar"
            ```
          </td>
        </tr>

        <tr>
          <td>
            Windows
          </td>

          <td>
            En `bin/standalone.bat`, busque esta línea:

            ```batch
            rem Setup JBoss specific properties
            ```

            Luego añade:

            ```batch
            set "JAVA_OPTS=-javaagent:C:/full/path/to/newrelic.jar %JAVA_OPTS%"
            ```
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

## Otros servidores de aplicaciones [#other-app-servers]

El agente de Java New Relic funciona en cualquier [servidor de aplicaciones compatible](/docs/agents/java-agent/getting-started/compatibility-requirements-java-agent). Si su servidor de aplicaciones no aparece en este documento, siga los procedimientos estándar para que su servidor de aplicaciones pase este argumento a la JVM antes del archivo jar de la aplicación:

```
-javaagent:/full/path/to/newrelic.jar
```
