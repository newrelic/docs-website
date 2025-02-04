---
title: profile_trace (API do agente Python)
type: apiDoc
shortDescription: Adiciona atributos adicionais aos nomes trace de função.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Functions for adding attributes to function trace names.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.profile_trace(name=None, group=None, label=None, params=None, depth=3)
```

Adiciona atributos adicionais aos nomes trace de função.

## Descrição

`profile_trace` é usado para adicionar mais detalhes ao seu [rastreamento da transação](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction-trace) na forma de segmentos adicionais. Todas as chamadas reportadas com `profile_trace` aparecerão na [página do banco de dadosAPM ](/docs/apm/applications-menu/monitoring/databases-slow-queries-page). `profile_trace` retorna uma [parte](https://docs.python.org/3.12/library/functools.html#functools.partial) de `ProfileTraceWrapper` que pode ser usada como um decorador para uma função para cronometrar chamadas ao seu profiler.

Se você não puder usar o decorador em seu aplicativo, poderá usar o seguinte formato de chamada: O formulário wrapper é `ProfileTraceWrapper`. Pode ser usado para retornar uma função encapsulada sem o uso de um decorador.

Para obter uma explicação sobre os usos desses diferentes formatos de chamada, consulte [Diferentes formatos de chamada](/docs/python-agent-api-different-call-forms). Consulte [Exemplos](#examples) para exemplos de chamadas.

<Callout variant="important">
  As funções são instrumentadas apenas no escopo da chamada de função especificada. Se uma função `function_a` for trace e chamar `function_b` , ela só será instrumentada dentro do escopo de `function_a` e não em qualquer outro lugar onde `function_b` for chamado, mas não trace.
</Callout>

## Parâmetro

### Parâmetro para decorador [#main-parameters]

```py
newrelic.agent.profile_trace(name=None, group=None, label=None, params=None, depth=3)
```

Esta chamada inclui estes parâmetros:

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
        `name`

        *corda*
      </td>

      <td>
        Opcional. O nome da função. Se não for definido, o padrão será o nome capturado da função.
      </td>
    </tr>

    <tr>
      <td>
        `group`

        *corda*
      </td>

      <td>
        Opcional. O `group` representa a estrutura de nomenclatura do parâmetro `name` . Isto é usado na interface para segregar os [tipos de transação](/docs/apm/applications-menu/monitoring/transactions-page#tx_functions).

        Se não for fornecido, o grupo terá como padrão `Function` na expectativa de que o nome tenha o formato `module:class.function` ou `module:function` e represente o nome da função que está sendo executada. Se você estiver criando um grupo personalizado, é recomendável prefixá-lo com `Python/`.
      </td>
    </tr>

    <tr>
      <td>
        `label`

        *corda*
      </td>

      <td>
        Opcional. Adiciona um sinalizador de estilo callout ao segmento em um rastreamento de transação. O padrão é `None`.
      </td>
    </tr>

    <tr>
      <td>
        `params`

        *dict*
      </td>

      <td>
        Opcional. Parâmetro personalizado a ser adicionado ao segmento no rastreamento da transação.
      </td>
    </tr>

    <tr>
      <td>
        `depth`

        *dict*
      </td>

      <td>
        Opcional. parâmetro para profundidade máxima trace da função. O padrão é 3.
      </td>
    </tr>
  </tbody>
</table>

### Parâmetro do wrapper

```py
newrelic.agent.ProfileTraceWrapper(wrapped, name=None, group=None, label=None, params=None, depth=3)
```

Os parâmetros do wrapper incluem todos [os parâmetros](#main-parameters) para `profile_trace` e um parâmetro `wrapped` :

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
        `wrapped`

        *função*
      </td>

      <td>
        Obrigatório. A função que está sendo encapsulada.
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### `profile_trace` [#trace\_example][#trace_example]

Um exemplo de uso do decorador `profile_trace` :

```py
import newrelic.agent

@newrelic.agent.profile_trace()
def some_function():
    ...
```

### Exemplo de wrapper [#trace-wrap-example]

Um exemplo de uso do `ProfileTraceWrapper`:

```py
import newrelic.agent

def another_function():
    wrapped_function = newrelic.agent.ProfileTraceWrapper(some_function)
    ...
    wrapped_function()
    ...
```