---
title: add_custom_span_attribute (API do agente Python)
type: apiDoc
shortDescription: Adiciona um atributo personalizado a um evento span.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call adds a custom attribute (key/value pair) to a transaction.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.add_custom_span_attribute(key, value)
```

Adiciona um atributo personalizado a um evento span.

## Descrição

Esta chamada registra um [atributo personalizado](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#attribute) (um par de valor principal anexado ao seu [evento span](/docs/using-new-relic/welcome-new-relic/get-started/glossary#span)).

Atributo pode ser encontrado no distributed tracing ou no APM se um rastreamento da transação for criado pela transação pai. atributo também pode ser [encontrado e consultado](/docs/query-your-data/explore-query-data/explore-data/introduction-querying-new-relic-data) na interface do New Relic.

<Callout variant="important">
  Antes de criar um atributo personalizado, revise nossa lista de [termos reservados usados pelo NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
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
        `key`

        _corda_
      </td>

      <td>
        Obrigatório. O nome da chave. Apenas os primeiros 255 caracteres são mantidos.
      </td>
    </tr>

    <tr>
      <td>
        `value`

        _string_, _inteiro_, _float_, _booleano_
      </td>

      <td>
        Obrigatório. O valor da string a ser adicionado ao evento span atual. Apenas os primeiros 255 caracteres são mantidos.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Retorna `True` se o atributo foi adicionado com sucesso. 

## Exemplos

### Adicionando atributo personalizado à tarefa em segundo plano [#custom-parameter-example]

Um exemplo de adição de atributo personalizado a uma [tarefa em segundo plano](/docs/agents/python-agent/python-agent-api/background_task):

```py
@newrelic.agent.background_task()
def send_request():
    with newrelic.agent.FunctionTrace(name='Trace'):
        newrelic.agent.add_custom_span_attribute('attribute', 'value')
```

### Usando o atributo span personalizado para solucionar problemas [#parameter-troubleshooting]

Você também pode usar o atributo personalizado para solucionar problemas de desempenho. Por exemplo, você pode ver ocasionalmente um ritmo de resposta lento de um conjunto de instâncias do Memcache, mas não sabe qual instância está causando o problema. Você pode adicionar um atributo ao span indicando o servidor, assim:

```py
# Set server_ip to be the current server processing the transaction

newrelic.agent.add_custom_span_attribute("memcache_query_frontend_lookup", server_ip)
```
