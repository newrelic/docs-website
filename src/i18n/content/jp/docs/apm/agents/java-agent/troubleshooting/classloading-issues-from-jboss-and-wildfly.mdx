---
title: JBoss と Wildfly のクラスローディングの問題
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'If you are running an app using JBoss/Wildfly, you may get incomplete or incorrect telemetry due to classloading issues with classes the agent use if you use Finest level logs.  Your application may even fail to start up. Usually this is resolved by upgrading the agent,  setting certain system properties, or through manually configuring module dependencies.'
freshnessValidatedDate: '2023-09-07T00:00:00.000Z'
translationType: machine
---

このドキュメントでは、JBoss EAP/Wildfly からのクラスローディングに関連する 2 つの問題とその解決策を組み合わせて説明します。

## エージェントからの不完全なテレメトリ [#problem-incomplete-telemetry]

### 問題 [#incomplete-telemetry-desc]

JBoss EAP 7.4 (またはそれ以降) または Wildfly 23 (またはそれ以降) を使用しているアプリからのテレメトリが不完全であることに気づきました。 不完全なテレメトリは次のようになります。

* Web リクエストは非 Web トランザクションに変換されます
* ディスパッチャー名が間違っています

`Finest`ログレベルを使用してログを設定し、 `NoClassDefFoundError`および`ClassNotFoundException`スタックトレースが見つかった場合、これは JBoss EAP および Wildfly でのクラスローディングの動作方法に問題があることを示しています。

エージェントは JBoss を使用してアプリ内の特定のクラスを設計できますが、変更されたクラスは JBoss EAP/Wildfly で認識されないパッケージとモジュールを使用する可能性があります。 その結果、JBoss のモジュール クラスローダーは特定のクラスを見つけることができず、 `NoClassDefFoundError`がスローされます。

アプリはまだ動作する可能性がありますが、エージェントから送信されたデータは不正確または不完全になります。エージェント バージョン 8.6 以降、Java エージェントは、システム クラスローダーによって特定のパッケージをロードすることで、JBoss に特定のパッケージを認識させることができます。これにより、Wildfly/JBoss EAP インストルメンテーションがそのまま使用できるようになりますが、ClassLoader は依然として`ClassNotFoundException`または`NoClassDefFoundError`を返す可能性があります。

### 解決 [#solution-incomplete]

エージェントのログ レベルを `Finest`に設定する場合は、エージェント ログ ファイルに `NoClassDefFoundError` を含むスタック トレースがないか確認してください。

この例は 8.6 でパッチが適用されているにもかかわらず、 `java.util.logging`パッケージに表示されるこのエラーの例を次に示します。

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

以下に、このエラーに対する潜在的な修正方法を 3 つ示します。

#### 解決策 1: エージェントをアップグレードする [#telemetry-fix-1]

Java エージェントがバージョン`8.6`以降であることを確認してください。

#### 解決策 2: システム クラスローダーによってロードされるパッケージをマークします。」 [#telemetry-fix-2]

クラス`java.util.logging.Level`がエラーの原因となるため、 `jboss.modules.system.pkgs`というシステム プロパティを設定する必要があります。これにより、JBoss は`java.util.logging`パッケージ内のすべてのクラスをシステム パッケージとして認識できるようになります。そのため、パッケージ名前空間内のクラスは、JBoss のクラスローダーではなくシステムのクラスローダーによってロードされます。

これを解決するには、JBoss に認識させたい Java パッケージのカンマ区切りリストを追加してシステムプロパティを設定します。例: `Djboss.modules.system.pkgs=java.util.logging,javax.management` 。

#### 修正3: JBossモジュールを手動で構成する [#telemetry-fix-3]

以前の修正に関する問題の 1 つは、一部のパッケージがシステム クラスローダー経由で利用できないことです。 ここでの 1 つのケースは、 `javax.management`パッケージの場合です。 その結果、アプリケーションの起動に失敗したり、 `ClassNotFoundException`のケースが投げ出されて正しく機能しなくなる可能性があります。

この場合、エージェント ログに記載されている影響を受ける JBoss モジュールを手動で構成する必要があります。 このシナリオでは、 `java.logging`モジュールの一部である`java.util.logging`を引き続き使用します。 スタックトレースに基づくと、影響を受ける JBoss モジュールは`io.undertow.servlet`であることがわかります。

次の手順を実行すると、JBoss サーバー内の特定の JBoss モジュールの設定ファイルを見つけることができます。

1. 相対パス`modules/system/layers/base`に移動します。
2. モジュール名に基づいてファイル パスを入力します。`io.undertow.servlet`の場合、これは`io/undertow/servlet`に変換されます。
3. パス`main/module.xml`の下のファイルに移動します。`io.undertow.servlet`構成ファイルの完全な相対パスは`modules/system/layers/base/io/undertow/servlet/main/module.xml`です。
4. XML ファイルで、 `<module>`タグ内の`<dependencies>`タグの本文を編集します。タグが存在しない場合は追加します。
5. `<dependencies>`タグ内に要素`<module name="INSERT_MODULE_NAME"/>`を追加します。`java.util.logging`の場合、要素は`<module name="java.logging"/>`になります。

以下は、 `io.undertow.servlet`のサンプル XML です。

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

影響を受けるすべてのモジュールに対してこれらの手順を繰り返します。

## アプリケーションの起動に失敗したり、その他のクラスロードの問題が発生したりする [#problem-application-runtime]

### 問題 [#start-up-fails]

これは、Java エージェントのバージョンが `8.6` 以上であり、Jakarta/J2EE 管理API (JSR-777) を使用しているにもかかわらず、アプリケーションの起動に失敗した場合の解決策です。 このインスタンスでは、クラスに含まれるパッケージ名が`ClassNotFoundException`であるケースが見られます。 `javax.management.j2ee`

### 解決 [#solution-runtime]

Javaagent を `8.6` 以上にアップグレードした場合、Jakarta/J2EE Management API使用しているとアプリケーションの起動に失敗する可能性があります。 この問題を解決するには、エージェントを`8.7`以上にアップグレードしてから、システム プロパティを追加します。

```
-Dcom.newrelic.jboss.jsr77.fix=true
```

システム プロパティを`true`に設定すると、エージェントは`javax.management`システム クラスとしてラベル付けしなくなります。 そのため、追加の設定が必要になります。 次の手順を実行します：

1. `modules/system/layers/base/io/undertow/servlet/main/module.xml`に移動して XML ファイルを編集します。
2. `<module>`タグ内の`<dependencies>`タグの本文を見つけます。タグが存在しない場合は追加します。
3. `<dependencies>`タグ内に要素`<module name="java.management"/>`を追加します。

JBoss EAP 7.4 の XML スニペットの例を次に示します。

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
