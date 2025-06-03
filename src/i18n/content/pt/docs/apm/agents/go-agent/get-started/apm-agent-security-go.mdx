---
title: 'Segurança do agente APM: Go'
tags:
  - Agents
  - Go agent
  - Get started
metaDescription: How to customize the security levels for data sent to New Relic from your Go app.
freshnessValidatedDate: never
translationType: machine
---

As configurações de segurança padrão do agente New Relic Go fornecem automaticamente [segurança para seus dados APM](/docs/using-new-relic/new-relic-security/security/apm-agent-data-security) para garantir a privacidade dos dados e limitar o tipo de informação que a New Relic recebe. Você pode ter motivos comerciais para alterar essas configurações.

Se quiser restringir as informações que o New Relic recebe, você pode ativar [o modo de alta segurança](#restricted). Se o modo de alta segurança ou as configurações padrão não funcionarem para suas necessidades comerciais, você poderá aplicar configurações [personalizadas](#custom) .

Para obter mais informações sobre as medidas de segurança da New Relic, consulte nossa [documentação de segurança e privacidade](/docs/using-new-relic/new-relic-security/security/security-matters-data-privacy-new-relic) ou visite o [site de segurança da New Relic](https://newrelic.com/security).

## Configurações de segurança padrão [#default]

Por padrão, veja como o agente New Relic Go lida com os seguintes dados potencialmente confidenciais:

* Parâmetro de solicitação: O agente não captura o parâmetro de solicitação HTTP.
* [HTTPS](/docs/agents/go-agent/instrumentation/go-agent-configuration#use-tls): o agente se comunica com a New Relic usando HTTPS.

## Configurações do modo de alta segurança [#restricted]

Quando você [ativa o modo de alta segurança](/docs/agents/go-agent/instrumentation/go-agent-configuration#high_security), as [configurações de segurança padrão](#default) são bloqueadas para que o usuário não possa alterá-las. Além disso:

* Você não pode criar [eventos personalizados](/docs/agents/go-agent/features/create-custom-events-insights-go).
* O agente remove [mensagens de exceção de erros](https://github.com/newrelic/go-agent/blob/master/GUIDE.md#error-reporting).
* O agente remove `QueryParameters` dos segmentos do banco de dados.

## Configurações de segurança personalizadas [#custom]

<Callout variant="caution">
  Se você personalizar as configurações de segurança, isso poderá afetar a segurança do seu aplicativo.
</Callout>

Se precisar de configurações de segurança diferentes do modo padrão ou de alta segurança, você poderá personalizar estas configurações:

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
        [`HighSecurity`](/docs/agents/go-agent/instrumentation/go-agent-configuration#high_security)

        _boleano_
      </td>

      <td>
        Padrão: `false`

        Para ativar [o modo de alta segurança](#restricted), defina-o como `true` e [ative a alta segurança (V2)](/docs/agents/manage-apm-agents/configuration/high-security-mode#version2enabled). Isso restringe as informações que você pode enviar para a New Relic.
      </td>
    </tr>

    <tr>
      <td>
        [`Attributes.Enabled`](https://github.com/newrelic/go-agent/blob/master/config.go#L220)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Por padrão, você está enviando [algum atributo](/docs/agents/go-agent/instrumentation/go-agent-attributes#attributes) para a New Relic. Se você não deseja enviar esses atributos padrão para a New Relic, defina `Attributes.Enabled` como `false`.
      </td>
    </tr>

    <tr>
      <td>
        [`Attributes.Exclude`](/docs/agents/go-agent/instrumentation/go-agent-attributes#turn-attributes-on-off)

        _corda_
      </td>

      <td>
        Padrão: (nenhum)

        Se houver chaves de atributo específicas que você **não** deseja enviar para a New Relic no rastreamento da transação, identifique-as usando `Attributes.Exclude`. Isso restringe as informações enviadas à New Relic.

        Para exemplos de como desabilitar a gravação de cada atributo, veja suas descrições na [página de atributos do agente Go](/docs/agents/go-agent/instrumentation/go-agent-attributes#attributes).
      </td>
    </tr>

    <tr>
      <td>
        [`CustomInsightsEvents.Enabled`](/docs/agents/go-agent/instrumentation/go-agent-configuration#custom-insights-events-enabled)

        _boleano_
      </td>

      <td>
        Padrão: `true`

        Por padrão, o agente registra o evento enviado para a API de eventos usando [`RecordCustomEvent`](/docs/agents/go-agent/features/create-custom-events-insights-go). Se você ativar [o modo de alta segurança](#restricted), ele será automaticamente definido como `false`.
      </td>
    </tr>
  </tbody>
</table>
