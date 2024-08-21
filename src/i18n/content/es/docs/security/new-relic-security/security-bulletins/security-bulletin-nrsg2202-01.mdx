---
title: Actualice el agente .NET si emplea Microsoft Extensions Logging con reenvío de log
tags:
  - Security
  - Security and Privacy
  - Security bulletin
metaDescription: New Relic advises updating .NET agent for customers employing Microsoft Extensions Logging with log forwarding enabled
releaseDate: '2022-12-03'
translationType: machine
---

## Resumen [#summary]

New Relic recomienda que los clientes que implementen el agente .NET en una configuración que emplea Microsoft Extensions Logging (MEL) actualicen a la versión 10.1.0 o posterior para solucionar un [problema](/docs/release-notes/agent-release-notes/net-release-notes/net-agent-10-1-0/) por el cual el agente New Relic .NET (v9.7.0 a 10.0.0) reenviaría cualquier nivel de registro MEL, independientemente de la configuración.

Esta guía se aplica a los usuarios de .NET agente versiones 9.7.0 a 10.0.0 que utilizan el framework de registro MEL. Los agentes .NET que utilizan el marco de registro Log4net, Serilog y NLog no se ven afectados.

## Software afectado [#affected-software]

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Versión del agente .NET
      </th>

      <th>
        Marco de framework
      </th>

      <th>
        Condiciones requeridas
      </th>

      <th>
        Afectado/no afectado
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <DNT>
          **.NET agent 9.7.0 through 10.0.0**
        </DNT>
      </td>

      <td>
        <DNT>
          **Microsoft Extensions Logging (MEL)**
        </DNT>
      </td>

      <td>
        <DNT>
          **Log forwarding enabled and log level set**
        </DNT>
      </td>

      <td>
        <DNT>
          **Affected**
        </DNT>
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET todas las versiones
      </td>

      <td>
        Registro Log4Net, Serilog o NLog
      </td>

      <td/>

      <td>
        No afectado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET 9.7.0
      </td>

      <td>
        Registro de extensiones de Microsoft (MEL)
      </td>

      <td>
        Configuración predeterminada (reenvío de registros no habilitado)
      </td>

      <td>
        No afectado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET 9.8.0 a 10.0.0
      </td>

      <td>
        Registro de extensiones de Microsoft (MEL)
      </td>

      <td>
        Reenvío de registros deshabilitado
      </td>

      <td>
        No afectado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET 9.7.0 a 10.0.0
      </td>

      <td>
        Registro de extensiones de Microsoft (MEL)
      </td>

      <td>
        Configurado para reenviar todos los niveles de registro de extensiones de Microsoft
      </td>

      <td>
        No afectado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET anterior a 9.7.0
      </td>

      <td>
        n/a
      </td>

      <td/>

      <td>
        No afectado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET 10.1.0 y después
      </td>

      <td>
        Registro de extensiones de Microsoft (MEL)
      </td>

      <td/>

      <td>
        No afectado
      </td>
    </tr>

    <tr>
      <td>
        Agente .NET todas las versiones
      </td>

      <td>
        n/a
      </td>

      <td>
        Desplegar en Linux
      </td>

      <td>
        No afectado
      </td>
    </tr>
  </tbody>
</table>

### Fijado en:

* Agente New Relic .Net versiones 10.1.0 y después

### Acción sugerida: [#recommended]

* Los clientes que utilizan Microsoft Extension Logging deben [actualizar a la versión 10.1.0 o posterior](/docs/apm/agents/net-agent/installation/update-net-agent/)
* <DNT>**Technical Links**</DNT>: [Actualización del agente .NET](/docs/apm/agents/net-agent/installation/update-net-agent/)
* <DNT>**Workarounds**</DNT>: Clientes afectados que no pueden actualizar su agente .NET a 10.1.0 o más tarde en este momento puede [desactivar el reenvío de registros](/docs/logs/logs-context/disable-automatic-logging/).

## Detalles técnicos: [#technical-details]

Versión 10.1.0 Corrige un error en la sincronización del punto de instrumentación para que el registro de extensiones de Microsoft envíe correctamente los datos MEL después de que se produce el filtrado de nivel de registros integrado.

## Detalles de la línea de tiempo [#timeline]

Este problema se introdujo cuando New Relic agregó soporte para la característica de reenvío de registros con framework Microsoft Extensions Logging (MEL) en la aplicación .NET Core en .NET agente v 9.7.0 (4 de abril de 2022) y en la aplicación .NET framework en v 10.0.0 (19 de julio de 2022). En la versión 9.7.0, la característica de reenvío de registros estaba deshabilitada de forma predeterminada, por lo que los clientes que usan la versión 9.7.0.0 solo pueden verse afectados por este problema si han configurado manualmente el reenvío de registros.

En la versión 9.8.0 (5 de mayo de 2022), la característica de reenvío de registros estaba habilitada de forma predeterminada.

El problema se solucionó con el lanzamiento de la versión 10.1.0 del agente .NET. lanzado el 12 de septiembre de 2022.

## Preguntas frecuentes [#faq]

1. ¿Qué es un documento de guía de seguridad? New Relic ha emitido este documento de Guía de seguridad para notificar a los clientes sobre la necesidad de actualizar su software para abordar un error de software que, si bien no puede ser explotado por un tercero para obtener acceso a los datos de los clientes, aún tiene recomendaciones de seguridad o privacidad procesables para los clientes. .
2. ¿Es posible que un tercero aproveche este problema para acceder a los datos log que se reenvían a New Relic? No, la emisión no permite la exposición de datos a un tercero. Utilizamos un conjunto integral de controles técnicos para respaldar la seguridad de los datos que recibimos. Para más información, consulta nuestra documentación sobre [seguridad de los datos](/docs/security/security-privacy/data-privacy/security-controls-privacy/) y [cifrado de datos](/docs/security/security-privacy/compliance/data-encryption/).
3. Una vez que despliegue la versión 10.1.0 del agente .NET New Relic , ¿tengo que hacer algo más? No, no se requieren más cambios de configuración después de la actualización. Le recomendamos que verifique las configuraciones establecidas para asegurarse de que coincidan con la configuración deseada.
4. Estoy usando el agente .NET pero no uso el registro de extensiones de Microsoft para el reenvío de registros. ¿Estoy impactado? No, este problema solo afecta a las aplicaciones .NET que utilizan MEL para su registro. El registro MEL se introdujo en la versión 9.7.0 para la aplicación .NET Core y 10.0.0 para la aplicación .NET framework .
5. Estoy usando el agente .NET pero he desactivado la característica de reenvío de registros. ¿Estoy impactado? No, este problema solo afecta la aplicación .NET que utiliza la característica de reenvío de registros y el framework MEL.
