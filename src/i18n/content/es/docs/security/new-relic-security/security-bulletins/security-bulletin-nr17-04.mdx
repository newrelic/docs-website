---
title: Boletín de Seguridad NR17-04
tags:
  - Security
  - Security and Privacy
  - Security bulletins
metaDescription: Security vulnerability update for New Relic Node.js agent.
releaseDate: '2020-12-10'
translationType: machine
---

## Resumen

Una actualización de seguridad para el agente .NET de New Relic corrige una vulnerabilidad en la que el agente podría capturar involuntariamente el parámetro de solicitud de servicio de la aplicación WCF.

<DNT>**Release date:**</DNT> 4 de mayo de 2017

<DNT>**Vulnerability identifier:**</DNT> NR17-04

<DNT>**Priority:**</DNT> Medio

## Software afectado [#affected]

Las siguientes versiones del agente New Relic se ven afectadas:

<table>
  <tbody>
    <tr>
      <th>
        <DNT>
          **Name**
        </DNT>
      </th>

      <th>
        <DNT>
          **Affected version**
        </DNT>
      </th>

      <th>
        <DNT>
          **Notes**
        </DNT>
      </th>

      <th>
        <DNT>
          **Remediated version**
        </DNT>
      </th>
    </tr>

    <tr>
      <td>
        Agente .NET
      </td>

      <td>
        6.8.172.0 (y mayores)
      </td>

      <td>
        Con WCF
      </td>

      <td>
        [6.11.613.0](/docs/release-notes/agent-release-notes/net-release-notes)
      </td>
    </tr>
  </tbody>
</table>

## Información de vulnerabilidades [#vuln-info]

La versión <DNT>**6.8.172.0**</DNT> del agente .NET de New Relic agregó visibilidad a Error Analytics. De forma predeterminada, el agente capturará el evento de error y, con la aplicación WCF, esto se captura como tipo de evento <DNT>**TransactionError**</DNT>. New Relic ha descubierto que el atributo <DNT>\*\*service.request.\*\*</DNT>\* puede contener información confidencial que no debe enviarse a New Relic. Se ha realizado una solución para deshabilitar la recopilación de estos parámetros durante la recopilación de errores. Se recomienda a los clientes que actualicen a la última versión del agente .NET.

### Factores atenuantes [#factors]

* Solo se ven afectados el agente .NET con Error Analytics y la aplicación WCF.
* Todos los atributos de solicitud de servicio están deshabilitados en el modo de alta seguridad.

## Soluciones alternativas

El usuario que se vea afectado y no pueda actualizar puede optar por configurar manualmente el agente .NET para que no capture el parámetro de solicitud de servicio. El usuario puede excluir <DNT>\*\*service.request.\*\*</DNT>\* atributo de la estrofa <DNT>**errorCollector**</DNT> en su archivo newrelic.config.

```
<attributes enabled="true">
     <exclude > service.request.*</exclude>
 </attributes>
```

Para obtener más información, consulte nuestra [configuración del selector de errores del agente .NET](/docs/agents/net-agent/installation-configuration/net-agent-configuration#error_collector)

## Informar vulnerabilidades de seguridad a New Relic [#report]

New Relic está comprometido con la seguridad de nuestros clientes y sus datos. Si cree que ha encontrado vulnerabilidades de seguridad en uno de nuestros productos o sitios web, le damos la bienvenida y le agradecemos enormemente que lo informe al programa de divulgación coordinada de New Relic. Para obtener más información, consulte [Informar vulnerabilidades de seguridad](/docs/security/new-relic-security/data-privacy/reporting-security-vulnerabilities).

## Para más ayuda [#more_help]

Los recursos de documentación adicionales incluyen:.

* [Actualizar el agente .NET](/docs/agents/net-agent/installation-configuration/upgrade-net-agent)
* [Configuración del selector de errores del agente .NET](/docs/agents/net-agent/installation-configuration/net-agent-configuration#error_collector)
* [MSDN: Fundación de comunicación de Windows](https://msdn.microsoft.com/en-us/library/dd456779(v=vs.110).aspx)
* [Seguridad NR](https://newrelic.com/security)
