---
title: Mediciones de la máquina virtual (VM) de Ruby
tags:
  - Agents
  - Ruby agent
  - Features
metaDescription: What Ruby VM statistics can be tracked by the New Relic Ruby agent.
freshnessValidatedDate: never
translationType: machine
---

La información valiosa sobre el comportamiento de la máquina virtual Ruby puede ayudarle a comprender y mejorar el rendimiento de su aplicación en su conjunto. New Relic reúne algunas métricas clave que pueden ayudarle a tener una mejor idea de lo que está haciendo su máquina virtual (VM) Ruby. Esto también puede ayudarle a evaluar el impacto de los ajustes en la configuración de la máquina virtual (VM) para mejorar el rendimiento.

## Requerimientos mínimos [#minimum_requirements]

Las colecciones métricas de Ruby máquina virtual (VM) están disponibles en las versiones 3.8.0 o superiores del agente Ruby (aunque las versiones anteriores admitían la recopilación de algunas medidas básicas de recolección de basura).

Además, para poder utilizar esta característica, necesitarás tener una versión de Ruby compatible con CRuby <DNT>**1.9.2 or higher**</DNT>. Las secciones siguientes sobre cada medición individual explican qué versiones de Ruby admiten la recopilación de cada medición.

Por último, para capturar los tiempos de GC, deberá [habilitar GC::Profiler](/docs/ruby/garbage-collection) en su aplicación.

## Visualización de datos de la máquina virtual (VM) de Ruby [#viewing_data]

