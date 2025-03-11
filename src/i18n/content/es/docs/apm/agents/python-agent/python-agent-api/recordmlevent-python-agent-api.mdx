---
title: record_ml_event (API del agente Python)
type: apiDoc
shortDescription: Registra un evento personalizado de aprendizaje automático para usarlo en consultas
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a machine learning event for use in querying.'
freshnessValidatedDate: '2023-09-13T00:00:00.000Z'
translationType: machine
---

## Sintaxis

```py
newrelic.agent.record_ml_event(event_type, params, application=None)
```

Registra un evento de aprendizaje automático para usarlo en consultas

## Requisitos

Agente Python versión 9.1.0 o mas alto.

## Descripción

Esto registra un [evento](/docs/data-apis/understand-data/new-relic-data-types/#event-data) de aprendizaje automático que se puede ver y consultar en la UI de New Relic. Si desea utilizar esto fuera del contexto de una transacción de monitor, utilice el parámetro de aplicación.

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
        Requerido. El `event_type` define el nombre (o tipo) del evento de aprendizaje automático y debe ser una cadena. No se agrega ningún atributo adicional registrado para la transacción al evento de aprendizaje automático.
      </td>
    </tr>

    <tr>
      <td>
        `params`

        _dict_
      </td>

      <td>
        Requerido. Adjunta un atributo de aprendizaje automático al evento. Solo se agrega el atributo pasado como `params` . No se agrega ningún atributo adicional registrado para la transacción al evento de aprendizaje automático.
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

### Grabar evento de aprendizaje automático en tarea en segundo plano [#bg-task-event]

A continuación se muestra un ejemplo de grabación de un evento de aprendizaje automático asociado con una tarea en segundo plano:

```py
@newrelic.agent.background_task() 
def bg_task(): 
    # do some type of work in this background task...
    application = newrelic.agent.application()
    newrelic.agent.record_ml_event('your_event_type', {'param1':'value1'}, application)
```
