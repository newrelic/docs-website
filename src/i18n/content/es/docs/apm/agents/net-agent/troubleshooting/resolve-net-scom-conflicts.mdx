---
title: Resolver conflictos .NET y SCOM
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: 'If you are running SCOM and New Relic''s .NET agent, enable SCOM APM and repair the installation to resolve conflicts.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

El agente .NET de New Relic informa correctamente y luego se detiene después de un breve período de tiempo o de un evento de mantenimiento, como un reinicio de IIS o un reinicio del sistema. Si se producen estos síntomas y está utilizando System Center Operations Manager (SCOM) de Microsoft, está experimentando un conflicto de generador de perfiles SCOM.

## Solución

<Callout variant="important">
  No mantenga la parte de monitoreo del rendimiento de aplicaciones (APM) (`APM`) de SCOM instalada pero deshabilitada. Esto no es suficiente para evitar interferencias. Debes marcarlo para que **no** esté instalado.
</Callout>

Para resolver conflictos de SCOM generador de perfiles:

1. Elimine el generador de perfiles SCOM: desinstale SCOM o vuelva a instalar SCOM y deshabilite la parte `APM` en el asistente de instalación.

2. Para resolver el conflicto de SCOM, restaure la configuración del registro usando PowerShell:

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

3. Ejecute estos comandos <DNT>**each**</DNT> cada vez que reinicie su servidor o cree una script de inicio para restaurar esta configuración.

4. Recicle su grupo de aplicaciones o, desde un símbolo del sistema, ejecute <DNT>**`IISRESET`**</DNT>.

Para obtener más detalles sobre la configuración de las variables de entorno anteriores en el registro, consulte [Comprender las variables de entorno del agente .NET](/docs/apm/agents/net-agent/other-installation/understanding-net-agent-environment-variables/).

<Callout variant="important">
  Debe reparar su instalación cada vez que reinicie su servidor.
</Callout>

## Causa

System Center Operations Manager (SCOM) de Microsoft incluye una característica de monitoreo del rendimiento de aplicaciones (APM) (`APM`) que entra en conflicto con el agente .NET de New Relic. Ambos emplean la interfaz .NET Profiler y sólo se puede utilizar un generador de perfiles a la vez.

Si tiene SCOM y el agente .NET New Relic instalados en el mismo servidor Windows, deshabilitar o desactivar `APM` en SCOM eliminará algunas configuraciones del registro de Windows que son necesarias para que funcione el agente .NET. El agente .NET no podrá monitor la aplicación web en ese servidor.
