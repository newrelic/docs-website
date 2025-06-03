---
title: Determinar los requisitos de permisos (Java)
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: System permissions you need to install and use the New Relic PHP agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Debe determinar qué permisos del sistema necesita para instalar y utilizar el agente de Java New Relic.

## Solución

El propietario del proceso debe cumplir los siguientes requisitos de permisos para Java:

1. El propietario del proceso Java al que se le pasará la opción `-javaagent` debe tener permisos de lectura para el agente de Java JAR. Esto se debe a que <DNT>**Java**</DNT> es lo que está siendo <DNT>**executed**</DNT> y Java necesita <DNT>**read**</DNT> el `newrelic.jar`.

2. El propietario del proceso requiere permisos de escritura/ejecución para el directorio en el que se creará el directorio log y permisos de ejecución para todos los directorios principales del directorio log . Este directorio principal podría ser cualquiera de los siguientes:

   * El directorio en el que vive `newrelic.jar` . Esta es la ubicación predeterminada en la que el agente de Java New Relic creará su directorio de registro.
   * La ubicación especificada por la propiedad del sistema [`log_file_path`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-log_file_path) también se pasó a la JVM
   * `StdOut` si ha especificado esta ubicación con la variable de entorno [`NEW_RELIC_LOG`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#ev-NEW_RELIC_LOG)

   Si el directorio New Relic Logs <DNT>**already exists**</DNT>, el propietario del proceso debe tener acceso de escritura/ejecución en este directorio para que el proceso Java pueda atravesar el directorio y crear el archivo de registro del agente Java.

3. El propietario del proceso debe tener acceso de escritura/ejecución al directorio temporal del proceso Java. Este puede ser el directorio predeterminado para archivos Java temporales (especificados en todo el sistema), o puede ser uno específico del proceso, particularmente si está ejecutando un servidor de aplicaciones, ya que estos a menudo especifican y configuran una ubicación de directorio temporal discreta.
