---
title: Log (auditar) todos os dados que seu agente New Relic transmite
tags:
  - Using New Relic
  - Cross-product functions
  - Troubleshooting
metaDescription: 'To record all data transmitted (typically for auditing or debugging), you can use New Relic audit logs for short periods.'
freshnessValidatedDate: never
translationType: machine
---

Cada agente da New Relic inclui fortes salvaguardas para garantir [a segurança dos dados](/docs/accounts-partnerships/accounts/security/data-security). Por exemplo, a New Relic criptografa automaticamente informações confidenciais antes de serem transmitidas. Para obter mais informações sobre as medidas de segurança da New Relic, consulte nossa [documentação de segurança e privacidade](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) ou visite o [site de segurança da New Relic](https://newrelic.com/security).

Se precisar registrar e visualizar informações sobre <DNT>**all**</DNT> dados que seu aplicativo transmite para o New Relic, você poderá ativar o registro de auditoria por curtos períodos de tempo. Isso é útil, por exemplo, para depuração ou auditoria, quando você precisa de informações detalhadas sobre o que exatamente está sendo transmitido.

<Callout variant="caution">
  Certifique-se de desabilitar o log de auditoria assim que terminar de usá-lo. Esse recurso causa sobrecarga adicional, o que pode sobrecarregar o arquivo de log de auditoria se for deixado ativado por longos períodos de tempo.
</Callout>

## Registro de auditoria do agente APM [#audit-logging]

Para obter detalhes sobre as opções de log de auditoria para o arquivo de configuração do agente APM, consulte a documentação específica do agente:

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
        O registro em log é opcional com o agente Go. Se você estiver usando `newrelic.NewLogger(w)` e quiser uma saída mais detalhada, altere `newrelic.NewLogger(w)` para `newrelic.NewDebugLogger(w)`. Para obter mais informações, consulte a [documentação de registro do New Relic Go no GitHub](https://github.com/newrelic/go-agent/blob/master/v3/newrelic/log.go).
      </td>
    </tr>

    <tr>
      <td>
        Java
      </td>

      <td>
        Defina [`audit_mode`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-audit_mode) como `true`.
      </td>
    </tr>

    <tr>
      <td>
        .NET
      </td>

      <td>
        Defina [`auditLog`](/docs/agents/net-agent/installation-configuration/net-agent-configuration#log-auditLog) como `true`.
      </td>
    </tr>

    <tr>
      <td>
        Node.js
      </td>

      <td>
        O agente Node.js da New Relic não usa log de auditoria separado porque a carga útil já está disponível no log de configuração. Para visualizar níveis crescentes de detalhes, use [as variáveis de registro `level` ](/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration#logging_config)do seu arquivo de configuração.
      </td>
    </tr>

    <tr>
      <td>
        PHP
      </td>

      <td>
        Use PHP [`newrelic.daemon.auditlog` (para `newrelic.ini`)](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-auditlog) ou [`auditlog` (para `newrelic.cfg`)](/docs/agents/php-agent/configuration/proxy-daemon-newreliccfg-settings#cfgvar-auditlog).
      </td>
    </tr>

    <tr>
      <td>
        Python
      </td>

      <td>
        Use [valores`audit_log_file` ](/docs/agents/python-agent/installation-configuration/python-agent-configuration#audit-log-file)do Python.
      </td>
    </tr>

    <tr>
      <td>
        Ruby
      </td>

      <td>
        Use [valores`audit_log` ](/docs/apm/agents/ruby-agent/configuration/ruby-agent-configuration/#audit-log). Para obter mais informações, consulte [Log de auditoria do agente Ruby](/docs/agents/ruby-agent/troubleshooting/ruby-agent-audit-log).
      </td>
    </tr>
  </tbody>
</table>

## Criação de log do agente de infraestrutura [#infrastructure-logging]

Você pode [gerar log de monitoramento de infraestrutura](/docs/infrastructure/new-relic-infrastructure/troubleshooting/generate-logs-troubleshooting-infrastructure) para resolução de problemas do nosso agente de infraestrutura.

## Registro relacionado à conta New Relic [#account-logging]

Para auditar alterações em sua conta New Relic, execute uma consulta NRQL com [`NrAuditEvent`](/docs/insights/use-insights-ui/manage-account-data/query-account-audit-logs-nrauditevent). Para personalizar sua consulta, use qualquer um dos [`NrAuditEvent` atributos](/docs/insights/insights-data-sources/default-data/nrauditevent-default-attributes-examples) disponíveis.
