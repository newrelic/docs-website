---
title: asgi_application (API del agente Python)
type: apiDoc
shortDescription: Monitor transacciones web marcando el punto de entrada de la aplicación ASGI.
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Instruments an application''s WSGI entry point to capture web requests.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.asgi_application(application=None, name=None, group=None, framework=None)
```

Monitor transacciones web marcando el punto de entrada de la aplicación ASGI.

## Descripción

`asgi_application` es un decorador de Python utilizado para monitor transacciones web instrumentado el punto de entrada de la aplicación ASGI. El agente Python admite automáticamente [la mayoría de los marcos y servidores](/docs/agents/python-agent/getting-started/compatibility-requirements-python-agent) que utilizan ASGI. Si su framework o servidor web no es compatible, es posible que necesite utilizar esta API como parte del [proceso de integración avanzado](/docs/agents/python-agent/installation-configuration/python-agent-integration#manual-integration).

Si no puede utilizar el decorador `asgi_application` , puede utilizar uno de estos otros formatos de llamada:

* <DNT>
    **The wrapper:**
  </DNT>

  La llamada contenedora es `ASGIApplicationWrapper`. Puede utilizar el contenedor en más de un lugar para distintos componentes de la aplicación ASGI que pueden estar apilados. En ese caso, el primer contenedor encontrado marca el inicio de la transacción y el agente determina la aplicación de destino en función de ese primer contenedor (e ignora los siguientes).

* <DNT>
    **The path-based wrapper:**
  </DNT>

  La llamada contenedora basada en ruta es `wrap_asgi_application`. Úselo si no puede hacer referencia al objeto ASGI como una variable en el alcance de la instrumentación. Esto toma el mismo parámetro que el decorador con parámetros `module` y `object_path` adicionales.

Para obtener una explicación de los motivos para utilizar el decorador frente a los contenedores, consulte [Diferentes formatos de llamada](/docs/python-agent-api-different-call-forms).

## Parámetros

### Parámetro decorador

```py
newrelic.agent.asgi_application(application=None, name=None, group=None, framework=None)
```

El decorador `asgi_application` utiliza estos parámetros:

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

        _cadena_ u _objeto de aplicación_
      </td>

      <td>
        Opcional. El nombre de la aplicación para asociar con estos datos. El valor predeterminado es `None`. Si se deja sin valor, el agente usa el nombre de la aplicación [especificado en la configuración del agente](/docs/agents/python-agent/installation-configuration/python-agent-configuration#app_name).

        Si se proporciona una cadena, debe ser el nombre exacto de la aplicación y no puede ser una lista de nombres de aplicaciones. Para obtener más información sobre cómo generar un objeto de aplicación, consulte el método [`application`](/docs/agents/python-agent/python-agent-api/application) .
      </td>
    </tr>

    <tr>
      <td>
        `name`

        _cadena_
      </td>

      <td>
        Opcional, raramente usado. Establece un nombre de transacción para todas las solicitudes capturadas a través del punto de entrada ASGI. Generalmente no se usa, porque normalmente no se desea que todas las transacciones tengan el mismo nombre (consulte también [el tema de agrupación métrica](/docs/agents/manage-apm-agents/troubleshooting/metric-grouping-issues)).
      </td>
    </tr>

    <tr>
      <td>
        `group`

        _cadena_
      </td>

      <td>
        Opcional, raramente usado. El `group` representa la estructura de nombres para el parámetro `name` . Configurar esto crea una [subcategoría de tipo de transacción](/docs/apm/applications-menu/monitoring/transactions-page#tx_functions). Al igual que `name`, esto rara vez se debe utilizar porque normalmente no desea que toda la aplicación se informe como un nombre o categoría de transacción.
      </td>
    </tr>

    <tr>
      <td>
        `framework`

        _tupla_
      </td>

      <td>
        Opcional. Una tupla con dos cadenas que representan el nombre del framework y el número de versión. Por ejemplo: `('Flask', '0.12.2')`
      </td>
    </tr>
  </tbody>
</table>

### Parámetro de envoltura

```py
newrelic.agent.ASGIApplicationWrapper(wrapped, application=None, name=None, group=None, framework=None)
```

Esto toma todos los [parámetros](#decorator-parameters) requeridos por `asgi_application` además de un parámetro `wrapped` :

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

        _objeto_
      </td>

      <td>
        <DNT>**Required**</DNT>. El objeto ASGI que se va a empaquetar.
      </td>
    </tr>
  </tbody>
</table>

### Parámetro contenedor basado en ruta [#path-based-parameters]

```py
newrelic.agent.wrap_asgi_application(module, object_path, application=None, name=None, group=None, framework=None)
```

Además del [parámetro](#decorator-parameters) requerido por `asgi_application`, esta llamada requiere parámetros `module` y `object_path` adicionales:

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

        _objeto_ o _cadena_
      </td>

      <td>
        <DNT>**Required**</DNT>. El módulo que contiene el objeto ASGI.
      </td>
    </tr>

    <tr>
      <td>
        `object_path`

        _cadena_
      </td>

      <td>
        <DNT>**Required**</DNT>. Representa el método de clase o el método para buscar el objeto ASGI dentro de un archivo.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### asgi_application example [#decorator-example]

Un ejemplo de llamada del decorador sin el parámetro opcional `application` :

```py
@newrelic.agent.asgi_application()
async def application(scope, receive, send):
    await send(
        {
            "type": "http.response.start",
            "status": 200,
            "headers": [(b"Content-type", b"text/plain")]
        }
    )
    await send(
        {
            "type": "http.response.body",
            "body": b"Hello World!"
        }
    )
```

### Ejemplo de ASGIApplicationWrapper [#wrapper-example]

Un ejemplo del uso de `ASGIApplicationWrapper`, que puede ser necesario si el decorador `asgi_application` no funciona:

```py
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")
from django.core.asgi import get_asgi_application
application = get_asgi_application()

application = newrelic.agent.ASGIApplicationWrapper(application)
```

### wrap_asgi_application example [#path-based-example]

Un ejemplo de uso del contenedor basado en ruta:

```py
import newrelic.agent
newrelic.agent.initialize('newrelic.ini')

class Application:
   def __init__(self, scope):
      self.scope = scope

   async def __call__(self, receive, send):
      await send({"type": "http.response.start", "status": 200})
      await send({"type": "http.response.body", "body": b"Hello World!"})

newrelic.agent.wrap_asgi_application(__name__, 'Application')
```
