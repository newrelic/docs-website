---
title: 'Segurança do agente APM: PHP'
tags:
  - Agents
  - PHP agent
  - Getting started
metaDescription: How to customize the security levels for data sent to New Relic from your PHP app.
freshnessValidatedDate: never
translationType: machine
---

As configurações de segurança padrão do agente PHP fornecem [segurança automaticamente para seus dados APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantir a privacidade dos dados e limitar o tipo de informação que a New Relic recebe. Você pode ter motivos comerciais para alterar essas configurações.

Se quiser restringir as informações que o New Relic recebe, você pode ativar [o modo de alta segurança](#restricted). Se o modo de alta segurança ou as configurações padrão não funcionarem para suas necessidades comerciais, você poderá aplicar configurações [personalizadas](#custom) .

Para obter mais informações sobre as medidas de segurança da New Relic, consulte nossa [documentação de segurança e privacidade](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) ou visite o [site de segurança da New Relic](https://newrelic.com/security).

## Configurações de segurança padrão [#default]

Por padrão, aqui está como o agente PHP da New Relic lida com os seguintes dados potencialmente confidenciais:

* [Parâmetro de solicitação](/docs/agents/php-agent/attributes/attribute-examples#ex_req_params): O agente não captura o parâmetro de solicitação HTTP.
* [HTTPS](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-ssl): o agente se comunica com a New Relic usando HTTPS.
* [SQL](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-sql): o agente define a gravação SQL como `obfuscated`, o que remove os valores numéricos e literais de string potencialmente confidenciais.

## Configurações do modo de alta segurança [#restricted]

Ao [ativar o modo de alta segurança](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-high-security), as [configurações padrão](#default) são bloqueadas para que o usuário não possa alterá-las. Além disso:

* Você não pode criar [eventos personalizados](/docs/agents/php-agent/php-agent-api/newrelic_record_custom_event).
* O agente remove mensagens de exceção de erros.

## Configurações de segurança personalizadas [#custom]

<Callout variant="caution">
  Se você personalizar as configurações de segurança, isso poderá afetar a segurança do seu aplicativo.
</Callout>

Se precisar de configurações de segurança diferentes do modo padrão ou de alta segurança, você poderá personalizar estas configurações:

* [Arquivo de configuração do agente PHP](/docs/agents/php-agent/configuration/php-agent-configuration)
* [Configurações de atributo](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-attribute-settings)
* [API do agente PHP](/docs/agents/php-agent/api-guides/php-agent-api-guide)

<table>
  <thead>
    <tr>
      <th width="330px">
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
        [`newrelic.daemon.auditlog`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-auditlog)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Se você usar isso para definir o nome do arquivo de log de auditoria, o agente log detalhes de mensagens transmitidas entre o processo de monitoramento e o coletor New Relic.

        Você pode então avaliar as informações que o agente envia ao coletor New Relic para ver se elas incluem informações confidenciais.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.high_security`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-high-security)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Para ativar [o modo de alta segurança](#restricted), defina-o como `true` e [ative a alta segurança no New Relic](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Isso restringe as informações que você pode enviar para a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.daemon.proxy`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-daemon-proxy)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Alguns proxies usam HTTP por padrão, que é um protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.attributes.enabled`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-attributes-enabled)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Por padrão, você está enviando [um atributo](/docs/agents/php-agent/attributes/enabling-disabling-attributes) para a New Relic. Se você não deseja enviar um atributo para a New Relic, defina como `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.attributes.exclude`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-attributes-include-exclude)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Se houver chaves de atributo específicas que você **não** deseja enviar para a New Relic no rastreamento da transação, identifique-as usando `newrelic.attributes.exclude`. Isso restringe as informações enviadas à New Relic.

        Considere se você deseja excluir esses atributos potencialmente confidenciais usando `newrelic.attributes.exclude` ou se precisa que as informações sejam enviadas para a New Relic:

        * `request.headers.*`: remove todos os cabeçalhos de solicitação.
        * `response.headers.*`: remove todos os cabeçalhos de resposta.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.custom_insights_events.enabled`](/docs/agents/python-agent/configuration/python-agent-configuration#custom-insights-events-settings)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Por padrão, o agente registra o evento enviado para a API de eventos por meio de [`newrelic_record_custom_event()`](/docs/agents/php-agent/php-agent-api/newrelic_record_custom_event). Se você ativar [o modo de alta segurança](#restricted), ele será automaticamente definido como `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`newrelic.transaction_tracer.record_sql`](/docs/agents/php-agent/configuration/php-agent-configuration#inivar-tt-sql)

        _corda_
      </td>

      <td>
        Padrão: `obfuscated`

        Por padrão, `newrelic.transaction_tracer.record_sql` é definido como `obfuscated`, o que elimina os literais numéricos e de string.

        * Se você não quiser que o agente capture informações de consulta, defina como `off`.
        * Se quiser que o agente capture todas as informações da consulta em seu formato original, defina como `raw`.
        * Quando você ativa [o modo de alta segurança](#restricted), ele é automaticamente definido como `obfuscated`.
      </td>
    </tr>
  </tbody>
</table>
