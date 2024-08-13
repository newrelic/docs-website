---
title: Recursos de instalación del agente .NET
tags:
  - Agents
  - NET agent
  - Other installation
freshnessValidatedDate: never
translationType: machine
---

Este documento contiene descripciones detalladas de los recursos y procedimientos a los que se hace referencia en los [procedimientos de instalación del agente .NET](/docs/agents/net-agent/installation/new-relic-net-agent-install-introduction).

<Callout variant="important">
  Este documento **no** debe leerse como un documento independiente. Para obtener instrucciones de instalación, consulte [Instalación del agente .NET](/install/dotnet).
</Callout>

## Generador de perfiles .NET de Microsoft [#profiler]

El agente .NET de New Relic se basa en la [API de creación de perfiles de Microsoft](https://docs.microsoft.com/en-us/dotnet/framework/unmanaged-api/profiling/profiling-overview) para informar datos de su aplicación .NET.

Las soluciones de monitoreo .NET distintas de New Relic pueden usar esta API de creación de perfiles. Pero sólo un servicio puede utilizar el generador de perfiles a la vez. Esto significa que si ha utilizado un servicio de monitoreo .NET en el pasado y no lo ha deshabilitado/eliminado por completo, es posible que el generador de perfiles todavía esté en uso, lo que provocará [conflictos con el generador de perfiles](/docs/agents/net-agent/troubleshooting/profiler-conflicts) cuando intente habilitar el agente .NET.

## Biblioteca de descarga del agente .NET [#download-library]

La [biblioteca de descarga](https://download.newrelic.com/dot_net_agent/latest_release/) del agente New Relic .NET contiene paquetes de archivos de instalación a los que se hace referencia en [procedimientos de instalación](/install/dotnet#common-installs) específicos. Para obtener más información sobre estos archivos, consulte el [archivo ReadMe](https://download.newrelic.com/dot_net_agent/latest_release/Readme.txt) de la biblioteca de descargas.

## Archivos zip para la instalación manual del agente .NET (Windows) [#install-zip-file]

Para instalar manualmente el agente usando un archivo ZIP, elija el archivo correcto para la aplicación que desea monitor:

1. Vaya al [sitio de descarga del agente .NET](https://download.newrelic.com/dot_net_agent/latest_release/) y obtenga el archivo que coincida con la arquitectura de su aplicación (64 bits o 32 bits):

   * .NET framework o .NET Core/.NET 5+ (32 bits): `NewRelicDotNetAgent_VERSION_x86.zip`
   * .NET framework o .NET Core/.NET 5+ (64 bits): `NewRelicDotNetAgent_VERSION_x64.zip`

2. Descomprima la carpeta del agente en la ubicación deseada.

3. Establezca variables de entorno para el proceso que desea monitor.

   <Callout variant="caution">
     No recomendamos configurar estas variables de entorno globalmente. Configurar estas variables de entorno globalmente puede hacer que todos los procesos .NET que se ejecutan en el sistema se instrumenten e informen a New Relic. Si está instalando el agente manualmente, esperamos que tenga los medios para configurar estas variables de entorno solo para los procesos que desea monitor.
   </Callout>

   <CollapserGroup>
     <Collapser
       id="net-framework-env-variables"
       title="Variables de entorno de .NET framework para instalación manual"
     >
       Para .NET framework, se requieren las siguientes variables:

       ```ini
       COR_ENABLE_PROFILING=1
       COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
       NEWRELIC_HOME=path\to\agent\directory\netframework
       COR_PROFILER_PATH=path\to\agent\directory\netframework\NewRelic.Profiler.dll
       ```
     </Collapser>

     <Collapser
       id="net-core-env-variables"
       title="Variables de entorno .NET Core/.NET 5+ para instalación manual"
     >
       Para .NET Core/.NET 5+, se requieren las siguientes variables:

       ```ini
       CORECLR_ENABLE_PROFILING=1
       CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}
       CORECLR_NEWRELIC_HOME=path\to\agent\directory\netcore
       CORECLR_PROFILER_PATH=path\to\agent\directory\netcore\NewRelic.Profiler.dll
       ```
     </Collapser>
   </CollapserGroup>

4. Reinicie su aplicación. Si usa IIS, reinicie IIS.

Si su aplicación recibe tráfico, los datos deberían aparecer en unos minutos. Si no es así, consulte [No aparecen datos](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

## Necesidad de instrumentación personalizada [#custom-instrumentation]

Después de instalar un agente .NET, la mayoría de los marcos de aplicaciones .NET informarán automáticamente los datos a su cuenta New Relic. (Consulte la compatibilidad del marco de la aplicación: [.NET framework](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent) \| [.NET Core](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-agent)).

Si su aplicación .NET utiliza un framework de aplicación que **no** está instrumentado automáticamente, o si la aplicación no tiene framework (como una aplicación de consola), después de la instalación deberá configurar manualmente la instrumentación de su aplicación. Estos son los pasos para hacerlo:

1. Siga las [instrucciones de instalación](/docs/agents/net-agent/installation/new-relic-net-agent-install-introduction#install-instructions) relevantes para su aplicación y framework.
2. [Instrumento personalizado](/docs/agents/net-agent/custom-instrumentation/introduction-net-custom-instrumentation) en su aplicación para definir qué actividad se reporta a New Relic.

## Variables de entorno relacionadas con la instalación [#env-variables]

La instalación de un agente .NET requiere configurar variables de entorno. Para algunos procedimientos de instalación (como para la aplicación .NET alojada en IIS), estas variables de entorno se configuran automáticamente. Para otros procedimientos de instalación, deberá configurarlos manualmente. Para ver las variables de entorno necesarias tanto para .NET framework como para la aplicación .NET Core, consulte [Variables de entorno](/docs/agents/net-agent/configuration/net-agent-configuration#environment-variables).

Para instalaciones que requieren que configure manualmente variables de entorno, también puede configurar otras [opciones de configuración](/docs/agents/net-agent/configuration/net-agent-configuration) a través de variables de entorno. He aquí un vistazo a dos que se configuran comúnmente:

* <DNT>**License key**</DNT>. La variable de entorno para configurar <InlinePopover type="licenseKey"/>es:

  ```ini
  NEW_RELIC_LICENSE_KEY = YOUR_LICENSE_KEY
  ```

  También puede configurar esto en el [archivo newrelic.config](/docs/agents/net-agent/configuration/net-agent-configuration#service) o en el [archivo de configuración de la aplicación](/docs/agents/net-agent/configuration/net-agent-configuration#app-cfg-license-key).

* <DNT>**App name**</DNT>. Se recomienda configurar un [nombre de aplicación significativo](/docs/agents/manage-apm-agents/app-naming/name-your-application#app-name) , pero también puede configurarlo después de la instalación. La variable de entorno es:

  ```ini
  NEW_RELIC_APP_NAME = YOUR_APP_NAME
  ```

  También puedes [configurar esto a través de newrelic.config, el archivo de configuración de la aplicación o la API](/docs/agents/net-agent/configuration/name-your-net-application).

## Instalador programable (solo Windows) [#scriptable-installer]

El instalador programable son archivos ZIP que contienen un script de PowerShell para instalar el agente .NET. Hay un archivo zip separado para .NET framework frente a .NET Core.

<Callout variant="important">
  Recomendamos utilizar el instalador MSI en lugar del instalador programable. Si desea automatizar su instalación, considere ejecutar el instalador MSI desde la línea de comando.
</Callout>

<Callout variant="important">
  A partir de la versión 10.0.0 del agente .NET, el instalador programable ya no está disponible. Esta documentación permanece para los clientes que deseen utilizar el instalador programable para una versión anterior.
</Callout>

<CollapserGroup>
  <Collapser
    id="framework-installer-options"
    title="Instalador programable para .NET framework"
  >
    Para utilizar el instalador programable para instalar el agente .NET para una aplicación de .NET framework :

    1. Asegúrese de tener derechos de administrador para su grupo de administración de Windows. Para obtener más detalles sobre esto, consulte la [documentación de permisos](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent#user-rights).

    2. Descargue el paquete de instalación de secuencias de comandos para .NET framework desde el [sitio de descarga](https://download.newrelic.com/dot_net_agent/latest_release/). Al descargar o utilizar uno de estos paquetes, acepta los [términos de la licencia](/docs/licenses/license-information/agent-licenses/net-agent-licenses).

    3. Descomprima el paquete.

    4. Abra un shell de comandos y navegue hasta la carpeta del paquete descomprimido.

    5. Para una instalación sencilla sin opciones, utilice este comando:

       ```bash
       .\install.cmd -LicenseKey YOUR_LICENSE_KEY
       ```

       Para instalar con una o más opciones adicionales, utilice el formato siguiente. Consulte la tabla a continuación para obtener una descripción de las opciones de instalación.

       ```bash
       install.cmd -LicenseKey YOUR_LICENSE_KEY [-NoIISReset] [-InstrumentAll] [-InstallPath PATH_TO_INSTALL]
       ```

       Si su aplicación recibe tráfico, los datos deberían aparecer en unos minutos. Si no es así, consulte [No aparecen datos](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

       <table>
         <thead>
           <tr>
             <th width={150}>
               Opciones de instalación
             </th>

             <th>
               Descripción
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               `LicenseKey`
             </td>

             <td>
               <DNT>**Required**</DNT>. Tu <InlinePopover type="licenseKey"/>.
             </td>
           </tr>

           <tr>
             <td>
               `NoIISReset`
             </td>

             <td>
               Opcional. Utilice esta opción para evitar que el instalador inicie un reinicio de IIS.

               <Callout variant="important">
                 Si utiliza esta opción, deberá realizar un restablecimiento de IIS manualmente antes de que New Relic comience a instrumentar cualquier aplicación alojada en IIS.
               </Callout>
             </td>
           </tr>

           <tr>
             <td>
               `InstrumentAll`
             </td>

             <td>
               Opcional. De forma predeterminada, el agente .NET implementará todas las aplicaciones alojadas en IIS. Utilice esta opción para habilitar la instrumentación de otros tipos de aplicaciones .NET.
             </td>
           </tr>

           <tr>
             <td>
               `InstallPath`
             </td>

             <td>
               Opcional. Utilice esta opción para elegir una ubicación de instalación diferente. La ubicación de instalación predeterminada es `C:\Program Files\New Relic`.
             </td>
           </tr>
         </tbody>
       </table>

       Desinstalar el agente con el desinstalador programable:

       <Callout variant="tip">
         Puede agregar la opción `Force` al script de desinstalación para forzar una desinstalación sin solicitar que reinicie IIS.
       </Callout>

       Ejecute el siguiente comando para desinstalar el agente .NET:

       ```bash
       .\uninstall.cmd
       ```
  </Collapser>

  <Collapser
    id="core-installer-options"
    title="Instalador programable para .NET Core"
  >
    <Callout variant="important">
      Antes de instalar el agente:

      * Comprender los [requisitos del agente](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-agent), incluidos los [requisitos de permisos](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-agent#user-rights).
      * Tenga en cuenta que se requieren derechos de administrador en un shell elevado (específicamente para seleccionar un directorio log personalizado y realizar un IISReset).
    </Callout>

    <Callout variant="caution">
      Por razones de seguridad, es necesario ejecutar el script `installAgent.ps1` como se muestra a continuación, anteponiendo `./` al nombre del archivo del script, en lugar de anteponer `powershell` al script. Si ejecuta el script anteponiendo `powershell` y cualquiera de los argumentos proporcionados (como la ruta de instalación o la ruta de log personalizada) tiene espacios, estos argumentos se dañarán, lo que provocará que el agente se instale en una ubicación que no sea la ubicación prevista, que podría no ser segura.
    </Callout>

    Para utilizar el instalador programable para instalar el agente .NET para una aplicación .NET Core:

    1. Asegúrese de tener derechos de administrador para su grupo de administración de Windows. Para obtener más detalles sobre esto, consulte la [documentación de permisos.](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-agent#user-rights)

    2. Descargue el paquete de instalación de secuencias de comandos del agente .NET desde el [sitio de descarga del agente .NET](https://download.newrelic.com/dot_net_agent/latest_release/) . Al descargar o utilizar uno de estos paquetes, acepta los [términos de la licencia](/docs/licenses/license-information/agent-licenses/net-agent-licenses).

    3. Descomprima el paquete en la ubicación deseada.

    4. Abra un shell de comandos y navegue hasta la carpeta del paquete descomprimido.

    5. Puede instalar el agente local o globalmente:

       <CollapserGroup>
         <Collapser
           id="installer-local"
           title="Instalación local"
         >
           Para una instalación sencilla, sin opciones, utilice este comando:

           ```bash
           ./installAgent.ps1 -destination PATH -installType global -licenseKey YOUR_LICENSE_KEY \
           	[-appName "YOUR_APPLICATION_NAME" -logDir "PATH_TO_CUSTOM_LOG_LOCATION"]
           ```

           Para instalar con una o más opciones adicionales, use el mismo comando con las opciones deseadas. Para obtener descripciones de las opciones, consulte la tabla a continuación.

           ```bash
           ./installAgent.ps1 -destination PATH -installType local -licenseKey YOUR_LICENSE_KEY \
           	[-appName "YOUR_APPLICATION_NAME" -logDir "PATH_TO_CUSTOM_LOG_LOCATION" -X86 -ResetIIS -Force]
           ```
         </Collapser>

         <Collapser
           id="installer-global"
           title="Instalación global"
         >
           <Callout variant="important">
             La instalación global instrumentará todos los procesos .NET Core en su sistema. Elija la instalación global solo si desea monitorear todos los procesos de .NET Core.
           </Callout>

           Para una instalación sencilla sin opciones, utilice este comando:

           ```bash
           ./installAgent.ps1 -destination PATH -installType global -licenseKey YOUR_LICENSE_KEY \
           	[-appName "YOUR_APPLICATION_NAME" -logDir "PATH_TO_CUSTOM_LOG_LOCATION"]
           ```

           Para instalar con una o más opciones adicionales, use el mismo comando con las opciones deseadas. Para obtener descripciones de las opciones, consulte la tabla a continuación.

           ```bash
           ./installAgent.ps1 -destination PATH -installType local -licenseKey YOUR_LICENSE_KEY \
           	[-appName "YOUR_APPLICATION_NAME" -logDir "PATH_TO_CUSTOM_LOG_LOCATION" -X86 -ResetIIS -Force]
           ```
         </Collapser>
       </CollapserGroup>

       Si su aplicación recibe tráfico, los datos deberían aparecer en unos minutos. Si no es así, consulte [No aparecen datos](/docs/agents/net-agent/troubleshooting/no-data-appears-net).

       <table>
         <thead>
           <tr>
             <th width={150}>
               Opciones de instalación
             </th>

             <th>
               Descripción
             </th>
           </tr>
         </thead>

         <tbody>
           <tr>
             <td>
               `Destination`
             </td>

             <td>
               <DNT>**Required**</DNT>. La ubicación donde está instalado el agente. Esta puede ser una ruta absoluta o relativa. Se requieren cotizaciones de envoltura.
             </td>
           </tr>

           <tr>
             <td>
               `InstallType`
             </td>

             <td>
               <DNT>**Required**</DNT>. Determina si se trata de una instalación local (específica de la aplicación) o global (para todo el sistema).
             </td>
           </tr>

           <tr>
             <td>
               `LicenseKey`
             </td>

             <td>
               <DNT>**Required**</DNT>. Tu <InlinePopover type="licenseKey"/>.
             </td>
           </tr>

           <tr>
             <td>
               `AppName`
             </td>

             <td>
               Opcional. Establece el [nombre de la aplicación](/docs/agents/net-agent/installation-and-configuration/naming-your-net-application) predeterminada asociada con la instalación de su agente.
             </td>
           </tr>

           <tr>
             <td>
               `LogDir`
             </td>

             <td>
               Opcional. Establece una ubicación de registro personalizada para el agente. De forma predeterminada, el agente coloca el directorio de registro en el directorio de instalación.
             </td>
           </tr>

           <tr>
             <td>
               `X86`
             </td>

             <td>
               Opcional. Instala la versión de 32 bits del agente en lugar de la versión de 64 bits. New Relic <DNT>**does not recommend**</DNT> instala la versión de 32 bits del agente a nivel global.
             </td>
           </tr>

           <tr>
             <td>
               `ResetIIS`
             </td>

             <td>
               Opcional. Realiza un `iisreset` después de la instalación.

               <Callout variant="important">
                 Utilice esto únicamente si su aplicación .NET Core está alojada a través de un proxy inverso de IIS.
               </Callout>
             </td>
           </tr>

           <tr>
             <td>
               `Force`
             </td>

             <td>
               Opcional. Fuerza el proceso de instalación a sobrescribir una instalación anterior o a instalar en una carpeta existente.

               <Callout variant="caution">
                 Esto sobrescribe cualquier personalización de configuración. New Relic recomienda hacer una copia de seguridad de su archivo de configuración y de cualquier archivo personalizado de instrumentación antes de forzar una sobreinstalación.
               </Callout>
             </td>
           </tr>

           <tr>
             <td>
               `Help`
             </td>

             <td>
               Opcional. Muestra información de uso para este script.
             </td>
           </tr>
         </tbody>
       </table>
  </Collapser>
</CollapserGroup>
