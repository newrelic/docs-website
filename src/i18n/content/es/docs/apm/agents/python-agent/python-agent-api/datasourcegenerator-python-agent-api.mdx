---
title: data_source_generator (API del agente Python)
type: apiDoc
shortDescription: Envuelve una fuente de datos generadora de datos métricos.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call is used to wrap a metric-data-generating data source.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.data_source_generator(name=None, **properties)
```

Envuelve una fuente de datos generadora de datos métricos.

## Descripción

Las API de fuente de datos proporcionan una manera de generar métricas utilizando una [APIde estilo pull](/docs/agents/python-agent/supported-features/python-custom-metrics#push-versus-pull-interfaces) en lugar de la API de estilo push implementada por [`record_custom_metric`](/docs/agents/python-agent/python-agent-api/record_custom_metric). Para obtener más información sobre por qué y cómo utilizar fuentes de datos para métrica personalizada, consulte [fuentes de datos de métrica personalizada](/docs/agents/python-agent/supported-features/python-custom-metrics#custom-metric-data-sources).

El decorador `data_source_generator` se utiliza para envolver una fuente de datos simple de generación de datos métricos que devuelve directamente un iterable/generador con la métrica para cada muestra. La función a la que se aplica el decorador no debe aceptar argumentos. Esto se usaría cuando no hay necesidad de retener información de estado entre llamadas para generar cualquier métrica, y donde una instancia de la fuente de datos se puede usar en múltiples aplicaciones.

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
        `name`

        _cadena_
      </td>

      <td>
        Opcional. El nombre de la fuente de datos. Esto se utiliza únicamente con fines de registro. Si no se proporciona, el valor predeterminado es el nombre invocable derivado de la función decorada.
      </td>
    </tr>

    <tr>
      <td>
        `properties`

        _diccionario_
      </td>

      <td>
        Opcional. Cualquier propiedad adicional para pasar a la fábrica de fuentes de datos.

        Los campos posibles para un diccionario son:

        * `count`
        * `total`
        * `min`
        * `max`
        * `sum_of_squares`
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Devuelve una función.

## Ejemplos

### Ejemplo de generador de fuente de datos [#example]

Un ejemplo del uso de `data_source_generator` para ajustar una función que devuelve valores métricos:

```py
import psutil
import os
 
@newrelic.agent.data_source_generator(name='Memory Usage')
def memory_metrics():
    pid = os.getpid()
    p = psutil.Process(os.getpid())
    m = p.get_memory_info()
    yield ('Custom/Memory/Physical', float(m.rss)/(1024*1024))
    yield ('Custom/Memory/Virtual', float(m.vms)/(1024*1024))
```
