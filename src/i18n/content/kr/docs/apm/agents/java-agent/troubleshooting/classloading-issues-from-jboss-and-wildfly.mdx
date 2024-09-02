---
title: JBoss 및 Wildfly의 클래스 로딩 문제
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'If you are running an app using JBoss/Wildfly, you may get incomplete or incorrect telemetry due to classloading issues with classes the agent use if you use Finest level logs.  Your application may even fail to start up. Usually this is resolved by upgrading the agent,  setting certain system properties, or through manually configuring module dependencies.'
freshnessValidatedDate: '2023-09-07T00:00:00.000Z'
translationType: machine
---

이 문서는 JBoss EAP/Wildfly의 클래스 로딩과 관련된 솔루션과 관련된 두 가지 문제를 안내합니다.

## 에이전트의 불완전한 원격 분석 [#problem-incomplete-telemetry]

### 문제 [#incomplete-telemetry-desc]

JBoss EAP 7.4(또는 그 이상) 또는 Wildfly 23(또는 그 이상)을 사용하는 앱에서 불완전한 텔레메트리를 발견했습니다. 불완전한 텔레메트리의 모습은 다음과 같습니다:

* 웹 요청은 웹이 아닌 트랜잭션으로 변환됩니다.
* 운영자 이름이 잘못되었습니다.

`Finest` 로그 수준을 사용하여 로그를 설정하고 `NoClassDefFoundError` 및 `ClassNotFoundException` 스택 추적을 찾는 경우 이는 JBoss EAP 및 Wildfly에서 클래스 로딩이 작동하는 방식에 문제가 있음을 나타냅니다.

에이전트는 JBoss를 사용하여 앱의 특정 클래스를 리소스업할 수 있지만 수정된 클래스는 JBoss EAP/Wildfly에서 인식되지 않는 패키지 및 모듈을 사용할 수 있습니다. 결과적으로 JBoss의 모듈 클래스 로더는 특정 클래스를 찾을 수 없으며, 이로 인해 `NoClassDefFoundError` 이 발생합니다.

앱이 계속 작동할 수 있지만 에이전트가 보낸 데이터는 부정확하거나 불완전할 수 있습니다. 에이전트 버전 8.6부터 Java 에이전트는 시스템 클래스 로더에 의해 특정 패키지를 로드함으로써 JBoss가 특정 패키지를 인식하도록 할 수 있습니다. 이를 통해 Wildfly/JBoss EAP 계측이 즉시 작동할 수 있지만 ClassLoader는 여전히 `ClassNotFoundException` 또는 `NoClassDefFoundError` 을 반환할 수 있습니다.

### 해결책 [#solution-incomplete]

에이전트 로그 수준을 `Finest` 으로 설정하는 경우 에이전트 로그 파일에서 `NoClassDefFoundError` 포함된 스택 추적을 확인하세요.

다음은 이 예가 8.6에서 패치되었음에도 불구하고 `java.util.logging` 패키지에 나타나는 이 오류의 예입니다.

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

다음은 이 오류에 대한 세 가지 잠재적인 수정 사항입니다.

#### 수정 1: 에이전트 업그레이드 [#telemetry-fix-1]

Java 에이전트 버전이 `8.6` 이상인지 확인하세요.

#### 수정 2: 시스템 클래스로더가 로드할 패키지를 표시합니다." [#telemetry-fix-2]

`java.util.logging.Level` 클래스가 오류를 일으키므로 `jboss.modules.system.pkgs` 이라는 시스템 속성을 설정해야 합니다. 이를 통해 JBoss는 `java.util.logging` 패키지의 모든 클래스를 시스템 패키지로 인식할 수 있습니다. 따라서 패키지 네임스페이스 아래의 클래스는 JBoss의 클래스 로더가 아닌 시스템 클래스 로더에 의해 로드됩니다.

