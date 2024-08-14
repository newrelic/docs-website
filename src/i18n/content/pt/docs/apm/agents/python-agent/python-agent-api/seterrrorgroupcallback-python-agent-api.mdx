---
title: set_error_group_callback (API do agente Python)
type: apiDoc
shortDescription: Este método permite que grupos de erros na Errors Inbox sejam definidos para um identificador específico.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Used for implementing error groups.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe [#syntax]

```py
newrelic.agent.set_error_group_callback(callback_function(exception, transaction_data))
```

Este método permite que grupos de erros na Errors Inbox sejam definidos para um identificador específico (ou "impressão digital").

## Requisitos [#requirements]

Agente Python versão 8.8.0 ou superior.

## Descrição [#description]

Este endpoint recebe uma única entrada, um retorno de chamada, que é usado para registrar grupos de erros. Esse retorno de chamada é definido pelo cliente e deve aceitar a exceção que acionou a [API`notice_error` ](/docs/agents/python-agent/python-agent-api/noticeerror-python-agent-api)do agente. Para cancelar essa configuração, chame a API novamente e defina o retorno de chamada como `None`.

## Parâmetro para `set_error_group_callback` [#parameters-set-error-group-callback]

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
        `callback`

        _função que pode ser chamada_
      </td>

      <td>
        Obrigatório. A função de retorno de chamada que você deseja definir. Use `None` para desarmar.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _Instância do aplicativo_
      </td>

      <td>
        Opcional. Se uma instância do aplicativo não for fornecida, a função verificará a instância do aplicativo ativada.
      </td>
    </tr>
  </tbody>
</table>

## Parâmetro para função de retorno de chamada definida pelo cliente [#parameters-customer-defined-callback-function]

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
        `exception`

        _Exceção de tempo de execução_
      </td>

      <td>
        Obrigatório. Esta seria a exceção de tempo de execução que acionou a [API`notice_error` ](/docs/agents/python-agent/python-agent-api/noticeerror-python-agent-api)do agente.
      </td>
    </tr>

    <tr>
      <td>
        `transaction_data`

        _dicionário_
      </td>

      <td>
        Obrigatório. Um dicionário de dados de transação capturados pelo agente Python.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno [#return-values]

Quando bem-sucedida, a API adicionará uma string representando o nome do grupo de erros desejado como um atributo do agente.

Se não tiver êxito, a API não adicionará `error.group.name` como um atributo do agente.

## Exemplo de uso [#examples]

### Definir retorno de chamada do grupo de erros [#error-group-callback-example]

Um exemplo de uso de `set_error_group_callback`:

```py
def customer_callback(exc, data):
    if isinstance(exc, ValueError):
        return "group1"


def some_other_function():
    try:
        raise ValueError("Oh no!")
    except Exception:
       newrelic.agent.notice_error()


def example_function(customer_callback):
    try:
        newrelic.agent.set_error_group_callback(customer_callback)
        some_other_function()
    finally:
        newrelic.agent.set_error_group_callback(None)
```
