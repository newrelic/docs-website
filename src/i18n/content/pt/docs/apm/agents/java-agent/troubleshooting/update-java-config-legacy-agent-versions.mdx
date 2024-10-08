---
title: Atualizar configuração Java para versões do agente legado
type: troubleshooting
tags:
  - Agents
  - Java agent
  - Troubleshooting
metaDescription: 'New Relic Java agent versions earlier than 3.16.1: How to update your newrelic.yml file to the latest version of agent attribute configuration.'
freshnessValidatedDate: never
translationType: machine
---

## Problema

Você usa o agente Java versão 3.16.1 ou inferior e precisa atualizar para a [versão mais recente](/docs/release-notes/agent-release-notes/java-release-notes), mas usa opções de configuração obsoletas para configurar o atributo do agente.

## Solução

Em `newrelic.yml`, edite as propriedades de configuração usadas para compatibilidade com as versões mais recentes:

<table>
  <thead>
    <tr>
      <th width={200}>
        <DNT>
          **Deprecated property**
        </DNT>
      </th>

      <th>
        <DNT>
          **New property**
        </DNT>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `analytics_events`
      </td>

      <td>
        `transaction_events`

        A seção no arquivo de configuração <DNT>**newrelic.yml**</DNT> chamada `analytics_events` foi descontinuada. Use a seção `transaction_events` .
      </td>
    </tr>

    <tr>
      <td>
        `capture_params`
      </td>

      <td>
        `attributes.include: request.parameters.*`

        Por padrão, os parâmetros de solicitação não são enviados para o New Relic. Adicione `request.parameters.*` à lista `attributes.include` para ativar todos os parâmetros de solicitação. A propriedade `capture_params` foi descontinuada.
      </td>
    </tr>

    <tr>
      <td>
        `ignored_params`
      </td>

      <td>
        `attributes.exclude: request.parameters.{name}`

        Adicione cada chave de parâmetro de solicitação à lista `attributes.exclude` . Certifique-se de anexar a chave com `request.parameters`. A propriedade `ignored_params` foi descontinuada.
      </td>
    </tr>

    <tr>
      <td>
        `capture_messaging_params`
      </td>

      <td>
        `attributes.include: message.parameters.*`

        Por padrão, os parâmetros da fila de mensagens não são enviados para o New Relic. Anteriormente, definir `capture_messaging_params` como `true` ativaria o parâmetro da fila de mensagens. Agora você deve adicionar `message.parameters.*` à lista `attributes.include` .
      </td>
    </tr>

    <tr>
      <td>
        `ignored_messaging_params`
      </td>

      <td>
        `attributes.exclude: message.parameters.{name}`

        Anteriormente, você poderia definir `ignored_messaging_params` para uma lista de chaves de parâmetro de fila de mensagens a serem excluídas. Agora você deve incluir cada chave de parâmetro da fila de mensagens na lista `attributes.exclude` . Certifique-se de anexar a chave com `message.parameters`.
      </td>
    </tr>

    <tr>
      <td>
        `capture_attributes`
      </td>

      <td>
        `attributes.enabled`

        A antiga sinalização `capture_attributes` desativaria a coleta de atributos do usuário. Isso foi descontinuado. Use `attributes.enabled` em vez disso.
      </td>
    </tr>
  </tbody>
</table>

Neste exemplo, o agente Java coleta parâmetros de solicitação e os registra nos destinos tracer de transação e do coletor de erros. Isso emula a ativação das [opções de configuração legada no lado do servidor](/docs/agents/manage-apm-agents/configuration/server-side-agent-configuration) para `Capture attributes` ou `Capture parameters`.

Para personalizar o elemento [`attributes`](/docs/agents/java-agent/configuration/java-agent-configuration-config-file#attributes) no arquivo de configuração do agente Java:

```yml
attributes.enabled: true
attributes.include: request.parameters.*
```
