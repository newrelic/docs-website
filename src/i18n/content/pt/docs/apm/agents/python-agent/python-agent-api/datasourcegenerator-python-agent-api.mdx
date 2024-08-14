---
title: data_source_generator (API do agente Python)
type: apiDoc
shortDescription: Envolve uma fonte de dados geradora de dados métricos.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call is used to wrap a metric-data-generating data source.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.data_source_generator(name=None, **properties)
```

Envolve uma fonte de dados geradora de dados métricos.

## Descrição

As APIs de origem de dados fornecem uma maneira de gerar métricas usando uma [API de estilo pull](/docs/agents/python-agent/supported-features/python-custom-metrics#push-versus-pull-interfaces) em vez da API de estilo push implementada por [`record_custom_metric`](/docs/agents/python-agent/python-agent-api/record_custom_metric). Para mais informações sobre por que e como usar fontes de dados para métrica personalizada, consulte [fontes de dados métrica personalizadas](/docs/agents/python-agent/supported-features/python-custom-metrics#custom-metric-data-sources).

O decorador `data_source_generator` é usado para agrupar uma fonte de dados simples de geração de dados métricos que retorna diretamente um iterável/gerador com a métrica para cada amostra. A função à qual o decorador é aplicado não deve receber argumentos. Isso seria usado onde não há necessidade de reter informações de estado entre chamadas para gerar métricas e onde uma instância da fonte de dados pode ser usada em vários aplicativos.

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

### Exemplo de gerador de fonte de dados [#example]

Um exemplo de uso de `data_source_generator` para agrupar uma função que retorna valores de métrica:

```py
import newrelic.agent
import psutil
import os

@newrelic.agent.data_source_generator(name='Memory_Usage')
def memory_metrics():
    pid = os.getpid()
    p = psutil.Process(pid)
    m = p.memory_info()
    yield ('Custom/Memory/Physical', float(m.rss) / (1024 * 1024))
    yield ('Custom/Memory/Virtual', float(m.vms) / (1024 * 1024))


@newrelic.agent.background_task()
def main():
    # Example code, business as usual
    print("Hello, world!")


if __name__ == "__main__":
    newrelic.agent.initialize(config_file="newrelic.ini")
    app = newrelic.agent.register_application()
    newrelic.agent.register_data_source(memory_metrics, app)
    
    main()
```
