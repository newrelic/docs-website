---
title: data_source_factory (API do agente Python)
type: apiDoc
shortDescription: Agrupa uma fonte de dados definida como uma fábrica.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call is used to wrap a data source defined as a factory.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
data_source_factory(name=None, **properties)
```

Agrupa uma fonte de dados definida como uma fábrica.

## Descrição

As APIs de fonte de dados fornecem uma maneira de gerar [dados de métrica de fração de tempo](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#timeslice-data) usando uma [API de estilo pull](/docs/agents/python-agent/supported-features/python-custom-metrics#push-versus-pull-interfaces) em vez da API de estilo push implementada por `record_custom_metric`. Para mais informações sobre por que e como usar fontes de dados para métrica personalizada, consulte [fontes de dados métrica personalizadas](/docs/agents/python-agent/supported-features/python-custom-metrics#custom-metric-data-sources).

O decorador `data_source_factory` encapsula uma fonte de dados definida como uma fábrica. O decorador pode ser aplicado a uma classe ou função. O construtor ou função da classe deve aceitar argumentos de `settings` (definições de configuração para a fonte de dados) e `environ` (informações sobre o contexto no qual a fonte de dados está sendo usada).

O objeto resultante deve ser um chamável que retorne diretamente um iterável/gerador com a métrica para cada amostra.

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
        Opcional. O nome da fonte de dados. Isso é usado apenas para fins de registro. Se não for fornecido, o padrão é o nome que pode ser chamado derivado da função decorada.
      </td>
    </tr>

    <tr>
      <td>
        `properties`

        _dicionário_
      </td>

      <td>
        Opcional. Quaisquer propriedades adicionais a serem passadas para a fábrica de fontes de dados.

        Os campos possíveis para um dicionário são:

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

Retorna uma função.

## Exemplos

### exemplo data_source_factory [#example]

Um exemplo:

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
