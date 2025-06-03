---
title: Nombra o cambia el nombre de tu aplicación
tags:
  - Agents
  - Manage APM agents
  - App naming
metaDescription: 'After deploying your app in New Relic, change the default app name to something descriptive. You can also add an alias for your app.'
freshnessValidatedDate: never
translationType: machine
---

New Relic conecta métrica a aplicaciones individuales utilizando su [clave de licencia](/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key) y el nombre de la aplicación principal. Puede cambiar el nombre de la aplicación en su archivo de configuración o asignar un alias a la aplicación para cambiar cómo aparece en la UI de New Relic.

<Callout variant="important">
  Si no especifica el nombre de la aplicación en su archivo de configuración de New Relic, la mayoría de los agentes de New Relic proporcionan un nombre de aplicación genérico de forma predeterminada. Para garantizar que todos [los datos agregados](/docs/accounts-partnerships/accounts/account-billing-usage/data-retention-components#components-aggregate-metrics) de la misma aplicación se informen con precisión, asegúrese de [darle a cada aplicación un nombre descriptivo](#app-name).
</Callout>

## Cambiar el nombre versus el alias [#differences]

Puede asignar un nuevo nombre a la aplicación o cambiar el alias de la aplicación. Estos tienen dos efectos diferentes:

<table>
  <thead>
    <tr>
      <th width={100}>
        Término
      </th>

      <th width={200}>
        <DNT>
          **How to change it**
        </DNT>
      </th>

      <th>
        <DNT>
          **Effect**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Nombre
      </td>

      <td>
        [Asigne el nombre en su archivo de configuración](#assigning)
      </td>

      <td>
        Cambiar el nombre de la aplicación en el archivo de configuración del agente hará que la aplicación informe a un nuevo encabezado en la interfaz de usuario de New Relic, con una discontinuidad total de los datos.

        Esto es útil, por ejemplo, si desea empezar de nuevo y reportar nuevos datos. Si ningún otro agente informa al nombre de la aplicación anterior, el nombre de la aplicación anterior aparecerá en gris y se podrá eliminar.
      </td>
    </tr>

    <tr>
      <td>
        Alias
      </td>

      <td>
        [Cambiar el alias en la UIde configuración de APM](#app-alias)
      </td>

      <td>
        [Crear un <DNT>**alias**</DNT> para el nombre de la aplicación](/docs/apm/new-relic-apm/maintenance/rename-your-application#app-alias) solo cambia la forma en que aparece el nombre de la aplicación en la UI de New Relic. Cambiar el alias no afecta la forma en que se informan los datos. Simplemente le ayuda a realizar un seguimiento de sus datos con un alias útil.
      </td>
    </tr>
  </tbody>
</table>

## Dale a cada aplicación un nombre descriptivo [#app-name]

De forma predeterminada, la mayoría de los agentes de New Relic proporcionan un nombre de aplicación predeterminado, como <DNT>**My Application**</DNT> o <DNT>**PHP Application**</DNT>, para cada aplicación que está vinculada a su cuenta.

<Callout variant="important">
  Recomendamos cambiar el nombre predeterminado de una aplicación a un nombre más descriptivo antes de expandirla, y puede tener hasta 128 caracteres.
</Callout>

Cada nombre de aplicación único crea un nuevo registro de aplicación en su UI de New Relic, que le permite:

* Ejecute una aplicación en más de un host y agregue (recopile) todos los datos bajo el mismo nombre.
* Ejecute varias aplicaciones en un solo host y agregue (recopile) todos los datos con diferentes nombres.

## Asigne el nombre en su archivo de configuración [#assigning]

Para cambiar el nombre de la aplicación, establezca el valor del nombre de la aplicación en el archivo de configuración del agente. Si implementó una aplicación a través de un agente APM y luego implementó otra aplicación con el mismo nombre a través de un agente APM diferente, New Relic agregará automáticamente el nombre del idioma del agente al final del nombre de la segunda aplicación. Por ejemplo, si implementa una aplicación Node.js llamada `New-App` y luego implementa una aplicación .NET llamada `New-App`, New Relic agregará automáticamente el nombre de la segunda aplicación como `New-App (DOTNET)`.

Para garantizar el cumplimiento de las convenciones de nomenclatura, tenga en cuenta que los símbolos `<` y `>` no están permitidos en el nombre de la aplicación. Si se incluyen estos símbolos, se eliminarán automáticamente. Asegúrese de que el nombre de su aplicación cumpla con este requisito.

<table>
  <thead>
    <tr>
      <th width={100}>
        <DNT>
          **Agent**
        </DNT>
      </th>

      <th>
        <DNT>
          **Configuration file value**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        C
      </td>

      <td>
        Identifique un máximo de tres nombres separados por punto y coma `;`en su [`newrelic_app_config_t* config;`](/docs/agents/c-sdk/install-configure/install-c-sdk-compile-link-your-code#app-name).
      </td>
    </tr>

    <tr>
      <td>
        Go
      </td>

      <td>
        Establezca [`AppName`](/docs/agents/go-agent/instrumentation/go-agent-configuration#app-name) en un máximo de tres nombres separados por un punto y coma.
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        Vea las opciones para [nombrar su aplicación Java](/docs/agents/java-agent/configuration/name-your-java-application).
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        Utilice cualquiera de las opciones disponibles para [nombrar su aplicación .NET](/docs/agents/net-agent/installation-and-configuration/naming-your-net-application).
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        Establezca [`app_name`](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#app_name) en un máximo de tres nombres separados por una coma. Encierre los nombres entre comillas simples o dobles. (O cambie la variable de entorno [`NEW_RELIC_APP_NAME`](/docs/agents/nodejs-agent/installation-configuration/configuring-nodejs-environment-variables#app_name)).
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        Vea las opciones para [nombrar su aplicación PHP](/docs/agents/php-agent/configuration/name-your-php-application).
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Establezca [`app_name`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#app_name) en un máximo de tres nombres separados por un punto y coma. No agregue un espacio después del punto y coma, o el siguiente nombre se interpretará como un comentario.
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Establezca [`app_name`](/docs/agents/ruby-agent/installation-configuration/ruby-agent-configuration#app_name) en un máximo de tres nombres separados por un punto y coma.
      </td>
    </tr>
  </tbody>
</table>

## Cambiar el alias de la aplicación [#app-alias]

El nombre de la aplicación que configuró en la interfaz de usuario de New Relic es un <DNT>**alias**</DNT> legible por humanos. Si cambia el nombre de su aplicación, el nombre visible se actualiza en todas partes de la UI de New Relic, incluidas [las aplicaciones de navegador vinculadas](/docs/browser/new-relic-browser/installation-configuration/rename-browser-apps).

Inicialmente, este alias es el mismo que el nombre del identificador de la aplicación en el archivo de configuración del agente New Relic. Sin embargo, cambiar el alias UI <DNT>**does not**</DNT> afecta el nombre de la aplicación subyacente utilizada para la acumulación de datos, que se establece en el archivo de configuración del agente. La aplicación debe estar informando datos activamente para cambiar el alias. Cambiar el alias UI hará que todos los agentes que informen bajo el identificador de la aplicación se reinicien.

Para cambiar el <DNT>**alias**</DNT> del nombre de su aplicación en la interfaz de usuario de New Relic:

1. Vaya a

   <DNT>
     **[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM & services > (select an app) > Settings > Application**
   </DNT>

   .

2. En el campo

   <DNT>
     **Application alias**
   </DNT>

   , escriba un nuevo nombre (alias) para la aplicación seleccionada.

3. Seleccione

   <DNT>
     **Save application settings**
   </DNT>

   .

También puede cambiar el alias de la aplicación [con la API REST de New Relic](/docs/apm/apis/application-examples-v2/changing-alias-your-application-api-v2).

<Callout variant="tip">
  Cuando realiza un cambio a través de <DNT>**Application settings**</DNT>, el cambio guardado reiniciará el agente. Solo se reiniciará el agente de este servicio específico, pero la acción no reiniciará sus grupos de aplicaciones ni servidores web.
</Callout>

## Usar varios nombres para una aplicación [#multiple-names]

Al [darle a su aplicación varios nombres](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app), puede métrica agregada para múltiples agentes en toda una aplicación o servicio.

<Callout variant="important">
  Si usa varios nombres para una aplicación, el apellido asignado es el nombre menos específico que New Relic usa para acumular los datos. Para obtener mejores resultados, vea el conjunto de datos agregado y a nivel de instancia, el orden de los nombres acumulados de su aplicación, desde el más específico al menos específico en su archivo de configuración.
</Callout>
