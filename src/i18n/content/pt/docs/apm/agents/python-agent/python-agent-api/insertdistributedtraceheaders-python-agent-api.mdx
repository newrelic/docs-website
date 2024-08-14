---
title: insert_distributed_trace_headers (API do agente Python)
type: apiDoc
shortDescription: Este método é usado para inserir cabeçalhos usados para conectar transações dentro de um distributed trace.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: A call used to implement distributed tracing.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.insert_distributed_trace_headers(list_of_headers)
```

Este método é usado para inserir cabeçalhos usados para conectar transações dentro de um distributed trace.

## Requisitos

Agente Python versão 5.6.0.135 ou superior.

distributed tracing deve estar [ativado](/docs/enable-distributed-tracing#python).

## Descrição

Esta API requer [quedistributed tracing esteja ativado](/docs/enable-distributed-tracing).

Para obter instruções sobre como usar esta chamada, juntamente com sua chamada de parceiro [`accept_distributed_trace_headers`](/docs/agents/python-agent/python-agent-api/acceptdistributedtraceheaders-python-agent-api), consulte [Habilitar distributed tracing com API do agente](/docs/enable-distributed-tracing#agent-apis).

Esta chamada é usada para implementar distributed tracing. Ele insere cabeçalhos em uma lista que pode ser lida pelo aplicativo receptor com o método `accept_distributed_trace_headers` .

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
        `headers`

        _list_
      </td>

      <td>
        Obrigatório. Uma lista de cabeçalhos. Esta lista será modificada pela chamada (os cabeçalhos serão inseridos na lista na forma de `(header_name, header_value)`).
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Retorna `None`. A lista de entradas será atualizada por uma chamada a esta função.

## Exemplos

<Callout variant="important">
  Para manter a ordem adequada dos spans em um trace, você deve gerar a carga útil no contexto do span que a envia.
</Callout>

### Crie uma carga distributed trace dentro de uma tarefa em segundo plano [#function-trace-example]

Um exemplo de uso de `insert_distributed_trace_headers` na criação de um [rastreamento externo](/docs/agents/python-agent/python-agent-api/external-trace) a partir de uma única tarefa em segundo plano:

```py
@newrelic.agent.background_task()
def main(url):
    with newrelic.agent.ExternalTrace('my_external_library', url, method='GET'):
        # Generate the payload in the context of the ExternalTrace
        # span that sends it
        headers = []
        newrelic.agent.insert_distributed_trace_headers(headers)
        response = my_external_library._get(url, headers=headers)

    data = _process_response(response)
```

### Crie uma carga distributed trace dentro de um traceexterno [#function-trace-example]

Um exemplo de uso `insert_distributed_trace_headers` na criação de um [rastreamento externo](/docs/agents/python-agent/python-agent-api/external-trace):

```py
def _bind_url(url, *args, **kwargs):
    # _bind_url is called with the args and kwargs sent to the `get`
    # method below
    return url

@newrelic.agent.external_trace('my_external_library', _bind_url, method='GET')
def get(url):
    headers = []
    newrelic.agent.insert_distributed_trace_headers(headers)
    return my_external_library._get(url, headers=headers)
```
