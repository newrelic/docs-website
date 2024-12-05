---
title: Error al arrancar New Relic agente de Java
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

Inicia un proceso de Java que se ejecuta con el agente de Java New Relic, pero [los datos no se informan](/docs/agents/java-agent/troubleshooting/no-data-appears-java) a la UI de APM. Verá un mensaje `Error bootstrapping New Relic agent` en el rastreo de la pila en su registro de aplicación.

<Callout variant="important">
  El mensaje `Error bootstrapping New Relic agent` puede indicar múltiples modos de falla. El rastreo del stack también es clave para diagnosticar este problema.
</Callout>

<CollapserGroup>
  <Collapser
    id="stack-trace-example"
    title="Ejemplo de rastreo del stack al arrancar el agente de Java"
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

## Solución

Si el agente de Java no puede crear los archivos temporales `jar` , no podrá iniciarse y devolverá la línea `Error bootstrapping New Relic agent` que precede al rastreo de la pila a `System.err`. Si está utilizando un servidor de aplicaciones, esto suele aparecer en el registro de errores de su servidor de aplicaciones.

A continuación se detallan las razones comunes de este fallo y la solución.

<CollapserGroup>
  <Collapser
    id="temp-not-default"
    title="El directorio temporal es diferente de la propiedad del sistema java.io.tempdir"
  >
    Este error puede ocurrir cuando especifica una ubicación de directorio temporal para el proceso Java que no es la ubicación predeterminada especificada por `java.io.tmpdir`. Para resolver este problema, pase la propiedad del sistema `-Dnewrelic.tempdir=/path/to/tmpdir` a la JVM al inicio.

    El agente de Java de New Relic intentará utilizar la ubicación del directorio temporal predeterminado para Java (`java.io.tempdir`) a menos que se pase esta propiedad del sistema. Si especificó una ubicación de directorio temporal diferente para que la utilice la JVM, es posible que la ubicación del directorio predeterminada no exista o que el agente de Java no tenga acceso de escritura a ella.
  </Collapser>

  <Collapser
    id="temp-nonexistent"
    title="El directorio temporal no existe al iniciar JVM"
  >
    Este error puede ocurrir si el directorio temporal no existe cuando se inicia la JVM. El agente de Java se inicia muy temprano en el ciclo de vida de la JVM. El agente no intentará crear el directorio temporal si aún no existe.

    Por ejemplo, parte del ciclo de vida de su proceso podría consistir en eliminar el directorio temporal de Java a medida que finaliza el proceso. En esta situación, asegúrese de que el directorio temporal de Java se cree nuevamente antes de que se inicie el agente de Java.
  </Collapser>

  <Collapser
    id="temp-not-write"
    title="El usuario no puede escribir en el directorio temporal existente"
  >
    Este error puede ocurrir si el directorio temporal existe pero el usuario que inicia el proceso Java no puede escribir en él. Esto impide que el agente de Java se inicie correctamente.

    Para resolver este problema, verifique los permisos del usuario que inicia el proceso Java que ejecuta el agente de Java. Asegúrese de que el usuario tenga permisos <DNT>**write**</DNT> y <DNT>**execute**</DNT> para la ubicación del directorio temporal.
  </Collapser>

  <Collapser
    id="other"
    title="Otros consejos de resolución de problemas"
  >
    Si ninguno de estos consejos de resolución de problemas funciona, consulte la información sobre [cómo proporcionar información de Java para la resolución de problemas](/docs/agents/java-agent/troubleshooting/providing-troubleshooting-information-java).
  </Collapser>
</CollapserGroup>