이 문제를 해결하려면 JBoss가 인식할 Java 패키지의 쉼표로 구분된 목록을 추가하여 시스템 속성을 설정하십시오. 예: `Djboss.modules.system.pkgs=java.util.logging,javax.management`.

#### 수정 3: JBoss 모듈을 수동으로 구성 [#telemetry-fix-3]

이전 수정 사항의 문제점 중 하나는 시스템 클래스 로더를 통해 일부 패키지를 사용할 수 없다는 것입니다. 여기서 한 가지 사례는 `javax.management` 패키지에 관한 것입니다. 결과적으로 애플리케이션이 시작되지 않거나 `ClassNotFoundException` 이 발생하는 경우로 인해 올바르게 작동하지 않을 수 있습니다.

이 경우 에이전트 로그에 언급된 영향을 받는 JBoss 모듈을 수동으로 구성해야 합니다. 우리 시나리오에서는 `java.logging` 모듈의 일부인 `java.util.logging` 계속 사용하겠습니다. 스택 추적에 따르면 영향을 받은 JBoss 모듈은 `io.undertow.servlet` 입니다.

다음을 수행하여 JBoss 서버에서 특정 JBoss 모듈에 대한 설정 파일을 찾을 수 있습니다:

1. 상대 경로 `modules/system/layers/base` 로 이동합니다.
2. 모듈 이름을 기준으로 파일 경로를 입력합니다. `io.undertow.servlet` 의 경우 이는 `io/undertow/servlet` 로 변환됩니다.
3. `main/module.xml` 경로 아래의 파일로 이동합니다. `io.undertow.servlet` 구성 파일의 전체 상대 경로는 `modules/system/layers/base/io/undertow/servlet/main/module.xml` 입니다.
4. XML 파일에서 `<module>` 태그 내의 `<dependencies>` 태그 본문을 편집합니다. 태그가 없으면 추가하세요.
5. `<dependencies>` 태그 내에 `<module name="INSERT_MODULE_NAME"/>` 요소를 추가합니다. `java.util.logging` 의 경우 요소는 `<module name="java.logging"/>` 됩니다.

다음은 `io.undertow.servlet` 에 대한 샘플 XML입니다.

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

영향을 받는 모든 모듈에 대해 이 단계를 반복합니다.

## 애플리케이션이 시작되지 않거나 다른 클래스 로딩 문제가 있음 [#problem-application-runtime]

### 문제 [#start-up-fails]

이는 지속 에이전트 버전이 `8.6` 이상이고 Jakarta/J2EE Management API (JSR-777)를 사용하고 있지만 시작에 실패하는 경우의 솔루션입니다. 이 경우 클래스에 포함된 패키지 이름이 다음과 같은 `ClassNotFoundException` 의 경우를 볼 수 있습니다. `javax.management.j2ee`

### 해결책 [#solution-runtime]

안테나 에이전트를 `8.6` 이상으로 업그레이드한 경우 Jakarta/J2EE Management API 사용하는 경우에는 군대 시작에 실패할 수 있습니다. 이에 대한 해결 방법은 에이전트를 `8.7` 이상으로 업그레이드한 후 시스템 속성을 추가하는 것입니다.

```
-Dcom.newrelic.jboss.jsr77.fix=true
```

시스템 속성을 `true` 으로 설정하면 에이전트가 `javax.management` 에 시스템 클래스로 레이블을 지정하지 않게 됩니다. 결과적으로 추가 설정이 필요합니다. 다음과 같이하세요:

1. `modules/system/layers/base/io/undertow/servlet/main/module.xml` 으로 이동하여 XML 파일을 편집합니다.
2. `<module>` 태그 내에서 `<dependencies>` 태그의 본문을 찾습니다. 태그가 없으면 추가하세요.
3. `<dependencies>` 태그 내에 `<module name="java.management"/>` 요소를 추가합니다.

다음은 JBoss EAP 7.4에 대한 XML 조각의 예입니다.

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
