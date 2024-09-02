---
title: Problemas de carregamento de classe do JBoss e Wildfly
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'If you are running an app using JBoss/Wildfly, you may get incomplete or incorrect telemetry due to classloading issues with classes the agent use if you use Finest level logs.  Your application may even fail to start up. Usually this is resolved by upgrading the agent,  setting certain system properties, or through manually configuring module dependencies.'
freshnessValidatedDate: '2023-09-07T00:00:00.000Z'
translationType: machine
---

Este documento orienta você em dois problemas combinados com suas soluções relacionadas ao carregamento de classe do JBoss EAP/Wildfly.

## Telemetria incompleta do agente [#problem-incomplete-telemetry]

### Problema [#incomplete-telemetry-desc]

Você está percebendo telemetria incompleta de um aplicativo usando o JBoss EAP 7.4 (ou superior) ou Wildfly 23 (ou superior). A telemetria incompleta pode ser semelhante a:

* Solicitações web são traduzidas em transação fora da web
* O nome do seu despachante está incorreto

Se você definir seu log usando o nível de log `Finest` e encontrar o rastreamento de pilha `NoClassDefFoundError` e `ClassNotFoundException` , isso indica um problema com o modo como o carregamento de classe funciona com o JBoss EAP e o Wildfly.

O agente pode instrumentar uma classe específica em um aplicativo usando o JBoss, mas as classes modificadas podem usar pacotes e módulos que não são reconhecidos pelo JBoss EAP/Wildfly. O resultado é que o carregador de classe do módulo JBoss não consegue encontrar classes específicas, o que gerará um `NoClassDefFoundError`.

Embora seu aplicativo ainda funcione, os dados enviados pelo agente estarão incorretos ou incompletos. Desde a versão 8.6 do agente, o agente Java pode fazer com que o JBoss reconheça determinados pacotes fazendo-os serem carregados pelo carregador de classe do sistema. Isso permite que a instrumentação Wildfly/JBoss EAP funcione imediatamente, mas o ClassLoader ainda pode retornar `ClassNotFoundException` ou `NoClassDefFoundError`.

### Solução [#solution-incomplete]

Ao definir o nível de log do agente como `Finest`, verifique o rastreamento de pilha contendo `NoClassDefFoundError` no arquivo de log do agente.

Aqui está um exemplo desse erro que aparece no pacote `java.util.logging` mesmo que este exemplo tenha sido corrigido na versão 8.6:

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

Abaixo estão três possíveis soluções para esse erro.

#### Correção 1: atualize seu agente [#telemetry-fix-1]

Certifique-se de que seu agente Java seja da versão `8.6` ou superior.

#### Correção 2: marque os pacotes a serem carregados pelo carregador de classe do sistema" [#telemetry-fix-2]

Como a classe `java.util.logging.Level` causa o erro, precisamos definir uma propriedade de sistema chamada `jboss.modules.system.pkgs`. Isso permite que o JBoss reconheça todas as classes do pacote `java.util.logging` como um pacote de sistema. Como tais classes no namespace do pacote serão carregadas por um carregador de classes do sistema em vez do carregador de classes do JBoss.

Para resolver isso, defina a propriedade do sistema adicionando uma lista separada por vírgulas de pacotes Java que você deseja que o JBoss reconheça. Por exemplo: `Djboss.modules.system.pkgs=java.util.logging,javax.management`.

#### Correção 3: configurar manualmente os módulos JBoss [#telemetry-fix-3]

Um dos problemas com as correções anteriores é que alguns pacotes não estão disponíveis através do carregador de classes do sistema. Um caso aqui é com o pacote `javax.management` . Como resultado, seu aplicativo pode falhar na inicialização ou pode não funcionar corretamente devido a casos de `ClassNotFoundException` sendo lançado.

Nesse caso, você precisa configurar manualmente os Módulos JBoss afetados mencionados no log do agente. Para nosso cenário, continuaremos com `java.util.logging`, que faz parte do módulo `java.logging` . Com base no stacktrace, vemos que o módulo JBoss afetado é `io.undertow.servlet`.

Podemos encontrar o arquivo de configuração para um módulo JBoss específico em seu servidor JBoss fazendo o seguinte:

1. Vá para o caminho relativo `modules/system/layers/base`.
2. Insira o caminho do arquivo com base no nome do módulo. No caso de `io.undertow.servlet`, isso se traduz em `io/undertow/servlet`.
3. Acesse o arquivo no caminho `main/module.xml`. O caminho relativo completo para o arquivo de configuração `io.undertow.servlet` é `modules/system/layers/base/io/undertow/servlet/main/module.xml`.
4. No arquivo XML, edite o corpo da tag `<dependencies>` dentro da tag `<module>` . Se a tag não estiver lá, adicione-a.
5. Dentro da tag `<dependencies>` , adicione o elemento `<module name="INSERT_MODULE_NAME"/>`. Para `java.util.logging`, o elemento se torna `<module name="java.logging"/>`.

Abaixo está um exemplo de XML para `io.undertow.servlet`:

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

Repita essas etapas para todos os módulos afetados.

## O aplicativo não inicia ou apresenta outros problemas de carregamento de classe [#problem-application-runtime]

### Problema [#start-up-fails]

Esta é a solução se o seu agente Java for da versão `8.6` ou superior e você estiver usando a API de gerenciamento Jakarta/J2EE (JSR-777), mas seu aplicativo não for inicializado. Nesta instância, você verá casos de `ClassNotFoundException` onde o nome do pacote incluído na classe é `javax.management.j2ee`

### Solução [#solution-runtime]

Se você atualizou o agente Java para `8.6` ou superior, seu aplicativo poderá falhar ao inicializar se você estiver usando a API de gerenciamento Jakarta/J2EE. A solução para isso é atualizar seu agente para `8.7` ou superior e depois adicionar a propriedade do sistema:

```
-Dcom.newrelic.jboss.jsr77.fix=true
```

A consequência de definir a propriedade do sistema como `true` é que o agente não rotulará `javax.management` como uma classe de sistema. Como resultado, você precisará de configuração adicional. Siga esses passos:

1. Edite o arquivo XML acessando `modules/system/layers/base/io/undertow/servlet/main/module.xml`.
2. Encontre o corpo da tag `<dependencies>` dentro da tag `<module>` . Se a tag não estiver lá, adicione-a.
3. Dentro da tag `<dependencies>` , adicione o elemento `<module name="java.management"/>`.

Aqui está um exemplo de trecho XML para o JBoss EAP 7.4:

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
