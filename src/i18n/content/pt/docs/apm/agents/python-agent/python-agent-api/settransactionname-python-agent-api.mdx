---
title: set_transaction_name (API do agente Python)
type: apiDoc
shortDescription: Define o nome da transação atual.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python agent API: This call sets the name of the current transaction.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.set_transaction_name(name, group=None, priority=None)
```

Define o nome da transação atual.

## Descrição

Esta chamada define o nome da transação atual.

Aqui está um exemplo que mostra uma maneira de implementar os parâmetros `name` e `group` :

```py
name = '%s/%s' % (controller, function)
group = 'Python/WebFramework/Controller'newrelic.agent.set_transaction_name(name, group)
```

O parâmetro de prioridade geralmente pode ser ignorado, a menos que você esteja implementando instrumentação personalizada para uma framework da Web onde pode haver vários pontos onde você deseja definir o nome (como middleware, manipuladores de visualização ou manipuladores de erros).

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
        `name`

        _corda_
      </td>

      <td>
        Obrigatório. Nome desejado para a transação atual. Consulte a [descrição](#description) para obter um exemplo de configuração do nome.
      </td>
    </tr>

    <tr>
      <td>
        `group`

        _corda_
      </td>

      <td>
        Opcional. O `group` representa a estrutura de nomenclatura do parâmetro `name` , que é usado para definir o [tipo de transação](/docs/apm/applications-menu/monitoring/transactions-page#tx_functions) na interface. Consulte a [descrição](#description) para obter um exemplo de configuração do grupo.

        Se não for fornecido, o grupo usará como padrão o nome `Function` na expectativa de que o nome tenha o formato `module:class.function` ou `module:function` e represente o nome da função que está sendo executada. Se você estiver criando um grupo personalizado, recomendamos prefixá-lo com `Python/`.

        A estrutura de nomenclatura usada para nomear a transação. Como esse valor é renderizado como parte de uma URL, a codificação não-ASCII deve ser evitada. O padrão é `Function`. Consulte [a descrição](#description) para obter mais informações sobre como usar isso.
      </td>
    </tr>

    <tr>
      <td>
        `priority`

        _int_
      </td>

      <td>
        Opcional. O valor de prioridade é usado para determinar qual nome é dado a uma transação. Números mais altos substituem números mais baixos. O valor padrão é `None`, o que significa que o nome da transação substitui qualquer valor existente. Se a prioridade for deixada como `None`, o novo nome sempre substituirá qualquer valor existente. Aqui está um exemplo de como funciona a prioridade:

        ```py
        newrelic.agent.set_transaction_name('first', 'Python/CustomGroup')
        # transaction name becomes 'first'.

        newrelic.agent.set_transaction_name('second', 'Python/CustomGroup', priority=10)
        # transaction name becomes 'second'. The priority becomes 10.

        newrelic.agent.set_transaction_name('third', 'Python/CustomGroup', priority=5)
        # transaction name is still 'second' because 5 < 10.

        newrelic.agent.set_transaction_name('fourth', 'Python/CustomGroup', priority=15)
        # transaction name becomes 'fourth' because 15 > 10. The priority becomes 15.

        newrelic.agent.set_transaction_name('fifth', 'Python/CustomGroup')
        # transaction name becomes 'fifth'. The priority remains 15.
        ```
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Nenhum.

## Exemplos

### Usando nome e parâmetro de grupo [#name-group-example]

Um exemplo que mostra uma maneira de implementar os parâmetros `name` e `group` :

```py
name = '%s/%s' % (controller, function) 
group = 'Python/WebFramework/Controller'

newrelic.agent.set_transaction_name(name, group)
```

### Configurando o nome usando current_transaction [#current-txn-example]

Um exemplo de uso `current_transaction` para definir o nome da transação atual:

```py
transaction = newrelic.agent.current_transaction()
new_transaction_name = transaction.name
newrelic.agent.set_transaction_name(new_transaction_name)
```
