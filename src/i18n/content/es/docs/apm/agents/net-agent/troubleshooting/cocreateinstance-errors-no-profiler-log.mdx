---
title: 'Errores de CoCreateInstance: No hay logde generador de perfiles'
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If your New Relic .NET app is not reporting data, follow these troubleshooting steps to check for CoCreateInstance errors related to permissions.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Después de generar tráfico y esperar unos minutos, su aplicación .NET no informa datos a New Relic. Además, no hay ningún log del generador de perfiles New Relic para su aplicación .NET.

<Callout variant="important">
  Si tiene errores de usuario `CoCreateInstance` en sitios web de Azure, obtenga asistencia en [support.newrelic.com](https://support.newrelic.com).
</Callout>

## Solución

Para verificar si New Relic tiene los permisos necesarios y resolver el problema, siga estos pasos de resolución de problemas.

<CollapserGroup>
  <Collapser
    id="clsid-errors"
    title="Compruebe si hay errores CLSID del generador de perfiles."
  >
    Para verificar si el error de permisos se debe a errores del generador de perfiles:

    1. Verifique log de eventos de su aplicación para detectar errores como este:

       ```
       NET Runtime version 4.0.30319.296 - Loading profiler failed during CoCreateInstance. Profiler CLSID: '{71DA0A04-7777-4EC6-9643-7D28B46A8A41}'
       ```

    2. Compare el CLSID en el error con los CLSID de New Relic:

       ```
       {71DA0A04-7777-4EC6-9643-7D28B46A8A41} (agent for .NET Framework)
       {36032161-FFC0-4B61-B559-F6C5D41BAE5A} (agent for .NET Core)
       ```

    3. Haz una de las siguientes:

       * Si el CLSID no coincide, [desinstale el otro generador de perfiles](/docs/agents/net-agent/troubleshooting/cocreate-errors-no-event-log).
       * Si el CLSID coincide, continúe con este procedimiento para comprobar si hay `CoCreateInstance` errores de permisos en el registro del perfilador.
  </Collapser>

  <Collapser
    id="mscorlib"
    title="Verifique los ensamblajes de New Relic."
  >
    Para verificar que los ensamblajes de New Relic estén adjuntos al proceso `w3wp.exe` :

    1. En el servidor donde está instalada su aplicación, [descargue Microsoft Windows <DNT>**Sysinternals Process Explorer**</DNT>](https://technet.microsoft.com/en-us/sysinternals/bb896653.aspx).

    2. Descomprima el archivo y ejecute `procexp.exe` como administrador.

    3. Seleccione <DNT>**View > Show Lower Pane**</DNT> y luego seleccione <DNT>**View > Lower Pane View > DLLs**</DNT>.

    4. Genera algo de tráfico a tu aplicación.

    5. Para actualizar la lista de procesos, seleccione <DNT>**View > Refresh Now**</DNT>.

    6. En el panel superior, seleccione su servicio o instancia `w3wp` (normalmente anidada en un proceso `svchost.exe` .

    7. En el panel inferior, busque ensamblados cuyos nombres comiencen con `NewRelic`, incluidos:

       ```
       NewRelic.Agent.Core.dll
       NewRelic.Profiler.dll
       NewRelic.Agent.IL.dll
       NewRelic.ICSharpCode.SharpZipLib.dll
       NewRelic.Json.dll
       NewRelic.Log.dll
       ```

    8. Si no encuentra ningún ensamblaje, obtenga soporte en [support.newrelic.com](https://support.newrelic.com)
  </Collapser>

  <Collapser
    id="w3wp"
    title="Verifique los detalles del entorno w3wp.exe."
  >
    Verifique que los detalles del entorno `w3wp.exe` sean estos:

    ```ini
    COR_ENABLE_PROFILING=1
    COR_PROFILER={71DA0A04-7777-4EC6-9643-7D28B46A8A41}
    NEWRELIC_INSTALL_PATH=C:\Program Files\New Relic\.NET Agent\
    ```
  </Collapser>

  <Collapser
    id="allusersprofile"
    title="Verifique el registro del generador de perfiles."
  >
    Verifique el inicio de sesión del generador de perfiles `%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs`.

    * Asegúrese de que haya

      <DNT>
        **no**
      </DNT>

      registro del generador de perfiles para la aplicación web en la que está resolviendo problemas.

    * Si tiene una instalación de sitio simple o predeterminada, ignore cualquier registro del generador de perfiles para otras aplicaciones web.
  </Collapser>

  <Collapser
    id="everyone-group"
    title="Resuelva el error de permisos."
  >
    Si todas las condiciones anteriores están presentes, tiene un error de permisos. Utilice cualquiera de estas opciones para resolver el error de permisos según corresponda:

    <table>
      <thead>
        <tr>
          <th>
            <DNT>
              **Available options**
            </DNT>
          </th>

          <th>
            <DNT>
              **Resolve permissions errors**
            </DNT>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            Establezca permisos para el grupo <DNT>**Everyone**</DNT> .
          </td>

          <td>
            Ajuste los permisos en las siguientes carpetas para el grupo <DNT>**Everyone**</DNT> para otorgarle todos los permisos <DNT>**except**</DNT> `Full Control`:

            ```
            C:\Program Files\New Relic\.NET Agent\
            ```

            ```
            C:\Program Files (x86)\New Relic\.NET Agent\
            ```
          </td>
        </tr>

        <tr>
          <td>
            Establecer permisos para usuarios individuales.
          </td>

          <td>
            Si sus políticas de seguridad no permiten ajustar los permisos para el grupo <DNT>**Everyone**</DNT> , ajuste los permisos para el usuario individual. Registre el usuario bajo el cual se ejecuta su aplicación, luego ajuste los permisos para cada uno de esos usuarios.
          </td>
        </tr>

        <tr>
          <td>
            Establezca permisos mediante el script de PowerShell.
          </td>

          <td>
            Para agregar permisos a `HKLM\SOFTWARE\New Relic` mediante el script de PowerShell:

            ```shell
            $key = "HKLM:\SOFTWARE\New Relic"
            $acl = Get-Acl $key
            $AddACL = New-Object System.Security.AccessControl.RegistryAccessRule ("Everyone","FullControl","ObjectInherit,ContainerInherit","None","Allow")
            $acl.SetAccessRule($AddACL)
            $acl |Set-Acl -Path $key
            ```

            Para aplicaciones de 32 bits, la ruta sería `HKLM:\SOFTWARE\Wow6432Node\New Relic`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>
