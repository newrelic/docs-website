---
title: 'Desative a instrumentação Scala, Netty, Akka e Play 2'
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: 'This document describes how to disable Java agent instrumentation on Scala, Netty, Akka, and Play2 frameworks'
freshnessValidatedDate: never
translationType: machine
---

Este documento descreve como desabilitar a instrumentação de agente Java nestas estruturas assíncronas populares:

* Scala
* Netty
* Akka
* Play 2

Você pode optar por desabilitar parte ou toda essa instrumentação se achar que as métricas relatadas não são valiosas para você ou se a instrumentação incorrer em mais sobrecarga do que você gostaria. Se você desabilitar seletivamente parte da instrumentação, alguns segmentos de atividade não serão relatados e seu tempo total será subestimado.

## Agente Java versões 3.21 ou inferior [#versions-3-22-or-lower]

Se você estiver usando o agente Java versão 3.22 ou inferior, adicione o seguinte à seção `class_transformer` das configurações de <DNT>**newrelic.yml**</DNT> :

```yml
# This section is for settings common to all environments.
# Do not add anything above this next line.
common: &default_settings

  class_transformer: 
    akka_instrumentation:
      enabled: false
    netty_instrumenation:
      enabled: false
    play2_instrumentation:
      enabled: false
    scala_instrumentation:
      enabled: false
```

## Agente Java versões 3.22 ou superior [#versions-3-23-or-higher]

Os nomes de configuração de instrumentação framework Scala, Netty, Akka e Play 2 mais antigos foram descontinuados no agente Java versão 3.22. Se você usa o agente Java 3.22 ou superior, adicione o seguinte à seção `class_transformer` das configurações de <DNT>**newrelic.yml**</DNT> :

```yml
common: &default_settings

  class_transformer:
    # Disable all Akka instrumentations
    com.newrelic.instrumentation.akka-2.0:
      enabled: false
    com.newrelic.instrumentation.akka-2.1:
      enabled: false
    # Disabling 2.2 also disables higher versions
    com.newrelic.instrumentation.akka-2.2:
      enabled: false

    # Disable all Netty instrumentations
    com.newrelic.instrumentation.netty-3.4:
      enabled: false
    com.newrelic.instrumentation.netty-3.8:
      enabled: false
    com.newrelic.instrumentation.netty-4.0.0:
      enabled: false
    com.newrelic.instrumentation.netty-4.0.8:
      enabled: false

    # Disable all Play 2 instrumentations
    com.newrelic.instrumentation.play-2.1:
      enabled: false
    com.newrelic.instrumentation.play-2.2:
      enabled: false
    com.newrelic.instrumentation.play-2.3:
      enabled: false
    # New in Release 3.22, the Play 2.4 instrumentation does not respect
    # the older play2_instrumentation configuration setting 
    com.newrelic.instrumentation.play-2.4:
      enabled: false

    # Disable all Scala-language instrumentations
    com.newrelic.instrumentation.scala-2.9.3:
      enabled: false
```

Os nomes de instrumentação anteriores à 3.22 serão respeitados por um tempo, mas serão removidos em versões futuras. Se desabilitada pela configuração de instrumentação antiga ou nova, a instrumentação será desabilitada.

## Verifique se há configurações de configuração obsoletas [#check-deprecated-settings]

Qualquer uso dos nomes de instrumentação anteriores à 3.22 será registrado com mensagens semelhantes a:

```
INFO: Using deprecated configuration setting akka_instrumentation for instrumentation com.newrelic.instrumentation.akka-2.2
```

OU

```
INFO: The configuration setting akka_instrumentation is deprecated, please update the class_transformer config to use com.newrelic.instrumentation.akka-2.2 instead
```

Usar as configurações obsoletas não indica que a instrumentação obsoleta foi carregada ou está sendo usada. Essas mensagens são dicas para o usuário de que é hora de atualizar suas definições de configuração.

O Play 2.4 não respeita as definições de configuração `play2_instrumentation` antigas, pois é uma instrumentação nova. Em todos os casos, se você estiver usando o agente Java versão 3.22 ou superior, deverá usar os novos nomes de instrumentação para a framework Scala, Netty, Akka e Play 2 em seu newrelic.yml.
