---
title: Log (auditar) todos los datos que transmite su agente de New Relic
tags:
  - Using New Relic
  - Cross-product functions
  - Troubleshooting
metaDescription: 'To record all data transmitted (typically for auditing or debugging), you can use New Relic audit logs for short periods.'
freshnessValidatedDate: never
translationType: machine
---

Cada agente de New Relic incluye fuertes salvaguardas para garantizar [la seguridad de los datos](/docs/accounts-partnerships/accounts/security/data-security). Por ejemplo, New Relic cifra automáticamente información confidencial antes de transmitirla. Para obtener más información sobre las medidas de seguridad de New Relic, consulte nuestra [documentación de seguridad y privacidad](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) o visite el [sitio web de seguridad de New Relic](https://newrelic.com/security).

Si necesita registrar y ver información sobre <DNT>**all**</DNT> datos que su aplicación transmite a New Relic, puede habilitar el registro de auditoría por períodos cortos de tiempo. Esto es útil, por ejemplo, durante la depuración o la auditoría, cuando necesita información detallada sobre qué se está transmitiendo exactamente.

<Callout variant="caution">
  Asegúrese de desactivar el registro de auditoría tan pronto como termine de usarlo. Esta característica genera una sobrecarga adicional, que puede sobrecargar el archivo de registro de auditoría si se deja activado durante períodos prolongados.
</Callout>

## Registro de auditoría del agente APM [#audit-logging]

Para obtener detalles sobre las opciones de registro de auditoría para el archivo de configuración de su agente APM, consulte la documentación específica del agente:

<table>
  <thead>
    <tr>
      <th style={{ width: "100px" }}>
        <DNT>
          **Agent**
        </DNT>
      </th>

      <th>
        <DNT>
          **Configuration file**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Go
      </td>

      <td>
        El registro es opcional con el agente Go. Si está utilizando `newrelic.NewLogger(w)` y desea resultados más detallados, cambie `newrelic.NewLogger(w)` a `newrelic.NewDebugLogger(w)`. Para obtener más información, consulte la [documentación de registro de New Relic Go en GitHub](https://github.com/newrelic/go-agent/blob/master/v3/newrelic/log.go).
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        Establezca [`audit_mode`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-audit_mode) en `true`.
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        Establezca [`auditLog`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#log-auditLog) en `true`.
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        El agente Node.js de New Relic no utiliza un registro de auditoría separado porque la carga útil ya está disponible en el registro de configuración. Para ver niveles cada vez mayores de detalle, utilice [las variables de registro `level` ](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#logging_config)de su archivo de configuración.
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        Utilice PHP [`newrelic.daemon.auditlog` (para `newrelic.ini`)](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-auditlog) o [`auditlog` (para `newrelic.cfg`)](/docs/agents/php-agent/configuration/proxy-daemon-newreliccfg-settings#cfgvar-auditlog).
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Utilice [valores`audit_log_file` ](/docs/agents/python-agent/installation-configuration/python-agent-configuration#audit-log-file)de Python.
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Utilice [valores`audit_log` ](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#audit-log). Para obtener más información, consulte [Registro de auditoría del agente Ruby](/docs/agents/ruby-agent/troubleshooting/ruby-agent-audit-log).
      </td>
    </tr>
  </tbody>
</table>

## Registro de agente de infraestructura [#infrastructure-logging]

Puede [generar un registro de monitoreo de infraestructura](/docs/infrastructure/new-relic-infrastructure/troubleshooting/generate-logs-troubleshooting-infrastructure) para la resolución de problemas de nuestro agente de infraestructura.

## Registro relacionado con la cuenta New Relic [#account-logging]

Para auditar los cambios en su cuenta New Relic, ejecute la consulta NRQL con [`NrAuditEvent`](/docs/insights/use-insights-ui/manage-account-data/query-account-audit-logs-nrauditevent). Para personalizar su consulta, utilice cualquiera de los [`NrAuditEvent` atributos](/docs/insights/insights-data-sources/default-data/nrauditevent-default-attributes-examples) disponibles.
