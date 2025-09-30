---
title: 'Resolución de problemas de Azure Web Apps: Conflicto de información valiosa de aplicaciones'
tags:
  - Agents
  - NET agent
  - Azure troubleshooting
metaDescription: What to do if no data appears and Microsoft's Application Insights profiler is preventing the New Relic .NET profiler from instrumenting your app.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Se instaló el agente .NET y se configuraron los <DNT>**App Settings**</DNT> requeridos, pero no aparece ningún dato y no se crean New Relic Logs en `D:\Home\Logfiles\NewRelic\`. Además, cuando usa el <DNT>**Process Explorer**</DNT> de la consola de Azure Kudu para inspeccionar <DNT>**Environment Variables**</DNT> de su aplicación, muestra que `COR_PROFILER_PATH_64` y `COR_PROFILER_PATH_32` están configurados y apuntan a lo siguiente:

```
D:\Program Files (x86)\SiteExtensions\InstrumentationEngine\1.0.19\Instrumentation64\MicrosoftInstrumentationEngine_x64.dll
```

## Solución

.NET Common Language Runtime (CLR) solo permite un generador de perfiles. Si el generador de perfiles de aplicación información valiosa de Microsoft está instalado en el sistema, el generador de perfiles New Relic no afectará a ninguna aplicación y no aparecerá ningún dato. Para obtener más información, consulte la [documentación de Microsoft Azure Web Apps](https://docs.microsoft.com/en-us/azure/azure-monitor/app/azure-web-apps).

Para resolver este problema, elimine o desactive la aplicación información valiosa de su aplicación.

A <DNT>**remove**</DNT> la extensión del sitio de información valiosa de la aplicación:

1. Elimine todas las configuraciones relacionadas con la aplicación información valiosa de

   <DNT>
     **Application > Settings > Application Settings**
   </DNT>

   y

   <DNT>
     **Save**
   </DNT>

   . Esto puede incluir las siguientes claves:

   * Cualquier clave que comience con `APPINSIGHTS_`
   * Cualquier clave que comience con `APPLICATIONINSIGHTS_`
   * Cualquier clave que comience con `XDT_MicrosoftApplicationInsights_`
   * `DiagnosticServices_EXTENSION_VERSION`
   * `InstrumentationEngine_EXTENSION_VERSION`

2. Elimine la extensión de

   <DNT>
     **Application > Tools > Extensions**
   </DNT>

   . Haga clic derecho en la extensión y

   <DNT>
     **Delete**
   </DNT>

   .

3. Elimina el

   <DNT>
     **Tile Add-On**
   </DNT>

   de tu

   <DNT>
     **Application Panel**
   </DNT>

   (si está presente).

4. Reinicie su aplicación.

Para <DNT>**disable**</DNT> aplicación información valiosa a través del Portal de Azure: vaya al panel de aplicación información valiosa debajo de <DNT>**Settings**</DNT>. Esto puede reiniciar su aplicación.
