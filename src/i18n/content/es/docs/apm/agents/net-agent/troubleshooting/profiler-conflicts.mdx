---
title: Generador de perfiles conflictos
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: How to resolve New Relic .NET profiler conflicts by checking the New Relic CLSIDs and registry keys.
freshnessValidatedDate: never
translationType: machine
---

## Problema

[.NET Common Language Runtime (CLR)](https://msdn.microsoft.com/en-us/library/bb384689.aspx) solo permite que un generador de perfiles acceda a la API de creación de perfiles de un proceso en un momento dado. Si hay otro generador de perfiles instalado en el sistema, el generador de perfiles New Relic no afectará ninguna aplicación.

## Solución

Para evitar un conflicto con el generador de perfiles, elimine completamente el otro generador de perfiles del entorno y luego asegúrese de que se hayan restaurado las claves de registro de IIS o las variables de entorno del sistema.

<DNT>**Exception:**</DNT> Para conflictos con System Center Operations Manager (SCOM) de Microsoft, siga los [procedimientos de resolución de problemas específicos para SCOM](/docs/agents/net-agent/troubleshooting/resolve-net-scom-conflicts).

<CollapserGroup>
  <Collapser
    id="check-conflicts"
    title="1. Verifique si hay conflictos con el generador de perfiles."
  >
    Para ver si hay algún conflicto con el generador de perfiles:

    1. Ejecute <DNT>**Process Explorer**</DNT> como administrador.

    2. Para encontrar el proceso de su aplicación, haga clic derecho en la aplicación y luego seleccione <DNT>**Properties > Environment**</DNT>.

    3. Verifique que el CLSID de New Relic y las variables de entorno estén incluidas en los detalles de entorno `w3wp.exe`, `service` o `non-IIS app` :

       ```ini
       COR_ENABLE_PROFILING=1
       COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
       NEWRELIC_INSTALL_PATH=path\to\agent\directory
       ```

       Nota: las variables de entorno anteriores y sus valores son válidos para el agente cuando se instala en Windows con .msi instalador. Para obtener más detalles sobre estas variables, así como valores correctos para otros escenarios de instalación, consulte [Comprender las variables de entorno del agente .NET](/docs/apm/agents/net-agent/other-installation/understanding-net-agent-environment-variables/).
  </Collapser>

  <Collapser
    id="compare-registry-keys"
    title="2. Compare las claves de registro con Process Explorer si es necesario."
  >
    Si el generador de perfiles en conflicto se ha deshabilitado y todavía hay un problema, compare las claves de registro con [<DNT>**Process Explorer**</DNT>](https://technet.microsoft.com/en-us/sysinternals/bb896653.aspx) para ver qué generador de perfiles está presente. En la máquina donde tiene este problema, verifique <DNT>**WAS**</DNT> y <DNT>**W3SVC REG**</DNT> para aplicaciones IIS, o verifique sus claves de servicio o claves de aplicaciones que no sean IIS.

    <table>
      <thead>
        <tr>
          <th>
            Para comprobar las claves de registro con esto...
          </th>

          <th>
            <DNT>
              **Do this...**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Potencia Shell
          </td>

          <td>
            Si utiliza Microsoft PowerShell, ejecute los siguientes comandos:

            ```sh
            (Get-Item -Path HKLM:\SYSTEM\CurrentControlSet\services\WAS).GetValue("Environment")
            (Get-Item -Path HKLM:\SYSTEM\CurrentControlSet\services\W3SVC).GetValue("Environment")
            ```
          </td>
        </tr>

        <tr>
          <td>
            Línea de comando
          </td>

          <td>
            Si usa <DNT>**cmd**</DNT>, haga lo siguiente para <DNT>**WAS**</DNT> y <DNT>**W3SVC REG**</DNT> o para su servicio/aplicación que no sea IIS. A continuación se muestra un ejemplo de una aplicación IIS:

            1. En la línea de comando, ingrese `regedit`.

            2. Desde

               <DNT>
                 **Registry Editor**
               </DNT>

               , seleccione

               <DNT>
                 **HKEY_LOCAL_MACHINE > SYSTEM > CurrentControlSet > Services**
               </DNT>

               .

            3. Si corresponde, seleccione la carpeta

               <DNT>
                 **WAS**
               </DNT>

               . En la lista de claves de registro de la carpeta

               <DNT>
                 **WAS**
               </DNT>

               , haga doble clic en

               <DNT>
                 **Environment**
               </DNT>

               y verifique que [el CLSID y las variables de entorno de New Relic](#clsid) aparezcan en el cuadro de texto.

            4. Si corresponde, seleccione la carpeta

               <DNT>
                 **W3SVC**
               </DNT>

               . En la lista de claves de registro de la carpeta

               <DNT>
                 **W3SVC**
               </DNT>

               , haga doble clic en

               <DNT>
                 **Environment**
               </DNT>

               y verifique que [el CLSID y las variables de entorno de New Relic](#clsid) aparezcan en el cuadro de texto.
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>

  <Collapser
    id="restore-registry-keys"
    title="3. Restaure las claves de registro o las variables de entorno de New Relic."
  >
    Una vez que se haya desactivado el generador de perfiles en conflicto, es posible que aún necesite restaurar las claves de registro de New Relic o, si usa Instrument All, las [variables de entorno de todo el sistema](/docs/agents/net-agent/troubleshooting/profiler-conflicts#check-conflicts).

    Para resolver el conflicto del generador de perfiles para la aplicación IIS, vuelva a ejecutar el instalador y use la característica `Repair` , o restaure la configuración del registro manualmente usando PowerShell:

    ```powershell
    $HKLM = 2147483650 #HKEY_LOCAL_MACHINE
    $reg = [wmiclass]"\\.\root\default:StdRegprov"
    $key = "SYSTEM\CurrentControlSet\Services\W3SVC"
    $name = "Environment"
    $value = "COR_ENABLE_PROFILING=1","COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}","NEWRELIC_INSTALL_PATH=C:\Program Files\New Relic\.NET Agent\","CORECLR_ENABLE_PROFILING=1","CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}","CORECLR_NEWRELIC_HOME=C:\ProgramData\New Relic\.NET Agent\"
    $reg.SetMultiStringValue($HKLM, $key, $name, $value)
    $key = "SYSTEM\CurrentControlSet\Services\WAS"
    $name = "Environment"
    $value = "COR_ENABLE_PROFILING=1","COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}","NEWRELIC_INSTALL_PATH=C:\Program Files\New Relic\.NET Agent\","CORECLR_ENABLE_PROFILING=1","CORECLR_PROFILER={36032161-FFC0-4B61-B559-F6C5D41BAE5A}","CORECLR_NEWRELIC_HOME=C:\ProgramData\New Relic\.NET Agent\"
    $reg.SetMultiStringValue($HKLM, $key, $name, $value)
    iisreset
    ```

    Para aplicaciones que no sean IIS y servicios de Windows, vuelva a ejecutar el instalador y use la característica `Repair` o edite manualmente las variables de entorno de todo el sistema. Para algunos servicios de Windows, es necesario reiniciar para seleccionar las nuevas variables.

    Nota: las variables de entorno anteriores y sus valores son válidos para el agente cuando se instala en Windows con .msi instalador. Para obtener más detalles sobre estas variables, así como valores correctos para otros escenarios de instalación, consulte [Comprender las variables de entorno del agente .NET](/docs/apm/agents/net-agent/other-installation/understanding-net-agent-environment-variables/).
  </Collapser>
</CollapserGroup>

## Causa

A continuación se muestran algunos conflictos de generadores de perfiles comúnmente reportados. Esta no es una lista exhaustiva de generadores de perfiles .NET, ya que cualquier programa que utilice la API de perfiles .NET puede causar conflictos con el generador de perfiles .NET de New Relic.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Nombre del generador de perfiles
      </th>

      <th>
        Generador de perfiles identificador
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        APM información valiosa
      </td>

      <td>
        `989D151B-3F31-482E-926F-2E95D274BD36`
      </td>
    </tr>

    <tr>
      <td>
        Dinámica de la aplicación
      </td>

      <td>
        `AppDynamics.AgentProfiler`
      </td>
    </tr>

    <tr>
      <td>
        Dynatrace
      </td>

      <td>
        `DA7CFC47-3E35-4c-4e-B495-534F93B28683`

        `B7038F67-52FC-4DA2-AB02-969B3C1EDA03`
      </td>
    </tr>

    <tr>
      <td>
        Servicio de Política de Diagnóstico
      </td>

      <td>
        `555908D1-A6D7-4695-8E1E-26931D2012F4`
      </td>
    </tr>

    <tr>
      <td>
        Observabilidad de IBM Instana
      </td>

      <td>
        `FA8F1DFF-0B62-4F84-887F-ECAC69A65DD3`
      </td>
    </tr>

    <tr>
      <td>
        IntelliTrace
      </td>

      <td>
        `2AA1AA98-2CAA-4FCF-86CE-EFA007737E83`
      </td>
    </tr>

    <tr>
      <td>
        Información valiosa de la aplicación Microsoft
      </td>

      <td>
        `324F817A-7420-4E6D-B3C1-143FBED6D855`

        `COR_PROFILER_PATH`

        ```
        D:\home\SiteExtensions\Microsoft.ApplicationInsights.AzureWebSites\Agent\MicrosoftInstrumentationEngine.dll
        ```
      </td>
    </tr>

    <tr>
      <td>
        [SCOM APM](/docs/agents/net-agent/troubleshooting/resolve-net-scom-conflicts)
      </td>

      <td>
        `AD5651A8-B5C8-46ca-A11B-E82AEC2B8E78`
      </td>
    </tr>

    <tr>
      <td>
        JetBrains dotCubierta
      </td>

      <td>
        `9AA5D52F-37E2-487D-AAEC-727478B8BDB5`
      </td>
    </tr>
  </tbody>
</table>
