---
title: record_custom_metrics (API del agente Python)
type: apiDoc
shortDescription: Registra un conjunto de métricas personalizadas.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a set of custom metrics.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.record_custom_metrics(metrics, application=None)
```

Registra un conjunto de métricas personalizadas.

## Descripción

Esta llamada registra un conjunto de [métricas personalizadas](/docs/agents/manage-apm-agents/agent-data/custom-metrics). Para registrar una única métrica personalizada, consulte [`record_custom_metric`](/docs/agents/python-agent/python-agent-api/record_custom_metric).

La métrica pasada puede ser cualquier objeto iterable que produzca `(name, value)` tuplas. Por ejemplo:

```py
def metrics():
    yield "Custom/Value-1", 1
    yield "Custom/Value-2", 2
    yield "Custom/Value-3", 3

newrelic.agent.record_custom_metrics(metrics())
```

No hay restricciones para configurar el nombre, pero se recomienda utilizar un prefijo `Custom/` . El valor de la métrica personalizada puede ser numérico o puede ser un diccionario correspondiente a una muestra de datos ya agregada. Para obtener más información sobre las reglas `name` y `value` , consulte [`record_custom_metric`](/docs/agents/python-agent/python-agent-api/record_custom_metric).

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
        `metrics`

        _objeto iterable_
      </td>

      <td>
        Requerido. Conjunto de valores métricos, que puede tener la forma de cualquier objeto iterable que produzca `(name, value)` tuplas. Consulte el parámetro [`record_custom_metric`](/docs/agents/python-agent/python-agent-api/record_custom_metric) para obtener más información sobre las reglas y sugerencias `name` y `value` .
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _cadena_
      </td>

      <td>
        Opcional. Si la aplicación tiene el valor predeterminado de `None`, el agente asocia la métrica personalizada con la aplicación principal de la transacción actual. Por lo tanto, debe proporcionar la aplicación a menos que este método se utilice en el código para una transacción web o una tarea en segundo plano.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Ninguno.

## Ejemplos

### Grabación métrica personalizada [#metrics-example]

```py
def metrics():
    yield 'Custom/Value-1', 1
    yield 'Custom/Value-2', 2
    yield 'Custom/Value-3', 3

newrelic.agent.record_custom_metrics(metrics())
```

## Ver y utilizar métrica personalizada

Para ver métricas personalizadas, use [métrica y evento](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer) para buscar y filtrar por métricas personalizadas, crear gráficos personalizables y agregar esos gráficos al panel de New Relic. Puede utilizar nuestra [API REST](/docs/apis/rest-api-v2/requirements/new-relic-rest-api-v2-getting-started) para recuperar y utilizar mediante programación datos métricos personalizados fuera de la UI. También es posible [crear una condición de alerta métrica personalizada](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-custom-metrics-alert-condition) para notificarle a usted o a su equipo cuando su métrica personalizada exceda valores específicos.