Para ver datos sobre el rendimiento de su máquina virtual (VM) Ruby. Vaya a <DNT>**[one.newrelic.com > All capabilities](https://one.newrelic.com/all-capabilities) > APM> (select an app) > Monitoring > Ruby VMs**</DNT>.

## Detalles de medición [#measurement_details]

La mayoría de estas métricas ayudan a comprender el comportamiento del recolector de basura de Ruby.

No todas las métricas se pueden recopilar en todas las versiones de Ruby. En general, obtendrás los datos más completos si tienes la versión más reciente de CRuby. La siguiente lista explica exactamente qué está disponible y dónde:

<CollapserGroup>
  <Collapser
    id="object-allocations"
    title="Asignaciones de objetos"
  >
    <DNT>**Available on**</DNT>: CRubí 2.0+

    La cantidad de objetos Ruby asignados en sus procesos. En la UI, esta medición está normalizada por la cantidad de solicitudes, de modo que pueda tener una idea de cuántos objetos se asignan por solicitud.

    Este es un número importante a tener en cuenta, ya que la frecuencia de las asignaciones de objetos es uno de los factores más importantes de la frecuencia con la que debe ejecutarse el recolector de basura de Ruby.

    En CRuby, este valor se deriva de `GC.stat[:total_allocated_object]`.
  </Collapser>

  <Collapser
    id="time-in-garbage-collection"
    title="Tiempo en recolección de basura"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2+, Rubinius 2.x (consulte la nota a continuación sobre el soporte de JRuby)

    La cantidad de tiempo dedicado a la recolección de basura (tanto en las fases de marca como de barrido) en sus procesos Ruby.

    En realidad, el agente Ruby mide este valor de dos maneras diferentes: el tiempo de recolección de basura que se produce en medio del procesamiento de la solicitud y el tiempo total de recolección de basura. El tiempo de recolección de basura que ocurre en medio del procesamiento de la solicitud se presenta como una banda en el gráfico general principal y en los gráficos de desglose para transacciones individuales. El tiempo total de GC como porcentaje del tiempo de reloj se muestra en la pestaña Ruby máquina virtual (VM).

    Esta medida se deriva de `GC::Profiler.total_time`.

    <DNT>**Note**</DNT>: Debe habilitar `GC::Profiler` para obtener esta medida. Para obtener más información, consulte [Instrumentación GC](/docs/ruby/garbage-collection).

    <DNT>**JRuby note**</DNT>: Debido a lo que parece ser [un error](https://github.com/jruby/jruby/issues/1620 "El enlace se abre en una ventana nueva.") en JRuby o en ciertas versiones de JVM, los tiempos de GC pueden estar desviados en un factor de 1000 en JRuby. Por este motivo, actualmente no recomendamos habilitar `GC::Profiler` en JRuby.
  </Collapser>

  <Collapser
    id="frequency-of-garbage-collector-runs"
    title="Frecuencia de ejecuciones del recolector de basura"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2+, JRuby 1.7+, Rubinius 2.x

    ¿Con qué frecuencia el recolector de basura necesita detener su proceso Ruby para poder ejecutarse? En CRuby 2.1+, esto se segmentará en ejecuciones de GC mayores y menores. Este número se presenta en la UI como el número de solicitudes procesadas por ejecución de GC.

    Dependiendo de la versión de Ruby en uso, este valor puede derivarse de `GC.count` o de `GC.stat[:minor_gc_count]` y `GC.stat[:major_gc_count]`.
  </Collapser>

  <Collapser
    id="size-of-the-ruby-heap"
    title="Tamaño del montón de Ruby"
  >
    <DNT>**Available on**</DNT>: CRubí 1.9.2+

    El intérprete de Ruby almacena objetos en un _montón_, y cada objeto ocupa una única _ranura del montón_. A medida que las ranuras dentro del montón se llenan de objetos, la máquina virtual (VM) Ruby ampliará el montón según sea necesario.

    El agente Ruby mide periódicamente tanto el número de objetos activos en el montón como el número de espacios de montón desocupados.

    En términos generales, cuantos más objetos haya en el montón, más tiempo llevará cada ejecución de GC (ya que potencialmente se deben examinar todos los objetos del montón). Más objetos en el montón también se correlaciona con un mayor uso de memoria para su aplicación.

    Este valor se deriva de `GC.stat[:heap_live_slot]` o `GC.stat[:heap_live_num]` y `GC.stat[:heap_free_slot]` o `GC.stat[:heap_free_num]`.
  </Collapser>

  <Collapser
    id="memory-usage"
    title="Uso de memoria"
  >
    <DNT>**Available on**</DNT>: Cualquier versión de Ruby

    Esta medida muestra el uso de memoria (tamaño del conjunto residente) de sus procesos Ruby, presentado como el tamaño promedio por instancia (proceso). Mantener el uso de la memoria bajo control es una consideración importante al ajustar la configuración de su máquina virtual (VM) Ruby. Si crece demasiado, puede hacer que la máquina host comience a paginar en el disco o toparse con los límites de memoria impuestos por el software.

    En hosts Linux, esto se deriva del campo `VmRSS` de `/proc/PID/status`.
  </Collapser>

  <Collapser
    id="method-cache-invalidation-rate"
    title="Tasa de invalidación de caché de método"
  >
    <DNT>**Available on**</DNT>: CRubí 2.1+

    Cada vez que se invoca un método en un objeto, Ruby debe localizar la implementación de ese método buscando en la cadena ancestral del objeto. Debido a que estas búsquedas son costosas, la máquina virtual (VM) Ruby almacenará en caché los resultados de estas búsquedas.

    En versiones anteriores de CRuby (anteriores a la 2.0), había un único método caché global y había una variedad de [operaciones](https://github.com/charliesome/charlie.bz/blob/master/posts/things-that-clear-rubys-method-cache.md) que podían causar que todo el caché quedara invalidado.

    En CRuby 2.1 o superior, el caché global se ha dividido en un conjunto de cachés más pequeños por clase, de modo que los cambios que invalidan el caché en una clase no descartan entradas de caché para otras clases no relacionadas.

    Sin embargo, todavía hay algunas operaciones que harán que se invaliden todos los cachés de métodos. El agente Ruby medirá la frecuencia con la que ocurren estas invalidaciones e informará esta medición normalizada en función del número de solicitudes, para darle una idea de cuántas veces por solicitud se invalidan todos los cachés de métodos.

    Para obtener más información, consulte esta [publicación de blog](http://tmm1.net/ruby21-method-cache/ "El enlace se abre en una ventana nueva.") de Aman Gupta.

    Este valor se deriva de `RubyVM.stat[:global_method_state]`.
  </Collapser>

  <Collapser
    id="constant-cache-invalidation-rate"
    title="Tasa de invalidación de caché constante"
  >
    <DNT>**Available on**</DNT>: CRubí 2.1+

    Ruby almacena en caché las ubicaciones de las constantes de una manera similar al comportamiento de almacenamiento en caché del método descrito anteriormente. El agente Ruby también puede medir la cantidad de veces que se invalida la caché constante global e informar esto como una cantidad promedio de invalidaciones por solicitud.

    Este valor se deriva de `RubyVM.stat[:global_constant_state]`.
  </Collapser>

  <Collapser
    id="thread-count"
    title="Número de hilos"
  >
    <DNT>**Available on**</DNT>: CRuby 1.9.2+, JRuby 1.7+, Rubinius 2.x

    El agente de Ruby puede realizar un seguimiento de la cantidad de subprocesos en sus procesos de Ruby. Si está utilizando un servidor web de subprocesos múltiples, esto se puede usar para confirmar que su grupo de subprocesos tiene realmente el tamaño que configuró. También puede resaltar si tienes una fuga de subprocesos (donde estás generando subprocesos que nunca se eliminan).
  </Collapser>
</CollapserGroup>

## Procesos en segundo plano [#background_processes]

De forma predeterminada, los datos de todos los procesos que informan sobre un nombre de aplicación determinado en New Relic se combinarán en la página <DNT>**Ruby VM**</DNT> de la interfaz de usuario. Esto significa que si tiene procesos web y en segundo plano (como Resque, Sidekiq, DelayedJob, etc.) informando en la misma aplicación New Relic, los datos pueden ser confusos.

Hay dos formas de solucionar este problema:

1. Coloque sus procesos web y en segundo plano en una aplicación separada en New Relic, estableciendo la configuración `app_name` o la variable de entorno `NEW_RELIC_APP_NAME` .
2. Deshabilite la colección de Ruby máquina virtual (VM) métrica en sus procesos en segundo plano, configurando `disable_vm_sampler: true` en su archivo de configuración o configurando `NEW_RELIC_DISABLE_VM_SAMPLER=1` en el entorno de su aplicación.

## Recursos de documentación adicionales

Los recursos de documentación adicionales incluyen:

* La [página Resumen de APM](/docs/applications-menu/applications-overview) analiza las características y los detalles detallados en la UI.
* La [página de transacciones](/docs/apm/applications-menu/monitoring/transactions-page) muestra un resumen del rendimiento de su aplicación.
* El recurso [de configuración del agente Ruby](/docs/ruby/ruby-agent-configuration) contiene procedimientos de actualización y valores de archivos de configuración, incluidos generales, proxy, traza de la transacción y recolector de errores.
