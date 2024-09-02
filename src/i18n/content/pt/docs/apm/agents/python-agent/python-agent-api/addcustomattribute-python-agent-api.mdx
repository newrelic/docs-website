---
title: add_custom_attribute (API do agente Python)
type: apiDoc
shortDescription: Adiciona um atributo personalizado a uma transação.
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
newrelic.agent.add_custom_attribute(key, value)
```

Adiciona um [atributo personalizado](/docs/data-apis/custom-data/custom-events/collect-custom-attributes/) a uma transação.

## Descrição

Esta chamada registra um [atributo personalizado](/docs/new-relic-solutions/get-started/glossary/#attribute) (um par de valor principal anexado à sua [transação](/docs/new-relic-solutions/get-started/glossary/#transaction)).

Atributo pode ser encontrado no APM se a transação estiver associada a um erro ou se for gerado um trace da transação para aquela transação. atributo também pode ser encontrado e consultado na interface do New Relic.

<Callout variant="important">
  Antes de criar um atributo personalizado, revise nossa lista de [termos reservados usados pelo NRQL](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
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
        Obrigatório. O valor da string a ser adicionado à transação atual. Apenas os primeiros 255 caracteres são mantidos.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Retorna `True` se o atributo foi adicionado com sucesso. 

## Exemplos

### Adicionando atributo personalizado à tarefa em segundo plano [#custom-attribute-example]

Um exemplo de adição de atributo personalizado a uma [tarefa em segundo plano](/docs/agents/python-agent/python-agent-api/background_task):

```py
@newrelic.agent.background_task()
def send_request(): 
    response = requests.post('http://URL_path', headers=headers, data=data) 
    newrelic.agent.add_custom_attribute('url_path_status_code', response.status_code)
```

### Usando atributo personalizado para solucionar problemas [#attribute-troubleshooting]

Você também pode usar o atributo personalizado para solucionar problemas de desempenho. Por exemplo, você pode ver ocasionalmente um ritmo de resposta lento de um conjunto de instâncias do Memcache, mas não sabe qual instância está causando o problema. Você pode adicionar um atributo à transação indicando o servidor, assim:

```py
# Set server_ip to be the current server processing the transaction

newrelic.agent.add_custom_attribute("memcache_query_frontend_lookup", server_ip)
```
