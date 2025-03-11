---
title: 'Deshabilite la instrumentación Scala, Netty, Akka y Play 2'
tags:
  - Agents
  - Java agent
  - Async instrumentation
metaDescription: 'This document describes how to disable Java agent instrumentation on Scala, Netty, Akka, and Play2 frameworks'
freshnessValidatedDate: never
translationType: machine
---

Este documento describe cómo deshabilitar la instrumentación del agente Java en estos populares marcos asíncronos:

* Scala
* Netty
* Akka
* Play 2

Puede optar por desactivar parte o toda esta instrumentación si descubre que las métricas informadas no son valiosas para usted o si la instrumentación genera más gastos generales de los que le gustaría. Si desactiva selectivamente parte de la instrumentación, algunos segmentos de actividad no se informarán y su tiempo total se subestimará.

## Agente de Java versiones 3.21 o inferiores [#versions-3-22-or-lower]

Si está utilizando agente de Java versión 3.22 o inferior, agregue lo siguiente a la sección `class_transformer` de su configuración <DNT>**newrelic.yml**</DNT> :

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

## Agente de Java versiones 3.22 o superiores [#versions-3-23-or-higher]

Los nombres de configuración de instrumentación framework Scala, Netty, Akka y Play 2 más antiguos quedaron obsoletos en la versión 3.22 del agente de Java. Si utiliza agente de Java 3.22 o superior, agregue lo siguiente a la sección `class_transformer` de su configuración <DNT>**newrelic.yml**</DNT> :

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

Los nombres de instrumentación anteriores a 3.22 se respetarán por un tiempo, pero se eliminarán en versiones futuras. Si está deshabilitado por la configuración de instrumentación nueva o antigua, la instrumentación se deshabilitará.

## Compruebe si hay opciones de configuración obsoletas [#check-deprecated-settings]

Cualquier uso de los nombres de instrumentación anteriores a 3.22 se registrará con mensajes similares a:

```
INFO: Using deprecated configuration setting akka_instrumentation for instrumentation com.newrelic.instrumentation.akka-2.2
```

O

```
INFO: The configuration setting akka_instrumentation is deprecated, please update the class_transformer config to use com.newrelic.instrumentation.akka-2.2 instead
```

El uso de la configuración obsoleta no indica que la instrumentación obsoleta se haya cargado o se esté utilizando. Estos mensajes son sugerencias para el usuario de que es hora de actualizar sus ajustes de configuración.

Play 2.4 no respeta los ajustes de configuración anteriores `play2_instrumentation` , ya que es una instrumentación nueva. En todos los casos, si está utilizando agente de Java versión 3.22 o superior, debe usar los nuevos nombres de instrumentación para el framework Scala, Netty, Akka y Play 2 en su newrelic.yml.
