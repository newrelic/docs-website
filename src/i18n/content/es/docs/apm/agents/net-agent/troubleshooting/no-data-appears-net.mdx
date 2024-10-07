---
title: No aparecen datos (.NET)
type: troubleshooting
tags:
  - Agents
  - NET agent
  - Troubleshooting
metaDescription: Troubleshooting steps if data does not appear in your app after you installed the New Relic .NET agent.
freshnessValidatedDate: never
translationType: machine
---

## Problema

Después de generar tráfico para su aplicación y esperar cinco minutos, ninguno de los datos de su agente .NET aparece en la UI de New Relic.

## Solución

La ausencia de datos puede deberse a varios motivos.

* <DNT>
    **Common causes**
  </DNT>

  para datos faltantes: consulte las [soluciones básicas de resolución de problemas](#basic-solutions).

* <DNT>
    **Other situations:**
  </DNT>

  Si las soluciones básicas no resuelven el problema, la falta de datos puede ser más intrínseca a su sistema. Para obtener más información, consulte las [soluciones avanzadas de resolución de problemas](#advanced-solutions).

* <DNT>
    **Microsoft Azure users:**
  </DNT>

  Consulte las [soluciones de resolución de problemas de Azure](/docs/agents/net-agent/azure-troubleshooting).

* <DNT>
    **No browser data appears:**
  </DNT>

  Consulte los [consejos de resolución de problemas al utilizar el agente del navegador](/docs/agents/net-agent/troubleshooting/no-page-load-timing-data-appears-net).

### Soluciones básicas

Para solucionar los motivos más comunes por los que faltan datos, pruebe estas soluciones según corresponda.

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Basic solutions**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Verifique la compatibilidad de la aplicación y framework con el agente
      </td>

      <td>
        [Compatibilidad y requisitos de .NET framework](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent)

        o

        [Compatibilidad y requisitos de .NET Core](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-20-agent)
      </td>
    </tr>

    <tr>
      <td>
        Obtenga más información sobre problemas de instalación comunes
      </td>

      <td>
        Ver [resolución de problemas para .NET Core y Linux](/docs/apm/agents/net-agent/troubleshooting/debugging-net-core-agent-linux) o [resolución de problemas para Windows](/docs/apm/agents/net-agent/troubleshooting/debugging-net-windows)
      </td>
    </tr>

    <tr>
      <td>
        Configurar para procesos .NET de corta duración
      </td>

      <td>
        Si tiene un proceso de corta duración (menos de 60 segundos), es posible que no proporcione datos. Para obtener más información, consulte [Supervisar procesos de corta duración](/docs/agents/net-agent/troubleshooting/monitor-short-lived-net-processes).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**.NET Core:**</DNT> Consulta los requisitos de Kestrel.
      </td>

      <td>
        Asegúrese de estar utilizando una [aplicación/servidor web Kestrel](/docs/agents/net-agent/getting-started/compatibility-requirements-net-core-20-agent#app-web-servers) compatible con New Relic. De lo contrario, es posible que deba asegurarse de que su agente .NET tenga habilitada [la compatibilidad con .NET Framework](/docs/agents/net-agent/getting-started/compatibility-requirements-net-framework-agent#app-web-servers) .
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**.NET Core:**</DNT> Verifique las variables de entorno.
      </td>

      <td>
        Asegúrese de haber configurado todas las [variables de entorno requeridas](/docs/agents/net-agent/configuration/net-agent-configuration/#environment-variables) y luego reinicie el agente.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**.NET Framework:**</DNT> Reinicie IIS.
      </td>

      <td>
        Si su aplicación no recibe tráfico, no se informarán datos a New Relic. Para reiniciar IIS:

        1. Desde una línea de comando, ejecute `IISRESET`.
        2. Verifique que se esté enviando tráfico a su aplicación.
      </td>
    </tr>

    <tr>
      <td>
        Ejecute diagnósticos New Relic .
      </td>

      <td>
        Para intentar identificar automáticamente el problema, utilice [New Relic Diagnostics](/docs/agents/manage-apm-agents/troubleshooting/new-relic-diagnostics).
      </td>
    </tr>

    <tr>
      <td>
        Verifique si [hay conflictos con el generador de perfiles](/docs/agents/net-agent/troubleshooting/profiler-conflicts).
      </td>

      <td>
        Si está utilizando System Center Operations Manager (SCOM) de Microsoft, siga los procedimientos de resolución de problemas para [resolver conflictos .NET y SCOM](/docs/dotnet/dotnet-kb-104).
      </td>
    </tr>

    <tr>
      <td>
        Revisar archivo de registro.
      </td>

      <td>
        Si existen [archivos de registro](/docs/agents/net-agent/troubleshooting/generate-logs-troubleshooting-net) , ábralos y revíselos en busca de errores.
      </td>
    </tr>
  </tbody>
</table>

### Soluciones avanzadas

Para solucionar problemas más complejos cuando no aparecen datos, pruebe estas soluciones según corresponda:

<table>
  <thead>
    <tr>
      <th>
        <DNT>
          **Advanced solutions**
        </DNT>
      </th>

      <th>
        <DNT>
          **Comments**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>**.NET Framework:**</DNT> Verifique los permisos del Registro.
      </td>

      <td>
        Compruebe si hay un [error de permisos de clave de registro](/docs/agents/net-agent/troubleshooting/no-data-registry-key-permission-issues).
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**.NET Framework:**</DNT> Ejecute el Visor de eventos de Windows.
      </td>

      <td>
        Si es aplicable:

        1. Ejecute el Visor de eventos de Windows y busque el evento de aplicación desde el generador de perfiles New Relic .NET.

        2. Busca mensajes cuya fuente sea el generador de perfiles New Relic .NET o el agente New Relic .NET.

        3. Si no hay mensajes del evento New Relic, busque mensajes del tiempo de ejecución de .NET.

           Para obtener más información, consulte [Sin datos ni log de eventos: errores de CoCreate](/docs/dotnet/dotnet-kb-102).
      </td>
    </tr>

    <tr>
      <td>
        Obtener registro de depuración.
      </td>

      <td>
        Si su registro no mostró errores, aumente el nivel de registro temporalmente para [recopilar el registro `debug` ](/docs/agents/net-agent/troubleshooting/generating-logs-troubleshooting#logs).
      </td>
    </tr>

    <tr>
      <td>
        Verifique la configuración del proxy.
      </td>

      <td>
        Asegúrese de que [la configuración de su proxy](/docs/dotnet/dotnet-agent-configuration#service) sea correcta y de que su configuración incluya un atributo de host.
      </td>
    </tr>

    <tr>
      <td>
        <DNT>**.NET 8:**</DNT> Asegúrese de que los diagnósticos en tiempo de ejecución estén habilitados
      </td>

      <td>
        A partir de .NET 8, configurar la variable de entorno `DOTNET_EnableDiagnostics=0` (o `COMPlus_EnableDiagnostics=0`) deshabilitará la creación de perfiles CLR, lo que imposibilitará que el agente funcione. Esta configuración se recomienda comúnmente en escenarios de implementación de sistemas de archivos de solo lectura, pero solo para deshabilitar el puerto de diagnóstico. Consulte [la documentación de Microsoft](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-environment-variables#dotnet_enablediagnostics) sobre cómo deshabilitar subcomponentes específicos del sistema de diagnóstico mientras deja habilitada la creación de perfiles.
      </td>
    </tr>

    <tr>
      <td>
        Obtenga ayuda adicional.
      </td>

      <td>
        Si los datos aún no aparecen, obtenga soporte en [support.newrelic.com](https://support.newrelic.com).
      </td>
    </tr>
  </tbody>
</table>
