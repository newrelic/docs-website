---
title: 'Segurança do agente APM: .NET'
tags:
  - Agents
  - NET agent
  - Getting started
metaDescription: Increasing levels of security allow you to customize how your New Relic .NET agent sends data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

As configurações de segurança padrão do agente .NET da New Relic fornecem automaticamente [segurança para seus dados APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantir a privacidade dos dados e limitar o tipo de informação que a New Relic recebe. Você pode ter motivos comerciais para alterar essas configurações.

Se quiser restringir as informações que o New Relic recebe, você pode ativar [o modo de alta segurança](#restricted). Se o modo de alta segurança ou as configurações padrão não funcionarem para suas necessidades comerciais, você poderá aplicar configurações [personalizadas](#custom) .

Para obter mais informações sobre as medidas de segurança da New Relic, consulte nossa [documentação de segurança e privacidade](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) ou visite o [site de segurança da New Relic](https://newrelic.com/security).

## Configurações de segurança padrão [#default]

Por padrão, veja como o agente .NET da New Relic lida com os seguintes dados potencialmente confidenciais:

* Parâmetro de solicitação: O agente não captura o parâmetro de solicitação HTTP.
* [HTTPS](/docs/agents/net-agent/configuration/net-agent-configuration#service-ssl): o agente se comunica com a New Relic usando HTTPS.
* [SQL](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-recordSql): o agente define a gravação SQL como `obfuscated`, o que remove os valores numéricos e literais de string potencialmente confidenciais.

## Configurações do modo de alta segurança [#restricted]

Ao [ativar o modo de alta segurança](/docs/agents/net-agent/configuration/net-agent-configuration#high_security_mode), as [configurações padrão](#default) são bloqueadas para que o usuário não possa alterá-las. Além disso:

* Você não pode criar [eventos personalizados](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#net-att).
* Você não pode coletar [atributo do usuário](/docs/agents/net-agent/attributes/net-agent-attributes#NRaddCustomParameter).
* O agente [remove mensagens de exceção](/docs/agents/net-agent/configuration/net-agent-configuration#strip_exception_messages).

## Configurações de segurança personalizadas [#custom]

<Callout variant="caution">
  Se você personalizar as configurações de segurança, isso poderá afetar a segurança do seu aplicativo.
</Callout>

Se precisar de configurações de segurança diferentes do modo padrão ou de alta segurança, você poderá personalizar estas configurações:

* [Arquivo de configuração do agente .NET](/docs/agents/net-agent/configuration/net-agent-configuration)
* [Atributo personalizado](/docs/agents/net-agent/attributes/net-agent-attributes#NRaddCustomParameter)
* [API do agente .NET](/docs/agents/net-agent/api-guides/guide-using-net-agent-api)

<table>
  <thead>
    <tr>
      <th width="300px">
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
        [`auditLog`](/docs/agents/net-agent/configuration/net-agent-configuration#log-auditLog)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Registra todos os dados enviados e recebidos da New Relic em um arquivo de log auditlog e no arquivo de log padrão.
      </td>
    </tr>

    <tr>
      <td>
        [`highSecurity`](/docs/agents/net-agent/configuration/net-agent-configuration#high_security_mode)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Para ativar [o modo de alta segurança](#restricted), defina-o como `true` e [ative a alta segurança no New Relic](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Isso restringe as informações que você pode enviar para a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`proxy.host`](/docs/agents/net-agent/configuration/net-agent-configuration#proxy-host)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Alguns proxies usam HTTP por padrão, que é um protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/net-agent/configuration/net-agent-configuration#agent-attributes-enabled)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Por padrão, você está enviando [um atributo](/docs/agents/net-agent/attributes/net-agent-attributes) para a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/net-agent/configuration/net-agent-configuration#agent-attributes-exclude)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Se houver chaves de atributo específicas que você **não** deseja enviar para a New Relic no rastreamento da transação, identifique-as usando `attributes.exclude`. Isso restringe as informações enviadas à New Relic.

        Considere se você deseja excluir esses atributos potencialmente confidenciais usando `attributes.exclude` ou se precisa que as informações sejam enviadas para a New Relic:

        * `request.referer`: Remove o referenciador da solicitação.
        * `request.uri`: remove o caminho da solicitação de entrada da transação.
      </td>
    </tr>

    <tr>
      <td>
        [`recordSql`](/docs/agents/net-agent/configuration/net-agent-configuration#tracer-recordSql)

        _corda_
      </td>

      <td>
        Padrão: `obfuscated`

        Por padrão, `recordSql` é definido como `obfuscated`, o que elimina os literais numéricos e de string.

        * Se você não quiser que o agente capture informações de consulta, defina como `off`.
        * Se quiser que o agente capture todas as informações da consulta em seu formato original, defina como `raw`.
        * Quando você ativa [o modo de alta segurança](#restricted), ele é automaticamente definido como `obfuscated`.
      </td>
    </tr>

    <tr>
      <td>
        [`stripExceptionMessages`](/docs/agents/net-agent/configuration/net-agent-configuration#strip_exception_messages)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Por padrão, isso é definido como `false`, o que significa que o agente envia mensagens de todas as exceções para o coletor New Relic. Se você ativar [o modo de alta segurança](#restricted), ele será automaticamente alterado para `true` e o agente removerá as mensagens das exceções.
      </td>
    </tr>

    <tr>
      <td>
        [`customEvents.enabled`](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#net-att)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Por padrão, o agente registra o evento enviado para a API de evento personalizado via `RecordCustomEvent()`. Se você ativar [o modo de alta segurança](#restricted), ele será automaticamente definido como `false`.
      </td>
    </tr>
  </tbody>
</table>
