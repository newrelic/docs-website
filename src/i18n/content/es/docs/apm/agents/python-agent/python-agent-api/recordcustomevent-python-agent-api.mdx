---
title: record_custom_event (API del agente Python)
type: apiDoc
shortDescription: Registra un evento personalizado para utilizarlo en consultas.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a custom event for use in querying.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.record_custom_event(event_type, params, application=None)
```

Registra un evento personalizado para utilizarlo en consultas.

## Requisitos

Agente Python versión 2.60.0.46 o superior.

## Descripción

Esto registra un [evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) personalizado que se puede ver y consultar en la UI de New Relic. Si desea utilizar esto fuera del contexto de una transacción de monitor, utilice el parámetro de aplicación.

Para eventos de aprendizaje automático personalizados, consulte [la página record_ml_event](/docs/apm/agents/python-agent/python-agent-api/recordmlevent-python-agent-api) para obtener más información.

<Callout variant="important">
  Para conocer los límites y restricciones de `event_type` y `params`, consulte [Límites y caracteres restringidos](/docs/data-apis/custom-data/custom-events/apm-report-custom-events-attributes/#limits) y [Palabras reservadas](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
</Callout>

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
        `event_type`

        _cadena_
      </td>

      <td>
        Requerido. El `event_type` define el nombre (o tipo) del evento personalizado y debe ser una cadena. No se agregan atributos adicionales registrados para la transacción al evento personalizado.
      </td>
    </tr>

    <tr>
      <td>
        `params`

        _dict_
      </td>

      <td>
        Requerido. Añade atributo personalizado al evento. Solo se agrega el atributo pasado como `params` . No se agregan atributos adicionales registrados para la transacción al evento personalizado.
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _objeto_
      </td>

      <td>
        Opcional. Si desea registrar un evento fuera del contexto de una transacción de monitor, utilícelo para asociar la llamada con un objeto de aplicación específico. Se puede obtener un objeto de aplicación utilizando la función [`newrelic.agent.application`](/docs/apm/agents/python-agent/python-agent-api/application-python-agent-api/) .
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Ninguno.

## Ejemplos

### Grabar evento personalizado en tarea en segundo plano [#bg-task-event]

A continuación se muestra un ejemplo de grabación de un evento personalizado asociado con una tarea en segundo plano:

```py
@newrelic.agent.background_task() 
def bg_task(): 
    # do some type of work in this background task...
    application = newrelic.agent.application()
    newrelic.agent.record_custom_event('your_event_type', {'param1':'value1'}, application)
```

### Crear un evento personalizado de consulta eliminada [#event-example]

Un ejemplo de creación de un evento personalizado de consulta cerrada dentro de una función de registro de base de datos:

```PY
application = newrelic.agent.register_application(timeout=10)

def task_runner(): 
    event_type = "Killed_Query" 
    params = {'query_info':'select * from all_things;', 'killed_time': '2016-05-18 00:59:00', 'host': 'my_host'} 
    newrelic.agent.record_custom_event(event_type, params, application=application)
```
