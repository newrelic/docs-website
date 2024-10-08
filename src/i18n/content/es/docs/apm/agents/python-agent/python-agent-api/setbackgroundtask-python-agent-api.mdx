---
title: set_background_task (API del agente Python)
type: apiDoc
shortDescription: Marca una transacción como "tarea en segundo plano".
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python agent API: This call changes a web transaction to a non-web "background task".'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.set_background_task(flag=True)
```

Marca una transacción como una "tarea en segundo plano".

## Descripción

Esta llamada clasifica una [transacción](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction) como una "tarea en segundo plano". Las transacciones marcadas como tareas en segundo plano son visibles en la UI como transacciones no web. También puede utilizar esta llamada para reclasificar una tarea en segundo plano del monitor como una transacción web, pasando el parámetro `False` .

Esta API reclasifica una transacción existente como una transacción de tarea en segundo plano. Si no existe ninguna transacción, esta llamada no funcionará.

La designación de "tarea en segundo plano" se utiliza normalmente para transacciones no web (por ejemplo: procesos de trabajo, sistemas basados en trabajos o secuencias de comandos independientes), pero es posible que también desee designar una transacción web como una "tarea en segundo plano" para separarla de su otra aplicación de transacción. Por ejemplo, tiene una transacción web de larga duración que está sesgando su puntuación Apdex o su tiempo de respuesta promedio.

El agente identifica una transacción de monitoreo como una transacción web o una tarea en segundo plano al inicio de la transacción, según el tipo de contenedor de punto de entrada que inició el monitoreo. Para crear una tarea en segundo plano inicialmente (en lugar de marcar una transacción web como tarea en segundo plano), usaría `background_task`. Para obtener un tutorial sobre cómo crear tareas en segundo plano, consulte [monitor tareas, secuencias de comandos y funciones que no sean web](/docs/agents/python-agent/supported-features/python-background-tasks).

<Callout variant="tip">
  También puede marcar una transacción web como tarea en segundo plano en el diccionario de entorno de WSGI. Para hacerlo, configure la clave `newrelic.set_background_task` para la solicitud específica en el diccionario de entorno WSGI pasado por el servidor WSGI en su aplicación WSGI de destino.
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
        `flag`

        _booleano_
      </td>

      <td>
        Opcional. El valor predeterminado es `True`. Utilice `False` para clasificar la transacción como una transacción web.
      </td>
    </tr>
  </tbody>
</table>

## Valores de retorno

Ninguno.

## Ejemplos

### Configurar la solicitud web como tarea en segundo plano [#bg-task-example]

Un ejemplo de configuración de una transacción web para una tarea en segundo plano que no sea web:

```py
def wsgi_app(environ, start_response):
    newrelic.agent.set_background_task()
```

### Reclasificar una tarea en segundo plano como una transacción web [#bg-task-example-2]

A veces, es posible que desees clasificar una tarea en segundo plano como una transacción web, para que puedas verla con tus otras transacciones web de la aplicación. Para hacer eso, agregue esta llamada donde se ejecuta una tarea en segundo plano del monitor:

```py
import newrelic.agent
newrelic.agent.set_background_task(False)
```
