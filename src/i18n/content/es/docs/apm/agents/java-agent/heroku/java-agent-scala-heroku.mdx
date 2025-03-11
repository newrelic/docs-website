---
title: Agente de Java con Scala en Heroku
tags:
  - Agents
  - Java agent
  - Heroku
metaDescription: 'Scala with Heroku users: How to install and configure the Java agent for your APM add-on.'
freshnessValidatedDate: never
translationType: machine
---

[Heroku](https://devcenter.heroku.com/articles/newrelic) es una solución de plataforma como servicio (PaaS) para alojar aplicaciones web en varios lenguajes de agentes, incluido Scala. Con New Relic, puedes extender Heroku con métrica de [APM](/docs/apm/new-relic-apm) y [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser).

<Callout variant="tip">
  Para una instalación que no sea Scala, consulte [agente de Java y Heroku](/docs/agents/java-agent/heroku/java-agent-heroku).
</Callout>

## Compatibilidad y requisitos [#requirements]

* Java 7 o superior
* Última [versión de New Relic agente de Java](/docs/release-notes/agent-release-notes/java-release-notes)

## 1. Habilite el complemento New Relic [#enable-add-on]

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

## 2. Configure su entorno Heroku para New Relic [#configure-heroku-environment]

Después de completar los [requisitos](#requirements) y [habilitar el complemento New Relic](#enable-add-on), configure su entorno Scala Heroku para New Relic:

1. Edite su `Procfile` para que apunte al archivo jar del agente en la carpeta raíz de su aplicación. Reemplace el contenido del archivo, sustituyendo `X.Y.Z` con la [última versión del agente](/docs/agents/java-agent/getting-started/java-release-notes):

   ```procfile
   web: target/universal/stage/bin/play-getting-started -Dhttp.port=${PORT} -J-javaagent:/app/target/universal/stage/lib/com.newrelic.agent.java.newrelic-agent-X.Y.Z.jar -J-Dnewrelic.config.file=conf/newrelic.yml
   ```

   O

   Identifique la ruta a `newrelic.jar` con la [variable de entorno](https://devcenter.heroku.com/articles/config-vars) `JAVA_OPTS` .

2. Edita tu `build.sbt`. Llame al agente, sustituyendo `X.Y.Z` por la [última versión del agente de Java](/docs/agents/java-agent/getting-started/java-release-notes):

   <CollapserGroup>
     <Collapser
       id="build-sbt"
       title="Personalizada build.sbt"
     >
       ```scala
       name := """play-getting-started"""
       version := "1.0-SNAPSHOT"
       lazy val root = (project in file(".")).enablePlugins(PlayScala)
       scalaVersion := "2.11.7"
       libraryDependencies ++= Seq(
           jdbc,
           cache,
           "org.postgresql" % "postgresql" % "9.4-1201-jdbc41",
           ws
       )
       libraryDependencies <+= scalaVersion("org.scala-lang" % "scala-compiler" % _ )
       libraryDependencies ++= Seq("com.newrelic.agent.java" % "newrelic-agent" % "X.Y.Z")
       libraryDependencies ++= Seq("com.newrelic.agent.java" % "newrelic-api" % "X.Y.Z")
       ```
     </Collapser>
   </CollapserGroup>

3. Descargue un archivo `newrelic.yml` personalizado desde la configuración de su cuenta APM:

   <CollapserGroup>
     <Collapser
       id="customized-yml"
       title={<>Cómo descargar una costumbre <InlineCode>newrelic.yml</InlineCode></>}
     >
       1. log sesión en el [dashboard.heroku.com](https://dashboard.heroku.com).

       2. Seleccione su aplicación.

       3. Seleccione

          <DNT>
            **Add-ons > APM**
          </DNT>

          .

       4. [Obtenga el agente de Java New Relic.](/docs/agents/java-agent/installation/install-java-agent/#download-agent)

       5. Descomprima el archivo descargado.

       6. Copie `newrelic.yml` al directorio `scala-getting-started/conf` :
     </Collapser>
   </CollapserGroup>

4. Edite `newrelic.yml` para personalizar la configuración [`app_name`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-app_name) con un [nombre de aplicación descriptivo](/docs/agents/manage-apm-agents/app-naming/name-your-application).

5. También en `newrelic.yml`, agregue su [clave de licencia](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key) a la configuración [`license_key`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-license_key) .

## 3. Realice sus cambios y abra la aplicación. [#push-changes]

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

## Resolución de problemas de tu instalación [#troubleshooting]

* Si no ve el complemento New Relic después de generar tráfico, vaya a Heroku, seleccione

  <DNT>
    **Find more add ons**
  </DNT>

  y agregue el complemento APM.

* Si no aparecen datos después de esperar unos minutos, consulte [No aparecen datos con Heroku (Java)](/docs/agents/java-agent/heroku/no-data-appears-heroku-java).
