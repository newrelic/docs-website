---
title: background_task (API del agente Python)
type: apiDoc
shortDescription: Se utiliza para instrumentar una tarea en segundo plano u otra transacción no web de tiempo de ejecución finito.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Used to instrument a background task or other non-web transaction of finite run time.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.background_task(application=None, name=None, group=None)
```

Se utiliza para instrumentar una tarea en segundo plano u otra transacción no web de tiempo de ejecución finito.

## Descripción

Este decorador de Python se puede utilizar para instrumentar tareas en segundo plano u otras [transacciones sin red](/docs/apm/transactions/intro-transactions/monitor-background-processes-other-non-web-transactions) de tiempo de ejecución finito. Por lo general, esto se utiliza para instrumentar actividades no web, como procesos de trabajo, sistemas basados en trabajos y secuencias de comandos independientes. Las tareas marcadas como en segundo plano se muestran como transacción no web en la UI de APM y separadas de transacción web.

<Callout variant="important">
  Si una función aún no está instrumentada, puede usar [`function_trace()`](/docs/apm/agents/python-agent/python-agent-api/functiontrace-python-agent-api) para crear una traza de función para esa función dentro de una tarea en segundo plano. O puede utilizar el [archivo de configuración](/docs/apm/agents/python-agent/custom-instrumentation/python-custom-instrumentation-config-file/#listing_functions) para instrumentar funciones no instrumentadas.
</Callout>

Si se llama a una función que utiliza el decorador de tareas en segundo plano dentro del contexto de una transacción web, entonces la transacción web se marca como una tarea en segundo plano. La medición del tiempo empleado comienza cuando se inicia la transacción web original.

Si no puede utilizar el decorador, uno de estos formatos de llamada puede resultar más útil:

* <DNT>
    **The context manager**
  </DNT>

  : Si las tareas a monitorear solo se determinarán en tiempo de ejecución (y no en el momento de importación), puede usar el administrador de contexto `BackgroundTask` para encapsular directamente la ejecución de un bloque de código. (Este es el administrador de contexto utilizado por `BackgroundTaskWrapper`).

* <DNT>
    **The wrapper**
  </DNT>

  : Si sabe de antemano dónde están las funciones específicas que desea rastrear, puede utilizar el decorador `background_task` . Pero si no conoce todas las funciones que deben trazarse (por ejemplo, si se buscan dinámicamente como parte de un sistema de enrutamiento), entonces debe usar `BackgroundTaskWrapper` para ajustar la función en ese momento. de inscripción o en el momento de la convocatoria.

* <DNT>
    **The path-based wrapper**
  </DNT>

  : El formulario contenedor basado en ruta es `wrap_background_task`.

Para obtener más información sobre las diferencias y los usos de estas formas de funciones, consulte [Formatos de llamada de variables](/docs/python-agent-api-different-call-forms).

## Parámetros

### Parámetro decorador y administrador de contexto [#main-params]

```py
newrelic.agent.background_task(application=None, name=None, group=None)
```

```py
newrelic.agent.BackgroundTask(application=None, name=None, group=None)
```

Parámetro para estas llamadas:

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
        `application`

        _Instancia de aplicación_
      </td>

      <td>
        Requerido. La aplicación bajo la cual se reportarán los datos. El valor predeterminado es `None`. Si se deja sin valor, se utilizará la aplicación especificada en la [configuración](/docs/agents/python-agent/installation-configuration/python-agent-configuration) del agente (archivo de configuración o variable de entorno).

        Para obtener más información sobre cómo generar un objeto de aplicación, consulte el método [`application()`](/docs/agents/python-agent/python-agent-api/application) .

        La aplicación, incluso si se especifica, aún se puede anular si `newrelic.app_name` está definido en el diccionario de entorno de solicitud por aplicación WSGI.
      </td>
    </tr>

    <tr>
      <td>
        `name`

        _cadena_
      </td>

      <td>
        Requerido. El nombre de la transacción. El valor predeterminado es `None`. De forma predeterminada, el nombre será el nombre de la función a la que se aplicó el decorador, pero puede anularlo proporcionando este nombre.
      </td>
    </tr>

    <tr>
      <td>
        `group`

        _cadena_
      </td>

      <td>
        Opcional. El `group` representa la estructura de nombres para el parámetro `name` . Esto se utiliza en la UI para establecer el [tipo de transacción](/docs/apm/applications-menu/monitoring/transactions-page#tx_functions).

        Si no se proporciona, el grupo tiene como valor predeterminado `Function` con la expectativa de que el nombre tenga el formato `module:class.function` o `module:function` y represente el nombre de la función que se está ejecutando. Si está creando un grupo personalizado, le recomendamos que le ponga el prefijo `Python/`.
      </td>
    </tr>
  </tbody>
</table>

### Parámetro de envoltura: [#wrapper-params]

```py
newrelic.agent.BackgroundTaskWrapper(wrapped, application=None, name=None, group=None)
```

`BackgroundTaskWrapper` toma los mismos [parámetros](#main-params) que el decorador `background_task` y este parámetro `wrapped` adicional:

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
        `wrapped`

        _método_
      </td>

      <td>
        Requerido. El método para ser trazada.
      </td>
    </tr>
  </tbody>
</table>

### Parámetro basado en ruta: [#path-based-params]

```py
newrelic.agent.wrap_background_task(module, object_path, application=None, name=None, group=None)
```

`wrap_background_task` toma el mismo [parámetro](#main-params) que el decorador `background_task` más estos parámetros adicionales:

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
        `module`

        _módulo_ o _cadena_
      </td>

      <td>
        Requerido. El módulo que contiene la función/actividad no web que está instrumentado.
      </td>
    </tr>

    <tr>
      <td>
        `object_path`

        _cadena_
      </td>

      <td>
        Requerido. La ruta al módulo.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### `background_task` ejemplo de decorador [#bg_task_example]

A continuación se muestra un ejemplo del uso del decorador `background_task` :

```py
@newrelic.agent.background_task()
def task():
    ...
```

### `BackgroundTask` ejemplo de administrador de contexto [#context-mgr-example]

Un ejemplo de uso de `BackgroundTask`:

```py
application = newrelic.agent.application()
name = newrelic.agent.callable_name(task)

with BackgroundTask(application, name):
    task()
```

Aquí hay otro ejemplo con más parámetros:

```py
application = newrelic.agent.register_application(timeout=10.0)

def execute_task(task_name):
    with newrelic.agent.BackgroundTask(application, name=task_name, group='Task'):
        ...
```

### `BackgroundTaskWrapper` ejemplo [#wrapper-example]

Un ejemplo de uso de `BackgroundTaskWrapper`:

```py
task = newrelic.agent.BackgroundTaskWrapper(get_next_task())
result = task(*args, **kwargs)
```

En este ejemplo, si esta llamada se realizó en una transacción web que está siendo monitoreada por un agente, la llamada reclasificará la transacción web como una tarea en segundo plano. Sin embargo, si la llamada se realizó en un subproceso o rutina en segundo plano, entonces se iniciaría la grabación de una nueva transacción de tarea en segundo plano que rastrea lo que ocurre hasta que regresa la llamada.

## Resolución de problemas

Si la transacción de la tarea en segundo plano no aparece en la UI, esto podría deberse a que la transacción creada por la tarea en segundo plano nunca se cerró o la tarea duró demasiado. Si una tarea en segundo plano se ejecuta durante más de 20 minutos, el servidor la descarta porque se considera demasiado antigua para conservarla. Las tareas en segundo plano no deben ejecutarse durante más de 20 minutos y, si lo hacen, deben dividirse en varias tareas en segundo plano.
