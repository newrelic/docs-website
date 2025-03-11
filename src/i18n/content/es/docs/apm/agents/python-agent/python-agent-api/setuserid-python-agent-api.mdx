---
title: set_user_id (API del agente Python)
type: apiDoc
shortDescription: Este método se utiliza para el seguimiento de usuarios con Errors Inbox.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Used for user tracking with errors inbox.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis [#syntax]

```py
newrelic.agent.set_user_id(user_id)
```

Una forma estandarizada de identificar a un usuario final en el evento `Transaction` con el método `set_user_id` .

Este método se utiliza para el seguimiento de usuarios, que es una forma estandarizada de identificar a un usuario final en el evento `Transaction` .

## Requisitos [#requirements]

Agente Python versión 8.8.0 o superior.

## Descripción [#description]

Esta llamada se utiliza dentro del contexto de una transacción para vincular un usuario final a una transacción o evento de error en particular. Esto permite a los clientes obtener información valiosa sobre un usuario final en particular.

## Parámetros [#parameters]

<table>
  <thead>
    <tr>
      <th width="25%">
        Parámetro
      </th>

      <th>
        Descripción
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `user_id`

        _cadena_
      </td>

      <td>
        Requerido.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno [#return-values]

`None`.

Cuando tenga éxito, la API agregará el ID de usuario como atributo del agente.

Si no tiene éxito, la API no agregará `enduser.id` como atributo del agente. Una falla puede ocurrir por varias razones:

* La transacción actual no está habilitada.
* No se proporcionó nada como entrada a la API.
* Se proporcionó algo pero no era una cadena.

## Uso de ejemplo [#examples]

### Establecer ID de usuario dentro de una tarea en segundo plano [#set-user-id-example]

Un ejemplo del uso de `set_user_id` dentro de una aplicación Flask simple para configurar la identificación de usuario de la transacción:

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
