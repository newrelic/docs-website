---
title: add_custom_attributes (API do agente Python)
type: apiDoc
shortDescription: Adiciona um ou mais atributos personalizados a uma transação.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call adds a custom attribute (key/value tuple) to a transaction.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.add_custom_attributes(items)
```

Adiciona vários atributos personalizados a uma transação.

## Descrição

Esta chamada registra um ou mais [atributo personalizado](/docs/new-relic-solutions/get-started/glossary/#attribute) (uma tupla de valor principal anexada à sua [transação](/docs/new-relic-solutions/get-started/glossary/#transaction)).

Atributo pode ser encontrado no APM se a transação estiver associada a um erro ou se for gerado um trace da transação para aquela transação. atributo também pode ser encontrado e consultado na interface do New Relic.

<Callout variant="important">
  Antes de criar um atributo personalizado, revise nossa lista de [termos reservados usados pelo NRQL](/docs/insights/event-data-sources/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
</Callout>

## Atributo

<table>
  <thead>
    <tr>
      <th width="25%">
        Atributo
      </th>

      <th>
        Descrição
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `items`

        _list_
      </td>

      <td>
        Obrigatório. Cada item da lista deve ser `tuple`, sendo o primeiro elemento uma _chave_ e o segundo seu _valor_. Cada chave é uma string que representa o nome de um atributo e cada valor correspondente é o valor a ser adicionado à transação atual para esse atributo. Os valores podem ser `int`, `float`, `string` ou `boolean`. Somente os primeiros 255 caracteres são retidos para chaves e valores.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Retornará `True` se todos os atributos foram adicionados com sucesso.

## Exemplos

### Adicionando atributo personalizado à tarefa em segundo plano [#custom-attribute-example]

Um exemplo de adição de atributo personalizado a uma [tarefa em segundo plano](/docs/agents/python-agent/python-agent-api/background_task):

```py
@newrelic.agent.background_task()
def send_request():
    response = requests.get("http://example.com")
    newrelic.agent.add_custom_attributes(
        [("url_path_status_code", response.status_code)]
    )
```

### Usando atributo personalizado para solucionar problemas [#attribute-troubleshooting]

Você também pode usar o atributo personalizado para solucionar problemas de desempenho. Por exemplo, você pode ver ocasionalmente um ritmo de resposta lento de um conjunto de instâncias do Memcache, mas não sabe qual instância está causando o problema. Você pode adicionar um atributo à transação indicando o servidor, assim:

```py
# Set server_ip to be the current server processing the transaction
newrelic.agent.add_custom_attributes([
    ("memcache_query_frontend_lookup", server_ip)
])
```
