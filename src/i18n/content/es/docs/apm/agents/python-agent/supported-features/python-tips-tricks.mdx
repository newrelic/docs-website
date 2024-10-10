---
title: Consejos y trucos de Python
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: 'How to use decorators and introspection, identify a transaction, or record custom metrics with the Python agent.'
freshnessValidatedDate: never
translationType: machine
---

Para ayudarle a aprovechar al máximo el uso del agente Python para monitor su aplicación web, a continuación se ofrecen algunos consejos y trucos.

## Decoradores e introspección [#decorators_and_introspection]

Al nombrar una transacción o un nodo de traza de función, el agente Python necesita hacer una introspección del nombre de la función que se llama. Cuando la función es una función sin formato o un método de clase, todo funciona bien. Sin embargo, si se ha aplicado un decorador a la función o al método de clase, si el decorador no se ha implementado para preservar la capacidad de realizar una introspección de la función envuelta, entonces el agente usará el nombre de la función envuelta del decorador en lugar de la función envuelta.

La forma típica en la que se implementa un decorador es utilizar el patrón:

```
def decorator(f):
    def _decorator():
        f()
    return _decorator

@decorator
def foo():
    pass
```

El problema con esta implementación es que si miramos el valor de `foo.__name__` será `_decorator` y no `foo`. Si el decorador está contenido en un módulo separado, mirando `foo.__module__` será el nombre del módulo en el que está declarado el decorador y no el nombre del módulo en el que está contenida la función encapsulada.

Para garantizar que los módulos y funciones tengan el nombre correcto, utilice el decorador `wraps()` del módulo <DNT>**functools**</DNT> de la biblioteca estándar para encapsular la función decoradora interna:

```
import functools

def decorator(f):
    @functools.wraps(f)
    def _decorator():
        f()
    return _decorator

@decorator
def foo():
    pass
```

