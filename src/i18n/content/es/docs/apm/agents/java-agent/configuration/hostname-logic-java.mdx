---
title: Lógica de nombre de host en Java
tags:
  - Agents
  - Java agent
  - Configuration
metaDescription: The Java agent automatically assigns a hostname to your app. You can decorate this hostname with a display name in the New Relic UI.
freshnessValidatedDate: never
translationType: machine
---

El agente de Java asigna automáticamente un nombre `host:port` a sus JVM. Si el nombre predeterminado no es útil, puede [establecer un nombre para mostrar](#display-name) para distinguir sus JVM en la UI de New Relic. Para el marco compatible, el agente de Java utiliza el [nombre de la instancia](#instance-names) en lugar del nombre para mostrar.

El agente de Java identifica de forma única los agentes en ejecución [por su host, puerto y despachador](#unique-identifier), independientemente del entorno utilizado.

## Nombres para mostrar [#display-name]

Si la etiqueta `host:port` predeterminada en la UI de APM no es útil, puede decorar ese nombre en la UI de New Relic con un [nombre para mostrar](/docs/apm/new-relic-apm/maintenance/add-rename-remove-hosts#display_name). Establezca el nombre para mostrar mediante [configuración](/docs/agents/java-agent/configuration/java-agent-configuration-config-file), ya sea en una variable de entorno o en su archivo de configuración <DNT>**newrelic.yml**</DNT> . La variable de entorno tiene prioridad sobre el valor del archivo de configuración. Después de reiniciar la JVM y el agente de Java vuelve a informar, el nombre para mostrar se mostrará en la lista de JVM como se ve en el siguiente ejemplo, además de `host:port`.

Para establecer un nombre para mostrar:

* Establezca la variable de entorno [`NEW_RELIC_PROCESS_HOST_DISPLAY_NAME`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#NEW_RELIC_PROCESS_HOST_DISPLAY_NAME) .  
  O

* Establezca [`process_host.display_name`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#display_name) en su

  <DNT>
    **newrelic.yml**
  </DNT>

  .

Reinicie su JVM para ver los cambios en la UI de New Relic.

<Callout variant="tip">
  También puede configurar el nombre para mostrar con una [propiedad del sistema](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#System_Properties).
</Callout>

<img
  title="display_name example"
  alt="upload.png"
  src="/images/apm_screenshot-crop_java-edit-host-name.webp"
/>

## Nombres de instancia

Para los usuarios de WebSphere y WebLogic, el agente de Java también informa el nombre de instancia para cada instancia de servidor de aplicaciones activa, que es visible en la página APM <DNT>**Settings > Environment**</DNT> . Generalmente, este nombre lo proporciona el servidor de aplicaciones. Si se establece un nombre de instancia, se usará en lugar del nombre para mostrar en la UI de New Relic.

## Prioridad lógica del nombre de host [#precedence]

Si hay varias configuraciones de nombre de host (por ejemplo, usa WebSphere y también establece la propiedad `display_name` ), el agente usa esta precedencia:

* `display_name` anula el nombre predeterminado y los nombres de instancia de WebSphere y WebLogic.
* Los nombres de instancia de WebSphere y WebLogic anulan el nombre predeterminado.
* El nombre predeterminado (`host:port`) tiene la prioridad más baja.

## Hosts y agente identificador único [#unique-identifier]

El agente de Java utiliza hosts, puertos y despachadores para identificar de forma única varias JVM que informan al mismo nombre de aplicación. Por lo tanto, varios agentes que se ejecutan en el mismo servidor se informan por separado, siempre que sus puertos o nombres de despachadores difieran.

El identificador único se basa en los siguientes valores:

* <DNT>
    **Host**
  </DNT>

  : un identificador para el servidor principal de su aplicación que se deriva del sistema operativo. Este valor no es configurable por el agente de Java.

* <DNT>
    **Port**
  </DNT>

  : el puerto asociado con el servidor de aplicaciones. Si el agente no puede determinar el número de puerto o su aplicación no se está ejecutando en un servidor de aplicaciones, el valor predeterminado es

  <DNT>
    **0**
  </DNT>

  . Este valor es configurable por el usuario.

* <DNT>
    **Dispatcher Name**
  </DNT>

  : El nombre del servidor de aplicaciones. Por ejemplo, Apache Tomcat, Glassfish o WebLogic. Si no hay ningún servidor de aplicaciones activo, el valor predeterminado es

  <DNT>
    **Unknown**
  </DNT>

  .
