---
title: record_custom_metric (API do agente Python)
type: apiDoc
shortDescription: Registra uma única métrica personalizada.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a single custom metric.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxe

```PY
newrelic.agent.record_custom_metric(name, value, application=None)
```

Registra uma única métrica personalizada.

## Descrição

Esta chamada registra uma única [métrica personalizada](/docs/agents/manage-apm-agents/agent-data/custom-metrics). Para registrar um conjunto de métricas, consulte [`record_custom_metrics`](/docs/agents/python-agent/python-agent-api/record_custom_metrics).

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
        Obrigatório. Nome da métrica.

        Não há restrições quanto aos formatos de nomenclatura, mas recomendamos que você utilize um prefixo `Custom/` para seus nomes métricos personalizados. Isto ajuda você a diferenciar a métrica personalizada da métrica do monitor padrão em nossa interface, e também ajuda a solucionar problemas, se necessário.
      </td>
    </tr>

    <tr>
      <td>
        `value`

        _int_ ou _ditado_
      </td>

      <td>
        Obrigatório. O valor numérico da métrica. Pode ser um número inteiro, um float ou um dicionário de valores. Os campos possíveis para um dicionário são:

        * `count`
        * `total`
        * `min`
        * `max`
        * `sum_of_squares`
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _objeto de aplicativo_
      </td>

      <td>
        Opcional. O [objeto de aplicação](/docs/agents/python-agent/python-agent-api/application) correspondente ao app ao qual deseja associar a métrica. Se a aplicação tiver o valor padrão `None`, o agente registra a métrica personalizada na aplicação associada à transação atual. Assim, você deve fornecer o aplicativo, a menos que este método seja usado no código para uma transação da web ou tarefa em segundo plano.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Nenhum.

## Exemplos

### Registrando uma métrica personalizada usando o objeto de aplicativo [#app-object-example]

Para registar métrica personalizada a partir de um thread de fundo distinto ou outro código, deverá passar o [objecto de aplicação](/docs/agents/python-agent/python-agent-api/application) correspondente à aplicação à qual se pretende reportar a métrica personalizada.

```PY
import newrelic.agent
application = newrelic.agent.application()

newrelic.agent.record_custom_metric('Custom/my_favorite_number', 42, application)
```

## Visualizar e usar métrica personalizada

Para visualizar métrica personalizada, use [métrica e evento](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer) para pesquisar e filtrar por métrica personalizada, criar gráficos personalizáveis e adicionar esses gráficos ao painel do New Relic. Você pode usar nossa [API REST](/docs/apis/rest-api-v2/requirements/new-relic-rest-api-v2-getting-started) para recuperar e usar programaticamente dados métricos personalizados fora da interface. Também é possível [criar uma métrica personalizada condição do alerta](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-custom-metrics-alert-condition) para notificar você ou sua equipe quando sua métrica personalizada exceder valores específicos.
