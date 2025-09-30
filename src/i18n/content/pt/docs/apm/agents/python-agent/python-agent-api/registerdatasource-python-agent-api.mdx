---
title: register_data_source (API do agente Python)
type: apiDoc
shortDescription: Cadastra uma fonte de dados para geração de dados métricos personalizados.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call registers a data source for pulling custom metric data from.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.register_data_source(source, application=None, name=None, settings=None, **properties)
```

Cadastra uma fonte de dados para geração de dados métricos personalizados.

## Descrição

Esta chamada registra uma fonte de dados a ser pesquisada na conclusão de cada [ciclo de colheita](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#harvest-cycle) para gerar [dados personalizados de métrica de fração de tempo](/docs/data-analysis/metrics/analyze-your-metrics/data-collection-metric-timeslice-event-data#timeslice-data). Para mais informações sobre por que e como usar fontes de dados para métrica personalizada, consulte [fontes de dados métrica personalizadas](/docs/agents/python-agent/supported-features/python-custom-metrics#custom-metric-data-sources).

<Callout variant="tip">
  Na maioria dos casos, você não precisará usar nenhum argumento opcional, exceto `name`.
</Callout>

As métricas retornadas por uma fonte de dados podem ser uma tupla `(name, value)` simples onde o valor é numérico ou float, ou o valor pode ser um dicionário que corresponde a uma amostra de dados já agregada para uma métrica específica.

Ao retornar um dicionário como valor da métrica, os campos que podem ser fornecidos são:

* `count`
* `total`
* `min`
* `max`
* `sum_of_squares`

Para mais informações sobre esses campos e algumas dicas gerais de uso, veja [Pré-métrica agregada](/docs/agents/python-agent/supported-features/python-custom-metrics#pre-aggregated-metrics).

<Callout variant="tip">
  Você também pode obter o mesmo resultado usando [a configuração do agente](/docs/agents/python-agent/installation-configuration/python-agent-configuration), que não exige alteração do código. Para adicionar a fonte de dados dessa forma, adicione uma seção no arquivo de configuração com o prefixo `data-source:`, seguido por um valor exclusivo para distinguir a seção de outra fonte de dados se mais de uma for especificada. Aqui está um exemplo:

  ```ini
  [data-source:memory-usage]enabled = true
  function = samplers:memory_metrics
  # application = ...
  # name = ...
  [data-source:cpu-usage]enabled = true
  function = samplers:CPUMetricsDataSource
  # application = ...
  # name = ...
  ```

  Se a fonte de dados fosse especificada por uma função, o nome seria `module:function`. Se fosse uma classe, seria: `module:class`. O módulo deve poder ser encontrado usando o caminho de pesquisa do módulo Python.

  Assim como acontece com `register_data_source`, o aplicativo para o qual relatar dados e o nome são opcionais.
</Callout>

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
        `source`

        _função_ ou _classe_
      </td>

      <td>
        Obrigatório. A fonte de dados, que é uma função ou classe que teve o decorador [`data_source_generator`](/docs/agents/python-agent/python-agent-api/data_source_generator) ou [`data_source_factory`](/docs/agents/python-agent/python-agent-api/data_source_factory) atribuído.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _objeto de aplicativo_
      </td>

      <td>
        Opcional. O objeto de aplicativo correspondente à conta do monitor New Relic para a qual relatar dados. Se definido como o padrão `None`, a fonte de dados será pesquisada no final de cada ciclo de coleta para cada aplicativo instrumentado. Alternativamente, quando um objeto de aplicação é fornecido, a fonte de dados será pesquisada apenas para gerar métricas para aquela aplicação específica.

        Nos casos em que você precisa de uma fonte de dados para reter dados distintos para cada aplicativo de relatório, você pode usar um padrão de fábrica para criar uma instância separada da fonte de dados para cada aplicativo.
      </td>
    </tr>

    <tr>
      <td>
        `name`

        _corda_
      </td>

      <td>
        Opcional. O nome da fonte de dados. Isso é usado apenas para fins de registro e será padronizado com o nome fornecido pela própria fonte de dados.
      </td>
    </tr>

    <tr>
      <td>
        `settings`

        _corda_
      </td>

      <td>
        Opcional. As configurações a serem passadas para uma fábrica de origem de dados.
      </td>
    </tr>

    <tr>
      <td>
        `properties`

        _corda_
      </td>

      <td>
        Opcional. Quaisquer propriedades adicionais a serem passadas para a fábrica de fontes de dados.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Nenhum.

## Exemplos

### Uso de memória da fonte de dados [#data-source-memory]

```py
import newrelic.agent
import psutil
import os

@newrelic.agent.data_source_generator(name='Memory_Usage')
def memory_metrics():
    pid = os.getpid()
    p = psutil.Process(os.getpid())
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
