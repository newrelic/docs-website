---
title: Erro ao iniciar o agente Java do New Relic
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: Troubleshooting tips if you see an "Error bootstrapping New Relic agent" message with your Java app.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você inicia um processo Java em execução com o agente Java do New Relic, mas [os dados não são reportados](/docs/agents/java-agent/troubleshooting/no-data-appears-java) à interface do APM. Você verá uma mensagem `Error bootstrapping New Relic agent` no stack trace no log do aplicativo.

<Callout variant="important">
  A mensagem `Error bootstrapping New Relic agent` pode indicar vários modos de falha. O stack trace também é fundamental para diagnosticar esse problema.
</Callout>

<CollapserGroup>
  <Collapser
    id="stack-trace-example"
    title="Exemplo stack trace ao iniciar o agente Java"
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

## Solução

Se o agente Java não puder criar os arquivos `jar` temporários, ele falhará na inicialização e retornará a linha `Error bootstrapping New Relic agent` que precede o stack trace para `System.err`. Se você estiver usando um servidor de aplicativos, isso geralmente aparecerá no log de erros do servidor de aplicativos.

Aqui estão os motivos comuns para essa falha e a solução.

<CollapserGroup>
  <Collapser
    id="temp-not-default"
    title="O diretório temporário é diferente da propriedade do sistema java.io.tempdir"
  >
    Essa falha pode ocorrer quando você especifica um local de diretório temporário para o processo Java que não é o local padrão especificado por `java.io.tmpdir`. Para resolver esse problema, passe a propriedade do sistema `-Dnewrelic.tempdir=/path/to/tmpdir` para a JVM na inicialização.

    O agente Java da New Relic tentará usar o local do diretório temporário padrão para Java (`java.io.tempdir`), a menos que esta propriedade do sistema seja transmitida. Se você especificou um local de diretório temporário diferente para uso da JVM, o local do diretório padrão poderá não existir ou o agente Java poderá não ter acesso de gravação a ele.
  </Collapser>

  <Collapser
    id="temp-nonexistent"
    title="O diretório temporário não existe na inicialização da JVM"
  >
    Esta falha poderá ocorrer se o diretório temporário não existir quando a JVM estiver sendo inicializada. O agente Java inicia bem no início do ciclo de vida da JVM. O agente não tentará criar o diretório temporário se ele ainda não existir.

    Por exemplo, parte do ciclo de vida do seu processo pode ser excluir o diretório temporário java enquanto o processo está sendo concluído. Nessa situação, certifique-se de que o diretório java temp será criado novamente antes da próxima inicialização do agente Java.
  </Collapser>

  <Collapser
    id="temp-not-write"
    title="O usuário não pode gravar no diretório temporário existente"
  >
    Essa falha pode ocorrer se o diretório temporário existir, mas não puder ser gravado nele pelo usuário que inicia o processo java. Isso impede que o agente Java seja inicializado com êxito.

    Para resolver esse problema, verifique as permissões do usuário que inicia o processo Java que está executando o agente Java. Certifique-se de que o usuário tenha permissões <DNT>**write**</DNT> e <DNT>**execute**</DNT> para o local do diretório temporário.
  </Collapser>

  <Collapser
    id="other"
    title="Outras dicas de resolução de problemas"
  >
    Se nenhuma dessas dicas de resolução de problemas funcionar, consulte as informações sobre como [fornecer informações sobre Java para resolução de problemas](/docs/agents/java-agent/troubleshooting/providing-troubleshooting-information-java).
  </Collapser>
</CollapserGroup>
