---
title: 'Agregar, cambiar el nombre y eliminar hosts'
tags:
  - Agents
  - Manage APM agents
  - Configuration
metaDescription: 'To add a host, install the New Relic agent and start your app. To remove a host, uninstall or disable the agent first.'
freshnessValidatedDate: never
translationType: machine
---

Puede agregar y eliminar hosts para su aplicación. No puede cambiar el nombre de un host existente, pero puede crear una aplicación con el nombre de un host o clúster. También puede [asignar una etiqueta cosmética al host](#display_name) para diferenciarlos sin cambiar la configuración del nombre de host subyacente.

## Agregar hosts [#adding_hosts]

Para agregar un host para monitoreo, instale el agente e inicie su aplicación. El host que ejecuta la aplicación será identificado en New Relic y aparecerá automáticamente en el sitio después de unos minutos.

## Cambiar el nombre de los hosts [#renaming_hosts]

No es posible cambiar el nombre de host. Sin embargo, puede [crear una aplicación con el nombre de un host o clúster](/docs/site/renaming-applications). Por ejemplo, si los hosts `ey01-s00057` y `ey01-s00058` son parte de un [nivel](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#tier) de producción, puede crear una aplicación llamada `App - Production` y hacer que esos dos hosts le reporten.

## Cambiar el nombre para mostrar de los hosts [#display_name]

También puede asignar un nombre para mostrar a un host para distinguir fácilmente los hosts asignados dinámicamente. Este nombre para mostrar no afecta el vínculo entre una aplicación y su host principal. El nombre para mostrar aparece en la UI de APM para decorar el nombre `host:port` asignado automáticamente.

En el siguiente ejemplo, `QA Server` y `Local Dev Server` son nombres para mostrar:

<img
  title="crop-cosmetic-label-hostname.png"
  alt="crop-cosmetic-label-hostname.png"
  src="/images/apm_screenshot-crop_host-name-display.webp"
/>

Para establecer un nombre para mostrar:

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        New Relic
      </th>

      <th>
        Establecer el nombre para mostrar del host
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Go
      </td>

      <td>
        Edite la [configuración de Go agente`HostDisplayName` .](/docs/agents/go-agent/instrumentation/go-agent-configuration#host-display-name)
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        [Edite su archivo de configuración o variables de entorno](/docs/agents/java-agent/configuration/hostname-logic-java#display-name). Sin embargo, si el agente de Java [detecta un nombre de instancia](/docs/agents/java-agent/configuration/hostname-logic-java#instance-names), APM usa ese nombre en lugar del nombre para mostrar.
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        Edite el atributo `displayName` en el elemento `processHost` del archivo de configuración del agente .NET o de [las variables de entorno](http://docs.newrelic.com/docs/agents/net-agent/configuration/net-agent-configuration#host-name).
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        Edite `display_name` en la sección `process_host` de su archivo de configuración.
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        Edite `process_host.display_name` en su archivo <DNT>**newrelic.ini**</DNT> .
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Edite `process_host.display_name` en su archivo de configuración.
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Edite `process_host.display_name` en su archivo de configuración.
      </td>
    </tr>
  </tbody>
</table>

## Eliminar hosts [#removing_hosts]

Para eliminar un host, utilice cualquiera de las opciones:

* [Desinstale](/docs/agents/manage-apm-agents/installation/uninstall-agent) el agente.
* Deshabilítelo editando o eliminando el archivo de configuración del agente. Asegúrese de que todas las instancias del host de la aplicación (Passenger, Jetty, etc.) se hayan reiniciado por completo después de deshabilitar el agente.

Ocasionalmente, los procesos del servidor de aplicaciones no autorizados seguirán reportando datos. En esta situación [, el indicador de estado de salud de su aplicación](/docs/using-new-relic/welcome-new-relic/getting-started/glossary#health-status) aparecerá en verde, aunque haya cerrado el agente y haya verificado que no se están reportando datos. Verifique su servidor web para detectar procesos perdidos u obtenga soporte en [support.newrelic.com](https://support.newrelic.com "El enlace se abre en una ventana nueva.").

Una vez que haya desinstalado un agente APM de una instancia de host, el host anterior puede tardar hasta 75 minutos en desaparecer de la vista de APM. Si eliminó un host al desinstalar el agente de infraestructura, es posible que demore hasta 24 horas en desaparecer.
