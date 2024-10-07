---
title: insert_distributed_trace_headers (API del agente Python)
type: apiDoc
shortDescription: Este método se utiliza para insertar encabezados utilizados para conectar transacciones dentro de un rastreo distribuido.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: A call used to implement distributed tracing.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.insert_distributed_trace_headers(list_of_headers)
```

Este método se utiliza para insertar encabezados utilizados para conectar transacciones dentro de un rastreo distribuido.

## Requisitos

Agente Python versión 5.6.0.135 o superior.

rastreo distribuido debe estar [habilitado](/docs/enable-distributed-tracing#python).

## Descripción

Esta API requiere [que rastreo distribuido esté habilitado](/docs/enable-distributed-tracing).

Para obtener instrucciones sobre cómo utilizar esta llamada, junto con su llamada de socio [`accept_distributed_trace_headers`](/docs/agents/python-agent/python-agent-api/acceptdistributedtraceheaders-python-agent-api), consulte [Habilitar rastreo distribuido con API de agente](/docs/enable-distributed-tracing#agent-apis).

Esta convocatoria se utiliza para implementar rastreo distribuido. Inserta encabezados en una lista que la aplicación receptora puede leer con el método `accept_distributed_trace_headers` .

## Parámetros

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
        `headers`

        _lista_
      </td>

      <td>
        Requerido. Una lista de encabezados. Esta lista será mutada por la llamada (los encabezados se insertarán en la lista en forma de `(header_name, header_value)`).
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve `None`. La lista de entrada se actualizará mediante una llamada a esta función.

## Ejemplos

<Callout variant="important">
  Para mantener el orden correcto de los tramos en una traza, se debe generar la carga útil en el contexto del tramo que la envía.
</Callout>

### Crear una carga útil rastreo distribuida dentro de una tarea en segundo plano [#function-trace-example]

Un ejemplo del uso de `insert_distributed_trace_headers` para crear una [traza externa](/docs/agents/python-agent/python-agent-api/external-trace) desde una única tarea en segundo plano:

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

### Crear una carga útil rastreo distribuida dentro de una traza externa [#function-trace-example]

Un ejemplo del uso `insert_distributed_trace_headers` para crear una [traza externa](/docs/agents/python-agent/python-agent-api/external-trace):

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
