---
title: set_error_group_callback (API del agente Python)
type: apiDoc
shortDescription: Este método permite que los grupos de errores dentro de la Errors Inbox se establezcan con un identificador específico.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Used for implementing error groups.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis [#syntax]

```py
newrelic.agent.set_error_group_callback(callback_function(exception, transaction_data))
```

Este método permite que los grupos de errores dentro de la Errors Inbox se establezcan con un identificador específico (o "huella digital").

## Requisitos [#requirements]

Agente Python versión 8.8.0 o superior.

## Descripción [#description]

Este extremo admite una única entrada, una devolución de llamada, que se utiliza para registrar grupos de errores. Esta devolución de llamada está definida por los clientes y debe aceptar la excepción que activó la [API`notice_error` ](/docs/agents/python-agent/python-agent-api/noticeerror-python-agent-api)del agente. Para anular esta configuración, llame a la API nuevamente y establezca la devolución de llamada en `None`.

## Parámetro para `set_error_group_callback` [#parameters-set-error-group-callback]

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
        `callback`

        _función invocable_
      </td>

      <td>
        Requerido. La función de devolución de llamada que desea definir. Utilice `None` para desarmar.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _Instancia de aplicación_
      </td>

      <td>
        Opcional. Si no se proporciona una instancia de aplicación, la función buscará la instancia de aplicación activada.
      </td>
    </tr>
  </tbody>
</table>

## Parámetro para la función de devolución de llamada definida por los clientes [#parameters-customer-defined-callback-function]

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
        `exception`

        _Excepción en tiempo de ejecución_
      </td>

      <td>
        Requerido. Esta sería la excepción de tiempo de ejecución que activó la [API`notice_error` ](/docs/agents/python-agent/python-agent-api/noticeerror-python-agent-api)del agente.
      </td>
    </tr>

    <tr>
      <td>
        `transaction_data`

        _diccionario_
      </td>

      <td>
        Requerido. Un diccionario de datos de transacciones capturados por el agente Python.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno [#return-values]

Cuando tenga éxito, la API agregará una cadena que representa el nombre del grupo de errores deseado como atributo del agente.

Si no tiene éxito, la API no agregará `error.group.name` como atributo del agente.

## Uso de ejemplo [#examples]

### Establecer devolución de llamada del grupo de errores [#error-group-callback-example]

Un ejemplo de uso de `set_error_group_callback`:

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
