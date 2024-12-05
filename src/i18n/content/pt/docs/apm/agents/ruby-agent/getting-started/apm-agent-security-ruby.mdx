---
title: 'Segurança do agente APM: Ruby'
tags:
  - Agents
  - Ruby agent
  - Getting started
metaDescription: Increasing levels of security you can customize for how your New Relic Ruby agent sends data to New Relic.
freshnessValidatedDate: never
translationType: machine
---

As configurações de segurança padrão do agente New Relic Ruby fornecem automaticamente [segurança para seus dados APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantir a privacidade dos dados e limitar o tipo de informação que a New Relic recebe. Você pode ter motivos comerciais para alterar essas configurações.

Se quiser restringir as informações que o New Relic recebe, você pode ativar o modo de alta segurança. Se o modo de alta segurança ou as configurações padrão não funcionarem para suas necessidades comerciais, você poderá aplicar configurações personalizadas.

Para obter mais informações sobre as medidas de segurança da New Relic, consulte nossa [documentação de segurança e privacidade](/docs/security/new-relic-security/data-privacy/data-privacy-new-relic) ou visite o [site de segurança da New Relic](https://newrelic.com/security).

## Configurações de segurança padrão [#default]

Por padrão, aqui está como o agente New Relic Ruby lida com os seguintes dados potencialmente confidenciais:

* [Parâmetro de solicitação](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#capture_params): O agente não captura o parâmetro de solicitação HTTP.
* [HTTPS](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#ssl): o agente se comunica com a New Relic usando HTTPS.
* [SQL](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer-record_sql): o agente define a gravação SQL como `obfuscated`, o que remove os valores numéricos e literais de string potencialmente confidenciais.

## Configurações do modo de alta segurança [#restricted]

Ao [ativar o modo de alta segurança](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#high_security), as [configurações padrão](#default) são bloqueadas para que o usuário não possa alterá-las. Além disso, o agente não coleta parâmetros da fila de mensagens.

## Configurações de segurança personalizadas [#custom]

<Callout variant="caution">
  Se você personalizar as configurações de segurança, isso poderá afetar a segurança do seu aplicativo.
</Callout>

Se precisar de configurações de segurança diferentes do modo padrão ou de alta segurança, você poderá personalizar estas configurações:

* [Arquivo de configuração do agente Ruby](/docs/agents/ruby-agent/configuration/ruby-agent-configuration)
* [Atributo personalizado](/docs/agents/ruby-agent/attributes/enabling-disabling-attributes-ruby)
* [API do agente Ruby](/docs/agents/ruby-agent/api-guides/ruby-agent-api-guide)
* [Instrumentação personalizada](/docs/agents/ruby-agent/customization/ruby-custom-instrumentation)
* [Certificado SSL personalizado](/docs/agents/ruby-agent/configuration/custom-ssl-certificates-ruby)

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
        [`audit_log.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#audit_log-enabled)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Por padrão, o agente não log todos os dados enviados ao New Relic no arquivo de log do agente.

        Se você definir isso como `true`:

        * Os dados de log do agente enviados ao coletor New Relic no arquivo de log do agente. Você pode então avaliar as informações que o agente envia revisando o arquivo de log do agente para ver se ele inclui informações confidenciais.
        * Todos os endpoints estão incluídos no arquivo de log do agente. Você pode especificar que apenas determinados endpoints devem ser incluídos no log de auditoria usando [`audit_log.endpoints`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#audit_log-endpoints).
      </td>
    </tr>

    <tr>
      <td>
        [`high_security`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#high_security)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Para ativar [o modo de alta segurança](#restricted), defina-o como `true` e [ative a alta segurança no New Relic](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Isso restringe as informações que você pode enviar para a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`proxy_host`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#proxy_host)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Alguns proxies usam HTTP por padrão, que é um protocolo menos seguro.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#attributes-enabled)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Por padrão, você está enviando [um atributo](/docs/agents/ruby-agent/attributes/enabling-disabling-attributes-ruby) para a New Relic. Se você não deseja enviar um atributo para a New Relic, defina como `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`attributes.exclude`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#attributes-exclude)

        _matriz_
      </td>

      <td>
        Padrão: `[]`

        Se houver chaves de atributo específicas que você **não** deseja enviar para a New Relic no rastreamento da transação, identifique-as usando `attributes.exclude`. Isso restringe as informações enviadas à New Relic.

        Considere se você deseja excluir esses atributos potencialmente confidenciais usando `attributes.exclude` ou se precisa que essas informações sejam enviadas para a New Relic:

        * `request.headers.*`: remove todos os cabeçalhos de solicitação.

          (Observe que os cabeçalhos HTTP que contêm dados confidenciais, como `cookie` e `authorization` nunca são coletados.)

        * `response.headers.*`: remove todos os cabeçalhos de resposta.
      </td>
    </tr>

    <tr>
      <td>
        [`transaction_tracer.record_sql`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#transaction_tracer-record_sql)

        _corda_
      </td>

      <td>
        Padrão: `obfuscated`

        Por padrão, `transaction_tracer.record_sql` é definido como `obfuscated`, o que elimina os literais numéricos e de string.

        * Se você não quiser que o agente capture informações de consulta, defina como `none`.
        * Se quiser que o agente capture todas as informações da consulta em seu formato original, defina como `raw`.
        * Quando você ativa [o modo de alta segurança](#restricted), ele é automaticamente definido como `obfuscated`.
      </td>
    </tr>

    <tr>
      <td>
        [`strip_exception_messages.enabled`](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#strip_exception_messages-enabled)

        _boleano_
      </td>

      <td>
        Padrão: o valor da opção de configuração `high_security`

        Por padrão, isso é definido como `false`, o que significa que o agente envia mensagens de todas as exceções para o coletor New Relic. Se você ativar [o modo de alta segurança](#restricted), ele será automaticamente alterado para `true` e o agente removerá as mensagens das exceções.

        Se você não estiver usando o modo de alta segurança, mas ainda quiser remover mensagens de todas as exceções, exceto aquelas na sua [lista de permissões](/docs/agents/ruby-agent/configuration/ruby-agent-configuration#strip_exception_messages-whitelist), defina como `true`.
      </td>
    </tr>
  </tbody>
</table>
