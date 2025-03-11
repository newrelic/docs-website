---
title: Python métrica personalizada
tags:
  - Agents
  - Python agent
  - Supported features
metaDescription: How to record additional custom metrics with the Python agent using the agent API.
freshnessValidatedDate: never
translationType: machine
---

Métrica personalizada le permite registrar métricas arbitrarias utilizando API proporcionadas por el agente Python. Estos pueden usarse para registrar métricas relacionadas con las funciones comerciales implementadas por su aplicación web, o pueden ser métricas adicionales utilizadas para evaluar el desempeño de la aplicación web.

<DNT>**Recommendation:**</DNT> Para evitar posibles problemas con los datos, mantenga el número total de métricas únicas introducidas por métrica personalizada por debajo de 2000.

<Callout variant="important">
  Antes de utilizar métrica personalizada, se debe inicializar e integrar el agente con el proceso objetivo. Para obtener instrucciones, consulte [Integración del agente Python](/docs/agents/python-agent/installation-configuration/python-agent-integration).
</Callout>

## Grafica métrica personalizada

Para ver métricas personalizadas, [consulta tus datos](/docs/query-your-data/explore-query-data/explore-data/introduction-querying-new-relic-data) para buscar métricas y crear gráficos personalizables.

## Interfaces push versus pull