Para obtener más información, consulte la [documentación](http://docs.python.org/library/functools.html#functools.wraps) de la función `wraps()` en el sitio web de Python.

## Identificar una transacción [#identifying_a_transaction]

Cuando el agente Python registra los detalles del error de una transacción o captura una traza lenta de la transacción, no existe un identificador único que pueda capturar para intentar correlacionarlo con otros datos que pueda registrar por separado para la transacción. Esto dificulta hacer coincidir la información de la UI con el registro de su propia aplicación web, por ejemplo.

Si desea poder realizar dicha coincidencia cruzada, o simplemente capturar en una transacción algún detalle adicional que pueda ser útil en esta situación, puede usar la API del agente para registrar un parámetro personalizado en la transacción. Si se produce un error o se registra una traza de la transacción lenta, que luego se muestra en la UI, estos parámetros adicionales que proporcione se mostrarán en la sección <DNT>**Custom parameters**</DNT> de los detalles del error o de la traza.

Para agregar dichos detalles adicionales, puede utilizar la función `add_custom_attribute()` en el módulo <DNT>**newrelic.agent**</DNT> .

<Callout variant="important">
  No utilice corchetes `[suffix]` al final del nombre de su transacción. el agente elimina automáticamente los corchetes del nombre. En su lugar, utilice paréntesis `(suffix)` u otros símbolos si es necesario.
</Callout>

Tomemos, por ejemplo, el siguiente código de la aplicación de encuestas en el tutorial framework web Django.

```
from django.shortcuts import render_to_response, get_object_or_404

def detail(request, poll_id):
    p = get_object_or_404(Poll, pk=poll_id)
    return render_to_response('polls/detail.html', {'poll': p})
```

Si quisiera registrar el ID de la encuesta en la transacción para que esté disponible si ocurre un problema, usaría:

```
import newrelic.agent

def detail(request, poll_id):
    newrelic.agent.add_custom_attribute('poll_id', poll_id)
    p = get_object_or_404(Poll, pk=poll_id)
    return render_to_response('polls/detail.html', {'poll': p})
```

El valor utilizado para un parámetro personalizado puede ser cualquier valor que pueda ser serializado por el codificador JSON proporcionado por el módulo <DNT>**json**</DNT> . Esto incluye tuplas, listas y diccionarios.

<DNT>**Recommendation:**</DNT> Restrinja los valores a valores enteros, flotantes o de cadena. Si utiliza estructuras de datos más complejas, evite intentar asociar una estructura de datos demasiado grande, ya que será necesario almacenarla en caché hasta que se recopile, empaquete y luego envíe a la aplicación principal.

También se prefieren los valores simples, porque si el valor no se puede serializar en JSON, es posible que se desperdicien los detalles del error o la transacción lenta.

## Grabación métrica personalizada [#recording_custom_metrics]

Solo podemos utilizar módulos de terceros disponibles públicamente para Python que conozcamos. Para ampliar la instrumentación de su propio código, utilice las técnicas descritas en [Agregar instrumentación de Python](/docs/agents/python-agent/supported-features/python-custom-instrumentation). Esto le brindará cobertura en los datos de desglose del rendimiento de la transacción web y en la lenta traza de la transacción.

Puede registrar datos de rendimiento arbitrarios a través de una llamada API (por ejemplo: datos de tiempo o recursos informáticos). Luego use [métricas y eventos ](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer)para crear gráficos y realizar un seguimiento de esa métrica. Puedes utilizar métrica personalizada para unificar tu monitoreo.

Para registrar métrica personalizada, utilice la función `record_custom_metric()` en el módulo <DNT>**newrelic.agent**</DNT> . Se necesitan dos argumentos, siendo el nombre de la métrica y el valor. El valor debe ser un valor entero o de punto flotante.

```
import newrelic.agent

def create_account(request, ...):
    ...
    newrelic.agent.record_custom_metric('Custom/Signups', 1)
    ...
    return render_to_response('...', ...)
```

Inicie la ruta del nombre de métrica `Custom/` para evitar colisiones namespace con métricas de agentes existentes (por ejemplo, `Custom/MyMetric`).

La métrica personalizada se agregará a lo largo de cada [ciclo de cosecha](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#harvest-cycle) y luego se enviará al [recolector](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector). En este caso, cada `1` se sumará para registrar la cantidad de registros en el ciclo de recolección.

Aunque la instrumentación de función traza se usaría para rastrear llamadas a funciones o el tiempo dedicado a un bloque de código, no permite gráficos personalizados separados. La métrica personalizada todavía se puede utilizar para registrar y trazar el tiempo relacionado con el tiempo que lleva algo.

Para facilitar esto, puede predefinir una clase de administrador de contexto para cronometrar y registrar la métrica.

```
class CustomMetricTimedNode(object):

    def __init__(self, name):
        self.name = name
        self.start_time = None
        self.end_time = None

    def __enter__(self):
        self.start_time = time.time()
        return self

    def __exit__(self, exc, value, tb):
        if not self.start_time:
            return
        self.end_time = time.time()
        duration = self.end_time - self.start_time
        newrelic.agent.record_custom_metric(self.name, duration)
```

Luego, esto se puede usar junto con una declaración `with` alrededor de un bloque de código.

```
def function():
    with CustomMetricTimedNode('Custom/TimedNode1'):
        time.sleep(0.01)
```

El administrador de contexto podría aplicarse a funciones creando un decorador de funciones.

```
def custom_metric_timed_node(name):
    def _decorator(f):
        @functools.wraps(f)
        def _wrapper(*args, **kwargs):
            with CustomMetricTimedNode(name):
                return f(*args, **kwargs)
        return _wrapper
    return _decorator
```

utilizándose como:

```
@custom_metric_timed_node('Custom/TimedNode2')
def function():
    time.sleep(0.01)
```

Al igual que cuando se agrega instrumentación para el seguimiento de funciones, se recomienda elegir nombres métricos dentro de un conjunto finito y de longitud relativamente pequeña. Debe evitar nombres que tengan un valor ilimitado, de lo contrario, su volumen dificulta mostrarlos de manera significativa. Una gran cantidad de nombres únicos también puede resultar en un uso excesivo de memoria y que el agente normalice forzosamente sus nombres para limitar la cantidad de nombres únicos que hay.

<Callout variant="caution">
  Recopilar demasiadas métricas puede afectar el rendimiento tanto de su aplicación como del agente. Para evitar posibles problemas con los datos, intente mantener el número total de métricas únicas introducidas por la instrumentación personalizada por debajo de 2000.
</Callout>
