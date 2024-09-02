---
title: New Relic Java エージェントのブートストラップに関するエラー
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: Troubleshooting tips if you see an "Error bootstrapping New Relic agent" message with your Java app.
freshnessValidatedDate: never
translationType: machine
---

## 問題

New Relic Java エージェントで実行されている Java プロセスを起動しますが、[データを APM UI にレポートできません](/docs/agents/java-agent/troubleshooting/no-data-appears-java)。アプリケーション ログのスタック トレースに`Error bootstrapping New Relic agent`メッセージが表示されます。

<Callout variant="important">
  メッセージ`Error bootstrapping New Relic agent`は複数の障害モードを示す可能性があります。スタック トレースも、この問題を診断する際の鍵となります。
</Callout>

<CollapserGroup>
  <Collapser
    id="stack-trace-example"
    title="Javaエージェントを起動する際のスタックトレース例"
  >
    ```
    Error bootstrapping New Relic agent: java.lang.RuntimeException: java.io.IOException: No such file or directory

    java.lang.RuntimeException: java.io.IOException: No such file or directory

    at com.newrelic.bootstrap.BootstrapLoader.load(BootstrapLoader.java:136)

    at com.newrelic.bootstrap.BootstrapAgent.startAgent(BootstrapAgent.java:100)

    at com.newrelic.bootstrap.BootstrapAgent.premain(BootstrapAgent.java:68)

    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)

    at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)

    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)

    at java.lang.reflect.Method.invoke(Method.java:606)

    at sun.instrument.InstrumentationImpl.loadClassAndStartAgent(InstrumentationImpl.java:382)

    at sun.instrument.InstrumentationImpl.loadClassAndCallPremain(InstrumentationImpl.java:397)

    Caused by: java.io.IOException: No such file or directory

    at java.io.UnixFileSystem.createFileExclusively(Native Method)

    at java.io.File.createNewFile(File.java:1006)

    at java.io.File.createTempFile(File.java:1989)

    at com.newrelic.bootstrap.EmbeddedJarFilesImpl$1.load(EmbeddedJarFilesImpl.java:36)

    at com.newrelic.bootstrap.EmbeddedJarFilesImpl$1.load(EmbeddedJarFilesImpl.java:26)

    at com.newrelic.agent.deps.com.google.common.cache.LocalCache$LoadingValueReference.loadFuture(LocalCache.java:3542)

    at com.newrelic.agent.deps.com.google.common.cache.LocalCache$Segment.loadSync(LocalCache.java:2323)

    at com.newrelic.agent.deps.com.google.common.cache.LocalCache$Segment.lockedGetOrLoad(LocalCache.java:2286)

    at com.newrelic.agent.deps.com.google.common.cache.LocalCache$Segment.get(LocalCache.java:2201)

    at com.newrelic.agent.deps.com.google.common.cache.LocalCache.get(LocalCache.java:3953)

    at com.newrelic.agent.deps.com.google.common.cache.LocalCache.getOrLoad(LocalCache.java:3957)

    at com.newrelic.agent.deps.com.google.common.cache.LocalCache$LocalLoadingCache.get(LocalCache.java:4875)

    at com.newrelic.bootstrap.EmbeddedJarFilesImpl.getJarFileInAgent(EmbeddedJarFilesImpl.java:66)

    at com.newrelic.bootstrap.BootstrapLoader.addBridgeJarToClassPath(BootstrapLoader.java:73)

    at com.newrelic.bootstrap.BootstrapLoader.load(BootstrapLoader.java:129)

    ... 8 more
    ```
  </Collapser>
</CollapserGroup>

## 解決

Java エージェントが一時`jar`ファイルを作成できない場合、Java エージェントは起動に失敗し、スタック トレースの前の`Error bootstrapping New Relic agent`行を`System.err`に返します。アプリサーバーを使用している場合、これは通常、アプリサーバーのエラーログに表示されます。

ここでは、よくある失敗の理由とその解決策をご紹介します。

<CollapserGroup>
  <Collapser
    id="temp-not-default"
    title="Tempディレクトリがjava.io.tempdirシステムプロパティと異なる"
  >
    この障害は、 Java プロセスに、 `java.io.tmpdir`で指定されたデフォルトの場所ではない一時ディレクトリの場所を指定した場合に発生する可能性があります。この問題を解決するには、起動時にシステム プロパティ`-Dnewrelic.tempdir=/path/to/tmpdir`を JVM に渡します。

    New Relic の Java エージェントは、このシステム プロパティが渡されない限り、Java のデフォルトの一時ディレクトリの場所 ( `java.io.tempdir` ) を使用しようとします。JVM が使用する別の一時ディレクトリの場所を指定した場合、デフォルトのディレクトリの場所が存在しないか、Java エージェントがそのディレクトリの場所への書き込みアクセス権を持っていない可能性があります。
  </Collapser>

  <Collapser
    id="temp-nonexistent"
    title="JVM起動時にTempディレクトリが存在しない"
  >
    この障害は、JVMの起動時にtempディレクトリが存在しない場合に発生します。Javaエージェントは、JVMのライフサイクルのごく初期に起動します。一時ディレクトリがまだ存在しない場合、エージェントは一時ディレクトリの作成を試みません。

    例えば、プロセスのライフサイクルの一部として、プロセスの終了時にjavaのテンポラリー・ディレクトリを削除することがあります。このような場合には、Javaエージェントが次に起動する前に、javaのテンプレ・ディレクトリが再び作成されるようにします。
  </Collapser>

  <Collapser
    id="temp-not-write"
    title="ユーザーが既存のtempディレクトリに書き込めない"
  >
    この障害は、tempディレクトリが存在するにもかかわらず、Javaプロセスを開始するユーザーがそのディレクトリに書き込むことができない場合に発生します。これにより、Javaエージェントが正常に起動しなくなります。

    この問題を解決するには、Java エージェントを実行している Java プロセスを開始するユーザーの権限を確認します。 ユーザーが一時ディレクトリの場所に対して<DNT>**write**</DNT>および<DNT>**execute**</DNT>権限を持っていることを確認してください。
  </Collapser>

  <Collapser
    id="other"
    title="その他のトラブルシューティング"
  >
    これらのトラブルシューティングがうまくいかない場合は、トラブルシューティングのためのJava情報を提供している [の情報を参照してください。](/docs/agents/java-agent/troubleshooting/providing-troubleshooting-information-java) 。
  </Collapser>
</CollapserGroup>
