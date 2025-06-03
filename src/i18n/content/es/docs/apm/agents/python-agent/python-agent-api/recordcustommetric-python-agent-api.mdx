---
title: record_custom_metric (API del agente Python)
type: apiDoc
shortDescription: Registra una única métrica personalizada.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a single custom metric.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```PY
newrelic.agent.record_custom_metric(name, value, application=None)
```

Registra una única métrica personalizada.

## Descripción

Esta llamada registra una única [métrica personalizada](/docs/agents/manage-apm-agents/agent-data/custom-metrics). Para registrar un conjunto de métricas, consulte [`record_custom_metrics`](/docs/agents/python-agent/python-agent-api/record_custom_metrics).

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
        Requerido. Nombre de la métrica.

        No hay restricciones en los formatos de nombres, pero le recomendamos utilizar un prefijo `Custom/` para sus nombres métricos personalizados. Esto le ayuda a diferenciar métrica personalizada de métrica de monitorización predeterminada en nuestra UI y también le ayuda a solucionar problemas si es necesario.
      </td>
    </tr>

    <tr>
      <td>
        `value`

        _int_ o _dict_
      </td>

      <td>
        Requerido. El valor numérico de la métrica. Puede ser un número entero, un flotante o un diccionario de valores. Los campos posibles para un diccionario son:

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

        _objeto de aplicación_
      </td>

      <td>
        Opcional. El [objeto de aplicación](/docs/agents/python-agent/python-agent-api/application) correspondiente a la app a la que se desea asociar la métrica. Si la aplicación tiene el valor predeterminado de `None`, el agente registra la métrica personalizada a la aplicación asociada con la transacción actual. Por lo tanto, debe proporcionar la aplicación a menos que este método se utilice en el código para una transacción web o una tarea en segundo plano.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Ninguno.

## Ejemplos

### Grabar una métrica personalizada utilizando el objeto de la aplicación [#app-object-example]

Para registrar métricas personalizadas desde un hilo de fondo distinto u otro código, debe pasar el [objeto de aplicación](/docs/agents/python-agent/python-agent-api/application) correspondiente a la aplicación a la que se reportarán las métricas personalizadas.

```PY
import newrelic.agent
application = newrelic.agent.application()

newrelic.agent.record_custom_metric('Custom/my_favorite_number', 42, application)
```

## Ver y utilizar métrica personalizada

Para ver métricas personalizadas, use [métrica y evento](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer) para buscar y filtrar por métricas personalizadas, crear gráficos personalizables y agregar esos gráficos al panel de New Relic. Puede utilizar nuestra [API REST](/docs/apis/rest-api-v2/requirements/new-relic-rest-api-v2-getting-started) para recuperar y utilizar mediante programación datos métricos personalizados fuera de la UI. También es posible [crear una condición de alerta métrica personalizada](/docs/alerts/new-relic-alerts/configuring-alert-policies/define-custom-metrics-alert-condition) para notificarle a usted o a su equipo cuando su métrica personalizada exceda valores específicos.
