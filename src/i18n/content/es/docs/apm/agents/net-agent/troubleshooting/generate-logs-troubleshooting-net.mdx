---
title: Generar log para resolución de problemas (.NET)
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'Generating New Relic for .NET log files, changing your log file settings, and collecting Microsoft System Information files.'
freshnessValidatedDate: never
translationType: machine
---

El agente .NET de New Relic almacena de forma predeterminada dos tipos de archivos de registro en el directorio `Logs` en `%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs` para Windows y en `/usr/local/newrelic-dotnet-agent/logs` para Linux. Si está utilizando una instalación de paquete NuGet, se ubicará en la carpeta `newrelic` dentro del directorio raíz de su aplicación. Ambos son necesarios para la resolución de problemas; por ejemplo, si [no aparecen datos](/docs/agents/net-agent/troubleshooting/no-data-appears-net) en la UI de New Relic para su aplicación. Si falta alguno de los tipos log , algún componente del agente .NET no se inició.

* Registro del agente: estos nombres de archivos comienzan con `newrelic_agent_`.
* Registro del generador de perfiles: estos nombres de archivos comienzan con `NewRelic.Profiler`.

## Generar archivo de registro en Windows [#logs-windows]

<Callout variant="important">
  Cuando resuelva los problemas de su agente New Relic .NET, asegúrese de que esté configurado para generar un archivo de registro de nivel `debug` y monitor de cerca el tamaño de su archivo de registro. Iniciar sesión en `debug` genera una gran cantidad de datos muy rápidamente. Después de reproducir su problema, regrese el nivel de registros a `info`.
</Callout>

Si su `C:\ProgramData\New Relic\.NET Agent` está en una carpeta oculta, actualice la configuración de Windows para poder verlo. Para generar un archivo de registro New Relic para .NET:

1. Abra `newrelic.config`, generalmente ubicado en `C:\ProgramData\New Relic\.NET Agent` (o `%ALLUSERSPROFILE%\New Relic\.NET Agent`).
2. Cambie la configuración `<log level="info" />` a `<log level="debug" />`.
3. Guarde y cierre el archivo, luego espere unos minutos hasta que el agente lea la nueva configuración.
4. Genera unos minutos de tráfico a tu aplicación.
5. Si envía su archivo de registro al soporte de New Relic: en su ticket de soporte de New Relic, adjunte el archivo `newrelic.config` (no el texto del archivo) y adjunte toda la carpeta `Logs` de `C:\ProgramData\New Relic\.NET Agent\Logs` o de `%ALLUSERSPROFILE%\New Relic\.NET Agent\Logs`.
6. En `newrelic.config`, cambie `<log level="debug" />` por `<log level="info" />`.

## Generar archivo de registro en Linux [#logs-linux]

<Callout variant="important">
  Cuando resuelva los problemas de su agente New Relic .NET, asegúrese de que esté configurado para generar un archivo de registro de nivel `debug` y monitor de cerca el tamaño de su archivo de registro. Iniciar sesión en `debug` genera una gran cantidad de datos muy rápidamente. Después de reproducir su problema, regrese el nivel de registros a `info`.
</Callout>

1. Abierto `newrelic.config`, generalmente ubicado en `/usr/local/newrelic-dotnet-agent`
2. Cambie la configuración `<log level="info" />` a `<log level="debug" />`.
3. Guarde y cierre el archivo, luego espere unos minutos hasta que el agente lea la nueva configuración.
4. Genera unos minutos de tráfico a tu aplicación.
5. Si envía su archivo de registro al soporte de New Relic: en su ticket de soporte de New Relic, adjunte el archivo `newrelic.config` (no el texto del archivo) y adjunte toda la carpeta `Logs` de `/usr/local/newrelic-dotnet-agent/logs`.
6. En `newrelic.config`, cambie `<log level="debug" />` por `<log level="info" />`.

## Generar archivo de registro de aplicación web de Azure [#azure_logs]

Kudu Console administra los informes log de la aplicación web Microsoft Azure. Para usar la consola Kudu, primero log en Azure.

1. Navegue hasta la URL de su aplicación web de Azure; Por ejemplo:

   ```
   https://example.azurewebsites.net
   ```

2. Inserte el fragmento de URL `scm`de la consola Kudu en la URL; Por ejemplo:

   ```
   https://example.scm.azurewebsites.net
   ```

3. Busque el logotipo de Kudu con una barra de navegación negra en la parte superior izquierda de la página y su nombre de usuario de Azure en la parte superior derecha de la página.

Luego, para cambiar el nivel de registros dentro de la Consola Kudu:

1. En la barra de navegación de la consola Kudu, seleccione el menú

   <DNT>
     **Debug console**
   </DNT>

   y luego seleccione

   <DNT>
     **CMD**
   </DNT>

   o

   <DNT>
     **PowerShell**
   </DNT>

   .

2. Navegue hasta `D:\home\site\wwwroot\newrelic`.

3. Para editar `newrelic.config`, seleccione el lápiz

   <Icon name="fe-edit-2"/>

   icono.

4. Cambie `<log level="info">` a `<log level="debug">`

5. Guarde el cambio en `newrelic.config`.

6. Espere unos minutos hasta que se genere el registro de depuración.

7. Utilice los mismos pasos para cambiar el `log level` nuevamente a `info`.

## Recopilar información del sistema [#msinfo]

Además del registro del agente, un archivo de información del sistema de Microsoft también es útil para la resolución de problemas:

1. En la barra de tareas de Windows, seleccione

   <DNT>
     **Start > Run**
   </DNT>

   e ingrese `msinfo32`. Seleccione

   <DNT>
     **OK**
   </DNT>

   .

2. Después de que se cargue la página de información del sistema, seleccione

   <DNT>
     **File > Save**
   </DNT>

   .

3. Espere unos minutos hasta que el servidor guarde el archivo.

4. Adjunte el archivo a su [ticket de soporte de New Relic](/docs/accounts-partnerships/education/getting-started-new-relic/find-help-or-file-support-ticket).

## Comprobar permisos [#permissions]

A veces, el agente .NET se inicia pero no puede escribir en su registro porque no tiene los [permisos necesarios para crear el directorio de log y el archivo de registro](/docs/agents/net-agent/troubleshooting/no-data-registry-key-permission-issues). La administración de permisos varía según el entorno, por lo que deberá trabajar con el administrador del sistema para verificar que esto no sea un problema.