El agente Python proporciona dos formas diferentes de registrar métricas personalizadas. La primera es una API de estilo push donde puedes decidir cuándo registrar una métrica personalizada. La segunda es una API de estilo pull en la que usted registra una fuente de datos métrica personalizada y el agente sondea su código para obtener métrica una vez por [ciclo de recolección](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#harvest-cycle).

El API de estilo pull es importante cuando se necesita generar una tasa o utilización métrica durante el período del ciclo de cosecha. Esto se debe a que puede calcular correctamente la duración del ciclo de recolección y también asegurarse de que solo se registre una métrica para el ciclo de recolección.

## Grabar una sola métrica [#recording-a-custom-metric]

Para registrar una única métrica personalizada, el agente Python proporciona la función:

```
newrelic.agent.record_custom_metric(name, value, application=None)
```

Cuando se llama sin un objeto de aplicación como

```
newrelic.agent.record_custom_metric('Custom/Value', value)
```

entonces debe llamarse dentro del contexto de una transacción que está siendo monitoreada por el agente. Esto se debe a que se buscará la transacción actual y la métrica personalizada inicialmente se adjuntará a esa transacción.

Siempre que la transacción no se marque posteriormente para ser ignorada, la métrica personalizada se agregará con otras métricas para la aplicación a la que se informa la transacción, cuando se complete la transacción.

Si se llama a esta función API fuera del contexto de una transacción de monitoreo, como en un subproceso en segundo plano (que no se rastrea como una tarea en segundo plano), entonces la llamada no hace nada y los datos se descartan. Para poder registrar la métrica personalizada en tal situación, es necesario suministrar el objeto de solicitud correspondiente a la aplicación contra la cual se debe registrar la métrica personalizada.

```
application = newrelic.agent.register_application()

def report_custom_metrics():
    while True:
        newrelic.agent.record_custom_metric('Custom/Value', value(), application)
        time.sleep(60.0)

thread = threading.Thread(target=report_custom_metrics)
thread.setDaemon(True)
thread.start()
```

En el caso de registrar la métrica personalizada contra la transacción actual (al no proporcionar un objeto de aplicación), no se requiere bloqueo de subproceso en el momento de la llamada API, ya que la métrica personalizada se adjuntará inicialmente al objeto de la transacción. Sólo cuando se registra toda la transacción al finalizar es necesario adquirir un bloqueo de subproceso. Sin embargo, este es el mismo candado que se debe adquirir para fusionar todas las métricas de la transacción con la tabla métrica para el ciclo de cosecha actual. Por lo tanto, no se requiere ningún bloqueo adicional al que ya se requiere.

Sin embargo, cuando la llamada API recibe el objeto de la aplicación, es necesario adquirir un bloqueo para cada llamada para registrar una métrica personalizada. Por lo tanto, grabar métricas una a la vez de esta manera para una gran cantidad de métricas puede tener efectos indebidos debido a la contención de bloqueo de rosca.

## Grabación de múltiples métricas

Si está registrando varias métricas de una sola vez, para reducir la necesidad de bloquear la rosca, puede utilizar la función:

```
newrelic.agent.record_custom_metrics(metrics, application=None)
```

Esto funciona de la misma manera que la llamada `record_custom_metric()` excepto que se puede proporcionar un iterable en lugar de los argumentos de nombre y valor. El iterable puede ser una lista, tupla u otro objeto iterable, incluida una función generadora. El iterable debe devolver una tupla que consta del nombre y el valor de la métrica personalizada.

```
import psutil
import os
 
def memory_metrics():
    pid = os.getpid()
    p = psutil.Process(os.getpid())
    m = p.get_memory_info()

    yield ('Custom/Memory/Physical', float(m.rss)/(1024*1024))
    yield ('Custom/Memory/Virtual', float(m.vms)/(1024*1024))
 
application = newrelic.agent.register_application()

def report_custom_metrics():
    while True:
        newrelic.agent.record_custom_metrics(memory_metrics(), application)
        time.sleep(60.0)

thread = threading.Thread(target=report_custom_metrics)
thread.setDaemon(True)
thread.start()
```

Cuando se utiliza con un objeto de aplicación, no importa cuántas métricas personalizadas se registren, el bloqueo de hilo solo será necesario realizar una vez por cada llamada.

## Denominación de métrica personalizada

Toda métrica personalizada reportada por el agente Python debe comenzar con el prefijo `Custom/`. Normalmente, esto iría seguido de un nombre de categoría y un segmento de etiqueta. Si no se utiliza la métrica `Custom/` , es posible que la métrica personalizada no esté disponible para su selección en [métricas y eventos](/docs/query-your-data/explore-query-data/data-explorer/introduction-data-explorer).

## Premétrica agregada

Al registrar un conjunto de métricas pasando un iterable sobre el conjunto de métricas disponibles, la misma métrica nombrada puede aparecer más de una vez. En esta situación, el agente agregaría los valores individuales en una muestra.

Aunque es posible, si retener y luego pasar todas las muestras sin procesar individuales para una sola métrica de esta manera no es práctico, entonces la fuente de las métricas puede pre métrica agregada y proporcionar la muestra de datos agregados resultante.

Por lo tanto, en lugar de que el valor sea un valor numérico, se pasaría un diccionario para el valor. Los campos dentro del diccionario serían:

* `count`
* `total`
* `min`
* `max`
* `sum_of_squares`

Una implementación de una clase auxiliar que podría utilizar para realizar la agregación de una única métrica es:

```
class Stats(dict):

    def __init__(self, count=0, total=0.0, min=0.0, max=0.0, sum_of_squares=0.0):
        self.count = count
        self.total = total
        self.min = min
        self.max = max
        self.sum_of_squares = sum_of_squares

    def __setattr__(self, name, value):
        self[name] = value

    def __getattr__(self, name):
        return self[name]

    def merge_stats(self, other):
        self.total += other.total
        self.min = self.count and min(self.min, other.min) or other.min
        self.max = max(self.max, other.max)
        self.sum_of_squares += other.sum_of_squares
        self.count += other.count

    def merge_value(self, value):
        self.total += value
        self.min = self.count and min(self.min, value) or value
        self.max = max(self.max, value)
        self.sum_of_squares += value <DNT>** 2
        self.count += 1
```

Esta clase es en sí misma un diccionario y, por lo tanto, se puede pasar una instancia de ella directamente como valor.

Entonces esto podría usarse como:

```
application = newrelic.agent.register_application()

def sample_value():
    return ...

def report_custom_metrics():
    count = 0
    stats = Stats()

    while True:
        count += 1

        stats.merge_value(sample_value())

        if count % 60 == 0:
            newrelic.agent.record_custom_metric('Custom/Value', stats, application)
            stats = Stats()

        time.sleep(1.0)

thread = threading.Thread(target=report_custom_metrics)
thread.setDaemon(True)
thread.start()
```

## Fuentes de datos métricas personalizadas

Las API de llamada `record_custom_metric()` y `record_custom_metrics()` aún requieren una acción explícita de su parte para enviar métrica personalizada al agente.

Sin embargo, enviar datos al agente, especialmente si se realiza desde un hilo en segundo plano y en un intervalo de 60 segundos, puede resultar problemático. Esto se debe a que cuando se envían los datos, es posible que no se sincronicen con precisión con el momento en que el agente informa los datos al recolector de datos.

Si un hilo en segundo plano fue pre métricamente agregado durante un período de 60 segundos y luego los registró, si eso cae cerca del momento en que el agente está reportando datos, podría ocurrir justo antes o justo después de que el agente reporte los datos. Por lo tanto, esta falta de sincronización en el tiempo podría resultar en que no se reporte ninguna métrica para esa muestra en un ciclo de cosecha y dos en el siguiente, mientras que la intención sería que haya una por ciclo de cosecha.

La solución a esto es que el agente obtenga la métrica personalizada del productor como parte del proceso de reporte de datos para garantizar que se reporten de inmediato y se sincronicen con el ciclo de cosecha.

La fuente de dicha métrica en esta API de estilo pull se denomina fuente de datos métrica.

## Registrar una fuente de datos

La función API para registrar una fuente de datos métrica es:

```
newrelic.agent.register_data_source(source, application=None, name=None, settings=None, **</DNT>properties)
```

Debido a los diferentes requisitos sobre cómo debe producirse la métrica personalizada, hay varias formas diferentes de implementar la fuente de datos.

El tipo más simple de fuente de datos es aquel que proporciona una métrica medidora. Es aquel en el que algún valor en ese momento particular es relevante y lo que ha sucedido históricamente no importa.

```
import psutil
import os

@newrelic.agent.data_source_generator(name='Memory Usage')
def memory_metrics():
    pid = os.getpid()
    p = psutil.Process(os.getpid())
    m = p.get_memory_info()
    yield ('Custom/Memory/Physical', float(m.rss)/(1024*1024))
    yield ('Custom/Memory/Virtual', float(m.vms)/(1024*1024))
 
newrelic.agent.register_data_source(memory_metrics)
```

El decorador utilizado aquí es:

```
newrelic.agent.data_source_generator(name=None, **properties)
```

Es específicamente para envolver una función generadora o una función que de otro modo devuelve un iterable cuando se llama.

El nombre al registrar una fuente de datos es opcional. Existe principalmente para que, al registrar errores, el mensaje pueda dar un nombre más reconocible a la fuente de datos. Si el nombre no se pasa a `register_data_source()`, se utilizará en su lugar cualquier nombre asociado con la fuente de datos real que utilice el decorador, o el nombre de la función si la fuente de datos en sí no tiene nombre.

Si no se proporciona un objeto de aplicación al registrar una fuente de datos, entonces la fuente de datos se asociará automáticamente con todas las aplicaciones para las cuales el agente reporta datos en ese proceso. Si se proporciona una aplicación, la fuente de datos solo se asociará con esa aplicación específica.

Ya sea que una fuente de datos se registre explícitamente en una aplicación o se aplique a todas las aplicaciones, el agente primero debe registrarse para esa aplicación. Esto normalmente sucedería si se utiliza una fuente de datos en un proceso de aplicación web existente que se está monitoreando. Sin embargo, si está utilizando una fuente de datos en un programa independiente para informar solo métrica personalizada, aún debe asegurarse de que se use la llamada API `register_application()` si es necesario para forzar el registro del agente para una aplicación antes de que se recopilen datos. .

## Inicialización de una fuente de datos

Aunque el decorador ofrece la posibilidad de nombrar una fuente de datos, la razón más importante para utilizarlo es que oculta la complejidad de una secuencia de pasos de configuración para ejecutar una fuente de datos. La secuencia de estos pasos es:

1. La fuente de datos se inicializa y se le pasa un diccionario que contiene cualquier configuración para configurarla para que se ejecute de una manera particular.
2. Al inicializarse, la fuente de datos devuelve un diccionario de propiedades que describen la fuente de datos. Esto incluye una referencia a una función de fábrica para crear una instancia específica del proveedor de fuente de datos.
3. Luego se crea una instancia del proveedor de fuente de datos para un consumidor (aplicación) específico llamando a la fábrica. A la función de fábrica se le pasa un diccionario que describe el entorno en el que se ejecuta, incluido el nombre del consumidor.

Reescribiendo el ejemplo anterior para no depender del decorador, tendríamos:

```
import os
import psutil
 
def memory_metrics_data_source(settings):
    def memory_metrics():
        pid = os.getpid()
        p = psutil.Process(os.getpid())
        m = p.get_memory_info()
        yield ('Custom/Memory/Physical', float(m.rss)/(1024*1024))
        yield ('Custom/Memory/Virtual', float(m.vms)/(1024*1024))

    def memory_metrics_factory(environ):
        return memory_metrics
 
    properties = {}
    properties['name'] = 'Memory Usage'
    properties['factory'] = memory_metrics_factory
 
    return properties
 
newrelic.agent.register_data_source(memory_metrics_data_source)
```

El propósito del protocolo subyacente más complejo es proporcionar suficientes puntos de enlace para inicializar adecuadamente las fuentes de datos y personalizarlas en función de esa configuración y las características específicas del consumidor.

## Instancia de una fuente de datos

No fue necesario hacer nada más en el ejemplo anterior porque se estaban devolviendo los medidores métricos, a los que no les importa la última vez que se generaron. Cuando una métrica refleja algo que sucede a lo largo del tiempo y, por lo tanto, necesita conservar algún estado, necesitamos la capacidad de poder crear una instancia de la fuente de datos.

Por lo tanto, la función de fábrica brinda la capacidad de crear una instancia de una fuente de datos para cada aplicación contra la cual se informan métricas.

Se permite una instancia de la fuente de datos por aplicación en lugar de una por proceso, porque los tiempos de inicio y finalización del ciclo de recolección para diferentes aplicaciones pueden ser diferentes. Si en este escenario solo hubiera uno por proceso y la métrica tuviera conexión con la duración del ciclo de cosecha, entonces las métricas resultantes no serían correctas para cada aplicación. Por lo tanto, se proporciona la capacidad de que una instancia de origen de datos sea específica de la aplicación.

Al utilizar funciones anidadas como las anteriores, una fuente de datos que necesita mantener el estado podría escribirse como.

```
import os
import time
import multiprocessing
 
@newrelic.agent.data_source_factory(name='CPU Usage')
def cpu_metrics_data_source(settings, environ):
    state = {}
    state['last_timestamp'] = time.time()
    state['times'] = os.times()

    def cpu_metrics():
        now = time.time()
        new_times = os.times()
        elapsed_time = now - state['last_timestamp']
        user_time = new_times[0] - state['times'][0]
        utilization = user_time / (elapsed_time*multiprocessing.cpu_count())
        state['last_timestamp'] = now
        state['times'] = new_times

        yield ('Custom/CPU/User Time', user_time)
        yield ('Custom/CPU/User/Utilization', utilization)

    return cpu_metrics
 
newrelic.agent.register_data_source(cpu_metrics_data_source)
```

El decorador utilizado aquí es:

```
newrelic.agent.data_source_factory(name=None, **properties)
```

En este caso, el decorador está envolviendo una función de fábrica. Debido a que el decorador devuelve automáticamente las propiedades de la fuente de datos cuando es necesario, la fábrica toma tanto la configuración como la descripción del entorno en el que se utiliza.

Usar funciones anidadas es un poco mágico y requiere que el código use un diccionario en la stack de la función externa para mantener el estado. La alternativa es implementar la fuente de datos como una clase real con el decorador aplicado a la clase.

```
import os
import time
import multiprocessing
 
@newrelic.agent.data_source_factory(name='CPU Usage')
class CPUMetricsDataSource(object):

    def __init__(self, settings, environ):
        self.last_timestamp = time.time()
        self.times = os.times()

    def __call__(self):
        now = time.time()
        new_times = os.times()
        elapsed_time = now - self.last_timestamp
        user_time = new_times[0] - self.times[0]
        utilization = user_time / (elapsed_time*multiprocessing.cpu_count())
        self.last_timestamp = now
        self.times = new_times

        yield ('Custom/CPU/User Time', user_time)
        yield ('Custom/CPU/User/Utilization', utilization)

newrelic.agent.register_data_source(CPUMetricsDataSource)
```

## Ciclo de vida de una fuente de datos

Aunque una fuente de datos puede generar métricas en cualquier momento, el propio agente no siempre informa métricas para una aplicación. En concreto, sólo comenzará a recopilar métricas y a informarlas una vez que el agente haya logrado registrarse con el recolector de datos para una aplicación específica.

Esta distinción es importante para las fuentes de datos que generan métricas basadas en un período de tiempo. Sería necesario tener métricas producidas únicamente por una fuente de datos para cubrir el período desde el momento en que se produjo el registro, o hasta la última vez que el agente informó las métricas. Si no se hace esto, la métrica reportada no se alineará y, por lo tanto, no será posible garantizar que se correlacionen adecuadamente con la métrica del seguimiento de transacciones web o tareas en segundo plano.

Por este motivo, solo se llamará a la fábrica de una fuente de datos para crear una instancia de la fuente de datos cuando se haya completado el registro para la aplicación y se haya iniciado la recopilación métrica. Esto garantiza que cualquier timestamp de referencia será correcta.

Si se finaliza la ejecución del agente para una aplicación en particular, debido a un reinicio forzado del lado del servidor como resultado de cambios en la configuración del lado del servidor, o debido a fallas sucesivas al informar datos al recolector de datos, entonces se descartará la fuente de datos. Luego se creará una nueva instancia de la fuente de datos cuando el agente haya podido volver a registrarse para la aplicación.

La limpieza correcta de una fuente de datos en este caso dependerá de la destrucción del objeto de la fuente de datos cuando se elimine. Debido a los ciclos de recuento de referencias de objetos, no se puede confiar en esto. También es deseable evitar que una fuente de datos necesite agregar un método `__del__()` para activar acciones de limpieza debido a los problemas que introduce un método `__del__()` en la forma de prevenir la destrucción del símbolo del objeto.

Por este motivo, si una fuente de datos necesita más control sobre la configuración y el cierre, incluida la posibilidad de permanecer persistente en la memoria y no perderse, pero suspender los cálculos de métrica, entonces puede proporcionar métodos `start()` y `stop()` cuando se implementado como una instancia de clase.

```
import os
import time
import multiprocessing

@newrelic.agent.data_source_factory(name='CPU Usage')
class CPUMetricsDataSource(object):

    def __init__(self, settings, environ):
        self.last_timestamp = None
        self.times = None
 
    def start(self):
        self.last_timestamp = time.time()
        self.times = os.times()
 
    def stop(self):
        self.last_timestamp = None
        self.times = None

    def __call__(self):
        if self.times is None:
            return

        now = time.time()
        new_times = os.times()
        elapsed_time = now - self.last_timestamp
        user_time = new_times[0] - self.times[0]
        utilization = user_time / (elapsed_time*multiprocessing.cpu_count())
        self.last_timestamp = now
        self.times = new_times

        yield ('CPU/User Time', user_time)
        yield ('CPU/User/Utilization', utilization)

newrelic.agent.register_data_source(CPUMetricsDataSource)
```

Con los métodos `start()` y `stop()` definidos, la instancia de la fuente de datos no se destruirá al finalizar la ejecución del agente, sino que se mantendrá. En este punto, el agente espera que la fuente de datos se ocupe de la suspensión de cualquier agregación de métricas, descartando cualquier métrica acumulada y asegurándose de que cuando el agente vuelva a registrar la aplicación con el recolector de datos y llame a `start()` nuevamente, solo entonces ¿Se reanudaría el seguimiento de métrica?

## Configurar una fuente de datos

Es posible que las fuentes de datos no siempre estén vinculadas a una fuente de información específica. Puede ser necesario registrar una fuente de datos frente a diferentes fuentes de información subyacentes a partir de las cuales se generan las métricas. En este caso, se pueden pasar configuraciones distintas al registrar una fuente de datos usando la función `register_data_source()` . Cuando se utiliza una factoría de datos, estas configuraciones estarán disponibles cuando se inicialice la fuente de datos.

```
@newrelic.agent.data_source_factory()
class HostMonitorDataSource(object):
 
    def __init__(self, settings, environ):
        self.hostname = settings['hostname']

    def __call__(self):
        ...
 
newrelic.agent.register_data_source(HostMonitorDataSource,
  name='Host Monitor (host-1)', settings=dict(hostname='host-1'))
newrelic.agent.register_data_source(HostMonitorDataSource,
  name='Host Monitor (host-2)', settings=dict(hostname='host-2'))
```

Si la configuración es opcional, la fuente de datos solo debe intentar acceder a la configuración si la opción `settings` no es `None`. Incluso si se le proporciona un diccionario, también debería hacer frente a las configuraciones que faltan en el diccionario.

## Configuración desde el archivo de configuración

Aunque los ejemplos aquí muestran el uso de la llamada API `register_data_source()` , esta no sería la forma normal mediante la cual se registrarían las fuentes de datos. Esta no es la forma preferida ya que requeriría modificaciones en la aplicación para importar el módulo para la fuente de datos y registrarlo.

En cambio, la forma principal de definir e integrar fuentes de datos en una aplicación web de monitor existente sería enumerarlas en el archivo de configuración del agente. Esto implica agregar una sección adicional en el archivo de configuración del agente para cada fuente de datos con prefijo `data-source:`:

```
[data-source:process-info]
enabled = true
function = samplers.process_info:process_info_data_source
```

Si registra una fuente de datos desde el archivo de configuración del agente, no debe realizarse ningún registro separado para la misma fuente de datos utilizando la función `register_data_source()` que aparece en el código de su aplicación o en el módulo que define la fuente de datos. Si lo hay, entonces se terminarían registrando dos instancias de la fuente de datos.

Si es necesario proporcionar configuraciones específicas para una fuente de datos, esto se puede hacer creando una sección separada en el archivo de configuración del agente y haciendo referencia al nombre de la sección en el valor `settings` en la configuración de la fuente de datos.

```
[data-source:host-monitor]
enabled = true
function = samplers.process_info:process_info_data_source
name = Host Monitor (host-1)
settings = host-monitor:host-1

[host-monitor:host-1]
hostname = host-1
```

Como la configuración de la fuente de datos proporcionada a través del archivo de configuración siempre se pasará como valores de cadena, se recomienda que incluso cuando se use `register_data_source()` con el código de la aplicación para registrar una fuente de datos y proporcionar la configuración explícitamente, se utilicen cadenas para configurar los valores. Luego, la fuente de datos debería encargarse de la conversión a un tipo diferente, como un valor numérico o una lista de valores.
