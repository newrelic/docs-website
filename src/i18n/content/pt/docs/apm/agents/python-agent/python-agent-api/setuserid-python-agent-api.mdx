---
title: set_user_id (API do agente Python)
type: apiDoc
shortDescription: Este método é usado para rastreamento de usuários com Errors Inbox.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Used for user tracking with errors inbox.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe [#syntax]

```py
newrelic.agent.set_user_id(user_id)
```

Uma maneira padronizada de identificar um usuário final no evento `Transaction` com o método `set_user_id` .

Este método é usado para rastreamento de usuários, que é uma forma padronizada de identificar um usuário final no evento `Transaction` .

## Requisitos [#requirements]

Agente Python versão 8.8.0 ou superior.

## Descrição [#description]

Esta chamada é usada no contexto de uma transação para anexar um usuário final a uma transação específica ou evento de erro. Isso permite que os clientes obtenham insights sobre um determinado usuário final.

## Parâmetro [#parameters]

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
        `user_id`

        _corda_
      </td>

      <td>
        Obrigatório.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno [#return-values]

`None`.

Quando for bem-sucedido, a API adicionará o ID do usuário como um atributo do agente.

Se não tiver êxito, a API não adicionará `enduser.id` como um atributo do agente. Uma falha pode ocorrer por vários motivos:

* A transação atual não está habilitada.
* Nada foi fornecido como entrada para a API.
* Algo foi fornecido, mas não era uma corda.

## Exemplo de uso [#examples]

### Defina o ID do usuário dentro de uma tarefa em segundo plano [#set-user-id-example]

Um exemplo de uso de `set_user_id` dentro de um aplicativo Flask simples para definir o ID do usuário da transação:

```py
from flask import Flask
import newrelic.agent

app = Flask("Flask Test App")

@app.route("/")
def hello():
    try:
        newrelic.agent.set_user_id("my-user-id")
        raise ValueError("Oh no!")
    except:
        newrelic.agent.notice_error()
    return "Hello World!"

if __name__ == '__main__':
    app.run()
```

<img
  title="Example app with set_user_id with Flask"
  alt="Example app with set_user_id with Flask"
  src="/images/errors-inbox_screenshot-crop_python-set-user-id.webp"
/>
