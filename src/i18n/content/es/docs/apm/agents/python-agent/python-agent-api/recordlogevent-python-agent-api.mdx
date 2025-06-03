---
title: record_log_event (API del agente Python)
type: apiDoc
shortDescription: Graba un registro de eventos para usarlo al iniciar sesión en contexto
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call records a log event for use in logging in context.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.record_log_event(message, level=None, timestamp=None, attributes=None, application=None, priority=None)
```

Graba un registro de eventos para usarlo al iniciar sesión en contexto.

## Requisitos

Agente Python versión 8.5.0 o superior.

## Descripción

Esto registra un [registro de eventos](/docs/logs/logs-context/configure-logs-context-python) que se puede ver y consultar en la UI de New Relic. Si desea utilizar esto fuera del contexto de una transacción de monitor, utilice el parámetro `application` .

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
        `message`

        _cadena_, _diccionario_
      </td>

      <td>
        Requerido. El `message` que define el mensaje de log. Para los valores del diccionario, se extraerá la clave `message` si está disponible y cualquier otro elemento se considerará atributo de datos de contexto bajo el prefijo `message.`.

        Para informar estos atributos, [habilite el reenvío de datos de contexto](/docs/agents/python-agent/configuration/python-agent-configuration#application_logging.forwarding.context_data.enabled) y, opcionalmente, configure reglas [de inclusión](/docs/agents/python-agent/configuration/python-agent-configuration#application_logging.forwarding.context_data.include) y [exclusión](/docs/agents/python-agent/configuration/python-agent-configuration#application_logging.forwarding.context_data.exclude) .
      </td>
    </tr>

    <tr>
      <td>
        `level`

        _cadena_
      </td>

      <td>
        Opcional. Define el nivel de registro. El valor predeterminado es `UNKNOWN`.
      </td>
    </tr>

    <tr>
      <td>
        `timestamp`

        _Flotante_
      </td>

      <td>
        Opcional. Define la timestamp del mensaje de log. El valor predeterminado es `time.time()`.
      </td>
    </tr>

    <tr>
      <td>
        `attributes`

        _diccionario_
      </td>

      <td>
        Opcional. Los elementos incluidos en este diccionario se considerarán atributos de datos de contexto bajo el prefijo `context.`.

        Para informar estos atributos, [habilite el reenvío de datos de contexto](/docs/agents/python-agent/configuration/python-agent-configuration#application_logging.forwarding.context_data.enabled) y, opcionalmente, configure reglas [de inclusión](/docs/agents/python-agent/configuration/python-agent-configuration#application_logging.forwarding.context_data.include) y [exclusión](/docs/agents/python-agent/configuration/python-agent-configuration#application_logging.forwarding.context_data.exclude) .
      </td>
    </tr>

    <tr>
      <td>
        `application`

        _objeto_
      </td>

      <td>
        Opcional. Si desea registrar un registro de eventos fuera del contexto de una transacción de monitor, utilícelo para asociar la llamada con un objeto de aplicación específico. Se puede obtener un objeto de aplicación utilizando la función [`newrelic.agent.application`](/docs/agents/python-agent/python-agent-api/application) .
      </td>
    </tr>

    <tr>
      <td>
        `priority`

        _objeto_
      </td>

      <td>
        Opcional. Establece la prioridad del registro de eventos. Consulte [`event_harvest_config.harvest_limits.log_event_data`](/docs/apm/agents/python-agent/configuration/python-agent-configuration#event_harvest_config.harvest_limits.log_event_data) para obtener información adicional sobre cómo la prioridad afecta el evento de registro.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Ninguno.

## Ejemplos

### Grabar registro de eventos en tarea en segundo plano [#bg-task-event]

A continuación se muestra un ejemplo de grabación de un registro de eventos asociado con una tarea en segundo plano:

```py
@newrelic.agent.background_task()
def bg_task():
    # do some type of work in this background task...
    application = newrelic.agent.application()
    newrelic.agent.record_log_event('My log message.', application)
```

### Registro de registro de eventos en transacción [#transaction-event]

Un ejemplo de grabación de un log de eventos dentro de una transacción:

```py
def fetch():
    newrelic.agent.record_log_event('Fetching data.')
    # do some type of work in this transaction...
```

### Registro de registro de eventos con atributo de datos de contexto [#context-data-example]

Aquí hay un ejemplo de grabación de un registro de evento usando el atributo de mensaje y el atributo de contexto:

```py
def fetch(product_id):
    newrelic.agent.record_log_event({"message": "Fetching data", "product_id": product_id}, attributes={"thread_id": threading.get_ident()})
    # do some type of work in this transaction...
```
