---
title: function_trace (API del agente Python)
type: apiDoc
shortDescription: 'Se utiliza para instrumentar funciones, métodos, generadores y corrutinas que no están instrumentadas de forma predeterminada.'
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: Functions for adding functions and class methods to a transaction.'
freshnessValidatedDate: never
translationType: machine
---

## Sintaxis

```py
newrelic.agent.function_trace(name=None, group=None, label=None, params=None, terminal=False)
```

Se utiliza para instrumentar funciones, métodos, generadores y corrutinas que no están instrumentadas de forma predeterminada.

## Descripción

`function_trace` es un decorador para agregar funciones, métodos, generadores y corrutinas. Agregar este decorador le permite recopilar información adicional [sobre la transacción](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#transaction) (incluida la información de la traza de la transacción). (Una forma alternativa de acceder a las funciones del instrumento sin tener que tocar el código de la aplicación es [enumerarlas en el archivo de configuración](/docs/agents/python-agent/custom-instrumentation/python-custom-instrumentation-config-file)).

`function_trace` no le brinda un perfil completo de todas las funciones que ocurren en una función decorada. Lo que hace es agregar la función decorada como un nodo en la UI de New Relic y capturar el tiempo dedicado a esa función. Si necesita más detalles sobre lo que sucede en esa función, también deberá aplicar la función traza a las funciones secundarias de la función.

El decorador `function_trace` se puede utilizar en generadores y corrutinas con la versión del agente 2.102.0.85 o superior. El tiempo de estos objetos comienza cuando comienza el consumo y finaliza cuando el objeto se agota o sale del alcance. Este es un cambio con respecto a versiones anteriores donde la métrica representaba el tiempo necesario para crear el generador o el objeto de rutina.

Puede utilizar el decorador junto con decoradores existentes, incluidos los de métodos estáticos y de clase. Al anidar varios decoradores, tenga el decorador `function_trace` como el decorador más externo.

<Callout variant="important">
  Para cualquier decorador que se esté empaquetando, use `functools.wraps()` de la biblioteca estándar de Python en su implementación. (O, de lo contrario, asegúrese de que el decorador propague el atributo de nombre correcto del objeto envuelto más interno requerido para permitir la introspección de nombres correcta). Si no se hace esto, cuando se informe la métrica, se utilizará el nombre de la función decoradora anidada (no la función envuelta más interna).
</Callout>

## Formularios de llamada alternativos [#alternate]

Para configuraciones en las que no puede utilizar el decorador, estos formularios de llamada alternativos están disponibles:

### El administrador de contexto [#context-manager]

El administrador de contexto `FunctionTrace` se utiliza cuando el parámetro a pasar no se puede determinar antes del tiempo de ejecución. (Por ejemplo, es posible que no sepa el nombre de una función en el momento de la importación). Cuando utilice el administrador de contexto para nombrar una métrica, siempre debe proporcionar el nombre y el prefijo de la ruta de la métrica.

La clase `FunctionTrace` implementa el administrador de contexto y se usa junto con la declaración `with` . La clase `FunctionTrace` es la primitiva de nivel más bajo disponible para rastrear el tiempo de una transacción.

La declaración `with` define los límites de lo que está cronometrado y no una sola función. Por tanto, el administrador de contexto podría aplicarse a un bloque de código arbitrario. Por lo tanto, el bloque de código podría contener llamadas a múltiples funciones, o podría ser un bloque de código autónomo que implemente un algoritmo orientado al tiempo del que desea realizar un seguimiento.

<Callout variant="important">
  Evite rastrear bloques de código que se llamen una cantidad excesiva de veces. Por ejemplo, no lo utilice dentro del contexto de un bucle que se ejecuta muchas veces. Los datos generados generarán una sobrecarga de rendimiento. Una mejor solución es cerrar el bucle.
</Callout>

### The wrapper

Si sabes de antemano dónde están las funciones específicas que deseas trazar, puedes usar el decorador `function_trace` . Sin embargo, si <DNT>**don't**</DNT> conoce todas las funciones que deben trazarse (por ejemplo, si se buscan dinámicamente como parte de un sistema de enrutamiento), entonces debe usar `FunctionTraceWrapper` para ajustar la función en el en el momento de la inscripción o en el momento de la convocatoria.

### Envoltura basada en rutas [#path-based]

`wrap_function_trace` se utiliza para encapsular funciones fuera del código en el que están declaradas. Por ejemplo: podrías usar esto para instrumentar el código de la biblioteca que no deseas modificar.

Para obtener más información sobre las diferencias entre estos formatos de llamadas, consulte [Diferentes formatos de llamadas](/docs/python-agent-api-different-call-forms).

## Parámetros

### Parámetro para decorador [#main-parameters]

```py
newrelic.agent.function_trace(name=None, group=None, label=None, params=None, terminal=False)
```

Esta convocatoria incluye estos parámetros:

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
        Opcional. El nombre de la función. Si no se establece, el valor predeterminado es el nombre capturado de la función.
      </td>
    </tr>

    <tr>
      <td>
        `group`

        _cadena_
      </td>

      <td>
        Opcional. El `group` representa la estructura de nombres para el parámetro `name` . Esto se utiliza en la UI para segregar los [tipos de transacciones](/docs/apm/applications-menu/monitoring/transactions-page#tx_functions).

        Si no se proporciona, el grupo tomará de forma predeterminada `Function` con la expectativa de que el nombre tenga el formato `module:class.function` o `module:function` y represente el nombre de la función que se está ejecutando. Si está creando un grupo personalizado, se recomienda anteponerle el prefijo `Python/`.
      </td>
    </tr>

    <tr>
      <td>
        `label`

        _cadena_
      </td>

      <td>
        Opcional. Agrega una bandera de estilo rótulo al segmento en una traza de la transacción. El valor predeterminado es `None`.
      </td>
    </tr>

    <tr>
      <td>
        `params`

        _dict_
      </td>

      <td>
        Opcional. Parámetro personalizado para agregar al segmento en la traza de la transacción.
      </td>
    </tr>

    <tr>
      <td>
        `terminal`

        _booleano_
      </td>

      <td>
        Opcional. Si es verdadero, no se registrarán segmentos infantiles. El valor predeterminado es Falso.
      </td>
    </tr>
  </tbody>
</table>

### Parámetro para el administrador de contexto [#context-mgr-parameters]

```py
newrelic.agent.FunctionTrace(name, group=None, label=None, params=None, terminal=False)
```

El parámetro para el administrador de contexto incluye todos los [parámetros](#main-parameters) de `function_trace`. El parámetro `name` es obligatorio y no opcional.

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
        Requerido. El nombre de la función.
      </td>
    </tr>
  </tbody>
</table>

### Parámetro de envoltura

```py
newrelic.agent.FunctionTraceWrapper(wrapped, name=None, group=None, label=None, params=None, terminal=False)
```

Los parámetros para el contenedor incluyen todos [los parámetros](#main-parameters) para `function_trace` y un parámetro `wrapped` :

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

        _función_
      </td>

      <td>
        Requerido. La función que se está envolviendo.
      </td>
    </tr>
  </tbody>
</table>

### Parámetro de ajuste basado en ruta [#path-wrap-parameters]

```py
newrelic.agent.wrap_function_trace(module, object_path, name=None, group=None, label=None, params=None, terminal=False)
```

El parámetro incluye todos [los parámetros](#main-parameters) para `function_trace` y estos parámetros:

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

        _objeto_
      </td>

      <td>
        Requerido. El módulo que contiene la función a instrumentar.
      </td>
    </tr>

    <tr>
      <td>
        `object_path`

        _cadena_
      </td>

      <td>
        La ruta a la ubicación de la función.
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

### `function_trace` ejemplo [#trace_example]

Un ejemplo de uso del decorador `function_trace` :

```py
import newrelic.agent

class _Database(UserDict.DictMixin):

    ...

    @newrelic.agent.function_trace()
    def _commit(self):
        ...

@newrelic.agent.function_trace()
def open(file, flag=None, mode=0666):
...
```

Un ejemplo del uso del decorador `function_trace` con rutinas nativas:

```py
import newrelic.agent

class _Database(UserDict.DictMixin):

    ...

    @newrelic.agent.function_trace()
    async def _commit(self):
        ...

@newrelic.agent.function_trace()
async def open(file, flag=None, mode=0666):
...
```

### Ejemplo de administrador de contexto [#context-mgr-example]

Un ejemplo de uso del administrador de contexto `FunctionTrace` :

```py
import newrelic.agent

def dispatch_request(self, request):
    adapter = self.url_map.bind_to_environ(request.environ)
    try:
        endpoint, values = adapter.match()
        function = getattr(self, 'on_' + endpoint)
        with newrelic.agent.FunctionTrace(
                endpoint, 'Python/EndPoint'):
            return function(request, <DNT>**values)
    except HTTPException as e:
        return e
```

### Ejemplo de contenedor [#trace-wrap-example]

Un ejemplo de uso de `FunctionTraceWrapper`:

El enrutamiento de URL con Werkzeug produce un nombre que se usa primero para buscar dinámicamente un método de una clase usando `getattr()` y luego se invoca el resultado:

```py
def dispatch_request(self, request):
    adapter = self.url_map.bind_to_environ(request.environ)
    try:
        endpoint, values = adapter.match()
        return getattr(self, 'on_' + endpoint)(request, **</DNT>values)
    except HTTPException as e:
        return e
```

Si desea trazar la función extremo, puede reescribir esto como:

```py
import newrelic.agent

def dispatch_request(self, request):
    adapter = self.url_map.bind_to_environ(request.environ)
    try:
        endpoint, values = adapter.match()
        function = getattr(self, 'on_' + endpoint)
        function = newrelic.agent.FunctionTraceWrapper(function)
        return function(request, <DNT>**values)
    except HTTPException as e:
        return e
```

Si desea nombrar la métrica después del nombre del extremo (en lugar de nombrar la métrica según el identificador de la función que se llama), puede proporcionar el nombre que se usará más un prefijo de ruta de métrica alternativo cuando se cree el objeto `FunctionTraceWrapper` .

```py
import newrelic.agent

def dispatch_request(self, request):
    adapter = self.url_map.bind_to_environ(request.environ)
    try:
        endpoint, values = adapter.match()
        function = getattr(self, 'on_' + endpoint)
        function = newrelic.agent.FunctionTraceWrapper(
                function, name=endpoint, group='Python/EndPoint')
        return function(request, **</DNT>values)
    except HTTPException as e:
        return e
```

Para este ejemplo, si el extremo se llamara `help`, la métrica final sería:

```
Python/EndPoint/help
```

En el desglose del rendimiento de una transacción, la categoría sería `Python` y el nombre del segmento `EndPoint/help`. Ese nombre de segmento también aparecería en la lenta traza de la transacción como nombre del nodo.
