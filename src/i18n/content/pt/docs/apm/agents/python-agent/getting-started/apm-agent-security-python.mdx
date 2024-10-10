---
title: 'Segurança do agente APM: Python'
tags:
  - Agents
  - Python agent
  - Getting started
metaDescription: How to customize the security levels for data sent to New Relic from your Python app.
freshnessValidatedDate: never
translationType: machine
---

As configurações de segurança padrão do agente Python fornecem [segurança automaticamente aos seus dados](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantir a privacidade dos dados e limitar o tipo de informação que ingerimos. Você pode ter motivos comerciais para alterar essas configurações.

Se quiser restringir as informações que ingerimos, você pode ativar [o modo de alta segurança](#restricted). Se o modo de alta segurança ou as configurações padrão não funcionarem para suas necessidades comerciais, você poderá aplicar configurações [personalizadas](#custom) .

Para obter mais informações sobre medidas de segurança, consulte nossa [documentação de segurança e privacidade](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) ou visite o [site de segurança da New Relic](https://newrelic.com/security).

## Configurações de segurança padrão [#default]

Por padrão, veja como o agente Python lida com os seguintes dados potencialmente confidenciais:

* [Parâmetro de solicitação](/docs/agents/python-agent/attributes/python-attribute-examples#ex_req_params): O agente não captura o parâmetro de solicitação HTTP.
* [SQL](/docs/agents/python-agent/installation-configuration/python-agent-configuration#txn-tracer-sql): o agente define a gravação SQL como `obfuscated`, o que remove os valores numéricos e literais de string potencialmente confidenciais.

## Configurações do modo de alta segurança [#restricted]

Ao [ativar o modo de alta segurança](/docs/agents/python-agent/installation-configuration/python-agent-configuration#high_security), as [configurações padrão](#default) são bloqueadas para que o usuário não possa alterá-las. Além disso:

* O agente não coleta [o parâmetro da fila de mensagens](/docs/agents/python-agent/api/python-agent-api-guide#messaging).
* Você não pode criar [eventos personalizados](/docs/agents/python-agent/python-agent-api/record_custom_event).
* O agente remove [mensagens de exceção de erros](/docs/agents/python-agent/installation-configuration/python-agent-configuration#strip_exception_messages_enabled).

## Configurações de segurança personalizadas [#custom]

<Callout variant="caution">
  Se você personalizar as configurações de segurança, isso poderá afetar a segurança do seu aplicativo.
</Callout>

Se precisar de configurações de segurança diferentes do modo padrão ou de alta segurança, você poderá personalizar estas configurações:

* [Arquivo de configuração do agente Python](/docs/agents/python-agent/installation-configuration/python-agent-configuration)
* [Atributo personalizado](/docs/agents/python-agent/python-agent-api/add_custom_attribute)
* [API do agente Python](/docs/agents/python-agent/api/python-agent-api-guide)

<Callout variant="tip">
  Algumas dessas configurações podem ser alteradas usando variáveis de ambiente. Consulte [Variáveis de ambiente do agente Python](/docs/agents/python-agent/installation-configuration/python-agent-configuration#environment-variables) para obter a lista completa.
</Callout>

<table>
  <thead>
    <tr>
      <th width="340px">
        <DNT>
          **Setting**
        </DNT>
      </th>

      <th>
        <DNT>
          **Effects on data security**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [`audit_log_file`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#audit-log-file)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Se você usar isso para configurar o nome do arquivo de log de auditoria, o agente log detalhes de mensagens transmitidas entre o processo de monitoramento e o coletor de dados.

        Você pode então avaliar as informações que o agente envia ao coletor para ver se elas incluem informações confidenciais.
      </td>
    </tr>

    <tr>
      <td>
        [`high_security`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#high_security)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Para ativar [o modo de alta segurança](#restricted), defina-o como `true` e [ative a segurança alta](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Isso restringe as informações que você pode enviar.
      </td>
    </tr>

    <tr>
      <td>
        [`proxy_host`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#proxy)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Alguns proxies usam HTTP por padrão, que é um protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cfg-attributes-enabled)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Por padrão, você está enviando [atributo](/docs/agents/python-agent/attributes/enabling-disabling-attributes-python). Se você não quiser enviar um atributo, defina como `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#cfg-attributes-exclude)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Se houver chaves de atributo específicas que você **não** deseja enviar no rastreamento da transação, identifique-as usando `attributes.exclude`. Isso restringe as informações enviadas.

        Considere se deseja excluir esses atributos potencialmente confidenciais usando `attributes.exclude` ou se precisa que as informações sejam enviadas:

        * `request.headers.*`: remove todos os cabeçalhos de solicitação.

          (Observe que os cabeçalhos HTTP que contêm dados confidenciais, como `cookie` e `authorization` nunca são coletados.)

        * `response.headers.*`: remove todos os cabeçalhos de resposta.
      </td>
    </tr>

    <tr>
      <td>
        [`custom_insights_events.enabled`](/docs/agents/python-agent/configuration/python-agent-configuration#custom-insights-events-settings)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Por padrão, o agente registra o evento enviado para a API de eventos por meio de [`record_custom_event()`](/docs/agents/python-agent/api/python-agent-api-guide#record_custom_event). Se você ativar [o modo de alta segurança](#restricted), ele será automaticamente definido como `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`transaction_tracer.record_sql`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#txn-tracer-sql)

        _corda_
      </td>

      <td>
        Padrão: `obfuscated`

        Por padrão, `transaction_tracer.record_sql` é definido como `obfuscated`, o que elimina os literais numéricos e de string.

        * Se você não quiser que o agente capture informações de consulta, defina como `off`.
        * Se quiser que o agente capture todas as informações da consulta em seu formato original, defina como `raw`.
        * Quando você ativa [o modo de alta segurança](#restricted), ele é automaticamente definido como `obfuscated`.
      </td>
    </tr>

    <tr>
      <td>
        [`strip_exception_messages.enabled`](/docs/agents/python-agent/installation-configuration/python-agent-configuration#strip_exception_messages_enabled)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Se você ativar [o modo de alta segurança](#restricted), ele será automaticamente definido como `true`. Se você não estiver usando o modo de alta segurança, mas quiser remover mensagens de todas as exceções, exceto aquelas na sua [lista de permissões](/docs/agents/python-agent/configuration/python-agent-configuration#strip_exception_messages_whitelist), defina-o como `true`.
      </td>
    </tr>
  </tbody>
</table>
