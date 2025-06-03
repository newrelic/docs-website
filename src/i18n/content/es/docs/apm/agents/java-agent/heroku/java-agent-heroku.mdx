---
title: Agente de Java y Heroku
tags:
  - Agents
  - Java agent
  - Heroku
metaDescription: 'Heroku users: How to configure the Java agent for your New Relic add-on.'
freshnessValidatedDate: never
translationType: machine
---

[Heroku](https://devcenter.heroku.com/articles/newrelic) es una solución de plataforma como servicio (PaaS) para alojar aplicaciones web en varios lenguajes de agentes, incluido Java. Con New Relic, puedes extender Heroku con métrica de [APM](/docs/apm/new-relic-apm) o [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser).

<Callout variant="tip">
  Si usa Scala, consulte [Procedimientos del agente de Java Scala para Heroku](/docs/agents/java-agent/heroku/java-agent-scala-heroku).
</Callout>

## Compatibilidad y requisitos [#requirements]

* Java 7 o superior
* [Maven 3](http://maven.apache.org/download.cgi) o superior (si estás usando Maven)
* Última [versión de New Relic agente de Java](/docs/release-notes/agent-release-notes/java-release-notes)

## 1. Habilite el complemento del agente New Relic en Heroku [#enable]

Después de asegurarse de [cumplir con los requisitos](#requirements), habilite el complemento del agente New Relic en Heroku.

<Callout variant="caution">
  Debes [implementar tu aplicación Java en Heroku](https://devcenter.heroku.com/articles/getting-started-with-java#introduction), siguiendo las instrucciones de Heroku al menos hasta el paso [de implementar la aplicación](https://devcenter.heroku.com/articles/getting-started-with-java#deploy-the-app) , antes de poder habilitar el complemento del agente New Relic.
</Callout>

1. Log sesión en su cuenta Heroku.

2. Desde la [página de complementos de APM](https://elements.heroku.com/addons/newrelic#pricing), seleccione un plan de suscripción.

3. Seleccione

   <DNT>
     **Install APM**
   </DNT>

   y luego seleccione su aplicación de destino en el menú desplegable.

La instalación del complemento crea automáticamente una cuenta New Relic y configura el acceso a los servidores Heroku.

## 2. Proporcione la ruta al archivo jar. [#provide-path]

Después de [habilitar el complemento del agente New Relic](#enable), pase el indicador `javaagent` al proceso `java` y proporcione la ruta al archivo jar editando su `Procfile`.

<CollapserGroup>
  <Collapser
    id="deploy-heroku"
    title="Desplegar a Heroku"
  >
    Si implementa Heroku, la ubicación del archivo jar para Maven y la configuración manual está en la carpeta raíz de la aplicación en un directorio llamado `newrelic`.

    Ejemplo:

    ```
    web: java -javaagent:/app/newrelic/newrelic.jar -jar target/HELLOWORLD.jar
    ```
  </Collapser>

  <Collapser
    id="deploy-locally"
    title="Desplegar localmente"
  >
    Si implementa localmente, su archivo jar podría estar en un directorio diferente. Si es así, reemplace `PATH/TO/NEWRELIC.JAR` con la ruta al archivo jar en su directorio local.

    Ejemplo:

    ```
    web: java -javaagent:PATH/TO/NEWRELIC.JAR -jar target/HELLOWORLD.jar
    ```
  </Collapser>
</CollapserGroup>

## 3. Configure su entorno Heroku para New Relic [#configure-heroku-environment]

Después de [proporcionar la ruta al archivo jar](#provide-path), configure su entorno Heroku para New Relic, según su plataforma:

<CollapserGroup>
  <Collapser
    id="maven-config"
    title="Configuración maven"
  >
    1. Dale a tu aplicación un [nombre significativo](/docs/agents/manage-apm-agents/app-naming/name-your-application) con este comando del cinturón de herramientas de Heroku:

       ```bash
       heroku config:set NEW_RELIC_APP_NAME="APP_NAME"
       ```

    2. Añade tu <InlinePopover type="licenseKey"/>:

       ```bash
       heroku config:set NEW_RELIC_LICENSE_KEY="LICENSE_KEY"
       ```

    3. En tu `pom.xml`, agrega la dependencia `newrelic-agent` , sustituyendo `X.Y.Z` con la [última versión del agente de Java](/docs/agents/java-agent/getting-started/java-release-notes). Recomendado: Para garantizar que se aplique el formato adecuado y que los contenidos no contengan información confidencial, formatee la sintaxis usando [http://codebeautify.org/xmlviewer](http://codebeautify.org/xmlviewer).

       ```xml
       <dependency> 

           <groupId>com.newrelic.agent.java</groupId>
           <artifactId>newrelic-java</artifactId>
           <version>X.Y.Z</version>
           <scope>provided</scope>
           <type>zip</type>

       </dependency>
       ```

    4. En el elemento `<build>` de `pom.xml`, personalice la compilación para que descargue el agente:

       ```xml
       <plugin>
           <groupId>org.apache.maven.plugins</groupId>
           <artifactId>maven-dependency-plugin</artifactId>
           <version>3.0.2</version>
           <executions>
               <execution>
                 <id>unpack-newrelic</id>
                 <phase>package</phase>
                 <goals>
                     <goal>unpack-dependencies</goal>
                 </goals>
                 <configuration>
                     <includeGroupIds>com.newrelic.agent.java</includeGroupIds>
                     <includeArtifactIds>newrelic-java</includeArtifactIds>
                     <overWriteReleases>false</overWriteReleases>
                     <overWriteSnapshots>false</overWriteSnapshots>
                     <overWriteIfNewer>true</overWriteIfNewer>
                     <outputDirectory>${project.basedir}</outputDirectory>
                     <destFileName>newrelic</destFileName>
                 </configuration>
               </execution>
           </executions>
       </plugin>
       ```
  </Collapser>

  <Collapser title="Configuración manual">
    1. log sesión en el [dashboard.heroku.com](https://dashboard.heroku.com).

    2. Seleccione su aplicación.

    3. Seleccione

       <DNT>
         **Add-ons > APM**
       </DNT>

       .

    4. [Obtenga el agente de Java New Relic.](/docs/agents/java-agent/installation/install-java-agent/#download-agent)

    5. Descomprime el archivo en la raíz de tu aplicación.

    6. Edite `newrelic.yml` para personalizar la configuración [`app_name`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-app_name) con un [nombre de aplicación descriptivo](/docs/agents/manage-apm-agents/app-naming/name-your-application).

    7. También en `newrelic.yml`, agregue su [clave de licencia](/docs/accounts/install-new-relic/account-setup/license-key) a la configuración [`license_key`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-license_key) .
  </Collapser>
</CollapserGroup>

## 4. Empuje sus cambios y abra la aplicación. [#push-changes]

Después de [configurar su entorno Heroku para New Relic](#configure-heroku-environment), envíe sus cambios y abra la aplicación para monitor con New Relic.

1. Introduzca sus cambios en el banco de pruebas con este comando del cinturón de herramientas de Heroku:

   ```bash
   git add .
   git commit -m 'YOUR COMMIT MESSAGE'
   git push heroku master
   ```

2. Abra su aplicación en su browser con este comando del cinturón de herramientas de Heroku:

   ```bash
   heroku open
   ```

3. Genera algo de tráfico a tu aplicación y espera unos minutos.

4. Verifique el rendimiento de su aplicación en Heroku seleccionando su aplicación y luego seleccionando el complemento New Relic.

Si no aparecen datos o tienes problemas, sigue los consejos [de resolución de problemas](#troubleshooting) .

## Solucionar problemas [#troubleshooting]

A continuación se ofrecen algunos consejos que le ayudarán a solucionar problemas:

* Si no ve el complemento New Relic después de generar tráfico, vaya a Heroku, seleccione

  <DNT>
    **Find More Add Ons**
  </DNT>

  y agregue el complemento APM.

* Si no aparecen datos después de esperar unos minutos, siga los [procedimientos de resolución de problemas para Heroku (Java)](/docs/agents/java-agent/heroku/no-data-appears-heroku-java).
