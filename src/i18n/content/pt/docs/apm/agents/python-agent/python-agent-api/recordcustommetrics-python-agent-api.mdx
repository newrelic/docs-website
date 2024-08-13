---
title: record_custom_metrics (API do agente Python)
type: apiDoc
shortDescription: Registra um conjunto de métricas personalizadas.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a set of custom metrics.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```py
newrelic.agent.record_custom_metrics(metrics, application=None)
```

Registra um conjunto de métricas personalizadas.

## Descrição

Esta chamada grava um conjunto de [métricas personalizadas](/docs/agents/manage-apm-agents/agent-data/custom-metrics). Para registrar uma única métrica personalizada, consulte [`record_custom_metric`](/docs/agents/python-agent/python-agent-api/record_custom_metric).

A métrica passada pode ser qualquer objeto iterável que produza `(name, value)` tuplas. Por exemplo:

```py
def metrics():
    yield "Custom/Value-1", 1
    yield "Custom/Value-2", 2
    yield "Custom/Value-3", 3

newrelic.agent.record_custom_metrics(metrics())
```

Não há restrições quanto à definição do nome, mas é recomendável usar um prefixo `Custom/` . O valor métrico personalizado pode ser numérico, ou pode ser um dicionário correspondente a uma amostra de dados já agregada. Para obter mais informações sobre as regras `name` e `value` , consulte [`record_custom_metric`](/docs/agents/python-agent/python-agent-api/record_custom_metric).

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
        `metrics`

        _objeto iterável_
      </td>

      <td>
        Obrigatório. Conjunto de valores de métrica, que pode estar na forma de qualquer objeto iterável que produza `(name, value)` tuplas. Consulte o parâmetro [`record_custom_metric`](/docs/agents/python-agent/python-agent-api/record_custom_metric) para obter mais informações sobre regras e sugestões `name` e `value` .
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _corda_
      </td>

      <td>
        Opcional. Se a aplicação tiver o valor padrão `None`, o agente associa a métrica personalizada à aplicação pai da transação atual. Assim, você deve fornecer o aplicativo, a menos que este método seja usado no código para uma transação da web ou tarefa em segundo plano.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Nenhum.

## Exemplos

### Gravação métrica personalizada [#metrics-example]

```py
def metrics():
    yield 'Custom/Value-1', 1
    yield 'Custom/Value-2', 2
    yield 'Custom/Value-3', 3

newrelic.agent.record_custom_metrics(metrics())
```

## Visualizar e usar métrica personalizada

Para visualizar métrica personalizada, use [métrica e evento](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer) para pesquisar e filtrar por métrica personalizada, criar gráficos personalizáveis e adicionar esses gráficos ao painel do New Relic. Você pode usar nossa [API REST](/docs/apis/rest-api-v2/requirements/new-relic-rest-api-v2-getting-started) para recuperar e usar programaticamente dados métricos personalizados fora da interface. Também é possível [criar uma métrica personalizada condição do alerta](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-custom-metrics-alert-condition) para notificar você ou sua equipe quando sua métrica personalizada exceder valores específicos.
