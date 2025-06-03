---
title: Instrumentado monitoreo de navegador con agente de Java API.
tags:
  - Agents
  - Java agent
  - Instrumentation
metaDescription: How to use manual instrumentation to set up New Relic's Java agent to monitor your end users' browser experience with your app.
freshnessValidatedDate: never
translationType: machine
---

La capacidad [<InlinePopover type="browser"/>](/docs/browser/new-relic-browser/getting-started/introduction-new-relic-browser)le brinda visibilidad de cómo su usuario interactúa con su aplicación Java mediante el uso de un fragmento de JavaScript (o "agente") para instrumentar las páginas web de su aplicación. Para instalar el agente del navegador a través de la UI, siga los procedimientos para [instalar el agente del navegador](/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent). Por ejemplo, puedes:

* Habilite una aplicación de monitor APM.
* Habilite con el método copiar/pegar.
* Habilítelo mediante la API REST.

También puede [instrumentar manualmente](#manual_instrumentation) sus páginas web utilizando la API del agente de Java, como se explica en este documento.

## Utilice la API de agente de Java [#manual_instrumentation]

Si su framework no le permite habilitar el monitoreo del navegador desde nuestra UI, con el método copiar/pegar, o usando nuestra API REST, puede instrumentar manualmente el monitoreo de sus páginas web. Para hacer esto, use nuestra [API de agente de Java](/docs/agents/java-agent/api-guides/guide-using-java-agent-api).

1. Asegúrese de estar utilizando la [última versión del agente de Java](/docs/release-notes/agent-release-notes/java-release-notes).

2. Desactiva la instrumentación automática.

   <CollapserGroup>
     <Collapser
       id="disabling-auto-all"
       title="Desactivar la instrumentación automática en todas las páginas."
     >
       1. Establezca la bandera [`auto_instrument`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#bm-auto_instrument) debajo de `browser_monitoring` en `false` en su `newrelic.yml`.

          ```yml
          browser_monitoring:
            auto_instrument: false
          ```

       2. Reinicie su aplicación.

       3. Vacíe la caché de trabajo del servidor de aplicaciones.

          Vaciar la caché de trabajo obliga al servidor de aplicaciones a recompilar los JSP, que es cuando se produce la instrumentación automática.
     </Collapser>

     <Collapser
       id="disable-auto-specific"
       title="Deshabilite la instrumentación automática solo en páginas específicas"
     >
       Utilice la bandera `disabled_auto_pages` debajo de la sección `browser_monitoring` . Por ejemplo, para desactivar la instrumentación automática en `testpage_1.jsp` y `testpage_2.jsp`, utilice lo siguiente:

       ```yml
       browser_monitoring:
         disabled_auto_pages: /WEB-INF/jsp/testpage_1.jsp, /WEB-INF/jsp/testpage_2.jsp
       ```
     </Collapser>
   </CollapserGroup>

3. [Acceda a la clase API de agente de Java](/docs/agents/java-agent/api-guides/guide-using-java-agent-api#api) agregando `newrelic-api.jar` a la ruta de clase de su aplicación.

4. Agregue el método `com.newrelic.api.agent.NewRelic.getBrowserTimingHeader()` para habilitar el seguimiento del tiempo. Consulte a continuación los procedimientos para un marco específico.

   <Callout variant="important">
     A partir [de Java 8.9.0](/docs/release-notes/agent-release-notes/java-release-notes/java-agent-890), la llamada al método [API getBrowserTimingFooter()](https://newrelic.github.io/java-agent-api/javadoc/index.html?com/newrelic/api/agent/NewRelic.html) está en desuso. La completa browser script ahora se incluye `getBrowserTimingHeader()` al llamar a .
   </Callout>

   Encuentre los métodos apropiados según el framework que esté utilizando:

   <CollapserGroup>
     <Collapser
       id="manual-jsp"
       title="Instrumentación manual JSP"
     >
       Inserte el encabezado lo más cerca posible de la parte superior de la etiqueta `<head>` pero después de las metaetiquetas.

       ```html
       <!DOCTYPE html>

       <html>
       <head>
         <title>EXAMPLE</title>
         <meta charset="utf-8">
         <meta name="description" content="Example header and footer call">;
         <%= com.newrelic.api.agent.NewRelic.getBrowserTimingHeader() %>
       </head>

       <body>

       </body>
       </html>
       ```
     </Collapser>

     <Collapser
       id="manual-html"
       title="Instrumentación manual HTML sin formato"
     >
       Para instrumentar manualmente usando HTML sin formato, [incluya el código de tiempo de carga de la página en la respuesta HTTP](/docs/agents/java-agent/custom-instrumentation/java-agent-api-example-program#include-browser).
     </Collapser>

     <Collapser
       id="manual-thymeleaf-2-1"
       title="Thymeleaf 2.1 o superior instrumentación manual"
     >
       ```html
       <head>
         ...
         <div th:remove="tag" th:utext="${header}" th:with="header=${T(com.newrelic.api.agent.NewRelic).getBrowserTimingHeader()}"></div>
       </head>

       <body>
         ...
       </body>
       ```
     </Collapser>

     <Collapser
       id="manual-coldfusion-cfml"
       title="ColdFusion CFML página manual instrumentación"
     >
       ```html
       <cfobject type="Java" class="com.newrelic.api.agent.NewRelic" name="newRelic" />
       <cfset header=newRelic.getBrowserTimingHeader() />
       <cfoutput>#header#</cfoutput>
       ...
       <cfoutput>#footer#</cfoutput>
       ```
     </Collapser>

     <Collapser
       id="manual-jsf"
       title="Marco de Java Server Faces (JSF)"
     >
       La instrumentación manual no está disponible con JSF. Para insertar el fragmento de JavaScript del navegador en las páginas web de su aplicación, utilice el [método copiar y pegar](/docs/browser/new-relic-browser/installation-configuration/add-apps-new-relic-browser#copy-paste-app).
     </Collapser>

     <Collapser
       id="manual-play-groovy"
       title="Instrumentación manual de la plantilla Play Groovy"
     >
       ```groovy
       ${com.newrelic.api.agent.NewRelic.getBrowserTimingHeader().raw()}
       ...
       ```
     </Collapser>

     <Collapser
       id="manual-play-2-2"
       title="Play 2.2 o superior plantilla Scala instrumentación manual"
     >
       Agregue lo siguiente a `build.sbt`, sustituyendo la [versión más reciente del agente](/docs/release-notes/agent-release-notes/java-release-notes) por 8.xx:

       ```scala
       libraryDependencies += "com.newrelic.agent.java" % "newrelic-api" % "8.x.x"
       ```

       En `main.scala.html`, agregue lo siguiente:

       ```java
       @Html(com.newrelic.api.agent.NewRelic.getBrowserTimingHeader())
       ...
       ```
     </Collapser>

     <Collapser
       id="manual-play-2-1"
       title="Play 2.1 Scala plantilla manual de instrumentación"
     >
       Agregue lo siguiente a `Build.scala`, sustituyendo la [versión más reciente del agente](/docs/release-notes/agent-release-notes/java-release-notes) por 8.xx:

       ```scala
       appDependencies += "com.newrelic.agent.java" % "newrelic-api" % "8.x.x"
       ```

       En `main.scala.html`, agregue lo siguiente:

       ```java
       @Html(com.newrelic.api.agent.NewRelic.getBrowserTimingHeader())
       ...
       ```
     </Collapser>

     <Collapser
       id="manual-velocity"
       title="Instrumentación manual de Apache Velocity Tools"
     >
       Si está utilizando Velocity Tools, defina una herramienta `NewRelic` en `toolbox.xml`:

       ```xml
       <toolbox>
         <tool>
           <key>NewRelic</key>
           <scope>application</scope>
           <class>com.newrelic.api.agent.NewRelic</class>
         </tool>
       </toolbox>
       ```

       Llame a la API `NewRelic` en su plantilla de velocidad:

       ```java
       $NewRelic.getBrowserTimingHeader()
       ...
       ```
     </Collapser>

     <Collapser
       id="enable-apache"
       title="Instrumentación manual Apache Velocity"
     >
       1. Para asegurarse de que todas las visitas a la página de su browser no estén agrupadas en una única transacción `/velocity` (y para evitar [problemas de agrupación métrica](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues)), deshabilite la configuración `enable_auto_transaction_naming` en su archivo `newrelic.yml`:

          ```yml
          enable_auto_transaction_naming: false
          ```

       2. Agregue `newrelic-api.jar` al classpath de Tomcat, normalmente en `.../tomcat/bin/setenv.sh`:

          ```sh
          CLASSPATH=$CLASSPATH:/opt/newrelic/newrelic-api.jar
          ```

          O

          Agregue la referencia a este archivo jar al final de una línea `CLASSPATH=...` existente dentro de ese archivo.

       3. En cada aplicación, busque `WEB-INF/tools.xml` y agregue la siguiente etiqueta:

          ```xml
          <toolbox scope="application"> 
            <tool class="com.newrelic.api.agent.NewRelic" key="NewRelic" /> 
          </toolbox>
          ```

          Si ya existe una etiqueta `<toolbox scope="application">` , coloque el `<tool ... />` dentro de la etiqueta.

       4. En cada aplicación, edite la plantilla de Velocity que utilizan las otras páginas de la aplicación. Agregue esta etiqueta dentro de la sección `<head>` antes de cualquier declaración `<link>` y `<script>` y después de cualquier metaetiqueta:

          ```java
          $NewRelic.getBrowserTimingHeader()
          ```

       5. Reinicie el servidor Tomcat:

          * Si está utilizando `Linux/Unix`, agregue la siguiente línea de comando al directorio `Users/Tomcat/bin` :

            ```
            ./shutdown.sh
            ./startup.sh
            ```

          * Si está utilizando `Windows`, vaya a su directorio `Users/Tomcat/bin` y agregue la siguiente línea de comando:

            ```
            % shutdown.bat
            % startup.bat
            ```
     </Collapser>
   </CollapserGroup>

5. Consulte el archivo de registro para verificar que el agente esté instrumentado correctamente. Establezca la configuración `log_level` en `newrelic.yml` en `log_level: finer` y verifique los siguientes mensajes:

   <CollapserGroup>
     <Collapser
       id="jsp-compile"
       title="Cuando el motor JSP compila un JSP"
     >
       ```
       May 17, 2011 9:33:18 AM NewRelic FINE: Compiling JSP: /jsp/header.jsp
       May 17, 2011 9:33:18 AM NewRelic FINE: Injecting browser timing header into: /jsp/header.jsp

       May 17, 2011 9:33:36 AM NewRelic FINE: Compiling JSP: /jsp/footer.jsp
       May 17, 2011 9:33:36 AM NewRelic FINE: Injecting browser timing footer into: /jsp/footer.jsp
       ```
     </Collapser>

     <Collapser
       id="agent-connects-servers"
       title="Después de que el agente se conecta al servidor"
     >
       El fragmento de JavaScript no se inserta en la respuesta HTML hasta que el agente se conecta al servidor.

       ```
       May 17, 2011 9:43:21 AM NewRelic INFO: Real user monitoring is enabled with auto instrumentation
       ```
     </Collapser>

     <Collapser
       id="jsp-invoked"
       title="Cuando New Relic invoca el JSP"
     >
       ```
       May 17, 2011 9:43:23 AM NewRelic FINER: Injecting browser timing header in a JSP.  Content type is text/html
       May 17, 2011 9:43:23 AM NewRelic FINER: Injecting browser timing footer in a JSP.  Content type is text/html
       ```
     </Collapser>

     <Collapser
       id="header-footer-called"
       title="Cuando el agente llama a la API de encabezado y pie de página"
     >
       ```
       May 17, 2011 9:43:23 AM NewRelic FINEST: Got browser timing header in NewRelic API: <script>var    NREUMQ=[];NREUMQ.push(["mark","firstbyte",new Date().getTime()]);(function(){var d=document;var e=d.createElement("script");e.type="text/javascript";e.async=true;e.src="https://d7p9czrvs14ne.cloudfront.net/11/eum/rum.js";var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s);})();</script>

       May 17, 2011 9:43:23 AM NewRelic FINEST: Got browser timing footer in NewRelic API: <script type="text/javascript" charset="utf-8">NREUMQ.push(["nrf2","staging-beacon-1.newrelic.com","8512b4d93f",7449,"M1RTYksFDEYDUxdcDgoeZERQSwhGEmQGRhVL",0,413])</script>
       ```
     </Collapser>
   </CollapserGroup>
