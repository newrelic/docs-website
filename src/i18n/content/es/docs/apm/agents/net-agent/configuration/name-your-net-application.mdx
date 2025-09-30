---
title: Asigne un nombre a su aplicación .NET
tags:
  - Agents
  - NET agent
  - Configuration
metaDescription: 'Name your New Relic .NET app: Our recommended and full list of naming options for your IIS-hosted and non-IIS apps.'
freshnessValidatedDate: never
translationType: machine
---

[El agente .NET de New Relic](/docs/agents/net-agent/getting-started/introduction-new-relic-net) le ofrece varias formas de cambiar el nombre de la aplicación informada y mostrada en APM. Este documento le brinda una descripción general de esas opciones de nombres.

Para obtener una descripción general de los nombres de aplicaciones APM (no específicos de .NET), consulte [Asigne un nombre a su aplicación](/docs/agents/manage-apm-agents/app-naming/name-your-application). Para cambiar el nombre de una aplicación sin interrumpir la continuidad de los datos, utilice la [opción de cambio de aliasUI ](/docs/agents/manage-apm-agents/app-naming/name-your-application#differences).

## Configure el nombre de su aplicación (método recomendado) [#naming-options]

Cuando implementas tu aplicación por primera vez, puedes cambiar el nombre predeterminado por uno más descriptivo. Dado que New Relic recopila métricas usando estos nombres, personalizarlos le permite ejecutar la misma aplicación en múltiples hosts y obtener métricas de todas sus instancias.

Normalmente, configurar el archivo `newrelic.config` local de la aplicación es el método de denominación más conveniente.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Método de denominación
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>**Recommended**</DNT>:

        Configure el archivo `newrelic.config` local de su aplicación
      </td>

      <td>
        Este método le permite darle a su aplicación un nombre único con ajustes de configuración específicos. También funciona para aplicaciones alojadas en IIS y no IIS.

        1. Copie el archivo `newrelic.config` del directorio de inicio del agente a la carpeta raíz de su aplicación.

           <DNT>**Default:**</DNT> `%ALLUSERSPROFILE%\New Relic\.NET Agent`

        2. Abra la copia y configure el nombre de su aplicación de la siguiente manera:

           ```xml
           <application>
               <name>App Name</name>
           </application>
           ```

        3. Reinicie su aplicación.
      </td>
    </tr>
  </tbody>
</table>

Mientras su aplicación esté activa, los datos deberían aparecer en unos minutos. En caso contrario, siga nuestros [procedimientos de resolución de problemas](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

## Otros metodos

Si tiene un uso o propósito específico en mente, es posible que prefiera un método de denominación diferente. Aquí hay una lista completa de los métodos alternativos:

<Callout variant="important">
  Algunos métodos [tienen prioridad](/docs/agents/net-agent/configuration/net-agent-configuration#config-options-precedence) sobre otros. Antes de elegir un método de denominación, asegúrese de comprender cómo puede verse afectada su configuración.
</Callout>

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Método de denominación
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Configure su archivo `web.config`
      </td>

      <td>
        Si tiene aplicaciones alojadas en IIS y prefiere no tener un archivo `newrelic.config` local, puede configurar los ajustes de nombres en su archivo `web.config` .

        <CollapserGroup>
          <Collapser
            id="web"
            title="Pasos"
          >
            <DNT>
              **For .NET Framework apps:**
            </DNT>

            1. Agregue la siguiente entrada a la sección `appSettings` de su archivo y luego reinicie su aplicación.

               ```xml
               <appSettings>
                   <add key="NewRelic.AppName" value="App Name" />
               </appSettings>
               ```

               <DNT>
                 **For .NET Core apps:**
               </DNT>

            2. Agregue la variable de entorno `NEW_RELIC_APP_NAME` a su archivo de la siguiente manera y luego reinicie su aplicación.

               ```xml
               <aspNetCore processPath="dotnet" arguments=".\MyApp.dll" stdoutLogEnabled="false" stdoutLogFile=".\logs\stdout" hostingModel="InProcess" >
                   <environmentVariables>
                       <environmentVariable name="NEW_RELIC_APP_NAME" value="App Name" />
                   </environmentVariables>
               </aspNetCore>
               ```
          </Collapser>
        </CollapserGroup>
      </td>
    </tr>

    <tr>
      <td>
        Establecer el nombre de la aplicación usando variables de entorno
      </td>

      <td>
        Si desea configurar fácilmente los nombres de las aplicaciones durante el despliegue del contenedor, configure una variable de entorno en el entorno de la aplicación.

        <CollapserGroup>
          <Collapser
            id="env-var"
            title="Pasos"
          >
            1. Establezca la variable ambiental `NEW_RELIC_APP_NAME` en el entorno de su aplicación:

               ```ini
               NEW_RELIC_APP_NAME = "App name"
               ```

               <Callout variant="important">
                 Este método solo funciona si utiliza [la versión 6.17.387.0 o superior](/docs/release-notes/agent-release-notes/net-release-notes) del agente .NET.
               </Callout>
          </Collapser>
        </CollapserGroup>
      </td>
    </tr>

    <tr>
      <td>
        Nombre después de los grupos de aplicaciones
      </td>

      <td>
        Si sus grupos de aplicaciones IIS ya tienen nombres únicos que le gusten, o si está utilizando una [infraestructura de contenido de red compartida (SNCI)](https://www.iis.net/learn/web-hosting/scenario-build-a-web-farm-with-iis-servers), puede nombrar su aplicación según el grupo de aplicaciones asignado.

        <CollapserGroup>
          <Collapser
            id="app-pool"
            title="Pasos"
          >
            1. Elimine las claves `NewRelic.AppName` de la sección `<appSettings>` en `web.config.` . Asegúrese de no eliminar la etiqueta `<appSettings>` circundante.

            2. Elimine los `<name>` elementos secundarios del `<application>` elemento principal en `newrelic.config`. Asegúrese de no eliminar la etiqueta `<application>` circundante.

               ```xml
               <application>
                   <!-- <name>App Name</name> -->
               </application>
               ```

               Luego, cada aplicación informará según el nombre de su grupo de aplicaciones.
          </Collapser>
        </CollapserGroup>
      </td>
    </tr>

    <tr>
      <td>
        Configure su archivo `app.config`
      </td>

      <td>
        Si tiene una aplicación no alojada en IIS y prefiere no tener un archivo `newrelic.config` local, puede configurar los ajustes de nombres en su archivo `app.config` .

        <CollapserGroup>
          <Collapser
            id="app-config"
            title="Pasos"
          >
            1. Agregue la siguiente entrada a su archivo `app.config` (por ejemplo, `applicationname.exe.config`) y luego reinicie su aplicación.

               ```xml
               <appSettings>
                   <add key="NewRelic.AppName" value="App Name" />
               </appSettings>
               ```
          </Collapser>
        </CollapserGroup>
      </td>
    </tr>

    <tr>
      <td>
        Utilice la API del agente .NET
      </td>

      <td>
        Si desea cambiar el nombre de su aplicación mediante programación, puede utilizar la [llamada API del agente`SetApplicationName()` ](/docs/apm/agents/net-agent/net-agent-api/set-application-name/)para configurar el nombre de la aplicación en tiempo de ejecución. Este nombre tendrá prioridad sobre todas las demás fuentes de nombres de aplicaciones.
      </td>
    </tr>
  </tbody>
</table>

Mientras su aplicación esté activa, los datos deberían aparecer en unos minutos. De lo contrario, asegúrese de haber realizado un `IISRESET` desde un símbolo del sistema administrativo si ha cambiado [el archivo de configuración de su aplicación .NET](/docs/agents/net-agent/installation-and-configuration/net-agent-configuration) (`newrelic.config` o `app.config`). En caso contrario, siga nuestros [procedimientos de resolución de problemas](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

## Utilice varios nombres de aplicaciones [#multiple]

Puede utilizar varios nombres de aplicaciones para agregar datos de su aplicación. A veces lo llamamos "acumular" sus datos.

Para el agente .NET, puede configurar hasta tres nombres de aplicaciones. El primer nombre es el nombre de la aplicación principal y el segundo y tercer nombre se utilizan para las categorías de agregación de datos más generales. Para obtener más información sobre cómo funcionan varios nombres de aplicaciones, consulte [Usar varios nombres de aplicaciones](/docs/agents/manage-apm-agents/app-naming/use-multiple-names-app).

<CollapserGroup>
  <Collapser
    id="example-applocal"
    title={<><InlineCode>newrelic.config</InlineCode> archivo</>}
  >
    A continuación se muestra un ejemplo de configuración de varios nombres en el archivo `newrelic.config` local de su aplicación:

    ```xml
    <application>
        <name>Primary App Name</name>
        <name>Second App Name</name>
        <name>Third App Name</name>
    </application>
    ```
  </Collapser>

  <Collapser
    id="example-web"
    title={<><InlineCode>web.config</InlineCode> archivo</>}
  >
    A continuación se muestra un ejemplo de configuración de varios nombres en su archivo `web.config` :

    ```xml
    <appSettings>
        <add key="NewRelic.AppName" value="App Name, App Name 2, App Name 3" />
    </appSettings>
    ```
  </Collapser>

  <Collapser
    id="example-app"
    title={<><InlineCode>app.config</InlineCode> archivo</>}
  >
    A continuación se muestra un ejemplo de configuración de varios nombres en su archivo `app.config` :

    ```xml
    <appSettings>
        <add key="NewRelic.AppName" value="App Name, App Name 2, App Name 3" />
    </appSettings>
    ```
  </Collapser>

  <Collapser
    id="example-app"
    title={<><InlineCode>NEW_RELIC_APP_NAME</InlineCode> Variable ambiental</>}
  >
    A continuación se muestra un ejemplo de configuración de varios nombres en la variable de entorno `NEW_RELIC_APP_NAME` :

    ```
    NEW_RELIC_APP_NAME="App Name, App Name 2, App Name 3"
    ```
  </Collapser>
</CollapserGroup>
