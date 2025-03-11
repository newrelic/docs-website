---
title: record_ml_event (API do agente Python)
type: apiDoc
shortDescription: Registra um evento personalizado de aprendizado de máquina para uso em consultas
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a machine learning event for use in querying.'
freshnessValidatedDate: '2023-09-13T00:00:00.000Z'
translationType: machine
---

## Sintaxe

```py
newrelic.agent.record_ml_event(event_type, params, application=None)
```

Registra um evento de aprendizado de máquina para uso em consultas

## Requisitos

Agente Python versão 9.1.0 ou mais alto.

## Descrição

Isso registra um [evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) de aprendizado de máquina que pode ser visualizado e consultado na interface do New Relic. Se desejar usar isso fora do contexto de uma transação de monitor, use o parâmetro aplicativo.

<Callout variant="important">
  Para limites e restrições em `event_type` e `params`, consulte [Limites e caracteres restritos](/docs/data-apis/custom-data/custom-events/apm-report-custom-events-attributes/#limits) e [Palavras reservadas](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
</Callout>

<Callout variant="important">
  Esta configuração é desativada quando [o modo de alta segurança](/docs/apm/agents/python-agent/getting-started/apm-agent-security-python/#restricted) está ativado.
</Callout>

## Parâmetro

<table>
  <thead>
    <tr>
      <th width="25%">
        Parâmetro
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `event_type`

        _corda_
      </td>

      <td>
        Obrigatório. O `event_type` define o nome (ou tipo) do evento de machine learning e deve ser uma string. Nenhum atributo adicional registrado para a transação é adicionado ao evento de aprendizado de máquina.
      </td>
    </tr>

    <tr>
      <td>
        `params`

        _dict_
      </td>

      <td>
        Obrigatório. Anexa atributos de aprendizado de máquina ao evento. Somente os atributo passados como `params` são adicionados. Nenhum atributo adicional registrado para a transação é adicionado ao evento de aprendizado de máquina.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _objeto_
      </td>

      <td>
        Opcional. Se desejar registrar um evento fora do contexto de uma transação de monitoramento, use isso para associar a chamada a um objeto de aplicativo específico. Um objeto de aplicativo pode ser obtido usando a função [`newrelic.agent.application`](/docs/apm/agents/python-agent/python-agent-api/application-python-agent-api/) .
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Nenhum.

## Exemplos

### Registrar evento de aprendizado de máquina em tarefa em segundo plano [#bg-task-event]

Aqui está um exemplo de gravação de um evento de aprendizado de máquina associado a uma tarefa em segundo plano:

```py
@newrelic.agent.background_task() 
def bg_task(): 
    # do some type of work in this background task...
    application = newrelic.agent.application()
    newrelic.agent.record_ml_event('your_event_type', {'param1':'value1'}, application)
```
