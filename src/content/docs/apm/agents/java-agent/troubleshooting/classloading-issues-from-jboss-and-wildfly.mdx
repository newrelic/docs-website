---
title: Classloading issues from JBoss and Wildfly
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'If you are running an app using JBoss/Wildfly, you may get incomplete or incorrect telemetry due to classloading issues with classes the agent use if you use Finest level logs. 
Your application may even fail to start up. Usually this is resolved by upgrading the agent, 
setting certain system properties, or through manually configuring module dependencies.'
redirects:
  - /docs/agents/java-agent/troubleshooting/jboss-and-wildfly-classloading-issues
  - /docs/agents/java-agent/troubleshooting/classloading-issues-jboss-and-wildfly
  - /docs/agents/java-agent/troubleshooting/classloading-issues-jboss-and-wildfly
freshnessValidatedDate: 2023-09-07
---

This doc walks you through two problems paired with their solutions related to classloading from JBoss EAP/Wildfly.

## Incomplete telemetry from the agent [#problem-incomplete-telemetry]

### Problem [#incomplete-telemetry-desc]

You're noticing incomplete telemetry from an app using JBoss EAP 7.4 (or higher) or Wildfly 23 (or higher). Incomplete telemetry might look like:

* Web requests are translated into non-web transactions
* Your dispatcher name is incorrect

If you set your logs using the `Finest` log level and find `NoClassDefFoundError` and `ClassNotFoundException` stack traces, this indicates a problem with how classloading works with JBoss EAP and Wildfly.

The agent can instrument a specific class in an app using JBoss, but the modified classes might use packages and modules that are not recognized by JBoss EAP/Wildfly. The result is JBoss's module classloader cannot find specific classes, which will throw a `NoClassDefFoundError`.

While your app may still work, the data sent by the agent will be incorrect or incomplete. Since agent version 8.6, the Java agent can make JBoss recognize certain packages by having them be loaded by the system classloader. This allows Wildfly/JBoss EAP instrumentation to work out of the box, but the ClassLoader may still return `ClassNotFoundException` or `NoClassDefFoundError`.

### Solution [#solution-incomplete]

When you set the agent log level to `Finest`, check for stack traces containing `NoClassDefFoundError` in your agent log file.

Here's an example of this error appearing in the `java.util.logging` package even though this example was patched in 8.6:

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

Below are three potential fixes for this error.

#### Fix 1: Upgrade your agent [#telemetry-fix-1]

Make sure that your Java agent is version `8.6` or higher.

#### Fix 2: Mark packages to be loaded by the system classloader" [#telemetry-fix-2]

Since the class `java.util.logging.Level` causes the error, we have to set a system property called `jboss.modules.system.pkgs`. This lets JBoss recognize all classes in the `java.util.logging` package as a system package. As such classes under the package namespace will be loaded by a system class-loader rather than JBoss's classloader.

To resolve this, set the system property by adding a comma-separated list of Java packages you want JBoss to recognize. For example: `Djboss.modules.system.pkgs=java.util.logging,javax.management`.

#### Fix 3: Manually configure JBoss modules [#telemetry-fix-3]

One of the problems with the previous fixes is some packages are not available via the system classloader. One case here is with the `javax.management` package. As a result, your application may fail to startup, or it might not function correctly due to cases of `ClassNotFoundException` being thrown around.

In this case you need to manually configure affected JBoss Modules that are mentioned in your agent logs. For our scenario, we will continue with `java.util.logging`, which is part of the `java.logging` module. Based on the stacktrace, we see the affected JBoss module is `io.undertow.servlet`.

We can find the configuration file for a specific JBoss module in your JBoss server by doing the following:

1. Go into the relative path `modules/system/layers/base`.
2. Enter the file path based on the module name. In the case of `io.undertow.servlet`, this translates to `io/undertow/servlet`.
3. Go into the file under the path `main/module.xml`. The full relative path for the `io.undertow.servlet` configuration file is `modules/system/layers/base/io/undertow/servlet/main/module.xml`.
4. In the XML file, edit the body of the `<dependencies>` tag inside the `<module>` tag. If the tag is not there, add it.
5. Inside the `<dependencies>` tag, add the element `<module name="INSERT_MODULE_NAME"/>`. For `java.util.logging`, the element becomes `<module name="java.logging"/>`.

Below is a sample XML for `io.undertow.servlet`:

```xml lineHighlight=7
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

Repeat these steps for all affected modules.

## Application fails to start or has other classloading issues [#problem-application-runtime]

### Problem [#start-up-fails]

This is the solution if your Java agent is version `8.6` or higher and you're using the Jakarta/J2EE Management API (JSR-777), but your application fails to start up. In this instance, you'll see cases of `ClassNotFoundException` where the package name included in the class is `javax.management.j2ee`

### Solution [#solution-runtime]

If you upgraded the Java Agent to `8.6` or higher, your application may fail to start up if you are using the Jakarta/J2EE Management API. The solution to this is to upgrade your agent to `8.7` or higher and then add the system property:

```
-Dcom.newrelic.jboss.jsr77.fix=true
```

The consequence of setting the system property to `true` is the agent will not label `javax.management` as a system class. As a result, you'll need additional configuration. Follow these steps:

1. Edit the XML file by going to `modules/system/layers/base/io/undertow/servlet/main/module.xml`.
2. Find the body of the `<dependencies>` tag inside the `<module>` tag. If the tag is not there, add it.
3. Inside the `<dependencies>` tag, add the element `<module name="java.management"/>`.

Here is an example XML snippet for JBoss EAP 7.4:

```xml lineHighlight=16
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
