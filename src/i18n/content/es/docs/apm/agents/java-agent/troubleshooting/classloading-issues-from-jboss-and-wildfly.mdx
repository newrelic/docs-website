---
title: Problemas de carga de clases de JBoss y Wildfly
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'If you are running an app using JBoss/Wildfly, you may get incomplete or incorrect telemetry due to classloading issues with classes the agent use if you use Finest level logs.  Your application may even fail to start up. Usually this is resolved by upgrading the agent,  setting certain system properties, or through manually configuring module dependencies.'
freshnessValidatedDate: '2023-09-07T00:00:00.000Z'
translationType: machine
---

Este documento lo guía a través de dos problemas junto con sus soluciones relacionadas con la carga de clases de JBoss EAP/Wildfly.

<Tabs>
  <TabsBar>
    <TabsBarItem id="problem-incomplete-telemetry">
      Telemetría incompleta del agente
    </TabsBarItem>

    <TabsBarItem id="problem-application-runtime">
      La aplicación no se inicia u otros problemas con la carga de clases en tiempo de ejecución de la aplicación
    </TabsBarItem>
  </TabsBar>

  <TabsPages>
    <TabsPageItem id="problem-incomplete-telemetry">
      ## Problema

      Estás notando telemetría incompleta de una aplicación que usa JBoss EAP 7.4 (o superior) o Wildfly 23 (o superior). La telemetría incompleta podría verse así:

      * Las solicitudes web se traducen en transacciones no web.
      * El nombre de su despachador es incorrecto

        Si configura su registro usando el `Finest` nivel de registros y encuentra `NoClassDefFoundError` y `ClassNotFoundException` rastreo del stack, esto indica un problema con cómo funciona la carga de clases con JBoss EAP y Wildfly.

        El agente Weaver puede instrumentar una clase específica en una aplicación usando JBoss, pero las clases modificadas pueden usar paquetes y módulos que JBoss EAP/Wildfly no reconoce. El resultado es que el cargador de clases del módulo de JBoss no puede encontrar clases específicas, lo que generará un `NoClassDefFoundError`.

        Si bien es posible que su aplicación aún funcione, los datos enviados por el agente serán incorrectos o incompletos. Desde la versión 8.6 del agente, el agente de Java puede hacer que JBoss reconozca ciertos paquetes haciendo que el cargador de clases del sistema los cargue. Esto permite que la instrumentación Wildfly/JBoss EAP funcione de inmediato, pero el ClassLoader aún puede devolver `ClassNotFoundException` o `NoClassDefFoundError`.

        ## Solución [#solution-incomplete]

        Cuando configura el nivel de registros del agente en `Finest`, verifique el rastreo de la pila que contiene `NoClassDefFoundError` en el archivo de registro de su agente.

        A continuación se muestra un ejemplo de este error que aparece en el paquete `java.util.logging` aunque este ejemplo fue parcheado en 8.6:

        ```
        2022-02-01T11:59:16,167-0800 [97709 221] com.newrelic.agent.instrumentation.ClassTransformerServiceImpl FINEST: An error was thrown from instrumentation library com.newrelic.instrumentation.servlet-2.4
        java.lang.NoClassDefFoundError: java/util/logging/Level
        	at com.nr.instrumentation.servlet24.ServletHelper.setTxNameUsingServletName(ServletHelper.java:187) ~[?:?]
        	at com.nr.instrumentation.servlet24.ServletHelper.setTransactionName(ServletHelper.java:96) ~[?:?]
        	at javax.servlet.http.HttpServlet.service(HttpServlet.java) ~[?:?]
        	at io.undertow.servlet.handlers.ServletHandler.handleRequest(ServletHandler.java:74) ~[?:?]
        	at io.undertow.servlet.handlers.security.ServletSecurityRoleHandler.handleRequest(ServletSecurityRoleHandler.java:62) ~[?:?]
        	at io.undertow.servlet.handlers.ServletChain$1.handleRequest(ServletChain.java:68) ~[?:?]
        	at io.undertow.servlet.handlers.ServletDispatchingHandler.handleRequest(ServletDispatchingHandler.java:36) ~[?:?]
        	at org.wildfly.extension.undertow.security.SecurityContextAssociationHandler.handleRequest(SecurityContextAssociationHandler.java:78) ~[?:?]
        	at io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43) ~[undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.handlers.RedirectDirHandler.handleRequest(RedirectDirHandler.java:68) ~[?:?]
        	at io.undertow.servlet.handlers.security.SSLInformationAssociationHandler.handleRequest(SSLInformationAssociationHandler.java:117) ~[?:?]
        	at io.undertow.servlet.handlers.security.ServletAuthenticationCallHandler.handleRequest(ServletAuthenticationCallHandler.java:57) ~[?:?]
        	at io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43) ~[undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.security.handlers.AbstractConfidentialityHandler.handleRequest(AbstractConfidentialityHandler.java:46) ~[undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.handlers.security.ServletConfidentialityConstraintHandler.handleRequest(ServletConfidentialityConstraintHandler.java:64) ~[?:?]
        	at io.undertow.security.handlers.AuthenticationMechanismsHandler.handleRequest(AuthenticationMechanismsHandler.java:60) ~[undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.handlers.security.CachedAuthenticatedSessionHandler.handleRequest(CachedAuthenticatedSessionHandler.java:77) ~[?:?]
        	at io.undertow.security.handlers.NotificationReceiverHandler.handleRequest(NotificationReceiverHandler.java:50) ~[undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.security.handlers.AbstractSecurityContextAssociationHandler.handleRequest(AbstractSecurityContextAssociationHandler.java:43) ~[undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43) ~[undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at org.wildfly.extension.undertow.security.jacc.JACCContextIdHandler.handleRequest(JACCContextIdHandler.java:61) ~[?:?]
        	at io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43) ~[undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at org.wildfly.extension.undertow.deployment.GlobalRequestControllerHandler.handleRequest(GlobalRequestControllerHandler.java:68) ~[?:?]
        	at io.undertow.servlet.handlers.SendErrorPageHandler.handleRequest(SendErrorPageHandler.java:52) ~[?:?]
        	at io.undertow.server.handlers.PredicateHandler.handleRequest(PredicateHandler.java:43) ~[undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.handlers.ServletInitialHandler.handleFirstRequest(ServletInitialHandler.java:269) ~[undertow-servlet-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.handlers.ServletInitialHandler.access$100(ServletInitialHandler.java:78) ~[undertow-servlet-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.handlers.ServletInitialHandler$2.call(ServletInitialHandler.java:133) ~[undertow-servlet-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.handlers.ServletInitialHandler$2.call(ServletInitialHandler.java:130) ~[undertow-servlet-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.core.ServletRequestContextThreadSetupAction$1.call(ServletRequestContextThreadSetupAction.java:48) ~[undertow-servlet-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.core.ContextClassLoaderSetupAction$1.call(ContextClassLoaderSetupAction.java:43) ~[undertow-servlet-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at org.wildfly.extension.undertow.security.SecurityContextThreadSetupAction.lambda$create$0(SecurityContextThreadSetupAction.java:105) ~[?:?]
        	at org.wildfly.extension.undertow.deployment.UndertowDeploymentInfoService$UndertowThreadSetupAction.lambda$create$0(UndertowDeploymentInfoService.java:1530) ~[?:?]
        	at org.wildfly.extension.undertow.deployment.UndertowDeploymentInfoService$UndertowThreadSetupAction.lambda$create$0(UndertowDeploymentInfoService.java:1530) ~[?:?]
        	at org.wildfly.extension.undertow.deployment.UndertowDeploymentInfoService$UndertowThreadSetupAction.lambda$create$0(UndertowDeploymentInfoService.java:1530) ~[?:?]
        	at org.wildfly.extension.undertow.deployment.UndertowDeploymentInfoService$UndertowThreadSetupAction.lambda$create$0(UndertowDeploymentInfoService.java:1530) ~[?:?]
        	at io.undertow.servlet.handlers.ServletInitialHandler.dispatchRequest(ServletInitialHandler.java:249) [undertow-servlet-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.handlers.ServletInitialHandler.access$000(ServletInitialHandler.java:78) [undertow-servlet-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.servlet.handlers.ServletInitialHandler$1.handleRequest(ServletInitialHandler.java:99) [undertow-servlet-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.server.Connectors.executeRootHandler(Connectors.java:387) [undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at io.undertow.server.HttpServerExchange$1.run(HttpServerExchange.java:841) [undertow-core-2.2.5.Final-redhat-00001.jar!/:2.2.5.Final-redhat-00001]
        	at org.jboss.threads.ContextClassLoaderSavingRunnable.run(ContextClassLoaderSavingRunnable.java:35) [jboss-threads-2.4.0.Final-redhat-00001.jar!/:2.4.0.Final-redhat-00001]
        	at org.jboss.threads.EnhancedQueueExecutor.safeRun(EnhancedQueueExecutor.java:1990) [jboss-threads-2.4.0.Final-redhat-00001.jar!/:2.4.0.Final-redhat-00001]
        	at org.jboss.threads.EnhancedQueueExecutor$ThreadBody.doRunTask(EnhancedQueueExecutor.java:1486) [jboss-threads-2.4.0.Final-redhat-00001.jar!/:2.4.0.Final-redhat-00001]
        	at org.jboss.threads.EnhancedQueueExecutor$ThreadBody.run(EnhancedQueueExecutor.java:1377) [jboss-threads-2.4.0.Final-redhat-00001.jar!/:2.4.0.Final-redhat-00001]
        	at org.xnio.XnioWorker$WorkerThreadFactory$1$1.run(XnioWorker.java:1280) [xnio-api-3.8.4.Final-redhat-00001.jar!/:3.8.4.Final-redhat-00001]
        	at java.lang.Thread.run(Thread.java:748) [?:1.8.0_312]
        Caused by: java.lang.ClassNotFoundException: java.util.logging.Level from [Module "io.undertow.servlet" version 2.2.5.Final-redhat-00001 from local module loader @7ce85af2 (finder: local module finder @316acbb5 (roots: /Users/obenmeir/AppServers/jboss-eap-7.4/modules,/Users/obenmeir/AppServers/jboss-eap-7.4/modules/system/layers/base))]
        	at org.jboss.modules.ModuleClassLoader.findClass(ModuleClassLoader.java:255) ~[?:?]
        	at org.jboss.modules.ConcurrentClassLoader.performLoadClassUnchecked(ConcurrentClassLoader.java:410) ~[?:?]
        	at org.jboss.modules.ConcurrentClassLoader.performLoadClass(ConcurrentClassLoader.java:398) ~[?:?]
        	at org.jboss.modules.ConcurrentClassLoader.loadClass(ConcurrentClassLoader.java:116) ~[?:?]
        	... 22 more
        ```

        A continuación se presentan tres posibles soluciones para este error.

        ### Solución 1: actualice su agente

        Asegúrese de que su agente de Java sea la versión `8.6` o superior.

        ### Solución 2: marcar los paquetes que cargará el cargador de clases del sistema"

        Dado que la clase `java.util.logging.Level` causa el error, debemos establecer una propiedad del sistema llamada `jboss.modules.system.pkgs`. Esto permite a JBoss reconocer todas las clases en el paquete `java.util.logging` como un paquete del sistema. Como tales, las clases bajo el namespace del paquete serán cargadas por un cargador de clases del sistema en lugar del cargador de clases de JBoss.

        Para resolver esto, establezca la propiedad del sistema agregando una lista separada por comas de los paquetes Java que desea que JBoss reconozca. Por ejemplo: `Djboss.modules.system.pkgs=java.util.logging,javax.management`.

        ### Solución 3: configurar manualmente los módulos JBoss"

        Uno de los problemas con las correcciones anteriores es que algunos paquetes no están disponibles a través del cargador de clases del sistema. Un caso aquí es el del paquete `javax.management` . Como resultado, es posible que su aplicación no se inicie o que no funcione correctamente debido a que se lanzan mensajes `ClassNotFoundException` .

        En este caso, debe configurar manualmente los módulos JBoss afectados que se mencionan en el registro de su agente. Para nuestro escenario continuaremos con `java.util.logging`, que forma parte del módulo `java.logging` . Según el seguimiento de pila, vemos que el módulo JBoss afectado es `io.undertow.servlet`.

        Podemos encontrar el archivo de configuración para un módulo JBoss específico en su servidor JBoss de la siguiente manera:

      1. Ir al camino relativo `modules/system/layers/base`
      2. Ingrese la ruta del archivo según el nombre del módulo. En el caso de `io.undertow.servlet`, esto se traduce en `io/undertow/servlet`.
      3. Vaya al archivo en la ruta `main/module.xml`. La ruta relativa completa para el archivo de configuración `io.undertow.servlet` es `modules/system/layers/base/io/undertow/servlet/main/module.xml`.
      4. En el archivo XML, edite el cuerpo de la etiqueta `<dependencies>` dentro de la etiqueta `<module>` . Si la etiqueta no está allí, agréguela.
      5. Dentro de la etiqueta `<dependencies>` , agregue el elemento `<module name="$PLACEHOLDER FOR MODULE NAME"/>`. Para `java.util.logging`, el elemento se convierte en `<module name="$PLACEHOLDER FOR MODULE NAME"/>`.

         A continuación se muestra un XML de muestra para `io.undertow.servlet`:

         ```xml
         <module name="io.undertow.servlet" xmlns="urn:jboss:module:1.9">
         	<resources>
         		<resource-root path="undertow-servlet-2.2.5.Final-redhat-00001.jar"/>
         	</resources>

         	<dependencies>
         		<module name="java.logging"/>

         		<module name="javax.annotation.api"/>
         		<module name="sun.jdk"/>
         		<module name="javax.servlet.api"/>
         		<module name="javax.servlet.jsp.api"/>
         		<module name="javax.servlet.jstl.api"/>
         		<module name="org.jboss.logging"/>
         		<module name="io.undertow.core"/>
         		<module name="org.jboss.xnio"/>
         		<module name="jdk.unsupported"/>
         	</dependencies>
         </module>
         ```

         Repita estos pasos para todos los módulos afectados.
    </TabsPageItem>

    <TabsPageItem id="problem-application-runtime">
      ## Problema

      Esta es la solución si su agente de Java es la versión `8.6` o superior y está utilizando la API de administración Jakarta/J2EE (JSR-777), pero su aplicación no se inicia. En esta instancia, verá `ClassNotFoundException`mensajes donde está el nombre del paquete incluido en la clase `javax.management.j2ee`

      ## Solución [#solution-runtime]

      Si actualizó el agente de Java a `8.6` o superior, es posible que su aplicación no se inicie si está utilizando la API de administración Jakarta/J2EE. La solución a esto es actualizar su agente a `8.7` o superior y luego agregar la propiedad del sistema:

      ```
      -Dcom.newrelic.jboss.jsr77.fix=true
      ```

      La consecuencia de establecer la propiedad del sistema en verdadero es que el agente no etiquetará `javax.management` como una clase del sistema. Como resultado, necesitará una configuración adicional. Sigue estos pasos:

      1. Edite el archivo XML yendo a `modules/system/layers/base/io/undertow/servlet/main/module.xml`.
      2. Busque el cuerpo de la etiqueta `<dependencies>` dentro de la etiqueta `<module>` . Si la etiqueta no está allí, agréguela.
      3. Dentro de la etiqueta `<dependencies>` , agregue el elemento `<module name="java.management"/>`.

      Aquí hay un fragmento XML de ejemplo para JBoss EAP 7.4:

      ```xml
      <module name="io.undertow.servlet" xmlns="urn:jboss:module:1.9">
         <resources>
             <resource-root path="undertow-servlet-2.2.5.Final-redhat-00001.jar"/>
         </resources>

         <dependencies>
             <module name="javax.annotation.api"/>
             <module name="sun.jdk"/>
             <module name="javax.servlet.api"/>
             <module name="javax.servlet.jsp.api"/>
             <module name="javax.servlet.jstl.api"/>
             <module name="org.jboss.logging"/>
             <module name="io.undertow.core"/>
             <module name="org.jboss.xnio"/>
             <module name="jdk.unsupported"/>
             <module name="java.management"/>
         </dependencies>
      </module>
      ```
    </TabsPageItem>
  </TabsPages>
</Tabs>
