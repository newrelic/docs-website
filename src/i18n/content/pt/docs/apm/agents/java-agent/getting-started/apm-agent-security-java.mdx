---
title: 'Segurança do agente APM: Java'
tags:
  - Agents
  - Java agent
  - Getting started
metaDescription: Increasing levels of security allow you to customize how your New Relic Java agent sends data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

As configurações de segurança padrão do agente Java da New Relic fornecem [segurança automaticamente para seus dados do APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantir a privacidade dos dados e limitar o tipo de informação que a New Relic recebe. Você pode ter motivos comerciais para alterar essas configurações.

Se quiser restringir as informações que o New Relic recebe, você pode ativar [o modo de alta segurança](#restricted). Se o modo de alta segurança ou as configurações padrão não funcionarem para suas necessidades comerciais, você poderá aplicar configurações [personalizadas](#custom) .

Para obter mais informações sobre as medidas de segurança da New Relic, consulte nossa [documentação de segurança e privacidade](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) ou visite o [site de segurança da New Relic](https://newrelic.com/security).

## Configurações de segurança padrão [#default]

<Callout variant="caution">
  O rastreamento de pilha não pode ser ofuscado e pode conter informações confidenciais, incluindo consultas SQL. Para obter mais informações sobre erro ignorado, consulte [Configuração de erro do agente Java](/docs/agents/java-agent/configuration/java-agent-error-configuration).
</Callout>

Por padrão, aqui está como o agente Java da New Relic lida com os seguintes dados potencialmente confidenciais::

* Parâmetro de solicitação: O agente não captura o parâmetro de solicitação HTTP.
* [HTTPS](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-ssl): o agente se comunica com a New Relic usando HTTPS.
* [SQL](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-record_sql): o agente define a gravação SQL como `obfuscated`, o que remove os valores numéricos e literais de string potencialmente confidenciais.

## Configurações do modo de alta segurança [#restricted]

Ao [ativar o modo de alta segurança](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-enable_high_security), as [configurações padrão](#default) são bloqueadas para que o usuário não possa alterá-las. Além disso:

* O agente não coleta o parâmetro da fila de mensagens.
* Você não pode criar [eventos personalizados](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#java-att).
* Você não pode implementar [instrumentação customizada usando o Editor de instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-instrument-ui).
* Você não pode coletar [atributo do usuário](/docs/insights/insights-data-sources/custom-attributes/collect-user-attributes-java).

## Configurações de segurança personalizadas [#custom]

<Callout variant="caution">
  Se você personalizar as configurações de segurança, isso poderá afetar a segurança do seu aplicativo.
</Callout>

Se precisar de configurações de segurança diferentes do modo padrão ou de alta segurança, você poderá personalizar estas configurações:

* [Arquivo de configuração do agente Java](/docs/agents/java-agent/configuration/java-agent-configuration-config-file)
* [Atributo personalizado](/docs/agents/java-agent/attributes/enabling-disabling-attributes-java#NRaddCustomParameter)
* [API do agente Java](/docs/agents/java-agent/custom-instrumentation/java-agent-api)

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
        [`audit_mode`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-audit_mode)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Por padrão, o agente Java não log todos os dados enviados ao New Relic no arquivo de log do agente.

        Se você definir isso como `true`, os dados de registro do agente serão enviados ao coletor New Relic no arquivo de registro do agente. Você pode então avaliar as informações que o agente envia revisando o arquivo de log do agente para ver se ele inclui informações confidenciais.
      </td>
    </tr>

    <tr>
      <td>
        [`high_security`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-enable_high_security)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Para ativar [o modo de alta segurança](#restricted), defina-o como `true` e [ative a alta segurança no New Relic](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Isso restringe as informações que você pode enviar para a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`proxy_host`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-proxy_user)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Alguns proxies usam HTTP por padrão, que é um protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-enabled)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Padrão para o [Editor de instrumentação personalizada](/docs/agents/java-agent/custom-instrumentation/custom-instrumentation-editor-instrument-ui#options): `false`

        Por padrão, você está enviando [um atributo](/docs/agents/java-agent/attributes/enabling-disabling-attributes-java) para New Relic, exceto para métodos instrumentados utilizando o Editor de instrumentação personalizada. Se você não deseja enviar um atributo para a New Relic, defina como `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#cfg-attributes-exclude)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Se houver chaves de atributo específicas que você **não** deseja enviar para a New Relic no rastreamento da transação, identifique-as usando `attributes.exclude`. Isso restringe as informações enviadas à New Relic.

        Considere se você deseja excluir esses atributos potencialmente confidenciais usando `attributes.exclude` ou se precisa que as informações sejam enviadas para a New Relic:

        * `request.headers.*`: remove todos os cabeçalhos de solicitação.

          (Observe que os cabeçalhos HTTP que contêm dados confidenciais, como `cookie` e `authorization` nunca são coletados.)

        * `response.headers.*`: remove todos os cabeçalhos de resposta.

        * `request_uri`: remove o caminho da solicitação de entrada da transação.
      </td>
    </tr>

    <tr>
      <td>
        [`log_sql`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-log_sql)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Por padrão, você está enviando consultas para a New Relic usando `record_sql`. Se você deseja log consultas no arquivo de log do agente e enviá-las para o New Relic, defina como `true`.
      </td>
    </tr>

    <tr>
      <td>
        [`record_sql`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#tt-record_sql)

        _corda_
      </td>

      <td>
        Padrão: `obfuscated`

        Por padrão, `record_sql` é definido como `obfuscated`, o que elimina os literais numéricos e de string.

        * Se você não quiser que o agente capture informações de consulta, defina como `off`.
        * Se quiser que o agente capture todas as informações da consulta em seu formato original, defina como `raw`.
        * Quando você ativa [o modo de alta segurança](#restricted), ele é automaticamente definido como `obfuscated`.
      </td>
    </tr>

    <tr>
      <td>
        [`strip_exception_messages`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#strip_exception_messages)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Por padrão, isso é definido como `false`, o que significa que o agente envia mensagens de todas as exceções para o coletor New Relic. Se você ativar [o modo de alta segurança](#restricted), ele será automaticamente alterado para `true` e o agente removerá as mensagens das exceções.

        Se você não estiver usando o modo de alta segurança, mas ainda quiser remover mensagens de todas as exceções, exceto aquelas na sua [lista de permissões](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#strip_exception_messages_whitelist), defina como `true`.
      </td>
    </tr>

    <tr>
      <td>
        [`custom_insights_events.enabled`](/docs/insights/insights-data-sources/custom-data/insert-custom-events-new-relic-apm-agents#java-att)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Por padrão, o agente registra o evento enviado para a API de eventos por meio de `recordCustomEvent()`. Se você ativar [o modo de alta segurança](#restricted), ele será automaticamente definido como `false`.
      </td>
    </tr>
  </tbody>
</table>
