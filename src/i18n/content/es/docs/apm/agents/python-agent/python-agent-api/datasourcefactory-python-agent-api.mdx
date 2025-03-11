---
title: data_source_factory (API del agente Python)
type: apiDoc
shortDescription: Envuelve una fuente de datos definida como fábrica.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call is used to wrap a data source defined as a factory.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
data_source_factory(name=None, **properties)
```

Envuelve una fuente de datos definida como fábrica.

## Descripción

Las API de fuente de datos proporcionan una manera de generar [datos de intervalo de tiempo de métrica](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#timeslice-data) utilizando una [APIde estilo pull](/docs/agents/python-agent/supported-features/python-custom-metrics#push-versus-pull-interfaces) en lugar de la API de estilo push implementada por `record_custom_metric`. Para obtener más información sobre por qué y cómo utilizar fuentes de datos para métrica personalizada, consulte [fuentes de datos de métrica personalizada](/docs/agents/python-agent/supported-features/python-custom-metrics#custom-metric-data-sources).

El decorador `data_source_factory` envuelve una fuente de datos definida como una fábrica. El decorador se puede aplicar a una clase o función. El constructor de clase o función debe aceptar argumentos de `settings` (ajustes de configuración para la fuente de datos) y `environ` (información sobre el contexto en el que se utiliza la fuente de datos).

El objeto resultante debe ser un invocable que devuelva directamente un iterable/generador con la métrica para cada muestra.

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

### ejemplo de data_source_factory [#example]

Un ejemplo:

```py
import os
import time
import multiprocessing

@newrelic.agent.data_source_factory(name='CPU Usage')
class CPUMetricsDataSource(object):

    def __init__(self, settings, environ):
        self.last_timestamp = None
        self.times = None
 
    def start(self):
        self.last_timestamp = time.time()
        self.times = os.times()
 
    def stop(self):
        self.last_timestamp = None
        self.times = None

    def __call__(self):
        if self.times is None:
            return

        now = time.time()
        new_times = os.times()
        elapsed_time = now - self.last_timestamp
        user_time = new_times[0] - self.times[0]
        utilization = user_time / (elapsed_time*multiprocessing.cpu_count())
        self.last_timestamp = now
        self.times = new_times

        yield ('Custom/CPU/User Time', user_time)
        yield ('Custom/CPU/User/Utilization', utilization)

newrelic.agent.register_data_source(CPUMetricsDataSource)
```
